window.BENCHMARK_DATA = {
  "lastUpdate": 1681117739003,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "839e4da7af33f2a177ead2dd7db2b0f05158ce4e",
          "message": "Merge pull request #3059 from greymistcube/refactor/block-validate\n\n♻️ Refactor block validate",
          "timestamp": "2023-04-05T15:32:20+09:00",
          "tree_id": "ed2fe2e334a015663806ebf70c79dcaa66638716",
          "url": "https://github.com/greymistcube/libplanet/commit/839e4da7af33f2a177ead2dd7db2b0f05158ce4e"
        },
        "date": 1680684575585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3932678.9081632653,
            "unit": "ns",
            "range": "± 348982.7681295786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4273245.649484536,
            "unit": "ns",
            "range": "± 373603.15637309366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5183853.77,
            "unit": "ns",
            "range": "± 391567.63400673633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5505077.5578947365,
            "unit": "ns",
            "range": "± 440210.72045989946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10099043.030303031,
            "unit": "ns",
            "range": "± 800599.112286561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9736173.516483517,
            "unit": "ns",
            "range": "± 593195.3285235699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25640947.97777778,
            "unit": "ns",
            "range": "± 961166.8350015444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67795284.25,
            "unit": "ns",
            "range": "± 1715769.571084047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134955259.5625,
            "unit": "ns",
            "range": "± 2621957.328474841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270367915.1851852,
            "unit": "ns",
            "range": "± 7518694.978199583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1885816.2424242424,
            "unit": "ns",
            "range": "± 195790.608574782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3670342.170212766,
            "unit": "ns",
            "range": "± 231257.01338687193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2864300.094736842,
            "unit": "ns",
            "range": "± 187361.19213462522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7877741.787878788,
            "unit": "ns",
            "range": "± 562596.5641374743"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77258.88421052632,
            "unit": "ns",
            "range": "± 17059.84951410466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7093288.624441965,
            "unit": "ns",
            "range": "± 104886.01653458405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2280648.3671875,
            "unit": "ns",
            "range": "± 42356.739082662294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1724749.724609375,
            "unit": "ns",
            "range": "± 30124.737960986913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3232104.909895833,
            "unit": "ns",
            "range": "± 36427.05022793873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062051.6807291666,
            "unit": "ns",
            "range": "± 16017.629258642339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962859.5739889706,
            "unit": "ns",
            "range": "± 18786.291225847763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 436873.51,
            "unit": "ns",
            "range": "± 71113.3649866688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370603.35353535356,
            "unit": "ns",
            "range": "± 56859.94369076174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338385.1836734694,
            "unit": "ns",
            "range": "± 41769.36022363389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6618618.762886598,
            "unit": "ns",
            "range": "± 506257.01200880035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5232768.642857143,
            "unit": "ns",
            "range": "± 338395.2853469997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32189.08080808081,
            "unit": "ns",
            "range": "± 11437.60982565919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131995.61458333334,
            "unit": "ns",
            "range": "± 23305.627202287338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105265.9693877551,
            "unit": "ns",
            "range": "± 19763.543228829592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 272873.4583333333,
            "unit": "ns",
            "range": "± 40475.7177160557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6689.073170731707,
            "unit": "ns",
            "range": "± 925.140053200993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33169.15306122449,
            "unit": "ns",
            "range": "± 12248.74168698463"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492",
          "message": "Merge pull request #3073 from dahlia/tx-invoice",
          "timestamp": "2023-04-10T16:32:34+09:00",
          "tree_id": "25188c22e036f85cc08e8040104a7c7e52c27b11",
          "url": "https://github.com/greymistcube/libplanet/commit/9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492"
        },
        "date": 1681117730334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9404077.35,
            "unit": "ns",
            "range": "± 214362.3328894758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25445638.94117647,
            "unit": "ns",
            "range": "± 503785.4247810359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64357685.6,
            "unit": "ns",
            "range": "± 672578.1779293977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130029731.66666667,
            "unit": "ns",
            "range": "± 1306237.1852482376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271112723.5714286,
            "unit": "ns",
            "range": "± 2497582.2643413404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57050.23655913978,
            "unit": "ns",
            "range": "± 3464.0334758331037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1694548.1395348837,
            "unit": "ns",
            "range": "± 91759.5374771874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3283611.102040816,
            "unit": "ns",
            "range": "± 130755.07489326577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2755479.1875,
            "unit": "ns",
            "range": "± 126008.71725033708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6661018.295454546,
            "unit": "ns",
            "range": "± 246204.83161559637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7203947.589583334,
            "unit": "ns",
            "range": "± 28267.636456180513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2229660.249739583,
            "unit": "ns",
            "range": "± 6488.252012162777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1634458.9619791666,
            "unit": "ns",
            "range": "± 4906.373183939409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3084766.700613839,
            "unit": "ns",
            "range": "± 8004.237334010944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992145.0201822916,
            "unit": "ns",
            "range": "± 1109.5694744192974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900896.1990234375,
            "unit": "ns",
            "range": "± 851.0095383801475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408262.8095238095,
            "unit": "ns",
            "range": "± 8582.541095847126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338608.4285714286,
            "unit": "ns",
            "range": "± 9717.1293521575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286082.94736842107,
            "unit": "ns",
            "range": "± 6000.2387866714125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7000606.071428572,
            "unit": "ns",
            "range": "± 67660.53315743493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4860343.95,
            "unit": "ns",
            "range": "± 105969.82383156115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25191.123711340206,
            "unit": "ns",
            "range": "± 2148.24491473918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117577.07142857143,
            "unit": "ns",
            "range": "± 8455.130658881793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100670.17708333333,
            "unit": "ns",
            "range": "± 6161.121767297682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 227298.1530612245,
            "unit": "ns",
            "range": "± 18728.936628767045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8231.673684210526,
            "unit": "ns",
            "range": "± 1082.4533938382874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25212.721649484534,
            "unit": "ns",
            "range": "± 1836.950415216458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4049849.576923077,
            "unit": "ns",
            "range": "± 80433.12738078661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4478150.133333334,
            "unit": "ns",
            "range": "± 78945.88885330316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5040649.652173913,
            "unit": "ns",
            "range": "± 121399.4454797163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5471691.5,
            "unit": "ns",
            "range": "± 84356.06169432594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8777632.772727273,
            "unit": "ns",
            "range": "± 213942.82688716095"
          }
        ]
      }
    ]
  }
}