window.BENCHMARK_DATA = {
  "lastUpdate": 1696575410094,
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
          "id": "a7262433136bc8624a3b123bb7834f73ccd77f45",
          "message": "Remove more",
          "timestamp": "2023-10-06T14:17:58+09:00",
          "tree_id": "57f5b62f0971a37b87bbbfbace9bff439ab8d517",
          "url": "https://github.com/greymistcube/libplanet/commit/a7262433136bc8624a3b123bb7834f73ccd77f45"
        },
        "date": 1696570805999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53612.550561797754,
            "unit": "ns",
            "range": "± 3516.3049595331145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8458715.666666666,
            "unit": "ns",
            "range": "± 143042.0616929893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23245208.933333334,
            "unit": "ns",
            "range": "± 236156.16864828684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58423782.15384615,
            "unit": "ns",
            "range": "± 211031.0276751763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116373572.86666666,
            "unit": "ns",
            "range": "± 443392.9031054361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232265634.2142857,
            "unit": "ns",
            "range": "± 968527.0607395524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296743.94680851063,
            "unit": "ns",
            "range": "± 11528.19616495839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278893.4375,
            "unit": "ns",
            "range": "± 9826.13606859603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259532.56578947368,
            "unit": "ns",
            "range": "± 13118.58712548525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4656544.133333334,
            "unit": "ns",
            "range": "± 48738.10879862561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4257830.666666667,
            "unit": "ns",
            "range": "± 49915.79458114102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30154.225806451614,
            "unit": "ns",
            "range": "± 2302.1322400399017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107953.82291666667,
            "unit": "ns",
            "range": "± 8912.80002432314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83600.26804123711,
            "unit": "ns",
            "range": "± 6579.374318839558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91614.67010309278,
            "unit": "ns",
            "range": "± 9531.142540073623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6243.833333333333,
            "unit": "ns",
            "range": "± 1003.7160288979483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19997.147368421054,
            "unit": "ns",
            "range": "± 2127.0523404238493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483892.9655172413,
            "unit": "ns",
            "range": "± 80889.12925949482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861238.871794872,
            "unit": "ns",
            "range": "± 99232.36088096185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255185.5555555555,
            "unit": "ns",
            "range": "± 123822.04647918977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9600137.710144928,
            "unit": "ns",
            "range": "± 459032.2627980553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5112120.208333333,
            "unit": "ns",
            "range": "± 17689.738444704235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590347.5897042411,
            "unit": "ns",
            "range": "± 1924.2264574709977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089450.7992788462,
            "unit": "ns",
            "range": "± 740.352909144419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619085.061941964,
            "unit": "ns",
            "range": "± 2024.9032198020986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824466.9777994792,
            "unit": "ns",
            "range": "± 1719.2971761246451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771449.4440354567,
            "unit": "ns",
            "range": "± 758.6103405054245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3762952.8571428573,
            "unit": "ns",
            "range": "± 48075.76664912479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4035919.8947368423,
            "unit": "ns",
            "range": "± 81066.63393358352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4662766.8,
            "unit": "ns",
            "range": "± 123743.07001269473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4615663.552631579,
            "unit": "ns",
            "range": "± 159137.7431205343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10870452.621621622,
            "unit": "ns",
            "range": "± 357425.64415944926"
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
          "id": "696d8b7b6554142aa07f2a9a8eb0088e5a5375b2",
          "message": "Remove unnecessary code",
          "timestamp": "2023-10-06T15:40:27+09:00",
          "tree_id": "b786885bc365a6a510c9b491a85425a6cc814ab1",
          "url": "https://github.com/greymistcube/libplanet/commit/696d8b7b6554142aa07f2a9a8eb0088e5a5375b2"
        },
        "date": 1696575299038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51486.296703296706,
            "unit": "ns",
            "range": "± 3764.2510912073435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7900024.714285715,
            "unit": "ns",
            "range": "± 44991.58414881365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22063992.466666665,
            "unit": "ns",
            "range": "± 272285.92638172174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56388434.05263158,
            "unit": "ns",
            "range": "± 1231714.9595829328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112085124.4,
            "unit": "ns",
            "range": "± 2012738.3947932655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219782176.33333334,
            "unit": "ns",
            "range": "± 3274310.8896028507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279672.45,
            "unit": "ns",
            "range": "± 9822.254023389947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272886.1935483871,
            "unit": "ns",
            "range": "± 8274.926112134799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234192.86363636365,
            "unit": "ns",
            "range": "± 5543.405196356809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4349929.6,
            "unit": "ns",
            "range": "± 71216.55716274332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4093597.4285714286,
            "unit": "ns",
            "range": "± 69012.97464380748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20999.152173913044,
            "unit": "ns",
            "range": "± 2114.8786260592487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89753.90625,
            "unit": "ns",
            "range": "± 6673.686908224955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73726.28787878787,
            "unit": "ns",
            "range": "± 3373.1353265523508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83977.14893617021,
            "unit": "ns",
            "range": "± 10161.035299844021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5621.297872340426,
            "unit": "ns",
            "range": "± 709.5156886697732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20309.744680851065,
            "unit": "ns",
            "range": "± 1765.962803199215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399050.551724138,
            "unit": "ns",
            "range": "± 75959.56177187822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2649882.411764706,
            "unit": "ns",
            "range": "± 85335.53277614752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2079994.7936507936,
            "unit": "ns",
            "range": "± 94314.71109897194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9610393.344086021,
            "unit": "ns",
            "range": "± 619725.578969197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5045262.134486607,
            "unit": "ns",
            "range": "± 34615.50288617776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593358.6251302084,
            "unit": "ns",
            "range": "± 3780.2586358816557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1077479.756138393,
            "unit": "ns",
            "range": "± 2351.0409427331833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646637.1239583334,
            "unit": "ns",
            "range": "± 5293.587908683212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826877.960797991,
            "unit": "ns",
            "range": "± 2113.9539223004263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756789.8787760417,
            "unit": "ns",
            "range": "± 866.0457508459497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3446143.5161290322,
            "unit": "ns",
            "range": "± 103609.32764247016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3765116.1333333333,
            "unit": "ns",
            "range": "± 60663.66453401276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4532251.368421053,
            "unit": "ns",
            "range": "± 95274.70438579786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4341605.974358974,
            "unit": "ns",
            "range": "± 149008.65906726912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10886250.543478262,
            "unit": "ns",
            "range": "± 418491.0917204388"
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
          "id": "4bc58cedb91aad1cea3054870db6ea9944b1bc9a",
          "message": "Changelog",
          "timestamp": "2023-10-06T15:42:32+09:00",
          "tree_id": "983f3967a5ba2a637eee58e9b864e38fff9e71d1",
          "url": "https://github.com/greymistcube/libplanet/commit/4bc58cedb91aad1cea3054870db6ea9944b1bc9a"
        },
        "date": 1696575402651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50933.556818181816,
            "unit": "ns",
            "range": "± 2807.4778260675585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8225382.291666667,
            "unit": "ns",
            "range": "± 213241.06133536517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22380186.733333334,
            "unit": "ns",
            "range": "± 367585.795521354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57155276.46666667,
            "unit": "ns",
            "range": "± 367168.63127001363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114087595,
            "unit": "ns",
            "range": "± 844698.971248084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224925842.1,
            "unit": "ns",
            "range": "± 3510690.1417878917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279116.4375,
            "unit": "ns",
            "range": "± 7731.2095908663105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273190.79069767444,
            "unit": "ns",
            "range": "± 9938.838570065225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241911.11428571428,
            "unit": "ns",
            "range": "± 7833.784070863043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4438271.666666667,
            "unit": "ns",
            "range": "± 63526.40522948668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3987584,
            "unit": "ns",
            "range": "± 63241.043706938115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21266.574468085106,
            "unit": "ns",
            "range": "± 1603.9629516634275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87407.57746478873,
            "unit": "ns",
            "range": "± 4275.6554106174235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73462.15,
            "unit": "ns",
            "range": "± 2610.166931983568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82381.51041666667,
            "unit": "ns",
            "range": "± 7985.564429835142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5615.708333333333,
            "unit": "ns",
            "range": "± 588.9340936528183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19072.62365591398,
            "unit": "ns",
            "range": "± 1548.1803969848695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380979.322580645,
            "unit": "ns",
            "range": "± 73195.58808427941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747777.4736842103,
            "unit": "ns",
            "range": "± 94413.70471457903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2122941.879518072,
            "unit": "ns",
            "range": "± 112201.25015589746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8848562.964285715,
            "unit": "ns",
            "range": "± 251125.30344114287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4996206.5125,
            "unit": "ns",
            "range": "± 15174.985493877313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1603122.4989583334,
            "unit": "ns",
            "range": "± 2531.949202320566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1102560.4764322916,
            "unit": "ns",
            "range": "± 2566.7157889677237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623295.373046875,
            "unit": "ns",
            "range": "± 2311.267745262659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818548.1711774553,
            "unit": "ns",
            "range": "± 310.1894909207484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762902.5853097098,
            "unit": "ns",
            "range": "± 308.6072706059069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3536523.8235294116,
            "unit": "ns",
            "range": "± 72639.47936834632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3808631.466666667,
            "unit": "ns",
            "range": "± 69563.28838225217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457873.933333334,
            "unit": "ns",
            "range": "± 81222.91964311786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4449197.9,
            "unit": "ns",
            "range": "± 178465.71800623107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10847962.45945946,
            "unit": "ns",
            "range": "± 239694.61771034996"
          }
        ]
      }
    ]
  }
}