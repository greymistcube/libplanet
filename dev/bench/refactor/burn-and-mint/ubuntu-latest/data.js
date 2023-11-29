window.BENCHMARK_DATA = {
  "lastUpdate": 1701238055096,
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
          "id": "ae984a4c9a197afcce3b5d05aed94398bb45a986",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:56:30+09:00",
          "tree_id": "a610211fe1df063f61634961f8c92f676c30a6ef",
          "url": "https://github.com/greymistcube/libplanet/commit/ae984a4c9a197afcce3b5d05aed94398bb45a986"
        },
        "date": 1701238049001,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200793.4111111111,
            "unit": "ns",
            "range": "± 10996.275022662558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188881.46153846153,
            "unit": "ns",
            "range": "± 7134.045120603419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165176.2857142857,
            "unit": "ns",
            "range": "± 2877.6070234343465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3146357.966666667,
            "unit": "ns",
            "range": "± 49952.16810233375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2919809.9615384615,
            "unit": "ns",
            "range": "± 26897.82409296145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19473.42,
            "unit": "ns",
            "range": "± 6833.292861934844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67502.05208333333,
            "unit": "ns",
            "range": "± 9204.783258113019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55889.030303030304,
            "unit": "ns",
            "range": "± 6279.535660486153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58246.9381443299,
            "unit": "ns",
            "range": "± 10971.579813331382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2962.2886597938145,
            "unit": "ns",
            "range": "± 648.1951377794293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15206.344086021505,
            "unit": "ns",
            "range": "± 1745.768794733636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3664420.1364397323,
            "unit": "ns",
            "range": "± 12973.111197282913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197327.9596354167,
            "unit": "ns",
            "range": "± 2941.741787545785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771343.2548014323,
            "unit": "ns",
            "range": "± 2249.771496016614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953704.1764322917,
            "unit": "ns",
            "range": "± 4010.692960739103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607061.2549579327,
            "unit": "ns",
            "range": "± 1121.3323104041754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572586.8928786058,
            "unit": "ns",
            "range": "± 707.400055673671"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39146.625,
            "unit": "ns",
            "range": "± 5396.228607482315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385856.2,
            "unit": "ns",
            "range": "± 96143.04678945422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554886.4285714286,
            "unit": "ns",
            "range": "± 53574.5054075292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3159666.04,
            "unit": "ns",
            "range": "± 83703.08229563592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3054097.950819672,
            "unit": "ns",
            "range": "± 136919.86842924176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6632009.833333333,
            "unit": "ns",
            "range": "± 133433.9351122098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5587134.285714285,
            "unit": "ns",
            "range": "± 29516.267083211464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15053631.615384616,
            "unit": "ns",
            "range": "± 117169.39265904618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36062567.35714286,
            "unit": "ns",
            "range": "± 270302.0902921132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72573647.2,
            "unit": "ns",
            "range": "± 519134.9517594768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149476186.92857143,
            "unit": "ns",
            "range": "± 1110200.4925968908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 922476.9782608695,
            "unit": "ns",
            "range": "± 54887.803313604454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1830979.1666666667,
            "unit": "ns",
            "range": "± 60637.39837497741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1385415.8282828282,
            "unit": "ns",
            "range": "± 105647.09793661819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5653300.087912088,
            "unit": "ns",
            "range": "± 316618.6387410517"
          }
        ]
      }
    ]
  }
}