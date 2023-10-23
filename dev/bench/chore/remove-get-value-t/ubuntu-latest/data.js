window.BENCHMARK_DATA = {
  "lastUpdate": 1698035317879,
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
          "id": "cc8d01b4188659f912a2250585938d8eb7656120",
          "message": "Refactored Libplanet.Consensus",
          "timestamp": "2023-10-23T10:42:20+09:00",
          "tree_id": "33c46268ccbbc94cb4f79bb7c37c98e22226b010",
          "url": "https://github.com/greymistcube/libplanet/commit/cc8d01b4188659f912a2250585938d8eb7656120"
        },
        "date": 1698026670922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6001139.302455357,
            "unit": "ns",
            "range": "± 38903.51782963668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862650.920703125,
            "unit": "ns",
            "range": "± 13304.362981062184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308165.019140625,
            "unit": "ns",
            "range": "± 3970.2417718225247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3070129.099739583,
            "unit": "ns",
            "range": "± 20172.623973748687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977552.7329427083,
            "unit": "ns",
            "range": "± 6032.507888577239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888191.3577008928,
            "unit": "ns",
            "range": "± 4151.081604432072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4094871.2739726026,
            "unit": "ns",
            "range": "± 201893.98476911505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4518683.5,
            "unit": "ns",
            "range": "± 88647.40768159364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5333137.263157895,
            "unit": "ns",
            "range": "± 162669.64692378003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5287570.352941177,
            "unit": "ns",
            "range": "± 165553.56482527492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12945385.468085106,
            "unit": "ns",
            "range": "± 457211.79545065423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57110.54347826087,
            "unit": "ns",
            "range": "± 3337.324461080826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10391117.92631579,
            "unit": "ns",
            "range": "± 854674.1794488211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26555509.88235294,
            "unit": "ns",
            "range": "± 391204.02211088693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68863045.03448276,
            "unit": "ns",
            "range": "± 2817632.583381752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140416300.75,
            "unit": "ns",
            "range": "± 4597054.161881009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262455459.33333334,
            "unit": "ns",
            "range": "± 4094431.667469416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324915.53658536583,
            "unit": "ns",
            "range": "± 11444.3338405902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312611.55102040817,
            "unit": "ns",
            "range": "± 12462.112346129406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276904.60638297873,
            "unit": "ns",
            "range": "± 15446.765339240128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5218207.2727272725,
            "unit": "ns",
            "range": "± 127922.54668471476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4819120.5,
            "unit": "ns",
            "range": "± 192429.96619814806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24978.106382978724,
            "unit": "ns",
            "range": "± 2246.8481746089933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106712.95789473684,
            "unit": "ns",
            "range": "± 7491.767579569817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89633.03157894737,
            "unit": "ns",
            "range": "± 8314.72928571561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97209.98947368421,
            "unit": "ns",
            "range": "± 10324.748916111186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6849.051546391753,
            "unit": "ns",
            "range": "± 666.0120802697893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24976.178947368422,
            "unit": "ns",
            "range": "± 2667.1479108357444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732360.4736842106,
            "unit": "ns",
            "range": "± 169556.55089265548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3272324.8636363638,
            "unit": "ns",
            "range": "± 127969.55503995699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638208.5555555555,
            "unit": "ns",
            "range": "± 257723.6061421276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11480262.5,
            "unit": "ns",
            "range": "± 747904.4513031773"
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
          "id": "021aa437738f54832337f9d588906a63f390b7fa",
          "message": "Merge pull request #3457 from greymistcube/chore/remove-get-value-t\n\n🧹 Partial removal of `Bencodex.Types.Dictionary.GetValue<T>()` usage",
          "timestamp": "2023-10-23T11:29:16+09:00",
          "tree_id": "33c46268ccbbc94cb4f79bb7c37c98e22226b010",
          "url": "https://github.com/greymistcube/libplanet/commit/021aa437738f54832337f9d588906a63f390b7fa"
        },
        "date": 1698035030243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869669.557692308,
            "unit": "ns",
            "range": "± 13622.149512883952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1587288.5087890625,
            "unit": "ns",
            "range": "± 1428.1439110373503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1048788.7326822917,
            "unit": "ns",
            "range": "± 2863.0008671730902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523123.6966145835,
            "unit": "ns",
            "range": "± 3655.144801050814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803235.7134114583,
            "unit": "ns",
            "range": "± 1089.328482949871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737622.898577009,
            "unit": "ns",
            "range": "± 1566.9471909209542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3103728,
            "unit": "ns",
            "range": "± 34094.572805202166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3517402.6666666665,
            "unit": "ns",
            "range": "± 82935.42488426362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4063941.1304347827,
            "unit": "ns",
            "range": "± 156407.18832125454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3815151.2162162163,
            "unit": "ns",
            "range": "± 128450.31132982798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9655188,
            "unit": "ns",
            "range": "± 211134.06641365017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50693.07142857143,
            "unit": "ns",
            "range": "± 879.2011640194677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7679862.153846154,
            "unit": "ns",
            "range": "± 25164.28074952721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19204493.066666666,
            "unit": "ns",
            "range": "± 106671.51948285426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49586815.266666666,
            "unit": "ns",
            "range": "± 285551.4319401439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99398631.4,
            "unit": "ns",
            "range": "± 1364750.440882916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195706855.14285713,
            "unit": "ns",
            "range": "± 1723887.1754967412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262354.9347826087,
            "unit": "ns",
            "range": "± 10054.911466325904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254496.09523809524,
            "unit": "ns",
            "range": "± 5958.457442197283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216985.23076923078,
            "unit": "ns",
            "range": "± 1732.266634299608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4000252.0714285714,
            "unit": "ns",
            "range": "± 26021.519838141914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3655781.7333333334,
            "unit": "ns",
            "range": "± 32485.95395038703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16860.052631578947,
            "unit": "ns",
            "range": "± 1267.2159329035849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81697.675,
            "unit": "ns",
            "range": "± 4290.676352735551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68695,
            "unit": "ns",
            "range": "± 1467.1993350901196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72772.35051546391,
            "unit": "ns",
            "range": "± 8681.725456192014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4730.938144329897,
            "unit": "ns",
            "range": "± 396.42353756307233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16547.979591836734,
            "unit": "ns",
            "range": "± 2021.7666102652247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1234732.1904761905,
            "unit": "ns",
            "range": "± 65274.40929884145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2433963.0833333335,
            "unit": "ns",
            "range": "± 62719.282950451845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1905263.05,
            "unit": "ns",
            "range": "± 99493.63171286487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8238346.788461538,
            "unit": "ns",
            "range": "± 339952.8136774127"
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
          "id": "bc1a8f45762a0be86c2a57a7b56a4682b9d2b122",
          "message": "General refactoring to remove Dictionary.GetValue<T>()",
          "timestamp": "2023-10-23T13:14:39+09:00",
          "tree_id": "5a44d0212adea7c22b896eebf945ad16911a6b5c",
          "url": "https://github.com/greymistcube/libplanet/commit/bc1a8f45762a0be86c2a57a7b56a4682b9d2b122"
        },
        "date": 1698035310539,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5065110.290736607,
            "unit": "ns",
            "range": "± 24027.27303989652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1587948.9222935268,
            "unit": "ns",
            "range": "± 2355.0418905206884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072570.9465680805,
            "unit": "ns",
            "range": "± 2299.400679499808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615179.029166667,
            "unit": "ns",
            "range": "± 3665.7015512115927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827000.0054036458,
            "unit": "ns",
            "range": "± 1215.6617898536697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765348.6847205529,
            "unit": "ns",
            "range": "± 601.9952678890273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3437257.7391304346,
            "unit": "ns",
            "range": "± 86821.18878592702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3630543.75,
            "unit": "ns",
            "range": "± 128823.03559290859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4315870,
            "unit": "ns",
            "range": "± 112243.46843617821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4351787.619047619,
            "unit": "ns",
            "range": "± 154784.30800451542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10761069.324324325,
            "unit": "ns",
            "range": "± 339490.53249800764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50823.40789473684,
            "unit": "ns",
            "range": "± 2595.4972455010443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8108751.933333334,
            "unit": "ns",
            "range": "± 151048.01776514962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22252137.4,
            "unit": "ns",
            "range": "± 270670.38628687424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56505577,
            "unit": "ns",
            "range": "± 294367.57996214397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114085551.16,
            "unit": "ns",
            "range": "± 2827491.544973605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224129050.6,
            "unit": "ns",
            "range": "± 2119451.2995907622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277129.67647058825,
            "unit": "ns",
            "range": "± 6997.76662952172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266156.2916666667,
            "unit": "ns",
            "range": "± 6810.355621686769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230586,
            "unit": "ns",
            "range": "± 7478.310847720569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4421986.8,
            "unit": "ns",
            "range": "± 74848.27474984691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3979867.6923076925,
            "unit": "ns",
            "range": "± 50209.54720698812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20908.739583333332,
            "unit": "ns",
            "range": "± 1447.886686790471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87812.13402061856,
            "unit": "ns",
            "range": "± 5968.203120895606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75303.3125,
            "unit": "ns",
            "range": "± 3493.128187701431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83742.8350515464,
            "unit": "ns",
            "range": "± 9476.480482050034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5145.505154639175,
            "unit": "ns",
            "range": "± 535.3693647791088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19994.989130434784,
            "unit": "ns",
            "range": "± 1387.107548652557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397467.2857142857,
            "unit": "ns",
            "range": "± 74191.44169095546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693807.976190476,
            "unit": "ns",
            "range": "± 98391.03919701079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106106.6091954024,
            "unit": "ns",
            "range": "± 114926.2085100551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9422921.91111111,
            "unit": "ns",
            "range": "± 529364.5742936247"
          }
        ]
      }
    ]
  }
}