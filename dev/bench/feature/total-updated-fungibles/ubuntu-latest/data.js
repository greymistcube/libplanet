window.BENCHMARK_DATA = {
  "lastUpdate": 1686582037256,
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
          "id": "b67b82b40ee01923b572ffb9ad3d26a3dd6f8b28",
          "message": "Changelog\n\nTypo",
          "timestamp": "2023-06-12T22:07:26+09:00",
          "tree_id": "a06ac8e75ad288a4e49fdd25a481c33ec7d3dde7",
          "url": "https://github.com/greymistcube/libplanet/commit/b67b82b40ee01923b572ffb9ad3d26a3dd6f8b28"
        },
        "date": 1686576056990,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441283.8350515463,
            "unit": "ns",
            "range": "± 104617.26225645082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2808257.227272727,
            "unit": "ns",
            "range": "± 98422.21578174822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2338763.5512820515,
            "unit": "ns",
            "range": "± 116823.9181127376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5778788.160714285,
            "unit": "ns",
            "range": "± 245024.27984009162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3516270.1875,
            "unit": "ns",
            "range": "± 67975.04160520365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3543747.870967742,
            "unit": "ns",
            "range": "± 105086.91100219282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4251813.595238095,
            "unit": "ns",
            "range": "± 93435.83416757449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4386731.8125,
            "unit": "ns",
            "range": "± 162398.13254581578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6940582.29032258,
            "unit": "ns",
            "range": "± 209225.124174288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8016727.433333334,
            "unit": "ns",
            "range": "± 139190.81102391507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22695945.8,
            "unit": "ns",
            "range": "± 364046.99209584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54763981.333333336,
            "unit": "ns",
            "range": "± 587915.5980137025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108978458.73333333,
            "unit": "ns",
            "range": "± 1167613.0436372848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216285025.66666666,
            "unit": "ns",
            "range": "± 2476377.1140867593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6060754.221875,
            "unit": "ns",
            "range": "± 23542.565442129457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1971627.0692708334,
            "unit": "ns",
            "range": "± 2553.135420431438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362022.10625,
            "unit": "ns",
            "range": "± 4819.12972371407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577718.7916666665,
            "unit": "ns",
            "range": "± 2512.9810494452972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850639.5857747396,
            "unit": "ns",
            "range": "± 554.1907381161456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768910.2132393973,
            "unit": "ns",
            "range": "± 672.2886212093839"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50519.868131868134,
            "unit": "ns",
            "range": "± 2931.377424461034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291240.1,
            "unit": "ns",
            "range": "± 7458.739702870212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274727.7659574468,
            "unit": "ns",
            "range": "± 8559.61188477295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246452.53333333333,
            "unit": "ns",
            "range": "± 7274.7751368653335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4404763.2,
            "unit": "ns",
            "range": "± 52583.05421113753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4019364,
            "unit": "ns",
            "range": "± 57966.81591005323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19123.63953488372,
            "unit": "ns",
            "range": "± 1148.8028235340394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90782.33333333333,
            "unit": "ns",
            "range": "± 7819.6975855735345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77556.8717948718,
            "unit": "ns",
            "range": "± 3984.5274919366952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95269.98850574713,
            "unit": "ns",
            "range": "± 8547.681354986156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5436.688172043011,
            "unit": "ns",
            "range": "± 702.6922756905047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21028.061224489797,
            "unit": "ns",
            "range": "± 2236.2507320108593"
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
          "id": "1803c0d627f1df34a924019cb1127718164e8de8",
          "message": "Code readability",
          "timestamp": "2023-06-12T23:48:09+09:00",
          "tree_id": "b48d076401b6c7b3a69f0a8aac48034c4c960382",
          "url": "https://github.com/greymistcube/libplanet/commit/1803c0d627f1df34a924019cb1127718164e8de8"
        },
        "date": 1686582029833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374974.8522727273,
            "unit": "ns",
            "range": "± 73188.02326138451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2710760,
            "unit": "ns",
            "range": "± 115940.76194847515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224801.536585366,
            "unit": "ns",
            "range": "± 114167.08953262537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5386364.090909091,
            "unit": "ns",
            "range": "± 166240.547377017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3133249.466666667,
            "unit": "ns",
            "range": "± 28258.480314681434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3365532.6744186045,
            "unit": "ns",
            "range": "± 116476.73679542418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4268634.52631579,
            "unit": "ns",
            "range": "± 92236.87932369714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4322873.411764706,
            "unit": "ns",
            "range": "± 137007.05356761694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6723881.181818182,
            "unit": "ns",
            "range": "± 151647.0984042938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7610045.066666666,
            "unit": "ns",
            "range": "± 33930.47544710605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19556439.533333335,
            "unit": "ns",
            "range": "± 121631.45907903613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50153852.53333333,
            "unit": "ns",
            "range": "± 372600.459770989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98775887,
            "unit": "ns",
            "range": "± 481148.2818340487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197844896.66666666,
            "unit": "ns",
            "range": "± 1500683.7763516654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6380815.447916667,
            "unit": "ns",
            "range": "± 5902.9411290929065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1943534.540950521,
            "unit": "ns",
            "range": "± 4077.823690552312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354908.1537388393,
            "unit": "ns",
            "range": "± 384.0841726523039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643461.61640625,
            "unit": "ns",
            "range": "± 8891.529714321145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816070.6264322917,
            "unit": "ns",
            "range": "± 570.5908352211972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729938.1492838542,
            "unit": "ns",
            "range": "± 542.7663180236327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46099.692307692305,
            "unit": "ns",
            "range": "± 2385.430932822146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275921.6923076923,
            "unit": "ns",
            "range": "± 4285.079839485984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263971.93333333335,
            "unit": "ns",
            "range": "± 7627.011060667228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224362.35714285713,
            "unit": "ns",
            "range": "± 3139.909543213059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4163123.7333333334,
            "unit": "ns",
            "range": "± 38393.500045983725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3820714.5,
            "unit": "ns",
            "range": "± 47266.50965901918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16660.957894736843,
            "unit": "ns",
            "range": "± 1324.7569099833795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85449.63829787234,
            "unit": "ns",
            "range": "± 5716.014309656242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69349.83333333333,
            "unit": "ns",
            "range": "± 1081.553961015462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82482.23469387754,
            "unit": "ns",
            "range": "± 11152.396678113651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4424.4795918367345,
            "unit": "ns",
            "range": "± 493.3179738166383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15935.053191489362,
            "unit": "ns",
            "range": "± 1143.8790105114394"
          }
        ]
      }
    ]
  }
}