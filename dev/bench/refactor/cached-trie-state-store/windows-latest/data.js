window.BENCHMARK_DATA = {
  "lastUpdate": 1700031396817,
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
          "id": "36edcf8fc51a39ee63c4511f91b090c07a38d2e3",
          "message": "Increased cache size; more info for logging",
          "timestamp": "2023-11-15T10:59:12+09:00",
          "tree_id": "018584c062bbc4b3e74bb6135651e788b8e16e58",
          "url": "https://github.com/greymistcube/libplanet/commit/36edcf8fc51a39ee63c4511f91b090c07a38d2e3"
        },
        "date": 1700031380852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937105.3191489362,
            "unit": "ns",
            "range": "± 87842.63099921809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1689846,
            "unit": "ns",
            "range": "± 63023.45922150654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1404916.8421052631,
            "unit": "ns",
            "range": "± 114756.88886996327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6122385.56701031,
            "unit": "ns",
            "range": "± 377100.19998825976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34646.25,
            "unit": "ns",
            "range": "± 1815.6104911836685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5183064.285714285,
            "unit": "ns",
            "range": "± 28714.472554200504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13474220,
            "unit": "ns",
            "range": "± 117796.38122018617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32675300,
            "unit": "ns",
            "range": "± 452986.8951116104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65370907.14285714,
            "unit": "ns",
            "range": "± 631057.5610272571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132372966.66666667,
            "unit": "ns",
            "range": "± 962441.165301374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3092378.3052884615,
            "unit": "ns",
            "range": "± 6107.306220038793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1006450.5719866072,
            "unit": "ns",
            "range": "± 1844.629780918285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 685957.3016826923,
            "unit": "ns",
            "range": "± 1861.4833639350186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999545.786830357,
            "unit": "ns",
            "range": "± 7279.091852928713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614638.2393973215,
            "unit": "ns",
            "range": "± 1679.654016462739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570429.6158854166,
            "unit": "ns",
            "range": "± 1197.879894707878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2239529.411764706,
            "unit": "ns",
            "range": "± 44514.572960799625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2318753.846153846,
            "unit": "ns",
            "range": "± 30820.139935454958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2830563.1578947366,
            "unit": "ns",
            "range": "± 62586.51088716514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2739380.9523809524,
            "unit": "ns",
            "range": "± 146109.25642662027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6848826.5625,
            "unit": "ns",
            "range": "± 314723.03482318146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172031.1475409836,
            "unit": "ns",
            "range": "± 7682.4592630139505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163848.75,
            "unit": "ns",
            "range": "± 8311.498726219561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138820,
            "unit": "ns",
            "range": "± 2441.6621972980383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2707285.714285714,
            "unit": "ns",
            "range": "± 19846.831064346352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2538330.769230769,
            "unit": "ns",
            "range": "± 40839.51078337792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10610.112359550561,
            "unit": "ns",
            "range": "± 1390.0658048370672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55641.666666666664,
            "unit": "ns",
            "range": "± 6988.255812307219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45208.333333333336,
            "unit": "ns",
            "range": "± 1786.335049144314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52327.17391304348,
            "unit": "ns",
            "range": "± 7236.493341495575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2397.8947368421054,
            "unit": "ns",
            "range": "± 426.75892526244064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10186.813186813188,
            "unit": "ns",
            "range": "± 1356.8925930807898"
          }
        ]
      }
    ]
  }
}