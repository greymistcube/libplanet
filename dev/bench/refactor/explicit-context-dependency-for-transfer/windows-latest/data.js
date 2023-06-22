window.BENCHMARK_DATA = {
  "lastUpdate": 1687402744406,
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
          "id": "8ef6b82ee106eabe33f4e852e2475ead39de2a92",
          "message": "Deleted implV0",
          "timestamp": "2023-06-21T20:58:34+09:00",
          "tree_id": "cc57646a2cb706c68e67f137d2688c8b7073abdd",
          "url": "https://github.com/greymistcube/libplanet/commit/8ef6b82ee106eabe33f4e852e2475ead39de2a92"
        },
        "date": 1687351469615,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354986.3157894737,
            "unit": "ns",
            "range": "± 112279.12938679504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2503828.5714285714,
            "unit": "ns",
            "range": "± 88446.38912923467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2180192.783505155,
            "unit": "ns",
            "range": "± 139430.19628071866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5064270.37037037,
            "unit": "ns",
            "range": "± 213395.40996074182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42347.5,
            "unit": "ns",
            "range": "± 2222.3818332271862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6890885.714285715,
            "unit": "ns",
            "range": "± 22530.009291638533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17701213.333333332,
            "unit": "ns",
            "range": "± 185958.9235237052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45240760,
            "unit": "ns",
            "range": "± 362565.3355899162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89880507.14285715,
            "unit": "ns",
            "range": "± 358466.3603234151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179837733.33333334,
            "unit": "ns",
            "range": "± 1393074.3845726189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4910780.572916667,
            "unit": "ns",
            "range": "± 8674.453711198908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1606315.5989583333,
            "unit": "ns",
            "range": "± 1929.9627307349492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157409.3033854167,
            "unit": "ns",
            "range": "± 1222.775265529246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586298.5491071427,
            "unit": "ns",
            "range": "± 12685.394270497032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810300.6901041666,
            "unit": "ns",
            "range": "± 2936.2475440017706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742301.07421875,
            "unit": "ns",
            "range": "± 516.1972391810249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3106714.285714286,
            "unit": "ns",
            "range": "± 35001.13420454251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3108927.272727273,
            "unit": "ns",
            "range": "± 57454.364348446004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4036393.3333333335,
            "unit": "ns",
            "range": "± 61652.638301404506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3870418.3098591547,
            "unit": "ns",
            "range": "± 182823.39668173072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6459610.204081632,
            "unit": "ns",
            "range": "± 236043.2916197948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253887.09677419355,
            "unit": "ns",
            "range": "± 6751.875884299804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239092.3076923077,
            "unit": "ns",
            "range": "± 7092.560394911388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219619.19191919192,
            "unit": "ns",
            "range": "± 13489.139068514714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3874971.4285714286,
            "unit": "ns",
            "range": "± 32276.245815708553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3454014.285714286,
            "unit": "ns",
            "range": "± 44141.48331728952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17364.516129032258,
            "unit": "ns",
            "range": "± 1850.1847828569141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75873.23943661971,
            "unit": "ns",
            "range": "± 3665.4743503780896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64423.529411764706,
            "unit": "ns",
            "range": "± 1883.7517084554256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83982.47422680413,
            "unit": "ns",
            "range": "± 12080.269815464926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4257.5268817204305,
            "unit": "ns",
            "range": "± 653.1256885396471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15838.297872340425,
            "unit": "ns",
            "range": "± 1436.700699368284"
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
          "id": "0c7e428bf41b5bdb8791aad1965a0b1fae2445ea",
          "message": "Changelog",
          "timestamp": "2023-06-22T10:14:26+09:00",
          "tree_id": "b61e4d6e3506554bf78247bdfd693240494c1801",
          "url": "https://github.com/greymistcube/libplanet/commit/0c7e428bf41b5bdb8791aad1965a0b1fae2445ea"
        },
        "date": 1687397824370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386644.2105263157,
            "unit": "ns",
            "range": "± 205357.8981254639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2665366.326530612,
            "unit": "ns",
            "range": "± 307906.58710099227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2206465.5913978494,
            "unit": "ns",
            "range": "± 230166.28464175147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5674617.894736842,
            "unit": "ns",
            "range": "± 493206.5677848979"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54672.34042553192,
            "unit": "ns",
            "range": "± 12064.195709595542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6946769.3877551025,
            "unit": "ns",
            "range": "± 507741.5629267833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17323003.06122449,
            "unit": "ns",
            "range": "± 1308594.2414489752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49601580.80808081,
            "unit": "ns",
            "range": "± 3993727.0901179756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92463543.75,
            "unit": "ns",
            "range": "± 5213015.525269162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194462934,
            "unit": "ns",
            "range": "± 15641047.544103723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4733665.685096154,
            "unit": "ns",
            "range": "± 125363.65307224156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569531.5557065217,
            "unit": "ns",
            "range": "± 35229.29584463937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147257.924107143,
            "unit": "ns",
            "range": "± 26465.66369604251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601177.2135416665,
            "unit": "ns",
            "range": "± 98306.75649563341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867429.0498621324,
            "unit": "ns",
            "range": "± 16850.531702401215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770734.3052455357,
            "unit": "ns",
            "range": "± 10612.24370145105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2865013.402061856,
            "unit": "ns",
            "range": "± 268037.70592526795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3046308.3333333335,
            "unit": "ns",
            "range": "± 297120.20026162604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3879973.737373737,
            "unit": "ns",
            "range": "± 356027.88144253666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4030817.3469387754,
            "unit": "ns",
            "range": "± 437257.431081723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6814903,
            "unit": "ns",
            "range": "± 681332.0733925076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268478.26086956525,
            "unit": "ns",
            "range": "± 33174.78131990484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258397.8260869565,
            "unit": "ns",
            "range": "± 36413.882989088765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213591.7525773196,
            "unit": "ns",
            "range": "± 24889.51699554408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3772272.1649484537,
            "unit": "ns",
            "range": "± 339587.7766812372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868795.9183673467,
            "unit": "ns",
            "range": "± 310581.31857387366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22812.121212121212,
            "unit": "ns",
            "range": "± 8893.499950689424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88664.44444444444,
            "unit": "ns",
            "range": "± 14595.738266034603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80881.25,
            "unit": "ns",
            "range": "± 15753.063611815154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99997.87234042553,
            "unit": "ns",
            "range": "± 20803.26162766596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4308.602150537635,
            "unit": "ns",
            "range": "± 782.3676320851056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24768,
            "unit": "ns",
            "range": "± 8842.720912214358"
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
          "id": "ce86eb5eb1e6c075e5c7d83a99d0e603cffd4f75",
          "message": "Changelog",
          "timestamp": "2023-06-22T11:35:55+09:00",
          "tree_id": "b61e4d6e3506554bf78247bdfd693240494c1801",
          "url": "https://github.com/greymistcube/libplanet/commit/ce86eb5eb1e6c075e5c7d83a99d0e603cffd4f75"
        },
        "date": 1687402715435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770670.9677419355,
            "unit": "ns",
            "range": "± 105328.95322320817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3534417.5824175826,
            "unit": "ns",
            "range": "± 243312.43042338546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2888126.923076923,
            "unit": "ns",
            "range": "± 195308.49448268756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7245306.315789473,
            "unit": "ns",
            "range": "± 455897.07517286815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58961.70212765958,
            "unit": "ns",
            "range": "± 11749.64750222095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9075369.696969697,
            "unit": "ns",
            "range": "± 905256.9392228549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25202235.416666668,
            "unit": "ns",
            "range": "± 979120.0881489685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68722327.5,
            "unit": "ns",
            "range": "± 2406006.2821483198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133472807.14285715,
            "unit": "ns",
            "range": "± 2324139.2787154843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266023105.55555555,
            "unit": "ns",
            "range": "± 8691712.877577927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6172951.897321428,
            "unit": "ns",
            "range": "± 56534.42697555394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2054542.6470588236,
            "unit": "ns",
            "range": "± 40653.46146053316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493571.7075892857,
            "unit": "ns",
            "range": "± 35375.45955476921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3268142.96875,
            "unit": "ns",
            "range": "± 73981.37427927679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1100622.7905273438,
            "unit": "ns",
            "range": "± 20820.06335435655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999979.7991071428,
            "unit": "ns",
            "range": "± 8421.745669183008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4004293.4065934066,
            "unit": "ns",
            "range": "± 253225.09740553747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4119301.0416666665,
            "unit": "ns",
            "range": "± 407660.6334982158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5417853.76344086,
            "unit": "ns",
            "range": "± 349272.1558000356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5231549.4845360825,
            "unit": "ns",
            "range": "± 370262.8450179321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8941548.936170213,
            "unit": "ns",
            "range": "± 508951.46941988735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331395.8762886598,
            "unit": "ns",
            "range": "± 36506.30059069078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338112.3711340206,
            "unit": "ns",
            "range": "± 43671.95958156856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280670.4081632653,
            "unit": "ns",
            "range": "± 32746.66571264322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4884712.643678161,
            "unit": "ns",
            "range": "± 350543.2073042005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4497557.575757576,
            "unit": "ns",
            "range": "± 306077.7442558621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25993.617021276597,
            "unit": "ns",
            "range": "± 6446.868182080856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110405.15463917526,
            "unit": "ns",
            "range": "± 17246.04043405097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113482.96703296703,
            "unit": "ns",
            "range": "± 21071.181240658505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138795.9595959596,
            "unit": "ns",
            "range": "± 34968.37031209869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7133.695652173913,
            "unit": "ns",
            "range": "± 1637.022033182127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25777.551020408162,
            "unit": "ns",
            "range": "± 9247.410120713208"
          }
        ]
      }
    ]
  }
}