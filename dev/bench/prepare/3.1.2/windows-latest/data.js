window.BENCHMARK_DATA = {
  "lastUpdate": 1691648487099,
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
          "id": "4715616cde03d41357827312c6b961bd463bd398",
          "message": "Prepare 3.1.2",
          "timestamp": "2023-08-10T14:57:52+09:00",
          "tree_id": "d30ecd7404f1df3761d2e07603c5ace4f72df8b9",
          "url": "https://github.com/greymistcube/libplanet/commit/4715616cde03d41357827312c6b961bd463bd398"
        },
        "date": 1691648458903,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1677478.5714285714,
            "unit": "ns",
            "range": "± 240275.962155374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3222412.765957447,
            "unit": "ns",
            "range": "± 200225.19753455382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2070587.894736842,
            "unit": "ns",
            "range": "± 129200.57240745619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6200736.082474227,
            "unit": "ns",
            "range": "± 463238.4384655414"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56986.81318681319,
            "unit": "ns",
            "range": "± 5246.400009979516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8947493.877551021,
            "unit": "ns",
            "range": "± 355072.3496745436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26122214.285714287,
            "unit": "ns",
            "range": "± 591398.5959449974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68596125.92592593,
            "unit": "ns",
            "range": "± 1849916.5972036917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133596700,
            "unit": "ns",
            "range": "± 5441835.607586837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254546063.20754716,
            "unit": "ns",
            "range": "± 10544914.482073586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6033873.493303572,
            "unit": "ns",
            "range": "± 65287.2492123199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987194.9928977273,
            "unit": "ns",
            "range": "± 47658.19609619291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1450347.2005208333,
            "unit": "ns",
            "range": "± 16532.141296715025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3289260.8258928573,
            "unit": "ns",
            "range": "± 25440.711451479623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1073842.2526041667,
            "unit": "ns",
            "range": "± 21926.004102966013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 966134.0364583334,
            "unit": "ns",
            "range": "± 11848.280377606154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3944086.8421052634,
            "unit": "ns",
            "range": "± 135335.1978168893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4091501.030927835,
            "unit": "ns",
            "range": "± 264339.52184912894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5003306.976744186,
            "unit": "ns",
            "range": "± 271908.13015588565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4536968.62745098,
            "unit": "ns",
            "range": "± 184276.2442532364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7978565.934065934,
            "unit": "ns",
            "range": "± 444819.1315879048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321741.6666666667,
            "unit": "ns",
            "range": "± 12460.624507646773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306783.0508474576,
            "unit": "ns",
            "range": "± 13616.472687994023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267188.04347826086,
            "unit": "ns",
            "range": "± 16962.128743603273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4940009.090909091,
            "unit": "ns",
            "range": "± 119281.27585904994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4567697.826086956,
            "unit": "ns",
            "range": "± 164114.91162411572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23676.041666666668,
            "unit": "ns",
            "range": "± 1935.145570026447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105988.17204301075,
            "unit": "ns",
            "range": "± 6885.742192044141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88212.3595505618,
            "unit": "ns",
            "range": "± 5978.442717280128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131223.71134020618,
            "unit": "ns",
            "range": "± 26985.492912843765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5672.043010752688,
            "unit": "ns",
            "range": "± 889.2309319315655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21268.88888888889,
            "unit": "ns",
            "range": "± 2101.9864571798007"
          }
        ]
      }
    ]
  }
}