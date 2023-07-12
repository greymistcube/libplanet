window.BENCHMARK_DATA = {
  "lastUpdate": 1689156338073,
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
          "id": "e26c06789337ed69008ba96da5737c2f5c713a79",
          "message": "Faster hex for netstandard2.1 and up",
          "timestamp": "2023-07-12T18:47:56+09:00",
          "tree_id": "48d3f531a9ed328184da0b1e4a76cc37947d4a5f",
          "url": "https://github.com/greymistcube/libplanet/commit/e26c06789337ed69008ba96da5737c2f5c713a79"
        },
        "date": 1689156323216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9206833.010638298,
            "unit": "ns",
            "range": "± 566922.3586503605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21961353.16883117,
            "unit": "ns",
            "range": "± 1113634.3752785104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54080821.81034483,
            "unit": "ns",
            "range": "± 2364914.723275604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102865141.58571428,
            "unit": "ns",
            "range": "± 4942356.837074705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211506788.3918919,
            "unit": "ns",
            "range": "± 7049207.623670509"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69099.06666666667,
            "unit": "ns",
            "range": "± 12115.119959850706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332010.75,
            "unit": "ns",
            "range": "± 34686.28338543547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321605.8064516129,
            "unit": "ns",
            "range": "± 20925.020865013787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298505.23913043475,
            "unit": "ns",
            "range": "± 17028.490732402177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4090735.714285714,
            "unit": "ns",
            "range": "± 71404.64871682815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3803735.466666667,
            "unit": "ns",
            "range": "± 60094.3667788619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21264.38775510204,
            "unit": "ns",
            "range": "± 3119.308159590471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101235.52577319587,
            "unit": "ns",
            "range": "± 13784.18520676623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115959.1282051282,
            "unit": "ns",
            "range": "± 6009.16446664976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112463.10204081633,
            "unit": "ns",
            "range": "± 16395.777769750584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5587.5,
            "unit": "ns",
            "range": "± 1454.6971819950527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21392.93181818182,
            "unit": "ns",
            "range": "± 3851.0577164628016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622160.2422680412,
            "unit": "ns",
            "range": "± 188343.45644218472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2831674.9285714286,
            "unit": "ns",
            "range": "± 121770.62018981829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2124062.06122449,
            "unit": "ns",
            "range": "± 222134.94539488602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6014448.325,
            "unit": "ns",
            "range": "± 313736.54521769297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3360191.3766233767,
            "unit": "ns",
            "range": "± 163808.7968402924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3524196.1063829786,
            "unit": "ns",
            "range": "± 248225.4917131299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4510596.588607595,
            "unit": "ns",
            "range": "± 227645.5714295062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3940544,
            "unit": "ns",
            "range": "± 284080.23311289924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7437028.481818181,
            "unit": "ns",
            "range": "± 312699.6368703248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7377490.227083334,
            "unit": "ns",
            "range": "± 75783.96478729663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2374187.829777644,
            "unit": "ns",
            "range": "± 64599.41584676252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374912.4764229911,
            "unit": "ns",
            "range": "± 37179.074409168155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2737398.220252404,
            "unit": "ns",
            "range": "± 66566.46397333361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858067.2817150297,
            "unit": "ns",
            "range": "± 20218.428245879237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835855.2290852865,
            "unit": "ns",
            "range": "± 32845.75108287348"
          }
        ]
      }
    ]
  }
}