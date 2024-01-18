window.BENCHMARK_DATA = {
  "lastUpdate": 1705554566561,
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
          "id": "c61248ddc720a28cea18f5dfda28d65709052b7e",
          "message": "Tweaked tests",
          "timestamp": "2024-01-18T13:44:05+09:00",
          "tree_id": "90452fd2a9b49dc0f5ad25967133c61a8e13b80a",
          "url": "https://github.com/greymistcube/libplanet/commit/c61248ddc720a28cea18f5dfda28d65709052b7e"
        },
        "date": 1705554546813,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8360494.425531914,
            "unit": "ns",
            "range": "± 324850.4365957773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20599432.217391305,
            "unit": "ns",
            "range": "± 451309.385454445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50780280.5,
            "unit": "ns",
            "range": "± 573645.9826915163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103858296.61538461,
            "unit": "ns",
            "range": "± 968458.9537055368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214108652.2857143,
            "unit": "ns",
            "range": "± 2670560.984649341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75614.5752688172,
            "unit": "ns",
            "range": "± 13756.24074915167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320860.1956521739,
            "unit": "ns",
            "range": "± 37398.3561301299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313535.2528089888,
            "unit": "ns",
            "range": "± 31594.815503669735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301515.51086956525,
            "unit": "ns",
            "range": "± 30840.884693021246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4465244.683673469,
            "unit": "ns",
            "range": "± 418926.2892812723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078908.7653061226,
            "unit": "ns",
            "range": "± 343890.7365205936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18755.945652173912,
            "unit": "ns",
            "range": "± 2843.332073945662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87385.19791666667,
            "unit": "ns",
            "range": "± 14172.04461467775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88794.14583333333,
            "unit": "ns",
            "range": "± 17367.414498348804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96174.39784946236,
            "unit": "ns",
            "range": "± 16104.082428094587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5633.552083333333,
            "unit": "ns",
            "range": "± 1202.9077303704921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17282.483146067414,
            "unit": "ns",
            "range": "± 2799.870102962407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1425671.9204545454,
            "unit": "ns",
            "range": "± 145608.5172729222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3003094.3720930233,
            "unit": "ns",
            "range": "± 232794.37814415674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225024.051020408,
            "unit": "ns",
            "range": "± 211325.80697919917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11717647.372340426,
            "unit": "ns",
            "range": "± 2925488.419256295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3175562.410714286,
            "unit": "ns",
            "range": "± 131566.08820938304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3527896.3131313133,
            "unit": "ns",
            "range": "± 262191.61257501476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4342679.704545454,
            "unit": "ns",
            "range": "± 161004.04155949646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499037.417525773,
            "unit": "ns",
            "range": "± 484114.613198665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19966445.767676767,
            "unit": "ns",
            "range": "± 2554890.0643341793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5874511.117745535,
            "unit": "ns",
            "range": "± 90958.61031435528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1778901.4144005408,
            "unit": "ns",
            "range": "± 72706.37033230942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211293.6826533566,
            "unit": "ns",
            "range": "± 33765.48897757771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2862755.654987374,
            "unit": "ns",
            "range": "± 248639.52969644358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 915109.9146935096,
            "unit": "ns",
            "range": "± 42617.42233462262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834846.4200134277,
            "unit": "ns",
            "range": "± 25782.679821896985"
          }
        ]
      }
    ]
  }
}