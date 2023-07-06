window.BENCHMARK_DATA = {
  "lastUpdate": 1688621794331,
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
      }
    ]
  }
}