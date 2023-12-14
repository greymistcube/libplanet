window.BENCHMARK_DATA = {
  "lastUpdate": 1702545783379,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "92e6469e1eac65994f8a228c2f1fa77603b650b1",
          "message": "feat: new argument for `RocksDBKeyValueStore.ctor`",
          "timestamp": "2023-12-14T17:59:47+09:00",
          "tree_id": "5c47e7f0c1b5d51cb6e817c3092842361db17660",
          "url": "https://github.com/greymistcube/libplanet/commit/92e6469e1eac65994f8a228c2f1fa77603b650b1"
        },
        "date": 1702545746628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11160647.101123596,
            "unit": "ns",
            "range": "± 2391453.588015162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31009794.28021978,
            "unit": "ns",
            "range": "± 7668036.912760103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67017787.94444445,
            "unit": "ns",
            "range": "± 18690728.04588613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 148339638.2777778,
            "unit": "ns",
            "range": "± 25966885.713264063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300540604.7126437,
            "unit": "ns",
            "range": "± 39851201.77655296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73057.83695652174,
            "unit": "ns",
            "range": "± 21417.85464178523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354093.48421052634,
            "unit": "ns",
            "range": "± 81125.04121821241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345995.22,
            "unit": "ns",
            "range": "± 81792.41697583642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321275.27835051547,
            "unit": "ns",
            "range": "± 68913.95387467233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5483753.33,
            "unit": "ns",
            "range": "± 1142065.6928455601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3876451.3505747127,
            "unit": "ns",
            "range": "± 409414.9307876133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17024.5625,
            "unit": "ns",
            "range": "± 3778.9957780856907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80025.29166666667,
            "unit": "ns",
            "range": "± 18424.129649038012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75390.17894736842,
            "unit": "ns",
            "range": "± 16925.987261176513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93452.43617021276,
            "unit": "ns",
            "range": "± 14822.893933204195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6570.010638297872,
            "unit": "ns",
            "range": "± 1219.6011025527878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17542.875,
            "unit": "ns",
            "range": "± 4577.6204810382715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710474.268041237,
            "unit": "ns",
            "range": "± 442117.4791503271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2839365.02020202,
            "unit": "ns",
            "range": "± 660952.0189049662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2025584.8775510204,
            "unit": "ns",
            "range": "± 568839.1991742494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9587394.56043956,
            "unit": "ns",
            "range": "± 2221463.347725024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4064107.057894737,
            "unit": "ns",
            "range": "± 806736.9064141115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4739881.287234043,
            "unit": "ns",
            "range": "± 910537.6510132507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5489345.28125,
            "unit": "ns",
            "range": "± 1252473.3558316156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5063838.722222222,
            "unit": "ns",
            "range": "± 1095334.568638813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21336318.76344086,
            "unit": "ns",
            "range": "± 4963311.8581942385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4666692.646205357,
            "unit": "ns",
            "range": "± 66798.68717701522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1448921.2827380951,
            "unit": "ns",
            "range": "± 33310.890572135744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 965774.4822916667,
            "unit": "ns",
            "range": "± 16433.295434349857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2223493.460534794,
            "unit": "ns",
            "range": "± 204309.30122817485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 657002.7744565217,
            "unit": "ns",
            "range": "± 16534.656084942144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580103.303515625,
            "unit": "ns",
            "range": "± 6274.69500677288"
          }
        ]
      }
    ]
  }
}