window.BENCHMARK_DATA = {
  "lastUpdate": 1705642881645,
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
          "id": "ce54ebd07727d7c940c818cce9178253c4a8cb82",
          "message": "Cleanup and some documentation",
          "timestamp": "2024-01-18T13:40:17+09:00",
          "tree_id": "8c09cc15cfb0c6eaf03e0404c0f42df2356f5158",
          "url": "https://github.com/greymistcube/libplanet/commit/ce54ebd07727d7c940c818cce9178253c4a8cb82"
        },
        "date": 1705553472066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 940136.0824742268,
            "unit": "ns",
            "range": "± 109595.59961661993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1751947.9166666667,
            "unit": "ns",
            "range": "± 133226.4064066696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1359349.494949495,
            "unit": "ns",
            "range": "± 154911.44170186555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5331064.2105263155,
            "unit": "ns",
            "range": "± 305845.21043828747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37084.61538461538,
            "unit": "ns",
            "range": "± 580.0088416655874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5110950,
            "unit": "ns",
            "range": "± 49457.79475005392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13126686.666666666,
            "unit": "ns",
            "range": "± 147315.6371617791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32079483.333333332,
            "unit": "ns",
            "range": "± 238242.16416889516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65270130.76923077,
            "unit": "ns",
            "range": "± 197877.26997904276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132036440,
            "unit": "ns",
            "range": "± 1034448.8434496342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306409.765625,
            "unit": "ns",
            "range": "± 24743.2878114978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067419.53125,
            "unit": "ns",
            "range": "± 4059.385139622994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729181.3852163461,
            "unit": "ns",
            "range": "± 5184.364435422143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922546.2439903845,
            "unit": "ns",
            "range": "± 2961.3556253431852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639539.2317708334,
            "unit": "ns",
            "range": "± 2104.9189753407622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584138.9299665178,
            "unit": "ns",
            "range": "± 1752.8341862540726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2108965.789473684,
            "unit": "ns",
            "range": "± 70928.7205058933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211408.695652174,
            "unit": "ns",
            "range": "± 46502.118594924534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2896994.3396226414,
            "unit": "ns",
            "range": "± 113011.43988228383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2765586.7924528304,
            "unit": "ns",
            "range": "± 114824.4446598235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6168627.777777778,
            "unit": "ns",
            "range": "± 126138.28455336373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173457.5,
            "unit": "ns",
            "range": "± 8743.587523711885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157252.08333333334,
            "unit": "ns",
            "range": "± 5521.293002408015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141143.10344827586,
            "unit": "ns",
            "range": "± 3705.0092572163853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2662840,
            "unit": "ns",
            "range": "± 45269.11277492162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2498307.1428571427,
            "unit": "ns",
            "range": "± 36369.48137964268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11864.130434782608,
            "unit": "ns",
            "range": "± 1329.3459948443067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55778.125,
            "unit": "ns",
            "range": "± 5806.515453395979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44465.625,
            "unit": "ns",
            "range": "± 2073.9670406528367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60542.857142857145,
            "unit": "ns",
            "range": "± 14420.59666752464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2347.9166666666665,
            "unit": "ns",
            "range": "± 338.4108890454936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8769.662921348314,
            "unit": "ns",
            "range": "± 908.5958815644688"
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
          "id": "c61248ddc720a28cea18f5dfda28d65709052b7e",
          "message": "Tweaked tests",
          "timestamp": "2024-01-18T13:44:05+09:00",
          "tree_id": "90452fd2a9b49dc0f5ad25967133c61a8e13b80a",
          "url": "https://github.com/greymistcube/libplanet/commit/c61248ddc720a28cea18f5dfda28d65709052b7e"
        },
        "date": 1705553796865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 929515.625,
            "unit": "ns",
            "range": "± 94086.9993011787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1662702.6315789474,
            "unit": "ns",
            "range": "± 72136.89640751306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1317044.8979591837,
            "unit": "ns",
            "range": "± 134978.65056267765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5341991.75257732,
            "unit": "ns",
            "range": "± 330179.7987681937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34241.89189189189,
            "unit": "ns",
            "range": "± 1715.362237135612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5131306.666666667,
            "unit": "ns",
            "range": "± 63059.52365669696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13030630.76923077,
            "unit": "ns",
            "range": "± 57924.39590557368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32232071.42857143,
            "unit": "ns",
            "range": "± 224176.57679253106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64774814.28571428,
            "unit": "ns",
            "range": "± 483096.37652438355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129189171.42857143,
            "unit": "ns",
            "range": "± 693009.8261358775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3323155.498798077,
            "unit": "ns",
            "range": "± 7016.329805036454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049741.2527901786,
            "unit": "ns",
            "range": "± 3750.4052188185096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738998.22265625,
            "unit": "ns",
            "range": "± 4268.095345867431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1883730.859375,
            "unit": "ns",
            "range": "± 4069.7304080953963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618276.6927083334,
            "unit": "ns",
            "range": "± 960.7857356663095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565236.9661458334,
            "unit": "ns",
            "range": "± 1325.097207910375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2108494.4444444445,
            "unit": "ns",
            "range": "± 87795.75013711293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2146282.7586206896,
            "unit": "ns",
            "range": "± 92948.77553232349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2782681.25,
            "unit": "ns",
            "range": "± 53209.2375282087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2619780,
            "unit": "ns",
            "range": "± 45409.72520129519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6218756.923076923,
            "unit": "ns",
            "range": "± 287102.89040322223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163513.7931034483,
            "unit": "ns",
            "range": "± 7144.264004568221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157225.75757575757,
            "unit": "ns",
            "range": "± 7067.222511894898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144452.08333333334,
            "unit": "ns",
            "range": "± 5641.091247355685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2686650,
            "unit": "ns",
            "range": "± 39036.26519020487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490293.3333333335,
            "unit": "ns",
            "range": "± 33966.44282369348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9834.736842105263,
            "unit": "ns",
            "range": "± 1221.1581894366589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49581.318681318684,
            "unit": "ns",
            "range": "± 4296.611380247154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43688.23529411765,
            "unit": "ns",
            "range": "± 1702.0748583800337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49457.73195876289,
            "unit": "ns",
            "range": "± 10598.848552354111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2341.6666666666665,
            "unit": "ns",
            "range": "± 484.64130342187735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9343.478260869566,
            "unit": "ns",
            "range": "± 793.9751633154386"
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
          "id": "b335131b4a73516b94e3a63a7fd79c807d1ef795",
          "message": "Added tests",
          "timestamp": "2024-01-19T14:16:07+09:00",
          "tree_id": "91c896becbcac8dde8329f64bc7198bb77443f01",
          "url": "https://github.com/greymistcube/libplanet/commit/b335131b4a73516b94e3a63a7fd79c807d1ef795"
        },
        "date": 1705642184634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054676.530612245,
            "unit": "ns",
            "range": "± 120512.50677365476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1795035.4838709678,
            "unit": "ns",
            "range": "± 80346.09786147246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604622.4719101123,
            "unit": "ns",
            "range": "± 113500.84075860906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11187181.25,
            "unit": "ns",
            "range": "± 1008619.8641617064"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36154.117647058825,
            "unit": "ns",
            "range": "± 2382.80311823703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5217115.384615385,
            "unit": "ns",
            "range": "± 73619.16469409586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13709650,
            "unit": "ns",
            "range": "± 163316.66149868764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33501250,
            "unit": "ns",
            "range": "± 315939.6260485416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68314000,
            "unit": "ns",
            "range": "± 709791.3506295857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135344350,
            "unit": "ns",
            "range": "± 659340.3635452633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3384588.8020833335,
            "unit": "ns",
            "range": "± 10958.989307579768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067653.5435267857,
            "unit": "ns",
            "range": "± 2136.0905098137187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755098.33984375,
            "unit": "ns",
            "range": "± 1929.0614678120176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930401.4229910714,
            "unit": "ns",
            "range": "± 5112.9691780153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623892.1574519231,
            "unit": "ns",
            "range": "± 1515.3481658037194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564672.8064903846,
            "unit": "ns",
            "range": "± 762.1028977329302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2271800,
            "unit": "ns",
            "range": "± 85111.80881640338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2370883.3333333335,
            "unit": "ns",
            "range": "± 61165.29754025893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2905506.6666666665,
            "unit": "ns",
            "range": "± 86323.30541326174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2995523.232323232,
            "unit": "ns",
            "range": "± 305744.719055394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12602463.440860216,
            "unit": "ns",
            "range": "± 1520142.8779233468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178867.16417910447,
            "unit": "ns",
            "range": "± 8479.84040837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171406.89655172414,
            "unit": "ns",
            "range": "± 9184.80536314959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146200,
            "unit": "ns",
            "range": "± 2809.033048340063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2922521.4285714286,
            "unit": "ns",
            "range": "± 40257.06203830632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2595000,
            "unit": "ns",
            "range": "± 55960.56150937412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12613.333333333334,
            "unit": "ns",
            "range": "± 1856.4312749605583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60707.44680851064,
            "unit": "ns",
            "range": "± 6866.616912258968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51035.051546391755,
            "unit": "ns",
            "range": "± 5437.199057517141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67304.16666666667,
            "unit": "ns",
            "range": "± 13248.832454352674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2392.8571428571427,
            "unit": "ns",
            "range": "± 470.1940814459537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10835.227272727272,
            "unit": "ns",
            "range": "± 1331.151068115186"
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
          "id": "d4e83e7901c16d1df5e89ad05c1af7a79e329d88",
          "message": "Updated docs",
          "timestamp": "2024-01-19T14:28:55+09:00",
          "tree_id": "4a9601422f4e82fdd6f95b98db053a00344eba6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d4e83e7901c16d1df5e89ad05c1af7a79e329d88"
        },
        "date": 1705642855044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988646.9387755102,
            "unit": "ns",
            "range": "± 118668.1148640091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1730146.25,
            "unit": "ns",
            "range": "± 86966.89308057755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520151,
            "unit": "ns",
            "range": "± 152056.5926644658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11048694.736842105,
            "unit": "ns",
            "range": "± 951177.8325987856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34176.19047619047,
            "unit": "ns",
            "range": "± 1579.5787806956523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5135669.230769231,
            "unit": "ns",
            "range": "± 68070.14010826607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13020635.714285715,
            "unit": "ns",
            "range": "± 187935.6174829064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33195261.111111112,
            "unit": "ns",
            "range": "± 666636.1915828638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65387446.666666664,
            "unit": "ns",
            "range": "± 750232.6847306074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133075746.15384616,
            "unit": "ns",
            "range": "± 1412946.65186823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3283995.675223214,
            "unit": "ns",
            "range": "± 4213.59770533181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072400.1432291667,
            "unit": "ns",
            "range": "± 1652.5239004046432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738959.4075520834,
            "unit": "ns",
            "range": "± 1071.4351100419362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1988163.169642857,
            "unit": "ns",
            "range": "± 3931.772365409852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603822.24609375,
            "unit": "ns",
            "range": "± 1175.1462742159997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561753.4254807692,
            "unit": "ns",
            "range": "± 1201.0611904758928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2100190.3225806453,
            "unit": "ns",
            "range": "± 39959.29891642837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2313821.4285714286,
            "unit": "ns",
            "range": "± 33952.41417883901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2749311.904761905,
            "unit": "ns",
            "range": "± 96756.60235210006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2815777.1739130435,
            "unit": "ns",
            "range": "± 159630.86959667047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12413494.505494505,
            "unit": "ns",
            "range": "± 1454861.2363278756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178862.65060240965,
            "unit": "ns",
            "range": "± 9468.905606057786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168697.22222222222,
            "unit": "ns",
            "range": "± 8273.595744382914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145646.15384615384,
            "unit": "ns",
            "range": "± 4991.5637331425805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2813721.4285714286,
            "unit": "ns",
            "range": "± 44596.60522732866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2561671.4285714286,
            "unit": "ns",
            "range": "± 38595.58421476634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11270.652173913044,
            "unit": "ns",
            "range": "± 1809.774319211856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55006.45161290323,
            "unit": "ns",
            "range": "± 5585.71171074627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45386.021505376346,
            "unit": "ns",
            "range": "± 2578.320627928585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59018.55670103093,
            "unit": "ns",
            "range": "± 11823.293833016907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2706.25,
            "unit": "ns",
            "range": "± 529.7094536282677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10911.95652173913,
            "unit": "ns",
            "range": "± 1549.9622392638516"
          }
        ]
      }
    ]
  }
}