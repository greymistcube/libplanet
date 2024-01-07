window.BENCHMARK_DATA = {
  "lastUpdate": 1704594581346,
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
          "id": "47423efb53fe7d199ca1c6a6c65d71408d84ba05",
          "message": "Removed arguments to redirect to legacy by default; removed GetAccountState()",
          "timestamp": "2024-01-06T19:37:09+09:00",
          "tree_id": "8d0db7b7b7b68a376e7c8289e76431a2128dd358",
          "url": "https://github.com/greymistcube/libplanet/commit/47423efb53fe7d199ca1c6a6c65d71408d84ba05"
        },
        "date": 1704594559634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067638.775510204,
            "unit": "ns",
            "range": "± 161019.77315515873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1838117.391304348,
            "unit": "ns",
            "range": "± 104346.39334499747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672866.6666666667,
            "unit": "ns",
            "range": "± 190905.75621259309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11057084.269662922,
            "unit": "ns",
            "range": "± 971030.6142654071"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35923.59550561798,
            "unit": "ns",
            "range": "± 2715.7797504044474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5023326.666666667,
            "unit": "ns",
            "range": "± 50255.43988560082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13891592.307692308,
            "unit": "ns",
            "range": "± 112998.18185512589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34621707.692307696,
            "unit": "ns",
            "range": "± 293635.33070102014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68732921.42857143,
            "unit": "ns",
            "range": "± 337269.6642578034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136937885.7142857,
            "unit": "ns",
            "range": "± 1316551.1200493874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310595.3962053573,
            "unit": "ns",
            "range": "± 8099.77374135398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083401.2109375,
            "unit": "ns",
            "range": "± 4318.899076269395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745922.5795200893,
            "unit": "ns",
            "range": "± 845.0485636929674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964221.9075520833,
            "unit": "ns",
            "range": "± 2255.7013728507877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631650.3278459822,
            "unit": "ns",
            "range": "± 2172.6227467055755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553446.0111177885,
            "unit": "ns",
            "range": "± 1261.0349147790575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2290450,
            "unit": "ns",
            "range": "± 91930.39323314134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2398433.3333333335,
            "unit": "ns",
            "range": "± 37881.46298778913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2936612,
            "unit": "ns",
            "range": "± 78057.09619673708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2931679.069767442,
            "unit": "ns",
            "range": "± 159303.84664775536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12393491.011235954,
            "unit": "ns",
            "range": "± 1515254.1890449547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181504,
            "unit": "ns",
            "range": "± 6908.615148154232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176024.05063291139,
            "unit": "ns",
            "range": "± 9159.025465876975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151568.23529411765,
            "unit": "ns",
            "range": "± 8149.8643249692295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2907640,
            "unit": "ns",
            "range": "± 54182.98098638934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2608653.3333333335,
            "unit": "ns",
            "range": "± 36553.5979598387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13750.537634408602,
            "unit": "ns",
            "range": "± 2197.658024981118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61822.10526315789,
            "unit": "ns",
            "range": "± 5927.077765633383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55590.816326530614,
            "unit": "ns",
            "range": "± 6677.382763018337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72199.49494949495,
            "unit": "ns",
            "range": "± 16169.241231029337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3332.2916666666665,
            "unit": "ns",
            "range": "± 825.0671158239402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13142.222222222223,
            "unit": "ns",
            "range": "± 1646.4451169401698"
          }
        ]
      }
    ]
  }
}