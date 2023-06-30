window.BENCHMARK_DATA = {
  "lastUpdate": 1688110871645,
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
          "id": "562375f5749f1239d08719639d67a1a5f05299b5",
          "message": "Reroute delta access",
          "timestamp": "2023-06-30T14:30:25+09:00",
          "tree_id": "389a47a66d56321adead8d670cdb6acdeb0ffd82",
          "url": "https://github.com/greymistcube/libplanet/commit/562375f5749f1239d08719639d67a1a5f05299b5"
        },
        "date": 1688103869535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7722121,
            "unit": "ns",
            "range": "± 53041.39691316585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18899918.583333332,
            "unit": "ns",
            "range": "± 171583.39767082696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47476038.5,
            "unit": "ns",
            "range": "± 1219782.7247354877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92094157.41666667,
            "unit": "ns",
            "range": "± 715756.2258702912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197783238.66666666,
            "unit": "ns",
            "range": "± 7776311.202524972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53556.420454545456,
            "unit": "ns",
            "range": "± 5086.497798649751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303840.6818181818,
            "unit": "ns",
            "range": "± 14181.157562776027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289897.4090909091,
            "unit": "ns",
            "range": "± 25828.41219332738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293172.1914893617,
            "unit": "ns",
            "range": "± 24612.148801112406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4200285.411764706,
            "unit": "ns",
            "range": "± 80794.19810934665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3721235.5384615385,
            "unit": "ns",
            "range": "± 47404.130879448654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17889.896907216495,
            "unit": "ns",
            "range": "± 3223.433510005726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82115.36170212766,
            "unit": "ns",
            "range": "± 7891.641639116535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75082.92307692308,
            "unit": "ns",
            "range": "± 5809.699323317036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97301.17525773196,
            "unit": "ns",
            "range": "± 14118.45785518192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4493.544303797468,
            "unit": "ns",
            "range": "± 624.1546651984042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15419.024096385541,
            "unit": "ns",
            "range": "± 1470.752917982401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1652136.3865979381,
            "unit": "ns",
            "range": "± 171877.50988130303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2871858.3766233767,
            "unit": "ns",
            "range": "± 145248.07735026442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2142833.232323232,
            "unit": "ns",
            "range": "± 178841.48339018156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6093784.978723404,
            "unit": "ns",
            "range": "± 363300.3669651468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3094069.6666666665,
            "unit": "ns",
            "range": "± 44315.3689723048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3245380.565217391,
            "unit": "ns",
            "range": "± 78738.35408653725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185254.519230769,
            "unit": "ns",
            "range": "± 170991.8060183908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3639106.976190476,
            "unit": "ns",
            "range": "± 154779.98083240373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7178523.086021505,
            "unit": "ns",
            "range": "± 447075.7700725824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194376.036621094,
            "unit": "ns",
            "range": "± 119058.28996135604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972295.0192708333,
            "unit": "ns",
            "range": "± 21158.962603247426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1225852.7453962055,
            "unit": "ns",
            "range": "± 14409.108936112496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2463882.2319010417,
            "unit": "ns",
            "range": "± 28637.044058965785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757745.9402204241,
            "unit": "ns",
            "range": "± 6507.959935619736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700020.7009626116,
            "unit": "ns",
            "range": "± 5695.410574587345"
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
          "id": "219464a934fb47fbb814412167099159126c623d",
          "message": "Reroute delta access",
          "timestamp": "2023-06-30T15:34:58+09:00",
          "tree_id": "3b24b483247f28bbab75c98f43e67928b1b298f2",
          "url": "https://github.com/greymistcube/libplanet/commit/219464a934fb47fbb814412167099159126c623d"
        },
        "date": 1688110856736,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8210949.423076923,
            "unit": "ns",
            "range": "± 87146.68778794898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27101876.864583332,
            "unit": "ns",
            "range": "± 7092361.089711684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50819119.07692308,
            "unit": "ns",
            "range": "± 1375514.3504712388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101504345.5,
            "unit": "ns",
            "range": "± 1465630.4018209917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207036794.5,
            "unit": "ns",
            "range": "± 4087709.2570180534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68467.375,
            "unit": "ns",
            "range": "± 10561.868545061423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309208,
            "unit": "ns",
            "range": "± 15843.350519770358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313287.8144329897,
            "unit": "ns",
            "range": "± 32775.02267871383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305219.7974683544,
            "unit": "ns",
            "range": "± 15697.218306879715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4233239.796296297,
            "unit": "ns",
            "range": "± 90981.26089763879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3815088.769230769,
            "unit": "ns",
            "range": "± 33143.350796587256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20556.416666666668,
            "unit": "ns",
            "range": "± 4299.014995301199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103478.94210526315,
            "unit": "ns",
            "range": "± 21206.404877890473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96385.4387755102,
            "unit": "ns",
            "range": "± 18913.452153758222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120124.45652173914,
            "unit": "ns",
            "range": "± 17829.6255804419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6137.9473684210525,
            "unit": "ns",
            "range": "± 1484.721668653981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19014.44210526316,
            "unit": "ns",
            "range": "± 3391.7958894448666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571958.21875,
            "unit": "ns",
            "range": "± 132318.18094961403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2939623.893939394,
            "unit": "ns",
            "range": "± 137598.33331815733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2150121.6428571427,
            "unit": "ns",
            "range": "± 237341.02676221248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5886160.981481481,
            "unit": "ns",
            "range": "± 238779.0623488932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3288278.1875,
            "unit": "ns",
            "range": "± 188470.84405338683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3432339.795774648,
            "unit": "ns",
            "range": "± 160633.1075823229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4637299.523809524,
            "unit": "ns",
            "range": "± 246639.51060467315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4060317.3958333335,
            "unit": "ns",
            "range": "± 342522.92976148176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7248655.153846154,
            "unit": "ns",
            "range": "± 298273.00376549264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7060481.487792969,
            "unit": "ns",
            "range": "± 278161.438611395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2211015.6226917612,
            "unit": "ns",
            "range": "± 53494.52326014243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411528.5477294922,
            "unit": "ns",
            "range": "± 26367.44597326477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2840303.6616847827,
            "unit": "ns",
            "range": "± 70997.02525714919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 940994.993203125,
            "unit": "ns",
            "range": "± 23989.0578698632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 816348.1025390625,
            "unit": "ns",
            "range": "± 17902.138375460003"
          }
        ]
      }
    ]
  }
}