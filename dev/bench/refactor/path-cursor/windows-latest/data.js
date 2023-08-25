window.BENCHMARK_DATA = {
  "lastUpdate": 1692927449690,
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
          "id": "cc132b5f96291ccfa235896df2d330a294d911e2",
          "message": "Added tests for Nibbles",
          "timestamp": "2023-08-25T10:07:07+09:00",
          "tree_id": "b06e47738ed0635ac7dc4a7169bbfe7bef373e64",
          "url": "https://github.com/greymistcube/libplanet/commit/cc132b5f96291ccfa235896df2d330a294d911e2"
        },
        "date": 1692927423178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325601.0416666667,
            "unit": "ns",
            "range": "± 76387.42317918663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527165.6716417912,
            "unit": "ns",
            "range": "± 119899.14897496499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1763879,
            "unit": "ns",
            "range": "± 134811.55144508317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4538466.153846154,
            "unit": "ns",
            "range": "± 211964.31323819218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48323.40425531915,
            "unit": "ns",
            "range": "± 4092.858336383282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7355225,
            "unit": "ns",
            "range": "± 165999.79985720338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19964650,
            "unit": "ns",
            "range": "± 466601.02437990956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50458573.333333336,
            "unit": "ns",
            "range": "± 804706.3399301695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100334373.33333333,
            "unit": "ns",
            "range": "± 1741669.5813691719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203610930,
            "unit": "ns",
            "range": "± 4485759.259338027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4521320,
            "unit": "ns",
            "range": "± 22123.173523766778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1451421.6666666667,
            "unit": "ns",
            "range": "± 4716.341172614446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076662.3958333333,
            "unit": "ns",
            "range": "± 3951.2092235405416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655528.7760416665,
            "unit": "ns",
            "range": "± 7945.019384093746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832717.94921875,
            "unit": "ns",
            "range": "± 3505.8980015063976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773766.4322916666,
            "unit": "ns",
            "range": "± 2277.03422268398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3207123.214285714,
            "unit": "ns",
            "range": "± 137821.8929581633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3281161.7647058824,
            "unit": "ns",
            "range": "± 105019.99236712715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4033871.4285714286,
            "unit": "ns",
            "range": "± 151063.31591973832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3699746.875,
            "unit": "ns",
            "range": "± 226371.27117013812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5962421.621621622,
            "unit": "ns",
            "range": "± 200973.11060484234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254774.1935483871,
            "unit": "ns",
            "range": "± 7384.757623733518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239653.33333333334,
            "unit": "ns",
            "range": "± 9093.31922597324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213725.26315789475,
            "unit": "ns",
            "range": "± 12282.291078302082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4014752.9411764704,
            "unit": "ns",
            "range": "± 80265.19418190443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3666592,
            "unit": "ns",
            "range": "± 96739.19371175262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20481.25,
            "unit": "ns",
            "range": "± 2636.6371125276028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85780.20833333333,
            "unit": "ns",
            "range": "± 6265.504890676227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67823.80952380953,
            "unit": "ns",
            "range": "± 2972.601461179182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83404.08163265306,
            "unit": "ns",
            "range": "± 13866.16380375058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5058.163265306122,
            "unit": "ns",
            "range": "± 619.7644163974943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18260,
            "unit": "ns",
            "range": "± 1579.5604565685533"
          }
        ]
      }
    ]
  }
}