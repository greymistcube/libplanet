window.BENCHMARK_DATA = {
  "lastUpdate": 1694143318442,
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
          "id": "3d2009bc9b8484ac33f00f7d05eb3b419a512285",
          "message": "Bug fix for trie value resolution",
          "timestamp": "2023-09-08T11:58:58+09:00",
          "tree_id": "21775bbb67c59255d5b850b82f213bed62184d45",
          "url": "https://github.com/greymistcube/libplanet/commit/3d2009bc9b8484ac33f00f7d05eb3b419a512285"
        },
        "date": 1694143234641,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653155.9894736842,
            "unit": "ns",
            "range": "± 202687.2849347043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3478968.9444444445,
            "unit": "ns",
            "range": "± 338800.26460532367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202496.053763441,
            "unit": "ns",
            "range": "± 236383.9384651389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6552916.989361702,
            "unit": "ns",
            "range": "± 552362.6493026427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340391.59550561797,
            "unit": "ns",
            "range": "± 30405.863623993457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344674.39784946234,
            "unit": "ns",
            "range": "± 35755.00124827166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302535.8125,
            "unit": "ns",
            "range": "± 46754.186047164745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5082065.610526316,
            "unit": "ns",
            "range": "± 377638.39463367016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4596427.822916667,
            "unit": "ns",
            "range": "± 283557.71343726193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23685.18085106383,
            "unit": "ns",
            "range": "± 6940.847895219691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113642.69791666667,
            "unit": "ns",
            "range": "± 23700.88464132656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127315.82474226804,
            "unit": "ns",
            "range": "± 27754.814999687558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118596.01063829787,
            "unit": "ns",
            "range": "± 20899.044051037297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6979.559139784947,
            "unit": "ns",
            "range": "± 1153.8044203790382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20876.896551724138,
            "unit": "ns",
            "range": "± 2692.5832069563457"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66739.04210526316,
            "unit": "ns",
            "range": "± 16343.571318564886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10931882.329896906,
            "unit": "ns",
            "range": "± 871690.3851817735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29705884.14285714,
            "unit": "ns",
            "range": "± 950306.1764265038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72594843.92307693,
            "unit": "ns",
            "range": "± 2536877.3382324553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145648247.0952381,
            "unit": "ns",
            "range": "± 5200722.564745923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288031983.45,
            "unit": "ns",
            "range": "± 12877432.035539744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3975734.3033707864,
            "unit": "ns",
            "range": "± 360501.7214545459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4389905.580645162,
            "unit": "ns",
            "range": "± 301792.79837318853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5671063.139784946,
            "unit": "ns",
            "range": "± 353649.58333637426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4813570.30927835,
            "unit": "ns",
            "range": "± 358840.6457127581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8512062.574468086,
            "unit": "ns",
            "range": "± 655556.1172252544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6091179.429129465,
            "unit": "ns",
            "range": "± 58625.80792467263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046431.465122768,
            "unit": "ns",
            "range": "± 18619.48630132795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387465.6821001838,
            "unit": "ns",
            "range": "± 26787.351438920363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3285891.60546875,
            "unit": "ns",
            "range": "± 60431.65674999179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1089882.8489583333,
            "unit": "ns",
            "range": "± 22808.556667482902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982681.2181919643,
            "unit": "ns",
            "range": "± 16780.920445435346"
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
          "id": "a3658ff45129453a2361cbb951adbc69bdefd8f6",
          "message": "Changelog",
          "timestamp": "2023-09-08T12:04:22+09:00",
          "tree_id": "4be2bac805b5852cf01c6cd193c2121c3865b21c",
          "url": "https://github.com/greymistcube/libplanet/commit/a3658ff45129453a2361cbb951adbc69bdefd8f6"
        },
        "date": 1694143309823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1714516.5353535353,
            "unit": "ns",
            "range": "± 112277.62224625038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3258961.75,
            "unit": "ns",
            "range": "± 205537.39767103532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2059619.3295454546,
            "unit": "ns",
            "range": "± 135572.37085148453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5695088.58,
            "unit": "ns",
            "range": "± 365822.6192132521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313482.0333333333,
            "unit": "ns",
            "range": "± 20672.951290667042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313552.50980392157,
            "unit": "ns",
            "range": "± 12728.329567343155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274702.9387755102,
            "unit": "ns",
            "range": "± 17995.6411370742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5097360.794871795,
            "unit": "ns",
            "range": "± 260245.29407600072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4816320.02631579,
            "unit": "ns",
            "range": "± 165621.90308480256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23168.301075268817,
            "unit": "ns",
            "range": "± 2022.974627411576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98989,
            "unit": "ns",
            "range": "± 5904.158001319533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89749.9014084507,
            "unit": "ns",
            "range": "± 4422.462113719426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98785.10416666667,
            "unit": "ns",
            "range": "± 12110.266132482859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6200.425531914893,
            "unit": "ns",
            "range": "± 881.2224096419077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22825.873684210525,
            "unit": "ns",
            "range": "± 2031.3429330209494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54570.1976744186,
            "unit": "ns",
            "range": "± 2973.4577844252694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9468640.219178082,
            "unit": "ns",
            "range": "± 465452.0293676068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26075941.23255814,
            "unit": "ns",
            "range": "± 965212.8217941623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65233381.62068965,
            "unit": "ns",
            "range": "± 1911698.204863534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128661162.42857143,
            "unit": "ns",
            "range": "± 4219836.424783544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255671495.14285713,
            "unit": "ns",
            "range": "± 7244323.945751409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4085919.8035714286,
            "unit": "ns",
            "range": "± 175261.27454096737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4452866.755555555,
            "unit": "ns",
            "range": "± 168634.65801227267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5236574.322033898,
            "unit": "ns",
            "range": "± 230823.54174552084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4585945.66,
            "unit": "ns",
            "range": "± 276637.1834242341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7250458.317460317,
            "unit": "ns",
            "range": "± 329833.9547701494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5915217.002790178,
            "unit": "ns",
            "range": "± 52500.20528120564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1789129.0350260416,
            "unit": "ns",
            "range": "± 23028.86551404877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1225711.0477864584,
            "unit": "ns",
            "range": "± 12193.5581394293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3007364.5818256577,
            "unit": "ns",
            "range": "± 65208.6819695374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952102.1358072917,
            "unit": "ns",
            "range": "± 14349.074617102846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 877868.3182291667,
            "unit": "ns",
            "range": "± 10044.689905062962"
          }
        ]
      }
    ]
  }
}