window.BENCHMARK_DATA = {
  "lastUpdate": 1702517177800,
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
          "id": "12c4fdea1532e2402db242e451b1655bdbe69092",
          "message": "Updated tests",
          "timestamp": "2023-12-13T09:33:00+09:00",
          "tree_id": "85070767558264a9019ca1c00801a3da551959e4",
          "url": "https://github.com/greymistcube/libplanet/commit/12c4fdea1532e2402db242e451b1655bdbe69092"
        },
        "date": 1702517153379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990785.7142857143,
            "unit": "ns",
            "range": "± 115017.22685853107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1756055.8823529412,
            "unit": "ns",
            "range": "± 80398.28724386575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1409353.7634408602,
            "unit": "ns",
            "range": "± 113951.34121646125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5298997.872340426,
            "unit": "ns",
            "range": "± 205279.90592842578"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34946.739130434784,
            "unit": "ns",
            "range": "± 2262.5207709304113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5097773.684210527,
            "unit": "ns",
            "range": "± 105206.14072754321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13292878.57142857,
            "unit": "ns",
            "range": "± 159656.40596929696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32990257.14285714,
            "unit": "ns",
            "range": "± 263321.8759041305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67052685.71428572,
            "unit": "ns",
            "range": "± 390984.580862887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135812966.66666666,
            "unit": "ns",
            "range": "± 1233711.586848324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303697.1540178573,
            "unit": "ns",
            "range": "± 6097.5569104189935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068719.7265625,
            "unit": "ns",
            "range": "± 1643.5176501051583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744808.96484375,
            "unit": "ns",
            "range": "± 1531.4393028043921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913401.5234375,
            "unit": "ns",
            "range": "± 3447.8004703844576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602961.23046875,
            "unit": "ns",
            "range": "± 1538.9507262150053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564875.2859933035,
            "unit": "ns",
            "range": "± 961.1407049454015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2226986.9565217393,
            "unit": "ns",
            "range": "± 54649.21445287393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2378288.2352941176,
            "unit": "ns",
            "range": "± 80202.90679784324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2860378.947368421,
            "unit": "ns",
            "range": "± 62816.457317660956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2702040.3846153845,
            "unit": "ns",
            "range": "± 111034.32124332916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6232078.571428572,
            "unit": "ns",
            "range": "± 227642.83271325342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180440.35087719298,
            "unit": "ns",
            "range": "± 7341.026097242878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174600,
            "unit": "ns",
            "range": "± 7660.864994177641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143850,
            "unit": "ns",
            "range": "± 2439.341020723551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2810016.6666666665,
            "unit": "ns",
            "range": "± 24991.465209813796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2599106.25,
            "unit": "ns",
            "range": "± 39978.46868419716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12958.247422680412,
            "unit": "ns",
            "range": "± 2096.657563395685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59273.11827956989,
            "unit": "ns",
            "range": "± 5832.687869184853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47569.89247311828,
            "unit": "ns",
            "range": "± 4062.414813721892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65136.36363636364,
            "unit": "ns",
            "range": "± 15619.444021471721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2889.6907216494847,
            "unit": "ns",
            "range": "± 518.3074489951391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12134.408602150537,
            "unit": "ns",
            "range": "± 1625.4427238819737"
          }
        ]
      }
    ]
  }
}