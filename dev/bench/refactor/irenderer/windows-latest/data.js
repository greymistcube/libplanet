window.BENCHMARK_DATA = {
  "lastUpdate": 1681634180481,
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
          "id": "c67a48c84c061de44a996edbe4e01e05f584712d",
          "message": "Cleanup",
          "timestamp": "2023-04-16T17:21:08+09:00",
          "tree_id": "c8773927198ad9950c59c78a0373b3715524733f",
          "url": "https://github.com/greymistcube/libplanet/commit/c67a48c84c061de44a996edbe4e01e05f584712d"
        },
        "date": 1681634153048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1319977,
            "unit": "ns",
            "range": "± 119224.24746178222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2392742.8571428573,
            "unit": "ns",
            "range": "± 88288.54210296298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2068306.3157894737,
            "unit": "ns",
            "range": "± 118056.05665478557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5077250.847457627,
            "unit": "ns",
            "range": "± 222859.63061121225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41855,
            "unit": "ns",
            "range": "± 1819.985565224933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6860235.714285715,
            "unit": "ns",
            "range": "± 27236.389886802805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17451086.666666668,
            "unit": "ns",
            "range": "± 127147.4221224361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44448926.666666664,
            "unit": "ns",
            "range": "± 470914.65175559703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89306566.66666667,
            "unit": "ns",
            "range": "± 652518.308081047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176745271.42857143,
            "unit": "ns",
            "range": "± 966321.99377813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4815398.076923077,
            "unit": "ns",
            "range": "± 8793.091620546966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504569.3080357143,
            "unit": "ns",
            "range": "± 4561.749106006754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145810.9095982143,
            "unit": "ns",
            "range": "± 2480.0652127378453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539871.9140625,
            "unit": "ns",
            "range": "± 6357.154174745629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814694.3810096154,
            "unit": "ns",
            "range": "± 2915.511150151732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742084.9759615385,
            "unit": "ns",
            "range": "± 624.1072622034798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2881935.714285714,
            "unit": "ns",
            "range": "± 19414.372437523114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3085104.6153846155,
            "unit": "ns",
            "range": "± 143969.5740759671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3873571.4285714286,
            "unit": "ns",
            "range": "± 57179.15742607654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3918050,
            "unit": "ns",
            "range": "± 101237.81300783169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6657136.363636363,
            "unit": "ns",
            "range": "± 207630.52945403676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293195,
            "unit": "ns",
            "range": "± 6574.710319814378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233336.11111111112,
            "unit": "ns",
            "range": "± 5795.670935042946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214979.24528301886,
            "unit": "ns",
            "range": "± 8867.884113486018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5202346.666666667,
            "unit": "ns",
            "range": "± 45493.43542387919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3565160,
            "unit": "ns",
            "range": "± 39315.27874576426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15645.360824742267,
            "unit": "ns",
            "range": "± 1651.9572115723754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76172.8813559322,
            "unit": "ns",
            "range": "± 3378.421918306635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67451.35135135135,
            "unit": "ns",
            "range": "± 3269.713373691039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154291.83673469388,
            "unit": "ns",
            "range": "± 13805.427540692723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5125,
            "unit": "ns",
            "range": "± 925.0889004221219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15474.489795918367,
            "unit": "ns",
            "range": "± 1445.937160837455"
          }
        ]
      }
    ]
  }
}