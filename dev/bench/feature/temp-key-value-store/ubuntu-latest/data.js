window.BENCHMARK_DATA = {
  "lastUpdate": 1691546494058,
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
          "id": "ae0f3da3ac07efbffebd8dc2c11ab98ef661ecad",
          "message": "Introduce VolatileKeyValueStore",
          "timestamp": "2023-08-09T10:33:47+09:00",
          "tree_id": "aa74d09cc1962bc9aba5f59caea5d7aec8790c9e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae0f3da3ac07efbffebd8dc2c11ab98ef661ecad"
        },
        "date": 1691546485502,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3194384.532608696,
            "unit": "ns",
            "range": "± 268696.8244209448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462882.795698925,
            "unit": "ns",
            "range": "± 323716.18257808057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4473612.03125,
            "unit": "ns",
            "range": "± 487118.3648858906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3979824.757575758,
            "unit": "ns",
            "range": "± 528431.8455108493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6914616.873684211,
            "unit": "ns",
            "range": "± 665129.7157893379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7946007.347368421,
            "unit": "ns",
            "range": "± 624540.0287055823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22308832.102040816,
            "unit": "ns",
            "range": "± 2744078.7342648543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55705838.26530612,
            "unit": "ns",
            "range": "± 4584297.135704851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111733288.73469388,
            "unit": "ns",
            "range": "± 7909451.294436726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231430301.16326532,
            "unit": "ns",
            "range": "± 17687791.02605306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63672.072916666664,
            "unit": "ns",
            "range": "± 16433.85477107342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7084526.772949219,
            "unit": "ns",
            "range": "± 137545.43558142666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987804.1325061275,
            "unit": "ns",
            "range": "± 76508.90529959177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442934.2133300782,
            "unit": "ns",
            "range": "± 50163.4652091099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2773794.9782072366,
            "unit": "ns",
            "range": "± 94570.776964889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899954.1394264915,
            "unit": "ns",
            "range": "± 22027.892727204566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837966.0797154017,
            "unit": "ns",
            "range": "± 27525.400181518093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320793.34736842103,
            "unit": "ns",
            "range": "± 49765.001615415495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327528.90625,
            "unit": "ns",
            "range": "± 50275.62750134777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270133.05376344087,
            "unit": "ns",
            "range": "± 48943.3431174041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4279080.484210527,
            "unit": "ns",
            "range": "± 392380.3131252015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825106.734042553,
            "unit": "ns",
            "range": "± 455465.6781535989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29540.897959183672,
            "unit": "ns",
            "range": "± 10214.48400025876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100030.63043478261,
            "unit": "ns",
            "range": "± 16599.806202176966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107462.37362637362,
            "unit": "ns",
            "range": "± 21786.458815128648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131439.63829787233,
            "unit": "ns",
            "range": "± 29981.672992282332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9758.773195876289,
            "unit": "ns",
            "range": "± 7550.759022974053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26642.178947368422,
            "unit": "ns",
            "range": "± 10311.266610166524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1396953.4574468085,
            "unit": "ns",
            "range": "± 183809.3130873643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2752079.6739130435,
            "unit": "ns",
            "range": "± 326135.2265696712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1895172.6530612244,
            "unit": "ns",
            "range": "± 267676.2619232766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5728904.45,
            "unit": "ns",
            "range": "± 690403.8391793774"
          }
        ]
      }
    ]
  }
}