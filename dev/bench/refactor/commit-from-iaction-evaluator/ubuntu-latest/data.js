window.BENCHMARK_DATA = {
  "lastUpdate": 1696475808866,
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
          "id": "bc7a99c65e5a7aacb0d24f5ac3d72213f300a257",
          "message": "Cleanup",
          "timestamp": "2023-10-05T11:56:09+09:00",
          "tree_id": "06d15ec5d16917f0ef69baf8d4d45a0825f90f34",
          "url": "https://github.com/greymistcube/libplanet/commit/bc7a99c65e5a7aacb0d24f5ac3d72213f300a257"
        },
        "date": 1696475799915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69207.02083333333,
            "unit": "ns",
            "range": "± 16850.412991958434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8542683.285714285,
            "unit": "ns",
            "range": "± 630302.9603363308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24347696.858585857,
            "unit": "ns",
            "range": "± 2381236.964932379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63151697.68,
            "unit": "ns",
            "range": "± 4277652.690362687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132539743.11,
            "unit": "ns",
            "range": "± 7921673.035458834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256425462.07575756,
            "unit": "ns",
            "range": "± 11969216.011288466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336745.44086021505,
            "unit": "ns",
            "range": "± 47479.90526469944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352648.09375,
            "unit": "ns",
            "range": "± 48466.7891679888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286476.22340425535,
            "unit": "ns",
            "range": "± 38709.56708122968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4930219.804123712,
            "unit": "ns",
            "range": "± 474226.4066973671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4652032.1632653065,
            "unit": "ns",
            "range": "± 438463.1858280796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31530.121212121212,
            "unit": "ns",
            "range": "± 12686.654564792967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117318.9693877551,
            "unit": "ns",
            "range": "± 22036.729923954717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122209.85416666667,
            "unit": "ns",
            "range": "± 20803.667827410765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127289.09375,
            "unit": "ns",
            "range": "± 23007.860173646437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7714.261904761905,
            "unit": "ns",
            "range": "± 1291.68012489056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32544.18556701031,
            "unit": "ns",
            "range": "± 10406.905877559037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1650732.6326530613,
            "unit": "ns",
            "range": "± 195887.88766554673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3062299.063829787,
            "unit": "ns",
            "range": "± 338508.868876932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2446110.397959184,
            "unit": "ns",
            "range": "± 310572.5844983327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11845214.294736842,
            "unit": "ns",
            "range": "± 1184710.0102025676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5818057.863399621,
            "unit": "ns",
            "range": "± 181374.83689651435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872179.7575520833,
            "unit": "ns",
            "range": "± 28518.92732559951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271726.2601841518,
            "unit": "ns",
            "range": "± 21773.16083271582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3015095.0221354165,
            "unit": "ns",
            "range": "± 140797.1860296623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943609.2035030242,
            "unit": "ns",
            "range": "± 27951.586609788203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886719.4210874496,
            "unit": "ns",
            "range": "± 26250.169487832187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3651039.5816326533,
            "unit": "ns",
            "range": "± 387609.20047712215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3915276.4242424243,
            "unit": "ns",
            "range": "± 565626.3486748172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5071436.797979798,
            "unit": "ns",
            "range": "± 565373.8064365113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4961855.197916667,
            "unit": "ns",
            "range": "± 611521.6543225272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13585717.41935484,
            "unit": "ns",
            "range": "± 1017491.0723914112"
          }
        ]
      }
    ]
  }
}