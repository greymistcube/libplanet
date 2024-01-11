window.BENCHMARK_DATA = {
  "lastUpdate": 1704943488233,
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
          "id": "95985df3b5be18d2ba875ecbcfd93f2b2cec314b",
          "message": "Release 3.9.4",
          "timestamp": "2024-01-11T12:13:40+09:00",
          "tree_id": "9e36bd32c16585a301e61095347f3be5f9981035",
          "url": "https://github.com/greymistcube/libplanet/commit/95985df3b5be18d2ba875ecbcfd93f2b2cec314b"
        },
        "date": 1704943464774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950989.7959183673,
            "unit": "ns",
            "range": "± 119930.60578551928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1625293.6170212766,
            "unit": "ns",
            "range": "± 41782.37825070423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1297347.4747474748,
            "unit": "ns",
            "range": "± 113216.60596399721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5237852.439024391,
            "unit": "ns",
            "range": "± 277132.34669841465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34010.90909090909,
            "unit": "ns",
            "range": "± 1454.7079033864784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5024414.285714285,
            "unit": "ns",
            "range": "± 23017.881247909354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12939100,
            "unit": "ns",
            "range": "± 80675.89478896407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32319107.692307692,
            "unit": "ns",
            "range": "± 196736.9456132497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64777326.666666664,
            "unit": "ns",
            "range": "± 411276.577893526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128724860,
            "unit": "ns",
            "range": "± 856496.9517083608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3256830.1618303573,
            "unit": "ns",
            "range": "± 2473.807621615065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049163.657924107,
            "unit": "ns",
            "range": "± 1438.6376176311587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728956.9545200893,
            "unit": "ns",
            "range": "± 771.4825599215004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931770.2223557692,
            "unit": "ns",
            "range": "± 1567.771550993475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628595.2899639423,
            "unit": "ns",
            "range": "± 558.8458126478453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564254.5768229166,
            "unit": "ns",
            "range": "± 1087.639991548498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2093800,
            "unit": "ns",
            "range": "± 59178.66410890234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2297140,
            "unit": "ns",
            "range": "± 42575.55972285374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2748993.75,
            "unit": "ns",
            "range": "± 52285.733793582105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2548223.4375,
            "unit": "ns",
            "range": "± 117257.86093009199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6300759.2105263155,
            "unit": "ns",
            "range": "± 320328.09021486354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167647.6923076923,
            "unit": "ns",
            "range": "± 6817.695443025169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156981.53846153847,
            "unit": "ns",
            "range": "± 7226.597840350178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140608.69565217392,
            "unit": "ns",
            "range": "± 3225.8773356995825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2646300,
            "unit": "ns",
            "range": "± 33684.828815175715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2410000,
            "unit": "ns",
            "range": "± 33024.53633285409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9643.956043956045,
            "unit": "ns",
            "range": "± 954.0799863054567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48428.94736842105,
            "unit": "ns",
            "range": "± 2334.1988369730448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42905.769230769234,
            "unit": "ns",
            "range": "± 1737.0713985730617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46964.21052631579,
            "unit": "ns",
            "range": "± 8474.064509838789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2092.8571428571427,
            "unit": "ns",
            "range": "± 370.07940078663916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8693.333333333334,
            "unit": "ns",
            "range": "± 615.1276472992497"
          }
        ]
      }
    ]
  }
}