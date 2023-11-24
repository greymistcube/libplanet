window.BENCHMARK_DATA = {
  "lastUpdate": 1700793967671,
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
          "id": "b491a3c89394f8d4788c76c72abf003669ffa8b5",
          "message": "Prepare 3.9.0",
          "timestamp": "2023-11-24T11:35:02+09:00",
          "tree_id": "523cbc8c13e1d1c7c7efc4a98ee9d3ab351bdcda",
          "url": "https://github.com/greymistcube/libplanet/commit/b491a3c89394f8d4788c76c72abf003669ffa8b5"
        },
        "date": 1700793961507,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223302.7525773196,
            "unit": "ns",
            "range": "± 16636.104214573323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217288.1505376344,
            "unit": "ns",
            "range": "± 14959.911370600514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170082.49056603774,
            "unit": "ns",
            "range": "± 7102.438523879401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117480.923076923,
            "unit": "ns",
            "range": "± 15965.988764983826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2902601.8,
            "unit": "ns",
            "range": "± 33377.95327372332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14869.907216494845,
            "unit": "ns",
            "range": "± 2984.871085583354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64156.833333333336,
            "unit": "ns",
            "range": "± 6680.40837337716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51757.16,
            "unit": "ns",
            "range": "± 2064.656302474322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68123.69473684211,
            "unit": "ns",
            "range": "± 13373.199734140939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3227.7894736842104,
            "unit": "ns",
            "range": "± 822.3617376480938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13639.208333333334,
            "unit": "ns",
            "range": "± 2558.8457674122346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3741790.0673177084,
            "unit": "ns",
            "range": "± 55107.43677386082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215684.065266927,
            "unit": "ns",
            "range": "± 3851.119770115348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762559.9296177456,
            "unit": "ns",
            "range": "± 2568.0583641089875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972503.0013020833,
            "unit": "ns",
            "range": "± 4816.29151707959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624074.3173076923,
            "unit": "ns",
            "range": "± 819.5117975629101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583925.1285264757,
            "unit": "ns",
            "range": "± 11598.505522237645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43962.3,
            "unit": "ns",
            "range": "± 5946.102581219314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2481469.6395348837,
            "unit": "ns",
            "range": "± 82794.79238816361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2619405.565217391,
            "unit": "ns",
            "range": "± 100321.95170182007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3328440.625,
            "unit": "ns",
            "range": "± 64912.052787213564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3133715,
            "unit": "ns",
            "range": "± 103736.05818008923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6762096.676470588,
            "unit": "ns",
            "range": "± 168585.8540883853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6026485.384615385,
            "unit": "ns",
            "range": "± 33889.759450160505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14860335.733333332,
            "unit": "ns",
            "range": "± 79967.03759180733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36924824.23076923,
            "unit": "ns",
            "range": "± 262803.94133369776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76838637.84615384,
            "unit": "ns",
            "range": "± 720016.6468882099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152351883.53846154,
            "unit": "ns",
            "range": "± 543910.160237518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978874.2365591398,
            "unit": "ns",
            "range": "± 77489.13126934778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1968793.0975609757,
            "unit": "ns",
            "range": "± 103835.48538993402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1474903.1958762887,
            "unit": "ns",
            "range": "± 152837.65951735355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5809619.520408163,
            "unit": "ns",
            "range": "± 347037.81936220557"
          }
        ]
      }
    ]
  }
}