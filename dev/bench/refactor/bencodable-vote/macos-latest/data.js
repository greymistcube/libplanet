window.BENCHMARK_DATA = {
  "lastUpdate": 1679048413678,
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
      }
    ]
  }
}