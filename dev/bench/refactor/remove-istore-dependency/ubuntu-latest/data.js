window.BENCHMARK_DATA = {
  "lastUpdate": 1696399403739,
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
          "id": "978d8c2b02110f143e1483bea965f84bc13bcc73",
          "message": "Changelog",
          "timestamp": "2023-10-04T14:48:27+09:00",
          "tree_id": "c278c824dcfeef111ef98372dd8798a3c6d6baf9",
          "url": "https://github.com/greymistcube/libplanet/commit/978d8c2b02110f143e1483bea965f84bc13bcc73"
        },
        "date": 1696399395790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56429.260869565216,
            "unit": "ns",
            "range": "± 6219.438453626821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9181728.5,
            "unit": "ns",
            "range": "± 62931.917872752434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24193512.266666666,
            "unit": "ns",
            "range": "± 161247.74382406837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59368455.8,
            "unit": "ns",
            "range": "± 234508.50046707108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117124657.13333334,
            "unit": "ns",
            "range": "± 377887.65816856705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233671418.4,
            "unit": "ns",
            "range": "± 493999.2832206772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299484.48484848486,
            "unit": "ns",
            "range": "± 8603.692765032683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293284.8409090909,
            "unit": "ns",
            "range": "± 10777.322593131705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291659.8222222222,
            "unit": "ns",
            "range": "± 11011.005001792293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4690824.071428572,
            "unit": "ns",
            "range": "± 38714.55422102865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4157774.769230769,
            "unit": "ns",
            "range": "± 24645.054822262166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30455.884210526317,
            "unit": "ns",
            "range": "± 3075.1214640018793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114634.80612244898,
            "unit": "ns",
            "range": "± 9636.110217129273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99549.26262626263,
            "unit": "ns",
            "range": "± 11646.184750228125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101611.96666666666,
            "unit": "ns",
            "range": "± 9332.899444041186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7616.822916666667,
            "unit": "ns",
            "range": "± 1282.3307151621398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25307.957446808512,
            "unit": "ns",
            "range": "± 2643.635277802277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470034.3163265307,
            "unit": "ns",
            "range": "± 110366.96682157098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2807383.121212121,
            "unit": "ns",
            "range": "± 81190.83168674188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217095.2291666665,
            "unit": "ns",
            "range": "± 132868.97409589004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9161270.970588235,
            "unit": "ns",
            "range": "± 262067.76023855674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5223208.546875,
            "unit": "ns",
            "range": "± 44637.327550843635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1595252.7768930288,
            "unit": "ns",
            "range": "± 1677.0254158591993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092832.23046875,
            "unit": "ns",
            "range": "± 919.4786944618015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643477.4731770833,
            "unit": "ns",
            "range": "± 8344.326106796374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853669.9361478365,
            "unit": "ns",
            "range": "± 506.3523697586689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766100.9014973958,
            "unit": "ns",
            "range": "± 1080.724018778225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3791888.214285714,
            "unit": "ns",
            "range": "± 40775.219769588504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4114052.8666666667,
            "unit": "ns",
            "range": "± 71781.48525198508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4729083.666666667,
            "unit": "ns",
            "range": "± 93366.7956653945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4620266.807692308,
            "unit": "ns",
            "range": "± 125008.45253758458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10961484.76,
            "unit": "ns",
            "range": "± 238600.67076223824"
          }
        ]
      }
    ]
  }
}