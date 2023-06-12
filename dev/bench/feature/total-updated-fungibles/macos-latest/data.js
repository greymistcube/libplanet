window.BENCHMARK_DATA = {
  "lastUpdate": 1686582647657,
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
          "id": "027ba3ba808661370a6a9cf8513c2fe070d6923d",
          "message": "Added scenario test for ActionEvaluator",
          "timestamp": "2023-06-12T21:37:56+09:00",
          "tree_id": "ab5b77322cdbdb42324db5a1c7723b949d9ce77d",
          "url": "https://github.com/greymistcube/libplanet/commit/027ba3ba808661370a6a9cf8513c2fe070d6923d"
        },
        "date": 1686575129062,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9198956.744444445,
            "unit": "ns",
            "range": "± 865133.9296847687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29327326.181818184,
            "unit": "ns",
            "range": "± 7666829.786557446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70072212.05681819,
            "unit": "ns",
            "range": "± 17692252.30667866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138813838.63333333,
            "unit": "ns",
            "range": "± 32949025.13528046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263155226.20786518,
            "unit": "ns",
            "range": "± 35928750.0611015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79477.98235294118,
            "unit": "ns",
            "range": "± 6588.536047762132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394301.8021978022,
            "unit": "ns",
            "range": "± 64601.13597457002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385300.72043010755,
            "unit": "ns",
            "range": "± 56181.43908208505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 369035.4591836735,
            "unit": "ns",
            "range": "± 59645.72603814018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4799271.295918368,
            "unit": "ns",
            "range": "± 495413.52634712134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4237477.572916667,
            "unit": "ns",
            "range": "± 385278.883921388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27305.272727272728,
            "unit": "ns",
            "range": "± 3387.862831999408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126304.1046511628,
            "unit": "ns",
            "range": "± 13589.897487410679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123165.42528735632,
            "unit": "ns",
            "range": "± 10771.357330236156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129529.89010989011,
            "unit": "ns",
            "range": "± 25488.18359486544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8430.815789473685,
            "unit": "ns",
            "range": "± 1385.2273971335237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24479.739130434784,
            "unit": "ns",
            "range": "± 5083.1587271582375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1629593.1595744682,
            "unit": "ns",
            "range": "± 174580.82041212302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3585606.909090909,
            "unit": "ns",
            "range": "± 854867.1149293998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3063357.1333333333,
            "unit": "ns",
            "range": "± 607096.7874878951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8498335.805263158,
            "unit": "ns",
            "range": "± 2307281.6751007456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362981.7532467535,
            "unit": "ns",
            "range": "± 167428.1082767636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3921115.3411764707,
            "unit": "ns",
            "range": "± 399293.71096401947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4694551.811111111,
            "unit": "ns",
            "range": "± 397200.63760442636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4959754.90860215,
            "unit": "ns",
            "range": "± 512290.0600850672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8684933.021276595,
            "unit": "ns",
            "range": "± 797624.9578444258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9077976.89297715,
            "unit": "ns",
            "range": "± 1292522.1059943335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2681161.266107795,
            "unit": "ns",
            "range": "± 315676.2632249201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1670343.4950856855,
            "unit": "ns",
            "range": "± 110893.07318208016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3833863.572003866,
            "unit": "ns",
            "range": "± 300876.13219331653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049134.586616848,
            "unit": "ns",
            "range": "± 59757.09043823751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976674.0057547434,
            "unit": "ns",
            "range": "± 52077.594389794845"
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
          "id": "4a902e578173a6468f95578930d4b5cec7f0c744",
          "message": "Changelog",
          "timestamp": "2023-06-12T21:55:38+09:00",
          "tree_id": "bd7080a1804ddc6ee932b2e9b0ef6367f6d7e42e",
          "url": "https://github.com/greymistcube/libplanet/commit/4a902e578173a6468f95578930d4b5cec7f0c744"
        },
        "date": 1686575682028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9161642.721649485,
            "unit": "ns",
            "range": "± 545945.5838884369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21292832.25,
            "unit": "ns",
            "range": "± 915926.5366081843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53502906.57692308,
            "unit": "ns",
            "range": "± 1429194.6265548908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109658978.54081632,
            "unit": "ns",
            "range": "± 6394754.938900103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213924928.75,
            "unit": "ns",
            "range": "± 5354564.817723767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74142.26666666666,
            "unit": "ns",
            "range": "± 7695.072809666418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351727.70967741933,
            "unit": "ns",
            "range": "± 44383.03855924866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306863.1855670103,
            "unit": "ns",
            "range": "± 24099.371419590447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287068.48979591834,
            "unit": "ns",
            "range": "± 23222.493167561068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4152008.923076923,
            "unit": "ns",
            "range": "± 110813.8684580312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3788916.3225806453,
            "unit": "ns",
            "range": "± 108234.78217202549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16353.608695652174,
            "unit": "ns",
            "range": "± 1170.3772563243685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82093.09574468085,
            "unit": "ns",
            "range": "± 7022.933657865308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81280.42045454546,
            "unit": "ns",
            "range": "± 6903.020564444238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100984.19791666667,
            "unit": "ns",
            "range": "± 14847.46936659563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5309.085106382979,
            "unit": "ns",
            "range": "± 809.5449758647371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20700.433333333334,
            "unit": "ns",
            "range": "± 4641.997019881019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1669358.6989247312,
            "unit": "ns",
            "range": "± 192168.24391203257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3174212.6666666665,
            "unit": "ns",
            "range": "± 260616.50646001793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2634549.8181818184,
            "unit": "ns",
            "range": "± 288666.5465346338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6899887.15625,
            "unit": "ns",
            "range": "± 640863.2153504618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3402409.776595745,
            "unit": "ns",
            "range": "± 249787.79031282445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3669571.443298969,
            "unit": "ns",
            "range": "± 356270.5031318656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4627198.277777778,
            "unit": "ns",
            "range": "± 315537.68058453687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4639916.183673469,
            "unit": "ns",
            "range": "± 481822.45798123546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8105415.762886598,
            "unit": "ns",
            "range": "± 482127.40399873327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7234676.116666666,
            "unit": "ns",
            "range": "± 400030.7671183235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2120362.4790364583,
            "unit": "ns",
            "range": "± 57697.37574456717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374179.8933105469,
            "unit": "ns",
            "range": "± 22032.73631541172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2995858.692260742,
            "unit": "ns",
            "range": "± 83464.55219015006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882432.5506510417,
            "unit": "ns",
            "range": "± 14117.231935608383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789710.0166015625,
            "unit": "ns",
            "range": "± 5656.130047636956"
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
          "id": "b67b82b40ee01923b572ffb9ad3d26a3dd6f8b28",
          "message": "Changelog\n\nTypo",
          "timestamp": "2023-06-12T22:07:26+09:00",
          "tree_id": "a06ac8e75ad288a4e49fdd25a481c33ec7d3dde7",
          "url": "https://github.com/greymistcube/libplanet/commit/b67b82b40ee01923b572ffb9ad3d26a3dd6f8b28"
        },
        "date": 1686576613113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8771609.56701031,
            "unit": "ns",
            "range": "± 844878.6071988872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27833534.274725273,
            "unit": "ns",
            "range": "± 7823804.676310873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71343876.38461539,
            "unit": "ns",
            "range": "± 17101584.66861579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136391757.07446808,
            "unit": "ns",
            "range": "± 26512072.808127325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251948673.11363637,
            "unit": "ns",
            "range": "± 32413637.799991332"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80064.05747126437,
            "unit": "ns",
            "range": "± 6054.180925831765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373554.510989011,
            "unit": "ns",
            "range": "± 37719.04419505837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 394920.84269662923,
            "unit": "ns",
            "range": "± 77855.638251904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354830.1612903226,
            "unit": "ns",
            "range": "± 40636.11296839579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4838918.087912088,
            "unit": "ns",
            "range": "± 321351.53496107133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4232651.565656566,
            "unit": "ns",
            "range": "± 362152.05496660364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25614.139784946237,
            "unit": "ns",
            "range": "± 4524.081082749431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114640.56666666667,
            "unit": "ns",
            "range": "± 18115.232787954938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122158.22093023256,
            "unit": "ns",
            "range": "± 11736.336177120196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136066.38541666666,
            "unit": "ns",
            "range": "± 28517.3051206566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7710.774193548387,
            "unit": "ns",
            "range": "± 1993.0191709686405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24440.563218390806,
            "unit": "ns",
            "range": "± 6066.119950088684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1747705.1046511629,
            "unit": "ns",
            "range": "± 216543.3139783724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3386930.6153846155,
            "unit": "ns",
            "range": "± 494297.4362952773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2753688.8666666667,
            "unit": "ns",
            "range": "± 342997.6760217876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11901149.62886598,
            "unit": "ns",
            "range": "± 5948173.655845599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3678380.0568181816,
            "unit": "ns",
            "range": "± 413227.3890858232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4018744.028735632,
            "unit": "ns",
            "range": "± 584363.7623402181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4967525.804597701,
            "unit": "ns",
            "range": "± 606894.2800114566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5028208.179775281,
            "unit": "ns",
            "range": "± 627264.551322982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8695186.582352942,
            "unit": "ns",
            "range": "± 1104954.1183381265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6853264.591382576,
            "unit": "ns",
            "range": "± 216653.97512681925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2075629.9043612638,
            "unit": "ns",
            "range": "± 123064.31330809846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389767.951341712,
            "unit": "ns",
            "range": "± 33868.09520443955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2879192.7506214487,
            "unit": "ns",
            "range": "± 96529.38376148851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904646.00617327,
            "unit": "ns",
            "range": "± 25090.782464401178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745904.789728338,
            "unit": "ns",
            "range": "± 18142.966906097645"
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
          "id": "1803c0d627f1df34a924019cb1127718164e8de8",
          "message": "Code readability",
          "timestamp": "2023-06-12T23:48:09+09:00",
          "tree_id": "b48d076401b6c7b3a69f0a8aac48034c4c960382",
          "url": "https://github.com/greymistcube/libplanet/commit/1803c0d627f1df34a924019cb1127718164e8de8"
        },
        "date": 1686582618114,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9187697.36516854,
            "unit": "ns",
            "range": "± 1115105.5990329327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24481284.5,
            "unit": "ns",
            "range": "± 277731.6474827815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63998979.61290322,
            "unit": "ns",
            "range": "± 16956595.271832354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104642256.28571428,
            "unit": "ns",
            "range": "± 1784869.0133548556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245742382.0473684,
            "unit": "ns",
            "range": "± 46842925.12452856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74546.77173913043,
            "unit": "ns",
            "range": "± 11020.035120008715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338925.097826087,
            "unit": "ns",
            "range": "± 27941.289156293406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333557.42045454547,
            "unit": "ns",
            "range": "± 32626.98673625643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324990.183908046,
            "unit": "ns",
            "range": "± 20293.19581725393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4718173.037634409,
            "unit": "ns",
            "range": "± 661086.8528302556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700914.05,
            "unit": "ns",
            "range": "± 81969.21391176786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19356.721649484534,
            "unit": "ns",
            "range": "± 4072.4567798562643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100362.80208333333,
            "unit": "ns",
            "range": "± 17208.13839261424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107800.14583333333,
            "unit": "ns",
            "range": "± 16424.595354130644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115722.40322580645,
            "unit": "ns",
            "range": "± 11899.830853807487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7129.9631578947365,
            "unit": "ns",
            "range": "± 1239.7459057654767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18977.947916666668,
            "unit": "ns",
            "range": "± 2679.6999905519338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1652379.7872340425,
            "unit": "ns",
            "range": "± 170414.5976351591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3153215.430232558,
            "unit": "ns",
            "range": "± 317199.8874375511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2766973.794117647,
            "unit": "ns",
            "range": "± 381547.3511557537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12474147.303030303,
            "unit": "ns",
            "range": "± 4902093.67575446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3573530.057471264,
            "unit": "ns",
            "range": "± 414059.20748535905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3508672.090909091,
            "unit": "ns",
            "range": "± 277167.4249589217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4578429.641025641,
            "unit": "ns",
            "range": "± 235118.01689331146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4551157.611111111,
            "unit": "ns",
            "range": "± 453120.8283352009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8012912.488095238,
            "unit": "ns",
            "range": "± 457397.8542774093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7126418.081163194,
            "unit": "ns",
            "range": "± 350434.3270719647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2110662.572150735,
            "unit": "ns",
            "range": "± 38161.86399494828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330102.3168569712,
            "unit": "ns",
            "range": "± 14774.835511967858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620144.1274539265,
            "unit": "ns",
            "range": "± 104772.0369501138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808366.279296875,
            "unit": "ns",
            "range": "± 6684.195043491071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745476.745686849,
            "unit": "ns",
            "range": "± 4016.285023815019"
          }
        ]
      }
    ]
  }
}