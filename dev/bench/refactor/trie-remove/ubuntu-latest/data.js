window.BENCHMARK_DATA = {
  "lastUpdate": 1704177126676,
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
          "id": "a3e4edf120b75f72c25ddfa81f9aa241880111fa",
          "message": "Applied suggested name change",
          "timestamp": "2024-01-02T13:49:03+09:00",
          "tree_id": "d0dfbc70f4ea00675d9aad523767c771f86aa9fb",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e4edf120b75f72c25ddfa81f9aa241880111fa"
        },
        "date": 1704171581080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3659677.9807477677,
            "unit": "ns",
            "range": "± 42099.61602252968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1192371.149639423,
            "unit": "ns",
            "range": "± 3157.193590898006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765506.7108561198,
            "unit": "ns",
            "range": "± 2896.550706726198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975533.6627604167,
            "unit": "ns",
            "range": "± 5310.88205707362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630357.1564002404,
            "unit": "ns",
            "range": "± 5735.622932536159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580274.7620442709,
            "unit": "ns",
            "range": "± 970.5905852695229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2412387.1,
            "unit": "ns",
            "range": "± 54583.40307413107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497515.8181818184,
            "unit": "ns",
            "range": "± 52819.85064946733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3161632.111111111,
            "unit": "ns",
            "range": "± 66175.32578300562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2890708.472222222,
            "unit": "ns",
            "range": "± 94307.54044764883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6977293.466666667,
            "unit": "ns",
            "range": "± 208272.56055065544"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38345.86170212766,
            "unit": "ns",
            "range": "± 4723.364186544645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207061.8153846154,
            "unit": "ns",
            "range": "± 9060.509515702448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190983.20512820513,
            "unit": "ns",
            "range": "± 6503.480008424182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161946.04761904763,
            "unit": "ns",
            "range": "± 3796.8760906328043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3079328,
            "unit": "ns",
            "range": "± 46483.39307256369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835698.6428571427,
            "unit": "ns",
            "range": "± 40331.98966006463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14413.70707070707,
            "unit": "ns",
            "range": "± 2658.9344353865117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63082.80612244898,
            "unit": "ns",
            "range": "± 6102.275229575269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51223.92307692308,
            "unit": "ns",
            "range": "± 1375.3663344164543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72407.69387755102,
            "unit": "ns",
            "range": "± 19731.687025161616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3439.5,
            "unit": "ns",
            "range": "± 813.9844504454678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12475.684210526315,
            "unit": "ns",
            "range": "± 1922.9953987130195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5429862.692307692,
            "unit": "ns",
            "range": "± 13401.040198336692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14238983.333333334,
            "unit": "ns",
            "range": "± 105276.1987838702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36494396.416666664,
            "unit": "ns",
            "range": "± 242292.78625529914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73177330.46153846,
            "unit": "ns",
            "range": "± 274724.76596605295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150357840.69230768,
            "unit": "ns",
            "range": "± 960208.3516909567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950831.1473684211,
            "unit": "ns",
            "range": "± 81747.01420143974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1797385.9032258065,
            "unit": "ns",
            "range": "± 53220.101286609635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1442782.292929293,
            "unit": "ns",
            "range": "± 118781.69336887136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5936747.983870967,
            "unit": "ns",
            "range": "± 268930.3877071373"
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
          "id": "4a3e409427c33b1fc7fce2180b16c607752645af",
          "message": "Added suggested tests",
          "timestamp": "2024-01-02T15:21:13+09:00",
          "tree_id": "98bb18f9dfaaa3c6d297cafe799ec8dba9cfe80f",
          "url": "https://github.com/greymistcube/libplanet/commit/4a3e409427c33b1fc7fce2180b16c607752645af"
        },
        "date": 1704177120532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3774805.400287829,
            "unit": "ns",
            "range": "± 79945.52380186076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207212.6041666667,
            "unit": "ns",
            "range": "± 2138.9854277684376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778309.1187918527,
            "unit": "ns",
            "range": "± 4653.12387584379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960688.9811197917,
            "unit": "ns",
            "range": "± 23974.96702808378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625086.3647460938,
            "unit": "ns",
            "range": "± 1667.399787366951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572116.4755859375,
            "unit": "ns",
            "range": "± 2815.12627289852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2363174.272727273,
            "unit": "ns",
            "range": "± 87746.72566298445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2610529.5862068967,
            "unit": "ns",
            "range": "± 75156.09309607251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3197281.933333333,
            "unit": "ns",
            "range": "± 54956.61327092058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2931150.584210526,
            "unit": "ns",
            "range": "± 176365.89391633443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6804131.666666667,
            "unit": "ns",
            "range": "± 195405.9559782958"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39287.71875,
            "unit": "ns",
            "range": "± 5281.911152729564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200531.15714285715,
            "unit": "ns",
            "range": "± 9772.672064080001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185123.9180327869,
            "unit": "ns",
            "range": "± 7521.200771364197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167943.87878787878,
            "unit": "ns",
            "range": "± 5178.467695404548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2965037.1428571427,
            "unit": "ns",
            "range": "± 22754.31996805862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2823971.2,
            "unit": "ns",
            "range": "± 49837.82794682311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11690.108695652174,
            "unit": "ns",
            "range": "± 724.28774344743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64567.802083333336,
            "unit": "ns",
            "range": "± 4345.465108943834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61702.57142857143,
            "unit": "ns",
            "range": "± 1082.8499231398393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59027.60526315789,
            "unit": "ns",
            "range": "± 11577.74975056354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2748.125,
            "unit": "ns",
            "range": "± 618.3427639135195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13542.775510204081,
            "unit": "ns",
            "range": "± 1734.9071844843777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5722120.285714285,
            "unit": "ns",
            "range": "± 16518.043645469228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14562092.5,
            "unit": "ns",
            "range": "± 94544.31729390947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36283158.833333336,
            "unit": "ns",
            "range": "± 315455.100438504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73316782.61538461,
            "unit": "ns",
            "range": "± 282083.1088883022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149300783,
            "unit": "ns",
            "range": "± 448359.33870339475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962085.0052631579,
            "unit": "ns",
            "range": "± 77645.80532954699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876204.3,
            "unit": "ns",
            "range": "± 81436.2776626765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1438496.7222222222,
            "unit": "ns",
            "range": "± 126069.91920929762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5761144.5,
            "unit": "ns",
            "range": "± 183959.00551745135"
          }
        ]
      }
    ]
  }
}