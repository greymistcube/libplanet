window.BENCHMARK_DATA = {
  "lastUpdate": 1687252823913,
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
          "id": "9ba8c21ea9836b0b51f43ea99013cda45d76958f",
          "message": "Prepare 2.1.1",
          "timestamp": "2023-06-20T17:58:10+09:00",
          "tree_id": "d623fe48c67fa1f2775ded58df2ab190f7f15808",
          "url": "https://github.com/greymistcube/libplanet/commit/9ba8c21ea9836b0b51f43ea99013cda45d76958f"
        },
        "date": 1687252809915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9051222.524390243,
            "unit": "ns",
            "range": "± 981939.5908479794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29164378.920454547,
            "unit": "ns",
            "range": "± 10994091.185447734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61920217.72988506,
            "unit": "ns",
            "range": "± 12323146.911740217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109541705.2962963,
            "unit": "ns",
            "range": "± 9058723.28314753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298600432.22527474,
            "unit": "ns",
            "range": "± 60879375.454271436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82181.2032967033,
            "unit": "ns",
            "range": "± 6201.400376786782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393916.6041666667,
            "unit": "ns",
            "range": "± 54002.3341972079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378683.5483870968,
            "unit": "ns",
            "range": "± 49676.847579373076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 377470.42391304346,
            "unit": "ns",
            "range": "± 68325.35204771868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4683220.04040404,
            "unit": "ns",
            "range": "± 401284.799320803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4038361.680412371,
            "unit": "ns",
            "range": "± 341426.7652696105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24103.920454545456,
            "unit": "ns",
            "range": "± 3508.3101745649737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129150.82222222222,
            "unit": "ns",
            "range": "± 20254.114799485473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136597.9659090909,
            "unit": "ns",
            "range": "± 17256.904667073977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143916.39130434784,
            "unit": "ns",
            "range": "± 26526.901302307084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8508.961538461539,
            "unit": "ns",
            "range": "± 1077.3678450298548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25329.383720930233,
            "unit": "ns",
            "range": "± 2887.9136990877914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1918919.4516129033,
            "unit": "ns",
            "range": "± 434458.63689908036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4079210.3571428573,
            "unit": "ns",
            "range": "± 1072884.1323908456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3234641.4782608696,
            "unit": "ns",
            "range": "± 665391.5592824657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8845007.205263158,
            "unit": "ns",
            "range": "± 2291284.79251741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4054269.0056179776,
            "unit": "ns",
            "range": "± 865243.6361859448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5192760.784090909,
            "unit": "ns",
            "range": "± 1811160.6469524596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5149800.9772727275,
            "unit": "ns",
            "range": "± 856035.3832717803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5289692.318181818,
            "unit": "ns",
            "range": "± 1130063.4218469756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9469477.441860465,
            "unit": "ns",
            "range": "± 1291581.1024761072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7060219.286658654,
            "unit": "ns",
            "range": "± 108092.22723326585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2123301.7364169033,
            "unit": "ns",
            "range": "± 78492.59885393534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391523.1047712055,
            "unit": "ns",
            "range": "± 22186.749484935037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2980901.9670410156,
            "unit": "ns",
            "range": "± 90289.44663012265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 966409.4029785156,
            "unit": "ns",
            "range": "± 33687.72876211867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 830905.2543580923,
            "unit": "ns",
            "range": "± 39481.74139991063"
          }
        ]
      }
    ]
  }
}