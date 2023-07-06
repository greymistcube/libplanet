window.BENCHMARK_DATA = {
  "lastUpdate": 1688622144604,
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
          "id": "53865623b75169fd62a87bd0c1fbb9e6a4741632",
          "message": "Expose Logs for ActionContext",
          "timestamp": "2023-07-06T14:21:34+09:00",
          "tree_id": "7d248476019cf58680d210b23add1a089dcb8e18",
          "url": "https://github.com/greymistcube/libplanet/commit/53865623b75169fd62a87bd0c1fbb9e6a4741632"
        },
        "date": 1688621770560,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7902079.4,
            "unit": "ns",
            "range": "± 218250.44727395807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19042992.57142857,
            "unit": "ns",
            "range": "± 545775.0159085653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47892380.64285714,
            "unit": "ns",
            "range": "± 477056.96674451575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104721499.66666667,
            "unit": "ns",
            "range": "± 742138.983997286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214481002.07142857,
            "unit": "ns",
            "range": "± 2046982.4251696207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63843.4,
            "unit": "ns",
            "range": "± 9938.73773975219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335360.20547945204,
            "unit": "ns",
            "range": "± 16633.17266285034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312744.31967213115,
            "unit": "ns",
            "range": "± 13205.277665272319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318018.1170212766,
            "unit": "ns",
            "range": "± 12323.843144495906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4458210.166666667,
            "unit": "ns",
            "range": "± 74333.05832695232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3877814.552631579,
            "unit": "ns",
            "range": "± 72868.576767793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21530.606382978724,
            "unit": "ns",
            "range": "± 2667.2162050084908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106697.0505050505,
            "unit": "ns",
            "range": "± 10950.645884756826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117376.68055555556,
            "unit": "ns",
            "range": "± 5671.700317194773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117251.14925373135,
            "unit": "ns",
            "range": "± 4737.180072362868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8139.468085106383,
            "unit": "ns",
            "range": "± 878.2700456943957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20076.08695652174,
            "unit": "ns",
            "range": "± 2248.756680421447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601698.54,
            "unit": "ns",
            "range": "± 176460.474571441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3012782.2696629213,
            "unit": "ns",
            "range": "± 172042.71035881838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2062259.6224489796,
            "unit": "ns",
            "range": "± 194789.44694500134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5843064.885714286,
            "unit": "ns",
            "range": "± 278386.522999767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335324.78125,
            "unit": "ns",
            "range": "± 100696.3877903032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3452829.6764705884,
            "unit": "ns",
            "range": "± 109727.19832625146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4541613.875,
            "unit": "ns",
            "range": "± 107190.34699859568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3994779.0430107526,
            "unit": "ns",
            "range": "± 225363.67434900656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7195861.972222222,
            "unit": "ns",
            "range": "± 235028.00090694195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6561721.71484375,
            "unit": "ns",
            "range": "± 46244.743105846035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1955401.6446814905,
            "unit": "ns",
            "range": "± 3766.649121935851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289397.0040564905,
            "unit": "ns",
            "range": "± 1711.2626547909927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605407.3602764425,
            "unit": "ns",
            "range": "± 26220.13705123066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791744.4867838542,
            "unit": "ns",
            "range": "± 2031.3705113435078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731781.9967912947,
            "unit": "ns",
            "range": "± 1020.6889714486116"
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
          "id": "73a2f0860f2e00cc1be3bd877287d3739e6b2225",
          "message": "Changelog",
          "timestamp": "2023-07-06T14:27:12+09:00",
          "tree_id": "feb40a6a7ede078cb6bcd0f76c2bb0bef7b94ca9",
          "url": "https://github.com/greymistcube/libplanet/commit/73a2f0860f2e00cc1be3bd877287d3739e6b2225"
        },
        "date": 1688622132000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8199580.148148148,
            "unit": "ns",
            "range": "± 228323.34507409306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20764959.352941178,
            "unit": "ns",
            "range": "± 659637.8004690371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48744235.56666667,
            "unit": "ns",
            "range": "± 694252.3448577579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101279491,
            "unit": "ns",
            "range": "± 1653088.449832061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204714812.33333334,
            "unit": "ns",
            "range": "± 2625638.515263877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57046.311111111114,
            "unit": "ns",
            "range": "± 7234.002326162976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316013.03125,
            "unit": "ns",
            "range": "± 19837.628129896624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303948.22222222225,
            "unit": "ns",
            "range": "± 18687.911913330485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306128.15625,
            "unit": "ns",
            "range": "± 23191.36359592697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4237365.075,
            "unit": "ns",
            "range": "± 146638.77235345216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3747158.203703704,
            "unit": "ns",
            "range": "± 102004.28048326615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16385.709677419356,
            "unit": "ns",
            "range": "± 1332.8687888441589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89239.03684210527,
            "unit": "ns",
            "range": "± 10338.601335308213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84370.08888888889,
            "unit": "ns",
            "range": "± 6743.421819842253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101955.59793814433,
            "unit": "ns",
            "range": "± 12101.527740726748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4910.0625,
            "unit": "ns",
            "range": "± 679.701680886549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15940.1875,
            "unit": "ns",
            "range": "± 1670.9105699871363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552299.6565656567,
            "unit": "ns",
            "range": "± 170894.6971068084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2775317.5409836066,
            "unit": "ns",
            "range": "± 106982.85243028028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170190.0736842104,
            "unit": "ns",
            "range": "± 251915.43221968497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5629673.843137255,
            "unit": "ns",
            "range": "± 212993.05031172943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308004.0319148935,
            "unit": "ns",
            "range": "± 197349.95924904855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3546522.188235294,
            "unit": "ns",
            "range": "± 190287.3891555371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4487721.534883721,
            "unit": "ns",
            "range": "± 141680.8070681869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3887156.4175824174,
            "unit": "ns",
            "range": "± 249673.47897462067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7349415.493150685,
            "unit": "ns",
            "range": "± 363428.2407474427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7280644.040178572,
            "unit": "ns",
            "range": "± 103283.67771859921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2124257.649639423,
            "unit": "ns",
            "range": "± 12208.635709182256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291989.8539663462,
            "unit": "ns",
            "range": "± 13635.46128638976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2498211.2934895833,
            "unit": "ns",
            "range": "± 19846.30908708206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787846.0935546875,
            "unit": "ns",
            "range": "± 3634.537007285568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724190.3688616072,
            "unit": "ns",
            "range": "± 3588.5323211230343"
          }
        ]
      }
    ]
  }
}