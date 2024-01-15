window.BENCHMARK_DATA = {
  "lastUpdate": 1705280758420,
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
          "id": "9af4f63dca620dc3bdf9581d529522306222d070",
          "message": "Changelog",
          "timestamp": "2024-01-15T09:54:44+09:00",
          "tree_id": "6e25bb6d8426c90711dd0d7b0ee7fe8226526174",
          "url": "https://github.com/greymistcube/libplanet/commit/9af4f63dca620dc3bdf9581d529522306222d070"
        },
        "date": 1705280751140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746094.251822917,
            "unit": "ns",
            "range": "± 57511.6969900663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216413.9415564905,
            "unit": "ns",
            "range": "± 3743.327130083609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783527.965219351,
            "unit": "ns",
            "range": "± 2376.9613038883313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963329.3880208333,
            "unit": "ns",
            "range": "± 2874.821467080216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611294.0307617188,
            "unit": "ns",
            "range": "± 1431.6416352566116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583526.3952073317,
            "unit": "ns",
            "range": "± 1507.7323236312382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2481693.0606060605,
            "unit": "ns",
            "range": "± 77666.10229410713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2522187.4,
            "unit": "ns",
            "range": "± 81590.34452541839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3113847.3333333335,
            "unit": "ns",
            "range": "± 97173.08775217379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3184207.0846153847,
            "unit": "ns",
            "range": "± 146779.25944859473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13775052.602150537,
            "unit": "ns",
            "range": "± 983433.4707616955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40979.778350515466,
            "unit": "ns",
            "range": "± 5502.533819262775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198500.70212765958,
            "unit": "ns",
            "range": "± 7716.958921511746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189112.75609756098,
            "unit": "ns",
            "range": "± 6732.05957259919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160616.5,
            "unit": "ns",
            "range": "± 2165.5127657119774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3205638.8,
            "unit": "ns",
            "range": "± 46992.90457718058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765113.6,
            "unit": "ns",
            "range": "± 26517.508689812577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16565.923076923078,
            "unit": "ns",
            "range": "± 1161.13150016859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61088.204081632655,
            "unit": "ns",
            "range": "± 5085.346654565111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51816.230769230766,
            "unit": "ns",
            "range": "± 1206.1947540158615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65770.63736263737,
            "unit": "ns",
            "range": "± 7685.921681904279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3089.5257731958764,
            "unit": "ns",
            "range": "± 509.3244728065366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12227.760416666666,
            "unit": "ns",
            "range": "± 1006.5027700936249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5740305.066666666,
            "unit": "ns",
            "range": "± 28117.515924792366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14198437.866666667,
            "unit": "ns",
            "range": "± 225548.2383235083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36700049.733333334,
            "unit": "ns",
            "range": "± 135395.6806029048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75485690.06666666,
            "unit": "ns",
            "range": "± 543091.2508009084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 158929861.2142857,
            "unit": "ns",
            "range": "± 954086.1467424795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 939590.6685393258,
            "unit": "ns",
            "range": "± 49363.29525735143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1847736.1,
            "unit": "ns",
            "range": "± 57914.582738144054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601826.86,
            "unit": "ns",
            "range": "± 162041.52383898705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12832548.56043956,
            "unit": "ns",
            "range": "± 951356.9460630221"
          }
        ]
      }
    ]
  }
}