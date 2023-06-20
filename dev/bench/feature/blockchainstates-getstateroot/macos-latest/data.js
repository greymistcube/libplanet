window.BENCHMARK_DATA = {
  "lastUpdate": 1687243088823,
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
          "id": "4ac1610cd444d14c98eca5e393878591f2f85031",
          "message": "Introduce BlockChainStates.GetStateRoot; expand BlockChainStates query\nscope",
          "timestamp": "2023-06-14T14:30:04+09:00",
          "tree_id": "31b203bf80340635c6bc8123a588dfb41aa59cfa",
          "url": "https://github.com/greymistcube/libplanet/commit/4ac1610cd444d14c98eca5e393878591f2f85031"
        },
        "date": 1686722276260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12362639.111111112,
            "unit": "ns",
            "range": "± 3982842.1981927934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26550381.826086957,
            "unit": "ns",
            "range": "± 5994918.265030916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57910722.182926826,
            "unit": "ns",
            "range": "± 5855445.771518194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 169553459.88659793,
            "unit": "ns",
            "range": "± 46778600.70555249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 309664424.1333333,
            "unit": "ns",
            "range": "± 70256218.18605182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92292.44444444444,
            "unit": "ns",
            "range": "± 12875.725218027035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 421213.1666666667,
            "unit": "ns",
            "range": "± 74919.90748203006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 409888.14835164836,
            "unit": "ns",
            "range": "± 68906.94886574271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 405131.9784946237,
            "unit": "ns",
            "range": "± 79298.59864735513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5187675.488505747,
            "unit": "ns",
            "range": "± 600742.1726770608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4560180.043010753,
            "unit": "ns",
            "range": "± 500545.05451826594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30904.969879518074,
            "unit": "ns",
            "range": "± 3017.1358140499997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 147070.73255813954,
            "unit": "ns",
            "range": "± 19330.323889087973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 156601.47916666666,
            "unit": "ns",
            "range": "± 36501.065819760785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162450.42857142858,
            "unit": "ns",
            "range": "± 34277.11399596039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11002.602272727272,
            "unit": "ns",
            "range": "± 1017.4013554913789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29727.03164556962,
            "unit": "ns",
            "range": "± 2890.2035410332437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2112850.3160919542,
            "unit": "ns",
            "range": "± 506183.8067341475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3924872.1428571427,
            "unit": "ns",
            "range": "± 824004.678852514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3348556.308988764,
            "unit": "ns",
            "range": "± 660796.8412654747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9021118.056818182,
            "unit": "ns",
            "range": "± 2172461.993072603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4647209.021739131,
            "unit": "ns",
            "range": "± 1144054.7543614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4185142.159090909,
            "unit": "ns",
            "range": "± 611244.3183750967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5467374.488764045,
            "unit": "ns",
            "range": "± 713714.5817828799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5463636.808510638,
            "unit": "ns",
            "range": "± 716684.8695578452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9408914.715909092,
            "unit": "ns",
            "range": "± 1280881.7870199422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8532349.913368056,
            "unit": "ns",
            "range": "± 639172.9128209613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2537648.0867429124,
            "unit": "ns",
            "range": "± 153778.17005036314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1674840.0581054688,
            "unit": "ns",
            "range": "± 36721.727103018864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4239247.284198113,
            "unit": "ns",
            "range": "± 175128.8246609957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029939.9884702621,
            "unit": "ns",
            "range": "± 57417.8765324306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956768.6090087891,
            "unit": "ns",
            "range": "± 41101.142380791694"
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
          "id": "e2928b2445fa84b3d769723bfc817cc6cc7384ab",
          "message": "Updated docs",
          "timestamp": "2023-06-14T16:31:23+09:00",
          "tree_id": "61d2ef63d57595effb4779f78ec4028df3258dd0",
          "url": "https://github.com/greymistcube/libplanet/commit/e2928b2445fa84b3d769723bfc817cc6cc7384ab"
        },
        "date": 1686729351366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11144310.739583334,
            "unit": "ns",
            "range": "± 2616316.158995125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30506819.279569894,
            "unit": "ns",
            "range": "± 8325438.76751987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71761455.45555556,
            "unit": "ns",
            "range": "± 15629787.749328593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134391916.45652175,
            "unit": "ns",
            "range": "± 21088910.10799304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286537204.1979167,
            "unit": "ns",
            "range": "± 60084786.43358668"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75026.1,
            "unit": "ns",
            "range": "± 10354.119337917147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381470.0333333333,
            "unit": "ns",
            "range": "± 22188.93895929514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378600.9105263158,
            "unit": "ns",
            "range": "± 30082.685735017127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338239.8510638298,
            "unit": "ns",
            "range": "± 28563.68952176625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5062597.757575758,
            "unit": "ns",
            "range": "± 156801.87526382424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4578665.385714286,
            "unit": "ns",
            "range": "± 147313.296201102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19731.076923076922,
            "unit": "ns",
            "range": "± 1481.2357395901965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100073.12087912088,
            "unit": "ns",
            "range": "± 6273.243943456589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115744.77551020408,
            "unit": "ns",
            "range": "± 19902.723301474703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125110.6170212766,
            "unit": "ns",
            "range": "± 18761.97014273012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5792.614583333333,
            "unit": "ns",
            "range": "± 706.0290864709345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18535.717391304348,
            "unit": "ns",
            "range": "± 1455.8780049882287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2032935.6573033708,
            "unit": "ns",
            "range": "± 279018.2061022549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3909686.1411764706,
            "unit": "ns",
            "range": "± 471600.7629548271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3398332.8033707864,
            "unit": "ns",
            "range": "± 521098.5951189478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16434866.74,
            "unit": "ns",
            "range": "± 6434133.300907293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4770219.154639175,
            "unit": "ns",
            "range": "± 1207481.2145985467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4593491.473118279,
            "unit": "ns",
            "range": "± 805268.3329369781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6056071.880434782,
            "unit": "ns",
            "range": "± 984206.0483593451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5965294.287234043,
            "unit": "ns",
            "range": "± 1061306.4199183327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11547622.795698924,
            "unit": "ns",
            "range": "± 2222606.0349962055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7671285.246394231,
            "unit": "ns",
            "range": "± 99562.57038347486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2329294.917668269,
            "unit": "ns",
            "range": "± 19072.69700028262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1542362.9183148735,
            "unit": "ns",
            "range": "± 67448.39340873092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2988542.9952566964,
            "unit": "ns",
            "range": "± 48808.695225269286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965598.4280133928,
            "unit": "ns",
            "range": "± 15306.771789789245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874532.8685709635,
            "unit": "ns",
            "range": "± 4044.8672326467554"
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
          "id": "a894ffe815da3c7eb734c3879241b1f19626e981",
          "message": "Changelog",
          "timestamp": "2023-06-14T16:37:23+09:00",
          "tree_id": "521d792b5cb0fe4cfaf18f2e7292161d4310f523",
          "url": "https://github.com/greymistcube/libplanet/commit/a894ffe815da3c7eb734c3879241b1f19626e981"
        },
        "date": 1686729382373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8787217.581967212,
            "unit": "ns",
            "range": "± 392444.7284882843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22095717.833333332,
            "unit": "ns",
            "range": "± 1258682.9140934197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52844275.53125,
            "unit": "ns",
            "range": "± 1605591.5639416252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107755534.42307693,
            "unit": "ns",
            "range": "± 4262088.242622489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224790385.3,
            "unit": "ns",
            "range": "± 5894446.838029326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69072.1052631579,
            "unit": "ns",
            "range": "± 8638.050260790958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367298.3085106383,
            "unit": "ns",
            "range": "± 26112.848852305782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363811.27659574465,
            "unit": "ns",
            "range": "± 26951.363903247136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337139.8956043956,
            "unit": "ns",
            "range": "± 19450.903861248607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4415459.5,
            "unit": "ns",
            "range": "± 157911.0823073017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4003449.6666666665,
            "unit": "ns",
            "range": "± 154001.23799991567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26575.28125,
            "unit": "ns",
            "range": "± 3717.9491650303667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121314.66315789474,
            "unit": "ns",
            "range": "± 13422.53098466406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122288.32222222222,
            "unit": "ns",
            "range": "± 9514.810497593662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127234.375,
            "unit": "ns",
            "range": "± 18629.156902272138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8565.122448979591,
            "unit": "ns",
            "range": "± 1270.4495288952762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24755.675824175825,
            "unit": "ns",
            "range": "± 4368.095457324384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687404.3655913977,
            "unit": "ns",
            "range": "± 197322.34417228957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3101844.2021276597,
            "unit": "ns",
            "range": "± 212928.29928423555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2669379.78,
            "unit": "ns",
            "range": "± 305989.4044152438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7182599.020833333,
            "unit": "ns",
            "range": "± 484204.90202979546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452212.0476190476,
            "unit": "ns",
            "range": "± 181995.3915120496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3673275.35443038,
            "unit": "ns",
            "range": "± 189655.02810798876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5027595.290909091,
            "unit": "ns",
            "range": "± 212740.2560638183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4640069.85,
            "unit": "ns",
            "range": "± 207246.46864238684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8228490.335294117,
            "unit": "ns",
            "range": "± 443763.4614202557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7518354.838541667,
            "unit": "ns",
            "range": "± 354312.3706851655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2178634.1613011854,
            "unit": "ns",
            "range": "± 94166.22320070227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384905.1755371094,
            "unit": "ns",
            "range": "± 26779.462004517853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2799699.4175502234,
            "unit": "ns",
            "range": "± 119283.26840673777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879298.074031464,
            "unit": "ns",
            "range": "± 42110.063953532874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 833841.125,
            "unit": "ns",
            "range": "± 14349.608023108127"
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
          "distinct": false,
          "id": "c34c30e0385e5d45d261d298fd0002009d576469",
          "message": "Cleanup",
          "timestamp": "2023-06-14T16:49:10+09:00",
          "tree_id": "9a2df2be4a4edfd3c1ae444e1c4e8a43d6a67add",
          "url": "https://github.com/greymistcube/libplanet/commit/c34c30e0385e5d45d261d298fd0002009d576469"
        },
        "date": 1686749679307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12314401.689473685,
            "unit": "ns",
            "range": "± 4053277.8519540634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26973740.247252747,
            "unit": "ns",
            "range": "± 8829073.358988872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59730425.86904762,
            "unit": "ns",
            "range": "± 9020691.837285047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130738516.05681819,
            "unit": "ns",
            "range": "± 30468128.755509198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 329207422.2828283,
            "unit": "ns",
            "range": "± 106148551.29888283"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90340.20689655172,
            "unit": "ns",
            "range": "± 10412.660574308846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396572.66279069765,
            "unit": "ns",
            "range": "± 56482.694105854585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363680.23255813954,
            "unit": "ns",
            "range": "± 42522.47770973244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 374412.5459770115,
            "unit": "ns",
            "range": "± 41254.04773654368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5374404.073033708,
            "unit": "ns",
            "range": "± 936445.0088639492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4446240.676470588,
            "unit": "ns",
            "range": "± 554034.555913669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30463.64285714286,
            "unit": "ns",
            "range": "± 3607.7012877669904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 142341.31460674157,
            "unit": "ns",
            "range": "± 26036.18519160816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129057.67441860466,
            "unit": "ns",
            "range": "± 14382.8775681297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154879.19892473117,
            "unit": "ns",
            "range": "± 37714.14201993296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11176.559139784946,
            "unit": "ns",
            "range": "± 1637.865202968457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30213.833333333332,
            "unit": "ns",
            "range": "± 5916.928960214473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1906106.8461538462,
            "unit": "ns",
            "range": "± 384543.84308539797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3469006.6411764706,
            "unit": "ns",
            "range": "± 390721.66485592956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3222327.433333333,
            "unit": "ns",
            "range": "± 620998.5894694044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8547090.494505495,
            "unit": "ns",
            "range": "± 2309721.0641824813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3750582.404494382,
            "unit": "ns",
            "range": "± 644048.5977867367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4462446.065217392,
            "unit": "ns",
            "range": "± 1245174.9456200246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6221886.066666666,
            "unit": "ns",
            "range": "± 1648504.6407283533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5349704.304597701,
            "unit": "ns",
            "range": "± 1172332.5377623145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9958950.340425532,
            "unit": "ns",
            "range": "± 2541774.7144614225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7838768.011856617,
            "unit": "ns",
            "range": "± 678975.3633482342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2334234.2643960672,
            "unit": "ns",
            "range": "± 188962.2806318412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1612028.954186481,
            "unit": "ns",
            "range": "± 93280.02754203798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3260306.382283529,
            "unit": "ns",
            "range": "± 270072.6117226567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 942718.5259850543,
            "unit": "ns",
            "range": "± 22957.027662084467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923800.1586538461,
            "unit": "ns",
            "range": "± 14267.619867355043"
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
          "id": "fe5c2cc150529f2df916f97b5f0cfac76d7570fd",
          "message": "Changelog",
          "timestamp": "2023-06-15T09:49:32+09:00",
          "tree_id": "621b47cde04d8430fb015270c86b6d465d4aaf8a",
          "url": "https://github.com/greymistcube/libplanet/commit/fe5c2cc150529f2df916f97b5f0cfac76d7570fd"
        },
        "date": 1686791111565,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8109115.615384615,
            "unit": "ns",
            "range": "± 108526.58769439747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20630763.70588235,
            "unit": "ns",
            "range": "± 646690.6197598864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50430505.448275864,
            "unit": "ns",
            "range": "± 1435251.3874634742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115843935.33333333,
            "unit": "ns",
            "range": "± 1897435.0231525968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211921719.76190478,
            "unit": "ns",
            "range": "± 4902837.348070278"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66138.57608695653,
            "unit": "ns",
            "range": "± 10027.183211051512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323945.02173913043,
            "unit": "ns",
            "range": "± 23031.253425056842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310317.0543478261,
            "unit": "ns",
            "range": "± 21323.41073699403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302381.18888888886,
            "unit": "ns",
            "range": "± 16742.87894957435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4275620.952380952,
            "unit": "ns",
            "range": "± 96274.30468327267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3742190.25,
            "unit": "ns",
            "range": "± 114818.8368787698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18140.533333333333,
            "unit": "ns",
            "range": "± 1756.1980206230871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93213.81182795699,
            "unit": "ns",
            "range": "± 10982.597438654142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99533.25263157894,
            "unit": "ns",
            "range": "± 11138.935871067471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110417.95833333333,
            "unit": "ns",
            "range": "± 13140.114798758854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6353.5,
            "unit": "ns",
            "range": "± 823.7476632840651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17483.572916666668,
            "unit": "ns",
            "range": "± 2411.6513047453245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609988.0105263158,
            "unit": "ns",
            "range": "± 155838.6334181894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3275635.168421053,
            "unit": "ns",
            "range": "± 353951.0333667595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2633199.0416666665,
            "unit": "ns",
            "range": "± 296713.33808803675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6700625.645161291,
            "unit": "ns",
            "range": "± 303126.42712678603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3294241.314814815,
            "unit": "ns",
            "range": "± 82873.10804803517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3494845.9607843137,
            "unit": "ns",
            "range": "± 137049.9553393522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4484710.518072289,
            "unit": "ns",
            "range": "± 237638.00187754125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4529427.755319149,
            "unit": "ns",
            "range": "± 284418.8719085175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7783806.527027027,
            "unit": "ns",
            "range": "± 390341.7148622411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6469613.858258928,
            "unit": "ns",
            "range": "± 45509.21841263855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1992312.07421875,
            "unit": "ns",
            "range": "± 29191.858522531937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298724.9429408482,
            "unit": "ns",
            "range": "± 6349.82489425083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2802646.9669471155,
            "unit": "ns",
            "range": "± 29589.811893618615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875075.3026646206,
            "unit": "ns",
            "range": "± 7923.704787165941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815034.126953125,
            "unit": "ns",
            "range": "± 5202.684423893732"
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
          "id": "43be00ca43f0a0eb3fb1cb29a48ff6a5c3e4bf7c",
          "message": "Changelog",
          "timestamp": "2023-06-20T12:42:24+09:00",
          "tree_id": "14015ae60ff50a0a883777d210fe19ca3c209d36",
          "url": "https://github.com/greymistcube/libplanet/commit/43be00ca43f0a0eb3fb1cb29a48ff6a5c3e4bf7c"
        },
        "date": 1687233934331,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13450770.804347826,
            "unit": "ns",
            "range": "± 4635038.747176127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30780617.06521739,
            "unit": "ns",
            "range": "± 11080474.042806687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78209449.9368421,
            "unit": "ns",
            "range": "± 21801118.225744434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147958137.42105263,
            "unit": "ns",
            "range": "± 45203692.726459146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 302425938.46236557,
            "unit": "ns",
            "range": "± 72660455.1901213"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83629.96590909091,
            "unit": "ns",
            "range": "± 7857.467520639515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 418914.65789473685,
            "unit": "ns",
            "range": "± 78888.77594535013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 383214.07446808513,
            "unit": "ns",
            "range": "± 54232.92202099436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 396811.3,
            "unit": "ns",
            "range": "± 64600.1312003147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4745202.1736842105,
            "unit": "ns",
            "range": "± 438833.5031872867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3962254.2325581396,
            "unit": "ns",
            "range": "± 145631.65636352118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26266.875,
            "unit": "ns",
            "range": "± 3527.2022657165357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117719.27777777778,
            "unit": "ns",
            "range": "± 9790.454879227895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119004.89772727272,
            "unit": "ns",
            "range": "± 12911.401344957467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127208.25773195876,
            "unit": "ns",
            "range": "± 19596.422381435656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7609.239130434783,
            "unit": "ns",
            "range": "± 926.5105737589547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21514.26530612245,
            "unit": "ns",
            "range": "± 5933.3450289875045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2145866.1208791207,
            "unit": "ns",
            "range": "± 509707.30123785173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3952376.8333333335,
            "unit": "ns",
            "range": "± 1027093.9336445403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3222498.7303370787,
            "unit": "ns",
            "range": "± 705464.9069547678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9830622.06043956,
            "unit": "ns",
            "range": "± 3193873.2367198616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4097813.308988764,
            "unit": "ns",
            "range": "± 925567.5296200814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4749589.151162791,
            "unit": "ns",
            "range": "± 1551012.5090908427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5647595.752631579,
            "unit": "ns",
            "range": "± 998114.6652035865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5565272.38172043,
            "unit": "ns",
            "range": "± 748346.5129279997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9589037.447916666,
            "unit": "ns",
            "range": "± 1399036.7717844823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6502440.2878125,
            "unit": "ns",
            "range": "± 142523.79025187678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1969109.6600260416,
            "unit": "ns",
            "range": "± 22211.2334263882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315371.8786057692,
            "unit": "ns",
            "range": "± 17946.989721255275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2696797.2888183594,
            "unit": "ns",
            "range": "± 50466.34567041655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015906.4196428572,
            "unit": "ns",
            "range": "± 151123.9130346624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856156.1088028725,
            "unit": "ns",
            "range": "± 52947.22476206623"
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
          "id": "ed33d72ac7015ce341464b89c61b332abd885670",
          "message": "Suggestion",
          "timestamp": "2023-06-20T15:19:54+09:00",
          "tree_id": "ddbba17141359ce495beeb1f94cc299f9f1e12d2",
          "url": "https://github.com/greymistcube/libplanet/commit/ed33d72ac7015ce341464b89c61b332abd885670"
        },
        "date": 1687243061650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8363784.384615385,
            "unit": "ns",
            "range": "± 137911.2727556734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21256349,
            "unit": "ns",
            "range": "± 390189.82655334997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51132067.208333336,
            "unit": "ns",
            "range": "± 1284939.2075439238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105818242.53968254,
            "unit": "ns",
            "range": "± 4860866.528582558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225837016.32142857,
            "unit": "ns",
            "range": "± 6463375.571999115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75722.3125,
            "unit": "ns",
            "range": "± 11542.217546046477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324189.56666666665,
            "unit": "ns",
            "range": "± 19247.09073816472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314640.22580645164,
            "unit": "ns",
            "range": "± 26063.326568324945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300744.48387096776,
            "unit": "ns",
            "range": "± 25677.74062745232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4246630.178571428,
            "unit": "ns",
            "range": "± 120525.90402683338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3882571.3103448274,
            "unit": "ns",
            "range": "± 111684.75617945597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21522.316326530614,
            "unit": "ns",
            "range": "± 4751.766771470622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94393.41237113402,
            "unit": "ns",
            "range": "± 14141.001801611463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94328.61904761905,
            "unit": "ns",
            "range": "± 7132.584486393163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114676.09090909091,
            "unit": "ns",
            "range": "± 16365.663459549785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7044.957894736842,
            "unit": "ns",
            "range": "± 1223.4757944008873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17521.91935483871,
            "unit": "ns",
            "range": "± 2814.6796841566056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1699700.051020408,
            "unit": "ns",
            "range": "± 177656.01915459606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3214665.8061224488,
            "unit": "ns",
            "range": "± 127013.01588866198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2757997.840425532,
            "unit": "ns",
            "range": "± 287832.9813939597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6959128.983333333,
            "unit": "ns",
            "range": "± 296855.59476703685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372199.639240506,
            "unit": "ns",
            "range": "± 173987.8007797463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511946.4375,
            "unit": "ns",
            "range": "± 128653.72971347353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4635922.52631579,
            "unit": "ns",
            "range": "± 159744.7896079593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4453853.822222223,
            "unit": "ns",
            "range": "± 253799.68501196036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7724802.75,
            "unit": "ns",
            "range": "± 215959.1208807858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6634126.470052083,
            "unit": "ns",
            "range": "± 122986.26564252948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987972.3570033482,
            "unit": "ns",
            "range": "± 53332.17985308966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327239.8182444852,
            "unit": "ns",
            "range": "± 26738.50061378694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2950591.702674279,
            "unit": "ns",
            "range": "± 102770.41315049637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820939.051156851,
            "unit": "ns",
            "range": "± 12067.043781372959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764115.6655273438,
            "unit": "ns",
            "range": "± 8799.904160115637"
          }
        ]
      }
    ]
  }
}