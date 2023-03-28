window.BENCHMARK_DATA = {
  "lastUpdate": 1679991494814,
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
          "id": "6f4b1a954b3c0d74eeba180434ae74e206ba2b62",
          "message": "Introduce state cache",
          "timestamp": "2023-03-28T17:05:18+09:00",
          "tree_id": "34fe8b39ff2b76c37170587169bec08e6adf2442",
          "url": "https://github.com/greymistcube/libplanet/commit/6f4b1a954b3c0d74eeba180434ae74e206ba2b62"
        },
        "date": 1679991487651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110885.19230769231,
            "unit": "ns",
            "range": "± 5583.329647222206"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5158053.887239584,
            "unit": "ns",
            "range": "± 49497.52837078896"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6317016,
            "unit": "ns",
            "range": "± 98379.83852161205"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27903318.0625,
            "unit": "ns",
            "range": "± 523628.6873402397"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7043685.571428572,
            "unit": "ns",
            "range": "± 86408.88890058109"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30736949.133333333,
            "unit": "ns",
            "range": "± 527999.8877460469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5995471.911830357,
            "unit": "ns",
            "range": "± 23320.535700268767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850972.3550502232,
            "unit": "ns",
            "range": "± 5319.376619848583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364472.278515625,
            "unit": "ns",
            "range": "± 4600.611922051485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583934.2640625,
            "unit": "ns",
            "range": "± 5543.31852619003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818713.8227213542,
            "unit": "ns",
            "range": "± 1364.5033372763166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775923.9309244792,
            "unit": "ns",
            "range": "± 767.1460603974805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96731.88541666667,
            "unit": "ns",
            "range": "± 10415.71832919114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203464.96153846153,
            "unit": "ns",
            "range": "± 5624.561999370815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178806.57894736843,
            "unit": "ns",
            "range": "± 7774.667280311672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3922983.8,
            "unit": "ns",
            "range": "± 63683.86983732335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9949220.266666668,
            "unit": "ns",
            "range": "± 162411.4635527689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19241.13186813187,
            "unit": "ns",
            "range": "± 2199.7502040448503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52106.47727272727,
            "unit": "ns",
            "range": "± 4025.355525034504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40780.1282051282,
            "unit": "ns",
            "range": "± 1441.2515062207347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99191.14583333333,
            "unit": "ns",
            "range": "± 19547.20395511132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6542.360824742268,
            "unit": "ns",
            "range": "± 1069.806974271206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17207.967032967033,
            "unit": "ns",
            "range": "± 1247.509736773843"
          }
        ]
      }
    ]
  }
}