window.BENCHMARK_DATA = {
  "lastUpdate": 1689327133520,
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
        "date": 1689322609230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279149.6296296296,
            "unit": "ns",
            "range": "± 14610.18119792192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268835.95384615386,
            "unit": "ns",
            "range": "± 12526.37158337208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229395.33333333334,
            "unit": "ns",
            "range": "± 6425.684752496152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4257089.363636363,
            "unit": "ns",
            "range": "± 103329.26533891799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929585.3333333335,
            "unit": "ns",
            "range": "± 45829.58215212195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17188.58762886598,
            "unit": "ns",
            "range": "± 2079.9213063668285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88719.52631578948,
            "unit": "ns",
            "range": "± 8705.500476700465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70387.88235294117,
            "unit": "ns",
            "range": "± 1438.2130788913435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87333.36842105263,
            "unit": "ns",
            "range": "± 9733.083006408115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4704.103092783505,
            "unit": "ns",
            "range": "± 1084.6253623999253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17683.632653061224,
            "unit": "ns",
            "range": "± 2115.2040450804852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414385.353846154,
            "unit": "ns",
            "range": "± 60261.75442637487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2549240.03125,
            "unit": "ns",
            "range": "± 78651.42902275566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1849818.8260869565,
            "unit": "ns",
            "range": "± 67165.4022594981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4709491.633333334,
            "unit": "ns",
            "range": "± 128838.59951585064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6136246.371651785,
            "unit": "ns",
            "range": "± 34508.26029677989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988020.3822115385,
            "unit": "ns",
            "range": "± 3196.6180607858473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383084.1350260417,
            "unit": "ns",
            "range": "± 1079.271449085395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605390.3175223214,
            "unit": "ns",
            "range": "± 2612.0561746770504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827547.0043945312,
            "unit": "ns",
            "range": "± 368.69765483105147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733301.3675362723,
            "unit": "ns",
            "range": "± 629.2012480958831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3490799.8666666667,
            "unit": "ns",
            "range": "± 56628.214777071116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3449680.9444444445,
            "unit": "ns",
            "range": "± 63775.29244471167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4222250.333333333,
            "unit": "ns",
            "range": "± 87055.93881285892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3809190.3333333335,
            "unit": "ns",
            "range": "± 113275.35423101055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6426261.956521739,
            "unit": "ns",
            "range": "± 137519.4038921841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7706409.666666667,
            "unit": "ns",
            "range": "± 107160.22709853467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19961943.285714287,
            "unit": "ns",
            "range": "± 88745.69582666103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49366068.384615384,
            "unit": "ns",
            "range": "± 354751.2702632974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98320510.13333334,
            "unit": "ns",
            "range": "± 1811326.63830799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195665412.2,
            "unit": "ns",
            "range": "± 1232702.3619742463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45589.02173913043,
            "unit": "ns",
            "range": "± 2632.7062121555105"
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
        "date": 1689323477930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292818.5,
            "unit": "ns",
            "range": "± 9041.524171758036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287666.5230769231,
            "unit": "ns",
            "range": "± 12639.995395454676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243655.68421052632,
            "unit": "ns",
            "range": "± 5304.299430678136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4564365.066666666,
            "unit": "ns",
            "range": "± 50275.184917563834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4047008.125,
            "unit": "ns",
            "range": "± 73094.56734019294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21054.458333333332,
            "unit": "ns",
            "range": "± 1974.9220366579523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92481.40625,
            "unit": "ns",
            "range": "± 6040.770570536119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76090.925,
            "unit": "ns",
            "range": "± 2689.404389189128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106266.78125,
            "unit": "ns",
            "range": "± 13103.696668620794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5601.1720430107525,
            "unit": "ns",
            "range": "± 783.4697161769768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19799.263157894737,
            "unit": "ns",
            "range": "± 2720.331993234549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1515408.6494845361,
            "unit": "ns",
            "range": "± 109451.14322876756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2833440.393939394,
            "unit": "ns",
            "range": "± 80893.671962776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2002001.57,
            "unit": "ns",
            "range": "± 141250.22094108086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5245958.592592592,
            "unit": "ns",
            "range": "± 145602.43353372574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6244775.084895833,
            "unit": "ns",
            "range": "± 31484.93210417872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963268.36875,
            "unit": "ns",
            "range": "± 3382.4923752542777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413345.6865885416,
            "unit": "ns",
            "range": "± 3616.0428570883805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636525.588020833,
            "unit": "ns",
            "range": "± 2356.9273311335023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842931.0323567708,
            "unit": "ns",
            "range": "± 731.5731020449059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779785.123046875,
            "unit": "ns",
            "range": "± 387.75642799670993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3589921.620689655,
            "unit": "ns",
            "range": "± 102941.56265655001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3884242.8666666667,
            "unit": "ns",
            "range": "± 61608.2574763048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4537030.720930233,
            "unit": "ns",
            "range": "± 168026.08666079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4250243.636363637,
            "unit": "ns",
            "range": "± 102569.73945776065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6965163.586206896,
            "unit": "ns",
            "range": "± 304134.774214941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8148639.346153846,
            "unit": "ns",
            "range": "± 221925.34101015906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22421006.666666668,
            "unit": "ns",
            "range": "± 286962.65000435826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56441874.6,
            "unit": "ns",
            "range": "± 901178.9055562401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111188826.06666666,
            "unit": "ns",
            "range": "± 1483549.2880540362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226439675.46666667,
            "unit": "ns",
            "range": "± 3383899.800971461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48454.336842105266,
            "unit": "ns",
            "range": "± 3315.8583741877114"
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
          "id": "a0dd018c89f67acd0fff170b47e45c08d2b0f501",
          "message": "Changelog",
          "timestamp": "2023-07-14T17:54:28+09:00",
          "tree_id": "0cba744ac764cd3dcfd16840c1f92f94633eccac",
          "url": "https://github.com/greymistcube/libplanet/commit/a0dd018c89f67acd0fff170b47e45c08d2b0f501"
        },
        "date": 1689325873051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354728.8490566038,
            "unit": "ns",
            "range": "± 14473.267660914387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331137.91489361704,
            "unit": "ns",
            "range": "± 12804.893984298393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302681.8192771084,
            "unit": "ns",
            "range": "± 16038.454872164373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5443158,
            "unit": "ns",
            "range": "± 62801.37678294429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4960996.6,
            "unit": "ns",
            "range": "± 79241.17614941651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24192.924731182797,
            "unit": "ns",
            "range": "± 2188.2094737009893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109101.39361702128,
            "unit": "ns",
            "range": "± 8262.324712851947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94611.52222222222,
            "unit": "ns",
            "range": "± 5276.209416131189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116304.45360824742,
            "unit": "ns",
            "range": "± 14893.199162439756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7030.729166666667,
            "unit": "ns",
            "range": "± 1140.3674336686092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25173.520833333332,
            "unit": "ns",
            "range": "± 3313.7502557459184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1793506.6458333333,
            "unit": "ns",
            "range": "± 104043.60265439111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3402455.78125,
            "unit": "ns",
            "range": "± 104355.49265718982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2300487.2790697673,
            "unit": "ns",
            "range": "± 123335.56183066548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6266149.945454545,
            "unit": "ns",
            "range": "± 266246.6921795857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7242382.452566965,
            "unit": "ns",
            "range": "± 42911.40534411857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2312101.795052083,
            "unit": "ns",
            "range": "± 1831.6371444538397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1681223.7623697917,
            "unit": "ns",
            "range": "± 2560.2196918570467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3193196.549609375,
            "unit": "ns",
            "range": "± 6759.116188264135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996549.8268880208,
            "unit": "ns",
            "range": "± 3006.1908210834977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933027.9326822917,
            "unit": "ns",
            "range": "± 2634.2921765818314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4438231.714285715,
            "unit": "ns",
            "range": "± 71364.66697983573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4524723.545454546,
            "unit": "ns",
            "range": "± 166238.39637924227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5364405.666666667,
            "unit": "ns",
            "range": "± 111256.7562104459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4980883.375,
            "unit": "ns",
            "range": "± 123720.63925523027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8094700.612903226,
            "unit": "ns",
            "range": "± 241189.29498088942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9510989.5,
            "unit": "ns",
            "range": "± 192524.80823649713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26808227.8,
            "unit": "ns",
            "range": "± 245120.2217860802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67821658.28571428,
            "unit": "ns",
            "range": "± 253210.4955387691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135019305.46666667,
            "unit": "ns",
            "range": "± 1105610.5565536995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270487704.06666666,
            "unit": "ns",
            "range": "± 1518059.7107673083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56910.142857142855,
            "unit": "ns",
            "range": "± 4310.110098030311"
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
          "id": "6bae21f351c93f6699893ff8956ea9f5645bd158",
          "message": "Fix tests",
          "timestamp": "2023-07-14T18:19:25+09:00",
          "tree_id": "948d990eac0e6dab1817ab41c82024d73f5921e1",
          "url": "https://github.com/greymistcube/libplanet/commit/6bae21f351c93f6699893ff8956ea9f5645bd158"
        },
        "date": 1689327125414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285617.1935483871,
            "unit": "ns",
            "range": "± 8730.771773519813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260613.1,
            "unit": "ns",
            "range": "± 7935.022271631129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243386.03703703705,
            "unit": "ns",
            "range": "± 6647.2561110783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4211382.307692308,
            "unit": "ns",
            "range": "± 24523.1423944289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3800604,
            "unit": "ns",
            "range": "± 29655.84508434495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17714.010752688173,
            "unit": "ns",
            "range": "± 1435.8672087583416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83986.525,
            "unit": "ns",
            "range": "± 4362.296306150952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71335.78571428571,
            "unit": "ns",
            "range": "± 1116.9144432884614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84620.02083333333,
            "unit": "ns",
            "range": "± 10553.773354616542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5061.111111111111,
            "unit": "ns",
            "range": "± 113.18329168362206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16230.936170212766,
            "unit": "ns",
            "range": "± 1386.0365307953298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355940.53125,
            "unit": "ns",
            "range": "± 95287.59883890045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553043.904761905,
            "unit": "ns",
            "range": "± 60420.94274000097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1772577.1976744186,
            "unit": "ns",
            "range": "± 95444.5871905381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4776049.928571428,
            "unit": "ns",
            "range": "± 123461.31989560567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6145032.390066965,
            "unit": "ns",
            "range": "± 28597.369591107003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898859.4901041666,
            "unit": "ns",
            "range": "± 4378.141382879576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347857.80546875,
            "unit": "ns",
            "range": "± 1669.9794207796738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606255.1434895834,
            "unit": "ns",
            "range": "± 3154.0459087873915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810537.2683293269,
            "unit": "ns",
            "range": "± 759.4088378894131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725466.7498046875,
            "unit": "ns",
            "range": "± 625.4629002862711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3339592,
            "unit": "ns",
            "range": "± 39065.86379802339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3482387.5,
            "unit": "ns",
            "range": "± 99346.40786605669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4234819.933333334,
            "unit": "ns",
            "range": "± 59668.34855679549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3796786.3333333335,
            "unit": "ns",
            "range": "± 90083.56019668709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6368510.4,
            "unit": "ns",
            "range": "± 96705.49564513605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7605979.4,
            "unit": "ns",
            "range": "± 35777.46200732682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19287696.923076924,
            "unit": "ns",
            "range": "± 170065.01996122027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49436455.5,
            "unit": "ns",
            "range": "± 302452.0916256503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98137295.46666667,
            "unit": "ns",
            "range": "± 1096249.0271563602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199618167.06666666,
            "unit": "ns",
            "range": "± 1965265.111525286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46395.357142857145,
            "unit": "ns",
            "range": "± 2147.4467868232546"
          }
        ]
      }
    ]
  }
}