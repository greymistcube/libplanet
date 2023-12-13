window.BENCHMARK_DATA = {
  "lastUpdate": 1702443529433,
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
          "id": "08a91d1f1a64abf46de24658a987d2f2bf94850d",
          "message": "Added trie inconsistent log",
          "timestamp": "2023-12-13T12:14:14+09:00",
          "tree_id": "f3274a42fab16eeb412f7c65652d5dd7e3c42c11",
          "url": "https://github.com/greymistcube/libplanet/commit/08a91d1f1a64abf46de24658a987d2f2bf94850d"
        },
        "date": 1702438064251,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050169,
            "unit": "ns",
            "range": "± 122422.17952394877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1854336.7816091955,
            "unit": "ns",
            "range": "± 95388.7018746742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1436647.311827957,
            "unit": "ns",
            "range": "± 112179.61974033648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5600011.333333333,
            "unit": "ns",
            "range": "± 282938.27466157434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35286.48648648649,
            "unit": "ns",
            "range": "± 1644.1114787657812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4991792.307692308,
            "unit": "ns",
            "range": "± 28526.31713402151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13282480,
            "unit": "ns",
            "range": "± 222011.64448225297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34153333.333333336,
            "unit": "ns",
            "range": "± 249932.38133162184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66525520,
            "unit": "ns",
            "range": "± 1176319.0518368245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133400893.33333333,
            "unit": "ns",
            "range": "± 1621590.9742624753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288674.8798076925,
            "unit": "ns",
            "range": "± 12203.206574148473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048673.7723214286,
            "unit": "ns",
            "range": "± 1690.639757423331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720810.4557291666,
            "unit": "ns",
            "range": "± 1393.2602991487147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921919.4791666667,
            "unit": "ns",
            "range": "± 9203.579949063229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607947.6422991072,
            "unit": "ns",
            "range": "± 1241.9906983598064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567736.5885416666,
            "unit": "ns",
            "range": "± 2642.33319110019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119838.2352941176,
            "unit": "ns",
            "range": "± 65482.78984961174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489765.909090909,
            "unit": "ns",
            "range": "± 86182.07050134338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2780115.3846153845,
            "unit": "ns",
            "range": "± 73550.91674375074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2674130,
            "unit": "ns",
            "range": "± 139532.02109692385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6352843.75,
            "unit": "ns",
            "range": "± 293858.62321277545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175627.02702702704,
            "unit": "ns",
            "range": "± 8751.333319898851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166316.04938271604,
            "unit": "ns",
            "range": "± 7772.796420692547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140455.55555555556,
            "unit": "ns",
            "range": "± 3960.62364818215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838063.6363636362,
            "unit": "ns",
            "range": "± 68708.90664836585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486181.8181818184,
            "unit": "ns",
            "range": "± 60886.11841449917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11548.91304347826,
            "unit": "ns",
            "range": "± 1577.8337190916932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52916.12903225807,
            "unit": "ns",
            "range": "± 6018.9066304975995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44142.72727272727,
            "unit": "ns",
            "range": "± 1735.2398217702475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57054.08163265306,
            "unit": "ns",
            "range": "± 14412.095209342891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652.577319587629,
            "unit": "ns",
            "range": "± 720.5456242068046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9628.72340425532,
            "unit": "ns",
            "range": "± 1432.166742591845"
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
          "id": "75829b976afeecadfb6476fd0014e92850b63fa7",
          "message": "More logging",
          "timestamp": "2023-12-13T12:22:26+09:00",
          "tree_id": "70f98720fd85a03c40578e4cd45ba6c0b468464c",
          "url": "https://github.com/greymistcube/libplanet/commit/75829b976afeecadfb6476fd0014e92850b63fa7"
        },
        "date": 1702438420547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950355.5555555555,
            "unit": "ns",
            "range": "± 102549.65867486378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1700154.1176470588,
            "unit": "ns",
            "range": "± 91203.26794602051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1272988.5416666667,
            "unit": "ns",
            "range": "± 106215.4492378498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5551365,
            "unit": "ns",
            "range": "± 350362.3280032235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33443.47826086957,
            "unit": "ns",
            "range": "± 1633.516439794618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5355626.666666667,
            "unit": "ns",
            "range": "± 96123.62179332752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13690266.666666666,
            "unit": "ns",
            "range": "± 102056.24266386974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32476452.94117647,
            "unit": "ns",
            "range": "± 629172.1228305168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65584953.333333336,
            "unit": "ns",
            "range": "± 699806.8160639219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133735252.94117647,
            "unit": "ns",
            "range": "± 2641127.090873716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3246668.3463541665,
            "unit": "ns",
            "range": "± 15152.166505273262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048349.5963541666,
            "unit": "ns",
            "range": "± 4502.382964151802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745215.3390066965,
            "unit": "ns",
            "range": "± 2119.299663871749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931627.9947916667,
            "unit": "ns",
            "range": "± 4657.740162038643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619995.947265625,
            "unit": "ns",
            "range": "± 2641.1060120524467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572851.2169471154,
            "unit": "ns",
            "range": "± 1218.2801171368899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151677.272727273,
            "unit": "ns",
            "range": "± 47778.32674438804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2368531.25,
            "unit": "ns",
            "range": "± 37524.51143363939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2852097.8260869565,
            "unit": "ns",
            "range": "± 83863.65254024716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2625636.6666666665,
            "unit": "ns",
            "range": "± 239769.88380481667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6225635,
            "unit": "ns",
            "range": "± 220749.62560586192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168825.4716981132,
            "unit": "ns",
            "range": "± 7041.167562173668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164759.25925925927,
            "unit": "ns",
            "range": "± 6863.700484914152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141501.21951219512,
            "unit": "ns",
            "range": "± 4480.296974041984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2699313.3333333335,
            "unit": "ns",
            "range": "± 41039.8911629486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2492366.6666666665,
            "unit": "ns",
            "range": "± 45202.649522008374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11266.292134831461,
            "unit": "ns",
            "range": "± 1518.592636458381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52775,
            "unit": "ns",
            "range": "± 6074.910120078565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43504.83870967742,
            "unit": "ns",
            "range": "± 1977.117243996871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63265.656565656565,
            "unit": "ns",
            "range": "± 14703.72826257425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2972.9166666666665,
            "unit": "ns",
            "range": "± 761.6435368287333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11502.173913043478,
            "unit": "ns",
            "range": "± 1523.2973388700893"
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
        "date": 1702440454671,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 929842.2680412371,
            "unit": "ns",
            "range": "± 80534.28855029643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729527.1739130435,
            "unit": "ns",
            "range": "± 107652.40063906628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1314971.7391304348,
            "unit": "ns",
            "range": "± 78191.62896946342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5356278.723404256,
            "unit": "ns",
            "range": "± 201753.9891703779"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34416.30434782609,
            "unit": "ns",
            "range": "± 2428.9136165998093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4857684.615384615,
            "unit": "ns",
            "range": "± 35887.18076959715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13107326.666666666,
            "unit": "ns",
            "range": "± 101922.22852090052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33282211.76470588,
            "unit": "ns",
            "range": "± 664931.7830446528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66057256.25,
            "unit": "ns",
            "range": "± 1269229.6844772948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129351742.85714285,
            "unit": "ns",
            "range": "± 1267067.0091649792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3323327.4274553573,
            "unit": "ns",
            "range": "± 5748.108101441171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035745.5078125,
            "unit": "ns",
            "range": "± 3506.050406094191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749113.0231584822,
            "unit": "ns",
            "range": "± 1024.7580893059383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1898978.9341517857,
            "unit": "ns",
            "range": "± 3863.7632127051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609109.0169270834,
            "unit": "ns",
            "range": "± 2186.8018670907063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564307.2614397322,
            "unit": "ns",
            "range": "± 1423.292986073077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2068131.25,
            "unit": "ns",
            "range": "± 63873.511282443105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2189874.3243243243,
            "unit": "ns",
            "range": "± 50715.954126911616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2713118.75,
            "unit": "ns",
            "range": "± 52848.78073333386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2574656.3218390807,
            "unit": "ns",
            "range": "± 134900.3143592364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6263180,
            "unit": "ns",
            "range": "± 238774.18330348216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164734,
            "unit": "ns",
            "range": "± 6545.963392404045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164095.06172839506,
            "unit": "ns",
            "range": "± 8640.050654286812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140380,
            "unit": "ns",
            "range": "± 3217.1308699651554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2738360,
            "unit": "ns",
            "range": "± 62339.27038054702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515191.6666666665,
            "unit": "ns",
            "range": "± 65307.84570130091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12411.827956989247,
            "unit": "ns",
            "range": "± 1332.2789777022313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49368.131868131866,
            "unit": "ns",
            "range": "± 4119.597583391398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43139.47368421053,
            "unit": "ns",
            "range": "± 1462.6040223914981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49697.89473684211,
            "unit": "ns",
            "range": "± 9313.293849612353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2200,
            "unit": "ns",
            "range": "± 268.7201635824701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8398.809523809523,
            "unit": "ns",
            "range": "± 508.5993162466083"
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
        "date": 1702440813035,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975135.0515463918,
            "unit": "ns",
            "range": "± 106340.685849417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1745445.5223880596,
            "unit": "ns",
            "range": "± 81958.96873073009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1362321.2121212122,
            "unit": "ns",
            "range": "± 98486.45848358149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5553782.894736842,
            "unit": "ns",
            "range": "± 280550.445796905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34980,
            "unit": "ns",
            "range": "± 1866.4200517364277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4745621.428571428,
            "unit": "ns",
            "range": "± 31689.076705034848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13052542.857142856,
            "unit": "ns",
            "range": "± 97022.04915367447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31264391.666666668,
            "unit": "ns",
            "range": "± 223890.7544411837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64169113.333333336,
            "unit": "ns",
            "range": "± 552917.7811091506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129234207.14285715,
            "unit": "ns",
            "range": "± 1242200.9867503394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3244346.935096154,
            "unit": "ns",
            "range": "± 6858.201051852954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050204.994419643,
            "unit": "ns",
            "range": "± 1629.7065639137418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741227.0958533654,
            "unit": "ns",
            "range": "± 2317.2401103682732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926953.515625,
            "unit": "ns",
            "range": "± 4437.006991061031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614371.2332589285,
            "unit": "ns",
            "range": "± 3196.332043840068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559525.5161830357,
            "unit": "ns",
            "range": "± 707.1363911823757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2115815.714285714,
            "unit": "ns",
            "range": "± 68247.06821049334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2216520.512820513,
            "unit": "ns",
            "range": "± 77171.41951009959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741002.564102564,
            "unit": "ns",
            "range": "± 91277.38950779445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2549906.0606060605,
            "unit": "ns",
            "range": "± 116173.66029922335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6403088.636363637,
            "unit": "ns",
            "range": "± 350903.23270092317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167612.28070175438,
            "unit": "ns",
            "range": "± 7025.414837152694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159037.7358490566,
            "unit": "ns",
            "range": "± 6156.054756063469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142226.66666666666,
            "unit": "ns",
            "range": "± 5358.697263667389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2701900,
            "unit": "ns",
            "range": "± 42892.62340842703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2426700,
            "unit": "ns",
            "range": "± 46136.4786981697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9512.765957446809,
            "unit": "ns",
            "range": "± 1071.3506742499114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51226.086956521736,
            "unit": "ns",
            "range": "± 3789.687266091102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43970,
            "unit": "ns",
            "range": "± 1724.1679448478376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54502.04081632653,
            "unit": "ns",
            "range": "± 11623.394287436156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2308.6021505376343,
            "unit": "ns",
            "range": "± 328.9165065122067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9318.279569892473,
            "unit": "ns",
            "range": "± 1194.0018786453008"
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
        "date": 1702443506695,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988321.649484536,
            "unit": "ns",
            "range": "± 108002.82907830486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1766102.7777777778,
            "unit": "ns",
            "range": "± 77658.17111850528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1433436,
            "unit": "ns",
            "range": "± 122563.57947670024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5271482.142857143,
            "unit": "ns",
            "range": "± 150056.86095998413"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34455.93220338983,
            "unit": "ns",
            "range": "± 1526.9161152173942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5042026.666666667,
            "unit": "ns",
            "range": "± 32500.999252037658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12939513.333333334,
            "unit": "ns",
            "range": "± 151941.33203625795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33898764.28571428,
            "unit": "ns",
            "range": "± 452407.7549106521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67137673.33333333,
            "unit": "ns",
            "range": "± 644563.9893609885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135691306.66666666,
            "unit": "ns",
            "range": "± 1572367.3146231573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3256730.6790865385,
            "unit": "ns",
            "range": "± 9892.733332135565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056697.9073660714,
            "unit": "ns",
            "range": "± 3645.695790393692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737237.8605769231,
            "unit": "ns",
            "range": "± 1781.8670203047375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959545.5357142857,
            "unit": "ns",
            "range": "± 5882.402873614795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640521.9168526785,
            "unit": "ns",
            "range": "± 971.0379360831788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555979.6456473215,
            "unit": "ns",
            "range": "± 956.906621099748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2142382,
            "unit": "ns",
            "range": "± 85954.36541964508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288155,
            "unit": "ns",
            "range": "± 101259.7338698351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2814876.6666666665,
            "unit": "ns",
            "range": "± 83586.81913635267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2644884.6938775512,
            "unit": "ns",
            "range": "± 169887.94448351287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6273360.714285715,
            "unit": "ns",
            "range": "± 269353.453951948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179672.72727272726,
            "unit": "ns",
            "range": "± 7511.868464780772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165651.80722891566,
            "unit": "ns",
            "range": "± 8359.095549245178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148105.6603773585,
            "unit": "ns",
            "range": "± 6126.343340736966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2754007.1428571427,
            "unit": "ns",
            "range": "± 33623.05674763889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2571725,
            "unit": "ns",
            "range": "± 57510.90400043603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11430.851063829787,
            "unit": "ns",
            "range": "± 869.3127424846411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56779.5918367347,
            "unit": "ns",
            "range": "± 5788.434241287177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44139.393939393936,
            "unit": "ns",
            "range": "± 2000.3752561709928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66766.66666666667,
            "unit": "ns",
            "range": "± 19311.717918911094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3614.5833333333335,
            "unit": "ns",
            "range": "± 893.1292317248403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12572.631578947368,
            "unit": "ns",
            "range": "± 2523.2721960953613"
          }
        ]
      }
    ]
  }
}