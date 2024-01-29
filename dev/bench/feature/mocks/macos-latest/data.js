window.BENCHMARK_DATA = {
  "lastUpdate": 1706512881769,
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
          "id": "0260c38d672dc87ffaec6b4432e9da1bae36bfd2",
          "message": "Removed old mock implementation",
          "timestamp": "2024-01-29T15:51:46+09:00",
          "tree_id": "6cc0d42fcbe6db2688a869016e15ade9b9e2573c",
          "url": "https://github.com/greymistcube/libplanet/commit/0260c38d672dc87ffaec6b4432e9da1bae36bfd2"
        },
        "date": 1706512866614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8591103.393939395,
            "unit": "ns",
            "range": "± 267723.51298178633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21352681.65934066,
            "unit": "ns",
            "range": "± 1149800.334890205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53005041.333333336,
            "unit": "ns",
            "range": "± 2349701.7313057976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105902058.8125,
            "unit": "ns",
            "range": "± 2016149.3634172452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224406943.16666666,
            "unit": "ns",
            "range": "± 8765379.36960731"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84711.17777777778,
            "unit": "ns",
            "range": "± 16029.201868848917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340917.0543478261,
            "unit": "ns",
            "range": "± 35933.75274987739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329156.9693877551,
            "unit": "ns",
            "range": "± 39246.454646157115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315144.56666666665,
            "unit": "ns",
            "range": "± 23507.154991953626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4574048.8367346935,
            "unit": "ns",
            "range": "± 296705.45202190784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4232694.091836735,
            "unit": "ns",
            "range": "± 278818.0307405862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21762.24175824176,
            "unit": "ns",
            "range": "± 4672.707842926625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104111.32291666667,
            "unit": "ns",
            "range": "± 14546.090051241874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121962.75274725274,
            "unit": "ns",
            "range": "± 23988.593089954426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115443.42696629213,
            "unit": "ns",
            "range": "± 18607.757792534496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8236.91935483871,
            "unit": "ns",
            "range": "± 1535.6618055176295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25800.833333333332,
            "unit": "ns",
            "range": "± 4239.61426137701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1833305.4494382022,
            "unit": "ns",
            "range": "± 424380.4810670012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3365615.811111111,
            "unit": "ns",
            "range": "± 535353.1171946998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2964828.3020833335,
            "unit": "ns",
            "range": "± 435233.572355704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 44430352.904255316,
            "unit": "ns",
            "range": "± 22140895.529113516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3467378.7395833335,
            "unit": "ns",
            "range": "± 227734.0872603625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3570998.1458333335,
            "unit": "ns",
            "range": "± 236105.11945201905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4345308.228070175,
            "unit": "ns",
            "range": "± 177789.71772916146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4605782.505617977,
            "unit": "ns",
            "range": "± 324871.398401916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31030170.93,
            "unit": "ns",
            "range": "± 3169910.5475547304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6757579.2703125,
            "unit": "ns",
            "range": "± 175258.54882022043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876514.2109375,
            "unit": "ns",
            "range": "± 15354.127370582692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1132367.127166748,
            "unit": "ns",
            "range": "± 52020.80302780722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3297499.5962467785,
            "unit": "ns",
            "range": "± 315238.7616476807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943731.1030521716,
            "unit": "ns",
            "range": "± 41556.99606926715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898370.0283203125,
            "unit": "ns",
            "range": "± 16068.358581897004"
          }
        ]
      }
    ]
  }
}