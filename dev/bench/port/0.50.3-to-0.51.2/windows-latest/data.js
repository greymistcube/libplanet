window.BENCHMARK_DATA = {
  "lastUpdate": 1678789969039,
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
          "id": "427645e8deccade6832f99e7a9bac7a38e41d479",
          "message": "Changelog",
          "timestamp": "2023-03-14T19:19:39+09:00",
          "tree_id": "4dab05484c1d09894134fb208a9f267ecf913aae",
          "url": "https://github.com/greymistcube/libplanet/commit/427645e8deccade6832f99e7a9bac7a38e41d479"
        },
        "date": 1678789952927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1049050.5263157894,
            "unit": "ns",
            "range": "± 89488.02947843254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815042.5925925926,
            "unit": "ns",
            "range": "± 71106.92878653618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1616278.3505154639,
            "unit": "ns",
            "range": "± 137098.59456093702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3634050,
            "unit": "ns",
            "range": "± 140624.36307184363"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34663.333333333336,
            "unit": "ns",
            "range": "± 1540.5773369336075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5296535.714285715,
            "unit": "ns",
            "range": "± 31446.795290870807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 13431826.666666666,
            "unit": "ns",
            "range": "± 188668.11929442463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 33472283.333333332,
            "unit": "ns",
            "range": "± 276194.02772757586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 67297116.66666667,
            "unit": "ns",
            "range": "± 503105.87307624385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 138070846.66666666,
            "unit": "ns",
            "range": "± 1233307.2070463146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3482020.1041666665,
            "unit": "ns",
            "range": "± 7088.989405595359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1097143.9192708333,
            "unit": "ns",
            "range": "± 2217.55686786918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 824656.4528245192,
            "unit": "ns",
            "range": "± 364.68724569011295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1892774.5535714286,
            "unit": "ns",
            "range": "± 4445.789378182301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 589386.083984375,
            "unit": "ns",
            "range": "± 534.1462583117449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 529894.7265625,
            "unit": "ns",
            "range": "± 476.74708059344226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2257322.6666666665,
            "unit": "ns",
            "range": "± 113978.88682313685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3401766.6666666665,
            "unit": "ns",
            "range": "± 86068.47459343392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 16193553.333333334,
            "unit": "ns",
            "range": "± 200117.70417384245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4328800,
            "unit": "ns",
            "range": "± 87556.4154265862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18510853.846153848,
            "unit": "ns",
            "range": "± 207440.51603365166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138556.89655172414,
            "unit": "ns",
            "range": "± 5596.180153006171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 135173.0158730159,
            "unit": "ns",
            "range": "± 6174.850301155442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 110987.5,
            "unit": "ns",
            "range": "± 4387.488255424664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7697926.666666667,
            "unit": "ns",
            "range": "± 72895.95782117597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6166326.666666667,
            "unit": "ns",
            "range": "± 58952.41987843934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15346.153846153846,
            "unit": "ns",
            "range": "± 1379.7993165117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 39665.217391304344,
            "unit": "ns",
            "range": "± 2902.4216786286133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 29172.916666666668,
            "unit": "ns",
            "range": "± 2158.434089634948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74504.1237113402,
            "unit": "ns",
            "range": "± 12853.07937750857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4402.061855670103,
            "unit": "ns",
            "range": "± 676.5382751926804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13435.869565217392,
            "unit": "ns",
            "range": "± 1026.418238527661"
          }
        ]
      }
    ]
  }
}