window.BENCHMARK_DATA = {
  "lastUpdate": 1695346811590,
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
          "id": "78a827619806b8941cbc96d3f51f5e4d9257911f",
          "message": "Remove clutter",
          "timestamp": "2023-09-22T10:02:17+09:00",
          "tree_id": "e99e29b817674d96659443d5dc38aa9a9006f502",
          "url": "https://github.com/greymistcube/libplanet/commit/78a827619806b8941cbc96d3f51f5e4d9257911f"
        },
        "date": 1695346801602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370616,
            "unit": "ns",
            "range": "± 31687.01893862051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360775.1182795699,
            "unit": "ns",
            "range": "± 33079.0055558196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316900.887755102,
            "unit": "ns",
            "range": "± 33234.17784989431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5511386.588235294,
            "unit": "ns",
            "range": "± 261393.29364053285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5039963.879310345,
            "unit": "ns",
            "range": "± 218472.51765254437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26100.4,
            "unit": "ns",
            "range": "± 6144.654330253076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120777.91304347826,
            "unit": "ns",
            "range": "± 14749.428986266788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135139.47727272726,
            "unit": "ns",
            "range": "± 11644.595911001465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127547.55789473685,
            "unit": "ns",
            "range": "± 16683.577743191116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9327.9,
            "unit": "ns",
            "range": "± 1052.9010437192885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27622.691489361703,
            "unit": "ns",
            "range": "± 6142.893640634017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4577687.826086956,
            "unit": "ns",
            "range": "± 295574.368518541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4728023.847058823,
            "unit": "ns",
            "range": "± 254653.1977777633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5783975.890909091,
            "unit": "ns",
            "range": "± 222019.3272992135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5126898.136363637,
            "unit": "ns",
            "range": "± 241102.25093476812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8271373,
            "unit": "ns",
            "range": "± 262065.15248788803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759758.7777777778,
            "unit": "ns",
            "range": "± 126753.60216425009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3497609.214285714,
            "unit": "ns",
            "range": "± 210497.26502766932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2400805.93814433,
            "unit": "ns",
            "range": "± 136523.19347930516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8175501.65625,
            "unit": "ns",
            "range": "± 577073.4350032025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70036.28421052631,
            "unit": "ns",
            "range": "± 13131.390511244063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11193849.20212766,
            "unit": "ns",
            "range": "± 660580.4689461779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27706957.512820512,
            "unit": "ns",
            "range": "± 963277.8947836849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73831499.57894737,
            "unit": "ns",
            "range": "± 2155072.613922621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147681956.04166666,
            "unit": "ns",
            "range": "± 3812252.65417925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293060954.84615386,
            "unit": "ns",
            "range": "± 4741162.502837619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6290731.768973215,
            "unit": "ns",
            "range": "± 100521.87679152265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988776.365234375,
            "unit": "ns",
            "range": "± 34223.01103626062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356067.1739583334,
            "unit": "ns",
            "range": "± 16609.114696238074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3276989.3408854166,
            "unit": "ns",
            "range": "± 41472.6007073976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1098217.71171875,
            "unit": "ns",
            "range": "± 15920.120924058958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1002194.0630208333,
            "unit": "ns",
            "range": "± 9246.757939111923"
          }
        ]
      }
    ]
  }
}