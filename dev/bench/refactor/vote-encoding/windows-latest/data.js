window.BENCHMARK_DATA = {
  "lastUpdate": 1678869094247,
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
          "id": "ecf372205ae8a2af7dc0a83eae4a253349dec33d",
          "message": "Updated Vote.Encoded and Proposal.Encoded",
          "timestamp": "2023-03-15T17:11:34+09:00",
          "tree_id": "f0357afcb5074dbb5f4705f164f6606bb105f856",
          "url": "https://github.com/greymistcube/libplanet/commit/ecf372205ae8a2af7dc0a83eae4a253349dec33d"
        },
        "date": 1678869069420,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668004.1237113401,
            "unit": "ns",
            "range": "± 170133.03796681546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2902976.923076923,
            "unit": "ns",
            "range": "± 77344.6277782358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2409529.1666666665,
            "unit": "ns",
            "range": "± 118910.07661431616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5848090.625,
            "unit": "ns",
            "range": "± 176544.07538752322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55221.83098591549,
            "unit": "ns",
            "range": "± 2716.730340400889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8591671.05263158,
            "unit": "ns",
            "range": "± 290260.8211153164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23491307.14285714,
            "unit": "ns",
            "range": "± 209210.153689044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59155035.294117644,
            "unit": "ns",
            "range": "± 1184212.8091802043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 119702966.66666667,
            "unit": "ns",
            "range": "± 1228543.5812181758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 233994621.42857143,
            "unit": "ns",
            "range": "± 6549603.145984814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5723889.921875,
            "unit": "ns",
            "range": "± 57370.90936105581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819147.670200893,
            "unit": "ns",
            "range": "± 26401.039498513037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360223.1863839286,
            "unit": "ns",
            "range": "± 19845.689740157628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126167.715992647,
            "unit": "ns",
            "range": "± 61737.60648332303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978411.0426682692,
            "unit": "ns",
            "range": "± 8688.441499007891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904017.7315848215,
            "unit": "ns",
            "range": "± 7441.449473926086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3626522.3529411764,
            "unit": "ns",
            "range": "± 194247.94929141874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5972378.571428572,
            "unit": "ns",
            "range": "± 55825.40335134767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27915392.85714286,
            "unit": "ns",
            "range": "± 384048.23908599676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7132862.5,
            "unit": "ns",
            "range": "± 117770.78231321496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30812648.14814815,
            "unit": "ns",
            "range": "± 855730.7131112121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216117.02127659574,
            "unit": "ns",
            "range": "± 8253.176441171163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217829.16666666666,
            "unit": "ns",
            "range": "± 8607.81333177073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191857.14285714287,
            "unit": "ns",
            "range": "± 13508.279248202663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12965474.285714285,
            "unit": "ns",
            "range": "± 424375.1575190608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10688540,
            "unit": "ns",
            "range": "± 189627.74736685707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22841.304347826088,
            "unit": "ns",
            "range": "± 1623.633976907942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64687.5,
            "unit": "ns",
            "range": "± 7188.459318130767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51619.318181818184,
            "unit": "ns",
            "range": "± 3402.867551897602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112817.39130434782,
            "unit": "ns",
            "range": "± 14165.005701605523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7348.453608247422,
            "unit": "ns",
            "range": "± 949.6834343240664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25028.125,
            "unit": "ns",
            "range": "± 2667.2162947833635"
          }
        ]
      }
    ]
  }
}