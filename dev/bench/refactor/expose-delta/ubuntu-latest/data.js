window.BENCHMARK_DATA = {
  "lastUpdate": 1686924124403,
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
          "id": "668e6170100ac4148dc9bbb696538e4f3175e24f",
          "message": "Use updated API",
          "timestamp": "2023-06-16T21:27:25+09:00",
          "tree_id": "a74c43a54001892637a69309f353991dfceed011",
          "url": "https://github.com/greymistcube/libplanet/commit/668e6170100ac4148dc9bbb696538e4f3175e24f"
        },
        "date": 1686924116994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3148445.5625,
            "unit": "ns",
            "range": "± 60230.507339684875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3340341.8,
            "unit": "ns",
            "range": "± 60349.698656130124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4174938.3529411764,
            "unit": "ns",
            "range": "± 79856.49121075035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4073950.529411765,
            "unit": "ns",
            "range": "± 110887.59608098789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6553083,
            "unit": "ns",
            "range": "± 92923.98170099399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5923524.184495192,
            "unit": "ns",
            "range": "± 24668.417000369795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995143.9757254464,
            "unit": "ns",
            "range": "± 4378.730724585375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353490.228515625,
            "unit": "ns",
            "range": "± 2223.069247026837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630049.3838541666,
            "unit": "ns",
            "range": "± 5251.198004983351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790579.6550641741,
            "unit": "ns",
            "range": "± 1204.0231981211823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752260.4268229167,
            "unit": "ns",
            "range": "± 941.8206912191562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265690.1818181818,
            "unit": "ns",
            "range": "± 6004.124357364803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257685.131147541,
            "unit": "ns",
            "range": "± 11105.911317065054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224330.15384615384,
            "unit": "ns",
            "range": "± 1841.2764524532904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4101746.3333333335,
            "unit": "ns",
            "range": "± 28314.635795610993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3743087.2,
            "unit": "ns",
            "range": "± 27080.109466965918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15115.41237113402,
            "unit": "ns",
            "range": "± 1155.3623327101159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79277.4328358209,
            "unit": "ns",
            "range": "± 3769.3868371389503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68999.53846153847,
            "unit": "ns",
            "range": "± 871.0053210117429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79660.98979591837,
            "unit": "ns",
            "range": "± 10819.362695844184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3889.7755102040815,
            "unit": "ns",
            "range": "± 415.55771816442734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14461.670212765957,
            "unit": "ns",
            "range": "± 884.5258785676472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1306442.4736842106,
            "unit": "ns",
            "range": "± 79804.68964741386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2501664.2083333335,
            "unit": "ns",
            "range": "± 63137.83295504415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2296647.947368421,
            "unit": "ns",
            "range": "± 50056.928702865334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5105387.903225807,
            "unit": "ns",
            "range": "± 133735.50655139043"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44981.843373493975,
            "unit": "ns",
            "range": "± 2415.4650235610984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7607532.466666667,
            "unit": "ns",
            "range": "± 12718.055679492312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19299057.333333332,
            "unit": "ns",
            "range": "± 97887.73745080686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48508552.333333336,
            "unit": "ns",
            "range": "± 502739.7214437914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96998215,
            "unit": "ns",
            "range": "± 917715.1700369783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193352002.30769232,
            "unit": "ns",
            "range": "± 657403.3246173139"
          }
        ]
      }
    ]
  }
}