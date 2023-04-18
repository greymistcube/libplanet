window.BENCHMARK_DATA = {
  "lastUpdate": 1681819916739,
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
          "id": "11867e0f2416b38fc99c8ad85f9f6e62a0073dd7",
          "message": "Changelog",
          "timestamp": "2023-04-18T17:36:38+09:00",
          "tree_id": "79c3d874bf09441dcfab21298ea048772d7d86ec",
          "url": "https://github.com/greymistcube/libplanet/commit/11867e0f2416b38fc99c8ad85f9f6e62a0073dd7"
        },
        "date": 1681807901893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7894782.363636363,
            "unit": "ns",
            "range": "± 292369.8045660739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19530246.51333333,
            "unit": "ns",
            "range": "± 979348.6059605253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52260377.5,
            "unit": "ns",
            "range": "± 1240711.8645864923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96668401.91666667,
            "unit": "ns",
            "range": "± 3218758.3853063625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208576900,
            "unit": "ns",
            "range": "± 10344957.940904766"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55612.98947368421,
            "unit": "ns",
            "range": "± 6437.92952460011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 405255.9518072289,
            "unit": "ns",
            "range": "± 21419.744369420183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313871.9595959596,
            "unit": "ns",
            "range": "± 30368.682215205634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319945.8402061856,
            "unit": "ns",
            "range": "± 27848.267242582686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5625737.142857143,
            "unit": "ns",
            "range": "± 158686.53874103018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4253725.366666666,
            "unit": "ns",
            "range": "± 77408.231990132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21230.76842105263,
            "unit": "ns",
            "range": "± 3894.7026446805316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111389.32653061225,
            "unit": "ns",
            "range": "± 13300.259551010173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103663.67676767676,
            "unit": "ns",
            "range": "± 18273.992797744173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 239709.66315789474,
            "unit": "ns",
            "range": "± 24004.059066151454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8604.717171717171,
            "unit": "ns",
            "range": "± 2429.686105704427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19313.257894736842,
            "unit": "ns",
            "range": "± 2778.4681288237116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498034.8804347827,
            "unit": "ns",
            "range": "± 149943.04208758756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2937020.676056338,
            "unit": "ns",
            "range": "± 142907.23511362934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500265.147368421,
            "unit": "ns",
            "range": "± 225322.91326685608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6900379.947368421,
            "unit": "ns",
            "range": "± 464273.4682263261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3181155.1,
            "unit": "ns",
            "range": "± 54867.38060841407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3421278.6904761903,
            "unit": "ns",
            "range": "± 124496.84524110328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4666545.142857143,
            "unit": "ns",
            "range": "± 138955.41482266106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4559424.933333334,
            "unit": "ns",
            "range": "± 263640.7260053438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8260317.24137931,
            "unit": "ns",
            "range": "± 233491.4753637631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6886389.183854166,
            "unit": "ns",
            "range": "± 199904.91958204733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929645.0750558036,
            "unit": "ns",
            "range": "± 27385.702732189977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1263011.8028645834,
            "unit": "ns",
            "range": "± 14754.608490145438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644745.9796875,
            "unit": "ns",
            "range": "± 29567.965468577462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767159.6380859375,
            "unit": "ns",
            "range": "± 5423.867070771301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715219.2345703125,
            "unit": "ns",
            "range": "± 3383.6732300780423"
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
          "id": "5996bdbdc2a5a552f15a708bac08964ea9ad9250",
          "message": "Changelog",
          "timestamp": "2023-04-18T19:24:23+09:00",
          "tree_id": "79c3d874bf09441dcfab21298ea048772d7d86ec",
          "url": "https://github.com/greymistcube/libplanet/commit/5996bdbdc2a5a552f15a708bac08964ea9ad9250"
        },
        "date": 1681814599307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8847478.634615384,
            "unit": "ns",
            "range": "± 360208.179215419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27461604.695652176,
            "unit": "ns",
            "range": "± 5796635.179195058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62307180.994382024,
            "unit": "ns",
            "range": "± 10064551.447501315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120933739.63186814,
            "unit": "ns",
            "range": "± 18002358.008030802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190621205.7,
            "unit": "ns",
            "range": "± 4102307.551171454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81586.32222222222,
            "unit": "ns",
            "range": "± 7666.077545912909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393926.6443298969,
            "unit": "ns",
            "range": "± 26254.407372060763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323266.64285714284,
            "unit": "ns",
            "range": "± 28365.449868368396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328417.73214285716,
            "unit": "ns",
            "range": "± 13203.963344377904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5444515.571428572,
            "unit": "ns",
            "range": "± 66836.25937659919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4053759.717391304,
            "unit": "ns",
            "range": "± 99285.98174783996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18058.608695652172,
            "unit": "ns",
            "range": "± 2485.6982898283177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90721.17204301075,
            "unit": "ns",
            "range": "± 12219.983762907857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94726.66326530612,
            "unit": "ns",
            "range": "± 17003.14060298339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 228571.19072164947,
            "unit": "ns",
            "range": "± 25891.762434926746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7366.208333333333,
            "unit": "ns",
            "range": "± 1949.1036747920105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20659.18686868687,
            "unit": "ns",
            "range": "± 4675.484786926912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1756819.7765957448,
            "unit": "ns",
            "range": "± 251673.38289798374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3244692.8021978023,
            "unit": "ns",
            "range": "± 345093.77003575966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2704954.4166666665,
            "unit": "ns",
            "range": "± 242497.12308681614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8042999.394117647,
            "unit": "ns",
            "range": "± 1152546.8634182776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3085963.311111111,
            "unit": "ns",
            "range": "± 217147.33224929654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3221315.925373134,
            "unit": "ns",
            "range": "± 152968.65592973251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4590467.045454546,
            "unit": "ns",
            "range": "± 215667.59300677595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4503793.306666667,
            "unit": "ns",
            "range": "± 225281.8532756169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9342087.967032967,
            "unit": "ns",
            "range": "± 1115374.6196394232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7047638.775892857,
            "unit": "ns",
            "range": "± 342299.3441284092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165101.4441964286,
            "unit": "ns",
            "range": "± 48814.293955550624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297358.9619791666,
            "unit": "ns",
            "range": "± 18821.3156042797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605765.788888889,
            "unit": "ns",
            "range": "± 98299.31828002345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867343.3834635416,
            "unit": "ns",
            "range": "± 8196.12711337997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723282.7510141226,
            "unit": "ns",
            "range": "± 19231.548566369504"
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
          "id": "fc0dfeb7eab73697c8f7f3579c64acd59354483f",
          "message": "Changelog",
          "timestamp": "2023-04-18T20:54:01+09:00",
          "tree_id": "e92557f555adcac33daf383829d2261fcc687c74",
          "url": "https://github.com/greymistcube/libplanet/commit/fc0dfeb7eab73697c8f7f3579c64acd59354483f"
        },
        "date": 1681819898686,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8154200.090909091,
            "unit": "ns",
            "range": "± 448123.39031600824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19977340.53125,
            "unit": "ns",
            "range": "± 609638.7199612827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51435675.17073171,
            "unit": "ns",
            "range": "± 1814614.407388053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109816784.96428572,
            "unit": "ns",
            "range": "± 2813737.1708109123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216374016.02173913,
            "unit": "ns",
            "range": "± 5426622.00567826"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66608.46875,
            "unit": "ns",
            "range": "± 10369.9046038886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375648.7419354839,
            "unit": "ns",
            "range": "± 29071.438514872003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321825.2989690722,
            "unit": "ns",
            "range": "± 26525.28494983802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300591.8263157895,
            "unit": "ns",
            "range": "± 25436.884853952462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5408443.277777778,
            "unit": "ns",
            "range": "± 178717.88323957656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3725895.018181818,
            "unit": "ns",
            "range": "± 157672.12397502596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20799.44845360825,
            "unit": "ns",
            "range": "± 4982.735912568378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99335.77319587629,
            "unit": "ns",
            "range": "± 14641.422815868136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105983.98979591837,
            "unit": "ns",
            "range": "± 15898.062273966128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129999.45789473684,
            "unit": "ns",
            "range": "± 21749.037953248077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8111.71875,
            "unit": "ns",
            "range": "± 1485.1750823821908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19514.895833333332,
            "unit": "ns",
            "range": "± 3149.6304928779605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1726399.7346938776,
            "unit": "ns",
            "range": "± 163582.56971244782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3071083.5081967213,
            "unit": "ns",
            "range": "± 136553.79859584317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2576650.870967742,
            "unit": "ns",
            "range": "± 179279.99004097437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7531462.8367346935,
            "unit": "ns",
            "range": "± 472593.1237445077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3262187.105882353,
            "unit": "ns",
            "range": "± 167031.16131621492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3452206.052631579,
            "unit": "ns",
            "range": "± 148543.61764303214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4597772.5,
            "unit": "ns",
            "range": "± 154745.48481874834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5021337,
            "unit": "ns",
            "range": "± 107139.59461869745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8032946.763157895,
            "unit": "ns",
            "range": "± 274239.28918054973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6991353.765625,
            "unit": "ns",
            "range": "± 225288.85190679156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2065202.5942007212,
            "unit": "ns",
            "range": "± 6535.014906484826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297114.8031529018,
            "unit": "ns",
            "range": "± 8398.603708894765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670263.652644231,
            "unit": "ns",
            "range": "± 71392.0115038638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796512.0211356027,
            "unit": "ns",
            "range": "± 6690.91821639591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721884.4641927084,
            "unit": "ns",
            "range": "± 12419.278840527606"
          }
        ]
      }
    ]
  }
}