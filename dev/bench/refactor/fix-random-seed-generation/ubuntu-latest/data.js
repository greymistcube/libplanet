window.BENCHMARK_DATA = {
  "lastUpdate": 1701059899324,
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
          "id": "4a56d8893481517f81dc94973411460905ab698b",
          "message": "Better readability; test fix",
          "timestamp": "2023-11-27T13:27:12+09:00",
          "tree_id": "08072e7d8152ced75702896a41267846d5496111",
          "url": "https://github.com/greymistcube/libplanet/commit/4a56d8893481517f81dc94973411460905ab698b"
        },
        "date": 1701059892896,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202493.7875,
            "unit": "ns",
            "range": "± 10586.560434831896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200551.47777777776,
            "unit": "ns",
            "range": "± 12621.793777527108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164239.54545454544,
            "unit": "ns",
            "range": "± 3839.6979355062213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3080952.566666667,
            "unit": "ns",
            "range": "± 24803.24830819736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2762788.214285714,
            "unit": "ns",
            "range": "± 24699.175418122053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15977.698924731183,
            "unit": "ns",
            "range": "± 2167.805195327785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66527.10204081633,
            "unit": "ns",
            "range": "± 8505.569498245271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64248.515789473684,
            "unit": "ns",
            "range": "± 10990.75704792214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76302.77551020408,
            "unit": "ns",
            "range": "± 12906.440661630053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3972.156626506024,
            "unit": "ns",
            "range": "± 566.3659396609165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15141.19387755102,
            "unit": "ns",
            "range": "± 2986.9221915742687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3686787.8755208333,
            "unit": "ns",
            "range": "± 41377.307318009814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1234034.8857421875,
            "unit": "ns",
            "range": "± 2951.08981992775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771008.8694010417,
            "unit": "ns",
            "range": "± 10954.235649841612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960717.9596354167,
            "unit": "ns",
            "range": "± 3472.318280936769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628605.5731670673,
            "unit": "ns",
            "range": "± 754.623422268698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 604121.853108724,
            "unit": "ns",
            "range": "± 2177.267753042833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39672.010416666664,
            "unit": "ns",
            "range": "± 5132.721186547904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407666.15625,
            "unit": "ns",
            "range": "± 74170.39405994184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2586283,
            "unit": "ns",
            "range": "± 46210.199073673895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3169308.4782608696,
            "unit": "ns",
            "range": "± 120924.96608517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2922965.4791666665,
            "unit": "ns",
            "range": "± 106209.60520312564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6611302.655172414,
            "unit": "ns",
            "range": "± 191096.68130561477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5573573.066666666,
            "unit": "ns",
            "range": "± 99990.91359823414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14993861.133333333,
            "unit": "ns",
            "range": "± 109687.58488925762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36978936.428571425,
            "unit": "ns",
            "range": "± 164261.7216918988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79478997.85714285,
            "unit": "ns",
            "range": "± 544187.5472337507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151373639.15384614,
            "unit": "ns",
            "range": "± 915409.6128842947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972648.3469387755,
            "unit": "ns",
            "range": "± 83680.42307288332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1965495.7,
            "unit": "ns",
            "range": "± 69646.92863447306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1422619.9431818181,
            "unit": "ns",
            "range": "± 89661.04787416488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5586258.389830508,
            "unit": "ns",
            "range": "± 245507.11061863555"
          }
        ]
      }
    ]
  }
}