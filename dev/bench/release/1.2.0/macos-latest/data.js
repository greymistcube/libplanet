window.BENCHMARK_DATA = {
  "lastUpdate": 1684212059171,
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
          "id": "67095a318905220de755f1bdc333bf41106d38a8",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:26:31+09:00",
          "tree_id": "9b93bd801f7c90769d2c2ecbc0ee7ad86ce2f3d1",
          "url": "https://github.com/greymistcube/libplanet/commit/67095a318905220de755f1bdc333bf41106d38a8"
        },
        "date": 1684212044931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7634581.754545455,
            "unit": "ns",
            "range": "± 286696.43626886496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19432237.666666668,
            "unit": "ns",
            "range": "± 734815.5957808548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46660515.884615384,
            "unit": "ns",
            "range": "± 1218632.825597869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95182530.58333333,
            "unit": "ns",
            "range": "± 2420737.778350532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197208279.85185185,
            "unit": "ns",
            "range": "± 5410179.905243488"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59182.61052631579,
            "unit": "ns",
            "range": "± 6626.201415423497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312418.57608695654,
            "unit": "ns",
            "range": "± 22095.777622215763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285760.3142857143,
            "unit": "ns",
            "range": "± 12870.311455914993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280342.3052631579,
            "unit": "ns",
            "range": "± 18865.999052710853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3987676.5454545454,
            "unit": "ns",
            "range": "± 118848.08634294741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751939.8,
            "unit": "ns",
            "range": "± 180805.78412870038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17218.18888888889,
            "unit": "ns",
            "range": "± 1828.188891013035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84595.89361702128,
            "unit": "ns",
            "range": "± 9616.378311643475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79242.30898876404,
            "unit": "ns",
            "range": "± 7343.287639799176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101623.05263157895,
            "unit": "ns",
            "range": "± 15483.889034246531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4984.813186813187,
            "unit": "ns",
            "range": "± 641.9585987358083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16891.682352941178,
            "unit": "ns",
            "range": "± 1790.2036078119631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1508656.1505376345,
            "unit": "ns",
            "range": "± 167012.11031330389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3072501.9891304346,
            "unit": "ns",
            "range": "± 336391.04205257853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2488002.0368421054,
            "unit": "ns",
            "range": "± 240155.11957065578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6726864.032608695,
            "unit": "ns",
            "range": "± 491009.9746447594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3064392.1395348837,
            "unit": "ns",
            "range": "± 112832.36580992964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3260998.3095238097,
            "unit": "ns",
            "range": "± 107976.89228685111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4374298.919354838,
            "unit": "ns",
            "range": "± 310586.5249260111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4201319.5869565215,
            "unit": "ns",
            "range": "± 314536.6925318959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7579095.72881356,
            "unit": "ns",
            "range": "± 324613.28814127547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6028886.494591346,
            "unit": "ns",
            "range": "± 69367.02844561404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1991904.2039620536,
            "unit": "ns",
            "range": "± 24135.109771703283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270682.349330357,
            "unit": "ns",
            "range": "± 14420.693572732307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2437023.725167411,
            "unit": "ns",
            "range": "± 26221.433507199945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847278.9426432292,
            "unit": "ns",
            "range": "± 11416.43381843553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731296.2856770833,
            "unit": "ns",
            "range": "± 9178.06637562613"
          }
        ]
      }
    ]
  }
}