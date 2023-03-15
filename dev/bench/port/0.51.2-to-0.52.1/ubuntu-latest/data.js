window.BENCHMARK_DATA = {
  "lastUpdate": 1678873226883,
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
          "id": "39c00351cc8914b7bf995fabdcb08e1822a06d5c",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:27:42+09:00",
          "tree_id": "b8b6da760dd2b7acfc51de3dd2e872d9b7a8dac9",
          "url": "https://github.com/greymistcube/libplanet/commit/39c00351cc8914b7bf995fabdcb08e1822a06d5c"
        },
        "date": 1678873219760,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196163.73333333334,
            "unit": "ns",
            "range": "± 3510.569519662152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196067,
            "unit": "ns",
            "range": "± 6130.780114512345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159046.7857142857,
            "unit": "ns",
            "range": "± 4552.840874273449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11349168.666666666,
            "unit": "ns",
            "range": "± 66444.8736780742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9212940.07142857,
            "unit": "ns",
            "range": "± 61310.86877477421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18078.15625,
            "unit": "ns",
            "range": "± 1493.2585233087439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53736.318681318684,
            "unit": "ns",
            "range": "± 3561.8752423068167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38242.92857142857,
            "unit": "ns",
            "range": "± 652.3685207098721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88007.32653061225,
            "unit": "ns",
            "range": "± 13592.196198573869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4715.474226804124,
            "unit": "ns",
            "range": "± 601.0925312293077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18091.63157894737,
            "unit": "ns",
            "range": "± 1675.5943756643844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3282866.2666666666,
            "unit": "ns",
            "range": "± 51069.98484078584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5111636.4,
            "unit": "ns",
            "range": "± 77758.63045788367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23603818.2,
            "unit": "ns",
            "range": "± 330222.24099086446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6227561.75,
            "unit": "ns",
            "range": "± 122249.67190221821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27463388.8,
            "unit": "ns",
            "range": "± 449491.02881532256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5880880.445833334,
            "unit": "ns",
            "range": "± 17039.53051546288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842710.9609375,
            "unit": "ns",
            "range": "± 3727.4144286641767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351977.4067708333,
            "unit": "ns",
            "range": "± 3075.5346839294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562622.6358816964,
            "unit": "ns",
            "range": "± 1151.4657685379273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 927875.2473632812,
            "unit": "ns",
            "range": "± 914.5800636984809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735517.1603816106,
            "unit": "ns",
            "range": "± 545.7983746725158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7622078.642857143,
            "unit": "ns",
            "range": "± 45804.25719483212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19771953.066666666,
            "unit": "ns",
            "range": "± 140301.65428638124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50307692.64285714,
            "unit": "ns",
            "range": "± 279901.4619203878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100993650.35714285,
            "unit": "ns",
            "range": "± 407878.5435759423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200469910.76923078,
            "unit": "ns",
            "range": "± 651163.8997797398"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45951.44155844156,
            "unit": "ns",
            "range": "± 2336.234180163872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1342833.4361702127,
            "unit": "ns",
            "range": "± 68585.9832823567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2461552.703703704,
            "unit": "ns",
            "range": "± 67938.89697300679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2127038.4266666668,
            "unit": "ns",
            "range": "± 107009.0882182536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5006952.76,
            "unit": "ns",
            "range": "± 132000.63524761287"
          }
        ]
      }
    ]
  }
}