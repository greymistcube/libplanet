window.BENCHMARK_DATA = {
  "lastUpdate": 1688363292163,
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
          "id": "40e474810f4076eb8ae7203ff0398dd16bf6761c",
          "message": "Removed unnecessary test code",
          "timestamp": "2023-07-03T14:32:26+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/40e474810f4076eb8ae7203ff0398dd16bf6761c"
        },
        "date": 1688363271864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377177,
            "unit": "ns",
            "range": "± 127840.44652881524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2522515.5172413792,
            "unit": "ns",
            "range": "± 105728.64273857772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1809921.4285714286,
            "unit": "ns",
            "range": "± 171268.0098137624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4891044.117647059,
            "unit": "ns",
            "range": "± 234186.8640174216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45883.333333333336,
            "unit": "ns",
            "range": "± 2991.5987233164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7264415.384615385,
            "unit": "ns",
            "range": "± 33829.59370516309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20259373.333333332,
            "unit": "ns",
            "range": "± 231416.7590753798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53701490,
            "unit": "ns",
            "range": "± 939165.6196554776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101811338.8888889,
            "unit": "ns",
            "range": "± 1914378.8776577697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204545073.33333334,
            "unit": "ns",
            "range": "± 3624712.910694084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4892409.0625,
            "unit": "ns",
            "range": "± 24970.126188496117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1561385.3971354167,
            "unit": "ns",
            "range": "± 7539.462535745111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212893.7630208333,
            "unit": "ns",
            "range": "± 4400.574010381681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2707539.9088541665,
            "unit": "ns",
            "range": "± 17025.47103884268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840479.5833333334,
            "unit": "ns",
            "range": "± 2571.5189962256477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777453.0078125,
            "unit": "ns",
            "range": "± 2348.5597534091694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228957.7922077924,
            "unit": "ns",
            "range": "± 164919.63335151566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415590.625,
            "unit": "ns",
            "range": "± 104736.6539634895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4105908.108108108,
            "unit": "ns",
            "range": "± 138607.3839190282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3826321.7391304346,
            "unit": "ns",
            "range": "± 95605.39617958876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6295572.413793104,
            "unit": "ns",
            "range": "± 182874.56063134744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272025,
            "unit": "ns",
            "range": "± 7874.70429552345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261256.66666666666,
            "unit": "ns",
            "range": "± 6964.970645448121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224300,
            "unit": "ns",
            "range": "± 10642.782696711032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4138354.5454545454,
            "unit": "ns",
            "range": "± 99412.96613368818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3641810,
            "unit": "ns",
            "range": "± 81103.98718214848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18619.565217391304,
            "unit": "ns",
            "range": "± 1382.3247762044718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86239.43661971831,
            "unit": "ns",
            "range": "± 4216.78546739912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76736.26373626373,
            "unit": "ns",
            "range": "± 7443.050695985059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95532.29166666667,
            "unit": "ns",
            "range": "± 14631.203100451672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5410.416666666667,
            "unit": "ns",
            "range": "± 959.8770937405054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18580.645161290322,
            "unit": "ns",
            "range": "± 1882.5432649636575"
          }
        ]
      }
    ]
  }
}