window.BENCHMARK_DATA = {
  "lastUpdate": 1701753060868,
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
          "id": "6cb46fce638fc41db0b719897e9af8c8e27c8762",
          "message": "Release 3.9.0",
          "timestamp": "2023-12-05T13:52:46+09:00",
          "tree_id": "5787cbf94dba3ffe5c78fe22ca49a64303906978",
          "url": "https://github.com/greymistcube/libplanet/commit/6cb46fce638fc41db0b719897e9af8c8e27c8762"
        },
        "date": 1701753046321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8744730.092592593,
            "unit": "ns",
            "range": "± 457711.69804585446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20840886.55263158,
            "unit": "ns",
            "range": "± 442387.38202588836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53478635.717391305,
            "unit": "ns",
            "range": "± 1250442.244030958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101914466.57692307,
            "unit": "ns",
            "range": "± 1662640.0294615522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235502154.42857143,
            "unit": "ns",
            "range": "± 7132374.911489124"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61295.20618556701,
            "unit": "ns",
            "range": "± 10556.413301419094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330530.72826086957,
            "unit": "ns",
            "range": "± 32501.33609869095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288079.5963855422,
            "unit": "ns",
            "range": "± 15380.446628053473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292826.0930232558,
            "unit": "ns",
            "range": "± 15857.748290107942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291755.625,
            "unit": "ns",
            "range": "± 152590.0204093873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3707563.723404255,
            "unit": "ns",
            "range": "± 138310.07349834457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20010.107526881722,
            "unit": "ns",
            "range": "± 4002.0345599141297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92040.11363636363,
            "unit": "ns",
            "range": "± 9320.102655238285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82411.72340425532,
            "unit": "ns",
            "range": "± 9749.244868915233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97519.6530612245,
            "unit": "ns",
            "range": "± 17484.885080856657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6508.21875,
            "unit": "ns",
            "range": "± 1410.1467538643667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23375.66304347826,
            "unit": "ns",
            "range": "± 2411.761019438481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1418732.693877551,
            "unit": "ns",
            "range": "± 137709.0071827022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2697618.38028169,
            "unit": "ns",
            "range": "± 131596.94608998517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2077197.182795699,
            "unit": "ns",
            "range": "± 135801.45204688463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8983469.236842105,
            "unit": "ns",
            "range": "± 309511.1408268132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232393.8125,
            "unit": "ns",
            "range": "± 97672.56387887741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3325393.11627907,
            "unit": "ns",
            "range": "± 173864.8318245878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4467125.632653061,
            "unit": "ns",
            "range": "± 333511.73129611457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4169406.464705882,
            "unit": "ns",
            "range": "± 224161.59122932504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20124425.52,
            "unit": "ns",
            "range": "± 3184407.233699656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5751607.348478618,
            "unit": "ns",
            "range": "± 194536.1432322029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932684.3489583333,
            "unit": "ns",
            "range": "± 24774.21158253397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1057934.7359375,
            "unit": "ns",
            "range": "± 15661.061553588155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2714529.291374362,
            "unit": "ns",
            "range": "± 172693.95862486254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823417.826511549,
            "unit": "ns",
            "range": "± 20825.059892616086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744949.3754557292,
            "unit": "ns",
            "range": "± 13601.51766146678"
          }
        ]
      }
    ]
  }
}