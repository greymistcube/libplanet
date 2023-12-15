window.BENCHMARK_DATA = {
  "lastUpdate": 1702612716825,
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
          "id": "3907c1f970f4913947829abd10a24c748831318f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:42:26+09:00",
          "tree_id": "c34e511f264aa20568ee1980320ad50122fca47b",
          "url": "https://github.com/greymistcube/libplanet/commit/3907c1f970f4913947829abd10a24c748831318f"
        },
        "date": 1702612701999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9077262.258064516,
            "unit": "ns",
            "range": "± 413209.79600031365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22649050.243243244,
            "unit": "ns",
            "range": "± 682411.7635868312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55941426.733333334,
            "unit": "ns",
            "range": "± 277023.9852644189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107133358.30851063,
            "unit": "ns",
            "range": "± 9729307.344888695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226174166.25,
            "unit": "ns",
            "range": "± 18141066.000062402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49434.886597938144,
            "unit": "ns",
            "range": "± 10369.44489923429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234196.18085106384,
            "unit": "ns",
            "range": "± 17465.84514374328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248194.72151898735,
            "unit": "ns",
            "range": "± 16237.014226709822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227804.77966101695,
            "unit": "ns",
            "range": "± 10088.449684506564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4144085.4285714286,
            "unit": "ns",
            "range": "± 151171.2328657986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3712260.4,
            "unit": "ns",
            "range": "± 73772.92425473411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16184.5,
            "unit": "ns",
            "range": "± 2913.831523504477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70516.67021276595,
            "unit": "ns",
            "range": "± 8584.57096909358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74526.13953488372,
            "unit": "ns",
            "range": "± 8896.055452261564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69099.95505617978,
            "unit": "ns",
            "range": "± 20451.522079336624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3743.3854166666665,
            "unit": "ns",
            "range": "± 438.2940702263881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13291.075268817205,
            "unit": "ns",
            "range": "± 2197.5682669148837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042313.9204545454,
            "unit": "ns",
            "range": "± 80068.11216840317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2450543.994736842,
            "unit": "ns",
            "range": "± 146253.40415218953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1771833.757894737,
            "unit": "ns",
            "range": "± 121576.42922254543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7653487.870786517,
            "unit": "ns",
            "range": "± 760636.6353436708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3132532.65625,
            "unit": "ns",
            "range": "± 237498.7288066292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3118619.6958762887,
            "unit": "ns",
            "range": "± 271669.98695624253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4299619.493506493,
            "unit": "ns",
            "range": "± 210373.44790900222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821635.210526316,
            "unit": "ns",
            "range": "± 193363.21895278266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15089264.469696969,
            "unit": "ns",
            "range": "± 2703282.285603772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4243541.948863637,
            "unit": "ns",
            "range": "± 77885.91377121267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1326585.0366981907,
            "unit": "ns",
            "range": "± 27424.57846398296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 878002.379313151,
            "unit": "ns",
            "range": "± 7540.27588111895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1996485.818638393,
            "unit": "ns",
            "range": "± 18748.21742017978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620030.5802408854,
            "unit": "ns",
            "range": "± 13170.821564695842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596800.2160326086,
            "unit": "ns",
            "range": "± 14632.485069597516"
          }
        ]
      }
    ]
  }
}