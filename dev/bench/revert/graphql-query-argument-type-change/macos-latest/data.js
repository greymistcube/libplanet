window.BENCHMARK_DATA = {
  "lastUpdate": 1707287655708,
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
          "id": "db763b0d5205886da9a7c7240b3b551bd24e2768",
          "message": "Revert query argument type to be compatible with legacy queries",
          "timestamp": "2024-02-07T15:15:42+09:00",
          "tree_id": "f9cfa42ebc5d7a160cad261c75e8cfbd601eda52",
          "url": "https://github.com/greymistcube/libplanet/commit/db763b0d5205886da9a7c7240b3b551bd24e2768"
        },
        "date": 1707287630775,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9279864.302083334,
            "unit": "ns",
            "range": "± 1226097.1936394435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25957523.1185567,
            "unit": "ns",
            "range": "± 3604983.648472442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56356887.09139785,
            "unit": "ns",
            "range": "± 7714574.176573855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103877313.87356322,
            "unit": "ns",
            "range": "± 5681616.823884872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203408918.54166666,
            "unit": "ns",
            "range": "± 5228197.126357421"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58974.21276595745,
            "unit": "ns",
            "range": "± 18061.000067496672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237885.3791208791,
            "unit": "ns",
            "range": "± 14868.152968180877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232103.09574468085,
            "unit": "ns",
            "range": "± 17081.017762177104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224464.15168539327,
            "unit": "ns",
            "range": "± 16460.924568850594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4093870.8333333335,
            "unit": "ns",
            "range": "± 94912.16071364793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3601067.1428571427,
            "unit": "ns",
            "range": "± 63551.19624197261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17117.052631578947,
            "unit": "ns",
            "range": "± 3684.459671602952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70522.78723404255,
            "unit": "ns",
            "range": "± 11926.981969487519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70443.44897959183,
            "unit": "ns",
            "range": "± 14688.357123135027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77068.70430107527,
            "unit": "ns",
            "range": "± 14388.514153853188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5469.208333333333,
            "unit": "ns",
            "range": "± 1664.0079890791683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15440.197916666666,
            "unit": "ns",
            "range": "± 3136.2193183908935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1158781.896551724,
            "unit": "ns",
            "range": "± 154425.53644831426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2462854.222222222,
            "unit": "ns",
            "range": "± 184325.62293579578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1929235.559139785,
            "unit": "ns",
            "range": "± 185941.52177496103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 24874150.94329897,
            "unit": "ns",
            "range": "± 5434706.0595314065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3056812.5945945946,
            "unit": "ns",
            "range": "± 102952.67197451551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3077744.588235294,
            "unit": "ns",
            "range": "± 85751.39168200752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3731588.976190476,
            "unit": "ns",
            "range": "± 206264.78676273502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3985983.7580645164,
            "unit": "ns",
            "range": "± 293463.5684004843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23107666.67032967,
            "unit": "ns",
            "range": "± 2808302.887795708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4692091.636088709,
            "unit": "ns",
            "range": "± 106659.3637643268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1426448.8896484375,
            "unit": "ns",
            "range": "± 27606.174682794623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 949364.3263578869,
            "unit": "ns",
            "range": "± 34017.45111022424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2267876.1234944663,
            "unit": "ns",
            "range": "± 149406.05939755088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 692627.5077473958,
            "unit": "ns",
            "range": "± 10353.880007502457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 604735.2003641011,
            "unit": "ns",
            "range": "± 31782.45846151616"
          }
        ]
      }
    ]
  }
}