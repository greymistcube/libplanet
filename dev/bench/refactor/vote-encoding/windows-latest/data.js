window.BENCHMARK_DATA = {
  "lastUpdate": 1678869478547,
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
          "id": "8eca045037afe35820c64f54f556c3d96723ad86",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:13:13+09:00",
          "tree_id": "73ecc7d5746324bbbdab21cef6f31d1c2b82ce1b",
          "url": "https://github.com/greymistcube/libplanet/commit/8eca045037afe35820c64f54f556c3d96723ad86"
        },
        "date": 1678869260980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1627379.569892473,
            "unit": "ns",
            "range": "± 98087.24550239841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3006187.5,
            "unit": "ns",
            "range": "± 118241.49220440091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2552132.6086956523,
            "unit": "ns",
            "range": "± 136202.09217922844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6029471.875,
            "unit": "ns",
            "range": "± 183918.72720233197"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58363.73626373626,
            "unit": "ns",
            "range": "± 4001.847253554469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9300780,
            "unit": "ns",
            "range": "± 165349.21141113952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23851307.692307692,
            "unit": "ns",
            "range": "± 289988.57294020645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 60593612.5,
            "unit": "ns",
            "range": "± 1162992.7909636127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 122424260.71428572,
            "unit": "ns",
            "range": "± 3201226.4145618253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 238905046.15384614,
            "unit": "ns",
            "range": "± 1896409.9484795758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877271.037946428,
            "unit": "ns",
            "range": "± 93162.56599281575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903728.0729166667,
            "unit": "ns",
            "range": "± 29424.233978766944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473833.02734375,
            "unit": "ns",
            "range": "± 24052.787760221483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3172738.643973214,
            "unit": "ns",
            "range": "± 39025.89079195776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995297.3493303572,
            "unit": "ns",
            "range": "± 11457.533498722025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938851.85546875,
            "unit": "ns",
            "range": "± 14729.692709755569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3970747.5,
            "unit": "ns",
            "range": "± 140036.8119872002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6185121.428571428,
            "unit": "ns",
            "range": "± 107780.11932113975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28831913.333333332,
            "unit": "ns",
            "range": "± 442084.87043402274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7392970.9677419355,
            "unit": "ns",
            "range": "± 222997.89714038168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32021093.333333332,
            "unit": "ns",
            "range": "± 584226.6738013187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219272.41379310345,
            "unit": "ns",
            "range": "± 9091.113708306055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222638.7323943662,
            "unit": "ns",
            "range": "± 10928.436684641647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209736,
            "unit": "ns",
            "range": "± 8352.532550071266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13567153.333333334,
            "unit": "ns",
            "range": "± 210833.2918501747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11053327.272727273,
            "unit": "ns",
            "range": "± 269987.9101029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28768.42105263158,
            "unit": "ns",
            "range": "± 2224.011286798561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69284.21052631579,
            "unit": "ns",
            "range": "± 5806.128746336663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57425,
            "unit": "ns",
            "range": "± 4309.646462481458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130680.20833333333,
            "unit": "ns",
            "range": "± 17519.448560125322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9302.105263157895,
            "unit": "ns",
            "range": "± 1118.9831009855125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27571.134020618556,
            "unit": "ns",
            "range": "± 2533.8113075499614"
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
          "id": "2d4047674b5f838cf461806ce0c6442baedc8b69",
          "message": "Changelog",
          "timestamp": "2023-03-15T17:16:01+09:00",
          "tree_id": "5f1e0dc67d0e5ebed283e11d5b73d4e0dc48ab97",
          "url": "https://github.com/greymistcube/libplanet/commit/2d4047674b5f838cf461806ce0c6442baedc8b69"
        },
        "date": 1678869449953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616940.425531915,
            "unit": "ns",
            "range": "± 225127.4608239103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3164845.9183673467,
            "unit": "ns",
            "range": "± 427948.39923272165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2748727.551020408,
            "unit": "ns",
            "range": "± 327567.30064157926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6423079.166666667,
            "unit": "ns",
            "range": "± 741420.3812053364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61790.32258064516,
            "unit": "ns",
            "range": "± 13929.855835236156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7586211.70212766,
            "unit": "ns",
            "range": "± 677475.3336550713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21935291.414141413,
            "unit": "ns",
            "range": "± 2160358.345464564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53781460,
            "unit": "ns",
            "range": "± 4024168.295901325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113574742,
            "unit": "ns",
            "range": "± 10362737.023246594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 234207619,
            "unit": "ns",
            "range": "± 17808898.804820627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5740079.347826087,
            "unit": "ns",
            "range": "± 141275.17407627564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1737865.33203125,
            "unit": "ns",
            "range": "± 39458.795844131506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360532.1001838236,
            "unit": "ns",
            "range": "± 27651.296736603377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2881418.96484375,
            "unit": "ns",
            "range": "± 65270.531803267426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929366.4794921875,
            "unit": "ns",
            "range": "± 28936.80534757447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 877782.431640625,
            "unit": "ns",
            "range": "± 41406.03986129245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3581215.789473684,
            "unit": "ns",
            "range": "± 540296.7811946659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5318895.360824742,
            "unit": "ns",
            "range": "± 595454.5299986912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28967777.31958763,
            "unit": "ns",
            "range": "± 2637862.754892094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6435183.333333333,
            "unit": "ns",
            "range": "± 965732.222572223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33619278.35051546,
            "unit": "ns",
            "range": "± 2871286.860278085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210567.70833333334,
            "unit": "ns",
            "range": "± 34387.93697548349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223023.95833333334,
            "unit": "ns",
            "range": "± 36863.312941307544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172065.9793814433,
            "unit": "ns",
            "range": "± 34594.40852760125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12274151,
            "unit": "ns",
            "range": "± 1247078.1423917722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9993012.24489796,
            "unit": "ns",
            "range": "± 1181154.5839511114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30069,
            "unit": "ns",
            "range": "± 10362.11724202027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68832.25806451614,
            "unit": "ns",
            "range": "± 13742.8254902119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52137.37373737374,
            "unit": "ns",
            "range": "± 15911.827111050326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125349.47368421052,
            "unit": "ns",
            "range": "± 29571.093107837343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5475.903614457831,
            "unit": "ns",
            "range": "± 1183.2768021881154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31899,
            "unit": "ns",
            "range": "± 9959.437887265678"
          }
        ]
      }
    ]
  }
}