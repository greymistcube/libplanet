window.BENCHMARK_DATA = {
  "lastUpdate": 1679040151288,
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
          "id": "8bdcf2943248ad564bb640786cccf2405d470018",
          "message": "Implemented IBencodable for BlockCommit",
          "timestamp": "2023-03-17T14:20:23+09:00",
          "tree_id": "76831a6c51a007ca9ff79824232395c3d299955c",
          "url": "https://github.com/greymistcube/libplanet/commit/8bdcf2943248ad564bb640786cccf2405d470018"
        },
        "date": 1679031311703,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8143240.833333333,
            "unit": "ns",
            "range": "± 44336.590404164665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19958675.722222224,
            "unit": "ns",
            "range": "± 414875.72327988356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51707190.7037037,
            "unit": "ns",
            "range": "± 1448388.0129051378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104360443.79508197,
            "unit": "ns",
            "range": "± 4681332.299613239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 195698609.95238096,
            "unit": "ns",
            "range": "± 4435329.130957234"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58274.47777777778,
            "unit": "ns",
            "range": "± 6973.8199102034505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204519.33695652173,
            "unit": "ns",
            "range": "± 20555.321668249628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200995.73626373627,
            "unit": "ns",
            "range": "± 16752.177575092977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172197.72043010753,
            "unit": "ns",
            "range": "± 10643.70503014891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11667332.416666666,
            "unit": "ns",
            "range": "± 296356.73652247834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9440542.244444445,
            "unit": "ns",
            "range": "± 357722.34843261255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17116.191011235955,
            "unit": "ns",
            "range": "± 2054.000585755009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55472.57142857143,
            "unit": "ns",
            "range": "± 8178.3481683581185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49498.95360824742,
            "unit": "ns",
            "range": "± 5938.881658578172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112150.375,
            "unit": "ns",
            "range": "± 16733.44321710269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5966.7558139534885,
            "unit": "ns",
            "range": "± 679.8011462885395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18895.373626373625,
            "unit": "ns",
            "range": "± 3901.4889341502308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523146.688172043,
            "unit": "ns",
            "range": "± 136472.83700516622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823702.801369863,
            "unit": "ns",
            "range": "± 139325.0720826104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2480284.8061224488,
            "unit": "ns",
            "range": "± 194231.89492856048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6167687.412698412,
            "unit": "ns",
            "range": "± 281945.86241142766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3216507.9655172415,
            "unit": "ns",
            "range": "± 139099.20132985685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4915346.525641026,
            "unit": "ns",
            "range": "± 251624.02126553218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23502254.826086957,
            "unit": "ns",
            "range": "± 894328.4737547511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5982287.533333333,
            "unit": "ns",
            "range": "± 225889.40497464684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27326023.138888888,
            "unit": "ns",
            "range": "± 894693.7568053153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6300396.0859375,
            "unit": "ns",
            "range": "± 33040.647720636385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938972.9024739584,
            "unit": "ns",
            "range": "± 12361.278543838196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236455.016015625,
            "unit": "ns",
            "range": "± 4254.150700134378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2392739.345572917,
            "unit": "ns",
            "range": "± 13802.106456746784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819369.3500279018,
            "unit": "ns",
            "range": "± 2694.8909434347747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 695377.1766183035,
            "unit": "ns",
            "range": "± 4705.29296323194"
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
          "id": "573329a37a0f1d1b50a64f53c1b9f4fbf9daebc1",
          "message": "Changelog",
          "timestamp": "2023-03-17T14:24:13+09:00",
          "tree_id": "7ea7e3f86089b040e6aaee7163058da70e2643e0",
          "url": "https://github.com/greymistcube/libplanet/commit/573329a37a0f1d1b50a64f53c1b9f4fbf9daebc1"
        },
        "date": 1679031711286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9087181.933333334,
            "unit": "ns",
            "range": "± 152771.0516484748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23052185.57142857,
            "unit": "ns",
            "range": "± 280169.5931823367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57898812.333333336,
            "unit": "ns",
            "range": "± 639894.7611264646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 117942233.3,
            "unit": "ns",
            "range": "± 1330029.4163784068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 227000473.86666667,
            "unit": "ns",
            "range": "± 3333564.195075335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65509.77419354839,
            "unit": "ns",
            "range": "± 9215.064320860036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231481.16470588234,
            "unit": "ns",
            "range": "± 12457.493911055206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236418.04166666666,
            "unit": "ns",
            "range": "± 9270.883094933786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212703.82291666666,
            "unit": "ns",
            "range": "± 13886.419457414455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12596129.435483871,
            "unit": "ns",
            "range": "± 572134.913635163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10625473.152941177,
            "unit": "ns",
            "range": "± 553176.5474488598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21386.805882352943,
            "unit": "ns",
            "range": "± 4524.920549219699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59370.221052631576,
            "unit": "ns",
            "range": "± 8608.474487608557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47051.41573033708,
            "unit": "ns",
            "range": "± 6050.167561182591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109115.03225806452,
            "unit": "ns",
            "range": "± 15645.34481844611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5546.395604395604,
            "unit": "ns",
            "range": "± 601.4209632957395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19521.284090909092,
            "unit": "ns",
            "range": "± 2500.50424316553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659389.888888889,
            "unit": "ns",
            "range": "± 139083.598761211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3081196.0517241377,
            "unit": "ns",
            "range": "± 134111.61234415876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2772672.714285714,
            "unit": "ns",
            "range": "± 280175.4271237565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6921041.46969697,
            "unit": "ns",
            "range": "± 326030.6463251679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3921618.5416666665,
            "unit": "ns",
            "range": "± 97045.52950032365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5969531.090909091,
            "unit": "ns",
            "range": "± 184997.646037957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27847843.837837838,
            "unit": "ns",
            "range": "± 937472.7927531644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7550360.447368421,
            "unit": "ns",
            "range": "± 241545.7725958013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32868953.92105263,
            "unit": "ns",
            "range": "± 695754.5998730296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6966817.026227678,
            "unit": "ns",
            "range": "± 122250.52576033032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2284049.339583333,
            "unit": "ns",
            "range": "± 26444.17911945059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1486336.7465122768,
            "unit": "ns",
            "range": "± 10596.940466648704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3183414.9419270833,
            "unit": "ns",
            "range": "± 22626.296423345393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946556.5096354167,
            "unit": "ns",
            "range": "± 7244.304981186961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867288.0916015625,
            "unit": "ns",
            "range": "± 6722.911420816199"
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
          "id": "1af80b249526dc8def67cc29607c9aeacbe5b853",
          "message": "Changelog",
          "timestamp": "2023-03-17T16:46:28+09:00",
          "tree_id": "7a0907c438012591008e907aab2715fd36c87c2e",
          "url": "https://github.com/greymistcube/libplanet/commit/1af80b249526dc8def67cc29607c9aeacbe5b853"
        },
        "date": 1679040128281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7969935.238095238,
            "unit": "ns",
            "range": "± 189289.15010425315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19224547.94117647,
            "unit": "ns",
            "range": "± 385645.65903859056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47647105.291666664,
            "unit": "ns",
            "range": "± 1209872.5872680715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 94459334.64285715,
            "unit": "ns",
            "range": "± 1507524.3302401383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191017441,
            "unit": "ns",
            "range": "± 1002198.9333005864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58894.55789473684,
            "unit": "ns",
            "range": "± 7719.652275152821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197546.47311827957,
            "unit": "ns",
            "range": "± 16266.05261873529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193051.2888888889,
            "unit": "ns",
            "range": "± 10940.058714634508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173068.8440860215,
            "unit": "ns",
            "range": "± 9597.372357209373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11852263.233333332,
            "unit": "ns",
            "range": "± 307820.5369764632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9351216.818181818,
            "unit": "ns",
            "range": "± 293323.57829637715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17605.795454545456,
            "unit": "ns",
            "range": "± 1740.4364306617188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52357.414893617024,
            "unit": "ns",
            "range": "± 4838.68164898311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48309.573684210525,
            "unit": "ns",
            "range": "± 4763.215508863164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116858.61176470589,
            "unit": "ns",
            "range": "± 9531.766333204583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9163.510416666666,
            "unit": "ns",
            "range": "± 1194.7072356178812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27000.244897959183,
            "unit": "ns",
            "range": "± 3077.7110329420607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529114.5656565656,
            "unit": "ns",
            "range": "± 184212.83302485777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2705764.55,
            "unit": "ns",
            "range": "± 119524.60277075149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2413006.5913978494,
            "unit": "ns",
            "range": "± 207950.94565792888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5897223.188888889,
            "unit": "ns",
            "range": "± 224186.950392141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3207581.5535714286,
            "unit": "ns",
            "range": "± 137913.66186408332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4908507.052631579,
            "unit": "ns",
            "range": "± 102219.85361327465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23834506.37142857,
            "unit": "ns",
            "range": "± 739872.0621452098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6160588.295454546,
            "unit": "ns",
            "range": "± 228382.56095232672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27148273.692307692,
            "unit": "ns",
            "range": "± 1116564.2769500648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6572276.182641006,
            "unit": "ns",
            "range": "± 233446.4869704116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2051136.9595052083,
            "unit": "ns",
            "range": "± 18917.661700331017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234678.439453125,
            "unit": "ns",
            "range": "± 10440.241236194777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2748907.751171875,
            "unit": "ns",
            "range": "± 75689.88151079165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836163.1414713542,
            "unit": "ns",
            "range": "± 8924.227655300447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805449.4986328125,
            "unit": "ns",
            "range": "± 8599.087957149586"
          }
        ]
      }
    ]
  }
}