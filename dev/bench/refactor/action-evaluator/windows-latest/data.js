window.BENCHMARK_DATA = {
  "lastUpdate": 1686310702158,
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
          "id": "f28a269cff6f1064e1e13d1a7630c2c05652dc1c",
          "message": "Remove null getters",
          "timestamp": "2023-06-09T20:20:20+09:00",
          "tree_id": "62330eb54892a69fe99510199b799e3ce891914e",
          "url": "https://github.com/greymistcube/libplanet/commit/f28a269cff6f1064e1e13d1a7630c2c05652dc1c"
        },
        "date": 1686310681577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316278,
            "unit": "ns",
            "range": "± 119167.35840443434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469294.6666666665,
            "unit": "ns",
            "range": "± 123981.22775660852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2061577.1739130435,
            "unit": "ns",
            "range": "± 115575.89590828354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5380817.777777778,
            "unit": "ns",
            "range": "± 297872.686241101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47091.11111111111,
            "unit": "ns",
            "range": "± 2560.7076113179487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6738930.769230769,
            "unit": "ns",
            "range": "± 44393.68169412146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18954986.666666668,
            "unit": "ns",
            "range": "± 341571.24307417637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47071058.823529415,
            "unit": "ns",
            "range": "± 911846.9403214167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94148233.33333333,
            "unit": "ns",
            "range": "± 1982952.6606582832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186101461.9047619,
            "unit": "ns",
            "range": "± 4365009.689161777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4696585.481770833,
            "unit": "ns",
            "range": "± 14660.351800429904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504580.7942708333,
            "unit": "ns",
            "range": "± 8949.029874981641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143844.4401041667,
            "unit": "ns",
            "range": "± 7263.819895828632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612133.3984375,
            "unit": "ns",
            "range": "± 9843.674456732524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830538.9573317308,
            "unit": "ns",
            "range": "± 3451.3509004734665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760198.90625,
            "unit": "ns",
            "range": "± 2164.171358358007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2912993.023255814,
            "unit": "ns",
            "range": "± 96760.62854219374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3111456.4516129033,
            "unit": "ns",
            "range": "± 141086.22711761948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3861688.709677419,
            "unit": "ns",
            "range": "± 173659.15750455842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3884240.860215054,
            "unit": "ns",
            "range": "± 219853.60209870047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6375418.181818182,
            "unit": "ns",
            "range": "± 200559.3295239364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255192.3076923077,
            "unit": "ns",
            "range": "± 10444.265640350888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251703.8961038961,
            "unit": "ns",
            "range": "± 12854.964651821872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219903.26086956522,
            "unit": "ns",
            "range": "± 12403.326840908772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3891664.5161290322,
            "unit": "ns",
            "range": "± 115767.49845671163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3514333.3333333335,
            "unit": "ns",
            "range": "± 65141.42490071305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19261.855670103094,
            "unit": "ns",
            "range": "± 2270.941586057472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83046.73913043478,
            "unit": "ns",
            "range": "± 6144.92466511921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71176,
            "unit": "ns",
            "range": "± 1880"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93334.94623655915,
            "unit": "ns",
            "range": "± 12578.068786552727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5334.693877551021,
            "unit": "ns",
            "range": "± 905.0946343203739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18280.208333333332,
            "unit": "ns",
            "range": "± 2653.046701105281"
          }
        ]
      }
    ]
  }
}