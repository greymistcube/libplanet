window.BENCHMARK_DATA = {
  "lastUpdate": 1684517313409,
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
          "id": "68d72fa93f4e3833d3644989a12e7ee6a6104083",
          "message": "Remove PolymorphicAction",
          "timestamp": "2023-05-20T02:15:50+09:00",
          "tree_id": "cc65e3b81a1823674df671524a9a003f9bb5bec4",
          "url": "https://github.com/greymistcube/libplanet/commit/68d72fa93f4e3833d3644989a12e7ee6a6104083"
        },
        "date": 1684517304075,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3275375.909090909,
            "unit": "ns",
            "range": "± 70208.60615977024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511996.88,
            "unit": "ns",
            "range": "± 93577.62655558574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4436714.684210527,
            "unit": "ns",
            "range": "± 132594.1324114745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4364662.866666666,
            "unit": "ns",
            "range": "± 78909.14854426547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7067520.785714285,
            "unit": "ns",
            "range": "± 189287.5968745575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295930.90196078434,
            "unit": "ns",
            "range": "± 10697.29061258953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281787.9767441861,
            "unit": "ns",
            "range": "± 10213.71370473558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232968.5625,
            "unit": "ns",
            "range": "± 4339.712662819203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4349144.333333333,
            "unit": "ns",
            "range": "± 71567.28871854662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4000138.294117647,
            "unit": "ns",
            "range": "± 82115.72375827658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20764.18947368421,
            "unit": "ns",
            "range": "± 2591.9777518037195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91187.8021978022,
            "unit": "ns",
            "range": "± 5437.082009926075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72708.03225806452,
            "unit": "ns",
            "range": "± 1485.6581141898241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106281.17708333333,
            "unit": "ns",
            "range": "± 17667.45562772934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4822.680412371134,
            "unit": "ns",
            "range": "± 544.7677553017384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18895.822916666668,
            "unit": "ns",
            "range": "± 1994.4093598424554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5969633.034040178,
            "unit": "ns",
            "range": "± 29979.889824682567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2022531.6390625,
            "unit": "ns",
            "range": "± 8462.519404063896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371578.6421875,
            "unit": "ns",
            "range": "± 1817.9631846288803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658287.58828125,
            "unit": "ns",
            "range": "± 1602.307561295508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803204.9170673077,
            "unit": "ns",
            "range": "± 877.8919697937375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742776.1462239583,
            "unit": "ns",
            "range": "± 1480.2099030872914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7719186.428571428,
            "unit": "ns",
            "range": "± 63766.2907109467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20292849.6,
            "unit": "ns",
            "range": "± 187691.89743292442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52526296,
            "unit": "ns",
            "range": "± 339860.28866958176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104215923,
            "unit": "ns",
            "range": "± 1247932.8290611524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211709428.26666668,
            "unit": "ns",
            "range": "± 1919057.4321016655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1385743.1489361702,
            "unit": "ns",
            "range": "± 84301.10537878556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2676150.8484848486,
            "unit": "ns",
            "range": "± 83108.0946528079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2183895.2253521127,
            "unit": "ns",
            "range": "± 93689.16514734043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5483948.555555556,
            "unit": "ns",
            "range": "± 180927.64997636003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48259.9375,
            "unit": "ns",
            "range": "± 2068.0076961866803"
          }
        ]
      }
    ]
  }
}