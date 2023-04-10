window.BENCHMARK_DATA = {
  "lastUpdate": 1681107175344,
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
          "id": "510331dc7accb4078a3b69355e76012f61afc8b9",
          "message": "Cleanup",
          "timestamp": "2023-04-10T14:55:57+09:00",
          "tree_id": "1fe94d209619d87dda3737690767b19bc5d1c75a",
          "url": "https://github.com/greymistcube/libplanet/commit/510331dc7accb4078a3b69355e76012f61afc8b9"
        },
        "date": 1681107043570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7861843.08,
            "unit": "ns",
            "range": "± 203669.90405104042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19953732.714285713,
            "unit": "ns",
            "range": "± 304678.378313523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49012787.67307692,
            "unit": "ns",
            "range": "± 1998453.3769787264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97898615.33333333,
            "unit": "ns",
            "range": "± 3074696.5037226607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212969970.42105263,
            "unit": "ns",
            "range": "± 4586080.691133338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62422.364583333336,
            "unit": "ns",
            "range": "± 8097.147451085919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382685.9375,
            "unit": "ns",
            "range": "± 22781.55900945578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325658.3870967742,
            "unit": "ns",
            "range": "± 21623.55481123801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313226.31,
            "unit": "ns",
            "range": "± 26410.31314234397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5523737.217948718,
            "unit": "ns",
            "range": "± 192896.13278079673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3918689.8181818184,
            "unit": "ns",
            "range": "± 94377.00953780377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18374.944444444445,
            "unit": "ns",
            "range": "± 1914.733104651257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90386.93617021276,
            "unit": "ns",
            "range": "± 8116.618322999936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95608.21717171717,
            "unit": "ns",
            "range": "± 15775.957206342022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 243889.2947368421,
            "unit": "ns",
            "range": "± 21735.691977528422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7936.36170212766,
            "unit": "ns",
            "range": "± 1636.2732824505772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17986.86046511628,
            "unit": "ns",
            "range": "± 2110.433761730962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586912.5157894737,
            "unit": "ns",
            "range": "± 187118.41113617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2841369.6119402987,
            "unit": "ns",
            "range": "± 133338.720532943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2549497.3969072164,
            "unit": "ns",
            "range": "± 270395.91189650673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6836553.203703703,
            "unit": "ns",
            "range": "± 358283.9948694138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3214842.4426229508,
            "unit": "ns",
            "range": "± 116565.79561439749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3344913.2910447763,
            "unit": "ns",
            "range": "± 158092.76450059479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4432862.040540541,
            "unit": "ns",
            "range": "± 150418.69605825725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4447431.489361702,
            "unit": "ns",
            "range": "± 247750.74661764802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8244819.976190476,
            "unit": "ns",
            "range": "± 192140.77417264122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6347371.935416667,
            "unit": "ns",
            "range": "± 97961.2223387257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1922159.0028645834,
            "unit": "ns",
            "range": "± 18610.341933521915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1235916.4559151786,
            "unit": "ns",
            "range": "± 13217.034728173627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539137.464285714,
            "unit": "ns",
            "range": "± 21457.25057066557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 883497.6340494792,
            "unit": "ns",
            "range": "± 10910.19864177912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 712294.5475911458,
            "unit": "ns",
            "range": "± 5597.457599851179"
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
          "id": "5841e330c397ad6efec76dec442678bb1aaca5f8",
          "message": "Cleanup",
          "timestamp": "2023-04-10T14:55:23+09:00",
          "tree_id": "cd01a23fb276887eb567d50a9df864b11d2670d7",
          "url": "https://github.com/greymistcube/libplanet/commit/5841e330c397ad6efec76dec442678bb1aaca5f8"
        },
        "date": 1681107158973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8055378.3239436615,
            "unit": "ns",
            "range": "± 395186.11906784866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20051430.7979798,
            "unit": "ns",
            "range": "± 1310911.3552177262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48507947.719512194,
            "unit": "ns",
            "range": "± 1368610.9457078462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97510363.21052632,
            "unit": "ns",
            "range": "± 2098355.249602454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201297670.10714287,
            "unit": "ns",
            "range": "± 5647164.02239437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60318.520833333336,
            "unit": "ns",
            "range": "± 8779.117152567722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369007.0677966102,
            "unit": "ns",
            "range": "± 13636.752024893163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307429.3617021277,
            "unit": "ns",
            "range": "± 17591.874111958357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266704.71428571426,
            "unit": "ns",
            "range": "± 6038.599524251108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5495966.375,
            "unit": "ns",
            "range": "± 106590.33798668934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3977925.222222222,
            "unit": "ns",
            "range": "± 83380.58959748477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16661.81818181818,
            "unit": "ns",
            "range": "± 2005.6362051109438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85012.57291666667,
            "unit": "ns",
            "range": "± 7882.599976824094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89447.86315789474,
            "unit": "ns",
            "range": "± 12178.27559991389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 232602.87234042553,
            "unit": "ns",
            "range": "± 27754.0487633376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5449.3707865168535,
            "unit": "ns",
            "range": "± 964.0309357307812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16446.32222222222,
            "unit": "ns",
            "range": "± 1871.872586282492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1627301.1666666667,
            "unit": "ns",
            "range": "± 148016.77754908067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2994755.2027027025,
            "unit": "ns",
            "range": "± 144267.4288403007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2461389.6666666665,
            "unit": "ns",
            "range": "± 257263.34560411933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6367557,
            "unit": "ns",
            "range": "± 241179.1256907499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3355039.6354166665,
            "unit": "ns",
            "range": "± 248793.65208404802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3299278.1666666665,
            "unit": "ns",
            "range": "± 163144.23467290544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4469108.852941177,
            "unit": "ns",
            "range": "± 213905.2683671718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4411799.762886598,
            "unit": "ns",
            "range": "± 329942.37868719763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8334522.854166667,
            "unit": "ns",
            "range": "± 328237.7223171924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6675202.44140625,
            "unit": "ns",
            "range": "± 155812.25541251415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1994178.8206129808,
            "unit": "ns",
            "range": "± 18992.261410344883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318698.6053538602,
            "unit": "ns",
            "range": "± 26395.31859590888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2509909.606670673,
            "unit": "ns",
            "range": "± 38115.02124065819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859669.3179408482,
            "unit": "ns",
            "range": "± 12862.549225675873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745270.0030048077,
            "unit": "ns",
            "range": "± 6326.085401784407"
          }
        ]
      }
    ]
  }
}