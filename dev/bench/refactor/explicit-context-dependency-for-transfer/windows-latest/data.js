window.BENCHMARK_DATA = {
  "lastUpdate": 1687397848111,
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
      }
    ]
  }
}