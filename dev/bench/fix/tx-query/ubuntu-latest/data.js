window.BENCHMARK_DATA = {
  "lastUpdate": 1684327897152,
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
          "id": "c63c28f54d7afa66f9ae914b8604cef9c8731acd",
          "message": "Fixed query for tx with actions",
          "timestamp": "2023-05-17T21:35:12+09:00",
          "tree_id": "5e27980423481959547c0c54d9ebbfc36d8980e6",
          "url": "https://github.com/greymistcube/libplanet/commit/c63c28f54d7afa66f9ae914b8604cef9c8731acd"
        },
        "date": 1684327738702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3570376.3684210526,
            "unit": "ns",
            "range": "± 78801.90232349197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3728939.304347826,
            "unit": "ns",
            "range": "± 143619.16325242788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4662960.928571428,
            "unit": "ns",
            "range": "± 42982.76374846136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4730786.458333333,
            "unit": "ns",
            "range": "± 185555.4775021801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7351015.090909091,
            "unit": "ns",
            "range": "± 177412.61273972096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291107.30188679247,
            "unit": "ns",
            "range": "± 11349.98275767058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280687.4772727273,
            "unit": "ns",
            "range": "± 10322.150054308333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256049.50515463916,
            "unit": "ns",
            "range": "± 15096.151216261846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4416667.714285715,
            "unit": "ns",
            "range": "± 46888.06144495562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4030546.1333333333,
            "unit": "ns",
            "range": "± 62666.09632906625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21803.44210526316,
            "unit": "ns",
            "range": "± 2176.1265153878903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97729.7,
            "unit": "ns",
            "range": "± 4538.776172117295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82959.59595959596,
            "unit": "ns",
            "range": "± 5617.624495989625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107362.92929292929,
            "unit": "ns",
            "range": "± 14871.2889874419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5832.726315789474,
            "unit": "ns",
            "range": "± 913.7906953665099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20219.886597938144,
            "unit": "ns",
            "range": "± 2202.928608865029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5993350.883854167,
            "unit": "ns",
            "range": "± 32641.623850978456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871839.087611607,
            "unit": "ns",
            "range": "± 1350.3619570027993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360796.46640625,
            "unit": "ns",
            "range": "± 2701.5565160557403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614017.0744977677,
            "unit": "ns",
            "range": "± 2139.174333929588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833000.1632254465,
            "unit": "ns",
            "range": "± 2238.7439495075478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750384.6247907366,
            "unit": "ns",
            "range": "± 1003.6394431352046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8685875.466666667,
            "unit": "ns",
            "range": "± 143725.43086726492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22748147.333333332,
            "unit": "ns",
            "range": "± 320547.1418640917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56224674,
            "unit": "ns",
            "range": "± 394027.67325073073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112524111.2,
            "unit": "ns",
            "range": "± 762937.4447774863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226133981.33333334,
            "unit": "ns",
            "range": "± 1231816.4160467412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1452859.1666666667,
            "unit": "ns",
            "range": "± 94974.92206745576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2775001.8,
            "unit": "ns",
            "range": "± 87661.4607123537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2386896.3373493976,
            "unit": "ns",
            "range": "± 116982.55124009267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5745195,
            "unit": "ns",
            "range": "± 149742.2424298699"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50090.426966292136,
            "unit": "ns",
            "range": "± 2794.1901855279857"
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
          "id": "14af2c4ed0639e69039b0c40790780d0adcac6b8",
          "message": "Changelog",
          "timestamp": "2023-05-17T21:37:43+09:00",
          "tree_id": "167fa81d6a573d9aa9ff1c65d7b794d44324b59d",
          "url": "https://github.com/greymistcube/libplanet/commit/14af2c4ed0639e69039b0c40790780d0adcac6b8"
        },
        "date": 1684327890014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3640121.785714286,
            "unit": "ns",
            "range": "± 55852.763077685675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3877745.846153846,
            "unit": "ns",
            "range": "± 48269.18335896129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4677685.947368421,
            "unit": "ns",
            "range": "± 101107.93283938027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4752005.866666666,
            "unit": "ns",
            "range": "± 71915.87365890655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7407968.153846154,
            "unit": "ns",
            "range": "± 176355.13932759484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303466.09523809527,
            "unit": "ns",
            "range": "± 13950.291877758487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294262,
            "unit": "ns",
            "range": "± 12582.018674623378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274943.44,
            "unit": "ns",
            "range": "± 18865.485589072847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4543429.066666666,
            "unit": "ns",
            "range": "± 64582.06658803164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4115385.214285714,
            "unit": "ns",
            "range": "± 49770.527320089546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24339.263157894737,
            "unit": "ns",
            "range": "± 2903.53119278199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99513.74736842106,
            "unit": "ns",
            "range": "± 7098.363010220032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89454.37373737374,
            "unit": "ns",
            "range": "± 10386.632507636486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110089.25510204081,
            "unit": "ns",
            "range": "± 14975.025026439838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6579.208333333333,
            "unit": "ns",
            "range": "± 1027.180626935145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22029.791666666668,
            "unit": "ns",
            "range": "± 2074.8018594893233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6025313.019791666,
            "unit": "ns",
            "range": "± 44014.05906933866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852015.9075055805,
            "unit": "ns",
            "range": "± 1484.0813006969006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377364.1813802083,
            "unit": "ns",
            "range": "± 3158.93448823858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644086.6102764425,
            "unit": "ns",
            "range": "± 2712.643842048846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827476.1254557292,
            "unit": "ns",
            "range": "± 467.2968331154048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752257.8865309495,
            "unit": "ns",
            "range": "± 231.25168514956863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8580882.470588235,
            "unit": "ns",
            "range": "± 169032.8826789767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22404384.384615384,
            "unit": "ns",
            "range": "± 226873.13438481372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56321981.166666664,
            "unit": "ns",
            "range": "± 194087.38933500752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111676355.86666666,
            "unit": "ns",
            "range": "± 534046.3111340046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224100786.53333333,
            "unit": "ns",
            "range": "± 893848.7009518258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511724.7731958763,
            "unit": "ns",
            "range": "± 106525.62494707407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2892476.9411764704,
            "unit": "ns",
            "range": "± 80460.56639385954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2411942.777777778,
            "unit": "ns",
            "range": "± 125917.27781504014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5766782.705882353,
            "unit": "ns",
            "range": "± 185818.69842770242"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51846.26136363636,
            "unit": "ns",
            "range": "± 2854.773862229211"
          }
        ]
      }
    ]
  }
}