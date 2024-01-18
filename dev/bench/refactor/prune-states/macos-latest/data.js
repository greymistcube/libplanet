window.BENCHMARK_DATA = {
  "lastUpdate": 1705569155612,
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
          "id": "46bdf3567a04df25b0114e104657b6d6f285e9b4",
          "message": "Updated tests",
          "timestamp": "2024-01-18T17:29:08+09:00",
          "tree_id": "9ecf5d78b18d3302db8b279468415eba52fde7b0",
          "url": "https://github.com/greymistcube/libplanet/commit/46bdf3567a04df25b0114e104657b6d6f285e9b4"
        },
        "date": 1705567456275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7671660,
            "unit": "ns",
            "range": "± 97321.82497340381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18944079.076923076,
            "unit": "ns",
            "range": "± 196677.15251754652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46316786,
            "unit": "ns",
            "range": "± 621897.7825599638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92821131.76923077,
            "unit": "ns",
            "range": "± 1094614.8593149977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193830965.53703704,
            "unit": "ns",
            "range": "± 4759926.111953157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44111.104166666664,
            "unit": "ns",
            "range": "± 10144.16560598587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221831.92631578946,
            "unit": "ns",
            "range": "± 15676.20371722295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212638.42857142858,
            "unit": "ns",
            "range": "± 18136.413891605447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198618.60638297873,
            "unit": "ns",
            "range": "± 19632.365482543715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3729227.3846153845,
            "unit": "ns",
            "range": "± 23129.629037731604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445715.24,
            "unit": "ns",
            "range": "± 73138.91099492344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12682.280898876405,
            "unit": "ns",
            "range": "± 1031.751423427483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57745.557471264365,
            "unit": "ns",
            "range": "± 5013.279257657935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52288.083333333336,
            "unit": "ns",
            "range": "± 3151.8247008326966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66819.41489361702,
            "unit": "ns",
            "range": "± 11264.455678337865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4392.6082474226805,
            "unit": "ns",
            "range": "± 984.3899819674812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13418.130434782608,
            "unit": "ns",
            "range": "± 1353.0656540310565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1234085.1979166667,
            "unit": "ns",
            "range": "± 119235.24520359078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628656.0483870967,
            "unit": "ns",
            "range": "± 231432.44899878767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1813847.7422680412,
            "unit": "ns",
            "range": "± 159107.07952843676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7816008.652777778,
            "unit": "ns",
            "range": "± 383786.7034499271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2919818.2926829266,
            "unit": "ns",
            "range": "± 102930.7872978838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3008353.688888889,
            "unit": "ns",
            "range": "± 113955.24653162234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3589916.696969697,
            "unit": "ns",
            "range": "± 113816.25280921132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3449787.3396226414,
            "unit": "ns",
            "range": "± 134866.59812612316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12855447.677083334,
            "unit": "ns",
            "range": "± 1901529.8689051268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4438643.556547619,
            "unit": "ns",
            "range": "± 105539.86885050766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1382588.1253551135,
            "unit": "ns",
            "range": "± 42599.11889692288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883291.0396634615,
            "unit": "ns",
            "range": "± 10977.90333094982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2037798.58140625,
            "unit": "ns",
            "range": "± 54113.13485166867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 656858.8285875822,
            "unit": "ns",
            "range": "± 13978.250428223291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568493.1041666666,
            "unit": "ns",
            "range": "± 9393.033930579411"
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
          "id": "495d6a63ec278b00b1670cfe939f427911395c13",
          "message": "Cleanup",
          "timestamp": "2024-01-18T17:49:25+09:00",
          "tree_id": "009385a465be7a7476be875e4213d904893c2914",
          "url": "https://github.com/greymistcube/libplanet/commit/495d6a63ec278b00b1670cfe939f427911395c13"
        },
        "date": 1705568771078,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570350.25257732,
            "unit": "ns",
            "range": "± 1819892.539887721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27800257.582474228,
            "unit": "ns",
            "range": "± 3873662.569033823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65874652.12,
            "unit": "ns",
            "range": "± 8603841.274141625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124985755.38541667,
            "unit": "ns",
            "range": "± 12294245.15304701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223338382.47727272,
            "unit": "ns",
            "range": "± 7929158.265789754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60744.552083333336,
            "unit": "ns",
            "range": "± 17016.339509189267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245588.27659574468,
            "unit": "ns",
            "range": "± 20036.29154146296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251535.36666666667,
            "unit": "ns",
            "range": "± 26539.553218934827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217501.9387755102,
            "unit": "ns",
            "range": "± 24976.07213432688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3814934.1764705884,
            "unit": "ns",
            "range": "± 75094.7047685748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3658933.1666666665,
            "unit": "ns",
            "range": "± 75750.96915008065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19590.81052631579,
            "unit": "ns",
            "range": "± 4518.52370518913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87180.5,
            "unit": "ns",
            "range": "± 14891.96792949766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82652.45604395604,
            "unit": "ns",
            "range": "± 14641.062012111379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82375.81578947368,
            "unit": "ns",
            "range": "± 19211.348590486137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6957.521052631579,
            "unit": "ns",
            "range": "± 1209.0993393092351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16588.76530612245,
            "unit": "ns",
            "range": "± 4521.471724184323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1180155.4888888889,
            "unit": "ns",
            "range": "± 117447.83395797995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2482354.623655914,
            "unit": "ns",
            "range": "± 264233.058413439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1598727.7692307692,
            "unit": "ns",
            "range": "± 123642.70462524732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6797045.825,
            "unit": "ns",
            "range": "± 237923.0937230841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3132350.966666667,
            "unit": "ns",
            "range": "± 292864.5962596831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3061499.7804878047,
            "unit": "ns",
            "range": "± 107652.96241383984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3756546.434782609,
            "unit": "ns",
            "range": "± 131824.75045498047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3577289.409090909,
            "unit": "ns",
            "range": "± 134026.61761048745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14064761.979591837,
            "unit": "ns",
            "range": "± 2661954.7783878557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4553683.459821428,
            "unit": "ns",
            "range": "± 165662.53128393344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1416076.5821063702,
            "unit": "ns",
            "range": "± 82158.71296861774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 908384.2142857143,
            "unit": "ns",
            "range": "± 11900.707810267444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2072028.265625,
            "unit": "ns",
            "range": "± 43600.545888099725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638957.6066973286,
            "unit": "ns",
            "range": "± 5781.605588826849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564188.7328125,
            "unit": "ns",
            "range": "± 7465.717028854679"
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
          "id": "68f2077e2ff4db26b123f780936181347efa6d4b",
          "message": "Added more tests",
          "timestamp": "2024-01-18T17:59:41+09:00",
          "tree_id": "705c92c4cf6548c4b414ddfaeb27786aaed27e59",
          "url": "https://github.com/greymistcube/libplanet/commit/68f2077e2ff4db26b123f780936181347efa6d4b"
        },
        "date": 1705569139489,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7633379.153846154,
            "unit": "ns",
            "range": "± 24476.52856597572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19470388.62857143,
            "unit": "ns",
            "range": "± 633161.0142811963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46654981.538461536,
            "unit": "ns",
            "range": "± 1223901.6901025092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94527495.16666667,
            "unit": "ns",
            "range": "± 1626864.4744921646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192270991.3125,
            "unit": "ns",
            "range": "± 3603486.008018341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34344.572289156626,
            "unit": "ns",
            "range": "± 3015.1212360171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218962.85416666666,
            "unit": "ns",
            "range": "± 15066.904541501526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208973.56666666668,
            "unit": "ns",
            "range": "± 11964.339826512354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194326.79381443298,
            "unit": "ns",
            "range": "± 13831.69757969756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3862841.5,
            "unit": "ns",
            "range": "± 71863.90907541839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3562280.5384615385,
            "unit": "ns",
            "range": "± 43364.48245706653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12636.612359550561,
            "unit": "ns",
            "range": "± 963.186997304949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60556.08791208791,
            "unit": "ns",
            "range": "± 4920.303619015467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55059.763636363634,
            "unit": "ns",
            "range": "± 2320.74998225459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62258.14736842105,
            "unit": "ns",
            "range": "± 11910.092729660646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3227.8370786516853,
            "unit": "ns",
            "range": "± 340.6009710063371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11508.981481481482,
            "unit": "ns",
            "range": "± 609.243303432855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1060486.469387755,
            "unit": "ns",
            "range": "± 82464.03919350119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2262875.683333333,
            "unit": "ns",
            "range": "± 100331.51166626069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1594282.7666666666,
            "unit": "ns",
            "range": "± 178635.2526050836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6996804.41954023,
            "unit": "ns",
            "range": "± 455497.04573374335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2976823.7586206896,
            "unit": "ns",
            "range": "± 84973.41835314281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3030581.0681818184,
            "unit": "ns",
            "range": "± 105562.93554445464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3575595.511627907,
            "unit": "ns",
            "range": "± 132540.6404668057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3463827.238095238,
            "unit": "ns",
            "range": "± 124782.06457798478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13056894.347368421,
            "unit": "ns",
            "range": "± 2175329.644462238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4271438.261160715,
            "unit": "ns",
            "range": "± 64341.60473073413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1328974.9019252232,
            "unit": "ns",
            "range": "± 11227.810915802504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 872780.2767578125,
            "unit": "ns",
            "range": "± 12417.65382453716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982010.4989583334,
            "unit": "ns",
            "range": "± 31517.440291357136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618139.8934244792,
            "unit": "ns",
            "range": "± 5848.218970619808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562827.9134114584,
            "unit": "ns",
            "range": "± 4922.2631603299915"
          }
        ]
      }
    ]
  }
}