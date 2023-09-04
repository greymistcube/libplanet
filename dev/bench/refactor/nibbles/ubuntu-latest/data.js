window.BENCHMARK_DATA = {
  "lastUpdate": 1693788316465,
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
          "id": "b541ef00cfb97a92d9e53daa5e24e8f466f9331b",
          "message": "Refactor Nibbles",
          "timestamp": "2023-08-31T19:51:07+09:00",
          "tree_id": "1f4eeee57e62a9fd70bd85b53ac841c49eb803da",
          "url": "https://github.com/greymistcube/libplanet/commit/b541ef00cfb97a92d9e53daa5e24e8f466f9331b"
        },
        "date": 1693479920928,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1271095.8181818181,
            "unit": "ns",
            "range": "± 99461.36040277492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2440030.42,
            "unit": "ns",
            "range": "± 97435.8096875736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604859.7951807228,
            "unit": "ns",
            "range": "± 85623.23581672108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4326873.76,
            "unit": "ns",
            "range": "± 108932.00261259315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264031.27777777775,
            "unit": "ns",
            "range": "± 8732.171399440484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254092.67346938775,
            "unit": "ns",
            "range": "± 10042.31693341514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226900.52631578947,
            "unit": "ns",
            "range": "± 4911.14607996071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4131905.5714285714,
            "unit": "ns",
            "range": "± 36957.952232054384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867479.2,
            "unit": "ns",
            "range": "± 35091.21468239187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17413.83908045977,
            "unit": "ns",
            "range": "± 974.32828231083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81978.02352941176,
            "unit": "ns",
            "range": "± 4342.606716556067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66414.28571428571,
            "unit": "ns",
            "range": "± 1156.8239962249047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67427.24719101124,
            "unit": "ns",
            "range": "± 7561.290887986501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4362.787234042553,
            "unit": "ns",
            "range": "± 457.68035688959793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16621.105263157893,
            "unit": "ns",
            "range": "± 1055.3505465179967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46178.849315068495,
            "unit": "ns",
            "range": "± 2310.5905129739795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7712013.6,
            "unit": "ns",
            "range": "± 30755.31511276895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19377054.4,
            "unit": "ns",
            "range": "± 94060.66090925428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50707510.86666667,
            "unit": "ns",
            "range": "± 240679.69815707547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101429890.06666666,
            "unit": "ns",
            "range": "± 623587.552050743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202553846.4,
            "unit": "ns",
            "range": "± 1078961.2497366425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3163888.6,
            "unit": "ns",
            "range": "± 47613.43865188843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3345902.8125,
            "unit": "ns",
            "range": "± 49407.82245113116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4101407.6,
            "unit": "ns",
            "range": "± 38641.37570347545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3685979.64,
            "unit": "ns",
            "range": "± 95134.10853626579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5978315.894736842,
            "unit": "ns",
            "range": "± 125800.87696386379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4990020.198317308,
            "unit": "ns",
            "range": "± 19689.851688650484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564994.7804129464,
            "unit": "ns",
            "range": "± 1308.8260154496609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076396.28515625,
            "unit": "ns",
            "range": "± 805.63192241247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543263.339285714,
            "unit": "ns",
            "range": "± 2532.6029538525095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795202.2486979166,
            "unit": "ns",
            "range": "± 682.7417666346593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750066.4916015625,
            "unit": "ns",
            "range": "± 703.1380113333731"
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
          "id": "796ec7b10eb0f9fb609b40d4d3294e364552317e",
          "message": "Refactor Nibbles",
          "timestamp": "2023-08-31T19:56:07+09:00",
          "tree_id": "05dd4d4eefd41d688771dc4903ddf6ce41c06b2c",
          "url": "https://github.com/greymistcube/libplanet/commit/796ec7b10eb0f9fb609b40d4d3294e364552317e"
        },
        "date": 1693480167853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1307891.4186046512,
            "unit": "ns",
            "range": "± 70998.09140342148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2508640.875,
            "unit": "ns",
            "range": "± 77685.83436851444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703312.5777777778,
            "unit": "ns",
            "range": "± 91395.21807002222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4465513.870967742,
            "unit": "ns",
            "range": "± 80078.4390198102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272119,
            "unit": "ns",
            "range": "± 9804.404372282801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259287.38888888888,
            "unit": "ns",
            "range": "± 10414.102857068872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221531.9375,
            "unit": "ns",
            "range": "± 4111.952423018373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4199813.8,
            "unit": "ns",
            "range": "± 24773.707840600455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3944538.8,
            "unit": "ns",
            "range": "± 20390.82536758698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20337.957894736843,
            "unit": "ns",
            "range": "± 1480.400067519052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90192.51282051283,
            "unit": "ns",
            "range": "± 4553.626275077946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73079.76923076923,
            "unit": "ns",
            "range": "± 2501.12211092645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76105.95714285714,
            "unit": "ns",
            "range": "± 1991.9909670049708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5129.787234042553,
            "unit": "ns",
            "range": "± 557.2261924144425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21161.16883116883,
            "unit": "ns",
            "range": "± 1101.8089480318672"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48459.97701149425,
            "unit": "ns",
            "range": "± 2432.6243842431204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7849059.8,
            "unit": "ns",
            "range": "± 81985.21667628344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20181747.4,
            "unit": "ns",
            "range": "± 89677.95895456777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51372229.35714286,
            "unit": "ns",
            "range": "± 201848.58393802447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103370390.71428572,
            "unit": "ns",
            "range": "± 200605.75699286727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206950888.2857143,
            "unit": "ns",
            "range": "± 518663.72085617634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298096.96875,
            "unit": "ns",
            "range": "± 102299.35743861654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3434003.8571428573,
            "unit": "ns",
            "range": "± 36275.39280571323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4228238.357142857,
            "unit": "ns",
            "range": "± 52271.4507644133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3838646.9444444445,
            "unit": "ns",
            "range": "± 80945.34726989434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6086246.230769231,
            "unit": "ns",
            "range": "± 78869.19233891208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4949833.85546875,
            "unit": "ns",
            "range": "± 5430.679972966345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1668807.5341796875,
            "unit": "ns",
            "range": "± 460.0883957513145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1050843.8059895833,
            "unit": "ns",
            "range": "± 974.0935819724403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615022.211237981,
            "unit": "ns",
            "range": "± 2588.1729307259798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882314.2091145833,
            "unit": "ns",
            "range": "± 2935.432389456613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745642.8373046875,
            "unit": "ns",
            "range": "± 437.2175373868995"
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
          "id": "2fc6ee5bdb34a5269df699df280a00c30863a734",
          "message": "More distinction/clarification for nibbles creation",
          "timestamp": "2023-09-04T09:29:03+09:00",
          "tree_id": "c17c2da2db83525ebe1888db792220210c020288",
          "url": "https://github.com/greymistcube/libplanet/commit/2fc6ee5bdb34a5269df699df280a00c30863a734"
        },
        "date": 1693788307642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678714.4639175257,
            "unit": "ns",
            "range": "± 99375.95201546728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3196890.533333333,
            "unit": "ns",
            "range": "± 93769.93923895952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2205101.802631579,
            "unit": "ns",
            "range": "± 110991.52728949116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5945419.556818182,
            "unit": "ns",
            "range": "± 324267.3685932806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322680.9743589744,
            "unit": "ns",
            "range": "± 9965.889356059497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315214.1052631579,
            "unit": "ns",
            "range": "± 6569.737301485221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275887.36,
            "unit": "ns",
            "range": "± 7140.396504396656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5218752,
            "unit": "ns",
            "range": "± 59625.548659949454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4744873.8,
            "unit": "ns",
            "range": "± 59230.253097792614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23041.305263157894,
            "unit": "ns",
            "range": "± 1345.9060941736266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101704.92631578947,
            "unit": "ns",
            "range": "± 6211.364134343316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85129.17391304347,
            "unit": "ns",
            "range": "± 3245.286121981631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92693.78350515464,
            "unit": "ns",
            "range": "± 14329.515562457967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5792.896907216495,
            "unit": "ns",
            "range": "± 716.8370701174024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23909.8,
            "unit": "ns",
            "range": "± 1815.7247752824396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57407.739726027394,
            "unit": "ns",
            "range": "± 2688.3733776073036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10182397.333333334,
            "unit": "ns",
            "range": "± 146239.04492824004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26790201.133333333,
            "unit": "ns",
            "range": "± 223441.74133408803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67109813.73333333,
            "unit": "ns",
            "range": "± 327079.36979609326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135640026.13333333,
            "unit": "ns",
            "range": "± 1678104.143619769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268842054.6,
            "unit": "ns",
            "range": "± 1979938.062421932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4282494.416666667,
            "unit": "ns",
            "range": "± 25898.1129619983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4516861.619047619,
            "unit": "ns",
            "range": "± 105543.50146952497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5172756.357142857,
            "unit": "ns",
            "range": "± 69173.4929319107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4830677.863636363,
            "unit": "ns",
            "range": "± 105272.27356820319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7463503.7727272725,
            "unit": "ns",
            "range": "± 165476.4612246167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5947292.197716346,
            "unit": "ns",
            "range": "± 12932.30771852689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896249.3129185268,
            "unit": "ns",
            "range": "± 1523.4351487916742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1268159.546875,
            "unit": "ns",
            "range": "± 1646.507021305642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3271663.8481770833,
            "unit": "ns",
            "range": "± 7415.956228049427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985225.9288504465,
            "unit": "ns",
            "range": "± 738.8260369502877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889494.6263020834,
            "unit": "ns",
            "range": "± 728.8638973770081"
          }
        ]
      }
    ]
  }
}