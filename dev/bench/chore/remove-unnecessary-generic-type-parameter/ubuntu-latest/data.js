window.BENCHMARK_DATA = {
  "lastUpdate": 1702612377961,
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
      }
    ]
  }
}