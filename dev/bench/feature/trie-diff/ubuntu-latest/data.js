window.BENCHMARK_DATA = {
  "lastUpdate": 1693274322943,
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
          "id": "8fd3f8d0796a07e1153001ede1da9fa89f348a4c",
          "message": "Added tests",
          "timestamp": "2023-08-29T10:41:31+09:00",
          "tree_id": "57e213a1dc4e272b185cdc5fe4d197ee3e2461d4",
          "url": "https://github.com/greymistcube/libplanet/commit/8fd3f8d0796a07e1153001ede1da9fa89f348a4c"
        },
        "date": 1693274314166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688191.361111111,
            "unit": "ns",
            "range": "± 77189.94115237554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3245462.8260869565,
            "unit": "ns",
            "range": "± 81512.03466229119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2136426.7532467535,
            "unit": "ns",
            "range": "± 103495.15382325317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5853319.045454546,
            "unit": "ns",
            "range": "± 273605.46966313105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322886.3695652174,
            "unit": "ns",
            "range": "± 12202.576515471721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318476.8048780488,
            "unit": "ns",
            "range": "± 11285.409931011618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278435.5882352941,
            "unit": "ns",
            "range": "± 13180.204062963214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5216970.222222222,
            "unit": "ns",
            "range": "± 142645.70492477922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4836611,
            "unit": "ns",
            "range": "± 93114.79461610813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24536.739583333332,
            "unit": "ns",
            "range": "± 1486.6226169251925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101192.48351648351,
            "unit": "ns",
            "range": "± 5646.348303427107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86798.43589743589,
            "unit": "ns",
            "range": "± 2989.762108076158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91882.61956521739,
            "unit": "ns",
            "range": "± 9772.07657174301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6631.631578947368,
            "unit": "ns",
            "range": "± 742.6358469127522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21980.4375,
            "unit": "ns",
            "range": "± 1487.0432819418609"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55710.54945054945,
            "unit": "ns",
            "range": "± 3050.342298692745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10070134.533333333,
            "unit": "ns",
            "range": "± 141783.5274342377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26702886.733333334,
            "unit": "ns",
            "range": "± 397415.8889654634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66266025.46666667,
            "unit": "ns",
            "range": "± 809943.7430542292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133211971.86666666,
            "unit": "ns",
            "range": "± 1590460.4860141636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263033767.86666667,
            "unit": "ns",
            "range": "± 3320972.1461995104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4184463.1315789474,
            "unit": "ns",
            "range": "± 142503.14570376583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4488080.235294118,
            "unit": "ns",
            "range": "± 89156.40228450325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5154576.918918919,
            "unit": "ns",
            "range": "± 173808.40773030298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4709561.108108108,
            "unit": "ns",
            "range": "± 158774.50591952095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7418398.692307692,
            "unit": "ns",
            "range": "± 197089.79471474807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902420.938058035,
            "unit": "ns",
            "range": "± 33463.716355119235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904445.1345052083,
            "unit": "ns",
            "range": "± 11618.777793161064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302840.9020833333,
            "unit": "ns",
            "range": "± 1721.0553391358048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3145056.3778645834,
            "unit": "ns",
            "range": "± 9068.275088612705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985726.2826822917,
            "unit": "ns",
            "range": "± 4428.024222200669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881944.9608072917,
            "unit": "ns",
            "range": "± 3909.786234722823"
          }
        ]
      }
    ]
  }
}