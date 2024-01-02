window.BENCHMARK_DATA = {
  "lastUpdate": 1704171651050,
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
          "id": "95cfec37da79f242d617736cfa0cf72c50e0aeac",
          "message": "Changelog and docs",
          "timestamp": "2024-01-02T11:39:24+09:00",
          "tree_id": "52f9c0e9e8bf9d1c4285be37d1a1c00e7a22c39e",
          "url": "https://github.com/greymistcube/libplanet/commit/95cfec37da79f242d617736cfa0cf72c50e0aeac"
        },
        "date": 1704163871535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 934422.6804123712,
            "unit": "ns",
            "range": "± 95631.9458317872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719731.746031746,
            "unit": "ns",
            "range": "± 78328.58380215098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1338118,
            "unit": "ns",
            "range": "± 109745.5158928412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5357725,
            "unit": "ns",
            "range": "± 294943.3143472842"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34954.117647058825,
            "unit": "ns",
            "range": "± 1888.7229838713567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4846476.666666667,
            "unit": "ns",
            "range": "± 58163.26119107277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12894246.666666666,
            "unit": "ns",
            "range": "± 91563.52101657285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32260328.57142857,
            "unit": "ns",
            "range": "± 406885.042220057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64921571.428571425,
            "unit": "ns",
            "range": "± 488390.57104955445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126817926.66666667,
            "unit": "ns",
            "range": "± 609224.0491766869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303201.141826923,
            "unit": "ns",
            "range": "± 14874.395665700795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043636.2890625,
            "unit": "ns",
            "range": "± 4431.4404219066355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726344.7405133928,
            "unit": "ns",
            "range": "± 1710.5489575114202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917086.8389423077,
            "unit": "ns",
            "range": "± 4203.7577005456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602790.3529575893,
            "unit": "ns",
            "range": "± 2286.125421180511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560561.07421875,
            "unit": "ns",
            "range": "± 1698.861969291566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113422.580645161,
            "unit": "ns",
            "range": "± 63437.02236432297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270617.2413793104,
            "unit": "ns",
            "range": "± 50588.091970947906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2785758.3333333335,
            "unit": "ns",
            "range": "± 71438.94271496384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2533113.559322034,
            "unit": "ns",
            "range": "± 103436.97307627367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6155618.421052632,
            "unit": "ns",
            "range": "± 211248.76568360097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175877.08333333334,
            "unit": "ns",
            "range": "± 6542.812837205038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168129.85074626867,
            "unit": "ns",
            "range": "± 7924.6071487635445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136962.5,
            "unit": "ns",
            "range": "± 1972.7730060332165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2707246.153846154,
            "unit": "ns",
            "range": "± 29450.965331791063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2607026.3157894737,
            "unit": "ns",
            "range": "± 57123.62657824074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12060.416666666666,
            "unit": "ns",
            "range": "± 1762.8612607239977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54040.361445783135,
            "unit": "ns",
            "range": "± 3524.3963142584944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45657.44680851064,
            "unit": "ns",
            "range": "± 3308.915599312984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59005.434782608696,
            "unit": "ns",
            "range": "± 13513.203670309287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2634.6938775510203,
            "unit": "ns",
            "range": "± 581.5198786288219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10734.782608695652,
            "unit": "ns",
            "range": "± 1105.3749582723221"
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
          "id": "a3e4edf120b75f72c25ddfa81f9aa241880111fa",
          "message": "Applied suggested name change",
          "timestamp": "2024-01-02T13:49:03+09:00",
          "tree_id": "d0dfbc70f4ea00675d9aad523767c771f86aa9fb",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e4edf120b75f72c25ddfa81f9aa241880111fa"
        },
        "date": 1704171631030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928714.1414141414,
            "unit": "ns",
            "range": "± 96633.60108784256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1637295.918367347,
            "unit": "ns",
            "range": "± 47595.474045962226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1293515,
            "unit": "ns",
            "range": "± 121731.49735994768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5114753.846153846,
            "unit": "ns",
            "range": "± 176989.93258040928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34501.333333333336,
            "unit": "ns",
            "range": "± 1685.6703962176841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4910461.538461538,
            "unit": "ns",
            "range": "± 16934.409666983694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12931938.461538462,
            "unit": "ns",
            "range": "± 152442.38550165732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31640807.692307692,
            "unit": "ns",
            "range": "± 148514.67077665235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64843240,
            "unit": "ns",
            "range": "± 521233.92308197723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127603420,
            "unit": "ns",
            "range": "± 540657.1876627819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3370137.2209821427,
            "unit": "ns",
            "range": "± 8306.859186634209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1013342.5502232143,
            "unit": "ns",
            "range": "± 2102.0031466311393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722187.8173828125,
            "unit": "ns",
            "range": "± 979.9904476445115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956348.984375,
            "unit": "ns",
            "range": "± 7661.336148270722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603620.21484375,
            "unit": "ns",
            "range": "± 2089.004859165795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564260.9895833334,
            "unit": "ns",
            "range": "± 1540.2487799754722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2045581.8181818181,
            "unit": "ns",
            "range": "± 64804.892053693824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211541.836734694,
            "unit": "ns",
            "range": "± 88217.45584240188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2756820,
            "unit": "ns",
            "range": "± 49095.711188889574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2546705.882352941,
            "unit": "ns",
            "range": "± 97861.16576408582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6221589.411764706,
            "unit": "ns",
            "range": "± 334893.16456486366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163106.75675675675,
            "unit": "ns",
            "range": "± 7723.923537732267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158095.6043956044,
            "unit": "ns",
            "range": "± 9306.340874048214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142267.64705882352,
            "unit": "ns",
            "range": "± 4530.283327030762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2706071.4285714286,
            "unit": "ns",
            "range": "± 38437.55032159665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2429021.7391304346,
            "unit": "ns",
            "range": "± 61410.570281446584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9536.95652173913,
            "unit": "ns",
            "range": "± 1134.9316086578194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48891.11111111111,
            "unit": "ns",
            "range": "± 3094.273233159636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43536.11111111111,
            "unit": "ns",
            "range": "± 1412.425022592153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46634.444444444445,
            "unit": "ns",
            "range": "± 6925.10757002586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2362.2448979591836,
            "unit": "ns",
            "range": "± 438.95736498283054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9631.958762886597,
            "unit": "ns",
            "range": "± 1356.1239489620605"
          }
        ]
      }
    ]
  }
}