window.BENCHMARK_DATA = {
  "lastUpdate": 1695371772420,
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
          "id": "00fb4dd87d26d008731bfbdbe97a00982680d720",
          "message": "Working",
          "timestamp": "2023-09-22T16:35:38+09:00",
          "tree_id": "208fc59fc38921dd618f815411eb39303f6b3279",
          "url": "https://github.com/greymistcube/libplanet/commit/00fb4dd87d26d008731bfbdbe97a00982680d720"
        },
        "date": 1695371668414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269840.32653061225,
            "unit": "ns",
            "range": "± 10649.165891412487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256991.20512820513,
            "unit": "ns",
            "range": "± 7600.151339142382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223254.47826086957,
            "unit": "ns",
            "range": "± 5623.960258407086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4202500.733333333,
            "unit": "ns",
            "range": "± 36043.591983411796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3876198.466666667,
            "unit": "ns",
            "range": "± 36768.57101591495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19780.884210526317,
            "unit": "ns",
            "range": "± 1595.1945846967737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85247.27272727272,
            "unit": "ns",
            "range": "± 4360.508159777167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68905.625,
            "unit": "ns",
            "range": "± 1271.3956570110922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77112.55102040817,
            "unit": "ns",
            "range": "± 11987.588870592775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4496.134408602151,
            "unit": "ns",
            "range": "± 542.5246294738954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17700.90322580645,
            "unit": "ns",
            "range": "± 1462.380207390589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3245214.277777778,
            "unit": "ns",
            "range": "± 68132.44460072779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3327333.6428571427,
            "unit": "ns",
            "range": "± 31418.281920923644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185531.592592593,
            "unit": "ns",
            "range": "± 116056.64778767414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4015261.2666666666,
            "unit": "ns",
            "range": "± 54975.5714612885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10175322.363636363,
            "unit": "ns",
            "range": "± 382128.4178433902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1252717.0595238095,
            "unit": "ns",
            "range": "± 65266.65543223176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2453903.76,
            "unit": "ns",
            "range": "± 64967.07759786234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1906524.0975609757,
            "unit": "ns",
            "range": "± 99833.4511145796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8358491.342105263,
            "unit": "ns",
            "range": "± 285205.85895637196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46263.753086419754,
            "unit": "ns",
            "range": "± 2443.007918176199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7654353.8,
            "unit": "ns",
            "range": "± 28111.92309628476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19381847.533333335,
            "unit": "ns",
            "range": "± 107498.87108501364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50044102.86666667,
            "unit": "ns",
            "range": "± 407541.4551942392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100596890.14285715,
            "unit": "ns",
            "range": "± 866002.078587118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200133529.6,
            "unit": "ns",
            "range": "± 863924.8948572522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4947335.510416667,
            "unit": "ns",
            "range": "± 13021.181266002894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558398.9609375,
            "unit": "ns",
            "range": "± 10614.915689573994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1084826.3575721155,
            "unit": "ns",
            "range": "± 613.6996182267678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528024.5206473214,
            "unit": "ns",
            "range": "± 4538.61128693094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791315.2848557692,
            "unit": "ns",
            "range": "± 471.28024523709274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737538.5386067708,
            "unit": "ns",
            "range": "± 465.421065047803"
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
          "id": "7d8a429dd1603b6613f5c079c27d5d4f1d16cc5b",
          "message": "Combined triple commit into one",
          "timestamp": "2023-09-22T17:21:17+09:00",
          "tree_id": "5df236a46c788887f276bf6c0ea4acca23c34348",
          "url": "https://github.com/greymistcube/libplanet/commit/7d8a429dd1603b6613f5c079c27d5d4f1d16cc5b"
        },
        "date": 1695371765020,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282729.87272727274,
            "unit": "ns",
            "range": "± 11199.789435941535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271404.8378378378,
            "unit": "ns",
            "range": "± 9077.68131956832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249204.0181818182,
            "unit": "ns",
            "range": "± 10169.43021363703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4538799.6,
            "unit": "ns",
            "range": "± 40224.81920726485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4115406.785714286,
            "unit": "ns",
            "range": "± 65184.375230428646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21894.35789473684,
            "unit": "ns",
            "range": "± 1532.6784017903658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89987.95789473684,
            "unit": "ns",
            "range": "± 5816.333091949442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75956.06521739131,
            "unit": "ns",
            "range": "± 4271.027971082123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80610.39024390244,
            "unit": "ns",
            "range": "± 6742.709459718344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5888.816326530612,
            "unit": "ns",
            "range": "± 847.5333931558105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20596.957446808512,
            "unit": "ns",
            "range": "± 1708.5438176015207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3759807.933333333,
            "unit": "ns",
            "range": "± 61472.80061070757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748672.3,
            "unit": "ns",
            "range": "± 82824.63431415611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4508653.5,
            "unit": "ns",
            "range": "± 102980.54850182553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4401392.3,
            "unit": "ns",
            "range": "± 84253.85858846364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11026053.511627907,
            "unit": "ns",
            "range": "± 404284.4709979756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1430733.8041237113,
            "unit": "ns",
            "range": "± 85035.52492397897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2732060.54,
            "unit": "ns",
            "range": "± 110364.26804371465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119278.5081967213,
            "unit": "ns",
            "range": "± 95574.77679939462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9240229.621621622,
            "unit": "ns",
            "range": "± 304817.3543550622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49800.63736263736,
            "unit": "ns",
            "range": "± 2976.0279699868547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8397240.115384616,
            "unit": "ns",
            "range": "± 221473.01100067736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22741537.866666667,
            "unit": "ns",
            "range": "± 305031.27794372325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57594223.53333333,
            "unit": "ns",
            "range": "± 276137.714434526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114289750.64285715,
            "unit": "ns",
            "range": "± 294841.44282898563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229169714.06666666,
            "unit": "ns",
            "range": "± 591882.7955353837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5035788.063100962,
            "unit": "ns",
            "range": "± 10845.018048350104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1585843.3558872768,
            "unit": "ns",
            "range": "± 1930.4090026029025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1090742.6162760416,
            "unit": "ns",
            "range": "± 810.0011695291148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671877.1609375,
            "unit": "ns",
            "range": "± 6123.339895091849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832164.9948167067,
            "unit": "ns",
            "range": "± 670.1796874405162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761362.8137019231,
            "unit": "ns",
            "range": "± 278.8447380905301"
          }
        ]
      }
    ]
  }
}