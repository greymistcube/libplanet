window.BENCHMARK_DATA = {
  "lastUpdate": 1687244388032,
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
          "id": "547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2",
          "message": "General internal API cleanup",
          "timestamp": "2023-06-14T21:58:12+09:00",
          "tree_id": "c1642302083e2f353fa08f273beb05f5929b1087",
          "url": "https://github.com/greymistcube/libplanet/commit/547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2"
        },
        "date": 1686748732081,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3451549.6170212766,
            "unit": "ns",
            "range": "± 134176.10830798536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3682843.054054054,
            "unit": "ns",
            "range": "± 123343.12285065817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4434641.5,
            "unit": "ns",
            "range": "± 107687.64151057962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4643400.1875,
            "unit": "ns",
            "range": "± 84358.85582851295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7198106.903225807,
            "unit": "ns",
            "range": "± 214829.58497025107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5984131.486778846,
            "unit": "ns",
            "range": "± 18043.63505497563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842484.2828125,
            "unit": "ns",
            "range": "± 8015.8185227202475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373008.8365885417,
            "unit": "ns",
            "range": "± 6322.8247036887715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603955.5703125,
            "unit": "ns",
            "range": "± 4874.5847293818615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816739.9302734375,
            "unit": "ns",
            "range": "± 2226.6985284537564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766321.3760416667,
            "unit": "ns",
            "range": "± 1755.2337188510282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294552.425,
            "unit": "ns",
            "range": "± 10450.777718299614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278071.0625,
            "unit": "ns",
            "range": "± 7677.008737604645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239842.63636363635,
            "unit": "ns",
            "range": "± 6867.035381768532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4315679.5,
            "unit": "ns",
            "range": "± 61515.055714028254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3936826.933333333,
            "unit": "ns",
            "range": "± 56528.49542925442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19175.567010309278,
            "unit": "ns",
            "range": "± 1534.4710129988368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87642.06382978724,
            "unit": "ns",
            "range": "± 5226.056464287863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79192.25252525252,
            "unit": "ns",
            "range": "± 6165.493226116996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96385.31578947368,
            "unit": "ns",
            "range": "± 11635.295893853065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5271.927083333333,
            "unit": "ns",
            "range": "± 849.128026362049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18630.78947368421,
            "unit": "ns",
            "range": "± 2018.0693475144456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488813.8988764044,
            "unit": "ns",
            "range": "± 82088.64084898005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2819426.076923077,
            "unit": "ns",
            "range": "± 97410.17114578857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2360826.7922077924,
            "unit": "ns",
            "range": "± 120924.8429047365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5801272.022222222,
            "unit": "ns",
            "range": "± 220741.3910218233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49030.35294117647,
            "unit": "ns",
            "range": "± 2356.5965556986057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8036970.8,
            "unit": "ns",
            "range": "± 148625.0827034253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21868579.066666666,
            "unit": "ns",
            "range": "± 318941.3171712373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55392378.46666667,
            "unit": "ns",
            "range": "± 590920.5530326471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109187039.55555555,
            "unit": "ns",
            "range": "± 2288301.592590021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222568341.4375,
            "unit": "ns",
            "range": "± 4237694.851867777"
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
          "id": "63b67ed57ada1f205f73fb47bb27037d6897c542",
          "message": "Changelog",
          "timestamp": "2023-06-15T09:51:09+09:00",
          "tree_id": "b6c665558de10fbff0e8e63d41f6847d4eab2b02",
          "url": "https://github.com/greymistcube/libplanet/commit/63b67ed57ada1f205f73fb47bb27037d6897c542"
        },
        "date": 1686791396406,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1867671.0206185568,
            "unit": "ns",
            "range": "± 132175.94298273255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3800270.494845361,
            "unit": "ns",
            "range": "± 249101.76572972993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3032952.5,
            "unit": "ns",
            "range": "± 224368.91981321157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8067860.130952381,
            "unit": "ns",
            "range": "± 430611.12738891377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4538879.135416667,
            "unit": "ns",
            "range": "± 276088.7681166338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4803004.64,
            "unit": "ns",
            "range": "± 351083.80228785746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6136169.5,
            "unit": "ns",
            "range": "± 248907.5395804241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5890254.171052632,
            "unit": "ns",
            "range": "± 297557.04590613156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9379482.151515152,
            "unit": "ns",
            "range": "± 295058.6191346265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12343009.74137931,
            "unit": "ns",
            "range": "± 535042.7165240389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29231344.780487806,
            "unit": "ns",
            "range": "± 1022166.2784717932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74622131.6,
            "unit": "ns",
            "range": "± 1686545.8790439863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147616572.25,
            "unit": "ns",
            "range": "± 2871304.548278674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299053993.26666665,
            "unit": "ns",
            "range": "± 4947495.543506453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7889985.80625,
            "unit": "ns",
            "range": "± 99774.15970653796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2420325.625260417,
            "unit": "ns",
            "range": "± 24882.78740619076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1767149.421875,
            "unit": "ns",
            "range": "± 15366.013682321105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3461732.3153645834,
            "unit": "ns",
            "range": "± 46533.803502800474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1100535.7349330357,
            "unit": "ns",
            "range": "± 5899.3799204633315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1008303.6105957031,
            "unit": "ns",
            "range": "± 26025.316636472908"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68929.6105263158,
            "unit": "ns",
            "range": "± 12119.920704303779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391656.65263157897,
            "unit": "ns",
            "range": "± 30368.692441593434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370655.6210526316,
            "unit": "ns",
            "range": "± 37372.53354650523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344160.86315789475,
            "unit": "ns",
            "range": "± 35084.29999441483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5948553.701754386,
            "unit": "ns",
            "range": "± 248753.126477478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5272388.277777778,
            "unit": "ns",
            "range": "± 221654.2528799962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29290,
            "unit": "ns",
            "range": "± 10449.266896460698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125503.47826086957,
            "unit": "ns",
            "range": "± 17698.988580699803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136318.2,
            "unit": "ns",
            "range": "± 19553.882555428467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138207.6875,
            "unit": "ns",
            "range": "± 24878.58710758585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7908.8351648351645,
            "unit": "ns",
            "range": "± 1655.974706353641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25330.98969072165,
            "unit": "ns",
            "range": "± 7870.102082002661"
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
          "id": "ebc3e87b2c9d6ccf2872aad17840b572b16bf056",
          "message": "Changelog",
          "timestamp": "2023-06-20T15:24:35+09:00",
          "tree_id": "4e7f063952afd2268649d29d2aafb616fe83a7e4",
          "url": "https://github.com/greymistcube/libplanet/commit/ebc3e87b2c9d6ccf2872aad17840b572b16bf056"
        },
        "date": 1687243161886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2945363.8695652173,
            "unit": "ns",
            "range": "± 186939.4643657284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3279355.1414141413,
            "unit": "ns",
            "range": "± 331314.93227604736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3831691.7674418604,
            "unit": "ns",
            "range": "± 207478.6765252629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3893837.84375,
            "unit": "ns",
            "range": "± 305912.2530569261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6920519.520408163,
            "unit": "ns",
            "range": "± 520034.2594008815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5466974.4706357755,
            "unit": "ns",
            "range": "± 156096.84776440257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1769634.1041666667,
            "unit": "ns",
            "range": "± 21917.875531999474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1282792.269165039,
            "unit": "ns",
            "range": "± 24620.818804049977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2468110.3846153845,
            "unit": "ns",
            "range": "± 34175.34503162943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810713.1818129596,
            "unit": "ns",
            "range": "± 16238.710372964471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770374.5442708334,
            "unit": "ns",
            "range": "± 13371.434566229062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279900.56701030926,
            "unit": "ns",
            "range": "± 41931.47229953178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278510.9791666667,
            "unit": "ns",
            "range": "± 45973.56607763094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218024.03260869565,
            "unit": "ns",
            "range": "± 20387.7803880847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3890773.9583333335,
            "unit": "ns",
            "range": "± 279199.0392100011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678201.642105263,
            "unit": "ns",
            "range": "± 299653.12984302634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19919.333333333332,
            "unit": "ns",
            "range": "± 9366.783043918373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78684.44329896907,
            "unit": "ns",
            "range": "± 13682.028421565361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73640.91578947369,
            "unit": "ns",
            "range": "± 12144.755806049696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90065.35051546391,
            "unit": "ns",
            "range": "± 20786.97653732642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4060.8695652173915,
            "unit": "ns",
            "range": "± 490.56068431704864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20010.12,
            "unit": "ns",
            "range": "± 9238.040683078978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1272021.125,
            "unit": "ns",
            "range": "± 146750.6185710087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2622275.556701031,
            "unit": "ns",
            "range": "± 259819.5243334772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2194319.714285714,
            "unit": "ns",
            "range": "± 299341.2699151461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5494701.5869565215,
            "unit": "ns",
            "range": "± 481716.22662463406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50794.12371134021,
            "unit": "ns",
            "range": "± 11482.353073718647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7050548.25,
            "unit": "ns",
            "range": "± 219313.71621448224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18107194,
            "unit": "ns",
            "range": "± 740282.3937752191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45563648.61764706,
            "unit": "ns",
            "range": "± 1198287.1689701453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92971826.875,
            "unit": "ns",
            "range": "± 3302673.728501757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206703230.56,
            "unit": "ns",
            "range": "± 14173054.565657156"
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
          "id": "53b63b71769d9841f80884922382232a09558cb1",
          "message": "Changelog",
          "timestamp": "2023-06-20T15:47:15+09:00",
          "tree_id": "4e7f063952afd2268649d29d2aafb616fe83a7e4",
          "url": "https://github.com/greymistcube/libplanet/commit/53b63b71769d9841f80884922382232a09558cb1"
        },
        "date": 1687244380627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3278986.466666667,
            "unit": "ns",
            "range": "± 58746.25052091978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3434150.0384615385,
            "unit": "ns",
            "range": "± 141084.72472949896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4158478.230769231,
            "unit": "ns",
            "range": "± 65274.888957078845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4132834.8095238097,
            "unit": "ns",
            "range": "± 187328.3671424418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6630671.4375,
            "unit": "ns",
            "range": "± 189903.70016999153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5719292.579166667,
            "unit": "ns",
            "range": "± 19995.28682063507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849189.6627103365,
            "unit": "ns",
            "range": "± 3801.75028094824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1306632.1822415865,
            "unit": "ns",
            "range": "± 3400.89223637373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554941.068489583,
            "unit": "ns",
            "range": "± 4211.653981953959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810262.7009765625,
            "unit": "ns",
            "range": "± 2149.088483581296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750984.2081380208,
            "unit": "ns",
            "range": "± 1486.1450466111478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267809.6612903226,
            "unit": "ns",
            "range": "± 11623.240764391037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252981.4,
            "unit": "ns",
            "range": "± 8999.307628068695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223502.13333333333,
            "unit": "ns",
            "range": "± 2915.343666746357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4162011.9285714286,
            "unit": "ns",
            "range": "± 67351.78818648828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3771474.6666666665,
            "unit": "ns",
            "range": "± 41813.8600119056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15753.076923076924,
            "unit": "ns",
            "range": "± 925.8429700160849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80287.50632911392,
            "unit": "ns",
            "range": "± 4181.325470357694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70082.25,
            "unit": "ns",
            "range": "± 763.517081232197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83406.17346938775,
            "unit": "ns",
            "range": "± 10431.015218825602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4418.864583333333,
            "unit": "ns",
            "range": "± 371.7532747115645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15574.166666666666,
            "unit": "ns",
            "range": "± 992.7630412844503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367174.4747474748,
            "unit": "ns",
            "range": "± 111258.05741739662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572487.962962963,
            "unit": "ns",
            "range": "± 66289.90364735416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2179264.926829268,
            "unit": "ns",
            "range": "± 115537.59043157913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5321624.275862069,
            "unit": "ns",
            "range": "± 154524.136937497"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44598.675,
            "unit": "ns",
            "range": "± 1994.859842638613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7603681.692307692,
            "unit": "ns",
            "range": "± 13864.89994184725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20548300.9,
            "unit": "ns",
            "range": "± 459184.21599350346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49975633.928571425,
            "unit": "ns",
            "range": "± 521908.95192190877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99370868,
            "unit": "ns",
            "range": "± 959990.4566456738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199374654.6153846,
            "unit": "ns",
            "range": "± 1545524.059355032"
          }
        ]
      }
    ]
  }
}