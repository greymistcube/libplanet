window.BENCHMARK_DATA = {
  "lastUpdate": 1690449838119,
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
          "distinct": true,
          "id": "304d797548b429563ae66433248c1e59c5d4feef",
          "message": "Merge pull request #3335 from greymistcube/bump/bencodex-to-0.12.0\n\n⬆️ Bump bencodex to 0.12.0",
          "timestamp": "2023-07-27T18:04:18+09:00",
          "tree_id": "6b63e87d2f53702d72a622bb2968f235482b384b",
          "url": "https://github.com/greymistcube/libplanet/commit/304d797548b429563ae66433248c1e59c5d4feef"
        },
        "date": 1690449531824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277461.88636363635,
            "unit": "ns",
            "range": "± 8227.280070526316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271850.5,
            "unit": "ns",
            "range": "± 8132.566963717842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233250.58333333334,
            "unit": "ns",
            "range": "± 3441.6447299176157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4227576.466666667,
            "unit": "ns",
            "range": "± 38928.326755474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3891530.4285714286,
            "unit": "ns",
            "range": "± 18441.557525221233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18007.684782608696,
            "unit": "ns",
            "range": "± 1818.136873492999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88057.28571428571,
            "unit": "ns",
            "range": "± 5979.4691796264915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70661.22222222222,
            "unit": "ns",
            "range": "± 1504.9161616498016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86499.14583333333,
            "unit": "ns",
            "range": "± 10667.757001928427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4288.421052631579,
            "unit": "ns",
            "range": "± 531.3297565451887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17554.239583333332,
            "unit": "ns",
            "range": "± 1787.9243522487282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1335510.1235955057,
            "unit": "ns",
            "range": "± 70474.93454458893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572158.2592592593,
            "unit": "ns",
            "range": "± 71613.38778822799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1769750.7789473685,
            "unit": "ns",
            "range": "± 110356.30463158856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4638479.681818182,
            "unit": "ns",
            "range": "± 111127.33220709191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6208684.490625,
            "unit": "ns",
            "range": "± 21847.06068014925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906464.9809194712,
            "unit": "ns",
            "range": "± 1952.987889386618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360519.168359375,
            "unit": "ns",
            "range": "± 495.05393089360683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583764.072135417,
            "unit": "ns",
            "range": "± 6150.256715470301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820831.3946814904,
            "unit": "ns",
            "range": "± 465.4651211399987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736302.28828125,
            "unit": "ns",
            "range": "± 2053.2138394531785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3216732.375,
            "unit": "ns",
            "range": "± 55181.80781365661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3397447.3214285714,
            "unit": "ns",
            "range": "± 88918.5940043345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4237202.933333334,
            "unit": "ns",
            "range": "± 44397.80855027269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3823861.5588235296,
            "unit": "ns",
            "range": "± 119808.18390273758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6417904.689655173,
            "unit": "ns",
            "range": "± 186456.2984920717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7713438.333333333,
            "unit": "ns",
            "range": "± 65272.51554791175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19274524.57142857,
            "unit": "ns",
            "range": "± 69816.47710160633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49796555.46666667,
            "unit": "ns",
            "range": "± 317370.61632056494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100090072.53333333,
            "unit": "ns",
            "range": "± 592604.3563188883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197980019.4,
            "unit": "ns",
            "range": "± 1307103.9538655567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47096.23376623377,
            "unit": "ns",
            "range": "± 2404.82004412686"
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
          "id": "fe7156de79ebc0c3b1cdbb14c5f1f06769734d1c",
          "message": "Release 3.1.0",
          "timestamp": "2023-07-27T18:06:34+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/greymistcube/libplanet/commit/fe7156de79ebc0c3b1cdbb14c5f1f06769734d1c"
        },
        "date": 1690449828782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351237.5869565217,
            "unit": "ns",
            "range": "± 13189.197626300238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333943.71794871794,
            "unit": "ns",
            "range": "± 10742.761099918984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310298.7346938776,
            "unit": "ns",
            "range": "± 18268.153526536094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5418307.2,
            "unit": "ns",
            "range": "± 99542.98454307496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4971952.904761905,
            "unit": "ns",
            "range": "± 113893.39566493958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27141.115789473683,
            "unit": "ns",
            "range": "± 2754.321431910218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123787.3,
            "unit": "ns",
            "range": "± 9794.193688614749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102337.04210526316,
            "unit": "ns",
            "range": "± 7180.332687894522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114637.41111111111,
            "unit": "ns",
            "range": "± 11803.168665106577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7208.372340425532,
            "unit": "ns",
            "range": "± 806.9076639563243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26347.147368421054,
            "unit": "ns",
            "range": "± 2351.9391454731467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1816677.357142857,
            "unit": "ns",
            "range": "± 93914.84431181195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3431977.425531915,
            "unit": "ns",
            "range": "± 131893.15803211532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279269.149253731,
            "unit": "ns",
            "range": "± 107658.4353833433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6352859.406593407,
            "unit": "ns",
            "range": "± 354328.2288904198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7377713.1796875,
            "unit": "ns",
            "range": "± 79951.75086063641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2328238.4252604167,
            "unit": "ns",
            "range": "± 24837.503730921802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1654695.4591238839,
            "unit": "ns",
            "range": "± 5943.176002720173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151846.9795572916,
            "unit": "ns",
            "range": "± 17453.157651265235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019765.0971354167,
            "unit": "ns",
            "range": "± 2088.8101967050393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 921818.0173828125,
            "unit": "ns",
            "range": "± 6150.156419200973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4320591.266666667,
            "unit": "ns",
            "range": "± 76076.99171278176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4647133.5,
            "unit": "ns",
            "range": "± 101804.55235013082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5605435.3125,
            "unit": "ns",
            "range": "± 105991.96041506718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5021645.424242424,
            "unit": "ns",
            "range": "± 156263.9511061793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8064348.315789473,
            "unit": "ns",
            "range": "± 173014.26099796663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10102832.260869564,
            "unit": "ns",
            "range": "± 254674.33819188442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26347249.866666667,
            "unit": "ns",
            "range": "± 299829.6757212732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67533130.53333333,
            "unit": "ns",
            "range": "± 438823.651759348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136576006.92857143,
            "unit": "ns",
            "range": "± 2405982.6521332343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271383231.8,
            "unit": "ns",
            "range": "± 1516749.5162062475"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61260.032258064515,
            "unit": "ns",
            "range": "± 4270.304503580035"
          }
        ]
      }
    ]
  }
}