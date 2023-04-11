window.BENCHMARK_DATA = {
  "lastUpdate": 1681172093394,
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
          "id": "610a906bda27f7a618e63d50ab8551c99e390adc",
          "message": "[skip changelog] Updated BlockChain<T>.Count description",
          "timestamp": "2023-04-11T08:50:26+09:00",
          "tree_id": "e2b21b61850aefe125b79bff5a1a8fbed3c50ce0",
          "url": "https://github.com/greymistcube/libplanet/commit/610a906bda27f7a618e63d50ab8551c99e390adc"
        },
        "date": 1681171737299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8832129.059701493,
            "unit": "ns",
            "range": "± 416613.05171508965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22142605,
            "unit": "ns",
            "range": "± 829973.6733275005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55187672.62195122,
            "unit": "ns",
            "range": "± 1981031.8107352694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107147955.33333333,
            "unit": "ns",
            "range": "± 2470160.2122380305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229233784.02941176,
            "unit": "ns",
            "range": "± 4391632.784552932"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72522.13829787234,
            "unit": "ns",
            "range": "± 11328.98760944073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379925.93617021275,
            "unit": "ns",
            "range": "± 23207.103463318563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304070.3965517241,
            "unit": "ns",
            "range": "± 13348.869317963154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322647.91752577317,
            "unit": "ns",
            "range": "± 33587.61105665491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5793949.0625,
            "unit": "ns",
            "range": "± 265060.939520017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914547.566666667,
            "unit": "ns",
            "range": "± 72893.39729697909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16526.384615384617,
            "unit": "ns",
            "range": "± 1333.498987786399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86778.02127659574,
            "unit": "ns",
            "range": "± 8196.278026239312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120142.23157894737,
            "unit": "ns",
            "range": "± 18310.668342179375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 281005.0416666667,
            "unit": "ns",
            "range": "± 33338.1090493705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8206.709677419354,
            "unit": "ns",
            "range": "± 1642.6570706490008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19583.066666666666,
            "unit": "ns",
            "range": "± 4388.300057468954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671357.391304348,
            "unit": "ns",
            "range": "± 209822.01759455467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3145523.505263158,
            "unit": "ns",
            "range": "± 204428.5879208592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2807515.0789473685,
            "unit": "ns",
            "range": "± 330427.26575848623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7278087.852631579,
            "unit": "ns",
            "range": "± 645765.9701888413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3435704.077777778,
            "unit": "ns",
            "range": "± 191163.92089567365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3628719.9731182796,
            "unit": "ns",
            "range": "± 278182.2176239646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4558247.059139785,
            "unit": "ns",
            "range": "± 256132.77959129369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4767446.194805195,
            "unit": "ns",
            "range": "± 234524.92629799497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9074261.739583334,
            "unit": "ns",
            "range": "± 765913.5921620765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7342446.178693182,
            "unit": "ns",
            "range": "± 297374.13203393936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016874.3779871324,
            "unit": "ns",
            "range": "± 81033.38890861487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466575.1784733953,
            "unit": "ns",
            "range": "± 72833.82596081233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580576.1166992188,
            "unit": "ns",
            "range": "± 64786.54524248411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 968593.7188091855,
            "unit": "ns",
            "range": "± 29900.929496149307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797605.2732204861,
            "unit": "ns",
            "range": "± 22260.611756432198"
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
          "id": "933b67833494517d9b4c5b44fdf28f629cea5eac",
          "message": "[skip changelog] Updated BlockChain<T>.Count description",
          "timestamp": "2023-04-11T08:49:12+09:00",
          "tree_id": "61d4b2cb58a71990004e58c9999d612ced05733b",
          "url": "https://github.com/greymistcube/libplanet/commit/933b67833494517d9b4c5b44fdf28f629cea5eac"
        },
        "date": 1681172074001,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8376208.5,
            "unit": "ns",
            "range": "± 277120.92698284006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21604540.423913043,
            "unit": "ns",
            "range": "± 1625445.514642382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51774898.229166664,
            "unit": "ns",
            "range": "± 1859161.128123463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104116573.22222222,
            "unit": "ns",
            "range": "± 2165095.618484743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241117153.70652175,
            "unit": "ns",
            "range": "± 13592214.373862462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83001.84090909091,
            "unit": "ns",
            "range": "± 7742.854010458466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 445454.77777777775,
            "unit": "ns",
            "range": "± 42086.8730505031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370576.5208333333,
            "unit": "ns",
            "range": "± 40854.806380124435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 352810.10215053766,
            "unit": "ns",
            "range": "± 32462.934132350074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6099590.571428572,
            "unit": "ns",
            "range": "± 338899.677593799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4458394.510526316,
            "unit": "ns",
            "range": "± 307905.5546893275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25658.887640449437,
            "unit": "ns",
            "range": "± 2737.803023652867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114626.55319148937,
            "unit": "ns",
            "range": "± 23101.895877428524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123441.17415730337,
            "unit": "ns",
            "range": "± 14325.037513654896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 287936.42307692306,
            "unit": "ns",
            "range": "± 44035.58581981188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11490.433333333332,
            "unit": "ns",
            "range": "± 1280.0615509253073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28482.542105263157,
            "unit": "ns",
            "range": "± 5234.039119919395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651327.2626262626,
            "unit": "ns",
            "range": "± 174056.6171398112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3282256.4105263157,
            "unit": "ns",
            "range": "± 217628.0031409001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2703098.397959184,
            "unit": "ns",
            "range": "± 291391.6828189359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7135840.620481928,
            "unit": "ns",
            "range": "± 356756.255324358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3571848.6063829786,
            "unit": "ns",
            "range": "± 317414.72959487815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4014759.170212766,
            "unit": "ns",
            "range": "± 548683.8200282797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4991706.795918368,
            "unit": "ns",
            "range": "± 469532.7646703844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4674833.393617021,
            "unit": "ns",
            "range": "± 316305.53308665956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9216539.818181818,
            "unit": "ns",
            "range": "± 766598.753561249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7426009.147286184,
            "unit": "ns",
            "range": "± 423724.0508207344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2287470.0973821273,
            "unit": "ns",
            "range": "± 97831.66480424072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1488924.5521965579,
            "unit": "ns",
            "range": "± 71243.33339679072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3506425.58703125,
            "unit": "ns",
            "range": "± 381238.3094439372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 930964.1043031754,
            "unit": "ns",
            "range": "± 52523.26187736455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848702.1364941406,
            "unit": "ns",
            "range": "± 52156.375685842126"
          }
        ]
      }
    ]
  }
}