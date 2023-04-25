window.BENCHMARK_DATA = {
  "lastUpdate": 1682411442056,
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
          "id": "830a7b220f7d384755e957739e878ab6922828dc",
          "message": "Fix",
          "timestamp": "2023-04-25T17:03:15+09:00",
          "tree_id": "f397dccc7d29e7e3f2177ef9835d74c4f100604b",
          "url": "https://github.com/greymistcube/libplanet/commit/830a7b220f7d384755e957739e878ab6922828dc"
        },
        "date": 1682411422036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11838420.70212766,
            "unit": "ns",
            "range": "± 3331135.235593682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21990154.04945055,
            "unit": "ns",
            "range": "± 1681766.8876184174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 79363940.61797753,
            "unit": "ns",
            "range": "± 33648197.52357376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124012305.5,
            "unit": "ns",
            "range": "± 17230594.484606545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233512687.46666667,
            "unit": "ns",
            "range": "± 14227298.473515095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82011.43333333333,
            "unit": "ns",
            "range": "± 9734.313295955715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 403278.4247311828,
            "unit": "ns",
            "range": "± 72593.54504769758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382932.7021276596,
            "unit": "ns",
            "range": "± 60076.78291732394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325941.8390804598,
            "unit": "ns",
            "range": "± 33195.084876737455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4708239.282828283,
            "unit": "ns",
            "range": "± 395053.74951280147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4045257.4270833335,
            "unit": "ns",
            "range": "± 274111.2582249365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28861.483146067414,
            "unit": "ns",
            "range": "± 3321.2152318375856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134231.23684210525,
            "unit": "ns",
            "range": "± 23229.3833141006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126025.93157894736,
            "unit": "ns",
            "range": "± 17167.13801390185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131984.36170212767,
            "unit": "ns",
            "range": "± 22287.869470267426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9946.4,
            "unit": "ns",
            "range": "± 1030.2696858259565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24262.59375,
            "unit": "ns",
            "range": "± 4824.04051235089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708312.27,
            "unit": "ns",
            "range": "± 196313.28738394662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3186743.222222222,
            "unit": "ns",
            "range": "± 146166.6656799083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2793381.1153846155,
            "unit": "ns",
            "range": "± 325491.8267777675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7441541.7,
            "unit": "ns",
            "range": "± 430268.3902239961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3758986.5,
            "unit": "ns",
            "range": "± 565209.0200555793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3554735.7551020407,
            "unit": "ns",
            "range": "± 271517.76058003673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4796718.415730337,
            "unit": "ns",
            "range": "± 269831.01379734825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4874573.824742268,
            "unit": "ns",
            "range": "± 489590.28543537064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9280747.021978023,
            "unit": "ns",
            "range": "± 985024.077802895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7598370.942985373,
            "unit": "ns",
            "range": "± 470116.4420312362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2118349.423244201,
            "unit": "ns",
            "range": "± 155886.80389199292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1457653.2888307732,
            "unit": "ns",
            "range": "± 63937.981101476755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3322239.473709621,
            "unit": "ns",
            "range": "± 192134.14287081428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 928991.0825095663,
            "unit": "ns",
            "range": "± 58612.12732282835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804004.4993758054,
            "unit": "ns",
            "range": "± 55409.376633508175"
          }
        ]
      }
    ]
  }
}