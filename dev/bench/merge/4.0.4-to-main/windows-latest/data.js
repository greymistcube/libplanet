window.BENCHMARK_DATA = {
  "lastUpdate": 1707290321144,
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
          "id": "b601a8368715d02bd5b819a8dfa54b89e8488656",
          "message": "Merge tag '4.0.4' into merge/4.0.4-to-main\n\nLibplanet 4.0.4",
          "timestamp": "2024-02-07T16:06:28+09:00",
          "tree_id": "4063e79e09cf7026189cd482874f9a0e47716b23",
          "url": "https://github.com/greymistcube/libplanet/commit/b601a8368715d02bd5b819a8dfa54b89e8488656"
        },
        "date": 1707290294814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943629.3478260869,
            "unit": "ns",
            "range": "± 101804.37234294714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1718760.606060606,
            "unit": "ns",
            "range": "± 73165.5380811483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1438559.5959595959,
            "unit": "ns",
            "range": "± 129034.00589529146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10946424.444444444,
            "unit": "ns",
            "range": "± 1011053.8937291963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34589.873417721516,
            "unit": "ns",
            "range": "± 1809.2777236254806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5245592.857142857,
            "unit": "ns",
            "range": "± 41560.14574427903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12911534.615384616,
            "unit": "ns",
            "range": "± 75444.17192151476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32383211.53846154,
            "unit": "ns",
            "range": "± 244698.11856810265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65025026.666666664,
            "unit": "ns",
            "range": "± 412035.65113898076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131273760,
            "unit": "ns",
            "range": "± 899185.8887746341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3282415.5133928573,
            "unit": "ns",
            "range": "± 6355.463773557391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055478.6067708333,
            "unit": "ns",
            "range": "± 2280.382714127282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729088.6653645834,
            "unit": "ns",
            "range": "± 1443.4204123895688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916759.6153846155,
            "unit": "ns",
            "range": "± 1077.0332452295472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613084.4517299107,
            "unit": "ns",
            "range": "± 883.6859062282448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555941.7903645834,
            "unit": "ns",
            "range": "± 1196.4351498735434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185561.3636363638,
            "unit": "ns",
            "range": "± 82037.74575358474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2239686.6666666665,
            "unit": "ns",
            "range": "± 27404.949153305104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2785740,
            "unit": "ns",
            "range": "± 42889.87226440693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2753767.1052631577,
            "unit": "ns",
            "range": "± 139620.2157169301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12593215.053763442,
            "unit": "ns",
            "range": "± 1590504.9660916578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165459.77011494254,
            "unit": "ns",
            "range": "± 8238.952571863858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155453.7037037037,
            "unit": "ns",
            "range": "± 5712.241504426409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137868.75,
            "unit": "ns",
            "range": "± 2704.4947155922982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2767800,
            "unit": "ns",
            "range": "± 53875.30046319927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2412692.8571428573,
            "unit": "ns",
            "range": "± 30289.71555052751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9218.666666666666,
            "unit": "ns",
            "range": "± 478.6505053860346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49929.545454545456,
            "unit": "ns",
            "range": "± 2693.4641665151107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44418.181818181816,
            "unit": "ns",
            "range": "± 1355.1878434036703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47156.25,
            "unit": "ns",
            "range": "± 7585.99558050019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1992.391304347826,
            "unit": "ns",
            "range": "± 237.77064193317247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8932.222222222223,
            "unit": "ns",
            "range": "± 649.4297892659508"
          }
        ]
      }
    ]
  }
}