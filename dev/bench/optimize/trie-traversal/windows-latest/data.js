window.BENCHMARK_DATA = {
  "lastUpdate": 1709021056048,
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
          "id": "944369e564459c008868c197e3dad60be589a32d",
          "message": "Changed ITrie.IterateNodes() to use a stack instead of a queue",
          "timestamp": "2024-02-27T16:52:46+09:00",
          "tree_id": "2f8d8ac0f86ec7b61eecae2b1b8a34ddcc03056d",
          "url": "https://github.com/greymistcube/libplanet/commit/944369e564459c008868c197e3dad60be589a32d"
        },
        "date": 1709021037882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046134.375,
            "unit": "ns",
            "range": "± 123424.3555493127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827537.6623376624,
            "unit": "ns",
            "range": "± 89976.00709276985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1636232.9896907217,
            "unit": "ns",
            "range": "± 172482.89753482898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6854603.225806451,
            "unit": "ns",
            "range": "± 196969.83607288872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35410.98901098901,
            "unit": "ns",
            "range": "± 2514.1135194670087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5124100,
            "unit": "ns",
            "range": "± 98090.95099277336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13411996.666666666,
            "unit": "ns",
            "range": "± 92243.03974258645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33767986.666666664,
            "unit": "ns",
            "range": "± 236402.5678693827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69890333.33333333,
            "unit": "ns",
            "range": "± 413770.2876625882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138529021.42857143,
            "unit": "ns",
            "range": "± 1010514.5385309495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3383540.4427083335,
            "unit": "ns",
            "range": "± 4094.863518162159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087281.73828125,
            "unit": "ns",
            "range": "± 2802.7899945378267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749173.7980769231,
            "unit": "ns",
            "range": "± 811.5983257576379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975560.044642857,
            "unit": "ns",
            "range": "± 2306.7545399096916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624137.6743861607,
            "unit": "ns",
            "range": "± 712.8564498223166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561003.0874399039,
            "unit": "ns",
            "range": "± 463.670753258619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165996,
            "unit": "ns",
            "range": "± 42625.26128952173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316300,
            "unit": "ns",
            "range": "± 102659.51522179408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2843214.285714286,
            "unit": "ns",
            "range": "± 49545.718702610844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3020048.9795918367,
            "unit": "ns",
            "range": "± 101023.38863362487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7952016.216216216,
            "unit": "ns",
            "range": "± 207600.76069427308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177727.77777777778,
            "unit": "ns",
            "range": "± 6964.178334463717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174528.33333333334,
            "unit": "ns",
            "range": "± 7490.628985530526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148250,
            "unit": "ns",
            "range": "± 4612.622433527994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2895980,
            "unit": "ns",
            "range": "± 28970.975623396404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2559180,
            "unit": "ns",
            "range": "± 58194.8143828351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12219.540229885057,
            "unit": "ns",
            "range": "± 1117.0808178441234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60270.4081632653,
            "unit": "ns",
            "range": "± 6322.4882414793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47687.36842105263,
            "unit": "ns",
            "range": "± 3494.592847719543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68514.28571428571,
            "unit": "ns",
            "range": "± 14799.582050381674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2768.041237113402,
            "unit": "ns",
            "range": "± 477.3072018610799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12106.593406593407,
            "unit": "ns",
            "range": "± 1878.4628584623945"
          }
        ]
      }
    ]
  }
}