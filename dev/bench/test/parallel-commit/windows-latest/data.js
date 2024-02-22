window.BENCHMARK_DATA = {
  "lastUpdate": 1708622600330,
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
          "id": "e443ed31ecd0c6b31c284148a8bb3477acd5eded",
          "message": "Parallel commit",
          "timestamp": "2024-02-22T22:06:07+09:00",
          "tree_id": "8d27655c949880994e0cf309ade45ea5dfb6d2c4",
          "url": "https://github.com/greymistcube/libplanet/commit/e443ed31ecd0c6b31c284148a8bb3477acd5eded"
        },
        "date": 1708622583066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980059.5744680851,
            "unit": "ns",
            "range": "± 89214.63103782262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1764378.5714285714,
            "unit": "ns",
            "range": "± 63505.688378648345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1990106,
            "unit": "ns",
            "range": "± 175226.6381321947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10022718.333333334,
            "unit": "ns",
            "range": "± 448169.22556433734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34593.023255813954,
            "unit": "ns",
            "range": "± 1804.8164774014735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5189791.666666667,
            "unit": "ns",
            "range": "± 33581.98809246445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13398826.666666666,
            "unit": "ns",
            "range": "± 136018.0264663825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33309700,
            "unit": "ns",
            "range": "± 185953.42675809155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66546163.333333336,
            "unit": "ns",
            "range": "± 692557.38686064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134223571.42857143,
            "unit": "ns",
            "range": "± 669803.5342587365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3334844.754464286,
            "unit": "ns",
            "range": "± 7495.233083057369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081138.5546875,
            "unit": "ns",
            "range": "± 2129.9319845759987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741700.0279017857,
            "unit": "ns",
            "range": "± 1436.0460019855627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956021.905048077,
            "unit": "ns",
            "range": "± 4082.7893611136196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624983.7239583334,
            "unit": "ns",
            "range": "± 1002.9781820943974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577687.0256696428,
            "unit": "ns",
            "range": "± 1985.6899990267632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139992.8571428573,
            "unit": "ns",
            "range": "± 42666.53583809307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2309743.023255814,
            "unit": "ns",
            "range": "± 125492.29134112784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2901125.925925926,
            "unit": "ns",
            "range": "± 81172.1892152374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3278634.4086021506,
            "unit": "ns",
            "range": "± 198203.43770031468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11020939.62264151,
            "unit": "ns",
            "range": "± 452180.7791732207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177471.42857142858,
            "unit": "ns",
            "range": "± 6980.535809257896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171938.88888888888,
            "unit": "ns",
            "range": "± 9663.930905657044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144203.0612244898,
            "unit": "ns",
            "range": "± 5737.998418467901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2932493.3333333335,
            "unit": "ns",
            "range": "± 48397.17327440086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2560428.5714285714,
            "unit": "ns",
            "range": "± 34717.30733469156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14136.734693877552,
            "unit": "ns",
            "range": "± 2960.126347091065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60448.958333333336,
            "unit": "ns",
            "range": "± 6499.263031770628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48279.34782608696,
            "unit": "ns",
            "range": "± 4118.213045833634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67398.96907216495,
            "unit": "ns",
            "range": "± 16509.78557581685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3283.505154639175,
            "unit": "ns",
            "range": "± 544.4187290838911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11643.333333333334,
            "unit": "ns",
            "range": "± 1523.5271023059202"
          }
        ]
      }
    ]
  }
}