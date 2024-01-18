window.BENCHMARK_DATA = {
  "lastUpdate": 1705578175719,
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
          "id": "9831daffbd0096dfd13fb562ee8aa1d0f6beda36",
          "message": "Merge fix",
          "timestamp": "2024-01-18T20:25:19+09:00",
          "tree_id": "eefc446389a4bcddee5ed9fe742777ad6904810a",
          "url": "https://github.com/greymistcube/libplanet/commit/9831daffbd0096dfd13fb562ee8aa1d0f6beda36"
        },
        "date": 1705578158696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9776471.15625,
            "unit": "ns",
            "range": "± 297892.64102223236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23633777.923076924,
            "unit": "ns",
            "range": "± 151028.46729422765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52698749.73,
            "unit": "ns",
            "range": "± 4855515.248957436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117181783.25,
            "unit": "ns",
            "range": "± 11235381.283324586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245902338.47368422,
            "unit": "ns",
            "range": "± 5431552.136830568"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48869.5376344086,
            "unit": "ns",
            "range": "± 13962.009166616279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274807.82558139536,
            "unit": "ns",
            "range": "± 14394.656902877998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259534.06666666668,
            "unit": "ns",
            "range": "± 19841.501582017765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235642.04081632654,
            "unit": "ns",
            "range": "± 25743.592704564817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4613057.396907217,
            "unit": "ns",
            "range": "± 355830.42338203633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4256701.153846154,
            "unit": "ns",
            "range": "± 51070.725009288435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16179.1875,
            "unit": "ns",
            "range": "± 3486.9776033950875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78319.65979381443,
            "unit": "ns",
            "range": "± 8255.608423074429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76091.0744680851,
            "unit": "ns",
            "range": "± 8835.157449095566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77557.98913043478,
            "unit": "ns",
            "range": "± 10235.460353507908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5346.34375,
            "unit": "ns",
            "range": "± 1559.5528429860237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14328.510416666666,
            "unit": "ns",
            "range": "± 3238.1121904259408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1305307.2298850575,
            "unit": "ns",
            "range": "± 117104.08457105843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949527.3978494625,
            "unit": "ns",
            "range": "± 185912.8036107682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1837029.2872340425,
            "unit": "ns",
            "range": "± 160478.19729383817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20377666.431034483,
            "unit": "ns",
            "range": "± 2635407.50534148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3636006.6666666665,
            "unit": "ns",
            "range": "± 134234.54254366373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446668.9845360825,
            "unit": "ns",
            "range": "± 286653.87784959533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3758072.695402299,
            "unit": "ns",
            "range": "± 240473.03209922783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4153356.777777778,
            "unit": "ns",
            "range": "± 553070.3658373685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27585636.265306123,
            "unit": "ns",
            "range": "± 4767381.715223363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4339064.147395833,
            "unit": "ns",
            "range": "± 60743.66608352829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1363477.7821514423,
            "unit": "ns",
            "range": "± 20401.144436882063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 887168.1169433594,
            "unit": "ns",
            "range": "± 15547.205232914903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2004920.248046875,
            "unit": "ns",
            "range": "± 54444.07275207389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623658.7409505208,
            "unit": "ns",
            "range": "± 8145.918178920675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601938.2732714844,
            "unit": "ns",
            "range": "± 42616.490635837334"
          }
        ]
      }
    ]
  }
}