window.BENCHMARK_DATA = {
  "lastUpdate": 1705548450754,
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
          "id": "82760cbd4c2fbec0e46cb9fa61e43ed5e5ac6bb0",
          "message": "Changelog; linting",
          "timestamp": "2024-01-18T12:14:03+09:00",
          "tree_id": "3346d90600647c3f8c3ed1ca8491013d2dfb717d",
          "url": "https://github.com/greymistcube/libplanet/commit/82760cbd4c2fbec0e46cb9fa61e43ed5e5ac6bb0"
        },
        "date": 1705548435244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7681594.5625,
            "unit": "ns",
            "range": "± 146076.31315855365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18782722.866666667,
            "unit": "ns",
            "range": "± 325257.0831719924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46994553.0625,
            "unit": "ns",
            "range": "± 798598.1733129178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92720271.66666667,
            "unit": "ns",
            "range": "± 1307150.8549890192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191361069.5882353,
            "unit": "ns",
            "range": "± 6028262.014451751"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37503.760869565216,
            "unit": "ns",
            "range": "± 6132.999025931633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214995.74561403508,
            "unit": "ns",
            "range": "± 9246.934594928322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214745.84375,
            "unit": "ns",
            "range": "± 17338.595950761122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199277.17777777778,
            "unit": "ns",
            "range": "± 11296.908913581086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3818646.7647058824,
            "unit": "ns",
            "range": "± 69595.921535074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3430827.9285714286,
            "unit": "ns",
            "range": "± 53774.40947065419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12974.197674418605,
            "unit": "ns",
            "range": "± 864.5631888554703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59361.54347826087,
            "unit": "ns",
            "range": "± 3553.490433619476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53679.28723404255,
            "unit": "ns",
            "range": "± 5905.703068089137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60231.096774193546,
            "unit": "ns",
            "range": "± 10364.578052050872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3553.087912087912,
            "unit": "ns",
            "range": "± 840.748788592006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11582.011764705883,
            "unit": "ns",
            "range": "± 711.8803319398571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1102890.5505617978,
            "unit": "ns",
            "range": "± 109202.38907226876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2402824.6170212766,
            "unit": "ns",
            "range": "± 141673.6544407002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642948.6022727273,
            "unit": "ns",
            "range": "± 139582.56082955544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7256318.554945055,
            "unit": "ns",
            "range": "± 702341.1663432581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2843961,
            "unit": "ns",
            "range": "± 91272.19281042962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2965815.7682926827,
            "unit": "ns",
            "range": "± 99157.71679325427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3536579.787234043,
            "unit": "ns",
            "range": "± 136378.20318653758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3454567.533333333,
            "unit": "ns",
            "range": "± 153590.9552486256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13686697.734042553,
            "unit": "ns",
            "range": "± 2646975.6837672293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4240232.80703125,
            "unit": "ns",
            "range": "± 63594.87574839555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1360684.2009114583,
            "unit": "ns",
            "range": "± 15924.153246162376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 888198.1559895833,
            "unit": "ns",
            "range": "± 12753.830987309448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002247.0223214286,
            "unit": "ns",
            "range": "± 20439.487210888026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619054.2789481027,
            "unit": "ns",
            "range": "± 9735.9267537472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563659.3801432292,
            "unit": "ns",
            "range": "± 7228.550111006211"
          }
        ]
      }
    ]
  }
}