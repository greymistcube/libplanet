window.BENCHMARK_DATA = {
  "lastUpdate": 1702894579336,
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
          "id": "17212c88836ceabcca159fcfb0030f387d8f33a7",
          "message": "Removed unnecessary arguments",
          "timestamp": "2023-12-18T18:53:58+09:00",
          "tree_id": "b579df8e713644622da9eabfc1fc07917f64f9a8",
          "url": "https://github.com/greymistcube/libplanet/commit/17212c88836ceabcca159fcfb0030f387d8f33a7"
        },
        "date": 1702894561167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10292464.968421053,
            "unit": "ns",
            "range": "± 1047693.9390073685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23546269.692307692,
            "unit": "ns",
            "range": "± 221018.68081468611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53422554.833333336,
            "unit": "ns",
            "range": "± 1327333.6485873268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113383274,
            "unit": "ns",
            "range": "± 7449137.355421247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233314620.06024095,
            "unit": "ns",
            "range": "± 18012520.153862637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46474.818181818184,
            "unit": "ns",
            "range": "± 7610.537319296269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264071.93434343435,
            "unit": "ns",
            "range": "± 23671.444366389078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288984.7415730337,
            "unit": "ns",
            "range": "± 20809.79158545765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268869.32558139536,
            "unit": "ns",
            "range": "± 15687.293313898324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4942475.555555556,
            "unit": "ns",
            "range": "± 196295.34767107494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4286639.466666667,
            "unit": "ns",
            "range": "± 125069.25584719556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20043.63157894737,
            "unit": "ns",
            "range": "± 4327.074315144055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86266.22826086957,
            "unit": "ns",
            "range": "± 8422.747475452206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91375.05172413793,
            "unit": "ns",
            "range": "± 11124.265597665755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88624.02272727272,
            "unit": "ns",
            "range": "± 9312.878508518195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6747.930107526881,
            "unit": "ns",
            "range": "± 1004.1115518949584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19168.175824175825,
            "unit": "ns",
            "range": "± 3259.940427517747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1151889.36,
            "unit": "ns",
            "range": "± 95406.8218691521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2603461.46,
            "unit": "ns",
            "range": "± 248732.75062113136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561888.1847826086,
            "unit": "ns",
            "range": "± 166293.6086009169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7469697.826086956,
            "unit": "ns",
            "range": "± 816177.0287743967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3652574.382352941,
            "unit": "ns",
            "range": "± 73026.27683399513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3779617.273809524,
            "unit": "ns",
            "range": "± 289117.06119483185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4455702.131578947,
            "unit": "ns",
            "range": "± 224426.02353927033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4197596.7,
            "unit": "ns",
            "range": "± 95950.33992101277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17711199.872340426,
            "unit": "ns",
            "range": "± 3102683.580936771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4857589.715238321,
            "unit": "ns",
            "range": "± 462848.8333123315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588274.4853515625,
            "unit": "ns",
            "range": "± 137910.47133921742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1025318.4130859375,
            "unit": "ns",
            "range": "± 43120.23832589588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2349348.2679859204,
            "unit": "ns",
            "range": "± 215304.101169219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 721812.5357421875,
            "unit": "ns",
            "range": "± 66858.12926186346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 671011.2781051378,
            "unit": "ns",
            "range": "± 29621.15580584052"
          }
        ]
      }
    ]
  }
}