window.BENCHMARK_DATA = {
  "lastUpdate": 1678869226275,
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
          "id": "6699718613fe2592545afbc8a13afa8ae7494b7a",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:12:52+09:00",
          "tree_id": "b9aa048ef68261e6178dff40c5331176afa8c1db",
          "url": "https://github.com/greymistcube/libplanet/commit/6699718613fe2592545afbc8a13afa8ae7494b7a"
        },
        "date": 1678869193580,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679442.105263158,
            "unit": "ns",
            "range": "± 170293.9908354656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2869509.375,
            "unit": "ns",
            "range": "± 234442.66612683344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2344802.06185567,
            "unit": "ns",
            "range": "± 252751.99882962572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5969881.052631579,
            "unit": "ns",
            "range": "± 440312.99996144837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59442.63157894737,
            "unit": "ns",
            "range": "± 7701.757772635663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8960725,
            "unit": "ns",
            "range": "± 341946.5682411726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22757862.74509804,
            "unit": "ns",
            "range": "± 927946.7555761558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56902753.06122449,
            "unit": "ns",
            "range": "± 2232766.423641872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 123685815.78947368,
            "unit": "ns",
            "range": "± 5311206.928608245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 242644550,
            "unit": "ns",
            "range": "± 9868129.782850267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5791656.423611111,
            "unit": "ns",
            "range": "± 120676.46416650897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1781969.8640046297,
            "unit": "ns",
            "range": "± 48291.218377416175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368626.3802083333,
            "unit": "ns",
            "range": "± 22418.91092929485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3057660.9375,
            "unit": "ns",
            "range": "± 57948.64009109609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994432.0833333334,
            "unit": "ns",
            "range": "± 18177.86558059274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941692.6009114584,
            "unit": "ns",
            "range": "± 16470.498817657626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4039550,
            "unit": "ns",
            "range": "± 151443.97459740835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5880650.666666667,
            "unit": "ns",
            "range": "± 285362.60876169335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27995638.46153846,
            "unit": "ns",
            "range": "± 1137602.548388297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7583660,
            "unit": "ns",
            "range": "± 285922.8983802833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32330365.656565655,
            "unit": "ns",
            "range": "± 2193581.6106272317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213028.26086956522,
            "unit": "ns",
            "range": "± 12309.536427180285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208309.79381443298,
            "unit": "ns",
            "range": "± 15810.516409140826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193336.45833333334,
            "unit": "ns",
            "range": "± 17103.456836137368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12915398.484848484,
            "unit": "ns",
            "range": "± 606624.0169970761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11235717.857142856,
            "unit": "ns",
            "range": "± 480588.0867539999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26407,
            "unit": "ns",
            "range": "± 6265.574614712146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64793.68421052631,
            "unit": "ns",
            "range": "± 8231.47579289421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48109.375,
            "unit": "ns",
            "range": "± 6883.528442288118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112269.07216494845,
            "unit": "ns",
            "range": "± 19999.038314507892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11847,
            "unit": "ns",
            "range": "± 5673.996240158547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26195.744680851065,
            "unit": "ns",
            "range": "± 5976.781506916831"
          }
        ]
      }
    ]
  }
}