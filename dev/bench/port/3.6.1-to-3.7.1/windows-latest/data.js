window.BENCHMARK_DATA = {
  "lastUpdate": 1700474742719,
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
          "id": "f3f4e5b759618d4e75743079f96e9f52a5b3d858",
          "message": "Merge tag '3.6.1' into port/3.6.1-to-3.7.1\n\nLibplanet 3.6.1",
          "timestamp": "2023-11-20T18:51:01+09:00",
          "tree_id": "e33d04c7f511c4252489a6a9e0fc970da5173b30",
          "url": "https://github.com/greymistcube/libplanet/commit/f3f4e5b759618d4e75743079f96e9f52a5b3d858"
        },
        "date": 1700474718572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977206.0606060605,
            "unit": "ns",
            "range": "± 114108.09395372176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1724060.3174603174,
            "unit": "ns",
            "range": "± 58099.962633052615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1370687.5,
            "unit": "ns",
            "range": "± 123580.32993712398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5146261.29032258,
            "unit": "ns",
            "range": "± 312712.1624253712"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34372.666666666664,
            "unit": "ns",
            "range": "± 1751.8772428095167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5141364.285714285,
            "unit": "ns",
            "range": "± 53459.08006838728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13189143.333333334,
            "unit": "ns",
            "range": "± 109869.67257792731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32809250,
            "unit": "ns",
            "range": "± 539840.2014271659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65863021.428571425,
            "unit": "ns",
            "range": "± 576871.1803654814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132101653.84615384,
            "unit": "ns",
            "range": "± 1054603.0569329427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339169.296875,
            "unit": "ns",
            "range": "± 17065.72292854919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063455.0362723214,
            "unit": "ns",
            "range": "± 1304.6427513903282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759597.1223958334,
            "unit": "ns",
            "range": "± 1180.0312221374375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936578.59375,
            "unit": "ns",
            "range": "± 1695.0080069550943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612087.1419270834,
            "unit": "ns",
            "range": "± 786.2712656634342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568218.8411458334,
            "unit": "ns",
            "range": "± 1342.9560957677315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179032.0754716983,
            "unit": "ns",
            "range": "± 90534.34276897126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291946.7741935486,
            "unit": "ns",
            "range": "± 68312.9342749037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2818579.069767442,
            "unit": "ns",
            "range": "± 98068.43470163246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2706618.75,
            "unit": "ns",
            "range": "± 48859.05195901097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5971581.481481481,
            "unit": "ns",
            "range": "± 250644.46598686208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177154.16666666666,
            "unit": "ns",
            "range": "± 6961.656636215791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171470.45454545456,
            "unit": "ns",
            "range": "± 5661.521676683774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143448.71794871794,
            "unit": "ns",
            "range": "± 4407.342664885724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720815.3846153845,
            "unit": "ns",
            "range": "± 36247.984913046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2504442.8571428573,
            "unit": "ns",
            "range": "± 30532.472355377122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11725,
            "unit": "ns",
            "range": "± 1197.3390036473265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57630.52631578947,
            "unit": "ns",
            "range": "± 6866.664365416357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47406.98924731183,
            "unit": "ns",
            "range": "± 3561.0024800506108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66136.36363636363,
            "unit": "ns",
            "range": "± 16327.111886683964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2957.1428571428573,
            "unit": "ns",
            "range": "± 611.4458106663608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12098.888888888889,
            "unit": "ns",
            "range": "± 1355.1810231452969"
          }
        ]
      }
    ]
  }
}