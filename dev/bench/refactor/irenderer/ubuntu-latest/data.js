window.BENCHMARK_DATA = {
  "lastUpdate": 1681634038521,
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
          "id": "c67a48c84c061de44a996edbe4e01e05f584712d",
          "message": "Cleanup",
          "timestamp": "2023-04-16T17:21:08+09:00",
          "tree_id": "c8773927198ad9950c59c78a0373b3715524733f",
          "url": "https://github.com/greymistcube/libplanet/commit/c67a48c84c061de44a996edbe4e01e05f584712d"
        },
        "date": 1681634031269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7443677.928571428,
            "unit": "ns",
            "range": "± 10127.906629052875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18846922.4,
            "unit": "ns",
            "range": "± 49054.76856214607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48378892.6,
            "unit": "ns",
            "range": "± 242981.54311822593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96166003.28571428,
            "unit": "ns",
            "range": "± 551437.1594313881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192225720.86666667,
            "unit": "ns",
            "range": "± 921131.2814761195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44157.555555555555,
            "unit": "ns",
            "range": "± 1803.5243413938165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322577.2631578948,
            "unit": "ns",
            "range": "± 83756.77397161462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2499183,
            "unit": "ns",
            "range": "± 63331.804711377044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109616.634920635,
            "unit": "ns",
            "range": "± 94109.02912927585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5333522.466666667,
            "unit": "ns",
            "range": "± 99446.92086870597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5876579.341145833,
            "unit": "ns",
            "range": "± 18808.385751905524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1817624.8231026786,
            "unit": "ns",
            "range": "± 2222.2606999060336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368882.3595052084,
            "unit": "ns",
            "range": "± 2520.6956929332714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550653.70703125,
            "unit": "ns",
            "range": "± 4776.885985858707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798034.9350260417,
            "unit": "ns",
            "range": "± 1275.8411837553144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728334.4159505208,
            "unit": "ns",
            "range": "± 762.2928406286089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314203.22222222225,
            "unit": "ns",
            "range": "± 4976.217055455532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260230.5,
            "unit": "ns",
            "range": "± 10190.181749365729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231170.53333333333,
            "unit": "ns",
            "range": "± 4069.0086870438226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5519777.466666667,
            "unit": "ns",
            "range": "± 37166.15043647467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3937192.1428571427,
            "unit": "ns",
            "range": "± 32572.11103632427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16157.547368421052,
            "unit": "ns",
            "range": "± 952.7466204255793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84251.10989010989,
            "unit": "ns",
            "range": "± 4895.861813705641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73226.46153846153,
            "unit": "ns",
            "range": "± 930.7635409870594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 171143.4387755102,
            "unit": "ns",
            "range": "± 15083.94602728162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4433.19587628866,
            "unit": "ns",
            "range": "± 468.13603434203236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15032.119565217392,
            "unit": "ns",
            "range": "± 1020.7831602609521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3226605.2,
            "unit": "ns",
            "range": "± 59898.22615570514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3300884.1470588236,
            "unit": "ns",
            "range": "± 101400.33983181723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4107625.8666666667,
            "unit": "ns",
            "range": "± 43910.18432285005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4126799.586956522,
            "unit": "ns",
            "range": "± 158916.31941868388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6898604.666666667,
            "unit": "ns",
            "range": "± 112979.76506036485"
          }
        ]
      }
    ]
  }
}