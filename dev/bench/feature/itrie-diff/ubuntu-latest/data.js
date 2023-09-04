window.BENCHMARK_DATA = {
  "lastUpdate": 1693792669717,
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
          "id": "06d288e10ab42d4c0d44ef20ef909b3ce5937896",
          "message": "Cleanup",
          "timestamp": "2023-09-04T10:42:36+09:00",
          "tree_id": "0282daa55f3754af880a2bddc6126756ea723363",
          "url": "https://github.com/greymistcube/libplanet/commit/06d288e10ab42d4c0d44ef20ef909b3ce5937896"
        },
        "date": 1693792662503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1453090.0795454546,
            "unit": "ns",
            "range": "± 72982.81942957638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800768.7352941176,
            "unit": "ns",
            "range": "± 82417.43125360653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1933952.15625,
            "unit": "ns",
            "range": "± 115063.99979392046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234230.58974359,
            "unit": "ns",
            "range": "± 268799.0909021634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287689.51851851854,
            "unit": "ns",
            "range": "± 7406.306945229287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284978.2105263158,
            "unit": "ns",
            "range": "± 6172.462920809807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254430.2131147541,
            "unit": "ns",
            "range": "± 11371.278947586554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4656463.4,
            "unit": "ns",
            "range": "± 48939.114748838685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4109937.466666667,
            "unit": "ns",
            "range": "± 57736.64722423045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23662.515789473684,
            "unit": "ns",
            "range": "± 1831.427061663895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98148.39583333333,
            "unit": "ns",
            "range": "± 7301.849945090218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80450.1914893617,
            "unit": "ns",
            "range": "± 5135.633853889616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92479.793814433,
            "unit": "ns",
            "range": "± 13237.224903451051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6136.1752577319585,
            "unit": "ns",
            "range": "± 983.3238171535578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23104.546391752578,
            "unit": "ns",
            "range": "± 2574.913501866853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54404.05434782609,
            "unit": "ns",
            "range": "± 3713.832277288117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8707973.294117646,
            "unit": "ns",
            "range": "± 177366.49953724517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23031904.533333335,
            "unit": "ns",
            "range": "± 283478.552435596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58593018,
            "unit": "ns",
            "range": "± 232642.71276475748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116805995.57142857,
            "unit": "ns",
            "range": "± 500445.2918405174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230606858,
            "unit": "ns",
            "range": "± 1392958.3325166006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3719888.769230769,
            "unit": "ns",
            "range": "± 52855.52533739786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3875942.705882353,
            "unit": "ns",
            "range": "± 78795.18630027845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4539053.043478261,
            "unit": "ns",
            "range": "± 110931.07644449496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229360.545454546,
            "unit": "ns",
            "range": "± 102998.34492924873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6647934.28,
            "unit": "ns",
            "range": "± 173116.60132877686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5189988.692908654,
            "unit": "ns",
            "range": "± 33384.81143389916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586781.9126674107,
            "unit": "ns",
            "range": "± 1133.6021800393216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091113.7475260417,
            "unit": "ns",
            "range": "± 1012.2328223246742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617927.920052083,
            "unit": "ns",
            "range": "± 2693.290564057847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844576.7375,
            "unit": "ns",
            "range": "± 1077.4283041228744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759483.3831380209,
            "unit": "ns",
            "range": "± 566.3506360079235"
          }
        ]
      }
    ]
  }
}