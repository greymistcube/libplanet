window.BENCHMARK_DATA = {
  "lastUpdate": 1707183087966,
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
          "id": "eebea10b6c19f838c7378de055d759e33d09fc32",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:48:12+09:00",
          "tree_id": "35d56191c462f4ee3a7b9749431d77f05fa78129",
          "url": "https://github.com/greymistcube/libplanet/commit/eebea10b6c19f838c7378de055d759e33d09fc32"
        },
        "date": 1707152411327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027164.6464646464,
            "unit": "ns",
            "range": "± 141489.1899765875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1739859.2592592593,
            "unit": "ns",
            "range": "± 70727.18118185905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1544171.4285714286,
            "unit": "ns",
            "range": "± 157637.55112844528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10819277.41935484,
            "unit": "ns",
            "range": "± 977912.9255859393"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34427.94117647059,
            "unit": "ns",
            "range": "± 1586.2135133458494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5073513.333333333,
            "unit": "ns",
            "range": "± 36813.69827866226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13469053.333333334,
            "unit": "ns",
            "range": "± 154525.29550976746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32904500,
            "unit": "ns",
            "range": "± 798381.3565434694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66304217.64705882,
            "unit": "ns",
            "range": "± 1351637.2563650787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132221480,
            "unit": "ns",
            "range": "± 1352654.2754366847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3373711.160714286,
            "unit": "ns",
            "range": "± 9634.025233638838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074429.2367788462,
            "unit": "ns",
            "range": "± 1642.678685766847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738158.7472098215,
            "unit": "ns",
            "range": "± 1712.6022045834661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959643.8151041667,
            "unit": "ns",
            "range": "± 3654.3305767925867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612594.2122395834,
            "unit": "ns",
            "range": "± 1169.7698280254185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580222.6283482143,
            "unit": "ns",
            "range": "± 1223.7297601277132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2111656.9444444445,
            "unit": "ns",
            "range": "± 104153.91350100262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237242.8571428573,
            "unit": "ns",
            "range": "± 95296.41576230901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2798808.695652174,
            "unit": "ns",
            "range": "± 69099.68367934096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2883537.9310344825,
            "unit": "ns",
            "range": "± 81828.89558529652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12316098.351648351,
            "unit": "ns",
            "range": "± 1511590.1134870185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172691.02564102566,
            "unit": "ns",
            "range": "± 8853.896139919241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168732.35294117648,
            "unit": "ns",
            "range": "± 7480.131716784069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138133.33333333334,
            "unit": "ns",
            "range": "± 3489.570381762684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2841142.8571428573,
            "unit": "ns",
            "range": "± 43370.61597061229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2516035.714285714,
            "unit": "ns",
            "range": "± 29611.733826640077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12184.615384615385,
            "unit": "ns",
            "range": "± 1489.8115523577007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57416.12903225807,
            "unit": "ns",
            "range": "± 6109.068283095019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47396.84210526316,
            "unit": "ns",
            "range": "± 2817.0624745366104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63360.606060606064,
            "unit": "ns",
            "range": "± 14319.537233015528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2865.979381443299,
            "unit": "ns",
            "range": "± 898.3650193010521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11123.404255319148,
            "unit": "ns",
            "range": "± 1512.1319800675428"
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
          "id": "c6efe396e23da3d9e41db6102a08ad21d9df55f6",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:53:10+09:00",
          "tree_id": "4e11e1eb93f48b099fc8b2a621e4e276f8fa31a6",
          "url": "https://github.com/greymistcube/libplanet/commit/c6efe396e23da3d9e41db6102a08ad21d9df55f6"
        },
        "date": 1707152847449,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992662.1052631579,
            "unit": "ns",
            "range": "± 94609.22898051054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1804536.170212766,
            "unit": "ns",
            "range": "± 69889.18068140607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1636398,
            "unit": "ns",
            "range": "± 184892.52896936337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10845670.786516855,
            "unit": "ns",
            "range": "± 823313.0879123587"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35797.77777777778,
            "unit": "ns",
            "range": "± 2092.682691890681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5167030,
            "unit": "ns",
            "range": "± 117475.54773564359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13536350,
            "unit": "ns",
            "range": "± 95572.88600048414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33447050,
            "unit": "ns",
            "range": "± 452746.721094188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67270206.66666667,
            "unit": "ns",
            "range": "± 1015401.366432201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136697560,
            "unit": "ns",
            "range": "± 1781896.7477702757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3461313.2552083335,
            "unit": "ns",
            "range": "± 10443.060533536962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1098694.62890625,
            "unit": "ns",
            "range": "± 2261.3557771459773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756986.6666666666,
            "unit": "ns",
            "range": "± 1711.4222144613755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965237.2916666667,
            "unit": "ns",
            "range": "± 5232.880027190035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639949.0309495192,
            "unit": "ns",
            "range": "± 767.3450590063477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567932.1744791666,
            "unit": "ns",
            "range": "± 848.6224591298136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2211625.925925926,
            "unit": "ns",
            "range": "± 61996.31249947664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2331225,
            "unit": "ns",
            "range": "± 64691.30669023716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2901437.9310344825,
            "unit": "ns",
            "range": "± 76856.6263236438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2943343.4782608696,
            "unit": "ns",
            "range": "± 183971.7801486561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12555940.65934066,
            "unit": "ns",
            "range": "± 1527338.4718361124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184538.66666666666,
            "unit": "ns",
            "range": "± 8196.915921895907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173005.88235294117,
            "unit": "ns",
            "range": "± 7506.412827588914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144728.33333333334,
            "unit": "ns",
            "range": "± 6477.708625706162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2900923.6842105263,
            "unit": "ns",
            "range": "± 61333.31378718225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2763714.285714286,
            "unit": "ns",
            "range": "± 40981.193757115485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13506.382978723404,
            "unit": "ns",
            "range": "± 2214.847673620371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62257.291666666664,
            "unit": "ns",
            "range": "± 7382.39363252963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49850.54945054945,
            "unit": "ns",
            "range": "± 5055.895868002329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71854.16666666667,
            "unit": "ns",
            "range": "± 14957.982671939257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2794.8453608247423,
            "unit": "ns",
            "range": "± 611.5845427420171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12264.835164835165,
            "unit": "ns",
            "range": "± 1575.2512058133336"
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
          "id": "5dbfb0384307cfa2a0826a5a8bc975862f8b8b76",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T01:58:19+09:00",
          "tree_id": "a772813d589691ef608dc18f3e41cd487ddb65fc",
          "url": "https://github.com/greymistcube/libplanet/commit/5dbfb0384307cfa2a0826a5a8bc975862f8b8b76"
        },
        "date": 1707153077411,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011705.2631578947,
            "unit": "ns",
            "range": "± 146298.3416147925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1717637.0967741935,
            "unit": "ns",
            "range": "± 78019.00826368852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493068.75,
            "unit": "ns",
            "range": "± 146464.5876456508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10897906.52173913,
            "unit": "ns",
            "range": "± 1002739.8264342744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34239.240506329115,
            "unit": "ns",
            "range": "± 1790.7467087079788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4982060,
            "unit": "ns",
            "range": "± 26845.904183479674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13025792.857142856,
            "unit": "ns",
            "range": "± 147941.53972371714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32679442.85714286,
            "unit": "ns",
            "range": "± 234122.57379509468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63652986.666666664,
            "unit": "ns",
            "range": "± 447412.1427987952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129246050,
            "unit": "ns",
            "range": "± 829135.4169346432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281144.0011160714,
            "unit": "ns",
            "range": "± 4764.831013439094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055548.3723958333,
            "unit": "ns",
            "range": "± 2556.1074341429276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732826.4857700893,
            "unit": "ns",
            "range": "± 1695.9382855031736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941350.6277901786,
            "unit": "ns",
            "range": "± 6528.0693847402445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631068.9678485577,
            "unit": "ns",
            "range": "± 991.3352643526129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594127.96875,
            "unit": "ns",
            "range": "± 1897.118469902664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2155457.8947368423,
            "unit": "ns",
            "range": "± 72585.91789410092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2268541.379310345,
            "unit": "ns",
            "range": "± 99223.92898023466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2742001.9607843137,
            "unit": "ns",
            "range": "± 105848.82897830485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2905900,
            "unit": "ns",
            "range": "± 46185.83580029086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12280380.21978022,
            "unit": "ns",
            "range": "± 1360247.9355878702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172074.60317460317,
            "unit": "ns",
            "range": "± 6973.590000945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162516.92307692306,
            "unit": "ns",
            "range": "± 7567.293299761506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140562.85714285713,
            "unit": "ns",
            "range": "± 4332.102173737074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752964.285714286,
            "unit": "ns",
            "range": "± 40793.694971779034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493385.714285714,
            "unit": "ns",
            "range": "± 37535.82610997447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10902.150537634408,
            "unit": "ns",
            "range": "± 1287.6485557709664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52461.290322580644,
            "unit": "ns",
            "range": "± 5669.464974720211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47237.142857142855,
            "unit": "ns",
            "range": "± 1531.4517745639678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52198.958333333336,
            "unit": "ns",
            "range": "± 10452.423489231845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2363.5416666666665,
            "unit": "ns",
            "range": "± 389.634050080914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9874.725274725275,
            "unit": "ns",
            "range": "± 1227.607737439267"
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
          "id": "ba3e8609d30d572d5dfa8170984e9227f7714b0f",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T02:04:20+09:00",
          "tree_id": "a57b5d9db877a70376170edd3a1c97114c4f86bc",
          "url": "https://github.com/greymistcube/libplanet/commit/ba3e8609d30d572d5dfa8170984e9227f7714b0f"
        },
        "date": 1707153411937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954839,
            "unit": "ns",
            "range": "± 95291.26206139011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1696387.5,
            "unit": "ns",
            "range": "± 66405.38822344452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1458276.530612245,
            "unit": "ns",
            "range": "± 118661.64194149527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10829396.808510639,
            "unit": "ns",
            "range": "± 964421.7032275723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34055.93220338983,
            "unit": "ns",
            "range": "± 1520.1260367937143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4978985.714285715,
            "unit": "ns",
            "range": "± 32745.354506528736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12869786.666666666,
            "unit": "ns",
            "range": "± 219631.59695488348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32426080,
            "unit": "ns",
            "range": "± 370562.6305266859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63834246.666666664,
            "unit": "ns",
            "range": "± 486355.0406069722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135228273.33333334,
            "unit": "ns",
            "range": "± 1213015.596688486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3317090.1227678573,
            "unit": "ns",
            "range": "± 12423.385998892012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087974.9088541667,
            "unit": "ns",
            "range": "± 2978.299944498831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749657.4497767857,
            "unit": "ns",
            "range": "± 2194.9805497264992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947088.755580357,
            "unit": "ns",
            "range": "± 2420.496836567361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625223.0678013393,
            "unit": "ns",
            "range": "± 868.0831944057462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559810.2864583334,
            "unit": "ns",
            "range": "± 1872.4508961868537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2043457.142857143,
            "unit": "ns",
            "range": "± 39729.8602935097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237977.1428571427,
            "unit": "ns",
            "range": "± 63398.339585393514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2817492.8571428573,
            "unit": "ns",
            "range": "± 35700.51635665608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2877696.296296296,
            "unit": "ns",
            "range": "± 79948.28848642622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12336523.863636363,
            "unit": "ns",
            "range": "± 1389449.9411095271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169822.35294117648,
            "unit": "ns",
            "range": "± 8505.549679482217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164765.7894736842,
            "unit": "ns",
            "range": "± 8382.38713226058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139114.8148148148,
            "unit": "ns",
            "range": "± 3049.3005129428648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2790253.3333333335,
            "unit": "ns",
            "range": "± 42968.092259035104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2416966.6666666665,
            "unit": "ns",
            "range": "± 36284.756157534866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10058.695652173914,
            "unit": "ns",
            "range": "± 1090.1811699335078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53951.063829787236,
            "unit": "ns",
            "range": "± 5681.354992871131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44807.142857142855,
            "unit": "ns",
            "range": "± 2041.832185794964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57214.28571428572,
            "unit": "ns",
            "range": "± 13550.531621176155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2585.1063829787236,
            "unit": "ns",
            "range": "± 445.27566592898023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10001.041666666666,
            "unit": "ns",
            "range": "± 1516.7135379300703"
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
          "id": "74d8fbcbb0cc43266cafe7e5b39ecdf7073f65da",
          "message": "Added GitHub action to check changelog",
          "timestamp": "2024-02-06T10:18:06+09:00",
          "tree_id": "d8093f71bda1d6357463a066a3fc42579702174f",
          "url": "https://github.com/greymistcube/libplanet/commit/74d8fbcbb0cc43266cafe7e5b39ecdf7073f65da"
        },
        "date": 1707183061058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962300,
            "unit": "ns",
            "range": "± 123139.31981025936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1690784.3137254901,
            "unit": "ns",
            "range": "± 68373.51935522705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1490427.551020408,
            "unit": "ns",
            "range": "± 156694.1447735422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10966065.934065934,
            "unit": "ns",
            "range": "± 977101.6054547108"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34076.19047619047,
            "unit": "ns",
            "range": "± 1814.5077361994026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5085671.428571428,
            "unit": "ns",
            "range": "± 53255.977325358705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13307506.666666666,
            "unit": "ns",
            "range": "± 152186.311880568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31769576.923076924,
            "unit": "ns",
            "range": "± 212198.9638438658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65604050,
            "unit": "ns",
            "range": "± 1006267.130176042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129138516.66666667,
            "unit": "ns",
            "range": "± 1207811.15609514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3387657.947716346,
            "unit": "ns",
            "range": "± 11889.556684222192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067324.3443080357,
            "unit": "ns",
            "range": "± 3647.224958824574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744089.6028645834,
            "unit": "ns",
            "range": "± 3010.968599051623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999520.5078125,
            "unit": "ns",
            "range": "± 5285.591333464417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614693.4430803572,
            "unit": "ns",
            "range": "± 2007.6959269053614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566223.7862723215,
            "unit": "ns",
            "range": "± 1375.133624067244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2142503.3898305083,
            "unit": "ns",
            "range": "± 94298.87183678414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2215928.5714285714,
            "unit": "ns",
            "range": "± 60791.4946362221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2794584.210526316,
            "unit": "ns",
            "range": "± 121237.90630331765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2779565.11627907,
            "unit": "ns",
            "range": "± 146918.6663889777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12591008.510638298,
            "unit": "ns",
            "range": "± 1562585.7914449738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179552.1739130435,
            "unit": "ns",
            "range": "± 13370.3582128024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162093.84615384616,
            "unit": "ns",
            "range": "± 7549.811192239284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136946.15384615384,
            "unit": "ns",
            "range": "± 2182.7411606415853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2800486.6666666665,
            "unit": "ns",
            "range": "± 48345.865042076424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2518720,
            "unit": "ns",
            "range": "± 33244.574208218015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10322.826086956522,
            "unit": "ns",
            "range": "± 1383.347052739471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53577.17391304348,
            "unit": "ns",
            "range": "± 5003.58340297439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44211.36363636364,
            "unit": "ns",
            "range": "± 1354.1007329316399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50714.73684210526,
            "unit": "ns",
            "range": "± 10018.9285580489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2530.9278350515465,
            "unit": "ns",
            "range": "± 335.83255523346634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10165.217391304348,
            "unit": "ns",
            "range": "± 1482.7532144894626"
          }
        ]
      }
    ]
  }
}