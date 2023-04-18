window.BENCHMARK_DATA = {
  "lastUpdate": 1681822518617,
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
          "id": "b755fdc73e3f970d5d02ebfbd9c7f61e28e70526",
          "message": "Removed unused renderers",
          "timestamp": "2023-04-18T15:38:00+09:00",
          "tree_id": "3bb489379865002ce0123b6b0768d7f297ed0326",
          "url": "https://github.com/greymistcube/libplanet/commit/b755fdc73e3f970d5d02ebfbd9c7f61e28e70526"
        },
        "date": 1681800678557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7625820.533333333,
            "unit": "ns",
            "range": "± 10076.133625458491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19227117.230769232,
            "unit": "ns",
            "range": "± 37091.161818223496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49161252.6,
            "unit": "ns",
            "range": "± 203806.94086974987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98399532.66666667,
            "unit": "ns",
            "range": "± 923147.0840139077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197487110.53333333,
            "unit": "ns",
            "range": "± 1295655.687828856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45270.117647058825,
            "unit": "ns",
            "range": "± 2455.3812108828033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523578.142857143,
            "unit": "ns",
            "range": "± 36201.55404852907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606519.3714285716,
            "unit": "ns",
            "range": "± 84708.26411940389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2186383.569892473,
            "unit": "ns",
            "range": "± 120689.24344224228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5456310.028571429,
            "unit": "ns",
            "range": "± 151120.40946883574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5872256.977120535,
            "unit": "ns",
            "range": "± 21219.862504647255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834329.5608473558,
            "unit": "ns",
            "range": "± 759.3729425108222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334106.50546875,
            "unit": "ns",
            "range": "± 820.2369929492327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571442.57421875,
            "unit": "ns",
            "range": "± 1365.196662047929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804249.5862165178,
            "unit": "ns",
            "range": "± 669.9617114570152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714977.5357421875,
            "unit": "ns",
            "range": "± 728.2738862314702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325038.6666666667,
            "unit": "ns",
            "range": "± 2348.097230963958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267405.64,
            "unit": "ns",
            "range": "± 7002.1292885331195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237436.66666666666,
            "unit": "ns",
            "range": "± 5086.525984228852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5593688.4,
            "unit": "ns",
            "range": "± 38176.53460625856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3991624.923076923,
            "unit": "ns",
            "range": "± 18964.808103702406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17683.177083333332,
            "unit": "ns",
            "range": "± 1599.513893227312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85333.78494623656,
            "unit": "ns",
            "range": "± 4708.87102884467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74683.16279069768,
            "unit": "ns",
            "range": "± 2759.2641956579014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 180150.35714285713,
            "unit": "ns",
            "range": "± 16407.262437273534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5173.164948453608,
            "unit": "ns",
            "range": "± 584.9497072472052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16301.968421052632,
            "unit": "ns",
            "range": "± 1625.941445470452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3184577,
            "unit": "ns",
            "range": "± 58531.43677668315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314916.6842105263,
            "unit": "ns",
            "range": "± 57089.772684054005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4207513.647058823,
            "unit": "ns",
            "range": "± 85437.6807605558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4140646.2916666665,
            "unit": "ns",
            "range": "± 140054.93656980712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7119499.142857143,
            "unit": "ns",
            "range": "± 155941.80912516237"
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
          "id": "6d1ed34be0a2b1ef25a434e1faf2ce21b931c133",
          "message": "Removed unused renderers",
          "timestamp": "2023-04-18T21:35:11+09:00",
          "tree_id": "2309b1715d61ffc5efbf0bb5093b8ab9c26ab025",
          "url": "https://github.com/greymistcube/libplanet/commit/6d1ed34be0a2b1ef25a434e1faf2ce21b931c133"
        },
        "date": 1681822102712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7582661.285714285,
            "unit": "ns",
            "range": "± 14599.676347458852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19110432.333333332,
            "unit": "ns",
            "range": "± 134744.76507279905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48902642.07692308,
            "unit": "ns",
            "range": "± 253548.06189868008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96209841,
            "unit": "ns",
            "range": "± 400766.594646771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191395130.86666667,
            "unit": "ns",
            "range": "± 1259721.3151216574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44463.8313253012,
            "unit": "ns",
            "range": "± 2340.5430463227303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1311666.4742268042,
            "unit": "ns",
            "range": "± 78602.33660027396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2518035.84,
            "unit": "ns",
            "range": "± 62723.29402534595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2125091.2045454546,
            "unit": "ns",
            "range": "± 114062.31958044962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5385211.068965517,
            "unit": "ns",
            "range": "± 156268.5741037642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5871176.966145833,
            "unit": "ns",
            "range": "± 19581.45862244931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1792507.141376202,
            "unit": "ns",
            "range": "± 3224.2175927565218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342201.5252511161,
            "unit": "ns",
            "range": "± 3158.185939008368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2505909.94921875,
            "unit": "ns",
            "range": "± 2703.938319249973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 785617.6625651042,
            "unit": "ns",
            "range": "± 990.2979307930457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727230.8120117188,
            "unit": "ns",
            "range": "± 684.9168350595936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320500,
            "unit": "ns",
            "range": "± 6782.166156750937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257273.1463414634,
            "unit": "ns",
            "range": "± 8849.549190667782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235514.14285714287,
            "unit": "ns",
            "range": "± 2954.9723637167353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5496565.4,
            "unit": "ns",
            "range": "± 33435.05866345342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3748956.1428571427,
            "unit": "ns",
            "range": "± 50445.85390122935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15365.625,
            "unit": "ns",
            "range": "± 1120.0872263966062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80263.86111111111,
            "unit": "ns",
            "range": "± 3974.39794113809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70878.57142857143,
            "unit": "ns",
            "range": "± 917.5037802718781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88741.54639175258,
            "unit": "ns",
            "range": "± 12408.73066720617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4565.474226804124,
            "unit": "ns",
            "range": "± 518.6679070140382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14704.333333333334,
            "unit": "ns",
            "range": "± 864.2529864788905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3160923.466666667,
            "unit": "ns",
            "range": "± 47215.60161016191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3283123.95,
            "unit": "ns",
            "range": "± 45816.430603091445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4098783.9285714286,
            "unit": "ns",
            "range": "± 39216.84570429531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4079332.28,
            "unit": "ns",
            "range": "± 159051.1403354331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6916128.230769231,
            "unit": "ns",
            "range": "± 96114.17287368345"
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
          "id": "eed1ee8ed2c42a90ac4c339cb4652389c8e2f4df",
          "message": "Changelog",
          "timestamp": "2023-04-18T21:38:09+09:00",
          "tree_id": "e6df96d769b0cf5239546fdbafedf159b4e3c3f2",
          "url": "https://github.com/greymistcube/libplanet/commit/eed1ee8ed2c42a90ac4c339cb4652389c8e2f4df"
        },
        "date": 1681822509971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9115167.987341773,
            "unit": "ns",
            "range": "± 472705.82147691643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24063124.90625,
            "unit": "ns",
            "range": "± 1111636.8174863572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62305214.13333333,
            "unit": "ns",
            "range": "± 1146763.40289915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123260495.69565217,
            "unit": "ns",
            "range": "± 3088410.831225568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239365728.36842105,
            "unit": "ns",
            "range": "± 8162146.84256245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54410.608695652176,
            "unit": "ns",
            "range": "± 4827.819442613093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1665774.89,
            "unit": "ns",
            "range": "± 155835.62797266303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3156069.49,
            "unit": "ns",
            "range": "± 261180.86608308234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2608332.5,
            "unit": "ns",
            "range": "± 184671.5026925264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6673530.777777778,
            "unit": "ns",
            "range": "± 252169.5302041041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6601792.813322368,
            "unit": "ns",
            "range": "± 133775.83835900307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2119103.498177083,
            "unit": "ns",
            "range": "± 32754.44028941741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1526029.2877604167,
            "unit": "ns",
            "range": "± 32166.352183133236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2944972.44453125,
            "unit": "ns",
            "range": "± 49116.6302582911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 966823.4387849506,
            "unit": "ns",
            "range": "± 20904.523019964494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850092.8515625,
            "unit": "ns",
            "range": "± 13265.345782161476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374323,
            "unit": "ns",
            "range": "± 34393.57683062466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304674.7083333333,
            "unit": "ns",
            "range": "± 17379.502821255708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268723.34,
            "unit": "ns",
            "range": "± 20240.677225075655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6444341.848101266,
            "unit": "ns",
            "range": "± 331927.82190684584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4619421.041666667,
            "unit": "ns",
            "range": "± 115289.2006667992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20464.537634408603,
            "unit": "ns",
            "range": "± 1947.657922151739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99309.84536082474,
            "unit": "ns",
            "range": "± 8319.136336308453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88625.62105263158,
            "unit": "ns",
            "range": "± 9432.211713713703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118900.60204081633,
            "unit": "ns",
            "range": "± 15983.168690741419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6658.336842105263,
            "unit": "ns",
            "range": "± 966.988851291387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20866.71875,
            "unit": "ns",
            "range": "± 1925.2482858506985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3728607.25,
            "unit": "ns",
            "range": "± 260974.49565148578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3920210.2291666665,
            "unit": "ns",
            "range": "± 279668.76142120914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4838336.108108108,
            "unit": "ns",
            "range": "± 239979.15908287774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4967733.47,
            "unit": "ns",
            "range": "± 345971.3632931755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8479954.11,
            "unit": "ns",
            "range": "± 582860.5217914904"
          }
        ]
      }
    ]
  }
}