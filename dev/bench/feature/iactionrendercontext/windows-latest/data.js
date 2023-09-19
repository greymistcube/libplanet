window.BENCHMARK_DATA = {
  "lastUpdate": 1695085342497,
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
          "id": "86231891c004ef7bec83a29f3f51478f5228fd50",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:40:37+09:00",
          "tree_id": "c1b09f4047d1684df6c3011fc1869c6becd44299",
          "url": "https://github.com/greymistcube/libplanet/commit/86231891c004ef7bec83a29f3f51478f5228fd50"
        },
        "date": 1695085315426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640753.5353535353,
            "unit": "ns",
            "range": "± 303075.56352626235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2938932.6315789474,
            "unit": "ns",
            "range": "± 363239.5204861403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1978570.1030927836,
            "unit": "ns",
            "range": "± 286154.6224526714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5547664.948453608,
            "unit": "ns",
            "range": "± 890918.3417548758"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59061.458333333336,
            "unit": "ns",
            "range": "± 14664.302303942164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8005300,
            "unit": "ns",
            "range": "± 736452.6123365924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21655583.83838384,
            "unit": "ns",
            "range": "± 2082731.6168184804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59602912.24489796,
            "unit": "ns",
            "range": "± 4304854.4751261305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121779435.35353535,
            "unit": "ns",
            "range": "± 8453492.840823833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240201179,
            "unit": "ns",
            "range": "± 16129567.741277594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5171294.034090909,
            "unit": "ns",
            "range": "± 124540.29258216711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1632874.9660326086,
            "unit": "ns",
            "range": "± 40381.140007821195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1215640.0146484375,
            "unit": "ns",
            "range": "± 30931.587572638557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3115687.8392269737,
            "unit": "ns",
            "range": "± 68384.07376069555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010211.3064236111,
            "unit": "ns",
            "range": "± 28145.789286608626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915695.166015625,
            "unit": "ns",
            "range": "± 13042.309728049462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3241796.7032967033,
            "unit": "ns",
            "range": "± 300730.7479570202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3520540.860215054,
            "unit": "ns",
            "range": "± 346775.38659350964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4745674.736842105,
            "unit": "ns",
            "range": "± 582632.2954449132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4031064.5161290322,
            "unit": "ns",
            "range": "± 390173.8298906743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7186107.291666667,
            "unit": "ns",
            "range": "± 727855.1556666218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300361.82795698923,
            "unit": "ns",
            "range": "± 41355.07920401169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299091.8367346939,
            "unit": "ns",
            "range": "± 47221.11984566041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241733.33333333334,
            "unit": "ns",
            "range": "± 31648.03838049578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4536548.421052632,
            "unit": "ns",
            "range": "± 431037.5349857937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3845906.3829787234,
            "unit": "ns",
            "range": "± 369106.45514219423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29362,
            "unit": "ns",
            "range": "± 11539.845595311766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103415.46391752578,
            "unit": "ns",
            "range": "± 19241.59091333897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100587.09677419355,
            "unit": "ns",
            "range": "± 23157.988694891166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114701.03092783505,
            "unit": "ns",
            "range": "± 28184.062040323137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6893.589743589743,
            "unit": "ns",
            "range": "± 1965.4377089964942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27956.701030927834,
            "unit": "ns",
            "range": "± 10831.175174933838"
          }
        ]
      }
    ]
  }
}