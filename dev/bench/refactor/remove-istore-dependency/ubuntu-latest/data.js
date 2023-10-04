window.BENCHMARK_DATA = {
  "lastUpdate": 1696398596548,
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
          "id": "65ac4b33dbca621fadb77515a233cfe2a24a4b39",
          "message": "Remove IBlockChainStates dependency; replaced with IStateStore",
          "timestamp": "2023-10-04T14:35:00+09:00",
          "tree_id": "98c37ace153ac7313d28298376f255bba5262a3a",
          "url": "https://github.com/greymistcube/libplanet/commit/65ac4b33dbca621fadb77515a233cfe2a24a4b39"
        },
        "date": 1696398588965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50517.177777777775,
            "unit": "ns",
            "range": "± 2870.5061432788725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7886105.153846154,
            "unit": "ns",
            "range": "± 68493.96858464516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22563062.57142857,
            "unit": "ns",
            "range": "± 354908.4738946983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57031601,
            "unit": "ns",
            "range": "± 537698.4801919328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111004919.6,
            "unit": "ns",
            "range": "± 1222973.4274414843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224136796,
            "unit": "ns",
            "range": "± 2781001.5431545777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275499.79411764705,
            "unit": "ns",
            "range": "± 8491.566332221035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266871.3965517241,
            "unit": "ns",
            "range": "± 11656.723610484036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238595.97916666666,
            "unit": "ns",
            "range": "± 9419.475378374958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4390288.533333333,
            "unit": "ns",
            "range": "± 46051.69899435488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4045125.066666667,
            "unit": "ns",
            "range": "± 53575.3283430598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20724.177083333332,
            "unit": "ns",
            "range": "± 1422.707966444656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86210.44776119402,
            "unit": "ns",
            "range": "± 3916.8850420756316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76319.73684210527,
            "unit": "ns",
            "range": "± 4424.142023350647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87334.12121212122,
            "unit": "ns",
            "range": "± 12115.069641307437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5214.4639175257735,
            "unit": "ns",
            "range": "± 645.2140320250277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19969.31914893617,
            "unit": "ns",
            "range": "± 1360.4858889521706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403162.3541666667,
            "unit": "ns",
            "range": "± 97544.2579110123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2706474.906976744,
            "unit": "ns",
            "range": "± 98467.28322859178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154111.8088235296,
            "unit": "ns",
            "range": "± 100450.21215288658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9433006.324324325,
            "unit": "ns",
            "range": "± 470804.09919759975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5111818.037259615,
            "unit": "ns",
            "range": "± 10730.949381859871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1614933.6555989583,
            "unit": "ns",
            "range": "± 2351.28443694342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1099751.8881510417,
            "unit": "ns",
            "range": "± 944.5931944268477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638457.2413504464,
            "unit": "ns",
            "range": "± 7117.948185521766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821312.1568509615,
            "unit": "ns",
            "range": "± 2863.02009905016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756246.7638811384,
            "unit": "ns",
            "range": "± 915.0790294591408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3484907,
            "unit": "ns",
            "range": "± 112164.3691136658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3772580.511627907,
            "unit": "ns",
            "range": "± 134980.6250898134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4428436.685714286,
            "unit": "ns",
            "range": "± 132126.68863248845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4335551.571428572,
            "unit": "ns",
            "range": "± 167569.1655630594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10780382.588235294,
            "unit": "ns",
            "range": "± 321688.95429159404"
          }
        ]
      }
    ]
  }
}