window.BENCHMARK_DATA = {
  "lastUpdate": 1690776453768,
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
          "id": "44bbbc01223ed47ee09dd0d2667ecd9c5166367d",
          "message": "Hide TxResult.FungibleAssetsDelta",
          "timestamp": "2023-07-20T16:39:16+09:00",
          "tree_id": "77f12de69d9e969b1c90fff7a2b3bfb978853b6c",
          "url": "https://github.com/greymistcube/libplanet/commit/44bbbc01223ed47ee09dd0d2667ecd9c5166367d"
        },
        "date": 1689839714324,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1516753.3333333333,
            "unit": "ns",
            "range": "± 23190.695999740517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2449780.701754386,
            "unit": "ns",
            "range": "± 105463.67255159558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1707726.2626262626,
            "unit": "ns",
            "range": "± 103397.63209882812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4514747.826086956,
            "unit": "ns",
            "range": "± 170402.6127722622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45095.744680851065,
            "unit": "ns",
            "range": "± 2717.08710620645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6975500,
            "unit": "ns",
            "range": "± 62261.2583049386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17703793.333333332,
            "unit": "ns",
            "range": "± 112570.31114988068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46010685.71428572,
            "unit": "ns",
            "range": "± 350821.92909518344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91651615.38461539,
            "unit": "ns",
            "range": "± 264999.0749862907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188214770,
            "unit": "ns",
            "range": "± 3193475.4073624196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886077.764423077,
            "unit": "ns",
            "range": "± 6506.525214190224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518501.796875,
            "unit": "ns",
            "range": "± 1957.7501544935283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158508.0989583333,
            "unit": "ns",
            "range": "± 1356.7089514560191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547520.8984375,
            "unit": "ns",
            "range": "± 6990.658998072758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822367.6822916666,
            "unit": "ns",
            "range": "± 1215.481461105708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755045.5891927084,
            "unit": "ns",
            "range": "± 1779.5093518183426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3035885.714285714,
            "unit": "ns",
            "range": "± 80814.12639638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3217025.581395349,
            "unit": "ns",
            "range": "± 116306.40176669486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4014343.243243243,
            "unit": "ns",
            "range": "± 134263.6410213141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3573076.923076923,
            "unit": "ns",
            "range": "± 54134.47998343499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6061189.361702127,
            "unit": "ns",
            "range": "± 232285.58250758497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254576.92307692306,
            "unit": "ns",
            "range": "± 10488.436496963195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246000,
            "unit": "ns",
            "range": "± 9271.92732734874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224612,
            "unit": "ns",
            "range": "± 15771.83450446915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3867371.4285714286,
            "unit": "ns",
            "range": "± 42658.41387962373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3492700,
            "unit": "ns",
            "range": "± 41461.67832144243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19987.36842105263,
            "unit": "ns",
            "range": "± 2123.387603809874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82254.11764705883,
            "unit": "ns",
            "range": "± 4421.741548228224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68271.97802197802,
            "unit": "ns",
            "range": "± 3836.92012478186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89828.86597938144,
            "unit": "ns",
            "range": "± 12969.242129320228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4505.154639175258,
            "unit": "ns",
            "range": "± 728.7791066257975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17994.62365591398,
            "unit": "ns",
            "range": "± 1749.121866102472"
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
          "id": "0600ee8da3e10627bf0993019e0cc19126ed1725",
          "message": "Remove TxResult.FungibleAssetsDelta",
          "timestamp": "2023-07-21T15:11:54+09:00",
          "tree_id": "99cb96caede6dd63ee469ff38aeb29778f33a921",
          "url": "https://github.com/greymistcube/libplanet/commit/0600ee8da3e10627bf0993019e0cc19126ed1725"
        },
        "date": 1689920880803,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1482179.381443299,
            "unit": "ns",
            "range": "± 128611.19859397963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678671.875,
            "unit": "ns",
            "range": "± 82510.37954012112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1850209.375,
            "unit": "ns",
            "range": "± 122385.44983876491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4784725.925925926,
            "unit": "ns",
            "range": "± 131662.26488368638"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52227.36842105263,
            "unit": "ns",
            "range": "± 4151.914249751557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7911693.75,
            "unit": "ns",
            "range": "± 153268.59199348922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21020033.333333332,
            "unit": "ns",
            "range": "± 297218.35808198724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53199415.384615384,
            "unit": "ns",
            "range": "± 343000.0579352571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105242264.28571428,
            "unit": "ns",
            "range": "± 841106.5327267435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212059341.66666666,
            "unit": "ns",
            "range": "± 1353466.319195631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5086054.241071428,
            "unit": "ns",
            "range": "± 22393.52589983938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571184.5145089286,
            "unit": "ns",
            "range": "± 2309.518005293502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1215410.78125,
            "unit": "ns",
            "range": "± 3446.2713648634262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690408.59375,
            "unit": "ns",
            "range": "± 6345.0463642185805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859158.1891741072,
            "unit": "ns",
            "range": "± 2536.388438478821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784449.1471354166,
            "unit": "ns",
            "range": "± 2300.714292279935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3394956.6666666665,
            "unit": "ns",
            "range": "± 54978.01465347848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3634525,
            "unit": "ns",
            "range": "± 100926.77809697998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4319000,
            "unit": "ns",
            "range": "± 112010.17810895579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3960980.3571428573,
            "unit": "ns",
            "range": "± 167483.95246833525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6330286.363636363,
            "unit": "ns",
            "range": "± 134806.89997691248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273580.3278688525,
            "unit": "ns",
            "range": "± 11009.326647168016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259661.70212765958,
            "unit": "ns",
            "range": "± 10076.99819846922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253215.87301587302,
            "unit": "ns",
            "range": "± 11518.79538881655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4252773.333333333,
            "unit": "ns",
            "range": "± 43825.73390578819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3827400,
            "unit": "ns",
            "range": "± 50358.76998384407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24345.744680851065,
            "unit": "ns",
            "range": "± 2541.7657436124023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96767.02127659574,
            "unit": "ns",
            "range": "± 6217.018583216442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91207,
            "unit": "ns",
            "range": "± 11451.269216408575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103451.11111111111,
            "unit": "ns",
            "range": "± 11689.198360115304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7166.326530612245,
            "unit": "ns",
            "range": "± 1187.9718381152181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22954.081632653062,
            "unit": "ns",
            "range": "± 2334.0230463507155"
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
          "id": "be3fe0078df1c19e81eef47a5102105dabbdc1d3",
          "message": "Remove TxResult.ExceptionMetadata",
          "timestamp": "2023-07-26T18:14:40+09:00",
          "tree_id": "5f03c974ba0a194d2d4bb55150e88cbf9e78b809",
          "url": "https://github.com/greymistcube/libplanet/commit/be3fe0078df1c19e81eef47a5102105dabbdc1d3"
        },
        "date": 1690364026341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431094.8453608248,
            "unit": "ns",
            "range": "± 105477.3458804603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2672274.285714286,
            "unit": "ns",
            "range": "± 128566.57970152689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1869614.2857142857,
            "unit": "ns",
            "range": "± 124341.71323206277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4963516.666666667,
            "unit": "ns",
            "range": "± 218992.95953907655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48144.186046511626,
            "unit": "ns",
            "range": "± 2555.0689941720716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7327870,
            "unit": "ns",
            "range": "± 133426.19254532768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20430157.14285714,
            "unit": "ns",
            "range": "± 231625.2202100683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51756553.333333336,
            "unit": "ns",
            "range": "± 656558.4653181714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104498150,
            "unit": "ns",
            "range": "± 1475457.4653046008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208101671.42857143,
            "unit": "ns",
            "range": "± 1969869.747520836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862910.807291667,
            "unit": "ns",
            "range": "± 6084.888715149329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564759.0444711538,
            "unit": "ns",
            "range": "± 7988.214756475872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1201177.109375,
            "unit": "ns",
            "range": "± 6723.678236615805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672455.3385416665,
            "unit": "ns",
            "range": "± 17620.09738108187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848784.6980168269,
            "unit": "ns",
            "range": "± 2683.642048299862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778846.09375,
            "unit": "ns",
            "range": "± 2775.5780713036324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328180,
            "unit": "ns",
            "range": "± 73174.03623517955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480197.1428571427,
            "unit": "ns",
            "range": "± 114292.06262830299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4229896,
            "unit": "ns",
            "range": "± 112114.41878723717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3920620.588235294,
            "unit": "ns",
            "range": "± 123646.2789191514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6318797.222222222,
            "unit": "ns",
            "range": "± 207118.08431232252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262838.46153846156,
            "unit": "ns",
            "range": "± 7930.461348154351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256180.9090909091,
            "unit": "ns",
            "range": "± 9677.17575740622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229829.67032967033,
            "unit": "ns",
            "range": "± 12450.403781988529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4184769.230769231,
            "unit": "ns",
            "range": "± 54130.14232100548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3911364.285714286,
            "unit": "ns",
            "range": "± 48542.39791774193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20881.521739130436,
            "unit": "ns",
            "range": "± 1474.3916121220454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88489.36170212766,
            "unit": "ns",
            "range": "± 5288.28016609149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78489.79591836735,
            "unit": "ns",
            "range": "± 5077.776317351458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89379.16666666667,
            "unit": "ns",
            "range": "± 3592.4779591980723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5680.412371134021,
            "unit": "ns",
            "range": "± 1115.4818816003665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20576.344086021505,
            "unit": "ns",
            "range": "± 1600.774123154602"
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
          "id": "396af7b8c7b1697feef8bfcff45e47e07f436bfc",
          "message": "Fix tests",
          "timestamp": "2023-07-28T14:45:58+09:00",
          "tree_id": "8ac2bc6ff6242084f032f99a5fecfeba575993fd",
          "url": "https://github.com/greymistcube/libplanet/commit/396af7b8c7b1697feef8bfcff45e47e07f436bfc"
        },
        "date": 1690524474450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707163.5416666667,
            "unit": "ns",
            "range": "± 254379.68187639338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3180993.81443299,
            "unit": "ns",
            "range": "± 316676.4344374347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248167.3684210526,
            "unit": "ns",
            "range": "± 242168.5057980247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6180903.157894737,
            "unit": "ns",
            "range": "± 545632.9785949041"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56633.333333333336,
            "unit": "ns",
            "range": "± 12934.167200072074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8464735.869565217,
            "unit": "ns",
            "range": "± 843550.3470688013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21355754.736842107,
            "unit": "ns",
            "range": "± 1729301.3089640483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62257607.52688172,
            "unit": "ns",
            "range": "± 3573461.370455596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114570792,
            "unit": "ns",
            "range": "± 8721334.256735785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275662438.38383836,
            "unit": "ns",
            "range": "± 16311295.94298798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5505507.5390625,
            "unit": "ns",
            "range": "± 120734.2307574493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855739.2057291667,
            "unit": "ns",
            "range": "± 29251.836614130476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467732.7122043918,
            "unit": "ns",
            "range": "± 73281.40963798945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3162605.1136363638,
            "unit": "ns",
            "range": "± 74748.595002885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008065.4747596154,
            "unit": "ns",
            "range": "± 35232.30492098787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 949010.3491806402,
            "unit": "ns",
            "range": "± 34092.984142421854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3312560.4166666665,
            "unit": "ns",
            "range": "± 235041.12718692076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3711856.8421052634,
            "unit": "ns",
            "range": "± 323548.91098322714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4796819.791666667,
            "unit": "ns",
            "range": "± 399167.3255850145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3947508.4210526315,
            "unit": "ns",
            "range": "± 389942.9501817113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7445384.375,
            "unit": "ns",
            "range": "± 569464.0936563215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313104.2105263158,
            "unit": "ns",
            "range": "± 46346.26133281599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308380.41237113404,
            "unit": "ns",
            "range": "± 45916.88514582457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271617.20430107525,
            "unit": "ns",
            "range": "± 37968.3180962185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4209823.076923077,
            "unit": "ns",
            "range": "± 66197.98780736157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3966562.2448979593,
            "unit": "ns",
            "range": "± 308493.1877860067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29928.282828282827,
            "unit": "ns",
            "range": "± 11808.592862343068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96817.20430107527,
            "unit": "ns",
            "range": "± 18269.51977936686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99871.73913043478,
            "unit": "ns",
            "range": "± 19251.187068219842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116236.84210526316,
            "unit": "ns",
            "range": "± 19114.23693876896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5562.6373626373625,
            "unit": "ns",
            "range": "± 953.3156585364287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25056.122448979593,
            "unit": "ns",
            "range": "± 10141.62664443732"
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
          "id": "5ecfc93390387d280ea39a50d70df9bf84900c64",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-07-31T12:34:09+09:00",
          "tree_id": "5f03c974ba0a194d2d4bb55150e88cbf9e78b809",
          "url": "https://github.com/greymistcube/libplanet/commit/5ecfc93390387d280ea39a50d70df9bf84900c64"
        },
        "date": 1690776416431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1350634.693877551,
            "unit": "ns",
            "range": "± 108292.17932756533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2459926.923076923,
            "unit": "ns",
            "range": "± 64871.649016761134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1731328,
            "unit": "ns",
            "range": "± 131531.77599716996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4476794.736842105,
            "unit": "ns",
            "range": "± 151529.21214641305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43910.126582278484,
            "unit": "ns",
            "range": "± 2278.4157190687806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6907966.666666667,
            "unit": "ns",
            "range": "± 69403.55761431693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17851200,
            "unit": "ns",
            "range": "± 179349.48723491954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45795138.461538464,
            "unit": "ns",
            "range": "± 175575.7744226195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91082620,
            "unit": "ns",
            "range": "± 551949.4661133908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178356313.33333334,
            "unit": "ns",
            "range": "± 1315543.1354532223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4899255.412946428,
            "unit": "ns",
            "range": "± 7098.118779938765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539110.3515625,
            "unit": "ns",
            "range": "± 2158.277708204837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1133536.455829327,
            "unit": "ns",
            "range": "± 923.952158163293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554265.1506696427,
            "unit": "ns",
            "range": "± 2960.0949366112854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823757.9938616072,
            "unit": "ns",
            "range": "± 788.7954656186326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737384.0657552084,
            "unit": "ns",
            "range": "± 831.7442735985404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2980616.6666666665,
            "unit": "ns",
            "range": "± 61270.62677892526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3068405.5555555555,
            "unit": "ns",
            "range": "± 63006.62404225935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3926759.375,
            "unit": "ns",
            "range": "± 109911.10736489475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3411426.02739726,
            "unit": "ns",
            "range": "± 163474.48580010995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5860009.090909091,
            "unit": "ns",
            "range": "± 189667.42351637612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252106.1224489796,
            "unit": "ns",
            "range": "± 8458.58558318276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242445,
            "unit": "ns",
            "range": "± 8524.262506636645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219912.90322580645,
            "unit": "ns",
            "range": "± 12457.721769932683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3888046.6666666665,
            "unit": "ns",
            "range": "± 35489.97578123126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3564106.6666666665,
            "unit": "ns",
            "range": "± 48039.99028587191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18541.11111111111,
            "unit": "ns",
            "range": "± 1572.2948550164224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82663.01369863014,
            "unit": "ns",
            "range": "± 4098.08582854765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66055.1724137931,
            "unit": "ns",
            "range": "± 1890.1221062023162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86763.15789473684,
            "unit": "ns",
            "range": "± 12253.623455694767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4374.226804123711,
            "unit": "ns",
            "range": "± 740.5344846960572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17656.382978723403,
            "unit": "ns",
            "range": "± 1664.6584790130896"
          }
        ]
      }
    ]
  }
}