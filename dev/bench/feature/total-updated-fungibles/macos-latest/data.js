window.BENCHMARK_DATA = {
  "lastUpdate": 1686575145264,
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
      }
    ]
  }
}