window.BENCHMARK_DATA = {
  "lastUpdate": 1689322077040,
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
          "id": "639b3c048cc8a77e48c723374264fcd3544a0b1e",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:42:36+09:00",
          "tree_id": "968f82627aae9c0bbbdeff1c7db89e4204d978b2",
          "url": "https://github.com/greymistcube/libplanet/commit/639b3c048cc8a77e48c723374264fcd3544a0b1e"
        },
        "date": 1689321344196,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285526.0256410256,
            "unit": "ns",
            "range": "± 9049.179955539965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273084.8787878788,
            "unit": "ns",
            "range": "± 7221.856702735695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243612.38271604938,
            "unit": "ns",
            "range": "± 12768.150601758953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4273247.2,
            "unit": "ns",
            "range": "± 42244.29056131221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824047,
            "unit": "ns",
            "range": "± 23460.121294798682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18606.336842105262,
            "unit": "ns",
            "range": "± 1905.7560827746227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89941.5,
            "unit": "ns",
            "range": "± 6580.828223115274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72436.66666666667,
            "unit": "ns",
            "range": "± 1755.48074431996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91429.21348314607,
            "unit": "ns",
            "range": "± 7243.322979368827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4814.285714285715,
            "unit": "ns",
            "range": "± 551.2755770980264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19501.041666666668,
            "unit": "ns",
            "range": "± 2149.3937843845356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388646.4444444445,
            "unit": "ns",
            "range": "± 101882.02531461876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2691879.7959183673,
            "unit": "ns",
            "range": "± 106447.62569842729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1801405.2210526315,
            "unit": "ns",
            "range": "± 109288.8592273548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4902932.833333333,
            "unit": "ns",
            "range": "± 146031.09221057218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6314924.9796875,
            "unit": "ns",
            "range": "± 20816.70680908778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889479.1291666667,
            "unit": "ns",
            "range": "± 6040.307738239917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377944.655970982,
            "unit": "ns",
            "range": "± 1945.7691871573707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583651.5165264425,
            "unit": "ns",
            "range": "± 1508.9459195155903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806832.775530134,
            "unit": "ns",
            "range": "± 1179.513316231775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742383.7659737723,
            "unit": "ns",
            "range": "± 441.00482690782326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343096.6,
            "unit": "ns",
            "range": "± 46231.684870567165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3494692.923076923,
            "unit": "ns",
            "range": "± 56678.20036319304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4349214.066666666,
            "unit": "ns",
            "range": "± 51880.793337731266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3872593,
            "unit": "ns",
            "range": "± 69324.72583841518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6322968.578947368,
            "unit": "ns",
            "range": "± 137578.30183503818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7814955.4,
            "unit": "ns",
            "range": "± 68354.1692884515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19503107.733333334,
            "unit": "ns",
            "range": "± 137878.33801708076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50729649.46666667,
            "unit": "ns",
            "range": "± 264185.3236725707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101339667.78571428,
            "unit": "ns",
            "range": "± 185293.64953632117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201038079.2857143,
            "unit": "ns",
            "range": "± 623864.4772511992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46654.43037974684,
            "unit": "ns",
            "range": "± 2437.2008675545862"
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
          "id": "9915b1153986d8444b41c256f6c4bb33747105f9",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:55:04+09:00",
          "tree_id": "56464697796c2a6fcb34286edce2ff533972e4d4",
          "url": "https://github.com/greymistcube/libplanet/commit/9915b1153986d8444b41c256f6c4bb33747105f9"
        },
        "date": 1689322068862,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290613.4193548387,
            "unit": "ns",
            "range": "± 12263.034494022531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272230.5789473684,
            "unit": "ns",
            "range": "± 7864.429164802329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238989.07777777777,
            "unit": "ns",
            "range": "± 13268.684831255357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4281093.733333333,
            "unit": "ns",
            "range": "± 50591.320319182174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3887525.2666666666,
            "unit": "ns",
            "range": "± 70758.16746644535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18286.956521739132,
            "unit": "ns",
            "range": "± 1735.1471794498023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93347.0202020202,
            "unit": "ns",
            "range": "± 6880.189815517221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77245.15584415584,
            "unit": "ns",
            "range": "± 3953.913477958578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94237.38775510204,
            "unit": "ns",
            "range": "± 12735.596451761363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4896.875,
            "unit": "ns",
            "range": "± 535.7637195237231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19330.15625,
            "unit": "ns",
            "range": "± 1411.8845288115344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1459267.205882353,
            "unit": "ns",
            "range": "± 44744.83955468507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2590077.657142857,
            "unit": "ns",
            "range": "± 84668.73117243213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811460.4141414142,
            "unit": "ns",
            "range": "± 167301.60292631536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4867425.677419355,
            "unit": "ns",
            "range": "± 141426.7353752199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5999351.463727678,
            "unit": "ns",
            "range": "± 20667.385925964543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858203.2744140625,
            "unit": "ns",
            "range": "± 846.8989773900457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363249.8579799107,
            "unit": "ns",
            "range": "± 597.0677891832916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591643.0161458333,
            "unit": "ns",
            "range": "± 1151.6427722012656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835703.8408854167,
            "unit": "ns",
            "range": "± 9728.728966555653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729724.8283342634,
            "unit": "ns",
            "range": "± 391.7732166309592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362635,
            "unit": "ns",
            "range": "± 60885.38005958409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429194.6,
            "unit": "ns",
            "range": "± 42431.79043022208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4373230.307692308,
            "unit": "ns",
            "range": "± 46611.99105806827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3967895.7,
            "unit": "ns",
            "range": "± 91064.7487769005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6454538.882352941,
            "unit": "ns",
            "range": "± 188704.18350805127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7713559,
            "unit": "ns",
            "range": "± 54334.8717281479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19528678.42857143,
            "unit": "ns",
            "range": "± 177194.8612819381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56675680.6,
            "unit": "ns",
            "range": "± 288057.6948172015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98908814.78571428,
            "unit": "ns",
            "range": "± 812480.3284284846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196321797.2857143,
            "unit": "ns",
            "range": "± 1153851.8759277838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46932.33766233766,
            "unit": "ns",
            "range": "± 2177.787050451792"
          }
        ]
      }
    ]
  }
}