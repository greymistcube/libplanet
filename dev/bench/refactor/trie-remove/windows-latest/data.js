window.BENCHMARK_DATA = {
  "lastUpdate": 1704137108260,
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
          "id": "5b07f53c2372541de60e32b98a8688b00d2a1a4d",
          "message": "Added tests; fixed algorithm",
          "timestamp": "2024-01-02T04:12:32+09:00",
          "tree_id": "b9ccd0f488ee216f5e19c948dfac0fde923765df",
          "url": "https://github.com/greymistcube/libplanet/commit/5b07f53c2372541de60e32b98a8688b00d2a1a4d"
        },
        "date": 1704137085134,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 912707.2164948453,
            "unit": "ns",
            "range": "± 87681.91595123663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1641982.7586206896,
            "unit": "ns",
            "range": "± 89107.49610481133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1275580.612244898,
            "unit": "ns",
            "range": "± 105328.88958431392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5196601.041666667,
            "unit": "ns",
            "range": "± 319396.83104738843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33643.529411764706,
            "unit": "ns",
            "range": "± 1805.3786740910464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4943480.769230769,
            "unit": "ns",
            "range": "± 131630.300521516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12449883.333333334,
            "unit": "ns",
            "range": "± 266343.2200795675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31581016.666666668,
            "unit": "ns",
            "range": "± 801575.5765537871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64550353.333333336,
            "unit": "ns",
            "range": "± 693087.208351844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128869357.14285715,
            "unit": "ns",
            "range": "± 1150582.67828107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3247663.3370535714,
            "unit": "ns",
            "range": "± 27172.669430363647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1034128.9973958334,
            "unit": "ns",
            "range": "± 13615.101918296235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721610.8203125,
            "unit": "ns",
            "range": "± 6487.182892331926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891993.9732142857,
            "unit": "ns",
            "range": "± 9098.721506739876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 595147.3005022322,
            "unit": "ns",
            "range": "± 4529.050267646388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543255.3190104166,
            "unit": "ns",
            "range": "± 7478.0896839741645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2086103.5714285714,
            "unit": "ns",
            "range": "± 58573.072324979694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2164464.285714286,
            "unit": "ns",
            "range": "± 77651.70147627339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2665772.340425532,
            "unit": "ns",
            "range": "± 101645.10660419046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2592608.108108108,
            "unit": "ns",
            "range": "± 87904.66546327453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6091888.75,
            "unit": "ns",
            "range": "± 314766.6738804467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163331.74603174604,
            "unit": "ns",
            "range": "± 7469.439357914125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162695.69892473117,
            "unit": "ns",
            "range": "± 9546.896991653255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136840.6779661017,
            "unit": "ns",
            "range": "± 6001.842206961522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2587491.489361702,
            "unit": "ns",
            "range": "± 99810.66604541437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2338780.487804878,
            "unit": "ns",
            "range": "± 82209.8084765808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9396.739130434782,
            "unit": "ns",
            "range": "± 1161.9849526135588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49721.05263157895,
            "unit": "ns",
            "range": "± 4574.18507419028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41605.555555555555,
            "unit": "ns",
            "range": "± 1278.8263468496516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47543.75,
            "unit": "ns",
            "range": "± 8624.125432395114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2201.0309278350514,
            "unit": "ns",
            "range": "± 382.83341823414315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8885.869565217392,
            "unit": "ns",
            "range": "± 845.4898471897269"
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
          "id": "5b07f53c2372541de60e32b98a8688b00d2a1a4d",
          "message": "Added tests; fixed algorithm",
          "timestamp": "2024-01-02T04:12:32+09:00",
          "tree_id": "b9ccd0f488ee216f5e19c948dfac0fde923765df",
          "url": "https://github.com/greymistcube/libplanet/commit/5b07f53c2372541de60e32b98a8688b00d2a1a4d"
        },
        "date": 1704137085134,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 912707.2164948453,
            "unit": "ns",
            "range": "± 87681.91595123663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1641982.7586206896,
            "unit": "ns",
            "range": "± 89107.49610481133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1275580.612244898,
            "unit": "ns",
            "range": "± 105328.88958431392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5196601.041666667,
            "unit": "ns",
            "range": "± 319396.83104738843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33643.529411764706,
            "unit": "ns",
            "range": "± 1805.3786740910464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4943480.769230769,
            "unit": "ns",
            "range": "± 131630.300521516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12449883.333333334,
            "unit": "ns",
            "range": "± 266343.2200795675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31581016.666666668,
            "unit": "ns",
            "range": "± 801575.5765537871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64550353.333333336,
            "unit": "ns",
            "range": "± 693087.208351844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128869357.14285715,
            "unit": "ns",
            "range": "± 1150582.67828107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3247663.3370535714,
            "unit": "ns",
            "range": "± 27172.669430363647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1034128.9973958334,
            "unit": "ns",
            "range": "± 13615.101918296235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721610.8203125,
            "unit": "ns",
            "range": "± 6487.182892331926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891993.9732142857,
            "unit": "ns",
            "range": "± 9098.721506739876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 595147.3005022322,
            "unit": "ns",
            "range": "± 4529.050267646388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543255.3190104166,
            "unit": "ns",
            "range": "± 7478.0896839741645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2086103.5714285714,
            "unit": "ns",
            "range": "± 58573.072324979694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2164464.285714286,
            "unit": "ns",
            "range": "± 77651.70147627339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2665772.340425532,
            "unit": "ns",
            "range": "± 101645.10660419046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2592608.108108108,
            "unit": "ns",
            "range": "± 87904.66546327453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6091888.75,
            "unit": "ns",
            "range": "± 314766.6738804467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163331.74603174604,
            "unit": "ns",
            "range": "± 7469.439357914125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162695.69892473117,
            "unit": "ns",
            "range": "± 9546.896991653255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136840.6779661017,
            "unit": "ns",
            "range": "± 6001.842206961522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2587491.489361702,
            "unit": "ns",
            "range": "± 99810.66604541437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2338780.487804878,
            "unit": "ns",
            "range": "± 82209.8084765808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9396.739130434782,
            "unit": "ns",
            "range": "± 1161.9849526135588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49721.05263157895,
            "unit": "ns",
            "range": "± 4574.18507419028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41605.555555555555,
            "unit": "ns",
            "range": "± 1278.8263468496516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47543.75,
            "unit": "ns",
            "range": "± 8624.125432395114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2201.0309278350514,
            "unit": "ns",
            "range": "± 382.83341823414315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8885.869565217392,
            "unit": "ns",
            "range": "± 845.4898471897269"
          }
        ]
      }
    ]
  }
}