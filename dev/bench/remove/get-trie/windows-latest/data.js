window.BENCHMARK_DATA = {
  "lastUpdate": 1684217888315,
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
          "id": "1359ce47893455262fa503398dc5a6fead7207d6",
          "message": "Removed GetTrie() from IBlockChainStates",
          "timestamp": "2023-05-16T14:20:38+09:00",
          "tree_id": "d29b7d716f0b5b86b82d1b4a4e81ddca913e0a39",
          "url": "https://github.com/greymistcube/libplanet/commit/1359ce47893455262fa503398dc5a6fead7207d6"
        },
        "date": 1684217866272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447191,
            "unit": "ns",
            "range": "± 122112.76796469728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602254.2372881356,
            "unit": "ns",
            "range": "± 114749.38257220096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2184987.912087912,
            "unit": "ns",
            "range": "± 127176.52022564266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5533319.191919192,
            "unit": "ns",
            "range": "± 344800.29318278166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51310.75268817204,
            "unit": "ns",
            "range": "± 3679.894326388929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7024771.428571428,
            "unit": "ns",
            "range": "± 109847.66674859276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19834900,
            "unit": "ns",
            "range": "± 236338.02970684657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49678697.82608695,
            "unit": "ns",
            "range": "± 1234887.9908240354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100669576.66666667,
            "unit": "ns",
            "range": "± 1623615.7341240686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201297593.33333334,
            "unit": "ns",
            "range": "± 2731886.0362307173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4977097.5,
            "unit": "ns",
            "range": "± 19925.614775468912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527184.7916666667,
            "unit": "ns",
            "range": "± 5642.9104882881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168972.7473958333,
            "unit": "ns",
            "range": "± 5761.456370703097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628438.6848958335,
            "unit": "ns",
            "range": "± 5443.264980381457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852890.390625,
            "unit": "ns",
            "range": "± 2755.759366936657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780550.9440104166,
            "unit": "ns",
            "range": "± 3021.652811479694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3135896.296296296,
            "unit": "ns",
            "range": "± 85199.97960220721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3430150,
            "unit": "ns",
            "range": "± 66134.02553401186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4097691.1764705884,
            "unit": "ns",
            "range": "± 131419.22595301314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4105013.095238095,
            "unit": "ns",
            "range": "± 204478.97631335966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6765395.454545454,
            "unit": "ns",
            "range": "± 252469.54682076332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272178.26086956525,
            "unit": "ns",
            "range": "± 10370.533320550925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261023.4375,
            "unit": "ns",
            "range": "± 12087.67891891679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235128,
            "unit": "ns",
            "range": "± 17635.57630232569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4057459.090909091,
            "unit": "ns",
            "range": "± 95221.59448505919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3663626.3157894737,
            "unit": "ns",
            "range": "± 79845.0641493001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20513.40206185567,
            "unit": "ns",
            "range": "± 1944.9522737278255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95437.62886597938,
            "unit": "ns",
            "range": "± 7317.505519471194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80053.76344086022,
            "unit": "ns",
            "range": "± 5941.500307157549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108546.73913043478,
            "unit": "ns",
            "range": "± 11749.22444096487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6521.428571428572,
            "unit": "ns",
            "range": "± 1159.385724309196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20552.577319587628,
            "unit": "ns",
            "range": "± 2111.431819855168"
          }
        ]
      }
    ]
  }
}