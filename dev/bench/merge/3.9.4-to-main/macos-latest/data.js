window.BENCHMARK_DATA = {
  "lastUpdate": 1705281342666,
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
        "date": 1705281316787,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9313766.97826087,
            "unit": "ns",
            "range": "± 1123556.1325415596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27000262.56521739,
            "unit": "ns",
            "range": "± 3906425.179048777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64659300.822916664,
            "unit": "ns",
            "range": "± 9946861.004843201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138177565.9431818,
            "unit": "ns",
            "range": "± 20373665.81235244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 322294399.0752688,
            "unit": "ns",
            "range": "± 59176741.8869857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69284.25581395348,
            "unit": "ns",
            "range": "± 18960.919467613345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359990.2083333333,
            "unit": "ns",
            "range": "± 92843.35368791508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322174.4191919192,
            "unit": "ns",
            "range": "± 74524.85156064559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316652.8469387755,
            "unit": "ns",
            "range": "± 73615.4913532642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5549580.707070707,
            "unit": "ns",
            "range": "± 1110089.6528494598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5295621.146464647,
            "unit": "ns",
            "range": "± 1065944.9072925604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27500.35789473684,
            "unit": "ns",
            "range": "± 4350.534349464197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120255.32978723405,
            "unit": "ns",
            "range": "± 25575.812167971544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103249.87113402062,
            "unit": "ns",
            "range": "± 16735.959647392738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104817.57216494845,
            "unit": "ns",
            "range": "± 19821.17511140097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8515.726315789474,
            "unit": "ns",
            "range": "± 1453.7420125984283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19653.137362637364,
            "unit": "ns",
            "range": "± 2284.559084698273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438969.0631578946,
            "unit": "ns",
            "range": "± 356152.6179661834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2725381.966292135,
            "unit": "ns",
            "range": "± 414784.45422966505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2103349.1744186045,
            "unit": "ns",
            "range": "± 245591.27751662047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 25409649.010869566,
            "unit": "ns",
            "range": "± 6031081.550618428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3859063.2608695654,
            "unit": "ns",
            "range": "± 825421.4361304512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4124565.6875,
            "unit": "ns",
            "range": "± 972082.1438254806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5373792.217391305,
            "unit": "ns",
            "range": "± 1461964.1157861354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5917575.202247191,
            "unit": "ns",
            "range": "± 1515564.0292902295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35074145.08695652,
            "unit": "ns",
            "range": "± 8698325.078972507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4889063.713020833,
            "unit": "ns",
            "range": "± 88038.94599081713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1444597.8150634766,
            "unit": "ns",
            "range": "± 27742.01871379132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 944290.5833162006,
            "unit": "ns",
            "range": "± 20829.88857354643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2290089.2095853365,
            "unit": "ns",
            "range": "± 17656.998891423696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 768769.4809822004,
            "unit": "ns",
            "range": "± 85248.56674956222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 597710.2377232143,
            "unit": "ns",
            "range": "± 7157.811630064283"
          }
        ]
      }
    ]
  }
}