window.BENCHMARK_DATA = {
  "lastUpdate": 1698742301463,
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
          "id": "4406a0ccc94406e81a1a0a30da9d595ec444d301",
          "message": "Fix build warnings",
          "timestamp": "2023-10-31T17:21:43+09:00",
          "tree_id": "7719f0f09854ffd982d342983918c97f915476f2",
          "url": "https://github.com/greymistcube/libplanet/commit/4406a0ccc94406e81a1a0a30da9d595ec444d301"
        },
        "date": 1698742293393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53469.989130434784,
            "unit": "ns",
            "range": "± 4884.825549416499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5491774.10625,
            "unit": "ns",
            "range": "± 19267.202605974886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1659221.1161458334,
            "unit": "ns",
            "range": "± 5878.667793581645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172315.2490985577,
            "unit": "ns",
            "range": "± 607.3626563985405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644113.0440104166,
            "unit": "ns",
            "range": "± 4679.394961072798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837092.3293108259,
            "unit": "ns",
            "range": "± 843.5384684894931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772795.4619838169,
            "unit": "ns",
            "range": "± 824.4429240286619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9390273.4,
            "unit": "ns",
            "range": "± 63835.60739094936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23743458.785714287,
            "unit": "ns",
            "range": "± 226364.4494207647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58389800.53333333,
            "unit": "ns",
            "range": "± 447907.5763179062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116863640.06666666,
            "unit": "ns",
            "range": "± 531995.2531091213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230800401.33333334,
            "unit": "ns",
            "range": "± 1187131.856839757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3819176.6428571427,
            "unit": "ns",
            "range": "± 59529.73940116259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3963513.5714285714,
            "unit": "ns",
            "range": "± 63837.464390451765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4589960.5,
            "unit": "ns",
            "range": "± 78643.97848018822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4679816.265306123,
            "unit": "ns",
            "range": "± 179561.27642578539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11218413.65,
            "unit": "ns",
            "range": "± 238523.8804629531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295790.89795918367,
            "unit": "ns",
            "range": "± 11499.505998891316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280570.95774647885,
            "unit": "ns",
            "range": "± 13778.367446769196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272447.73913043475,
            "unit": "ns",
            "range": "± 13167.675650948931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4605907.785714285,
            "unit": "ns",
            "range": "± 56956.938702278974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4252140.866666666,
            "unit": "ns",
            "range": "± 37470.32699134203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27889.98979591837,
            "unit": "ns",
            "range": "± 3026.1414290063194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103587.06060606061,
            "unit": "ns",
            "range": "± 8583.390815653718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90352.85416666667,
            "unit": "ns",
            "range": "± 8360.068176477442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103405.29591836735,
            "unit": "ns",
            "range": "± 13416.744553604804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7345.9795918367345,
            "unit": "ns",
            "range": "± 1352.2528813980455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25063.854166666668,
            "unit": "ns",
            "range": "± 2706.1750127368705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1593285.0107526882,
            "unit": "ns",
            "range": "± 119621.70343679047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2979912.3103448274,
            "unit": "ns",
            "range": "± 128945.31666742844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2466303.222222222,
            "unit": "ns",
            "range": "± 120701.81396156356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9821444.05263158,
            "unit": "ns",
            "range": "± 337881.5626246464"
          }
        ]
      }
    ]
  }
}