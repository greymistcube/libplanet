window.BENCHMARK_DATA = {
  "lastUpdate": 1696351208621,
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
          "id": "c1fbdebb46491be08525e53e477c54646523879b",
          "message": "Changelog",
          "timestamp": "2023-10-04T01:21:13+09:00",
          "tree_id": "9d35c50be44a97f971bfd0a2d52bc4286d23a071",
          "url": "https://github.com/greymistcube/libplanet/commit/c1fbdebb46491be08525e53e477c54646523879b"
        },
        "date": 1696350886413,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1293063,
            "unit": "ns",
            "range": "± 118686.53362381246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2342518.867924528,
            "unit": "ns",
            "range": "± 88302.36745803455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1834611.111111111,
            "unit": "ns",
            "range": "± 105018.71542524772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7690899.450549451,
            "unit": "ns",
            "range": "± 450968.373705993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46893.75,
            "unit": "ns",
            "range": "± 695.1918200516076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6963321.428571428,
            "unit": "ns",
            "range": "± 24985.97078889944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17830820,
            "unit": "ns",
            "range": "± 132123.86612569282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45961006.666666664,
            "unit": "ns",
            "range": "± 459283.86097530246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92504473.33333333,
            "unit": "ns",
            "range": "± 609133.0448932749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184483700,
            "unit": "ns",
            "range": "± 890414.4051267044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4554146.540178572,
            "unit": "ns",
            "range": "± 32307.244744778418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1401307.7473958333,
            "unit": "ns",
            "range": "± 2288.715726989617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 998328.8010817308,
            "unit": "ns",
            "range": "± 388.1483877131946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2509467.0479910714,
            "unit": "ns",
            "range": "± 1847.066405846432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813280.17578125,
            "unit": "ns",
            "range": "± 895.9923884951421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717232.6032366072,
            "unit": "ns",
            "range": "± 993.3197039278416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2950000,
            "unit": "ns",
            "range": "± 58034.59414562196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3065312.121212121,
            "unit": "ns",
            "range": "± 84085.17540853945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3833550,
            "unit": "ns",
            "range": "± 70686.33489703982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3661780,
            "unit": "ns",
            "range": "± 55828.029314519576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8911920.967741935,
            "unit": "ns",
            "range": "± 212204.4096204544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245805.55555555556,
            "unit": "ns",
            "range": "± 5163.01578790379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232151.16279069768,
            "unit": "ns",
            "range": "± 8273.807555948362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203535,
            "unit": "ns",
            "range": "± 7190.754391435486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3801719.230769231,
            "unit": "ns",
            "range": "± 25967.812916999916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3451250,
            "unit": "ns",
            "range": "± 45892.60755907675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18087.777777777777,
            "unit": "ns",
            "range": "± 1194.5407446009785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78478.88888888889,
            "unit": "ns",
            "range": "± 4094.295687725404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64369.230769230766,
            "unit": "ns",
            "range": "± 1764.94061787228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74694.9494949495,
            "unit": "ns",
            "range": "± 13679.072155977672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4226.315789473684,
            "unit": "ns",
            "range": "± 488.4213663743827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16031.578947368422,
            "unit": "ns",
            "range": "± 1739.6663386307264"
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
          "id": "1e1e0e68367e7006a93ab97437129933f338c9f5",
          "message": "Remove unnecessary copy methods",
          "timestamp": "2023-09-27T09:58:56+09:00",
          "tree_id": "c9eed7988ffb1c411dc9f49c109ffa4787b995d0",
          "url": "https://github.com/greymistcube/libplanet/commit/1e1e0e68367e7006a93ab97437129933f338c9f5"
        },
        "date": 1696351019990,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358118.5567010308,
            "unit": "ns",
            "range": "± 111241.63014385333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571483.7837837837,
            "unit": "ns",
            "range": "± 84563.52153366234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2011225.2525252525,
            "unit": "ns",
            "range": "± 138105.63196442326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8835665.555555556,
            "unit": "ns",
            "range": "± 545754.3121677445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51399.45054945055,
            "unit": "ns",
            "range": "± 3258.0967050095587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8035560,
            "unit": "ns",
            "range": "± 105616.00122275845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21362633.333333332,
            "unit": "ns",
            "range": "± 197268.28239252057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53646007.692307696,
            "unit": "ns",
            "range": "± 389963.7001515621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107378130.76923077,
            "unit": "ns",
            "range": "± 1139931.0383999955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213466143.33333334,
            "unit": "ns",
            "range": "± 2091842.79574141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4526984.791666667,
            "unit": "ns",
            "range": "± 20251.475373449517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1428025.5208333333,
            "unit": "ns",
            "range": "± 5003.349970946106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081507.7083333333,
            "unit": "ns",
            "range": "± 5372.16051798086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677457.5260416665,
            "unit": "ns",
            "range": "± 14876.88046256996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843012.5846354166,
            "unit": "ns",
            "range": "± 8113.774316115752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767767.1048677885,
            "unit": "ns",
            "range": "± 1653.3109789117805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3332454.054054054,
            "unit": "ns",
            "range": "± 105846.80647729264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3508144.230769231,
            "unit": "ns",
            "range": "± 142631.45764929065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4324920,
            "unit": "ns",
            "range": "± 67484.67762600421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4349500,
            "unit": "ns",
            "range": "± 62761.05480311815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10280154.255319148,
            "unit": "ns",
            "range": "± 399211.8120134521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262756.6037735849,
            "unit": "ns",
            "range": "± 10121.920413598215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253500,
            "unit": "ns",
            "range": "± 8744.091172602366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236950,
            "unit": "ns",
            "range": "± 10927.408382972331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173237.5,
            "unit": "ns",
            "range": "± 77439.015790922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3851915.3846153845,
            "unit": "ns",
            "range": "± 43507.180368184556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24058,
            "unit": "ns",
            "range": "± 2849.4968543994432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89158.06451612903,
            "unit": "ns",
            "range": "± 5999.6072802752315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74613.40206185567,
            "unit": "ns",
            "range": "± 5419.0948826422145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91656.56565656565,
            "unit": "ns",
            "range": "± 17472.632604325754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5732.65306122449,
            "unit": "ns",
            "range": "± 961.2894594160213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22139.39393939394,
            "unit": "ns",
            "range": "± 2349.807555377639"
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
          "id": "abf7c5492ca733759a8198b465c823d6c60ffee2",
          "message": "Changelog",
          "timestamp": "2023-10-04T01:24:11+09:00",
          "tree_id": "4e297305404cfc9980e96eef99e4a093ccf46805",
          "url": "https://github.com/greymistcube/libplanet/commit/abf7c5492ca733759a8198b465c823d6c60ffee2"
        },
        "date": 1696351182365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1286510,
            "unit": "ns",
            "range": "± 113523.63657232824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2348615.625,
            "unit": "ns",
            "range": "± 99503.61279035719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1882603.1578947369,
            "unit": "ns",
            "range": "± 116166.00415713931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7722851.136363637,
            "unit": "ns",
            "range": "± 446962.34843466856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43418.75,
            "unit": "ns",
            "range": "± 1926.990827895569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7088264.285714285,
            "unit": "ns",
            "range": "± 114675.05668790238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18269464.285714287,
            "unit": "ns",
            "range": "± 309102.8553165356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46578850,
            "unit": "ns",
            "range": "± 806237.835345661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92387635.71428572,
            "unit": "ns",
            "range": "± 1064885.2192442315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184442933.33333334,
            "unit": "ns",
            "range": "± 2059476.3324227652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4419707.369791667,
            "unit": "ns",
            "range": "± 30603.327292928658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1398335.60546875,
            "unit": "ns",
            "range": "± 8804.083086901923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 997738.8392857143,
            "unit": "ns",
            "range": "± 1704.0927449717167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2541693.1082589286,
            "unit": "ns",
            "range": "± 3744.8882634631746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819160.21484375,
            "unit": "ns",
            "range": "± 3629.3921742183898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733741.2044270834,
            "unit": "ns",
            "range": "± 3609.366637658046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2923900,
            "unit": "ns",
            "range": "± 83198.25537215127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3070543.75,
            "unit": "ns",
            "range": "± 59226.50272470932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3913125.925925926,
            "unit": "ns",
            "range": "± 103438.31529576005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3621274.285714286,
            "unit": "ns",
            "range": "± 175729.5325338199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9015593.103448275,
            "unit": "ns",
            "range": "± 260730.05324477775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249065.7894736842,
            "unit": "ns",
            "range": "± 8587.806450436367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233655.35714285713,
            "unit": "ns",
            "range": "± 8819.83136599988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207602.0618556701,
            "unit": "ns",
            "range": "± 13321.645758106142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3819006.6666666665,
            "unit": "ns",
            "range": "± 58470.58438304887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3425371.4285714286,
            "unit": "ns",
            "range": "± 36458.47856590644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18476.842105263157,
            "unit": "ns",
            "range": "± 1885.1295249578634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81856.70103092784,
            "unit": "ns",
            "range": "± 5918.33146560496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63575.30864197531,
            "unit": "ns",
            "range": "± 2959.540963739036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75761.22448979592,
            "unit": "ns",
            "range": "± 13204.807252195751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4210.309278350515,
            "unit": "ns",
            "range": "± 621.2360890599606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17641.836734693876,
            "unit": "ns",
            "range": "± 2458.2251358308226"
          }
        ]
      }
    ]
  }
}