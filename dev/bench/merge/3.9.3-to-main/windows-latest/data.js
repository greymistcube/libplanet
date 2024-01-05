window.BENCHMARK_DATA = {
  "lastUpdate": 1704434828833,
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
      }
    ]
  }
}