window.BENCHMARK_DATA = {
  "lastUpdate": 1698026680332,
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
          "id": "cc8d01b4188659f912a2250585938d8eb7656120",
          "message": "Refactored Libplanet.Consensus",
          "timestamp": "2023-10-23T10:42:20+09:00",
          "tree_id": "33c46268ccbbc94cb4f79bb7c37c98e22226b010",
          "url": "https://github.com/greymistcube/libplanet/commit/cc8d01b4188659f912a2250585938d8eb7656120"
        },
        "date": 1698026670922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6001139.302455357,
            "unit": "ns",
            "range": "± 38903.51782963668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862650.920703125,
            "unit": "ns",
            "range": "± 13304.362981062184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308165.019140625,
            "unit": "ns",
            "range": "± 3970.2417718225247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3070129.099739583,
            "unit": "ns",
            "range": "± 20172.623973748687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977552.7329427083,
            "unit": "ns",
            "range": "± 6032.507888577239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888191.3577008928,
            "unit": "ns",
            "range": "± 4151.081604432072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4094871.2739726026,
            "unit": "ns",
            "range": "± 201893.98476911505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4518683.5,
            "unit": "ns",
            "range": "± 88647.40768159364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5333137.263157895,
            "unit": "ns",
            "range": "± 162669.64692378003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5287570.352941177,
            "unit": "ns",
            "range": "± 165553.56482527492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12945385.468085106,
            "unit": "ns",
            "range": "± 457211.79545065423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57110.54347826087,
            "unit": "ns",
            "range": "± 3337.324461080826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10391117.92631579,
            "unit": "ns",
            "range": "± 854674.1794488211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26555509.88235294,
            "unit": "ns",
            "range": "± 391204.02211088693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68863045.03448276,
            "unit": "ns",
            "range": "± 2817632.583381752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140416300.75,
            "unit": "ns",
            "range": "± 4597054.161881009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262455459.33333334,
            "unit": "ns",
            "range": "± 4094431.667469416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324915.53658536583,
            "unit": "ns",
            "range": "± 11444.3338405902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312611.55102040817,
            "unit": "ns",
            "range": "± 12462.112346129406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276904.60638297873,
            "unit": "ns",
            "range": "± 15446.765339240128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5218207.2727272725,
            "unit": "ns",
            "range": "± 127922.54668471476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4819120.5,
            "unit": "ns",
            "range": "± 192429.96619814806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24978.106382978724,
            "unit": "ns",
            "range": "± 2246.8481746089933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106712.95789473684,
            "unit": "ns",
            "range": "± 7491.767579569817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89633.03157894737,
            "unit": "ns",
            "range": "± 8314.72928571561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97209.98947368421,
            "unit": "ns",
            "range": "± 10324.748916111186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6849.051546391753,
            "unit": "ns",
            "range": "± 666.0120802697893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24976.178947368422,
            "unit": "ns",
            "range": "± 2667.1479108357444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732360.4736842106,
            "unit": "ns",
            "range": "± 169556.55089265548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3272324.8636363638,
            "unit": "ns",
            "range": "± 127969.55503995699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638208.5555555555,
            "unit": "ns",
            "range": "± 257723.6061421276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11480262.5,
            "unit": "ns",
            "range": "± 747904.4513031773"
          }
        ]
      }
    ]
  }
}