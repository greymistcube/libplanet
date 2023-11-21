window.BENCHMARK_DATA = {
  "lastUpdate": 1700537140713,
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
          "id": "f1142cf897d8e43294230fcf03a832bc254509a4",
          "message": "Release 3.7.1",
          "timestamp": "2023-11-21T09:14:45+09:00",
          "tree_id": "b6b49167f5b1d662728c77d704f5f4d189bd5805",
          "url": "https://github.com/greymistcube/libplanet/commit/f1142cf897d8e43294230fcf03a832bc254509a4"
        },
        "date": 1700526632638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7558989.230769231,
            "unit": "ns",
            "range": "± 66037.34332955591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18593384.466666665,
            "unit": "ns",
            "range": "± 225510.60584145694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47119106.86666667,
            "unit": "ns",
            "range": "± 870946.1796474869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92622793.4,
            "unit": "ns",
            "range": "± 1280591.9607417502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190729981.13333333,
            "unit": "ns",
            "range": "± 2669170.8669464826"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44790.52173913043,
            "unit": "ns",
            "range": "± 11976.473066366923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220867.98550724637,
            "unit": "ns",
            "range": "± 10661.418734214385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215264.76041666666,
            "unit": "ns",
            "range": "± 15705.937270408143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194992.3404255319,
            "unit": "ns",
            "range": "± 17213.974586528817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3681458.8333333335,
            "unit": "ns",
            "range": "± 40779.103080629495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3478738.625,
            "unit": "ns",
            "range": "± 65215.82638784852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13617.069892473119,
            "unit": "ns",
            "range": "± 1499.0294715164837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61480.183673469386,
            "unit": "ns",
            "range": "± 7778.6447599159455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54832.913043478264,
            "unit": "ns",
            "range": "± 6580.747756623979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67348.66315789474,
            "unit": "ns",
            "range": "± 13904.93271622618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3681.6404494382023,
            "unit": "ns",
            "range": "± 702.5981045569853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12400.466292134832,
            "unit": "ns",
            "range": "± 1154.2679345628376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1143724.7849462365,
            "unit": "ns",
            "range": "± 142485.11385174436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2427486.9777777777,
            "unit": "ns",
            "range": "± 242005.76687283168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1670463.2608695652,
            "unit": "ns",
            "range": "± 143849.02349654384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6856835.79032258,
            "unit": "ns",
            "range": "± 535331.7071027608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3146094.3076923075,
            "unit": "ns",
            "range": "± 37837.42120657937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3011335.6764705884,
            "unit": "ns",
            "range": "± 144291.40709641692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3596075.5517241377,
            "unit": "ns",
            "range": "± 102960.95933916832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3403001.403846154,
            "unit": "ns",
            "range": "± 130817.49998004774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12662726.229166666,
            "unit": "ns",
            "range": "± 1925672.3853729607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4304811.119140625,
            "unit": "ns",
            "range": "± 37535.93824842118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1346784.359375,
            "unit": "ns",
            "range": "± 16288.148966929455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915427.8943684896,
            "unit": "ns",
            "range": "± 4442.312505407408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2155091.2876790366,
            "unit": "ns",
            "range": "± 85037.60446285614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645015.6261160715,
            "unit": "ns",
            "range": "± 6312.697375782434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568030.0365084135,
            "unit": "ns",
            "range": "± 8474.82539456669"
          }
        ]
      },
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
          "id": "326d26e558508a7a232a335251bf15af1eaa7581",
          "message": "Release 3.7.1",
          "timestamp": "2023-11-21T12:04:29+09:00",
          "tree_id": "31ff2a4e877d3793bb1a40b66faf88c0752310fb",
          "url": "https://github.com/greymistcube/libplanet/commit/326d26e558508a7a232a335251bf15af1eaa7581"
        },
        "date": 1700537119880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7873857.5,
            "unit": "ns",
            "range": "± 109667.33025539627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20206086.11764706,
            "unit": "ns",
            "range": "± 961877.727076204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48326653.1,
            "unit": "ns",
            "range": "± 807102.6016339265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97098340.83333333,
            "unit": "ns",
            "range": "± 1988823.6754269062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199363714.02941176,
            "unit": "ns",
            "range": "± 2718716.943574628"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45902.072916666664,
            "unit": "ns",
            "range": "± 7721.400863825836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232532.43684210526,
            "unit": "ns",
            "range": "± 20673.141137363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211055.2584269663,
            "unit": "ns",
            "range": "± 11693.551887227199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201459.2319587629,
            "unit": "ns",
            "range": "± 20764.24859409571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3704896.0384615385,
            "unit": "ns",
            "range": "± 51996.95643274931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3435912.625,
            "unit": "ns",
            "range": "± 88579.65258446036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16758.244680851065,
            "unit": "ns",
            "range": "± 4303.980175150634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75629.92708333333,
            "unit": "ns",
            "range": "± 11628.556669043388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77460.78735632185,
            "unit": "ns",
            "range": "± 10675.578310034332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74844.1182795699,
            "unit": "ns",
            "range": "± 13717.82420069142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6261.025773195876,
            "unit": "ns",
            "range": "± 1228.1447398140783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15268.625,
            "unit": "ns",
            "range": "± 2661.624249846026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1176165.3617021276,
            "unit": "ns",
            "range": "± 149530.32578249957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2378313.8636363638,
            "unit": "ns",
            "range": "± 112045.0537103283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1757452.3072289156,
            "unit": "ns",
            "range": "± 181907.0189506138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10034784.57142857,
            "unit": "ns",
            "range": "± 2473784.5783906705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2961520.6352941175,
            "unit": "ns",
            "range": "± 158728.0290075304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3005833.8913043477,
            "unit": "ns",
            "range": "± 98940.88647924595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3751838.9375,
            "unit": "ns",
            "range": "± 173461.91500527607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3537745.8188405796,
            "unit": "ns",
            "range": "± 169844.300752145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13065058.5,
            "unit": "ns",
            "range": "± 1889984.6701119742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4603388.243348817,
            "unit": "ns",
            "range": "± 152760.24749344253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1476110.7060810812,
            "unit": "ns",
            "range": "± 71124.04871456935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 935634.1770109953,
            "unit": "ns",
            "range": "± 38807.045469101824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2183754.5361328125,
            "unit": "ns",
            "range": "± 153922.67769379402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633195.7823414522,
            "unit": "ns",
            "range": "± 10749.598512751449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567323.3905552456,
            "unit": "ns",
            "range": "± 7302.737593069536"
          }
        ]
      }
    ]
  }
}