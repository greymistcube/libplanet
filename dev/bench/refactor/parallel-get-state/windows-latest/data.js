window.BENCHMARK_DATA = {
  "lastUpdate": 1680060880116,
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
          "id": "8e3f12002927a9d888c0466473dcbbb5903b6811",
          "message": "[skip changelog] Parallel get states",
          "timestamp": "2023-03-29T12:16:03+09:00",
          "tree_id": "463e60baa8a77caf695b11642322bf26c5c77d20",
          "url": "https://github.com/greymistcube/libplanet/commit/8e3f12002927a9d888c0466473dcbbb5903b6811"
        },
        "date": 1680060856922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111550,
            "unit": "ns",
            "range": "± 10545.22091805223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5625483.59375,
            "unit": "ns",
            "range": "± 72868.46228245905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1750212.4441964286,
            "unit": "ns",
            "range": "± 30314.115516145383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266567.9236778845,
            "unit": "ns",
            "range": "± 15800.158752004785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2905086.2268518517,
            "unit": "ns",
            "range": "± 73062.9651125635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 940512.8092447916,
            "unit": "ns",
            "range": "± 13669.223407003858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867704.2179987981,
            "unit": "ns",
            "range": "± 7046.327320295726"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5112336.389802632,
            "unit": "ns",
            "range": "± 112295.33327258535"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5584724.2105263155,
            "unit": "ns",
            "range": "± 399326.9967896756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28429221.42857143,
            "unit": "ns",
            "range": "± 1807834.9935109913"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6913660.824742268,
            "unit": "ns",
            "range": "± 538529.6333065736"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33461076.767676767,
            "unit": "ns",
            "range": "± 2506054.372092378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92554.16666666667,
            "unit": "ns",
            "range": "± 13542.835873950919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200255.6701030928,
            "unit": "ns",
            "range": "± 28966.402841165844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183432.60869565216,
            "unit": "ns",
            "range": "± 20061.504926926853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4134052.1276595746,
            "unit": "ns",
            "range": "± 383534.841396863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10203666.666666666,
            "unit": "ns",
            "range": "± 1019011.7099339224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20584.848484848484,
            "unit": "ns",
            "range": "± 7219.12657440061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58364.28571428572,
            "unit": "ns",
            "range": "± 10802.140395005152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43154.08163265306,
            "unit": "ns",
            "range": "± 9497.760651613056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111888.42105263157,
            "unit": "ns",
            "range": "± 22666.593016370258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5274.025974025974,
            "unit": "ns",
            "range": "± 1053.2409377728743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19938.383838383837,
            "unit": "ns",
            "range": "± 6731.948001283212"
          }
        ]
      }
    ]
  }
}