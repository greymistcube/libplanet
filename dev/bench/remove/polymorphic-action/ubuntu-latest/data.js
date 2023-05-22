window.BENCHMARK_DATA = {
  "lastUpdate": 1684732569669,
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
          "id": "68d72fa93f4e3833d3644989a12e7ee6a6104083",
          "message": "Remove PolymorphicAction",
          "timestamp": "2023-05-20T02:15:50+09:00",
          "tree_id": "cc65e3b81a1823674df671524a9a003f9bb5bec4",
          "url": "https://github.com/greymistcube/libplanet/commit/68d72fa93f4e3833d3644989a12e7ee6a6104083"
        },
        "date": 1684517304075,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3275375.909090909,
            "unit": "ns",
            "range": "± 70208.60615977024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511996.88,
            "unit": "ns",
            "range": "± 93577.62655558574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4436714.684210527,
            "unit": "ns",
            "range": "± 132594.1324114745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4364662.866666666,
            "unit": "ns",
            "range": "± 78909.14854426547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7067520.785714285,
            "unit": "ns",
            "range": "± 189287.5968745575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295930.90196078434,
            "unit": "ns",
            "range": "± 10697.29061258953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281787.9767441861,
            "unit": "ns",
            "range": "± 10213.71370473558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232968.5625,
            "unit": "ns",
            "range": "± 4339.712662819203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4349144.333333333,
            "unit": "ns",
            "range": "± 71567.28871854662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4000138.294117647,
            "unit": "ns",
            "range": "± 82115.72375827658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20764.18947368421,
            "unit": "ns",
            "range": "± 2591.9777518037195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91187.8021978022,
            "unit": "ns",
            "range": "± 5437.082009926075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72708.03225806452,
            "unit": "ns",
            "range": "± 1485.6581141898241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106281.17708333333,
            "unit": "ns",
            "range": "± 17667.45562772934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4822.680412371134,
            "unit": "ns",
            "range": "± 544.7677553017384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18895.822916666668,
            "unit": "ns",
            "range": "± 1994.4093598424554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5969633.034040178,
            "unit": "ns",
            "range": "± 29979.889824682567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2022531.6390625,
            "unit": "ns",
            "range": "± 8462.519404063896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371578.6421875,
            "unit": "ns",
            "range": "± 1817.9631846288803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658287.58828125,
            "unit": "ns",
            "range": "± 1602.307561295508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803204.9170673077,
            "unit": "ns",
            "range": "± 877.8919697937375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742776.1462239583,
            "unit": "ns",
            "range": "± 1480.2099030872914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7719186.428571428,
            "unit": "ns",
            "range": "± 63766.2907109467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20292849.6,
            "unit": "ns",
            "range": "± 187691.89743292442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52526296,
            "unit": "ns",
            "range": "± 339860.28866958176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104215923,
            "unit": "ns",
            "range": "± 1247932.8290611524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211709428.26666668,
            "unit": "ns",
            "range": "± 1919057.4321016655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1385743.1489361702,
            "unit": "ns",
            "range": "± 84301.10537878556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2676150.8484848486,
            "unit": "ns",
            "range": "± 83108.0946528079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2183895.2253521127,
            "unit": "ns",
            "range": "± 93689.16514734043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5483948.555555556,
            "unit": "ns",
            "range": "± 180927.64997636003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48259.9375,
            "unit": "ns",
            "range": "± 2068.0076961866803"
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
          "id": "95d887e57ce3c9a1779716672eea7969c4d62491",
          "message": "Changelog",
          "timestamp": "2023-05-22T12:12:20+09:00",
          "tree_id": "ec07b14753be0b72ac4ba6e426c5ef9c56011830",
          "url": "https://github.com/greymistcube/libplanet/commit/95d887e57ce3c9a1779716672eea7969c4d62491"
        },
        "date": 1684726349704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4681204.440677966,
            "unit": "ns",
            "range": "± 205991.36574843593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5042786.5625,
            "unit": "ns",
            "range": "± 313506.2726074338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6187307.451612903,
            "unit": "ns",
            "range": "± 277506.0942080595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6193977.744680851,
            "unit": "ns",
            "range": "± 373127.82404998713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10022106.45,
            "unit": "ns",
            "range": "± 445532.12303173717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 445002.73626373627,
            "unit": "ns",
            "range": "± 35007.643772256735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 441353.5425531915,
            "unit": "ns",
            "range": "± 51308.737054232006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 396627.1818181818,
            "unit": "ns",
            "range": "± 35088.82368142131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6084107.675675675,
            "unit": "ns",
            "range": "± 204472.62500258427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5559458.747252747,
            "unit": "ns",
            "range": "± 315117.81406785315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 37409.39772727273,
            "unit": "ns",
            "range": "± 5652.2706810174095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 176833.8260869565,
            "unit": "ns",
            "range": "± 25562.783105118117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 169896.59550561797,
            "unit": "ns",
            "range": "± 17678.644501924744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 183864.1855670103,
            "unit": "ns",
            "range": "± 30649.24702797563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 18117.303030303032,
            "unit": "ns",
            "range": "± 8656.920301776912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36670.40206185567,
            "unit": "ns",
            "range": "± 13189.344599792628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7823236.288888888,
            "unit": "ns",
            "range": "± 292564.37108687236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2429919.88828125,
            "unit": "ns",
            "range": "± 35344.538313844845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1754625.794140625,
            "unit": "ns",
            "range": "± 26183.905932545058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3428952.004245924,
            "unit": "ns",
            "range": "± 86555.00020770068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1143860.9653825432,
            "unit": "ns",
            "range": "± 33358.119302273684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1017110.9561197917,
            "unit": "ns",
            "range": "± 15119.825175865737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11384104.757575758,
            "unit": "ns",
            "range": "± 534127.6542511324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29211610.225,
            "unit": "ns",
            "range": "± 1025058.2122643269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76225819.21212122,
            "unit": "ns",
            "range": "± 2411585.271393782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 151622091.26666668,
            "unit": "ns",
            "range": "± 1904714.1841684154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301482862.8666667,
            "unit": "ns",
            "range": "± 5442012.766157545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2000636.065934066,
            "unit": "ns",
            "range": "± 157649.5633698575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4117901.3402061854,
            "unit": "ns",
            "range": "± 296222.3596423839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3146926.021978022,
            "unit": "ns",
            "range": "± 212392.11442204294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8358595.197916667,
            "unit": "ns",
            "range": "± 678687.1604419912"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111495.31868131868,
            "unit": "ns",
            "range": "± 16164.116114872832"
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
          "id": "5423ff33b66e70ae65bcdbef996c037f30396db5",
          "message": "Changelog",
          "timestamp": "2023-05-22T13:57:42+09:00",
          "tree_id": "80f9f918cebab334c9d308a5e653f13a84354a8d",
          "url": "https://github.com/greymistcube/libplanet/commit/5423ff33b66e70ae65bcdbef996c037f30396db5"
        },
        "date": 1684732560175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3970843.5894736843,
            "unit": "ns",
            "range": "± 338442.7023101073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4329987.478260869,
            "unit": "ns",
            "range": "± 338968.8584763146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5254651.130434782,
            "unit": "ns",
            "range": "± 344586.4870017113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5355241.144329897,
            "unit": "ns",
            "range": "± 441286.10362005094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8867508.604395604,
            "unit": "ns",
            "range": "± 696250.2467085121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340798.01612903224,
            "unit": "ns",
            "range": "± 15347.266391389061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342651.2696629214,
            "unit": "ns",
            "range": "± 26643.91893982396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329868.87096774194,
            "unit": "ns",
            "range": "± 20953.118121294236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5290869.9,
            "unit": "ns",
            "range": "± 149104.96264468128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4859165.766666667,
            "unit": "ns",
            "range": "± 324585.82824758335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21334.628865979383,
            "unit": "ns",
            "range": "± 4133.090727892555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99779.36956521739,
            "unit": "ns",
            "range": "± 9022.081614191342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112443.35106382979,
            "unit": "ns",
            "range": "± 15669.389819183654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125698.23711340207,
            "unit": "ns",
            "range": "± 18300.06348279813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10298.38,
            "unit": "ns",
            "range": "± 5336.34704204396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18120.63529411765,
            "unit": "ns",
            "range": "± 2085.2625154314037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7741191.940625,
            "unit": "ns",
            "range": "± 138798.88398659058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2346244.9765625,
            "unit": "ns",
            "range": "± 51881.490778990825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1649496.751171875,
            "unit": "ns",
            "range": "± 21307.82900763535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3107174.2335379464,
            "unit": "ns",
            "range": "± 34972.52038257798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023233.9127604166,
            "unit": "ns",
            "range": "± 16012.606914959088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 959304.1522786458,
            "unit": "ns",
            "range": "± 17933.985797585457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10160713.35483871,
            "unit": "ns",
            "range": "± 310006.5913952528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26233167.24137931,
            "unit": "ns",
            "range": "± 768800.7479830266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68281545.22222222,
            "unit": "ns",
            "range": "± 2252496.512465975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135599533.6122449,
            "unit": "ns",
            "range": "± 5322185.328784361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271183441.62,
            "unit": "ns",
            "range": "± 10925306.503901638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1827081.2688172043,
            "unit": "ns",
            "range": "± 191055.52835401928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3378038.1836734693,
            "unit": "ns",
            "range": "± 312033.4847572278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2860305.252631579,
            "unit": "ns",
            "range": "± 298868.5443995214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7237377.5698924735,
            "unit": "ns",
            "range": "± 583603.5632548042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62012.89361702128,
            "unit": "ns",
            "range": "± 9145.99605734849"
          }
        ]
      }
    ]
  }
}