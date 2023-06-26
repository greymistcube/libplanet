window.BENCHMARK_DATA = {
  "lastUpdate": 1687766023377,
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
          "id": "c341e18640c1f491a1d2a900f7f05d818ccd5940",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:14:05+09:00",
          "tree_id": "982f1fe962e5e5d45c8dd58eddd405b285026528",
          "url": "https://github.com/greymistcube/libplanet/commit/c341e18640c1f491a1d2a900f7f05d818ccd5940"
        },
        "date": 1687761210785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4169499.63,
            "unit": "ns",
            "range": "± 339539.0134946533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4454405.666666667,
            "unit": "ns",
            "range": "± 285839.00491189887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5918188.736263736,
            "unit": "ns",
            "range": "± 327124.11289111106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5666141.483870967,
            "unit": "ns",
            "range": "± 359130.4019197717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9605784.82,
            "unit": "ns",
            "range": "± 385220.89355333283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9748437.641975308,
            "unit": "ns",
            "range": "± 512419.09535375214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27771502.339622643,
            "unit": "ns",
            "range": "± 1151220.3502106084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70151995.625,
            "unit": "ns",
            "range": "± 2138609.057849755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137641687.42553192,
            "unit": "ns",
            "range": "± 5322464.680527412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276633669.1351351,
            "unit": "ns",
            "range": "± 9228839.524217423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373149.8314606742,
            "unit": "ns",
            "range": "± 22553.074180311545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370052.1505376344,
            "unit": "ns",
            "range": "± 49958.661908349226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302688.1397849462,
            "unit": "ns",
            "range": "± 50760.25490278261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5445778.711340206,
            "unit": "ns",
            "range": "± 386871.33548730175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5162276.457446809,
            "unit": "ns",
            "range": "± 305040.7053671272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19396.68604651163,
            "unit": "ns",
            "range": "± 2361.049294458257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107053.57608695653,
            "unit": "ns",
            "range": "± 14142.101881669138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105663.17708333333,
            "unit": "ns",
            "range": "± 22653.17530246258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121361.18947368421,
            "unit": "ns",
            "range": "± 27750.12433527627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5865.666666666667,
            "unit": "ns",
            "range": "± 1201.980126525145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18989.83908045977,
            "unit": "ns",
            "range": "± 2802.80887712858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60856.17894736842,
            "unit": "ns",
            "range": "± 10386.111438265176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7748181.592708333,
            "unit": "ns",
            "range": "± 143697.37563424205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2512104.801081731,
            "unit": "ns",
            "range": "± 24660.138888980688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1703588.94609375,
            "unit": "ns",
            "range": "± 8780.19117007976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3463121.619010417,
            "unit": "ns",
            "range": "± 103618.18172754397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1125650.4548828125,
            "unit": "ns",
            "range": "± 24735.12778729532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1034420.3337890625,
            "unit": "ns",
            "range": "± 23810.721454135386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1810292.2083333333,
            "unit": "ns",
            "range": "± 181886.00974160864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3394866.0104166665,
            "unit": "ns",
            "range": "± 266195.3790047926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2775051.744680851,
            "unit": "ns",
            "range": "± 220885.2042615225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7415595.969387755,
            "unit": "ns",
            "range": "± 555142.0701001701"
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
          "id": "131fc3bc457b025d8d2de0762acb51fbcf6d85dc",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:17:18+09:00",
          "tree_id": "8836faf6bc4ad702d6ef67200d7e7920548019a0",
          "url": "https://github.com/greymistcube/libplanet/commit/131fc3bc457b025d8d2de0762acb51fbcf6d85dc"
        },
        "date": 1687761284176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421760.3085106383,
            "unit": "ns",
            "range": "± 328527.5516066936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3551585.5,
            "unit": "ns",
            "range": "± 335089.53963385714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4752484.010309278,
            "unit": "ns",
            "range": "± 550957.5114385617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4851041.715789474,
            "unit": "ns",
            "range": "± 508228.55973106436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9200940.142857144,
            "unit": "ns",
            "range": "± 716376.1434507294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8145338.127659574,
            "unit": "ns",
            "range": "± 600016.5317918777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21372123.939393938,
            "unit": "ns",
            "range": "± 2007419.947414392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55313629.59793814,
            "unit": "ns",
            "range": "± 3395232.297670129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111670461.95522387,
            "unit": "ns",
            "range": "± 5162040.090920934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226566173.6521739,
            "unit": "ns",
            "range": "± 10916331.997852731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306717.967032967,
            "unit": "ns",
            "range": "± 27424.378754211673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313860.4945054945,
            "unit": "ns",
            "range": "± 39094.00042642907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272701.91489361704,
            "unit": "ns",
            "range": "± 37698.99418630882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4722043.829787234,
            "unit": "ns",
            "range": "± 434658.1013958511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4074346.638297872,
            "unit": "ns",
            "range": "± 371991.4057592009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30780.244444444445,
            "unit": "ns",
            "range": "± 5597.168321613563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108356.90217391304,
            "unit": "ns",
            "range": "± 16073.745365944616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96319.97752808989,
            "unit": "ns",
            "range": "± 13646.10557246806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123775.19587628866,
            "unit": "ns",
            "range": "± 22802.096541783525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4652.589743589743,
            "unit": "ns",
            "range": "± 1036.9315302058274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30743.261363636364,
            "unit": "ns",
            "range": "± 5477.71547207162"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63779.38202247191,
            "unit": "ns",
            "range": "± 8982.92144787897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6475955.287006579,
            "unit": "ns",
            "range": "± 138549.23253418438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2095462.6518229167,
            "unit": "ns",
            "range": "± 60913.22684869948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1469649.2932235054,
            "unit": "ns",
            "range": "± 36752.15487421852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2846525.9536345107,
            "unit": "ns",
            "range": "± 70952.43482590553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 951476.4192057292,
            "unit": "ns",
            "range": "± 14868.719863133685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850990.5319213867,
            "unit": "ns",
            "range": "± 15810.80070068435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474812.5638297873,
            "unit": "ns",
            "range": "± 203825.5406725654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2835423.2448979593,
            "unit": "ns",
            "range": "± 276575.6635661065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2378613.4,
            "unit": "ns",
            "range": "± 269697.8285271964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6504384.808510638,
            "unit": "ns",
            "range": "± 754618.6823359011"
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
          "id": "75fd2d685cc94baf977cf4f6927618a9120bf02d",
          "message": "Changelog",
          "timestamp": "2023-06-26T15:25:34+09:00",
          "tree_id": "c8a226f50d6fddd075124060ea04066053d630db",
          "url": "https://github.com/greymistcube/libplanet/commit/75fd2d685cc94baf977cf4f6927618a9120bf02d"
        },
        "date": 1687761555320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3294401.8983050846,
            "unit": "ns",
            "range": "± 145784.43774258113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3444548.5517241377,
            "unit": "ns",
            "range": "± 151079.9207609299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252766.857142857,
            "unit": "ns",
            "range": "± 52206.67648852991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4360896.461538462,
            "unit": "ns",
            "range": "± 176965.5340856354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6823641.4,
            "unit": "ns",
            "range": "± 223530.7194303964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7572140.857142857,
            "unit": "ns",
            "range": "± 39276.50771303208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21339484,
            "unit": "ns",
            "range": "± 253815.85390078495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52412209.928571425,
            "unit": "ns",
            "range": "± 1452992.4139297756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102919660.84615384,
            "unit": "ns",
            "range": "± 935090.9886002935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221902237.82352942,
            "unit": "ns",
            "range": "± 4332425.468326103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280871.55555555556,
            "unit": "ns",
            "range": "± 7721.470572039485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279453.71428571426,
            "unit": "ns",
            "range": "± 10606.553921200484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240820.80392156861,
            "unit": "ns",
            "range": "± 9654.545946899021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4289387.9375,
            "unit": "ns",
            "range": "± 84053.72188822158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3999444.4285714286,
            "unit": "ns",
            "range": "± 67019.2043943253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18602.40425531915,
            "unit": "ns",
            "range": "± 1642.3458263456669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89752.97752808989,
            "unit": "ns",
            "range": "± 4784.522606036165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83108.54081632652,
            "unit": "ns",
            "range": "± 6921.938428772602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99840.35714285714,
            "unit": "ns",
            "range": "± 15772.13890223981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5045.644444444444,
            "unit": "ns",
            "range": "± 615.9317471145813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17577.157894736843,
            "unit": "ns",
            "range": "± 1427.0862392926715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48252.44210526316,
            "unit": "ns",
            "range": "± 2985.5877489564637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5973114.458333333,
            "unit": "ns",
            "range": "± 27064.807675365806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870942.3966238839,
            "unit": "ns",
            "range": "± 5069.539818409661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366642.3294270833,
            "unit": "ns",
            "range": "± 6380.653327025028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646738.49765625,
            "unit": "ns",
            "range": "± 8765.933343644012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839549.8101981027,
            "unit": "ns",
            "range": "± 1819.56284249566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755059.4610677083,
            "unit": "ns",
            "range": "± 1554.1824979102892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1418950.38028169,
            "unit": "ns",
            "range": "± 69620.14330501239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2707912.625,
            "unit": "ns",
            "range": "± 96177.65259055831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2311789.913043478,
            "unit": "ns",
            "range": "± 111517.8367948558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5671142.29787234,
            "unit": "ns",
            "range": "± 219556.06272320976"
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
          "id": "935fc0e7f25595130a54cef3b10ea80534a7ba92",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T16:33:53+09:00",
          "tree_id": "23f8e71ce32558289c569cca9cfb9aefb2964af9",
          "url": "https://github.com/greymistcube/libplanet/commit/935fc0e7f25595130a54cef3b10ea80534a7ba92"
        },
        "date": 1687766013272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4168428.782608696,
            "unit": "ns",
            "range": "± 295250.0040503141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4615777.091836735,
            "unit": "ns",
            "range": "± 426113.1295328146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5823027.354166667,
            "unit": "ns",
            "range": "± 433859.6470326848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5544667.5698924735,
            "unit": "ns",
            "range": "± 399016.4716132165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9847717.387096774,
            "unit": "ns",
            "range": "± 557711.0333417186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10029744.708333334,
            "unit": "ns",
            "range": "± 748353.4720150691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28266617.795918368,
            "unit": "ns",
            "range": "± 1118987.9263717127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70988624.34285714,
            "unit": "ns",
            "range": "± 2269358.7149076997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143494679,
            "unit": "ns",
            "range": "± 4078776.033289495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287472557.53846157,
            "unit": "ns",
            "range": "± 7641857.204528173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 390027.693877551,
            "unit": "ns",
            "range": "± 41603.880952347165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370666.0104166667,
            "unit": "ns",
            "range": "± 32776.96804304246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322602.2631578947,
            "unit": "ns",
            "range": "± 38715.003428823824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5469285.043478261,
            "unit": "ns",
            "range": "± 381506.3886070562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5006626.724489796,
            "unit": "ns",
            "range": "± 356157.1097387491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27326.684210526317,
            "unit": "ns",
            "range": "± 8750.38696440767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120818.58163265306,
            "unit": "ns",
            "range": "± 23935.44695781942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124134.8,
            "unit": "ns",
            "range": "± 22811.87546628644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139558.8144329897,
            "unit": "ns",
            "range": "± 24730.730540551627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7455.647727272727,
            "unit": "ns",
            "range": "± 1313.5382421376216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28132.77,
            "unit": "ns",
            "range": "± 10159.394336770278"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64048.05263157895,
            "unit": "ns",
            "range": "± 12861.52214393392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7256265.3125,
            "unit": "ns",
            "range": "± 123064.87512457545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2496973.3312088815,
            "unit": "ns",
            "range": "± 55462.826495097535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1715915.9716145834,
            "unit": "ns",
            "range": "± 25044.40158606615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3207300.3896949403,
            "unit": "ns",
            "range": "± 70275.80086153239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1098433.4408854167,
            "unit": "ns",
            "range": "± 16284.584909691748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 988676.0681423611,
            "unit": "ns",
            "range": "± 20011.966418818796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1849439.2978723405,
            "unit": "ns",
            "range": "± 205051.03648765842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3656668.6,
            "unit": "ns",
            "range": "± 326684.9972770763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2927937.755319149,
            "unit": "ns",
            "range": "± 185158.9907355522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7797845.542553191,
            "unit": "ns",
            "range": "± 787855.6802090398"
          }
        ]
      }
    ]
  }
}