window.BENCHMARK_DATA = {
  "lastUpdate": 1693298342310,
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
          "id": "fefd69f5a1ecaf4665b7cebac86d4bae83bf4ccc",
          "message": "Update changelog",
          "timestamp": "2023-08-29T17:25:43+09:00",
          "tree_id": "141691f335aa09b4e2357713cdc829d1cecafe60",
          "url": "https://github.com/greymistcube/libplanet/commit/fefd69f5a1ecaf4665b7cebac86d4bae83bf4ccc"
        },
        "date": 1693298334628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1347137.0957446808,
            "unit": "ns",
            "range": "± 86987.15484200449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606357.081081081,
            "unit": "ns",
            "range": "± 79385.50774941313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775609.6907216494,
            "unit": "ns",
            "range": "± 143694.1096484967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4525425.592592592,
            "unit": "ns",
            "range": "± 126777.79567151197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282362.4375,
            "unit": "ns",
            "range": "± 5298.7622827568575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266475.4864864865,
            "unit": "ns",
            "range": "± 8944.295160795144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235348.92156862744,
            "unit": "ns",
            "range": "± 9410.325547701605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4321860.533333333,
            "unit": "ns",
            "range": "± 33644.693601701605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915503.7333333334,
            "unit": "ns",
            "range": "± 34334.80296073331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22146.360824742267,
            "unit": "ns",
            "range": "± 1646.8540665055846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101603.05434782608,
            "unit": "ns",
            "range": "± 6942.652184047693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74675,
            "unit": "ns",
            "range": "± 1185.1863425920276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78194.85714285714,
            "unit": "ns",
            "range": "± 10073.080084649013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5193.8877551020405,
            "unit": "ns",
            "range": "± 568.9231985320147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18962.637362637364,
            "unit": "ns",
            "range": "± 1612.3584073336901"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48403.634146341465,
            "unit": "ns",
            "range": "± 2577.2301118999503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8250068.571428572,
            "unit": "ns",
            "range": "± 38159.95038239454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20243961.733333334,
            "unit": "ns",
            "range": "± 59042.314584501495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52475416.15384615,
            "unit": "ns",
            "range": "± 138232.60937145413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105254198.78571428,
            "unit": "ns",
            "range": "± 319515.4985409528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210616796.42857143,
            "unit": "ns",
            "range": "± 1014783.7610154054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3396125.4,
            "unit": "ns",
            "range": "± 40046.28424853279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3568198.533333333,
            "unit": "ns",
            "range": "± 65299.966639530605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4491608.833333333,
            "unit": "ns",
            "range": "± 96092.60885223905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4025704.6666666665,
            "unit": "ns",
            "range": "± 53810.20172350043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6325720.617647059,
            "unit": "ns",
            "range": "± 201660.05157495377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5235411.5,
            "unit": "ns",
            "range": "± 4539.185020041996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574465.2996651786,
            "unit": "ns",
            "range": "± 1248.4211235147866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070530.749609375,
            "unit": "ns",
            "range": "± 1517.972604312531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539690.330636161,
            "unit": "ns",
            "range": "± 6240.89978378761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805681.6853966346,
            "unit": "ns",
            "range": "± 1270.547740231489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744556.6271484375,
            "unit": "ns",
            "range": "± 549.7857647383809"
          }
        ]
      }
    ]
  }
}