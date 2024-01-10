window.BENCHMARK_DATA = {
  "lastUpdate": 1704865493902,
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
          "id": "317a05b99efaccae95fcfc7558902778cf1a4304",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T14:33:08+09:00",
          "tree_id": "765a74f944205f529edc434565fa9c34f6c935e1",
          "url": "https://github.com/greymistcube/libplanet/commit/317a05b99efaccae95fcfc7558902778cf1a4304"
        },
        "date": 1704865476315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972757,
            "unit": "ns",
            "range": "± 111867.90302979147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741439.6226415094,
            "unit": "ns",
            "range": "± 72264.40058675194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1594653.1914893617,
            "unit": "ns",
            "range": "± 112241.03642840295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11111155.913978495,
            "unit": "ns",
            "range": "± 983337.4107402726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34279.74683544304,
            "unit": "ns",
            "range": "± 1798.2455657037474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5053846.666666667,
            "unit": "ns",
            "range": "± 46784.274932421264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13506286.666666666,
            "unit": "ns",
            "range": "± 243083.98862082532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33088727.272727273,
            "unit": "ns",
            "range": "± 807406.226418198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65657040,
            "unit": "ns",
            "range": "± 882805.746955208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131109822.22222222,
            "unit": "ns",
            "range": "± 1993769.1091632438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3387354.4170673075,
            "unit": "ns",
            "range": "± 8394.451381719733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071143.1770833333,
            "unit": "ns",
            "range": "± 4502.214030891345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731794.0169270834,
            "unit": "ns",
            "range": "± 2746.6414213486364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928690.9705528845,
            "unit": "ns",
            "range": "± 3100.9308085699868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615453.7825520834,
            "unit": "ns",
            "range": "± 1933.414512340896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563497.51953125,
            "unit": "ns",
            "range": "± 1973.020272835025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2227489.6551724137,
            "unit": "ns",
            "range": "± 63561.76043158781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2267400,
            "unit": "ns",
            "range": "± 147621.15206189957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2784348.5714285714,
            "unit": "ns",
            "range": "± 89921.58797081641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2838646.9696969697,
            "unit": "ns",
            "range": "± 194566.68048252474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12596184.782608695,
            "unit": "ns",
            "range": "± 1668207.8609538751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173028.0487804878,
            "unit": "ns",
            "range": "± 9003.744411615085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171215.29411764705,
            "unit": "ns",
            "range": "± 11525.25700449269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143935.7142857143,
            "unit": "ns",
            "range": "± 4056.107811931357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2903382.3529411764,
            "unit": "ns",
            "range": "± 56617.34755459361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488457.1428571427,
            "unit": "ns",
            "range": "± 32786.88091965383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12393.939393939394,
            "unit": "ns",
            "range": "± 2185.6124244153652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53602.083333333336,
            "unit": "ns",
            "range": "± 5910.828228842148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43215,
            "unit": "ns",
            "range": "± 1939.4936435111972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53603.092783505155,
            "unit": "ns",
            "range": "± 11739.165693028825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2450,
            "unit": "ns",
            "range": "± 436.7759103662754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10233.333333333334,
            "unit": "ns",
            "range": "± 2008.962375098499"
          }
        ]
      }
    ]
  }
}