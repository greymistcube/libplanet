window.BENCHMARK_DATA = {
  "lastUpdate": 1696420359154,
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
          "id": "ddb46aab2a6afdaf5181941dd8192fab84f991c3",
          "message": "Prepare 3.6.0",
          "timestamp": "2023-10-04T20:34:43+09:00",
          "tree_id": "853ba8cc7953a26c53a131f6ee0468399ea5e559",
          "url": "https://github.com/greymistcube/libplanet/commit/ddb46aab2a6afdaf5181941dd8192fab84f991c3"
        },
        "date": 1696420345367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9219466.594117647,
            "unit": "ns",
            "range": "± 497329.40619289904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21109187.384615384,
            "unit": "ns",
            "range": "± 714259.7818964903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55162495.5106383,
            "unit": "ns",
            "range": "± 2148130.4846819197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105466890.56666666,
            "unit": "ns",
            "range": "± 3042753.819449253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223228756.12745097,
            "unit": "ns",
            "range": "± 8949504.633852849"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72167.59340659341,
            "unit": "ns",
            "range": "± 11098.717924935714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342895.1397849462,
            "unit": "ns",
            "range": "± 44286.761978190014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320328.2173913043,
            "unit": "ns",
            "range": "± 27804.3181308489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302563.625,
            "unit": "ns",
            "range": "± 9838.422049285738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4063521.5,
            "unit": "ns",
            "range": "± 44367.90192634935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614620.875,
            "unit": "ns",
            "range": "± 66050.77818554954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20234.435483870966,
            "unit": "ns",
            "range": "± 2831.5321279202535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105114.91237113402,
            "unit": "ns",
            "range": "± 12850.094157204143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111009.41011235955,
            "unit": "ns",
            "range": "± 12769.99633875548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109883.26923076923,
            "unit": "ns",
            "range": "± 14244.996820776465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7539.725274725275,
            "unit": "ns",
            "range": "± 834.7281934981933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24046.904494382023,
            "unit": "ns",
            "range": "± 2628.8567672482354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1456831.888888889,
            "unit": "ns",
            "range": "± 184763.17900915528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2640555.8974358975,
            "unit": "ns",
            "range": "± 134469.29482339465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2192201.4736842103,
            "unit": "ns",
            "range": "± 162314.65152924575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10077220.710526315,
            "unit": "ns",
            "range": "± 340047.0723194593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3462022.723404255,
            "unit": "ns",
            "range": "± 222403.06426712414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3659406.0463917525,
            "unit": "ns",
            "range": "± 350838.0291977108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4751203.833333333,
            "unit": "ns",
            "range": "± 442285.8704818976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4551044.156565657,
            "unit": "ns",
            "range": "± 387131.89233379124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15905901.06185567,
            "unit": "ns",
            "range": "± 1896210.166423344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6123131.33671875,
            "unit": "ns",
            "range": "± 53934.41960309388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1814535.4322916667,
            "unit": "ns",
            "range": "± 27594.37678199774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1051411.1527622768,
            "unit": "ns",
            "range": "± 18148.1492459273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2754128.076729911,
            "unit": "ns",
            "range": "± 47828.57528404815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793322.4569614956,
            "unit": "ns",
            "range": "± 7642.168318377809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781755.1257672991,
            "unit": "ns",
            "range": "± 8942.477206049232"
          }
        ]
      }
    ]
  }
}