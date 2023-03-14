window.BENCHMARK_DATA = {
  "lastUpdate": 1678779726235,
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
        "date": 1678779719307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97341.95454545454,
            "unit": "ns",
            "range": "± 7333.80092747868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216607.08139534883,
            "unit": "ns",
            "range": "± 10860.89404533002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185021.26086956522,
            "unit": "ns",
            "range": "± 4627.239263489735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4046559,
            "unit": "ns",
            "range": "± 82585.58347178399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9928757.733333332,
            "unit": "ns",
            "range": "± 178306.74993811996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24002.084210526315,
            "unit": "ns",
            "range": "± 2656.9918507516745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60007.846153846156,
            "unit": "ns",
            "range": "± 4594.876806287331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45227.885714285716,
            "unit": "ns",
            "range": "± 1446.9939381845581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108981.48979591837,
            "unit": "ns",
            "range": "± 17110.07908195098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6362.927835051546,
            "unit": "ns",
            "range": "± 717.817093802202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22642.255555555555,
            "unit": "ns",
            "range": "± 3371.105108574735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5997786.203125,
            "unit": "ns",
            "range": "± 27742.635203996244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867314.1827566964,
            "unit": "ns",
            "range": "± 4329.688273557208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374530.2266927084,
            "unit": "ns",
            "range": "± 6796.154525173112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618434.2872596155,
            "unit": "ns",
            "range": "± 2002.7130218811499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829653.3948567709,
            "unit": "ns",
            "range": "± 718.6155437964316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752716.048967634,
            "unit": "ns",
            "range": "± 442.9364953588468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110963.4074074074,
            "unit": "ns",
            "range": "± 3101.2718266898087"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4965610.750859375,
            "unit": "ns",
            "range": "± 290919.4606222698"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6282796.857142857,
            "unit": "ns",
            "range": "± 110548.56650349667"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27807714.181818184,
            "unit": "ns",
            "range": "± 662747.3225773826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6933632.785714285,
            "unit": "ns",
            "range": "± 74675.14206025845"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30884772.07142857,
            "unit": "ns",
            "range": "± 508999.6829949843"
          }
        ]
      }
    ]
  }
}