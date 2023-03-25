window.BENCHMARK_DATA = {
  "lastUpdate": 1679709114828,
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
          "id": "bf8224e710511a3fa9bd6c938e3722c71b63d103",
          "message": "Improved KeyConverters performance",
          "timestamp": "2023-03-25T10:37:43+09:00",
          "tree_id": "adb4e0426a83696735a7801c1ad275c5aa15b795",
          "url": "https://github.com/greymistcube/libplanet/commit/bf8224e710511a3fa9bd6c938e3722c71b63d103"
        },
        "date": 1679709094531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132096.82,
            "unit": "ns",
            "range": "± 10274.909665488034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102916.52577319587,
            "unit": "ns",
            "range": "± 11396.565332455782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218155.84,
            "unit": "ns",
            "range": "± 27362.342633597436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203245.75510204083,
            "unit": "ns",
            "range": "± 17011.616696998324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3763384.076923077,
            "unit": "ns",
            "range": "± 101895.53686395615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9847338.351851853,
            "unit": "ns",
            "range": "± 273232.83356981934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18868.958333333332,
            "unit": "ns",
            "range": "± 3151.1911763370626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57333.57142857143,
            "unit": "ns",
            "range": "± 9524.745941087775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54292.88775510204,
            "unit": "ns",
            "range": "± 5017.064962484207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117606.8829787234,
            "unit": "ns",
            "range": "± 13935.684248747257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7026.846153846154,
            "unit": "ns",
            "range": "± 815.6709020878583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18443.48947368421,
            "unit": "ns",
            "range": "± 2389.3266321721626"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4770514.975060096,
            "unit": "ns",
            "range": "± 126085.13252527994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6221509.466666667,
            "unit": "ns",
            "range": "± 67628.69688851098"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26191242.583333332,
            "unit": "ns",
            "range": "± 1020706.7091850613"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7029921.4,
            "unit": "ns",
            "range": "± 205371.05831092235"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29491634.760869566,
            "unit": "ns",
            "range": "± 1013905.3933428609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6198794.921274038,
            "unit": "ns",
            "range": "± 66242.00309672431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2098672.874441964,
            "unit": "ns",
            "range": "± 18990.517610102208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266306.002704327,
            "unit": "ns",
            "range": "± 6409.654673404406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2686466.756610577,
            "unit": "ns",
            "range": "± 17819.83799254962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786116.6395089285,
            "unit": "ns",
            "range": "± 2374.7804048620337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701816.9445612981,
            "unit": "ns",
            "range": "± 2678.2027947072243"
          }
        ]
      }
    ]
  }
}