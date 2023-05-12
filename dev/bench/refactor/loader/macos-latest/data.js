window.BENCHMARK_DATA = {
  "lastUpdate": 1683884480104,
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
          "id": "458a860c655f755fedf1e7f39ced14d000478850",
          "message": "Introduce IndexedActionLoader",
          "timestamp": "2023-05-10T20:49:33+09:00",
          "tree_id": "012e410a2d3dee29535205ae538639da96d7e320",
          "url": "https://github.com/greymistcube/libplanet/commit/458a860c655f755fedf1e7f39ced14d000478850"
        },
        "date": 1683720238951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7358771.428571428,
            "unit": "ns",
            "range": "± 91892.11712275542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19111185.219512194,
            "unit": "ns",
            "range": "± 678700.3031265166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46967683,
            "unit": "ns",
            "range": "± 1003004.4845603222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91680695.875,
            "unit": "ns",
            "range": "± 1700777.2747791866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189399969.73333332,
            "unit": "ns",
            "range": "± 2376144.5827745073"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53288.166666666664,
            "unit": "ns",
            "range": "± 5029.859880780961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295362.7807017544,
            "unit": "ns",
            "range": "± 11957.27788054859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286223.4054054054,
            "unit": "ns",
            "range": "± 14232.84908753211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259343.60447761195,
            "unit": "ns",
            "range": "± 11962.133082475653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4016119.3076923075,
            "unit": "ns",
            "range": "± 47748.04130430311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3708796.3076923075,
            "unit": "ns",
            "range": "± 57317.53402811484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16008.875,
            "unit": "ns",
            "range": "± 2058.2744911082987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80289.21505376344,
            "unit": "ns",
            "range": "± 6598.142734149188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76617.53333333334,
            "unit": "ns",
            "range": "± 6332.541734049855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91355.1105263158,
            "unit": "ns",
            "range": "± 12183.487271359436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4624.247058823529,
            "unit": "ns",
            "range": "± 622.0307737350214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15139.976744186046,
            "unit": "ns",
            "range": "± 1398.657160419944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493398.914893617,
            "unit": "ns",
            "range": "± 165347.70373352533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773010.2125,
            "unit": "ns",
            "range": "± 143882.0471540239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2370647.094736842,
            "unit": "ns",
            "range": "± 190958.05132580956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6329587.103092783,
            "unit": "ns",
            "range": "± 424939.44140536775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3073733.1739130435,
            "unit": "ns",
            "range": "± 114127.92035222861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3309776.9215686275,
            "unit": "ns",
            "range": "± 134656.3303642043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4184417.7280701753,
            "unit": "ns",
            "range": "± 175730.11353046237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4066432.769230769,
            "unit": "ns",
            "range": "± 185771.07312679302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7138697.2727272725,
            "unit": "ns",
            "range": "± 276557.95789881906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6171049.785416666,
            "unit": "ns",
            "range": "± 72459.11764581231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844410.2003348214,
            "unit": "ns",
            "range": "± 7818.012240685908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234894.129296875,
            "unit": "ns",
            "range": "± 7542.881700118336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2385662.0943509615,
            "unit": "ns",
            "range": "± 12419.704261265899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 755700.3277994791,
            "unit": "ns",
            "range": "± 5863.078474320382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759236.3543619792,
            "unit": "ns",
            "range": "± 6574.068484606108"
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
          "id": "5f85225bb96e54fbe23cd41fe123b5f91ed91cad",
          "message": "Added tests",
          "timestamp": "2023-05-11T13:47:25+09:00",
          "tree_id": "46f8b8a7f885fcc208e20c8d727a992ffe6aa996",
          "url": "https://github.com/greymistcube/libplanet/commit/5f85225bb96e54fbe23cd41fe123b5f91ed91cad"
        },
        "date": 1683783125895,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8339383.7,
            "unit": "ns",
            "range": "± 291842.4075666831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21681569.225806452,
            "unit": "ns",
            "range": "± 970383.7429441386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53045439.441176474,
            "unit": "ns",
            "range": "± 1074869.9046962888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128998914.75,
            "unit": "ns",
            "range": "± 2812298.168110462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214435653.0882353,
            "unit": "ns",
            "range": "± 6873224.499792026"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64215.589887640446,
            "unit": "ns",
            "range": "± 7180.189133430149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348352.875,
            "unit": "ns",
            "range": "± 29904.119023671246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332129.36842105264,
            "unit": "ns",
            "range": "± 25019.401634532667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297324.8085106383,
            "unit": "ns",
            "range": "± 20917.88169299361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4535895.476744186,
            "unit": "ns",
            "range": "± 297302.9396109088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4118683.402777778,
            "unit": "ns",
            "range": "± 202796.91479097234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18386.54651162791,
            "unit": "ns",
            "range": "± 1880.6943627411958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91672.37912087912,
            "unit": "ns",
            "range": "± 10193.816603799214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88356.68681318681,
            "unit": "ns",
            "range": "± 12280.146576135796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97018.66853932584,
            "unit": "ns",
            "range": "± 15928.668722004439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4854.127906976744,
            "unit": "ns",
            "range": "± 504.7427019898735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17535.03448275862,
            "unit": "ns",
            "range": "± 1881.0335447491443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1736448.9247311829,
            "unit": "ns",
            "range": "± 166027.68427769459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3336450.9176470586,
            "unit": "ns",
            "range": "± 336512.94337702217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2872463.8,
            "unit": "ns",
            "range": "± 328262.7140204588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7502292.847826087,
            "unit": "ns",
            "range": "± 661473.631824976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3559938.75,
            "unit": "ns",
            "range": "± 199539.0181223315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3869017.4318181816,
            "unit": "ns",
            "range": "± 217799.67107929286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4916879.277777778,
            "unit": "ns",
            "range": "± 370205.29266935814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4730203.277777778,
            "unit": "ns",
            "range": "± 329197.7012909364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8615320.423529413,
            "unit": "ns",
            "range": "± 465307.8679137987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6628086.155133928,
            "unit": "ns",
            "range": "± 87108.98328601177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2069134.1905691964,
            "unit": "ns",
            "range": "± 31836.051941700283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379503.1559895833,
            "unit": "ns",
            "range": "± 25428.79931996087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2998087.3297991073,
            "unit": "ns",
            "range": "± 47912.49699815632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880665.5826171875,
            "unit": "ns",
            "range": "± 11524.746630059457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 814132.4876302084,
            "unit": "ns",
            "range": "± 11577.24312586617"
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
          "id": "fe317ba5eac6d7b8038772df6772515155e5c863",
          "message": "Simple renaming",
          "timestamp": "2023-05-11T14:18:31+09:00",
          "tree_id": "add43c9de0533eb4bf46a9fcf89c94180ef0279e",
          "url": "https://github.com/greymistcube/libplanet/commit/fe317ba5eac6d7b8038772df6772515155e5c863"
        },
        "date": 1683783263060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9819396.227272727,
            "unit": "ns",
            "range": "± 2045517.4496140473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20559691.07142857,
            "unit": "ns",
            "range": "± 698885.4950207839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49924815.21428572,
            "unit": "ns",
            "range": "± 783907.6874920559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103093581.85416667,
            "unit": "ns",
            "range": "± 4056333.0605872055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204511990.5,
            "unit": "ns",
            "range": "± 2489233.0535116405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65416.33157894737,
            "unit": "ns",
            "range": "± 9819.194271504426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324057.5483870968,
            "unit": "ns",
            "range": "± 27289.473128294652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323217.0416666667,
            "unit": "ns",
            "range": "± 40322.64275432579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294454.98876404495,
            "unit": "ns",
            "range": "± 20009.532656901294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4248933.40625,
            "unit": "ns",
            "range": "± 252971.56809739364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3774874.8,
            "unit": "ns",
            "range": "± 96937.64783182366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19841.1875,
            "unit": "ns",
            "range": "± 5411.176129208491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89010.17894736842,
            "unit": "ns",
            "range": "± 13977.389198561465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93538.89690721649,
            "unit": "ns",
            "range": "± 19142.21539364661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104460.375,
            "unit": "ns",
            "range": "± 15059.311408210991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6317.315789473684,
            "unit": "ns",
            "range": "± 1676.8819041580482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18036.663265306124,
            "unit": "ns",
            "range": "± 3944.868214630445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1573316.875,
            "unit": "ns",
            "range": "± 185182.203391104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2879400.4204545454,
            "unit": "ns",
            "range": "± 159699.11792681512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2372505.8969072164,
            "unit": "ns",
            "range": "± 151032.02758724475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6217311.696078432,
            "unit": "ns",
            "range": "± 250729.66524103357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3384975.6774193547,
            "unit": "ns",
            "range": "± 101826.71754812587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3455230.335443038,
            "unit": "ns",
            "range": "± 177610.78935395257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4560916.888888889,
            "unit": "ns",
            "range": "± 207729.10006738192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4622303.612903226,
            "unit": "ns",
            "range": "± 621476.1749815311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8101480.715909091,
            "unit": "ns",
            "range": "± 431351.47633986955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6390711.217548077,
            "unit": "ns",
            "range": "± 80607.58725564038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2117822.8473772323,
            "unit": "ns",
            "range": "± 28158.123221233785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321350.3860212055,
            "unit": "ns",
            "range": "± 21922.76055038672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2746164.231863839,
            "unit": "ns",
            "range": "± 47802.33462509677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 889053.4135044643,
            "unit": "ns",
            "range": "± 12659.603762927782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798968.7089092548,
            "unit": "ns",
            "range": "± 5390.666839270832"
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
          "id": "79683e7ea42c28878db9410dae50381eb3443fc3",
          "message": "Changelog",
          "timestamp": "2023-05-11T14:22:53+09:00",
          "tree_id": "895f0a56b78b1b401ca20452e4807092a9c7f7be",
          "url": "https://github.com/greymistcube/libplanet/commit/79683e7ea42c28878db9410dae50381eb3443fc3"
        },
        "date": 1683783876936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8084977.214285715,
            "unit": "ns",
            "range": "± 563211.7197273986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21199261.302083332,
            "unit": "ns",
            "range": "± 1428660.9626500919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54808927.14285714,
            "unit": "ns",
            "range": "± 965125.2995151704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108231766.20731707,
            "unit": "ns",
            "range": "± 5729819.903149341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230651237.56666666,
            "unit": "ns",
            "range": "± 4202004.933479348"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79095.85393258427,
            "unit": "ns",
            "range": "± 11535.795612856691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361473.9587628866,
            "unit": "ns",
            "range": "± 40336.39274818439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341314.3298969072,
            "unit": "ns",
            "range": "± 43539.497188310146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330253.71428571426,
            "unit": "ns",
            "range": "± 31916.991279910842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4297259.302083333,
            "unit": "ns",
            "range": "± 251113.24672344947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3957389.1785714286,
            "unit": "ns",
            "range": "± 169339.65426498812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29140.69540229885,
            "unit": "ns",
            "range": "± 4177.566605147515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116087.47872340426,
            "unit": "ns",
            "range": "± 23979.992938437226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112593.65263157895,
            "unit": "ns",
            "range": "± 20426.413382577073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134998.25773195876,
            "unit": "ns",
            "range": "± 30393.92146647033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8465.229166666666,
            "unit": "ns",
            "range": "± 2083.8286194768702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21878.297872340427,
            "unit": "ns",
            "range": "± 4352.7923921596275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1566830.085106383,
            "unit": "ns",
            "range": "± 186523.80385203796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3008476.9545454546,
            "unit": "ns",
            "range": "± 102005.27644639203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2600909.2,
            "unit": "ns",
            "range": "± 282970.9677411917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7305895.896907217,
            "unit": "ns",
            "range": "± 736923.1241632542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3486845.2258064514,
            "unit": "ns",
            "range": "± 157758.12081450384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3710668.2157894736,
            "unit": "ns",
            "range": "± 346712.39232096827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4707153.762886598,
            "unit": "ns",
            "range": "± 344671.1185899046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4615109.4639175255,
            "unit": "ns",
            "range": "± 292087.4508661412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8021859.337837838,
            "unit": "ns",
            "range": "± 398333.77997384826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7036492.711438301,
            "unit": "ns",
            "range": "± 246367.8668505853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2318166.0501644737,
            "unit": "ns",
            "range": "± 46777.420075355774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375415.4467625474,
            "unit": "ns",
            "range": "± 43570.71590638169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3095113.8284438774,
            "unit": "ns",
            "range": "± 251161.3468667631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 917362.5553230407,
            "unit": "ns",
            "range": "± 42095.29265271491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811193.5141113282,
            "unit": "ns",
            "range": "± 17704.00793622112"
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
          "id": "3e5ebae41403367a100bc0482c371392b73c7c38",
          "message": "Changelog",
          "timestamp": "2023-05-11T20:57:45+09:00",
          "tree_id": "153388e3a0fd97dc00b3a1a2c13be7066c042582",
          "url": "https://github.com/greymistcube/libplanet/commit/3e5ebae41403367a100bc0482c371392b73c7c38"
        },
        "date": 1683807349314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9575531.885416666,
            "unit": "ns",
            "range": "± 1888169.137268737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22258911.94845361,
            "unit": "ns",
            "range": "± 2115024.6746994783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54709085.234042555,
            "unit": "ns",
            "range": "± 3853731.607103174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105114910.91358025,
            "unit": "ns",
            "range": "± 5511579.631146789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222270431.2804878,
            "unit": "ns",
            "range": "± 8008023.670310973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73725.98453608247,
            "unit": "ns",
            "range": "± 10310.790025010814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322966.4137931034,
            "unit": "ns",
            "range": "± 22604.65715163721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309174.5869565217,
            "unit": "ns",
            "range": "± 26046.24233941135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307710.702247191,
            "unit": "ns",
            "range": "± 22594.34817512183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271369.238095238,
            "unit": "ns",
            "range": "± 286980.41734390584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764368.535714286,
            "unit": "ns",
            "range": "± 232289.85565859365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18576.217391304348,
            "unit": "ns",
            "range": "± 2537.756311208552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95712.793814433,
            "unit": "ns",
            "range": "± 12315.428315005722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98020.68,
            "unit": "ns",
            "range": "± 16833.24405009626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118014.24226804124,
            "unit": "ns",
            "range": "± 18246.53891054773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8293.62886597938,
            "unit": "ns",
            "range": "± 2014.583369456675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18598.826315789473,
            "unit": "ns",
            "range": "± 3113.4988201416613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1531666.8260869565,
            "unit": "ns",
            "range": "± 192395.72442809425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2882521.777777778,
            "unit": "ns",
            "range": "± 207465.4447750344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2453582.375,
            "unit": "ns",
            "range": "± 280599.7798795044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6653793.142857143,
            "unit": "ns",
            "range": "± 533329.0601643932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421755.163043478,
            "unit": "ns",
            "range": "± 394661.45497431804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3612967.2736842106,
            "unit": "ns",
            "range": "± 336105.6115265989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4874314.680851064,
            "unit": "ns",
            "range": "± 632255.5494342902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4475124.839080459,
            "unit": "ns",
            "range": "± 445697.00097709184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8233771.725274725,
            "unit": "ns",
            "range": "± 855037.4607867848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6702049.188648897,
            "unit": "ns",
            "range": "± 358679.3055585821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2168047.222177934,
            "unit": "ns",
            "range": "± 171663.60177064058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366379.6627103365,
            "unit": "ns",
            "range": "± 16261.072802311313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735059.7897460936,
            "unit": "ns",
            "range": "± 91388.46282801763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823388.1238536006,
            "unit": "ns",
            "range": "± 20715.542189271746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849004.1852213541,
            "unit": "ns",
            "range": "± 14070.557231592296"
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
          "id": "b003710d0bc5b2f0a2aee3875c2c7490a04c25c5",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:34:50+09:00",
          "tree_id": "f5254e30a552a57037b7e700e8600789629f6456",
          "url": "https://github.com/greymistcube/libplanet/commit/b003710d0bc5b2f0a2aee3875c2c7490a04c25c5"
        },
        "date": 1683881595381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10592798.873563219,
            "unit": "ns",
            "range": "± 2092983.2493956753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32657090.258241758,
            "unit": "ns",
            "range": "± 14601897.47122957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64925276.855421685,
            "unit": "ns",
            "range": "± 11792299.455691705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119926617.27659574,
            "unit": "ns",
            "range": "± 4419737.69893858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243972444.2142857,
            "unit": "ns",
            "range": "± 4256536.463137379"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72425.45161290323,
            "unit": "ns",
            "range": "± 8799.958303404339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385292.7010309278,
            "unit": "ns",
            "range": "± 28695.419319468103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 386850.3958333333,
            "unit": "ns",
            "range": "± 35442.84607126155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 352488.1170212766,
            "unit": "ns",
            "range": "± 13570.810585115956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4981340.785714285,
            "unit": "ns",
            "range": "± 65184.43637176282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4432510.206896552,
            "unit": "ns",
            "range": "± 126657.4952233044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19743.957446808512,
            "unit": "ns",
            "range": "± 1524.0155339208723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99133.73913043478,
            "unit": "ns",
            "range": "± 6621.119315202249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107950.96,
            "unit": "ns",
            "range": "± 16155.258481511351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121969.42708333333,
            "unit": "ns",
            "range": "± 16650.64239617059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6232.186813186813,
            "unit": "ns",
            "range": "± 1004.9339824871628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19080.619565217392,
            "unit": "ns",
            "range": "± 1740.87864541861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1855576.5515463918,
            "unit": "ns",
            "range": "± 191670.0607015636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3496775.9420289854,
            "unit": "ns",
            "range": "± 164703.91154082993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2932983.1326530613,
            "unit": "ns",
            "range": "± 222618.00865791892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7501949.26,
            "unit": "ns",
            "range": "± 300552.4334843756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4124699.2934782607,
            "unit": "ns",
            "range": "± 292821.33759565494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4274391.307692308,
            "unit": "ns",
            "range": "± 260901.17117609855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5401721.8533333335,
            "unit": "ns",
            "range": "± 253078.75304054917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5457653.819277109,
            "unit": "ns",
            "range": "± 422700.8761971146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9983891.487179488,
            "unit": "ns",
            "range": "± 514555.89573546156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7049174.209263393,
            "unit": "ns",
            "range": "± 86722.42079111961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2174754.7591145835,
            "unit": "ns",
            "range": "± 20770.920504231435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1453467.2444852942,
            "unit": "ns",
            "range": "± 29773.0237762556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2898982.8465401786,
            "unit": "ns",
            "range": "± 35747.75801917489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027027.8466145833,
            "unit": "ns",
            "range": "± 9287.541188535415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890010.5416165865,
            "unit": "ns",
            "range": "± 5662.702584094219"
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
          "id": "9a214d79183982ac100c7407d3eaf97566b99f5f",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:35:47+09:00",
          "tree_id": "872e4a36ff416633275d7c1777113ed0d3841682",
          "url": "https://github.com/greymistcube/libplanet/commit/9a214d79183982ac100c7407d3eaf97566b99f5f"
        },
        "date": 1683881695365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8634175.876470588,
            "unit": "ns",
            "range": "± 465661.7740873626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21733134.37341772,
            "unit": "ns",
            "range": "± 1125330.6082886565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54347840.3125,
            "unit": "ns",
            "range": "± 1678472.2718155263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113746114.7804878,
            "unit": "ns",
            "range": "± 5768502.259598209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232079216.6860465,
            "unit": "ns",
            "range": "± 14559652.40291178"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71889.7,
            "unit": "ns",
            "range": "± 7582.083137683309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352878.2555555556,
            "unit": "ns",
            "range": "± 40562.24642310893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314807.5888888889,
            "unit": "ns",
            "range": "± 25227.950583169484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311180.79761904763,
            "unit": "ns",
            "range": "± 16273.364655891195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4238742.541666667,
            "unit": "ns",
            "range": "± 100873.6278214864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3902273.9,
            "unit": "ns",
            "range": "± 87452.05059008351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20139.85106382979,
            "unit": "ns",
            "range": "± 5212.88248684598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108488.72631578948,
            "unit": "ns",
            "range": "± 19114.46315186159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120289.20652173914,
            "unit": "ns",
            "range": "± 14760.02634198939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124941.57608695653,
            "unit": "ns",
            "range": "± 21515.851261839947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7371.315217391304,
            "unit": "ns",
            "range": "± 1033.3437555472642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20975.684210526317,
            "unit": "ns",
            "range": "± 5141.847317393461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1638038.5416666667,
            "unit": "ns",
            "range": "± 224168.05927850865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3022417.5853658537,
            "unit": "ns",
            "range": "± 159341.09723918588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2516181.7688172045,
            "unit": "ns",
            "range": "± 212706.15067460408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6970799.806122449,
            "unit": "ns",
            "range": "± 469008.10779037327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3567499.0204081633,
            "unit": "ns",
            "range": "± 304450.06700237753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3586833.4693877553,
            "unit": "ns",
            "range": "± 247478.6984665238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4727278.640449438,
            "unit": "ns",
            "range": "± 324028.98438570026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4645695.111111111,
            "unit": "ns",
            "range": "± 335518.3365550074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8595385.989473684,
            "unit": "ns",
            "range": "± 761197.8333229987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7175509.0390625,
            "unit": "ns",
            "range": "± 133829.5925504033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2100475.880957031,
            "unit": "ns",
            "range": "± 73782.57715973406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384553.9727450283,
            "unit": "ns",
            "range": "± 43718.17505409458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2989482.791390467,
            "unit": "ns",
            "range": "± 230412.27103080376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943748.4332682291,
            "unit": "ns",
            "range": "± 17220.65453562238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880943.6109375,
            "unit": "ns",
            "range": "± 19558.031012594176"
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
          "id": "8a9bbff0287122d587caf7f3f45e79c272a900c3",
          "message": "Changelog",
          "timestamp": "2023-05-12T17:33:30+09:00",
          "tree_id": "793f87d9639df2f454bc44f46fb33421b935b592",
          "url": "https://github.com/greymistcube/libplanet/commit/8a9bbff0287122d587caf7f3f45e79c272a900c3"
        },
        "date": 1683881747871,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8539998.646153847,
            "unit": "ns",
            "range": "± 394308.7354664739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20994858.833333332,
            "unit": "ns",
            "range": "± 699042.6762316958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61297476,
            "unit": "ns",
            "range": "± 1674012.54174033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105481983.22727273,
            "unit": "ns",
            "range": "± 2586810.5172830145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218005554.625,
            "unit": "ns",
            "range": "± 5622897.197758014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75258.13736263737,
            "unit": "ns",
            "range": "± 7076.714918215912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393850.65591397847,
            "unit": "ns",
            "range": "± 51788.822425788785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389631.4301075269,
            "unit": "ns",
            "range": "± 65084.13548887882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 370582.3617021277,
            "unit": "ns",
            "range": "± 45184.670808852024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4763408.863636363,
            "unit": "ns",
            "range": "± 464108.5883202347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4039694.9615384615,
            "unit": "ns",
            "range": "± 332556.26661157515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21341.14893617021,
            "unit": "ns",
            "range": "± 4919.6104765540495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109556.55208333333,
            "unit": "ns",
            "range": "± 21953.69804305598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131530.88461538462,
            "unit": "ns",
            "range": "± 16209.832892256223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149001.43956043955,
            "unit": "ns",
            "range": "± 28535.283182680192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8728.91111111111,
            "unit": "ns",
            "range": "± 1435.743912366557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24643.449438202246,
            "unit": "ns",
            "range": "± 4387.345824826099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1545902.3232323232,
            "unit": "ns",
            "range": "± 126975.68329391134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3010383.7678571427,
            "unit": "ns",
            "range": "± 128200.73918982627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2506649.452631579,
            "unit": "ns",
            "range": "± 198882.66290308113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6829617.295918368,
            "unit": "ns",
            "range": "± 524466.0189688266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3658557.782608696,
            "unit": "ns",
            "range": "± 394530.2395663087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4090943.9285714286,
            "unit": "ns",
            "range": "± 448712.0322731902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4959062.077319588,
            "unit": "ns",
            "range": "± 390259.8050294198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4812615.472527472,
            "unit": "ns",
            "range": "± 548432.9149900416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8952033.148351649,
            "unit": "ns",
            "range": "± 1406420.5782474678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7646668.653831845,
            "unit": "ns",
            "range": "± 278331.72373209096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2297439.599144345,
            "unit": "ns",
            "range": "± 77904.96791263674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1435016.7221422698,
            "unit": "ns",
            "range": "± 31384.999417262323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2987367.7746332907,
            "unit": "ns",
            "range": "± 242273.19748508808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972916.96671875,
            "unit": "ns",
            "range": "± 39212.23365258065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888595.2328559028,
            "unit": "ns",
            "range": "± 18340.86711672895"
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
          "id": "38460f58fec90972abc9cde7a3a7b891e23d966e",
          "message": "Fixed action type mistake",
          "timestamp": "2023-05-12T18:25:28+09:00",
          "tree_id": "03152d618a43c66948349a07c8fd0dc1eb3ff367",
          "url": "https://github.com/greymistcube/libplanet/commit/38460f58fec90972abc9cde7a3a7b891e23d966e"
        },
        "date": 1683884438085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8796613.733333332,
            "unit": "ns",
            "range": "± 161958.46565200714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21229811.588235293,
            "unit": "ns",
            "range": "± 610414.9200640455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52466605.73076923,
            "unit": "ns",
            "range": "± 1402023.9593730075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99413878.91666667,
            "unit": "ns",
            "range": "± 602836.2976461517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212245994.8859649,
            "unit": "ns",
            "range": "± 8407270.929795012"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61224.48947368421,
            "unit": "ns",
            "range": "± 8224.815167676486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333231.89784946234,
            "unit": "ns",
            "range": "± 33314.04187887424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320789.91752577317,
            "unit": "ns",
            "range": "± 30510.078956479727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315424.8402061856,
            "unit": "ns",
            "range": "± 31746.00234474629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4136480.8529411764,
            "unit": "ns",
            "range": "± 82492.63956404018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3681876.895348837,
            "unit": "ns",
            "range": "± 136140.0842924284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15936.313953488372,
            "unit": "ns",
            "range": "± 1631.1307608825014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83172.01041666667,
            "unit": "ns",
            "range": "± 8998.562337214344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82041.63541666667,
            "unit": "ns",
            "range": "± 12906.63491152376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111052.67708333333,
            "unit": "ns",
            "range": "± 13626.451885555683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4831.670212765957,
            "unit": "ns",
            "range": "± 707.985289141529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15753.988505747126,
            "unit": "ns",
            "range": "± 1940.386951904738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580609.23,
            "unit": "ns",
            "range": "± 163727.02004219114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922518.5384615385,
            "unit": "ns",
            "range": "± 136515.01813011235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2520617.4226804124,
            "unit": "ns",
            "range": "± 309623.1427980848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6410424.729411765,
            "unit": "ns",
            "range": "± 427715.32716787077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3326291.8604651163,
            "unit": "ns",
            "range": "± 173851.4611976634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3941440.2282608696,
            "unit": "ns",
            "range": "± 372277.9338762762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4842113.642857143,
            "unit": "ns",
            "range": "± 364766.6036126925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4689253.4949494945,
            "unit": "ns",
            "range": "± 375781.0497393823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8228359.948453608,
            "unit": "ns",
            "range": "± 601160.35570422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032977.705528846,
            "unit": "ns",
            "range": "± 57237.72024447216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946381.4757982336,
            "unit": "ns",
            "range": "± 44873.15081219095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1263145.7063337055,
            "unit": "ns",
            "range": "± 17021.463814022787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2393676.434795673,
            "unit": "ns",
            "range": "± 18060.081202253874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 745278.8533653846,
            "unit": "ns",
            "range": "± 2764.48449294833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 688074.0010463169,
            "unit": "ns",
            "range": "± 4704.836204019969"
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
          "id": "06038597e939a054280cda2f978f015d512871b3",
          "message": "Fixed action type mistake",
          "timestamp": "2023-05-12T18:19:00+09:00",
          "tree_id": "b8546126da778de818316db9781d517fc6723861",
          "url": "https://github.com/greymistcube/libplanet/commit/06038597e939a054280cda2f978f015d512871b3"
        },
        "date": 1683884463562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8561664.180327868,
            "unit": "ns",
            "range": "± 367348.4387380964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21731886.365384616,
            "unit": "ns",
            "range": "± 897283.8680829623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56854484.095744684,
            "unit": "ns",
            "range": "± 4789763.683255679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113835425.49494949,
            "unit": "ns",
            "range": "± 7510283.505815542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256053801.36956522,
            "unit": "ns",
            "range": "± 14319752.135136781"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73849.76744186046,
            "unit": "ns",
            "range": "± 7582.030161816307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392354.3958333333,
            "unit": "ns",
            "range": "± 82510.5686207249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376795.5543478261,
            "unit": "ns",
            "range": "± 69764.70641154682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332430.5652173913,
            "unit": "ns",
            "range": "± 37311.154609183905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4468154.6486486485,
            "unit": "ns",
            "range": "± 223106.7626125904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4047278.42,
            "unit": "ns",
            "range": "± 285323.6852218005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25279.362637362636,
            "unit": "ns",
            "range": "± 5161.698343496565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118299.45263157894,
            "unit": "ns",
            "range": "± 22821.274367128444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128152.32608695653,
            "unit": "ns",
            "range": "± 16755.493914238436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127811.1978021978,
            "unit": "ns",
            "range": "± 20531.341333688833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8799.440860215054,
            "unit": "ns",
            "range": "± 1327.417822416445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24495.623529411765,
            "unit": "ns",
            "range": "± 5390.339418539321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633641.797979798,
            "unit": "ns",
            "range": "± 202095.94558384432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3095557.9574468085,
            "unit": "ns",
            "range": "± 185246.7836044063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2569416.397959184,
            "unit": "ns",
            "range": "± 231244.58881976563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6784771.619565218,
            "unit": "ns",
            "range": "± 445137.34582682996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3753945.6052631577,
            "unit": "ns",
            "range": "± 360447.6755656946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3655133.9111111113,
            "unit": "ns",
            "range": "± 252509.41792259944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4831976.311827957,
            "unit": "ns",
            "range": "± 463627.8150769678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4534279.68556701,
            "unit": "ns",
            "range": "± 345720.52403514006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7910660.19117647,
            "unit": "ns",
            "range": "± 377755.78025342425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7656262.628761574,
            "unit": "ns",
            "range": "± 301742.5329693889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2162053.3418496624,
            "unit": "ns",
            "range": "± 103524.73853754796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375831.0065104167,
            "unit": "ns",
            "range": "± 31908.807216463334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3275977.5744402385,
            "unit": "ns",
            "range": "± 273601.06131611555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018135.2963541667,
            "unit": "ns",
            "range": "± 38740.51742566617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969933.2143422719,
            "unit": "ns",
            "range": "± 47305.19135763302"
          }
        ]
      }
    ]
  }
}