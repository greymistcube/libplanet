window.BENCHMARK_DATA = {
  "lastUpdate": 1705903360428,
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
          "id": "2492963ab81141a40d92fca3e8a1b7cf63e3d07e",
          "message": "Removed EnumerableExtensions",
          "timestamp": "2024-01-22T14:45:02+09:00",
          "tree_id": "5f0010686140c2cef7ccc8649fdd5c2f99f01253",
          "url": "https://github.com/greymistcube/libplanet/commit/2492963ab81141a40d92fca3e8a1b7cf63e3d07e"
        },
        "date": 1705903341366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7993566.8,
            "unit": "ns",
            "range": "± 204262.08571791617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20122409.6,
            "unit": "ns",
            "range": "± 527124.1530854788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51038256.85714286,
            "unit": "ns",
            "range": "± 1458909.9921026584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100487056.16666667,
            "unit": "ns",
            "range": "± 2089366.4362665482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203295770.15384614,
            "unit": "ns",
            "range": "± 2564165.7850491013"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48227.64736842105,
            "unit": "ns",
            "range": "± 9857.828329926771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222623.77586206896,
            "unit": "ns",
            "range": "± 11765.291397462337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216787.828125,
            "unit": "ns",
            "range": "± 9966.673804034213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204694.75510204083,
            "unit": "ns",
            "range": "± 15588.588765908306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3998026.6153846155,
            "unit": "ns",
            "range": "± 63624.03432867496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3579074.2916666665,
            "unit": "ns",
            "range": "± 81136.87268650434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17675.854166666668,
            "unit": "ns",
            "range": "± 5421.873711820465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72293.85869565218,
            "unit": "ns",
            "range": "± 11423.432934664635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92574.21,
            "unit": "ns",
            "range": "± 29840.30199609382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71422.08510638298,
            "unit": "ns",
            "range": "± 10929.191701127345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4868.916666666667,
            "unit": "ns",
            "range": "± 1244.0500638654014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12986.477777777778,
            "unit": "ns",
            "range": "± 1858.6436698935747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1152118.2113402062,
            "unit": "ns",
            "range": "± 125270.87605007523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2321192.268115942,
            "unit": "ns",
            "range": "± 111950.84960389392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1894120.0105263158,
            "unit": "ns",
            "range": "± 182633.04860557953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19157987.32222222,
            "unit": "ns",
            "range": "± 2030390.4442387961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3018517.3333333335,
            "unit": "ns",
            "range": "± 133668.4161345563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3146549.7,
            "unit": "ns",
            "range": "± 110646.81318042836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3677531.088235294,
            "unit": "ns",
            "range": "± 117913.94179972763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3853762.825,
            "unit": "ns",
            "range": "± 136669.14882728187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22466892.731182795,
            "unit": "ns",
            "range": "± 2855719.875697009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4863733.731299867,
            "unit": "ns",
            "range": "± 413114.6127046193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514177.7729910715,
            "unit": "ns",
            "range": "± 71429.72918399195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1012717.5101023706,
            "unit": "ns",
            "range": "± 28949.420366843216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2511058.2121360083,
            "unit": "ns",
            "range": "± 184101.94448838098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653127.8251302083,
            "unit": "ns",
            "range": "± 7030.339062282315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579504.7306640625,
            "unit": "ns",
            "range": "± 3058.5775674625897"
          }
        ]
      }
    ]
  }
}