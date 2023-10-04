window.BENCHMARK_DATA = {
  "lastUpdate": 1696398880346,
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
          "id": "65ac4b33dbca621fadb77515a233cfe2a24a4b39",
          "message": "Remove IBlockChainStates dependency; replaced with IStateStore",
          "timestamp": "2023-10-04T14:35:00+09:00",
          "tree_id": "98c37ace153ac7313d28298376f255bba5262a3a",
          "url": "https://github.com/greymistcube/libplanet/commit/65ac4b33dbca621fadb77515a233cfe2a24a4b39"
        },
        "date": 1696398849924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467698,
            "unit": "ns",
            "range": "± 203959.58550951246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2917265.3061224488,
            "unit": "ns",
            "range": "± 277526.9631563234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265198.484848485,
            "unit": "ns",
            "range": "± 244878.09560445495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11103834.090909092,
            "unit": "ns",
            "range": "± 1013715.1146979018"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72280.80808080808,
            "unit": "ns",
            "range": "± 21932.129431068897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9103917.525773196,
            "unit": "ns",
            "range": "± 586013.6778498841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24774916,
            "unit": "ns",
            "range": "± 993517.6490241373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56311034.48275862,
            "unit": "ns",
            "range": "± 2455492.2893384546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112602766.66666667,
            "unit": "ns",
            "range": "± 4386816.751059461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223093668.96551725,
            "unit": "ns",
            "range": "± 5429253.352909026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5090487.864583333,
            "unit": "ns",
            "range": "± 84439.25373751405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1647724.1088867188,
            "unit": "ns",
            "range": "± 30301.109129408014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211858.046875,
            "unit": "ns",
            "range": "± 19906.665268961442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3074276.590401786,
            "unit": "ns",
            "range": "± 23797.40611921678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024385.9654017857,
            "unit": "ns",
            "range": "± 11827.809655185614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 958955.3780691965,
            "unit": "ns",
            "range": "± 7909.500683366135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3423337.1134020616,
            "unit": "ns",
            "range": "± 237962.02660980893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3695635.4166666665,
            "unit": "ns",
            "range": "± 236527.40932931032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4691534.375,
            "unit": "ns",
            "range": "± 304473.6230311429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4593494.230769231,
            "unit": "ns",
            "range": "± 187718.99567868025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12618189.655172413,
            "unit": "ns",
            "range": "± 890019.4988763517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312484.8484848485,
            "unit": "ns",
            "range": "± 47016.05319340376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289187.2340425532,
            "unit": "ns",
            "range": "± 40657.78036360535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242169.38775510204,
            "unit": "ns",
            "range": "± 28942.942120495696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4433307.692307692,
            "unit": "ns",
            "range": "± 116977.7035954354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4056217.3333333335,
            "unit": "ns",
            "range": "± 204511.7715328276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22103.061224489797,
            "unit": "ns",
            "range": "± 8813.81827553479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96112.5,
            "unit": "ns",
            "range": "± 18412.823048940078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88795.91836734694,
            "unit": "ns",
            "range": "± 20082.75619955057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93613.40206185567,
            "unit": "ns",
            "range": "± 23416.129718929762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4986.363636363636,
            "unit": "ns",
            "range": "± 619.2657532475421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17217.647058823528,
            "unit": "ns",
            "range": "± 2341.101514783374"
          }
        ]
      }
    ]
  }
}