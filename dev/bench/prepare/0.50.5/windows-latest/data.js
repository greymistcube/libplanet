window.BENCHMARK_DATA = {
  "lastUpdate": 1678933451975,
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
          "id": "4937d8e65ffb68863c63dd3c8c562d0bcaac1a3e",
          "message": "Prepare 0.50.5",
          "timestamp": "2023-03-16T11:07:23+09:00",
          "tree_id": "b2a0421603bd7351d404dda59b309717695a0463",
          "url": "https://github.com/greymistcube/libplanet/commit/4937d8e65ffb68863c63dd3c8c562d0bcaac1a3e"
        },
        "date": 1678933398321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99937.20930232559,
            "unit": "ns",
            "range": "± 3660.537512950923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4717494.322916667,
            "unit": "ns",
            "range": "± 30695.680259476725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504115.76171875,
            "unit": "ns",
            "range": "± 10020.582197552545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147920,
            "unit": "ns",
            "range": "± 13033.579546305848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626474.5572916665,
            "unit": "ns",
            "range": "± 9855.60458958404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833063.9518229166,
            "unit": "ns",
            "range": "± 1366.6068799923303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751957.4609375,
            "unit": "ns",
            "range": "± 2024.3497900595453"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5148124.039713542,
            "unit": "ns",
            "range": "± 294397.5394745292"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5597592.857142857,
            "unit": "ns",
            "range": "± 81624.64243564717"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24704526.315789472,
            "unit": "ns",
            "range": "± 845217.7373985277"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5780269.230769231,
            "unit": "ns",
            "range": "± 50763.6908399331"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28491111.25,
            "unit": "ns",
            "range": "± 1478231.569875178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88600,
            "unit": "ns",
            "range": "± 10277.3821245166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174852,
            "unit": "ns",
            "range": "± 7879.641232057837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157121.62162162163,
            "unit": "ns",
            "range": "± 7877.31736323794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3384914.285714286,
            "unit": "ns",
            "range": "± 32861.52431369823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8500775.862068966,
            "unit": "ns",
            "range": "± 245462.90330017637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16474.712643678162,
            "unit": "ns",
            "range": "± 929.0177847453525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50489.47368421053,
            "unit": "ns",
            "range": "± 4509.363159363362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39580.281690140844,
            "unit": "ns",
            "range": "± 1952.1138519424715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96770.52631578948,
            "unit": "ns",
            "range": "± 16093.462883804254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5447,
            "unit": "ns",
            "range": "± 975.6070371359008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16993.617021276597,
            "unit": "ns",
            "range": "± 1486.4845235813743"
          }
        ]
      },
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
          "id": "dd2f249e8f51c63631e0fdf8b5c01ccbf209a168",
          "message": "Prepare 0.50.5",
          "timestamp": "2023-03-16T11:07:50+09:00",
          "tree_id": "3a06b1bc37e8395cfacce61859a4355d14f19254",
          "url": "https://github.com/greymistcube/libplanet/commit/dd2f249e8f51c63631e0fdf8b5c01ccbf209a168"
        },
        "date": 1678933429941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94854.43037974683,
            "unit": "ns",
            "range": "± 4940.460828405986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4917283.293269231,
            "unit": "ns",
            "range": "± 6241.800770398455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530460.072544643,
            "unit": "ns",
            "range": "± 2188.7802217181707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141765.5533854167,
            "unit": "ns",
            "range": "± 966.9341839347426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620892.745535714,
            "unit": "ns",
            "range": "± 8381.399833914833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840756.9266183035,
            "unit": "ns",
            "range": "± 2770.047616224744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736927.919921875,
            "unit": "ns",
            "range": "± 4146.600294883776"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4027361.71875,
            "unit": "ns",
            "range": "± 16609.501751943946"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5494180,
            "unit": "ns",
            "range": "± 95859.3627590515"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23259593.75,
            "unit": "ns",
            "range": "± 434988.8756719341"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5674234.285714285,
            "unit": "ns",
            "range": "± 274742.02966678474"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26215500,
            "unit": "ns",
            "range": "± 436538.16292771895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84941.23711340207,
            "unit": "ns",
            "range": "± 7223.785257993778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179783.33333333334,
            "unit": "ns",
            "range": "± 7841.511064498212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150702.5,
            "unit": "ns",
            "range": "± 5356.4477082561025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3370971.4285714286,
            "unit": "ns",
            "range": "± 28926.416688169007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8413200,
            "unit": "ns",
            "range": "± 38719.126658936526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15960.416666666666,
            "unit": "ns",
            "range": "± 1499.9985380109833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44868.47826086957,
            "unit": "ns",
            "range": "± 4189.6767256503545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43008.163265306124,
            "unit": "ns",
            "range": "± 3608.628647469518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92743.15789473684,
            "unit": "ns",
            "range": "± 15482.27986834021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5275.789473684211,
            "unit": "ns",
            "range": "± 973.0097842845928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15059.139784946237,
            "unit": "ns",
            "range": "± 1513.794294159675"
          }
        ]
      }
    ]
  }
}