window.BENCHMARK_DATA = {
  "lastUpdate": 1700031533707,
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
          "id": "36edcf8fc51a39ee63c4511f91b090c07a38d2e3",
          "message": "Increased cache size; more info for logging",
          "timestamp": "2023-11-15T10:59:12+09:00",
          "tree_id": "018584c062bbc4b3e74bb6135651e788b8e16e58",
          "url": "https://github.com/greymistcube/libplanet/commit/36edcf8fc51a39ee63c4511f91b090c07a38d2e3"
        },
        "date": 1700031515761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7703330.884615385,
            "unit": "ns",
            "range": "± 77816.25247823498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18848900.766666666,
            "unit": "ns",
            "range": "± 258996.85818294805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47328505.61904762,
            "unit": "ns",
            "range": "± 1532258.4413798645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94464673.85714285,
            "unit": "ns",
            "range": "± 2228542.735390176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190434140.2142857,
            "unit": "ns",
            "range": "± 3327147.3410959537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41089.811111111114,
            "unit": "ns",
            "range": "± 9849.260308614117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226234.71134020618,
            "unit": "ns",
            "range": "± 17543.93155051458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221358.875,
            "unit": "ns",
            "range": "± 21326.311976794743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201830.88764044945,
            "unit": "ns",
            "range": "± 23912.581748393368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3738315.230769231,
            "unit": "ns",
            "range": "± 52025.04249262055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3535021.1875,
            "unit": "ns",
            "range": "± 96874.05842620463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13925.247126436781,
            "unit": "ns",
            "range": "± 2046.5090879200416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59327.663043478264,
            "unit": "ns",
            "range": "± 6186.6059048137495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54994.8,
            "unit": "ns",
            "range": "± 8043.058059489226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61532.586021505376,
            "unit": "ns",
            "range": "± 11689.559180753822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3340.5494505494507,
            "unit": "ns",
            "range": "± 716.2499139226051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12401.46590909091,
            "unit": "ns",
            "range": "± 1441.4723351758523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062118.5505617978,
            "unit": "ns",
            "range": "± 73690.11188570368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2290347.589285714,
            "unit": "ns",
            "range": "± 98224.0063749048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1735569.0526315789,
            "unit": "ns",
            "range": "± 118132.20941848563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8513120.217391305,
            "unit": "ns",
            "range": "± 724782.2625452379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2922809.777777778,
            "unit": "ns",
            "range": "± 61413.64824436834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2963511.1714285715,
            "unit": "ns",
            "range": "± 94026.66797196913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3584140.6129032257,
            "unit": "ns",
            "range": "± 96886.41376294801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3559332.383116883,
            "unit": "ns",
            "range": "± 182029.33498622038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12642672.693548387,
            "unit": "ns",
            "range": "± 1189091.7546361692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4170415.7522321427,
            "unit": "ns",
            "range": "± 58264.30201651273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1355080.1294270833,
            "unit": "ns",
            "range": "± 24130.08323154852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 900507.2103160511,
            "unit": "ns",
            "range": "± 21530.75388577185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2183921.466796875,
            "unit": "ns",
            "range": "± 144491.11091626793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 669502.190669545,
            "unit": "ns",
            "range": "± 28670.934485519443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 619837.2456942472,
            "unit": "ns",
            "range": "± 22145.64689294372"
          }
        ]
      }
    ]
  }
}