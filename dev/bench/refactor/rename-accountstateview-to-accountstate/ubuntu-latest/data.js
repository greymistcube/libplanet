window.BENCHMARK_DATA = {
  "lastUpdate": 1687931569061,
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
          "id": "7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39",
          "message": "Consistent API across IBlockChainStates, IBlockStates, and IAccountState",
          "timestamp": "2023-06-26T21:18:27+09:00",
          "tree_id": "854e42435068d707308c2e422a6d234a2bb48784",
          "url": "https://github.com/greymistcube/libplanet/commit/7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39"
        },
        "date": 1687782799051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760437.375,
            "unit": "ns",
            "range": "± 109904.26034295604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4075483.785714286,
            "unit": "ns",
            "range": "± 68660.1266565174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4664365.9375,
            "unit": "ns",
            "range": "± 79929.98550353825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4850537,
            "unit": "ns",
            "range": "± 92817.2855467486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7274131.846153846,
            "unit": "ns",
            "range": "± 163635.57005680454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8175270.214285715,
            "unit": "ns",
            "range": "± 112612.68834589205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23114364.07142857,
            "unit": "ns",
            "range": "± 224060.00821052873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57832016.53333333,
            "unit": "ns",
            "range": "± 396415.75746752607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114513479.33333333,
            "unit": "ns",
            "range": "± 1407404.53908486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232899289.6,
            "unit": "ns",
            "range": "± 620285.5473915449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327638.28571428574,
            "unit": "ns",
            "range": "± 13076.017047760886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288301.7297297297,
            "unit": "ns",
            "range": "± 14325.481695788254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281811.0888888889,
            "unit": "ns",
            "range": "± 15474.819178224716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4753551,
            "unit": "ns",
            "range": "± 61216.45607771072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196878.666666667,
            "unit": "ns",
            "range": "± 45210.34247613618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21306.945054945056,
            "unit": "ns",
            "range": "± 2226.290493986389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110123.44897959183,
            "unit": "ns",
            "range": "± 11277.289441020184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102724.92,
            "unit": "ns",
            "range": "± 15089.410674330073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120685.4947368421,
            "unit": "ns",
            "range": "± 11920.67718506394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7594.741935483871,
            "unit": "ns",
            "range": "± 1240.9771737313706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25942.96875,
            "unit": "ns",
            "range": "± 2743.959449804434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51992.10752688172,
            "unit": "ns",
            "range": "± 4368.193678175388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6302067.542708334,
            "unit": "ns",
            "range": "± 47344.534841208435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902539.1502604166,
            "unit": "ns",
            "range": "± 1546.0229529121395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397522.0958333334,
            "unit": "ns",
            "range": "± 3951.6609500528943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692257.0411658655,
            "unit": "ns",
            "range": "± 10022.253811284589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856767.7916015625,
            "unit": "ns",
            "range": "± 643.4758732031897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766059.3037760417,
            "unit": "ns",
            "range": "± 985.5327314534386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619376.4302325582,
            "unit": "ns",
            "range": "± 87545.09214846547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2981658.53125,
            "unit": "ns",
            "range": "± 82246.17350290505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2558976.0568181816,
            "unit": "ns",
            "range": "± 140914.82946616903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5910282.090909091,
            "unit": "ns",
            "range": "± 216702.30722994675"
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
          "id": "efa8719f904bb6fb3a5e5fa049ae08bd63ed3936",
          "message": "Consistent API across IBlockChainStates, IBlockStates, and IAccountState",
          "timestamp": "2023-06-27T17:01:08+09:00",
          "tree_id": "854e42435068d707308c2e422a6d234a2bb48784",
          "url": "https://github.com/greymistcube/libplanet/commit/efa8719f904bb6fb3a5e5fa049ae08bd63ed3936"
        },
        "date": 1687853701083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397569.3333333335,
            "unit": "ns",
            "range": "± 94078.30292899633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3597500.2285714285,
            "unit": "ns",
            "range": "± 117981.63944122975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4350656.518518519,
            "unit": "ns",
            "range": "± 117498.20423549865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4474877.9130434785,
            "unit": "ns",
            "range": "± 214387.75784632546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7075721.166666667,
            "unit": "ns",
            "range": "± 207453.89462623242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7976955.571428572,
            "unit": "ns",
            "range": "± 65604.19782267019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22390282.333333332,
            "unit": "ns",
            "range": "± 357271.04336877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54909381.2,
            "unit": "ns",
            "range": "± 819078.5135637139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108795766.06666666,
            "unit": "ns",
            "range": "± 1752017.440352467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219514912.2352941,
            "unit": "ns",
            "range": "± 4434358.350133331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293289.79545454547,
            "unit": "ns",
            "range": "± 11026.387322046729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272806.4666666667,
            "unit": "ns",
            "range": "± 8083.232631485539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238549.76470588235,
            "unit": "ns",
            "range": "± 4863.153728926988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4417664.8,
            "unit": "ns",
            "range": "± 58399.110044833484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4108910.782608696,
            "unit": "ns",
            "range": "± 101138.06379623151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18015.467391304348,
            "unit": "ns",
            "range": "± 1591.6147474874354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89430.30337078651,
            "unit": "ns",
            "range": "± 4833.733481774665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71489.38461538461,
            "unit": "ns",
            "range": "± 1105.6991406994896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94567.76041666667,
            "unit": "ns",
            "range": "± 14093.268322702146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4919.223404255319,
            "unit": "ns",
            "range": "± 773.1173477712459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18512.71875,
            "unit": "ns",
            "range": "± 1749.4801977076083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46465.63953488372,
            "unit": "ns",
            "range": "± 2338.139813224032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6044714.2453125,
            "unit": "ns",
            "range": "± 35371.26226795585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880082.7239118305,
            "unit": "ns",
            "range": "± 5658.725887742349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1416008.1953125,
            "unit": "ns",
            "range": "± 6569.287104788654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673841.3739583334,
            "unit": "ns",
            "range": "± 5574.305123233023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895808.5514322916,
            "unit": "ns",
            "range": "± 1169.9018599141834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755693.9455729167,
            "unit": "ns",
            "range": "± 1044.1296120234272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1459311.5064935065,
            "unit": "ns",
            "range": "± 74620.53523267667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2750502.43902439,
            "unit": "ns",
            "range": "± 98632.5223790431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2332068.2,
            "unit": "ns",
            "range": "± 117857.1136828348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5841508.547619048,
            "unit": "ns",
            "range": "± 312394.14377250924"
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
          "id": "0f9afdc85d91845eba84ae6be99f4092ccc7f53a",
          "message": "Changelog",
          "timestamp": "2023-06-27T17:15:37+09:00",
          "tree_id": "c82a291261ba65157a5c339e8968dcac918e6314",
          "url": "https://github.com/greymistcube/libplanet/commit/0f9afdc85d91845eba84ae6be99f4092ccc7f53a"
        },
        "date": 1687854602260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3341371.8571428573,
            "unit": "ns",
            "range": "± 79528.66813815362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3531516.6428571427,
            "unit": "ns",
            "range": "± 128672.08479258172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4316465.916666667,
            "unit": "ns",
            "range": "± 50344.455578920286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4376724.045454546,
            "unit": "ns",
            "range": "± 104672.65170246911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6996206.777777778,
            "unit": "ns",
            "range": "± 193277.59981960047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7910024.785714285,
            "unit": "ns",
            "range": "± 36134.94942398047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21220601.2,
            "unit": "ns",
            "range": "± 300903.6046850505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53426484.9047619,
            "unit": "ns",
            "range": "± 1253063.4651968712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105444263,
            "unit": "ns",
            "range": "± 1197977.1215845484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208912637.86666667,
            "unit": "ns",
            "range": "± 2351890.6084585246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275962.14705882355,
            "unit": "ns",
            "range": "± 7646.256014437681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263302.75,
            "unit": "ns",
            "range": "± 12197.753188892733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234363.64705882352,
            "unit": "ns",
            "range": "± 3408.6556356791248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4293583.714285715,
            "unit": "ns",
            "range": "± 43358.198065078184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3895532.92,
            "unit": "ns",
            "range": "± 100326.32317589104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17055.084210526315,
            "unit": "ns",
            "range": "± 1163.0031618767312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91166.07042253521,
            "unit": "ns",
            "range": "± 4475.195185923478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74553.47826086957,
            "unit": "ns",
            "range": "± 2824.9630537535286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98534.13333333333,
            "unit": "ns",
            "range": "± 11677.303774531885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5086.826530612245,
            "unit": "ns",
            "range": "± 855.1915565907605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17969.510638297874,
            "unit": "ns",
            "range": "± 1361.0126349004734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45564.48235294117,
            "unit": "ns",
            "range": "± 2402.288748017511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6156902.565290178,
            "unit": "ns",
            "range": "± 23860.647388072313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905317.7057291667,
            "unit": "ns",
            "range": "± 4104.012051778339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398186.0337239583,
            "unit": "ns",
            "range": "± 3822.923805555634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663754.96484375,
            "unit": "ns",
            "range": "± 4838.941349281903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833924.3671875,
            "unit": "ns",
            "range": "± 640.9670077867366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769631.7294921875,
            "unit": "ns",
            "range": "± 1022.8597928615939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1455922.38,
            "unit": "ns",
            "range": "± 89494.14497667803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2757173.484848485,
            "unit": "ns",
            "range": "± 84164.22049820265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2345953.725,
            "unit": "ns",
            "range": "± 82632.00590228497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5417885.416666667,
            "unit": "ns",
            "range": "± 136363.14489081898"
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
          "id": "e1f035701404d80a082f6b589a5ad6f42342161e",
          "message": "Changelog",
          "timestamp": "2023-06-28T14:39:53+09:00",
          "tree_id": "c82a291261ba65157a5c339e8968dcac918e6314",
          "url": "https://github.com/greymistcube/libplanet/commit/e1f035701404d80a082f6b589a5ad6f42342161e"
        },
        "date": 1687931561508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7796828.928571428,
            "unit": "ns",
            "range": "± 28875.830858414036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20120276.230769232,
            "unit": "ns",
            "range": "± 102350.340142045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51068688,
            "unit": "ns",
            "range": "± 238578.72918478833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103381539.26666667,
            "unit": "ns",
            "range": "± 816188.8517423497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205358409.93333334,
            "unit": "ns",
            "range": "± 956927.5039901305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46043.81707317073,
            "unit": "ns",
            "range": "± 2441.8692805735145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284803.4893617021,
            "unit": "ns",
            "range": "± 10000.825470000269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272265.67272727273,
            "unit": "ns",
            "range": "± 10419.09174269816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242897.4909090909,
            "unit": "ns",
            "range": "± 10333.086100756955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4301759.928571428,
            "unit": "ns",
            "range": "± 23070.344892438083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846451.153846154,
            "unit": "ns",
            "range": "± 18507.489897543976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18509.835164835164,
            "unit": "ns",
            "range": "± 1283.8181012012244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91310.09278350516,
            "unit": "ns",
            "range": "± 5281.75903874693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74489.79032258065,
            "unit": "ns",
            "range": "± 3391.2954395913866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88400.82978723405,
            "unit": "ns",
            "range": "± 9153.503916490707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4713.265306122449,
            "unit": "ns",
            "range": "± 920.9629379137523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16788.26595744681,
            "unit": "ns",
            "range": "± 1402.7532847826192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1395661.8686868686,
            "unit": "ns",
            "range": "± 103034.81386560232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2665116.76,
            "unit": "ns",
            "range": "± 58240.68877388613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198770.711111111,
            "unit": "ns",
            "range": "± 121582.81460338832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5292162.615384615,
            "unit": "ns",
            "range": "± 113884.42562355114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5940903.231584822,
            "unit": "ns",
            "range": "± 10929.236599701962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923927.5647135417,
            "unit": "ns",
            "range": "± 2540.4730968169906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361065.3166666667,
            "unit": "ns",
            "range": "± 449.4556655805493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567749.4078125,
            "unit": "ns",
            "range": "± 1487.707325926552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814310.5368489583,
            "unit": "ns",
            "range": "± 705.3267360399108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750677.8913922991,
            "unit": "ns",
            "range": "± 656.7943987147737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3206194.75,
            "unit": "ns",
            "range": "± 49670.301884582455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3547157,
            "unit": "ns",
            "range": "± 59468.15394453933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4309949.923076923,
            "unit": "ns",
            "range": "± 28329.403977909413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4308224.9,
            "unit": "ns",
            "range": "± 126773.52426285285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6976002.869565218,
            "unit": "ns",
            "range": "± 175434.30733813008"
          }
        ]
      }
    ]
  }
}