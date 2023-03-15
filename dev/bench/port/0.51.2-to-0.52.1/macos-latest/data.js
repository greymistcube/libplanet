window.BENCHMARK_DATA = {
  "lastUpdate": 1678873764619,
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
          "id": "39c00351cc8914b7bf995fabdcb08e1822a06d5c",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:27:42+09:00",
          "tree_id": "b8b6da760dd2b7acfc51de3dd2e872d9b7a8dac9",
          "url": "https://github.com/greymistcube/libplanet/commit/39c00351cc8914b7bf995fabdcb08e1822a06d5c"
        },
        "date": 1678873679184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8708308.277777778,
            "unit": "ns",
            "range": "± 183168.27659986692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21847881.028985508,
            "unit": "ns",
            "range": "± 1047279.362965845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56089566.95714286,
            "unit": "ns",
            "range": "± 2519162.4300852753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 109048076.03571428,
            "unit": "ns",
            "range": "± 3086099.9200721323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 226373739.28,
            "unit": "ns",
            "range": "± 5772945.204315822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68449.53846153847,
            "unit": "ns",
            "range": "± 9914.515045357257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215803.6875,
            "unit": "ns",
            "range": "± 24986.110376224922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221573.47872340426,
            "unit": "ns",
            "range": "± 24218.925947669155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201664.08421052631,
            "unit": "ns",
            "range": "± 25212.31543826926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12596594.03896104,
            "unit": "ns",
            "range": "± 640189.0064539007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9918441.26,
            "unit": "ns",
            "range": "± 389189.72103625495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21847.621052631577,
            "unit": "ns",
            "range": "± 3246.30409876828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65855.4574468085,
            "unit": "ns",
            "range": "± 7505.209738839829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62111.677777777775,
            "unit": "ns",
            "range": "± 2345.7437790107588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124952.58947368422,
            "unit": "ns",
            "range": "± 13234.048158825055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8792.708333333334,
            "unit": "ns",
            "range": "± 1276.7688404444339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22919.747368421053,
            "unit": "ns",
            "range": "± 3322.700593398487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1652910.9040404041,
            "unit": "ns",
            "range": "± 172448.53060450067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3032126.3483146066,
            "unit": "ns",
            "range": "± 210194.79013530526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2918620.9777777777,
            "unit": "ns",
            "range": "± 109936.2080914301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6709154.783950618,
            "unit": "ns",
            "range": "± 456752.66934420407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3548637.023076923,
            "unit": "ns",
            "range": "± 163726.11162902397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5832022.868131869,
            "unit": "ns",
            "range": "± 596774.2331974317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26171197.803030305,
            "unit": "ns",
            "range": "± 826831.3583921031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6754253.735294118,
            "unit": "ns",
            "range": "± 365031.26074239466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30223738.108695652,
            "unit": "ns",
            "range": "± 1068483.2432923105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6905615.513822115,
            "unit": "ns",
            "range": "± 105481.5935455914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985979.9021935095,
            "unit": "ns",
            "range": "± 43369.773620810636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303736.7611607143,
            "unit": "ns",
            "range": "± 20419.338731500688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2958833.1182421874,
            "unit": "ns",
            "range": "± 176760.71524330348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848500.1995442709,
            "unit": "ns",
            "range": "± 3551.467854034539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740246.5244954427,
            "unit": "ns",
            "range": "± 8999.103321080176"
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
          "id": "b2e0658c9ac12b938ceac00d922b21d0bcf15ea5",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:29:14+09:00",
          "tree_id": "b8b6da760dd2b7acfc51de3dd2e872d9b7a8dac9",
          "url": "https://github.com/greymistcube/libplanet/commit/b2e0658c9ac12b938ceac00d922b21d0bcf15ea5"
        },
        "date": 1678873709083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9239517.391752576,
            "unit": "ns",
            "range": "± 614051.4764909704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22546240.175675675,
            "unit": "ns",
            "range": "± 1128835.9171842416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58113216.50769231,
            "unit": "ns",
            "range": "± 2683256.844953367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114943800.81578948,
            "unit": "ns",
            "range": "± 5631306.00386205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 229561350.14814815,
            "unit": "ns",
            "range": "± 6330598.075968552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71885.05555555556,
            "unit": "ns",
            "range": "± 9496.888162559344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224184.28,
            "unit": "ns",
            "range": "± 8993.995122120908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222905.77358490566,
            "unit": "ns",
            "range": "± 9268.411893343618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210831.7441860465,
            "unit": "ns",
            "range": "± 7539.161315276588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12905797.75,
            "unit": "ns",
            "range": "± 247887.58760763585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12227971.16091954,
            "unit": "ns",
            "range": "± 2264128.4081788533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27907.232558139534,
            "unit": "ns",
            "range": "± 4408.979499570551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69690.97916666667,
            "unit": "ns",
            "range": "± 11366.431328099576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63233.31764705882,
            "unit": "ns",
            "range": "± 5484.047061405352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131280.94623655913,
            "unit": "ns",
            "range": "± 16927.996932895563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8843.426966292134,
            "unit": "ns",
            "range": "± 1078.0915259640365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24834.441860465115,
            "unit": "ns",
            "range": "± 2386.9419205071044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526324.9736842106,
            "unit": "ns",
            "range": "± 147334.28866038096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2741519.9285714286,
            "unit": "ns",
            "range": "± 111315.61327061441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2546046.681318681,
            "unit": "ns",
            "range": "± 255021.1376146813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5955803.875,
            "unit": "ns",
            "range": "± 201430.8918637736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3705848.5108695654,
            "unit": "ns",
            "range": "± 295865.5442271068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5466328.670212766,
            "unit": "ns",
            "range": "± 390251.2310335646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26844928.467532467,
            "unit": "ns",
            "range": "± 1367110.8552122612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6762431.510204081,
            "unit": "ns",
            "range": "± 692303.1214030917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30587638.11445783,
            "unit": "ns",
            "range": "± 1616737.6340487597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7200258.551254734,
            "unit": "ns",
            "range": "± 227431.17673003548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2107299.523251488,
            "unit": "ns",
            "range": "± 49688.46337488933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323347.7315932766,
            "unit": "ns",
            "range": "± 41660.08576584017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2802014.6579816365,
            "unit": "ns",
            "range": "± 198594.21066832513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801076.321890024,
            "unit": "ns",
            "range": "± 7939.090934749381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782560.8872974537,
            "unit": "ns",
            "range": "± 21214.562413785097"
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
          "id": "c775aa3897ea5536b0cc806ed93fae6b6628c940",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:33:07+09:00",
          "tree_id": "c27253e5957238046518b4bd134cde83bae519e6",
          "url": "https://github.com/greymistcube/libplanet/commit/c775aa3897ea5536b0cc806ed93fae6b6628c940"
        },
        "date": 1678873738986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7706422.384615385,
            "unit": "ns",
            "range": "± 111014.1221380854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19382001.523809522,
            "unit": "ns",
            "range": "± 699237.1070261534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47725138.09677419,
            "unit": "ns",
            "range": "± 1441709.1041291086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 94778145.8888889,
            "unit": "ns",
            "range": "± 1768494.2875594976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 193703582.53333333,
            "unit": "ns",
            "range": "± 2988390.8673115103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60916.71875,
            "unit": "ns",
            "range": "± 9184.318471925393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191504.81818181818,
            "unit": "ns",
            "range": "± 8920.823579018477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205973.48936170212,
            "unit": "ns",
            "range": "± 13504.856209594427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182645.31958762885,
            "unit": "ns",
            "range": "± 16268.166557310115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11784525.5,
            "unit": "ns",
            "range": "± 381026.9396786865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9596040.1,
            "unit": "ns",
            "range": "± 284316.928020093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17407.918604651164,
            "unit": "ns",
            "range": "± 1907.3623994166967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49979.25263157895,
            "unit": "ns",
            "range": "± 6982.282878172257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48697.25263157895,
            "unit": "ns",
            "range": "± 5516.6675956622785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102872.22222222222,
            "unit": "ns",
            "range": "± 10443.2366189451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5805.3488372093025,
            "unit": "ns",
            "range": "± 683.8790358714868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17459.955056179777,
            "unit": "ns",
            "range": "± 1452.8933430017903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1610830.755319149,
            "unit": "ns",
            "range": "± 177244.46328431493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2791587.4583333335,
            "unit": "ns",
            "range": "± 107530.25292643814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2550210.387755102,
            "unit": "ns",
            "range": "± 266438.5753615907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6153854.961538462,
            "unit": "ns",
            "range": "± 163003.88321570275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3168113.276595745,
            "unit": "ns",
            "range": "± 121385.72254803605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4831067.52631579,
            "unit": "ns",
            "range": "± 166175.34158211236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23005678.458333332,
            "unit": "ns",
            "range": "± 905005.4012163487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6328261.567901234,
            "unit": "ns",
            "range": "± 325378.67886122083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27861751.557142857,
            "unit": "ns",
            "range": "± 1341093.1077374513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6404726.284040178,
            "unit": "ns",
            "range": "± 42679.37920277193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1966008.9988692433,
            "unit": "ns",
            "range": "± 42853.12513145348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266034.327734375,
            "unit": "ns",
            "range": "± 21472.212505598152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2718859.4405691964,
            "unit": "ns",
            "range": "± 22937.804467041446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788439.9064453125,
            "unit": "ns",
            "range": "± 1571.1931276443504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728799.6403459822,
            "unit": "ns",
            "range": "± 1353.1372633735307"
          }
        ]
      }
    ]
  }
}