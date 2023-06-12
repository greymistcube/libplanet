window.BENCHMARK_DATA = {
  "lastUpdate": 1686575701842,
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
      }
    ]
  }
}