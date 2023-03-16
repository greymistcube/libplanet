window.BENCHMARK_DATA = {
  "lastUpdate": 1678932886105,
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
          "id": "60b245f9c0e189779cbc848e3b80f9961312f83d",
          "message": "Release 0.50.4",
          "timestamp": "2023-03-16T10:52:53+09:00",
          "tree_id": "57ef9e014cc1b48431b2c2f83edb7b48977a1b79",
          "url": "https://github.com/greymistcube/libplanet/commit/60b245f9c0e189779cbc848e3b80f9961312f83d"
        },
        "date": 1678932865573,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136671.81318681317,
            "unit": "ns",
            "range": "± 14168.54570904006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 139853.8373493976,
            "unit": "ns",
            "range": "± 27341.90279133223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269085.706185567,
            "unit": "ns",
            "range": "± 54648.106594780984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229403.27647058823,
            "unit": "ns",
            "range": "± 19951.581854804488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3713514.703703704,
            "unit": "ns",
            "range": "± 142353.76515865154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10192634.90425532,
            "unit": "ns",
            "range": "± 390333.8133553215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18234.739583333332,
            "unit": "ns",
            "range": "± 3343.429757299473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58873.80612244898,
            "unit": "ns",
            "range": "± 10329.138672944158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58841.87634408602,
            "unit": "ns",
            "range": "± 9659.63933739582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127036.17582417582,
            "unit": "ns",
            "range": "± 18443.393173343135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6911.613402061856,
            "unit": "ns",
            "range": "± 1315.694191579492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21082.372340425532,
            "unit": "ns",
            "range": "± 3556.155459983549"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5286975.63147096,
            "unit": "ns",
            "range": "± 504205.36341192614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7040641.811111111,
            "unit": "ns",
            "range": "± 639160.9161279366"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30747684.841463413,
            "unit": "ns",
            "range": "± 1620191.350900573"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7631962.445652174,
            "unit": "ns",
            "range": "± 574509.4071060531"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34344943.7368421,
            "unit": "ns",
            "range": "± 2376524.65217241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7371146.159040178,
            "unit": "ns",
            "range": "± 123148.97890611418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2093980.856670673,
            "unit": "ns",
            "range": "± 72282.82819444707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398270.6971309267,
            "unit": "ns",
            "range": "± 60887.197848166164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3004136.8665771484,
            "unit": "ns",
            "range": "± 129723.08595638447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1087222.4504603795,
            "unit": "ns",
            "range": "± 52549.90626815792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836675.5254097733,
            "unit": "ns",
            "range": "± 33581.11479260105"
          }
        ]
      }
    ]
  }
}