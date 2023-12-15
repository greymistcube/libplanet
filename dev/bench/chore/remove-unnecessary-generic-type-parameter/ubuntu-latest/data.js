window.BENCHMARK_DATA = {
  "lastUpdate": 1702612403862,
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
      }
    ]
  }
}