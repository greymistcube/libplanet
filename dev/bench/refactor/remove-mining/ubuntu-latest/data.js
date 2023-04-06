window.BENCHMARK_DATA = {
  "lastUpdate": 1680757202333,
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
      }
    ]
  }
}