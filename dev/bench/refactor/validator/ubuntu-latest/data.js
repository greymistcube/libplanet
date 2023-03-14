window.BENCHMARK_DATA = {
  "lastUpdate": 1678779846424,
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
        "date": 1678779839183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100519.0306122449,
            "unit": "ns",
            "range": "± 11394.34180567795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222286.8673469388,
            "unit": "ns",
            "range": "± 24659.345521301304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177027.92857142858,
            "unit": "ns",
            "range": "± 2599.60187674621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3834456.8666666667,
            "unit": "ns",
            "range": "± 55660.19567989147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9639086.857142856,
            "unit": "ns",
            "range": "± 41547.16573293009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18549.954545454544,
            "unit": "ns",
            "range": "± 705.2692362213552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51808.79775280899,
            "unit": "ns",
            "range": "± 5524.203488821169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53780.09375,
            "unit": "ns",
            "range": "± 4369.106590785436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104525.1204819277,
            "unit": "ns",
            "range": "± 10954.348306246946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4415.909090909091,
            "unit": "ns",
            "range": "± 391.8380980568622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17130.840425531915,
            "unit": "ns",
            "range": "± 1328.095064799167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5800549.622596154,
            "unit": "ns",
            "range": "± 31318.01384262252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895468.506640625,
            "unit": "ns",
            "range": "± 5008.050879790076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375254.0684895834,
            "unit": "ns",
            "range": "± 4705.853072468848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579862.0614583334,
            "unit": "ns",
            "range": "± 3767.533200807986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812845.1192057292,
            "unit": "ns",
            "range": "± 903.6971607367433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749338.3001302084,
            "unit": "ns",
            "range": "± 1281.899901741462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108182.77777777778,
            "unit": "ns",
            "range": "± 2181.5762125678375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4504418.359895834,
            "unit": "ns",
            "range": "± 31271.953655731853"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6403258.428571428,
            "unit": "ns",
            "range": "± 38133.03174558627"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26704614.57142857,
            "unit": "ns",
            "range": "± 260065.6597549976"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6538144.942028985,
            "unit": "ns",
            "range": "± 266995.7755897847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28976697.666666668,
            "unit": "ns",
            "range": "± 385894.2613527084"
          }
        ]
      }
    ]
  }
}