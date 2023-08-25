window.BENCHMARK_DATA = {
  "lastUpdate": 1692935951777,
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
        "date": 1692927375851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732757.4,
            "unit": "ns",
            "range": "± 87012.92335050006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3240306.3125,
            "unit": "ns",
            "range": "± 63645.41834645942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160092.6774193547,
            "unit": "ns",
            "range": "± 117046.49389109937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5625427,
            "unit": "ns",
            "range": "± 182138.96483971342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329291.6129032258,
            "unit": "ns",
            "range": "± 9310.155181941273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312821.0689655172,
            "unit": "ns",
            "range": "± 9175.368945213495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276367.55555555556,
            "unit": "ns",
            "range": "± 13549.027418854466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5222460.217391305,
            "unit": "ns",
            "range": "± 126124.7735775809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4835607.1,
            "unit": "ns",
            "range": "± 107925.33482234739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23704.757894736842,
            "unit": "ns",
            "range": "± 2142.2222043187703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97158.453125,
            "unit": "ns",
            "range": "± 4143.536653363629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83817.578125,
            "unit": "ns",
            "range": "± 3810.6160640309063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96052.78787878787,
            "unit": "ns",
            "range": "± 14722.235741559623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6547.556701030928,
            "unit": "ns",
            "range": "± 784.3683362143515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23387.90425531915,
            "unit": "ns",
            "range": "± 1667.0807339568426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56768.37234042553,
            "unit": "ns",
            "range": "± 4150.0358386431335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9444970.032258065,
            "unit": "ns",
            "range": "± 287998.01075510733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25621014.125,
            "unit": "ns",
            "range": "± 787343.1993370121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62633490.44444445,
            "unit": "ns",
            "range": "± 1688238.3544991354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126719572.11764705,
            "unit": "ns",
            "range": "± 2464820.277021706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252990569.5,
            "unit": "ns",
            "range": "± 4683165.603983115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3976875.5319148935,
            "unit": "ns",
            "range": "± 154863.220202588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4159962.5970149254,
            "unit": "ns",
            "range": "± 196326.36009508156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5109553.685714286,
            "unit": "ns",
            "range": "± 165363.79436808437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4964059.617647059,
            "unit": "ns",
            "range": "± 156347.6667229091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7628920.733333333,
            "unit": "ns",
            "range": "± 137066.52194696595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194087.397321428,
            "unit": "ns",
            "range": "± 30501.603117358627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883739.7721354167,
            "unit": "ns",
            "range": "± 6833.028957753905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266872.2279947917,
            "unit": "ns",
            "range": "± 9156.380447611597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3067531.5594308036,
            "unit": "ns",
            "range": "± 10492.896951800034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983356.7200520834,
            "unit": "ns",
            "range": "± 4142.043881681903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 966411.7064453125,
            "unit": "ns",
            "range": "± 2218.1054540830805"
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
        "date": 1692935944550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397443.6352941177,
            "unit": "ns",
            "range": "± 75048.39452771016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652043.2916666665,
            "unit": "ns",
            "range": "± 103694.82996077467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746357.6351351351,
            "unit": "ns",
            "range": "± 86896.89378980761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4907998.521739131,
            "unit": "ns",
            "range": "± 274700.6698037846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270478.7916666667,
            "unit": "ns",
            "range": "± 10070.578284137926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255988.55319148937,
            "unit": "ns",
            "range": "± 9153.17321267546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220373.92857142858,
            "unit": "ns",
            "range": "± 3902.63213868411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4289842.066666666,
            "unit": "ns",
            "range": "± 80147.79381106477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3870488.066666667,
            "unit": "ns",
            "range": "± 49041.38858798857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19773.58510638298,
            "unit": "ns",
            "range": "± 1449.8024664083557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80467.08620689655,
            "unit": "ns",
            "range": "± 3492.261431324793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69263.54166666667,
            "unit": "ns",
            "range": "± 2574.117704316133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76072.9191919192,
            "unit": "ns",
            "range": "± 12081.466897755698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4870.90625,
            "unit": "ns",
            "range": "± 453.7347724717602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18345.43010752688,
            "unit": "ns",
            "range": "± 1650.7537237501508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49164.243902439026,
            "unit": "ns",
            "range": "± 2574.661994169646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8110737.466666667,
            "unit": "ns",
            "range": "± 107418.5638783876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21958562.2,
            "unit": "ns",
            "range": "± 265116.41876142967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53450618.083333336,
            "unit": "ns",
            "range": "± 267970.0710281105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111971278,
            "unit": "ns",
            "range": "± 1946585.4798869519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220442439.8,
            "unit": "ns",
            "range": "± 4079537.5460713715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397821.659090909,
            "unit": "ns",
            "range": "± 125456.0960336219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528038.785714286,
            "unit": "ns",
            "range": "± 127044.73413579915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4667148.4375,
            "unit": "ns",
            "range": "± 83669.63088079909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4187917.736842105,
            "unit": "ns",
            "range": "± 81959.0232289839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6423933.8965517245,
            "unit": "ns",
            "range": "± 176235.10533929727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4973318.704799107,
            "unit": "ns",
            "range": "± 34170.26641722266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562697.8375,
            "unit": "ns",
            "range": "± 5988.697535524224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068963.412890625,
            "unit": "ns",
            "range": "± 5379.589177800113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664787.2195870536,
            "unit": "ns",
            "range": "± 10718.495067904529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828008.4104166667,
            "unit": "ns",
            "range": "± 747.0984426990545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754143.0337890625,
            "unit": "ns",
            "range": "± 630.5543587954513"
          }
        ]
      }
    ]
  }
}