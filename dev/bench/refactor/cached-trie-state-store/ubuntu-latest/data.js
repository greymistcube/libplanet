window.BENCHMARK_DATA = {
  "lastUpdate": 1700052355538,
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
          "id": "36edcf8fc51a39ee63c4511f91b090c07a38d2e3",
          "message": "Increased cache size; more info for logging",
          "timestamp": "2023-11-15T10:59:12+09:00",
          "tree_id": "018584c062bbc4b3e74bb6135651e788b8e16e58",
          "url": "https://github.com/greymistcube/libplanet/commit/36edcf8fc51a39ee63c4511f91b090c07a38d2e3"
        },
        "date": 1700031332597,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5775070.133333334,
            "unit": "ns",
            "range": "± 18107.92531252019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14998817.642857144,
            "unit": "ns",
            "range": "± 183436.36150766382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37936121.692307696,
            "unit": "ns",
            "range": "± 257757.20499350567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74733584.16666667,
            "unit": "ns",
            "range": "± 245651.0224162552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153688618.30769232,
            "unit": "ns",
            "range": "± 494117.17128554714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970329.5107526882,
            "unit": "ns",
            "range": "± 70818.6556027458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1818570.4523809524,
            "unit": "ns",
            "range": "± 63401.48982676807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1471743.1770833333,
            "unit": "ns",
            "range": "± 105000.65379235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6817128.979166667,
            "unit": "ns",
            "range": "± 437662.7652129333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2342562.706896552,
            "unit": "ns",
            "range": "± 59419.875753812565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2559869.0862068967,
            "unit": "ns",
            "range": "± 73620.22708735752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3203163.095238095,
            "unit": "ns",
            "range": "± 76129.10439109654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3184473.1333333333,
            "unit": "ns",
            "range": "± 48980.58230982482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7563880.078947368,
            "unit": "ns",
            "range": "± 255313.98728448412"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39007.91052631579,
            "unit": "ns",
            "range": "± 4524.115179729897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3611393.539388021,
            "unit": "ns",
            "range": "± 17152.95655361553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1164850.4693509615,
            "unit": "ns",
            "range": "± 9140.766201451797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731922.628530649,
            "unit": "ns",
            "range": "± 1900.4683433860143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911519.7496995192,
            "unit": "ns",
            "range": "± 4589.143004168349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618003.7081542969,
            "unit": "ns",
            "range": "± 14063.72835839372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571185.0559645433,
            "unit": "ns",
            "range": "± 5181.304686050006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201380.328125,
            "unit": "ns",
            "range": "± 9307.769604884359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195449.5,
            "unit": "ns",
            "range": "± 8582.678752663913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162491.65789473685,
            "unit": "ns",
            "range": "± 3378.586493773162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3088559.1428571427,
            "unit": "ns",
            "range": "± 39559.28657258455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2876241.966666667,
            "unit": "ns",
            "range": "± 38234.72342343628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15104.42857142857,
            "unit": "ns",
            "range": "± 1956.4470901342684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59414.46153846154,
            "unit": "ns",
            "range": "± 3956.136755606387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51956.71052631579,
            "unit": "ns",
            "range": "± 1097.7587054715607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59316.9375,
            "unit": "ns",
            "range": "± 8372.6645872619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3404.9333333333334,
            "unit": "ns",
            "range": "± 490.8956913390877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13416.247422680412,
            "unit": "ns",
            "range": "± 2340.638254439231"
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
          "id": "2cb9598b3c4da87ba22bcac76efd64c3b8cea0b1",
          "message": "Cleanup",
          "timestamp": "2023-11-15T16:17:53+09:00",
          "tree_id": "95f237df7f8055061a247e7af3498a539678ae8e",
          "url": "https://github.com/greymistcube/libplanet/commit/2cb9598b3c4da87ba22bcac76efd64c3b8cea0b1"
        },
        "date": 1700033352390,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5689339.4,
            "unit": "ns",
            "range": "± 53963.75894563737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14981454.615384616,
            "unit": "ns",
            "range": "± 145936.21136506778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38295007.115384616,
            "unit": "ns",
            "range": "± 274999.3671112531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78404022.38461539,
            "unit": "ns",
            "range": "± 905877.9406918405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153488531.5,
            "unit": "ns",
            "range": "± 787829.5007211025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1085762.7551020407,
            "unit": "ns",
            "range": "± 100196.83306612361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1986568.3125,
            "unit": "ns",
            "range": "± 76779.75111930762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1627617.2842105264,
            "unit": "ns",
            "range": "± 155617.75964643565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6916263.648148148,
            "unit": "ns",
            "range": "± 360210.1993009467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2519384.862745098,
            "unit": "ns",
            "range": "± 99816.05929268488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2736093.3333333335,
            "unit": "ns",
            "range": "± 63856.180630643204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3235279.56,
            "unit": "ns",
            "range": "± 78822.69692009191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3125914.430232558,
            "unit": "ns",
            "range": "± 113309.6701743449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8005976.566666666,
            "unit": "ns",
            "range": "± 271225.24269032787"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41991.81914893617,
            "unit": "ns",
            "range": "± 5769.477992008856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3627141.0595703125,
            "unit": "ns",
            "range": "± 8774.117026182303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1167976.946126302,
            "unit": "ns",
            "range": "± 5132.6540665309585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730846.1479867789,
            "unit": "ns",
            "range": "± 3466.8364918735374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963764.7220052083,
            "unit": "ns",
            "range": "± 20503.092509036152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623302.205453726,
            "unit": "ns",
            "range": "± 3136.950841986432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571321.3932756697,
            "unit": "ns",
            "range": "± 1769.0582894779152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225603.48484848486,
            "unit": "ns",
            "range": "± 18137.471325657658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212530.78350515463,
            "unit": "ns",
            "range": "± 17136.295204566784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166713.17142857143,
            "unit": "ns",
            "range": "± 5460.84038719809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3224618.210526316,
            "unit": "ns",
            "range": "± 71652.70608333175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2884728.222222222,
            "unit": "ns",
            "range": "± 59815.51616114487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18562.090909090908,
            "unit": "ns",
            "range": "± 4243.803401193055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74449.32291666667,
            "unit": "ns",
            "range": "± 11827.934429712337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68662.12626262626,
            "unit": "ns",
            "range": "± 15726.148838074198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88825.63043478261,
            "unit": "ns",
            "range": "± 7877.800581683814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6112.132653061224,
            "unit": "ns",
            "range": "± 806.0653274509839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15367.788888888888,
            "unit": "ns",
            "range": "± 2917.6971458166486"
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
          "id": "2f672581a1746aaca795d8b7bc847c7c2c0f5fc4",
          "message": "Changelog",
          "timestamp": "2023-11-15T16:23:58+09:00",
          "tree_id": "cd6f6db03c14e8819c3fdf2657dc233041eb38f2",
          "url": "https://github.com/greymistcube/libplanet/commit/2f672581a1746aaca795d8b7bc847c7c2c0f5fc4"
        },
        "date": 1700033707120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5822016,
            "unit": "ns",
            "range": "± 69232.17707301448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15105828.9,
            "unit": "ns",
            "range": "± 116260.93754616933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36695633.21428572,
            "unit": "ns",
            "range": "± 348225.170683519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75964232.15384616,
            "unit": "ns",
            "range": "± 374807.43024715286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151029022.3846154,
            "unit": "ns",
            "range": "± 856996.3942927395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970383.7204301076,
            "unit": "ns",
            "range": "± 105510.70655794026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1878983.5128205128,
            "unit": "ns",
            "range": "± 95024.95474750866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1444682.0449438202,
            "unit": "ns",
            "range": "± 87416.26658940414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6914156.863636363,
            "unit": "ns",
            "range": "± 378665.8330723436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2412411.3333333335,
            "unit": "ns",
            "range": "± 86901.31284952801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2537868.9285714286,
            "unit": "ns",
            "range": "± 40271.87057309412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3112007.757142857,
            "unit": "ns",
            "range": "± 99498.86200334827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3000358.8333333335,
            "unit": "ns",
            "range": "± 134040.55732990196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7527381.916666667,
            "unit": "ns",
            "range": "± 96437.2746960977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37503.651685393255,
            "unit": "ns",
            "range": "± 3112.6424797659815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752435.45234375,
            "unit": "ns",
            "range": "± 59154.845953853284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1181417.5782877605,
            "unit": "ns",
            "range": "± 5460.588011085005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731748.7170222356,
            "unit": "ns",
            "range": "± 1028.325714156507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949583.8946707589,
            "unit": "ns",
            "range": "± 22378.914585912877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624714.7219238281,
            "unit": "ns",
            "range": "± 2434.926290252753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570993.4792480469,
            "unit": "ns",
            "range": "± 2217.5890429907085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198206.28070175438,
            "unit": "ns",
            "range": "± 8602.768951569327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196870.10294117648,
            "unit": "ns",
            "range": "± 9309.81955376007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171542.07692307694,
            "unit": "ns",
            "range": "± 2468.4783592846043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3140636,
            "unit": "ns",
            "range": "± 30141.58055870533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2890989.8,
            "unit": "ns",
            "range": "± 23044.13590792367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15190.123711340206,
            "unit": "ns",
            "range": "± 2240.3807584581286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60822.642105263156,
            "unit": "ns",
            "range": "± 4866.632880539991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84849.76,
            "unit": "ns",
            "range": "± 15132.817952190577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53249.608695652176,
            "unit": "ns",
            "range": "± 7779.894261769832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3301.217391304348,
            "unit": "ns",
            "range": "± 322.75291900645277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13498.448979591836,
            "unit": "ns",
            "range": "± 2596.454271892704"
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
          "id": "316688799b1c0a9e252a0a84717234b9415001c4",
          "message": "Typo",
          "timestamp": "2023-11-15T16:27:27+09:00",
          "tree_id": "e6875f10e551179de674c6806cd3642dddd95e7a",
          "url": "https://github.com/greymistcube/libplanet/commit/316688799b1c0a9e252a0a84717234b9415001c4"
        },
        "date": 1700034060367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7925346.583333333,
            "unit": "ns",
            "range": "± 11389.43517203021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21560396.066666666,
            "unit": "ns",
            "range": "± 350494.0697979001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53118758.35,
            "unit": "ns",
            "range": "± 871967.2994527209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105802588.14285715,
            "unit": "ns",
            "range": "± 1453857.2953035003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211108454.33333334,
            "unit": "ns",
            "range": "± 3254510.2236503083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1321944.0515463918,
            "unit": "ns",
            "range": "± 84592.00671056476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572431.972972973,
            "unit": "ns",
            "range": "± 87139.31386115967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1989212.8958333333,
            "unit": "ns",
            "range": "± 114285.44647287697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10067887.525252525,
            "unit": "ns",
            "range": "± 698261.6069486545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3503123.714285714,
            "unit": "ns",
            "range": "± 81674.72950805706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3486321.1764705884,
            "unit": "ns",
            "range": "± 142262.96105251092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4244487.108108108,
            "unit": "ns",
            "range": "± 143367.18727658398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4110038.638888889,
            "unit": "ns",
            "range": "± 133838.71793599785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11475188.08433735,
            "unit": "ns",
            "range": "± 611689.8273038429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49338.808219178085,
            "unit": "ns",
            "range": "± 2472.6910928150855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4969680.01875,
            "unit": "ns",
            "range": "± 34512.53793223966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582983.6614118305,
            "unit": "ns",
            "range": "± 5141.620247323166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062027.809375,
            "unit": "ns",
            "range": "± 3964.866084335653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590408.584114583,
            "unit": "ns",
            "range": "± 9505.245124773575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820105.6551432292,
            "unit": "ns",
            "range": "± 2709.8994490646483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757561.5939127604,
            "unit": "ns",
            "range": "± 1438.777404984945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271483.77777777775,
            "unit": "ns",
            "range": "± 8832.106537630956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259182.525,
            "unit": "ns",
            "range": "± 9126.614012474303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220877.08333333334,
            "unit": "ns",
            "range": "± 1183.2755352935521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4248383.714285715,
            "unit": "ns",
            "range": "± 100189.29202022683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825528.8571428573,
            "unit": "ns",
            "range": "± 41301.255605531005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18171.604395604394,
            "unit": "ns",
            "range": "± 1307.1522981837772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81255.75824175825,
            "unit": "ns",
            "range": "± 4726.412497493115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69085.15384615384,
            "unit": "ns",
            "range": "± 1109.7049792740595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77893.44897959183,
            "unit": "ns",
            "range": "± 8385.482700848894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4729.494736842105,
            "unit": "ns",
            "range": "± 417.94020934701376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17722.666666666668,
            "unit": "ns",
            "range": "± 1168.9015033943967"
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
          "id": "3c4519f6d162c0f2926f6f14abf229f8de2d8e51",
          "message": "Typo",
          "timestamp": "2023-11-15T16:49:43+09:00",
          "tree_id": "82c1ccaa01b1171d086a8f0aca00ae959936273e",
          "url": "https://github.com/greymistcube/libplanet/commit/3c4519f6d162c0f2926f6f14abf229f8de2d8e51"
        },
        "date": 1700035226210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5490603.466666667,
            "unit": "ns",
            "range": "± 18570.043560479204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14222185.2,
            "unit": "ns",
            "range": "± 181974.4425576609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36709905.5,
            "unit": "ns",
            "range": "± 385958.12824385497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75128533.86666666,
            "unit": "ns",
            "range": "± 801973.2034921177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151179501.35714287,
            "unit": "ns",
            "range": "± 768715.1070174585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988860.8865979381,
            "unit": "ns",
            "range": "± 120360.30542940609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919116.48,
            "unit": "ns",
            "range": "± 76177.64905321706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1492206.7096774194,
            "unit": "ns",
            "range": "± 162042.1706146663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6609132.09375,
            "unit": "ns",
            "range": "± 200738.4956521808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424557.5714285714,
            "unit": "ns",
            "range": "± 34746.533601241405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2522940.6981132077,
            "unit": "ns",
            "range": "± 104143.99791128423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139784.285714286,
            "unit": "ns",
            "range": "± 35401.97377467614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3114707.2236842103,
            "unit": "ns",
            "range": "± 157597.62429669627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7448312.625,
            "unit": "ns",
            "range": "± 141097.47562347338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41328.645833333336,
            "unit": "ns",
            "range": "± 5415.9829840733355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731199.215169271,
            "unit": "ns",
            "range": "± 8307.10800833546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215442.8387920673,
            "unit": "ns",
            "range": "± 1667.80109229465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 785407.8572916667,
            "unit": "ns",
            "range": "± 13401.52232132424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2016616.9285714286,
            "unit": "ns",
            "range": "± 4401.157307673115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616308.9766438802,
            "unit": "ns",
            "range": "± 1071.4628889893359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583115.2003580729,
            "unit": "ns",
            "range": "± 808.8806494582097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202062.9,
            "unit": "ns",
            "range": "± 10562.868881252462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190482.30357142858,
            "unit": "ns",
            "range": "± 7673.032808999779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175744.6595744681,
            "unit": "ns",
            "range": "± 6743.5337635932065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3110382.5,
            "unit": "ns",
            "range": "± 41478.218708043714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848263.3076923075,
            "unit": "ns",
            "range": "± 28351.45440238947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16550.65263157895,
            "unit": "ns",
            "range": "± 2429.389572958698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66981.11111111111,
            "unit": "ns",
            "range": "± 10480.322106057238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52142.98780487805,
            "unit": "ns",
            "range": "± 3342.1551494595997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67858.08421052631,
            "unit": "ns",
            "range": "± 7318.636045555293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3598.926315789474,
            "unit": "ns",
            "range": "± 1276.9567566455278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12275.85393258427,
            "unit": "ns",
            "range": "± 1965.0495746149984"
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
          "id": "23b1be42b36c12727a64a63b85e4d317a2d3f736",
          "message": "Changelog",
          "timestamp": "2023-11-15T17:23:30+09:00",
          "tree_id": "25bdddc3ac7afa6fd129895558155d71c42a27d9",
          "url": "https://github.com/greymistcube/libplanet/commit/23b1be42b36c12727a64a63b85e4d317a2d3f736"
        },
        "date": 1700037286614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5984181.642857143,
            "unit": "ns",
            "range": "± 52265.12806187483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15128868.266666668,
            "unit": "ns",
            "range": "± 133308.740461203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37746082.76923077,
            "unit": "ns",
            "range": "± 253998.7156690475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76689319.23076923,
            "unit": "ns",
            "range": "± 441197.49019517965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150770256.84615386,
            "unit": "ns",
            "range": "± 822535.550036577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973744.8659793815,
            "unit": "ns",
            "range": "± 86764.73485891662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844776.0793650793,
            "unit": "ns",
            "range": "± 84067.34024315338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1474092.412371134,
            "unit": "ns",
            "range": "± 112082.90244899387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6779443.722222222,
            "unit": "ns",
            "range": "± 355158.215135804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2570277.111111111,
            "unit": "ns",
            "range": "± 71193.5066525535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2744527.8620689656,
            "unit": "ns",
            "range": "± 80082.32052025507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3339492.882352941,
            "unit": "ns",
            "range": "± 55350.16095378851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3235369.71875,
            "unit": "ns",
            "range": "± 212953.5422188656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7904126.21875,
            "unit": "ns",
            "range": "± 238341.29180269293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42022.94680851064,
            "unit": "ns",
            "range": "± 5931.769989825467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730239.382254464,
            "unit": "ns",
            "range": "± 42376.42976298114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201456.6524832589,
            "unit": "ns",
            "range": "± 1285.993668500003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769416.9073768029,
            "unit": "ns",
            "range": "± 4812.791599982867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927193.5841346155,
            "unit": "ns",
            "range": "± 4511.575028718666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618557.7769165039,
            "unit": "ns",
            "range": "± 11476.447521567829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562320.0258463542,
            "unit": "ns",
            "range": "± 2132.9910259776884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243999.51063829788,
            "unit": "ns",
            "range": "± 15505.861994877507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225764.68181818182,
            "unit": "ns",
            "range": "± 13086.832332359796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170221.1403508772,
            "unit": "ns",
            "range": "± 7355.743374200376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3177798.6,
            "unit": "ns",
            "range": "± 42730.3785443431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2843700.5714285714,
            "unit": "ns",
            "range": "± 30644.28168696225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13821.897959183674,
            "unit": "ns",
            "range": "± 2393.3182395297736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69236.83516483517,
            "unit": "ns",
            "range": "± 4469.964678616939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53686.33516483517,
            "unit": "ns",
            "range": "± 5158.277600697815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68063.40860215054,
            "unit": "ns",
            "range": "± 8218.24490841614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3026.7555555555555,
            "unit": "ns",
            "range": "± 450.0392070588265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15190.416666666666,
            "unit": "ns",
            "range": "± 2884.2339297296094"
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
          "id": "d57b1205354d9b11d090b28a31c4c81a5958352a",
          "message": "Changelog",
          "timestamp": "2023-11-15T20:43:36+09:00",
          "tree_id": "ad5ef5bf6df2e09d80ee6c2f2112dff99fe5aee8",
          "url": "https://github.com/greymistcube/libplanet/commit/d57b1205354d9b11d090b28a31c4c81a5958352a"
        },
        "date": 1700049646035,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10864800.862068966,
            "unit": "ns",
            "range": "± 315822.3074436822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28129613.717948716,
            "unit": "ns",
            "range": "± 971566.2550314243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68431228.64285715,
            "unit": "ns",
            "range": "± 254672.16531714686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137276641,
            "unit": "ns",
            "range": "± 466569.5030909601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278680907.9230769,
            "unit": "ns",
            "range": "± 777958.1592819823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640197.4146341463,
            "unit": "ns",
            "range": "± 85830.1217816946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3286795.8048780486,
            "unit": "ns",
            "range": "± 116883.45636642071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2527102.8205128205,
            "unit": "ns",
            "range": "± 129324.28363219474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10729119.466666667,
            "unit": "ns",
            "range": "± 194641.3065619007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4370290.62962963,
            "unit": "ns",
            "range": "± 118464.59829389739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4584741.833333333,
            "unit": "ns",
            "range": "± 55418.1762762713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5455606.923076923,
            "unit": "ns",
            "range": "± 80218.04587649582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5479351.392857143,
            "unit": "ns",
            "range": "± 233671.78181649878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12923903.47368421,
            "unit": "ns",
            "range": "± 273856.83411377325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66091.30927835051,
            "unit": "ns",
            "range": "± 8001.394260482596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6244561.313058035,
            "unit": "ns",
            "range": "± 19734.40749138956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945386.0287760417,
            "unit": "ns",
            "range": "± 4921.357540677156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415244.8493088942,
            "unit": "ns",
            "range": "± 3241.7210187775713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3123726.554129464,
            "unit": "ns",
            "range": "± 3283.4962197927953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997119.0356069711,
            "unit": "ns",
            "range": "± 679.9047568196363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908604.0204380581,
            "unit": "ns",
            "range": "± 642.9876424800659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338556.22,
            "unit": "ns",
            "range": "± 12833.715377052105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316872.67346938775,
            "unit": "ns",
            "range": "± 9278.283123751387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300132.85185185185,
            "unit": "ns",
            "range": "± 12534.158552497547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5479775.153846154,
            "unit": "ns",
            "range": "± 63010.817996920385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5090655.5,
            "unit": "ns",
            "range": "± 97480.11058809211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26720.021978021978,
            "unit": "ns",
            "range": "± 1805.5523684089464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109730.39583333333,
            "unit": "ns",
            "range": "± 7248.398347191012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94023.18681318681,
            "unit": "ns",
            "range": "± 6121.651942830262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107931.34375,
            "unit": "ns",
            "range": "± 10534.835370859786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7124.288659793814,
            "unit": "ns",
            "range": "± 938.6264450288837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25622.4,
            "unit": "ns",
            "range": "± 2164.5960774988484"
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
          "id": "3e6989e4f1b333305b4cc195508af2e0b4661d60",
          "message": "Changelog",
          "timestamp": "2023-11-15T21:34:57+09:00",
          "tree_id": "95535608d9a255489106e22a9d814b2f771c7c21",
          "url": "https://github.com/greymistcube/libplanet/commit/3e6989e4f1b333305b4cc195508af2e0b4661d60"
        },
        "date": 1700052349367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5628615.733333333,
            "unit": "ns",
            "range": "± 28430.133388629012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14211519.466666667,
            "unit": "ns",
            "range": "± 82110.60710135069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37366473.571428575,
            "unit": "ns",
            "range": "± 269744.60489927087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73937832.5,
            "unit": "ns",
            "range": "± 398772.44618511637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150478217.92857143,
            "unit": "ns",
            "range": "± 909368.1124409508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995721.1098901099,
            "unit": "ns",
            "range": "± 134918.40655929386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1804903.2241379311,
            "unit": "ns",
            "range": "± 52012.75406907189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1456678.4736842106,
            "unit": "ns",
            "range": "± 114937.796060715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6659740.421686747,
            "unit": "ns",
            "range": "± 352727.08416444185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2375128.769230769,
            "unit": "ns",
            "range": "± 23885.19116228661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2479585.111111111,
            "unit": "ns",
            "range": "± 92982.57387206345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3128602.2333333334,
            "unit": "ns",
            "range": "± 57468.270204978166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3026244.0689655175,
            "unit": "ns",
            "range": "± 164828.97411099653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7890553.596153846,
            "unit": "ns",
            "range": "± 324418.1558093136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39334.895833333336,
            "unit": "ns",
            "range": "± 5111.293618272481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3620194.8619791665,
            "unit": "ns",
            "range": "± 14651.31094789501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1184711.211303711,
            "unit": "ns",
            "range": "± 23182.25098044177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768159.9930138221,
            "unit": "ns",
            "range": "± 3921.385171818918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960297.6556919643,
            "unit": "ns",
            "range": "± 3551.0506084054737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601892.9474748884,
            "unit": "ns",
            "range": "± 1101.0978717659345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572748.3513020833,
            "unit": "ns",
            "range": "± 2182.1393317494126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200713.80487804877,
            "unit": "ns",
            "range": "± 10573.274596351523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188537.75471698114,
            "unit": "ns",
            "range": "± 7549.6477347919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164100.30434782608,
            "unit": "ns",
            "range": "± 3233.8446501562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3124142.5,
            "unit": "ns",
            "range": "± 43622.27511833834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2845728.8,
            "unit": "ns",
            "range": "± 32425.414781354106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14285.185567010309,
            "unit": "ns",
            "range": "± 2561.1258564752707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60973.08762886598,
            "unit": "ns",
            "range": "± 6790.255602013719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58808.427083333336,
            "unit": "ns",
            "range": "± 5079.059319753466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56795.03191489362,
            "unit": "ns",
            "range": "± 8871.839536556741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3529.8333333333335,
            "unit": "ns",
            "range": "± 468.918901029775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11584.65909090909,
            "unit": "ns",
            "range": "± 1447.9895843783302"
          }
        ]
      }
    ]
  }
}