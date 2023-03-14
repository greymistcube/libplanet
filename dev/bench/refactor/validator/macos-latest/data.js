window.BENCHMARK_DATA = {
  "lastUpdate": 1678779981805,
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
      }
    ]
  }
}