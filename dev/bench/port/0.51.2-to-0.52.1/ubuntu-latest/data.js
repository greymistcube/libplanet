window.BENCHMARK_DATA = {
  "lastUpdate": 1678873310094,
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
          "id": "b2e0658c9ac12b938ceac00d922b21d0bcf15ea5",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:29:14+09:00",
          "tree_id": "b8b6da760dd2b7acfc51de3dd2e872d9b7a8dac9",
          "url": "https://github.com/greymistcube/libplanet/commit/b2e0658c9ac12b938ceac00d922b21d0bcf15ea5"
        },
        "date": 1678873302978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188426.2,
            "unit": "ns",
            "range": "± 5551.53790683577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193431.87096774194,
            "unit": "ns",
            "range": "± 5710.373377996315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159247.1052631579,
            "unit": "ns",
            "range": "± 2723.8763818976163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11187354,
            "unit": "ns",
            "range": "± 77761.8176595319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9051559.266666668,
            "unit": "ns",
            "range": "± 75507.2175182769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16817.65625,
            "unit": "ns",
            "range": "± 1445.5833921811636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52931.125,
            "unit": "ns",
            "range": "± 5640.02501907478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40035,
            "unit": "ns",
            "range": "± 922.967183085418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80585.89655172414,
            "unit": "ns",
            "range": "± 5924.359569027483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4622.428571428572,
            "unit": "ns",
            "range": "± 595.442346183798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15720.408602150537,
            "unit": "ns",
            "range": "± 1227.8147186784572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3211488.3333333335,
            "unit": "ns",
            "range": "± 58988.7266077979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5084747.555555556,
            "unit": "ns",
            "range": "± 103567.50400142396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23143463.785714287,
            "unit": "ns",
            "range": "± 245824.66558103455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6171688.230769231,
            "unit": "ns",
            "range": "± 168632.5613260518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26695509.53846154,
            "unit": "ns",
            "range": "± 250493.60939972612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6217085.8296875,
            "unit": "ns",
            "range": "± 29678.230033264583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837738.7172154018,
            "unit": "ns",
            "range": "± 2040.425553767342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368678.8985770089,
            "unit": "ns",
            "range": "± 1877.92714251858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2558896.3839285714,
            "unit": "ns",
            "range": "± 2491.462515653851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801376.5388020833,
            "unit": "ns",
            "range": "± 719.5160824671457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731378.2609514509,
            "unit": "ns",
            "range": "± 1202.2385215722163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7687234.666666667,
            "unit": "ns",
            "range": "± 17380.85427239108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19261055.714285713,
            "unit": "ns",
            "range": "± 73986.30701943183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49706282.8,
            "unit": "ns",
            "range": "± 408403.81661557895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98418180.73333333,
            "unit": "ns",
            "range": "± 1161982.3982676864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199268489.92857143,
            "unit": "ns",
            "range": "± 1016820.4982665301"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45199.94594594595,
            "unit": "ns",
            "range": "± 2171.6889575961336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1320626.1354166667,
            "unit": "ns",
            "range": "± 93406.95946771053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2439539.1071428573,
            "unit": "ns",
            "range": "± 68539.16695250718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2073014.2125,
            "unit": "ns",
            "range": "± 103517.14105729442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5060313.1,
            "unit": "ns",
            "range": "± 177595.40231860647"
          }
        ]
      }
    ]
  }
}