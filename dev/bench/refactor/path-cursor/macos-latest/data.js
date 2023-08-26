window.BENCHMARK_DATA = {
  "lastUpdate": 1693039972016,
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
          "id": "cc132b5f96291ccfa235896df2d330a294d911e2",
          "message": "Added tests for Nibbles",
          "timestamp": "2023-08-25T10:07:07+09:00",
          "tree_id": "b06e47738ed0635ac7dc4a7169bbfe7bef373e64",
          "url": "https://github.com/greymistcube/libplanet/commit/cc132b5f96291ccfa235896df2d330a294d911e2"
        },
        "date": 1692927855760,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9691240.471910112,
            "unit": "ns",
            "range": "± 1776126.102665408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20414519.045454547,
            "unit": "ns",
            "range": "± 460720.4923557725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64828441.03092784,
            "unit": "ns",
            "range": "± 19561926.526993416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128077391.47959183,
            "unit": "ns",
            "range": "± 33808856.51838003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270519786.01578945,
            "unit": "ns",
            "range": "± 54967896.63562657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81247.98837209302,
            "unit": "ns",
            "range": "± 8556.089334151487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340616.06666666665,
            "unit": "ns",
            "range": "± 53695.7423625588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329010.78089887643,
            "unit": "ns",
            "range": "± 29586.921840565716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318809.2126436782,
            "unit": "ns",
            "range": "± 22599.825695411408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4262567.133333334,
            "unit": "ns",
            "range": "± 254144.1564177856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3911515.6764705884,
            "unit": "ns",
            "range": "± 286219.24697420397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24305.635416666668,
            "unit": "ns",
            "range": "± 4553.686507989791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124230.32608695653,
            "unit": "ns",
            "range": "± 23332.34238397997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112382.9247311828,
            "unit": "ns",
            "range": "± 10998.241480223847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112398.82795698925,
            "unit": "ns",
            "range": "± 16677.12864819182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7231.163043478261,
            "unit": "ns",
            "range": "± 1040.6769803931986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21421.92391304348,
            "unit": "ns",
            "range": "± 3014.633049430492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1851731.1853932585,
            "unit": "ns",
            "range": "± 383030.29947602755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3384433.7802197803,
            "unit": "ns",
            "range": "± 661762.4178250715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196416.5,
            "unit": "ns",
            "range": "± 253315.95385327275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7200273.221052632,
            "unit": "ns",
            "range": "± 1891169.246597083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470395.3352941177,
            "unit": "ns",
            "range": "± 278056.49521099153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3665766.6363636362,
            "unit": "ns",
            "range": "± 468162.1459365464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4992864.047368421,
            "unit": "ns",
            "range": "± 742420.9310572473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4220614.566666666,
            "unit": "ns",
            "range": "± 467250.5066184916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9375653.458333334,
            "unit": "ns",
            "range": "± 2797234.056681492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6229706.79375,
            "unit": "ns",
            "range": "± 136850.85255829836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1804725.0516927084,
            "unit": "ns",
            "range": "± 17636.170136316334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1057323.9778645833,
            "unit": "ns",
            "range": "± 16210.00740788363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2842737.5061035156,
            "unit": "ns",
            "range": "± 50998.07804323439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801160.8861694336,
            "unit": "ns",
            "range": "± 15163.862237176869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785844.4772786458,
            "unit": "ns",
            "range": "± 5853.325906009974"
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
          "id": "a2fd2a4e159333d8f0029b1d740961f3c626bdfb",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-25T12:44:09+09:00",
          "tree_id": "2472422cfbcf5b4a784b1bd60909baa5f2d8bb88",
          "url": "https://github.com/greymistcube/libplanet/commit/a2fd2a4e159333d8f0029b1d740961f3c626bdfb"
        },
        "date": 1692936555762,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8694933.242105262,
            "unit": "ns",
            "range": "± 580691.6986710434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20876641.743902437,
            "unit": "ns",
            "range": "± 696331.5308862145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57217048.5625,
            "unit": "ns",
            "range": "± 987827.7858089413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 162493429.83673468,
            "unit": "ns",
            "range": "± 46340167.18597495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 309036681.45,
            "unit": "ns",
            "range": "± 67887637.92989872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65648.22631578948,
            "unit": "ns",
            "range": "± 13065.754622694792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343321.70652173914,
            "unit": "ns",
            "range": "± 30399.969107321653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320207.0698924731,
            "unit": "ns",
            "range": "± 27633.322000250322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319409.5970149254,
            "unit": "ns",
            "range": "± 15096.973388287388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4445627.488764045,
            "unit": "ns",
            "range": "± 474965.8153494861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4104584.1785714286,
            "unit": "ns",
            "range": "± 486669.44586216524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27660.579545454544,
            "unit": "ns",
            "range": "± 4625.903417753271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120950.90697674418,
            "unit": "ns",
            "range": "± 15245.244762666089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123146.51136363637,
            "unit": "ns",
            "range": "± 11615.695526445576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111177.45789473684,
            "unit": "ns",
            "range": "± 16057.497848930923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8816.358695652174,
            "unit": "ns",
            "range": "± 1302.732846720138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28259.1404494382,
            "unit": "ns",
            "range": "± 3486.3430118861043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1700872.9892473118,
            "unit": "ns",
            "range": "± 294022.69064295664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3037435.3192771086,
            "unit": "ns",
            "range": "± 227472.23851956328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2188035.9677419355,
            "unit": "ns",
            "range": "± 361680.2237347135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7849749.686813187,
            "unit": "ns",
            "range": "± 2386426.532559592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3777448.6555555556,
            "unit": "ns",
            "range": "± 687803.7069762311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3603015.3882352943,
            "unit": "ns",
            "range": "± 469151.34997699875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4654075.350574712,
            "unit": "ns",
            "range": "± 402376.1464921508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4445132.7441860465,
            "unit": "ns",
            "range": "± 807559.8656204771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10017033.302083334,
            "unit": "ns",
            "range": "± 2963750.1477355943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8180360.568102904,
            "unit": "ns",
            "range": "± 1499163.6347444332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2177417.887768817,
            "unit": "ns",
            "range": "± 367374.5401391962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1120813.8642282197,
            "unit": "ns",
            "range": "± 68856.57692997209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2830502.3257147605,
            "unit": "ns",
            "range": "± 108907.81362844273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801695.9233398438,
            "unit": "ns",
            "range": "± 17835.85229312725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 833412.9692057292,
            "unit": "ns",
            "range": "± 11920.951840318563"
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
          "id": "6acc2e881bbc5f01c32244539464172d961227b4",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-26T17:32:19+09:00",
          "tree_id": "2472422cfbcf5b4a784b1bd60909baa5f2d8bb88",
          "url": "https://github.com/greymistcube/libplanet/commit/6acc2e881bbc5f01c32244539464172d961227b4"
        },
        "date": 1693039953632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8597292.5,
            "unit": "ns",
            "range": "± 141196.21710652276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22497954.717948716,
            "unit": "ns",
            "range": "± 780897.6679772873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54229944.916666664,
            "unit": "ns",
            "range": "± 1403787.750216501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107773480.88095239,
            "unit": "ns",
            "range": "± 2443025.5748436092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219725267.14285713,
            "unit": "ns",
            "range": "± 1656364.2038074099"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75985.02873563218,
            "unit": "ns",
            "range": "± 5451.325667316291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350740.72222222225,
            "unit": "ns",
            "range": "± 25639.874083385435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328662.829787234,
            "unit": "ns",
            "range": "± 28458.419401392526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315623.5430107527,
            "unit": "ns",
            "range": "± 17771.45797517321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4245739.833333333,
            "unit": "ns",
            "range": "± 160788.18410058506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3827387.5,
            "unit": "ns",
            "range": "± 66988.0739545694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24205.209677419356,
            "unit": "ns",
            "range": "± 3259.4212929286446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113964.64606741573,
            "unit": "ns",
            "range": "± 11070.543222434275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117526.4382022472,
            "unit": "ns",
            "range": "± 7242.247290528014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114028.5425531915,
            "unit": "ns",
            "range": "± 13724.554011333037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9484.291666666666,
            "unit": "ns",
            "range": "± 1013.8313772040736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24428.0625,
            "unit": "ns",
            "range": "± 2816.8083163022425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660807,
            "unit": "ns",
            "range": "± 183905.97462195333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3059707.3255813955,
            "unit": "ns",
            "range": "± 202951.56347540265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2135902.4587628865,
            "unit": "ns",
            "range": "± 195294.63102722715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5778969.435483871,
            "unit": "ns",
            "range": "± 263019.54607357585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3489872.279661017,
            "unit": "ns",
            "range": "± 151983.93436116492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3541882.3095238097,
            "unit": "ns",
            "range": "± 189455.3047098397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4655059.102564103,
            "unit": "ns",
            "range": "± 161406.560034264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3959390.6481481483,
            "unit": "ns",
            "range": "± 207900.95795739567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7485015.152173913,
            "unit": "ns",
            "range": "± 284151.21112542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5935344.488405258,
            "unit": "ns",
            "range": "± 271334.3578409067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841387.4607747395,
            "unit": "ns",
            "range": "± 60662.45325377452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1034796.7079564144,
            "unit": "ns",
            "range": "± 22469.836680538556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2955863.232761549,
            "unit": "ns",
            "range": "± 113391.04826233367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845272.2339154412,
            "unit": "ns",
            "range": "± 26842.439710348717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809273.457170759,
            "unit": "ns",
            "range": "± 18435.55458992375"
          }
        ]
      }
    ]
  }
}