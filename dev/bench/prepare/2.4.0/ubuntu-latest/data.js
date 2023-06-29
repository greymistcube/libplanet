window.BENCHMARK_DATA = {
  "lastUpdate": 1688028938668,
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
          "id": "e2dadf94467a6098b1c7b90c6b50bbdf80e5a1d9",
          "message": "Prepare 2.4.0",
          "timestamp": "2023-06-29T17:41:58+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/greymistcube/libplanet/commit/e2dadf94467a6098b1c7b90c6b50bbdf80e5a1d9"
        },
        "date": 1688028931020,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7768583,
            "unit": "ns",
            "range": "± 65563.1112930783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19599599.866666667,
            "unit": "ns",
            "range": "± 114664.32766300741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50710629.733333334,
            "unit": "ns",
            "range": "± 458599.17408287514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101037536.33333333,
            "unit": "ns",
            "range": "± 847275.0782159297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200663520.76923078,
            "unit": "ns",
            "range": "± 768059.711801992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47468.56043956044,
            "unit": "ns",
            "range": "± 2543.5253715563595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277907.152173913,
            "unit": "ns",
            "range": "± 10014.586437275471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264929.8846153846,
            "unit": "ns",
            "range": "± 9203.949072840687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230959.5,
            "unit": "ns",
            "range": "± 5049.982829569559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4312128.769230769,
            "unit": "ns",
            "range": "± 21100.52174771138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3836341.066666667,
            "unit": "ns",
            "range": "± 37566.63417271591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17514.694736842106,
            "unit": "ns",
            "range": "± 1426.708345701885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86370.22448979592,
            "unit": "ns",
            "range": "± 5826.4012809992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72710.74074074074,
            "unit": "ns",
            "range": "± 2036.4136574000834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81843.60975609756,
            "unit": "ns",
            "range": "± 6355.314559836637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4531.407216494846,
            "unit": "ns",
            "range": "± 590.943297520904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15739.04347826087,
            "unit": "ns",
            "range": "± 1173.6023430563394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352334.5909090908,
            "unit": "ns",
            "range": "± 70448.14774893665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2642694.3333333335,
            "unit": "ns",
            "range": "± 61996.29578961419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2251301.5,
            "unit": "ns",
            "range": "± 78568.54623340545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5257204.305555556,
            "unit": "ns",
            "range": "± 170050.87974953168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6048491.697544643,
            "unit": "ns",
            "range": "± 22803.808188089195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913425.0119791667,
            "unit": "ns",
            "range": "± 3304.327809715993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350043.162388393,
            "unit": "ns",
            "range": "± 1190.5766400300236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590551.6395089286,
            "unit": "ns",
            "range": "± 1191.5926518633114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796647.5836356027,
            "unit": "ns",
            "range": "± 636.4817750960381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808241.1746651785,
            "unit": "ns",
            "range": "± 1411.317395865713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204338.1363636362,
            "unit": "ns",
            "range": "± 77512.8141543279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3408415.6,
            "unit": "ns",
            "range": "± 77491.5882310359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4260519.5,
            "unit": "ns",
            "range": "± 55146.077279768084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4214806.285714285,
            "unit": "ns",
            "range": "± 96173.55453301227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6856924.09375,
            "unit": "ns",
            "range": "± 202510.7263127082"
          }
        ]
      }
    ]
  }
}