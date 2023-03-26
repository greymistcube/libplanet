window.BENCHMARK_DATA = {
  "lastUpdate": 1679870881016,
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
          "id": "e57ef4b9b44b854ec0aa917a261da925a85b78a9",
          "message": "Revert \"Cache during commit\"\n\nThis reverts commit 49a8555cfbbb28ac03f9b44e572fee87963625ab.",
          "timestamp": "2023-03-27T07:36:22+09:00",
          "tree_id": "3c13c9cfbea7a0a6a8d5fd897110ac350025fbbd",
          "url": "https://github.com/greymistcube/libplanet/commit/e57ef4b9b44b854ec0aa917a261da925a85b78a9"
        },
        "date": 1679870873147,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100409.79661016949,
            "unit": "ns",
            "range": "± 4420.856056044369"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4413890.406529018,
            "unit": "ns",
            "range": "± 21809.085363850827"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6031643.571428572,
            "unit": "ns",
            "range": "± 103405.55992023632"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25334049.666666668,
            "unit": "ns",
            "range": "± 390289.08981267916"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6781351.866666666,
            "unit": "ns",
            "range": "± 71664.79560312786"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28222236.133333333,
            "unit": "ns",
            "range": "± 483597.6576855816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6000769.031770834,
            "unit": "ns",
            "range": "± 28787.474610707475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842910.6493389423,
            "unit": "ns",
            "range": "± 2107.095758661538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356596.8784877232,
            "unit": "ns",
            "range": "± 1521.4759276718084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529284.704947917,
            "unit": "ns",
            "range": "± 2093.5877610388184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838234.9604492188,
            "unit": "ns",
            "range": "± 862.0263754998621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747742.3264973959,
            "unit": "ns",
            "range": "± 4178.274668174289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85057.75824175825,
            "unit": "ns",
            "range": "± 5847.992691401154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196140.81318681317,
            "unit": "ns",
            "range": "± 11635.888500585008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169084.37037037036,
            "unit": "ns",
            "range": "± 4227.14591064202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3769513.3076923075,
            "unit": "ns",
            "range": "± 14066.084105539203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9550240.461538462,
            "unit": "ns",
            "range": "± 29526.364861524988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15227.540229885057,
            "unit": "ns",
            "range": "± 1113.890195463082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47585.51648351648,
            "unit": "ns",
            "range": "± 2809.931847187114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40597.80612244898,
            "unit": "ns",
            "range": "± 2925.3445357334635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90096.26666666666,
            "unit": "ns",
            "range": "± 9675.084055379142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5582.602040816327,
            "unit": "ns",
            "range": "± 786.8673467866683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14767.239130434782,
            "unit": "ns",
            "range": "± 1461.407844252655"
          }
        ]
      }
    ]
  }
}