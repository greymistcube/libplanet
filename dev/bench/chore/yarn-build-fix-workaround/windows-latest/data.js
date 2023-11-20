window.BENCHMARK_DATA = {
  "lastUpdate": 1700470752481,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "ff1ef37c765bdb3cbb12ffaf2595b9db4fc410f2",
          "message": "Temporary workaround to `yarn build` fail",
          "timestamp": "2023-11-20T17:45:50+09:00",
          "tree_id": "df46edf8e34f5eb1938dcefa05ebda9b68e761dd",
          "url": "https://github.com/greymistcube/libplanet/commit/ff1ef37c765bdb3cbb12ffaf2595b9db4fc410f2"
        },
        "date": 1700470727913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942828.5714285715,
            "unit": "ns",
            "range": "± 89393.66660376999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1687342.6229508198,
            "unit": "ns",
            "range": "± 68675.8556772718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1311099,
            "unit": "ns",
            "range": "± 118133.62703893306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4947634.736842105,
            "unit": "ns",
            "range": "± 297084.461723491"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34613.333333333336,
            "unit": "ns",
            "range": "± 2042.0963011990368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4953769.230769231,
            "unit": "ns",
            "range": "± 32635.39450288558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13479940,
            "unit": "ns",
            "range": "± 204640.26206282785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32185713.333333332,
            "unit": "ns",
            "range": "± 399336.8303766109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67722066.66666667,
            "unit": "ns",
            "range": "± 597768.7437064445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129399392.3076923,
            "unit": "ns",
            "range": "± 637231.7153928892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3191119.503348214,
            "unit": "ns",
            "range": "± 16985.375344458585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 986713.2421875,
            "unit": "ns",
            "range": "± 1995.7347418581944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 695283.88671875,
            "unit": "ns",
            "range": "± 1529.1475285666047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1894374.4838169643,
            "unit": "ns",
            "range": "± 4039.300858350838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607473.0618990385,
            "unit": "ns",
            "range": "± 1290.0632704798795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 546315.4994419643,
            "unit": "ns",
            "range": "± 1133.5824912525718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2132970,
            "unit": "ns",
            "range": "± 74288.03333940062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2264376,
            "unit": "ns",
            "range": "± 52621.88454752769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2719374.6268656715,
            "unit": "ns",
            "range": "± 121968.85760405174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2558975,
            "unit": "ns",
            "range": "± 140613.17383222815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5750979.310344827,
            "unit": "ns",
            "range": "± 160778.63304047752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171816.39344262294,
            "unit": "ns",
            "range": "± 7666.989420623736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163034.4827586207,
            "unit": "ns",
            "range": "± 9471.521912851678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140383.33333333334,
            "unit": "ns",
            "range": "± 3741.3885798921137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2776671.4285714286,
            "unit": "ns",
            "range": "± 39481.55223687345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2499214.285714286,
            "unit": "ns",
            "range": "± 22599.620730066625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9605.31914893617,
            "unit": "ns",
            "range": "± 1026.8824331233504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53084.69387755102,
            "unit": "ns",
            "range": "± 5642.445036311579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45323.655913978495,
            "unit": "ns",
            "range": "± 2888.823961462156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55216.32653061225,
            "unit": "ns",
            "range": "± 12644.812259901482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2463.917525773196,
            "unit": "ns",
            "range": "± 569.7560821326507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9224.444444444445,
            "unit": "ns",
            "range": "± 1012.651554601189"
          }
        ]
      }
    ]
  }
}