#!/usr/bin/env node
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { fromIni } from '@aws-sdk/credential-provider-ini';
import { STS } from '@aws-sdk/client-sts';
import fetch from 'node-fetch';
import playerSquadrons from './constants/player-squadrons.js';
import { fetchPlayerSquadron } from './api/get-drones.js';
import pad from './helpers.js';

const slugify = str => str.replace(/[^\w\s]/g, '').replace(/\s+/g, '-').toLowerCase();
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const getObjktData = () =>
    fetch('https://api.hicdex.com/v1/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `query ObjktData($addresses: [String!]) {
                hic_et_nunc_token(where: {
                    creator_id: {_in: $addresses},
                    title: {_ilike: "Drone Squadron: Elite #%"},
                    token_holders: {
                        quantity: {_gt: "0"},
                        holder_id: {_neq: "tz1burnburnburnburnburnburnburjAYjjX"},
                    }}, order_by: {title: asc}) {
                    id
                    title
                    token_holders(where: {_not: {holder_id: {_eq: "tz1VgpmwW66LCbskjudK54Zp96vKn2cHjpGN"}}}) {
                        holder_id
                        quantity
                    }
                }
            }`,
            variables: {
                'addresses': ['tz1VgpmwW66LCbskjudK54Zp96vKn2cHjpGN'],
            },
        }),
    });

export async function fetchObjkts() {
    const response = await getObjktData();
    const data = await response.json();
    return data.data.hic_et_nunc_token.map(o => ({id: o.id, number: o.title.match(/#(\d+)/)[0]}));
}

async function assume(sourceCreds, params) {
    const sts = new STS({credentials: sourceCreds});
    const result = await sts.assumeRole(params);
    if(!result.Credentials) {
        throw new Error(
            'unable to assume credentials - empty credential object');
    }
    return {
        accessKeyId: String(result.Credentials.AccessKeyId),
        secretAccessKey: String(result.Credentials.SecretAccessKey),
        sessionToken: result.Credentials.SessionToken,
    };
}

const client = new DynamoDBClient({
    region: 'eu-west-2',
    credentials: fromIni({
        profile: 'oacc',
        roleAssumer: assume,
    }),
});

const docClient = DynamoDBDocument.from(client); // client is DynamoDB client

const squadrons = await Promise.all(
    Array(playerSquadrons.length).fill().map((_, i) => fetchPlayerSquadron(i)));
const objkts = await fetchObjkts();

let i = 0;
for(const squadron of squadrons) {
    i++;
    const sk = `#${pad(i, 4)}`;
    const objkt = objkts.find(o => o.number === sk);
    const objktId = objkt.id;
    try {
        const drones = [...squadron.drones];
        delete squadron.drones;

        const squadronData = {
            type: 'squadron',
            sk,
            objktId,
            ...squadron,
        };
        await docClient.put({
            TableName: 'DbStack-DroneSquadronTable89CD3591-1LWOT2L3AUOKN',
            Item: squadronData,
        });
        await sleep(100)
        for(const drone of drones) {
            const droneData = {
                type: 'drone',
                sk: sk + '_' + slugify(drone.name),
                objktId,
                ...drone,
            };
            await docClient.put({
                TableName: 'DbStack-DroneSquadronTable89CD3591-1LWOT2L3AUOKN',
                Item: droneData,
            });
            await sleep(100)
        }
    } catch(error) {
        console.log('Error:', error);
    } finally {
        console.log('imported:', squadron.leader)
    }
}

