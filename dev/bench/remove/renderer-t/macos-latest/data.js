window.BENCHMARK_DATA = {
  "lastUpdate": 1684143734499,
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
          "id": "5f91d28dd93096f81522e019fb7aa79c92594c41",
          "message": "Changelog",
          "timestamp": "2023-05-15T18:24:37+09:00",
          "tree_id": "fdc8462c023211bfe1f722a7dac715dc8cf8b11d",
          "url": "https://github.com/greymistcube/libplanet/commit/5f91d28dd93096f81522e019fb7aa79c92594c41"
        },
        "date": 1684143637686,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8626739.136363637,
            "unit": "ns",
            "range": "± 207980.29173081016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21905997.64285714,
            "unit": "ns",
            "range": "± 310970.7920001014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54074107.333333336,
            "unit": "ns",
            "range": "± 483136.77326208074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103050262.95945945,
            "unit": "ns",
            "range": "± 3214345.8461294314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213126737.14864865,
            "unit": "ns",
            "range": "± 6899546.0960186515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74938.00515463918,
            "unit": "ns",
            "range": "± 9951.92562200455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331501.0052631579,
            "unit": "ns",
            "range": "± 22389.31201934173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320960.94845360826,
            "unit": "ns",
            "range": "± 27556.832559945968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320617.20454545453,
            "unit": "ns",
            "range": "± 17618.212618359623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4263756.166666667,
            "unit": "ns",
            "range": "± 65127.05517751619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824447.375,
            "unit": "ns",
            "range": "± 98729.10173641481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25558.58080808081,
            "unit": "ns",
            "range": "± 4048.2935777142707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116364.25257731958,
            "unit": "ns",
            "range": "± 14963.712368058188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122983.24242424243,
            "unit": "ns",
            "range": "± 8610.04880416009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129766.38461538461,
            "unit": "ns",
            "range": "± 13090.032323845355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8547.755319148937,
            "unit": "ns",
            "range": "± 994.3666670397745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22778.58762886598,
            "unit": "ns",
            "range": "± 3683.163981078229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671026.1935483871,
            "unit": "ns",
            "range": "± 150587.91383839957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3203384.9183673467,
            "unit": "ns",
            "range": "± 300249.48084694374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2765749.474226804,
            "unit": "ns",
            "range": "± 323798.0705246422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6636716.304878049,
            "unit": "ns",
            "range": "± 177756.4154302482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3485210.2,
            "unit": "ns",
            "range": "± 52955.630661364594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3544716.836956522,
            "unit": "ns",
            "range": "± 196056.5147067884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4503637.416666667,
            "unit": "ns",
            "range": "± 92444.10373744147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4882463.233333333,
            "unit": "ns",
            "range": "± 65155.12703482213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7799807.444444444,
            "unit": "ns",
            "range": "± 292855.6361095335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6999542.677884615,
            "unit": "ns",
            "range": "± 53283.49579699879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1983795.4012276786,
            "unit": "ns",
            "range": "± 14116.209935407298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303281.3348214286,
            "unit": "ns",
            "range": "± 12742.589550689489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2730139.6454427084,
            "unit": "ns",
            "range": "± 49748.014434485354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863603.5773577009,
            "unit": "ns",
            "range": "± 6257.5364101420055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794601.3403695914,
            "unit": "ns",
            "range": "± 2719.17839223551"
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
          "id": "2b3cbf39451018cb40616ce35eaec98920f1d09f",
          "message": "Removed t from ValidatingActionRenderer",
          "timestamp": "2023-05-15T18:16:40+09:00",
          "tree_id": "97f78ae1c1cd89e5920809d894e84fe961e1e86c",
          "url": "https://github.com/greymistcube/libplanet/commit/2b3cbf39451018cb40616ce35eaec98920f1d09f"
        },
        "date": 1684143711250,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9637587.117021276,
            "unit": "ns",
            "range": "± 1121913.5463511227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25990943.41860465,
            "unit": "ns",
            "range": "± 6327186.239177805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59402646.65116279,
            "unit": "ns",
            "range": "± 4441596.1730991835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115401612.73595506,
            "unit": "ns",
            "range": "± 6444185.534915434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237008684.69333333,
            "unit": "ns",
            "range": "± 11959028.551062902"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 88918.06470588235,
            "unit": "ns",
            "range": "± 8655.592621518868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366734.47872340423,
            "unit": "ns",
            "range": "± 56086.542774178524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329191.4569892473,
            "unit": "ns",
            "range": "± 33941.7350443995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338646.1595744681,
            "unit": "ns",
            "range": "± 42570.838297926915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4861757.197916667,
            "unit": "ns",
            "range": "± 380284.39587036264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4281218.295918368,
            "unit": "ns",
            "range": "± 335545.1490633067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24770.666666666668,
            "unit": "ns",
            "range": "± 6504.880353101297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107580.0612244898,
            "unit": "ns",
            "range": "± 18683.986603460053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126294.48314606742,
            "unit": "ns",
            "range": "± 15500.046167169045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145642.07291666666,
            "unit": "ns",
            "range": "± 30929.023467744846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9443.510638297872,
            "unit": "ns",
            "range": "± 1210.3686765688144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23222.296703296703,
            "unit": "ns",
            "range": "± 4568.5431436546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738190.8298969073,
            "unit": "ns",
            "range": "± 290248.5150403343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3242310.717391304,
            "unit": "ns",
            "range": "± 283200.04993225826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2883800.515789474,
            "unit": "ns",
            "range": "± 360105.95287347294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7059411.02631579,
            "unit": "ns",
            "range": "± 401652.7007878939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3795868.215909091,
            "unit": "ns",
            "range": "± 415661.5613086986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3892301.402061856,
            "unit": "ns",
            "range": "± 440884.28225325985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4811336.426315789,
            "unit": "ns",
            "range": "± 328158.99478736863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4839095.666666667,
            "unit": "ns",
            "range": "± 393624.2525915899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8131139,
            "unit": "ns",
            "range": "± 484559.78606019303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8063961.633345171,
            "unit": "ns",
            "range": "± 439577.9820792672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2125647.2524414062,
            "unit": "ns",
            "range": "± 103806.27018843389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1449594.8276475694,
            "unit": "ns",
            "range": "± 55124.06014102668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3625589.734375,
            "unit": "ns",
            "range": "± 286848.91305640497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021449.8800702336,
            "unit": "ns",
            "range": "± 84190.94243357083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836507.7238729508,
            "unit": "ns",
            "range": "± 37569.24536464875"
          }
        ]
      }
    ]
  }
}