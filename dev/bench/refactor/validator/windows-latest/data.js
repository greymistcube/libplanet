window.BENCHMARK_DATA = {
  "lastUpdate": 1678779908445,
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
        "date": 1678779886233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94340.47619047618,
            "unit": "ns",
            "range": "± 3444.901465815151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4751738.802083333,
            "unit": "ns",
            "range": "± 41482.25806185062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503524.7200520833,
            "unit": "ns",
            "range": "± 3765.6915978958964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127956.328125,
            "unit": "ns",
            "range": "± 4354.788630785226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2495423.984375,
            "unit": "ns",
            "range": "± 8083.205984619034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783616.0606971154,
            "unit": "ns",
            "range": "± 874.2708552486101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759939.4466145834,
            "unit": "ns",
            "range": "± 1115.4012256217652"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3795527.6041666665,
            "unit": "ns",
            "range": "± 18521.76638518212"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5512138.461538462,
            "unit": "ns",
            "range": "± 51374.59713486063"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22071640,
            "unit": "ns",
            "range": "± 404172.8127564106"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5421683.098591549,
            "unit": "ns",
            "range": "± 224391.61557160065"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25430764.285714287,
            "unit": "ns",
            "range": "± 298937.4274818236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96756.25,
            "unit": "ns",
            "range": "± 11175.234013798454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201632.7868852459,
            "unit": "ns",
            "range": "± 8623.23839616872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194508.16326530612,
            "unit": "ns",
            "range": "± 7711.161735181182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3474538.4615384615,
            "unit": "ns",
            "range": "± 20897.70874448275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8758173.333333334,
            "unit": "ns",
            "range": "± 46890.63974012399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23301.052631578947,
            "unit": "ns",
            "range": "± 2449.1637624908467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55742.528735632186,
            "unit": "ns",
            "range": "± 5775.240500054261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44769,
            "unit": "ns",
            "range": "± 7714.405978165759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83917.8947368421,
            "unit": "ns",
            "range": "± 18166.60473053813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3874.1176470588234,
            "unit": "ns",
            "range": "± 431.26418297629044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18029,
            "unit": "ns",
            "range": "± 2773.6237828676203"
          }
        ]
      }
    ]
  }
}