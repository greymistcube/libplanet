window.BENCHMARK_DATA = {
  "lastUpdate": 1700533545071,
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
          "id": "12bea58324a8edab0a611a6612a42843839b885f",
          "message": "Release 3.6.2",
          "timestamp": "2023-11-21T11:11:15+09:00",
          "tree_id": "b3f337e651b4db2e3f6f4aee02b43a29cc8f980a",
          "url": "https://github.com/greymistcube/libplanet/commit/12bea58324a8edab0a611a6612a42843839b885f"
        },
        "date": 1700533531533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7863340.285714285,
            "unit": "ns",
            "range": "± 236012.70567886202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20521071.55263158,
            "unit": "ns",
            "range": "± 697889.4909805794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52332831.81111111,
            "unit": "ns",
            "range": "± 3843771.4481574316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108194570.9945055,
            "unit": "ns",
            "range": "± 8596753.97642323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223770470.6382979,
            "unit": "ns",
            "range": "± 18652227.97483072"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50395.357894736844,
            "unit": "ns",
            "range": "± 9987.080284809446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254026.14285714287,
            "unit": "ns",
            "range": "± 24263.507971597588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246212.9111111111,
            "unit": "ns",
            "range": "± 22365.268180339954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250074.0760869565,
            "unit": "ns",
            "range": "± 38496.54659300693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3980621.9318181816,
            "unit": "ns",
            "range": "± 146808.15220891256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3769965.9943820224,
            "unit": "ns",
            "range": "± 223733.5518518687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15791.005494505494,
            "unit": "ns",
            "range": "± 2706.7211422006776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77335.22826086957,
            "unit": "ns",
            "range": "± 10740.37188881101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84441.45263157894,
            "unit": "ns",
            "range": "± 15364.239271049235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84573.63043478261,
            "unit": "ns",
            "range": "± 14537.433755741762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4153.373626373626,
            "unit": "ns",
            "range": "± 918.7358301051098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12552.666666666666,
            "unit": "ns",
            "range": "± 1182.0102568044879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1209136.9278350514,
            "unit": "ns",
            "range": "± 156314.0018671184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2595395.2590361447,
            "unit": "ns",
            "range": "± 223621.35174875683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590924.4101123596,
            "unit": "ns",
            "range": "± 125793.46026366181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7525091.784946237,
            "unit": "ns",
            "range": "± 891280.0929203853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204071.6559139783,
            "unit": "ns",
            "range": "± 291273.88720328285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429623.9795918367,
            "unit": "ns",
            "range": "± 429672.8509420387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3773501.6636363636,
            "unit": "ns",
            "range": "± 148787.46624616673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3729381.3846153845,
            "unit": "ns",
            "range": "± 251108.56244318665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14663064.857142856,
            "unit": "ns",
            "range": "± 2538009.424757549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4386513.728365385,
            "unit": "ns",
            "range": "± 41855.677382681286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1305792.1965332031,
            "unit": "ns",
            "range": "± 16443.207036793065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 858441.8889322917,
            "unit": "ns",
            "range": "± 9046.210066338892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960738.1709635416,
            "unit": "ns",
            "range": "± 18669.949415686722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645928.5754206731,
            "unit": "ns",
            "range": "± 8336.351413416585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572082.33515625,
            "unit": "ns",
            "range": "± 2997.5333782126877"
          }
        ]
      }
    ]
  }
}