window.BENCHMARK_DATA = {
  "lastUpdate": 1684136358244,
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
          "id": "445e4d68e25d8322a38c01e059769dce027b0ead",
          "message": "Changelog",
          "timestamp": "2023-05-15T15:47:51+09:00",
          "tree_id": "93e901805fd0f4bf5d6425385e28af3603dccc18",
          "url": "https://github.com/greymistcube/libplanet/commit/445e4d68e25d8322a38c01e059769dce027b0ead"
        },
        "date": 1684134081923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7641577.655172414,
            "unit": "ns",
            "range": "± 216070.22504720144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19407278.486486487,
            "unit": "ns",
            "range": "± 641755.7174841886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47715647.64285714,
            "unit": "ns",
            "range": "± 742167.5585945854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93174897.95,
            "unit": "ns",
            "range": "± 2046669.2832125402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188033235.2352941,
            "unit": "ns",
            "range": "± 2803143.98484308"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60428.12631578947,
            "unit": "ns",
            "range": "± 6381.746731544328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304777.93333333335,
            "unit": "ns",
            "range": "± 13032.613265874696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296461.28125,
            "unit": "ns",
            "range": "± 19780.971813018547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276676.06666666665,
            "unit": "ns",
            "range": "± 13958.114785326861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4004816.96,
            "unit": "ns",
            "range": "± 103723.55302135255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3547513.8333333335,
            "unit": "ns",
            "range": "± 69514.30072950288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16750.264367816093,
            "unit": "ns",
            "range": "± 1439.382227463866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83205.25,
            "unit": "ns",
            "range": "± 6770.942039721146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78332.65934065935,
            "unit": "ns",
            "range": "± 9020.706306689664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98903.95789473684,
            "unit": "ns",
            "range": "± 13935.24456565407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4815.315217391304,
            "unit": "ns",
            "range": "± 587.6360338996536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16660.126373626375,
            "unit": "ns",
            "range": "± 1819.868424110513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500345.1684210526,
            "unit": "ns",
            "range": "± 145410.94617154254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2820488.9764705882,
            "unit": "ns",
            "range": "± 152041.48209280134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2332842.2666666666,
            "unit": "ns",
            "range": "± 201090.47863361562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6347738.362068965,
            "unit": "ns",
            "range": "± 276045.77549972356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3055890.6363636362,
            "unit": "ns",
            "range": "± 119869.07704540472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3339206.5714285714,
            "unit": "ns",
            "range": "± 51508.44387195064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4269398.875,
            "unit": "ns",
            "range": "± 100719.0892922154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4245807.776119403,
            "unit": "ns",
            "range": "± 200486.88131493423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7367498.58,
            "unit": "ns",
            "range": "± 292713.49955167656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6174624.397395833,
            "unit": "ns",
            "range": "± 41441.16986612954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842343.795703125,
            "unit": "ns",
            "range": "± 11953.53873712246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230654.760546875,
            "unit": "ns",
            "range": "± 7121.772093378053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2390303.340625,
            "unit": "ns",
            "range": "± 16105.78049027422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816822.0275530134,
            "unit": "ns",
            "range": "± 5468.123980668137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691327.6525390625,
            "unit": "ns",
            "range": "± 5066.3570137398865"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b86de079d57c6e713ce2bea88d33ea6f1cd45fd",
          "message": "Merge pull request #3157 from greymistcube/remove/native-tokens\n\n🧹 Remove remaining native tokens related API",
          "timestamp": "2023-05-12T20:36:42+09:00",
          "tree_id": "bed97323e9fdde44e5164e36835e6bcc173687b6",
          "url": "https://github.com/greymistcube/libplanet/commit/2b86de079d57c6e713ce2bea88d33ea6f1cd45fd"
        },
        "date": 1684134166044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8282512.233333333,
            "unit": "ns",
            "range": "± 104177.73011299122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20980219.233333334,
            "unit": "ns",
            "range": "± 195052.54354128224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51502918.57692308,
            "unit": "ns",
            "range": "± 578734.2879014027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103450228.36666666,
            "unit": "ns",
            "range": "± 1751320.642945524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215058640,
            "unit": "ns",
            "range": "± 524140.75692378316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73049.16666666667,
            "unit": "ns",
            "range": "± 7005.944293112974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331682.3153846154,
            "unit": "ns",
            "range": "± 14219.696773855081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330494.0714285714,
            "unit": "ns",
            "range": "± 11804.862933026052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321096.6875,
            "unit": "ns",
            "range": "± 7822.9525588426795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4238148.807692308,
            "unit": "ns",
            "range": "± 28913.413552030986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3565196.65,
            "unit": "ns",
            "range": "± 119542.0614004726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23274.21875,
            "unit": "ns",
            "range": "± 2715.68521237226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116296.41052631578,
            "unit": "ns",
            "range": "± 8171.280315180096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117937.95161290323,
            "unit": "ns",
            "range": "± 5371.767663022029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120898.65957446808,
            "unit": "ns",
            "range": "± 10839.058487167631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8619.37113402062,
            "unit": "ns",
            "range": "± 1209.4077176417425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23055.428571428572,
            "unit": "ns",
            "range": "± 4092.36173084473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1628886.3144329898,
            "unit": "ns",
            "range": "± 158658.415129034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989259.2666666666,
            "unit": "ns",
            "range": "± 150501.4685798271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500571.569892473,
            "unit": "ns",
            "range": "± 211026.73666259725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6824437.2,
            "unit": "ns",
            "range": "± 213971.65969333032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3427419.6944444445,
            "unit": "ns",
            "range": "± 106509.59531068939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480011.904761905,
            "unit": "ns",
            "range": "± 157653.54724928044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4514862.804347826,
            "unit": "ns",
            "range": "± 111904.59114817195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4379768.1344086025,
            "unit": "ns",
            "range": "± 300081.7146063785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7531100.086206896,
            "unit": "ns",
            "range": "± 209635.25977320658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6761175.409895834,
            "unit": "ns",
            "range": "± 114669.94008943561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1951587.8624441964,
            "unit": "ns",
            "range": "± 9072.057803644071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291776.4051339286,
            "unit": "ns",
            "range": "± 5687.20224570261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2817763.8604910714,
            "unit": "ns",
            "range": "± 33288.08861102979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900464.9757952009,
            "unit": "ns",
            "range": "± 5579.041221210697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723678.130859375,
            "unit": "ns",
            "range": "± 2798.5529316987363"
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
          "id": "5ecc71293242deb62556f50c242468610031664f",
          "message": "Removed Mint and Transfer actions",
          "timestamp": "2023-05-15T15:46:20+09:00",
          "tree_id": "a2f130184a564a1228584bf58e9d0d9af6197c4f",
          "url": "https://github.com/greymistcube/libplanet/commit/5ecc71293242deb62556f50c242468610031664f"
        },
        "date": 1684134184934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8060515.947368421,
            "unit": "ns",
            "range": "± 522840.6046090173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19421087.31081081,
            "unit": "ns",
            "range": "± 971003.6913580348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49449626.125,
            "unit": "ns",
            "range": "± 3071000.781852747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110190837.2826087,
            "unit": "ns",
            "range": "± 11977102.808048662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212424617.03333333,
            "unit": "ns",
            "range": "± 3710940.317899261"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72826.9052631579,
            "unit": "ns",
            "range": "± 13729.348020404956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329258.85869565216,
            "unit": "ns",
            "range": "± 29289.068478946698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326159.9655172414,
            "unit": "ns",
            "range": "± 30387.773624397596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305826,
            "unit": "ns",
            "range": "± 24670.210531619276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4369865.115384615,
            "unit": "ns",
            "range": "± 387100.757688135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3856596.3720930233,
            "unit": "ns",
            "range": "± 269345.0970036088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23803.952631578948,
            "unit": "ns",
            "range": "± 6119.014565303137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96044.8894736842,
            "unit": "ns",
            "range": "± 10071.904092515188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108562.90206185567,
            "unit": "ns",
            "range": "± 12418.404457245935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105124.85416666667,
            "unit": "ns",
            "range": "± 20094.612928255265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5927.010869565217,
            "unit": "ns",
            "range": "± 1393.3163812796047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17358.31914893617,
            "unit": "ns",
            "range": "± 1611.5065963104078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619390.9893617022,
            "unit": "ns",
            "range": "± 184517.16612064425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093847.8279569894,
            "unit": "ns",
            "range": "± 216320.38231524455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2621018.4468085105,
            "unit": "ns",
            "range": "± 230320.4533673141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6911775.44680851,
            "unit": "ns",
            "range": "± 446469.2169004083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324440.7608695654,
            "unit": "ns",
            "range": "± 219974.85255896364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3437139.3777777776,
            "unit": "ns",
            "range": "± 285727.8414654142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4499008.706896552,
            "unit": "ns",
            "range": "± 279199.68363046553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4711736.619565218,
            "unit": "ns",
            "range": "± 746969.0774262395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9292470.21,
            "unit": "ns",
            "range": "± 1710772.8343552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6308000.756696428,
            "unit": "ns",
            "range": "± 42574.969964406875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902892.0958426339,
            "unit": "ns",
            "range": "± 29027.094528951693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298591.3963541666,
            "unit": "ns",
            "range": "± 24287.858923251482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619259.094308036,
            "unit": "ns",
            "range": "± 83878.71474581724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838119.3521341464,
            "unit": "ns",
            "range": "± 28829.54273808409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752623.2656860352,
            "unit": "ns",
            "range": "± 21812.572403755352"
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
          "id": "3e70352d4c200566dc78185e4e0d1be970ef06b4",
          "message": "Fixed tests",
          "timestamp": "2023-05-15T16:00:01+09:00",
          "tree_id": "716e5769da49fa706ed7301338cf25118542a229",
          "url": "https://github.com/greymistcube/libplanet/commit/3e70352d4c200566dc78185e4e0d1be970ef06b4"
        },
        "date": 1684134880773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7544554.333333333,
            "unit": "ns",
            "range": "± 198236.41182805327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18911612.586956523,
            "unit": "ns",
            "range": "± 727748.4557994481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47056304.06666667,
            "unit": "ns",
            "range": "± 830842.2710811057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96718223.69767442,
            "unit": "ns",
            "range": "± 3581204.8953820895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198933294.2,
            "unit": "ns",
            "range": "± 3483983.479620484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62352.45360824742,
            "unit": "ns",
            "range": "± 9441.794821894982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309988.7888888889,
            "unit": "ns",
            "range": "± 17241.221272629886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309222.3191489362,
            "unit": "ns",
            "range": "± 22091.10537215636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291885.2978723404,
            "unit": "ns",
            "range": "± 20837.15930778101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4214032.4,
            "unit": "ns",
            "range": "± 93626.13944462979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3781200.1470588236,
            "unit": "ns",
            "range": "± 75955.8241956642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16788.875,
            "unit": "ns",
            "range": "± 1862.6792771364812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85223.27083333333,
            "unit": "ns",
            "range": "± 9329.692096774364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89654.01041666667,
            "unit": "ns",
            "range": "± 11344.657043824443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99848.41935483871,
            "unit": "ns",
            "range": "± 11651.060870080328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5474.58947368421,
            "unit": "ns",
            "range": "± 764.1131070159377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15981.08695652174,
            "unit": "ns",
            "range": "± 1777.4942707264515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560886.4591836734,
            "unit": "ns",
            "range": "± 141337.24149700545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2929823.1428571427,
            "unit": "ns",
            "range": "± 142753.57738560255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504034.96875,
            "unit": "ns",
            "range": "± 224662.89398481138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6503238.466666667,
            "unit": "ns",
            "range": "± 269017.81846952176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3240067.918918919,
            "unit": "ns",
            "range": "± 97410.42876332263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3396912.563829787,
            "unit": "ns",
            "range": "± 132504.53103498078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4464336.5,
            "unit": "ns",
            "range": "± 106959.83379566013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4398412.535353536,
            "unit": "ns",
            "range": "± 317218.6985820799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7592744.145833333,
            "unit": "ns",
            "range": "± 287222.8295238392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6073655.934895833,
            "unit": "ns",
            "range": "± 65769.61513683887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878650.5192307692,
            "unit": "ns",
            "range": "± 9806.284009003231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279743.9895833333,
            "unit": "ns",
            "range": "± 13581.415181250795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2391946.6891741073,
            "unit": "ns",
            "range": "± 30465.657483457227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 763874.7778645833,
            "unit": "ns",
            "range": "± 7296.698306315987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 699790.181640625,
            "unit": "ns",
            "range": "± 3029.6362551198736"
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
          "id": "a88aac2b83adf3adcb80789dc06b3f49a1f01c0d",
          "message": "Fixed tests",
          "timestamp": "2023-05-15T16:21:24+09:00",
          "tree_id": "b6b650bf75ad17981e2add73f039d9804435035e",
          "url": "https://github.com/greymistcube/libplanet/commit/a88aac2b83adf3adcb80789dc06b3f49a1f01c0d"
        },
        "date": 1684136344127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9285259.226315789,
            "unit": "ns",
            "range": "± 997257.2409554486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21648090.512048192,
            "unit": "ns",
            "range": "± 1143569.7318402187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55485452.12658228,
            "unit": "ns",
            "range": "± 2876483.90144778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110844034.77083333,
            "unit": "ns",
            "range": "± 6984316.290262939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221803938.56666666,
            "unit": "ns",
            "range": "± 3825751.0149862915"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76323.41573033707,
            "unit": "ns",
            "range": "± 5545.513870379184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385170.2842105263,
            "unit": "ns",
            "range": "± 64913.34825466277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346573.1195652174,
            "unit": "ns",
            "range": "± 37807.27685693847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326761.1373626374,
            "unit": "ns",
            "range": "± 23298.24933648043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4567936.141414141,
            "unit": "ns",
            "range": "± 408451.6723909694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926508.56122449,
            "unit": "ns",
            "range": "± 249880.3083544103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23224.639784946237,
            "unit": "ns",
            "range": "± 3886.18880751297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113633.85106382979,
            "unit": "ns",
            "range": "± 18277.417693631447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123059.83673469388,
            "unit": "ns",
            "range": "± 20678.075488575192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126498.96739130435,
            "unit": "ns",
            "range": "± 18856.798391888573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7753.225806451613,
            "unit": "ns",
            "range": "± 1137.7960210045317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21812.653846153848,
            "unit": "ns",
            "range": "± 3740.317553135108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713942.3850574712,
            "unit": "ns",
            "range": "± 240238.8691799692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3013796.7,
            "unit": "ns",
            "range": "± 120665.15889397473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2606112.272727273,
            "unit": "ns",
            "range": "± 281498.52287955803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6465288.5227272725,
            "unit": "ns",
            "range": "± 215532.41562562712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3522816.96875,
            "unit": "ns",
            "range": "± 318626.78674879513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3575972.5102040814,
            "unit": "ns",
            "range": "± 249188.41545272543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4817863.005376345,
            "unit": "ns",
            "range": "± 377998.3059369281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4726754.010204081,
            "unit": "ns",
            "range": "± 401493.8362360191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8223184.412087912,
            "unit": "ns",
            "range": "± 628374.6429699165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7092069.481026785,
            "unit": "ns",
            "range": "± 124977.73491317827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2079107.3622395834,
            "unit": "ns",
            "range": "± 38863.170449215875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385347.1822150736,
            "unit": "ns",
            "range": "± 25873.747521949546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3241336.1785502373,
            "unit": "ns",
            "range": "± 167120.66004928816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967752.3453125,
            "unit": "ns",
            "range": "± 22122.018913326174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775273.3391676683,
            "unit": "ns",
            "range": "± 11496.016290751637"
          }
        ]
      }
    ]
  }
}