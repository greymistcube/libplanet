window.BENCHMARK_DATA = {
  "lastUpdate": 1694478572566,
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
          "id": "4c727b97eb46a893a810b8db3570fa3ca521d994",
          "message": "Logging for trie set count",
          "timestamp": "2023-09-12T09:05:30+09:00",
          "tree_id": "c99165fc6bcea0ce8fc7832bb6306319b8b19f85",
          "url": "https://github.com/greymistcube/libplanet/commit/4c727b97eb46a893a810b8db3570fa3ca521d994"
        },
        "date": 1694478535816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1548572.7272727273,
            "unit": "ns",
            "range": "± 104938.12250431674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2903892.727272727,
            "unit": "ns",
            "range": "± 123406.7902185851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1988187.5,
            "unit": "ns",
            "range": "± 103614.2179958237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5206367.777777778,
            "unit": "ns",
            "range": "± 288402.32230663503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58043.75,
            "unit": "ns",
            "range": "± 4012.5805451827314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9000240,
            "unit": "ns",
            "range": "± 163266.1753089108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24627469.230769232,
            "unit": "ns",
            "range": "± 298580.0740857059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61914320,
            "unit": "ns",
            "range": "± 810606.0468210542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123138721.42857143,
            "unit": "ns",
            "range": "± 1196099.4878730238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245833426.66666666,
            "unit": "ns",
            "range": "± 2379372.9079218293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5362312.555803572,
            "unit": "ns",
            "range": "± 15712.481878705177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1732145.5078125,
            "unit": "ns",
            "range": "± 6961.107522734034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274911.900111607,
            "unit": "ns",
            "range": "± 6820.8170547473255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3193844.7265625,
            "unit": "ns",
            "range": "± 20247.88997702663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986031.4174107143,
            "unit": "ns",
            "range": "± 4195.710938343967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 950025.7942708334,
            "unit": "ns",
            "range": "± 17442.044107756363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3903609.523809524,
            "unit": "ns",
            "range": "± 89045.07793675012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4651220,
            "unit": "ns",
            "range": "± 78344.24219886414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4877950,
            "unit": "ns",
            "range": "± 103347.0011517452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4511764.705882353,
            "unit": "ns",
            "range": "± 143208.2608975642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7149466.666666667,
            "unit": "ns",
            "range": "± 234971.00003435076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302716.6666666667,
            "unit": "ns",
            "range": "± 7251.96625011132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301883.67346938775,
            "unit": "ns",
            "range": "± 10978.982704444425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271185.8585858586,
            "unit": "ns",
            "range": "± 17291.935185790913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4957770,
            "unit": "ns",
            "range": "± 60199.01755249594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4578176.923076923,
            "unit": "ns",
            "range": "± 54324.56709209554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25008.333333333332,
            "unit": "ns",
            "range": "± 1883.762565587493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103392.70833333333,
            "unit": "ns",
            "range": "± 7791.996498319578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84425.26315789473,
            "unit": "ns",
            "range": "± 5835.929950526995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96045.50561797753,
            "unit": "ns",
            "range": "± 13993.885922336027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6207.142857142857,
            "unit": "ns",
            "range": "± 925.7206721720102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23645.16129032258,
            "unit": "ns",
            "range": "± 2104.111716379863"
          }
        ]
      }
    ]
  }
}