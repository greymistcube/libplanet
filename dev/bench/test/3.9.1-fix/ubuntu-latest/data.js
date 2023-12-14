window.BENCHMARK_DATA = {
  "lastUpdate": 1702545203912,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "92e6469e1eac65994f8a228c2f1fa77603b650b1",
          "message": "feat: new argument for `RocksDBKeyValueStore.ctor`",
          "timestamp": "2023-12-14T17:59:47+09:00",
          "tree_id": "5c47e7f0c1b5d51cb6e817c3092842361db17660",
          "url": "https://github.com/greymistcube/libplanet/commit/92e6469e1eac65994f8a228c2f1fa77603b650b1"
        },
        "date": 1702545197855,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250255.57894736843,
            "unit": "ns",
            "range": "± 5546.322328211826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202371.88659793814,
            "unit": "ns",
            "range": "± 17070.077433965827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183222.10204081633,
            "unit": "ns",
            "range": "± 12982.050605648734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3146651.3571428573,
            "unit": "ns",
            "range": "± 44556.100562371656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2867488.3076923075,
            "unit": "ns",
            "range": "± 38504.67805644879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20132.272727272728,
            "unit": "ns",
            "range": "± 5280.599165559704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72424.76086956522,
            "unit": "ns",
            "range": "± 6326.517272507134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62292.62244897959,
            "unit": "ns",
            "range": "± 14749.357505849777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63445.215053763444,
            "unit": "ns",
            "range": "± 7520.557728001675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3515.4893617021276,
            "unit": "ns",
            "range": "± 329.6681532745605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12120,
            "unit": "ns",
            "range": "± 1414.7544089467997"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43768.416666666664,
            "unit": "ns",
            "range": "± 7451.198358818275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045226.3118279569,
            "unit": "ns",
            "range": "± 109830.79989366434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1978165.8205128205,
            "unit": "ns",
            "range": "± 101851.08750265684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1497159.4347826086,
            "unit": "ns",
            "range": "± 84286.01136584133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6320352.3977272725,
            "unit": "ns",
            "range": "± 347816.11962894496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2611007.690909091,
            "unit": "ns",
            "range": "± 110710.43939950886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2799573.1333333333,
            "unit": "ns",
            "range": "± 40639.87286760673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3309768.1944444445,
            "unit": "ns",
            "range": "± 104215.91099904616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3179119.6744186045,
            "unit": "ns",
            "range": "± 114319.84793400216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7304993.722222222,
            "unit": "ns",
            "range": "± 148268.28168353773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6139091.714285715,
            "unit": "ns",
            "range": "± 56403.51024834505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14944460.1,
            "unit": "ns",
            "range": "± 54705.40442327691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37630219.071428575,
            "unit": "ns",
            "range": "± 207334.4222099851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75675644.58333333,
            "unit": "ns",
            "range": "± 493364.01082263025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153710184.64285713,
            "unit": "ns",
            "range": "± 734911.6795904125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3663801.521158854,
            "unit": "ns",
            "range": "± 11018.373332652687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203884.4154146635,
            "unit": "ns",
            "range": "± 7917.2541632032935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759640.7860026042,
            "unit": "ns",
            "range": "± 10053.830742083146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914002.5635279606,
            "unit": "ns",
            "range": "± 35219.553319858554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620599.6825520833,
            "unit": "ns",
            "range": "± 987.5111429438731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588219.2412109375,
            "unit": "ns",
            "range": "± 8628.852113175299"
          }
        ]
      }
    ]
  }
}