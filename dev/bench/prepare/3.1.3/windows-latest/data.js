window.BENCHMARK_DATA = {
  "lastUpdate": 1691650847982,
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
          "id": "cff522d7d987b363c6c80a59391a80c6c81f5b74",
          "message": "Prepare 3.1.3",
          "timestamp": "2023-08-10T15:47:29+09:00",
          "tree_id": "4f1744526a70056ce5533b086592ae352b6a96ea",
          "url": "https://github.com/greymistcube/libplanet/commit/cff522d7d987b363c6c80a59391a80c6c81f5b74"
        },
        "date": 1691650825031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485535.294117647,
            "unit": "ns",
            "range": "± 28575.928269622113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2392378.048780488,
            "unit": "ns",
            "range": "± 83752.18359002683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1661740.8602150537,
            "unit": "ns",
            "range": "± 102086.02642162312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4395594.047619048,
            "unit": "ns",
            "range": "± 233362.04838574948"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42925,
            "unit": "ns",
            "range": "± 1834.443190230163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6831438.461538462,
            "unit": "ns",
            "range": "± 32686.58079552776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17353064.285714287,
            "unit": "ns",
            "range": "± 121431.76372662236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45690493.333333336,
            "unit": "ns",
            "range": "± 334300.11851343286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91336003.33333333,
            "unit": "ns",
            "range": "± 481207.12479386776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183599140,
            "unit": "ns",
            "range": "± 1227355.1260448508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4339097.65625,
            "unit": "ns",
            "range": "± 16662.54283379096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1387081.69921875,
            "unit": "ns",
            "range": "± 1460.7958826211473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 995887.8348214285,
            "unit": "ns",
            "range": "± 1002.1752055475847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547667.3828125,
            "unit": "ns",
            "range": "± 2970.862439741069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805570.2078683035,
            "unit": "ns",
            "range": "± 981.4666220839791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722050.2213541666,
            "unit": "ns",
            "range": "± 758.8550269473009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2908368.4210526315,
            "unit": "ns",
            "range": "± 98174.24417361799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3082804.1666666665,
            "unit": "ns",
            "range": "± 79962.1757276617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3835693.3333333335,
            "unit": "ns",
            "range": "± 51536.041018005286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3412154.8387096776,
            "unit": "ns",
            "range": "± 76082.25302793321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5594662.962962963,
            "unit": "ns",
            "range": "± 154742.14817447902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241261.53846153847,
            "unit": "ns",
            "range": "± 8461.168744223141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226863.15789473685,
            "unit": "ns",
            "range": "± 7593.112848572199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197114.2857142857,
            "unit": "ns",
            "range": "± 5628.2168931932065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3726420,
            "unit": "ns",
            "range": "± 41776.24410389918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3379143.3333333335,
            "unit": "ns",
            "range": "± 39508.10887231464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16742.55319148936,
            "unit": "ns",
            "range": "± 1555.1156898984073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77357.44680851063,
            "unit": "ns",
            "range": "± 4864.784347168133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62413.41463414634,
            "unit": "ns",
            "range": "± 2055.4508140017574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69808.86075949368,
            "unit": "ns",
            "range": "± 4077.807036135141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4044.8453608247423,
            "unit": "ns",
            "range": "± 592.2012492283588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17064.94845360825,
            "unit": "ns",
            "range": "± 1845.6616494901293"
          }
        ]
      }
    ]
  }
}