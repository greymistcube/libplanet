window.BENCHMARK_DATA = {
  "lastUpdate": 1702002061575,
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
          "id": "718d7eab7705a0ccf84634c14106a58dbfe3fad0",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:09:49+09:00",
          "tree_id": "1a9ea1ff57502e6c167c79e20296575b0a8644cc",
          "url": "https://github.com/greymistcube/libplanet/commit/718d7eab7705a0ccf84634c14106a58dbfe3fad0"
        },
        "date": 1702002055091,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238637.66666666666,
            "unit": "ns",
            "range": "± 9758.985930242274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238631.10606060605,
            "unit": "ns",
            "range": "± 7487.711979217158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190060.17857142858,
            "unit": "ns",
            "range": "± 10185.024500518484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3184811.8571428573,
            "unit": "ns",
            "range": "± 39477.56040677197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2951085.7333333334,
            "unit": "ns",
            "range": "± 46922.99627880718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23968.959595959597,
            "unit": "ns",
            "range": "± 5290.001872842522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94775.02525252526,
            "unit": "ns",
            "range": "± 12603.861419441198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92351.5,
            "unit": "ns",
            "range": "± 2809.587944629008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100657.2258064516,
            "unit": "ns",
            "range": "± 11144.952452869331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8081.145833333333,
            "unit": "ns",
            "range": "± 1177.6948043499983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21488.58695652174,
            "unit": "ns",
            "range": "± 1559.1310319447346"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47423.6875,
            "unit": "ns",
            "range": "± 6936.324798612166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078064.194736842,
            "unit": "ns",
            "range": "± 98494.37713576989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1997438.2894736843,
            "unit": "ns",
            "range": "± 68803.98628179396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642367.7272727273,
            "unit": "ns",
            "range": "± 163034.35544812033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6281795.888888889,
            "unit": "ns",
            "range": "± 263145.9467703015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2632659.5,
            "unit": "ns",
            "range": "± 38081.79574941287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2765679.1129032257,
            "unit": "ns",
            "range": "± 70665.95971926767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3328303.5,
            "unit": "ns",
            "range": "± 91311.14589645164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3211789.744680851,
            "unit": "ns",
            "range": "± 122907.88615471488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7203985.619047619,
            "unit": "ns",
            "range": "± 167790.1268270801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6134452.8,
            "unit": "ns",
            "range": "± 59964.436163922546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15172433,
            "unit": "ns",
            "range": "± 69822.06096020633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37541687.916666664,
            "unit": "ns",
            "range": "± 114706.70089759624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76889849.92857143,
            "unit": "ns",
            "range": "± 789869.2146344875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150381184.85714287,
            "unit": "ns",
            "range": "± 894513.7125600365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3749050.385091146,
            "unit": "ns",
            "range": "± 22201.168933337565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208450.8478816105,
            "unit": "ns",
            "range": "± 2279.5963561288604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768347.251813616,
            "unit": "ns",
            "range": "± 1535.839266859718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953607.1721754808,
            "unit": "ns",
            "range": "± 10868.720428664468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623253.3313551683,
            "unit": "ns",
            "range": "± 862.5561962196674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574158.1201171875,
            "unit": "ns",
            "range": "± 978.2833528365574"
          }
        ]
      }
    ]
  }
}