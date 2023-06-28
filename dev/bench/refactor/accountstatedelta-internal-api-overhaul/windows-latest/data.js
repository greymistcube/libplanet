window.BENCHMARK_DATA = {
  "lastUpdate": 1687930562101,
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
          "id": "c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca",
          "message": "Use mocked state for testing; make AccountStateDelta creator private",
          "timestamp": "2023-06-27T19:17:10+09:00",
          "tree_id": "cfb95f884f28b3ef3c68c89991ef131469521fa8",
          "url": "https://github.com/greymistcube/libplanet/commit/c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca"
        },
        "date": 1687930540206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660715.7303370787,
            "unit": "ns",
            "range": "± 91588.76953147745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3188183.3333333335,
            "unit": "ns",
            "range": "± 134253.06239302238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2688540.860215054,
            "unit": "ns",
            "range": "± 183924.30522208285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6536688.461538462,
            "unit": "ns",
            "range": "± 303706.792036079"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59593.333333333336,
            "unit": "ns",
            "range": "± 4210.9488108549185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9615823.333333334,
            "unit": "ns",
            "range": "± 80356.18445989321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25386746.666666668,
            "unit": "ns",
            "range": "± 452711.70243744476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62379375,
            "unit": "ns",
            "range": "± 400818.6489151694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130117275,
            "unit": "ns",
            "range": "± 2428863.371620561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258152354.16666666,
            "unit": "ns",
            "range": "± 6485880.961179489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6178496.09375,
            "unit": "ns",
            "range": "± 95944.0486800538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946160.6770833333,
            "unit": "ns",
            "range": "± 17642.400906946044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485218.3333333333,
            "unit": "ns",
            "range": "± 18878.130057929284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3280606.863839286,
            "unit": "ns",
            "range": "± 40255.850083498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019855.2604166666,
            "unit": "ns",
            "range": "± 18747.923509905988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954684.5247395834,
            "unit": "ns",
            "range": "± 13867.073932137737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4143191.891891892,
            "unit": "ns",
            "range": "± 140680.16597622816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4509636.842105263,
            "unit": "ns",
            "range": "± 90582.13099800839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5559050,
            "unit": "ns",
            "range": "± 124622.83957147319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5402483.333333333,
            "unit": "ns",
            "range": "± 161665.62998838138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8476279.591836736,
            "unit": "ns",
            "range": "± 287738.13903993205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333408.3333333333,
            "unit": "ns",
            "range": "± 13110.899044644699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315511.94029850746,
            "unit": "ns",
            "range": "± 14819.3825004064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301261.1111111111,
            "unit": "ns",
            "range": "± 9827.316964978729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5082592.307692308,
            "unit": "ns",
            "range": "± 47815.48670912771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4592157.142857143,
            "unit": "ns",
            "range": "± 75255.16301516833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28534.69387755102,
            "unit": "ns",
            "range": "± 2544.7379319757774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119709.78260869565,
            "unit": "ns",
            "range": "± 10350.644294673595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118117.8947368421,
            "unit": "ns",
            "range": "± 8628.490400095863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132290.81632653062,
            "unit": "ns",
            "range": "± 19812.216822183607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9533.333333333334,
            "unit": "ns",
            "range": "± 1946.7398178409323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28042.55319148936,
            "unit": "ns",
            "range": "± 2336.686808084414"
          }
        ]
      }
    ]
  }
}