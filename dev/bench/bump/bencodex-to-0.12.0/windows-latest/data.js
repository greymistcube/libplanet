window.BENCHMARK_DATA = {
  "lastUpdate": 1690448726092,
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
          "id": "fc7c052061aac1654db2c548bd9a3f3a9553f8fa",
          "message": "Bump bencodex to 0.12.0",
          "timestamp": "2023-07-27T16:41:57+09:00",
          "tree_id": "f24002a0214c9431068a6f86c999ef138ed9f6c4",
          "url": "https://github.com/greymistcube/libplanet/commit/fc7c052061aac1654db2c548bd9a3f3a9553f8fa"
        },
        "date": 1690444648569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389597.894736842,
            "unit": "ns",
            "range": "± 99825.56912354603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2470897.2972972975,
            "unit": "ns",
            "range": "± 82952.62197479048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1743407.2164948455,
            "unit": "ns",
            "range": "± 124100.98311407417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4624195.833333333,
            "unit": "ns",
            "range": "± 175736.68038668914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43923.23943661972,
            "unit": "ns",
            "range": "± 2092.7738084369457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7074364.285714285,
            "unit": "ns",
            "range": "± 193392.65893280576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18130740,
            "unit": "ns",
            "range": "± 54797.79453330477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45648653.84615385,
            "unit": "ns",
            "range": "± 195837.64370597317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91498864.28571428,
            "unit": "ns",
            "range": "± 364778.3976548014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183065446.66666666,
            "unit": "ns",
            "range": "± 580286.312172912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4984545.145089285,
            "unit": "ns",
            "range": "± 11392.532787718426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527872.0963541667,
            "unit": "ns",
            "range": "± 2020.844286042965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152957.12890625,
            "unit": "ns",
            "range": "± 827.2130303612488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594585.78125,
            "unit": "ns",
            "range": "± 3582.356663147567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810694.2952473959,
            "unit": "ns",
            "range": "± 917.5160341922497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747192.8971354166,
            "unit": "ns",
            "range": "± 1185.4658579183385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3026177.777777778,
            "unit": "ns",
            "range": "± 112416.17864979322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3201770.8333333335,
            "unit": "ns",
            "range": "± 81231.74298782823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4054573.6842105263,
            "unit": "ns",
            "range": "± 87405.09673739006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3550019.4444444445,
            "unit": "ns",
            "range": "± 116217.62054609803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5973830.555555556,
            "unit": "ns",
            "range": "± 171846.5724658306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260969.23076923078,
            "unit": "ns",
            "range": "± 8906.536743377506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246259.3220338983,
            "unit": "ns",
            "range": "± 10176.42845423488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221303,
            "unit": "ns",
            "range": "± 13935.837494268748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3914323.076923077,
            "unit": "ns",
            "range": "± 53503.6315565924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3582021.4285714286,
            "unit": "ns",
            "range": "± 30897.726542490233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19597.894736842107,
            "unit": "ns",
            "range": "± 1711.3500299389377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83366.66666666667,
            "unit": "ns",
            "range": "± 4102.798769922658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68884.61538461539,
            "unit": "ns",
            "range": "± 2841.594734208973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88021.73913043478,
            "unit": "ns",
            "range": "± 10900.779547554663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4622.105263157895,
            "unit": "ns",
            "range": "± 735.5962912463663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19650,
            "unit": "ns",
            "range": "± 1406.1201630883038"
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
          "id": "9d98806393b29322dcad1c10353c8adb9511c7f0",
          "message": "Changelog",
          "timestamp": "2023-07-27T17:43:10+09:00",
          "tree_id": "6b63e87d2f53702d72a622bb2968f235482b384b",
          "url": "https://github.com/greymistcube/libplanet/commit/9d98806393b29322dcad1c10353c8adb9511c7f0"
        },
        "date": 1690448701750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1489408.75,
            "unit": "ns",
            "range": "± 150553.93599633104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2675537.777777778,
            "unit": "ns",
            "range": "± 100275.5392290501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1871455.1724137932,
            "unit": "ns",
            "range": "± 194350.9889879891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5076226.666666667,
            "unit": "ns",
            "range": "± 316798.56430911203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48442.69662921348,
            "unit": "ns",
            "range": "± 3770.697055176977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7552517.857142857,
            "unit": "ns",
            "range": "± 215811.40781568113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20495900,
            "unit": "ns",
            "range": "± 220341.09920756952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52007880,
            "unit": "ns",
            "range": "± 950344.0814477971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104261650,
            "unit": "ns",
            "range": "± 1174747.1731862524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231314737,
            "unit": "ns",
            "range": "± 29372027.96298055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5415921.448131443,
            "unit": "ns",
            "range": "± 316322.49495224096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1684850.9440104167,
            "unit": "ns",
            "range": "± 49814.48121237066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291858.636209239,
            "unit": "ns",
            "range": "± 57981.38948318224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2927522.2497888515,
            "unit": "ns",
            "range": "± 145425.85705587262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905124.5727539062,
            "unit": "ns",
            "range": "± 26471.64967719313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825574.1076239224,
            "unit": "ns",
            "range": "± 23419.62760395436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3406406.6666666665,
            "unit": "ns",
            "range": "± 57815.006290589925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3491025,
            "unit": "ns",
            "range": "± 113297.79565375489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4231346,
            "unit": "ns",
            "range": "± 170146.96313865294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3804604.5454545454,
            "unit": "ns",
            "range": "± 177316.42505533886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6464642.55319149,
            "unit": "ns",
            "range": "± 249488.73089883925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278486,
            "unit": "ns",
            "range": "± 11094.56586968299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254757.8125,
            "unit": "ns",
            "range": "± 11793.343625496867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230510.22727272726,
            "unit": "ns",
            "range": "± 13402.942203780047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4158987.5,
            "unit": "ns",
            "range": "± 75570.25759737314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3816537.5,
            "unit": "ns",
            "range": "± 96677.3963622899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20917.204301075268,
            "unit": "ns",
            "range": "± 1834.4305866869438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87112.04819277108,
            "unit": "ns",
            "range": "± 5976.261936140054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77944.8275862069,
            "unit": "ns",
            "range": "± 6025.869784186706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102010.46511627907,
            "unit": "ns",
            "range": "± 20012.590325738136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6433.333333333333,
            "unit": "ns",
            "range": "± 1058.4066888966283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20631.86813186813,
            "unit": "ns",
            "range": "± 1968.2411280056967"
          }
        ]
      }
    ]
  }
}