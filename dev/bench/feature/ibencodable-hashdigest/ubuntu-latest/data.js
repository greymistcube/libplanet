window.BENCHMARK_DATA = {
  "lastUpdate": 1698397682694,
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
          "id": "a65e4f7986b6d8d33dea8fc57a25885f1aeb13a8",
          "message": "Update BlockMarshaler",
          "timestamp": "2023-10-16T15:44:03+09:00",
          "tree_id": "d14c1c94d85b5c5970b2ae3a4f0821014b4b9f30",
          "url": "https://github.com/greymistcube/libplanet/commit/a65e4f7986b6d8d33dea8fc57a25885f1aeb13a8"
        },
        "date": 1697439592705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50201.98630136986,
            "unit": "ns",
            "range": "± 2512.96680844879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8299844,
            "unit": "ns",
            "range": "± 187257.16805986362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22398435.6,
            "unit": "ns",
            "range": "± 263376.4599815253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55109803.06666667,
            "unit": "ns",
            "range": "± 669229.4424499895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110835702.1764706,
            "unit": "ns",
            "range": "± 2259587.280062839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217762645.13333333,
            "unit": "ns",
            "range": "± 3572000.79911373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280032.87272727274,
            "unit": "ns",
            "range": "± 10915.969765803959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274464.3333333333,
            "unit": "ns",
            "range": "± 9526.56104125341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232545.8409090909,
            "unit": "ns",
            "range": "± 8726.498618397425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4399096.4,
            "unit": "ns",
            "range": "± 69356.49537899924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3997160.2666666666,
            "unit": "ns",
            "range": "± 59202.371382845646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20568.010416666668,
            "unit": "ns",
            "range": "± 1764.8950736355355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88923.76086956522,
            "unit": "ns",
            "range": "± 5495.466210001219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71856.9375,
            "unit": "ns",
            "range": "± 1411.716235355628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83165.56565656565,
            "unit": "ns",
            "range": "± 8659.268308347499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4994.723404255319,
            "unit": "ns",
            "range": "± 542.6774206535695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20254.821052631578,
            "unit": "ns",
            "range": "± 1684.086670704833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1400095.8651685393,
            "unit": "ns",
            "range": "± 73463.84610213364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643599.638888889,
            "unit": "ns",
            "range": "± 87300.7527799823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2099699.3294117646,
            "unit": "ns",
            "range": "± 112821.01236592035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9552879.869565217,
            "unit": "ns",
            "range": "± 573306.2095363801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5029080.379464285,
            "unit": "ns",
            "range": "± 26491.012673977253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1616542.23046875,
            "unit": "ns",
            "range": "± 6573.402019002923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089448.3741629464,
            "unit": "ns",
            "range": "± 3317.068609836071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596266.466238839,
            "unit": "ns",
            "range": "± 6135.453837621568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828364.1796223958,
            "unit": "ns",
            "range": "± 2754.852876054066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749211.6003069197,
            "unit": "ns",
            "range": "± 1033.5438704423577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3441571.238095238,
            "unit": "ns",
            "range": "± 124751.24412338407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3718342.035714286,
            "unit": "ns",
            "range": "± 102857.80159232496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4229618.611111111,
            "unit": "ns",
            "range": "± 84849.2481121242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4323304.720930233,
            "unit": "ns",
            "range": "± 160023.93960433448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11023496.872340426,
            "unit": "ns",
            "range": "± 425506.73874501465"
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
          "id": "e99d10425766e8169b89c82f8eacd4068790a6e4",
          "message": "Update BlockMarshaler",
          "timestamp": "2023-10-16T15:47:03+09:00",
          "tree_id": "d14c1c94d85b5c5970b2ae3a4f0821014b4b9f30",
          "url": "https://github.com/greymistcube/libplanet/commit/e99d10425766e8169b89c82f8eacd4068790a6e4"
        },
        "date": 1697439659923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51534.66216216216,
            "unit": "ns",
            "range": "± 2600.1152781452934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8525896,
            "unit": "ns",
            "range": "± 169232.88951434646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22730641.066666666,
            "unit": "ns",
            "range": "± 386753.45984055276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57006095.35714286,
            "unit": "ns",
            "range": "± 441459.1310866564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113431190.53846154,
            "unit": "ns",
            "range": "± 610357.5809525669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227546727.13333333,
            "unit": "ns",
            "range": "± 1128310.0793448878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277611.3409090909,
            "unit": "ns",
            "range": "± 9241.651734839124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264202.5714285714,
            "unit": "ns",
            "range": "± 8176.429211419288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251471.14925373133,
            "unit": "ns",
            "range": "± 11824.530937270903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4497206.4,
            "unit": "ns",
            "range": "± 49804.12983851267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4207588,
            "unit": "ns",
            "range": "± 64914.24068613252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21742.526315789473,
            "unit": "ns",
            "range": "± 1895.375766045582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89142.90425531915,
            "unit": "ns",
            "range": "± 5517.207469322826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75879.24390243902,
            "unit": "ns",
            "range": "± 2700.347207124371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85559.48979591837,
            "unit": "ns",
            "range": "± 7903.567750092813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5554.183673469388,
            "unit": "ns",
            "range": "± 693.8826566315051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20676.126315789475,
            "unit": "ns",
            "range": "± 1917.1706948616447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412171.6,
            "unit": "ns",
            "range": "± 75791.17223256093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2758749.6052631577,
            "unit": "ns",
            "range": "± 93626.56032244772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2144854.9178082193,
            "unit": "ns",
            "range": "± 97286.81980043362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8987090.451612903,
            "unit": "ns",
            "range": "± 256010.80194812597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5015130.008413462,
            "unit": "ns",
            "range": "± 27075.723608555407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1650310.4320591518,
            "unit": "ns",
            "range": "± 2442.669263305171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081256.4418247768,
            "unit": "ns",
            "range": "± 672.6546904917356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621658.5953125,
            "unit": "ns",
            "range": "± 1627.915286842853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837203.7518229167,
            "unit": "ns",
            "range": "± 749.2228591661119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765655.361703726,
            "unit": "ns",
            "range": "± 401.21557096457707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3669779.8928571427,
            "unit": "ns",
            "range": "± 103020.65349611151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3774647.75,
            "unit": "ns",
            "range": "± 133649.67201735347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4466499.857142857,
            "unit": "ns",
            "range": "± 69395.67474978554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4489990.41025641,
            "unit": "ns",
            "range": "± 157028.2491884683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10722904.029411765,
            "unit": "ns",
            "range": "± 269054.5208375439"
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
          "id": "ec7294c92f68061a430e926be763a5d8849a072c",
          "message": "Changelog",
          "timestamp": "2023-10-16T15:48:49+09:00",
          "tree_id": "4c8d748cf66201b05c9b598685fdca789e0370cd",
          "url": "https://github.com/greymistcube/libplanet/commit/ec7294c92f68061a430e926be763a5d8849a072c"
        },
        "date": 1697439901680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56906.386666666665,
            "unit": "ns",
            "range": "± 2828.865763982206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10028696.791666666,
            "unit": "ns",
            "range": "± 247548.6868372922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26957898.666666668,
            "unit": "ns",
            "range": "± 263594.0104879002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67814105.4,
            "unit": "ns",
            "range": "± 352210.3076545521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135341974.64285713,
            "unit": "ns",
            "range": "± 1077563.6795180854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267772770.6,
            "unit": "ns",
            "range": "± 1539867.2017757988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323760.9512195122,
            "unit": "ns",
            "range": "± 11489.98158386518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311943.3333333333,
            "unit": "ns",
            "range": "± 9459.269662170895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277865.31481481483,
            "unit": "ns",
            "range": "± 11690.196689314973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5304421.133333334,
            "unit": "ns",
            "range": "± 45349.73732144222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4863103.866666666,
            "unit": "ns",
            "range": "± 38565.5481094325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23505.782608695652,
            "unit": "ns",
            "range": "± 1742.054980939837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99699.42666666667,
            "unit": "ns",
            "range": "± 4797.290494202512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89002.875,
            "unit": "ns",
            "range": "± 4101.560777255874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92508.32291666667,
            "unit": "ns",
            "range": "± 8474.10356630847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6023.7040816326535,
            "unit": "ns",
            "range": "± 737.7756931379822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22124.1935483871,
            "unit": "ns",
            "range": "± 1859.9351745252268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689969.3777777778,
            "unit": "ns",
            "range": "± 93108.07791173374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3168210.2258064514,
            "unit": "ns",
            "range": "± 93890.21013066615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2470622.6440677964,
            "unit": "ns",
            "range": "± 94720.64146373884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10630115.34883721,
            "unit": "ns",
            "range": "± 385414.79737938766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6000161.051339285,
            "unit": "ns",
            "range": "± 10423.547023812638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905454.7830729166,
            "unit": "ns",
            "range": "± 1312.9200765304213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303731.8522135417,
            "unit": "ns",
            "range": "± 969.3902385254004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3132909.146484375,
            "unit": "ns",
            "range": "± 4087.846686235365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987422.755859375,
            "unit": "ns",
            "range": "± 262.25792993891116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893566.9493815104,
            "unit": "ns",
            "range": "± 410.1831839478307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4244067.777777778,
            "unit": "ns",
            "range": "± 85131.61359749045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4386413.875,
            "unit": "ns",
            "range": "± 101224.1995144023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5298705.466666667,
            "unit": "ns",
            "range": "± 98086.22886803417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5313410.875,
            "unit": "ns",
            "range": "± 103261.0464521028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12745482.145833334,
            "unit": "ns",
            "range": "± 499254.56875072024"
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
          "id": "5a4765db0b62ea33c25f392748bb8c3902f72b5e",
          "message": "Changelog",
          "timestamp": "2023-10-27T17:54:38+09:00",
          "tree_id": "799d61c289394b4e5373b9245ed6c7422a69339d",
          "url": "https://github.com/greymistcube/libplanet/commit/5a4765db0b62ea33c25f392748bb8c3902f72b5e"
        },
        "date": 1698397673863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48005.348314606745,
            "unit": "ns",
            "range": "± 2656.5807616572392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4876035.482142857,
            "unit": "ns",
            "range": "± 12465.79616588924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579767.5944010417,
            "unit": "ns",
            "range": "± 1512.3730048510129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1051756.5120192308,
            "unit": "ns",
            "range": "± 476.28123907249113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2534866.754464286,
            "unit": "ns",
            "range": "± 1634.6355922315115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804415.8219401041,
            "unit": "ns",
            "range": "± 1158.6094381051014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735050.9438151042,
            "unit": "ns",
            "range": "± 363.9422222534702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7709358.733333333,
            "unit": "ns",
            "range": "± 39515.524002719794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19973955.8,
            "unit": "ns",
            "range": "± 128190.15264397541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50445199.2,
            "unit": "ns",
            "range": "± 359440.2010714916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101760402.42857143,
            "unit": "ns",
            "range": "± 505718.8839513835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202042428.14285713,
            "unit": "ns",
            "range": "± 1809557.9493650189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3128768.3,
            "unit": "ns",
            "range": "± 68413.33206410006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3328551,
            "unit": "ns",
            "range": "± 52351.85856079258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4087202.1363636362,
            "unit": "ns",
            "range": "± 90172.73952137666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3950568.6428571427,
            "unit": "ns",
            "range": "± 143608.20651882072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9764202.25,
            "unit": "ns",
            "range": "± 245350.7284486738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267344.68292682926,
            "unit": "ns",
            "range": "± 9643.320308480435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251455.27272727274,
            "unit": "ns",
            "range": "± 7868.4262968529065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225470.72222222222,
            "unit": "ns",
            "range": "± 4773.289749842106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4160604.6428571427,
            "unit": "ns",
            "range": "± 32299.5824159888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3765616.5714285714,
            "unit": "ns",
            "range": "± 40901.174379818876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18652.054347826088,
            "unit": "ns",
            "range": "± 1296.0189369472746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82965.76744186046,
            "unit": "ns",
            "range": "± 4492.1000766035495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67731.1052631579,
            "unit": "ns",
            "range": "± 1193.0406016531804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75933.9247311828,
            "unit": "ns",
            "range": "± 4762.595671152625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4631.622448979592,
            "unit": "ns",
            "range": "± 506.3718025102165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16803.547368421052,
            "unit": "ns",
            "range": "± 1160.5474567324284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1265332.5903614457,
            "unit": "ns",
            "range": "± 66523.85626225288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2457505.347826087,
            "unit": "ns",
            "range": "± 61753.879922721295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1918707.5333333334,
            "unit": "ns",
            "range": "± 84057.96003272552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8382983.416666667,
            "unit": "ns",
            "range": "± 372626.3801280472"
          }
        ]
      }
    ]
  }
}