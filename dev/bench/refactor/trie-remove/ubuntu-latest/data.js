window.BENCHMARK_DATA = {
  "lastUpdate": 1704163830384,
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
          "id": "5b07f53c2372541de60e32b98a8688b00d2a1a4d",
          "message": "Added tests; fixed algorithm",
          "timestamp": "2024-01-02T04:12:32+09:00",
          "tree_id": "b9ccd0f488ee216f5e19c948dfac0fde923765df",
          "url": "https://github.com/greymistcube/libplanet/commit/5b07f53c2372541de60e32b98a8688b00d2a1a4d"
        },
        "date": 1704137001350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3573513.3606770835,
            "unit": "ns",
            "range": "± 42703.85133474416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1163817.9189453125,
            "unit": "ns",
            "range": "± 8788.992163230734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736859.5430989583,
            "unit": "ns",
            "range": "± 4721.913912290211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1859630.4458705357,
            "unit": "ns",
            "range": "± 18766.645685978507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 592184.6862304688,
            "unit": "ns",
            "range": "± 11872.988427459031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 544771.8846905048,
            "unit": "ns",
            "range": "± 7345.902754528455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2289542.311111111,
            "unit": "ns",
            "range": "± 86372.112115865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2412267.761904762,
            "unit": "ns",
            "range": "± 110795.89354183087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3003741.35483871,
            "unit": "ns",
            "range": "± 133975.9429766963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2845023.3032786883,
            "unit": "ns",
            "range": "± 127787.65564336535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6927914.206349206,
            "unit": "ns",
            "range": "± 315761.88178559387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37901.75268817204,
            "unit": "ns",
            "range": "± 4216.417185695009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188225.77956989247,
            "unit": "ns",
            "range": "± 10649.660395040151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181414.92727272728,
            "unit": "ns",
            "range": "± 7729.613384166563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162707.6170212766,
            "unit": "ns",
            "range": "± 6263.985811082518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2997906.9166666665,
            "unit": "ns",
            "range": "± 100098.41122711619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2653443.125,
            "unit": "ns",
            "range": "± 103107.03391933849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11897.022471910112,
            "unit": "ns",
            "range": "± 999.9238036598779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60978.81914893617,
            "unit": "ns",
            "range": "± 4980.496710476801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51412.48947368421,
            "unit": "ns",
            "range": "± 2972.4897419243457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58786.704081632655,
            "unit": "ns",
            "range": "± 12910.633656068949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4789.676767676768,
            "unit": "ns",
            "range": "± 1889.337222242951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13502.505154639175,
            "unit": "ns",
            "range": "± 2715.3094058033216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5415408.275862069,
            "unit": "ns",
            "range": "± 156474.94061690528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13691116.823529411,
            "unit": "ns",
            "range": "± 279494.0868865197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37163545.90322581,
            "unit": "ns",
            "range": "± 1127389.6919232605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71516929,
            "unit": "ns",
            "range": "± 1364153.0177549731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145621604.26190478,
            "unit": "ns",
            "range": "± 3354722.4558213893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 930928.8695652174,
            "unit": "ns",
            "range": "± 70128.67408740541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827427.7872340425,
            "unit": "ns",
            "range": "± 116961.14799190057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1378215.5979381443,
            "unit": "ns",
            "range": "± 128874.71703215456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5850011.925531914,
            "unit": "ns",
            "range": "± 430561.8029895819"
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
          "id": "95cfec37da79f242d617736cfa0cf72c50e0aeac",
          "message": "Changelog and docs",
          "timestamp": "2024-01-02T11:39:24+09:00",
          "tree_id": "52f9c0e9e8bf9d1c4285be37d1a1c00e7a22c39e",
          "url": "https://github.com/greymistcube/libplanet/commit/95cfec37da79f242d617736cfa0cf72c50e0aeac"
        },
        "date": 1704163824293,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715796.3638020833,
            "unit": "ns",
            "range": "± 51419.00748832442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212997.5598493305,
            "unit": "ns",
            "range": "± 2052.5040993322227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771702.6334134615,
            "unit": "ns",
            "range": "± 2737.4722691093048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966125.16015625,
            "unit": "ns",
            "range": "± 3858.0105458532876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604223.1444614956,
            "unit": "ns",
            "range": "± 1721.3260370889145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583333.3630558894,
            "unit": "ns",
            "range": "± 1167.3966094568389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2517369.0789473685,
            "unit": "ns",
            "range": "± 53661.05907071387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562078.5597014925,
            "unit": "ns",
            "range": "± 114577.16317913531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3313907.6470588236,
            "unit": "ns",
            "range": "± 65412.39700062708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3044566.227272727,
            "unit": "ns",
            "range": "± 150905.48374445614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6924851.291666667,
            "unit": "ns",
            "range": "± 177100.98730618155"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43056.635416666664,
            "unit": "ns",
            "range": "± 4786.616029414542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211059.49462365592,
            "unit": "ns",
            "range": "± 14052.38691052602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205476.42045454544,
            "unit": "ns",
            "range": "± 13856.34344604482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165776.77586206896,
            "unit": "ns",
            "range": "± 4706.808335474959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3099957.3571428573,
            "unit": "ns",
            "range": "± 27967.740137542376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2774658.4285714286,
            "unit": "ns",
            "range": "± 37830.82734351055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22309.55,
            "unit": "ns",
            "range": "± 4826.994435495346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83572.14141414141,
            "unit": "ns",
            "range": "± 19520.715694479437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91265.2,
            "unit": "ns",
            "range": "± 2956.3527091970045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82453.375,
            "unit": "ns",
            "range": "± 13333.48117078128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4651.177083333333,
            "unit": "ns",
            "range": "± 1142.6790956693944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14793.268041237114,
            "unit": "ns",
            "range": "± 3184.9351527787026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5755491.5,
            "unit": "ns",
            "range": "± 41272.88954255938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14683326.142857144,
            "unit": "ns",
            "range": "± 95089.80977262184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38000963.583333336,
            "unit": "ns",
            "range": "± 279381.9887005337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77045661.9,
            "unit": "ns",
            "range": "± 1070877.0361077744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150658287.19230768,
            "unit": "ns",
            "range": "± 865850.5022079336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999825.3010752688,
            "unit": "ns",
            "range": "± 94175.1136515265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1952448.4864864864,
            "unit": "ns",
            "range": "± 65335.205884568684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1486233.677777778,
            "unit": "ns",
            "range": "± 88393.88423832104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6026379.084507043,
            "unit": "ns",
            "range": "± 293015.5397446523"
          }
        ]
      }
    ]
  }
}