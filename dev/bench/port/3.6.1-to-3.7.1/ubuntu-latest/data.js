window.BENCHMARK_DATA = {
  "lastUpdate": 1700474599620,
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
          "id": "f3f4e5b759618d4e75743079f96e9f52a5b3d858",
          "message": "Merge tag '3.6.1' into port/3.6.1-to-3.7.1\n\nLibplanet 3.6.1",
          "timestamp": "2023-11-20T18:51:01+09:00",
          "tree_id": "e33d04c7f511c4252489a6a9e0fc970da5173b30",
          "url": "https://github.com/greymistcube/libplanet/commit/f3f4e5b759618d4e75743079f96e9f52a5b3d858"
        },
        "date": 1700474592529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5759905.533333333,
            "unit": "ns",
            "range": "± 56442.08274716743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14868371.142857144,
            "unit": "ns",
            "range": "± 71194.18405006791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37383133.46666667,
            "unit": "ns",
            "range": "± 180660.1409200897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76413962.07142857,
            "unit": "ns",
            "range": "± 337069.6074847984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151075744.19230768,
            "unit": "ns",
            "range": "± 228196.06128662862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045681.3020833334,
            "unit": "ns",
            "range": "± 90621.28819684232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2038774.5615384616,
            "unit": "ns",
            "range": "± 95097.03210190055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1529732.0842696629,
            "unit": "ns",
            "range": "± 94579.4713295276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5717517.485714286,
            "unit": "ns",
            "range": "± 183176.10827856528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2595197.193548387,
            "unit": "ns",
            "range": "± 78867.01964971136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2646829.3444444444,
            "unit": "ns",
            "range": "± 91898.96688977016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3302761.3076923075,
            "unit": "ns",
            "range": "± 87452.11876485062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3167048.0816326533,
            "unit": "ns",
            "range": "± 118487.56619733649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6766445.551724138,
            "unit": "ns",
            "range": "± 159851.2530465178"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42532.9375,
            "unit": "ns",
            "range": "± 4418.830242478444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783054.5226004464,
            "unit": "ns",
            "range": "± 36665.251592918234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190634.3348858173,
            "unit": "ns",
            "range": "± 3418.959323289873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781748.7758463542,
            "unit": "ns",
            "range": "± 10824.459496062695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944451.8783052885,
            "unit": "ns",
            "range": "± 9933.939832330747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622891.9309082031,
            "unit": "ns",
            "range": "± 1120.073198570637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573497.3728966346,
            "unit": "ns",
            "range": "± 1715.646579165857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221000.5119047619,
            "unit": "ns",
            "range": "± 11360.947205646857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214415.2142857143,
            "unit": "ns",
            "range": "± 13363.640912969551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173105.39285714287,
            "unit": "ns",
            "range": "± 4873.578374590935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3156309.8,
            "unit": "ns",
            "range": "± 40277.39680231865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2946238.6428571427,
            "unit": "ns",
            "range": "± 36980.726389373616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18599.535353535353,
            "unit": "ns",
            "range": "± 4102.9993168590145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89598.36,
            "unit": "ns",
            "range": "± 13294.850839663035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100701.51111111112,
            "unit": "ns",
            "range": "± 3776.958183405254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74469.14285714286,
            "unit": "ns",
            "range": "± 26722.397905784044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2834.9347826086955,
            "unit": "ns",
            "range": "± 606.5631482729638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15228.857142857143,
            "unit": "ns",
            "range": "± 3047.6079414761434"
          }
        ]
      }
    ]
  }
}