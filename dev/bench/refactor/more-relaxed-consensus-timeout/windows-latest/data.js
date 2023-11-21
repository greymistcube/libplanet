window.BENCHMARK_DATA = {
  "lastUpdate": 1700527174374,
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
          "id": "2ae593ded64ac7056f5adb3dd7daa09963e75495",
          "message": "Changed default ContextTimeoutOption values",
          "timestamp": "2023-11-21T09:26:48+09:00",
          "tree_id": "e18ded43cd8ed7dcf96832af16e16975454e9894",
          "url": "https://github.com/greymistcube/libplanet/commit/2ae593ded64ac7056f5adb3dd7daa09963e75495"
        },
        "date": 1700527146437,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 934954.7368421053,
            "unit": "ns",
            "range": "± 104038.64233862364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1652285.9649122807,
            "unit": "ns",
            "range": "± 65060.70088385728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1308778.7878787878,
            "unit": "ns",
            "range": "± 120792.26582952261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4917097.777777778,
            "unit": "ns",
            "range": "± 273602.0636042232"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34314.28571428572,
            "unit": "ns",
            "range": "± 1684.3082882708522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5143850,
            "unit": "ns",
            "range": "± 40146.553640764345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13112228.57142857,
            "unit": "ns",
            "range": "± 118588.53997409198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32585506.666666668,
            "unit": "ns",
            "range": "± 213318.8675154995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66520320,
            "unit": "ns",
            "range": "± 422026.25375341624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129567130.76923077,
            "unit": "ns",
            "range": "± 405349.83323999564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3144906.3058035714,
            "unit": "ns",
            "range": "± 3781.1432652942513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1009966.40625,
            "unit": "ns",
            "range": "± 1595.660278790971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 682596.4494977678,
            "unit": "ns",
            "range": "± 1172.9642846624106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1873326.381138393,
            "unit": "ns",
            "range": "± 3616.995877968142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615252.880859375,
            "unit": "ns",
            "range": "± 1982.7298452544815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552243.9243861607,
            "unit": "ns",
            "range": "± 2868.00427767604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124552.6315789474,
            "unit": "ns",
            "range": "± 72746.0772113822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2197958.108108108,
            "unit": "ns",
            "range": "± 38754.29996485249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2778013.0434782607,
            "unit": "ns",
            "range": "± 70139.88169331745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2718895,
            "unit": "ns",
            "range": "± 61211.931026557235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5649600,
            "unit": "ns",
            "range": "± 125953.17766123633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165835.7142857143,
            "unit": "ns",
            "range": "± 7119.612567891817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162598.88888888888,
            "unit": "ns",
            "range": "± 11665.742553020717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137797.22222222222,
            "unit": "ns",
            "range": "± 4439.658037739337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2708150,
            "unit": "ns",
            "range": "± 40361.515371414425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472192.3076923075,
            "unit": "ns",
            "range": "± 27754.14267992142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9797.777777777777,
            "unit": "ns",
            "range": "± 1131.2693256431353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49522.07792207792,
            "unit": "ns",
            "range": "± 2356.8278958571336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43585.48387096774,
            "unit": "ns",
            "range": "± 1983.4435012589618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47134.73684210526,
            "unit": "ns",
            "range": "± 9124.02449954564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2202.197802197802,
            "unit": "ns",
            "range": "± 327.2708772656484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9027.956989247312,
            "unit": "ns",
            "range": "± 1017.0679930455946"
          }
        ]
      }
    ]
  }
}