window.BENCHMARK_DATA = {
  "lastUpdate": 1691648554220,
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
          "id": "a6f332b868049573eac1ea2d202dfd18c35de0cf",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-10T15:07:06+09:00",
          "tree_id": "2fd4fb29c11262bfa240ed8ebc6a274ff8869231",
          "url": "https://github.com/greymistcube/libplanet/commit/a6f332b868049573eac1ea2d202dfd18c35de0cf"
        },
        "date": 1691648533524,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8582080.5,
            "unit": "ns",
            "range": "± 106504.27774633857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21356496.55882353,
            "unit": "ns",
            "range": "± 412445.6244352809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52757337.071428575,
            "unit": "ns",
            "range": "± 397640.73514102463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105813304.15384616,
            "unit": "ns",
            "range": "± 1021329.3528370142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214424440.07142857,
            "unit": "ns",
            "range": "± 3138652.268830603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67581.19587628866,
            "unit": "ns",
            "range": "± 11269.424395274858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328247.36666666664,
            "unit": "ns",
            "range": "± 18878.820052277955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299700.28125,
            "unit": "ns",
            "range": "± 27163.01210225836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297196.02040816325,
            "unit": "ns",
            "range": "± 20801.79302899701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4089863.1428571427,
            "unit": "ns",
            "range": "± 69316.86523368015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793331.9285714286,
            "unit": "ns",
            "range": "± 57287.891782126695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19494.74157303371,
            "unit": "ns",
            "range": "± 3225.257394689925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92679.95918367348,
            "unit": "ns",
            "range": "± 14653.727037200846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90273.39175257731,
            "unit": "ns",
            "range": "± 17462.319049740538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100170.27173913043,
            "unit": "ns",
            "range": "± 14171.992381743776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7046.412087912088,
            "unit": "ns",
            "range": "± 1296.8500354350208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19910.1935483871,
            "unit": "ns",
            "range": "± 4092.6139389681243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1509118.2021276595,
            "unit": "ns",
            "range": "± 176361.1462491485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2850975.0229885057,
            "unit": "ns",
            "range": "± 319661.8936683737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1923089.7582417582,
            "unit": "ns",
            "range": "± 181625.28377124522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5684524.631578947,
            "unit": "ns",
            "range": "± 470781.74005841254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308431.4444444445,
            "unit": "ns",
            "range": "± 111162.90652615843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3530553.6086956523,
            "unit": "ns",
            "range": "± 134610.4230635748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4441015.094594595,
            "unit": "ns",
            "range": "± 145267.17171922672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173256.25,
            "unit": "ns",
            "range": "± 178760.3137462665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6802785.826086956,
            "unit": "ns",
            "range": "± 204744.85301090713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5254391.568638393,
            "unit": "ns",
            "range": "± 93106.16446269744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1621901.4363839286,
            "unit": "ns",
            "range": "± 21118.174713199063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 992175.877092634,
            "unit": "ns",
            "range": "± 9864.243049168157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690503.781550481,
            "unit": "ns",
            "range": "± 25730.182769326966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781760.8811598558,
            "unit": "ns",
            "range": "± 7922.276976798558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790376.6060267857,
            "unit": "ns",
            "range": "± 11306.026924079826"
          }
        ]
      }
    ]
  }
}