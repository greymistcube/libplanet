window.BENCHMARK_DATA = {
  "lastUpdate": 1683110056687,
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
          "id": "4c2ca5ac4b94e7846843416973a58b75e87c266d",
          "message": "Changed IActionTypeLoader to IActionLoader",
          "timestamp": "2023-05-03T18:42:43+09:00",
          "tree_id": "df79e2790e2a2a3e14665657538de57183736d5a",
          "url": "https://github.com/greymistcube/libplanet/commit/4c2ca5ac4b94e7846843416973a58b75e87c266d"
        },
        "date": 1683107893822,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1330943.298969072,
            "unit": "ns",
            "range": "± 105723.66585744542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2385806.896551724,
            "unit": "ns",
            "range": "± 57355.53237130713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2111934.375,
            "unit": "ns",
            "range": "± 142199.17079344066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4876407.894736842,
            "unit": "ns",
            "range": "± 146099.19692248153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42539.47368421053,
            "unit": "ns",
            "range": "± 2162.688385466473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6969800,
            "unit": "ns",
            "range": "± 68035.28496302488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17924671.42857143,
            "unit": "ns",
            "range": "± 67231.29340706463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45580642.85714286,
            "unit": "ns",
            "range": "± 267521.7481145892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91515033.33333333,
            "unit": "ns",
            "range": "± 462298.1762991542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183414540,
            "unit": "ns",
            "range": "± 834591.7503272397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4809773.948317308,
            "unit": "ns",
            "range": "± 3890.346308183715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508595.6966145833,
            "unit": "ns",
            "range": "± 1976.9560949951992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143242.885044643,
            "unit": "ns",
            "range": "± 1183.8011223571566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559381.4903846155,
            "unit": "ns",
            "range": "± 14326.632841065088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821813.7834821428,
            "unit": "ns",
            "range": "± 4697.840971527403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727417.7311197916,
            "unit": "ns",
            "range": "± 862.7412908424295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2927700,
            "unit": "ns",
            "range": "± 36932.24565648248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3034837.2093023257,
            "unit": "ns",
            "range": "± 66630.36639070741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3921120,
            "unit": "ns",
            "range": "± 64768.53512977689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3917831.111111111,
            "unit": "ns",
            "range": "± 141115.3393862659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6148550,
            "unit": "ns",
            "range": "± 111413.27285571075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258134.78260869565,
            "unit": "ns",
            "range": "± 9251.695757867055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241104.7619047619,
            "unit": "ns",
            "range": "± 8318.623021048508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222742.1875,
            "unit": "ns",
            "range": "± 10321.034227239114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3820933.3333333335,
            "unit": "ns",
            "range": "± 42050.32132825531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3469286.6666666665,
            "unit": "ns",
            "range": "± 24675.837420054308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18774.736842105263,
            "unit": "ns",
            "range": "± 1547.7484278682516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80624.13793103448,
            "unit": "ns",
            "range": "± 4327.117454972295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72896.9696969697,
            "unit": "ns",
            "range": "± 6915.413936073216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85879.78723404255,
            "unit": "ns",
            "range": "± 11834.018575833341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4851.0204081632655,
            "unit": "ns",
            "range": "± 957.4714227340727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17760.60606060606,
            "unit": "ns",
            "range": "± 1889.7585517849964"
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
          "id": "864e180510f11f376012591f9151d7d00c7902e0",
          "message": "Changelog",
          "timestamp": "2023-05-03T18:47:13+09:00",
          "tree_id": "be97148de5a6bf45e2dd0858c79572a5b3145a21",
          "url": "https://github.com/greymistcube/libplanet/commit/864e180510f11f376012591f9151d7d00c7902e0"
        },
        "date": 1683108048756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1291154,
            "unit": "ns",
            "range": "± 91332.06194647058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2350405.714285714,
            "unit": "ns",
            "range": "± 77081.13732355299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2222405.5555555555,
            "unit": "ns",
            "range": "± 45815.56981975119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4799658.974358974,
            "unit": "ns",
            "range": "± 165773.23718665034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41710.769230769234,
            "unit": "ns",
            "range": "± 1939.323583504945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6651866.666666667,
            "unit": "ns",
            "range": "± 14126.250471407915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17269085.714285713,
            "unit": "ns",
            "range": "± 81172.13293264607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44455600,
            "unit": "ns",
            "range": "± 230967.47023702777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87859413.33333333,
            "unit": "ns",
            "range": "± 915566.0987815654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175724046.66666666,
            "unit": "ns",
            "range": "± 949418.3677138234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4783351.450892857,
            "unit": "ns",
            "range": "± 5592.095118461588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481388.7760416667,
            "unit": "ns",
            "range": "± 2251.491365861803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135502.3763020833,
            "unit": "ns",
            "range": "± 1579.7988076906013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564849.7786458335,
            "unit": "ns",
            "range": "± 5987.329003493557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822646.5053013393,
            "unit": "ns",
            "range": "± 2115.010985085114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751037.4372209822,
            "unit": "ns",
            "range": "± 1126.7112378041152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2882106.25,
            "unit": "ns",
            "range": "± 36945.680284258764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2976547.8260869565,
            "unit": "ns",
            "range": "± 45581.833199055975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3755121.4285714286,
            "unit": "ns",
            "range": "± 56764.549860622705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3860856,
            "unit": "ns",
            "range": "± 91456.16472751669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6104389.189189189,
            "unit": "ns",
            "range": "± 204187.71154637722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246994.87179487178,
            "unit": "ns",
            "range": "± 7736.140364955176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231824.39024390245,
            "unit": "ns",
            "range": "± 8005.772307772839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219614.40677966102,
            "unit": "ns",
            "range": "± 9635.687308160372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3733440,
            "unit": "ns",
            "range": "± 30862.964397940963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3470633.3333333335,
            "unit": "ns",
            "range": "± 58497.49282376696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15998.924731182795,
            "unit": "ns",
            "range": "± 1554.69098171336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75932.8947368421,
            "unit": "ns",
            "range": "± 3882.4180835451757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66489.58333333333,
            "unit": "ns",
            "range": "± 4100.923622966357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76826.8817204301,
            "unit": "ns",
            "range": "± 10039.986789625667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3631.4606741573034,
            "unit": "ns",
            "range": "± 525.3993082361216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14650,
            "unit": "ns",
            "range": "± 1301.1987855704033"
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
          "id": "12ec11d8eafc82ca85f94fc8d38fff3ebc47c55d",
          "message": "Changelog",
          "timestamp": "2023-05-03T18:46:25+09:00",
          "tree_id": "f72af88a9d0ed40709a08fb6a347aab0e1edd9bf",
          "url": "https://github.com/greymistcube/libplanet/commit/12ec11d8eafc82ca85f94fc8d38fff3ebc47c55d"
        },
        "date": 1683108681136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716706.3157894737,
            "unit": "ns",
            "range": "± 139793.96526904835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3345244.3181818184,
            "unit": "ns",
            "range": "± 183258.30577087778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2751635.4166666665,
            "unit": "ns",
            "range": "± 229779.06366959805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6973411.224489796,
            "unit": "ns",
            "range": "± 473872.19053822465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61185.71428571428,
            "unit": "ns",
            "range": "± 10298.841050532192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10498182.258064516,
            "unit": "ns",
            "range": "± 477359.7727405223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24456598.484848484,
            "unit": "ns",
            "range": "± 1143297.134336601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66122168.75,
            "unit": "ns",
            "range": "± 2578020.6834550044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128455662.5,
            "unit": "ns",
            "range": "± 4560064.168334358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266566869.23076922,
            "unit": "ns",
            "range": "± 2266083.5606778404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5953075.373641305,
            "unit": "ns",
            "range": "± 142353.98840845772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2059029.0293817935,
            "unit": "ns",
            "range": "± 51147.71457121102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1518668.88671875,
            "unit": "ns",
            "range": "± 22265.330422770377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3120740.078125,
            "unit": "ns",
            "range": "± 42092.83580779396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1041693.6067708334,
            "unit": "ns",
            "range": "± 19101.13921915361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 980370.52734375,
            "unit": "ns",
            "range": "± 9919.091545005145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3890047.0588235296,
            "unit": "ns",
            "range": "± 124918.14831707253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4242581.914893617,
            "unit": "ns",
            "range": "± 273625.2625271797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5023582.474226804,
            "unit": "ns",
            "range": "± 295170.8283669212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4974822.340425532,
            "unit": "ns",
            "range": "± 332394.42956729396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8228746,
            "unit": "ns",
            "range": "± 643026.3524800817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329991.39784946234,
            "unit": "ns",
            "range": "± 34646.86966195653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338362.2448979592,
            "unit": "ns",
            "range": "± 42855.98399267766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295320.8333333333,
            "unit": "ns",
            "range": "± 35811.28289319081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5149494.845360825,
            "unit": "ns",
            "range": "± 376001.59529003716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4481167.346938776,
            "unit": "ns",
            "range": "± 325512.1252197123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23830.85106382979,
            "unit": "ns",
            "range": "± 6874.93541077374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102973.1182795699,
            "unit": "ns",
            "range": "± 14882.942817526744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87695.83333333333,
            "unit": "ns",
            "range": "± 17174.28871838529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119965.625,
            "unit": "ns",
            "range": "± 24503.554320590007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4889.247311827957,
            "unit": "ns",
            "range": "± 804.9388804223097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20407.317073170732,
            "unit": "ns",
            "range": "± 4686.934307931508"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe5a331c0f76c0dd0518f5111114264c8e9fa988",
          "message": "Update CHANGES.md\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-05-03T19:16:26+09:00",
          "tree_id": "ff512d970f9c6ef6f3b6e2e222b444b40220c254",
          "url": "https://github.com/greymistcube/libplanet/commit/fe5a331c0f76c0dd0518f5111114264c8e9fa988"
        },
        "date": 1683110034870,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349959,
            "unit": "ns",
            "range": "± 91678.71556625773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2580927.9569892474,
            "unit": "ns",
            "range": "± 146250.2057713836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2230684,
            "unit": "ns",
            "range": "± 184756.8550798316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5342291,
            "unit": "ns",
            "range": "± 347929.5621547731"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49187.234042553195,
            "unit": "ns",
            "range": "± 2903.5104464039787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6858126.666666667,
            "unit": "ns",
            "range": "± 118399.00739609667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19130169.230769232,
            "unit": "ns",
            "range": "± 276431.62923411216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47573270.5882353,
            "unit": "ns",
            "range": "± 934883.039987293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97751986.66666667,
            "unit": "ns",
            "range": "± 1515574.164121433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186623538.46153846,
            "unit": "ns",
            "range": "± 2354176.0935050654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4724787.8125,
            "unit": "ns",
            "range": "± 17628.095819090366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507695.9263392857,
            "unit": "ns",
            "range": "± 4695.277924339994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163752.1223958333,
            "unit": "ns",
            "range": "± 5328.460871921574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656092.1614583335,
            "unit": "ns",
            "range": "± 7886.4167284155255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835195.2213541666,
            "unit": "ns",
            "range": "± 3049.6993284002733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780403.0338541666,
            "unit": "ns",
            "range": "± 2071.4378040214456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3019425,
            "unit": "ns",
            "range": "± 84298.08057654035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3159315.3846153845,
            "unit": "ns",
            "range": "± 105168.62784785588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3875409.090909091,
            "unit": "ns",
            "range": "± 122862.31207035267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4063458,
            "unit": "ns",
            "range": "± 153914.14528355523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6142818.75,
            "unit": "ns",
            "range": "± 100619.09175201294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270347.82608695654,
            "unit": "ns",
            "range": "± 6319.872665950952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257862.22222222222,
            "unit": "ns",
            "range": "± 9037.907262014127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212566.66666666666,
            "unit": "ns",
            "range": "± 5416.614269534756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3930468.75,
            "unit": "ns",
            "range": "± 75643.80317205985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3549406.6666666665,
            "unit": "ns",
            "range": "± 40204.627783852135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21621.052631578947,
            "unit": "ns",
            "range": "± 2185.439959447385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88606.56565656565,
            "unit": "ns",
            "range": "± 9807.131532780493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76967.3469387755,
            "unit": "ns",
            "range": "± 7183.927873581805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102875.51020408163,
            "unit": "ns",
            "range": "± 15641.249068326371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6443.75,
            "unit": "ns",
            "range": "± 1071.920313220501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21583.157894736843,
            "unit": "ns",
            "range": "± 3136.1194557544327"
          }
        ]
      }
    ]
  }
}