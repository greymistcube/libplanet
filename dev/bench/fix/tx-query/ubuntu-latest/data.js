window.BENCHMARK_DATA = {
  "lastUpdate": 1684325946721,
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
          "id": "2e289bc95f74b8b004fc76d3d6bc676d93d27fc6",
          "message": "Fixed query for tx with actions",
          "timestamp": "2023-05-17T21:00:17+09:00",
          "tree_id": "f8c4460246e746dd9f69f8fa5995fb6dfd4e4db9",
          "url": "https://github.com/greymistcube/libplanet/commit/2e289bc95f74b8b004fc76d3d6bc676d93d27fc6"
        },
        "date": 1684325938024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3881153.10989011,
            "unit": "ns",
            "range": "± 282486.19472975825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4111459.06185567,
            "unit": "ns",
            "range": "± 353019.20164132054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5600401.546391753,
            "unit": "ns",
            "range": "± 392775.60284250363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5574221.096774193,
            "unit": "ns",
            "range": "± 394533.9984066801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9175720.54736842,
            "unit": "ns",
            "range": "± 552728.4317923718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370119.306122449,
            "unit": "ns",
            "range": "± 51443.451477979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344852.44680851063,
            "unit": "ns",
            "range": "± 40852.0448291508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296820.0416666667,
            "unit": "ns",
            "range": "± 46329.31187418055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4913665.723404256,
            "unit": "ns",
            "range": "± 498565.4935897332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4821455.770833333,
            "unit": "ns",
            "range": "± 375501.6964327081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26854.28,
            "unit": "ns",
            "range": "± 10101.521135657806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114809.69892473119,
            "unit": "ns",
            "range": "± 21296.784912886727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123457.35416666667,
            "unit": "ns",
            "range": "± 22877.172706240173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138753.51086956522,
            "unit": "ns",
            "range": "± 25393.609075493805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7440.528089887641,
            "unit": "ns",
            "range": "± 1435.29068238876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28752.855670103094,
            "unit": "ns",
            "range": "± 10057.773753410107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7238106.991875,
            "unit": "ns",
            "range": "± 172793.06418083198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2257702.416015625,
            "unit": "ns",
            "range": "± 47778.513694879395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1669137.3934895834,
            "unit": "ns",
            "range": "± 28436.355522613776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3217951.4103515623,
            "unit": "ns",
            "range": "± 73050.09860384514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998729.0369591346,
            "unit": "ns",
            "range": "± 12239.031665462171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 972236.2922044836,
            "unit": "ns",
            "range": "± 24451.7735899332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9494688.867346939,
            "unit": "ns",
            "range": "± 816128.7458843839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26557006.166666668,
            "unit": "ns",
            "range": "± 1299345.3077694364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68045857.2195122,
            "unit": "ns",
            "range": "± 2397573.2417395874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138443397.75675675,
            "unit": "ns",
            "range": "± 4607301.041931638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274924814.7741935,
            "unit": "ns",
            "range": "± 8223426.405262378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1754550.6595744682,
            "unit": "ns",
            "range": "± 164555.77656645252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3491561.852631579,
            "unit": "ns",
            "range": "± 446517.91257543385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2742725.585106383,
            "unit": "ns",
            "range": "± 252369.8175859673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7196927.041666667,
            "unit": "ns",
            "range": "± 539208.3471330894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74204.85714285714,
            "unit": "ns",
            "range": "± 19578.84378292775"
          }
        ]
      }
    ]
  }
}