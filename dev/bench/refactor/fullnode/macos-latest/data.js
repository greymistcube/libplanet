window.BENCHMARK_DATA = {
  "lastUpdate": 1703662276491,
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
          "id": "d3e0e0ca525f99765ad66eb996b51eb9e722f852",
          "message": "Changed FullNode to no longer inherit BaseNode; removed BaseNode",
          "timestamp": "2023-12-27T16:15:54+09:00",
          "tree_id": "fae6f4b6e37b09d5113d55d10f8cc6582dd51f3d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3e0e0ca525f99765ad66eb996b51eb9e722f852"
        },
        "date": 1703662094124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7624055.230769231,
            "unit": "ns",
            "range": "± 73782.29247720829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19404153.51851852,
            "unit": "ns",
            "range": "± 542051.1309141042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46649205.76923077,
            "unit": "ns",
            "range": "± 387827.01309951616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97085801.25,
            "unit": "ns",
            "range": "± 597015.7775650985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196576511.25,
            "unit": "ns",
            "range": "± 2030098.9052839105"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37187.868131868134,
            "unit": "ns",
            "range": "± 4511.887277474893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217281.55,
            "unit": "ns",
            "range": "± 11095.697877550263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214276.13636363635,
            "unit": "ns",
            "range": "± 10928.104346265678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208495.6530612245,
            "unit": "ns",
            "range": "± 17323.244414912726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3765315.3076923075,
            "unit": "ns",
            "range": "± 58488.826722694954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3456620.5833333335,
            "unit": "ns",
            "range": "± 31431.450750246186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12979.76404494382,
            "unit": "ns",
            "range": "± 986.3808275074905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62539.45360824742,
            "unit": "ns",
            "range": "± 6363.3373565236625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62752.45789473684,
            "unit": "ns",
            "range": "± 8579.627696028749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63207.5625,
            "unit": "ns",
            "range": "± 13094.829723627165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3487.3548387096776,
            "unit": "ns",
            "range": "± 444.0147041523584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13098.431578947368,
            "unit": "ns",
            "range": "± 1809.407000853275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1077627.494949495,
            "unit": "ns",
            "range": "± 99404.03557080934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2200088.447368421,
            "unit": "ns",
            "range": "± 95069.7650238687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1546454.3402061856,
            "unit": "ns",
            "range": "± 107756.51766114183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6816288.96491228,
            "unit": "ns",
            "range": "± 275663.36025453254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2972283.654761905,
            "unit": "ns",
            "range": "± 146452.53334277944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2962711.84,
            "unit": "ns",
            "range": "± 48564.70152511322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3623003.6428571427,
            "unit": "ns",
            "range": "± 105941.52939382421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3465352.84375,
            "unit": "ns",
            "range": "± 158699.4761719302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12735651,
            "unit": "ns",
            "range": "± 1792307.13938093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4363586.69140625,
            "unit": "ns",
            "range": "± 49342.27318829515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1393957.8734654018,
            "unit": "ns",
            "range": "± 19599.126951781018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 889788.9668666294,
            "unit": "ns",
            "range": "± 5115.260635530799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1978745.001953125,
            "unit": "ns",
            "range": "± 31377.64720452945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 655429.5908854167,
            "unit": "ns",
            "range": "± 4690.368477610239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570677.296875,
            "unit": "ns",
            "range": "± 4369.0932944790375"
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
          "id": "4d1143350b41f9af8f65149463229080bc3d9fab",
          "message": "Changelog",
          "timestamp": "2023-12-27T16:18:16+09:00",
          "tree_id": "58b8e3af75d02d34e4efe5417c31029d7f1e7d65",
          "url": "https://github.com/greymistcube/libplanet/commit/4d1143350b41f9af8f65149463229080bc3d9fab"
        },
        "date": 1703662263442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7558732,
            "unit": "ns",
            "range": "± 42900.94606093293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18721451,
            "unit": "ns",
            "range": "± 99172.43466978782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46109379.23076923,
            "unit": "ns",
            "range": "± 482386.94395840116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91311733.86666666,
            "unit": "ns",
            "range": "± 996227.8196601609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185589635,
            "unit": "ns",
            "range": "± 1458424.0727290765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34781.85882352941,
            "unit": "ns",
            "range": "± 2651.8068375433113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221038.7,
            "unit": "ns",
            "range": "± 17167.402912909027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212956.37362637362,
            "unit": "ns",
            "range": "± 15375.991747344553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199337.26530612246,
            "unit": "ns",
            "range": "± 19716.130709148467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3674589.2333333334,
            "unit": "ns",
            "range": "± 65759.27055172707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3478302.081081081,
            "unit": "ns",
            "range": "± 109408.19475843113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12458.510869565218,
            "unit": "ns",
            "range": "± 920.182190447532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58507.64444444444,
            "unit": "ns",
            "range": "± 4554.12595077591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51291.51219512195,
            "unit": "ns",
            "range": "± 2708.6497171049823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60428.59574468085,
            "unit": "ns",
            "range": "± 11599.213219813288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3225.696629213483,
            "unit": "ns",
            "range": "± 372.9834387163732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12956.084210526316,
            "unit": "ns",
            "range": "± 1858.1998018166519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045946.376344086,
            "unit": "ns",
            "range": "± 92771.4717021388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2207580.6790123456,
            "unit": "ns",
            "range": "± 116165.93754644982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493118.7872340425,
            "unit": "ns",
            "range": "± 91869.41297796895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6438924.266666667,
            "unit": "ns",
            "range": "± 117807.7103439976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2843438.025,
            "unit": "ns",
            "range": "± 96201.49209101603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3316992.9615384615,
            "unit": "ns",
            "range": "± 46642.408920808295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3517039.810810811,
            "unit": "ns",
            "range": "± 109326.51459779599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3449354.5,
            "unit": "ns",
            "range": "± 103158.31352887022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12845482.922680411,
            "unit": "ns",
            "range": "± 1838466.6375564507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4333292.0046875,
            "unit": "ns",
            "range": "± 77132.31776822689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1343118.6407552084,
            "unit": "ns",
            "range": "± 20229.707812105302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 882547.6046316965,
            "unit": "ns",
            "range": "± 9083.649044688389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1991625.6412259615,
            "unit": "ns",
            "range": "± 32497.224846542867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618007.9075520834,
            "unit": "ns",
            "range": "± 7945.667462995231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601691.9856039326,
            "unit": "ns",
            "range": "± 34854.80124680435"
          }
        ]
      }
    ]
  }
}