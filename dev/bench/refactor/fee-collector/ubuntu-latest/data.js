window.BENCHMARK_DATA = {
  "lastUpdate": 1701156806095,
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
          "id": "036e7abd9c33b20bbb95026fc963dc519670c011",
          "message": "Suggestion",
          "timestamp": "2023-11-28T16:22:14+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/greymistcube/libplanet/commit/036e7abd9c33b20bbb95026fc963dc519670c011"
        },
        "date": 1701156799823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227962.0752688172,
            "unit": "ns",
            "range": "± 23753.93124133742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219164.39583333334,
            "unit": "ns",
            "range": "± 15632.96916706832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174612.5,
            "unit": "ns",
            "range": "± 5440.980319639989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3100373.1428571427,
            "unit": "ns",
            "range": "± 43536.035075921514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2925514.3333333335,
            "unit": "ns",
            "range": "± 43366.76314985057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17071.41304347826,
            "unit": "ns",
            "range": "± 2831.2013667644087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97601.01,
            "unit": "ns",
            "range": "± 21196.61117592464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54411.0243902439,
            "unit": "ns",
            "range": "± 4555.871758607704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73571.69473684211,
            "unit": "ns",
            "range": "± 11441.883979553706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5191.3,
            "unit": "ns",
            "range": "± 1710.7195396774844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14383.458333333334,
            "unit": "ns",
            "range": "± 2751.739897120276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738587.1028645835,
            "unit": "ns",
            "range": "± 63969.43479967819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190130.32421875,
            "unit": "ns",
            "range": "± 2425.3156713895355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782356.0005634015,
            "unit": "ns",
            "range": "± 736.7818563479558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930036.2528645834,
            "unit": "ns",
            "range": "± 26937.574039770527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622096.2871844952,
            "unit": "ns",
            "range": "± 3533.104793913223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570741.5611049107,
            "unit": "ns",
            "range": "± 837.7413194826943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41090.336956521736,
            "unit": "ns",
            "range": "± 5686.340093104121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2422137.5416666665,
            "unit": "ns",
            "range": "± 95618.2139296934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2589916.3125,
            "unit": "ns",
            "range": "± 101822.24206380581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3154916.24,
            "unit": "ns",
            "range": "± 81684.1754530215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3059463.5217391304,
            "unit": "ns",
            "range": "± 109580.46727643455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6701199.458333333,
            "unit": "ns",
            "range": "± 169782.1835982489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5566694.666666667,
            "unit": "ns",
            "range": "± 50283.76762902414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14836184.785714285,
            "unit": "ns",
            "range": "± 142211.6773665654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37004387,
            "unit": "ns",
            "range": "± 361914.03477414354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74819623.92857143,
            "unit": "ns",
            "range": "± 318521.87150443345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149292372.7857143,
            "unit": "ns",
            "range": "± 928201.6694277645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062521.6597938144,
            "unit": "ns",
            "range": "± 154886.2723664048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2011447.21875,
            "unit": "ns",
            "range": "± 92827.41520171051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1531036.3777777778,
            "unit": "ns",
            "range": "± 92657.53778605806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5728858.051724138,
            "unit": "ns",
            "range": "± 251352.26588609905"
          }
        ]
      }
    ]
  }
}