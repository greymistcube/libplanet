window.BENCHMARK_DATA = {
  "lastUpdate": 1701670373470,
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
          "id": "4b0b11cf5148ac89930386f63f1a7fdc40d6fdf8",
          "message": "Revert \"Introduce ITxContext\"\n\nThis reverts commit c871f59f57582d9c91d4f04cd2a036b51420a91f.",
          "timestamp": "2023-12-04T15:00:12+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/greymistcube/libplanet/commit/4b0b11cf5148ac89930386f63f1a7fdc40d6fdf8"
        },
        "date": 1701670352971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 893608.2474226804,
            "unit": "ns",
            "range": "± 64547.17375381211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1685698.7012987013,
            "unit": "ns",
            "range": "± 78250.70117981875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1301548.4848484849,
            "unit": "ns",
            "range": "± 121404.41723096855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4997895.833333333,
            "unit": "ns",
            "range": "± 245065.35342063976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34226.19047619047,
            "unit": "ns",
            "range": "± 1851.3504707891852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4949121.428571428,
            "unit": "ns",
            "range": "± 24310.528854527478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13019660,
            "unit": "ns",
            "range": "± 65640.72995154325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31829000,
            "unit": "ns",
            "range": "± 145453.99616373557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62866164.28571428,
            "unit": "ns",
            "range": "± 919704.8045283484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126312826.66666667,
            "unit": "ns",
            "range": "± 931750.4359818571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3325252.6227678573,
            "unit": "ns",
            "range": "± 15099.7987687561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1032381.6276041666,
            "unit": "ns",
            "range": "± 4906.3836709841235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746732.7427455357,
            "unit": "ns",
            "range": "± 1544.8614074886368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927469.8567708333,
            "unit": "ns",
            "range": "± 10495.137191938851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618997.6283482143,
            "unit": "ns",
            "range": "± 3561.9618107747383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551203.1319754465,
            "unit": "ns",
            "range": "± 1668.9336587040086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2070633.3333333333,
            "unit": "ns",
            "range": "± 78651.07061630444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2215340,
            "unit": "ns",
            "range": "± 102678.52258383931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2714584.745762712,
            "unit": "ns",
            "range": "± 118950.6211860102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2669680.769230769,
            "unit": "ns",
            "range": "± 108928.51233445117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5858269.5121951215,
            "unit": "ns",
            "range": "± 198520.51432976918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171046.15384615384,
            "unit": "ns",
            "range": "± 7467.8075121458205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154604.2857142857,
            "unit": "ns",
            "range": "± 6970.318764970523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139363.26530612246,
            "unit": "ns",
            "range": "± 5509.979351048386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2761530.769230769,
            "unit": "ns",
            "range": "± 43634.93219534446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506666.6666666665,
            "unit": "ns",
            "range": "± 38510.40057414299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10391.954022988506,
            "unit": "ns",
            "range": "± 966.6795711146334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48276.92307692308,
            "unit": "ns",
            "range": "± 3228.0395468828006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43189.36170212766,
            "unit": "ns",
            "range": "± 1687.065118527901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48757.73195876289,
            "unit": "ns",
            "range": "± 9448.289473183608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2070.967741935484,
            "unit": "ns",
            "range": "± 322.5511908011455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10076.842105263158,
            "unit": "ns",
            "range": "± 1461.961130517654"
          }
        ]
      }
    ]
  }
}