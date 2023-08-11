window.BENCHMARK_DATA = {
  "lastUpdate": 1691723616227,
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
          "id": "e48262a64ed22b0e650c843b3fde0de33b1170d6",
          "message": "Prepare 3.2.1",
          "timestamp": "2023-08-11T11:57:16+09:00",
          "tree_id": "b4396921fa9482f449cd092c685901864dc9aece",
          "url": "https://github.com/greymistcube/libplanet/commit/e48262a64ed22b0e650c843b3fde0de33b1170d6"
        },
        "date": 1691723608216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3293727.8571428573,
            "unit": "ns",
            "range": "± 268731.3688392682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3404527.4285714286,
            "unit": "ns",
            "range": "± 297381.4432330316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4253416.443298969,
            "unit": "ns",
            "range": "± 352393.9874966822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3685943.18556701,
            "unit": "ns",
            "range": "± 322630.89544165804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6529655.546391753,
            "unit": "ns",
            "range": "± 626889.566284572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8075883.180851064,
            "unit": "ns",
            "range": "± 567442.176948756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19791979.50980392,
            "unit": "ns",
            "range": "± 808105.541789694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52160083.443298966,
            "unit": "ns",
            "range": "± 3075330.506416837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105153225.85106383,
            "unit": "ns",
            "range": "± 4072410.722340686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213779308.24,
            "unit": "ns",
            "range": "± 10740592.33046426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54345.55319148936,
            "unit": "ns",
            "range": "± 11313.42268701164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4872570.309495192,
            "unit": "ns",
            "range": "± 55544.87721984239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586712.2176192433,
            "unit": "ns",
            "range": "± 35235.39189030742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1103408.4458333333,
            "unit": "ns",
            "range": "± 19862.137790377063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638608.9225260415,
            "unit": "ns",
            "range": "± 46997.329223238594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903012.6494715074,
            "unit": "ns",
            "range": "± 17843.838871979708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805611.0651041666,
            "unit": "ns",
            "range": "± 10200.577736793728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303814.1530612245,
            "unit": "ns",
            "range": "± 49461.22691779334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280122.0729166667,
            "unit": "ns",
            "range": "± 35682.033533697184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251398.2659574468,
            "unit": "ns",
            "range": "± 29281.718321757395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4560519.87755102,
            "unit": "ns",
            "range": "± 323805.39634125435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858786.7708333335,
            "unit": "ns",
            "range": "± 253097.91659441037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24737.92,
            "unit": "ns",
            "range": "± 10346.775526293943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91216.6914893617,
            "unit": "ns",
            "range": "± 17861.134276872956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80010.15625,
            "unit": "ns",
            "range": "± 15026.62126208937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89259.0989010989,
            "unit": "ns",
            "range": "± 20561.379219873437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4185.045977011494,
            "unit": "ns",
            "range": "± 545.4691368509158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28706.103092783505,
            "unit": "ns",
            "range": "± 9759.527180193098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1347951.6354166667,
            "unit": "ns",
            "range": "± 164905.79660854032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2665134.0404040404,
            "unit": "ns",
            "range": "± 227635.08425269832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1736104.7777777778,
            "unit": "ns",
            "range": "± 205525.61407436297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4844134.157894737,
            "unit": "ns",
            "range": "± 431939.45486878965"
          }
        ]
      }
    ]
  }
}