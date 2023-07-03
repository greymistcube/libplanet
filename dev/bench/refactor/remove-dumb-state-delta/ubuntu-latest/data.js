window.BENCHMARK_DATA = {
  "lastUpdate": 1688363510784,
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
          "id": "40e474810f4076eb8ae7203ff0398dd16bf6761c",
          "message": "Removed unnecessary test code",
          "timestamp": "2023-07-03T14:32:26+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/40e474810f4076eb8ae7203ff0398dd16bf6761c"
        },
        "date": 1688363145826,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7980566.071428572,
            "unit": "ns",
            "range": "± 28141.62123005787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21690530.5,
            "unit": "ns",
            "range": "± 393282.4110020686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55528992.54545455,
            "unit": "ns",
            "range": "± 1360539.1277701966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107754074.16666667,
            "unit": "ns",
            "range": "± 2257920.1215756387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213945502.42857143,
            "unit": "ns",
            "range": "± 4764846.96977381"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46430.38461538462,
            "unit": "ns",
            "range": "± 2317.7537840324203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285442.7619047619,
            "unit": "ns",
            "range": "± 10319.426770356833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279441.7073170732,
            "unit": "ns",
            "range": "± 9210.127524209158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241520.83720930232,
            "unit": "ns",
            "range": "± 8946.884844751783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462876,
            "unit": "ns",
            "range": "± 56923.965004707316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914282.4,
            "unit": "ns",
            "range": "± 71381.61997301146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18005.63829787234,
            "unit": "ns",
            "range": "± 1124.4594481618767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87080.56842105264,
            "unit": "ns",
            "range": "± 6664.307118942517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71354.6,
            "unit": "ns",
            "range": "± 1266.5281453079292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90853.76530612246,
            "unit": "ns",
            "range": "± 13011.670980594212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5047.4315789473685,
            "unit": "ns",
            "range": "± 691.2498648013654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17149.709677419356,
            "unit": "ns",
            "range": "± 1271.1190514886887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474587.206185567,
            "unit": "ns",
            "range": "± 85316.07774389817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2809653.506849315,
            "unit": "ns",
            "range": "± 139133.47965234713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1845436.3333333333,
            "unit": "ns",
            "range": "± 118069.14505694192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4941175.914285715,
            "unit": "ns",
            "range": "± 157739.5333560195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6147365.708333333,
            "unit": "ns",
            "range": "± 39231.24043770912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929536.821484375,
            "unit": "ns",
            "range": "± 12984.001043047912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382928.6071614583,
            "unit": "ns",
            "range": "± 4179.608197034234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657099.5731770834,
            "unit": "ns",
            "range": "± 6794.390509757732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849294.6311848959,
            "unit": "ns",
            "range": "± 2748.8662215418176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789062.1798177083,
            "unit": "ns",
            "range": "± 2190.64464053889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3497766.933333333,
            "unit": "ns",
            "range": "± 53162.85765250916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3563989.1428571427,
            "unit": "ns",
            "range": "± 141832.69332635665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4546404.358974359,
            "unit": "ns",
            "range": "± 158351.09617131553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4027210.0967741935,
            "unit": "ns",
            "range": "± 121624.94707483737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6695737.303571428,
            "unit": "ns",
            "range": "± 286970.02624353516"
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
          "id": "24dbb50f814adebef9dae0ca37c233ca05f08c1b",
          "message": "[skip changelog] Removed unnecessary test code",
          "timestamp": "2023-07-03T14:33:06+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/24dbb50f814adebef9dae0ca37c233ca05f08c1b"
        },
        "date": 1688363245254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8313157.454545454,
            "unit": "ns",
            "range": "± 196967.04308727756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22396010.466666665,
            "unit": "ns",
            "range": "± 215828.6137351535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57356782.333333336,
            "unit": "ns",
            "range": "± 242624.7134537696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114159283.93333334,
            "unit": "ns",
            "range": "± 776464.3381807662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226959447.66666666,
            "unit": "ns",
            "range": "± 2277499.028407278"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52493.762886597935,
            "unit": "ns",
            "range": "± 6197.7280342833365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296760.9555555555,
            "unit": "ns",
            "range": "± 10507.673085883382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283039.08,
            "unit": "ns",
            "range": "± 11286.74998292878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249690.19047619047,
            "unit": "ns",
            "range": "± 5693.382146132891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4548602,
            "unit": "ns",
            "range": "± 45237.25067990895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4217128.538461538,
            "unit": "ns",
            "range": "± 25156.653429445472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19782.43157894737,
            "unit": "ns",
            "range": "± 1315.4285334641847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93047.39361702128,
            "unit": "ns",
            "range": "± 5936.613239666045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77345.72151898734,
            "unit": "ns",
            "range": "± 4017.739879828818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106912.05102040817,
            "unit": "ns",
            "range": "± 11842.928169863455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5701.15306122449,
            "unit": "ns",
            "range": "± 589.1482818274387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21006.797872340427,
            "unit": "ns",
            "range": "± 2048.160189781595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1544209.918367347,
            "unit": "ns",
            "range": "± 99473.43107539216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2952686.546875,
            "unit": "ns",
            "range": "± 136795.38408843527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1937101.7391304348,
            "unit": "ns",
            "range": "± 105767.51419685417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5228678.5121951215,
            "unit": "ns",
            "range": "± 187022.21227986822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6166249.9046875,
            "unit": "ns",
            "range": "± 50622.43361770106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1961414.911328125,
            "unit": "ns",
            "range": "± 4400.571035071501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407334.8213541666,
            "unit": "ns",
            "range": "± 2676.320376501222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631373.0403645835,
            "unit": "ns",
            "range": "± 2510.3662675266837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849764.4616135817,
            "unit": "ns",
            "range": "± 275.1427623421284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757044.1714192708,
            "unit": "ns",
            "range": "± 279.26297918822206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3655122.576923077,
            "unit": "ns",
            "range": "± 99986.2111006005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3848899.8620689656,
            "unit": "ns",
            "range": "± 111103.54594724566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4530472.294117647,
            "unit": "ns",
            "range": "± 88280.50787105039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4311810.114285714,
            "unit": "ns",
            "range": "± 141339.81570601428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6889795,
            "unit": "ns",
            "range": "± 97179.29432325934"
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
          "id": "8cec0688a9dda82cdf498dea569c01dbdf1fa625",
          "message": "[skip changelog] Removed unnecessary test code",
          "timestamp": "2023-07-03T14:39:28+09:00",
          "tree_id": "645c8d34b8ffd2a91ad83144a49ff20cdf353fc0",
          "url": "https://github.com/greymistcube/libplanet/commit/8cec0688a9dda82cdf498dea569c01dbdf1fa625"
        },
        "date": 1688363502509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7745054.066666666,
            "unit": "ns",
            "range": "± 38662.50276701605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19748792.8,
            "unit": "ns",
            "range": "± 149156.93466240753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50914790.2,
            "unit": "ns",
            "range": "± 347531.183217975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100380174.66666667,
            "unit": "ns",
            "range": "± 658318.3361413779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201035165.2142857,
            "unit": "ns",
            "range": "± 1132447.3891207878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45753.53846153846,
            "unit": "ns",
            "range": "± 2330.4228683341453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284771.93333333335,
            "unit": "ns",
            "range": "± 5260.452295419183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270601.6060606061,
            "unit": "ns",
            "range": "± 7868.661317766328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234775.6923076923,
            "unit": "ns",
            "range": "± 3762.4940838185025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4245662.714285715,
            "unit": "ns",
            "range": "± 29508.821553063575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822100.8571428573,
            "unit": "ns",
            "range": "± 31542.80939357749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16710.34375,
            "unit": "ns",
            "range": "± 1366.2165801036085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87794.53164556962,
            "unit": "ns",
            "range": "± 4565.001291418479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72161,
            "unit": "ns",
            "range": "± 1089.6342658586564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81668.83823529411,
            "unit": "ns",
            "range": "± 3139.264547440173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4563.105263157895,
            "unit": "ns",
            "range": "± 529.3843166917949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17050.452631578948,
            "unit": "ns",
            "range": "± 1352.3768970477618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356848.923076923,
            "unit": "ns",
            "range": "± 70060.25876988392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2581318.4166666665,
            "unit": "ns",
            "range": "± 85576.96683049208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1768627.0104166667,
            "unit": "ns",
            "range": "± 128200.03498755534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4667361.043478261,
            "unit": "ns",
            "range": "± 112125.00438409975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6233080.544471154,
            "unit": "ns",
            "range": "± 12042.456952362229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875008.4859375,
            "unit": "ns",
            "range": "± 2070.770220722981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358426.2021484375,
            "unit": "ns",
            "range": "± 1508.4580385381246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536145.5223958334,
            "unit": "ns",
            "range": "± 8002.432921565074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808881.5580729167,
            "unit": "ns",
            "range": "± 888.5585487248712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734781.2548828125,
            "unit": "ns",
            "range": "± 422.8065764518279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258139.3571428573,
            "unit": "ns",
            "range": "± 50715.03330997494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429672.588235294,
            "unit": "ns",
            "range": "± 109331.13022765116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4326759.257142857,
            "unit": "ns",
            "range": "± 141316.08376246967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3746402.2,
            "unit": "ns",
            "range": "± 130960.13070302673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6252819.6,
            "unit": "ns",
            "range": "± 112741.80049868688"
          }
        ]
      }
    ]
  }
}