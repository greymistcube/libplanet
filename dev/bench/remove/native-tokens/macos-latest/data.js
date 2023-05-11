window.BENCHMARK_DATA = {
  "lastUpdate": 1683804729334,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99b93f904780aadf51b47bc2ff8fdc4c306ebc38",
          "message": "Merge pull request #3151 from moreal/exp/nullable-total-supply-trackable\n\nMake `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T19:27:57+09:00",
          "tree_id": "9eeaa2de38d3805de08ef1f4822a8d1989be74a0",
          "url": "https://github.com/greymistcube/libplanet/commit/99b93f904780aadf51b47bc2ff8fdc4c306ebc38"
        },
        "date": 1683804713666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7660160.7272727275,
            "unit": "ns",
            "range": "± 287711.8398504134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19278658.333333332,
            "unit": "ns",
            "range": "± 634254.1818184401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47169130.57692308,
            "unit": "ns",
            "range": "± 365625.27668626833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94005933.08333333,
            "unit": "ns",
            "range": "± 761762.0473198913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195481470.7142857,
            "unit": "ns",
            "range": "± 3067981.8842824753"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70686.15789473684,
            "unit": "ns",
            "range": "± 7541.867412686908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320042.7551020408,
            "unit": "ns",
            "range": "± 20257.241667627008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299163.52173913043,
            "unit": "ns",
            "range": "± 18170.904538486106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318922.3698630137,
            "unit": "ns",
            "range": "± 15793.383294126383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4193689.970588235,
            "unit": "ns",
            "range": "± 83760.38724698393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793464.4285714286,
            "unit": "ns",
            "range": "± 66153.7639928189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22003.474226804123,
            "unit": "ns",
            "range": "± 4415.326830798182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108735.75,
            "unit": "ns",
            "range": "± 16861.27628583832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115410.64141414141,
            "unit": "ns",
            "range": "± 11305.951416346064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121821.13684210526,
            "unit": "ns",
            "range": "± 13372.138386745273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8110.526315789473,
            "unit": "ns",
            "range": "± 1158.9116578424307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22542.632653061224,
            "unit": "ns",
            "range": "± 3879.27158745454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608481.336734694,
            "unit": "ns",
            "range": "± 157653.26938556522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3046515.169811321,
            "unit": "ns",
            "range": "± 125582.73387411797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2592621.5721649486,
            "unit": "ns",
            "range": "± 190067.05261851274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6736414.641509434,
            "unit": "ns",
            "range": "± 270982.5608904278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3142484.358974359,
            "unit": "ns",
            "range": "± 107284.14010749487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3326809.0444444446,
            "unit": "ns",
            "range": "± 126475.24613661034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4322484.444444444,
            "unit": "ns",
            "range": "± 163507.23621887303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4358301.135135135,
            "unit": "ns",
            "range": "± 135445.16150132538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7676538.089285715,
            "unit": "ns",
            "range": "± 326093.2070032781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6665466.466517857,
            "unit": "ns",
            "range": "± 51009.41240027321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902702.338169643,
            "unit": "ns",
            "range": "± 11365.571394432627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1262238.2880208334,
            "unit": "ns",
            "range": "± 23554.66399101826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2719546.705636161,
            "unit": "ns",
            "range": "± 25948.764802452315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876031.930859375,
            "unit": "ns",
            "range": "± 6725.745672553221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788833.1259765625,
            "unit": "ns",
            "range": "± 4054.6180625456564"
          }
        ]
      }
    ]
  }
}