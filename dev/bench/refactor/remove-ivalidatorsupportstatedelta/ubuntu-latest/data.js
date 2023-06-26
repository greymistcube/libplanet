window.BENCHMARK_DATA = {
  "lastUpdate": 1687761222876,
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
          "id": "c341e18640c1f491a1d2a900f7f05d818ccd5940",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:14:05+09:00",
          "tree_id": "982f1fe962e5e5d45c8dd58eddd405b285026528",
          "url": "https://github.com/greymistcube/libplanet/commit/c341e18640c1f491a1d2a900f7f05d818ccd5940"
        },
        "date": 1687761210785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4169499.63,
            "unit": "ns",
            "range": "± 339539.0134946533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4454405.666666667,
            "unit": "ns",
            "range": "± 285839.00491189887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5918188.736263736,
            "unit": "ns",
            "range": "± 327124.11289111106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5666141.483870967,
            "unit": "ns",
            "range": "± 359130.4019197717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9605784.82,
            "unit": "ns",
            "range": "± 385220.89355333283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9748437.641975308,
            "unit": "ns",
            "range": "± 512419.09535375214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27771502.339622643,
            "unit": "ns",
            "range": "± 1151220.3502106084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70151995.625,
            "unit": "ns",
            "range": "± 2138609.057849755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137641687.42553192,
            "unit": "ns",
            "range": "± 5322464.680527412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276633669.1351351,
            "unit": "ns",
            "range": "± 9228839.524217423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373149.8314606742,
            "unit": "ns",
            "range": "± 22553.074180311545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370052.1505376344,
            "unit": "ns",
            "range": "± 49958.661908349226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302688.1397849462,
            "unit": "ns",
            "range": "± 50760.25490278261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5445778.711340206,
            "unit": "ns",
            "range": "± 386871.33548730175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5162276.457446809,
            "unit": "ns",
            "range": "± 305040.7053671272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19396.68604651163,
            "unit": "ns",
            "range": "± 2361.049294458257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107053.57608695653,
            "unit": "ns",
            "range": "± 14142.101881669138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105663.17708333333,
            "unit": "ns",
            "range": "± 22653.17530246258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121361.18947368421,
            "unit": "ns",
            "range": "± 27750.12433527627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5865.666666666667,
            "unit": "ns",
            "range": "± 1201.980126525145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18989.83908045977,
            "unit": "ns",
            "range": "± 2802.80887712858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60856.17894736842,
            "unit": "ns",
            "range": "± 10386.111438265176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7748181.592708333,
            "unit": "ns",
            "range": "± 143697.37563424205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2512104.801081731,
            "unit": "ns",
            "range": "± 24660.138888980688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1703588.94609375,
            "unit": "ns",
            "range": "± 8780.19117007976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3463121.619010417,
            "unit": "ns",
            "range": "± 103618.18172754397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1125650.4548828125,
            "unit": "ns",
            "range": "± 24735.12778729532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1034420.3337890625,
            "unit": "ns",
            "range": "± 23810.721454135386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1810292.2083333333,
            "unit": "ns",
            "range": "± 181886.00974160864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3394866.0104166665,
            "unit": "ns",
            "range": "± 266195.3790047926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2775051.744680851,
            "unit": "ns",
            "range": "± 220885.2042615225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7415595.969387755,
            "unit": "ns",
            "range": "± 555142.0701001701"
          }
        ]
      }
    ]
  }
}