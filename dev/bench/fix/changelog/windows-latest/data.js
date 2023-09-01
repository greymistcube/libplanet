window.BENCHMARK_DATA = {
  "lastUpdate": 1693547577801,
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
          "id": "8608f30b1034b8076cbb7f6bd9998add244b3e4b",
          "message": "Changelog",
          "timestamp": "2023-09-01T14:31:05+09:00",
          "tree_id": "a8e737ad5d8cf8d75c730c81eca9b1bb6ee3c066",
          "url": "https://github.com/greymistcube/libplanet/commit/8608f30b1034b8076cbb7f6bd9998add244b3e4b"
        },
        "date": 1693547546258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678006.25,
            "unit": "ns",
            "range": "± 148449.00298365802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3260156,
            "unit": "ns",
            "range": "± 164554.97991922402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202348.3870967743,
            "unit": "ns",
            "range": "± 205944.29154554484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5910771.649484536,
            "unit": "ns",
            "range": "± 435746.7582655291"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73309.67741935483,
            "unit": "ns",
            "range": "± 10088.295677537377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9896132.653061224,
            "unit": "ns",
            "range": "± 394812.8203063209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25685911.76470588,
            "unit": "ns",
            "range": "± 494288.68700683524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66500880.76923077,
            "unit": "ns",
            "range": "± 1796677.5347889739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135588215,
            "unit": "ns",
            "range": "± 3089835.1612096345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266873840,
            "unit": "ns",
            "range": "± 4165904.6689936216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5529733.293269231,
            "unit": "ns",
            "range": "± 54177.675754733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1757458.998325893,
            "unit": "ns",
            "range": "± 18588.206952824763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1287457.8857421875,
            "unit": "ns",
            "range": "± 24012.273975879314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3249729.7712053573,
            "unit": "ns",
            "range": "± 40314.94551323319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062522.9073660714,
            "unit": "ns",
            "range": "± 15695.825015022358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996589.0625,
            "unit": "ns",
            "range": "± 11199.288240023554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4121828.3018867923,
            "unit": "ns",
            "range": "± 171178.34309613434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4302014.102564103,
            "unit": "ns",
            "range": "± 220413.43721522132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5392301.851851852,
            "unit": "ns",
            "range": "± 219367.04013682803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4840355.913978495,
            "unit": "ns",
            "range": "± 287921.0634812368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7661610.810810811,
            "unit": "ns",
            "range": "± 254672.0230498912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331054.7368421053,
            "unit": "ns",
            "range": "± 20312.94927317774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326422.6804123711,
            "unit": "ns",
            "range": "± 29229.275083505177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293844.6808510638,
            "unit": "ns",
            "range": "± 25231.336622274117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5125953.488372093,
            "unit": "ns",
            "range": "± 189693.33691744384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4766873.333333333,
            "unit": "ns",
            "range": "± 180761.03688169486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29458.947368421053,
            "unit": "ns",
            "range": "± 5860.5332474109355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121361.85567010309,
            "unit": "ns",
            "range": "± 16303.587560839236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130878.40909090909,
            "unit": "ns",
            "range": "± 11806.343987850627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129352.08333333333,
            "unit": "ns",
            "range": "± 21083.083661235774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9719.78021978022,
            "unit": "ns",
            "range": "± 1191.2849999726982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26817.391304347828,
            "unit": "ns",
            "range": "± 4401.213835956357"
          }
        ]
      }
    ]
  }
}