window.BENCHMARK_DATA = {
  "lastUpdate": 1702440472420,
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
      }
    ]
  }
}