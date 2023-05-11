window.BENCHMARK_DATA = {
  "lastUpdate": 1683807366045,
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
      }
    ]
  }
}