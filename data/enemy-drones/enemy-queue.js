const enemyQueue = [
    {
        'id': 99, 'seed': 'd24640be-82d4-4606-b593-57d28c2686db', 'value': '0.591',
        'leader': 'Bathea',
    },
    {'id': 89, 'seed': 'aaa4ff61-e9cb-4b2b-a6e8-3cb8560796dc', 'value': '0.594', 'leader': 'Wabos'},
    {'id': 39, 'seed': 'cbf225a7-7914-4507-bd12-3e6e8a43652e', 'value': '0.599', 'leader': 'Benov'},
    {'id': 27, 'seed': 'af7baf50-086d-4415-ad61-e265857cdb13', 'value': '0.613', 'leader': 'Horus'},
    {
        'id': 92, 'seed': '86ec9f5a-494a-4b97-b354-eb8288e0cb01', 'value': '0.630',
        'leader': 'Wunerth',
    },
    {
        'id': 65, 'seed': 'f5febebf-fa83-46f8-92dc-11ccbe8d1f26', 'value': '0.635',
        'leader': 'Wevis Mk LXXXII',
    },
    {'id': 16, 'seed': 'ae2cd215-ae04-4ea9-92d4-0e24e977f74d', 'value': '0.637', 'leader': 'Yeliv'},
    {'id': 9, 'seed': 'f96f1fe8-1bf2-4146-9792-71f142c180e1', 'value': '0.639', 'leader': 'Jatera'},
    {
        'id': 31, 'seed': 'c3202cb5-958a-4daa-9b55-a522238df9e7', 'value': '0.640',
        'leader': 'Yunope',
    },
    {
        'id': 47, 'seed': 'bf57f769-6232-4005-9110-796d0dd119a1', 'value': '0.640',
        'leader': 'Balara',
    },
    {'id': 5, 'seed': '695b6b9a-9c8c-49be-b7cd-beafa00c8e3a', 'value': '0.642', 'leader': 'Teter'},
    {'id': 50, 'seed': '6ef9ecca-4765-417e-98da-18af0ddc95f1', 'value': '0.645', 'leader': 'Luria'},
    {'id': 54, 'seed': 'b3a2f656-6576-4c92-877b-8f90c5e529c4', 'value': '0.645', 'leader': 'Iunus'},
    {
        'id': 80, 'seed': '5910ac8f-a1b2-4a7c-893f-e3ab15a32ff5', 'value': '0.649',
        'leader': 'Qelara Mk XIX',
    },
    {
        'id': 15, 'seed': 'a9061811-e243-4594-9ae2-9790feac757b', 'value': '0.651',
        'leader': 'Maphus',
    },
    {
        'id': 73, 'seed': '7467c235-2cad-432f-baff-76821e1d1796', 'value': '0.652',
        'leader': 'Iugantu',
    },
    {'id': 67, 'seed': '4fc4abc1-efea-4bae-aafb-6dd488d4efd8', 'value': '0.656', 'leader': 'Sanus'},
    {'id': 29, 'seed': '28ddf04b-9b4c-4795-bb98-44f320870c17', 'value': '0.660', 'leader': 'Zewei'},
    {
        'id': 91, 'seed': '4511a875-11df-4be7-aa0e-1be80b498425', 'value': '0.660',
        'leader': 'Fustea',
    },
    {
        'id': 37, 'seed': '774a2144-6e41-4d00-b997-e761098f1570', 'value': '0.664',
        'leader': 'Iayama Mk LVIII',
    },
    {
        'id': 72, 'seed': '1201ef96-8e55-49cb-b14a-b199f5eadceb', 'value': '0.664',
        'leader': 'Kohines Mk VII',
    },
    {
        'id': 95, 'seed': '84e3160e-c410-4f6b-8315-92b0cd3d56d5', 'value': '0.664',
        'leader': 'Gustea',
    },
    {
        'id': 44, 'seed': 'ac6cf250-6fea-4bed-88b0-36946686141d', 'value': '0.666',
        'leader': 'Ietis v29.91',
    },
    {'id': 4, 'seed': '277e757b-141e-4a6d-937a-ca62984abade', 'value': '0.667', 'leader': 'Ratov'},
    {'id': 70, 'seed': '80893cab-8ba7-43ed-8780-1b6246c96bb7', 'value': '0.668', 'leader': 'Xalia'},
    {'id': 52, 'seed': '31f76dbc-a5d9-4270-bd78-7dd1f7f13972', 'value': '0.669', 'leader': 'Keliv'},
    {
        'id': 11, 'seed': '10f4854f-1dab-45b6-9017-ad5e38f8665f', 'value': '0.670',
        'leader': 'Kunerth',
    },
    {
        'id': 56, 'seed': '15d69732-d847-4933-ae36-93c54e1d7481', 'value': '0.670',
        'leader': 'Derilia',
    },
    {
        'id': 59, 'seed': '7194d85d-0c6b-4d83-85b7-e47270482c65', 'value': '0.673',
        'leader': 'Pazuno',
    },
    {
        'id': 35, 'seed': '8072c649-6734-42de-90e9-6c3038f49903', 'value': '0.680',
        'leader': 'Nuter Mk XVI',
    },
    {
        'id': 1, 'seed': 'b800c21d-0665-4943-8367-bf6804a1af5d', 'value': '0.681',
        'leader': 'Beter Mk XIX',
    },
    {
        'id': 66, 'seed': 'a4780158-b48e-40c6-8aed-04f1ae4e9420', 'value': '0.681',
        'leader': 'Zanus Mk LXXXV',
    },
    {'id': 55, 'seed': '0b83cef3-6834-430f-85fe-d251ef7fa28b', 'value': '0.682', 'leader': 'Xuliv'},
    {
        'id': 32, 'seed': '4363da1a-49ab-4e1a-a2b8-2ecd008bfbe9', 'value': '0.683',
        'leader': 'Xuturn Mk XXV',
    },
    {
        'id': 93, 'seed': '70f7e5cd-e4fa-4d67-8309-1eb399fbdf54', 'value': '0.683',
        'leader': 'Haclite',
    },
    {
        'id': 98, 'seed': 'efcae47b-f68f-465d-bb1a-b5e562a1cda0', 'value': '0.685',
        'leader': 'Xecury',
    },
    {
        'id': 84, 'seed': 'ffe598db-0a74-4f6e-893c-80aa6745a53f', 'value': '0.686',
        'leader': 'Qerilia',
    },
    {'id': 88, 'seed': '15fa4859-1c49-4916-81f6-839aa79c0c8f', 'value': '0.686', 'leader': 'Hutis'},
    {
        'id': 63, 'seed': '81fb15d7-ee8c-4488-877e-0bc818819329', 'value': '0.687',
        'leader': 'Penides',
    },
    {'id': 69, 'seed': 'eef30276-9a5f-43a5-81c0-197f499bf467', 'value': '0.687', 'leader': 'Monus'},
    {
        'id': 40, 'seed': 'bf775b66-adc9-4023-8abb-c23949091cb4', 'value': '0.688',
        'leader': 'Razuno Mk XXXIX',
    },
    {
        'id': 68, 'seed': '0d493d68-483b-42b6-9dff-42e2c1cd71aa', 'value': '0.688',
        'leader': 'Wogawa v48.89',
    },
    {
        'id': 61, 'seed': '34854dd3-29c3-4e3d-b485-669efa30da4e', 'value': '0.692',
        'leader': 'Pegawa',
    },
    {'id': 85, 'seed': '74009c5f-5147-4e93-ac52-af89ce7ebf1a', 'value': '0.694', 'leader': 'Nunus'},
    {
        'id': 96, 'seed': 'dcaea432-65da-4b71-ad4c-ee12623e16b8', 'value': '0.700',
        'leader': 'Sacarro',
    },
    {
        'id': 6, 'seed': 'f59bc0d9-a8d8-49a9-9857-0975a4036dad', 'value': '0.701',
        'leader': 'Mebos v47.59',
    },
    {
        'id': 43, 'seed': 'ebc500d2-e707-41be-baf3-96171fd9d697', 'value': '0.701',
        'leader': 'Gucury Mk XVIII',
    },
    {'id': 57, 'seed': '247ea93d-4034-40bd-8f8d-fa56d3195a9d', 'value': '0.702', 'leader': 'Funus'},
    {
        'id': 64, 'seed': '33d4062b-09e8-4eba-8656-8ad8e49607b5', 'value': '0.703',
        'leader': 'Jatania',
    },
    {'id': 94, 'seed': '847db217-2bb3-4f71-9464-23b82e775772', 'value': '0.705', 'leader': 'Heter'},
    {
        'id': 60, 'seed': '2b310e81-b13c-42c8-aea1-56daeda5f5d2', 'value': '0.706',
        'leader': 'Ruter Mk I',
    },
    {'id': 17, 'seed': '962a9ec6-78e7-4ca6-b37f-b5939e3dfc7e', 'value': '0.707', 'leader': 'Nalea'},
    {
        'id': 51, 'seed': 'fff538c4-4ec0-46c8-9a29-f82be319ebe7', 'value': '0.707',
        'leader': 'Lorilia',
    },
    {'id': 83, 'seed': '69882634-dd70-4662-b960-5c4946fa4f76', 'value': '0.711', 'leader': 'Lelea'},
    {
        'id': 71, 'seed': '129ab9f9-7fd7-41cd-b614-f6eb7abf7aea', 'value': '0.713',
        'leader': 'Lastea',
    },
    {'id': 7, 'seed': 'ea4ef69c-f823-432d-abe6-8d497da6b5cc', 'value': '0.718', 'leader': 'Wuwei'},
    {'id': 25, 'seed': 'b6096902-c58f-4593-95d3-b0583810a7ea', 'value': '0.718', 'leader': 'Xenus'},
    {
        'id': 30, 'seed': '2ad30c33-6563-4e78-bd82-fc947ee14b36', 'value': '0.718',
        'leader': 'Doturn',
    },
    {'id': 2, 'seed': '59f61220-1068-4822-b336-f7aae3f2b6fa', 'value': '0.720', 'leader': 'Xulara'},
    {
        'id': 45, 'seed': '32afbefe-9970-46d2-9504-9664d19d3ef3', 'value': '0.720',
        'leader': 'Pacarro',
    },
    {'id': 79, 'seed': 'd67389fb-da34-404f-97b8-444cdbbe1fe5', 'value': '0.723', 'leader': 'Fuvis'},
    {
        'id': 8, 'seed': '4f267fa5-85ca-44dc-ae0a-07b6d6815ab5', 'value': '0.724',
        'leader': 'Galiv v14.52',
    },
    {'id': 33, 'seed': '452f2adf-4f2d-4de5-a0a7-c0660a432984', 'value': '0.725', 'leader': 'Vanus'},
    {
        'id': 10, 'seed': '1f209dda-de7b-40dc-991e-0d3364e66066', 'value': '0.726',
        'leader': 'Lehines',
    },
    {'id': 48, 'seed': '0d9a1d50-3ae4-4ed4-98e5-80e1eb057354', 'value': '0.729', 'leader': 'Verus'},
    {'id': 36, 'seed': 'ee75a83d-851d-4cd7-abf5-63e1e4a826e1', 'value': '0.731', 'leader': 'Qulea'},
    {'id': 87, 'seed': '22e4b050-3f31-4f48-b6fa-f748a2253e7c', 'value': '0.731', 'leader': 'Kulea'},
    {'id': 19, 'seed': 'ba410eb7-5965-4c92-878d-40a351e952ac', 'value': '0.732', 'leader': 'Huter'},
    {
        'id': 21, 'seed': '8207a3c2-ae7d-4634-9e0e-334ce48cf404', 'value': '0.732',
        'leader': 'Ponope Mk XLII',
    },
    {'id': 28, 'seed': '2b5ef083-9ffe-4e5c-8ffb-0adb10ce4c9b', 'value': '0.735', 'leader': 'Mater'},
    {'id': 46, 'seed': '9b884e6f-6b90-4127-a185-158ecccdc5eb', 'value': '0.735', 'leader': 'Zubos'},
    {
        'id': 62, 'seed': 'd3b40161-c74a-4507-9b19-02ab9a6ab807', 'value': '0.738',
        'leader': 'Togawa v32.47',
    },
    {
        'id': 82, 'seed': '6aa7f16f-f7e2-49d3-9931-e703aa03495f', 'value': '0.743',
        'leader': 'Mutania',
    },
    {
        'id': 22, 'seed': 'd18e4f24-04db-4893-b2f6-0c2790351a91', 'value': '0.746',
        'leader': 'Botania',
    },
    {'id': 53, 'seed': 'ee35e552-984b-489b-a25d-ecc293541893', 'value': '0.746', 'leader': 'Sonus'},
    {
        'id': 20, 'seed': 'f1fdb7eb-cd88-49de-8b2b-53465483a61e', 'value': '0.748',
        'leader': 'Iunov v49.36',
    },
    {
        'id': 26, 'seed': '33c3ac05-d0f0-4638-a3f3-25ff0f381b4f', 'value': '0.749',
        'leader': 'Seyama',
    },
    {
        'id': 14, 'seed': 'f4837d03-c2d4-4bab-ba4c-afcf37af36e3', 'value': '0.752',
        'leader': 'Jotune',
    },
    {
        'id': 18, 'seed': '0526f4ab-ebf6-4389-bca9-5cebb0a34b93', 'value': '0.754',
        'leader': 'Belara',
    },
    {'id': 86, 'seed': 'd4299cb1-06b2-4afd-8111-f183eabae149', 'value': '0.755', 'leader': 'Mowei'},
    {
        'id': 41, 'seed': 'ee93096e-93a3-400c-b85a-0e23851cfb9f', 'value': '0.759',
        'leader': 'Nurus v2.54',
    },
    {
        'id': 38, 'seed': '89a5f46a-a0f6-4d88-b54f-716055352e6a', 'value': '0.762',
        'leader': 'Notera',
    },
    {
        'id': 75, 'seed': 'f8cc6b36-41aa-4d45-b84a-2c7e179a13af', 'value': '0.765',
        'leader': 'Gegantu',
    },
    {'id': 74, 'seed': '4d0c1652-112f-433e-aea7-dc37212a240c', 'value': '0.771', 'leader': 'Lavis'},
    {
        'id': 42, 'seed': 'b3d0e5b3-3567-4e23-8eeb-d3f26c9f7d1e', 'value': '0.775',
        'leader': 'Logawa',
    },
    {
        'id': 78, 'seed': '5fc00d68-c404-41fd-97d7-f01397ee9afc', 'value': '0.776',
        'leader': 'Iuphus v40.3',
    },
    {
        'id': 81, 'seed': 'a7db5ed1-0960-46b3-9dd1-2bfb65e441d8', 'value': '0.780',
        'leader': 'Hetov v6.85',
    },
    {
        'id': 58, 'seed': '60e6b9bf-11ee-45ce-9048-e62b218e5ae4', 'value': '0.783',
        'leader': 'Heturn',
    },
    {'id': 23, 'seed': 'fa3b09f3-4812-4a64-bfb1-eb85fe2097a1', 'value': '0.788', 'leader': 'Juvis'},
    {
        'id': 34, 'seed': '311ecc2a-99e3-4a5c-a686-8b1b80caff28', 'value': '0.796',
        'leader': 'Raturn',
    },
    {
        'id': 76, 'seed': '7f15f8e9-47a2-4cf1-a0e3-e2dcbb2b8e00', 'value': '0.797',
        'leader': 'Feter Mk XX',
    },
    {
        'id': 24, 'seed': 'b15f50f2-19c2-4072-81be-eff7f6cad38a', 'value': '0.801',
        'leader': 'Rethea',
    },
    {
        'id': 77, 'seed': '4cd513b1-ffa7-4b02-ba64-660af6c4ad76', 'value': '0.803',
        'leader': 'Kephus Mk XLV',
    },
    {'id': 13, 'seed': '8416fdbe-2b65-4017-9b03-39c7725ccb49', 'value': '0.805', 'leader': 'Gater'},
    {'id': 49, 'seed': 'ffcfef20-b30f-4254-a8f8-aa5b99e2b48b', 'value': '0.807', 'leader': 'Sawei'},
    {
        'id': 90, 'seed': '05abf4de-a8ef-482a-8fda-349617945ffc', 'value': '0.814',
        'leader': 'Qecury',
    },
    {
        'id': 3, 'seed': '6199c2aa-0dba-43e6-9f07-fc1f67e744cc', 'value': '0.818',
        'leader': 'Bazuno v28.6',
    },
    {
        'id': 12, 'seed': '701cc025-8403-4b86-958c-551e945ed2b4', 'value': '0.821',
        'leader': 'Zustea',
    },
    {
        'id': 97, 'seed': 'c41f304a-f47d-461e-9b35-f24ecc4c0c18', 'value': '0.821',
        'leader': 'Tarus Mk LXXVIII',
    },
    {
        'id': 0, 'seed': 'de185033-3d3b-4e5f-9f8d-5d933e6733e3', 'value': '0.850',
        'leader': 'Rozuno',
    }];
export default enemyQueue;
