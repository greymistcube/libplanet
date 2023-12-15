window.BENCHMARK_DATA = {
  "lastUpdate": 1702615864667,
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
          "id": "6bf89675478468b8f5eaeae9d3c6c1d91e28114f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:41:57+09:00",
          "tree_id": "eaa67ccbf19f077892993e50773ef00e76df5b9c",
          "url": "https://github.com/greymistcube/libplanet/commit/6bf89675478468b8f5eaeae9d3c6c1d91e28114f"
        },
        "date": 1702612371768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3682336.458658854,
            "unit": "ns",
            "range": "± 11724.601298400155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205467.5923978365,
            "unit": "ns",
            "range": "± 1727.946668631462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768490.0965294471,
            "unit": "ns",
            "range": "± 2331.6669681125045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924887.1216145833,
            "unit": "ns",
            "range": "± 7151.970007010286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619707.0348307291,
            "unit": "ns",
            "range": "± 1109.9471573701867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587753.2993539664,
            "unit": "ns",
            "range": "± 3063.1195355330765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2410076.7666666666,
            "unit": "ns",
            "range": "± 34801.57045608034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567145.5,
            "unit": "ns",
            "range": "± 47729.598601566584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3114897.2352941176,
            "unit": "ns",
            "range": "± 61472.02572870994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2933386.230769231,
            "unit": "ns",
            "range": "± 105817.00652080523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6990077.5,
            "unit": "ns",
            "range": "± 191263.2577813104"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40506.989795918365,
            "unit": "ns",
            "range": "± 5597.569112017496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207333.16666666666,
            "unit": "ns",
            "range": "± 8271.577342104412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197353.01694915254,
            "unit": "ns",
            "range": "± 7514.079456987041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165002.125,
            "unit": "ns",
            "range": "± 2612.0598991345255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3068584.923076923,
            "unit": "ns",
            "range": "± 26666.111688375622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2784222.730769231,
            "unit": "ns",
            "range": "± 27946.402395638946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12766.5,
            "unit": "ns",
            "range": "± 1386.769557598649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70962.13978494624,
            "unit": "ns",
            "range": "± 4537.00507323891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58081.21590909091,
            "unit": "ns",
            "range": "± 7773.475949898606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76583.16326530612,
            "unit": "ns",
            "range": "± 20324.77097368783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3480.2934782608695,
            "unit": "ns",
            "range": "± 823.7697125396506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14741.737113402061,
            "unit": "ns",
            "range": "± 1994.9147787415832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5775043.857142857,
            "unit": "ns",
            "range": "± 56023.60651458542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14902193.142857144,
            "unit": "ns",
            "range": "± 93034.87806512893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36927391.42307692,
            "unit": "ns",
            "range": "± 154190.17403218962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75885039.53846154,
            "unit": "ns",
            "range": "± 480471.46933968505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150190856.63333333,
            "unit": "ns",
            "range": "± 575897.6244863152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988855.6288659794,
            "unit": "ns",
            "range": "± 94520.98126852572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1867251.0185185184,
            "unit": "ns",
            "range": "± 50336.61851007166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1434971.6382978724,
            "unit": "ns",
            "range": "± 113118.2439687668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6053902.59375,
            "unit": "ns",
            "range": "± 278810.3569320807"
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
          "id": "3907c1f970f4913947829abd10a24c748831318f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:42:26+09:00",
          "tree_id": "c34e511f264aa20568ee1980320ad50122fca47b",
          "url": "https://github.com/greymistcube/libplanet/commit/3907c1f970f4913947829abd10a24c748831318f"
        },
        "date": 1702612397678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687001.2627604166,
            "unit": "ns",
            "range": "± 54820.88823552583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222780.590983073,
            "unit": "ns",
            "range": "± 1731.6630185537144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771150.368765024,
            "unit": "ns",
            "range": "± 5405.451299471405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939580.4251802885,
            "unit": "ns",
            "range": "± 3552.8897758626767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616953.8606305803,
            "unit": "ns",
            "range": "± 2465.035228940802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574334.2670200893,
            "unit": "ns",
            "range": "± 1930.0377820408114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2425768,
            "unit": "ns",
            "range": "± 62136.84558120575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2572658.1428571427,
            "unit": "ns",
            "range": "± 108848.83630269984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3136386.04,
            "unit": "ns",
            "range": "± 83640.64311409855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3016179.3114754097,
            "unit": "ns",
            "range": "± 127046.92227080787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6852879.230769231,
            "unit": "ns",
            "range": "± 110516.74745572414"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40181.505263157895,
            "unit": "ns",
            "range": "± 5325.1689911726235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202075.66470588234,
            "unit": "ns",
            "range": "± 10078.64381566415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195286.43181818182,
            "unit": "ns",
            "range": "± 6837.134400404647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168915.14705882352,
            "unit": "ns",
            "range": "± 5350.917622423353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3103822.576923077,
            "unit": "ns",
            "range": "± 30607.182401797832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832443,
            "unit": "ns",
            "range": "± 40353.965712359495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26448.757575757576,
            "unit": "ns",
            "range": "± 2406.573493880277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68290.52525252526,
            "unit": "ns",
            "range": "± 9662.316830741014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89967.26923076923,
            "unit": "ns",
            "range": "± 1477.880924039899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98122.23711340207,
            "unit": "ns",
            "range": "± 13366.707863174148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7030.587628865979,
            "unit": "ns",
            "range": "± 755.0280589788441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17543.52,
            "unit": "ns",
            "range": "± 3974.170061328987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5839827,
            "unit": "ns",
            "range": "± 67663.06757963102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14505663.214285715,
            "unit": "ns",
            "range": "± 138093.19019258674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36976029.14285714,
            "unit": "ns",
            "range": "± 175588.02104252976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73855477.42857143,
            "unit": "ns",
            "range": "± 262026.51623590552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151057334.46153846,
            "unit": "ns",
            "range": "± 747401.5735822805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037718.3265306122,
            "unit": "ns",
            "range": "± 131682.66746250913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1991380.2916666667,
            "unit": "ns",
            "range": "± 51413.28077746582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1504728.40625,
            "unit": "ns",
            "range": "± 95002.52006253951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5840530.47368421,
            "unit": "ns",
            "range": "± 127060.17781585421"
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
          "id": "2657dfea46bdbab71605c42bdc2f2a9cbdf5bf0a",
          "message": "Changelog",
          "timestamp": "2023-12-15T12:44:45+09:00",
          "tree_id": "a16ebc9995f04b409192c4ea0a1408bac46d1c7c",
          "url": "https://github.com/greymistcube/libplanet/commit/2657dfea46bdbab71605c42bdc2f2a9cbdf5bf0a"
        },
        "date": 1702612555906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3736284.127083333,
            "unit": "ns",
            "range": "± 61711.06880142459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1234527.9642427885,
            "unit": "ns",
            "range": "± 3937.625126474017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778176.9310128348,
            "unit": "ns",
            "range": "± 2386.0749889777017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958652.0842848558,
            "unit": "ns",
            "range": "± 8126.93566458283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626667.7908653846,
            "unit": "ns",
            "range": "± 4482.965396807172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575829.9624399039,
            "unit": "ns",
            "range": "± 1399.5306499463086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2538814.5,
            "unit": "ns",
            "range": "± 91545.55828290779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2627930.8191489363,
            "unit": "ns",
            "range": "± 67115.81341690883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3203354.75,
            "unit": "ns",
            "range": "± 73083.87613800504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3069012.234042553,
            "unit": "ns",
            "range": "± 119698.40463380795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7085751.8,
            "unit": "ns",
            "range": "± 246737.21560160068"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42732.395833333336,
            "unit": "ns",
            "range": "± 6209.006842320472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215893.13333333333,
            "unit": "ns",
            "range": "± 12190.988341642667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207281.3085106383,
            "unit": "ns",
            "range": "± 13338.415336088141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169671.87234042553,
            "unit": "ns",
            "range": "± 6323.492673518678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3096937.0714285714,
            "unit": "ns",
            "range": "± 21569.848761868732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2920697.4,
            "unit": "ns",
            "range": "± 39254.092450524004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15969.130434782608,
            "unit": "ns",
            "range": "± 2991.528380064925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79779.76288659793,
            "unit": "ns",
            "range": "± 11147.239542233832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99508.25,
            "unit": "ns",
            "range": "± 1864.1408208609134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94463.04081632652,
            "unit": "ns",
            "range": "± 14968.226887925633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5815.635416666667,
            "unit": "ns",
            "range": "± 1287.6257720462565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18368.04081632653,
            "unit": "ns",
            "range": "± 3159.5167520626123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5751342.166666667,
            "unit": "ns",
            "range": "± 70765.85947504929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14657430.333333334,
            "unit": "ns",
            "range": "± 86455.56229454913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36405908.071428575,
            "unit": "ns",
            "range": "± 208743.0478298671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75994208.33333333,
            "unit": "ns",
            "range": "± 1025438.3735223868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148602078,
            "unit": "ns",
            "range": "± 1002061.5203623977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025851.9565217391,
            "unit": "ns",
            "range": "± 86437.81059240844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984586.3658536586,
            "unit": "ns",
            "range": "± 70016.68822457832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495790.7950819673,
            "unit": "ns",
            "range": "± 63814.134129868195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6222887.487179487,
            "unit": "ns",
            "range": "± 320235.5552463551"
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
          "id": "fa996be4b8fb4b7a3531cfea193f039be9aae52b",
          "message": "Changelog",
          "timestamp": "2023-12-15T13:23:20+09:00",
          "tree_id": "b23d2714bf667fd76fec094515c62070d08df729",
          "url": "https://github.com/greymistcube/libplanet/commit/fa996be4b8fb4b7a3531cfea193f039be9aae52b"
        },
        "date": 1702614846291,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744576.4813701925,
            "unit": "ns",
            "range": "± 59207.29911996475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1182219.4123697917,
            "unit": "ns",
            "range": "± 3443.0380460786296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766228.1739032452,
            "unit": "ns",
            "range": "± 1826.2420511183905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943591.0546875,
            "unit": "ns",
            "range": "± 6454.591520949604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618136.8822866586,
            "unit": "ns",
            "range": "± 2555.4665177003403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570188.7110877404,
            "unit": "ns",
            "range": "± 2724.6204862489644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2390538.9615384615,
            "unit": "ns",
            "range": "± 61861.230536245086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527040.8636363638,
            "unit": "ns",
            "range": "± 70957.22316729733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3126634.8666666667,
            "unit": "ns",
            "range": "± 37952.84404149569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3009418.5507246377,
            "unit": "ns",
            "range": "± 145325.98104824004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7050868.216216216,
            "unit": "ns",
            "range": "± 235115.46546799026"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40265.8125,
            "unit": "ns",
            "range": "± 5194.4746866008345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195700.18181818182,
            "unit": "ns",
            "range": "± 7836.883923664855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190877,
            "unit": "ns",
            "range": "± 9758.998421160366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165077.13043478262,
            "unit": "ns",
            "range": "± 3813.008205226227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3089463.3333333335,
            "unit": "ns",
            "range": "± 53544.442454931996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2761257.1428571427,
            "unit": "ns",
            "range": "± 32431.158265463793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17424.711340206184,
            "unit": "ns",
            "range": "± 2476.0784853892583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65848.97422680413,
            "unit": "ns",
            "range": "± 8843.646776892041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86734.25757575757,
            "unit": "ns",
            "range": "± 15575.546958713192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76024.88775510204,
            "unit": "ns",
            "range": "± 18842.18524376796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6362.878787878788,
            "unit": "ns",
            "range": "± 1712.3680361651661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14544.755102040815,
            "unit": "ns",
            "range": "± 3003.865335675121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5502875.846153846,
            "unit": "ns",
            "range": "± 19005.771390317877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14292496.6,
            "unit": "ns",
            "range": "± 90098.49863169594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36774889.571428575,
            "unit": "ns",
            "range": "± 90371.40531458482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74231907.75,
            "unit": "ns",
            "range": "± 170207.25472740846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150419207.125,
            "unit": "ns",
            "range": "± 815366.7275728041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000351.404040404,
            "unit": "ns",
            "range": "± 108972.86116332268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919229.0810810812,
            "unit": "ns",
            "range": "± 95977.70051719659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1409033.6237113401,
            "unit": "ns",
            "range": "± 91469.11226203832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5865404.231707317,
            "unit": "ns",
            "range": "± 208708.2284311072"
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
          "id": "b531426ca03cc35b30df2b485b9609f039e046f5",
          "message": "Fix tests",
          "timestamp": "2023-12-15T13:40:01+09:00",
          "tree_id": "5703704d8060ed967183226ff229b24a248ef935",
          "url": "https://github.com/greymistcube/libplanet/commit/b531426ca03cc35b30df2b485b9609f039e046f5"
        },
        "date": 1702615858516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717274.3701923075,
            "unit": "ns",
            "range": "± 20887.725484178685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193405.3448016827,
            "unit": "ns",
            "range": "± 2372.573232734004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783913.0174804687,
            "unit": "ns",
            "range": "± 12225.637201020463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920692.351171875,
            "unit": "ns",
            "range": "± 20894.343348076865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614516.0387620192,
            "unit": "ns",
            "range": "± 1329.8380928852625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580608.8523763021,
            "unit": "ns",
            "range": "± 1318.551769874761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2349281.933333333,
            "unit": "ns",
            "range": "± 42173.25379477016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2493084.294117647,
            "unit": "ns",
            "range": "± 48459.000411126806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153473.4285714286,
            "unit": "ns",
            "range": "± 51105.82503524395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2917236.793650794,
            "unit": "ns",
            "range": "± 124477.25767593551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6962177.55,
            "unit": "ns",
            "range": "± 159477.12664879332"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40927.552083333336,
            "unit": "ns",
            "range": "± 5422.9470359900715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199864.53968253967,
            "unit": "ns",
            "range": "± 7894.130160718635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186857.3148148148,
            "unit": "ns",
            "range": "± 7793.227940283176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167785.63157894736,
            "unit": "ns",
            "range": "± 3733.796536897447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3055788.6153846155,
            "unit": "ns",
            "range": "± 21052.823605312667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766777,
            "unit": "ns",
            "range": "± 43239.83503313013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12488.130434782608,
            "unit": "ns",
            "range": "± 1140.3572769371644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64413.78787878788,
            "unit": "ns",
            "range": "± 7767.395960395341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57644.31958762887,
            "unit": "ns",
            "range": "± 6765.944286994721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58884.98936170213,
            "unit": "ns",
            "range": "± 12212.136040730344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2886.3297872340427,
            "unit": "ns",
            "range": "± 468.49907651411434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12880.612244897959,
            "unit": "ns",
            "range": "± 2202.2753492865786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5507582.875,
            "unit": "ns",
            "range": "± 49752.854470706836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14412020.42857143,
            "unit": "ns",
            "range": "± 64475.29409091431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36289159.28571428,
            "unit": "ns",
            "range": "± 250759.35775450247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74136731.92857143,
            "unit": "ns",
            "range": "± 412377.721952257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150166681.5,
            "unit": "ns",
            "range": "± 620265.4232926856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958969.5106382979,
            "unit": "ns",
            "range": "± 79399.19006855735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1846680.875,
            "unit": "ns",
            "range": "± 72060.3330507728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1386555.1666666667,
            "unit": "ns",
            "range": "± 67953.8052040628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6117197.132653061,
            "unit": "ns",
            "range": "± 411337.89929562894"
          }
        ]
      }
    ]
  }
}