window.BENCHMARK_DATA = {
  "lastUpdate": 1684852342328,
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
          "id": "ef9b7fec3272cc9e82f994b5aaebab995dfe308a",
          "message": "General API cleanup",
          "timestamp": "2023-05-23T23:18:54+09:00",
          "tree_id": "565b5fb8fbdef0e8a1818599d15cee840714f42b",
          "url": "https://github.com/greymistcube/libplanet/commit/ef9b7fec3272cc9e82f994b5aaebab995dfe308a"
        },
        "date": 1684852334086,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230116.5625,
            "unit": "ns",
            "range": "± 59811.571275095535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3444764.5625,
            "unit": "ns",
            "range": "± 102915.07202823409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4238737.428571428,
            "unit": "ns",
            "range": "± 118684.86513465711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4269016.048780488,
            "unit": "ns",
            "range": "± 153555.76883952474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6733729.439024391,
            "unit": "ns",
            "range": "± 229129.29802843294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274342.6842105263,
            "unit": "ns",
            "range": "± 8688.375527277076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260840.825,
            "unit": "ns",
            "range": "± 9042.22287138341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229125.84615384616,
            "unit": "ns",
            "range": "± 1893.0622830990817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4160052.5625,
            "unit": "ns",
            "range": "± 65361.25985318699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3779436.1333333333,
            "unit": "ns",
            "range": "± 64514.1023861856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16638.350515463917,
            "unit": "ns",
            "range": "± 1031.1278012573287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83238.11428571428,
            "unit": "ns",
            "range": "± 3961.758830396891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70429.17391304347,
            "unit": "ns",
            "range": "± 1711.584132056242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91451.1170212766,
            "unit": "ns",
            "range": "± 11300.014231465379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4930.3125,
            "unit": "ns",
            "range": "± 653.4636511857815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17251.831578947367,
            "unit": "ns",
            "range": "± 1042.4000809571128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5897575.517708333,
            "unit": "ns",
            "range": "± 18523.256957494705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832362.3546875,
            "unit": "ns",
            "range": "± 11126.133034720624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343167.2172154018,
            "unit": "ns",
            "range": "± 5187.814030226858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607437.697135417,
            "unit": "ns",
            "range": "± 8257.449069477441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820751.82421875,
            "unit": "ns",
            "range": "± 1795.4949439241975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756268.0684291294,
            "unit": "ns",
            "range": "± 1522.6267115988685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7609930.866666666,
            "unit": "ns",
            "range": "± 33593.016372171056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20638720.708333332,
            "unit": "ns",
            "range": "± 526812.9609457956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50989000.5,
            "unit": "ns",
            "range": "± 775141.4405668912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102099487.14285715,
            "unit": "ns",
            "range": "± 2409422.6405924987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201531830.66666666,
            "unit": "ns",
            "range": "± 2435309.718039361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1387944.375,
            "unit": "ns",
            "range": "± 117806.78785083472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628306.96875,
            "unit": "ns",
            "range": "± 79724.64295006357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2214939.66,
            "unit": "ns",
            "range": "± 134571.4685422605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5377394.166666667,
            "unit": "ns",
            "range": "± 109935.94166671361"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49605.15555555555,
            "unit": "ns",
            "range": "± 2731.5647156447353"
          }
        ]
      }
    ]
  }
}