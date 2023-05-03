window.BENCHMARK_DATA = {
  "lastUpdate": 1683108010707,
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
          "id": "4c2ca5ac4b94e7846843416973a58b75e87c266d",
          "message": "Changed IActionTypeLoader to IActionLoader",
          "timestamp": "2023-05-03T18:42:43+09:00",
          "tree_id": "df79e2790e2a2a3e14665657538de57183736d5a",
          "url": "https://github.com/greymistcube/libplanet/commit/4c2ca5ac4b94e7846843416973a58b75e87c266d"
        },
        "date": 1683108001464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346092.2121212121,
            "unit": "ns",
            "range": "± 10979.253406304479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333307.5714285714,
            "unit": "ns",
            "range": "± 12031.834363608488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289912,
            "unit": "ns",
            "range": "± 8243.346956002582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5184298.307692308,
            "unit": "ns",
            "range": "± 26324.35458969702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4772912.214285715,
            "unit": "ns",
            "range": "± 53617.90697745351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26990.978723404256,
            "unit": "ns",
            "range": "± 1795.0978706281835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116240.20833333333,
            "unit": "ns",
            "range": "± 9839.048594267175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105023.0303030303,
            "unit": "ns",
            "range": "± 6944.859138834714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120056.85714285714,
            "unit": "ns",
            "range": "± 13796.714064191958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7237.40206185567,
            "unit": "ns",
            "range": "± 1225.3908106174554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24456.548387096773,
            "unit": "ns",
            "range": "± 2669.7404307801044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4317280.6,
            "unit": "ns",
            "range": "± 55363.415226509074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4463815.8,
            "unit": "ns",
            "range": "± 60445.208825844915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5075548.5,
            "unit": "ns",
            "range": "± 112954.18209936647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5454357.425,
            "unit": "ns",
            "range": "± 191969.69691339275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8326812.173913044,
            "unit": "ns",
            "range": "± 200605.2666236612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7055334.885216346,
            "unit": "ns",
            "range": "± 25890.026532228225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203294.870535714,
            "unit": "ns",
            "range": "± 10742.658570225956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1607217.8140625,
            "unit": "ns",
            "range": "± 9740.60039976821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3089027.476862981,
            "unit": "ns",
            "range": "± 9114.50401118848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986712.2045572917,
            "unit": "ns",
            "range": "± 1018.8519150627667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898844.478125,
            "unit": "ns",
            "range": "± 4363.195732600624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57216.18681318681,
            "unit": "ns",
            "range": "± 3450.6741882713227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10639788.5625,
            "unit": "ns",
            "range": "± 196838.28873636984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25980139.933333334,
            "unit": "ns",
            "range": "± 230650.01729010083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64912456.4,
            "unit": "ns",
            "range": "± 464118.50893661083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128747198.06666666,
            "unit": "ns",
            "range": "± 1793209.1592954022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275189736.06666666,
            "unit": "ns",
            "range": "± 1518007.8345378693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730054.5056179776,
            "unit": "ns",
            "range": "± 93069.9683480029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3209538.7,
            "unit": "ns",
            "range": "± 112458.54022299587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2738958.3380281692,
            "unit": "ns",
            "range": "± 133247.44271573884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6632804.416666667,
            "unit": "ns",
            "range": "± 219770.14652539333"
          }
        ]
      }
    ]
  }
}