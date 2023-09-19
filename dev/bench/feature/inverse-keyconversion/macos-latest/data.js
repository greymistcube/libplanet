window.BENCHMARK_DATA = {
  "lastUpdate": 1694768492091,
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
          "id": "fae541ca878ecab58d86efe8734aea616420b4d1",
          "message": "Typo fix",
          "timestamp": "2023-09-15T17:45:16+09:00",
          "tree_id": "a585c6e34603a7b2c98ce5f8223081084e6c06c1",
          "url": "https://github.com/greymistcube/libplanet/commit/fae541ca878ecab58d86efe8734aea616420b4d1"
        },
        "date": 1694768439632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10133474.465517242,
            "unit": "ns",
            "range": "± 3292525.455234733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 47574948.427083336,
            "unit": "ns",
            "range": "± 30706341.443747226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53519156.29213483,
            "unit": "ns",
            "range": "± 5084159.9321590485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101018403.9375,
            "unit": "ns",
            "range": "± 1881045.5771422258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210814155.92857143,
            "unit": "ns",
            "range": "± 4955890.914824261"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57784.663043478264,
            "unit": "ns",
            "range": "± 7496.241640406642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322150.0808080808,
            "unit": "ns",
            "range": "± 32333.420164028543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298634.96315789473,
            "unit": "ns",
            "range": "± 32835.485039560524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302526.18131868134,
            "unit": "ns",
            "range": "± 21771.534075423213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3792864.84,
            "unit": "ns",
            "range": "± 99790.70466426219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3571197.5,
            "unit": "ns",
            "range": "± 73560.23380196666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16067.9,
            "unit": "ns",
            "range": "± 1730.5994548230126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78677.28421052631,
            "unit": "ns",
            "range": "± 6762.49063815478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82442.69387755102,
            "unit": "ns",
            "range": "± 11903.040821448756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81200.68478260869,
            "unit": "ns",
            "range": "± 12908.063778272159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4173.4875,
            "unit": "ns",
            "range": "± 367.5180868278044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16232.327586206897,
            "unit": "ns",
            "range": "± 1639.3483334239613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1460285.7096774194,
            "unit": "ns",
            "range": "± 141130.5845835062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2721026.5,
            "unit": "ns",
            "range": "± 178438.39654577698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1900210.6888888888,
            "unit": "ns",
            "range": "± 228502.47862686572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5090718.391304348,
            "unit": "ns",
            "range": "± 193891.6761719719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3440571.326530612,
            "unit": "ns",
            "range": "± 233614.62800853784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3502658.1789473686,
            "unit": "ns",
            "range": "± 241523.10826203096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4548709.4625,
            "unit": "ns",
            "range": "± 235479.4203050473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3967845.7333333334,
            "unit": "ns",
            "range": "± 200453.83103910048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6961203.326923077,
            "unit": "ns",
            "range": "± 286455.81070725346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5105246.536979167,
            "unit": "ns",
            "range": "± 53499.094883064536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1755258.9626302083,
            "unit": "ns",
            "range": "± 8003.75296826944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 944997.8755580357,
            "unit": "ns",
            "range": "± 10911.838684718308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2401632.72109375,
            "unit": "ns",
            "range": "± 16598.60376819155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805310.184765625,
            "unit": "ns",
            "range": "± 6097.827838772183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735802.4363839285,
            "unit": "ns",
            "range": "± 3683.2536524859215"
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
          "id": "a8930c3076bea9c0507e1986d89c2065ed404130",
          "message": "Added test",
          "timestamp": "2023-09-15T17:43:48+09:00",
          "tree_id": "1c684cbbb77075e1b3858f3181f76e8fc81d857d",
          "url": "https://github.com/greymistcube/libplanet/commit/a8930c3076bea9c0507e1986d89c2065ed404130"
        },
        "date": 1694768476960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9031603.647058824,
            "unit": "ns",
            "range": "± 291665.14753209223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22230964.14285714,
            "unit": "ns",
            "range": "± 336469.405922705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56293515.77272727,
            "unit": "ns",
            "range": "± 1380554.5235921957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111180720.07692307,
            "unit": "ns",
            "range": "± 1326781.2421989832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233908194,
            "unit": "ns",
            "range": "± 3421430.682779939"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76944.16279069768,
            "unit": "ns",
            "range": "± 6158.628655339099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355471.329787234,
            "unit": "ns",
            "range": "± 44893.028714657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334054.06666666665,
            "unit": "ns",
            "range": "± 28232.44458237064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306800.64285714284,
            "unit": "ns",
            "range": "± 4971.4353577697775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4191616.5384615385,
            "unit": "ns",
            "range": "± 37440.891225626976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3746093.6666666665,
            "unit": "ns",
            "range": "± 42718.31551708994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23701.64893617021,
            "unit": "ns",
            "range": "± 4016.13669204528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121811.51086956522,
            "unit": "ns",
            "range": "± 22030.597979391092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117844.32978723405,
            "unit": "ns",
            "range": "± 9902.739818975808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117025.32631578947,
            "unit": "ns",
            "range": "± 15843.076607540128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8331.736559139785,
            "unit": "ns",
            "range": "± 734.6452175066704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24876.005263157895,
            "unit": "ns",
            "range": "± 5841.270190987654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590556.5612244897,
            "unit": "ns",
            "range": "± 150859.92401583405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2911799.66,
            "unit": "ns",
            "range": "± 115740.23561977406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1972372.030612245,
            "unit": "ns",
            "range": "± 146365.73038550574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5604504.745762712,
            "unit": "ns",
            "range": "± 245985.9701451027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3725460.814285714,
            "unit": "ns",
            "range": "± 180924.51664940294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3776827.2216494847,
            "unit": "ns",
            "range": "± 306602.56223369285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4660850.828947368,
            "unit": "ns",
            "range": "± 234359.2080060799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4270202.324742268,
            "unit": "ns",
            "range": "± 342750.86588135245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8355202.840425532,
            "unit": "ns",
            "range": "± 1746932.3986716776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6165867.382211538,
            "unit": "ns",
            "range": "± 79320.91542800138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837263.103515625,
            "unit": "ns",
            "range": "± 46507.25409073883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046542.2331194197,
            "unit": "ns",
            "range": "± 15911.549866612602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2766586.316032247,
            "unit": "ns",
            "range": "± 103483.03104290973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819582.5366908482,
            "unit": "ns",
            "range": "± 12315.104774463927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848818.64328125,
            "unit": "ns",
            "range": "± 22390.39953996678"
          }
        ]
      }
    ]
  }
}