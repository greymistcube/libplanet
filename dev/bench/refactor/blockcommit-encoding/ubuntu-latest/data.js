window.BENCHMARK_DATA = {
  "lastUpdate": 1678860905726,
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
          "id": "f0a4d366e3d4d6558eb4568a1aae46ad136b5fa0",
          "message": "Fixed tests",
          "timestamp": "2023-03-15T15:02:14+09:00",
          "tree_id": "a7d8c5e42b5615ece555830b147d030d43dfbdd4",
          "url": "https://github.com/greymistcube/libplanet/commit/f0a4d366e3d4d6558eb4568a1aae46ad136b5fa0"
        },
        "date": 1678860897939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193954.085106383,
            "unit": "ns",
            "range": "± 7551.587448516996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196774.77777777778,
            "unit": "ns",
            "range": "± 8265.446472130094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165328.44444444444,
            "unit": "ns",
            "range": "± 3542.614923574396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11387599.8,
            "unit": "ns",
            "range": "± 124792.86599527347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9125466.533333333,
            "unit": "ns",
            "range": "± 67438.60419232833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19120.701030927834,
            "unit": "ns",
            "range": "± 1471.3069598500144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53177.395833333336,
            "unit": "ns",
            "range": "± 5428.178699069798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38970.76470588235,
            "unit": "ns",
            "range": "± 800.6666386059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85205.45918367348,
            "unit": "ns",
            "range": "± 12516.613254562762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4296.895833333333,
            "unit": "ns",
            "range": "± 450.1470748934038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17314.821052631578,
            "unit": "ns",
            "range": "± 1546.7156003894968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325089.3333333335,
            "unit": "ns",
            "range": "± 59097.77439568948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5179094.434782608,
            "unit": "ns",
            "range": "± 130869.9492427592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23703457.9375,
            "unit": "ns",
            "range": "± 438961.8199642529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6368331.071428572,
            "unit": "ns",
            "range": "± 164587.04006243392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27666947.933333334,
            "unit": "ns",
            "range": "± 283120.36091625836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6289601.4375,
            "unit": "ns",
            "range": "± 21430.306612206965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914893.7119791666,
            "unit": "ns",
            "range": "± 5195.925531178074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372543.8946614584,
            "unit": "ns",
            "range": "± 2880.9705996238213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586234.823958333,
            "unit": "ns",
            "range": "± 3570.1276887151917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824990.8399135044,
            "unit": "ns",
            "range": "± 1096.4091153112713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743017.131266276,
            "unit": "ns",
            "range": "± 551.7705613843927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7684237.266666667,
            "unit": "ns",
            "range": "± 44502.221776745784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19429963.076923076,
            "unit": "ns",
            "range": "± 164637.64888913956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49712827.266666666,
            "unit": "ns",
            "range": "± 421900.9386813562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100496768.07692307,
            "unit": "ns",
            "range": "± 611133.6721657085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 198961704.33333334,
            "unit": "ns",
            "range": "± 2482529.1996089295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45496.16216216216,
            "unit": "ns",
            "range": "± 2199.6672415034063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336812.7765957448,
            "unit": "ns",
            "range": "± 98896.86319445244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2506530.533333333,
            "unit": "ns",
            "range": "± 72819.70517926726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2143282.3902439023,
            "unit": "ns",
            "range": "± 77294.63850645724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5363025.734693877,
            "unit": "ns",
            "range": "± 319997.2253614101"
          }
        ]
      }
    ]
  }
}