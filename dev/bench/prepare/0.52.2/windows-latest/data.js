window.BENCHMARK_DATA = {
  "lastUpdate": 1678875859442,
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
          "id": "fa27c557bf7e6bc4b3f3e876ad603cccb8649249",
          "message": "Prepare 0.52.2",
          "timestamp": "2023-03-15T18:58:28+09:00",
          "tree_id": "052b095cbc893302d5a8a8513b9e3eb3ff447e9c",
          "url": "https://github.com/greymistcube/libplanet/commit/fa27c557bf7e6bc4b3f3e876ad603cccb8649249"
        },
        "date": 1678875832598,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1911882.105263158,
            "unit": "ns",
            "range": "± 196734.9675129697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3573384.6153846155,
            "unit": "ns",
            "range": "± 321161.64290244086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3007241.935483871,
            "unit": "ns",
            "range": "± 320709.77850176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7411944.680851064,
            "unit": "ns",
            "range": "± 694252.6924635639"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75952.32558139534,
            "unit": "ns",
            "range": "± 10593.31616960526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10695724.736842105,
            "unit": "ns",
            "range": "± 781302.3348895864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 27097687.096774194,
            "unit": "ns",
            "range": "± 822226.194645543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 69098364.28571428,
            "unit": "ns",
            "range": "± 1980917.1770624213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 146874175.55555555,
            "unit": "ns",
            "range": "± 5556233.947442015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 292767896.15384614,
            "unit": "ns",
            "range": "± 7971944.885633908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6882168.869173729,
            "unit": "ns",
            "range": "± 303148.92935560964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2243680.37109375,
            "unit": "ns",
            "range": "± 79223.61333543599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1630577.1444515307,
            "unit": "ns",
            "range": "± 64854.6918148803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3565670.733173077,
            "unit": "ns",
            "range": "± 53714.22243280082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1168122.1062911183,
            "unit": "ns",
            "range": "± 38465.175817579126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1093887.0711616848,
            "unit": "ns",
            "range": "± 41437.0976220679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4459030.769230769,
            "unit": "ns",
            "range": "± 333468.9686353665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6823044.594594595,
            "unit": "ns",
            "range": "± 342118.00701483985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 36073688.383838385,
            "unit": "ns",
            "range": "± 3139831.2546854173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8571468.75,
            "unit": "ns",
            "range": "± 596178.2810557858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 42594243,
            "unit": "ns",
            "range": "± 3983368.218923059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277925,
            "unit": "ns",
            "range": "± 49533.16488048107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263315.3846153846,
            "unit": "ns",
            "range": "± 32235.652874407806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243785.16483516485,
            "unit": "ns",
            "range": "± 29443.023597851472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 16547052.688172042,
            "unit": "ns",
            "range": "± 1343018.847563642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13078608.888888888,
            "unit": "ns",
            "range": "± 1148308.0165509407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29409.677419354837,
            "unit": "ns",
            "range": "± 6207.254950881706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76222.34042553192,
            "unit": "ns",
            "range": "± 13797.790100875234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52470,
            "unit": "ns",
            "range": "± 10517.972312809808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146697.95918367346,
            "unit": "ns",
            "range": "± 35692.49821435622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7311.8279569892475,
            "unit": "ns",
            "range": "± 1132.1247302581482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31353.846153846152,
            "unit": "ns",
            "range": "± 7465.7336871321295"
          }
        ]
      }
    ]
  }
}