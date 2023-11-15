window.BENCHMARK_DATA = {
  "lastUpdate": 1700033713949,
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
      }
    ]
  }
}