window.BENCHMARK_DATA = {
  "lastUpdate": 1696570803967,
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
          "id": "a7262433136bc8624a3b123bb7834f73ccd77f45",
          "message": "Remove more",
          "timestamp": "2023-10-06T14:17:58+09:00",
          "tree_id": "57f5b62f0971a37b87bbbfbace9bff439ab8d517",
          "url": "https://github.com/greymistcube/libplanet/commit/a7262433136bc8624a3b123bb7834f73ccd77f45"
        },
        "date": 1696570776850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294784.4444444445,
            "unit": "ns",
            "range": "± 104619.44295967891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2455665.11627907,
            "unit": "ns",
            "range": "± 132640.1711552875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1879838.383838384,
            "unit": "ns",
            "range": "± 156132.5174377298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7542148.148148148,
            "unit": "ns",
            "range": "± 208925.06822077176"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44183.78378378379,
            "unit": "ns",
            "range": "± 2220.146053879192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7256793.333333333,
            "unit": "ns",
            "range": "± 43873.33174144902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18230700,
            "unit": "ns",
            "range": "± 167480.23764014666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45946276.92307692,
            "unit": "ns",
            "range": "± 282981.28958715673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90749953.33333333,
            "unit": "ns",
            "range": "± 735751.7922570925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180637873.33333334,
            "unit": "ns",
            "range": "± 1090472.649468154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4411725.600961538,
            "unit": "ns",
            "range": "± 6297.686481277378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1406640.6510416667,
            "unit": "ns",
            "range": "± 3201.8248071189396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1007372.7957589285,
            "unit": "ns",
            "range": "± 995.8782449421385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549353.1808035714,
            "unit": "ns",
            "range": "± 2992.5325577784893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812431.1979166666,
            "unit": "ns",
            "range": "± 893.521617833936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739306.0825892857,
            "unit": "ns",
            "range": "± 675.5600591172756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2888628.378378378,
            "unit": "ns",
            "range": "± 97931.56946203455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3063768.1818181816,
            "unit": "ns",
            "range": "± 73735.74849461153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3764846.6666666665,
            "unit": "ns",
            "range": "± 48029.58711143828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3449219.35483871,
            "unit": "ns",
            "range": "± 87291.00151926634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9062701.818181818,
            "unit": "ns",
            "range": "± 386157.89348443557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239373.68421052632,
            "unit": "ns",
            "range": "± 6948.057640712466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231895.65217391305,
            "unit": "ns",
            "range": "± 8131.118729144201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197813.04347826086,
            "unit": "ns",
            "range": "± 4890.650109957132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3707507.6923076925,
            "unit": "ns",
            "range": "± 26441.36473843151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3370370,
            "unit": "ns",
            "range": "± 21904.637473766667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16527.659574468085,
            "unit": "ns",
            "range": "± 1401.6238090939994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78092.30769230769,
            "unit": "ns",
            "range": "± 5661.610111958352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62118.75,
            "unit": "ns",
            "range": "± 757.3803535872844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67941.93548387097,
            "unit": "ns",
            "range": "± 8178.28942703266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3972.9166666666665,
            "unit": "ns",
            "range": "± 462.14127861889676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15148.91304347826,
            "unit": "ns",
            "range": "± 1228.0149769299485"
          }
        ]
      }
    ]
  }
}