window.BENCHMARK_DATA = {
  "lastUpdate": 1707293352186,
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
          "id": "0260c38d672dc87ffaec6b4432e9da1bae36bfd2",
          "message": "Removed old mock implementation",
          "timestamp": "2024-01-29T15:51:46+09:00",
          "tree_id": "6cc0d42fcbe6db2688a869016e15ade9b9e2573c",
          "url": "https://github.com/greymistcube/libplanet/commit/0260c38d672dc87ffaec6b4432e9da1bae36bfd2"
        },
        "date": 1706511869237,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2457343.5,
            "unit": "ns",
            "range": "± 42522.28779458738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534188.6964285714,
            "unit": "ns",
            "range": "± 108896.44398617174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120745.076923077,
            "unit": "ns",
            "range": "± 30867.37391772943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3268874.3985507246,
            "unit": "ns",
            "range": "± 149160.11952568297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13653184.36516854,
            "unit": "ns",
            "range": "± 929486.6774695907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40313.47311827957,
            "unit": "ns",
            "range": "± 5469.03239512653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006272.0967741936,
            "unit": "ns",
            "range": "± 91529.60390069867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1922369.4102564103,
            "unit": "ns",
            "range": "± 66089.98904313722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1700446.641304348,
            "unit": "ns",
            "range": "± 180651.18318257848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12747208.576470587,
            "unit": "ns",
            "range": "± 873194.8576265422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5728668.2,
            "unit": "ns",
            "range": "± 82080.52290299186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14565594.433333334,
            "unit": "ns",
            "range": "± 121194.89979690133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36529059.2,
            "unit": "ns",
            "range": "± 222668.11754851657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75387738.53846154,
            "unit": "ns",
            "range": "± 439066.8685378146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151049437.56666666,
            "unit": "ns",
            "range": "± 1037212.5746776768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3727833.333533654,
            "unit": "ns",
            "range": "± 25094.299641109217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209845.2842548077,
            "unit": "ns",
            "range": "± 6542.897513786194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776760.7960379465,
            "unit": "ns",
            "range": "± 10073.916311021927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948804.1865885416,
            "unit": "ns",
            "range": "± 20421.441495618317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619557.2118443081,
            "unit": "ns",
            "range": "± 954.8966746490967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565716.1426532452,
            "unit": "ns",
            "range": "± 339.33630191335624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208845.52777777778,
            "unit": "ns",
            "range": "± 9839.11399161848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213201.1914893617,
            "unit": "ns",
            "range": "± 16351.45343267035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171165.38636363635,
            "unit": "ns",
            "range": "± 5844.871447910587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3291747.6153846155,
            "unit": "ns",
            "range": "± 32945.95840802141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863797,
            "unit": "ns",
            "range": "± 28705.629345876692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19181.90404040404,
            "unit": "ns",
            "range": "± 5357.529574459483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79495.78571428571,
            "unit": "ns",
            "range": "± 15062.488919104451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88966.07692307692,
            "unit": "ns",
            "range": "± 981.9611721395829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96105.96875,
            "unit": "ns",
            "range": "± 10843.949423238288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4834.244897959184,
            "unit": "ns",
            "range": "± 1153.6536229192589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23414.469387755104,
            "unit": "ns",
            "range": "± 4140.876520723357"
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
          "id": "4cc06c954011980341cb82e2db6f2cacbfee6131",
          "message": "Changelog",
          "timestamp": "2024-01-29T16:14:56+09:00",
          "tree_id": "f6699468bc0f77065708208c3740c32cef6976ea",
          "url": "https://github.com/greymistcube/libplanet/commit/4cc06c954011980341cb82e2db6f2cacbfee6131"
        },
        "date": 1706513213734,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2547541.55,
            "unit": "ns",
            "range": "± 52050.47034670444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2750442.625,
            "unit": "ns",
            "range": "± 70141.4026593935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3258520.0416666665,
            "unit": "ns",
            "range": "± 84192.04984463596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3312505.2592592593,
            "unit": "ns",
            "range": "± 169723.54166561412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14285659.425287357,
            "unit": "ns",
            "range": "± 925750.2367584199"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42550.26315789474,
            "unit": "ns",
            "range": "± 6219.134437638044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1072865.7765957448,
            "unit": "ns",
            "range": "± 111571.39233609637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2053686.842857143,
            "unit": "ns",
            "range": "± 96625.54802538939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1858982.418367347,
            "unit": "ns",
            "range": "± 204465.90434083613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13163475.622222222,
            "unit": "ns",
            "range": "± 838979.1479889642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5869261.3,
            "unit": "ns",
            "range": "± 77782.86117060565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14703654.42857143,
            "unit": "ns",
            "range": "± 148452.83726164672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37279222.961538464,
            "unit": "ns",
            "range": "± 217811.71191444815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75707337.66666667,
            "unit": "ns",
            "range": "± 532410.59724503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150950364.6153846,
            "unit": "ns",
            "range": "± 1004448.7813170248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3797298.1451822915,
            "unit": "ns",
            "range": "± 18391.002350390616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211583.7182617188,
            "unit": "ns",
            "range": "± 3799.253479807311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768152.2506975447,
            "unit": "ns",
            "range": "± 1822.6550946123741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957691.1570870536,
            "unit": "ns",
            "range": "± 3519.5248293431373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603396.8496907552,
            "unit": "ns",
            "range": "± 804.1925828844825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577203.3123046875,
            "unit": "ns",
            "range": "± 1911.6925187402653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221590.70833333334,
            "unit": "ns",
            "range": "± 8608.122982092129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221147.03535353535,
            "unit": "ns",
            "range": "± 22413.581282435644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176315.35294117648,
            "unit": "ns",
            "range": "± 3537.4145032278952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3269576.5,
            "unit": "ns",
            "range": "± 32466.70281937386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853177.3333333335,
            "unit": "ns",
            "range": "± 31754.028450096277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19663.173469387755,
            "unit": "ns",
            "range": "± 4451.675970218965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84511.5,
            "unit": "ns",
            "range": "± 15884.197545569203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99272.99462365592,
            "unit": "ns",
            "range": "± 7145.687113070762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86338.91237113402,
            "unit": "ns",
            "range": "± 14772.936439900679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6083.255102040816,
            "unit": "ns",
            "range": "± 1892.0578883344851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17336.297872340427,
            "unit": "ns",
            "range": "± 3611.296790225389"
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
          "id": "f4b597edecfacb13f24a121e518d696e3ed95f8d",
          "message": "Docs",
          "timestamp": "2024-01-29T16:25:47+09:00",
          "tree_id": "e10dd81feb732c8dcbeff0e808abdc7ac0cb363d",
          "url": "https://github.com/greymistcube/libplanet/commit/f4b597edecfacb13f24a121e518d696e3ed95f8d"
        },
        "date": 1706513820804,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2316188,
            "unit": "ns",
            "range": "± 50929.56317275598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531776.3571428573,
            "unit": "ns",
            "range": "± 78759.24303931602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3104254.1875,
            "unit": "ns",
            "range": "± 59031.77159374292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3122107.0689655175,
            "unit": "ns",
            "range": "± 170531.4076171957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14089174.755319148,
            "unit": "ns",
            "range": "± 894750.5934426484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40148.27551020408,
            "unit": "ns",
            "range": "± 6581.3778753194665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982202.0054945055,
            "unit": "ns",
            "range": "± 104173.49029536935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907936.0634920634,
            "unit": "ns",
            "range": "± 87597.95600113366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601282.5111111111,
            "unit": "ns",
            "range": "± 128077.29033271976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12692723.796703296,
            "unit": "ns",
            "range": "± 995549.3393268137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5560834.6,
            "unit": "ns",
            "range": "± 30586.593143308484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14287119.42857143,
            "unit": "ns",
            "range": "± 232933.74301775973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36390117.461538464,
            "unit": "ns",
            "range": "± 190123.08876164735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73012540.53846154,
            "unit": "ns",
            "range": "± 311098.965949641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150630413.57142857,
            "unit": "ns",
            "range": "± 981370.7515367287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3707707.955078125,
            "unit": "ns",
            "range": "± 7324.056400155431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224561.6109375,
            "unit": "ns",
            "range": "± 2052.0357537163973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762750.6088867188,
            "unit": "ns",
            "range": "± 973.0021905006969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939707.876139323,
            "unit": "ns",
            "range": "± 1844.0192101997804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626862.7053653493,
            "unit": "ns",
            "range": "± 12106.569127738692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580286.6815708706,
            "unit": "ns",
            "range": "± 1187.4120081164451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193742.96153846153,
            "unit": "ns",
            "range": "± 5221.34288960706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190756.8392857143,
            "unit": "ns",
            "range": "± 7487.818279838468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161927.54166666666,
            "unit": "ns",
            "range": "± 4072.699232900297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3208954.8333333335,
            "unit": "ns",
            "range": "± 38576.39821028899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2747798.6153846155,
            "unit": "ns",
            "range": "± 40624.46650221691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12359.897727272728,
            "unit": "ns",
            "range": "± 804.1879182199067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63006.57731958763,
            "unit": "ns",
            "range": "± 8521.581642163828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51577.11538461538,
            "unit": "ns",
            "range": "± 825.7213551860315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57512.8052631579,
            "unit": "ns",
            "range": "± 10291.156268466304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2870.4148936170213,
            "unit": "ns",
            "range": "± 344.59611420666465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12814.154639175258,
            "unit": "ns",
            "range": "± 1731.2280464324438"
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
          "id": "3bfb177dea4fbeab3cfe3d2d096125167ffb01d8",
          "message": "Docs",
          "timestamp": "2024-01-29T16:27:36+09:00",
          "tree_id": "fdad3c26c9ec0916fac7160a6edbc1a55e75d984",
          "url": "https://github.com/greymistcube/libplanet/commit/3bfb177dea4fbeab3cfe3d2d096125167ffb01d8"
        },
        "date": 1706513928878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435036.7884615385,
            "unit": "ns",
            "range": "± 83409.36781458594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562268.8,
            "unit": "ns",
            "range": "± 101926.17061062845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3205635.24,
            "unit": "ns",
            "range": "± 83153.95735936645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3188989.511627907,
            "unit": "ns",
            "range": "± 187839.9095259668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13860393.277777778,
            "unit": "ns",
            "range": "± 997647.8632326738"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39775.385416666664,
            "unit": "ns",
            "range": "± 5165.450090685616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012199.3894736842,
            "unit": "ns",
            "range": "± 95686.63352243789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1963503.7846153846,
            "unit": "ns",
            "range": "± 83220.94974702365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1635548.2717391304,
            "unit": "ns",
            "range": "± 149172.68667105792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12805789.3125,
            "unit": "ns",
            "range": "± 925133.3379842025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5676850.714285715,
            "unit": "ns",
            "range": "± 90909.61460295739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15306071.8,
            "unit": "ns",
            "range": "± 155380.119653706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37158869.25,
            "unit": "ns",
            "range": "± 112416.25653074542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74992192.96153846,
            "unit": "ns",
            "range": "± 860833.3038398138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150118980.2857143,
            "unit": "ns",
            "range": "± 959994.6693811279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3680355.933894231,
            "unit": "ns",
            "range": "± 11999.906989346584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221767.5094651442,
            "unit": "ns",
            "range": "± 8506.207450208893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769100.3837239583,
            "unit": "ns",
            "range": "± 13251.580314628463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953462.5553385417,
            "unit": "ns",
            "range": "± 3177.9078214741958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606796.4769810268,
            "unit": "ns",
            "range": "± 769.1858433173996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589593.1397879465,
            "unit": "ns",
            "range": "± 873.4646417322735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203529.06382978722,
            "unit": "ns",
            "range": "± 13908.180696682828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196353.77777777778,
            "unit": "ns",
            "range": "± 9688.313064431228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164459.83333333334,
            "unit": "ns",
            "range": "± 2988.433313070022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3206486.714285714,
            "unit": "ns",
            "range": "± 25609.499176398083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2833563.9285714286,
            "unit": "ns",
            "range": "± 27214.120900354672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13178.18817204301,
            "unit": "ns",
            "range": "± 1487.1387027683809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67465.79787234042,
            "unit": "ns",
            "range": "± 8048.710059715892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66646.33,
            "unit": "ns",
            "range": "± 19232.038892975157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74665.27551020408,
            "unit": "ns",
            "range": "± 15968.36189739568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3238.1354166666665,
            "unit": "ns",
            "range": "± 599.8848594748771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16457.546391752578,
            "unit": "ns",
            "range": "± 3425.077161602284"
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
          "id": "b44b0e951509bfbac62e1775439e93326a535805",
          "message": "Docs",
          "timestamp": "2024-01-30T14:00:18+09:00",
          "tree_id": "47eead3d02e7f7c2fa50f1115d0fa13d499ca7ed",
          "url": "https://github.com/greymistcube/libplanet/commit/b44b0e951509bfbac62e1775439e93326a535805"
        },
        "date": 1706591497084,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2368730.5,
            "unit": "ns",
            "range": "± 75089.2264022324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2480144.8333333335,
            "unit": "ns",
            "range": "± 52846.087910192226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110300.6923076925,
            "unit": "ns",
            "range": "± 85058.48068888568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3102867.7321428573,
            "unit": "ns",
            "range": "± 117010.11645921764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13770194.43478261,
            "unit": "ns",
            "range": "± 987146.538894823"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40749.78571428572,
            "unit": "ns",
            "range": "± 5679.76123944602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997574.2653061225,
            "unit": "ns",
            "range": "± 95271.06933924006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1875981.6698113207,
            "unit": "ns",
            "range": "± 77377.67754848638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1622125.09375,
            "unit": "ns",
            "range": "± 156747.3706219881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12688189.282608695,
            "unit": "ns",
            "range": "± 957638.3817764077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5577447.214285715,
            "unit": "ns",
            "range": "± 63120.7598182046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14175507.833333334,
            "unit": "ns",
            "range": "± 103454.59615189834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37338554.538461536,
            "unit": "ns",
            "range": "± 279680.98310355184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74652497.6923077,
            "unit": "ns",
            "range": "± 292794.4361929784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152116599.92307693,
            "unit": "ns",
            "range": "± 1097604.3972904857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3699335.4375,
            "unit": "ns",
            "range": "± 6407.962123655526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190256.0991210938,
            "unit": "ns",
            "range": "± 2322.5353981578032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751620.4971454327,
            "unit": "ns",
            "range": "± 1351.7034856028515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937260.3002232143,
            "unit": "ns",
            "range": "± 22236.777957105252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625191.5865885416,
            "unit": "ns",
            "range": "± 12803.167564320049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565505.9560546875,
            "unit": "ns",
            "range": "± 661.1120943044472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198798.765625,
            "unit": "ns",
            "range": "± 9139.334037150034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191257.56818181818,
            "unit": "ns",
            "range": "± 6590.415046384805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170261.76666666666,
            "unit": "ns",
            "range": "± 5044.075464196165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3262628.6153846155,
            "unit": "ns",
            "range": "± 19769.93081061262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2758365.3,
            "unit": "ns",
            "range": "± 35819.091228800644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12813.140449438202,
            "unit": "ns",
            "range": "± 1012.8595461185289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61890.83516483517,
            "unit": "ns",
            "range": "± 4725.292863972057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58480.09090909091,
            "unit": "ns",
            "range": "± 6237.470157126121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60770.12244897959,
            "unit": "ns",
            "range": "± 11539.061782927261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3284.8842105263157,
            "unit": "ns",
            "range": "± 493.7552986660561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11956.75,
            "unit": "ns",
            "range": "± 1028.547509329233"
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
          "id": "b6d95e3b872b941c317797a6042b70ca9a60c373",
          "message": "Docs",
          "timestamp": "2024-02-07T16:57:50+09:00",
          "tree_id": "5d52c8c097e02baab2fe613e7ee4a14dfdfbf7d3",
          "url": "https://github.com/greymistcube/libplanet/commit/b6d95e3b872b941c317797a6042b70ca9a60c373"
        },
        "date": 1707293345002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997038.6914893617,
            "unit": "ns",
            "range": "± 83756.10615098961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1903937.1825396826,
            "unit": "ns",
            "range": "± 86635.42221710645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1625393.402173913,
            "unit": "ns",
            "range": "± 149934.10182623856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12769642.821052631,
            "unit": "ns",
            "range": "± 1012845.4389325174"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41460.036082474224,
            "unit": "ns",
            "range": "± 5937.817421448332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201329.65853658537,
            "unit": "ns",
            "range": "± 6837.513578084346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194986.96666666667,
            "unit": "ns",
            "range": "± 5369.117468951699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165533.79411764705,
            "unit": "ns",
            "range": "± 3355.924644652832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3182559.533333333,
            "unit": "ns",
            "range": "± 37413.44632780853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828904.3333333335,
            "unit": "ns",
            "range": "± 50687.08823706863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12535.988636363636,
            "unit": "ns",
            "range": "± 1186.3247165943721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63229.56122448979,
            "unit": "ns",
            "range": "± 4536.662302478373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58468.0618556701,
            "unit": "ns",
            "range": "± 6261.569030626483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57524.82105263158,
            "unit": "ns",
            "range": "± 9954.28719674577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2840.6129032258063,
            "unit": "ns",
            "range": "± 359.6388294633715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14710.809278350516,
            "unit": "ns",
            "range": "± 2429.538838102926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5572216.142857143,
            "unit": "ns",
            "range": "± 18392.76714282899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14140072.833333334,
            "unit": "ns",
            "range": "± 133635.53016943758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35985973.3,
            "unit": "ns",
            "range": "± 158255.92581872837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73285477.21428572,
            "unit": "ns",
            "range": "± 552282.7125937513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149749767.15384614,
            "unit": "ns",
            "range": "± 320923.5968009224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2244280.4615384615,
            "unit": "ns",
            "range": "± 57772.93210949141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2475643.7083333335,
            "unit": "ns",
            "range": "± 96786.54714347277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3038847,
            "unit": "ns",
            "range": "± 43920.93466673951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3153338.8529411764,
            "unit": "ns",
            "range": "± 99043.67376853822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13927567.136842106,
            "unit": "ns",
            "range": "± 1034331.1872227944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3767111.3663194445,
            "unit": "ns",
            "range": "± 104736.33532780352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203463.6875,
            "unit": "ns",
            "range": "± 5052.778338291301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776051.3751302083,
            "unit": "ns",
            "range": "± 12308.423738934069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955307.403125,
            "unit": "ns",
            "range": "± 24137.44565306119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617279.189828726,
            "unit": "ns",
            "range": "± 1122.2505197265723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568385.2133091518,
            "unit": "ns",
            "range": "± 1188.1721604339332"
          }
        ]
      }
    ]
  }
}