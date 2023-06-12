window.BENCHMARK_DATA = {
  "lastUpdate": 1681171720931,
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
          "id": "933b67833494517d9b4c5b44fdf28f629cea5eac",
          "message": "[skip changelog] Updated BlockChain<T>.Count description",
          "timestamp": "2023-04-11T08:49:12+09:00",
          "tree_id": "61d4b2cb58a71990004e58c9999d612ced05733b",
          "url": "https://github.com/greymistcube/libplanet/commit/933b67833494517d9b4c5b44fdf28f629cea5eac"
        },
        "date": 1681171557016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10779776.352941176,
            "unit": "ns",
            "range": "± 209876.93804136186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25553428.733333334,
            "unit": "ns",
            "range": "± 418057.2273124931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70301774.06666666,
            "unit": "ns",
            "range": "± 709604.7049934076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138266221.7142857,
            "unit": "ns",
            "range": "± 1390554.9577244017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278105217.8666667,
            "unit": "ns",
            "range": "± 1683850.0128626942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68923.18556701031,
            "unit": "ns",
            "range": "± 7205.402707242637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770299,
            "unit": "ns",
            "range": "± 86244.54922095076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3441121.8210526314,
            "unit": "ns",
            "range": "± 231406.35408509636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2808376.433333333,
            "unit": "ns",
            "range": "± 125363.81030362366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6814393.916666667,
            "unit": "ns",
            "range": "± 92501.11749836846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7070967.862723215,
            "unit": "ns",
            "range": "± 27978.90569824701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2208453.43671875,
            "unit": "ns",
            "range": "± 4834.132439763235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1620001.3165364584,
            "unit": "ns",
            "range": "± 5344.563031876563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3093802.35234375,
            "unit": "ns",
            "range": "± 7080.3018600263695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977264.0147879465,
            "unit": "ns",
            "range": "± 543.3437332419172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 936139.4731820914,
            "unit": "ns",
            "range": "± 459.1367741012667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402815.125,
            "unit": "ns",
            "range": "± 12516.678047257974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335510.55263157893,
            "unit": "ns",
            "range": "± 11415.69408740244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296617.71428571426,
            "unit": "ns",
            "range": "± 12592.928183871925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6926095.333333333,
            "unit": "ns",
            "range": "± 84602.15457883416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5074553.066666666,
            "unit": "ns",
            "range": "± 73709.68275554989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26511.65625,
            "unit": "ns",
            "range": "± 2212.7058349837316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119708.23711340207,
            "unit": "ns",
            "range": "± 10166.708090188695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108873.6875,
            "unit": "ns",
            "range": "± 8510.392784939328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 234416.02173913043,
            "unit": "ns",
            "range": "± 16210.3325941422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9195.90625,
            "unit": "ns",
            "range": "± 1460.0086450942679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27137.063157894736,
            "unit": "ns",
            "range": "± 2393.4101052972214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4334108.866666666,
            "unit": "ns",
            "range": "± 68636.93048400887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4451836.375,
            "unit": "ns",
            "range": "± 85364.74612147179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5167888.041666667,
            "unit": "ns",
            "range": "± 131398.91064914042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5495120.142857143,
            "unit": "ns",
            "range": "± 153031.46228743513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9089131.285714285,
            "unit": "ns",
            "range": "± 127374.55025265423"
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
          "id": "610a906bda27f7a618e63d50ab8551c99e390adc",
          "message": "[skip changelog] Updated BlockChain<T>.Count description",
          "timestamp": "2023-04-11T08:50:26+09:00",
          "tree_id": "e2b21b61850aefe125b79bff5a1a8fbed3c50ce0",
          "url": "https://github.com/greymistcube/libplanet/commit/610a906bda27f7a618e63d50ab8551c99e390adc"
        },
        "date": 1681171712327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9735924.31632653,
            "unit": "ns",
            "range": "± 590839.579449231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26191617.185185187,
            "unit": "ns",
            "range": "± 1368709.1301960594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65753631.85074627,
            "unit": "ns",
            "range": "± 3045786.0681891264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130947952.44444445,
            "unit": "ns",
            "range": "± 4273686.365815379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263429593.48387095,
            "unit": "ns",
            "range": "± 7810573.397272056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64300.1030927835,
            "unit": "ns",
            "range": "± 10689.149058434345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742538.9789473685,
            "unit": "ns",
            "range": "± 159309.23439035824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3437632.340425532,
            "unit": "ns",
            "range": "± 235521.3731731055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2776423.5425531915,
            "unit": "ns",
            "range": "± 171920.0273326447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7658301.936170213,
            "unit": "ns",
            "range": "± 516614.0059652451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7293744.466666667,
            "unit": "ns",
            "range": "± 119181.0876158785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2259184.7552083335,
            "unit": "ns",
            "range": "± 36629.01580423505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1670643.7289341518,
            "unit": "ns",
            "range": "± 22690.087065369073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3202258.52421875,
            "unit": "ns",
            "range": "± 50398.72849027489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1092485.3065104166,
            "unit": "ns",
            "range": "± 19608.961372814763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1014273.8158854167,
            "unit": "ns",
            "range": "± 13935.182433523636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 434200.4318181818,
            "unit": "ns",
            "range": "± 24927.688727249744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346682.83157894737,
            "unit": "ns",
            "range": "± 21368.535300441778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288195.65263157897,
            "unit": "ns",
            "range": "± 19092.867870673268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6847986.957446809,
            "unit": "ns",
            "range": "± 266403.60190238303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5074757.369047619,
            "unit": "ns",
            "range": "± 271474.9197598577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24513.322916666668,
            "unit": "ns",
            "range": "± 6944.641739832747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110298.47422680413,
            "unit": "ns",
            "range": "± 13973.151147150009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104632.31958762887,
            "unit": "ns",
            "range": "± 15300.65421704956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 245162.6494845361,
            "unit": "ns",
            "range": "± 23603.058498424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9534.42,
            "unit": "ns",
            "range": "± 5099.117143192534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23406.9587628866,
            "unit": "ns",
            "range": "± 6491.5863654386085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3993558.28125,
            "unit": "ns",
            "range": "± 302227.64743399713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4589615.107526882,
            "unit": "ns",
            "range": "± 273450.28034009266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5545568,
            "unit": "ns",
            "range": "± 293575.9168163509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5273622.168539326,
            "unit": "ns",
            "range": "± 291621.871586666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9588672.7875,
            "unit": "ns",
            "range": "± 497632.1130916066"
          }
        ]
      }
    ]
  }
}