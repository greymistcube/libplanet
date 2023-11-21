window.BENCHMARK_DATA = {
  "lastUpdate": 1700544737847,
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
          "id": "d4567c662ab9a8fe8d457f8d456f785fe9ee5cc1",
          "message": "Merge tag '3.7.1' into port/3.7.1-to-3.8.0\n\nLibplanet 3.7.1",
          "timestamp": "2023-11-21T14:20:17+09:00",
          "tree_id": "3d17b59700923895a777cec17203c71dd9223b48",
          "url": "https://github.com/greymistcube/libplanet/commit/d4567c662ab9a8fe8d457f8d456f785fe9ee5cc1"
        },
        "date": 1700544714119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 918766.3157894737,
            "unit": "ns",
            "range": "± 92091.41112090553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1652282.6923076923,
            "unit": "ns",
            "range": "± 62911.16899856665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1291785.8585858585,
            "unit": "ns",
            "range": "± 133704.0044964546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4830002.325581395,
            "unit": "ns",
            "range": "± 173132.48916360762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33756.71641791045,
            "unit": "ns",
            "range": "± 1594.044206888331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5045064.285714285,
            "unit": "ns",
            "range": "± 31872.47684476028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13054838.461538462,
            "unit": "ns",
            "range": "± 38759.82753791909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31295915.384615384,
            "unit": "ns",
            "range": "± 233934.88711660006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65761220,
            "unit": "ns",
            "range": "± 625429.5040781404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127532333.33333333,
            "unit": "ns",
            "range": "± 1152103.707302842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3313239.229910714,
            "unit": "ns",
            "range": "± 8048.887499393516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044387.5418526785,
            "unit": "ns",
            "range": "± 2682.7398542232236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740125.1534598215,
            "unit": "ns",
            "range": "± 1005.7170921894124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1894841.3932291667,
            "unit": "ns",
            "range": "± 2283.033713186025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631024.0625,
            "unit": "ns",
            "range": "± 1513.6898408532024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554838.9518229166,
            "unit": "ns",
            "range": "± 1085.0755465493721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2096517.7777777778,
            "unit": "ns",
            "range": "± 78356.96954813706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2219791.1764705884,
            "unit": "ns",
            "range": "± 53294.46709384004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2727200,
            "unit": "ns",
            "range": "± 63240.366855355926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2640660.606060606,
            "unit": "ns",
            "range": "± 78842.33055358786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5891865.384615385,
            "unit": "ns",
            "range": "± 232824.32566511983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170884.3137254902,
            "unit": "ns",
            "range": "± 6820.333497682342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161018.75,
            "unit": "ns",
            "range": "± 6914.164779868542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139911.53846153847,
            "unit": "ns",
            "range": "± 3734.4158229181626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2747764.285714286,
            "unit": "ns",
            "range": "± 29489.283767885194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2444146.6666666665,
            "unit": "ns",
            "range": "± 33810.8999049264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10029.12087912088,
            "unit": "ns",
            "range": "± 1183.7338743255957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52386.458333333336,
            "unit": "ns",
            "range": "± 5498.8921332376085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43360,
            "unit": "ns",
            "range": "± 1545.7644565398832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49766.666666666664,
            "unit": "ns",
            "range": "± 7928.395636214244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2470.8333333333335,
            "unit": "ns",
            "range": "± 450.00974648314525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9711.23595505618,
            "unit": "ns",
            "range": "± 1246.2159270665584"
          }
        ]
      }
    ]
  }
}