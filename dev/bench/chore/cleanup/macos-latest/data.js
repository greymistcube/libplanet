window.BENCHMARK_DATA = {
  "lastUpdate": 1690639928401,
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
          "id": "66033e1ce636c296e1edaab4a22a1a154308564f",
          "message": "[skip changelog] Removed unnecessary logic",
          "timestamp": "2023-04-02T16:23:54+09:00",
          "tree_id": "41907a4c6eb70917b203d19d7c24f302f756b587",
          "url": "https://github.com/greymistcube/libplanet/commit/66033e1ce636c296e1edaab4a22a1a154308564f"
        },
        "date": 1680421107951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7677413.639534884,
            "unit": "ns",
            "range": "± 281862.4563634997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19285345.16923077,
            "unit": "ns",
            "range": "± 849699.7921191336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46617659.89285714,
            "unit": "ns",
            "range": "± 1306579.5720018242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95133665.93333334,
            "unit": "ns",
            "range": "± 1770513.2131211266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195876688.73333332,
            "unit": "ns",
            "range": "± 3442582.571741795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55693.510869565216,
            "unit": "ns",
            "range": "± 5851.696508949142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192957.6690140845,
            "unit": "ns",
            "range": "± 8783.633244337228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195310.91666666666,
            "unit": "ns",
            "range": "± 9866.641906497074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169747.59722222222,
            "unit": "ns",
            "range": "± 7942.310397812681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12156541.51898734,
            "unit": "ns",
            "range": "± 605496.1734411867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9602598.636363637,
            "unit": "ns",
            "range": "± 444700.674881695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20545.736842105263,
            "unit": "ns",
            "range": "± 4082.3599615348858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54230.177777777775,
            "unit": "ns",
            "range": "± 7599.306731505226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51678.765957446805,
            "unit": "ns",
            "range": "± 6228.570271101904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115646.68478260869,
            "unit": "ns",
            "range": "± 17552.51648526445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7225.786516853933,
            "unit": "ns",
            "range": "± 742.4341946950602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18137.333333333332,
            "unit": "ns",
            "range": "± 2476.9473084811975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1530590.197802198,
            "unit": "ns",
            "range": "± 184367.3807561185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2749000.203125,
            "unit": "ns",
            "range": "± 126747.44840488333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500245.646067416,
            "unit": "ns",
            "range": "± 311607.3507686524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6144181.04109589,
            "unit": "ns",
            "range": "± 303292.5710975863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3118738.6483516484,
            "unit": "ns",
            "range": "± 176926.3293192567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4871439.542553191,
            "unit": "ns",
            "range": "± 186833.26100376906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23339501.53030303,
            "unit": "ns",
            "range": "± 726255.3384667167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6071835.838709678,
            "unit": "ns",
            "range": "± 394444.50313177885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27166711.612903226,
            "unit": "ns",
            "range": "± 809731.9119177521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6545835.989583333,
            "unit": "ns",
            "range": "± 67812.8261815365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874250.8737444195,
            "unit": "ns",
            "range": "± 13141.283070167314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1252692.7544270833,
            "unit": "ns",
            "range": "± 10912.997972470124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628197.681770833,
            "unit": "ns",
            "range": "± 17585.518963302886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817045.8839285715,
            "unit": "ns",
            "range": "± 5778.535770682998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774563.1229817708,
            "unit": "ns",
            "range": "± 3736.9264908304085"
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
          "id": "265300407ee130b2853963ce8382c321e4570673",
          "message": "[skip changelog] Removed unnecessary logic",
          "timestamp": "2023-04-02T16:27:07+09:00",
          "tree_id": "e367f0043a44abc981b7f55b69d973d07fa9015f",
          "url": "https://github.com/greymistcube/libplanet/commit/265300407ee130b2853963ce8382c321e4570673"
        },
        "date": 1680421290522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8050465.833333333,
            "unit": "ns",
            "range": "± 131771.41995552465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18626491.111111112,
            "unit": "ns",
            "range": "± 452865.5071396714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46854856.666666664,
            "unit": "ns",
            "range": "± 778328.1828601486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94607183.64285715,
            "unit": "ns",
            "range": "± 1680066.916865584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193557372.5,
            "unit": "ns",
            "range": "± 2536640.0556950863"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57649.86021505376,
            "unit": "ns",
            "range": "± 6180.245263163629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368122.125,
            "unit": "ns",
            "range": "± 16551.54890416556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293723.29347826086,
            "unit": "ns",
            "range": "± 17732.020629196286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270171.4,
            "unit": "ns",
            "range": "± 12560.860716179044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5304660.521739131,
            "unit": "ns",
            "range": "± 118764.84335551859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3907065.0689655175,
            "unit": "ns",
            "range": "± 112420.54568415707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17124.633333333335,
            "unit": "ns",
            "range": "± 2109.512346864325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86744.72340425532,
            "unit": "ns",
            "range": "± 7985.146534033298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84509.57368421053,
            "unit": "ns",
            "range": "± 10415.579788197107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218632.30927835053,
            "unit": "ns",
            "range": "± 21623.590821793467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5730.83908045977,
            "unit": "ns",
            "range": "± 566.6500473214286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16159.220930232557,
            "unit": "ns",
            "range": "± 1706.2142383318055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1572753.3020833333,
            "unit": "ns",
            "range": "± 178269.2734353594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2876337.6578947366,
            "unit": "ns",
            "range": "± 121958.73688198655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2540660.7708333335,
            "unit": "ns",
            "range": "± 253939.62595423838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6849290.823529412,
            "unit": "ns",
            "range": "± 299038.13022152596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3130976.8333333335,
            "unit": "ns",
            "range": "± 34451.86373196755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3230528.438202247,
            "unit": "ns",
            "range": "± 184181.50424488357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4262534.451612903,
            "unit": "ns",
            "range": "± 129626.44995211913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4372286.409638554,
            "unit": "ns",
            "range": "± 233346.09686273747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8839664.764044944,
            "unit": "ns",
            "range": "± 481070.84202740353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6370273.532291667,
            "unit": "ns",
            "range": "± 46643.33866818916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854827.7191685268,
            "unit": "ns",
            "range": "± 9027.056184064319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1229852.644810268,
            "unit": "ns",
            "range": "± 5284.223638129884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2561606.0260416665,
            "unit": "ns",
            "range": "± 15724.953540634753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833145.8664713542,
            "unit": "ns",
            "range": "± 3392.5128513456298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 705837.3928385417,
            "unit": "ns",
            "range": "± 5256.167368134948"
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
          "id": "e6e7c5082725742dd69ee165974a08c04d8b771c",
          "message": "[skip changelog] Slight change in implementation",
          "timestamp": "2023-07-04T10:30:46+09:00",
          "tree_id": "8cb62205772d1d88fcd5acb80b23a66cd0d0fc45",
          "url": "https://github.com/greymistcube/libplanet/commit/e6e7c5082725742dd69ee165974a08c04d8b771c"
        },
        "date": 1688435382955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8475303.42,
            "unit": "ns",
            "range": "± 337881.37239407207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23838457.43478261,
            "unit": "ns",
            "range": "± 3712238.969958706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54045874.11111111,
            "unit": "ns",
            "range": "± 3284023.48135688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108020809.42857143,
            "unit": "ns",
            "range": "± 3084438.1419094363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226482960.0357143,
            "unit": "ns",
            "range": "± 6479724.963904744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75655.31818181818,
            "unit": "ns",
            "range": "± 6611.408973149394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359885.24725274724,
            "unit": "ns",
            "range": "± 44672.07034318557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358371.10638297873,
            "unit": "ns",
            "range": "± 37330.348143363066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318950.3333333333,
            "unit": "ns",
            "range": "± 8668.846782500053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256603.269230769,
            "unit": "ns",
            "range": "± 33788.91573468496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822888.3333333335,
            "unit": "ns",
            "range": "± 104901.09038371484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24845.78888888889,
            "unit": "ns",
            "range": "± 4684.879150754961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119419.93157894736,
            "unit": "ns",
            "range": "± 22860.062974659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135950.5,
            "unit": "ns",
            "range": "± 30146.268471150684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125157.30208333333,
            "unit": "ns",
            "range": "± 18391.6497065608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8758.772727272728,
            "unit": "ns",
            "range": "± 1017.592964797944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22221.406593406595,
            "unit": "ns",
            "range": "± 4164.758773801436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615421.5918367347,
            "unit": "ns",
            "range": "± 160932.38433250497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2971035.3214285714,
            "unit": "ns",
            "range": "± 127529.78013241486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157996.350515464,
            "unit": "ns",
            "range": "± 203508.23478348082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6016943.875,
            "unit": "ns",
            "range": "± 268005.89336581674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3510788.4587628865,
            "unit": "ns",
            "range": "± 240424.4674423895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3764035.18,
            "unit": "ns",
            "range": "± 324585.796287567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4782106.4387755105,
            "unit": "ns",
            "range": "± 446071.83688405476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4166551.3163265307,
            "unit": "ns",
            "range": "± 367899.12539465417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7728816.278350515,
            "unit": "ns",
            "range": "± 564137.5759066471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7806399.923725329,
            "unit": "ns",
            "range": "± 266746.83704620897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2068650.1058084238,
            "unit": "ns",
            "range": "± 50262.1229842689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299469.7831003289,
            "unit": "ns",
            "range": "± 27472.026377704264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3074528.7685953774,
            "unit": "ns",
            "range": "± 176765.09987892242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875161.2734375,
            "unit": "ns",
            "range": "± 24886.125776626886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 861699.7164809284,
            "unit": "ns",
            "range": "± 17025.65626292554"
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
          "id": "4bc48510732c105db5cf0278a9ecc46cc21984c6",
          "message": "Changelog",
          "timestamp": "2023-07-04T10:58:40+09:00",
          "tree_id": "830e9d5dd54a1b2a5b45579d623027edf1af7156",
          "url": "https://github.com/greymistcube/libplanet/commit/4bc48510732c105db5cf0278a9ecc46cc21984c6"
        },
        "date": 1688436845510,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7708179.230769231,
            "unit": "ns",
            "range": "± 61223.692609089725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19061235.846153848,
            "unit": "ns",
            "range": "± 143728.90016732088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48385703.86956522,
            "unit": "ns",
            "range": "± 1214235.4553127547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95352635.64285715,
            "unit": "ns",
            "range": "± 638122.406315905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198775459.83333334,
            "unit": "ns",
            "range": "± 4671857.414056783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67536.33333333333,
            "unit": "ns",
            "range": "± 9675.695345247033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325792.25531914894,
            "unit": "ns",
            "range": "± 19387.11305025476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332819.8052631579,
            "unit": "ns",
            "range": "± 35674.13307839708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308691.81868131866,
            "unit": "ns",
            "range": "± 18400.32180085695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4308614.261904762,
            "unit": "ns",
            "range": "± 100783.23269319393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3715676.4285714286,
            "unit": "ns",
            "range": "± 63000.57325681103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18456.166666666668,
            "unit": "ns",
            "range": "± 2648.1297417637006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90253.74468085106,
            "unit": "ns",
            "range": "± 10200.3173310707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105585.85567010309,
            "unit": "ns",
            "range": "± 11813.85443909474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119028.73404255319,
            "unit": "ns",
            "range": "± 17620.533070290305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7174.0360824742265,
            "unit": "ns",
            "range": "± 910.8752780276743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19533.655913978495,
            "unit": "ns",
            "range": "± 3895.8418426479534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1547346.8333333333,
            "unit": "ns",
            "range": "± 140084.1737637826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2848849.510638298,
            "unit": "ns",
            "range": "± 95322.1731773637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2128470.387755102,
            "unit": "ns",
            "range": "± 197792.07096674023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5844172.403846154,
            "unit": "ns",
            "range": "± 231454.98377355805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3418887.7333333334,
            "unit": "ns",
            "range": "± 55469.44228964097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3412933.529411765,
            "unit": "ns",
            "range": "± 108871.01757987705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4346583.133333334,
            "unit": "ns",
            "range": "± 120794.09749473612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4089049.6904761903,
            "unit": "ns",
            "range": "± 217643.3796997832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7418223.291666667,
            "unit": "ns",
            "range": "± 363356.28855218785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6605368.450120192,
            "unit": "ns",
            "range": "± 62595.03996783682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2029170.6625600962,
            "unit": "ns",
            "range": "± 31770.106360304395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1325182.5068359375,
            "unit": "ns",
            "range": "± 24958.930327470796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2826473.7153645833,
            "unit": "ns",
            "range": "± 30145.6048751995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802988.9956054688,
            "unit": "ns",
            "range": "± 4822.44367837719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757888.5158203125,
            "unit": "ns",
            "range": "± 6895.691228441278"
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
          "id": "ce9eb2e32ac5fe93b047206b01fcb67e21966478",
          "message": "[skip changelog] Fix csproj files",
          "timestamp": "2023-07-29T22:41:32+09:00",
          "tree_id": "7d188ed459b116bede4c4c596028dcfa94e02a5a",
          "url": "https://github.com/greymistcube/libplanet/commit/ce9eb2e32ac5fe93b047206b01fcb67e21966478"
        },
        "date": 1690639329256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8147040.043478261,
            "unit": "ns",
            "range": "± 506262.26150081656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20730536.203703705,
            "unit": "ns",
            "range": "± 859515.7066227817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49846688,
            "unit": "ns",
            "range": "± 2172163.656867015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100744962.05555555,
            "unit": "ns",
            "range": "± 4562928.313117847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239366317.92105263,
            "unit": "ns",
            "range": "± 18331285.363575835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55525.7191011236,
            "unit": "ns",
            "range": "± 3492.4251146678607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330683.92424242425,
            "unit": "ns",
            "range": "± 34456.29082341826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302694.0967741936,
            "unit": "ns",
            "range": "± 18495.638137412243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300661.359375,
            "unit": "ns",
            "range": "± 13837.280536528027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4137170.1025641025,
            "unit": "ns",
            "range": "± 139827.886557724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4062860.88172043,
            "unit": "ns",
            "range": "± 395273.2036284153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17464.989247311827,
            "unit": "ns",
            "range": "± 1547.2429160243298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83004.69047619047,
            "unit": "ns",
            "range": "± 4860.919727976992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89082.12765957447,
            "unit": "ns",
            "range": "± 9015.022747583156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102711.44210526315,
            "unit": "ns",
            "range": "± 14249.04168387638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5602.648936170212,
            "unit": "ns",
            "range": "± 609.0742438888288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17378.76923076923,
            "unit": "ns",
            "range": "± 2038.825185012863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1636419.8181818181,
            "unit": "ns",
            "range": "± 202349.6192764235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2938123.906976744,
            "unit": "ns",
            "range": "± 193186.6677398178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110497.9791666665,
            "unit": "ns",
            "range": "± 252465.25429531798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6085659.684782608,
            "unit": "ns",
            "range": "± 393175.1116437641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400070.2021276597,
            "unit": "ns",
            "range": "± 277978.71093996713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3532432.7209302327,
            "unit": "ns",
            "range": "± 398632.3979339539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4453010.975609756,
            "unit": "ns",
            "range": "± 160074.66501721749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3842205.4594594594,
            "unit": "ns",
            "range": "± 191963.74063392694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7339810.963414635,
            "unit": "ns",
            "range": "± 385726.99665371166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6916480.107730263,
            "unit": "ns",
            "range": "± 298321.03374887054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2127793.505542652,
            "unit": "ns",
            "range": "± 106131.45026685935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351597.9157552083,
            "unit": "ns",
            "range": "± 50426.31242692664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2843911.1096813725,
            "unit": "ns",
            "range": "± 114966.42429187312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946731.8299947599,
            "unit": "ns",
            "range": "± 50097.092415721694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797217.6448139391,
            "unit": "ns",
            "range": "± 40517.001296544644"
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
          "id": "9267a7d1f941800fbd42039e130ef72a2c5b432a",
          "message": "Remove empty",
          "timestamp": "2023-07-29T22:42:45+09:00",
          "tree_id": "42175cb0c41a22bf8900d732a09ed0bdbfd02e40",
          "url": "https://github.com/greymistcube/libplanet/commit/9267a7d1f941800fbd42039e130ef72a2c5b432a"
        },
        "date": 1690639902257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11300053.85,
            "unit": "ns",
            "range": "± 2419591.768872318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26067063.19,
            "unit": "ns",
            "range": "± 4605778.023829504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63569252.24,
            "unit": "ns",
            "range": "± 9503737.8751279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126709963.63,
            "unit": "ns",
            "range": "± 14831499.875265285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259016505.1958763,
            "unit": "ns",
            "range": "± 24835734.174580194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100011.14646464646,
            "unit": "ns",
            "range": "± 21671.230425835438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412653.60101010103,
            "unit": "ns",
            "range": "± 64685.71006144215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381887.33157894737,
            "unit": "ns",
            "range": "± 47980.676154551315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 401407.10204081633,
            "unit": "ns",
            "range": "± 56951.7437533407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5234280.83,
            "unit": "ns",
            "range": "± 1072514.4964611218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4677957.46,
            "unit": "ns",
            "range": "± 1023882.3325220414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31810.928571428572,
            "unit": "ns",
            "range": "± 5906.146574614006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 143634,
            "unit": "ns",
            "range": "± 24750.95664839091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142639.2474226804,
            "unit": "ns",
            "range": "± 20985.401655094534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145688.2857142857,
            "unit": "ns",
            "range": "± 21604.855814920527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11172.829787234043,
            "unit": "ns",
            "range": "± 2088.6596393370683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 38325.1875,
            "unit": "ns",
            "range": "± 5684.313612801831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2010192.7577319588,
            "unit": "ns",
            "range": "± 515333.7529454067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3617992,
            "unit": "ns",
            "range": "± 578157.5406038305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2516839.612244898,
            "unit": "ns",
            "range": "± 508467.3529757872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7300039.121212121,
            "unit": "ns",
            "range": "± 1121497.2328627757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4251220.52,
            "unit": "ns",
            "range": "± 937524.1521237482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4504529.94,
            "unit": "ns",
            "range": "± 1021753.5409368081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5755127.37,
            "unit": "ns",
            "range": "± 1220067.4087111847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5060540.181818182,
            "unit": "ns",
            "range": "± 1103446.4327368136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8848498.83,
            "unit": "ns",
            "range": "± 1555675.4461198077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8302562.02234375,
            "unit": "ns",
            "range": "± 895236.4711137204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2459216.87143605,
            "unit": "ns",
            "range": "± 191838.01348905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1554353.157265625,
            "unit": "ns",
            "range": "± 110799.1081636052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3766539.75484375,
            "unit": "ns",
            "range": "± 332917.40397808986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967846.4570524796,
            "unit": "ns",
            "range": "± 58225.135531464046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793830.6924304496,
            "unit": "ns",
            "range": "± 41823.64225104729"
          }
        ]
      }
    ]
  }
}