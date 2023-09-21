window.BENCHMARK_DATA = {
  "lastUpdate": 1695273562265,
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
          "id": "978b7684b3d8aad7ba2e6cf8b42c6aec5173e9a6",
          "message": "Refactor TxResult to partially accommodate TxExecution changes",
          "timestamp": "2023-09-21T10:01:32+09:00",
          "tree_id": "185d09749713c4470be4cbde80874b7423ad42e2",
          "url": "https://github.com/greymistcube/libplanet/commit/978b7684b3d8aad7ba2e6cf8b42c6aec5173e9a6"
        },
        "date": 1695259376859,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348794.40625,
            "unit": "ns",
            "range": "± 57174.42967576513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326828.806122449,
            "unit": "ns",
            "range": "± 48488.859167164956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282152.59574468085,
            "unit": "ns",
            "range": "± 34285.710934847746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5133656.275510204,
            "unit": "ns",
            "range": "± 469242.7281094109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4694498.145833333,
            "unit": "ns",
            "range": "± 547807.5746264035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28630.010101010103,
            "unit": "ns",
            "range": "± 9657.034160942543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110168.92857142857,
            "unit": "ns",
            "range": "± 23083.938327017924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104973.46875,
            "unit": "ns",
            "range": "± 21514.592178554987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124058.1914893617,
            "unit": "ns",
            "range": "± 27907.106961734502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6367.46511627907,
            "unit": "ns",
            "range": "± 880.5771462702833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26432.73469387755,
            "unit": "ns",
            "range": "± 9042.204591084595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3718536.8020833335,
            "unit": "ns",
            "range": "± 362556.4999992668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4194309.12371134,
            "unit": "ns",
            "range": "± 381293.5234072536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5331446,
            "unit": "ns",
            "range": "± 430249.06776216323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4597400.102040816,
            "unit": "ns",
            "range": "± 428813.5162107903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7819020.978947368,
            "unit": "ns",
            "range": "± 525559.732854937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1456942.268041237,
            "unit": "ns",
            "range": "± 217296.9102944419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2959099.861702128,
            "unit": "ns",
            "range": "± 365594.7374670542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2133071.5483870967,
            "unit": "ns",
            "range": "± 269470.55455513194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7708130.739583333,
            "unit": "ns",
            "range": "± 743336.8516843241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62461.24742268041,
            "unit": "ns",
            "range": "± 13521.56016410376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8980568.947916666,
            "unit": "ns",
            "range": "± 841269.8791549327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24910941.31958763,
            "unit": "ns",
            "range": "± 2359911.5355519396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69486602.57731959,
            "unit": "ns",
            "range": "± 4413059.128064146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135792192.6969697,
            "unit": "ns",
            "range": "± 8167810.724322312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264004137.11363637,
            "unit": "ns",
            "range": "± 9811764.068426851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5752447.233333333,
            "unit": "ns",
            "range": "± 102156.81589376724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2080338.5055277122,
            "unit": "ns",
            "range": "± 86448.44469371293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286170.4398311493,
            "unit": "ns",
            "range": "± 72861.89289816096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3079538.916332348,
            "unit": "ns",
            "range": "± 153428.5686339631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950886.1104403409,
            "unit": "ns",
            "range": "± 29907.776161663656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962765.4969308035,
            "unit": "ns",
            "range": "± 21865.00336109531"
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
          "id": "5c3dcdbca56d8ea0849555229c722e40f7191971",
          "message": "Clean up TxResult API",
          "timestamp": "2023-09-21T10:30:51+09:00",
          "tree_id": "69e7e3e29ed4c18fb100210f260b49af947be9a8",
          "url": "https://github.com/greymistcube/libplanet/commit/5c3dcdbca56d8ea0849555229c722e40f7191971"
        },
        "date": 1695260782103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275177.7358490566,
            "unit": "ns",
            "range": "± 10513.494138763075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268367.62264150946,
            "unit": "ns",
            "range": "± 10774.051341830545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250166.70512820513,
            "unit": "ns",
            "range": "± 12860.429465177458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4492591.533333333,
            "unit": "ns",
            "range": "± 71682.25688298391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4101989.846153846,
            "unit": "ns",
            "range": "± 57618.19290502806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20819.64893617021,
            "unit": "ns",
            "range": "± 2196.55535659103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84108.65,
            "unit": "ns",
            "range": "± 4417.592411188746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70173.51282051283,
            "unit": "ns",
            "range": "± 2466.2050633118474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86086.8469387755,
            "unit": "ns",
            "range": "± 12324.42847871033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5239.350515463918,
            "unit": "ns",
            "range": "± 713.1284953352422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19451.031578947368,
            "unit": "ns",
            "range": "± 2304.4015397579847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3501629.111111111,
            "unit": "ns",
            "range": "± 132209.31219991177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3742266.086956522,
            "unit": "ns",
            "range": "± 94529.56419021562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4293737.933333334,
            "unit": "ns",
            "range": "± 76920.5824243111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3996629.4444444445,
            "unit": "ns",
            "range": "± 111628.96550293929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6181185.153846154,
            "unit": "ns",
            "range": "± 75693.39706544881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479416.574468085,
            "unit": "ns",
            "range": "± 95644.63714001393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2695902,
            "unit": "ns",
            "range": "± 88207.15694966514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1884264.223880597,
            "unit": "ns",
            "range": "± 88471.93315547763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6299877.373737373,
            "unit": "ns",
            "range": "± 372884.2808475514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46662.12222222222,
            "unit": "ns",
            "range": "± 2724.772687468999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7960725.857142857,
            "unit": "ns",
            "range": "± 74253.37318197133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22192297,
            "unit": "ns",
            "range": "± 293056.7551808742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55195827.28571428,
            "unit": "ns",
            "range": "± 880523.4731656836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107865956.76923077,
            "unit": "ns",
            "range": "± 794153.0283274705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221776798.05882353,
            "unit": "ns",
            "range": "± 4261941.119148446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5075476.896763393,
            "unit": "ns",
            "range": "± 21296.43251071763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1572974.8587239583,
            "unit": "ns",
            "range": "± 3646.2389666521235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1077279.6165364583,
            "unit": "ns",
            "range": "± 2707.7205454731193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644436.1263020835,
            "unit": "ns",
            "range": "± 3515.709683113173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855347.9673177083,
            "unit": "ns",
            "range": "± 2062.4236588271283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763919.5335036058,
            "unit": "ns",
            "range": "± 1074.8888406396923"
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
          "id": "0061777c899e443bea565131ca708338a14b82fa",
          "message": "Docs",
          "timestamp": "2023-09-21T11:33:06+09:00",
          "tree_id": "d03bd16e3de5b779af2cf2b802fc513e75bc1f22",
          "url": "https://github.com/greymistcube/libplanet/commit/0061777c899e443bea565131ca708338a14b82fa"
        },
        "date": 1695264374688,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274271.7380952381,
            "unit": "ns",
            "range": "± 8225.034755829967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264150.2962962963,
            "unit": "ns",
            "range": "± 10690.307557976848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226978.29268292684,
            "unit": "ns",
            "range": "± 8074.050548652463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4186111.6666666665,
            "unit": "ns",
            "range": "± 28830.055415106217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3850204.846153846,
            "unit": "ns",
            "range": "± 13206.8353567774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19529.808510638297,
            "unit": "ns",
            "range": "± 1618.089536423674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87020.76923076923,
            "unit": "ns",
            "range": "± 4491.757203725818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70388.04,
            "unit": "ns",
            "range": "± 1874.1845444530447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81438.8469387755,
            "unit": "ns",
            "range": "± 10358.573478143791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4760.8247422680415,
            "unit": "ns",
            "range": "± 499.07345422770857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18993.56989247312,
            "unit": "ns",
            "range": "± 1380.61799645201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3368537.9545454546,
            "unit": "ns",
            "range": "± 79814.7681879901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3433434.714285714,
            "unit": "ns",
            "range": "± 97358.67590925953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4177826.5,
            "unit": "ns",
            "range": "± 36386.49107894936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3763336.2352941176,
            "unit": "ns",
            "range": "± 150485.88203875982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6001253.807692308,
            "unit": "ns",
            "range": "± 161717.80256385362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355634.0714285714,
            "unit": "ns",
            "range": "± 105853.48163208435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510493.3703703703,
            "unit": "ns",
            "range": "± 61864.258030196885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1772897.9655172413,
            "unit": "ns",
            "range": "± 96055.77348523945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5625985.09375,
            "unit": "ns",
            "range": "± 130614.9861923324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46736.05333333334,
            "unit": "ns",
            "range": "± 2381.4091779433443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7681617.153846154,
            "unit": "ns",
            "range": "± 30495.334262927703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19757002.714285713,
            "unit": "ns",
            "range": "± 69800.02548977776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51136855.78571428,
            "unit": "ns",
            "range": "± 179006.8842836793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101766694.53333333,
            "unit": "ns",
            "range": "± 420932.4080349763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203302146.33333334,
            "unit": "ns",
            "range": "± 484081.96280672296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5142900.995442708,
            "unit": "ns",
            "range": "± 9210.258087719794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574559.9253305288,
            "unit": "ns",
            "range": "± 903.2305933003696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1066987.9388020833,
            "unit": "ns",
            "range": "± 1622.233023124095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543346.3584735575,
            "unit": "ns",
            "range": "± 1899.7742997972603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797059.87109375,
            "unit": "ns",
            "range": "± 1030.1822236892926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719270.7863932292,
            "unit": "ns",
            "range": "± 460.5754562853785"
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
          "id": "9453c71ae5549a178e176912b25ed15e62ee32f4",
          "message": "Changelog",
          "timestamp": "2023-09-21T14:04:46+09:00",
          "tree_id": "0d2b90731f22301d1c2f7ca0cccf215cf3f3bfbf",
          "url": "https://github.com/greymistcube/libplanet/commit/9453c71ae5549a178e176912b25ed15e62ee32f4"
        },
        "date": 1695273553897,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264051.63157894736,
            "unit": "ns",
            "range": "± 4017.789389570758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257923.3673469388,
            "unit": "ns",
            "range": "± 10154.917437080006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226846.0588235294,
            "unit": "ns",
            "range": "± 4031.3021542453907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4184682.214285714,
            "unit": "ns",
            "range": "± 28539.952027285894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3840555.214285714,
            "unit": "ns",
            "range": "± 21848.12155691958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18296.7311827957,
            "unit": "ns",
            "range": "± 1753.0278473183434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81673.16176470589,
            "unit": "ns",
            "range": "± 3860.612520461372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69292.14814814815,
            "unit": "ns",
            "range": "± 1882.8491851794859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76880.88541666667,
            "unit": "ns",
            "range": "± 11427.712926657761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5007.19587628866,
            "unit": "ns",
            "range": "± 540.094313507204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17897.876288659794,
            "unit": "ns",
            "range": "± 1526.6670141311372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3185241.936170213,
            "unit": "ns",
            "range": "± 111112.06567527342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3396237.913043478,
            "unit": "ns",
            "range": "± 79551.43768251917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4151682.4615384615,
            "unit": "ns",
            "range": "± 100705.46817536009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3684024.4,
            "unit": "ns",
            "range": "± 61093.695561817185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5908000.041666667,
            "unit": "ns",
            "range": "± 149076.0981578023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310156.5520833333,
            "unit": "ns",
            "range": "± 89812.9879489211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498404.85,
            "unit": "ns",
            "range": "± 55481.077282709644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1733819.242105263,
            "unit": "ns",
            "range": "± 102813.6827315496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5489599.291666667,
            "unit": "ns",
            "range": "± 132027.2948658984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46795.74324324324,
            "unit": "ns",
            "range": "± 2358.970271409133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7600598.153846154,
            "unit": "ns",
            "range": "± 23897.925272033393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19417091.266666666,
            "unit": "ns",
            "range": "± 149344.90074295743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49357031.266666666,
            "unit": "ns",
            "range": "± 412081.60165545344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99822131.26666667,
            "unit": "ns",
            "range": "± 552661.6420639133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200483105.2,
            "unit": "ns",
            "range": "± 944795.5779793395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4942625.881009615,
            "unit": "ns",
            "range": "± 7272.760711582764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582110.782356771,
            "unit": "ns",
            "range": "± 2667.5241812559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1064163.0106026786,
            "unit": "ns",
            "range": "± 479.5872614199528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2533014.3079927885,
            "unit": "ns",
            "range": "± 807.7861813470213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800129.3473958333,
            "unit": "ns",
            "range": "± 5482.945362322091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733041.3998046875,
            "unit": "ns",
            "range": "± 1005.4547506692047"
          }
        ]
      }
    ]
  }
}