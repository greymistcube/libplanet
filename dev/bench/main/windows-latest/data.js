window.BENCHMARK_DATA = {
  "lastUpdate": 1690196530551,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492",
          "message": "Merge pull request #3073 from dahlia/tx-invoice",
          "timestamp": "2023-04-10T16:32:34+09:00",
          "tree_id": "25188c22e036f85cc08e8040104a7c7e52c27b11",
          "url": "https://github.com/greymistcube/libplanet/commit/9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492"
        },
        "date": 1681117823965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1281984.375,
            "unit": "ns",
            "range": "± 99702.88844269152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424303.846153846,
            "unit": "ns",
            "range": "± 99256.48684592597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051356.25,
            "unit": "ns",
            "range": "± 116103.38660684686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5470247,
            "unit": "ns",
            "range": "± 369470.23566373263"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46151.063829787236,
            "unit": "ns",
            "range": "± 2730.020074795271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6886753.333333333,
            "unit": "ns",
            "range": "± 63306.94914086297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19329638.46153846,
            "unit": "ns",
            "range": "± 237680.58586564424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46365472.34042553,
            "unit": "ns",
            "range": "± 1777561.4769167104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91664465,
            "unit": "ns",
            "range": "± 2002389.826990949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180063984.6153846,
            "unit": "ns",
            "range": "± 2351713.118787435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4786189.713541667,
            "unit": "ns",
            "range": "± 52088.16549859098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1493536.0807291667,
            "unit": "ns",
            "range": "± 13827.775904936863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159347.5,
            "unit": "ns",
            "range": "± 4723.3581009618065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606760.8854166665,
            "unit": "ns",
            "range": "± 14906.240070490136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828554.0690104166,
            "unit": "ns",
            "range": "± 5987.440974938851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758725.1106770834,
            "unit": "ns",
            "range": "± 5577.151266990823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047904.5454545454,
            "unit": "ns",
            "range": "± 71258.96753774541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3177102.5,
            "unit": "ns",
            "range": "± 102855.24427874849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3786038.4615384615,
            "unit": "ns",
            "range": "± 32352.602637746124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3924252.6315789474,
            "unit": "ns",
            "range": "± 158647.08149274418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6899375.308641976,
            "unit": "ns",
            "range": "± 363060.0203585022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306333.3333333333,
            "unit": "ns",
            "range": "± 6322.6018471549405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238701.92307692306,
            "unit": "ns",
            "range": "± 9106.612344122468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202742.85714285713,
            "unit": "ns",
            "range": "± 2014.071378199769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5085480,
            "unit": "ns",
            "range": "± 51570.63394718244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3550564.285714286,
            "unit": "ns",
            "range": "± 58993.11051226311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18104.255319148935,
            "unit": "ns",
            "range": "± 1149.7465726946152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81982.79569892473,
            "unit": "ns",
            "range": "± 5206.843816929248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80137,
            "unit": "ns",
            "range": "± 7941.778736212027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162244.5652173913,
            "unit": "ns",
            "range": "± 15892.671364675922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5592.783505154639,
            "unit": "ns",
            "range": "± 627.2040176251153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16830.76923076923,
            "unit": "ns",
            "range": "± 1766.0811801960676"
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
          "id": "23fa5406ecce3a4959fc38701c795682c8fbcadc",
          "message": "Merge pull request #3097 from dahlia/1.0-maintenance\n\nRelease 1.0.0",
          "timestamp": "2023-04-18T15:39:29+09:00",
          "tree_id": "244d53aa04947b63072d6989e3d8373876b569bc",
          "url": "https://github.com/greymistcube/libplanet/commit/23fa5406ecce3a4959fc38701c795682c8fbcadc"
        },
        "date": 1681801187475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1421054,
            "unit": "ns",
            "range": "± 116581.40210673277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2658387.7551020407,
            "unit": "ns",
            "range": "± 169245.12709201706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2232810.4166666665,
            "unit": "ns",
            "range": "± 174727.4981998912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5643833.333333333,
            "unit": "ns",
            "range": "± 289134.7686786811"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48920.21276595745,
            "unit": "ns",
            "range": "± 4212.081440543471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6829876.666666667,
            "unit": "ns",
            "range": "± 46876.928023841116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18781986.666666668,
            "unit": "ns",
            "range": "± 306776.84971948183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47217684.375,
            "unit": "ns",
            "range": "± 1459771.7943855019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95292900,
            "unit": "ns",
            "range": "± 2296044.12123693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188266211.1111111,
            "unit": "ns",
            "range": "± 3878028.2479159413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4665968.645833333,
            "unit": "ns",
            "range": "± 35377.151970520375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551371.2044270833,
            "unit": "ns",
            "range": "± 12579.508731897442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179703.9322916667,
            "unit": "ns",
            "range": "± 5454.297710708009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664569.2838541665,
            "unit": "ns",
            "range": "± 7372.288513308994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859311.6927083334,
            "unit": "ns",
            "range": "± 3239.45459264997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773853.4458705357,
            "unit": "ns",
            "range": "± 2284.585868379289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2971493.023255814,
            "unit": "ns",
            "range": "± 109916.12255617991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3193229.1666666665,
            "unit": "ns",
            "range": "± 79766.53694793743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3880710,
            "unit": "ns",
            "range": "± 86067.76338872088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3985002.0408163266,
            "unit": "ns",
            "range": "± 154000.7190050801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6842233.333333333,
            "unit": "ns",
            "range": "± 54487.05990388633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300420,
            "unit": "ns",
            "range": "± 8242.338134961128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247719.67213114753,
            "unit": "ns",
            "range": "± 11026.29916264037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211100,
            "unit": "ns",
            "range": "± 3061.372241332308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5145692.307692308,
            "unit": "ns",
            "range": "± 50870.48033221988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3644108.3333333335,
            "unit": "ns",
            "range": "± 92582.578493903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18339.17525773196,
            "unit": "ns",
            "range": "± 2135.0525316054345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85552.57731958762,
            "unit": "ns",
            "range": "± 6143.222769570023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77025.26315789473,
            "unit": "ns",
            "range": "± 5304.172753618039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 176021.05263157896,
            "unit": "ns",
            "range": "± 17004.723340926656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6365.625,
            "unit": "ns",
            "range": "± 996.5021060531789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18820.212765957447,
            "unit": "ns",
            "range": "± 1734.087705191881"
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
          "id": "52a12ef55668e95bc25e5a3c76c5a141411e9594",
          "message": "Merge pull request #3108 from greymistcube/refactor/blockchain-append\n\n♻️ Streamlined rendering",
          "timestamp": "2023-04-20T22:30:49+09:00",
          "tree_id": "6b586792b8a407850815e44c7ba432f12ced39ee",
          "url": "https://github.com/greymistcube/libplanet/commit/52a12ef55668e95bc25e5a3c76c5a141411e9594"
        },
        "date": 1682000348353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1563108.6956521738,
            "unit": "ns",
            "range": "± 39456.177221679965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2647044.3181818184,
            "unit": "ns",
            "range": "± 145724.9746721815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2316694.897959184,
            "unit": "ns",
            "range": "± 161356.78107362913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5249413.793103448,
            "unit": "ns",
            "range": "± 151380.56518999184"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47749.4623655914,
            "unit": "ns",
            "range": "± 3326.952635407088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6866264.705882353,
            "unit": "ns",
            "range": "± 134934.61815438836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18509340,
            "unit": "ns",
            "range": "± 281921.5007256959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46675774.19354839,
            "unit": "ns",
            "range": "± 1423605.4640636316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94371064.28571428,
            "unit": "ns",
            "range": "± 2702854.3858798314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187561800,
            "unit": "ns",
            "range": "± 3814776.557329792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4779747.1875,
            "unit": "ns",
            "range": "± 61751.97859095819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497753.984375,
            "unit": "ns",
            "range": "± 8165.830549443805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166346.7838541667,
            "unit": "ns",
            "range": "± 12022.763806167613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601287.265625,
            "unit": "ns",
            "range": "± 7721.193478971449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802116.9921875,
            "unit": "ns",
            "range": "± 2829.134271618537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752667.734375,
            "unit": "ns",
            "range": "± 2314.5882833665883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2919902.7027027025,
            "unit": "ns",
            "range": "± 98531.82646143237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3296810.5263157897,
            "unit": "ns",
            "range": "± 159031.79143718185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3819238.095238095,
            "unit": "ns",
            "range": "± 74571.27782323751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3957479.1666666665,
            "unit": "ns",
            "range": "± 227647.2473930094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6867933.333333333,
            "unit": "ns",
            "range": "± 223718.02660619782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299156.52173913043,
            "unit": "ns",
            "range": "± 7526.971266232372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247630.55555555556,
            "unit": "ns",
            "range": "± 7440.730357563581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205328.57142857142,
            "unit": "ns",
            "range": "± 2145.273363046724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5170356.521739131,
            "unit": "ns",
            "range": "± 126421.70709065517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3441575,
            "unit": "ns",
            "range": "± 33137.513073966074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17431.91489361702,
            "unit": "ns",
            "range": "± 1672.2409641380593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84940.40404040404,
            "unit": "ns",
            "range": "± 5574.979073666577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77048.3870967742,
            "unit": "ns",
            "range": "± 7777.987513590572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98914.60674157304,
            "unit": "ns",
            "range": "± 12762.476520874117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5517.391304347826,
            "unit": "ns",
            "range": "± 672.3108738763236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16518.478260869564,
            "unit": "ns",
            "range": "± 1669.3704378785667"
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
          "id": "3d5cba6bcac996e6a87feb854a16dcb1eed4b134",
          "message": "Merge pull request #3170 from greymistcube/prepare/1.3.0\n\n🔧 Prepare 1.3.0",
          "timestamp": "2023-05-17T11:00:40+09:00",
          "tree_id": "55c7a7526e013a7451c0e1a0d1a8ad138feb19c8",
          "url": "https://github.com/greymistcube/libplanet/commit/3d5cba6bcac996e6a87feb854a16dcb1eed4b134"
        },
        "date": 1684292860579,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1646796.8085106383,
            "unit": "ns",
            "range": "± 180070.93193333363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2958944.6808510637,
            "unit": "ns",
            "range": "± 259224.8086565314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589606.0606060605,
            "unit": "ns",
            "range": "± 197813.79350710037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6430509.677419355,
            "unit": "ns",
            "range": "± 498012.72946550016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57431.18279569892,
            "unit": "ns",
            "range": "± 7995.147692773787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8532194.680851065,
            "unit": "ns",
            "range": "± 614896.190970742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22876341.666666668,
            "unit": "ns",
            "range": "± 897301.3457225288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56420028.125,
            "unit": "ns",
            "range": "± 2584736.8438382326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106397830,
            "unit": "ns",
            "range": "± 5154763.98060606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211488137.83783785,
            "unit": "ns",
            "range": "± 7154964.311323034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6158663.1167763155,
            "unit": "ns",
            "range": "± 209975.13347555252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1879892.396763393,
            "unit": "ns",
            "range": "± 23002.45938863376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415902.5479403408,
            "unit": "ns",
            "range": "± 34302.797466026095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3190043.7978316327,
            "unit": "ns",
            "range": "± 119070.38994862986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1059092.2230113635,
            "unit": "ns",
            "range": "± 25405.162169756735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948524.84375,
            "unit": "ns",
            "range": "± 11430.827665481886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343583.673469388,
            "unit": "ns",
            "range": "± 250231.0151995747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3598173.6842105263,
            "unit": "ns",
            "range": "± 313638.93022938195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4538226.315789473,
            "unit": "ns",
            "range": "± 369973.0315676347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4681771.91011236,
            "unit": "ns",
            "range": "± 288987.5020845758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7856970.879120879,
            "unit": "ns",
            "range": "± 470056.3816102829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303159.55056179775,
            "unit": "ns",
            "range": "± 18162.953799005292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289546.2365591398,
            "unit": "ns",
            "range": "± 18587.569239892004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263627.36842105264,
            "unit": "ns",
            "range": "± 20932.91433545716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4689967.532467533,
            "unit": "ns",
            "range": "± 239379.657954713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4274444.776119403,
            "unit": "ns",
            "range": "± 200701.4179741714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22883.838383838385,
            "unit": "ns",
            "range": "± 5695.911657168389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93808.42105263157,
            "unit": "ns",
            "range": "± 8532.125314012923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102170.20202020202,
            "unit": "ns",
            "range": "± 13434.421064806867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120676.04166666667,
            "unit": "ns",
            "range": "± 16727.397915060545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7215.909090909091,
            "unit": "ns",
            "range": "± 1519.9732577529846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19002.247191011236,
            "unit": "ns",
            "range": "± 2375.0108864865274"
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
          "distinct": false,
          "id": "1d75fde041ada2264ae9d234d86685de54820cd1",
          "message": "Merge pull request #3328 from greymistcube/refactor/keybytes-usage\n\n🧹 Refactor to use `KeyBytes` instead of `string`s in general",
          "timestamp": "2023-07-21T16:26:01+09:00",
          "tree_id": "77a8faa1ebc3e13f4309edf118475025bff5107f",
          "url": "https://github.com/greymistcube/libplanet/commit/1d75fde041ada2264ae9d234d86685de54820cd1"
        },
        "date": 1690196507757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439374.7474747475,
            "unit": "ns",
            "range": "± 115858.85267668599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648114.5454545454,
            "unit": "ns",
            "range": "± 112595.37589706191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1819396,
            "unit": "ns",
            "range": "± 116816.02380744612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4910282.608695652,
            "unit": "ns",
            "range": "± 237148.1176250291"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48344.086021505376,
            "unit": "ns",
            "range": "± 2953.6809152380706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7433784.615384615,
            "unit": "ns",
            "range": "± 87964.40422271051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20726678.57142857,
            "unit": "ns",
            "range": "± 230283.93320010384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51249560,
            "unit": "ns",
            "range": "± 679092.7180542328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102909640,
            "unit": "ns",
            "range": "± 1148085.9355590816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205495920,
            "unit": "ns",
            "range": "± 1806082.4103962856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908347.760416667,
            "unit": "ns",
            "range": "± 19195.208632548896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558635.4557291667,
            "unit": "ns",
            "range": "± 5247.641234578051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1209994.7916666667,
            "unit": "ns",
            "range": "± 3168.7719096937135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2693547.0052083335,
            "unit": "ns",
            "range": "± 9433.075993799026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859212.5558035715,
            "unit": "ns",
            "range": "± 2367.4361043232866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782853.96484375,
            "unit": "ns",
            "range": "± 2110.6447361273044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315191.6666666665,
            "unit": "ns",
            "range": "± 102080.37834401449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3559700,
            "unit": "ns",
            "range": "± 75612.4483993289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4290923.076923077,
            "unit": "ns",
            "range": "± 113227.92432149344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3839287.7192982454,
            "unit": "ns",
            "range": "± 165727.00666864277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6361345.714285715,
            "unit": "ns",
            "range": "± 203819.92534192174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267070,
            "unit": "ns",
            "range": "± 4364.248694410834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252852,
            "unit": "ns",
            "range": "± 9612.26342560717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233054.63917525773,
            "unit": "ns",
            "range": "± 13779.876788111445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4176820,
            "unit": "ns",
            "range": "± 74704.51506722048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3781921.4285714286,
            "unit": "ns",
            "range": "± 55420.61791526588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20944.565217391304,
            "unit": "ns",
            "range": "± 1817.4589271133223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95584.53608247422,
            "unit": "ns",
            "range": "± 7682.763991100816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81512.88659793814,
            "unit": "ns",
            "range": "± 6428.084855856318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95717.24137931035,
            "unit": "ns",
            "range": "± 8974.890125602647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5719.587628865979,
            "unit": "ns",
            "range": "± 989.7010465347743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20356.382978723403,
            "unit": "ns",
            "range": "± 2060.6689857797332"
          }
        ]
      }
    ]
  }
}