window.BENCHMARK_DATA = {
  "lastUpdate": 1679897062657,
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
          "id": "d3f84965e05ffa4207e70fb116348a48e118200e",
          "message": "Fixed improper cache fetching",
          "timestamp": "2023-03-27T14:48:56+09:00",
          "tree_id": "32e53a21b0e02d9b0181c0b9be199bbd2ccefe6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3f84965e05ffa4207e70fb116348a48e118200e"
        },
        "date": 1679897050291,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135782.96315789473,
            "unit": "ns",
            "range": "± 10570.167908457743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117467.97422680413,
            "unit": "ns",
            "range": "± 21227.01497556278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231834.0652173913,
            "unit": "ns",
            "range": "± 27866.483234592626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221556.06451612903,
            "unit": "ns",
            "range": "± 15623.114488535226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3695216.472222222,
            "unit": "ns",
            "range": "± 109889.98925925513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10566512.466666667,
            "unit": "ns",
            "range": "± 161671.41441952417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21119.47894736842,
            "unit": "ns",
            "range": "± 3680.392590006308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68118.44565217392,
            "unit": "ns",
            "range": "± 13131.867015192705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61741.6686746988,
            "unit": "ns",
            "range": "± 3705.0637920161644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138129.72448979592,
            "unit": "ns",
            "range": "± 27085.052779582988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7937.715909090909,
            "unit": "ns",
            "range": "± 680.7190324379817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23583.144329896906,
            "unit": "ns",
            "range": "± 5891.553654013392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5222321.582386363,
            "unit": "ns",
            "range": "± 191995.59660803454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6562308.94117647,
            "unit": "ns",
            "range": "± 131364.78397932157"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27627690.333333332,
            "unit": "ns",
            "range": "± 489947.7125604712"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7029144.50617284,
            "unit": "ns",
            "range": "± 440941.258950473"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31874844.5,
            "unit": "ns",
            "range": "± 1327369.2355287361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7472049.4228515625,
            "unit": "ns",
            "range": "± 138558.15357387008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2128432.3951322115,
            "unit": "ns",
            "range": "± 34961.104980211945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318291.6965332031,
            "unit": "ns",
            "range": "± 25788.74789614535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560323.848858173,
            "unit": "ns",
            "range": "± 37419.82047210981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892209.191545759,
            "unit": "ns",
            "range": "± 11036.08442849923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742125.9407301683,
            "unit": "ns",
            "range": "± 8335.565521379203"
          }
        ]
      }
    ]
  }
}