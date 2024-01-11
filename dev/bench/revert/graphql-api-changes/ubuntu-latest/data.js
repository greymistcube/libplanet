window.BENCHMARK_DATA = {
  "lastUpdate": 1704940790031,
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
          "id": "4adc1b0389c971a214c9a9c83951525691b1a123",
          "message": "Roll back some name changes; code cleanup for more consistency",
          "timestamp": "2024-01-11T11:29:02+09:00",
          "tree_id": "cc892825a37f09f4260b2d6020b8e93e6242046f",
          "url": "https://github.com/greymistcube/libplanet/commit/4adc1b0389c971a214c9a9c83951525691b1a123"
        },
        "date": 1704940782739,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3670870.962890625,
            "unit": "ns",
            "range": "± 10683.126905450063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220503.4615384615,
            "unit": "ns",
            "range": "± 1633.4657411541968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767483.6298076923,
            "unit": "ns",
            "range": "± 1614.8603452646767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955339.6739583334,
            "unit": "ns",
            "range": "± 11207.279204860284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636010.2012469952,
            "unit": "ns",
            "range": "± 1425.0632817565527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596264.848687066,
            "unit": "ns",
            "range": "± 9849.359107190947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387874.2926829266,
            "unit": "ns",
            "range": "± 79592.27862369688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2544280.5,
            "unit": "ns",
            "range": "± 78028.82136046415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110308.8125,
            "unit": "ns",
            "range": "± 37957.14267823427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2985431.5256410255,
            "unit": "ns",
            "range": "± 103163.61793912039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6885504.76,
            "unit": "ns",
            "range": "± 174004.51656213793"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38692.9375,
            "unit": "ns",
            "range": "± 4783.073651319553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198815.47674418605,
            "unit": "ns",
            "range": "± 7344.105412435888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185237.23913043478,
            "unit": "ns",
            "range": "± 7099.674490769223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172613.25,
            "unit": "ns",
            "range": "± 1437.0068719390315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3084506.6666666665,
            "unit": "ns",
            "range": "± 38356.35016836319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870864.4615384615,
            "unit": "ns",
            "range": "± 19293.55361951838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13761.288659793814,
            "unit": "ns",
            "range": "± 2184.1920128827715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60116.54347826087,
            "unit": "ns",
            "range": "± 6077.512971698686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55689.68,
            "unit": "ns",
            "range": "± 6293.534694197745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63824.36734693877,
            "unit": "ns",
            "range": "± 13918.93767897133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2847.439024390244,
            "unit": "ns",
            "range": "± 455.887226079806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12813.257575757576,
            "unit": "ns",
            "range": "± 2057.577816570504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5713314.5,
            "unit": "ns",
            "range": "± 24490.330097187965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14377926.2,
            "unit": "ns",
            "range": "± 134959.415580706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37315846.13333333,
            "unit": "ns",
            "range": "± 402249.9114182388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75752154,
            "unit": "ns",
            "range": "± 782531.6061213484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150185140.15384614,
            "unit": "ns",
            "range": "± 1127901.2340914316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010440.4565217391,
            "unit": "ns",
            "range": "± 139831.50539248213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887045.4086021506,
            "unit": "ns",
            "range": "± 106349.51171718373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1381615.6333333333,
            "unit": "ns",
            "range": "± 84998.5566134488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6056072.829787234,
            "unit": "ns",
            "range": "± 374369.6606738685"
          }
        ]
      }
    ]
  }
}