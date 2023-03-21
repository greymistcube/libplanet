window.BENCHMARK_DATA = {
  "lastUpdate": 1679367169522,
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
          "id": "84cb01bc9136fbaec92c2bc40f6a892c4711ccb7",
          "message": "Removed ByteArray and ToByteArray() from BlockCommit",
          "timestamp": "2023-03-20T18:52:26+09:00",
          "tree_id": "a833bf978224ee20531425ec6bad0b69d2c24aa3",
          "url": "https://github.com/greymistcube/libplanet/commit/84cb01bc9136fbaec92c2bc40f6a892c4711ccb7"
        },
        "date": 1679310263238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9979519.3172043,
            "unit": "ns",
            "range": "± 1956377.3017776955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22119465.654639177,
            "unit": "ns",
            "range": "± 1514167.9388201432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58670375.721518986,
            "unit": "ns",
            "range": "± 4030096.93358789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112949948.95744681,
            "unit": "ns",
            "range": "± 4393227.784707346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236372350.70238096,
            "unit": "ns",
            "range": "± 18723707.590258226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74755.69473684211,
            "unit": "ns",
            "range": "± 9415.71307236697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249875.7,
            "unit": "ns",
            "range": "± 23857.09718370163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254866.55555555556,
            "unit": "ns",
            "range": "± 26193.64457970035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303284.13440860214,
            "unit": "ns",
            "range": "± 89965.98070427668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14630547.132653061,
            "unit": "ns",
            "range": "± 1273351.4243445934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10346531.352941176,
            "unit": "ns",
            "range": "± 329537.80851663655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27297.03370786517,
            "unit": "ns",
            "range": "± 2973.091482743166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70997.66292134831,
            "unit": "ns",
            "range": "± 8345.599304347363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65031.44382022472,
            "unit": "ns",
            "range": "± 6092.264427048508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148461.45876288658,
            "unit": "ns",
            "range": "± 25057.705553431035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9151.427835051547,
            "unit": "ns",
            "range": "± 1673.9044566983625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23596.031578947368,
            "unit": "ns",
            "range": "± 5670.059098443616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779163.2252747254,
            "unit": "ns",
            "range": "± 315675.41575316695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2910878.6,
            "unit": "ns",
            "range": "± 128420.56519791734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2503445.717171717,
            "unit": "ns",
            "range": "± 187335.88178690802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5957504.08,
            "unit": "ns",
            "range": "± 153302.19064180614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783574.606741573,
            "unit": "ns",
            "range": "± 435728.59910386195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5901759.364583333,
            "unit": "ns",
            "range": "± 483905.17375437845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28818486.123595506,
            "unit": "ns",
            "range": "± 2246436.675804766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7385253.11827957,
            "unit": "ns",
            "range": "± 668393.8569949811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34115139.71875,
            "unit": "ns",
            "range": "± 2722464.5569375083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7939916.210164835,
            "unit": "ns",
            "range": "± 495858.9225519385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2143612.2417629077,
            "unit": "ns",
            "range": "± 81681.1574211766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327436.261439732,
            "unit": "ns",
            "range": "± 20302.838025796682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2966120.5184765626,
            "unit": "ns",
            "range": "± 299162.68257694633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945570.2898312833,
            "unit": "ns",
            "range": "± 53888.108126510284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934933.3277994791,
            "unit": "ns",
            "range": "± 49792.53678852952"
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
          "id": "89b597462852c69c5dfd8135de638136dd06269e",
          "message": "Changelog",
          "timestamp": "2023-03-21T11:03:16+09:00",
          "tree_id": "f6a36b5cf4aac2e0d4ba99b006852e010686dc9f",
          "url": "https://github.com/greymistcube/libplanet/commit/89b597462852c69c5dfd8135de638136dd06269e"
        },
        "date": 1679365320824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8127849.066666666,
            "unit": "ns",
            "range": "± 134624.4568698245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20108324.779069766,
            "unit": "ns",
            "range": "± 731333.9085473926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51992374.5,
            "unit": "ns",
            "range": "± 1903714.6359480731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107420206.77027027,
            "unit": "ns",
            "range": "± 3596977.7028890336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204947202.2142857,
            "unit": "ns",
            "range": "± 6715874.9030920295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70614.4255319149,
            "unit": "ns",
            "range": "± 13437.163273091837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205060.8152173913,
            "unit": "ns",
            "range": "± 17441.270391733742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211532.1075268817,
            "unit": "ns",
            "range": "± 15220.295371828483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205197.39795918367,
            "unit": "ns",
            "range": "± 20197.819164959572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12909474.688888889,
            "unit": "ns",
            "range": "± 481463.89799693297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10410599.4,
            "unit": "ns",
            "range": "± 233560.81918869598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23350.26595744681,
            "unit": "ns",
            "range": "± 3127.822596843252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59700.086021505376,
            "unit": "ns",
            "range": "± 8790.437122058704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58934.98387096774,
            "unit": "ns",
            "range": "± 7692.701592804226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122783.91304347826,
            "unit": "ns",
            "range": "± 16169.20907132923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8477.22340425532,
            "unit": "ns",
            "range": "± 1157.6873977219416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23603.87777777778,
            "unit": "ns",
            "range": "± 2712.7336831056014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1489786.4791666667,
            "unit": "ns",
            "range": "± 132890.59193367968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2822218.7868852457,
            "unit": "ns",
            "range": "± 119280.53212254362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2496385.6666666665,
            "unit": "ns",
            "range": "± 269740.097539601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6038367,
            "unit": "ns",
            "range": "± 223791.43797826034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351246.8225806453,
            "unit": "ns",
            "range": "± 207549.61309010268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5143332.145161291,
            "unit": "ns",
            "range": "± 151997.61415595716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24481196.416666668,
            "unit": "ns",
            "range": "± 624081.6576636856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6299226.2272727275,
            "unit": "ns",
            "range": "± 234487.91765178027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29209375.82222222,
            "unit": "ns",
            "range": "± 1100983.305303497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7189943.138392857,
            "unit": "ns",
            "range": "± 85473.72438007778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2056133.2092848558,
            "unit": "ns",
            "range": "± 11477.716978139957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304990.6214192708,
            "unit": "ns",
            "range": "± 5115.401467533652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2845643.2419084823,
            "unit": "ns",
            "range": "± 43532.6692890606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792692.4413311298,
            "unit": "ns",
            "range": "± 4321.847744878867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798890.8315429688,
            "unit": "ns",
            "range": "± 4101.099602653282"
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
          "id": "4b2538b15d3f85e8e01f75f768711ff2ef686956",
          "message": "Changelog",
          "timestamp": "2023-03-21T11:33:38+09:00",
          "tree_id": "effacef968fbd11c1e416918d7d1244eb1f35d0d",
          "url": "https://github.com/greymistcube/libplanet/commit/4b2538b15d3f85e8e01f75f768711ff2ef686956"
        },
        "date": 1679367157074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9783954.93877551,
            "unit": "ns",
            "range": "± 1307108.087602416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22683645.55050505,
            "unit": "ns",
            "range": "± 1546073.3904713446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56492406.01086956,
            "unit": "ns",
            "range": "± 3185001.087976216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118827946.62371135,
            "unit": "ns",
            "range": "± 7441532.820113926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241444007.7647059,
            "unit": "ns",
            "range": "± 7732494.572038436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80423.41111111111,
            "unit": "ns",
            "range": "± 7350.047249935176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236244.16666666666,
            "unit": "ns",
            "range": "± 24970.378437492574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243850.4382022472,
            "unit": "ns",
            "range": "± 25444.819947895026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208125.39784946237,
            "unit": "ns",
            "range": "± 16076.006971057011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12432964.05882353,
            "unit": "ns",
            "range": "± 246817.40447126864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10393162.8125,
            "unit": "ns",
            "range": "± 196666.25841671258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25384.42105263158,
            "unit": "ns",
            "range": "± 4575.396412494438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62679.44565217391,
            "unit": "ns",
            "range": "± 6781.710431862248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65441.649253731346,
            "unit": "ns",
            "range": "± 3095.8806171374913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134021.80208333334,
            "unit": "ns",
            "range": "± 15762.532304650593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11062.5,
            "unit": "ns",
            "range": "± 1322.8768130479875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24566.458333333332,
            "unit": "ns",
            "range": "± 3535.8425897228863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608683.17,
            "unit": "ns",
            "range": "± 156307.08234644285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2912169.282608696,
            "unit": "ns",
            "range": "± 110308.31408494468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586187.663265306,
            "unit": "ns",
            "range": "± 214515.25826239094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6891337.686813187,
            "unit": "ns",
            "range": "± 431329.26874668914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3832462.41,
            "unit": "ns",
            "range": "± 349689.0160947799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6006165.010309278,
            "unit": "ns",
            "range": "± 669456.0481295228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28733814.810526315,
            "unit": "ns",
            "range": "± 2113061.9208805626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7098236.010638298,
            "unit": "ns",
            "range": "± 524750.0068914843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31307072.89473684,
            "unit": "ns",
            "range": "± 1076147.3431528108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6925075.3875,
            "unit": "ns",
            "range": "± 121679.50430900346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910778.1199951172,
            "unit": "ns",
            "range": "± 57624.68172823238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1312686.2486049107,
            "unit": "ns",
            "range": "± 16716.92848548919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2534532.3253620425,
            "unit": "ns",
            "range": "± 90762.25234668555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859329.4181410846,
            "unit": "ns",
            "range": "± 16632.500572494366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708495.2446614583,
            "unit": "ns",
            "range": "± 11231.83296364061"
          }
        ]
      }
    ]
  }
}