window.BENCHMARK_DATA = {
  "lastUpdate": 1705916083807,
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
          "id": "9ba4ed4d5c71ca82a1450e3bb12375df97d26159",
          "message": "Prepare 4.1.0",
          "timestamp": "2024-01-22T18:04:22+09:00",
          "tree_id": "ee3961a7236680095a3aa7512074e6094fd39dae",
          "url": "https://github.com/greymistcube/libplanet/commit/9ba4ed4d5c71ca82a1450e3bb12375df97d26159"
        },
        "date": 1705916056144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12215704.726804124,
            "unit": "ns",
            "range": "± 1549996.8475571068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29541669.010638297,
            "unit": "ns",
            "range": "± 3712793.3454459943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63945810.010752685,
            "unit": "ns",
            "range": "± 5476481.784960378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 162937339.82608697,
            "unit": "ns",
            "range": "± 22634725.934869546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 358603974.64893615,
            "unit": "ns",
            "range": "± 45173873.089297354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68619.33333333333,
            "unit": "ns",
            "range": "± 10497.469120970845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346704.9772727273,
            "unit": "ns",
            "range": "± 55441.30164043486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322883.3314606742,
            "unit": "ns",
            "range": "± 42055.131655643934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307167.8703703704,
            "unit": "ns",
            "range": "± 30321.865682393473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6452591.135416667,
            "unit": "ns",
            "range": "± 1270949.9001207522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6276412.94949495,
            "unit": "ns",
            "range": "± 1248644.4115539151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25698.894736842107,
            "unit": "ns",
            "range": "± 4504.589877838514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138332.24210526317,
            "unit": "ns",
            "range": "± 31346.097191562607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124602.293814433,
            "unit": "ns",
            "range": "± 27037.957480695135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113827.5,
            "unit": "ns",
            "range": "± 22464.832381247044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8610.684210526315,
            "unit": "ns",
            "range": "± 1691.9332091789286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18165.41919191919,
            "unit": "ns",
            "range": "± 3470.880599539627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1904202.3636363635,
            "unit": "ns",
            "range": "± 594733.253848054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4089386.5,
            "unit": "ns",
            "range": "± 1181236.0388810767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2645749.297752809,
            "unit": "ns",
            "range": "± 495024.1908290988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33253519.693181816,
            "unit": "ns",
            "range": "± 8338571.597323805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5225264.189473684,
            "unit": "ns",
            "range": "± 1112124.1337498229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4823337.734693877,
            "unit": "ns",
            "range": "± 1127511.4618989085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6152550.714285715,
            "unit": "ns",
            "range": "± 1236422.8157004642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6680573.29,
            "unit": "ns",
            "range": "± 1428710.9282905464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 40501582.03932584,
            "unit": "ns",
            "range": "± 11042835.437948575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5706337.175143495,
            "unit": "ns",
            "range": "± 555311.2324138457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1983758.373559817,
            "unit": "ns",
            "range": "± 221361.0201983748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168906.3107374238,
            "unit": "ns",
            "range": "± 41705.94823390415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2733124.1066721906,
            "unit": "ns",
            "range": "± 176572.83546972147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831055.0042739679,
            "unit": "ns",
            "range": "± 43681.050148195354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743353.3718063767,
            "unit": "ns",
            "range": "± 25087.81443070785"
          }
        ]
      }
    ]
  }
}