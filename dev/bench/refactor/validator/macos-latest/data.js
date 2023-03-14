window.BENCHMARK_DATA = {
  "lastUpdate": 1678780666628,
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
          "id": "510663df583cb592fdb5d5cfef7657221fcdc407",
          "message": "Updated Validator bencoding",
          "timestamp": "2023-03-14T16:30:26+09:00",
          "tree_id": "ee01ffd92a2e7274fd6bf935fa718bd6afb0f9a5",
          "url": "https://github.com/greymistcube/libplanet/commit/510663df583cb592fdb5d5cfef7657221fcdc407"
        },
        "date": 1678779970031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 127183.55154639175,
            "unit": "ns",
            "range": "± 11814.971943621587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116958.60416666667,
            "unit": "ns",
            "range": "± 20739.71276027006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252256.3383838384,
            "unit": "ns",
            "range": "± 31826.797476118427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222366.38541666666,
            "unit": "ns",
            "range": "± 16403.51922277642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3675969.5319148935,
            "unit": "ns",
            "range": "± 141755.70451489868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9742172.882978724,
            "unit": "ns",
            "range": "± 378284.3313891051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26313.63157894737,
            "unit": "ns",
            "range": "± 6727.099998074842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69925.99484536082,
            "unit": "ns",
            "range": "± 11721.42155869944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50411.34020618557,
            "unit": "ns",
            "range": "± 9581.288502734767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115168.39393939394,
            "unit": "ns",
            "range": "± 19459.85104386338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5696.015151515152,
            "unit": "ns",
            "range": "± 1194.22471959449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24500.726315789474,
            "unit": "ns",
            "range": "± 4212.044559487545"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4669003.484166667,
            "unit": "ns",
            "range": "± 235001.69546341765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5981333.348837209,
            "unit": "ns",
            "range": "± 220626.88894697998"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27270794.814814813,
            "unit": "ns",
            "range": "± 1423279.2248648903"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7209453.015151516,
            "unit": "ns",
            "range": "± 561379.1211229381"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31792064.16455696,
            "unit": "ns",
            "range": "± 1572567.5812139076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6734410.436941965,
            "unit": "ns",
            "range": "± 87984.99849614574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2033678.8463541667,
            "unit": "ns",
            "range": "± 52510.71879865654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317278.504720052,
            "unit": "ns",
            "range": "± 9241.979111310244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580994.0686677634,
            "unit": "ns",
            "range": "± 57228.798111634176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830246.9818960336,
            "unit": "ns",
            "range": "± 13709.554945106767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765272.0206801471,
            "unit": "ns",
            "range": "± 15645.671150538028"
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
          "id": "b6413304ea412b7c269267638fb026072a223a4c",
          "message": "Changelog",
          "timestamp": "2023-03-14T16:33:49+09:00",
          "tree_id": "e3a77857dea38365cbc1f77c5f33825d3a97df54",
          "url": "https://github.com/greymistcube/libplanet/commit/b6413304ea412b7c269267638fb026072a223a4c"
        },
        "date": 1678780277808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136325.58602150538,
            "unit": "ns",
            "range": "± 16187.525421605631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 145260.45918367346,
            "unit": "ns",
            "range": "± 27156.936674629986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278012.1304347826,
            "unit": "ns",
            "range": "± 34514.500520196205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241683.76666666666,
            "unit": "ns",
            "range": "± 6235.034368919645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3991957.8105263156,
            "unit": "ns",
            "range": "± 239525.08944457534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11924704.829268293,
            "unit": "ns",
            "range": "± 602955.793663615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29112.775862068964,
            "unit": "ns",
            "range": "± 3575.1014449410923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75473.67708333333,
            "unit": "ns",
            "range": "± 12420.192079618864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64256.70652173913,
            "unit": "ns",
            "range": "± 6768.04187361706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141573.98969072165,
            "unit": "ns",
            "range": "± 27901.159792386934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8803.068421052632,
            "unit": "ns",
            "range": "± 1047.2278060267333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32220.532608695652,
            "unit": "ns",
            "range": "± 3748.998628061993"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5435275.622583763,
            "unit": "ns",
            "range": "± 563529.7235591112"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6411211.912371134,
            "unit": "ns",
            "range": "± 466795.37211903115"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27951717.421686746,
            "unit": "ns",
            "range": "± 1474878.15044512"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7486495.168421052,
            "unit": "ns",
            "range": "± 532296.1696004507"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35138187.62162162,
            "unit": "ns",
            "range": "± 1739068.404312146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7055444.938745471,
            "unit": "ns",
            "range": "± 339178.5362406408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2175953.64296875,
            "unit": "ns",
            "range": "± 87571.17390470617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327785.1189903845,
            "unit": "ns",
            "range": "± 12916.626222208979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555291.642578125,
            "unit": "ns",
            "range": "± 12888.379168815358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855529.0641526442,
            "unit": "ns",
            "range": "± 10676.988573506025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874828.052049068,
            "unit": "ns",
            "range": "± 38000.718144628096"
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
          "id": "226c7fdd527bac7375ee204bec6940f0be2d6ec0",
          "message": "Updated Validator bencoding",
          "timestamp": "2023-03-14T16:36:08+09:00",
          "tree_id": "01f6ba45b937da56e7e2ab5e83cb6dc8ec80f2e4",
          "url": "https://github.com/greymistcube/libplanet/commit/226c7fdd527bac7375ee204bec6940f0be2d6ec0"
        },
        "date": 1678780649352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147792.1739130435,
            "unit": "ns",
            "range": "± 14715.378719168013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141125.27368421052,
            "unit": "ns",
            "range": "± 28884.882960602492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294158.91489361704,
            "unit": "ns",
            "range": "± 46946.48726645419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236259.32631578948,
            "unit": "ns",
            "range": "± 21171.383855332464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3637968.714285714,
            "unit": "ns",
            "range": "± 63218.94007145518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10256189.423076924,
            "unit": "ns",
            "range": "± 264088.60600944876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26422.064516129034,
            "unit": "ns",
            "range": "± 2618.291024140895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72966.93478260869,
            "unit": "ns",
            "range": "± 12482.057817456918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58771.28125,
            "unit": "ns",
            "range": "± 9923.933516295607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139317.37234042553,
            "unit": "ns",
            "range": "± 24740.513154001328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7226.489583333333,
            "unit": "ns",
            "range": "± 1515.4862516161993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26756.563829787236,
            "unit": "ns",
            "range": "± 4758.8198942809895"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6334120.14015625,
            "unit": "ns",
            "range": "± 1022773.7172631932"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6368388.0360824745,
            "unit": "ns",
            "range": "± 652364.9126250849"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29375006.65934066,
            "unit": "ns",
            "range": "± 3068806.2528556725"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7244839.881578947,
            "unit": "ns",
            "range": "± 327433.95381069725"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34102919.55555555,
            "unit": "ns",
            "range": "± 2344943.063415343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7146658.576704546,
            "unit": "ns",
            "range": "± 222766.73996271644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2142374.330125762,
            "unit": "ns",
            "range": "± 77256.5647033498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411938.7943564968,
            "unit": "ns",
            "range": "± 48690.6484945443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3417346.201120477,
            "unit": "ns",
            "range": "± 173915.85336624424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888224.7973632812,
            "unit": "ns",
            "range": "± 26296.57796480322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790475.1905487805,
            "unit": "ns",
            "range": "± 28442.354138694165"
          }
        ]
      }
    ]
  }
}