window.BENCHMARK_DATA = {
  "lastUpdate": 1689920320788,
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
      },
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
          "id": "fe1d5afae59d3ab659475584cbf054a6ddf27639",
          "message": "Changelog",
          "timestamp": "2023-07-21T15:01:37+09:00",
          "tree_id": "6d9838ae626adc66676c4eaa170f9f89a93aec0b",
          "url": "https://github.com/greymistcube/libplanet/commit/fe1d5afae59d3ab659475584cbf054a6ddf27639"
        },
        "date": 1689920312580,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353620.9310344828,
            "unit": "ns",
            "range": "± 9975.677474061722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331497.4791666667,
            "unit": "ns",
            "range": "± 13062.691871728695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308925.5128205128,
            "unit": "ns",
            "range": "± 15875.076018424055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5347147.7894736845,
            "unit": "ns",
            "range": "± 115057.78474101076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4915371.4,
            "unit": "ns",
            "range": "± 91060.80171731413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24862.67391304348,
            "unit": "ns",
            "range": "± 2186.5285301998524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108532.18279569893,
            "unit": "ns",
            "range": "± 7530.085798267241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96448.30208333333,
            "unit": "ns",
            "range": "± 6644.825518472475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111937.15789473684,
            "unit": "ns",
            "range": "± 14855.848322072388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6561.714285714285,
            "unit": "ns",
            "range": "± 1087.8665397223242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22936.315789473683,
            "unit": "ns",
            "range": "± 2098.0309170751893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753758.5394736843,
            "unit": "ns",
            "range": "± 85880.65244053375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3288871.5223880596,
            "unit": "ns",
            "range": "± 155613.19656358883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2253395.8,
            "unit": "ns",
            "range": "± 97384.66807639692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6082870.47368421,
            "unit": "ns",
            "range": "± 263421.00753282924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7278015.997916667,
            "unit": "ns",
            "range": "± 65598.14388165114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2255209.2513020835,
            "unit": "ns",
            "range": "± 15502.655479116844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1676204.6868489583,
            "unit": "ns",
            "range": "± 11344.91736177074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3107600.38984375,
            "unit": "ns",
            "range": "± 22759.002436753013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994152.9862630208,
            "unit": "ns",
            "range": "± 4123.176706256628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902248.8444661458,
            "unit": "ns",
            "range": "± 4641.820281667197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4249661.346153846,
            "unit": "ns",
            "range": "± 111206.39253961701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4376222.935483871,
            "unit": "ns",
            "range": "± 132865.731152402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5267536.697674419,
            "unit": "ns",
            "range": "± 192452.94626461354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4771421.534883721,
            "unit": "ns",
            "range": "± 172556.38641095578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7907962.395348838,
            "unit": "ns",
            "range": "± 279792.2105567715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9583135.8,
            "unit": "ns",
            "range": "± 201929.59370600854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26499914.333333332,
            "unit": "ns",
            "range": "± 311180.049602584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65448529.705882356,
            "unit": "ns",
            "range": "± 1196193.7452363623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132353930.13333334,
            "unit": "ns",
            "range": "± 1141621.471056964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263850279.06666666,
            "unit": "ns",
            "range": "± 2227912.8263955438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55334.97701149425,
            "unit": "ns",
            "range": "± 2982.705604044022"
          }
        ]
      }
    ]
  }
}