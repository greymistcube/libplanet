window.BENCHMARK_DATA = {
  "lastUpdate": 1692935955700,
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
          "id": "9f4f5fa28aac0d1837b5d7deb5411d178b479e04",
          "message": "Working",
          "timestamp": "2023-08-25T10:57:14+09:00",
          "tree_id": "4a7c6f0876e8fe4c8e1abbb80d241a5e7e06180e",
          "url": "https://github.com/greymistcube/libplanet/commit/9f4f5fa28aac0d1837b5d7deb5411d178b479e04"
        },
        "date": 1692929671678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474560.2040816327,
            "unit": "ns",
            "range": "± 153662.80109771213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661092.3076923075,
            "unit": "ns",
            "range": "± 109782.52449623398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1809860.824742268,
            "unit": "ns",
            "range": "± 121515.85935306022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4639432,
            "unit": "ns",
            "range": "± 187047.89677993153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54374.46808510638,
            "unit": "ns",
            "range": "± 4814.582154967084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7380716.666666667,
            "unit": "ns",
            "range": "± 135820.6094124764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20706273.076923076,
            "unit": "ns",
            "range": "± 560434.9393517091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51770813.333333336,
            "unit": "ns",
            "range": "± 904904.8559826344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103378740,
            "unit": "ns",
            "range": "± 2707210.260581915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210265773.33333334,
            "unit": "ns",
            "range": "± 3476323.4109917795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4583727.5,
            "unit": "ns",
            "range": "± 25152.912479287737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1446865.546875,
            "unit": "ns",
            "range": "± 3660.897171992034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1077658.59375,
            "unit": "ns",
            "range": "± 2561.146920483533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642364.296875,
            "unit": "ns",
            "range": "± 8358.85428795862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851066.0091145834,
            "unit": "ns",
            "range": "± 2200.5912322167565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767096.3448660715,
            "unit": "ns",
            "range": "± 2383.874712356544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3408909.8039215687,
            "unit": "ns",
            "range": "± 131053.58332361915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3442728.3950617285,
            "unit": "ns",
            "range": "± 178334.47383678224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4130711.111111111,
            "unit": "ns",
            "range": "± 165196.80049287202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3766253.846153846,
            "unit": "ns",
            "range": "± 174228.97745937228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6181916.666666667,
            "unit": "ns",
            "range": "± 180276.37419238835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260775.67567567568,
            "unit": "ns",
            "range": "± 8250.939522442459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251263.49206349207,
            "unit": "ns",
            "range": "± 10833.15254486984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220023.4693877551,
            "unit": "ns",
            "range": "± 15789.725231643704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4105788.888888889,
            "unit": "ns",
            "range": "± 79697.83293894131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3598729.1666666665,
            "unit": "ns",
            "range": "± 91763.80113789621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21376.344086021505,
            "unit": "ns",
            "range": "± 2695.7453534695537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90350,
            "unit": "ns",
            "range": "± 9554.136023289346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78456.70103092784,
            "unit": "ns",
            "range": "± 8101.940446796461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96369.69696969698,
            "unit": "ns",
            "range": "± 18770.52321444371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6813.40206185567,
            "unit": "ns",
            "range": "± 1236.4792815675096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21880.208333333332,
            "unit": "ns",
            "range": "± 2960.3918585451406"
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
          "id": "9ffedb2984347af8029901317beef0e3790e5ce1",
          "message": "More stuff",
          "timestamp": "2023-08-25T12:41:34+09:00",
          "tree_id": "08444b96c43b54f0efef06d65c0e3eef7bd25c1d",
          "url": "https://github.com/greymistcube/libplanet/commit/9ffedb2984347af8029901317beef0e3790e5ce1"
        },
        "date": 1692935931167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427932.6530612244,
            "unit": "ns",
            "range": "± 139275.33123944732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2641731.914893617,
            "unit": "ns",
            "range": "± 101419.03625956365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1817380.808080808,
            "unit": "ns",
            "range": "± 147645.390590447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4778845.12195122,
            "unit": "ns",
            "range": "± 250465.05493050916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52204.34782608696,
            "unit": "ns",
            "range": "± 4348.9019213640095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8503692.857142856,
            "unit": "ns",
            "range": "± 56940.97435449766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21455842.85714286,
            "unit": "ns",
            "range": "± 273705.45008565945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53699226.666666664,
            "unit": "ns",
            "range": "± 325364.6887212358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108657173.33333333,
            "unit": "ns",
            "range": "± 1078019.7019579576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216012971.42857143,
            "unit": "ns",
            "range": "± 1853029.8837013151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4588365.260416667,
            "unit": "ns",
            "range": "± 12913.171367127032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1470885.078125,
            "unit": "ns",
            "range": "± 6048.978115644634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070517.0182291667,
            "unit": "ns",
            "range": "± 3876.4170404224355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670497.3567708335,
            "unit": "ns",
            "range": "± 14913.466167040675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834215.0911458334,
            "unit": "ns",
            "range": "± 2770.761019682628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754941.5690104166,
            "unit": "ns",
            "range": "± 2523.5760658863937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3502526.470588235,
            "unit": "ns",
            "range": "± 65741.62997496112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3628864.285714286,
            "unit": "ns",
            "range": "± 32182.02095157283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4444800,
            "unit": "ns",
            "range": "± 77781.9663271268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4067162.5,
            "unit": "ns",
            "range": "± 57043.99325666697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6266204.166666667,
            "unit": "ns",
            "range": "± 126355.1911466646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280932.07547169813,
            "unit": "ns",
            "range": "± 11315.897149668992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260156.4516129032,
            "unit": "ns",
            "range": "± 11449.198138830967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249944.44444444444,
            "unit": "ns",
            "range": "± 15011.262589640735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4233308.333333333,
            "unit": "ns",
            "range": "± 32981.57773207597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863453.846153846,
            "unit": "ns",
            "range": "± 60241.716102501254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26995.833333333332,
            "unit": "ns",
            "range": "± 1862.5345869860507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102977.77777777778,
            "unit": "ns",
            "range": "± 9172.958879400614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97786,
            "unit": "ns",
            "range": "± 10064.40893807119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98886.81318681319,
            "unit": "ns",
            "range": "± 11226.973558663763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7909.183673469388,
            "unit": "ns",
            "range": "± 1243.277737646168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25005.434782608696,
            "unit": "ns",
            "range": "± 2295.641552716167"
          }
        ]
      }
    ]
  }
}