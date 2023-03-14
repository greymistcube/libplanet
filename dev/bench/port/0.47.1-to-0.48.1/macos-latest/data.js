window.BENCHMARK_DATA = {
  "lastUpdate": 1678783744382,
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
          "id": "03fcc72859324bb7bd5f9db0d9c41573e561299f",
          "message": "Merge tag '0.47.1' into port/0.47.1-to-0.48.1\n\nLibplanet 0.47.1",
          "timestamp": "2023-03-14T17:22:25+09:00",
          "tree_id": "c3d45cc6b68d2656a589d93c7acf4e48ca385b66",
          "url": "https://github.com/greymistcube/libplanet/commit/03fcc72859324bb7bd5f9db0d9c41573e561299f"
        },
        "date": 1678783307414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137565.83707865168,
            "unit": "ns",
            "range": "± 7610.021230922213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125996.29787234042,
            "unit": "ns",
            "range": "± 20285.756798655282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257156.89583333334,
            "unit": "ns",
            "range": "± 39475.433842348924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231958.74137931035,
            "unit": "ns",
            "range": "± 10043.526768495505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3933239.0319148935,
            "unit": "ns",
            "range": "± 307281.392384045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11434685.776470589,
            "unit": "ns",
            "range": "± 1375786.4501773538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23856.242105263158,
            "unit": "ns",
            "range": "± 3528.9257834987584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60043.242105263154,
            "unit": "ns",
            "range": "± 9234.847894375458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59977.87368421053,
            "unit": "ns",
            "range": "± 4403.032111069442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130600.47894736842,
            "unit": "ns",
            "range": "± 19453.710685788472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8396.41489361702,
            "unit": "ns",
            "range": "± 1364.1399406311866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22179.184210526317,
            "unit": "ns",
            "range": "± 4160.9398929608615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5301725.558813202,
            "unit": "ns",
            "range": "± 438385.2195327556"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6472409.285714285,
            "unit": "ns",
            "range": "± 129383.61200636766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27067202.310344826,
            "unit": "ns",
            "range": "± 776944.4732162609"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7292055.366666666,
            "unit": "ns",
            "range": "± 750972.6969441586"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35596911.758064516,
            "unit": "ns",
            "range": "± 2737105.353319876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6876592.603860294,
            "unit": "ns",
            "range": "± 135370.13320983524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2030134.40625,
            "unit": "ns",
            "range": "± 40086.48488135572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444618.4834558824,
            "unit": "ns",
            "range": "± 44669.54238522051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3063891.011240434,
            "unit": "ns",
            "range": "± 385842.19151101314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 896245.5606192129,
            "unit": "ns",
            "range": "± 19457.372895481793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756555.1731119792,
            "unit": "ns",
            "range": "± 12291.370487020253"
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
          "id": "ff5bbfb82da2a2d2ae47234b226c6633b00a6ab2",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:27:01+09:00",
          "tree_id": "7177f2855a73fc46fa2a4893941bbfd749f80bb2",
          "url": "https://github.com/greymistcube/libplanet/commit/ff5bbfb82da2a2d2ae47234b226c6633b00a6ab2"
        },
        "date": 1678783497942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136355.89361702127,
            "unit": "ns",
            "range": "± 12568.714162698378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 122208.91666666667,
            "unit": "ns",
            "range": "± 19837.291159338034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238232.47826086957,
            "unit": "ns",
            "range": "± 29909.202217281683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199134.39361702127,
            "unit": "ns",
            "range": "± 23185.030612429946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3805553.6733333333,
            "unit": "ns",
            "range": "± 190049.95632019333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10518042.111111112,
            "unit": "ns",
            "range": "± 214921.4526789589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20699.081632653062,
            "unit": "ns",
            "range": "± 4728.804976812992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58525.94210526316,
            "unit": "ns",
            "range": "± 11823.464218308125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62244.85555555556,
            "unit": "ns",
            "range": "± 4561.755444092808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121869.86842105263,
            "unit": "ns",
            "range": "± 15989.60155721732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6394.75,
            "unit": "ns",
            "range": "± 866.7012476231813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16196.297872340425,
            "unit": "ns",
            "range": "± 1864.9051437711896"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5351508.994633839,
            "unit": "ns",
            "range": "± 384591.4685747349"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 9547587.648936171,
            "unit": "ns",
            "range": "± 2554722.834242459"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27553833.146153845,
            "unit": "ns",
            "range": "± 1171374.9255746887"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6996586.306818182,
            "unit": "ns",
            "range": "± 454592.65092146106"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32392113.64,
            "unit": "ns",
            "range": "± 1287272.2771998376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6783118.844184028,
            "unit": "ns",
            "range": "± 205122.3660830826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956851.994140625,
            "unit": "ns",
            "range": "± 54095.13916136837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295763.7481971155,
            "unit": "ns",
            "range": "± 9190.995722112622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2787580.977361506,
            "unit": "ns",
            "range": "± 100256.08819686995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875417.4534040178,
            "unit": "ns",
            "range": "± 13923.845167233054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732854.4692789713,
            "unit": "ns",
            "range": "± 18926.128173055542"
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
          "id": "5ef9f1ef99a463d5242b24d9e762b897c9a5b53d",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:24:38+09:00",
          "tree_id": "31b6d98621737af23a276f132a8b63b5cd97fe45",
          "url": "https://github.com/greymistcube/libplanet/commit/5ef9f1ef99a463d5242b24d9e762b897c9a5b53d"
        },
        "date": 1678783725991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 148432.6011235955,
            "unit": "ns",
            "range": "± 12669.699980344072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 118762.19791666667,
            "unit": "ns",
            "range": "± 19962.562675441823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231120.36458333334,
            "unit": "ns",
            "range": "± 29685.55500615703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250209.63333333333,
            "unit": "ns",
            "range": "± 35942.602491997604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3842402.1830985914,
            "unit": "ns",
            "range": "± 187572.04073142595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10482179.512195121,
            "unit": "ns",
            "range": "± 373501.01175486273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19408.333333333332,
            "unit": "ns",
            "range": "± 2627.815280965767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57686.01052631579,
            "unit": "ns",
            "range": "± 9300.960175204444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54197.72340425532,
            "unit": "ns",
            "range": "± 6400.8081044829105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123759.17894736842,
            "unit": "ns",
            "range": "± 21537.634106708323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8138.670212765957,
            "unit": "ns",
            "range": "± 1067.5951936936601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22386.845360824744,
            "unit": "ns",
            "range": "± 6017.452008429671"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5814169.812902706,
            "unit": "ns",
            "range": "± 597856.2660860332"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6163551.957894737,
            "unit": "ns",
            "range": "± 468517.87628764316"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28437135.836363636,
            "unit": "ns",
            "range": "± 1209741.4795870534"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7047521.4387755105,
            "unit": "ns",
            "range": "± 570225.2860774046"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33652979.093023255,
            "unit": "ns",
            "range": "± 1951177.6052460314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7727038.2475,
            "unit": "ns",
            "range": "± 388843.35054535145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2296732.0921959006,
            "unit": "ns",
            "range": "± 153733.69430295718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381613.82421875,
            "unit": "ns",
            "range": "± 29501.13758281961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3618574.3316156915,
            "unit": "ns",
            "range": "± 221126.1356350697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 960481.4980338542,
            "unit": "ns",
            "range": "± 48021.24930520475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862062.9474323551,
            "unit": "ns",
            "range": "± 45463.76301062961"
          }
        ]
      }
    ]
  }
}