window.BENCHMARK_DATA = {
  "lastUpdate": 1694076112111,
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
          "id": "700d014b7cabf220e7891ba1c4c5dfa924e3d8b1",
          "message": "Remove trie mutation from Account",
          "timestamp": "2023-09-07T12:47:30+09:00",
          "tree_id": "4a7a764a6352819fe691068027abef975c3a4ed5",
          "url": "https://github.com/greymistcube/libplanet/commit/700d014b7cabf220e7891ba1c4c5dfa924e3d8b1"
        },
        "date": 1694059318259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466144.5555555555,
            "unit": "ns",
            "range": "± 81628.32886783428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2807958.2,
            "unit": "ns",
            "range": "± 125210.95112361918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1867100.4444444445,
            "unit": "ns",
            "range": "± 116214.40939902299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4854427.416666667,
            "unit": "ns",
            "range": "± 211411.82595221716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284216.17142857146,
            "unit": "ns",
            "range": "± 9345.952318220641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274728.6060606061,
            "unit": "ns",
            "range": "± 8706.699345688476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241385.6,
            "unit": "ns",
            "range": "± 10767.644328248449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4440186.2,
            "unit": "ns",
            "range": "± 76847.34497244707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4056379.6666666665,
            "unit": "ns",
            "range": "± 51920.130012585774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22708.893617021276,
            "unit": "ns",
            "range": "± 1876.784601432427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92279.33333333333,
            "unit": "ns",
            "range": "± 6421.550518890797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74188.625,
            "unit": "ns",
            "range": "± 1851.3417886706552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95562.78571428571,
            "unit": "ns",
            "range": "± 17275.851850481755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6047.061224489796,
            "unit": "ns",
            "range": "± 801.4623595270656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22468.715789473685,
            "unit": "ns",
            "range": "± 1630.314064921221"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48431.20224719101,
            "unit": "ns",
            "range": "± 2480.141189986494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8060107.571428572,
            "unit": "ns",
            "range": "± 114462.19205465201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22936918.92857143,
            "unit": "ns",
            "range": "± 362912.4859088386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59629832.4,
            "unit": "ns",
            "range": "± 588267.7221985629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113250374.93333334,
            "unit": "ns",
            "range": "± 1522888.766574212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226543077.26666668,
            "unit": "ns",
            "range": "± 2805974.5897105103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3674758.380952381,
            "unit": "ns",
            "range": "± 86770.87300325852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3977911.066666667,
            "unit": "ns",
            "range": "± 71996.68899873766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4500491.09375,
            "unit": "ns",
            "range": "± 139619.4418810807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4160683.4545454546,
            "unit": "ns",
            "range": "± 100736.25362619305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6378343.476190476,
            "unit": "ns",
            "range": "± 143527.80247834182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5137023.427455357,
            "unit": "ns",
            "range": "± 37153.479147838865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1573052.7667410714,
            "unit": "ns",
            "range": "± 1379.0177484151466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1095541.8299479166,
            "unit": "ns",
            "range": "± 1032.1961658247728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663090.3309895834,
            "unit": "ns",
            "range": "± 14113.445707163846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819915.6898716518,
            "unit": "ns",
            "range": "± 533.8387689134762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760006.2036132812,
            "unit": "ns",
            "range": "± 478.6632427660298"
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
          "id": "3787a062904e21e3fbfdca5f536883fbc3f50491",
          "message": "Fix missing cache",
          "timestamp": "2023-09-07T16:48:07+09:00",
          "tree_id": "7b0626d9210cc030c78b78a4a1ed5e1e8cf4259a",
          "url": "https://github.com/greymistcube/libplanet/commit/3787a062904e21e3fbfdca5f536883fbc3f50491"
        },
        "date": 1694073911195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713566.878787879,
            "unit": "ns",
            "range": "± 121884.60471217151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3319375.8536585364,
            "unit": "ns",
            "range": "± 174994.5291166091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050724.3695652173,
            "unit": "ns",
            "range": "± 97226.63365377054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5534345.826086956,
            "unit": "ns",
            "range": "± 208902.09537168415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331413.2916666667,
            "unit": "ns",
            "range": "± 7348.8799825679835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319848.5625,
            "unit": "ns",
            "range": "± 7584.300596914315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295813.9285714286,
            "unit": "ns",
            "range": "± 10689.621450307353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5332466.066666666,
            "unit": "ns",
            "range": "± 92810.57187431879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4869557.642857143,
            "unit": "ns",
            "range": "± 48893.77679860565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26151.40206185567,
            "unit": "ns",
            "range": "± 2059.8241362016897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106511.28260869565,
            "unit": "ns",
            "range": "± 7445.772543960599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93028.75789473685,
            "unit": "ns",
            "range": "± 6079.432923785246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101960.75,
            "unit": "ns",
            "range": "± 13683.077720116073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7723.80412371134,
            "unit": "ns",
            "range": "± 1174.3581814404629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24267.021505376346,
            "unit": "ns",
            "range": "± 2403.9751679724445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56363.96842105263,
            "unit": "ns",
            "range": "± 3584.5394091274693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9840884.629629629,
            "unit": "ns",
            "range": "± 272378.22681071603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26653103.64285714,
            "unit": "ns",
            "range": "± 430362.4832901119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68380128.5,
            "unit": "ns",
            "range": "± 446929.57625881577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136071669.93333334,
            "unit": "ns",
            "range": "± 652236.2979126361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273009126.46666664,
            "unit": "ns",
            "range": "± 1041369.9541352703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4450287.631578947,
            "unit": "ns",
            "range": "± 92236.66905918981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4621862.266666667,
            "unit": "ns",
            "range": "± 53444.56281909142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5492782.071428572,
            "unit": "ns",
            "range": "± 75886.4086437134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4932779.722222222,
            "unit": "ns",
            "range": "± 104852.54033378357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7713545.631578947,
            "unit": "ns",
            "range": "± 165407.45980027306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6214258.15625,
            "unit": "ns",
            "range": "± 39960.16907545531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918406.5087239584,
            "unit": "ns",
            "range": "± 1280.7342074395117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1324746.9174107143,
            "unit": "ns",
            "range": "± 762.0827995844168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3236940.50390625,
            "unit": "ns",
            "range": "± 3035.2000321102346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994737.3322916667,
            "unit": "ns",
            "range": "± 697.8714578564043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908668.7629557292,
            "unit": "ns",
            "range": "± 1039.711046208109"
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
          "id": "6b2bab45b54bffcbce6bb538e366f3fbff284ea0",
          "message": "Fix missing cache",
          "timestamp": "2023-09-07T17:25:06+09:00",
          "tree_id": "06efea84a2ad5989f267adf4b006096d1670cc71",
          "url": "https://github.com/greymistcube/libplanet/commit/6b2bab45b54bffcbce6bb538e366f3fbff284ea0"
        },
        "date": 1694075954443,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1451122.065934066,
            "unit": "ns",
            "range": "± 77804.25829488915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773500.2926829266,
            "unit": "ns",
            "range": "± 99656.3016038735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1818170.2,
            "unit": "ns",
            "range": "± 94874.60973978206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4769637.409090909,
            "unit": "ns",
            "range": "± 176942.62480294096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278166.0294117647,
            "unit": "ns",
            "range": "± 8670.871105395436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277340.3939393939,
            "unit": "ns",
            "range": "± 8653.977936256373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242338.24590163934,
            "unit": "ns",
            "range": "± 10926.83369150725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4498577.6,
            "unit": "ns",
            "range": "± 59492.32949212865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4023703.1333333333,
            "unit": "ns",
            "range": "± 59507.33128767373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21742.8064516129,
            "unit": "ns",
            "range": "± 1501.2596830811387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90343.29896907216,
            "unit": "ns",
            "range": "± 6025.986477272394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80138.12328767123,
            "unit": "ns",
            "range": "± 3959.8306043497114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85908.54166666667,
            "unit": "ns",
            "range": "± 11215.31648371211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5691.948979591837,
            "unit": "ns",
            "range": "± 677.7940168877599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19707.536842105263,
            "unit": "ns",
            "range": "± 1639.6653123104657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50226.16455696202,
            "unit": "ns",
            "range": "± 2394.5627159836445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8669428.38095238,
            "unit": "ns",
            "range": "± 195992.94832530996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23047927.733333334,
            "unit": "ns",
            "range": "± 306036.16752050415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57367989.2,
            "unit": "ns",
            "range": "± 399231.4157242281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116214447.66666667,
            "unit": "ns",
            "range": "± 1067676.5312098889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229786575.2,
            "unit": "ns",
            "range": "± 877235.2828887389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3620441.8666666667,
            "unit": "ns",
            "range": "± 106285.64652720398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3765965.566666667,
            "unit": "ns",
            "range": "± 112595.04763216057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4471620.814814814,
            "unit": "ns",
            "range": "± 121249.3073062012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4199133.46875,
            "unit": "ns",
            "range": "± 129761.9641562057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6435492,
            "unit": "ns",
            "range": "± 166679.70619724525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5173905.734933035,
            "unit": "ns",
            "range": "± 25108.028951597556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588864.1627604167,
            "unit": "ns",
            "range": "± 1376.4443363638854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078833.244140625,
            "unit": "ns",
            "range": "± 737.5696725920701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623851.736886161,
            "unit": "ns",
            "range": "± 953.2328814958372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818150.2627650669,
            "unit": "ns",
            "range": "± 353.3276454038675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756848.9741536458,
            "unit": "ns",
            "range": "± 307.3956057412315"
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
          "id": "0cd7ebc01ea63ac8370f2222972e0ee008b5ad5d",
          "message": "Changelog",
          "timestamp": "2023-09-07T17:27:55+09:00",
          "tree_id": "70b153b18ef978ccdd991c9c4cfc4d233f0bc59d",
          "url": "https://github.com/greymistcube/libplanet/commit/0cd7ebc01ea63ac8370f2222972e0ee008b5ad5d"
        },
        "date": 1694076104987,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415825.2340425532,
            "unit": "ns",
            "range": "± 90061.48226227441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2697113.875,
            "unit": "ns",
            "range": "± 69871.59727442438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1787665.8666666667,
            "unit": "ns",
            "range": "± 78926.08859000624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4833586.391891892,
            "unit": "ns",
            "range": "± 240132.64250722312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278300.38095238095,
            "unit": "ns",
            "range": "± 10043.126772252293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267444.5882352941,
            "unit": "ns",
            "range": "± 7606.201258373835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226573.53333333333,
            "unit": "ns",
            "range": "± 4084.352507989952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4343979.533333333,
            "unit": "ns",
            "range": "± 73540.35528088028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4104411,
            "unit": "ns",
            "range": "± 68018.28723533526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21290.457446808512,
            "unit": "ns",
            "range": "± 1678.340332698736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89843.70512820513,
            "unit": "ns",
            "range": "± 4593.849951778343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73223.5,
            "unit": "ns",
            "range": "± 2194.00466396889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84188.7052631579,
            "unit": "ns",
            "range": "± 10632.772755278726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5751.556701030928,
            "unit": "ns",
            "range": "± 675.6383242453046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19607.67391304348,
            "unit": "ns",
            "range": "± 1982.9935972626133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48087.5125,
            "unit": "ns",
            "range": "± 2369.617631889322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7989645.2,
            "unit": "ns",
            "range": "± 75995.78837503337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22242538.933333334,
            "unit": "ns",
            "range": "± 313814.3755524153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56345872.666666664,
            "unit": "ns",
            "range": "± 755075.8784595914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111627358.73333333,
            "unit": "ns",
            "range": "± 2009462.4997280268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226601969.93333334,
            "unit": "ns",
            "range": "± 2102388.382615301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594309.4583333335,
            "unit": "ns",
            "range": "± 92375.56167410775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3878056.8666666667,
            "unit": "ns",
            "range": "± 68572.78825230339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476614,
            "unit": "ns",
            "range": "± 61016.17548209277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4093443.9655172415,
            "unit": "ns",
            "range": "± 109741.37740338247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6238713.952380952,
            "unit": "ns",
            "range": "± 145728.86596157818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5038951.390024038,
            "unit": "ns",
            "range": "± 16679.403161949518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1584643.256640625,
            "unit": "ns",
            "range": "± 5935.075830587042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074252.4638020834,
            "unit": "ns",
            "range": "± 2001.3598396348193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614815.529747596,
            "unit": "ns",
            "range": "± 4492.32735241784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813534.0625651042,
            "unit": "ns",
            "range": "± 1108.5154498044192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760642.7016977164,
            "unit": "ns",
            "range": "± 461.80546507325795"
          }
        ]
      }
    ]
  }
}