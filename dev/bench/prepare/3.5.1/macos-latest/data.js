window.BENCHMARK_DATA = {
  "lastUpdate": 1696420489115,
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
          "id": "4b291f9f2f211836d49e6e0dc09e2ce4eb81f773",
          "message": "Prepare 3.5.1",
          "timestamp": "2023-10-04T20:35:54+09:00",
          "tree_id": "6660c95a6a1132eb392ccdb1480cc8a13c802149",
          "url": "https://github.com/greymistcube/libplanet/commit/4b291f9f2f211836d49e6e0dc09e2ce4eb81f773"
        },
        "date": 1696420474445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8290536.007042253,
            "unit": "ns",
            "range": "± 404849.79008392285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21859799.51075269,
            "unit": "ns",
            "range": "± 1227292.2613128826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52614862.28947368,
            "unit": "ns",
            "range": "± 915514.7103501444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120693525.39473684,
            "unit": "ns",
            "range": "± 2584791.5452853553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222835204.375,
            "unit": "ns",
            "range": "± 4286418.574459474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64339.117021276594,
            "unit": "ns",
            "range": "± 9497.90076761887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354725.44736842107,
            "unit": "ns",
            "range": "± 50530.574043412314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357301.63265306124,
            "unit": "ns",
            "range": "± 60554.24456976746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322072.0257731959,
            "unit": "ns",
            "range": "± 36586.81490364527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4240670.606382979,
            "unit": "ns",
            "range": "± 274000.5591491221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3560873.55,
            "unit": "ns",
            "range": "± 123444.77907767464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18474.728260869564,
            "unit": "ns",
            "range": "± 2076.887078378457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95462.91666666667,
            "unit": "ns",
            "range": "± 14817.795469720053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94239.58695652174,
            "unit": "ns",
            "range": "± 20300.936939430383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107568.68041237113,
            "unit": "ns",
            "range": "± 26743.226630208937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6516.864583333333,
            "unit": "ns",
            "range": "± 1137.085208303662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20169.579545454544,
            "unit": "ns",
            "range": "± 3241.7264848835093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484874.0979381443,
            "unit": "ns",
            "range": "± 156062.3803693748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2821013.936170213,
            "unit": "ns",
            "range": "± 169354.68016218094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2254341.3913043477,
            "unit": "ns",
            "range": "± 145495.75338865016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10621542.441860465,
            "unit": "ns",
            "range": "± 765980.2495330083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3716619.342696629,
            "unit": "ns",
            "range": "± 415199.6218087834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3749797.2391304346,
            "unit": "ns",
            "range": "± 480968.0814935317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4597143.382978723,
            "unit": "ns",
            "range": "± 347038.4529005847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4411856.868686869,
            "unit": "ns",
            "range": "± 314681.9602485181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15771029.826530613,
            "unit": "ns",
            "range": "± 1756049.721462232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5728189.94109375,
            "unit": "ns",
            "range": "± 152900.51269756316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1786756.528515625,
            "unit": "ns",
            "range": "± 29504.71253782071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1027895.5307074653,
            "unit": "ns",
            "range": "± 21932.574268164015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2520811.5546875,
            "unit": "ns",
            "range": "± 37498.40273566384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823160.7142857143,
            "unit": "ns",
            "range": "± 5629.067419603063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792144.8740885417,
            "unit": "ns",
            "range": "± 5660.83821455358"
          }
        ]
      }
    ]
  }
}