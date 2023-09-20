window.BENCHMARK_DATA = {
  "lastUpdate": 1695170872163,
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
      },
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
          "id": "e3c71bf71f7add86da3a4f1bdcdd534debca8ff4",
          "message": "Changelog",
          "timestamp": "2023-09-20T09:31:37+09:00",
          "tree_id": "88052e6e74edf532d224a56d2f07237a4d9c9bd6",
          "url": "https://github.com/greymistcube/libplanet/commit/e3c71bf71f7add86da3a4f1bdcdd534debca8ff4"
        },
        "date": 1695170858876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7516981.928571428,
            "unit": "ns",
            "range": "± 56381.39282868239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19285438.608695652,
            "unit": "ns",
            "range": "± 474108.516524026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48889137.768115945,
            "unit": "ns",
            "range": "± 2106916.7036441034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95834873.53333333,
            "unit": "ns",
            "range": "± 1335163.6046059176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196941108.26666668,
            "unit": "ns",
            "range": "± 2713782.303172521"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53445.27472527473,
            "unit": "ns",
            "range": "± 4954.4681092837445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295121.84831460676,
            "unit": "ns",
            "range": "± 16336.463512437671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288779.87234042556,
            "unit": "ns",
            "range": "± 18428.65693344538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275779.8969072165,
            "unit": "ns",
            "range": "± 17631.271068452814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3973707.592592593,
            "unit": "ns",
            "range": "± 109912.58696005071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3549227.527027027,
            "unit": "ns",
            "range": "± 118639.74688818959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17314.565217391304,
            "unit": "ns",
            "range": "± 1519.5824744971405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81905.18556701031,
            "unit": "ns",
            "range": "± 7243.897941155223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77357.08791208791,
            "unit": "ns",
            "range": "± 9213.129721156229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94190.74736842106,
            "unit": "ns",
            "range": "± 16581.898257712088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4963.423076923077,
            "unit": "ns",
            "range": "± 418.8365427856666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17165.326315789473,
            "unit": "ns",
            "range": "± 2003.1424325671842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388578.9742268042,
            "unit": "ns",
            "range": "± 115584.52598171867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2778938,
            "unit": "ns",
            "range": "± 222628.97737319945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1970262.7551020407,
            "unit": "ns",
            "range": "± 252791.4760599296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5465673.418367347,
            "unit": "ns",
            "range": "± 357191.4128450829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3124273.048780488,
            "unit": "ns",
            "range": "± 144634.1700716625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3552563.6,
            "unit": "ns",
            "range": "± 224329.92449920054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4221397,
            "unit": "ns",
            "range": "± 135678.3846262919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3612747.259493671,
            "unit": "ns",
            "range": "± 187223.59199734984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6546287.949152542,
            "unit": "ns",
            "range": "± 272700.5113529356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5360611.168229166,
            "unit": "ns",
            "range": "± 41890.53526725304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1799552.3614676339,
            "unit": "ns",
            "range": "± 14204.947943632558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 989174.9802083333,
            "unit": "ns",
            "range": "± 6960.128454358209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2421162.4837740385,
            "unit": "ns",
            "range": "± 23774.986821828366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854912.8689453125,
            "unit": "ns",
            "range": "± 7150.626538389628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710909.3517578125,
            "unit": "ns",
            "range": "± 4568.214408913243"
          }
        ]
      }
    ]
  }
}