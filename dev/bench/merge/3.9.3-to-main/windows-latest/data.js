window.BENCHMARK_DATA = {
  "lastUpdate": 1704441115950,
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
          "id": "7e8c0091a0e73ec237800d4e3dc1839ae3772537",
          "message": "Test fixes",
          "timestamp": "2024-01-05T14:54:52+09:00",
          "tree_id": "9696fabb7b18492c9aa28c897bf27a3d37462adc",
          "url": "https://github.com/greymistcube/libplanet/commit/7e8c0091a0e73ec237800d4e3dc1839ae3772537"
        },
        "date": 1704434809901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987146,
            "unit": "ns",
            "range": "± 111054.26776076095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1752916.4179104478,
            "unit": "ns",
            "range": "± 79528.81047812253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1475486.3157894737,
            "unit": "ns",
            "range": "± 132464.32567566153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11159687.096774194,
            "unit": "ns",
            "range": "± 1159880.154905989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34328.985507246376,
            "unit": "ns",
            "range": "± 1616.7415895664744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5012020,
            "unit": "ns",
            "range": "± 42219.90390460743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12928600,
            "unit": "ns",
            "range": "± 183116.19652169337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33004226.666666668,
            "unit": "ns",
            "range": "± 330755.47823271557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65859753.333333336,
            "unit": "ns",
            "range": "± 885982.3247726355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127596326.66666667,
            "unit": "ns",
            "range": "± 1380369.758675793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314264.3973214286,
            "unit": "ns",
            "range": "± 8954.675050116664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1027549.8647836539,
            "unit": "ns",
            "range": "± 2246.4092727100797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741432.4739583334,
            "unit": "ns",
            "range": "± 2052.7347891021027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937879.3118990385,
            "unit": "ns",
            "range": "± 1810.2342329359133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613245.0455729166,
            "unit": "ns",
            "range": "± 1378.9246663729537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553801.6671316965,
            "unit": "ns",
            "range": "± 912.9610281504897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2066620.6896551724,
            "unit": "ns",
            "range": "± 58773.10110750583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2238096.6666666665,
            "unit": "ns",
            "range": "± 66690.67806095455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2786458.8235294116,
            "unit": "ns",
            "range": "± 88877.74073734084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2759425.3333333335,
            "unit": "ns",
            "range": "± 124269.70896306857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12360986.516853932,
            "unit": "ns",
            "range": "± 1551059.1917073233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173612.7906976744,
            "unit": "ns",
            "range": "± 9160.256822904012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165112,
            "unit": "ns",
            "range": "± 6355.79889485474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140290,
            "unit": "ns",
            "range": "± 5602.158840435479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2832100,
            "unit": "ns",
            "range": "± 31399.977252039076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2509521.4285714286,
            "unit": "ns",
            "range": "± 39873.70790906688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11465.217391304348,
            "unit": "ns",
            "range": "± 1639.7155195913479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54764.444444444445,
            "unit": "ns",
            "range": "± 4803.540620925247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44841.666666666664,
            "unit": "ns",
            "range": "± 2727.2375329999236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59862.62626262626,
            "unit": "ns",
            "range": "± 14702.384825700105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2578.2608695652175,
            "unit": "ns",
            "range": "± 291.57627202505154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10800,
            "unit": "ns",
            "range": "± 1590.3607489585365"
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
          "id": "02f4d2cb421a1f1f511382929d1f1e94c4ccc628",
          "message": "Changelog",
          "timestamp": "2024-01-05T16:39:17+09:00",
          "tree_id": "ef0b7543e38511b97dd0faffe9383ecfca9f4a77",
          "url": "https://github.com/greymistcube/libplanet/commit/02f4d2cb421a1f1f511382929d1f1e94c4ccc628"
        },
        "date": 1704441096262,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970169.387755102,
            "unit": "ns",
            "range": "± 109373.95080678583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728273.611111111,
            "unit": "ns",
            "range": "± 84446.61784612486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1523403.125,
            "unit": "ns",
            "range": "± 139526.7131209723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10744682.608695652,
            "unit": "ns",
            "range": "± 901040.7688705025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34736.470588235294,
            "unit": "ns",
            "range": "± 1817.8903955398625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5208678.571428572,
            "unit": "ns",
            "range": "± 78291.694996944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13430937.5,
            "unit": "ns",
            "range": "± 243678.8757771178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33025160,
            "unit": "ns",
            "range": "± 436652.9036726016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66577253.333333336,
            "unit": "ns",
            "range": "± 665767.6459403478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127742092.85714285,
            "unit": "ns",
            "range": "± 944151.5111987593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319912.34375,
            "unit": "ns",
            "range": "± 11338.74755840124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1036371.25,
            "unit": "ns",
            "range": "± 3666.495375145543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743884.1727120535,
            "unit": "ns",
            "range": "± 3198.055655403478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916160.435267857,
            "unit": "ns",
            "range": "± 3124.775092111601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605372.8385416666,
            "unit": "ns",
            "range": "± 1952.6584159018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569656.3346354166,
            "unit": "ns",
            "range": "± 1351.3917701381934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2090060.2564102565,
            "unit": "ns",
            "range": "± 67749.08736954474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2205295.081967213,
            "unit": "ns",
            "range": "± 92504.1286037719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2764788.888888889,
            "unit": "ns",
            "range": "± 55930.87002919069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2728114.285714286,
            "unit": "ns",
            "range": "± 152472.09403794995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12248886.516853932,
            "unit": "ns",
            "range": "± 1494341.1255763748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171289.7435897436,
            "unit": "ns",
            "range": "± 8353.964604229815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164933.33333333334,
            "unit": "ns",
            "range": "± 7759.9233408848995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141482.14285714287,
            "unit": "ns",
            "range": "± 4055.4539017484035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2813211.5384615385,
            "unit": "ns",
            "range": "± 76920.06800269004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2427781.25,
            "unit": "ns",
            "range": "± 47037.84602140423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10707.52688172043,
            "unit": "ns",
            "range": "± 1634.6942646695222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55917.02127659575,
            "unit": "ns",
            "range": "± 5470.121940373286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44692.42424242424,
            "unit": "ns",
            "range": "± 2108.9049733167653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58261.82795698925,
            "unit": "ns",
            "range": "± 14074.158013755794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2560.4166666666665,
            "unit": "ns",
            "range": "± 397.7513549327987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10492.307692307691,
            "unit": "ns",
            "range": "± 1172.1045430459947"
          }
        ]
      }
    ]
  }
}