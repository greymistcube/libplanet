window.BENCHMARK_DATA = {
  "lastUpdate": 1679470529363,
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
          "id": "f6ac8a5d544ba18c52622609a2147ec901799f70",
          "message": "Added additional metrics to measure evaluation duration",
          "timestamp": "2023-03-22T16:18:52+09:00",
          "tree_id": "31f691be0aaf62e39e260347c1ac0ce65a4cae9f",
          "url": "https://github.com/greymistcube/libplanet/commit/f6ac8a5d544ba18c52622609a2147ec901799f70"
        },
        "date": 1679470499293,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136132.47590361445,
            "unit": "ns",
            "range": "± 7295.182713865402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120624.03125,
            "unit": "ns",
            "range": "± 13051.299612604123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245073.9693877551,
            "unit": "ns",
            "range": "± 26283.01444426426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204794.0612244898,
            "unit": "ns",
            "range": "± 15789.32365233783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3695753.933333333,
            "unit": "ns",
            "range": "± 34854.47637261997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10094835.866666667,
            "unit": "ns",
            "range": "± 300342.64507179626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19942.22105263158,
            "unit": "ns",
            "range": "± 3770.490574715731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55791.365979381444,
            "unit": "ns",
            "range": "± 8081.117522282096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54391.545454545456,
            "unit": "ns",
            "range": "± 8516.41496898391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118299.77659574468,
            "unit": "ns",
            "range": "± 14605.26227389768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7117.5268817204305,
            "unit": "ns",
            "range": "± 937.17487801739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17948.32222222222,
            "unit": "ns",
            "range": "± 2508.167811652708"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4954030.475757088,
            "unit": "ns",
            "range": "± 321018.5926998638"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6666939.75,
            "unit": "ns",
            "range": "± 125805.59968379786"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27102897.782608695,
            "unit": "ns",
            "range": "± 652106.2392151058"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7033711.491803279,
            "unit": "ns",
            "range": "± 316342.15545242693"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30673682.15,
            "unit": "ns",
            "range": "± 700271.9028966929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6784247.588541667,
            "unit": "ns",
            "range": "± 159207.46914115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963285.6911458333,
            "unit": "ns",
            "range": "± 6786.846437217861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293031.2046274038,
            "unit": "ns",
            "range": "± 3757.679729192601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2714564.4685546877,
            "unit": "ns",
            "range": "± 50114.39842500217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 768768.0468052456,
            "unit": "ns",
            "range": "± 12700.663194925699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737250.363125,
            "unit": "ns",
            "range": "± 29503.458663212386"
          }
        ]
      }
    ]
  }
}