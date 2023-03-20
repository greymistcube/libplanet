window.BENCHMARK_DATA = {
  "lastUpdate": 1679273992633,
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
          "id": "0670779e98f7d1b06df233959660523b5eb1ee95",
          "message": "Fix improper bencoding",
          "timestamp": "2023-03-17T18:49:27+09:00",
          "tree_id": "457dec915722a9cf2f041ce045d21405df284e85",
          "url": "https://github.com/greymistcube/libplanet/commit/0670779e98f7d1b06df233959660523b5eb1ee95"
        },
        "date": 1679048390592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9551235.467391305,
            "unit": "ns",
            "range": "± 602204.7317867036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24677669.272727273,
            "unit": "ns",
            "range": "± 769713.9812092652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59713845.28571428,
            "unit": "ns",
            "range": "± 910947.7965748244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 122475847.92857143,
            "unit": "ns",
            "range": "± 1788620.6941762723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 249649511.875,
            "unit": "ns",
            "range": "± 4755346.740856792"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63866.36263736264,
            "unit": "ns",
            "range": "± 5601.52803858313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232655.27272727274,
            "unit": "ns",
            "range": "± 10982.056766233876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239775.25280898876,
            "unit": "ns",
            "range": "± 16448.06138844947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222617.44210526315,
            "unit": "ns",
            "range": "± 18406.015310516676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14025276.282051282,
            "unit": "ns",
            "range": "± 489171.35268726846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10555940.909090908,
            "unit": "ns",
            "range": "± 195341.30390773044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20182.298850574713,
            "unit": "ns",
            "range": "± 1124.1477093516332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63345.72527472527,
            "unit": "ns",
            "range": "± 7322.274701311417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46557.9,
            "unit": "ns",
            "range": "± 3334.9246367173373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109648.39361702128,
            "unit": "ns",
            "range": "± 17385.849646153863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5341.795698924731,
            "unit": "ns",
            "range": "± 620.1327445401224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19001.186813186814,
            "unit": "ns",
            "range": "± 2226.2247161810255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1988502.361111111,
            "unit": "ns",
            "range": "± 62842.9849319046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3182679.2,
            "unit": "ns",
            "range": "± 112416.0958689658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2710834.1041666665,
            "unit": "ns",
            "range": "± 157868.0760860975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7606754.943820225,
            "unit": "ns",
            "range": "± 439044.4981616939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3856930.6685393257,
            "unit": "ns",
            "range": "± 241862.96850523533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6011517.1022727275,
            "unit": "ns",
            "range": "± 395203.51946865895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31402034.021276597,
            "unit": "ns",
            "range": "± 1206972.0852860338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7649107.353658536,
            "unit": "ns",
            "range": "± 405331.57662041264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33487777.09090909,
            "unit": "ns",
            "range": "± 1235605.1962038649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7271537.84077381,
            "unit": "ns",
            "range": "± 165180.42342508506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2228339.6021634615,
            "unit": "ns",
            "range": "± 17651.431021952696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477967.359375,
            "unit": "ns",
            "range": "± 8125.280772690428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2884788.88671875,
            "unit": "ns",
            "range": "± 25983.28442694943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957493.351171875,
            "unit": "ns",
            "range": "± 14357.155450120274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888998.2235630581,
            "unit": "ns",
            "range": "± 10249.215244406734"
          }
        ]
      },
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
          "id": "693f729f93a8c6d9e75c202e766b95c51c52a4c1",
          "message": "Added compatibility warning",
          "timestamp": "2023-03-20T09:40:21+09:00",
          "tree_id": "f7642fcab75e8e532157a3af5e43029aaa1883b3",
          "url": "https://github.com/greymistcube/libplanet/commit/693f729f93a8c6d9e75c202e766b95c51c52a4c1"
        },
        "date": 1679273980687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9165135.948453609,
            "unit": "ns",
            "range": "± 616623.5438772992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23006798.484615386,
            "unit": "ns",
            "range": "± 1067044.007320025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55037626.914634146,
            "unit": "ns",
            "range": "± 1947272.7446152477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 106905528.22826087,
            "unit": "ns",
            "range": "± 5846564.52608996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223771422.26086956,
            "unit": "ns",
            "range": "± 8545161.727905577"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73073.67415730337,
            "unit": "ns",
            "range": "± 7955.247928790726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210198.6170212766,
            "unit": "ns",
            "range": "± 13813.730889139133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213300.1888888889,
            "unit": "ns",
            "range": "± 16564.704494218247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207284.02298850575,
            "unit": "ns",
            "range": "± 19219.138773251827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13768726.214285715,
            "unit": "ns",
            "range": "± 1049780.5518218959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10884870.948979592,
            "unit": "ns",
            "range": "± 668891.3206136792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19350.114942528737,
            "unit": "ns",
            "range": "± 3489.2360009542945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58909.1,
            "unit": "ns",
            "range": "± 10835.699606668572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54902.52127659575,
            "unit": "ns",
            "range": "± 5331.220623166497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123196.31521739131,
            "unit": "ns",
            "range": "± 16340.69753977349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7653.5625,
            "unit": "ns",
            "range": "± 855.2960560069553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23652.153846153848,
            "unit": "ns",
            "range": "± 3514.626191354817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1607665.2291666667,
            "unit": "ns",
            "range": "± 196398.4597467462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2767081.3333333335,
            "unit": "ns",
            "range": "± 126128.38800782168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2405746.5164835164,
            "unit": "ns",
            "range": "± 191121.49544066133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5979177.75862069,
            "unit": "ns",
            "range": "± 160813.73870494112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3646238.815217391,
            "unit": "ns",
            "range": "± 289224.69643909065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5484984.010204081,
            "unit": "ns",
            "range": "± 445856.9956383487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28518584.274509802,
            "unit": "ns",
            "range": "± 1146420.946758233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6903075.17032967,
            "unit": "ns",
            "range": "± 617445.1321003899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31615643.241935484,
            "unit": "ns",
            "range": "± 1934913.5959659456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7429297.067088294,
            "unit": "ns",
            "range": "± 337255.7522816905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2040578.6413892664,
            "unit": "ns",
            "range": "± 49711.045493998936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388672.4998697916,
            "unit": "ns",
            "range": "± 22719.49940084967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3177676.7741948343,
            "unit": "ns",
            "range": "± 219314.61261607954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932802.8987525202,
            "unit": "ns",
            "range": "± 28196.60258045159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782308.2866210938,
            "unit": "ns",
            "range": "± 12038.165978828622"
          }
        ]
      }
    ]
  }
}