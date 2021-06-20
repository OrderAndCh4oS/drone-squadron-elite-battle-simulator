const playerSquadrons = [
    '1_squadron_ooU8CrAGL3ASBUMaAhfB3R9a5T3m4V6TEVVDzmiYoMmCGXwvhJo.json',
    '2_squadron_ooa8PHz6zA8toZ4FBac7H972oupjbSpq8SQGFTaMuDL3dXQb2q7.json',
    '3_squadron_opW8eZwer244UHaYBtPNEWz6LLNfrpyjZNcu9GTJMHuHqEb7SL1.json',
    '4_squadron_oneZnunCguSKwZMeN7TKmvsxQ1ZzyeHojuiQsSJycFnfEkrWbuj.json',
    '5_squadron_opaWJPFcyqQUpk2JdUaG3ry8C5gkJHMo97PSS6tZFk9Skrcidfg.json',
    '6_squadron_oobGxJDksDQZqGkcHcVRajzmAu8DDoEix7i2fXBchdAAh5XAdsp.json',
    '7_squadron_opCby8nsd2jxF3SFrjVMUfdenNMP3dVEF1mvLvi3rCr5saUErNp.json',
    '8_squadron_opD9PnSLY9b5Eqe1r5cNAFVGA3Xt1FXviQArnZ3Z7AzN9qdrFoV.json',
    '9_squadron_oo3o7GRmekzo153w2zLN9TyMZsTUJEiBrwkKuNE2em85f6unFEP.json',
    '10_squadron_onzFVkvDf5feHKrvY1fwga3vr9YTAcUdb2aJYwuHfuGCRnZiRBH.json',
    '11_squadron_oomLi3xMVkV3ZpZBQHwoK1yN2ayBuRpQRsLU7Y98sXukQ89QKD6.json',
    '12_squadron_op7CfeSWtZvHut2H33D18TRkxJXywSiGRYPeHBUTc8pwoJUpipM.json',
    '13_squadron_onktvWNLMWiTYsDtAze9z2NzGoTRuu98homJGvLgceygE14TLqG.json',
    '14_squadron_ooE6Te1Cuh9Q9NPv4W5aJURRcWoNYjf9JUNDvVKLw8s8nJRakoK.json',
    '15_squadron_ooE6Te1Cuh9Q9NPv4W5aJURRcWoNYjf9JUNDvVKLw8s8nJRakoK_2.json',
    '16_squadron_onhzEL2sG9hWM5y1YhMQroSicBWiMSqFsD76MtTRiqeq283JyLZ.json',
    '18_squadron_opFcVfcjDULwYFXyF6f5fDq5jtuhw4vz2bNYn9EEhJ9h5SaNgNt.json',
    '17_squadron_oowZsif3iKoLjRrrcBRShhbb7YusonukjSKA3n5EMaJNrrVSc2v.json',
    '19_squadron_onoYGs95ASAShzKK4Gg2fr2RZrton1dU2a1qHB84ajwXGCX1tEP.json',
    '20_squadron_onnuFbYfVE8V8rrpJA6dsnNVNx5khtpGSH9AG65PZJQELa1HSKY.json',
    '21_squadron_ooBfZ7jw2GBy9tLn7LgJSR4aDJzBK6gRSD1TFm7uSaB3HzfT6ck.json',
    '22_squadron_onkaoQYDQbCTyXsPZn6inqEvuG9CGCkgcpRTPXmzEsTT7KzgUdZ.json',
    '23_squadron_oo1xZYiujpCp11QpiTeoP9u1qmNesJEkSsQrDu6QWKe4n4GJDQh.json',
    '24_squadron_opCYMAzpWkYsNCzGHeDfSRzeyyctFNCqNzTUkJiLEtNGqyJHgdH.json',
    '25_squadron_op7i9ffN57Y73WpbpsoFUkNYn9V95VQCBd3WL76gxREArAnhFfH.json',
    '26_squadron_ooucvC42egb4B3UjoUUmVJvssbcUfpzwwKXU7c9VxfBrh4KTTL9.json',
    '27_squadron_ookH7Yy279PWSuC6ZuUQvgFA6e76Kmub2mFHMg7CHZTP3CoA5y7.json',
    '28_squadron_ooKNGBWRhtqpBY6SBhAwNFShusmoAi5uZ9txc9jJMzbkvzfqF9M.json',
    '29_squadron_op46GHGnfhoWpK4JDqPqxX35EV22T6bawRobxX6CcirnFfKKvED.json',
    '30_squadron_opDVjVpVF2zmhLK1BRca3MLgM3CcRodrVGmMe7sg8iB2ENFWYcM.json',
    '31_squadron_ooqzMn5bPFMXF1f6ymaxDnXUcQMhU4v6mLc6gv38pFrYeDcRysC.json',
    '32_squadron_opRSNtzQERYoZhr5CUSBXQMZKYogcDNStFGAGqmmShR4z2JGMYq.json',
    '33_squadron_op2CZQuAxuxhACnF9AbC9YeYgrQcuSqJ1c2wLFHWdv1vPWwbsre.json',
    '34_squadron_opMxvqtjzVxUMC5mfUxtHFwCXouUPpKYXVGEf3BxYyPYUQT6768.json',
    '35_squadron_ooRDCkJWtXjwB8JE926SFUeNVbhPuyREK14VhzFKG6dTKJoLUov.json',
    '36_squadron_oooxtAk9s4PWy3iGarc59oD92sxVw1KCxFW7mZEWZXoQu95b97x.json',
    '37_squadron_op9hpFDRDtAnAk8VkWk2pPaXLiSaY86qJpfab74ZVwP1UFNT3Jm.json',
    '38_squadron_onoaiH49xwNVM77M7AGggaHUPcjE6gtf3K6Fr2ukkeYgSzvHwmF.json',
    '39_squadron_oozhTEiGs2NHNNW3fsv6s8vqYjKeQK1ySu7eqSJ49JY6wbRX952.json',
    '40_squadron_oozhTEiGs2NHNNW3fsv6s8vqYjKeQK1ySu7eqSJ49JY6wbRX952_2.json',
    '41_squadron_oozhTEiGs2NHNNW3fsv6s8vqYjKeQK1ySu7eqSJ49JY6wbRX952_3.json',
    '42_squadron_ooR8jK8UAceE6MKoXBDfmbym6kZtBfETqaMwTrpYBQWfiA6Kh2N.json',
    '43_squadron_op7r3jjBvuUJCXKxY35SkgrdJewi5craNpLXwF865A3icaNdGRC.json',
    '44_squadron_opWrvQC396L7k8N1Pj8PboUtDd9k6shtJNJmtuyY5U8uKg8edHT.json',
    '45_squadron_onofUNa1XAeDGbw3d84x97xQZ9ypUWPtfuaif5RDCdVng1KgXKV.json',
    '46_squadron_opVFRcGfRz84oQ8aJNNBs6qFsrY48j8LKkSxncwfyidmUJ4h9b6.json',
    '47_squadron_opVFRcGfRz84oQ8aJNNBs6qFsrY48j8LKkSxncwfyidmUJ4h9b6_2.json',
    '48_squadron_oneTCoDq5bu5mgcAzVZg3Ya6s66U8egJZ3DFYvjkFE7FzSPUwTh.json',
    '49_squadron_ookrw5TZNKfYa96EiSnHB3mnYMt2M6YabhC4PJ27MjBcanZrBoZ.json',
    '50_squadron_ooTswNdbyrjHZQ8BbzB4Y465jCbkeqcGkd3Fie2veLBD2stsbE5.json',
    '51_squadron_opUwpPjamEe5D1TgBQcptRNLcRKoQwNJbvwjHm97jSigJayDHbv.json',
    '52_squadron_opUwpPjamEe5D1TgBQcptRNLcRKoQwNJbvwjHm97jSigJayDHbv_2.json',
    '53_squadron_opUwpPjamEe5D1TgBQcptRNLcRKoQwNJbvwjHm97jSigJayDHbv_3.json',
    '54_squadron_oodUa4mqJgEavWh8cztcL9DztguWmBdXm6fALHDEftFteNBqnjC.json',
    '55_squadron_oodUa4mqJgEavWh8cztcL9DztguWmBdXm6fALHDEftFteNBqnjC_2.json',
    '56_squadron_ooiQEnSBj3Y7ULvXK9hmTp1ZSU8pUHeDRg1EME4iHFzPR1Qntd9.json',
    '57_squadron_oofazm4ha4yz36mdKnL5D8WSbgAooSynyYf2gm46pCpGXuWZ9Vx.json',
    '58_squadron_ooCBsk4fBnAiUGBH7yn69nYUvNKqoHfWvk7DxzUttYF9Y1rMqWK.json',
    '59_squadron_oo5gE2wtQn22VH4tJxNgGFwGoizt1G2qEUXMnfRhZDUUsHGE1Xk.json',
    '60_squadron_oo5gE2wtQn22VH4tJxNgGFwGoizt1G2qEUXMnfRhZDUUsHGE1Xk_2.json',
    '61_squadron_oo5gE2wtQn22VH4tJxNgGFwGoizt1G2qEUXMnfRhZDUUsHGE1Xk_3.json',
    '62_squadron_ooe12bY28vXxjgsJ9BfHtAxPG9MMDA2H6zuPHFXbg5AAL9Pviu2.json',
    '63_squadron_op5osbkMxU2cjHFh2F8nTk7b5v4KhXdYfUoSdCA6vW98tHbVRP9.json',
    '64_squadron_op5osbkMxU2cjHFh2F8nTk7b5v4KhXdYfUoSdCA6vW98tHbVRP9_2.json',
    '65_squadron_op5osbkMxU2cjHFh2F8nTk7b5v4KhXdYfUoSdCA6vW98tHbVRP9_3.json',
    '66_squadron_ooXXsQgkjUaQz8TgXU4MxR57dVrmY6eR4UEYpAfFMcckKSbxbZv.json',
    '67_squadron_ooWz7iE2D8MBYnVMUX5JPfbRyPrsyTXskyM3aVv5HkDda8ytPdT.json',
    '68_squadron_ooWz7iE2D8MBYnVMUX5JPfbRyPrsyTXskyM3aVv5HkDda8ytPdT_2.json',
    '69_squadron_opEPFzsSY4dT7UvauQK2U56wFLng6tbFgFNBF4yZ1TGJij5ncMQ.json',
    '70_squadron_ontsB16djrtJJUAEFozNG3AsV3bdnVXQTwCtK37zVk7toZvG2V7.json',
    '71_squadron_oo2kRkwStanekbDpTwoj3knx5hSXVnBnxrh93Q5p5yZ3P2r2VLv.json',
    '72_squadron_ooCXog4hf4wTpsVm6TRWeAC8ADr6BiNCamWgXDqbuNYeRMVmvoL.json',
    '73_squadron_ooCXog4hf4wTpsVm6TRWeAC8ADr6BiNCamWgXDqbuNYeRMVmvoL_2.json',
    '74_squadron_onr4j9mRmJ2EDUh4crpeezV79VQtqjTnRJP9noQ185gXjuUbr4b.json',
    '75_squadron_opNRyCHkaCeWG229PftNs1CKg4jaL9kipQHLq9sgd6j2QQBnBfn.json',
    '76_squadron_ooEcpEhaCtatiPdri98nTju4rfCgojticZEdvRhhxipibe5pABm.json',
    '77_squadron_ooEcpEhaCtatiPdri98nTju4rfCgojticZEdvRhhxipibe5pABm_2.json',
    '78_squadron_ooEcpEhaCtatiPdri98nTju4rfCgojticZEdvRhhxipibe5pABm_3.json',
    '79_squadron_ooDwTo88CX9414iE8np22AQX1vu1ucrz55bNpuGmj5HYT7Qc2t5.json',
    '80_squadron_ooW41yEgG6REzh7gJZ2qER2tN9YFckzZKrrW5gdSY2tdwY9t9kt.json',
    '81_squadron_ooW41yEgG6REzh7gJZ2qER2tN9YFckzZKrrW5gdSY2tdwY9t9kt_2.json',
    '82_squadron_ooZpdXfeVkRUej5AYV5s1sH3yxGBzPTXPTWaJeXKbJaSCDzt19S.json',
    '83_squadron_ooJBK1dUUYTWvuomDJbUfjnK33uxScDFodX6kz9A3cKM9vkcXzh.json',
    '84_squadron_ooFbxC66jRfprx1DM2ovsWU5vCC9UPVL5oGXD7DpuQPHsnNeWCD.json',
    '85_squadron_oozDpnFABSpjYAwXsYKz4rAjJ57C1uy5xBfu3NLAtWHMFfLenGf.json',
    '86_squadron_oozDpnFABSpjYAwXsYKz4rAjJ57C1uy5xBfu3NLAtWHMFfLenGf_2.json',
    '87_squadron_oo79MMo3W6KgRSBLn1C6VUQA4DCfcvFAC8RaLWH2KU4u1ixwykk.json',
    '88_squadron_onwEgiwn5KMmZ238zNsLyehJ3fNcyVRmPK6A4ZZqgYB8aj46nYd.json',
    '89_squadron_ooAgZGaeu5wwVdQLSxSEWWQtaBgPWhhFYJbuVfeigBSdmXoghhd.json',
    '90_squadron_opNimZ6ivkYRocwuMCQYa41tSuUMXUc5CqrCAbbfopsuWeQjEz6.json',
    '91_squadron_ooTDmeofAgrfWdM123pRFKvZ5TSqNLJug6XQeWYtzGoNTpeQwbA.json',
    '92_squadron_ooWpFPFKbCJ3Pep7m2D3os4L7tWGc5Ab8YLghGtqoWHEsnCAPBz.json',
    '93_squadron_ons7PaRDbe45ds9sGc5dzSQZ4qXvs2CVVxER11wEVGXXrQcD9gy.json',
    '94_squadron_onh2PuZCdBRae8Dd4eW1m9oaFxqVDsB9G93KURf8YZxohbExwBk.json',
    '95_squadron_oogyCfJTKDrf71ZomEE5os8GMz7mrRjT5YfKRPQMHgqP851Q7ga.json',
    '96_squadron_onjmECzrCMgvm6cDGAmDVam48eDjV4EcDtKCP1qRoELaFaZ8GM4.json',
    '97_squadron_ooSh3oE4bdJrecY9pdQFv1J3AnW5PKNVWph7m312TEYuJ8KjLrK.json',
    '98_squadron_ooePFfiDao4ingVYXLo713LkByaXsxcVVfvCssDD6MeUGvWTcW5.json',
    '99_squadron_oohPMM5wqKxFg4CMmgn5XCthTebPQ71n6kspKSrRRsmnGN9nhBx.json',
    '100_squadron_oosTNuxQw6uCSbHjdSKAjnmkNVpMhVZbwBXGapQ1wYMY5ziR2VZ.json',
    '101_squadron_oozeUb3px2aG618HWQqjfGqRpwMxjzvGrSgK5D5Qidwtkvivo8x.json',
    '102_squadron_ooLzvDjp7M3KgWw7Ua4avKaCv7VcTKe8EGYn2JxkTLSAYopueAT.json',
    '103_squadron_oomYGYBnqGcUR2utBVwrt9xtPm3LjZq3U9qQhYk4jFpZXd98uAx.json',
    '104_squadron_opNDNcqBqmzXcenh1LhGkitV7eU82hq2WLMGj6W6TedMiZhzYzC.json',
    '105_squadron_onpCiLR1tQvCzVWQ6ise7DphkUnYB7x8EHFt17aySs8gCiaEzNb.json',
    '106_squadron_ooqoVaffHZdXC4jiN9U1NbB6anBkLfj29d5o1MmzY65MFxSJdse.json',
    '107_squadron_ongv2wA4gSZRuXLnYDMYknDt3tPFCUt4VUZNiBRxvKBDR4uUFse.json',
    '108_squadron_oo6UY9H6mBsCj7bpYisy1fafZuiUGvJgK6sRsUAUiPY5FUbzAMH.json',
    '109_squadron_ooAa21iPqwKGEExQ3hK9mqELLCp5Cg3mvJ4XnhUgQRfhFW7zsBM.json',
    '110_squadron_ooEGuvFpiZ8rBu4A2jyrPrApGcfErcdpb8o1TPCY29ooTG9ZTzE.json',
    '111_squadron_onsT9RC36QetrjkSBM29EEtZhNG3ADScw7UW5Zt6HTLA9BGUHVU.json',
    '112_squadron_op2okgx9UmjuqZySFVTYiqj857ZGZdqjLFmsK33ds71dYcrht69.json',
    '113_squadron_opTf8wUugRazBDstepp52woq16xPGeuNsrT3vc3c53sjuvRFfoa.json',
    '114_squadron_ookeutv2wDQQTi3skcYf9svJ76axnuKkMM17kZHXCVsnrJoH149.json',
    '115_squadron_opQRGj2JQdKtX351y882zqhqsdGkaLweCJrEzfzAKDYtevywqTZ.json',
    '116_squadron_onwWhF1qhHhboQTm3BXjFzu921ffDBCBUCfbhAJjn4pcmG3GnAj.json',
];

export default playerSquadrons;
