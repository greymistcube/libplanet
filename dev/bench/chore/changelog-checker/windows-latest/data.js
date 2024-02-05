window.BENCHMARK_DATA = {
  "lastUpdate": 1707152434132,
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
          "id": "eebea10b6c19f838c7378de055d759e33d09fc32",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:48:12+09:00",
          "tree_id": "35d56191c462f4ee3a7b9749431d77f05fa78129",
          "url": "https://github.com/greymistcube/libplanet/commit/eebea10b6c19f838c7378de055d759e33d09fc32"
        },
        "date": 1707152411327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027164.6464646464,
            "unit": "ns",
            "range": "± 141489.1899765875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1739859.2592592593,
            "unit": "ns",
            "range": "± 70727.18118185905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1544171.4285714286,
            "unit": "ns",
            "range": "± 157637.55112844528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10819277.41935484,
            "unit": "ns",
            "range": "± 977912.9255859393"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34427.94117647059,
            "unit": "ns",
            "range": "± 1586.2135133458494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5073513.333333333,
            "unit": "ns",
            "range": "± 36813.69827866226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13469053.333333334,
            "unit": "ns",
            "range": "± 154525.29550976746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32904500,
            "unit": "ns",
            "range": "± 798381.3565434694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66304217.64705882,
            "unit": "ns",
            "range": "± 1351637.2563650787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132221480,
            "unit": "ns",
            "range": "± 1352654.2754366847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3373711.160714286,
            "unit": "ns",
            "range": "± 9634.025233638838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074429.2367788462,
            "unit": "ns",
            "range": "± 1642.678685766847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738158.7472098215,
            "unit": "ns",
            "range": "± 1712.6022045834661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959643.8151041667,
            "unit": "ns",
            "range": "± 3654.3305767925867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612594.2122395834,
            "unit": "ns",
            "range": "± 1169.7698280254185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580222.6283482143,
            "unit": "ns",
            "range": "± 1223.7297601277132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2111656.9444444445,
            "unit": "ns",
            "range": "± 104153.91350100262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237242.8571428573,
            "unit": "ns",
            "range": "± 95296.41576230901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2798808.695652174,
            "unit": "ns",
            "range": "± 69099.68367934096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2883537.9310344825,
            "unit": "ns",
            "range": "± 81828.89558529652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12316098.351648351,
            "unit": "ns",
            "range": "± 1511590.1134870185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172691.02564102566,
            "unit": "ns",
            "range": "± 8853.896139919241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168732.35294117648,
            "unit": "ns",
            "range": "± 7480.131716784069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138133.33333333334,
            "unit": "ns",
            "range": "± 3489.570381762684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2841142.8571428573,
            "unit": "ns",
            "range": "± 43370.61597061229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2516035.714285714,
            "unit": "ns",
            "range": "± 29611.733826640077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12184.615384615385,
            "unit": "ns",
            "range": "± 1489.8115523577007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57416.12903225807,
            "unit": "ns",
            "range": "± 6109.068283095019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47396.84210526316,
            "unit": "ns",
            "range": "± 2817.0624745366104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63360.606060606064,
            "unit": "ns",
            "range": "± 14319.537233015528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2865.979381443299,
            "unit": "ns",
            "range": "± 898.3650193010521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11123.404255319148,
            "unit": "ns",
            "range": "± 1512.1319800675428"
          }
        ]
      }
    ]
  }
}