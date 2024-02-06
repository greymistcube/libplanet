window.BENCHMARK_DATA = {
  "lastUpdate": 1707213868292,
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
          "id": "b9493a873cb60fdf51d55d6f25c3903a40d15a58",
          "message": "Prepare 4.0.4",
          "timestamp": "2024-02-06T18:53:06+09:00",
          "tree_id": "75058dbf56fb8f6737f039bf16f5d40f7545fd4f",
          "url": "https://github.com/greymistcube/libplanet/commit/b9493a873cb60fdf51d55d6f25c3903a40d15a58"
        },
        "date": 1707213861716,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209943.27692307692,
            "unit": "ns",
            "range": "± 8903.75448109478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198960.03846153847,
            "unit": "ns",
            "range": "± 7420.599636099229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172036.75,
            "unit": "ns",
            "range": "± 1948.816196613169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3239296.1333333333,
            "unit": "ns",
            "range": "± 29411.824191414355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2797185.5,
            "unit": "ns",
            "range": "± 25762.111370561823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13614.780898876405,
            "unit": "ns",
            "range": "± 1224.198429667014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64324.77272727273,
            "unit": "ns",
            "range": "± 4985.387829429357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60842.206896551725,
            "unit": "ns",
            "range": "± 7641.206239456266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72648.54545454546,
            "unit": "ns",
            "range": "± 17123.91792337204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5341.444444444444,
            "unit": "ns",
            "range": "± 2099.187190718828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12796.04255319149,
            "unit": "ns",
            "range": "± 893.9322448512577"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41842.177083333336,
            "unit": "ns",
            "range": "± 5047.215257200936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2414634.25,
            "unit": "ns",
            "range": "± 73812.1307632184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2545262.9574468085,
            "unit": "ns",
            "range": "± 88660.61301462213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3167710.970588235,
            "unit": "ns",
            "range": "± 84692.96648249587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3206002.0263157897,
            "unit": "ns",
            "range": "± 99971.80729625377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13787343.29787234,
            "unit": "ns",
            "range": "± 855802.1437724135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017028.887755102,
            "unit": "ns",
            "range": "± 120090.39243036912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1928161.8536585367,
            "unit": "ns",
            "range": "± 68799.57034370235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1651405.5670103093,
            "unit": "ns",
            "range": "± 165017.58174894244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12958361.346153846,
            "unit": "ns",
            "range": "± 1018146.3496012624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5631826.285714285,
            "unit": "ns",
            "range": "± 27566.681071480172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14532544.57142857,
            "unit": "ns",
            "range": "± 119322.80711032075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36899560.4,
            "unit": "ns",
            "range": "± 219268.4509287319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75492367.28571428,
            "unit": "ns",
            "range": "± 295991.343105784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148236293.58333334,
            "unit": "ns",
            "range": "± 242668.90703307829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3639694.4729352677,
            "unit": "ns",
            "range": "± 4880.392430564088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1188479.8224158655,
            "unit": "ns",
            "range": "± 1249.5551935269464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751246.8809291294,
            "unit": "ns",
            "range": "± 2016.2402544935537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925422.5718470982,
            "unit": "ns",
            "range": "± 3517.711268224326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611674.8908203125,
            "unit": "ns",
            "range": "± 1076.2098361190306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569168.6245117188,
            "unit": "ns",
            "range": "± 1744.7681368212866"
          }
        ]
      }
    ]
  }
}