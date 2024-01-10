window.BENCHMARK_DATA = {
  "lastUpdate": 1704870447982,
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
          "id": "62240d10330c147e4ada92b787ce0d35985adac1",
          "message": "Updated changelog",
          "timestamp": "2024-01-10T15:54:01+09:00",
          "tree_id": "4f1cc9e9cdd7817b323f20fb67af5ad2931a41b8",
          "url": "https://github.com/greymistcube/libplanet/commit/62240d10330c147e4ada92b787ce0d35985adac1"
        },
        "date": 1704870420134,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036787.0967741936,
            "unit": "ns",
            "range": "± 94661.02708659123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1847905.2631578948,
            "unit": "ns",
            "range": "± 79651.88864466212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1706225.2525252525,
            "unit": "ns",
            "range": "± 215426.9450220125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11027083.146067416,
            "unit": "ns",
            "range": "± 917112.4513726312"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41179.78723404255,
            "unit": "ns",
            "range": "± 5434.865140371822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5531213.333333333,
            "unit": "ns",
            "range": "± 73852.26436867696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14089450,
            "unit": "ns",
            "range": "± 140362.3538724518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34647228.571428575,
            "unit": "ns",
            "range": "± 297611.17490539805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70548215.38461539,
            "unit": "ns",
            "range": "± 438469.0921189197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 141147746.66666666,
            "unit": "ns",
            "range": "± 1141194.0519014453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3418185.021033654,
            "unit": "ns",
            "range": "± 11138.88230895574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072678.7109375,
            "unit": "ns",
            "range": "± 2067.0193712766936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752734.5912388393,
            "unit": "ns",
            "range": "± 1395.1878380127316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1998279.0457589286,
            "unit": "ns",
            "range": "± 3671.7079851770445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633063.6858258928,
            "unit": "ns",
            "range": "± 1640.8972603196255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559729.2550223215,
            "unit": "ns",
            "range": "± 881.4208641539409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2289692.5,
            "unit": "ns",
            "range": "± 80324.49378167317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2421859.782608696,
            "unit": "ns",
            "range": "± 142900.64023709623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2854677.0833333335,
            "unit": "ns",
            "range": "± 97821.84031378619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3044929.347826087,
            "unit": "ns",
            "range": "± 171619.31135609196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12667354.347826088,
            "unit": "ns",
            "range": "± 1355808.9913294942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192618.27956989247,
            "unit": "ns",
            "range": "± 13513.471106853845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179619.23076923078,
            "unit": "ns",
            "range": "± 9278.449513503072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155016.31578947368,
            "unit": "ns",
            "range": "± 11537.161147614459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3062725.806451613,
            "unit": "ns",
            "range": "± 91480.82483137085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2585021.4285714286,
            "unit": "ns",
            "range": "± 25939.25384643687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13980.434782608696,
            "unit": "ns",
            "range": "± 1671.956091386412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66791.83673469388,
            "unit": "ns",
            "range": "± 7832.244658170526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54102,
            "unit": "ns",
            "range": "± 9165.746289883058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68756.3829787234,
            "unit": "ns",
            "range": "± 12762.35693429771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3807.1428571428573,
            "unit": "ns",
            "range": "± 797.7093494409899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14219.354838709678,
            "unit": "ns",
            "range": "± 2561.812285851227"
          }
        ]
      }
    ]
  }
}