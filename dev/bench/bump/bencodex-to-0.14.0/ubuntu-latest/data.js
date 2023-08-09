window.BENCHMARK_DATA = {
  "lastUpdate": 1691588527745,
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
          "id": "97cbcf9125c8adb50ae9b762f6a2460a01cd5249",
          "message": "Bump bencodex to 0.14.0",
          "timestamp": "2023-08-09T22:22:03+09:00",
          "tree_id": "772cf795e03f70869505636381199e4e4149f875",
          "url": "https://github.com/greymistcube/libplanet/commit/97cbcf9125c8adb50ae9b762f6a2460a01cd5249"
        },
        "date": 1691588516212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4538501.014492754,
            "unit": "ns",
            "range": "± 218766.07855434058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4797846.661290322,
            "unit": "ns",
            "range": "± 217331.1486529665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5935147.901960785,
            "unit": "ns",
            "range": "± 226489.29556243974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5280290.397260274,
            "unit": "ns",
            "range": "± 261876.7888544439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8390297.17857143,
            "unit": "ns",
            "range": "± 359978.02823097195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11190724.195121951,
            "unit": "ns",
            "range": "± 582238.3178235828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29305512.5,
            "unit": "ns",
            "range": "± 752221.4072672557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74306258.06666666,
            "unit": "ns",
            "range": "± 1350820.804107872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149495880.7142857,
            "unit": "ns",
            "range": "± 2612234.700904791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298866629.3333333,
            "unit": "ns",
            "range": "± 3865136.005992261"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75829.4623655914,
            "unit": "ns",
            "range": "± 15187.81512935483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6824583.390625,
            "unit": "ns",
            "range": "± 139736.26116264373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046816.7276785714,
            "unit": "ns",
            "range": "± 27239.803627719124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414775.8119419643,
            "unit": "ns",
            "range": "± 16755.76844181648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3422472.134765625,
            "unit": "ns",
            "range": "± 43722.62217865366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1141877.8612304688,
            "unit": "ns",
            "range": "± 24985.769246733144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1004253.5425502232,
            "unit": "ns",
            "range": "± 12445.392388613622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 390875.9157894737,
            "unit": "ns",
            "range": "± 35096.16318960138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370669.1978021978,
            "unit": "ns",
            "range": "± 27240.60313054752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334256.1354166667,
            "unit": "ns",
            "range": "± 30281.285114083534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5661000.208333333,
            "unit": "ns",
            "range": "± 221007.19380473805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5151216.361111111,
            "unit": "ns",
            "range": "± 251813.99406326306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30200.892473118278,
            "unit": "ns",
            "range": "± 7671.298256803345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133632.6326530612,
            "unit": "ns",
            "range": "± 21009.543425701773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139865.78494623656,
            "unit": "ns",
            "range": "± 14632.265083540153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137591.56315789474,
            "unit": "ns",
            "range": "± 18483.566485320014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9314.719101123595,
            "unit": "ns",
            "range": "± 1045.37035617183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30456.031578947368,
            "unit": "ns",
            "range": "± 6425.262778718697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1798363.978021978,
            "unit": "ns",
            "range": "± 147649.65863940504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3666483,
            "unit": "ns",
            "range": "± 223945.3291289989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2395788.0315789473,
            "unit": "ns",
            "range": "± 247830.84431014172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6787204.5051546395,
            "unit": "ns",
            "range": "± 543564.8130148964"
          }
        ]
      }
    ]
  }
}