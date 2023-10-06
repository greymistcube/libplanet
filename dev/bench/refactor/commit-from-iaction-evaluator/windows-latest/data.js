window.BENCHMARK_DATA = {
  "lastUpdate": 1696560302917,
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "bc7a99c65e5a7aacb0d24f5ac3d72213f300a257",
          "message": "Cleanup",
          "timestamp": "2023-10-05T11:56:09+09:00",
          "tree_id": "06d15ec5d16917f0ef69baf8d4d45a0825f90f34",
          "url": "https://github.com/greymistcube/libplanet/commit/bc7a99c65e5a7aacb0d24f5ac3d72213f300a257"
        },
        "date": 1696475594430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1250682.4561403508,
            "unit": "ns",
            "range": "± 52508.16304839461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2569584.8484848486,
            "unit": "ns",
            "range": "± 167218.6405508695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1948573.6263736263,
            "unit": "ns",
            "range": "± 109068.95457580427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8903292.553191489,
            "unit": "ns",
            "range": "± 587787.5993817489"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48388.76404494382,
            "unit": "ns",
            "range": "± 4244.767854297142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7077723.076923077,
            "unit": "ns",
            "range": "± 28855.9397076279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19445223.076923076,
            "unit": "ns",
            "range": "± 511732.9782671368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47927137.5,
            "unit": "ns",
            "range": "± 916736.5123996462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95356842.85714285,
            "unit": "ns",
            "range": "± 1439510.0046219178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193103214.2857143,
            "unit": "ns",
            "range": "± 2813531.5125457384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4387115.703125,
            "unit": "ns",
            "range": "± 18232.01603427245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400369.4401041667,
            "unit": "ns",
            "range": "± 6474.504891803119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047469.609375,
            "unit": "ns",
            "range": "± 7560.368342836883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622043.7239583335,
            "unit": "ns",
            "range": "± 16252.212380159634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858462.5065104166,
            "unit": "ns",
            "range": "± 9600.068685625554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757022.9417067308,
            "unit": "ns",
            "range": "± 2585.698271830875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047379.104477612,
            "unit": "ns",
            "range": "± 144817.5848786845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3219353.1914893617,
            "unit": "ns",
            "range": "± 119157.29438355993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3884328,
            "unit": "ns",
            "range": "± 94452.23448918507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3756647.727272727,
            "unit": "ns",
            "range": "± 124967.95773249584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10695200,
            "unit": "ns",
            "range": "± 955061.6796145325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239363.33333333334,
            "unit": "ns",
            "range": "± 6056.9984220781735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233931.914893617,
            "unit": "ns",
            "range": "± 15377.655992401315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214487.87878787878,
            "unit": "ns",
            "range": "± 18776.169616152954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4471600,
            "unit": "ns",
            "range": "± 48061.973880952224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4699069.072164948,
            "unit": "ns",
            "range": "± 488545.8359511131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23510.98901098901,
            "unit": "ns",
            "range": "± 1958.426270103997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88423.71134020618,
            "unit": "ns",
            "range": "± 8747.04441982972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66125.64102564103,
            "unit": "ns",
            "range": "± 2290.910867883863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70457.57575757576,
            "unit": "ns",
            "range": "± 7302.223464977467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4744.845360824742,
            "unit": "ns",
            "range": "± 533.926324119376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16297.802197802197,
            "unit": "ns",
            "range": "± 1018.38412551759"
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
          "id": "84e61d82f856a4a630e3d5fc6670cbf94c9739b9",
          "message": "Changelog",
          "timestamp": "2023-10-05T13:15:38+09:00",
          "tree_id": "9797c7c0709f56c9fe5d66d476268229bccec779",
          "url": "https://github.com/greymistcube/libplanet/commit/84e61d82f856a4a630e3d5fc6670cbf94c9739b9"
        },
        "date": 1696480587610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637328.125,
            "unit": "ns",
            "range": "± 150419.85430480563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3189691.489361702,
            "unit": "ns",
            "range": "± 295693.8400162648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2464890.7216494847,
            "unit": "ns",
            "range": "± 206359.96618089985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11320218.681318682,
            "unit": "ns",
            "range": "± 1142742.6550882931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60595.65217391304,
            "unit": "ns",
            "range": "± 12123.185606115452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9563552.631578946,
            "unit": "ns",
            "range": "± 736407.1438109269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26037707.14285714,
            "unit": "ns",
            "range": "± 738219.1779965519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68069761.90476191,
            "unit": "ns",
            "range": "± 1539390.4993458258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137111787.87878788,
            "unit": "ns",
            "range": "± 4075970.709287971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265500956.8627451,
            "unit": "ns",
            "range": "± 10804152.130681148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5684550.837053572,
            "unit": "ns",
            "range": "± 82521.95270697022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930210.2473958333,
            "unit": "ns",
            "range": "± 20957.1073873947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352183.5416666667,
            "unit": "ns",
            "range": "± 12077.772280558851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3418760.9375,
            "unit": "ns",
            "range": "± 38462.43138150655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1074624.3619791667,
            "unit": "ns",
            "range": "± 15632.254426692227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1012979.9088541666,
            "unit": "ns",
            "range": "± 9251.431334484558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3807484.6153846155,
            "unit": "ns",
            "range": "± 213174.08792037496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4057787.0967741935,
            "unit": "ns",
            "range": "± 311546.0389684235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5276059.420289855,
            "unit": "ns",
            "range": "± 253564.23151844848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4905171.276595744,
            "unit": "ns",
            "range": "± 361197.8773268879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13540219.101123596,
            "unit": "ns",
            "range": "± 981547.3299240342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335760.824742268,
            "unit": "ns",
            "range": "± 45101.17689868024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297865.11627906974,
            "unit": "ns",
            "range": "± 18862.578998029625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275286.0215053763,
            "unit": "ns",
            "range": "± 25540.14994081931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4999340,
            "unit": "ns",
            "range": "± 242048.61751979342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4569537.5,
            "unit": "ns",
            "range": "± 196455.45834523498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23086.363636363636,
            "unit": "ns",
            "range": "± 3150.4855242743915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101851.54639175258,
            "unit": "ns",
            "range": "± 12522.48904805921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121862.9213483146,
            "unit": "ns",
            "range": "± 13113.285958960512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117152.17391304347,
            "unit": "ns",
            "range": "± 15924.730082145887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8583.870967741936,
            "unit": "ns",
            "range": "± 1722.1883401132056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20146.428571428572,
            "unit": "ns",
            "range": "± 3202.3126593651755"
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
          "id": "b85f587cff969db689edd9d69ebf9f7214363c21",
          "message": "Updated side-effect warning",
          "timestamp": "2023-10-06T11:24:02+09:00",
          "tree_id": "e62b93d4600152f8c718469f208485d6fc280a77",
          "url": "https://github.com/greymistcube/libplanet/commit/b85f587cff969db689edd9d69ebf9f7214363c21"
        },
        "date": 1696560275741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570527,
            "unit": "ns",
            "range": "± 118236.43053670305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3012901.785714286,
            "unit": "ns",
            "range": "± 128509.62325631696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2337618.085106383,
            "unit": "ns",
            "range": "± 140295.22479229135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10330298.913043479,
            "unit": "ns",
            "range": "± 733079.4128900368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59634.782608695656,
            "unit": "ns",
            "range": "± 3543.929488005928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9109138.888888888,
            "unit": "ns",
            "range": "± 180097.02659102427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24673283.333333332,
            "unit": "ns",
            "range": "± 206050.05937804768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61601592.307692304,
            "unit": "ns",
            "range": "± 336431.4701429759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124207614.28571428,
            "unit": "ns",
            "range": "± 1687647.0734118565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249075807.14285713,
            "unit": "ns",
            "range": "± 2216151.115530737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5515091.861979167,
            "unit": "ns",
            "range": "± 29296.790182563458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1690801.2169471155,
            "unit": "ns",
            "range": "± 20597.321392052116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284110.0130208333,
            "unit": "ns",
            "range": "± 8545.603893530422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163034.207589286,
            "unit": "ns",
            "range": "± 29747.205419967057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008795.8705357143,
            "unit": "ns",
            "range": "± 10948.19938930521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924123.73046875,
            "unit": "ns",
            "range": "± 9235.833439885422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3989850,
            "unit": "ns",
            "range": "± 103625.96199794722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4172595.652173913,
            "unit": "ns",
            "range": "± 87759.46195171968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5044933.333333333,
            "unit": "ns",
            "range": "± 118977.44884360788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4793388.461538462,
            "unit": "ns",
            "range": "± 184499.17014941294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11804408.823529411,
            "unit": "ns",
            "range": "± 335686.9529402827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306863.2653061224,
            "unit": "ns",
            "range": "± 12265.29137236371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291414.51612903224,
            "unit": "ns",
            "range": "± 13183.706371747547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266367.7083333333,
            "unit": "ns",
            "range": "± 15821.377907865952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4908832.258064516,
            "unit": "ns",
            "range": "± 149614.59462475972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4539942.307692308,
            "unit": "ns",
            "range": "± 59775.19638248043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24548.387096774193,
            "unit": "ns",
            "range": "± 2276.2293813131923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105386.45833333333,
            "unit": "ns",
            "range": "± 7521.668624946778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85867.36842105263,
            "unit": "ns",
            "range": "± 6258.465621643219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99329.29292929293,
            "unit": "ns",
            "range": "± 13568.66327109407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6588.421052631579,
            "unit": "ns",
            "range": "± 1153.8891828770136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24801.041666666668,
            "unit": "ns",
            "range": "± 2027.105522227596"
          }
        ]
      }
    ]
  }
}