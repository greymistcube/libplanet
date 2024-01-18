window.BENCHMARK_DATA = {
  "lastUpdate": 1705574108003,
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
          "id": "e5cd975ccbf0c3a5de3322248f1a35a8e7c762e8",
          "message": "Release 3.9.5",
          "timestamp": "2024-01-18T19:23:04+09:00",
          "tree_id": "da14c07be829cc800aae2bc03d11a08274732fb5",
          "url": "https://github.com/greymistcube/libplanet/commit/e5cd975ccbf0c3a5de3322248f1a35a8e7c762e8"
        },
        "date": 1705574092185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948311.224489796,
            "unit": "ns",
            "range": "± 77026.08057798875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1697409.0909090908,
            "unit": "ns",
            "range": "± 80464.00663424836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1370864.4444444445,
            "unit": "ns",
            "range": "± 143887.45079706883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5257128.260869565,
            "unit": "ns",
            "range": "± 200571.93407635685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34252.17391304348,
            "unit": "ns",
            "range": "± 1665.0921804240938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5003014.285714285,
            "unit": "ns",
            "range": "± 34277.03553160869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12998492.857142856,
            "unit": "ns",
            "range": "± 132442.03646115543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32436814.285714287,
            "unit": "ns",
            "range": "± 217625.25255459337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63915078.571428575,
            "unit": "ns",
            "range": "± 454300.66658474173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134635150,
            "unit": "ns",
            "range": "± 532090.9562934055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3255721.0677083335,
            "unit": "ns",
            "range": "± 16171.639700282753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1103264.2578125,
            "unit": "ns",
            "range": "± 1489.835554346094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738728.9341517857,
            "unit": "ns",
            "range": "± 933.0622753524783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2005698.3072916667,
            "unit": "ns",
            "range": "± 7675.577339432249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616113.5811941965,
            "unit": "ns",
            "range": "± 772.4272451826032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553821.58203125,
            "unit": "ns",
            "range": "± 642.4866693615794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2083307.5757575757,
            "unit": "ns",
            "range": "± 54949.624829832945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2226051.111111111,
            "unit": "ns",
            "range": "± 84675.84345400087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2768644.6428571427,
            "unit": "ns",
            "range": "± 117842.44785404691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2835076.1904761903,
            "unit": "ns",
            "range": "± 65526.60455694241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6092432.258064516,
            "unit": "ns",
            "range": "± 185388.82092707526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165656.89655172414,
            "unit": "ns",
            "range": "± 6106.944912519623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158945.45454545456,
            "unit": "ns",
            "range": "± 5875.335078917821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142926.19047619047,
            "unit": "ns",
            "range": "± 2738.412818021556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2675668.75,
            "unit": "ns",
            "range": "± 50855.87109665904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2411650,
            "unit": "ns",
            "range": "± 27580.253527032426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9796.42857142857,
            "unit": "ns",
            "range": "± 736.2304557630819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51086.666666666664,
            "unit": "ns",
            "range": "± 3641.2493225833196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44576.470588235294,
            "unit": "ns",
            "range": "± 2407.015889061823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46231.818181818184,
            "unit": "ns",
            "range": "± 6583.4963539463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2511.340206185567,
            "unit": "ns",
            "range": "± 363.97009053509277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10465.463917525773,
            "unit": "ns",
            "range": "± 1100.7895089231756"
          }
        ]
      }
    ]
  }
}