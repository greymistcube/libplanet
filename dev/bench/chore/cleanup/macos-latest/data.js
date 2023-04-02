window.BENCHMARK_DATA = {
  "lastUpdate": 1680421305950,
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
      }
    ]
  }
}