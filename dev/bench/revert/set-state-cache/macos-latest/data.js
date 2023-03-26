window.BENCHMARK_DATA = {
  "lastUpdate": 1679870999223,
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
        "date": 1679870982350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114585.69191919192,
            "unit": "ns",
            "range": "± 9042.843079064633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97598.0744680851,
            "unit": "ns",
            "range": "± 12818.555224679509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210014.51111111112,
            "unit": "ns",
            "range": "± 22772.11466163818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178766.05263157896,
            "unit": "ns",
            "range": "± 5669.8117417022095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3438362.904761905,
            "unit": "ns",
            "range": "± 79846.34194495372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9558078.92857143,
            "unit": "ns",
            "range": "± 343858.2131681456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18265.202127659573,
            "unit": "ns",
            "range": "± 3282.9616696355893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52748.604395604394,
            "unit": "ns",
            "range": "± 7152.128144637357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46973.41052631579,
            "unit": "ns",
            "range": "± 4926.712413163131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103441.67032967033,
            "unit": "ns",
            "range": "± 14568.48222938435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5444.870588235294,
            "unit": "ns",
            "range": "± 780.9630926624128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16651.40425531915,
            "unit": "ns",
            "range": "± 2151.025508460142"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4569777.398697916,
            "unit": "ns",
            "range": "± 65784.61648981355"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5691874.415730337,
            "unit": "ns",
            "range": "± 628353.664650743"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25204856.71818182,
            "unit": "ns",
            "range": "± 1000828.0379511256"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6585938.659090909,
            "unit": "ns",
            "range": "± 481037.63840200345"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28910411.717391305,
            "unit": "ns",
            "range": "± 1105041.518237747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6115769.735416667,
            "unit": "ns",
            "range": "± 46076.21017365559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952262.6616586538,
            "unit": "ns",
            "range": "± 15745.297887891616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1229663.0477864584,
            "unit": "ns",
            "range": "± 9837.573272742606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624890.6684895833,
            "unit": "ns",
            "range": "± 20959.126837099815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815010.53203125,
            "unit": "ns",
            "range": "± 6502.78763514671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 697979.9230018029,
            "unit": "ns",
            "range": "± 2711.9582842686723"
          }
        ]
      }
    ]
  }
}