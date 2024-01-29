window.BENCHMARK_DATA = {
  "lastUpdate": 1706513852207,
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
      },
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
          "id": "4cc06c954011980341cb82e2db6f2cacbfee6131",
          "message": "Changelog",
          "timestamp": "2024-01-29T16:14:56+09:00",
          "tree_id": "f6699468bc0f77065708208c3740c32cef6976ea",
          "url": "https://github.com/greymistcube/libplanet/commit/4cc06c954011980341cb82e2db6f2cacbfee6131"
        },
        "date": 1706513835952,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10686306.808510639,
            "unit": "ns",
            "range": "± 2208151.1568625076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22172714.056179777,
            "unit": "ns",
            "range": "± 1561099.4664713463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55517988.10606061,
            "unit": "ns",
            "range": "± 1708364.554541491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116535865.65151516,
            "unit": "ns",
            "range": "± 3669117.965149689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230000867.15,
            "unit": "ns",
            "range": "± 7985139.927623806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81548.35393258427,
            "unit": "ns",
            "range": "± 5650.37629991973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373859.3829787234,
            "unit": "ns",
            "range": "± 53228.809268345874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355644.8541666667,
            "unit": "ns",
            "range": "± 55450.90583759734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314753.8604651163,
            "unit": "ns",
            "range": "± 28399.146327750892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4507133.471014493,
            "unit": "ns",
            "range": "± 217175.96745042616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173925.3105263156,
            "unit": "ns",
            "range": "± 254506.09874326567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27307.079545454544,
            "unit": "ns",
            "range": "± 4122.321693296762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119825.19767441861,
            "unit": "ns",
            "range": "± 11683.790052959768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129026.11797752809,
            "unit": "ns",
            "range": "± 11775.25461749961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123787.84782608696,
            "unit": "ns",
            "range": "± 20021.217400182733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9471.782608695652,
            "unit": "ns",
            "range": "± 1472.806283197518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27719.56179775281,
            "unit": "ns",
            "range": "± 3222.0399098702565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560651.3723404256,
            "unit": "ns",
            "range": "± 201083.7794619278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3083195.327586207,
            "unit": "ns",
            "range": "± 285237.37786293204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3338929.925531915,
            "unit": "ns",
            "range": "± 933829.2448686664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 32503427.02631579,
            "unit": "ns",
            "range": "± 7652026.934702332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3553693.2471910114,
            "unit": "ns",
            "range": "± 333238.34538275783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3702204.8258426967,
            "unit": "ns",
            "range": "± 364071.6247489439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4768277.168539326,
            "unit": "ns",
            "range": "± 500668.27652326657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4946108.731182796,
            "unit": "ns",
            "range": "± 490013.1928864405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31973511.625,
            "unit": "ns",
            "range": "± 3978758.783642466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6580290.984375,
            "unit": "ns",
            "range": "± 302594.38928309904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860523.5851934524,
            "unit": "ns",
            "range": "± 64104.43626682792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1194170.2944335938,
            "unit": "ns",
            "range": "± 22101.86218370551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3292730.288655599,
            "unit": "ns",
            "range": "± 127844.84089339932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961986.1229619565,
            "unit": "ns",
            "range": "± 24060.13050246373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898605.9746744792,
            "unit": "ns",
            "range": "± 15473.944051302688"
          }
        ]
      }
    ]
  }
}