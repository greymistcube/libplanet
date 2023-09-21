window.BENCHMARK_DATA = {
  "lastUpdate": 1695260972654,
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
          "id": "978b7684b3d8aad7ba2e6cf8b42c6aec5173e9a6",
          "message": "Refactor TxResult to partially accommodate TxExecution changes",
          "timestamp": "2023-09-21T10:01:32+09:00",
          "tree_id": "185d09749713c4470be4cbde80874b7423ad42e2",
          "url": "https://github.com/greymistcube/libplanet/commit/978b7684b3d8aad7ba2e6cf8b42c6aec5173e9a6"
        },
        "date": 1695259104718,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329008.3333333333,
            "unit": "ns",
            "range": "± 65332.70377918391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2604848.3516483516,
            "unit": "ns",
            "range": "± 146073.7221501811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1843716.6666666667,
            "unit": "ns",
            "range": "± 149216.64974594326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6039589.247311828,
            "unit": "ns",
            "range": "± 342073.69453352963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46372.72727272727,
            "unit": "ns",
            "range": "± 1991.412540315016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7757155.555555556,
            "unit": "ns",
            "range": "± 405826.9846868243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21443021.739130434,
            "unit": "ns",
            "range": "± 533389.2276211552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54888060.416666664,
            "unit": "ns",
            "range": "± 2145901.666635242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105108123.07692307,
            "unit": "ns",
            "range": "± 1190639.107198207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211141635,
            "unit": "ns",
            "range": "± 4586938.253261847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4590272.1875,
            "unit": "ns",
            "range": "± 65865.29568661998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1479204.6997070312,
            "unit": "ns",
            "range": "± 28521.756571129605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1088167.4278846155,
            "unit": "ns",
            "range": "± 13356.508358754438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716349.8958333335,
            "unit": "ns",
            "range": "± 40750.71379708346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852263.5925292969,
            "unit": "ns",
            "range": "± 16177.787562934576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785472.0982142857,
            "unit": "ns",
            "range": "± 8312.063900526045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3261861.25,
            "unit": "ns",
            "range": "± 168711.57658669155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3581796.7741935486,
            "unit": "ns",
            "range": "± 103035.20590513699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4264034.146341464,
            "unit": "ns",
            "range": "± 151703.17005546737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083419.6721311477,
            "unit": "ns",
            "range": "± 183579.1326373744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6046578.723404256,
            "unit": "ns",
            "range": "± 235323.21615005276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256009.80392156861,
            "unit": "ns",
            "range": "± 10344.066026509321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247210.2564102564,
            "unit": "ns",
            "range": "± 8645.954176187504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221565,
            "unit": "ns",
            "range": "± 5035.900065895293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4172030,
            "unit": "ns",
            "range": "± 77007.80294415439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3730841.6666666665,
            "unit": "ns",
            "range": "± 45011.4219511071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20284.042553191488,
            "unit": "ns",
            "range": "± 1808.0645620484206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88962.5,
            "unit": "ns",
            "range": "± 4635.399700106436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70783.33333333333,
            "unit": "ns",
            "range": "± 4183.115602078297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84787.23404255319,
            "unit": "ns",
            "range": "± 12198.653495608662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5296.315789473684,
            "unit": "ns",
            "range": "± 936.0181083804551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19661.702127659573,
            "unit": "ns",
            "range": "± 1811.1427143721671"
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
          "id": "5c3dcdbca56d8ea0849555229c722e40f7191971",
          "message": "Clean up TxResult API",
          "timestamp": "2023-09-21T10:30:51+09:00",
          "tree_id": "69e7e3e29ed4c18fb100210f260b49af947be9a8",
          "url": "https://github.com/greymistcube/libplanet/commit/5c3dcdbca56d8ea0849555229c722e40f7191971"
        },
        "date": 1695260947211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1293746.1538461538,
            "unit": "ns",
            "range": "± 17281.667328155163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2607949.1228070175,
            "unit": "ns",
            "range": "± 112773.15271123298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1945975.5102040817,
            "unit": "ns",
            "range": "± 136583.33739464972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6476865.263157895,
            "unit": "ns",
            "range": "± 411575.32667203946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47797.916666666664,
            "unit": "ns",
            "range": "± 3888.5250665236126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8294740,
            "unit": "ns",
            "range": "± 55321.383104288245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21739371.42857143,
            "unit": "ns",
            "range": "± 154085.03360942483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54204240,
            "unit": "ns",
            "range": "± 376656.8081727146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105936318.18181819,
            "unit": "ns",
            "range": "± 4496352.619874902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216444813.33333334,
            "unit": "ns",
            "range": "± 1586937.3431985572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4590164.732142857,
            "unit": "ns",
            "range": "± 16699.764114343554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1455183.6067708333,
            "unit": "ns",
            "range": "± 14858.43968137399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058506.328125,
            "unit": "ns",
            "range": "± 5697.53502763679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2705114.481026786,
            "unit": "ns",
            "range": "± 30778.399165634364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851265.6700721154,
            "unit": "ns",
            "range": "± 5505.061029184178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767078.3072916666,
            "unit": "ns",
            "range": "± 5167.563866135757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3500310,
            "unit": "ns",
            "range": "± 97084.36288734339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3788257.6923076925,
            "unit": "ns",
            "range": "± 62268.68476661525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4253535,
            "unit": "ns",
            "range": "± 149726.80000930242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3669775.757575758,
            "unit": "ns",
            "range": "± 253964.68422770797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5883798.076923077,
            "unit": "ns",
            "range": "± 238730.53518057094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247040.6779661017,
            "unit": "ns",
            "range": "± 10926.574985408168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246486.36363636365,
            "unit": "ns",
            "range": "± 6058.154320107219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207730.18867924527,
            "unit": "ns",
            "range": "± 8587.52639466687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3998387.878787879,
            "unit": "ns",
            "range": "± 125969.64604016655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846250,
            "unit": "ns",
            "range": "± 67628.5755488701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25074.22680412371,
            "unit": "ns",
            "range": "± 3075.7884609246757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111054.54545454546,
            "unit": "ns",
            "range": "± 13082.635888118113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75086.8686868687,
            "unit": "ns",
            "range": "± 6833.0625766532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74693.33333333333,
            "unit": "ns",
            "range": "± 12829.379905671394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5106.060606060606,
            "unit": "ns",
            "range": "± 1079.0035257284023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25275.51020408163,
            "unit": "ns",
            "range": "± 4063.416398769847"
          }
        ]
      }
    ]
  }
}