window.BENCHMARK_DATA = {
  "lastUpdate": 1705553694251,
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
          "id": "ce54ebd07727d7c940c818cce9178253c4a8cb82",
          "message": "Cleanup and some documentation",
          "timestamp": "2024-01-18T13:40:17+09:00",
          "tree_id": "8c09cc15cfb0c6eaf03e0404c0f42df2356f5158",
          "url": "https://github.com/greymistcube/libplanet/commit/ce54ebd07727d7c940c818cce9178253c4a8cb82"
        },
        "date": 1705553464269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3701548.925,
            "unit": "ns",
            "range": "± 54561.38474487273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207111.3844401042,
            "unit": "ns",
            "range": "± 3613.888567871092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771957.414438101,
            "unit": "ns",
            "range": "± 5229.527171119124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937138.2779017857,
            "unit": "ns",
            "range": "± 6500.672684205975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636134.6613581731,
            "unit": "ns",
            "range": "± 1724.9012101288615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580067.94921875,
            "unit": "ns",
            "range": "± 899.6862903692397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2390196.1153846155,
            "unit": "ns",
            "range": "± 39478.0435526655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2522988.1666666665,
            "unit": "ns",
            "range": "± 75764.51965304831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153657.2580645164,
            "unit": "ns",
            "range": "± 92766.70586331705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2952082.193548387,
            "unit": "ns",
            "range": "± 129239.02916724913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6888687.428571428,
            "unit": "ns",
            "range": "± 152392.9539242453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40929.5625,
            "unit": "ns",
            "range": "± 5542.597961648823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193829.58536585365,
            "unit": "ns",
            "range": "± 6861.776945426052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192881.26,
            "unit": "ns",
            "range": "± 7312.519479297272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171552.42,
            "unit": "ns",
            "range": "± 4521.2119496141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3136826.5,
            "unit": "ns",
            "range": "± 33590.51020324469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2869457.8333333335,
            "unit": "ns",
            "range": "± 36490.02855314756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15327.366666666667,
            "unit": "ns",
            "range": "± 2203.7986112848707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58724.46666666667,
            "unit": "ns",
            "range": "± 3163.2529985102788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60461.97802197802,
            "unit": "ns",
            "range": "± 3921.1492900764633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62586.80612244898,
            "unit": "ns",
            "range": "± 10527.700090182476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2797.9883720930234,
            "unit": "ns",
            "range": "± 332.47579280960827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13117.345360824742,
            "unit": "ns",
            "range": "± 1921.732607680101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5675810.346153846,
            "unit": "ns",
            "range": "± 23750.085480008118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14314461.7,
            "unit": "ns",
            "range": "± 78837.22531737691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36857121.5,
            "unit": "ns",
            "range": "± 327136.7299792939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74930049.75,
            "unit": "ns",
            "range": "± 441093.4905649255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152007340.08333334,
            "unit": "ns",
            "range": "± 362413.41618891497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 945792.7173913043,
            "unit": "ns",
            "range": "± 74573.06259382506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814569.8936170214,
            "unit": "ns",
            "range": "± 70326.70241257988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1377625.994736842,
            "unit": "ns",
            "range": "± 97147.17128117257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6042434,
            "unit": "ns",
            "range": "± 387531.4988536347"
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
          "id": "c61248ddc720a28cea18f5dfda28d65709052b7e",
          "message": "Tweaked tests",
          "timestamp": "2024-01-18T13:44:05+09:00",
          "tree_id": "90452fd2a9b49dc0f5ad25967133c61a8e13b80a",
          "url": "https://github.com/greymistcube/libplanet/commit/c61248ddc720a28cea18f5dfda28d65709052b7e"
        },
        "date": 1705553687953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729443.4424479166,
            "unit": "ns",
            "range": "± 47930.97562429794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1184094.8272879464,
            "unit": "ns",
            "range": "± 2653.8731394563442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767265.4242788461,
            "unit": "ns",
            "range": "± 2528.5860310001713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946714.4694010417,
            "unit": "ns",
            "range": "± 2905.4439657147877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615545.3990071615,
            "unit": "ns",
            "range": "± 2246.849672089445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573360.583984375,
            "unit": "ns",
            "range": "± 890.3541744779131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397136.64,
            "unit": "ns",
            "range": "± 58512.474747470165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2560810.25,
            "unit": "ns",
            "range": "± 50010.80842577932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3237661.28,
            "unit": "ns",
            "range": "± 77431.81679953446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3085351.769230769,
            "unit": "ns",
            "range": "± 84101.67550925852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7046269.818181818,
            "unit": "ns",
            "range": "± 217690.29118946352"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40973.134020618556,
            "unit": "ns",
            "range": "± 5776.46386141799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210499.90526315788,
            "unit": "ns",
            "range": "± 19695.027726573626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197425.6224489796,
            "unit": "ns",
            "range": "± 7858.269229058047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166734.2142857143,
            "unit": "ns",
            "range": "± 2752.122661302934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087907.214285714,
            "unit": "ns",
            "range": "± 34201.12262929969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2866325.153846154,
            "unit": "ns",
            "range": "± 33712.231358084646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16792.682795698925,
            "unit": "ns",
            "range": "± 2201.634190215732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63384.54255319149,
            "unit": "ns",
            "range": "± 4476.950793427588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91464.19387755102,
            "unit": "ns",
            "range": "± 5858.221535142512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89045.97802197802,
            "unit": "ns",
            "range": "± 9633.666216829884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6862.90206185567,
            "unit": "ns",
            "range": "± 1074.907899734843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16861.35,
            "unit": "ns",
            "range": "± 6908.867026027735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5470669.357142857,
            "unit": "ns",
            "range": "± 28092.420647288043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15557108,
            "unit": "ns",
            "range": "± 123486.63018319028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37150396.06666667,
            "unit": "ns",
            "range": "± 323244.1369852706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74099519.75,
            "unit": "ns",
            "range": "± 165321.0270336997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149791239.26923078,
            "unit": "ns",
            "range": "± 915768.3587032398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003128.6836734693,
            "unit": "ns",
            "range": "± 108005.89730647225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1946087.9905660378,
            "unit": "ns",
            "range": "± 79954.55218738635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1424071.618556701,
            "unit": "ns",
            "range": "± 97400.80251192785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6088984.144927536,
            "unit": "ns",
            "range": "± 291743.89661085384"
          }
        ]
      }
    ]
  }
}