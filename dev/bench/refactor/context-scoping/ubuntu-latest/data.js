window.BENCHMARK_DATA = {
  "lastUpdate": 1701238219382,
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
          "id": "9193e1dab4f058ea576f2fd5b09de97760f14914",
          "message": "Update docs",
          "timestamp": "2023-11-29T14:23:45+09:00",
          "tree_id": "8f30fcc334c316b7e5dd723ecf383ac89fbf6790",
          "url": "https://github.com/greymistcube/libplanet/commit/9193e1dab4f058ea576f2fd5b09de97760f14914"
        },
        "date": 1701236096044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194876.5,
            "unit": "ns",
            "range": "± 8576.579673538381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193498.83333333334,
            "unit": "ns",
            "range": "± 7538.108678136461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170221.23529411765,
            "unit": "ns",
            "range": "± 3068.0914778044785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3044933.346153846,
            "unit": "ns",
            "range": "± 37914.218568249904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825694.5,
            "unit": "ns",
            "range": "± 46872.448579588345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12372.89010989011,
            "unit": "ns",
            "range": "± 1175.6667370810815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67949.65384615384,
            "unit": "ns",
            "range": "± 5379.8644446431035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53081.45652173913,
            "unit": "ns",
            "range": "± 4332.318143049327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60631.967391304344,
            "unit": "ns",
            "range": "± 13203.692334444228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2687.136842105263,
            "unit": "ns",
            "range": "± 317.68432781435376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12421.15306122449,
            "unit": "ns",
            "range": "± 2154.869312668695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3927632.1712239585,
            "unit": "ns",
            "range": "± 99312.35424168612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209509.7279146635,
            "unit": "ns",
            "range": "± 1679.7972396243492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771669.5615234375,
            "unit": "ns",
            "range": "± 4269.781418033942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947872.3075520834,
            "unit": "ns",
            "range": "± 25474.890501562462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616673.191030649,
            "unit": "ns",
            "range": "± 837.7778693642797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578284.8951322115,
            "unit": "ns",
            "range": "± 543.7763620758399"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40127.02631578947,
            "unit": "ns",
            "range": "± 5250.386504196528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418503.5217391304,
            "unit": "ns",
            "range": "± 46996.13048855441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2516918.120689655,
            "unit": "ns",
            "range": "± 103219.24929277545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3123514.90625,
            "unit": "ns",
            "range": "± 86720.44305674799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2894427.3913043477,
            "unit": "ns",
            "range": "± 174124.68208299633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6528747,
            "unit": "ns",
            "range": "± 163179.28493698413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5706076.466666667,
            "unit": "ns",
            "range": "± 88740.94208253166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14550401.266666668,
            "unit": "ns",
            "range": "± 179354.40149462526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36394645.14285714,
            "unit": "ns",
            "range": "± 251229.3050137072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75514110.85714285,
            "unit": "ns",
            "range": "± 726911.6574586793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148466610.23076922,
            "unit": "ns",
            "range": "± 972118.3944863364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971878.0421052632,
            "unit": "ns",
            "range": "± 99920.45992932362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868238.603448276,
            "unit": "ns",
            "range": "± 81714.44851602796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1404294.0208333333,
            "unit": "ns",
            "range": "± 119816.46639906161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5558057.896226415,
            "unit": "ns",
            "range": "± 230107.15618333622"
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
          "id": "945df40952c9f9c6e38cf5e702e98c4ac1b473a5",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:58:08+09:00",
          "tree_id": "2e82a3a795c60b593810ee928c8bdf58fe3b3ca0",
          "url": "https://github.com/greymistcube/libplanet/commit/945df40952c9f9c6e38cf5e702e98c4ac1b473a5"
        },
        "date": 1701238212454,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207173.08620689655,
            "unit": "ns",
            "range": "± 11035.618479366396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196214.31578947368,
            "unit": "ns",
            "range": "± 9976.653686429501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167652.57142857142,
            "unit": "ns",
            "range": "± 5504.452488057038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3051126.125,
            "unit": "ns",
            "range": "± 59919.34685878454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2881473.375,
            "unit": "ns",
            "range": "± 53468.88209401178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14749.040404040405,
            "unit": "ns",
            "range": "± 3091.1842157163182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61378.72727272727,
            "unit": "ns",
            "range": "± 4986.8185853232935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62665.78,
            "unit": "ns",
            "range": "± 1535.6254024555165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61167.907216494845,
            "unit": "ns",
            "range": "± 13025.850564104629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3769.3695652173915,
            "unit": "ns",
            "range": "± 579.719726093383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12292.478260869566,
            "unit": "ns",
            "range": "± 1196.47406421343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733233.8194110575,
            "unit": "ns",
            "range": "± 33697.38024838381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212745.2034505208,
            "unit": "ns",
            "range": "± 2827.444814721896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774701.446890024,
            "unit": "ns",
            "range": "± 3553.266641110433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951195.2272600445,
            "unit": "ns",
            "range": "± 24773.88674855748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616234.0218331473,
            "unit": "ns",
            "range": "± 3427.480234714929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587749.263532366,
            "unit": "ns",
            "range": "± 2359.51989303193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41551.46875,
            "unit": "ns",
            "range": "± 5770.253153167956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2338118.0625,
            "unit": "ns",
            "range": "± 21288.71452035483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2491882.4545454546,
            "unit": "ns",
            "range": "± 91070.68915279674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3179043.275862069,
            "unit": "ns",
            "range": "± 92487.7074283375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3069560.5,
            "unit": "ns",
            "range": "± 76088.82489504678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7034956.722222222,
            "unit": "ns",
            "range": "± 345464.544599649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5496031.571428572,
            "unit": "ns",
            "range": "± 13955.01719930746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14005775.642857144,
            "unit": "ns",
            "range": "± 77091.59774615485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35928886.78571428,
            "unit": "ns",
            "range": "± 253686.36835339648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75674063.47058824,
            "unit": "ns",
            "range": "± 1504111.41412713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151237908.69230768,
            "unit": "ns",
            "range": "± 1598174.3340801606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 918058.380952381,
            "unit": "ns",
            "range": "± 49064.227694428424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1879018.7077922078,
            "unit": "ns",
            "range": "± 94378.56092582646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1406565.010989011,
            "unit": "ns",
            "range": "± 102399.56223967783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5553837.8513513515,
            "unit": "ns",
            "range": "± 184196.88177738516"
          }
        ]
      }
    ]
  }
}