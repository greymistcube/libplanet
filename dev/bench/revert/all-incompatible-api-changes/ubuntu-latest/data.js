window.BENCHMARK_DATA = {
  "lastUpdate": 1702616634790,
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
          "id": "1f4871ef2e97be88a7680bdb95d7c790d6def685",
          "message": "Revert \"Added BlockHashType and TxIdType; refactored AddressType\"\n\nThis reverts commit e4c0db0113e283ef7c6ddec34289e6d9dd345b26.",
          "timestamp": "2023-12-15T13:52:20+09:00",
          "tree_id": "0ff2e84ad8519699dbabc9df3474a2991791b687",
          "url": "https://github.com/greymistcube/libplanet/commit/1f4871ef2e97be88a7680bdb95d7c790d6def685"
        },
        "date": 1702616628815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783244.301081731,
            "unit": "ns",
            "range": "± 17662.99008671203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1238494.1395399305,
            "unit": "ns",
            "range": "± 25694.144272067024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767149.6387532552,
            "unit": "ns",
            "range": "± 4218.208060668645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2014274.7739583333,
            "unit": "ns",
            "range": "± 3191.3167051076525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618420.0115094866,
            "unit": "ns",
            "range": "± 1131.450505132487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579349.3710123698,
            "unit": "ns",
            "range": "± 1188.0392766483928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423434.5,
            "unit": "ns",
            "range": "± 85762.46599855817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527542.9285714286,
            "unit": "ns",
            "range": "± 71379.82306201858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3098095.42,
            "unit": "ns",
            "range": "± 49337.20988169072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3004889.7377049183,
            "unit": "ns",
            "range": "± 135069.9032970091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6898406.4,
            "unit": "ns",
            "range": "± 156090.31116443622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41190.86315789474,
            "unit": "ns",
            "range": "± 5691.304836010296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206755.22222222222,
            "unit": "ns",
            "range": "± 4346.512104794393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196874.97272727272,
            "unit": "ns",
            "range": "± 8107.860874335214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163945.08695652173,
            "unit": "ns",
            "range": "± 4108.768173210284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087314.8333333335,
            "unit": "ns",
            "range": "± 36339.17457327101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805541,
            "unit": "ns",
            "range": "± 49416.70801459765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15676.181818181818,
            "unit": "ns",
            "range": "± 4291.049551370749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67189.52808988764,
            "unit": "ns",
            "range": "± 5056.875731233052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55305.75842696629,
            "unit": "ns",
            "range": "± 5646.508063171131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79209.64948453609,
            "unit": "ns",
            "range": "± 22730.59960944774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3692.252747252747,
            "unit": "ns",
            "range": "± 1540.8131517943273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12767,
            "unit": "ns",
            "range": "± 2632.456334018755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5559486.571428572,
            "unit": "ns",
            "range": "± 18741.425369462188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14543238.615384616,
            "unit": "ns",
            "range": "± 180031.11598208908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36792327.233333334,
            "unit": "ns",
            "range": "± 305923.2237914013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74136130.85714285,
            "unit": "ns",
            "range": "± 797670.1946921959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149080606.7857143,
            "unit": "ns",
            "range": "± 1428095.961332131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959356.9587628866,
            "unit": "ns",
            "range": "± 75923.63792364525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1859567.6792452831,
            "unit": "ns",
            "range": "± 73672.01442902016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1427690.4421052632,
            "unit": "ns",
            "range": "± 111430.72995160332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5758160.763157895,
            "unit": "ns",
            "range": "± 124680.12972974844"
          }
        ]
      }
    ]
  }
}