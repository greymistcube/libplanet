window.BENCHMARK_DATA = {
  "lastUpdate": 1693809924343,
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
          "id": "44a6c3a355196c9a670cb3dd891521a002634ea0",
          "message": "Account overhaul",
          "timestamp": "2023-09-04T15:31:54+09:00",
          "tree_id": "3fabf264f5b3fd83d5b10677ac599d2f808b7024",
          "url": "https://github.com/greymistcube/libplanet/commit/44a6c3a355196c9a670cb3dd891521a002634ea0"
        },
        "date": 1693809916168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328272.957894737,
            "unit": "ns",
            "range": "± 79679.72124912735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562041.8666666667,
            "unit": "ns",
            "range": "± 47526.35651008616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1689869.0777777778,
            "unit": "ns",
            "range": "± 91226.751617983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4338523.392857143,
            "unit": "ns",
            "range": "± 124443.9013723287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279117.82692307694,
            "unit": "ns",
            "range": "± 11384.855945115232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266489.488372093,
            "unit": "ns",
            "range": "± 8821.799188514813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239410,
            "unit": "ns",
            "range": "± 9042.246754188716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4258616.5,
            "unit": "ns",
            "range": "± 31691.988746854768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3862375.6,
            "unit": "ns",
            "range": "± 33412.49230623609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21020.947368421053,
            "unit": "ns",
            "range": "± 1684.2572854476325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90711.72289156627,
            "unit": "ns",
            "range": "± 4821.775582058738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75733.92405063291,
            "unit": "ns",
            "range": "± 3932.035917396509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85440.44897959183,
            "unit": "ns",
            "range": "± 12129.943819931304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5390.164948453608,
            "unit": "ns",
            "range": "± 638.7758585831112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20543.65625,
            "unit": "ns",
            "range": "± 1454.1383618242617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48698.692307692305,
            "unit": "ns",
            "range": "± 3396.01214397877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7944707,
            "unit": "ns",
            "range": "± 66550.90701341111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20366055,
            "unit": "ns",
            "range": "± 51169.60528477819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51865079.733333334,
            "unit": "ns",
            "range": "± 183027.19091219624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103133878.5,
            "unit": "ns",
            "range": "± 177523.418719789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207825624.2,
            "unit": "ns",
            "range": "± 388787.068336935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3365311.4,
            "unit": "ns",
            "range": "± 48163.3138021046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511546.095238095,
            "unit": "ns",
            "range": "± 127965.85046358562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4240386.444444444,
            "unit": "ns",
            "range": "± 62013.63468314351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3789601.1515151514,
            "unit": "ns",
            "range": "± 117020.660161497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5813320.466666667,
            "unit": "ns",
            "range": "± 108183.29426742552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4887385.283854167,
            "unit": "ns",
            "range": "± 3582.582085446581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571244.6639122595,
            "unit": "ns",
            "range": "± 519.1512202101252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053657.1157552083,
            "unit": "ns",
            "range": "± 708.7798645837775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550345.5317708333,
            "unit": "ns",
            "range": "± 1379.2054754994606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822400.0628255209,
            "unit": "ns",
            "range": "± 4011.9263428903864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728820.6840494792,
            "unit": "ns",
            "range": "± 388.3214819015319"
          }
        ]
      }
    ]
  }
}