window.BENCHMARK_DATA = {
  "lastUpdate": 1700793954181,
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
          "id": "933ada7290d7910ff4d3fa82887d22c52ab51254",
          "message": "Prepare 3.8.1",
          "timestamp": "2023-11-24T11:32:48+09:00",
          "tree_id": "45fc17974df334c07b6218760a11d9124b75b336",
          "url": "https://github.com/greymistcube/libplanet/commit/933ada7290d7910ff4d3fa82887d22c52ab51254"
        },
        "date": 1700793933626,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942904.0404040404,
            "unit": "ns",
            "range": "± 105290.20916863001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1731427.8481012657,
            "unit": "ns",
            "range": "± 89546.48547371684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1247233.3333333333,
            "unit": "ns",
            "range": "± 79767.87332024772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5124779.518072289,
            "unit": "ns",
            "range": "± 272931.20626975305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34571.910112359554,
            "unit": "ns",
            "range": "± 2069.474503129025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4900035.714285715,
            "unit": "ns",
            "range": "± 65401.924308820635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13216800,
            "unit": "ns",
            "range": "± 98603.10774586599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32840306.666666668,
            "unit": "ns",
            "range": "± 291861.6121840395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64425506.666666664,
            "unit": "ns",
            "range": "± 660157.7890027144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127656128.57142857,
            "unit": "ns",
            "range": "± 408876.5460259489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3258579.5572916665,
            "unit": "ns",
            "range": "± 25561.25373135815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050838.4347098214,
            "unit": "ns",
            "range": "± 2043.4366093024937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753077.8599330357,
            "unit": "ns",
            "range": "± 1393.7339765627405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1892831.6796875,
            "unit": "ns",
            "range": "± 3719.6318587220417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609515.3190104166,
            "unit": "ns",
            "range": "± 2745.1526436480217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558286.3997395834,
            "unit": "ns",
            "range": "± 1960.0147924430357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2130156.25,
            "unit": "ns",
            "range": "± 83816.10546055256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2206538.095238095,
            "unit": "ns",
            "range": "± 36909.111018696676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2786486.9565217393,
            "unit": "ns",
            "range": "± 70297.94581473025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2576983.3333333335,
            "unit": "ns",
            "range": "± 106952.00078398774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5742035.135135135,
            "unit": "ns",
            "range": "± 194410.8982087742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171500,
            "unit": "ns",
            "range": "± 5738.093262200806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169795.8904109589,
            "unit": "ns",
            "range": "± 7885.578227867848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138695.83333333334,
            "unit": "ns",
            "range": "± 2306.0372874293453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2795433.3333333335,
            "unit": "ns",
            "range": "± 27857.178266155763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519450,
            "unit": "ns",
            "range": "± 29881.657610287646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12155.670103092783,
            "unit": "ns",
            "range": "± 1508.1700467899382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57080,
            "unit": "ns",
            "range": "± 6344.56711800684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44465.93406593407,
            "unit": "ns",
            "range": "± 2543.6727506247853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55755.555555555555,
            "unit": "ns",
            "range": "± 15336.35950617011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2533.3333333333335,
            "unit": "ns",
            "range": "± 484.206712418237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10801.030927835052,
            "unit": "ns",
            "range": "± 1922.2109039983545"
          }
        ]
      }
    ]
  }
}