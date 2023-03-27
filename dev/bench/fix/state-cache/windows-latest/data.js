window.BENCHMARK_DATA = {
  "lastUpdate": 1679897321469,
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
          "id": "d3f84965e05ffa4207e70fb116348a48e118200e",
          "message": "Fixed improper cache fetching",
          "timestamp": "2023-03-27T14:48:56+09:00",
          "tree_id": "32e53a21b0e02d9b0181c0b9be199bbd2ccefe6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3f84965e05ffa4207e70fb116348a48e118200e"
        },
        "date": 1679897298110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121804.34782608696,
            "unit": "ns",
            "range": "± 11824.057363571448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6131030.818965517,
            "unit": "ns",
            "range": "± 177473.0604288378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869717.5,
            "unit": "ns",
            "range": "± 34369.74685034725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359520.396205357,
            "unit": "ns",
            "range": "± 16191.893595961881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3025372.9817708335,
            "unit": "ns",
            "range": "± 63287.71988360643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023995.1083096591,
            "unit": "ns",
            "range": "± 24473.67366998911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942711.5783691406,
            "unit": "ns",
            "range": "± 27530.19018438693"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5694384.303042763,
            "unit": "ns",
            "range": "± 288669.8140822683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6481509.411764706,
            "unit": "ns",
            "range": "± 349601.9446059603"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29265826.153846152,
            "unit": "ns",
            "range": "± 1360583.1311055706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7312391.919191919,
            "unit": "ns",
            "range": "± 605239.9331411702"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35055210.824742265,
            "unit": "ns",
            "range": "± 2637143.285733822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103685.41666666667,
            "unit": "ns",
            "range": "± 12931.01517703741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225213.40206185568,
            "unit": "ns",
            "range": "± 23014.84859854059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187791.39784946237,
            "unit": "ns",
            "range": "± 13445.571890386835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4354474.666666667,
            "unit": "ns",
            "range": "± 210389.19732141562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10950553.125,
            "unit": "ns",
            "range": "± 503704.69553850667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24516.494845360823,
            "unit": "ns",
            "range": "± 6488.012671014444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58887.62886597938,
            "unit": "ns",
            "range": "± 9614.770080150543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53460.82474226804,
            "unit": "ns",
            "range": "± 9260.158348864674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124618.08510638298,
            "unit": "ns",
            "range": "± 23911.831609423192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11929.29292929293,
            "unit": "ns",
            "range": "± 5919.291403490734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23672.727272727272,
            "unit": "ns",
            "range": "± 6877.630378912674"
          }
        ]
      }
    ]
  }
}