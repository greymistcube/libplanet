window.BENCHMARK_DATA = {
  "lastUpdate": 1689914108035,
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
          "id": "94ceefc81e5c28a3cba877c38447820481d4f9d3",
          "message": "Removed more string usage",
          "timestamp": "2023-07-21T13:17:38+09:00",
          "tree_id": "88db91efeeaac436e3e33d1df6fc60791a1ed43f",
          "url": "https://github.com/greymistcube/libplanet/commit/94ceefc81e5c28a3cba877c38447820481d4f9d3"
        },
        "date": 1689914099181,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315522.14,
            "unit": "ns",
            "range": "± 30743.428610479965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302490.79,
            "unit": "ns",
            "range": "± 27078.56747784907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280714.8350515464,
            "unit": "ns",
            "range": "± 19954.628867592146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5046150.583333333,
            "unit": "ns",
            "range": "± 223454.5097716715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4636417.2,
            "unit": "ns",
            "range": "± 197180.28942347638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22467.155555555557,
            "unit": "ns",
            "range": "± 1872.2772165282006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101488.47916666667,
            "unit": "ns",
            "range": "± 8740.986616574834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88332.47916666667,
            "unit": "ns",
            "range": "± 8257.236893498384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104818.3125,
            "unit": "ns",
            "range": "± 16124.966614612522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5939.425531914893,
            "unit": "ns",
            "range": "± 804.196620281567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23102.05376344086,
            "unit": "ns",
            "range": "± 1875.8263359730954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592010.8333333333,
            "unit": "ns",
            "range": "± 167032.94981861743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3104680.49,
            "unit": "ns",
            "range": "± 233398.24677621727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2097058.7575757576,
            "unit": "ns",
            "range": "± 152928.134565406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5891264.26,
            "unit": "ns",
            "range": "± 421824.40745885315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7022646.7125,
            "unit": "ns",
            "range": "± 96791.31807086061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2087694.6717122395,
            "unit": "ns",
            "range": "± 51013.981102774604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1496578.428984375,
            "unit": "ns",
            "range": "± 38584.37701468847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2962726.9494881467,
            "unit": "ns",
            "range": "± 85807.48688013779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 951954.1853770381,
            "unit": "ns",
            "range": "± 23821.69731618167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 855699.7910644531,
            "unit": "ns",
            "range": "± 19469.684006607436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3718152.81,
            "unit": "ns",
            "range": "± 336090.6231032837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3926743.33,
            "unit": "ns",
            "range": "± 328729.5601270662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4737955.54,
            "unit": "ns",
            "range": "± 402829.0580032253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4250556.666666667,
            "unit": "ns",
            "range": "± 323450.7700965971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7103854.98989899,
            "unit": "ns",
            "range": "± 539630.8152539689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8551662.529411765,
            "unit": "ns",
            "range": "± 460203.19328770903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23468088.243902437,
            "unit": "ns",
            "range": "± 1234388.3664964472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58348859.654545456,
            "unit": "ns",
            "range": "± 2464483.3375964854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117047078.95652173,
            "unit": "ns",
            "range": "± 4441447.153475101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230546789.57142857,
            "unit": "ns",
            "range": "± 3961296.870209081"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53496.46153846154,
            "unit": "ns",
            "range": "± 4384.212515904697"
          }
        ]
      }
    ]
  }
}