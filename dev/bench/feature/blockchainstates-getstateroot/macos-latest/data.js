window.BENCHMARK_DATA = {
  "lastUpdate": 1686729402369,
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
      }
    ]
  }
}