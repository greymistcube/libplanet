window.BENCHMARK_DATA = {
  "lastUpdate": 1705903171916,
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
          "id": "2492963ab81141a40d92fca3e8a1b7cf63e3d07e",
          "message": "Removed EnumerableExtensions",
          "timestamp": "2024-01-22T14:45:02+09:00",
          "tree_id": "5f0010686140c2cef7ccc8649fdd5c2f99f01253",
          "url": "https://github.com/greymistcube/libplanet/commit/2492963ab81141a40d92fca3e8a1b7cf63e3d07e"
        },
        "date": 1705903007177,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3720809.7391826925,
            "unit": "ns",
            "range": "± 20365.96117430533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1179302.5279447115,
            "unit": "ns",
            "range": "± 2962.0042508743663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758223.2065429688,
            "unit": "ns",
            "range": "± 4290.37977636048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936682.0280412945,
            "unit": "ns",
            "range": "± 5178.477053884745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628171.2344876803,
            "unit": "ns",
            "range": "± 2477.4960424884175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568227.9408854167,
            "unit": "ns",
            "range": "± 973.7557505180449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420848.4583333335,
            "unit": "ns",
            "range": "± 94400.0544263633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2467991.519230769,
            "unit": "ns",
            "range": "± 96857.09605180129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3095489.0625,
            "unit": "ns",
            "range": "± 57952.41505749207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3234265.71875,
            "unit": "ns",
            "range": "± 99624.71500092295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13883271.196629213,
            "unit": "ns",
            "range": "± 973891.3917516372"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37799.95789473684,
            "unit": "ns",
            "range": "± 3939.5824325541325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200138.1923076923,
            "unit": "ns",
            "range": "± 6988.125161390218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189445.46666666667,
            "unit": "ns",
            "range": "± 8470.443702917444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170546.5,
            "unit": "ns",
            "range": "± 2989.7653276278584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3210406.1666666665,
            "unit": "ns",
            "range": "± 20396.050211697737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785010.6,
            "unit": "ns",
            "range": "± 34550.23173542297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19551.222222222223,
            "unit": "ns",
            "range": "± 3779.6077340886536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70737.30526315789,
            "unit": "ns",
            "range": "± 7116.800956372995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52139.205882352944,
            "unit": "ns",
            "range": "± 1396.5295264239269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81375.17708333333,
            "unit": "ns",
            "range": "± 13145.378264858196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5504.50505050505,
            "unit": "ns",
            "range": "± 2062.773738785524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12787.39156626506,
            "unit": "ns",
            "range": "± 1166.7609115341936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5667964.133333334,
            "unit": "ns",
            "range": "± 22371.462800588055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14447896.033333333,
            "unit": "ns",
            "range": "± 259931.61621771287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36751718.84615385,
            "unit": "ns",
            "range": "± 304001.33905868634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73598267.75,
            "unit": "ns",
            "range": "± 227586.54203865756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148534046.57142857,
            "unit": "ns",
            "range": "± 796358.6346532103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982870.62,
            "unit": "ns",
            "range": "± 85761.05371977927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1850580.9186046512,
            "unit": "ns",
            "range": "± 66627.68544475606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1626991.4270833333,
            "unit": "ns",
            "range": "± 201956.15147307518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12528100.644444445,
            "unit": "ns",
            "range": "± 818748.8264156344"
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
          "id": "ff138feed4ca3f49617346cded8736cb6080f8bb",
          "message": "Changelog",
          "timestamp": "2024-01-22T14:48:11+09:00",
          "tree_id": "32d84acaee29aa0e45ba746d842baef0da246626",
          "url": "https://github.com/greymistcube/libplanet/commit/ff138feed4ca3f49617346cded8736cb6080f8bb"
        },
        "date": 1705903165633,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3695421.2743389425,
            "unit": "ns",
            "range": "± 29460.174628693992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206879.4725167411,
            "unit": "ns",
            "range": "± 1932.8433669063024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756308.9068080357,
            "unit": "ns",
            "range": "± 1404.2541267448223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946362.3317307692,
            "unit": "ns",
            "range": "± 5587.224248978016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623866.2060546875,
            "unit": "ns",
            "range": "± 918.5347245417281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573424.230329241,
            "unit": "ns",
            "range": "± 1430.3946974302862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480190.8076923075,
            "unit": "ns",
            "range": "± 36673.396602952336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2498416.043956044,
            "unit": "ns",
            "range": "± 144691.96036437867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3176165.8076923075,
            "unit": "ns",
            "range": "± 39322.61377245205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3245502.330188679,
            "unit": "ns",
            "range": "± 135002.81038381497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13797003.945652174,
            "unit": "ns",
            "range": "± 934795.40045417"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43201.790322580644,
            "unit": "ns",
            "range": "± 4473.654681384661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197427.40579710144,
            "unit": "ns",
            "range": "± 9541.729189258222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195271.45901639343,
            "unit": "ns",
            "range": "± 8393.385178368679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171229.5652173913,
            "unit": "ns",
            "range": "± 3811.491855692191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3236549.785714286,
            "unit": "ns",
            "range": "± 34169.20884797749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835890.3,
            "unit": "ns",
            "range": "± 34370.3499487567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12435.944444444445,
            "unit": "ns",
            "range": "± 892.5196546617631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65949.16304347826,
            "unit": "ns",
            "range": "± 4756.568185907844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52961.57142857143,
            "unit": "ns",
            "range": "± 1522.1374817103458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64257.102040816324,
            "unit": "ns",
            "range": "± 11698.892587242215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3643.059139784946,
            "unit": "ns",
            "range": "± 358.5234654368068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11977.098901098901,
            "unit": "ns",
            "range": "± 1032.1519919829318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5523149.142857143,
            "unit": "ns",
            "range": "± 24699.397475077567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15484383.214285715,
            "unit": "ns",
            "range": "± 78451.09922986182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36190489.21428572,
            "unit": "ns",
            "range": "± 288577.79606257856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75272454.03333333,
            "unit": "ns",
            "range": "± 1003157.4950529857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149515923.6,
            "unit": "ns",
            "range": "± 1127050.3645785057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976776.5,
            "unit": "ns",
            "range": "± 80566.05963340994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1859589.163265306,
            "unit": "ns",
            "range": "± 73817.35558524018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1651084.0555555555,
            "unit": "ns",
            "range": "± 175564.30130397086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12680493.60638298,
            "unit": "ns",
            "range": "± 965761.811673873"
          }
        ]
      }
    ]
  }
}