window.BENCHMARK_DATA = {
  "lastUpdate": 1702613284913,
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
          "id": "3907c1f970f4913947829abd10a24c748831318f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:42:26+09:00",
          "tree_id": "c34e511f264aa20568ee1980320ad50122fca47b",
          "url": "https://github.com/greymistcube/libplanet/commit/3907c1f970f4913947829abd10a24c748831318f"
        },
        "date": 1702612701999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9077262.258064516,
            "unit": "ns",
            "range": "± 413209.79600031365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22649050.243243244,
            "unit": "ns",
            "range": "± 682411.7635868312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55941426.733333334,
            "unit": "ns",
            "range": "± 277023.9852644189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107133358.30851063,
            "unit": "ns",
            "range": "± 9729307.344888695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226174166.25,
            "unit": "ns",
            "range": "± 18141066.000062402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49434.886597938144,
            "unit": "ns",
            "range": "± 10369.44489923429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234196.18085106384,
            "unit": "ns",
            "range": "± 17465.84514374328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248194.72151898735,
            "unit": "ns",
            "range": "± 16237.014226709822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227804.77966101695,
            "unit": "ns",
            "range": "± 10088.449684506564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4144085.4285714286,
            "unit": "ns",
            "range": "± 151171.2328657986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3712260.4,
            "unit": "ns",
            "range": "± 73772.92425473411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16184.5,
            "unit": "ns",
            "range": "± 2913.831523504477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70516.67021276595,
            "unit": "ns",
            "range": "± 8584.57096909358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74526.13953488372,
            "unit": "ns",
            "range": "± 8896.055452261564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69099.95505617978,
            "unit": "ns",
            "range": "± 20451.522079336624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3743.3854166666665,
            "unit": "ns",
            "range": "± 438.2940702263881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13291.075268817205,
            "unit": "ns",
            "range": "± 2197.5682669148837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042313.9204545454,
            "unit": "ns",
            "range": "± 80068.11216840317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2450543.994736842,
            "unit": "ns",
            "range": "± 146253.40415218953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1771833.757894737,
            "unit": "ns",
            "range": "± 121576.42922254543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7653487.870786517,
            "unit": "ns",
            "range": "± 760636.6353436708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3132532.65625,
            "unit": "ns",
            "range": "± 237498.7288066292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3118619.6958762887,
            "unit": "ns",
            "range": "± 271669.98695624253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4299619.493506493,
            "unit": "ns",
            "range": "± 210373.44790900222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821635.210526316,
            "unit": "ns",
            "range": "± 193363.21895278266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15089264.469696969,
            "unit": "ns",
            "range": "± 2703282.285603772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4243541.948863637,
            "unit": "ns",
            "range": "± 77885.91377121267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1326585.0366981907,
            "unit": "ns",
            "range": "± 27424.57846398296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 878002.379313151,
            "unit": "ns",
            "range": "± 7540.27588111895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1996485.818638393,
            "unit": "ns",
            "range": "± 18748.21742017978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620030.5802408854,
            "unit": "ns",
            "range": "± 13170.821564695842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596800.2160326086,
            "unit": "ns",
            "range": "± 14632.485069597516"
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
          "id": "6bf89675478468b8f5eaeae9d3c6c1d91e28114f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:41:57+09:00",
          "tree_id": "eaa67ccbf19f077892993e50773ef00e76df5b9c",
          "url": "https://github.com/greymistcube/libplanet/commit/6bf89675478468b8f5eaeae9d3c6c1d91e28114f"
        },
        "date": 1702612862180,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8926614.427710844,
            "unit": "ns",
            "range": "± 474795.9321895317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22940763.774509802,
            "unit": "ns",
            "range": "± 931602.6833927236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58711899.85294118,
            "unit": "ns",
            "range": "± 1887000.8515054507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114644570.11904761,
            "unit": "ns",
            "range": "± 2654093.2621377017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221487192.57142857,
            "unit": "ns",
            "range": "± 9460185.37427418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70695.5744680851,
            "unit": "ns",
            "range": "± 7104.037439794907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351493.16842105263,
            "unit": "ns",
            "range": "± 41022.2568988801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361684.11340206186,
            "unit": "ns",
            "range": "± 60506.45709117821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322790.467032967,
            "unit": "ns",
            "range": "± 35720.640665043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4399473.857142857,
            "unit": "ns",
            "range": "± 278105.6002913782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4021252,
            "unit": "ns",
            "range": "± 366165.9390038865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23625.3488372093,
            "unit": "ns",
            "range": "± 3705.7195935867503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107514.8125,
            "unit": "ns",
            "range": "± 20072.671228268497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121611.34536082474,
            "unit": "ns",
            "range": "± 20753.85245630124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133411.05670103093,
            "unit": "ns",
            "range": "± 28885.770898045208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8381.438202247191,
            "unit": "ns",
            "range": "± 937.9931061369097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23534.05172413793,
            "unit": "ns",
            "range": "± 2661.676830970669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438269.2708333333,
            "unit": "ns",
            "range": "± 185138.54740868948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2903594.111111111,
            "unit": "ns",
            "range": "± 242246.91508066675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2126588.31443299,
            "unit": "ns",
            "range": "± 206534.89629894317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9770689.022988506,
            "unit": "ns",
            "range": "± 610232.6180077023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3426324.7789473683,
            "unit": "ns",
            "range": "± 258426.30721312473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4138338.713483146,
            "unit": "ns",
            "range": "± 1215681.9071285904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4525512.277777778,
            "unit": "ns",
            "range": "± 251246.1555888016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4586377.916666667,
            "unit": "ns",
            "range": "± 551924.7396084984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19243608.12244898,
            "unit": "ns",
            "range": "± 2794117.3748499174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6459112.9186789775,
            "unit": "ns",
            "range": "± 178793.34036397433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891154.1326729911,
            "unit": "ns",
            "range": "± 25947.19814988477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1205332.7786458333,
            "unit": "ns",
            "range": "± 20091.050982861187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3092751.630962171,
            "unit": "ns",
            "range": "± 68069.04917593657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 881297.5596788195,
            "unit": "ns",
            "range": "± 18402.359042221335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837487.9720865885,
            "unit": "ns",
            "range": "± 21127.601366090083"
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
          "id": "2657dfea46bdbab71605c42bdc2f2a9cbdf5bf0a",
          "message": "Changelog",
          "timestamp": "2023-12-15T12:44:45+09:00",
          "tree_id": "a16ebc9995f04b409192c4ea0a1408bac46d1c7c",
          "url": "https://github.com/greymistcube/libplanet/commit/2657dfea46bdbab71605c42bdc2f2a9cbdf5bf0a"
        },
        "date": 1702613250198,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9717187.825842697,
            "unit": "ns",
            "range": "± 1024199.7537903099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22743187.714285713,
            "unit": "ns",
            "range": "± 341493.6376639403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56740213.961538464,
            "unit": "ns",
            "range": "± 828916.3759752463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114531273.5,
            "unit": "ns",
            "range": "± 3943372.1008880944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234457472.56756756,
            "unit": "ns",
            "range": "± 7240773.147497918"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64562.36666666667,
            "unit": "ns",
            "range": "± 16074.105926487951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267071.4888888889,
            "unit": "ns",
            "range": "± 29643.407988996856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280066.7555555556,
            "unit": "ns",
            "range": "± 22245.35457555992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258346.2105263158,
            "unit": "ns",
            "range": "± 8901.762014792032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4338433.016129033,
            "unit": "ns",
            "range": "± 129572.28059346412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3898637.1666666665,
            "unit": "ns",
            "range": "± 56928.71862622803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21906.677083333332,
            "unit": "ns",
            "range": "± 3581.4191864907452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88324.61578947368,
            "unit": "ns",
            "range": "± 12905.108987366664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92247.66470588236,
            "unit": "ns",
            "range": "± 6602.406314308117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85420.72164948453,
            "unit": "ns",
            "range": "± 15272.541198546403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5789.708333333333,
            "unit": "ns",
            "range": "± 1099.7411170641044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16175.677083333334,
            "unit": "ns",
            "range": "± 3397.6796865687515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423932.5108695652,
            "unit": "ns",
            "range": "± 218435.31072912534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3053982.8260869565,
            "unit": "ns",
            "range": "± 497788.29694919987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1998916.302197802,
            "unit": "ns",
            "range": "± 152879.73238923756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9267364.244680852,
            "unit": "ns",
            "range": "± 2006998.5775474326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3560617.2688172045,
            "unit": "ns",
            "range": "± 385581.8620366001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3554750.4166666665,
            "unit": "ns",
            "range": "± 115612.16350796683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4160565.25,
            "unit": "ns",
            "range": "± 176497.95427005013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4155748.8157894737,
            "unit": "ns",
            "range": "± 142824.92230621362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16878668.146067414,
            "unit": "ns",
            "range": "± 3223861.692227346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6313797.236308397,
            "unit": "ns",
            "range": "± 446895.03306922794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1460297.6742001488,
            "unit": "ns",
            "range": "± 46978.830982416825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1034559.5134277344,
            "unit": "ns",
            "range": "± 31711.045605821924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2360089.825945724,
            "unit": "ns",
            "range": "± 329559.9963378821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 655342.5787384816,
            "unit": "ns",
            "range": "± 22475.238475796403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 663802.4281911543,
            "unit": "ns",
            "range": "± 28232.20093542"
          }
        ]
      }
    ]
  }
}