window.BENCHMARK_DATA = {
  "lastUpdate": 1689214845956,
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
          "id": "9b76e9209f1db4f75c0c2e6aafb5295d2bedb076",
          "message": "Changelog",
          "timestamp": "2023-07-13T10:58:28+09:00",
          "tree_id": "85b2160af011b1b4f21a7d91f15f1ddcfae72466",
          "url": "https://github.com/greymistcube/libplanet/commit/9b76e9209f1db4f75c0c2e6aafb5295d2bedb076"
        },
        "date": 1689214813906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1881595.8762886599,
            "unit": "ns",
            "range": "± 224914.96259583207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3512356.5217391304,
            "unit": "ns",
            "range": "± 304876.8659042416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2375810.638297872,
            "unit": "ns",
            "range": "± 207935.4772070139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6647569.587628866,
            "unit": "ns",
            "range": "± 470885.81056504004"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64120.43010752688,
            "unit": "ns",
            "range": "± 12976.471677782873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12920361.111111112,
            "unit": "ns",
            "range": "± 542375.3547500583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27051184.375,
            "unit": "ns",
            "range": "± 2763461.803620428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71350576.76767677,
            "unit": "ns",
            "range": "± 4780888.196935545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137942325.77319586,
            "unit": "ns",
            "range": "± 7998351.498906383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273525769.5652174,
            "unit": "ns",
            "range": "± 10514945.055250742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6562225.607638889,
            "unit": "ns",
            "range": "± 153450.5314997331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046235.0811298077,
            "unit": "ns",
            "range": "± 26035.58834388435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1547766.978236607,
            "unit": "ns",
            "range": "± 23726.153999390903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3562128.26171875,
            "unit": "ns",
            "range": "± 123481.78903954658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1168019.6484375,
            "unit": "ns",
            "range": "± 21319.458040891044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1088033.3158052885,
            "unit": "ns",
            "range": "± 28745.50876200631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4344332.584269663,
            "unit": "ns",
            "range": "± 252270.55001222983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4529480.4878048785,
            "unit": "ns",
            "range": "± 154198.12777642955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5601658.333333333,
            "unit": "ns",
            "range": "± 218828.20604041254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5022842.857142857,
            "unit": "ns",
            "range": "± 142192.8618007597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8718690.217391305,
            "unit": "ns",
            "range": "± 602211.0555260128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360730.6451612903,
            "unit": "ns",
            "range": "± 31389.70427324621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346863.73626373627,
            "unit": "ns",
            "range": "± 27749.224279382084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324018.3333333333,
            "unit": "ns",
            "range": "± 14488.855935776419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5416606.25,
            "unit": "ns",
            "range": "± 163497.5543617031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4863350,
            "unit": "ns",
            "range": "± 91998.93477644183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29347.82608695652,
            "unit": "ns",
            "range": "± 3457.3215276057363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131753.60824742267,
            "unit": "ns",
            "range": "± 13695.247517050015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132213.97849462365,
            "unit": "ns",
            "range": "± 16294.568256069462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145494.62365591398,
            "unit": "ns",
            "range": "± 18693.746720037496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10050.54945054945,
            "unit": "ns",
            "range": "± 1894.3995604807596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34330.10752688172,
            "unit": "ns",
            "range": "± 5869.33417722696"
          }
        ]
      }
    ]
  }
}