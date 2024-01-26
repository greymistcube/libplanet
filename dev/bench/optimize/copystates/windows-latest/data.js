window.BENCHMARK_DATA = {
  "lastUpdate": 1706246603962,
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
          "id": "5cd331a36bb4120f25597dd64c068da738482897",
          "message": "Use Stack instead of Queue internally",
          "timestamp": "2024-01-26T14:08:20+09:00",
          "tree_id": "49577e08dc19e0fe9c4d3cb94ecd84e64d090d7a",
          "url": "https://github.com/greymistcube/libplanet/commit/5cd331a36bb4120f25597dd64c068da738482897"
        },
        "date": 1706246458953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993027,
            "unit": "ns",
            "range": "± 94766.46665899444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1762315.625,
            "unit": "ns",
            "range": "± 75071.26184605352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1353608.6021505375,
            "unit": "ns",
            "range": "± 92857.82570555866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5184388.888888889,
            "unit": "ns",
            "range": "± 196172.9527068841"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34815.90909090909,
            "unit": "ns",
            "range": "± 2571.7692091639487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5101871.428571428,
            "unit": "ns",
            "range": "± 43749.29324389892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13623707.142857144,
            "unit": "ns",
            "range": "± 93052.4290947827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33693757.14285714,
            "unit": "ns",
            "range": "± 167832.05302318753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67333576.92307693,
            "unit": "ns",
            "range": "± 495730.39573583775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138340533.33333334,
            "unit": "ns",
            "range": "± 1430896.2644174488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3335258.0338541665,
            "unit": "ns",
            "range": "± 3731.3387911965897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088449.84375,
            "unit": "ns",
            "range": "± 1522.973947188942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751406.0286458334,
            "unit": "ns",
            "range": "± 1207.629060517134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930856.4034598214,
            "unit": "ns",
            "range": "± 1279.8751541347074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623921.3416466346,
            "unit": "ns",
            "range": "± 2775.3143008307234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574391.3016183035,
            "unit": "ns",
            "range": "± 1367.6032208705244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2169900,
            "unit": "ns",
            "range": "± 21273.168365518388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2351840.909090909,
            "unit": "ns",
            "range": "± 86257.47104327973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2860384.6153846155,
            "unit": "ns",
            "range": "± 33068.78805746808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2694167.6923076925,
            "unit": "ns",
            "range": "± 111277.67086731213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6045880.952380952,
            "unit": "ns",
            "range": "± 141219.7918814768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180486.27450980392,
            "unit": "ns",
            "range": "± 7267.076980680557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172150,
            "unit": "ns",
            "range": "± 4879.3593993626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144874.1935483871,
            "unit": "ns",
            "range": "± 4405.90268782955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2779776.923076923,
            "unit": "ns",
            "range": "± 33691.19949002889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552807.6923076925,
            "unit": "ns",
            "range": "± 40754.15033135606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12458.064516129032,
            "unit": "ns",
            "range": "± 1527.8802153029426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60061.11111111111,
            "unit": "ns",
            "range": "± 5699.077284756539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45957.89473684211,
            "unit": "ns",
            "range": "± 2993.6307901861796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66521.21212121213,
            "unit": "ns",
            "range": "± 15197.24916520221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2752.0833333333335,
            "unit": "ns",
            "range": "± 596.4772315179335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11350.574712643678,
            "unit": "ns",
            "range": "± 868.2880193054567"
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
          "id": "e2f6e75e0eed91f56b85c3e23a93ae953d042d73",
          "message": "Changelog",
          "timestamp": "2024-01-26T14:11:38+09:00",
          "tree_id": "0db427abe9199e3a9011077c840f5b6d399fdb5b",
          "url": "https://github.com/greymistcube/libplanet/commit/e2f6e75e0eed91f56b85c3e23a93ae953d042d73"
        },
        "date": 1706246580184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933996.9387755102,
            "unit": "ns",
            "range": "± 103463.19775408726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701931.3725490195,
            "unit": "ns",
            "range": "± 68781.91765339517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1306317.1717171718,
            "unit": "ns",
            "range": "± 90008.8850947551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5225906.521739131,
            "unit": "ns",
            "range": "± 192064.31839612007"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35176.40449438202,
            "unit": "ns",
            "range": "± 2773.7823893766317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4981360,
            "unit": "ns",
            "range": "± 38326.41386824496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12990638.461538462,
            "unit": "ns",
            "range": "± 80704.60063777384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32026638.46153846,
            "unit": "ns",
            "range": "± 256198.59984805257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64408816.666666664,
            "unit": "ns",
            "range": "± 415506.1761044622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127164057.14285715,
            "unit": "ns",
            "range": "± 535386.6233699871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310718.8895089286,
            "unit": "ns",
            "range": "± 6410.638283976697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081429.3619791667,
            "unit": "ns",
            "range": "± 1487.6537480146937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734190.4231770834,
            "unit": "ns",
            "range": "± 926.5814723632795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921918.8020833333,
            "unit": "ns",
            "range": "± 10260.992643922958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625588.9197716346,
            "unit": "ns",
            "range": "± 1427.9264397544403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578596.09375,
            "unit": "ns",
            "range": "± 1125.972187864171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121328.5714285714,
            "unit": "ns",
            "range": "± 23135.70096929547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321771.4285714286,
            "unit": "ns",
            "range": "± 39055.2831619122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2738519.0476190476,
            "unit": "ns",
            "range": "± 64543.41654303419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2640820,
            "unit": "ns",
            "range": "± 80990.25645733962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6280626.923076923,
            "unit": "ns",
            "range": "± 322483.8885225792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166904.81927710844,
            "unit": "ns",
            "range": "± 8474.839427422767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163100,
            "unit": "ns",
            "range": "± 7061.732802608621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141900,
            "unit": "ns",
            "range": "± 3690.8671067921155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2673407.1428571427,
            "unit": "ns",
            "range": "± 36571.81479449219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2456290.625,
            "unit": "ns",
            "range": "± 71896.57383094852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9722.105263157895,
            "unit": "ns",
            "range": "± 1075.7658278925603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51463.04347826087,
            "unit": "ns",
            "range": "± 4642.936674683581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43708.06451612903,
            "unit": "ns",
            "range": "± 1984.2245367303763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52100,
            "unit": "ns",
            "range": "± 11289.426818697964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2320.2127659574467,
            "unit": "ns",
            "range": "± 359.6831901196284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9829.787234042553,
            "unit": "ns",
            "range": "± 1356.8487992113564"
          }
        ]
      }
    ]
  }
}