window.BENCHMARK_DATA = {
  "lastUpdate": 1690446265720,
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
          "id": "fc7c052061aac1654db2c548bd9a3f3a9553f8fa",
          "message": "Bump bencodex to 0.12.0",
          "timestamp": "2023-07-27T16:41:57+09:00",
          "tree_id": "f24002a0214c9431068a6f86c999ef138ed9f6c4",
          "url": "https://github.com/greymistcube/libplanet/commit/fc7c052061aac1654db2c548bd9a3f3a9553f8fa"
        },
        "date": 1690446166425,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 17738750.923913043,
            "unit": "ns",
            "range": "± 3961632.4186766036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 44731113.09090909,
            "unit": "ns",
            "range": "± 8854359.986210298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 139655946.69791666,
            "unit": "ns",
            "range": "± 70493787.89162916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 218068395.54347825,
            "unit": "ns",
            "range": "± 70437851.74884062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 494441706.37,
            "unit": "ns",
            "range": "± 190075191.19948825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96245.68823529412,
            "unit": "ns",
            "range": "± 7971.497562736697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 433981.3522727273,
            "unit": "ns",
            "range": "± 86944.1502127619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385936.43258426967,
            "unit": "ns",
            "range": "± 51977.10267638787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 388762.62637362635,
            "unit": "ns",
            "range": "± 64779.34196308235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4816795.317073171,
            "unit": "ns",
            "range": "± 516170.7005352398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173366.034883721,
            "unit": "ns",
            "range": "± 355933.64792786865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31428.7,
            "unit": "ns",
            "range": "± 6229.795069762405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125378.85106382979,
            "unit": "ns",
            "range": "± 18039.583637851563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134300.58620689655,
            "unit": "ns",
            "range": "± 14628.13976756246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143180.5618556701,
            "unit": "ns",
            "range": "± 20220.0771006064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10516.489361702128,
            "unit": "ns",
            "range": "± 1638.9870707742568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31823.712643678162,
            "unit": "ns",
            "range": "± 6231.030130422548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1841819.5,
            "unit": "ns",
            "range": "± 214992.48553904347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3444196.2045454546,
            "unit": "ns",
            "range": "± 321636.12567099376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510723.3448275863,
            "unit": "ns",
            "range": "± 361766.35908574855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6892433.354430379,
            "unit": "ns",
            "range": "± 1061044.9003209057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4318625.2191011235,
            "unit": "ns",
            "range": "± 1013099.3043662756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4422783.477777778,
            "unit": "ns",
            "range": "± 779408.6571183127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5203066.961538462,
            "unit": "ns",
            "range": "± 1056836.4885094964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436279.869047619,
            "unit": "ns",
            "range": "± 427583.9896397381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12644192.614583334,
            "unit": "ns",
            "range": "± 5901354.196341159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9525041.537828946,
            "unit": "ns",
            "range": "± 2433075.188440195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 3831523.4781976743,
            "unit": "ns",
            "range": "± 2240888.0220656623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331122.8877704327,
            "unit": "ns",
            "range": "± 12724.59562595059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3317014.6315104165,
            "unit": "ns",
            "range": "± 611095.5475862573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893256.5248862465,
            "unit": "ns",
            "range": "± 77095.53441496355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1246755.2159729004,
            "unit": "ns",
            "range": "± 262873.6754726452"
          }
        ]
      }
    ]
  }
}