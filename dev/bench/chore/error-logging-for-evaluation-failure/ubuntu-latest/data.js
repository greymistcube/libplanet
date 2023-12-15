window.BENCHMARK_DATA = {
  "lastUpdate": 1702614237553,
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
          "id": "ff955410c709f0d5f5a7b9533f237af4c6fac400",
          "message": "Additional error logging for better debugging",
          "timestamp": "2023-12-15T13:11:53+09:00",
          "tree_id": "b5f8ba557541555efe7169019c7b0391f4389796",
          "url": "https://github.com/greymistcube/libplanet/commit/ff955410c709f0d5f5a7b9533f237af4c6fac400"
        },
        "date": 1702614230254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3705144.234074519,
            "unit": "ns",
            "range": "± 17903.748564393554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206375.4486177885,
            "unit": "ns",
            "range": "± 2976.6619029816543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773761.3225097656,
            "unit": "ns",
            "range": "± 2364.9964431058174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905881.2901041666,
            "unit": "ns",
            "range": "± 24428.452783562112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629937.3337590144,
            "unit": "ns",
            "range": "± 806.0401824080526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581585.5358072916,
            "unit": "ns",
            "range": "± 302.3728710967764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380777.7682926827,
            "unit": "ns",
            "range": "± 82541.95588548419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541210.25,
            "unit": "ns",
            "range": "± 104043.72762371712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3076759.6,
            "unit": "ns",
            "range": "± 73748.19658360015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2952830.4065934066,
            "unit": "ns",
            "range": "± 169420.34618637344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7119891.783783784,
            "unit": "ns",
            "range": "± 241161.27405525115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40289.270833333336,
            "unit": "ns",
            "range": "± 5745.334083967921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196896.9841269841,
            "unit": "ns",
            "range": "± 8970.03952322012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189036.72527472526,
            "unit": "ns",
            "range": "± 11707.94449182637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169898.1875,
            "unit": "ns",
            "range": "± 5166.90068976589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3075407.214285714,
            "unit": "ns",
            "range": "± 44280.39885370114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2830542.433333333,
            "unit": "ns",
            "range": "± 35471.21552644918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15013.30303030303,
            "unit": "ns",
            "range": "± 2699.320154222304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62779.32989690721,
            "unit": "ns",
            "range": "± 8363.816113077073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64904.69565217391,
            "unit": "ns",
            "range": "± 8267.558289555005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59216.798969072166,
            "unit": "ns",
            "range": "± 13025.080380562074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5226.7959183673465,
            "unit": "ns",
            "range": "± 1696.300170134892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14772.333333333334,
            "unit": "ns",
            "range": "± 2148.5147607575295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5566598.533333333,
            "unit": "ns",
            "range": "± 57857.37754274566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14351960.8,
            "unit": "ns",
            "range": "± 317369.1589942141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36082331.7368421,
            "unit": "ns",
            "range": "± 661631.3495041247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75634300.2,
            "unit": "ns",
            "range": "± 1406507.4894121457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148544652.35714287,
            "unit": "ns",
            "range": "± 922558.6011784839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976885.306122449,
            "unit": "ns",
            "range": "± 84904.72669894679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1940655.036585366,
            "unit": "ns",
            "range": "± 101981.13149135924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1443942.336734694,
            "unit": "ns",
            "range": "± 125463.15166448861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6237985.322580645,
            "unit": "ns",
            "range": "± 388069.10857968277"
          }
        ]
      }
    ]
  }
}