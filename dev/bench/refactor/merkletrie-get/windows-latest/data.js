window.BENCHMARK_DATA = {
  "lastUpdate": 1690874569388,
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
          "id": "97d0159a1bc6953ac6c44c96cbdfe29a75db0436",
          "message": "Cleanup and optimize Get()",
          "timestamp": "2023-08-01T16:03:20+09:00",
          "tree_id": "839690871fa2434a8c18fc659198a5124016dda8",
          "url": "https://github.com/greymistcube/libplanet/commit/97d0159a1bc6953ac6c44c96cbdfe29a75db0436"
        },
        "date": 1690874544006,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1497208.762886598,
            "unit": "ns",
            "range": "± 268489.5838112165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2804155.6701030927,
            "unit": "ns",
            "range": "± 370055.4640211248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1982881.914893617,
            "unit": "ns",
            "range": "± 278016.9306992536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5375398.936170213,
            "unit": "ns",
            "range": "± 646516.5411308864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60605.31914893617,
            "unit": "ns",
            "range": "± 14875.861713695971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7743250.52631579,
            "unit": "ns",
            "range": "± 734648.5455679056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22761505.154639177,
            "unit": "ns",
            "range": "± 1953687.7559060764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56677140.81632653,
            "unit": "ns",
            "range": "± 5508714.780205729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111766206,
            "unit": "ns",
            "range": "± 8295880.33570929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215453648,
            "unit": "ns",
            "range": "± 14982701.750233853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5080481.808035715,
            "unit": "ns",
            "range": "± 89831.17422041799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1725506.263950893,
            "unit": "ns",
            "range": "± 48111.273303888265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308767.1440972222,
            "unit": "ns",
            "range": "± 26701.05221226721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2933901.1584051726,
            "unit": "ns",
            "range": "± 83154.95745404945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955254.0183738426,
            "unit": "ns",
            "range": "± 25812.26055574479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860316.1671605604,
            "unit": "ns",
            "range": "± 20975.201773482248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3030286.597938144,
            "unit": "ns",
            "range": "± 316270.4890032376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3332675,
            "unit": "ns",
            "range": "± 411856.1759694888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4378726.595744681,
            "unit": "ns",
            "range": "± 458810.1512351906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3680548.947368421,
            "unit": "ns",
            "range": "± 414201.8493683445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6688972.164948453,
            "unit": "ns",
            "range": "± 675158.1607517154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285666.3043478261,
            "unit": "ns",
            "range": "± 46818.1360491332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303806.4516129032,
            "unit": "ns",
            "range": "± 46639.39789689758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253085.56701030929,
            "unit": "ns",
            "range": "± 42979.61723715364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4010297.8494623657,
            "unit": "ns",
            "range": "± 341059.20465848956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3679360,
            "unit": "ns",
            "range": "± 374716.64426518563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27957.14285714286,
            "unit": "ns",
            "range": "± 9689.765032845356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94866.66666666667,
            "unit": "ns",
            "range": "± 16453.923368087584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99390.72164948453,
            "unit": "ns",
            "range": "± 21700.46122049323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124610.41666666667,
            "unit": "ns",
            "range": "± 22126.071685810246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4938.235294117647,
            "unit": "ns",
            "range": "± 1052.8206744498418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29426.262626262625,
            "unit": "ns",
            "range": "± 9531.361616099466"
          }
        ]
      }
    ]
  }
}