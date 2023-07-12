window.BENCHMARK_DATA = {
  "lastUpdate": 1689190487641,
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
          "id": "3ce762868d821b2401cedc45be76202d31c80175",
          "message": "RocksDBStore Concat optimization",
          "timestamp": "2023-07-13T04:11:48+09:00",
          "tree_id": "ee5cdbe513ebd68a9a69d4ef74a3ade03e5b40a4",
          "url": "https://github.com/greymistcube/libplanet/commit/3ce762868d821b2401cedc45be76202d31c80175"
        },
        "date": 1689190456975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1840934.0425531915,
            "unit": "ns",
            "range": "± 228941.4920577582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3194106.5217391304,
            "unit": "ns",
            "range": "± 313227.1516462583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2253777.419354839,
            "unit": "ns",
            "range": "± 240847.5474548309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6667682.105263158,
            "unit": "ns",
            "range": "± 535561.875754313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62608.333333333336,
            "unit": "ns",
            "range": "± 15518.692746536464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8901857.471264368,
            "unit": "ns",
            "range": "± 459393.5475628367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26109279.78723404,
            "unit": "ns",
            "range": "± 1760148.266273177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63490149.4949495,
            "unit": "ns",
            "range": "± 5030814.3654346885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128849920.61855671,
            "unit": "ns",
            "range": "± 7519778.425563511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239584595.83333334,
            "unit": "ns",
            "range": "± 5739548.930161762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6105044.025735294,
            "unit": "ns",
            "range": "± 113828.46436097546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2009671.1388221155,
            "unit": "ns",
            "range": "± 18330.081542388118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1486368.69140625,
            "unit": "ns",
            "range": "± 33583.24439250276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3227774.016203704,
            "unit": "ns",
            "range": "± 88326.86847650679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018494.2317708334,
            "unit": "ns",
            "range": "± 15102.548251749915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1028191.9270833334,
            "unit": "ns",
            "range": "± 16295.95879176928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3602329.1666666665,
            "unit": "ns",
            "range": "± 393610.24695601093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3920003,
            "unit": "ns",
            "range": "± 524015.8293266039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5312940.860215054,
            "unit": "ns",
            "range": "± 327774.2718888953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4447995.698924731,
            "unit": "ns",
            "range": "± 404751.0608826708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8158603.092783505,
            "unit": "ns",
            "range": "± 776012.0147069256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334602.0618556701,
            "unit": "ns",
            "range": "± 59014.85861519228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322908.24742268043,
            "unit": "ns",
            "range": "± 61160.52933010099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269959.1397849462,
            "unit": "ns",
            "range": "± 42724.79739326408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4669761.29032258,
            "unit": "ns",
            "range": "± 362231.67011334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4511837.894736842,
            "unit": "ns",
            "range": "± 343774.9669630037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23736,
            "unit": "ns",
            "range": "± 9092.449081684774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114094.9494949495,
            "unit": "ns",
            "range": "± 31087.76376429752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106610.30927835051,
            "unit": "ns",
            "range": "± 29663.86158743245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127187.09677419355,
            "unit": "ns",
            "range": "± 24207.657905346237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6603.225806451613,
            "unit": "ns",
            "range": "± 1790.0966462191498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20827.472527472528,
            "unit": "ns",
            "range": "± 6139.255581620551"
          }
        ]
      }
    ]
  }
}