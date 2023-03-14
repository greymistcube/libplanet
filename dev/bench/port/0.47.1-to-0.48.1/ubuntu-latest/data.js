window.BENCHMARK_DATA = {
  "lastUpdate": 1678783130832,
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
          "id": "03fcc72859324bb7bd5f9db0d9c41573e561299f",
          "message": "Merge tag '0.47.1' into port/0.47.1-to-0.48.1\n\nLibplanet 0.47.1",
          "timestamp": "2023-03-14T17:22:25+09:00",
          "tree_id": "c3d45cc6b68d2656a589d93c7acf4e48ca385b66",
          "url": "https://github.com/greymistcube/libplanet/commit/03fcc72859324bb7bd5f9db0d9c41573e561299f"
        },
        "date": 1678782819831,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 81838.83516483517,
            "unit": "ns",
            "range": "± 4810.420485810491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190203.8105263158,
            "unit": "ns",
            "range": "± 13427.091484371262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172834.3076923077,
            "unit": "ns",
            "range": "± 1998.8747411404327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3664459,
            "unit": "ns",
            "range": "± 19581.460747349774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9358033.666666666,
            "unit": "ns",
            "range": "± 112348.04366131085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14119.106382978724,
            "unit": "ns",
            "range": "± 1158.7186514819518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45287.967391304344,
            "unit": "ns",
            "range": "± 2996.017295725715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37792.230769230766,
            "unit": "ns",
            "range": "± 442.56979747947736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80965.47916666667,
            "unit": "ns",
            "range": "± 12879.201680047985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4280,
            "unit": "ns",
            "range": "± 522.5958122475948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14213.186813186812,
            "unit": "ns",
            "range": "± 1013.1588436621586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5948790.271354167,
            "unit": "ns",
            "range": "± 32966.37894773285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945000.9520089286,
            "unit": "ns",
            "range": "± 3073.0893292916116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362547.7080729166,
            "unit": "ns",
            "range": "± 2580.6509940475703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528755.1668526786,
            "unit": "ns",
            "range": "± 5477.888381526309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811826.7490985577,
            "unit": "ns",
            "range": "± 750.6805803525046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738184.9114118303,
            "unit": "ns",
            "range": "± 463.0730711710648"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101071.24489795919,
            "unit": "ns",
            "range": "± 3961.278973443069"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4368815.63671875,
            "unit": "ns",
            "range": "± 38779.05642492163"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6041661.2,
            "unit": "ns",
            "range": "± 76597.172657817"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24750957.42857143,
            "unit": "ns",
            "range": "± 333198.1395092379"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6612200.333333333,
            "unit": "ns",
            "range": "± 40142.04896661473"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27776002.615384616,
            "unit": "ns",
            "range": "± 251077.396907321"
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
          "id": "5ef9f1ef99a463d5242b24d9e762b897c9a5b53d",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:24:38+09:00",
          "tree_id": "31b6d98621737af23a276f132a8b63b5cd97fe45",
          "url": "https://github.com/greymistcube/libplanet/commit/5ef9f1ef99a463d5242b24d9e762b897c9a5b53d"
        },
        "date": 1678783079348,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100920.21875,
            "unit": "ns",
            "range": "± 9254.294812001302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208954.61643835617,
            "unit": "ns",
            "range": "± 10346.764464247502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185383.09589041097,
            "unit": "ns",
            "range": "± 9233.4620601201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3703174.066666667,
            "unit": "ns",
            "range": "± 39737.92587776401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9355819.333333334,
            "unit": "ns",
            "range": "± 159840.9119417834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24391.178947368422,
            "unit": "ns",
            "range": "± 2860.707154723109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56117.231578947365,
            "unit": "ns",
            "range": "± 5459.797374567354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44110.39175257732,
            "unit": "ns",
            "range": "± 4770.2928970974035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106068.35164835164,
            "unit": "ns",
            "range": "± 17569.677291271288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6973.072916666667,
            "unit": "ns",
            "range": "± 1059.5630106673984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21570.296703296703,
            "unit": "ns",
            "range": "± 3433.0607642436225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5395549.470982143,
            "unit": "ns",
            "range": "± 29974.203601306384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1671214.7546037945,
            "unit": "ns",
            "range": "± 4356.73211345481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223026.6538783482,
            "unit": "ns",
            "range": "± 3540.198163450618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2446972.4483816964,
            "unit": "ns",
            "range": "± 8376.261535268357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 745344.3054387019,
            "unit": "ns",
            "range": "± 732.6884497359096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 692790.910295759,
            "unit": "ns",
            "range": "± 442.1190676591759"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107956.37113402062,
            "unit": "ns",
            "range": "± 10407.978274221081"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4962152.262051197,
            "unit": "ns",
            "range": "± 323326.287235799"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5841661.301886792,
            "unit": "ns",
            "range": "± 239675.18177586037"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27463531.736842107,
            "unit": "ns",
            "range": "± 580248.9044701078"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6783331.042105263,
            "unit": "ns",
            "range": "± 399185.74818353576"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29984375.42857143,
            "unit": "ns",
            "range": "± 509113.0126500877"
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
          "id": "ff5bbfb82da2a2d2ae47234b226c6633b00a6ab2",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:27:01+09:00",
          "tree_id": "7177f2855a73fc46fa2a4893941bbfd749f80bb2",
          "url": "https://github.com/greymistcube/libplanet/commit/ff5bbfb82da2a2d2ae47234b226c6633b00a6ab2"
        },
        "date": 1678783122923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93841.793814433,
            "unit": "ns",
            "range": "± 9416.399708905628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201907.03529411764,
            "unit": "ns",
            "range": "± 10887.899972913421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172445.66666666666,
            "unit": "ns",
            "range": "± 3213.335309226818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3822763.6,
            "unit": "ns",
            "range": "± 29191.05307355076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9505834.642857144,
            "unit": "ns",
            "range": "± 36099.64419728164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17314.20879120879,
            "unit": "ns",
            "range": "± 1625.3144483212645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52419.916666666664,
            "unit": "ns",
            "range": "± 3023.8216990541428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50418.27118644068,
            "unit": "ns",
            "range": "± 2234.7210180776983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102470.56701030929,
            "unit": "ns",
            "range": "± 12481.161397538304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6291.547368421053,
            "unit": "ns",
            "range": "± 525.4482942844189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16866.184782608696,
            "unit": "ns",
            "range": "± 1479.8218331231176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5921792.151785715,
            "unit": "ns",
            "range": "± 35623.2226190464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840951.4563802083,
            "unit": "ns",
            "range": "± 865.314639566766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365194.2481863839,
            "unit": "ns",
            "range": "± 447.01717485474444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553121.1260416666,
            "unit": "ns",
            "range": "± 2190.8805163179654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813123.884765625,
            "unit": "ns",
            "range": "± 390.745160646424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736281.2998798077,
            "unit": "ns",
            "range": "± 837.8867711668233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105340.22727272728,
            "unit": "ns",
            "range": "± 4967.8143183294"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4527720.312760416,
            "unit": "ns",
            "range": "± 27311.268596964106"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6189083.071428572,
            "unit": "ns",
            "range": "± 60807.31546888883"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25989718.866666667,
            "unit": "ns",
            "range": "± 255590.66165560976"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6535785.786885246,
            "unit": "ns",
            "range": "± 291430.24636157876"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28996951.5,
            "unit": "ns",
            "range": "± 547824.8699927134"
          }
        ]
      }
    ]
  }
}