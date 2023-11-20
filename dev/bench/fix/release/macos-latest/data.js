window.BENCHMARK_DATA = {
  "lastUpdate": 1700482345835,
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
          "id": "a773b1e3352c423c8b1d3e5a8458b2eb80511f05",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:35:00+09:00",
          "tree_id": "30cc4f94e623cf3b676e1211b9e1635f7d073bc6",
          "url": "https://github.com/greymistcube/libplanet/commit/a773b1e3352c423c8b1d3e5a8458b2eb80511f05"
        },
        "date": 1700481211353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8025616.695876288,
            "unit": "ns",
            "range": "± 694565.3449522052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18465026.333333332,
            "unit": "ns",
            "range": "± 234403.96319774442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46904324.333333336,
            "unit": "ns",
            "range": "± 852277.6073277051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92431604.08823529,
            "unit": "ns",
            "range": "± 1283056.4351435918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195285349.05660376,
            "unit": "ns",
            "range": "± 8037453.525943339"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40552.79569892473,
            "unit": "ns",
            "range": "± 9588.48667453876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229509.42708333334,
            "unit": "ns",
            "range": "± 21121.14231347836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216804.3404255319,
            "unit": "ns",
            "range": "± 14132.220635764152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203070.36559139786,
            "unit": "ns",
            "range": "± 20902.618868470578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3724947.6923076925,
            "unit": "ns",
            "range": "± 90877.5775015022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3443926.3181818184,
            "unit": "ns",
            "range": "± 78114.23280935388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12154.404255319148,
            "unit": "ns",
            "range": "± 981.5319830474903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58327.37362637363,
            "unit": "ns",
            "range": "± 4757.4952341853905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56221.15909090909,
            "unit": "ns",
            "range": "± 4446.566351605105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60098.385416666664,
            "unit": "ns",
            "range": "± 11067.727780752368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3264.190476190476,
            "unit": "ns",
            "range": "± 487.60254346150816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11574.139784946237,
            "unit": "ns",
            "range": "± 746.2536518211989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338802.6595744682,
            "unit": "ns",
            "range": "± 104729.70522421328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894676.642105263,
            "unit": "ns",
            "range": "± 222760.07277036383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1913677.3440860214,
            "unit": "ns",
            "range": "± 154566.98290761493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8605008.967032967,
            "unit": "ns",
            "range": "± 677344.1990059977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2857900.533333333,
            "unit": "ns",
            "range": "± 49696.37389742214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2964721.1842105263,
            "unit": "ns",
            "range": "± 100374.833565977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3585043.7906976743,
            "unit": "ns",
            "range": "± 130982.33232106028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3496822.8928571427,
            "unit": "ns",
            "range": "± 97332.04755404136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12679409.715789475,
            "unit": "ns",
            "range": "± 2061540.2397474186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4197562.8694661455,
            "unit": "ns",
            "range": "± 105976.33747272813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534503.4262152778,
            "unit": "ns",
            "range": "± 129668.88671881672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060810.9622167968,
            "unit": "ns",
            "range": "± 121245.71063901266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2804317.4229266825,
            "unit": "ns",
            "range": "± 96364.04257394593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872287.5679552802,
            "unit": "ns",
            "range": "± 25322.585941814054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773573.5153808594,
            "unit": "ns",
            "range": "± 23240.369397251747"
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
          "id": "4f79b61f37a3c78189e4e9b3ce7197dc0836a77a",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:36:46+09:00",
          "tree_id": "4ab1130a8fe8964c78fd960543263fe9019b43bf",
          "url": "https://github.com/greymistcube/libplanet/commit/4f79b61f37a3c78189e4e9b3ce7197dc0836a77a"
        },
        "date": 1700481981886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11189480.318181818,
            "unit": "ns",
            "range": "± 243648.18186756523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29781740.576923076,
            "unit": "ns",
            "range": "± 1518064.8221078245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75937063.02325581,
            "unit": "ns",
            "range": "± 2800879.8281924054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141016989.5927835,
            "unit": "ns",
            "range": "± 14160760.919537352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 357234486.18686867,
            "unit": "ns",
            "range": "± 81514772.28051436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81867.86170212766,
            "unit": "ns",
            "range": "± 23064.540796717887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368944.1868131868,
            "unit": "ns",
            "range": "± 48543.99543047113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360895.5517241379,
            "unit": "ns",
            "range": "± 33404.954301740385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299113.8222222222,
            "unit": "ns",
            "range": "± 37756.72315035177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5511576.916666667,
            "unit": "ns",
            "range": "± 51734.55370614733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4694474.326086956,
            "unit": "ns",
            "range": "± 356380.4178024619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27547.858695652172,
            "unit": "ns",
            "range": "± 4791.227566626144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118894.23913043478,
            "unit": "ns",
            "range": "± 12103.698187798187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118057.2311827957,
            "unit": "ns",
            "range": "± 19347.6454460843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93420.32978723405,
            "unit": "ns",
            "range": "± 16791.363137290267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6040.035353535353,
            "unit": "ns",
            "range": "± 2539.296923074041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17450.18817204301,
            "unit": "ns",
            "range": "± 3932.7198658194247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1942238.8333333333,
            "unit": "ns",
            "range": "± 538264.5830853207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4643535.775510204,
            "unit": "ns",
            "range": "± 1115262.5689480172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3127383.8229166665,
            "unit": "ns",
            "range": "± 767066.131343514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13706114.010309279,
            "unit": "ns",
            "range": "± 3467915.073235639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4549344.071428572,
            "unit": "ns",
            "range": "± 77825.91472537062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4496979.393258427,
            "unit": "ns",
            "range": "± 251992.55409817796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5555625.044117647,
            "unit": "ns",
            "range": "± 261778.0702335036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5516317.945054945,
            "unit": "ns",
            "range": "± 640273.1511866091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20227825.14893617,
            "unit": "ns",
            "range": "± 3716262.3255560133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6226606.966897552,
            "unit": "ns",
            "range": "± 403033.6020783626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1916067.7900191327,
            "unit": "ns",
            "range": "± 159593.95698608813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217859.361497962,
            "unit": "ns",
            "range": "± 89808.7062705151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3092060.0134055396,
            "unit": "ns",
            "range": "± 186937.0353246173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935814.8643564552,
            "unit": "ns",
            "range": "± 69947.58359283251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 633412.5744258997,
            "unit": "ns",
            "range": "± 60677.19108981616"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "bd23c70d5019338a725a2d44638c628902778cee",
          "message": "Use Node 20, Update Yarn and some dependencies. (#3468)\n\n* use ES2022\n\n* add isDigest\n\n* WebCrypto Export\n\n* yarn upgrade (4.0.1)\n\n* Fix typo\n\n* Use Typescript ^4.5.0 (due to nanobundle dependancy)\n\n* Update Nanobundle 1.6.0\n\n* Use NodeNext (implies EsNext)\n\n* Add\n\n* use 20 in CI\n\n* use lts/*\n\n* WebCrypto Shim\n\n* Webcrypto Shim 2.0 Electric Boogaloo\n\n* Update .github/workflows/yarn.yaml\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>\n\n* Add rootdir\n\n* isDigest Removal\n\n* Add engines\n\n* Rome ignore.\n\n* add\n\n* Remove Digest Completely\n\n* Add Bencodex\n\n* Test\n\n* Remove bencodex\n\n---------\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-11-20T20:50:25+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/greymistcube/libplanet/commit/bd23c70d5019338a725a2d44638c628902778cee"
        },
        "date": 1700482313254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9179788.86,
            "unit": "ns",
            "range": "± 672984.7226174944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23413399.295918368,
            "unit": "ns",
            "range": "± 1850667.7526951428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55484498.63636363,
            "unit": "ns",
            "range": "± 5327142.835620076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104566075.97,
            "unit": "ns",
            "range": "± 8916725.834895125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230157366.5522388,
            "unit": "ns",
            "range": "± 10901109.964168815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41623.479166666664,
            "unit": "ns",
            "range": "± 9932.433398750483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257174.5,
            "unit": "ns",
            "range": "± 19429.11633588637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257421.70833333334,
            "unit": "ns",
            "range": "± 22087.34288082402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200387.25757575757,
            "unit": "ns",
            "range": "± 18927.124852589965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3748723.8571428573,
            "unit": "ns",
            "range": "± 66116.47978303971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3476704.714285714,
            "unit": "ns",
            "range": "± 52041.73638743984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13169.532608695652,
            "unit": "ns",
            "range": "± 1602.1457689171275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69561.35567010309,
            "unit": "ns",
            "range": "± 13098.214907788715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58622.63684210526,
            "unit": "ns",
            "range": "± 9272.458154435417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59602.268421052635,
            "unit": "ns",
            "range": "± 10230.934237464955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3433.9655172413795,
            "unit": "ns",
            "range": "± 472.11900963870266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11936.47191011236,
            "unit": "ns",
            "range": "± 1001.3428607475931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1035218,
            "unit": "ns",
            "range": "± 88933.34125509913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2285198.1612903224,
            "unit": "ns",
            "range": "± 144792.76809395786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1464047.9670329671,
            "unit": "ns",
            "range": "± 81805.4920599196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6671691.544444445,
            "unit": "ns",
            "range": "± 519508.1837526484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3329032.412371134,
            "unit": "ns",
            "range": "± 247356.2672588346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3457071.940860215,
            "unit": "ns",
            "range": "± 260955.70652992395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4111515.6276595746,
            "unit": "ns",
            "range": "± 290803.94927367533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4026541.387755102,
            "unit": "ns",
            "range": "± 288447.74293543905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15019263.752525253,
            "unit": "ns",
            "range": "± 2735252.9063979355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5230563.33743351,
            "unit": "ns",
            "range": "± 348328.6725806989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1583678.0288783482,
            "unit": "ns",
            "range": "± 67528.99540882459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086871.6004774305,
            "unit": "ns",
            "range": "± 57204.99769265887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2489798.2645376935,
            "unit": "ns",
            "range": "± 233945.0631936085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830809.1571932706,
            "unit": "ns",
            "range": "± 56231.831948551306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723953.3858025369,
            "unit": "ns",
            "range": "± 44836.223265256696"
          }
        ]
      }
    ]
  }
}