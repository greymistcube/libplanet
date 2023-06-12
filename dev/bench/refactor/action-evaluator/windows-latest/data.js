window.BENCHMARK_DATA = {
  "lastUpdate": 1686536896760,
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
          "id": "f28a269cff6f1064e1e13d1a7630c2c05652dc1c",
          "message": "Remove null getters",
          "timestamp": "2023-06-09T20:20:20+09:00",
          "tree_id": "62330eb54892a69fe99510199b799e3ce891914e",
          "url": "https://github.com/greymistcube/libplanet/commit/f28a269cff6f1064e1e13d1a7630c2c05652dc1c"
        },
        "date": 1686310681577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316278,
            "unit": "ns",
            "range": "± 119167.35840443434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469294.6666666665,
            "unit": "ns",
            "range": "± 123981.22775660852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2061577.1739130435,
            "unit": "ns",
            "range": "± 115575.89590828354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5380817.777777778,
            "unit": "ns",
            "range": "± 297872.686241101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47091.11111111111,
            "unit": "ns",
            "range": "± 2560.7076113179487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6738930.769230769,
            "unit": "ns",
            "range": "± 44393.68169412146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18954986.666666668,
            "unit": "ns",
            "range": "± 341571.24307417637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47071058.823529415,
            "unit": "ns",
            "range": "± 911846.9403214167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94148233.33333333,
            "unit": "ns",
            "range": "± 1982952.6606582832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186101461.9047619,
            "unit": "ns",
            "range": "± 4365009.689161777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4696585.481770833,
            "unit": "ns",
            "range": "± 14660.351800429904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504580.7942708333,
            "unit": "ns",
            "range": "± 8949.029874981641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143844.4401041667,
            "unit": "ns",
            "range": "± 7263.819895828632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612133.3984375,
            "unit": "ns",
            "range": "± 9843.674456732524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830538.9573317308,
            "unit": "ns",
            "range": "± 3451.3509004734665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760198.90625,
            "unit": "ns",
            "range": "± 2164.171358358007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2912993.023255814,
            "unit": "ns",
            "range": "± 96760.62854219374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3111456.4516129033,
            "unit": "ns",
            "range": "± 141086.22711761948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3861688.709677419,
            "unit": "ns",
            "range": "± 173659.15750455842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3884240.860215054,
            "unit": "ns",
            "range": "± 219853.60209870047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6375418.181818182,
            "unit": "ns",
            "range": "± 200559.3295239364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255192.3076923077,
            "unit": "ns",
            "range": "± 10444.265640350888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251703.8961038961,
            "unit": "ns",
            "range": "± 12854.964651821872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219903.26086956522,
            "unit": "ns",
            "range": "± 12403.326840908772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3891664.5161290322,
            "unit": "ns",
            "range": "± 115767.49845671163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3514333.3333333335,
            "unit": "ns",
            "range": "± 65141.42490071305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19261.855670103094,
            "unit": "ns",
            "range": "± 2270.941586057472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83046.73913043478,
            "unit": "ns",
            "range": "± 6144.92466511921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71176,
            "unit": "ns",
            "range": "± 1880"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93334.94623655915,
            "unit": "ns",
            "range": "± 12578.068786552727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5334.693877551021,
            "unit": "ns",
            "range": "± 905.0946343203739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18280.208333333332,
            "unit": "ns",
            "range": "± 2653.046701105281"
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
          "id": "f093145991322c716962ed3426f05a34016400bb",
          "message": "Changelog",
          "timestamp": "2023-06-09T20:27:12+09:00",
          "tree_id": "49ab16f949a88086deb57f05377c77ae2eb27f63",
          "url": "https://github.com/greymistcube/libplanet/commit/f093145991322c716962ed3426f05a34016400bb"
        },
        "date": 1686310904144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355993.298969072,
            "unit": "ns",
            "range": "± 118208.87137747643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2453675.6756756757,
            "unit": "ns",
            "range": "± 80945.54206860796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2165171.1340206186,
            "unit": "ns",
            "range": "± 169008.72324550466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5140064.912280702,
            "unit": "ns",
            "range": "± 213209.1850835935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42123.28767123288,
            "unit": "ns",
            "range": "± 2036.5766856790458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6729160,
            "unit": "ns",
            "range": "± 46916.06182474033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17729426.666666668,
            "unit": "ns",
            "range": "± 69248.46018573438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45566850,
            "unit": "ns",
            "range": "± 114967.73962223556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90185676.66666667,
            "unit": "ns",
            "range": "± 476808.9291869238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180854907.14285713,
            "unit": "ns",
            "range": "± 2749164.8607319854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4901659.375,
            "unit": "ns",
            "range": "± 14946.975791433859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512571.861049107,
            "unit": "ns",
            "range": "± 6667.218913468782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143278.4705528845,
            "unit": "ns",
            "range": "± 2535.246234541853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2697143.8932291665,
            "unit": "ns",
            "range": "± 21783.997965835988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808109.4801682692,
            "unit": "ns",
            "range": "± 3412.5837554391574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746490.6700721154,
            "unit": "ns",
            "range": "± 928.5375820033706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3028779.1666666665,
            "unit": "ns",
            "range": "± 67962.45753397953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3102758.064516129,
            "unit": "ns",
            "range": "± 66681.84547632911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4074300,
            "unit": "ns",
            "range": "± 106596.64628870835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4024993.75,
            "unit": "ns",
            "range": "± 108314.54773021028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6448558.064516129,
            "unit": "ns",
            "range": "± 190876.6508755389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259098.03921568627,
            "unit": "ns",
            "range": "± 9415.593240918564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242980,
            "unit": "ns",
            "range": "± 8961.820251613075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218252.8735632184,
            "unit": "ns",
            "range": "± 11473.47638038575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3841207.1428571427,
            "unit": "ns",
            "range": "± 47114.140687772844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525528.5714285714,
            "unit": "ns",
            "range": "± 33732.98838665951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18609.090909090908,
            "unit": "ns",
            "range": "± 1482.9015021921593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85363.54166666667,
            "unit": "ns",
            "range": "± 6618.619983233374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67382.79569892473,
            "unit": "ns",
            "range": "± 4301.63325038884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83828.42105263157,
            "unit": "ns",
            "range": "± 12904.350768519853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4595.833333333333,
            "unit": "ns",
            "range": "± 690.8296563083319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16941.489361702126,
            "unit": "ns",
            "range": "± 1990.5372687204776"
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
          "id": "6ec9b2b335398ce6efa28e284ec5a2f2f802d406",
          "message": "Cleanup",
          "timestamp": "2023-06-12T11:09:41+09:00",
          "tree_id": "0e946c993f13e08624bcfdeb01f94132442c9a85",
          "url": "https://github.com/greymistcube/libplanet/commit/6ec9b2b335398ce6efa28e284ec5a2f2f802d406"
        },
        "date": 1686536876086,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464467.0103092783,
            "unit": "ns",
            "range": "± 116382.53978587301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2759019.4444444445,
            "unit": "ns",
            "range": "± 91380.175466312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2324969.0721649486,
            "unit": "ns",
            "range": "± 144652.84114102917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5578097.560975609,
            "unit": "ns",
            "range": "± 198631.0090189909"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54768.75,
            "unit": "ns",
            "range": "± 5463.376871688906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8500000,
            "unit": "ns",
            "range": "± 65217.12454051722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21570306.666666668,
            "unit": "ns",
            "range": "± 361354.2710943033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53092906.666666664,
            "unit": "ns",
            "range": "± 406185.72716477985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107709813.33333333,
            "unit": "ns",
            "range": "± 695941.0554541718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215347626.66666666,
            "unit": "ns",
            "range": "± 1397382.9741273336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5036401.502403846,
            "unit": "ns",
            "range": "± 53301.51651927886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1594209.9479166667,
            "unit": "ns",
            "range": "± 4490.860355362203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256224.296875,
            "unit": "ns",
            "range": "± 4417.710536714192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2691179.3229166665,
            "unit": "ns",
            "range": "± 5274.8203181728395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840052.36328125,
            "unit": "ns",
            "range": "± 2343.752068858369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783310.8984375,
            "unit": "ns",
            "range": "± 2569.2803435184455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3564711.111111111,
            "unit": "ns",
            "range": "± 98706.29445026575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3743495,
            "unit": "ns",
            "range": "± 82782.68618243157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457060,
            "unit": "ns",
            "range": "± 53896.88302675768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4546773.333333333,
            "unit": "ns",
            "range": "± 130527.4919736051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7054142.105263158,
            "unit": "ns",
            "range": "± 154455.2625476224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283888.23529411765,
            "unit": "ns",
            "range": "± 11603.079712883533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270975.43859649124,
            "unit": "ns",
            "range": "± 11775.068709258958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266742.22222222225,
            "unit": "ns",
            "range": "± 14830.661965404135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4336353.333333333,
            "unit": "ns",
            "range": "± 42408.25166785127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961785.714285714,
            "unit": "ns",
            "range": "± 52170.399168978474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24600.515463917527,
            "unit": "ns",
            "range": "± 2596.677513001799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105402.06185567011,
            "unit": "ns",
            "range": "± 7860.886551218889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98789,
            "unit": "ns",
            "range": "± 11758.984486834574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111667.01030927835,
            "unit": "ns",
            "range": "± 16928.912162637895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7202.061855670103,
            "unit": "ns",
            "range": "± 1032.7934794207508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24011.827956989247,
            "unit": "ns",
            "range": "± 2615.9148978298535"
          }
        ]
      }
    ]
  }
}