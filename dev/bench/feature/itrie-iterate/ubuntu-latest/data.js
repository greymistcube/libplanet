window.BENCHMARK_DATA = {
  "lastUpdate": 1693546389851,
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
          "id": "5a1e57cbc860d5c0098ae5e3cd0da8fd9360f901",
          "message": "Cleanup",
          "timestamp": "2023-09-01T14:19:05+09:00",
          "tree_id": "376d8fea536cfb7fb26b670d17d90980e62eaa03",
          "url": "https://github.com/greymistcube/libplanet/commit/5a1e57cbc860d5c0098ae5e3cd0da8fd9360f901"
        },
        "date": 1693546382246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1281370.5408163266,
            "unit": "ns",
            "range": "± 81014.47308105761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2496718.484848485,
            "unit": "ns",
            "range": "± 76816.32053644315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1626591.12987013,
            "unit": "ns",
            "range": "± 82437.47712187553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4482153.1,
            "unit": "ns",
            "range": "± 123172.43642660284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266747.64,
            "unit": "ns",
            "range": "± 10749.47232831188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256610.11111111112,
            "unit": "ns",
            "range": "± 7967.42059954795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218848.35714285713,
            "unit": "ns",
            "range": "± 8003.025509665851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4077503.153846154,
            "unit": "ns",
            "range": "± 37528.478954535654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3854881.466666667,
            "unit": "ns",
            "range": "± 59126.38268134583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18221.326530612245,
            "unit": "ns",
            "range": "± 2288.417356028254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83838.46391752578,
            "unit": "ns",
            "range": "± 6256.591823931672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67376.07692307692,
            "unit": "ns",
            "range": "± 879.5060603864024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74774.9587628866,
            "unit": "ns",
            "range": "± 11702.126143994023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4421.854166666667,
            "unit": "ns",
            "range": "± 628.0492099252408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17014.329896907217,
            "unit": "ns",
            "range": "± 1841.1836417191964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46606.58139534884,
            "unit": "ns",
            "range": "± 2483.5432963935937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7704150,
            "unit": "ns",
            "range": "± 10241.790934131664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19935285.8,
            "unit": "ns",
            "range": "± 293520.6481143314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51248118.266666666,
            "unit": "ns",
            "range": "± 766330.9390073741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100099906.5,
            "unit": "ns",
            "range": "± 714697.7369079628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204580855.53846154,
            "unit": "ns",
            "range": "± 2600304.5268004225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3253741.1,
            "unit": "ns",
            "range": "± 73739.91289868236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3381459.3829787234,
            "unit": "ns",
            "range": "± 129605.81178034203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4129181.2,
            "unit": "ns",
            "range": "± 73548.82479026141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3796136.9444444445,
            "unit": "ns",
            "range": "± 76517.00135684742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5940537.47368421,
            "unit": "ns",
            "range": "± 74538.76996597767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4976812.362379808,
            "unit": "ns",
            "range": "± 12490.440698962315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1609924.0110677083,
            "unit": "ns",
            "range": "± 12008.338356555092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079611.2390625,
            "unit": "ns",
            "range": "± 1064.8428686117538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2541183.5234375,
            "unit": "ns",
            "range": "± 1424.9573057550704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822442.7227213542,
            "unit": "ns",
            "range": "± 1571.1495747250074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721040.2221304086,
            "unit": "ns",
            "range": "± 484.0998713273744"
          }
        ]
      }
    ]
  }
}