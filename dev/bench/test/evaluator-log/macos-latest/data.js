window.BENCHMARK_DATA = {
  "lastUpdate": 1702447954762,
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
          "id": "75829b976afeecadfb6476fd0014e92850b63fa7",
          "message": "More logging",
          "timestamp": "2023-12-13T12:22:26+09:00",
          "tree_id": "70f98720fd85a03c40578e4cd45ba6c0b468464c",
          "url": "https://github.com/greymistcube/libplanet/commit/75829b976afeecadfb6476fd0014e92850b63fa7"
        },
        "date": 1702438670755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8362132.333333333,
            "unit": "ns",
            "range": "± 151607.6119991844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20703706.0625,
            "unit": "ns",
            "range": "± 349910.0687071787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54101910.782608695,
            "unit": "ns",
            "range": "± 1970632.169080117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110173018.125,
            "unit": "ns",
            "range": "± 2819610.2202631673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209114131.8263158,
            "unit": "ns",
            "range": "± 15009939.578313695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51770.9375,
            "unit": "ns",
            "range": "± 14886.883704730077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254889.20212765958,
            "unit": "ns",
            "range": "± 33278.48400471772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245094.20618556702,
            "unit": "ns",
            "range": "± 38511.63559290073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253135.71875,
            "unit": "ns",
            "range": "± 37084.51406044055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937087.6836734693,
            "unit": "ns",
            "range": "± 231800.07052957825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3553625.85483871,
            "unit": "ns",
            "range": "± 161833.44133903325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22638.918367346938,
            "unit": "ns",
            "range": "± 9539.464913913302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75565.29591836735,
            "unit": "ns",
            "range": "± 16910.640553115787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83861.67708333333,
            "unit": "ns",
            "range": "± 20340.88750094759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87267.293814433,
            "unit": "ns",
            "range": "± 15866.734485327406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5525.489361702128,
            "unit": "ns",
            "range": "± 1109.835178547483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15191.69540229885,
            "unit": "ns",
            "range": "± 2576.1201078775757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1231750.9742268042,
            "unit": "ns",
            "range": "± 205008.67772065834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2460391.8908045976,
            "unit": "ns",
            "range": "± 184656.46824541176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1655681.6914893617,
            "unit": "ns",
            "range": "± 168944.2195611287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7381674.804347826,
            "unit": "ns",
            "range": "± 493112.02805004845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2905207.2564102565,
            "unit": "ns",
            "range": "± 139139.8647170029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3222820.8444444444,
            "unit": "ns",
            "range": "± 238980.20941798572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3955270.315217391,
            "unit": "ns",
            "range": "± 222628.70833206314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3438928.630769231,
            "unit": "ns",
            "range": "± 145771.94257036073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16085945.051020408,
            "unit": "ns",
            "range": "± 3042010.48692663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4631935.954589844,
            "unit": "ns",
            "range": "± 142748.90846407673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1374807.347935268,
            "unit": "ns",
            "range": "± 16436.385218846088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905017.017578125,
            "unit": "ns",
            "range": "± 12593.504700293037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2206275.447668331,
            "unit": "ns",
            "range": "± 144153.0297460407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 669690.1814313616,
            "unit": "ns",
            "range": "± 7994.075261627459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594815.3551432291,
            "unit": "ns",
            "range": "± 8649.15072222622"
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
          "id": "08a91d1f1a64abf46de24658a987d2f2bf94850d",
          "message": "Added trie inconsistent log",
          "timestamp": "2023-12-13T12:14:14+09:00",
          "tree_id": "f3274a42fab16eeb412f7c65652d5dd7e3c42c11",
          "url": "https://github.com/greymistcube/libplanet/commit/08a91d1f1a64abf46de24658a987d2f2bf94850d"
        },
        "date": 1702438773554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11746187.869565217,
            "unit": "ns",
            "range": "± 2018021.5802079667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29147561.282608695,
            "unit": "ns",
            "range": "± 3703666.597890161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69801173.04945055,
            "unit": "ns",
            "range": "± 10205715.055236649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131384330.58333333,
            "unit": "ns",
            "range": "± 12812862.80930723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 331521591.96875,
            "unit": "ns",
            "range": "± 53142635.39433513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77833.48421052631,
            "unit": "ns",
            "range": "± 18204.66505203166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271068.1818181818,
            "unit": "ns",
            "range": "± 15127.38690393271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246574.7365591398,
            "unit": "ns",
            "range": "± 19490.15750120282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257290.36046511628,
            "unit": "ns",
            "range": "± 18715.4756309335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4722906.75,
            "unit": "ns",
            "range": "± 194417.85652062294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6351429.12,
            "unit": "ns",
            "range": "± 1192168.2088573945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22909.463917525773,
            "unit": "ns",
            "range": "± 6083.368863586633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78043.71276595745,
            "unit": "ns",
            "range": "± 18503.060558155237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88170.1091954023,
            "unit": "ns",
            "range": "± 11346.239067859919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94160.24210526315,
            "unit": "ns",
            "range": "± 18321.272732731868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4309.1894736842105,
            "unit": "ns",
            "range": "± 1217.242771068206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15529.934782608696,
            "unit": "ns",
            "range": "± 3558.7258363236606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1765646.5463917525,
            "unit": "ns",
            "range": "± 451360.24012745864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3901949.2577319588,
            "unit": "ns",
            "range": "± 991069.787897604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2506559.448979592,
            "unit": "ns",
            "range": "± 650828.1906833098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12102718.265306123,
            "unit": "ns",
            "range": "± 2800975.8545302595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4142272.6413043477,
            "unit": "ns",
            "range": "± 799695.7911530776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5395632.131868131,
            "unit": "ns",
            "range": "± 1301730.0389453277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5003710.844444444,
            "unit": "ns",
            "range": "± 887653.557443559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4574009.405882353,
            "unit": "ns",
            "range": "± 754678.2379457775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20513478.70652174,
            "unit": "ns",
            "range": "± 5408912.836697519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4559440.277901785,
            "unit": "ns",
            "range": "± 56853.72469767988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1395355.3247395833,
            "unit": "ns",
            "range": "± 25879.27876932643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 961134.3601270653,
            "unit": "ns",
            "range": "± 52155.80119879126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2419878.8977997447,
            "unit": "ns",
            "range": "± 267685.11165916757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647661.0582275391,
            "unit": "ns",
            "range": "± 19236.35343824431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583152.5930989584,
            "unit": "ns",
            "range": "± 4941.71412977366"
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
          "id": "487aa0b0f6ebef094da29263febb0c962d338ab9",
          "message": "Elevate log level",
          "timestamp": "2023-12-13T12:59:42+09:00",
          "tree_id": "34d310ce3d987569c6f7b7ba96c9c7b32dee54a0",
          "url": "https://github.com/greymistcube/libplanet/commit/487aa0b0f6ebef094da29263febb0c962d338ab9"
        },
        "date": 1702440804612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7636251,
            "unit": "ns",
            "range": "± 76196.63198593492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18870126.35714286,
            "unit": "ns",
            "range": "± 168717.8042142045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46206966.02941176,
            "unit": "ns",
            "range": "± 923975.5887572948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94070933.71428572,
            "unit": "ns",
            "range": "± 1338559.1115255486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187201548.85714287,
            "unit": "ns",
            "range": "± 1758445.8975686394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35101.05434782609,
            "unit": "ns",
            "range": "± 3671.674580866759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218204.63333333333,
            "unit": "ns",
            "range": "± 15431.928143599343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215520,
            "unit": "ns",
            "range": "± 20617.228854579495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195051.12765957447,
            "unit": "ns",
            "range": "± 13385.019944260786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3694554.6842105263,
            "unit": "ns",
            "range": "± 81796.16781165554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3515571,
            "unit": "ns",
            "range": "± 61981.5968655213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12974.031578947368,
            "unit": "ns",
            "range": "± 1368.6194041662006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58818.4587628866,
            "unit": "ns",
            "range": "± 5639.09835788918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59313.49484536082,
            "unit": "ns",
            "range": "± 11565.966442653087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61757.458333333336,
            "unit": "ns",
            "range": "± 12350.385279237813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3313.296703296703,
            "unit": "ns",
            "range": "± 384.4787667740861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11532.069892473119,
            "unit": "ns",
            "range": "± 996.9231948725981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1047650.6464646464,
            "unit": "ns",
            "range": "± 95699.52185999093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2271719.3789473684,
            "unit": "ns",
            "range": "± 161927.98942465193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538778.101010101,
            "unit": "ns",
            "range": "± 127600.04523538121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6920054.716049382,
            "unit": "ns",
            "range": "± 433075.6657144117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2871536.5384615385,
            "unit": "ns",
            "range": "± 74564.29954773621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2978838.3684210526,
            "unit": "ns",
            "range": "± 101693.50521168485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3538920.09375,
            "unit": "ns",
            "range": "± 89058.1882212354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3708054.913043478,
            "unit": "ns",
            "range": "± 90724.8717296185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13885736.06122449,
            "unit": "ns",
            "range": "± 2306730.9975213027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4326064.822265625,
            "unit": "ns",
            "range": "± 67886.58660941568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1348887.4787109375,
            "unit": "ns",
            "range": "± 15135.945754108385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 888807.9387770433,
            "unit": "ns",
            "range": "± 12757.459908310457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2155041.0516241775,
            "unit": "ns",
            "range": "± 203386.91834949856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634561.9052734375,
            "unit": "ns",
            "range": "± 3768.204350636413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570105.4629603794,
            "unit": "ns",
            "range": "± 2454.092361578011"
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
          "id": "07f63041dd9079f6504b57bc4b6b0a37f887bc49",
          "message": "More logging",
          "timestamp": "2023-12-13T12:51:33+09:00",
          "tree_id": "7184d61ffb07896c0fc8a8775d8f83c8af77c537",
          "url": "https://github.com/greymistcube/libplanet/commit/07f63041dd9079f6504b57bc4b6b0a37f887bc49"
        },
        "date": 1702440810152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8468006.192307692,
            "unit": "ns",
            "range": "± 226725.96446230315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20627872.88235294,
            "unit": "ns",
            "range": "± 423090.03941358073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51485530.63513514,
            "unit": "ns",
            "range": "± 1722400.2840650107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96778844.15,
            "unit": "ns",
            "range": "± 1960857.4126468857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207331612.95238096,
            "unit": "ns",
            "range": "± 4791244.977385695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61997.45744680851,
            "unit": "ns",
            "range": "± 13782.738257101204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315377.9183673469,
            "unit": "ns",
            "range": "± 30825.494254504738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335383.3020833333,
            "unit": "ns",
            "range": "± 50273.15405328851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330380.60215053766,
            "unit": "ns",
            "range": "± 37466.97184800982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4126556.98,
            "unit": "ns",
            "range": "± 163565.61909586587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3660902.6944444445,
            "unit": "ns",
            "range": "± 116254.60527303717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22515.64893617021,
            "unit": "ns",
            "range": "± 3164.866634834583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105406.23404255319,
            "unit": "ns",
            "range": "± 18629.675510235767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119207.89130434782,
            "unit": "ns",
            "range": "± 22265.07156860468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126319.91237113402,
            "unit": "ns",
            "range": "± 22418.672328065702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8856.6797752809,
            "unit": "ns",
            "range": "± 1682.093470823281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23980.02688172043,
            "unit": "ns",
            "range": "± 3432.720434010592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408216.0208333333,
            "unit": "ns",
            "range": "± 159372.97308878147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2742382.426829268,
            "unit": "ns",
            "range": "± 143974.8259751289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146497.3673469387,
            "unit": "ns",
            "range": "± 185461.80766897276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9182646.981481481,
            "unit": "ns",
            "range": "± 385006.8017602914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3417956.0454545454,
            "unit": "ns",
            "range": "± 299080.5009134467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3482088.956043956,
            "unit": "ns",
            "range": "± 277611.7756267199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4325410.514705882,
            "unit": "ns",
            "range": "± 205865.98897134283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4361635.04,
            "unit": "ns",
            "range": "± 436678.6978736016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18775960.25,
            "unit": "ns",
            "range": "± 3029584.665130499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5602024.298789828,
            "unit": "ns",
            "range": "± 227166.51082000788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830567.259765625,
            "unit": "ns",
            "range": "± 25980.923449645925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1120573.1951349431,
            "unit": "ns",
            "range": "± 34704.27293066609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2802911.0935422205,
            "unit": "ns",
            "range": "± 108357.82474608227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822984.0576578776,
            "unit": "ns",
            "range": "± 21157.06336258171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748981.5562220982,
            "unit": "ns",
            "range": "± 12874.45701605066"
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
          "id": "7798021e992d1c30cb6255d3cce5621bc37f44e8",
          "message": "Use logger instance",
          "timestamp": "2023-12-13T13:46:33+09:00",
          "tree_id": "e86417fef6b3f2fdf16a096ccf05c608f7d378d2",
          "url": "https://github.com/greymistcube/libplanet/commit/7798021e992d1c30cb6255d3cce5621bc37f44e8"
        },
        "date": 1702443860244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9019153.520833334,
            "unit": "ns",
            "range": "± 523677.81652842474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22047434.5,
            "unit": "ns",
            "range": "± 1202573.515678046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55247538,
            "unit": "ns",
            "range": "± 1297337.7362209705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111132744.46551724,
            "unit": "ns",
            "range": "± 2997116.460044917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234636937.60126582,
            "unit": "ns",
            "range": "± 8821044.67641286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76818.2,
            "unit": "ns",
            "range": "± 8498.308713811124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319738.097826087,
            "unit": "ns",
            "range": "± 25995.861970393125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294044.24731182796,
            "unit": "ns",
            "range": "± 25039.227606357086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339288.2105263158,
            "unit": "ns",
            "range": "± 57452.680530931284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4244491.821428572,
            "unit": "ns",
            "range": "± 178786.8840299287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858288.7789473683,
            "unit": "ns",
            "range": "± 276972.5683683056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19279.61111111111,
            "unit": "ns",
            "range": "± 1704.5143477462748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100376.57608695653,
            "unit": "ns",
            "range": "± 15510.338060544938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87964.99484536082,
            "unit": "ns",
            "range": "± 16753.983197489008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98769.70212765958,
            "unit": "ns",
            "range": "± 13337.520141234838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6627.7052631578945,
            "unit": "ns",
            "range": "± 1225.5755562677236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16501.37777777778,
            "unit": "ns",
            "range": "± 1576.3787817480825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1465776.0204081633,
            "unit": "ns",
            "range": "± 159382.11681966425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2684613.7592592593,
            "unit": "ns",
            "range": "± 105517.70599304787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155866.263157895,
            "unit": "ns",
            "range": "± 141189.00255604342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10171583.285714285,
            "unit": "ns",
            "range": "± 591607.2418957289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295986,
            "unit": "ns",
            "range": "± 75071.68815451283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3335291.6,
            "unit": "ns",
            "range": "± 118022.53151352728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4246001.954545454,
            "unit": "ns",
            "range": "± 94416.5257339228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3788618.391566265,
            "unit": "ns",
            "range": "± 188128.12712273412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18271896.782828283,
            "unit": "ns",
            "range": "± 3076811.1693965835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5532052.205208333,
            "unit": "ns",
            "range": "± 83626.08936698898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1967717.091220543,
            "unit": "ns",
            "range": "± 88367.0536665177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1119074.557421875,
            "unit": "ns",
            "range": "± 17350.729845071386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2893458.5570816533,
            "unit": "ns",
            "range": "± 84479.7796988103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899595.5992838541,
            "unit": "ns",
            "range": "± 10288.485477804152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797410.7759164664,
            "unit": "ns",
            "range": "± 11263.976977369013"
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
          "id": "678a6049be41846f0cd12698f5054f150297779c",
          "message": "Log trie commit",
          "timestamp": "2023-12-13T14:55:18+09:00",
          "tree_id": "25cede9dbcf0f727ea4dac7e82ff4594a686f03d",
          "url": "https://github.com/greymistcube/libplanet/commit/678a6049be41846f0cd12698f5054f150297779c"
        },
        "date": 1702447940612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10215059.5,
            "unit": "ns",
            "range": "± 76329.08545835651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24661408.115384616,
            "unit": "ns",
            "range": "± 400046.9629473808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61771051,
            "unit": "ns",
            "range": "± 1257048.3636267213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108123228.28571428,
            "unit": "ns",
            "range": "± 3905431.9084487283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226310712.0147059,
            "unit": "ns",
            "range": "± 10701177.546964835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51575.97826086957,
            "unit": "ns",
            "range": "± 12451.970735924233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264825.8404255319,
            "unit": "ns",
            "range": "± 16810.58734401051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277539.8735632184,
            "unit": "ns",
            "range": "± 23329.01731640114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261048.3777777778,
            "unit": "ns",
            "range": "± 14753.698158049272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3932135.4571428574,
            "unit": "ns",
            "range": "± 183487.9629689789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3517406.8,
            "unit": "ns",
            "range": "± 64128.14181019572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16339.822916666666,
            "unit": "ns",
            "range": "± 3001.943891248825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74659.87368421053,
            "unit": "ns",
            "range": "± 10226.407828215191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72607.58585858585,
            "unit": "ns",
            "range": "± 10217.539795351613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80123.5,
            "unit": "ns",
            "range": "± 12510.543874573736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5371.595959595959,
            "unit": "ns",
            "range": "± 1479.7384346855188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16903.875,
            "unit": "ns",
            "range": "± 3342.165982995868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1272803.2315789473,
            "unit": "ns",
            "range": "± 81705.96351831633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2680009.1470588236,
            "unit": "ns",
            "range": "± 84782.77223047013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3762414.6428571427,
            "unit": "ns",
            "range": "± 662038.0545123988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 55921314.39795918,
            "unit": "ns",
            "range": "± 8848039.726656705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3440918.1627906975,
            "unit": "ns",
            "range": "± 385421.2136828886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3416137.4615384615,
            "unit": "ns",
            "range": "± 76747.37319516846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3956176.878378378,
            "unit": "ns",
            "range": "± 132505.6120166554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6240446.164835165,
            "unit": "ns",
            "range": "± 847892.0931025398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 56214553.3814433,
            "unit": "ns",
            "range": "± 10026445.55301214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4573943.485331632,
            "unit": "ns",
            "range": "± 456277.9436640138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1353866.0340401786,
            "unit": "ns",
            "range": "± 20389.770573270333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 877618.586328125,
            "unit": "ns",
            "range": "± 13729.611504744533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2273996.12984375,
            "unit": "ns",
            "range": "± 271134.4745725065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638457.8258928572,
            "unit": "ns",
            "range": "± 7656.187287938586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561569.7404436384,
            "unit": "ns",
            "range": "± 3999.541659574129"
          }
        ]
      }
    ]
  }
}