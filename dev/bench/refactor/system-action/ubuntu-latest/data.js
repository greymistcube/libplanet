window.BENCHMARK_DATA = {
  "lastUpdate": 1682466678253,
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
          "id": "4ae90c4687157fd081e727e541775595a2de8a89",
          "message": "Additional tool in preparation for adding Registry to ActionTypeLoader",
          "timestamp": "2023-04-25T18:04:40+09:00",
          "tree_id": "7ba5f549a63ce670d2474b5a812ea7f0d4952b89",
          "url": "https://github.com/greymistcube/libplanet/commit/4ae90c4687157fd081e727e541775595a2de8a89"
        },
        "date": 1682414364711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8053693.275862069,
            "unit": "ns",
            "range": "± 230870.77394645568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21635199,
            "unit": "ns",
            "range": "± 212917.0304296958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54863568.06666667,
            "unit": "ns",
            "range": "± 360529.69920332235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110935843.8,
            "unit": "ns",
            "range": "± 584036.0544592383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218167532.53333333,
            "unit": "ns",
            "range": "± 1988179.7161693934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49593.38461538462,
            "unit": "ns",
            "range": "± 3045.085186800493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483414.8333333333,
            "unit": "ns",
            "range": "± 112140.54119594437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678480.76,
            "unit": "ns",
            "range": "± 68910.18863303162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2359497.341772152,
            "unit": "ns",
            "range": "± 122365.99803226785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6040257.33,
            "unit": "ns",
            "range": "± 409686.7210327752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910127.713020833,
            "unit": "ns",
            "range": "± 32341.508720696045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858016.9328125,
            "unit": "ns",
            "range": "± 4152.373166809492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377028.6458333333,
            "unit": "ns",
            "range": "± 3409.92101574527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609036.15625,
            "unit": "ns",
            "range": "± 2624.9493730299573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826703.1060546875,
            "unit": "ns",
            "range": "± 784.1928533713799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762000.4252604167,
            "unit": "ns",
            "range": "± 702.5207656531394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297485.3611111111,
            "unit": "ns",
            "range": "± 9776.581822038614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280174.17647058825,
            "unit": "ns",
            "range": "± 9007.35250670449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237683.93333333332,
            "unit": "ns",
            "range": "± 4281.489735171737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4379507.428571428,
            "unit": "ns",
            "range": "± 52035.99065693236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3967810.8,
            "unit": "ns",
            "range": "± 44341.65535475643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20135.308510638297,
            "unit": "ns",
            "range": "± 1289.3927471821494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93282.56521739131,
            "unit": "ns",
            "range": "± 6179.027039069024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86829.65625,
            "unit": "ns",
            "range": "± 5452.6847386896925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102371.0625,
            "unit": "ns",
            "range": "± 9774.568072635177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6534.4375,
            "unit": "ns",
            "range": "± 687.2060567789579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19218.483870967742,
            "unit": "ns",
            "range": "± 1861.7454562207922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432802.4,
            "unit": "ns",
            "range": "± 77354.4726127714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3673896.730769231,
            "unit": "ns",
            "range": "± 97136.3698133949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4267881.555555556,
            "unit": "ns",
            "range": "± 84132.50246326937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4597486.6,
            "unit": "ns",
            "range": "± 137081.01493909006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7060228.181818182,
            "unit": "ns",
            "range": "± 168347.3617530238"
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
          "id": "7b2175f813edd520bd756afc91fc883560b5c634",
          "message": "Changelog",
          "timestamp": "2023-04-25T18:10:04+09:00",
          "tree_id": "edb79ad730cc058ce80548023203bf4275eda639",
          "url": "https://github.com/greymistcube/libplanet/commit/7b2175f813edd520bd756afc91fc883560b5c634"
        },
        "date": 1682414650826,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7901755.666666667,
            "unit": "ns",
            "range": "± 138092.05853687742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21383689.14285714,
            "unit": "ns",
            "range": "± 130598.22903962257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53902361.8,
            "unit": "ns",
            "range": "± 484097.62093126867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110187471.35714285,
            "unit": "ns",
            "range": "± 863454.6089110798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218469268.2857143,
            "unit": "ns",
            "range": "± 1380063.2788954854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50125.354838709674,
            "unit": "ns",
            "range": "± 3057.0426126837647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1509113.0404040404,
            "unit": "ns",
            "range": "± 115162.76642983992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2722831.972222222,
            "unit": "ns",
            "range": "± 83807.39436332951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2365532.1413043477,
            "unit": "ns",
            "range": "± 125729.40248879179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5958715.890909091,
            "unit": "ns",
            "range": "± 251791.57921499375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5870496.246651785,
            "unit": "ns",
            "range": "± 12577.466512719653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852475.329296875,
            "unit": "ns",
            "range": "± 1789.4071968301416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382764.308314732,
            "unit": "ns",
            "range": "± 3342.2225197165208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616011.6833147323,
            "unit": "ns",
            "range": "± 1237.4273610046835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831390.6844951923,
            "unit": "ns",
            "range": "± 270.8944089401104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767786.8873465402,
            "unit": "ns",
            "range": "± 263.6326636043147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296802.81481481483,
            "unit": "ns",
            "range": "± 7595.24555756903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281986,
            "unit": "ns",
            "range": "± 9155.228159202743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237591.95833333334,
            "unit": "ns",
            "range": "± 6126.414871040114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4421914.846153846,
            "unit": "ns",
            "range": "± 25091.09235647236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961904.466666667,
            "unit": "ns",
            "range": "± 46666.35996222342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21511.05376344086,
            "unit": "ns",
            "range": "± 1598.7612892866625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94480.06666666667,
            "unit": "ns",
            "range": "± 4554.771428487469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82703.8,
            "unit": "ns",
            "range": "± 2726.310411311142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101115.42857142857,
            "unit": "ns",
            "range": "± 15027.927751871312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7489.578947368421,
            "unit": "ns",
            "range": "± 785.2367386478325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20138.84375,
            "unit": "ns",
            "range": "± 1598.0645552346652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3460208.6666666665,
            "unit": "ns",
            "range": "± 108627.52065075022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3771188.08,
            "unit": "ns",
            "range": "± 95759.71514373882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4200677.571428572,
            "unit": "ns",
            "range": "± 92656.74381315772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4591042.474576271,
            "unit": "ns",
            "range": "± 203114.61086364056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7066629,
            "unit": "ns",
            "range": "± 140585.7426319433"
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
          "id": "6d0843e3c65eb6a75416a2303ef05996a65118b6",
          "message": "Changelog",
          "timestamp": "2023-04-25T18:09:04+09:00",
          "tree_id": "06db307d611aed0108a8720ed4a8e483ff194ba1",
          "url": "https://github.com/greymistcube/libplanet/commit/6d0843e3c65eb6a75416a2303ef05996a65118b6"
        },
        "date": 1682414662772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8271489,
            "unit": "ns",
            "range": "± 140074.4057089456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22006502.666666668,
            "unit": "ns",
            "range": "± 214554.4303483273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57066207.538461536,
            "unit": "ns",
            "range": "± 148425.69598883216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111522892.93333334,
            "unit": "ns",
            "range": "± 447360.9363836618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221317592.93333334,
            "unit": "ns",
            "range": "± 1345563.5079406837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60242.17525773196,
            "unit": "ns",
            "range": "± 8319.615874058216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1548226.6195652173,
            "unit": "ns",
            "range": "± 86056.55687348648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2859011.435897436,
            "unit": "ns",
            "range": "± 99547.01820530916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2466732.1447368423,
            "unit": "ns",
            "range": "± 115455.16726818874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6351864.373737373,
            "unit": "ns",
            "range": "± 525627.5887187986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5988155.637019231,
            "unit": "ns",
            "range": "± 25390.39043603163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870701.3888113839,
            "unit": "ns",
            "range": "± 2483.6850936801716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372691.2321614583,
            "unit": "ns",
            "range": "± 3212.851547538852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641513.162860577,
            "unit": "ns",
            "range": "± 4348.300888165953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832969.2263020833,
            "unit": "ns",
            "range": "± 777.9364708563925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756111.5407858456,
            "unit": "ns",
            "range": "± 30729.425937750326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308078.5652173913,
            "unit": "ns",
            "range": "± 17569.675108358788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290755.375,
            "unit": "ns",
            "range": "± 8708.327878271688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249541.9756097561,
            "unit": "ns",
            "range": "± 13105.154285200304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4482600.304347826,
            "unit": "ns",
            "range": "± 111433.86400683623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961720.714285714,
            "unit": "ns",
            "range": "± 45639.231953405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21952.659574468085,
            "unit": "ns",
            "range": "± 1874.758149581826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114914.97,
            "unit": "ns",
            "range": "± 12679.96252141721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98861.78,
            "unit": "ns",
            "range": "± 14498.308038226834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137017.95833333334,
            "unit": "ns",
            "range": "± 11103.24247749436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10190.39175257732,
            "unit": "ns",
            "range": "± 1794.0078592631464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28705.739583333332,
            "unit": "ns",
            "range": "± 3265.9699751892576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3588306.222222222,
            "unit": "ns",
            "range": "± 74730.32785922803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3833724.5555555555,
            "unit": "ns",
            "range": "± 97407.98752168963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4473964,
            "unit": "ns",
            "range": "± 83134.77495523244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4776237.238095238,
            "unit": "ns",
            "range": "± 170881.93979196245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7351120.161290322,
            "unit": "ns",
            "range": "± 221872.50979141105"
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
          "id": "6ea1051205961b85dc027f5930adbf56c2427a36",
          "message": "Use PlainValue directly",
          "timestamp": "2023-04-26T08:37:44+09:00",
          "tree_id": "6cba2c0ef3b8209c52d764d825675026e2c4dd98",
          "url": "https://github.com/greymistcube/libplanet/commit/6ea1051205961b85dc027f5930adbf56c2427a36"
        },
        "date": 1682466671343,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7477464.666666667,
            "unit": "ns",
            "range": "± 24120.195064559095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20585766,
            "unit": "ns",
            "range": "± 336695.10737418546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51108910.76923077,
            "unit": "ns",
            "range": "± 563542.4462707835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101373380.26666667,
            "unit": "ns",
            "range": "± 1506672.4036998348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202650107.2,
            "unit": "ns",
            "range": "± 2841123.200714092"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48597.686046511626,
            "unit": "ns",
            "range": "± 2647.4169531456523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384838.5894736843,
            "unit": "ns",
            "range": "± 82991.82911261405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2670175.6666666665,
            "unit": "ns",
            "range": "± 77671.27490433234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2231314.550561798,
            "unit": "ns",
            "range": "± 123082.6257504035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5883916.38,
            "unit": "ns",
            "range": "± 401354.74463351496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5793062.563100962,
            "unit": "ns",
            "range": "± 21345.425317751382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826802.9516927083,
            "unit": "ns",
            "range": "± 6956.40508936862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335092.0230189732,
            "unit": "ns",
            "range": "± 6048.167321740723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2752246.0457589286,
            "unit": "ns",
            "range": "± 14004.699706958916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844998.397265625,
            "unit": "ns",
            "range": "± 3110.3182494431585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744172.3104771206,
            "unit": "ns",
            "range": "± 1230.5957883301355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293612.8,
            "unit": "ns",
            "range": "± 7630.46220749438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277504.4210526316,
            "unit": "ns",
            "range": "± 5024.126262521115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224819,
            "unit": "ns",
            "range": "± 1840.9526519350427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4238944.214285715,
            "unit": "ns",
            "range": "± 31803.360925872574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3851382.3571428573,
            "unit": "ns",
            "range": "± 38357.40267658131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17613.58762886598,
            "unit": "ns",
            "range": "± 1376.0394158642505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97888.25974025975,
            "unit": "ns",
            "range": "± 4806.633479404428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75610.30232558139,
            "unit": "ns",
            "range": "± 2808.5595319519707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92696.78723404255,
            "unit": "ns",
            "range": "± 12251.145279683906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5876.581632653061,
            "unit": "ns",
            "range": "± 570.1768566914877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17432.541666666668,
            "unit": "ns",
            "range": "± 1245.0540628013894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3337199.5714285714,
            "unit": "ns",
            "range": "± 47796.83720259561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505891.3333333335,
            "unit": "ns",
            "range": "± 63601.07153934107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4087494,
            "unit": "ns",
            "range": "± 47232.32025243489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4686999.214285715,
            "unit": "ns",
            "range": "± 77818.62359771508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6885559.05,
            "unit": "ns",
            "range": "± 157025.88756315748"
          }
        ]
      }
    ]
  }
}