window.BENCHMARK_DATA = {
  "lastUpdate": 1681714125647,
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
          "id": "c67a48c84c061de44a996edbe4e01e05f584712d",
          "message": "Cleanup",
          "timestamp": "2023-04-16T17:21:08+09:00",
          "tree_id": "c8773927198ad9950c59c78a0373b3715524733f",
          "url": "https://github.com/greymistcube/libplanet/commit/c67a48c84c061de44a996edbe4e01e05f584712d"
        },
        "date": 1681634353712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8503586.58219178,
            "unit": "ns",
            "range": "± 417635.9579008956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22295925.61827957,
            "unit": "ns",
            "range": "± 1195343.5640958396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53833025.13978495,
            "unit": "ns",
            "range": "± 2947619.281784013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105887691.7586207,
            "unit": "ns",
            "range": "± 3102788.1035560775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219213886.61290324,
            "unit": "ns",
            "range": "± 5924339.847892279"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76193.21505376344,
            "unit": "ns",
            "range": "± 16462.21324853392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 422132.6847826087,
            "unit": "ns",
            "range": "± 50067.59964681801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330699.4659090909,
            "unit": "ns",
            "range": "± 19924.26481947391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326224.3453608247,
            "unit": "ns",
            "range": "± 35623.03512953972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5843714.744897959,
            "unit": "ns",
            "range": "± 375263.2830939358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4801721.530612245,
            "unit": "ns",
            "range": "± 459929.67467746267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26673.774725274725,
            "unit": "ns",
            "range": "± 3643.397291496966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132372.06315789474,
            "unit": "ns",
            "range": "± 23799.883427575467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 143370.37894736842,
            "unit": "ns",
            "range": "± 24196.656201280297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 317963.2894736842,
            "unit": "ns",
            "range": "± 54526.782403655845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10095.52688172043,
            "unit": "ns",
            "range": "± 1612.1250328532608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27176.097826086956,
            "unit": "ns",
            "range": "± 7098.399463707917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708214.7653061224,
            "unit": "ns",
            "range": "± 230534.62478544298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3249177.152173913,
            "unit": "ns",
            "range": "± 192056.51961834222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2668412.324742268,
            "unit": "ns",
            "range": "± 242835.51690093006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7372776.537634409,
            "unit": "ns",
            "range": "± 526518.5837139284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3416403.8659793814,
            "unit": "ns",
            "range": "± 235827.29116093577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3529823.2210526317,
            "unit": "ns",
            "range": "± 273333.7238366074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4662510.851851852,
            "unit": "ns",
            "range": "± 221488.50047824782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4723982.469387755,
            "unit": "ns",
            "range": "± 341150.99466714216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9293793.934343435,
            "unit": "ns",
            "range": "± 728291.2478829897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6752548.14921875,
            "unit": "ns",
            "range": "± 116945.44524578674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1983837.5447916666,
            "unit": "ns",
            "range": "± 30595.87598640918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390936.05390625,
            "unit": "ns",
            "range": "± 17285.2759676539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2754076.27734375,
            "unit": "ns",
            "range": "± 48675.85207845898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872659.1096540178,
            "unit": "ns",
            "range": "± 8236.513096082454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725594.8383413461,
            "unit": "ns",
            "range": "± 3465.884385668027"
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
          "id": "0a875192c32040aad6e1b540b2ab4ff0d43bf7f3",
          "message": "Changelog",
          "timestamp": "2023-04-17T15:30:59+09:00",
          "tree_id": "2d9d98eefac76fb1bcdfc5574207642e6480c441",
          "url": "https://github.com/greymistcube/libplanet/commit/0a875192c32040aad6e1b540b2ab4ff0d43bf7f3"
        },
        "date": 1681714105985,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8025083,
            "unit": "ns",
            "range": "± 452657.677042529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19636654.333333332,
            "unit": "ns",
            "range": "± 970142.8866069161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47829651.14492754,
            "unit": "ns",
            "range": "± 2292440.2051971587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98886587.0909091,
            "unit": "ns",
            "range": "± 3109957.8680595434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205258700.77586207,
            "unit": "ns",
            "range": "± 5902366.425547631"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61062.73684210526,
            "unit": "ns",
            "range": "± 9644.459534188887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380000.4482758621,
            "unit": "ns",
            "range": "± 20609.612320332148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319473.1052631579,
            "unit": "ns",
            "range": "± 21988.10761475765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298075.79569892475,
            "unit": "ns",
            "range": "± 24374.94248758394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5648261.184210527,
            "unit": "ns",
            "range": "± 191761.8480731363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4134480.1041666665,
            "unit": "ns",
            "range": "± 162821.93272096026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18037.405263157896,
            "unit": "ns",
            "range": "± 2343.0476883010415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90644.45698924731,
            "unit": "ns",
            "range": "± 9769.097853317633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104861.54545454546,
            "unit": "ns",
            "range": "± 13715.106971148847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 246834.2,
            "unit": "ns",
            "range": "± 29171.991571120605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8156.142857142857,
            "unit": "ns",
            "range": "± 1794.4875571548282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24224.157894736843,
            "unit": "ns",
            "range": "± 2966.8401498570884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1643548.8789473684,
            "unit": "ns",
            "range": "± 193546.04760768687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2913181.9137931033,
            "unit": "ns",
            "range": "± 157768.33738962724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2581403.211340206,
            "unit": "ns",
            "range": "± 335943.5366763339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6992393.873684211,
            "unit": "ns",
            "range": "± 552376.8457271478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231489,
            "unit": "ns",
            "range": "± 174913.85397745675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528298.6529411767,
            "unit": "ns",
            "range": "± 232656.52873544372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4677574.913793104,
            "unit": "ns",
            "range": "± 198814.52348189894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4530484.752808989,
            "unit": "ns",
            "range": "± 303658.56903164665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8343729.471428571,
            "unit": "ns",
            "range": "± 398199.37752719136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6846457.757552084,
            "unit": "ns",
            "range": "± 77573.70672386614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950247.1033761161,
            "unit": "ns",
            "range": "± 17446.534915831762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1309178.7936662945,
            "unit": "ns",
            "range": "± 12256.55413140294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2845046.419849537,
            "unit": "ns",
            "range": "± 148659.58112227664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885161.8396344866,
            "unit": "ns",
            "range": "± 13812.340048102655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710734.8877704327,
            "unit": "ns",
            "range": "± 10159.911025679163"
          }
        ]
      }
    ]
  }
}