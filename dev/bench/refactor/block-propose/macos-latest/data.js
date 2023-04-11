window.BENCHMARK_DATA = {
  "lastUpdate": 1681183417708,
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
          "id": "ce471d9b386cefda7fe85d4afa92224edf566391",
          "message": "Removed unnecessary overload",
          "timestamp": "2023-04-10T14:53:42+09:00",
          "tree_id": "40772124c88aad575c334353fcd59a8dfc5b0f5f",
          "url": "https://github.com/greymistcube/libplanet/commit/ce471d9b386cefda7fe85d4afa92224edf566391"
        },
        "date": 1681107287979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10222482.406593407,
            "unit": "ns",
            "range": "± 2467684.138382175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21725938.873626374,
            "unit": "ns",
            "range": "± 1254422.2115805494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56200644.38888889,
            "unit": "ns",
            "range": "± 1190405.5117782906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112064292.95762712,
            "unit": "ns",
            "range": "± 4963815.130763188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229771682.38554215,
            "unit": "ns",
            "range": "± 14345538.326215982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78706.67977528089,
            "unit": "ns",
            "range": "± 7669.054968095954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 425968.70967741933,
            "unit": "ns",
            "range": "± 46363.43272651989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382510.22340425535,
            "unit": "ns",
            "range": "± 62016.22215444737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 380903.2631578947,
            "unit": "ns",
            "range": "± 63055.37015654533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6041956.436170213,
            "unit": "ns",
            "range": "± 450919.29507426877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4476494.134020618,
            "unit": "ns",
            "range": "± 322260.9841086565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28073.384615384617,
            "unit": "ns",
            "range": "± 5144.604983797711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138705.47916666666,
            "unit": "ns",
            "range": "± 21474.167424325962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132139.6875,
            "unit": "ns",
            "range": "± 18759.99450023065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 274638.0430107527,
            "unit": "ns",
            "range": "± 27374.647044742276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10895.489361702128,
            "unit": "ns",
            "range": "± 1827.763359337054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26150.59574468085,
            "unit": "ns",
            "range": "± 5397.824642120052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682057.1734693877,
            "unit": "ns",
            "range": "± 178991.12195808752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3127652.0289855073,
            "unit": "ns",
            "range": "± 132269.38201939734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2705213.38,
            "unit": "ns",
            "range": "± 275139.80189955956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7075130.737704918,
            "unit": "ns",
            "range": "± 313246.8812814104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3497252.1951219514,
            "unit": "ns",
            "range": "± 228781.9742242851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3878297.3842105265,
            "unit": "ns",
            "range": "± 402107.1357560221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4883844.458333333,
            "unit": "ns",
            "range": "± 351803.24107994814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6361829.2,
            "unit": "ns",
            "range": "± 1879345.6731349404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8966389.447916666,
            "unit": "ns",
            "range": "± 527056.6596531378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7485854.047799059,
            "unit": "ns",
            "range": "± 448552.26592854544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2128465.01515997,
            "unit": "ns",
            "range": "± 77060.50532559825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401014.158984375,
            "unit": "ns",
            "range": "± 24573.397541575356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3216948.530323776,
            "unit": "ns",
            "range": "± 224826.7166650124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907367.6381293403,
            "unit": "ns",
            "range": "± 19390.628749247364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811937.6448102678,
            "unit": "ns",
            "range": "± 19185.123108016855"
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
          "id": "9c5ecdafd81d5fd4fcc2b0c6f4b6fb6c66ce450f",
          "message": "[skip changelog] Simple renaming",
          "timestamp": "2023-04-10T18:24:59+09:00",
          "tree_id": "8aa3d233e946edd28cf7b4d11cb181eb4d19981d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c5ecdafd81d5fd4fcc2b0c6f4b6fb6c66ce450f"
        },
        "date": 1681119794055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8574744.372340426,
            "unit": "ns",
            "range": "± 507712.79780422966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21332990.096153848,
            "unit": "ns",
            "range": "± 873754.3230938694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52671895.2,
            "unit": "ns",
            "range": "± 1554426.147256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121562947.98979592,
            "unit": "ns",
            "range": "± 12097404.306344341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233363141.22916666,
            "unit": "ns",
            "range": "± 14085184.669247266"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74237.02173913043,
            "unit": "ns",
            "range": "± 10237.499100595176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392347.97872340423,
            "unit": "ns",
            "range": "± 24704.342441725443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317837.22222222225,
            "unit": "ns",
            "range": "± 11904.3917791424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313634.0833333333,
            "unit": "ns",
            "range": "± 26638.781734695975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5500862.958333333,
            "unit": "ns",
            "range": "± 139375.08443420462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4066157.466666667,
            "unit": "ns",
            "range": "± 118475.21591680401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19766.108695652172,
            "unit": "ns",
            "range": "± 2536.8908220497938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96239.24736842106,
            "unit": "ns",
            "range": "± 12755.959312339135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100796.62244897959,
            "unit": "ns",
            "range": "± 14707.539007425914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 240619.72916666666,
            "unit": "ns",
            "range": "± 20357.452994176056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5989.46511627907,
            "unit": "ns",
            "range": "± 811.7664355143253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17187.313186813186,
            "unit": "ns",
            "range": "± 1788.6383393960639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564927.5103092783,
            "unit": "ns",
            "range": "± 159252.86414270903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2953061.7924528304,
            "unit": "ns",
            "range": "± 122145.06971903383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586976.81,
            "unit": "ns",
            "range": "± 236207.3030091202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7388108.755319149,
            "unit": "ns",
            "range": "± 608164.697575457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4232462.129411764,
            "unit": "ns",
            "range": "± 932435.604293143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3534638.7419354836,
            "unit": "ns",
            "range": "± 453831.38727914717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4656644.620879121,
            "unit": "ns",
            "range": "± 329257.7296019989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4791196.268421053,
            "unit": "ns",
            "range": "± 641823.0679919713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8763306.043956043,
            "unit": "ns",
            "range": "± 488274.11198692507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6527222.273189484,
            "unit": "ns",
            "range": "± 298406.36729898135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970956.3428485577,
            "unit": "ns",
            "range": "± 18012.816724477954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313941.0454799107,
            "unit": "ns",
            "range": "± 6061.720600521631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528206.2809709823,
            "unit": "ns",
            "range": "± 15896.871866615138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782554.7095102164,
            "unit": "ns",
            "range": "± 4159.057319849944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706055.25390625,
            "unit": "ns",
            "range": "± 8244.883426477305"
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
          "id": "93b65fd33ff676df90ddf152ef633975c9968bc5",
          "message": "Removed timestamp from ProposeBlock() entirely",
          "timestamp": "2023-04-11T11:42:15+09:00",
          "tree_id": "751e7bbf7a2871d12d69afd4d4aab733c82f5399",
          "url": "https://github.com/greymistcube/libplanet/commit/93b65fd33ff676df90ddf152ef633975c9968bc5"
        },
        "date": 1681182137981,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8112187.212121212,
            "unit": "ns",
            "range": "± 235031.77157870028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21192144.822916668,
            "unit": "ns",
            "range": "± 1748667.1039756236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53307845.155172415,
            "unit": "ns",
            "range": "± 1561566.846133059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108436502.88461539,
            "unit": "ns",
            "range": "± 4424678.913586371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212499216.1851852,
            "unit": "ns",
            "range": "± 5851174.240387802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71356.04945054946,
            "unit": "ns",
            "range": "± 8996.739895050547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 406536.34375,
            "unit": "ns",
            "range": "± 38134.85473789814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332661.5617977528,
            "unit": "ns",
            "range": "± 25290.773340001728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331642.4,
            "unit": "ns",
            "range": "± 5347.9476009827495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5477128.923076923,
            "unit": "ns",
            "range": "± 85490.01473901454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4159496.7,
            "unit": "ns",
            "range": "± 260012.4763090171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19359.84736842105,
            "unit": "ns",
            "range": "± 2622.2088292142103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97799.62626262626,
            "unit": "ns",
            "range": "± 13452.053103739736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104713.27894736842,
            "unit": "ns",
            "range": "± 14281.4298074189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 240551.5,
            "unit": "ns",
            "range": "± 20758.238442780057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7728.731958762886,
            "unit": "ns",
            "range": "± 1465.8115678372503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20493.948979591838,
            "unit": "ns",
            "range": "± 3424.0831818963356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524962.8645833333,
            "unit": "ns",
            "range": "± 126504.53574024592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3010716.1222222224,
            "unit": "ns",
            "range": "± 187911.44245836296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2625023.102040816,
            "unit": "ns",
            "range": "± 253428.95262333917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6807658.621621622,
            "unit": "ns",
            "range": "± 298610.63267821696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3417986.3,
            "unit": "ns",
            "range": "± 106617.10792416392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3654152.75,
            "unit": "ns",
            "range": "± 218554.12707326736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4672276.017241379,
            "unit": "ns",
            "range": "± 202693.2403634487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4693471.574468086,
            "unit": "ns",
            "range": "± 353962.65517999924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8832358.22972973,
            "unit": "ns",
            "range": "± 442107.3199708678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7063283.270263672,
            "unit": "ns",
            "range": "± 215596.26727592468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952334.2139322916,
            "unit": "ns",
            "range": "± 22171.825974183124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299202.7448381695,
            "unit": "ns",
            "range": "± 15150.971763738396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597420.7666242733,
            "unit": "ns",
            "range": "± 141306.28318331303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788930.0345052084,
            "unit": "ns",
            "range": "± 11364.800152632875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746644.1686197916,
            "unit": "ns",
            "range": "± 12346.852067964277"
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
          "id": "db6803aad6a81124e322b2e28d7f78a92f59f33c",
          "message": "Added test",
          "timestamp": "2023-04-11T12:02:54+09:00",
          "tree_id": "d127e88d7dafb7a955ef340f8e62db05d03a3cd7",
          "url": "https://github.com/greymistcube/libplanet/commit/db6803aad6a81124e322b2e28d7f78a92f59f33c"
        },
        "date": 1681183404963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9128377.755319148,
            "unit": "ns",
            "range": "± 772737.4829599252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25144719.585106384,
            "unit": "ns",
            "range": "± 2145181.0542061995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60757736.76086956,
            "unit": "ns",
            "range": "± 1481679.1941693358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114715765.30508475,
            "unit": "ns",
            "range": "± 5054816.917519395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234382149.53424656,
            "unit": "ns",
            "range": "± 11217088.262746172"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79176.38372093023,
            "unit": "ns",
            "range": "± 10159.212263543463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 427474.57446808513,
            "unit": "ns",
            "range": "± 53175.044968913826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358524.15591397847,
            "unit": "ns",
            "range": "± 42819.33657912008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333977.35869565216,
            "unit": "ns",
            "range": "± 29115.541911940556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6091180.7,
            "unit": "ns",
            "range": "± 444337.7593839067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4222740.86,
            "unit": "ns",
            "range": "± 211384.64396818855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19121.67777777778,
            "unit": "ns",
            "range": "± 2649.9305209368713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94913.53225806452,
            "unit": "ns",
            "range": "± 13053.547638270611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125101.44565217392,
            "unit": "ns",
            "range": "± 13255.454674336432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 285545.36597938143,
            "unit": "ns",
            "range": "± 41439.58145265748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9232.901098901099,
            "unit": "ns",
            "range": "± 1568.6993554813705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19267.66853932584,
            "unit": "ns",
            "range": "± 2009.6072334253133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657120.4020618557,
            "unit": "ns",
            "range": "± 177401.54146382978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2983716.3582089553,
            "unit": "ns",
            "range": "± 141765.73897537225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2665726.557894737,
            "unit": "ns",
            "range": "± 298310.4371689144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6997445.157894737,
            "unit": "ns",
            "range": "± 414190.6407277887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3691657.5102040814,
            "unit": "ns",
            "range": "± 381377.20767438406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4083899.659574468,
            "unit": "ns",
            "range": "± 520292.6993397496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4985131.431578947,
            "unit": "ns",
            "range": "± 429523.4296063748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4898792.905263158,
            "unit": "ns",
            "range": "± 370075.2809718951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9188537.510869564,
            "unit": "ns",
            "range": "± 672437.4622633511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7271071.817871094,
            "unit": "ns",
            "range": "± 374597.0729282561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2175035.09921875,
            "unit": "ns",
            "range": "± 48392.91101026416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303543.8763521635,
            "unit": "ns",
            "range": "± 15131.940591855206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3063992.5471906564,
            "unit": "ns",
            "range": "± 206975.12329445462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937865.1432396673,
            "unit": "ns",
            "range": "± 27539.653976421454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791049.6283772787,
            "unit": "ns",
            "range": "± 20071.240138924197"
          }
        ]
      }
    ]
  }
}