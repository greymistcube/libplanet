window.BENCHMARK_DATA = {
  "lastUpdate": 1687488987127,
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
      }
    ]
  }
}