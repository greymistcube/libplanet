window.BENCHMARK_DATA = {
  "lastUpdate": 1687853708403,
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
      }
    ]
  }
}