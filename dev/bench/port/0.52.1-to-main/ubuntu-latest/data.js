window.BENCHMARK_DATA = {
  "lastUpdate": 1678875414829,
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
          "id": "cb7793374dd1cec07f6eb01fe5cbef40dae6b55b",
          "message": "Changelog",
          "timestamp": "2023-03-15T19:04:12+09:00",
          "tree_id": "46822b9066409fc5abf66ab11c15e867f0f9faca",
          "url": "https://github.com/greymistcube/libplanet/commit/cb7793374dd1cec07f6eb01fe5cbef40dae6b55b"
        },
        "date": 1678875407108,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201878.85714285713,
            "unit": "ns",
            "range": "± 10291.14412814073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199882.1739130435,
            "unit": "ns",
            "range": "± 4951.775169776573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167130.59615384616,
            "unit": "ns",
            "range": "± 6538.891688962657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11625256.4,
            "unit": "ns",
            "range": "± 116267.96612124695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9424318.2,
            "unit": "ns",
            "range": "± 152730.0608609844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21808.41052631579,
            "unit": "ns",
            "range": "± 1806.4808889151516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57965.795454545456,
            "unit": "ns",
            "range": "± 3536.654458987752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42160.79518072289,
            "unit": "ns",
            "range": "± 2240.130471804756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94114.3373493976,
            "unit": "ns",
            "range": "± 5762.534956831929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5731.632653061224,
            "unit": "ns",
            "range": "± 631.4109447822606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20421.67391304348,
            "unit": "ns",
            "range": "± 1364.696916065463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3249169.65,
            "unit": "ns",
            "range": "± 74322.354133354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5225087.333333333,
            "unit": "ns",
            "range": "± 48714.46641496998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23841319.6,
            "unit": "ns",
            "range": "± 264021.58697289455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6341206.444444444,
            "unit": "ns",
            "range": "± 130638.67032581405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26642763.214285713,
            "unit": "ns",
            "range": "± 207351.92771902724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5898967.943080357,
            "unit": "ns",
            "range": "± 16273.199183932613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1943516.4115513393,
            "unit": "ns",
            "range": "± 3407.0488925747195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341231.585123698,
            "unit": "ns",
            "range": "± 397.9132398250863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2557003.4775390625,
            "unit": "ns",
            "range": "± 1695.9030446268393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816905.3639090402,
            "unit": "ns",
            "range": "± 1065.223472403924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744986.1484375,
            "unit": "ns",
            "range": "± 472.1517940761886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7829865,
            "unit": "ns",
            "range": "± 74223.03034484261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19895518.866666667,
            "unit": "ns",
            "range": "± 110934.41906167979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49607511.333333336,
            "unit": "ns",
            "range": "± 406221.80916740315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99697038.2,
            "unit": "ns",
            "range": "± 986000.0411451164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202846684.66666666,
            "unit": "ns",
            "range": "± 933917.0889260435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45905.68571428571,
            "unit": "ns",
            "range": "± 2175.2192595987176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301391.2967032967,
            "unit": "ns",
            "range": "± 72896.57439909026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2442789.3666666667,
            "unit": "ns",
            "range": "± 72106.48989897216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107764.7804878047,
            "unit": "ns",
            "range": "± 107054.17989763951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5030280.342857143,
            "unit": "ns",
            "range": "± 162846.32510906114"
          }
        ]
      }
    ]
  }
}