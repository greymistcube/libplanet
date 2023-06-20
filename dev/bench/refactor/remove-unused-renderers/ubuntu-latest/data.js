window.BENCHMARK_DATA = {
  "lastUpdate": 1681887672777,
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
          "id": "4eafc8191a46f1d934c889f632e5c6d8e7d14339",
          "message": "Changelog",
          "timestamp": "2023-04-19T11:21:10+09:00",
          "tree_id": "e6df96d769b0cf5239546fdbafedf159b4e3c3f2",
          "url": "https://github.com/greymistcube/libplanet/commit/4eafc8191a46f1d934c889f632e5c6d8e7d14339"
        },
        "date": 1681871668147,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8464895.733333332,
            "unit": "ns",
            "range": "± 101424.41032221742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22126090,
            "unit": "ns",
            "range": "± 220582.4072307542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54068260.733333334,
            "unit": "ns",
            "range": "± 387831.89202640485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105081997.92307693,
            "unit": "ns",
            "range": "± 863940.2122482649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215905414.53333333,
            "unit": "ns",
            "range": "± 2243547.7448895173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50316.12857142857,
            "unit": "ns",
            "range": "± 2456.208424342186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1648104.2857142857,
            "unit": "ns",
            "range": "± 23430.611100171343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683121.073170732,
            "unit": "ns",
            "range": "± 96345.01445907573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2324573.55,
            "unit": "ns",
            "range": "± 81874.80567053078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5529878.84375,
            "unit": "ns",
            "range": "± 170337.48503639235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5896376.866629465,
            "unit": "ns",
            "range": "± 19817.675478365796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826328.9568810095,
            "unit": "ns",
            "range": "± 6106.310107856304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341616.6766826923,
            "unit": "ns",
            "range": "± 3830.54617820907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602313.3526041666,
            "unit": "ns",
            "range": "± 4126.884213386715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828262.2511067708,
            "unit": "ns",
            "range": "± 1012.4846696918779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767294.2876953125,
            "unit": "ns",
            "range": "± 354.8264826116488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341273.4285714286,
            "unit": "ns",
            "range": "± 8119.543512854823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280311.38636363635,
            "unit": "ns",
            "range": "± 9744.34746634817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237722.57575757575,
            "unit": "ns",
            "range": "± 7369.938148613864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5848433.466666667,
            "unit": "ns",
            "range": "± 64806.68275160107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3980979.466666667,
            "unit": "ns",
            "range": "± 23803.79923417588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19483.031578947368,
            "unit": "ns",
            "range": "± 1545.7807533056016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95586.55670103093,
            "unit": "ns",
            "range": "± 7136.039310501474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82241.68421052632,
            "unit": "ns",
            "range": "± 5118.047562954347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111841.04081632652,
            "unit": "ns",
            "range": "± 12829.545337436053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6637.635416666667,
            "unit": "ns",
            "range": "± 857.4616163855741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19988.9793814433,
            "unit": "ns",
            "range": "± 1998.615275735623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3387870.6153846155,
            "unit": "ns",
            "range": "± 92325.0086202333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3626094.1627906975,
            "unit": "ns",
            "range": "± 132830.31156399188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4155184.785714286,
            "unit": "ns",
            "range": "± 58959.4302187511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4553342.45,
            "unit": "ns",
            "range": "± 89959.9416632203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7525536.05,
            "unit": "ns",
            "range": "± 152354.35909417676"
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
          "id": "15a9b3451eb9bdcdabb50b434574cb88373f2446",
          "message": "Changelog",
          "timestamp": "2023-04-19T15:48:17+09:00",
          "tree_id": "c4999b1438bd9f8092db160335197f3e2fd3ef91",
          "url": "https://github.com/greymistcube/libplanet/commit/15a9b3451eb9bdcdabb50b434574cb88373f2446"
        },
        "date": 1681887665105,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7581097.857142857,
            "unit": "ns",
            "range": "± 36356.76420580472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19403376.333333332,
            "unit": "ns",
            "range": "± 116836.243705616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51116632.76923077,
            "unit": "ns",
            "range": "± 179686.3251911294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98513177.66666667,
            "unit": "ns",
            "range": "± 946783.7527959491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195534630.06666666,
            "unit": "ns",
            "range": "± 1473379.4017201439"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45168.241758241755,
            "unit": "ns",
            "range": "± 2454.0905278088903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363932.66,
            "unit": "ns",
            "range": "± 112406.76565336673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2601499.625,
            "unit": "ns",
            "range": "± 69682.8595815911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2156285.0659340657,
            "unit": "ns",
            "range": "± 113902.60446078992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5411518.133333334,
            "unit": "ns",
            "range": "± 101193.02539621045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5933692.180208334,
            "unit": "ns",
            "range": "± 20570.451993303323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833122.1095145089,
            "unit": "ns",
            "range": "± 1279.8444853129483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355272.4037388393,
            "unit": "ns",
            "range": "± 1327.3937190437296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556759.521614583,
            "unit": "ns",
            "range": "± 1706.5533619119874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823093.8442708333,
            "unit": "ns",
            "range": "± 8178.030551459425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725219.89453125,
            "unit": "ns",
            "range": "± 481.40590174808136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324238.0465116279,
            "unit": "ns",
            "range": "± 11918.996833693458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268275.9,
            "unit": "ns",
            "range": "± 5662.289855749731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238946.33333333334,
            "unit": "ns",
            "range": "± 6004.726722715427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5561275.133333334,
            "unit": "ns",
            "range": "± 37375.37860461209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3801718.714285714,
            "unit": "ns",
            "range": "± 34492.896676603676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16622.96875,
            "unit": "ns",
            "range": "± 1469.788237186246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83403.36458333333,
            "unit": "ns",
            "range": "± 5083.100521117508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72450.25,
            "unit": "ns",
            "range": "± 999.853422590865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93330.91836734694,
            "unit": "ns",
            "range": "± 11641.003848088254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5273.677419354839,
            "unit": "ns",
            "range": "± 608.346514551683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16629.229166666668,
            "unit": "ns",
            "range": "± 1743.5764483211947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3117868.296296296,
            "unit": "ns",
            "range": "± 70894.93371061087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3335324.3684210526,
            "unit": "ns",
            "range": "± 73654.90823292884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4175204.033333333,
            "unit": "ns",
            "range": "± 111856.89005876902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4232144.266666667,
            "unit": "ns",
            "range": "± 125253.65023352807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7156179.888888889,
            "unit": "ns",
            "range": "± 121325.91796037689"
          }
        ]
      }
    ]
  }
}