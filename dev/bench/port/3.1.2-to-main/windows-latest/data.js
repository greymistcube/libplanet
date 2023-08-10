window.BENCHMARK_DATA = {
  "lastUpdate": 1691651981033,
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
          "id": "04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:03:27+09:00",
          "tree_id": "4b1c486d0920781a82c56ed2b2866158aa607126",
          "url": "https://github.com/greymistcube/libplanet/commit/04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9"
        },
        "date": 1691651959045,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1249891.9191919193,
            "unit": "ns",
            "range": "± 99029.31505446593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2362353.3333333335,
            "unit": "ns",
            "range": "± 98630.50455806527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584478.7878787878,
            "unit": "ns",
            "range": "± 105847.80012051505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4404715,
            "unit": "ns",
            "range": "± 279362.67017964117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45827.90697674418,
            "unit": "ns",
            "range": "± 2513.0553779058155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7156391.666666667,
            "unit": "ns",
            "range": "± 18897.64094624864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19339300,
            "unit": "ns",
            "range": "± 284258.6523372181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49662897.222222224,
            "unit": "ns",
            "range": "± 1658909.7151849223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96537835.71428572,
            "unit": "ns",
            "range": "± 1550033.153792893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191103226.66666666,
            "unit": "ns",
            "range": "± 3243396.543851317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4508186.770833333,
            "unit": "ns",
            "range": "± 13173.396563859009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1409227.2526041667,
            "unit": "ns",
            "range": "± 6020.178347828781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046198.4765625,
            "unit": "ns",
            "range": "± 6698.246118807164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618842.96875,
            "unit": "ns",
            "range": "± 7176.501849142986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831707.5520833334,
            "unit": "ns",
            "range": "± 2706.844745419137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755110.64453125,
            "unit": "ns",
            "range": "± 1995.2720633724962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3066560,
            "unit": "ns",
            "range": "± 53820.65190452984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3269182.8571428573,
            "unit": "ns",
            "range": "± 106532.72484164138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3962097.6744186045,
            "unit": "ns",
            "range": "± 145926.92641046667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3524225.4901960786,
            "unit": "ns",
            "range": "± 142537.3029675211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5807125,
            "unit": "ns",
            "range": "± 228348.44268484894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243667.3469387755,
            "unit": "ns",
            "range": "± 9651.303619958593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231766.07142857142,
            "unit": "ns",
            "range": "± 9699.58343596099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207738.09523809524,
            "unit": "ns",
            "range": "± 4855.870281471303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3931922.222222222,
            "unit": "ns",
            "range": "± 81745.41941155627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3560064.285714286,
            "unit": "ns",
            "range": "± 53981.615205732596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17923.958333333332,
            "unit": "ns",
            "range": "± 1369.575023725986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79942.70833333333,
            "unit": "ns",
            "range": "± 6397.890191579468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66377.77777777778,
            "unit": "ns",
            "range": "± 1740.321219981515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71817.85714285714,
            "unit": "ns",
            "range": "± 6639.66105816387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4591.7525773195875,
            "unit": "ns",
            "range": "± 497.0056386108678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17580.85106382979,
            "unit": "ns",
            "range": "± 1547.5458612374835"
          }
        ]
      }
    ]
  }
}