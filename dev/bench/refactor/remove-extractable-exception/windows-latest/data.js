window.BENCHMARK_DATA = {
  "lastUpdate": 1689323873208,
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
          "id": "0ee43d09d85c3cd2c092779fe5b704aa29c47f1a",
          "message": "Removed ExtractableException",
          "timestamp": "2023-07-14T17:03:42+09:00",
          "tree_id": "0a1ba4efd74af218d73d91db6b8377c76ab76028",
          "url": "https://github.com/greymistcube/libplanet/commit/0ee43d09d85c3cd2c092779fe5b704aa29c47f1a"
        },
        "date": 1689323067930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730940.625,
            "unit": "ns",
            "range": "± 208805.35059595577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3257534.0206185565,
            "unit": "ns",
            "range": "± 265397.8746172896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2247562.8865979384,
            "unit": "ns",
            "range": "± 222185.78764909203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6610573.958333333,
            "unit": "ns",
            "range": "± 500410.2458551366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55637.77777777778,
            "unit": "ns",
            "range": "± 8788.636403771798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8677918.518518519,
            "unit": "ns",
            "range": "± 239337.404317447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24963756,
            "unit": "ns",
            "range": "± 956709.0140770738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63276030,
            "unit": "ns",
            "range": "± 1394415.3398845207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132242460,
            "unit": "ns",
            "range": "± 5835392.6268845275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259280495.45454547,
            "unit": "ns",
            "range": "± 6217263.889746056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6161614.114583333,
            "unit": "ns",
            "range": "± 69616.66475644863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1989029.8735119049,
            "unit": "ns",
            "range": "± 46252.6071663769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1506807.1354166667,
            "unit": "ns",
            "range": "± 22178.959905252163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3335919.8016826925,
            "unit": "ns",
            "range": "± 19917.385240337837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1186374.1536458333,
            "unit": "ns",
            "range": "± 20807.969493265056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1007100.6556919643,
            "unit": "ns",
            "range": "± 11761.930742862482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3717344.6428571427,
            "unit": "ns",
            "range": "± 159549.66615690305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3976614.736842105,
            "unit": "ns",
            "range": "± 274991.3812840597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5253858.536585365,
            "unit": "ns",
            "range": "± 274910.93594836275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4420716.842105263,
            "unit": "ns",
            "range": "± 290260.16123933985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8909798.630136987,
            "unit": "ns",
            "range": "± 441472.85637371195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325222.22222222225,
            "unit": "ns",
            "range": "± 19997.24013417277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315519.7916666667,
            "unit": "ns",
            "range": "± 34307.41095261969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260298.86363636365,
            "unit": "ns",
            "range": "± 19308.699095557953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4841290.697674419,
            "unit": "ns",
            "range": "± 175881.59682548544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4529701.754385965,
            "unit": "ns",
            "range": "± 196043.671784802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20088.043478260868,
            "unit": "ns",
            "range": "± 4030.702019167336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98455.91397849462,
            "unit": "ns",
            "range": "± 12433.855101623632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103540.625,
            "unit": "ns",
            "range": "± 20602.77742198852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130184.375,
            "unit": "ns",
            "range": "± 24512.642616134144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6593.684210526316,
            "unit": "ns",
            "range": "± 1512.2767481667877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18819.277108433736,
            "unit": "ns",
            "range": "± 1646.0935153565408"
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
          "id": "18521af1592775aa4ddc17220d920178c411c073",
          "message": "Changelog",
          "timestamp": "2023-07-14T17:16:58+09:00",
          "tree_id": "dddb239702524e76d9542f81534dc6cf32f15203",
          "url": "https://github.com/greymistcube/libplanet/commit/18521af1592775aa4ddc17220d920178c411c073"
        },
        "date": 1689323849276,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770808.4210526317,
            "unit": "ns",
            "range": "± 195435.70508468634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3369343.1578947366,
            "unit": "ns",
            "range": "± 300461.7909126421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282602.0833333335,
            "unit": "ns",
            "range": "± 214573.99851267927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6437375.531914894,
            "unit": "ns",
            "range": "± 499867.240371907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65108.602150537634,
            "unit": "ns",
            "range": "± 12489.401210226028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8580410.714285715,
            "unit": "ns",
            "range": "± 457689.9210816475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25694112.76595745,
            "unit": "ns",
            "range": "± 1000230.5613809467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63662847.82608695,
            "unit": "ns",
            "range": "± 3073957.6097678407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125648924.24242425,
            "unit": "ns",
            "range": "± 3949604.909594622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254483909.52380952,
            "unit": "ns",
            "range": "± 6050664.516638215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5940003.236607143,
            "unit": "ns",
            "range": "± 71776.54473545146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924943.4814453125,
            "unit": "ns",
            "range": "± 37330.381543919066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451984.2881944445,
            "unit": "ns",
            "range": "± 30415.364899154192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3148730.213341346,
            "unit": "ns",
            "range": "± 36049.13242470571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1053918.2668585526,
            "unit": "ns",
            "range": "± 20300.982733092915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 960812.5325520834,
            "unit": "ns",
            "range": "± 15596.947818179247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3867614.432989691,
            "unit": "ns",
            "range": "± 324539.07346602436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4079168.3673469387,
            "unit": "ns",
            "range": "± 373984.413809673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5280547.916666667,
            "unit": "ns",
            "range": "± 328870.6557389096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4604537.894736842,
            "unit": "ns",
            "range": "± 326432.2422210744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8342224.489795919,
            "unit": "ns",
            "range": "± 578515.3333667645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335920,
            "unit": "ns",
            "range": "± 38869.524243211636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324716.4948453608,
            "unit": "ns",
            "range": "± 42767.09619266402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300068.81720430107,
            "unit": "ns",
            "range": "± 25995.890053482377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5260126.315789473,
            "unit": "ns",
            "range": "± 314425.2484348283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4521645.263157895,
            "unit": "ns",
            "range": "± 257301.19975922458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30457.575757575756,
            "unit": "ns",
            "range": "± 9597.577191178554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114300,
            "unit": "ns",
            "range": "± 20190.51597864381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131362.24489795917,
            "unit": "ns",
            "range": "± 28408.770662923485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150019.587628866,
            "unit": "ns",
            "range": "± 32038.722142040013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7995.505617977528,
            "unit": "ns",
            "range": "± 2150.206655626361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28598,
            "unit": "ns",
            "range": "± 9459.568187979317"
          }
        ]
      }
    ]
  }
}