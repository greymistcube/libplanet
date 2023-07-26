window.BENCHMARK_DATA = {
  "lastUpdate": 1690364048110,
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
      }
    ]
  }
}