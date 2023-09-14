window.BENCHMARK_DATA = {
  "lastUpdate": 1694668870669,
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
          "id": "80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0",
          "message": "Initial implementation of AccountDiff",
          "timestamp": "2023-09-14T11:31:17+09:00",
          "tree_id": "c9d18aa7f1110322223d748a09b0a9fa834f95e2",
          "url": "https://github.com/greymistcube/libplanet/commit/80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0"
        },
        "date": 1694659765978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8261846.6,
            "unit": "ns",
            "range": "± 146313.01816057635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21972336.279069766,
            "unit": "ns",
            "range": "± 809026.5276905422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52619118.59090909,
            "unit": "ns",
            "range": "± 1252049.915392084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103633826.97619048,
            "unit": "ns",
            "range": "± 3766992.6122008217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205743447.46296296,
            "unit": "ns",
            "range": "± 5727077.234866326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63851.692307692305,
            "unit": "ns",
            "range": "± 9529.070097679823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336658.202020202,
            "unit": "ns",
            "range": "± 44052.517124445774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332894.4175824176,
            "unit": "ns",
            "range": "± 34542.913156782546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296214.04285714286,
            "unit": "ns",
            "range": "± 13887.156691576483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4110761.878787879,
            "unit": "ns",
            "range": "± 129045.23885414118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3695607.3086419753,
            "unit": "ns",
            "range": "± 192394.10647708533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22495.81052631579,
            "unit": "ns",
            "range": "± 3613.11607216705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107863.05434782608,
            "unit": "ns",
            "range": "± 15620.33100517718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101040.32967032967,
            "unit": "ns",
            "range": "± 13741.193609043612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112795.02061855671,
            "unit": "ns",
            "range": "± 15664.614407013147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8920.445652173914,
            "unit": "ns",
            "range": "± 1025.9885756934218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24801.554347826088,
            "unit": "ns",
            "range": "± 3122.2982531509124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1825486.6179775281,
            "unit": "ns",
            "range": "± 381872.3831114771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3237054.8333333335,
            "unit": "ns",
            "range": "± 389786.8181559438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2385790.295698925,
            "unit": "ns",
            "range": "± 416907.1034757169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6368555.144444444,
            "unit": "ns",
            "range": "± 847505.8667364016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335640.7045454546,
            "unit": "ns",
            "range": "± 124476.05734317492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3453849.619402985,
            "unit": "ns",
            "range": "± 163685.00724409882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4323943.760869565,
            "unit": "ns",
            "range": "± 160439.17630033643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3951841.6129032257,
            "unit": "ns",
            "range": "± 353568.1262843695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6753748.882978723,
            "unit": "ns",
            "range": "± 258470.78832782374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6197190.417447916,
            "unit": "ns",
            "range": "± 68618.53317619515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1738721.1730057567,
            "unit": "ns",
            "range": "± 38441.9429263385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1031868.4756266276,
            "unit": "ns",
            "range": "± 40407.03180023676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2923838.0693609775,
            "unit": "ns",
            "range": "± 98680.41140950847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826870.2127441406,
            "unit": "ns",
            "range": "± 17603.168905218452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732256.9810965402,
            "unit": "ns",
            "range": "± 9590.804109527384"
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
          "id": "8f1fea75e684d66b3b263d2a2c1ae68bc9efdc27",
          "message": "Docs",
          "timestamp": "2023-09-14T14:01:24+09:00",
          "tree_id": "6105a38490983f22a560c0118ce296691097dc4d",
          "url": "https://github.com/greymistcube/libplanet/commit/8f1fea75e684d66b3b263d2a2c1ae68bc9efdc27"
        },
        "date": 1694668855858,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9834118.153846154,
            "unit": "ns",
            "range": "± 458807.0937285432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19890622.125,
            "unit": "ns",
            "range": "± 696962.4169235617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48797645.78571428,
            "unit": "ns",
            "range": "± 1768355.2221681294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102342219.38235295,
            "unit": "ns",
            "range": "± 2077440.7962604759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211038098.7,
            "unit": "ns",
            "range": "± 1556260.925423644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65272.36842105263,
            "unit": "ns",
            "range": "± 12222.646059804214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364814.3804347826,
            "unit": "ns",
            "range": "± 59093.844868084525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302261.6022727273,
            "unit": "ns",
            "range": "± 26581.31562135016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295705.58762886596,
            "unit": "ns",
            "range": "± 26674.56508929768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4383757.3877551025,
            "unit": "ns",
            "range": "± 312018.6365534153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830202.2319587627,
            "unit": "ns",
            "range": "± 310963.2879020353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19080.483516483517,
            "unit": "ns",
            "range": "± 3035.41920356842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86745.14583333333,
            "unit": "ns",
            "range": "± 12961.353491684558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85458.68,
            "unit": "ns",
            "range": "± 18604.875083871557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89116.84946236559,
            "unit": "ns",
            "range": "± 18348.337118083244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4571.116279069767,
            "unit": "ns",
            "range": "± 619.9423534605673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16734.066666666666,
            "unit": "ns",
            "range": "± 2362.2431959588607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655624.551020408,
            "unit": "ns",
            "range": "± 187886.07917522144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3008589.3163265307,
            "unit": "ns",
            "range": "± 227086.2616253599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2053700.237113402,
            "unit": "ns",
            "range": "± 210021.5379361807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5602446.255319149,
            "unit": "ns",
            "range": "± 406456.3207388173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393176.006666667,
            "unit": "ns",
            "range": "± 162701.34136371044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3455785.782608696,
            "unit": "ns",
            "range": "± 234383.21873192847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4484115.42,
            "unit": "ns",
            "range": "± 178953.96859734174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4054823.258241758,
            "unit": "ns",
            "range": "± 268664.4118960116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7111715.445054945,
            "unit": "ns",
            "range": "± 449077.86099463777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6311545.123046875,
            "unit": "ns",
            "range": "± 432073.7708263641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841734.2203559028,
            "unit": "ns",
            "range": "± 65065.379748998865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 998177.0223214285,
            "unit": "ns",
            "range": "± 7208.308721871905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2476930.711197917,
            "unit": "ns",
            "range": "± 24999.80437354035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836113.3189290365,
            "unit": "ns",
            "range": "± 2314.5919795236955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708996.9175130208,
            "unit": "ns",
            "range": "± 2116.7931333100073"
          }
        ]
      }
    ]
  }
}