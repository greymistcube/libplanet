window.BENCHMARK_DATA = {
  "lastUpdate": 1684143653131,
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
          "id": "5f91d28dd93096f81522e019fb7aa79c92594c41",
          "message": "Changelog",
          "timestamp": "2023-05-15T18:24:37+09:00",
          "tree_id": "fdc8462c023211bfe1f722a7dac715dc8cf8b11d",
          "url": "https://github.com/greymistcube/libplanet/commit/5f91d28dd93096f81522e019fb7aa79c92594c41"
        },
        "date": 1684143637686,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8626739.136363637,
            "unit": "ns",
            "range": "± 207980.29173081016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21905997.64285714,
            "unit": "ns",
            "range": "± 310970.7920001014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54074107.333333336,
            "unit": "ns",
            "range": "± 483136.77326208074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103050262.95945945,
            "unit": "ns",
            "range": "± 3214345.8461294314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213126737.14864865,
            "unit": "ns",
            "range": "± 6899546.0960186515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74938.00515463918,
            "unit": "ns",
            "range": "± 9951.92562200455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331501.0052631579,
            "unit": "ns",
            "range": "± 22389.31201934173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320960.94845360826,
            "unit": "ns",
            "range": "± 27556.832559945968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320617.20454545453,
            "unit": "ns",
            "range": "± 17618.212618359623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4263756.166666667,
            "unit": "ns",
            "range": "± 65127.05517751619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824447.375,
            "unit": "ns",
            "range": "± 98729.10173641481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25558.58080808081,
            "unit": "ns",
            "range": "± 4048.2935777142707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116364.25257731958,
            "unit": "ns",
            "range": "± 14963.712368058188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122983.24242424243,
            "unit": "ns",
            "range": "± 8610.04880416009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129766.38461538461,
            "unit": "ns",
            "range": "± 13090.032323845355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8547.755319148937,
            "unit": "ns",
            "range": "± 994.3666670397745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22778.58762886598,
            "unit": "ns",
            "range": "± 3683.163981078229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671026.1935483871,
            "unit": "ns",
            "range": "± 150587.91383839957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3203384.9183673467,
            "unit": "ns",
            "range": "± 300249.48084694374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2765749.474226804,
            "unit": "ns",
            "range": "± 323798.0705246422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6636716.304878049,
            "unit": "ns",
            "range": "± 177756.4154302482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3485210.2,
            "unit": "ns",
            "range": "± 52955.630661364594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3544716.836956522,
            "unit": "ns",
            "range": "± 196056.5147067884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4503637.416666667,
            "unit": "ns",
            "range": "± 92444.10373744147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4882463.233333333,
            "unit": "ns",
            "range": "± 65155.12703482213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7799807.444444444,
            "unit": "ns",
            "range": "± 292855.6361095335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6999542.677884615,
            "unit": "ns",
            "range": "± 53283.49579699879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1983795.4012276786,
            "unit": "ns",
            "range": "± 14116.209935407298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303281.3348214286,
            "unit": "ns",
            "range": "± 12742.589550689489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2730139.6454427084,
            "unit": "ns",
            "range": "± 49748.014434485354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863603.5773577009,
            "unit": "ns",
            "range": "± 6257.5364101420055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794601.3403695914,
            "unit": "ns",
            "range": "± 2719.17839223551"
          }
        ]
      }
    ]
  }
}