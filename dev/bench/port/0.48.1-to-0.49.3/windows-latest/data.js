window.BENCHMARK_DATA = {
  "lastUpdate": 1678785183810,
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
          "id": "c34cc82e18265600663ca1a3145961e639934c5b",
          "message": "Merge tag '0.48.1' into port/0.48.1-to-0.49.3\n\nLibplanet 0.48.1",
          "timestamp": "2023-03-14T17:42:43+09:00",
          "tree_id": "730b09276955c28f464a1ee14c8717eaf443750e",
          "url": "https://github.com/greymistcube/libplanet/commit/c34cc82e18265600663ca1a3145961e639934c5b"
        },
        "date": 1678784548227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126701.06382978724,
            "unit": "ns",
            "range": "± 9056.878152368492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5773673.958333333,
            "unit": "ns",
            "range": "± 77094.34208315735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838472.7388822115,
            "unit": "ns",
            "range": "± 12897.826499205587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366569.62890625,
            "unit": "ns",
            "range": "± 3317.5438260218148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3132629.987980769,
            "unit": "ns",
            "range": "± 31911.215501340528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977886.8001302084,
            "unit": "ns",
            "range": "± 2143.53599171014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906708.1092247596,
            "unit": "ns",
            "range": "± 3979.0362316307765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5639248.216711956,
            "unit": "ns",
            "range": "± 342861.6385546769"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6701334.736842105,
            "unit": "ns",
            "range": "± 670599.9758502101"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31318668.96551724,
            "unit": "ns",
            "range": "± 1361104.275779883"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7451975.531914894,
            "unit": "ns",
            "range": "± 496978.53303548344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33744387.5,
            "unit": "ns",
            "range": "± 516483.2670732583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119234.0425531915,
            "unit": "ns",
            "range": "± 10318.284774435226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232357.4712643678,
            "unit": "ns",
            "range": "± 15364.975515792692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225347.8260869565,
            "unit": "ns",
            "range": "± 10845.636269346143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4363806.666666667,
            "unit": "ns",
            "range": "± 81640.24276112387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11023630.76923077,
            "unit": "ns",
            "range": "± 92093.64242095637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28931.720430107525,
            "unit": "ns",
            "range": "± 2624.878723349989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65741.75824175825,
            "unit": "ns",
            "range": "± 4527.350609451795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53607.291666666664,
            "unit": "ns",
            "range": "± 4572.405673204301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122479.34782608696,
            "unit": "ns",
            "range": "± 15449.396574463684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8684.04255319149,
            "unit": "ns",
            "range": "± 819.0347310357929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26585.567010309278,
            "unit": "ns",
            "range": "± 2528.6685268932233"
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
          "id": "911924dfab30f8dfbcf2776e00458824eae03803",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:54:34+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/greymistcube/libplanet/commit/911924dfab30f8dfbcf2776e00458824eae03803"
        },
        "date": 1678785030614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101080.72289156627,
            "unit": "ns",
            "range": "± 5409.1038397412685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4721752.864583333,
            "unit": "ns",
            "range": "± 7500.609493618678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1498781.5625,
            "unit": "ns",
            "range": "± 5008.530293708346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161504.5638020833,
            "unit": "ns",
            "range": "± 5036.68765570017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604981.6927083335,
            "unit": "ns",
            "range": "± 5329.298895320958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812533.7332589285,
            "unit": "ns",
            "range": "± 1470.5894046510018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762718.0338541666,
            "unit": "ns",
            "range": "± 1263.5329334312291"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4702570.252403846,
            "unit": "ns",
            "range": "± 15015.795349442958"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5673211.111111111,
            "unit": "ns",
            "range": "± 119231.72637835704"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25886746.666666668,
            "unit": "ns",
            "range": "± 414964.2202590942"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6185357.407407408,
            "unit": "ns",
            "range": "± 257905.17096065756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28353138.888888888,
            "unit": "ns",
            "range": "± 581869.2506648559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89672.52747252748,
            "unit": "ns",
            "range": "± 7457.540046215209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182945.05494505496,
            "unit": "ns",
            "range": "± 9978.657933991633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168032.53012048194,
            "unit": "ns",
            "range": "± 8610.318659774572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3571493.3333333335,
            "unit": "ns",
            "range": "± 45107.90976990093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9106816.666666666,
            "unit": "ns",
            "range": "± 77089.94549855187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20270.212765957447,
            "unit": "ns",
            "range": "± 1821.4274082999423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50405.95238095238,
            "unit": "ns",
            "range": "± 3836.5506342011754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37827.27272727273,
            "unit": "ns",
            "range": "± 2026.8160452016189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92209.41176470589,
            "unit": "ns",
            "range": "± 12016.482960712676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6014.736842105263,
            "unit": "ns",
            "range": "± 845.2581654035712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20037.5,
            "unit": "ns",
            "range": "± 2104.243832178951"
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
          "id": "79d24eec8784b4888a8d7fb937a909c877984a97",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:53:04+09:00",
          "tree_id": "e623588ac47fe7b2f529547a09aa2fb5131010e5",
          "url": "https://github.com/greymistcube/libplanet/commit/79d24eec8784b4888a8d7fb937a909c877984a97"
        },
        "date": 1678785158106,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121445.05494505494,
            "unit": "ns",
            "range": "± 8034.692329534519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6353206.1328125,
            "unit": "ns",
            "range": "± 136705.25791233892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2083129.3526785714,
            "unit": "ns",
            "range": "± 89182.45546948463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422222.3828125,
            "unit": "ns",
            "range": "± 15759.977002829024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3213876.796875,
            "unit": "ns",
            "range": "± 56683.68899570643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1030244.140625,
            "unit": "ns",
            "range": "± 26064.770630891326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957480.6640625,
            "unit": "ns",
            "range": "± 22725.997094227936"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5869610.724431818,
            "unit": "ns",
            "range": "± 364246.0568377137"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6977218.556701031,
            "unit": "ns",
            "range": "± 608106.5773725265"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32067542.10526316,
            "unit": "ns",
            "range": "± 1604465.2307244015"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7408431.914893617,
            "unit": "ns",
            "range": "± 431296.47337879066"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35204041.93548387,
            "unit": "ns",
            "range": "± 1072353.027000031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105332.60869565218,
            "unit": "ns",
            "range": "± 11942.077319392181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242074.22680412373,
            "unit": "ns",
            "range": "± 32617.857705910486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211245.83333333334,
            "unit": "ns",
            "range": "± 18212.349290156573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4286429.5698924735,
            "unit": "ns",
            "range": "± 347456.38811697107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11114041.666666666,
            "unit": "ns",
            "range": "± 363877.3642510423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21664.444444444445,
            "unit": "ns",
            "range": "± 3308.834314279095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60119.38775510204,
            "unit": "ns",
            "range": "± 10465.472520875937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63200,
            "unit": "ns",
            "range": "± 7141.997269671839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136955.7894736842,
            "unit": "ns",
            "range": "± 21659.741633149315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11242.424242424242,
            "unit": "ns",
            "range": "± 5347.077991078082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23072.448979591838,
            "unit": "ns",
            "range": "± 6178.6092688703075"
          }
        ]
      }
    ]
  }
}