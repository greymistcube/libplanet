window.BENCHMARK_DATA = {
  "lastUpdate": 1678783912555,
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
          "id": "eee8f0fcf937af35f9ce1470fba2c1bef7a1b4d9",
          "message": "Prepare 0.48.2",
          "timestamp": "2023-03-14T17:38:33+09:00",
          "tree_id": "2707579eaddea6b47f6fd7f83e96f64d1a52c34d",
          "url": "https://github.com/greymistcube/libplanet/commit/eee8f0fcf937af35f9ce1470fba2c1bef7a1b4d9"
        },
        "date": 1678783897399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 119537.46315789473,
            "unit": "ns",
            "range": "± 8268.327633024253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90659.36559139784,
            "unit": "ns",
            "range": "± 8874.923146984998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221467.0625,
            "unit": "ns",
            "range": "± 27979.449946368062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186021.5760869565,
            "unit": "ns",
            "range": "± 13699.921647512925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3468501.1896551726,
            "unit": "ns",
            "range": "± 96388.09862333459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9542795.842105264,
            "unit": "ns",
            "range": "± 202263.5316438167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17603.96907216495,
            "unit": "ns",
            "range": "± 2189.55351924013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52567.505263157895,
            "unit": "ns",
            "range": "± 7752.832939839288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46265.4606741573,
            "unit": "ns",
            "range": "± 3415.9750506599667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107383.52083333333,
            "unit": "ns",
            "range": "± 18336.839269037315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6484.909090909091,
            "unit": "ns",
            "range": "± 971.2241906079938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17239.67391304348,
            "unit": "ns",
            "range": "± 2298.5148387442223"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4575907.0671875,
            "unit": "ns",
            "range": "± 49748.34363760029"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5559889.913978495,
            "unit": "ns",
            "range": "± 448604.459610135"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25303248.636363637,
            "unit": "ns",
            "range": "± 797581.7070149387"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6483974.594202898,
            "unit": "ns",
            "range": "± 311375.5263605403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28769740.022727273,
            "unit": "ns",
            "range": "± 1080102.5072803837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6135062.280133928,
            "unit": "ns",
            "range": "± 33475.04811301377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888947.738671875,
            "unit": "ns",
            "range": "± 11668.423494575547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228885.1950520833,
            "unit": "ns",
            "range": "± 9168.888767913986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2405068.951302083,
            "unit": "ns",
            "range": "± 12458.897522726844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873725.5359375,
            "unit": "ns",
            "range": "± 5194.144205149324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701577.0044921875,
            "unit": "ns",
            "range": "± 3449.0421626641314"
          }
        ]
      }
    ]
  }
}