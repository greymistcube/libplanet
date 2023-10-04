window.BENCHMARK_DATA = {
  "lastUpdate": 1696399577003,
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
          "id": "65ac4b33dbca621fadb77515a233cfe2a24a4b39",
          "message": "Remove IBlockChainStates dependency; replaced with IStateStore",
          "timestamp": "2023-10-04T14:35:00+09:00",
          "tree_id": "98c37ace153ac7313d28298376f255bba5262a3a",
          "url": "https://github.com/greymistcube/libplanet/commit/65ac4b33dbca621fadb77515a233cfe2a24a4b39"
        },
        "date": 1696398849924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467698,
            "unit": "ns",
            "range": "± 203959.58550951246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2917265.3061224488,
            "unit": "ns",
            "range": "± 277526.9631563234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265198.484848485,
            "unit": "ns",
            "range": "± 244878.09560445495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11103834.090909092,
            "unit": "ns",
            "range": "± 1013715.1146979018"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72280.80808080808,
            "unit": "ns",
            "range": "± 21932.129431068897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9103917.525773196,
            "unit": "ns",
            "range": "± 586013.6778498841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24774916,
            "unit": "ns",
            "range": "± 993517.6490241373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56311034.48275862,
            "unit": "ns",
            "range": "± 2455492.2893384546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112602766.66666667,
            "unit": "ns",
            "range": "± 4386816.751059461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223093668.96551725,
            "unit": "ns",
            "range": "± 5429253.352909026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5090487.864583333,
            "unit": "ns",
            "range": "± 84439.25373751405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1647724.1088867188,
            "unit": "ns",
            "range": "± 30301.109129408014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211858.046875,
            "unit": "ns",
            "range": "± 19906.665268961442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3074276.590401786,
            "unit": "ns",
            "range": "± 23797.40611921678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024385.9654017857,
            "unit": "ns",
            "range": "± 11827.809655185614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 958955.3780691965,
            "unit": "ns",
            "range": "± 7909.500683366135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3423337.1134020616,
            "unit": "ns",
            "range": "± 237962.02660980893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3695635.4166666665,
            "unit": "ns",
            "range": "± 236527.40932931032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4691534.375,
            "unit": "ns",
            "range": "± 304473.6230311429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4593494.230769231,
            "unit": "ns",
            "range": "± 187718.99567868025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12618189.655172413,
            "unit": "ns",
            "range": "± 890019.4988763517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312484.8484848485,
            "unit": "ns",
            "range": "± 47016.05319340376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289187.2340425532,
            "unit": "ns",
            "range": "± 40657.78036360535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242169.38775510204,
            "unit": "ns",
            "range": "± 28942.942120495696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4433307.692307692,
            "unit": "ns",
            "range": "± 116977.7035954354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4056217.3333333335,
            "unit": "ns",
            "range": "± 204511.7715328276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22103.061224489797,
            "unit": "ns",
            "range": "± 8813.81827553479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96112.5,
            "unit": "ns",
            "range": "± 18412.823048940078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88795.91836734694,
            "unit": "ns",
            "range": "± 20082.75619955057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93613.40206185567,
            "unit": "ns",
            "range": "± 23416.129718929762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4986.363636363636,
            "unit": "ns",
            "range": "± 619.2657532475421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17217.647058823528,
            "unit": "ns",
            "range": "± 2341.101514783374"
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
          "id": "978d8c2b02110f143e1483bea965f84bc13bcc73",
          "message": "Changelog",
          "timestamp": "2023-10-04T14:48:27+09:00",
          "tree_id": "c278c824dcfeef111ef98372dd8798a3c6d6baf9",
          "url": "https://github.com/greymistcube/libplanet/commit/978d8c2b02110f143e1483bea965f84bc13bcc73"
        },
        "date": 1696399319189,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1235041.836734694,
            "unit": "ns",
            "range": "± 98409.92838549905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2250602.6315789474,
            "unit": "ns",
            "range": "± 77526.37820259598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1977580.303030303,
            "unit": "ns",
            "range": "± 62548.31874663222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7275396.428571428,
            "unit": "ns",
            "range": "± 199250.45375131725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43823.529411764706,
            "unit": "ns",
            "range": "± 2050.2724716674275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7041421.428571428,
            "unit": "ns",
            "range": "± 16051.667949345449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17744942.85714286,
            "unit": "ns",
            "range": "± 112073.5521829352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45520828.571428575,
            "unit": "ns",
            "range": "± 292770.85402586265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90956366.66666667,
            "unit": "ns",
            "range": "± 938165.5638735068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183379571.42857143,
            "unit": "ns",
            "range": "± 1258183.7076507558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4298276.622596154,
            "unit": "ns",
            "range": "± 5298.713225209619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1397080.9309895833,
            "unit": "ns",
            "range": "± 3330.6904399700697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1003057.2005208334,
            "unit": "ns",
            "range": "± 1232.7806854241044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532414.6634615385,
            "unit": "ns",
            "range": "± 1344.958507322166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802298.2682291666,
            "unit": "ns",
            "range": "± 1149.1336802310632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722333.6979166666,
            "unit": "ns",
            "range": "± 900.894111057406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2939692.8571428573,
            "unit": "ns",
            "range": "± 25857.64175949998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3151580,
            "unit": "ns",
            "range": "± 92161.69972690241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3837935.714285714,
            "unit": "ns",
            "range": "± 41030.356625737055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3691915.625,
            "unit": "ns",
            "range": "± 111910.80581276007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8992871.739130436,
            "unit": "ns",
            "range": "± 286317.00276522833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238564.89361702127,
            "unit": "ns",
            "range": "± 8302.565835027046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232250.87719298244,
            "unit": "ns",
            "range": "± 9623.058668914131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198838.46153846153,
            "unit": "ns",
            "range": "± 5340.118120272391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3816820,
            "unit": "ns",
            "range": "± 16130.149233212764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3425921.4285714286,
            "unit": "ns",
            "range": "± 27565.144617835726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16805.31914893617,
            "unit": "ns",
            "range": "± 1207.4470554324055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76393.90243902439,
            "unit": "ns",
            "range": "± 4037.1835788856083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63323.07692307692,
            "unit": "ns",
            "range": "± 1740.875111501728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66176.38888888889,
            "unit": "ns",
            "range": "± 2300.7343013717614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3739.175257731959,
            "unit": "ns",
            "range": "± 518.1209440997118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16828.494623655915,
            "unit": "ns",
            "range": "± 1222.6885435086494"
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
          "id": "11276c2c57465ebfbba6d901feee95aaab25ac28",
          "message": "Remove unused code",
          "timestamp": "2023-10-04T14:49:54+09:00",
          "tree_id": "93d259c8bc915820314e9cc097093706c899eedd",
          "url": "https://github.com/greymistcube/libplanet/commit/11276c2c57465ebfbba6d901feee95aaab25ac28"
        },
        "date": 1696399550191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322248.9130434783,
            "unit": "ns",
            "range": "± 74019.01076648821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2448707.1428571427,
            "unit": "ns",
            "range": "± 112314.96713848058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1974226.3157894737,
            "unit": "ns",
            "range": "± 110200.05619426139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8741028.260869564,
            "unit": "ns",
            "range": "± 578405.9062452249"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48886.36363636364,
            "unit": "ns",
            "range": "± 2669.847893475333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7203100,
            "unit": "ns",
            "range": "± 47061.99006726032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20270856.25,
            "unit": "ns",
            "range": "± 392164.6711416859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51659526.666666664,
            "unit": "ns",
            "range": "± 956336.4586249121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99642356.25,
            "unit": "ns",
            "range": "± 1837619.7274259438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195635473.33333334,
            "unit": "ns",
            "range": "± 3021436.7314400673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4498056.5625,
            "unit": "ns",
            "range": "± 28913.76460268675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1434432.0182291667,
            "unit": "ns",
            "range": "± 9166.749043551126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061059.8106971155,
            "unit": "ns",
            "range": "± 5006.499894472261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620614.4010416665,
            "unit": "ns",
            "range": "± 6960.3559706576525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844440.1497395834,
            "unit": "ns",
            "range": "± 3682.067645922543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775733.2942708334,
            "unit": "ns",
            "range": "± 2832.638128784041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297981.9672131147,
            "unit": "ns",
            "range": "± 145765.55092361697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3359512.698412698,
            "unit": "ns",
            "range": "± 153930.30418285713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4117551.282051282,
            "unit": "ns",
            "range": "± 141264.40657186988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821014.6666666665,
            "unit": "ns",
            "range": "± 180154.05396593318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9701760,
            "unit": "ns",
            "range": "± 307203.4670277114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252877.77777777778,
            "unit": "ns",
            "range": "± 7870.81811362566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243722.72727272726,
            "unit": "ns",
            "range": "± 9004.904700665971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204440.625,
            "unit": "ns",
            "range": "± 6281.5068756654455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3973605.263157895,
            "unit": "ns",
            "range": "± 85810.12290506555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3666795.4545454546,
            "unit": "ns",
            "range": "± 89034.72558113131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20355.78947368421,
            "unit": "ns",
            "range": "± 1897.518860920121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83118.75,
            "unit": "ns",
            "range": "± 7185.31122279481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67859.67741935483,
            "unit": "ns",
            "range": "± 3088.6603641474608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84754.08163265306,
            "unit": "ns",
            "range": "± 14289.763969448404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4730.851063829788,
            "unit": "ns",
            "range": "± 701.0018323637611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18514.736842105263,
            "unit": "ns",
            "range": "± 2181.0093515877747"
          }
        ]
      }
    ]
  }
}