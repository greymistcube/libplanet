window.BENCHMARK_DATA = {
  "lastUpdate": 1687446113229,
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
          "id": "e5844dd33f6dc8fd839162f13fabf07ba45790f5",
          "message": "Prepare 2.1.2",
          "timestamp": "2023-06-22T23:48:44+09:00",
          "tree_id": "eec1297b63193313b8d4c6d719ea52a649f84825",
          "url": "https://github.com/greymistcube/libplanet/commit/e5844dd33f6dc8fd839162f13fabf07ba45790f5"
        },
        "date": 1687446105616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3426635.163265306,
            "unit": "ns",
            "range": "± 129927.13652280056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588311.8913043477,
            "unit": "ns",
            "range": "± 137292.07759230008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4382670.714285715,
            "unit": "ns",
            "range": "± 42136.79661335405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499512.888888889,
            "unit": "ns",
            "range": "± 95447.66030527744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6937832.869565218,
            "unit": "ns",
            "range": "± 106953.54339886604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8010004.153846154,
            "unit": "ns",
            "range": "± 34364.714948248286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20260697.8,
            "unit": "ns",
            "range": "± 100364.05675425555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52105731.86666667,
            "unit": "ns",
            "range": "± 277341.6123437115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103877052.13333334,
            "unit": "ns",
            "range": "± 481427.5818771955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208816423.30769232,
            "unit": "ns",
            "range": "± 647359.6568288482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296994.67647058825,
            "unit": "ns",
            "range": "± 8760.302429124957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284334.2702702703,
            "unit": "ns",
            "range": "± 9389.27973704482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246679.5,
            "unit": "ns",
            "range": "± 5917.304475930706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4319177.357142857,
            "unit": "ns",
            "range": "± 24104.732563120473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4039845.6,
            "unit": "ns",
            "range": "± 32072.634846102505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19837.123711340206,
            "unit": "ns",
            "range": "± 1637.0403887919456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90457.42696629213,
            "unit": "ns",
            "range": "± 4747.1384942731565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77404.75,
            "unit": "ns",
            "range": "± 2876.4044749458258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88282.84,
            "unit": "ns",
            "range": "± 2933.713005916066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4800,
            "unit": "ns",
            "range": "± 593.1905258852336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18990.75257731959,
            "unit": "ns",
            "range": "± 1799.1424695238372"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48814.369047619046,
            "unit": "ns",
            "range": "± 2628.1223852403627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6287760.111049107,
            "unit": "ns",
            "range": "± 15690.514707911185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890928.3678385417,
            "unit": "ns",
            "range": "± 715.9839229775891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358299.196451823,
            "unit": "ns",
            "range": "± 480.3226237585812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625530.96953125,
            "unit": "ns",
            "range": "± 5533.22543870132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822397.6238839285,
            "unit": "ns",
            "range": "± 855.5872081051548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741754.7809244791,
            "unit": "ns",
            "range": "± 494.8486352762469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435418.2978723405,
            "unit": "ns",
            "range": "± 100719.37714197458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747973.5384615385,
            "unit": "ns",
            "range": "± 87936.92096636393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2260797.204301075,
            "unit": "ns",
            "range": "± 123995.34129296948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5494544.642857143,
            "unit": "ns",
            "range": "± 151772.7754629254"
          }
        ]
      }
    ]
  }
}