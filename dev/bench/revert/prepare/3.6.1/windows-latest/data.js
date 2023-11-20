window.BENCHMARK_DATA = {
  "lastUpdate": 1700482350991,
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
          "id": "17fb083308c0f6352347441c8879bf63319bb6b6",
          "message": "Revert \"Prepare 3.6.2\"\n\nThis reverts commit 585f4ed3ed66691c663e6e789ea87a50001ec8ea.",
          "timestamp": "2023-11-20T21:00:16+09:00",
          "tree_id": "05387f165cf02d173e9e04590549dee77618644e",
          "url": "https://github.com/greymistcube/libplanet/commit/17fb083308c0f6352347441c8879bf63319bb6b6"
        },
        "date": 1700482332167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949376.5306122449,
            "unit": "ns",
            "range": "± 92762.27214892383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1679376.4705882352,
            "unit": "ns",
            "range": "± 71814.38370382578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1346125.5102040817,
            "unit": "ns",
            "range": "± 117454.21771927261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5169794.94949495,
            "unit": "ns",
            "range": "± 315913.8213583769"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33517.46031746032,
            "unit": "ns",
            "range": "± 1508.8491323008602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5343905.263157895,
            "unit": "ns",
            "range": "± 102282.41661467533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13400291.666666666,
            "unit": "ns",
            "range": "± 206989.65919859742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33826120,
            "unit": "ns",
            "range": "± 473000.1226215486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66256720,
            "unit": "ns",
            "range": "± 649605.3749337802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137186703.33333334,
            "unit": "ns",
            "range": "± 2022035.824843957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3225335.486778846,
            "unit": "ns",
            "range": "± 10027.263774330557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1020198.1219951923,
            "unit": "ns",
            "range": "± 4010.9164348810186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 695178.8606770834,
            "unit": "ns",
            "range": "± 6558.336240343433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948395.9402901786,
            "unit": "ns",
            "range": "± 14485.262534528658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620168.9903846154,
            "unit": "ns",
            "range": "± 1185.0391271326985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560597.9561941965,
            "unit": "ns",
            "range": "± 1577.628586852806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2262334.6153846155,
            "unit": "ns",
            "range": "± 61076.777533250344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2318447.8260869565,
            "unit": "ns",
            "range": "± 58414.55196629454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2848163.6363636362,
            "unit": "ns",
            "range": "± 68798.86866078779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2787125.2577319588,
            "unit": "ns",
            "range": "± 311284.14405455446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5966670.454545454,
            "unit": "ns",
            "range": "± 222264.34563223014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177436.73469387754,
            "unit": "ns",
            "range": "± 6742.826245893701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169165.27777777778,
            "unit": "ns",
            "range": "± 8300.57964584185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145710.86956521738,
            "unit": "ns",
            "range": "± 5176.666806648186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748585.714285714,
            "unit": "ns",
            "range": "± 27435.40265207199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2502706.6666666665,
            "unit": "ns",
            "range": "± 33125.22704324706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11476.923076923076,
            "unit": "ns",
            "range": "± 1454.5772141054842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59791.666666666664,
            "unit": "ns",
            "range": "± 6118.163925930833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46187.5,
            "unit": "ns",
            "range": "± 3755.3961175886625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54401.19047619047,
            "unit": "ns",
            "range": "± 7025.812889514096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3015.9574468085107,
            "unit": "ns",
            "range": "± 632.6770552456215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11194.38202247191,
            "unit": "ns",
            "range": "± 1621.4723633561205"
          }
        ]
      }
    ]
  }
}