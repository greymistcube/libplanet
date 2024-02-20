window.BENCHMARK_DATA = {
  "lastUpdate": 1702808292683,
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
          "id": "fa996be4b8fb4b7a3531cfea193f039be9aae52b",
          "message": "Changelog",
          "timestamp": "2023-12-15T13:23:20+09:00",
          "tree_id": "b23d2714bf667fd76fec094515c62070d08df729",
          "url": "https://github.com/greymistcube/libplanet/commit/fa996be4b8fb4b7a3531cfea193f039be9aae52b"
        },
        "date": 1702615204170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10001932.209677419,
            "unit": "ns",
            "range": "± 253029.6006284895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24735589.20588235,
            "unit": "ns",
            "range": "± 490404.3349701046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62605539.297619045,
            "unit": "ns",
            "range": "± 3971006.6423103274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108086477.97,
            "unit": "ns",
            "range": "± 11540960.450362345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238410390.07070708,
            "unit": "ns",
            "range": "± 17729208.007974356"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55748.82978723404,
            "unit": "ns",
            "range": "± 11929.410043762495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289663.9266666667,
            "unit": "ns",
            "range": "± 14412.83532150023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261663.16666666666,
            "unit": "ns",
            "range": "± 35956.86844115049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244570.01030927835,
            "unit": "ns",
            "range": "± 39310.12698998367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4144221.5714285714,
            "unit": "ns",
            "range": "± 417532.1827160992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4221174.01369863,
            "unit": "ns",
            "range": "± 208025.22241789263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18510.149484536083,
            "unit": "ns",
            "range": "± 4878.148600821057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84263.9696969697,
            "unit": "ns",
            "range": "± 20271.382526100195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90773.52127659574,
            "unit": "ns",
            "range": "± 15433.524561377391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83770.07303370787,
            "unit": "ns",
            "range": "± 13298.11476290705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6725.128865979382,
            "unit": "ns",
            "range": "± 1266.3606756468482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16714.335051546394,
            "unit": "ns",
            "range": "± 1967.812346450221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1277572.6075268816,
            "unit": "ns",
            "range": "± 91080.53638979918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2626460.918032787,
            "unit": "ns",
            "range": "± 118205.38460384606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1800267.8817204302,
            "unit": "ns",
            "range": "± 111046.83572463131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8271781.120689655,
            "unit": "ns",
            "range": "± 741262.7383997923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3659770.8,
            "unit": "ns",
            "range": "± 109423.57766619115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3582726.8024691357,
            "unit": "ns",
            "range": "± 187625.56613614917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4615168.388888889,
            "unit": "ns",
            "range": "± 325827.169645652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4348802.052631579,
            "unit": "ns",
            "range": "± 183222.1038763396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15819122.051020408,
            "unit": "ns",
            "range": "± 3781762.7400950836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5116000.311598558,
            "unit": "ns",
            "range": "± 58575.13426807519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1612069.6605718085,
            "unit": "ns",
            "range": "± 62619.34304815038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 902850.7696906888,
            "unit": "ns",
            "range": "± 14846.839819638026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2005849.3973214286,
            "unit": "ns",
            "range": "± 33341.75813463686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639317.8572265625,
            "unit": "ns",
            "range": "± 7607.720493470567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573004.5794921875,
            "unit": "ns",
            "range": "± 6847.681188285403"
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
          "id": "b531426ca03cc35b30df2b485b9609f039e046f5",
          "message": "Fix tests",
          "timestamp": "2023-12-15T13:40:01+09:00",
          "tree_id": "5703704d8060ed967183226ff229b24a248ef935",
          "url": "https://github.com/greymistcube/libplanet/commit/b531426ca03cc35b30df2b485b9609f039e046f5"
        },
        "date": 1702616291004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8914345.438271604,
            "unit": "ns",
            "range": "± 468501.5428059534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22090738.903225806,
            "unit": "ns",
            "range": "± 1004658.4869536099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51733649.3,
            "unit": "ns",
            "range": "± 1547338.9877364915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100753429.35185185,
            "unit": "ns",
            "range": "± 2784391.780088893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210128346.22727272,
            "unit": "ns",
            "range": "± 5098991.976562538"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64858.37634408602,
            "unit": "ns",
            "range": "± 9343.262670192727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330210.75531914894,
            "unit": "ns",
            "range": "± 38564.1868616428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348737.71276595746,
            "unit": "ns",
            "range": "± 46678.364969527785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292494.93406593404,
            "unit": "ns",
            "range": "± 21329.993832786626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3977019.407407407,
            "unit": "ns",
            "range": "± 106428.56240844201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3918542.2395833335,
            "unit": "ns",
            "range": "± 226872.0328799914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20955.296703296703,
            "unit": "ns",
            "range": "± 3541.2427714779124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112370.04166666667,
            "unit": "ns",
            "range": "± 18095.89151505284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107284.55494505494,
            "unit": "ns",
            "range": "± 17280.437743531227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114036.28723404255,
            "unit": "ns",
            "range": "± 18189.637964719837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6647.186868686868,
            "unit": "ns",
            "range": "± 1316.8385118359731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22075.322580645163,
            "unit": "ns",
            "range": "± 3263.5011679286295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1458987.5555555555,
            "unit": "ns",
            "range": "± 195420.9802830813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2754458.487179487,
            "unit": "ns",
            "range": "± 94613.77670432784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2134835.988235294,
            "unit": "ns",
            "range": "± 114675.46738134889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8997437.680327868,
            "unit": "ns",
            "range": "± 400235.0714058138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3181506.6263736263,
            "unit": "ns",
            "range": "± 227999.52455874643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3343841.4565217393,
            "unit": "ns",
            "range": "± 215347.31806194063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4347386.159574468,
            "unit": "ns",
            "range": "± 157403.5118343763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4006689.3529411764,
            "unit": "ns",
            "range": "± 188523.76489670685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19199914.97,
            "unit": "ns",
            "range": "± 3200198.6472201482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6176386.024553572,
            "unit": "ns",
            "range": "± 262486.7013307551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842513.0765206474,
            "unit": "ns",
            "range": "± 51718.605846921484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121268.11796875,
            "unit": "ns",
            "range": "± 20959.90805432398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2861218.866847826,
            "unit": "ns",
            "range": "± 71731.47581016876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820744.3088030134,
            "unit": "ns",
            "range": "± 12912.270732986899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757831.29296875,
            "unit": "ns",
            "range": "± 19990.582529552237"
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
          "id": "3d40789b75cb10349b9c5d63b8e454224082d1ff",
          "message": "Fix tests",
          "timestamp": "2023-12-17T18:57:41+09:00",
          "tree_id": "22049ab28f9daf3e161ccde365e95779a0bddef9",
          "url": "https://github.com/greymistcube/libplanet/commit/3d40789b75cb10349b9c5d63b8e454224082d1ff"
        },
        "date": 1702808278650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8699129.125,
            "unit": "ns",
            "range": "± 163748.8253298834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20220626.14285714,
            "unit": "ns",
            "range": "± 334147.3798034581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51148500.24390244,
            "unit": "ns",
            "range": "± 1844154.5978573186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102630956.36363636,
            "unit": "ns",
            "range": "± 2413884.826160032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209200610.36666667,
            "unit": "ns",
            "range": "± 2844255.9769998067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63496.42391304348,
            "unit": "ns",
            "range": "± 7366.896284208095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324820.97826086957,
            "unit": "ns",
            "range": "± 31335.00072277366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315420.4893617021,
            "unit": "ns",
            "range": "± 39771.20673875605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305729.35869565216,
            "unit": "ns",
            "range": "± 25883.34656954456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208247.188888889,
            "unit": "ns",
            "range": "± 156980.13588549438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3796338.933333333,
            "unit": "ns",
            "range": "± 111457.0409532945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19924.308988764045,
            "unit": "ns",
            "range": "± 2212.3214816341906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92913.25789473685,
            "unit": "ns",
            "range": "± 11177.98303535275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87762.06382978724,
            "unit": "ns",
            "range": "± 11269.88155838241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105160.71875,
            "unit": "ns",
            "range": "± 17423.244686762642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6488.3263157894735,
            "unit": "ns",
            "range": "± 1069.0922023221708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20699.285714285714,
            "unit": "ns",
            "range": "± 3421.137816853445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1750743.6098901099,
            "unit": "ns",
            "range": "± 430263.81499451265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3041002.191011236,
            "unit": "ns",
            "range": "± 330790.8945556528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2558655.1222222224,
            "unit": "ns",
            "range": "± 504677.6730211483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11553467.06122449,
            "unit": "ns",
            "range": "± 2191698.1794338534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3236384.559139785,
            "unit": "ns",
            "range": "± 228817.603848257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3366694.8630136987,
            "unit": "ns",
            "range": "± 154086.56461830102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4258116.433962264,
            "unit": "ns",
            "range": "± 157304.2764228112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4323950.731958763,
            "unit": "ns",
            "range": "± 275444.4543188153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21321364.714285713,
            "unit": "ns",
            "range": "± 3843886.2302507176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5694501.443509615,
            "unit": "ns",
            "range": "± 45850.541300618184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790369.9892578125,
            "unit": "ns",
            "range": "± 15018.689661631914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097712.151171875,
            "unit": "ns",
            "range": "± 14066.42716105648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2557559.9420072115,
            "unit": "ns",
            "range": "± 18546.335939360957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823746.5108119419,
            "unit": "ns",
            "range": "± 13547.734497086694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733312.3087890625,
            "unit": "ns",
            "range": "± 8969.096468635007"
          }
        ]
      }
    ]
  }
}