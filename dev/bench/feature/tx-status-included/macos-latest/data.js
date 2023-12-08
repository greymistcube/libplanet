window.BENCHMARK_DATA = {
  "lastUpdate": 1702003684020,
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
          "id": "718d7eab7705a0ccf84634c14106a58dbfe3fad0",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:09:49+09:00",
          "tree_id": "1a9ea1ff57502e6c167c79e20296575b0a8644cc",
          "url": "https://github.com/greymistcube/libplanet/commit/718d7eab7705a0ccf84634c14106a58dbfe3fad0"
        },
        "date": 1702002548815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7629823.166666667,
            "unit": "ns",
            "range": "± 19270.563042363265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18600599.615384616,
            "unit": "ns",
            "range": "± 250733.794313989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46419276.71428572,
            "unit": "ns",
            "range": "± 458267.58859215205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92747524.73333333,
            "unit": "ns",
            "range": "± 1347274.4616793387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190950793.2142857,
            "unit": "ns",
            "range": "± 2145763.3487853156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35157.03370786517,
            "unit": "ns",
            "range": "± 4106.132704010159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214286.56818181818,
            "unit": "ns",
            "range": "± 12987.565965932019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211639.82291666666,
            "unit": "ns",
            "range": "± 18289.065059408007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189602.5,
            "unit": "ns",
            "range": "± 11705.998128477044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3691982.8125,
            "unit": "ns",
            "range": "± 61851.123329835325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3453699.8125,
            "unit": "ns",
            "range": "± 64089.54370640997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12880.670103092783,
            "unit": "ns",
            "range": "± 1235.4553034007467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57883.86559139785,
            "unit": "ns",
            "range": "± 5257.151898345856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52501.89024390244,
            "unit": "ns",
            "range": "± 3979.4148361815915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60714.20430107527,
            "unit": "ns",
            "range": "± 11257.688884142926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3365.870786516854,
            "unit": "ns",
            "range": "± 385.3421555762451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11482.616279069767,
            "unit": "ns",
            "range": "± 784.3596589291187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004881.8105263158,
            "unit": "ns",
            "range": "± 62049.97517826491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2235050.904255319,
            "unit": "ns",
            "range": "± 131327.02645407876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559826.8333333333,
            "unit": "ns",
            "range": "± 182666.03940499935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6964710.505376345,
            "unit": "ns",
            "range": "± 467270.7668804641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2916919.6470588236,
            "unit": "ns",
            "range": "± 139161.80195646037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3077281.9285714286,
            "unit": "ns",
            "range": "± 51596.346117969195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3538320.9375,
            "unit": "ns",
            "range": "± 92602.9245824438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3430312.676056338,
            "unit": "ns",
            "range": "± 167592.6492243938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14161285.434343435,
            "unit": "ns",
            "range": "± 2203023.235151321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4346633.2373046875,
            "unit": "ns",
            "range": "± 80521.61601616646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1346381.74609375,
            "unit": "ns",
            "range": "± 20745.770781077106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 884193.7922014509,
            "unit": "ns",
            "range": "± 7399.393887083533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2284660.775330219,
            "unit": "ns",
            "range": "± 227827.10412791086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 719570.6906835937,
            "unit": "ns",
            "range": "± 60790.76725018455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 632616.9630558895,
            "unit": "ns",
            "range": "± 29520.360878851858"
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
          "id": "5f33b5ed2dc37e320a5f3dde70b899060605f70b",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:25:38+09:00",
          "tree_id": "4d891cda13d5c124a46b42fd03a4300f1ba5424c",
          "url": "https://github.com/greymistcube/libplanet/commit/5f33b5ed2dc37e320a5f3dde70b899060605f70b"
        },
        "date": 1702003412821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7899443.071428572,
            "unit": "ns",
            "range": "± 39243.1374431138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20265442,
            "unit": "ns",
            "range": "± 1534236.6675737977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50917333.87096774,
            "unit": "ns",
            "range": "± 3529367.7317055827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100264379.2125,
            "unit": "ns",
            "range": "± 5214924.5257049315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211946979.92222223,
            "unit": "ns",
            "range": "± 14260779.483956752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51079.28735632184,
            "unit": "ns",
            "range": "± 8399.07003145053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236575.010989011,
            "unit": "ns",
            "range": "± 16808.798938184795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235468.6559139785,
            "unit": "ns",
            "range": "± 22482.279508583128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231426.92857142858,
            "unit": "ns",
            "range": "± 8024.1460343228655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4275116.806451613,
            "unit": "ns",
            "range": "± 630401.8214534878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4487312.021276596,
            "unit": "ns",
            "range": "± 1035336.7762396008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20864.141304347828,
            "unit": "ns",
            "range": "± 5046.3942117370525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74092.32795698925,
            "unit": "ns",
            "range": "± 10299.477920098727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68564.17741935483,
            "unit": "ns",
            "range": "± 8794.326438307047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75960.96774193548,
            "unit": "ns",
            "range": "± 11277.143988242624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7736.244897959184,
            "unit": "ns",
            "range": "± 1657.9277856708577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24377.32978723404,
            "unit": "ns",
            "range": "± 5979.203473740756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1086977.2688172043,
            "unit": "ns",
            "range": "± 105255.60842623521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2410948.3516483516,
            "unit": "ns",
            "range": "± 235286.82445216962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1763543.8275862068,
            "unit": "ns",
            "range": "± 232424.97453107798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9448870.98901099,
            "unit": "ns",
            "range": "± 2526799.445400685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2911309.152173913,
            "unit": "ns",
            "range": "± 100114.86009622869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3068256.05,
            "unit": "ns",
            "range": "± 160421.75250036578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3754046.3720930233,
            "unit": "ns",
            "range": "± 204064.67131088304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3843107.846153846,
            "unit": "ns",
            "range": "± 482116.15109701344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14857661.62631579,
            "unit": "ns",
            "range": "± 2344546.372696874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4676979.573203125,
            "unit": "ns",
            "range": "± 378584.6598191093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1368387.9923023898,
            "unit": "ns",
            "range": "± 27218.19710756686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 886428.4758649553,
            "unit": "ns",
            "range": "± 9017.993972576665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2021907.5789620536,
            "unit": "ns",
            "range": "± 33916.03293584951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621136.5102213542,
            "unit": "ns",
            "range": "± 7476.835336230793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564896.4225725447,
            "unit": "ns",
            "range": "± 6971.176734674874"
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
          "id": "fe2e27d828d77ed0a5588b5242d3bd377b529ebf",
          "message": "Changelog",
          "timestamp": "2023-12-08T11:27:39+09:00",
          "tree_id": "b2a5d69e8ba8ada97c39d83c8ff896127f696a23",
          "url": "https://github.com/greymistcube/libplanet/commit/fe2e27d828d77ed0a5588b5242d3bd377b529ebf"
        },
        "date": 1702003664044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9446355.8,
            "unit": "ns",
            "range": "± 102085.36519235822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24847394.846938774,
            "unit": "ns",
            "range": "± 986050.1952550504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59671969.63076923,
            "unit": "ns",
            "range": "± 2689759.830157376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117501203.11764705,
            "unit": "ns",
            "range": "± 5573568.828248885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248180896.5128205,
            "unit": "ns",
            "range": "± 12335769.909633873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52840.06593406593,
            "unit": "ns",
            "range": "± 12261.492082307652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285608.7738095238,
            "unit": "ns",
            "range": "± 24606.610310490105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266228.9090909091,
            "unit": "ns",
            "range": "± 8388.315840961597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238620.01075268816,
            "unit": "ns",
            "range": "± 14458.815113591209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4737922.05882353,
            "unit": "ns",
            "range": "± 83158.55039130867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4432996.753968254,
            "unit": "ns",
            "range": "± 202534.77508613808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16709,
            "unit": "ns",
            "range": "± 1069.9685703669213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75740.65555555555,
            "unit": "ns",
            "range": "± 5729.385640557564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69049.70879120879,
            "unit": "ns",
            "range": "± 6557.9734598705345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76496.78421052631,
            "unit": "ns",
            "range": "± 12151.942104360387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4423.554347826087,
            "unit": "ns",
            "range": "± 700.8953828305592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17315.022471910113,
            "unit": "ns",
            "range": "± 2516.8557809728686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688828.2043010753,
            "unit": "ns",
            "range": "± 368876.6246212234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4400129.302083333,
            "unit": "ns",
            "range": "± 1052989.0610452266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2600536.8440860217,
            "unit": "ns",
            "range": "± 546022.6650396183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12444232.415789474,
            "unit": "ns",
            "range": "± 2774579.5690384535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3564576.069767442,
            "unit": "ns",
            "range": "± 192793.27138104907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3775939.25974026,
            "unit": "ns",
            "range": "± 192222.3966539938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4470695.27027027,
            "unit": "ns",
            "range": "± 150197.10403696733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4266599.96875,
            "unit": "ns",
            "range": "± 246898.50442189284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17033168.56122449,
            "unit": "ns",
            "range": "± 2618801.995797818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5369961.829180744,
            "unit": "ns",
            "range": "± 181423.429515563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1619233.083984375,
            "unit": "ns",
            "range": "± 33680.28463454866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1108284.027622768,
            "unit": "ns",
            "range": "± 43219.72322832126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543354.5271832193,
            "unit": "ns",
            "range": "± 125767.08401911394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 768432.6351615287,
            "unit": "ns",
            "range": "± 26056.832079830994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715103.6279933763,
            "unit": "ns",
            "range": "± 27424.739882073365"
          }
        ]
      }
    ]
  }
}