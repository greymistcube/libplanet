window.BENCHMARK_DATA = {
  "lastUpdate": 1679539906467,
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
          "id": "84428e00852ef16add1099d89d31c03d15575164",
          "message": "Added info",
          "timestamp": "2023-03-23T11:38:16+09:00",
          "tree_id": "d66f794203c10cf5dacdcbd2cbed3dc4742f99b4",
          "url": "https://github.com/greymistcube/libplanet/commit/84428e00852ef16add1099d89d31c03d15575164"
        },
        "date": 1679539899642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 117129.9191919192,
            "unit": "ns",
            "range": "± 8666.799939855831"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5154662.299479167,
            "unit": "ns",
            "range": "± 187830.94928797733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6585479.642857143,
            "unit": "ns",
            "range": "± 110112.30849567751"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28663955.333333332,
            "unit": "ns",
            "range": "± 285913.278236018"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7241791.71875,
            "unit": "ns",
            "range": "± 224871.71942619316"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31713627,
            "unit": "ns",
            "range": "± 544219.401838197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5921664.823958334,
            "unit": "ns",
            "range": "± 27137.329850169845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898936.125,
            "unit": "ns",
            "range": "± 866.7533955507065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380605.3603515625,
            "unit": "ns",
            "range": "± 1887.3082458787794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637249.53515625,
            "unit": "ns",
            "range": "± 2291.2965505441807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843207.9185697115,
            "unit": "ns",
            "range": "± 319.29052753541606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768956.6358173077,
            "unit": "ns",
            "range": "± 1421.9402172855503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110328.8469387755,
            "unit": "ns",
            "range": "± 12637.322662222177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218120.44444444444,
            "unit": "ns",
            "range": "± 8292.037419760421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204194.63157894736,
            "unit": "ns",
            "range": "± 6912.095463637295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4066022.214285714,
            "unit": "ns",
            "range": "± 30571.561702839936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10269403.4,
            "unit": "ns",
            "range": "± 78379.83762860009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22036.582417582416,
            "unit": "ns",
            "range": "± 1885.8368202409013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56397.42222222222,
            "unit": "ns",
            "range": "± 4109.36539286602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44230.52857142857,
            "unit": "ns",
            "range": "± 2169.5451251118243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112985.25,
            "unit": "ns",
            "range": "± 17833.08524477378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7438.65625,
            "unit": "ns",
            "range": "± 844.0438854657413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22330.31914893617,
            "unit": "ns",
            "range": "± 2193.791436028199"
          }
        ]
      }
    ]
  }
}