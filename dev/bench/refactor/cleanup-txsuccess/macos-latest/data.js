window.BENCHMARK_DATA = {
  "lastUpdate": 1695170457803,
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
          "id": "83ea68379a7ee1222db323c0b069033faeb46d6c",
          "message": "Remove unused ExceptionMetadata from TxFailure",
          "timestamp": "2023-09-20T09:13:08+09:00",
          "tree_id": "520c196eeee8ba5ec7c963827cf256c6ad7f685b",
          "url": "https://github.com/greymistcube/libplanet/commit/83ea68379a7ee1222db323c0b069033faeb46d6c"
        },
        "date": 1695170443342,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8111432.9375,
            "unit": "ns",
            "range": "± 153120.0742471819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20498757.201754387,
            "unit": "ns",
            "range": "± 883233.8232187881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50970563.325,
            "unit": "ns",
            "range": "± 1773576.9725731637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101785684.3275862,
            "unit": "ns",
            "range": "± 2868441.4892128278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219957323.7142857,
            "unit": "ns",
            "range": "± 3604015.8624896035"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68006.3817204301,
            "unit": "ns",
            "range": "± 13587.648593523285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312672.27956989245,
            "unit": "ns",
            "range": "± 28896.598414739587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308740.2111111111,
            "unit": "ns",
            "range": "± 30020.63694435578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296395.631147541,
            "unit": "ns",
            "range": "± 13275.363248608817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4116548.3846153845,
            "unit": "ns",
            "range": "± 110035.9560195037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716827,
            "unit": "ns",
            "range": "± 54568.796410515664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19891.43010752688,
            "unit": "ns",
            "range": "± 3734.6180975751536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77518.18279569893,
            "unit": "ns",
            "range": "± 5667.720517844582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98887.33684210526,
            "unit": "ns",
            "range": "± 12116.57293080259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94248.85416666667,
            "unit": "ns",
            "range": "± 12234.794781561714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6425.428571428572,
            "unit": "ns",
            "range": "± 1559.1734477620457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16407.08620689655,
            "unit": "ns",
            "range": "± 1551.8047598943608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1800870.8846153845,
            "unit": "ns",
            "range": "± 20832.436253506457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933292.5443037977,
            "unit": "ns",
            "range": "± 149243.921514137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1881170.0319148935,
            "unit": "ns",
            "range": "± 161239.23570235842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5260571.814814814,
            "unit": "ns",
            "range": "± 221036.6410652293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3436945.6428571427,
            "unit": "ns",
            "range": "± 224471.1611613706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3483114.4583333335,
            "unit": "ns",
            "range": "± 212097.8772084603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4488932.410714285,
            "unit": "ns",
            "range": "± 179637.48426719417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3792881.081081081,
            "unit": "ns",
            "range": "± 185807.24201083073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6711334.912698412,
            "unit": "ns",
            "range": "± 256041.1388748751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5413003.881696428,
            "unit": "ns",
            "range": "± 80601.36657880104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832130.7869873047,
            "unit": "ns",
            "range": "± 124169.41193065705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053994.9080664061,
            "unit": "ns",
            "range": "± 65278.01654211142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652306.44046875,
            "unit": "ns",
            "range": "± 168780.25609984476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795510.4077758789,
            "unit": "ns",
            "range": "± 15348.831914934355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848070.9653564453,
            "unit": "ns",
            "range": "± 28175.050893498774"
          }
        ]
      }
    ]
  }
}