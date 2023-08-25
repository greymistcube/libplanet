window.BENCHMARK_DATA = {
  "lastUpdate": 1692936359567,
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
          "id": "a2fd2a4e159333d8f0029b1d740961f3c626bdfb",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-25T12:44:09+09:00",
          "tree_id": "2472422cfbcf5b4a784b1bd60909baa5f2d8bb88",
          "url": "https://github.com/greymistcube/libplanet/commit/a2fd2a4e159333d8f0029b1d740961f3c626bdfb"
        },
        "date": 1692936331701,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574398.8764044943,
            "unit": "ns",
            "range": "± 86981.37273732026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2932536.111111111,
            "unit": "ns",
            "range": "± 97468.11391505803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2038713.1868131869,
            "unit": "ns",
            "range": "± 113403.28156019238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5429368.181818182,
            "unit": "ns",
            "range": "± 274823.4029753771"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55337.63440860215,
            "unit": "ns",
            "range": "± 3179.2094306636313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8815135.714285715,
            "unit": "ns",
            "range": "± 79043.1489479284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24383978.57142857,
            "unit": "ns",
            "range": "± 127785.75326014921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61658692.85714286,
            "unit": "ns",
            "range": "± 789156.4117795326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124681002.94117647,
            "unit": "ns",
            "range": "± 3923978.2669744818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250675242.10526314,
            "unit": "ns",
            "range": "± 5451707.459575882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5468155.625,
            "unit": "ns",
            "range": "± 55710.45349773854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1725368.046875,
            "unit": "ns",
            "range": "± 24365.497861466283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307167.9166666667,
            "unit": "ns",
            "range": "± 16208.025525335821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3201806.6666666665,
            "unit": "ns",
            "range": "± 52589.46832912115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034105.1953125,
            "unit": "ns",
            "range": "± 18937.427808567343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938411.7954799107,
            "unit": "ns",
            "range": "± 7908.849309356594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3922811.111111111,
            "unit": "ns",
            "range": "± 77385.7631600883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4190384.6153846155,
            "unit": "ns",
            "range": "± 144177.6947097638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4888491.891891892,
            "unit": "ns",
            "range": "± 154229.94445232017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436691.176470588,
            "unit": "ns",
            "range": "± 140890.39016554048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7023090.476190476,
            "unit": "ns",
            "range": "± 143934.85298829433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296561.76470588235,
            "unit": "ns",
            "range": "± 9510.337747113459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290569.23076923075,
            "unit": "ns",
            "range": "± 7561.680724853132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258325,
            "unit": "ns",
            "range": "± 13057.086198689201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4800800,
            "unit": "ns",
            "range": "± 34128.97107541724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4305591.666666667,
            "unit": "ns",
            "range": "± 29021.542416667384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23272.63157894737,
            "unit": "ns",
            "range": "± 1669.9115854581883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97185.41666666667,
            "unit": "ns",
            "range": "± 5611.228951921066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83110.9756097561,
            "unit": "ns",
            "range": "± 4420.463248657442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93821.64948453609,
            "unit": "ns",
            "range": "± 14353.10816225969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6125.531914893617,
            "unit": "ns",
            "range": "± 735.130179417848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22485.263157894737,
            "unit": "ns",
            "range": "± 1811.016431487462"
          }
        ]
      }
    ]
  }
}