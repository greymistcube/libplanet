window.BENCHMARK_DATA = {
  "lastUpdate": 1695259132828,
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
      }
    ]
  }
}