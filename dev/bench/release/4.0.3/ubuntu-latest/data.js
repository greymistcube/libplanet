window.BENCHMARK_DATA = {
  "lastUpdate": 1707211497134,
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
          "id": "aac31ffda5d567b4aee940afd7eb9984121c41f4",
          "message": "Release 4.0.3",
          "timestamp": "2024-02-06T18:13:39+09:00",
          "tree_id": "52802fbf3945f1888b4771fd252a9ead9b4186dc",
          "url": "https://github.com/greymistcube/libplanet/commit/aac31ffda5d567b4aee940afd7eb9984121c41f4"
        },
        "date": 1707211490906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962223.630952381,
            "unit": "ns",
            "range": "± 58185.35273843321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1862855.0454545454,
            "unit": "ns",
            "range": "± 69680.65316806466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1570900.5947368422,
            "unit": "ns",
            "range": "± 122028.1966906667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12775106.06521739,
            "unit": "ns",
            "range": "± 1035265.1734610279"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43051.291666666664,
            "unit": "ns",
            "range": "± 4618.861112568007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198329,
            "unit": "ns",
            "range": "± 6937.163052035487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192300.06896551725,
            "unit": "ns",
            "range": "± 5550.041962074537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166999.7,
            "unit": "ns",
            "range": "± 3823.855151683002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3233290.653846154,
            "unit": "ns",
            "range": "± 42571.078548795216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776664.4285714286,
            "unit": "ns",
            "range": "± 19794.249750541527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15028.765306122448,
            "unit": "ns",
            "range": "± 2589.7219551866337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63311.23469387755,
            "unit": "ns",
            "range": "± 7229.865905133138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59032.59302325582,
            "unit": "ns",
            "range": "± 7548.9046710381335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67059.13483146067,
            "unit": "ns",
            "range": "± 6628.412651387089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3135.8263157894735,
            "unit": "ns",
            "range": "± 644.4219650050447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15228.265957446809,
            "unit": "ns",
            "range": "± 1907.3427565258569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5622927.857142857,
            "unit": "ns",
            "range": "± 25656.923428661037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14326142.333333334,
            "unit": "ns",
            "range": "± 108428.84782570331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36430916.428571425,
            "unit": "ns",
            "range": "± 149233.92618699948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75307811,
            "unit": "ns",
            "range": "± 566033.279451962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150149406.53846154,
            "unit": "ns",
            "range": "± 998137.7969241535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2469107.75,
            "unit": "ns",
            "range": "± 71904.26491994351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2593517.2843137253,
            "unit": "ns",
            "range": "± 98198.33589207381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3161308.303030303,
            "unit": "ns",
            "range": "± 90793.90767263959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3252530.586956522,
            "unit": "ns",
            "range": "± 124187.48059331301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13757392.945054945,
            "unit": "ns",
            "range": "± 1026378.0977438887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3816962.884635417,
            "unit": "ns",
            "range": "± 46950.30260535758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200143.3967848558,
            "unit": "ns",
            "range": "± 2470.6385487784432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753138.6472167969,
            "unit": "ns",
            "range": "± 474.45849831789036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922552.3667689732,
            "unit": "ns",
            "range": "± 2239.5316368415956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620775.2927433894,
            "unit": "ns",
            "range": "± 2468.249289572393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573380.6773158482,
            "unit": "ns",
            "range": "± 4859.94172919893"
          }
        ]
      }
    ]
  }
}