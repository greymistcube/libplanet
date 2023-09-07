window.BENCHMARK_DATA = {
  "lastUpdate": 1694077365701,
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
          "id": "8d5061ad67fe49337166fe2937af64881f18cc6f",
          "message": "Changelog",
          "timestamp": "2023-09-07T17:44:12+09:00",
          "tree_id": "b801b394004dbb5681b75d049d42107df46a8d4f",
          "url": "https://github.com/greymistcube/libplanet/commit/8d5061ad67fe49337166fe2937af64881f18cc6f"
        },
        "date": 1694077335303,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8645689.785714285,
            "unit": "ns",
            "range": "± 239468.44192863943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22110978.8,
            "unit": "ns",
            "range": "± 406574.1200737485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52621277.14705882,
            "unit": "ns",
            "range": "± 2508364.7651679562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98513922.73333333,
            "unit": "ns",
            "range": "± 1223778.222743371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206597435.65384614,
            "unit": "ns",
            "range": "± 738499.5362668196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62874.07731958763,
            "unit": "ns",
            "range": "± 10394.174582263066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328041.8817204301,
            "unit": "ns",
            "range": "± 23102.48091884123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326470.52173913043,
            "unit": "ns",
            "range": "± 20677.420848731745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297322.2886597938,
            "unit": "ns",
            "range": "± 24725.557230811624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4093219.4166666665,
            "unit": "ns",
            "range": "± 105799.90355955031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3675741.652173913,
            "unit": "ns",
            "range": "± 91236.78207360365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17603.98901098901,
            "unit": "ns",
            "range": "± 1688.052424768493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83419.16842105263,
            "unit": "ns",
            "range": "± 8410.295984434835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75711.5625,
            "unit": "ns",
            "range": "± 9084.323396654261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90102.0612244898,
            "unit": "ns",
            "range": "± 14385.58289318251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5867.397959183673,
            "unit": "ns",
            "range": "± 1374.0945865475555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23706.23469387755,
            "unit": "ns",
            "range": "± 4230.944113768872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1530294.5449438202,
            "unit": "ns",
            "range": "± 144763.8928156269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2662077.153846154,
            "unit": "ns",
            "range": "± 136307.3482499644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1871039.0326086956,
            "unit": "ns",
            "range": "± 156513.24376462272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5310227.358695652,
            "unit": "ns",
            "range": "± 398699.72794398316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3276172.3673469387,
            "unit": "ns",
            "range": "± 194856.1199351808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3472577.703125,
            "unit": "ns",
            "range": "± 156238.7895670811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4422920.274193549,
            "unit": "ns",
            "range": "± 192901.279036133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4100343.6136363638,
            "unit": "ns",
            "range": "± 272228.3314951029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7124329.449367088,
            "unit": "ns",
            "range": "± 367605.49251246336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5570093.038020833,
            "unit": "ns",
            "range": "± 37427.663065101005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1724703.896484375,
            "unit": "ns",
            "range": "± 22198.050447972204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1037621.1566685268,
            "unit": "ns",
            "range": "± 8101.949067343575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2496206.61713742,
            "unit": "ns",
            "range": "± 86563.69736299636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795032.9404296875,
            "unit": "ns",
            "range": "± 9948.332885870212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802032.6521935096,
            "unit": "ns",
            "range": "± 3194.188694648476"
          }
        ]
      }
    ]
  }
}