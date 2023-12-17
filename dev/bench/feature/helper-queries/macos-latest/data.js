window.BENCHMARK_DATA = {
  "lastUpdate": 1702802270808,
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
          "id": "ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69",
          "message": "Changelog",
          "timestamp": "2023-12-17T17:23:08+09:00",
          "tree_id": "6d61ab432ba0e1be66424d63f8c2401df9e7828e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69"
        },
        "date": 1702802257325,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7529178.142857143,
            "unit": "ns",
            "range": "± 80073.8654011764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19037531.266666666,
            "unit": "ns",
            "range": "± 113309.29646797154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46742556.56666667,
            "unit": "ns",
            "range": "± 531954.1180459709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91754651.93333334,
            "unit": "ns",
            "range": "± 1004223.8274866436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191113957.6521739,
            "unit": "ns",
            "range": "± 4805621.460489689"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36158.488764044945,
            "unit": "ns",
            "range": "± 4364.696260114114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213188.27528089887,
            "unit": "ns",
            "range": "± 12872.148672577063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222368.8404255319,
            "unit": "ns",
            "range": "± 19591.212606788016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192894.6043956044,
            "unit": "ns",
            "range": "± 16543.80070793832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3669028.617647059,
            "unit": "ns",
            "range": "± 71677.11862135847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3331189.1578947366,
            "unit": "ns",
            "range": "± 60022.703649224044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12300.454545454546,
            "unit": "ns",
            "range": "± 1172.6640454228043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58030.086956521736,
            "unit": "ns",
            "range": "± 5354.482971628015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50842.282051282054,
            "unit": "ns",
            "range": "± 2477.081393717661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61267.354166666664,
            "unit": "ns",
            "range": "± 12506.465574993948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3042.438202247191,
            "unit": "ns",
            "range": "± 348.5384077914832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12070.505376344086,
            "unit": "ns",
            "range": "± 1309.920157072775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078013.2346938776,
            "unit": "ns",
            "range": "± 81936.39216304882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2277692.5555555555,
            "unit": "ns",
            "range": "± 134003.61204218143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530621.989010989,
            "unit": "ns",
            "range": "± 85698.93717667092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6890812.576271187,
            "unit": "ns",
            "range": "± 303379.47941385355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2828301.476190476,
            "unit": "ns",
            "range": "± 92655.98195402858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2920238.12,
            "unit": "ns",
            "range": "± 101471.57276063044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3521686.3695652173,
            "unit": "ns",
            "range": "± 124523.29870074894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3432272.3235294116,
            "unit": "ns",
            "range": "± 109014.82339446087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14364842.79,
            "unit": "ns",
            "range": "± 2781144.9569561547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4404721.768229167,
            "unit": "ns",
            "range": "± 60264.52452446519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1321398.347265625,
            "unit": "ns",
            "range": "± 14259.985444882626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 876098.7974330357,
            "unit": "ns",
            "range": "± 8710.586641571048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953959.0526455967,
            "unit": "ns",
            "range": "± 42776.88811395851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612592.3312049279,
            "unit": "ns",
            "range": "± 6358.694826478809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550806.7729166667,
            "unit": "ns",
            "range": "± 6212.768777716536"
          }
        ]
      }
    ]
  }
}