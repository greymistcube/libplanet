window.BENCHMARK_DATA = {
  "lastUpdate": 1687416376933,
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
          "id": "f941479dea8a2cbd9994461bf0ee6c3932cc3d97",
          "message": "Renaming and updating docs for more sensible use",
          "timestamp": "2023-06-22T15:28:42+09:00",
          "tree_id": "a45c5f0410ad050d474db2e6ae43492669faf08f",
          "url": "https://github.com/greymistcube/libplanet/commit/f941479dea8a2cbd9994461bf0ee6c3932cc3d97"
        },
        "date": 1687416351247,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7945558.166666667,
            "unit": "ns",
            "range": "± 188325.15972310587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22292398.858490568,
            "unit": "ns",
            "range": "± 925077.91704849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52900493.66,
            "unit": "ns",
            "range": "± 1252310.9692789195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100598843.52,
            "unit": "ns",
            "range": "± 2659627.7859298456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209137706.94444445,
            "unit": "ns",
            "range": "± 4319074.560998962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60798.16494845361,
            "unit": "ns",
            "range": "± 10125.81515821526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327092.6666666667,
            "unit": "ns",
            "range": "± 26018.331428693375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307919.8625,
            "unit": "ns",
            "range": "± 15983.31818319999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294073.4896907217,
            "unit": "ns",
            "range": "± 28200.385812038265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4094907.2,
            "unit": "ns",
            "range": "± 76149.15625477597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3652377.1333333333,
            "unit": "ns",
            "range": "± 105407.63062142603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17620.5,
            "unit": "ns",
            "range": "± 2661.2034322586405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87279.2183908046,
            "unit": "ns",
            "range": "± 11780.398374857938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84644.02197802198,
            "unit": "ns",
            "range": "± 12960.976017755951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105623.98947368421,
            "unit": "ns",
            "range": "± 18133.810191858636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6078.709677419355,
            "unit": "ns",
            "range": "± 1846.1140007938482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18441.632653061224,
            "unit": "ns",
            "range": "± 4220.807152465536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524794.9791666667,
            "unit": "ns",
            "range": "± 164682.22817516286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2844886.65,
            "unit": "ns",
            "range": "± 148036.1208621956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2479166.9263157896,
            "unit": "ns",
            "range": "± 206691.89725877182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6413642.355932203,
            "unit": "ns",
            "range": "± 278172.9068791172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3398279.727272727,
            "unit": "ns",
            "range": "± 148378.06594816086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399036.214285714,
            "unit": "ns",
            "range": "± 122600.2936149223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4526759.016666667,
            "unit": "ns",
            "range": "± 200310.4890283143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4423126.152631579,
            "unit": "ns",
            "range": "± 310749.7375147132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7683041.416666667,
            "unit": "ns",
            "range": "± 299555.76780284225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6431428.2236328125,
            "unit": "ns",
            "range": "± 121938.68045165401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950540.3971354167,
            "unit": "ns",
            "range": "± 16925.648670789516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1259986.075,
            "unit": "ns",
            "range": "± 11396.027044790022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2490374.2494791667,
            "unit": "ns",
            "range": "± 42447.53646788601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848438.7820963542,
            "unit": "ns",
            "range": "± 7595.911816527622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720837.7587890625,
            "unit": "ns",
            "range": "± 1743.767709231244"
          }
        ]
      }
    ]
  }
}