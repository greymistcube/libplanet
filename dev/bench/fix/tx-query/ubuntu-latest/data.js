window.BENCHMARK_DATA = {
  "lastUpdate": 1684325975017,
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
          "id": "cd8bfc7fd4a7d74935c7159b256d52d003f22b6b",
          "message": "Fixed query for tx with actions",
          "timestamp": "2023-05-17T20:59:49+09:00",
          "tree_id": "c362b588cc0c9a394907ff671fcfbf267622fb61",
          "url": "https://github.com/greymistcube/libplanet/commit/cd8bfc7fd4a7d74935c7159b256d52d003f22b6b"
        },
        "date": 1684325964862,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4444852.782608695,
            "unit": "ns",
            "range": "± 312152.9767077205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4644658.914893617,
            "unit": "ns",
            "range": "± 414516.74291164486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6134329.212765957,
            "unit": "ns",
            "range": "± 480997.0378918221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5797635.463157895,
            "unit": "ns",
            "range": "± 369163.92686112755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9743687.238636363,
            "unit": "ns",
            "range": "± 535214.5010296681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380393.47826086957,
            "unit": "ns",
            "range": "± 39569.71999764252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359492.0888888889,
            "unit": "ns",
            "range": "± 33645.40479121991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348006.29347826086,
            "unit": "ns",
            "range": "± 40374.274604727936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5656012.68,
            "unit": "ns",
            "range": "± 283472.9714590832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5046881.108695652,
            "unit": "ns",
            "range": "± 191255.203551256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24095.908163265307,
            "unit": "ns",
            "range": "± 4889.691409921752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128364.67391304347,
            "unit": "ns",
            "range": "± 21032.937967930884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127326.31521739131,
            "unit": "ns",
            "range": "± 20987.85821464419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142973.1739130435,
            "unit": "ns",
            "range": "± 26259.49218753942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8660.225806451614,
            "unit": "ns",
            "range": "± 1929.337789800655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24121.157894736843,
            "unit": "ns",
            "range": "± 5341.444623535229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7930663.879849138,
            "unit": "ns",
            "range": "± 230898.79371528287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2546437.9859375,
            "unit": "ns",
            "range": "± 46137.28132650701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1795601.514453125,
            "unit": "ns",
            "range": "± 23952.349645669994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3447895.3743489585,
            "unit": "ns",
            "range": "± 40634.46609730344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1118512.7333984375,
            "unit": "ns",
            "range": "± 34202.27345390355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1031706.5834418403,
            "unit": "ns",
            "range": "± 21034.75692658196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10501326.41935484,
            "unit": "ns",
            "range": "± 320204.2606495396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29019909.81443299,
            "unit": "ns",
            "range": "± 1680602.5173812932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72856124.11764705,
            "unit": "ns",
            "range": "± 1408838.9715067635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147911529.57142857,
            "unit": "ns",
            "range": "± 3423137.228774323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297413445.5833333,
            "unit": "ns",
            "range": "± 7562307.599926965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1865087.1489361702,
            "unit": "ns",
            "range": "± 167160.1779524533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3665992.301075269,
            "unit": "ns",
            "range": "± 212336.76172388665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3016061.25,
            "unit": "ns",
            "range": "± 292934.5729263753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7995579.697916667,
            "unit": "ns",
            "range": "± 636611.1287221476"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74697.14893617021,
            "unit": "ns",
            "range": "± 14826.007615910692"
          }
        ]
      }
    ]
  }
}