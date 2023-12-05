window.BENCHMARK_DATA = {
  "lastUpdate": 1701752721267,
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
          "id": "6cb46fce638fc41db0b719897e9af8c8e27c8762",
          "message": "Release 3.9.0",
          "timestamp": "2023-12-05T13:52:46+09:00",
          "tree_id": "5787cbf94dba3ffe5c78fe22ca49a64303906978",
          "url": "https://github.com/greymistcube/libplanet/commit/6cb46fce638fc41db0b719897e9af8c8e27c8762"
        },
        "date": 1701752697295,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 934592.8571428572,
            "unit": "ns",
            "range": "± 83533.43179113453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1706606.9767441861,
            "unit": "ns",
            "range": "± 58486.43471271102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1342588.888888889,
            "unit": "ns",
            "range": "± 117904.0001129325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5507219.587628866,
            "unit": "ns",
            "range": "± 323491.29130446183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33519.67213114754,
            "unit": "ns",
            "range": "± 1377.8993277366271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5111278.571428572,
            "unit": "ns",
            "range": "± 32556.889347049786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13220792.857142856,
            "unit": "ns",
            "range": "± 115174.44604589172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32036957.14285714,
            "unit": "ns",
            "range": "± 205403.87500758565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65098120,
            "unit": "ns",
            "range": "± 305274.02725139546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127219557.14285715,
            "unit": "ns",
            "range": "± 1324399.4347013903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3223922.8645833335,
            "unit": "ns",
            "range": "± 9233.770362278603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1020578.9202008928,
            "unit": "ns",
            "range": "± 1334.8476049807841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721777.9575892857,
            "unit": "ns",
            "range": "± 1761.6662872705454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1884282.8822544643,
            "unit": "ns",
            "range": "± 9815.463733788698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620741.7131696428,
            "unit": "ns",
            "range": "± 1581.8818844647617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577010.5403645834,
            "unit": "ns",
            "range": "± 1540.8418680024572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116560.1694915253,
            "unit": "ns",
            "range": "± 90307.57155967191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223780,
            "unit": "ns",
            "range": "± 83491.88117549049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2763973.913043478,
            "unit": "ns",
            "range": "± 69420.10592558446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2526393.3333333335,
            "unit": "ns",
            "range": "± 40709.08053610691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6245128.75,
            "unit": "ns",
            "range": "± 323789.24079424556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 161470.9090909091,
            "unit": "ns",
            "range": "± 6269.729533042747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155253.125,
            "unit": "ns",
            "range": "± 6790.281775250684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141715.38461538462,
            "unit": "ns",
            "range": "± 2109.4415350380273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2674228.5714285714,
            "unit": "ns",
            "range": "± 32838.00398158368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2414821.4285714286,
            "unit": "ns",
            "range": "± 33007.48583093115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9283.333333333334,
            "unit": "ns",
            "range": "± 819.1870456314217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50331.25,
            "unit": "ns",
            "range": "± 3866.0005854003425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42923.40425531915,
            "unit": "ns",
            "range": "± 1577.4515448986817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46547.916666666664,
            "unit": "ns",
            "range": "± 8108.228168662234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2142.1052631578946,
            "unit": "ns",
            "range": "± 304.7771935988024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8973.563218390804,
            "unit": "ns",
            "range": "± 901.608352311004"
          }
        ]
      }
    ]
  }
}