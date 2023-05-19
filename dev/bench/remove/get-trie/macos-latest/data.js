window.BENCHMARK_DATA = {
  "lastUpdate": 1684476545835,
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
          "id": "1359ce47893455262fa503398dc5a6fead7207d6",
          "message": "Removed GetTrie() from IBlockChainStates",
          "timestamp": "2023-05-16T14:20:38+09:00",
          "tree_id": "d29b7d716f0b5b86b82d1b4a4e81ddca913e0a39",
          "url": "https://github.com/greymistcube/libplanet/commit/1359ce47893455262fa503398dc5a6fead7207d6"
        },
        "date": 1684217903100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8722215.266666668,
            "unit": "ns",
            "range": "± 157626.2831616364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23031851.233333334,
            "unit": "ns",
            "range": "± 401449.4816190569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55819522.2,
            "unit": "ns",
            "range": "± 452469.34357860876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112195369.33333333,
            "unit": "ns",
            "range": "± 1303030.4160767845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223132913.86666667,
            "unit": "ns",
            "range": "± 1704518.8493818368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65181.84042553192,
            "unit": "ns",
            "range": "± 5741.283670394592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352646.816091954,
            "unit": "ns",
            "range": "± 32195.252976150732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333122.797752809,
            "unit": "ns",
            "range": "± 34653.61409335769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297270.45652173914,
            "unit": "ns",
            "range": "± 20598.079573299518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4548797.818181818,
            "unit": "ns",
            "range": "± 170419.1263417415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4229133.959770115,
            "unit": "ns",
            "range": "± 263565.6727784524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18092.277777777777,
            "unit": "ns",
            "range": "± 1938.9910951101228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93395.32291666667,
            "unit": "ns",
            "range": "± 9743.627707103098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91783.98958333333,
            "unit": "ns",
            "range": "± 6490.341610496553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109250.64893617021,
            "unit": "ns",
            "range": "± 12750.669815597794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5887.606382978724,
            "unit": "ns",
            "range": "± 752.4691286931569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18016.59375,
            "unit": "ns",
            "range": "± 1752.9224685056968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1627862.2419354839,
            "unit": "ns",
            "range": "± 143146.80592306683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3291150.6551724137,
            "unit": "ns",
            "range": "± 277336.97659768484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2916223.074468085,
            "unit": "ns",
            "range": "± 516865.63211466814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7170535.112359551,
            "unit": "ns",
            "range": "± 556734.3997120709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3713964.4102564105,
            "unit": "ns",
            "range": "± 128897.71635409583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3993960.6785714286,
            "unit": "ns",
            "range": "± 171385.83671280817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4972500.904761905,
            "unit": "ns",
            "range": "± 175483.7672901524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4853875.868421053,
            "unit": "ns",
            "range": "± 398463.15434276767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8713628.188888889,
            "unit": "ns",
            "range": "± 536560.7842790971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7120914.887834822,
            "unit": "ns",
            "range": "± 79936.63975874578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165636.88515625,
            "unit": "ns",
            "range": "± 38416.06706441455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1463797.9510416666,
            "unit": "ns",
            "range": "± 9102.671068162903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197335.728190104,
            "unit": "ns",
            "range": "± 16267.226594529859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051372.2583333333,
            "unit": "ns",
            "range": "± 7768.49996163372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858308.2885044643,
            "unit": "ns",
            "range": "± 2643.7309599704286"
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
          "id": "a4f2967e88352c699eaa3d23f316b2779c501df9",
          "message": "Removed GetTrie() from IBlockChainStates",
          "timestamp": "2023-05-19T14:51:21+09:00",
          "tree_id": "4061793da82e54481b786ed4c3368e87683fc4a6",
          "url": "https://github.com/greymistcube/libplanet/commit/a4f2967e88352c699eaa3d23f316b2779c501df9"
        },
        "date": 1684476523971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8334412.7,
            "unit": "ns",
            "range": "± 150036.31269567471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21106856.175,
            "unit": "ns",
            "range": "± 1097075.966776447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53152109.5,
            "unit": "ns",
            "range": "± 2139245.312791256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125099615.03333333,
            "unit": "ns",
            "range": "± 3643877.3244602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211501384.3,
            "unit": "ns",
            "range": "± 7345232.1157221375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62896.29885057471,
            "unit": "ns",
            "range": "± 8153.213683865162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348938.0662650602,
            "unit": "ns",
            "range": "± 29889.491727635803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332566.55555555556,
            "unit": "ns",
            "range": "± 30739.73172417754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303755.2840909091,
            "unit": "ns",
            "range": "± 24800.58546210537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4504951.847058823,
            "unit": "ns",
            "range": "± 296013.28114358825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4101707.3313253014,
            "unit": "ns",
            "range": "± 249013.6496653429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19234.317647058822,
            "unit": "ns",
            "range": "± 4733.75927378916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89457.25294117647,
            "unit": "ns",
            "range": "± 10868.789769122324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86402.98924731182,
            "unit": "ns",
            "range": "± 11878.233981141839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90858.53260869565,
            "unit": "ns",
            "range": "± 14939.453047236146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4620.857142857143,
            "unit": "ns",
            "range": "± 530.7950309565114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16829.23076923077,
            "unit": "ns",
            "range": "± 1914.4229924721167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1721151.030927835,
            "unit": "ns",
            "range": "± 177737.68582007618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3600459.2333333334,
            "unit": "ns",
            "range": "± 549453.6945393891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2751496.4418604653,
            "unit": "ns",
            "range": "± 300719.73040229984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7131575.817204301,
            "unit": "ns",
            "range": "± 563986.7381330673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3520279.0888888887,
            "unit": "ns",
            "range": "± 133421.26108543677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3680772.227272727,
            "unit": "ns",
            "range": "± 215287.07913387122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4888415.1823529415,
            "unit": "ns",
            "range": "± 387646.86285419046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4577974.4701492535,
            "unit": "ns",
            "range": "± 216471.7298811942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8476899.212765958,
            "unit": "ns",
            "range": "± 640049.3606251336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6704223.083147322,
            "unit": "ns",
            "range": "± 58414.9310958021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2107537.658984375,
            "unit": "ns",
            "range": "± 27496.888449628434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357390.671809896,
            "unit": "ns",
            "range": "± 22080.44442005662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3009129.25703125,
            "unit": "ns",
            "range": "± 36589.088377049746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978693.8533854167,
            "unit": "ns",
            "range": "± 14283.309665429992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 859103.7264775815,
            "unit": "ns",
            "range": "± 21721.328663487035"
          }
        ]
      }
    ]
  }
}