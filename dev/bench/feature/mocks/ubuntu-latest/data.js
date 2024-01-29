window.BENCHMARK_DATA = {
  "lastUpdate": 1706513935088,
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
      }
    ]
  }
}