window.BENCHMARK_DATA = {
  "lastUpdate": 1695346736068,
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
          "id": "78a827619806b8941cbc96d3f51f5e4d9257911f",
          "message": "Remove clutter",
          "timestamp": "2023-09-22T10:02:17+09:00",
          "tree_id": "e99e29b817674d96659443d5dc38aa9a9006f502",
          "url": "https://github.com/greymistcube/libplanet/commit/78a827619806b8941cbc96d3f51f5e4d9257911f"
        },
        "date": 1695346722292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8740564.988505747,
            "unit": "ns",
            "range": "± 467768.38294364134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21811040.33870968,
            "unit": "ns",
            "range": "± 662123.5878816026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54397124.94444445,
            "unit": "ns",
            "range": "± 1051823.599256379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112729463.2,
            "unit": "ns",
            "range": "± 5884144.68741625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252391302.22580644,
            "unit": "ns",
            "range": "± 11481462.803000277"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65926.80612244898,
            "unit": "ns",
            "range": "± 11908.306140126415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369884.8917525773,
            "unit": "ns",
            "range": "± 63358.010676360136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348572.26086956525,
            "unit": "ns",
            "range": "± 38336.30212634505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324283.72222222225,
            "unit": "ns",
            "range": "± 30399.397369480703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4188814.8571428573,
            "unit": "ns",
            "range": "± 150151.12478251607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3919447.142105263,
            "unit": "ns",
            "range": "± 249224.89129912775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20037.522727272728,
            "unit": "ns",
            "range": "± 1994.5406752494819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100821.7052631579,
            "unit": "ns",
            "range": "± 13500.317532809151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113583.70408163265,
            "unit": "ns",
            "range": "± 24500.383191284516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124313.56315789474,
            "unit": "ns",
            "range": "± 31969.590635148073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5968.833333333333,
            "unit": "ns",
            "range": "± 570.7832977879677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18337.059523809523,
            "unit": "ns",
            "range": "± 1499.7996761912525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1596104.1530612244,
            "unit": "ns",
            "range": "± 200079.16483811234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2852167.7,
            "unit": "ns",
            "range": "± 49814.880780459855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2104346.9175257734,
            "unit": "ns",
            "range": "± 234386.0206735919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6944062.75308642,
            "unit": "ns",
            "range": "± 365783.1784141915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3635607,
            "unit": "ns",
            "range": "± 354775.5233197632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3713284.1263157893,
            "unit": "ns",
            "range": "± 360217.0769555918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4676175.34375,
            "unit": "ns",
            "range": "± 407334.00404343783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4025341.0894736843,
            "unit": "ns",
            "range": "± 358512.8577475704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7763489.737113402,
            "unit": "ns",
            "range": "± 1300628.9572727222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5956591.853571429,
            "unit": "ns",
            "range": "± 189685.27520093374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854082.8753004808,
            "unit": "ns",
            "range": "± 29405.814304121068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070569.6751302083,
            "unit": "ns",
            "range": "± 13440.886778562046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3002832.673921131,
            "unit": "ns",
            "range": "± 108958.25908727772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826939.6755859375,
            "unit": "ns",
            "range": "± 11359.981612782492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779557.0580357143,
            "unit": "ns",
            "range": "± 17833.04049359784"
          }
        ]
      }
    ]
  }
}