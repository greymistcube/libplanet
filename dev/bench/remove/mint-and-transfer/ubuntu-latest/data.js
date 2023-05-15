window.BENCHMARK_DATA = {
  "lastUpdate": 1684133964712,
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
          "id": "5ecc71293242deb62556f50c242468610031664f",
          "message": "Removed Mint and Transfer actions",
          "timestamp": "2023-05-15T15:46:20+09:00",
          "tree_id": "a2f130184a564a1228584bf58e9d0d9af6197c4f",
          "url": "https://github.com/greymistcube/libplanet/commit/5ecc71293242deb62556f50c242468610031664f"
        },
        "date": 1684133957279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351989.1333333333,
            "unit": "ns",
            "range": "± 54263.13519438228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542476.25,
            "unit": "ns",
            "range": "± 80427.18210568195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4388279.3,
            "unit": "ns",
            "range": "± 66501.2641997987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4090825.080645161,
            "unit": "ns",
            "range": "± 179821.1391943598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6898740.62962963,
            "unit": "ns",
            "range": "± 161679.98603845813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276639.45454545453,
            "unit": "ns",
            "range": "± 10926.633349922398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263054.5833333333,
            "unit": "ns",
            "range": "± 11134.488293999371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248177.47422680413,
            "unit": "ns",
            "range": "± 14982.723499426475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4297205.714285715,
            "unit": "ns",
            "range": "± 32218.688729533198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3905853.8571428573,
            "unit": "ns",
            "range": "± 47407.51530953901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20726.4,
            "unit": "ns",
            "range": "± 2369.73559167855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95306.0505050505,
            "unit": "ns",
            "range": "± 7414.886725398064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73858.2,
            "unit": "ns",
            "range": "± 4748.24585885885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81889.19587628866,
            "unit": "ns",
            "range": "± 11494.990271707475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4571.61052631579,
            "unit": "ns",
            "range": "± 588.7024732542556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19363.01030927835,
            "unit": "ns",
            "range": "± 1763.376534372606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5864110.656770834,
            "unit": "ns",
            "range": "± 18491.75492364454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838933.721905048,
            "unit": "ns",
            "range": "± 1416.3548716622436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354634.7925502232,
            "unit": "ns",
            "range": "± 855.8327365514812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592756.5479166666,
            "unit": "ns",
            "range": "± 4017.6385214145366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802650.0201822916,
            "unit": "ns",
            "range": "± 706.0998872484068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742263.265234375,
            "unit": "ns",
            "range": "± 806.3850322132697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7506865.066666666,
            "unit": "ns",
            "range": "± 25177.97881501857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19799814.14285714,
            "unit": "ns",
            "range": "± 101458.86955567996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50655436.266666666,
            "unit": "ns",
            "range": "± 347125.14170509303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101503517,
            "unit": "ns",
            "range": "± 353350.42105144117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201931589.53333333,
            "unit": "ns",
            "range": "± 1657608.6831435761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414410.5408163266,
            "unit": "ns",
            "range": "± 112407.08306929683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2632446.1666666665,
            "unit": "ns",
            "range": "± 85812.84164922104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225079.466666667,
            "unit": "ns",
            "range": "± 119660.49474168457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5419544.444444444,
            "unit": "ns",
            "range": "± 180788.1911354428"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45752.95698924731,
            "unit": "ns",
            "range": "± 2869.272010056764"
          }
        ]
      }
    ]
  }
}