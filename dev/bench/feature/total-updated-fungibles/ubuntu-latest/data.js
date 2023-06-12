window.BENCHMARK_DATA = {
  "lastUpdate": 1686575490690,
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
          "id": "027ba3ba808661370a6a9cf8513c2fe070d6923d",
          "message": "Added scenario test for ActionEvaluator",
          "timestamp": "2023-06-12T21:37:56+09:00",
          "tree_id": "ab5b77322cdbdb42324db5a1c7723b949d9ce77d",
          "url": "https://github.com/greymistcube/libplanet/commit/027ba3ba808661370a6a9cf8513c2fe070d6923d"
        },
        "date": 1686574183617,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1305172.0112359552,
            "unit": "ns",
            "range": "± 70515.3944005547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577575.11627907,
            "unit": "ns",
            "range": "± 94931.34048935158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153687.5274725277,
            "unit": "ns",
            "range": "± 118347.42595269994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5154659.8,
            "unit": "ns",
            "range": "± 109798.11453390264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3101910.64,
            "unit": "ns",
            "range": "± 39446.031729947186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3306500.533333333,
            "unit": "ns",
            "range": "± 48318.98621492482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4109280.8,
            "unit": "ns",
            "range": "± 49057.1924844578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4050905.272727273,
            "unit": "ns",
            "range": "± 94116.91847412416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6557491,
            "unit": "ns",
            "range": "± 128001.14443482527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7541248.666666667,
            "unit": "ns",
            "range": "± 24463.423924202394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19391397.333333332,
            "unit": "ns",
            "range": "± 171785.0109055197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49122421.2,
            "unit": "ns",
            "range": "± 316993.942316884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97838226.4,
            "unit": "ns",
            "range": "± 708647.3847877679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195525364.92857143,
            "unit": "ns",
            "range": "± 1131538.890936142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6222081.410714285,
            "unit": "ns",
            "range": "± 21432.289016432504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836576.8072415865,
            "unit": "ns",
            "range": "± 1893.9949067688096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339400.7046595982,
            "unit": "ns",
            "range": "± 1156.6367360127795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556586.4931640625,
            "unit": "ns",
            "range": "± 1920.3302239858992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798575.2220982143,
            "unit": "ns",
            "range": "± 717.8673682895134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741311.7737862723,
            "unit": "ns",
            "range": "± 688.4264182720868"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45616.132352941175,
            "unit": "ns",
            "range": "± 2131.614572035429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276277.0909090909,
            "unit": "ns",
            "range": "± 6434.324835332771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262869,
            "unit": "ns",
            "range": "± 2958.151308954068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231992.15384615384,
            "unit": "ns",
            "range": "± 2709.5141276052254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173061.8571428573,
            "unit": "ns",
            "range": "± 28389.188242268305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3742304.6153846155,
            "unit": "ns",
            "range": "± 29911.03844051128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15958.652173913044,
            "unit": "ns",
            "range": "± 1074.6137403152554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82228.11538461539,
            "unit": "ns",
            "range": "± 4233.246198382972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69434.95,
            "unit": "ns",
            "range": "± 1501.6652326842463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82417.59793814433,
            "unit": "ns",
            "range": "± 11425.832836767117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4169.367346938776,
            "unit": "ns",
            "range": "± 536.3569627590429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15295.121951219513,
            "unit": "ns",
            "range": "± 750.7859978541978"
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
          "id": "4a902e578173a6468f95578930d4b5cec7f0c744",
          "message": "Changelog",
          "timestamp": "2023-06-12T21:55:38+09:00",
          "tree_id": "bd7080a1804ddc6ee932b2e9b0ef6367f6d7e42e",
          "url": "https://github.com/greymistcube/libplanet/commit/4a902e578173a6468f95578930d4b5cec7f0c744"
        },
        "date": 1686575482875,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422765.4040404041,
            "unit": "ns",
            "range": "± 172835.47475094956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2616833.61,
            "unit": "ns",
            "range": "± 323682.9956521682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137678.69,
            "unit": "ns",
            "range": "± 273807.6504464842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5548332.234693877,
            "unit": "ns",
            "range": "± 486403.3499492278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3149174.8383838385,
            "unit": "ns",
            "range": "± 283385.34863469977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3367936.03,
            "unit": "ns",
            "range": "± 360535.7711727091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4073444.97,
            "unit": "ns",
            "range": "± 369604.2433654224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4036631.42,
            "unit": "ns",
            "range": "± 369785.2298735442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6717805.87755102,
            "unit": "ns",
            "range": "± 566838.711791283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8122199.191919192,
            "unit": "ns",
            "range": "± 828977.5247167585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21510799.1,
            "unit": "ns",
            "range": "± 1712092.268716201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52561219.93939394,
            "unit": "ns",
            "range": "± 3537795.3718937323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97092541.68831168,
            "unit": "ns",
            "range": "± 4951953.5458194185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194199305.06578946,
            "unit": "ns",
            "range": "± 9424475.646264357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5653168.3157327585,
            "unit": "ns",
            "range": "± 165611.38319184363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1776467.499407087,
            "unit": "ns",
            "range": "± 72552.50215469538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1264664.4072730655,
            "unit": "ns",
            "range": "± 29884.424027276833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546830.644159226,
            "unit": "ns",
            "range": "± 91897.76282070551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 784497.7454788773,
            "unit": "ns",
            "range": "± 21579.212388216085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760984.196105957,
            "unit": "ns",
            "range": "± 14464.242123729786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48612.30434782609,
            "unit": "ns",
            "range": "± 5698.8417017425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272733.26,
            "unit": "ns",
            "range": "± 33496.5630546952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263408.27,
            "unit": "ns",
            "range": "± 34010.479238277025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239446.89,
            "unit": "ns",
            "range": "± 30273.69802383387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4019584.23,
            "unit": "ns",
            "range": "± 394666.977876793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3689192.01,
            "unit": "ns",
            "range": "± 368386.3961962691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16882.031914893618,
            "unit": "ns",
            "range": "± 1757.7761576707837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81157.97916666667,
            "unit": "ns",
            "range": "± 7960.41109356224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78608.62,
            "unit": "ns",
            "range": "± 11817.725187260703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90120.57291666667,
            "unit": "ns",
            "range": "± 16657.663209936738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5129.5368421052635,
            "unit": "ns",
            "range": "± 620.7470244061349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17386.287234042553,
            "unit": "ns",
            "range": "± 1609.726936185945"
          }
        ]
      }
    ]
  }
}