window.BENCHMARK_DATA = {
  "lastUpdate": 1687489075847,
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
          "id": "2641c8b47244fea95d46e0e36a4917fa43409b67",
          "message": "Prepare 2.2.1",
          "timestamp": "2023-06-23T11:35:37+09:00",
          "tree_id": "58bd13e35f132365d6012e0272eec3219a5dbcbb",
          "url": "https://github.com/greymistcube/libplanet/commit/2641c8b47244fea95d46e0e36a4917fa43409b67"
        },
        "date": 1687488965186,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8928297.551020408,
            "unit": "ns",
            "range": "± 356242.70591954235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23733473.53846154,
            "unit": "ns",
            "range": "± 173237.8065707249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57804771.06666667,
            "unit": "ns",
            "range": "± 504896.1272119624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116753627.06666666,
            "unit": "ns",
            "range": "± 815748.1052314992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229348878.73333332,
            "unit": "ns",
            "range": "± 2145608.6516829296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74470.55319148937,
            "unit": "ns",
            "range": "± 9372.65432804679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372237.90566037735,
            "unit": "ns",
            "range": "± 15545.06615427959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358122.74576271186,
            "unit": "ns",
            "range": "± 15063.977169339672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342524.6,
            "unit": "ns",
            "range": "± 10732.692881208935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4924738,
            "unit": "ns",
            "range": "± 84262.92606684244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4445531.428571428,
            "unit": "ns",
            "range": "± 74069.6881357885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20311.60824742268,
            "unit": "ns",
            "range": "± 1224.483969174201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99803.48387096774,
            "unit": "ns",
            "range": "± 5867.539050856328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115699.71428571429,
            "unit": "ns",
            "range": "± 14436.36997094991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131890.6888888889,
            "unit": "ns",
            "range": "± 21027.72590548143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6617.215789473684,
            "unit": "ns",
            "range": "± 1079.749810098439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18902.09677419355,
            "unit": "ns",
            "range": "± 1375.726219797132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2179410.7311827955,
            "unit": "ns",
            "range": "± 385461.1914621446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3717073.3295454546,
            "unit": "ns",
            "range": "± 310147.0551046294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3290546.5454545454,
            "unit": "ns",
            "range": "± 466367.6144211468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9836126.185393259,
            "unit": "ns",
            "range": "± 3232465.075892115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3969503.9402985075,
            "unit": "ns",
            "range": "± 184436.54325473018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4088778.9,
            "unit": "ns",
            "range": "± 98001.48456461751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5186785.115384615,
            "unit": "ns",
            "range": "± 138073.79240343242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5192701.763157895,
            "unit": "ns",
            "range": "± 178834.23552937177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8728901.25,
            "unit": "ns",
            "range": "± 221741.0681007389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7582701.819754465,
            "unit": "ns",
            "range": "± 100097.40619271935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2319277.1655910327,
            "unit": "ns",
            "range": "± 58355.42967593264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1463918.8621651786,
            "unit": "ns",
            "range": "± 5604.539823034274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3127366.8810096155,
            "unit": "ns",
            "range": "± 9753.646407993565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049264.6577524038,
            "unit": "ns",
            "range": "± 5327.548322307209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863640.896623884,
            "unit": "ns",
            "range": "± 2970.3318972065035"
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
          "id": "c59018e3f7b058437f3ded9b3e3cc54e59ec2c53",
          "message": "Merge pull request #3240 from greymistcube/release/2.2.0\n\n🚀 Release 2.2.0",
          "timestamp": "2023-06-23T11:31:50+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/greymistcube/libplanet/commit/c59018e3f7b058437f3ded9b3e3cc54e59ec2c53"
        },
        "date": 1687489059064,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9607353.94117647,
            "unit": "ns",
            "range": "± 1414972.208478747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28533627.91573034,
            "unit": "ns",
            "range": "± 8850776.068742609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73409387.89473684,
            "unit": "ns",
            "range": "± 19065990.364730377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130106262.32222222,
            "unit": "ns",
            "range": "± 21496921.51492707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251437721.5,
            "unit": "ns",
            "range": "± 38255214.31584063"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77674.5487804878,
            "unit": "ns",
            "range": "± 6294.086775956469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351725.19587628864,
            "unit": "ns",
            "range": "± 36725.41616812054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369756.1111111111,
            "unit": "ns",
            "range": "± 57453.42913957087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 390760.07216494845,
            "unit": "ns",
            "range": "± 74537.02950397198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4764754.366666666,
            "unit": "ns",
            "range": "± 631716.3401332181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4087442.295698925,
            "unit": "ns",
            "range": "± 299262.05462598946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23772.920454545456,
            "unit": "ns",
            "range": "± 4855.856567598969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125014.44680851063,
            "unit": "ns",
            "range": "± 13239.825924380308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125627.67777777778,
            "unit": "ns",
            "range": "± 14559.822116287258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132673.21739130435,
            "unit": "ns",
            "range": "± 19864.466770696108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8814.583333333334,
            "unit": "ns",
            "range": "± 1158.5101291306198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23759.22340425532,
            "unit": "ns",
            "range": "± 3374.4498282093723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1808347.2241379311,
            "unit": "ns",
            "range": "± 277243.75081487367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3362570.1304347827,
            "unit": "ns",
            "range": "± 385648.2551331259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2876547.0494505493,
            "unit": "ns",
            "range": "± 390198.10882838775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8432105.882978724,
            "unit": "ns",
            "range": "± 2276307.4521125765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3700714.146067416,
            "unit": "ns",
            "range": "± 509925.5707375464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4083730.532608696,
            "unit": "ns",
            "range": "± 843497.842795882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4893226.629411764,
            "unit": "ns",
            "range": "± 614465.7906340425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4807916.3176470585,
            "unit": "ns",
            "range": "± 449150.90907283867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8341652.211111112,
            "unit": "ns",
            "range": "± 743656.3817385121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7572646.987413194,
            "unit": "ns",
            "range": "± 145715.04045589687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2206397.059392756,
            "unit": "ns",
            "range": "± 79542.43389828272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1542003.722093485,
            "unit": "ns",
            "range": "± 68146.45570413003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3683378.6176417153,
            "unit": "ns",
            "range": "± 133967.42503099437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1050726.5236280488,
            "unit": "ns",
            "range": "± 37816.516634274965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 877440.9753715701,
            "unit": "ns",
            "range": "± 30882.44102180198"
          }
        ]
      }
    ]
  }
}