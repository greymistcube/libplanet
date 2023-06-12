window.BENCHMARK_DATA = {
  "lastUpdate": 1680757895454,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf92e685aa65475d9195d1a1dd417b9b6f71d853",
          "message": "Merge pull request #3062 from greymistcube/refactor/propose-block\n\n🧹 Remove tx execution update from `ProposeBlock()`",
          "timestamp": "2023-04-05T17:49:00+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/bf92e685aa65475d9195d1a1dd417b9b6f71d853"
        },
        "date": 1680757016957,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7484559.928571428,
            "unit": "ns",
            "range": "± 35446.34631809318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19360791.5,
            "unit": "ns",
            "range": "± 78501.58367118853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49547882.6,
            "unit": "ns",
            "range": "± 223306.41484509895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98442417.13333334,
            "unit": "ns",
            "range": "± 641829.5165230924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198237008.42857143,
            "unit": "ns",
            "range": "± 646785.9948773585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46270.596774193546,
            "unit": "ns",
            "range": "± 1957.2727802692361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1372390.505376344,
            "unit": "ns",
            "range": "± 92978.43530726612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2645802.864864865,
            "unit": "ns",
            "range": "± 88705.84202988681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2227591.391891892,
            "unit": "ns",
            "range": "± 108464.48007297989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5571830.588235294,
            "unit": "ns",
            "range": "± 108242.04326938934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5937071.6015625,
            "unit": "ns",
            "range": "± 16191.02338994943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957014.8878348214,
            "unit": "ns",
            "range": "± 1582.1982563399654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341693.2650669643,
            "unit": "ns",
            "range": "± 2144.1241563813946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2535706.7953125,
            "unit": "ns",
            "range": "± 11788.953102306503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799116.1331129808,
            "unit": "ns",
            "range": "± 974.3053812763218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743141.0829427083,
            "unit": "ns",
            "range": "± 576.510483266259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335435.57446808513,
            "unit": "ns",
            "range": "± 12934.19992776932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268879.36842105264,
            "unit": "ns",
            "range": "± 4788.405605795528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236619.15789473685,
            "unit": "ns",
            "range": "± 4955.436389160651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5604540.8,
            "unit": "ns",
            "range": "± 38148.514283371136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4044124.1428571427,
            "unit": "ns",
            "range": "± 25172.38151643168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18281.936842105264,
            "unit": "ns",
            "range": "± 1428.6648268428835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86855.15584415584,
            "unit": "ns",
            "range": "± 4219.066069843991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79492.82222222222,
            "unit": "ns",
            "range": "± 3035.342217406083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 202399,
            "unit": "ns",
            "range": "± 3593.066014508415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5239.108695652174,
            "unit": "ns",
            "range": "± 421.4090559670345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16306.333333333334,
            "unit": "ns",
            "range": "± 1034.7929884694365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3284373.1363636362,
            "unit": "ns",
            "range": "± 79476.27528975486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3405033.048780488,
            "unit": "ns",
            "range": "± 106567.93892183315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4205187.142857143,
            "unit": "ns",
            "range": "± 41786.51120757868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4364185.714285715,
            "unit": "ns",
            "range": "± 54956.64851418878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7240699.588235294,
            "unit": "ns",
            "range": "± 146282.86927177207"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "2da78731588597800cc25bf5e5ee336ffab1b965",
          "message": "Remove mining",
          "timestamp": "2023-04-06T13:45:24+09:00",
          "tree_id": "c19cda80e6181d02f1edc94274a212e9c9e3677b",
          "url": "https://github.com/greymistcube/libplanet/commit/2da78731588597800cc25bf5e5ee336ffab1b965"
        },
        "date": 1680757193473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4115909.1333333333,
            "unit": "ns",
            "range": "± 50292.81937508812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4391190.8,
            "unit": "ns",
            "range": "± 78517.51786994506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5005638.214285715,
            "unit": "ns",
            "range": "± 54897.868749690475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5367253.590909091,
            "unit": "ns",
            "range": "± 122449.20439169054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8583345,
            "unit": "ns",
            "range": "± 167202.15053521292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9990131.9375,
            "unit": "ns",
            "range": "± 195364.6201202489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26600452.14285714,
            "unit": "ns",
            "range": "± 187906.52334394565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67210618.93333334,
            "unit": "ns",
            "range": "± 650269.5585482187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132629553.4,
            "unit": "ns",
            "range": "± 884906.3474796802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255522441.6,
            "unit": "ns",
            "range": "± 1815563.8567934835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1683960.9318181819,
            "unit": "ns",
            "range": "± 88029.26201557522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3210058.382352941,
            "unit": "ns",
            "range": "± 102395.3591508778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2721054.1923076925,
            "unit": "ns",
            "range": "± 139342.1081932585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6406368,
            "unit": "ns",
            "range": "± 113303.84078536034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57989.90476190476,
            "unit": "ns",
            "range": "± 2527.037815272195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7189245.6734375,
            "unit": "ns",
            "range": "± 25954.415520208207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2194317.982552083,
            "unit": "ns",
            "range": "± 2799.8082289624676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1604836.5682198661,
            "unit": "ns",
            "range": "± 2844.4732239010937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3088650.988020833,
            "unit": "ns",
            "range": "± 1477.8622287622186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991449.3572916667,
            "unit": "ns",
            "range": "± 1203.86578905752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909336.6274088542,
            "unit": "ns",
            "range": "± 458.2350954138441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 403550.875,
            "unit": "ns",
            "range": "± 7673.944669029959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328627.6956521739,
            "unit": "ns",
            "range": "± 8239.511732195071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275004.8461538461,
            "unit": "ns",
            "range": "± 2398.4265969642765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6824493.933333334,
            "unit": "ns",
            "range": "± 48355.51528813391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4910193.642857143,
            "unit": "ns",
            "range": "± 43937.46604963283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24361.134020618556,
            "unit": "ns",
            "range": "± 1962.1318796404523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105243.94736842105,
            "unit": "ns",
            "range": "± 4411.351544654576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96964.47272727273,
            "unit": "ns",
            "range": "± 4106.232971573218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 254729.55,
            "unit": "ns",
            "range": "± 5872.641093956028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7582.618556701031,
            "unit": "ns",
            "range": "± 689.8317192635185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22962.655555555557,
            "unit": "ns",
            "range": "± 1296.7362848260702"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "b7e5a75749ec9fa83b79e02073031e199590c9b9",
          "message": "Additional changelog",
          "timestamp": "2023-04-06T13:53:14+09:00",
          "tree_id": "2f723b6791918fca4e2dd601df3714eeed192361",
          "url": "https://github.com/greymistcube/libplanet/commit/b7e5a75749ec9fa83b79e02073031e199590c9b9"
        },
        "date": 1680757620036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7872020.238095238,
            "unit": "ns",
            "range": "± 284108.18292812764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22022201.214285713,
            "unit": "ns",
            "range": "± 139230.98978326438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54385288.53333333,
            "unit": "ns",
            "range": "± 421183.36059146945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110232537.46666667,
            "unit": "ns",
            "range": "± 817286.5583495412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218742394.93333334,
            "unit": "ns",
            "range": "± 1748201.9045657197"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50839.408602150535,
            "unit": "ns",
            "range": "± 2938.9088341725355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480885.1046511629,
            "unit": "ns",
            "range": "± 79361.69436877615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2667427.5714285714,
            "unit": "ns",
            "range": "± 66876.56279679172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2269303.93877551,
            "unit": "ns",
            "range": "± 133940.938939582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5594474.142857143,
            "unit": "ns",
            "range": "± 214177.80307132282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6162919.099330357,
            "unit": "ns",
            "range": "± 43634.15494758044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849338.81953125,
            "unit": "ns",
            "range": "± 17469.212657879452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351893.9514322917,
            "unit": "ns",
            "range": "± 9909.986160102251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626965.8520833333,
            "unit": "ns",
            "range": "± 2413.444350103509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831805.7003255208,
            "unit": "ns",
            "range": "± 4037.9259543600615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760753.1348307292,
            "unit": "ns",
            "range": "± 1923.4108669933821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335189.347826087,
            "unit": "ns",
            "range": "± 12455.065681110354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279464.3157894737,
            "unit": "ns",
            "range": "± 9607.856813370527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232110.35714285713,
            "unit": "ns",
            "range": "± 2722.0699874330044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5624120.714285715,
            "unit": "ns",
            "range": "± 55574.174460706214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3896807.5384615385,
            "unit": "ns",
            "range": "± 27793.092884789996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19539.606382978724,
            "unit": "ns",
            "range": "± 1681.995641499506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87633.92857142857,
            "unit": "ns",
            "range": "± 5959.654703984254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79627.64893617021,
            "unit": "ns",
            "range": "± 5729.464920328811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 202069.306122449,
            "unit": "ns",
            "range": "± 14920.393566993556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6125.734693877551,
            "unit": "ns",
            "range": "± 969.0888435117689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21005.797872340427,
            "unit": "ns",
            "range": "± 1840.8380663877228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3609990.3333333335,
            "unit": "ns",
            "range": "± 61208.07639013786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3826807.4615384615,
            "unit": "ns",
            "range": "± 57197.307230637154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4222676.647058823,
            "unit": "ns",
            "range": "± 81853.26357646131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4650084.92,
            "unit": "ns",
            "range": "± 186784.42281452898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7515715.6486486485,
            "unit": "ns",
            "range": "± 253940.1492951982"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "01050906a03605f36e1f804d985efea217f19791",
          "message": "Additional changelog",
          "timestamp": "2023-04-06T13:54:21+09:00",
          "tree_id": "486653c5b207b6caa4dcc32c38e8142a14e1ce40",
          "url": "https://github.com/greymistcube/libplanet/commit/01050906a03605f36e1f804d985efea217f19791"
        },
        "date": 1680757887938,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421414.66,
            "unit": "ns",
            "range": "± 371835.47347172763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3680332.95,
            "unit": "ns",
            "range": "± 383958.3495038817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333412.06,
            "unit": "ns",
            "range": "± 413338.7859574568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4585651.292929293,
            "unit": "ns",
            "range": "± 383810.0943213244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8182216.77,
            "unit": "ns",
            "range": "± 727907.6451047597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7803703.7,
            "unit": "ns",
            "range": "± 661937.9890126575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21637293.43,
            "unit": "ns",
            "range": "± 1545134.6367797633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54981064.73,
            "unit": "ns",
            "range": "± 3468098.018075258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110621502.17171717,
            "unit": "ns",
            "range": "± 7635463.673890535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218541027.01,
            "unit": "ns",
            "range": "± 14490860.189564427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471039.313131313,
            "unit": "ns",
            "range": "± 167339.13969538859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947047.3636363638,
            "unit": "ns",
            "range": "± 291081.34684905224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2577239.08,
            "unit": "ns",
            "range": "± 243312.1488762976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6273582.42,
            "unit": "ns",
            "range": "± 529008.1136159621"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53095.32978723404,
            "unit": "ns",
            "range": "± 5483.452225507739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6201421.0361752715,
            "unit": "ns",
            "range": "± 235558.21144539423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929749.0318509615,
            "unit": "ns",
            "range": "± 67088.88902627613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368278.0903320312,
            "unit": "ns",
            "range": "± 24003.61953650473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669222.055908203,
            "unit": "ns",
            "range": "± 51636.109291288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 877165.4510830966,
            "unit": "ns",
            "range": "± 21147.649456305036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785593.6587611607,
            "unit": "ns",
            "range": "± 12040.039336769734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358766.6,
            "unit": "ns",
            "range": "± 36919.816063485676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288415.07,
            "unit": "ns",
            "range": "± 32363.211860449544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257228.37,
            "unit": "ns",
            "range": "± 28153.59212621352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6046131.43,
            "unit": "ns",
            "range": "± 475787.3596443676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4204773.53,
            "unit": "ns",
            "range": "± 344058.025680349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20604.627659574468,
            "unit": "ns",
            "range": "± 2427.2091278244784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100036.65656565657,
            "unit": "ns",
            "range": "± 9170.186415840053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92512.79797979798,
            "unit": "ns",
            "range": "± 9075.430309671832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 208260.97849462365,
            "unit": "ns",
            "range": "± 20042.85078979887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6801.583333333333,
            "unit": "ns",
            "range": "± 778.4276414558108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21441.59375,
            "unit": "ns",
            "range": "± 2123.6316589035323"
          }
        ]
      }
    ]
  }
}