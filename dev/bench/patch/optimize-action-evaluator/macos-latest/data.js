window.BENCHMARK_DATA = {
  "lastUpdate": 1708351877925,
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
          "id": "8119060772bfbcabc90d5894cc8190757b2ccb88",
          "message": "Remove clutter",
          "timestamp": "2024-02-19T20:50:19+09:00",
          "tree_id": "20b1db2437046912a63df1dbe166807fc824a10f",
          "url": "https://github.com/greymistcube/libplanet/commit/8119060772bfbcabc90d5894cc8190757b2ccb88"
        },
        "date": 1708351862765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7786516.68,
            "unit": "ns",
            "range": "± 184189.61674809468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19973635.56451613,
            "unit": "ns",
            "range": "± 595092.887185686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48170325.375,
            "unit": "ns",
            "range": "± 910655.9644723412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95797391,
            "unit": "ns",
            "range": "± 1338931.1767793244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195546575.1875,
            "unit": "ns",
            "range": "± 3635341.5041103303"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42536.416666666664,
            "unit": "ns",
            "range": "± 10795.244936317458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223793.63684210528,
            "unit": "ns",
            "range": "± 13411.629917137832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212401.0588235294,
            "unit": "ns",
            "range": "± 8543.571956533788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210344.88775510204,
            "unit": "ns",
            "range": "± 25445.06504343408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3985852.4242424243,
            "unit": "ns",
            "range": "± 99370.05259792507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3412631.785714286,
            "unit": "ns",
            "range": "± 50797.82753596483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14586.59090909091,
            "unit": "ns",
            "range": "± 2898.3027638914427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64047.34782608696,
            "unit": "ns",
            "range": "± 9825.283109680853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61628.762886597935,
            "unit": "ns",
            "range": "± 12783.919368987546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69942.67346938775,
            "unit": "ns",
            "range": "± 14168.458615774609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4629.41052631579,
            "unit": "ns",
            "range": "± 1603.2212752252344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14215.994845360825,
            "unit": "ns",
            "range": "± 4209.935201212799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1121794.5154639175,
            "unit": "ns",
            "range": "± 97978.96754343434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2373650.5721649486,
            "unit": "ns",
            "range": "± 183416.65622703178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1774230.8333333333,
            "unit": "ns",
            "range": "± 129328.20277895725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19612830.386363637,
            "unit": "ns",
            "range": "± 2074855.9603340114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2945974.4925373136,
            "unit": "ns",
            "range": "± 139458.0854952889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3046861.238095238,
            "unit": "ns",
            "range": "± 108024.06669040085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3688416.8076923075,
            "unit": "ns",
            "range": "± 210731.39801503462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3710219.3604651163,
            "unit": "ns",
            "range": "± 201470.00194890573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22430838.8172043,
            "unit": "ns",
            "range": "± 2700981.7520892643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4439163.217548077,
            "unit": "ns",
            "range": "± 63551.61379407679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1371870.3302408855,
            "unit": "ns",
            "range": "± 18234.863732055852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 892574.111328125,
            "unit": "ns",
            "range": "± 9168.814465491796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2106107.338641827,
            "unit": "ns",
            "range": "± 16323.706128165602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645644.0009014423,
            "unit": "ns",
            "range": "± 5431.406096376937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569716.4025691106,
            "unit": "ns",
            "range": "± 5896.287677983954"
          }
        ]
      }
    ]
  }
}