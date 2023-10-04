window.BENCHMARK_DATA = {
  "lastUpdate": 1696399458629,
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
        "date": 1696398618763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8306456.307692308,
            "unit": "ns",
            "range": "± 74381.8270529218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20954290.074074075,
            "unit": "ns",
            "range": "± 581144.9325136562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51041125.666666664,
            "unit": "ns",
            "range": "± 1393139.5511598806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100503382.73076923,
            "unit": "ns",
            "range": "± 1132320.2913948533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209987136.7142857,
            "unit": "ns",
            "range": "± 3392181.3470343873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63706.94623655914,
            "unit": "ns",
            "range": "± 9309.912960604657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303996.93157894735,
            "unit": "ns",
            "range": "± 20569.478772992992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301092.2365591398,
            "unit": "ns",
            "range": "± 20528.295149568057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292348.25,
            "unit": "ns",
            "range": "± 15270.061537085747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4192939.3,
            "unit": "ns",
            "range": "± 95713.12442210893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3720773.8571428573,
            "unit": "ns",
            "range": "± 78533.83384330967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18708.387096774193,
            "unit": "ns",
            "range": "± 2608.8215773487445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84800.32978723405,
            "unit": "ns",
            "range": "± 8310.609592159695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90481.03684210527,
            "unit": "ns",
            "range": "± 13333.536459915033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97002.89361702128,
            "unit": "ns",
            "range": "± 15585.466703640332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5670.833333333333,
            "unit": "ns",
            "range": "± 750.3888909887313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17318.422222222223,
            "unit": "ns",
            "range": "± 1814.5528868776203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424718.6717171718,
            "unit": "ns",
            "range": "± 120979.61587417134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2694583.3541666665,
            "unit": "ns",
            "range": "± 105630.63903083891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2319837.1979166665,
            "unit": "ns",
            "range": "± 233228.95759492015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10171288.176470589,
            "unit": "ns",
            "range": "± 413640.21427964215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3240556.888888889,
            "unit": "ns",
            "range": "± 136399.751913218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3431192.2666666666,
            "unit": "ns",
            "range": "± 128010.20574714844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4554814.74,
            "unit": "ns",
            "range": "± 175500.6696334466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5059337.844827586,
            "unit": "ns",
            "range": "± 894651.2094468011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15015531.234693877,
            "unit": "ns",
            "range": "± 1532345.335532827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5417425.73828125,
            "unit": "ns",
            "range": "± 47719.25848339867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1728069.0884114583,
            "unit": "ns",
            "range": "± 21512.49799987497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1018056.8559895833,
            "unit": "ns",
            "range": "± 5720.168386377593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644969.8058035714,
            "unit": "ns",
            "range": "± 32041.880262494054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776402.9486328125,
            "unit": "ns",
            "range": "± 4081.6761433209135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710134.3172526042,
            "unit": "ns",
            "range": "± 5245.423102506287"
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
        "date": 1696399442389,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7679219.769230769,
            "unit": "ns",
            "range": "± 66981.77331079682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19286354.259259257,
            "unit": "ns",
            "range": "± 540190.3284815876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47201962.78571428,
            "unit": "ns",
            "range": "± 835163.8670086229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91654421.25,
            "unit": "ns",
            "range": "± 717787.1852159278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188098181.2857143,
            "unit": "ns",
            "range": "± 2161414.6989999283"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53338.57608695652,
            "unit": "ns",
            "range": "± 4389.054868932354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284072.3125,
            "unit": "ns",
            "range": "± 14772.853371952517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277213.77173913043,
            "unit": "ns",
            "range": "± 17374.40788024394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255754.13698630137,
            "unit": "ns",
            "range": "± 12692.270271611806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3805491,
            "unit": "ns",
            "range": "± 55005.786520426824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3518526.68,
            "unit": "ns",
            "range": "± 90219.91808340698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17560.616279069767,
            "unit": "ns",
            "range": "± 1926.350179934031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83227.43478260869,
            "unit": "ns",
            "range": "± 7727.845125351196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70550.2808988764,
            "unit": "ns",
            "range": "± 5321.08891792572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82859.87634408602,
            "unit": "ns",
            "range": "± 11974.566396719103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4651.364705882353,
            "unit": "ns",
            "range": "± 646.4525513295218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17292.36046511628,
            "unit": "ns",
            "range": "± 2076.163963619051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1387433.7916666667,
            "unit": "ns",
            "range": "± 148155.03388637165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2716568.7419354836,
            "unit": "ns",
            "range": "± 157952.2008917298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2131313.0631578946,
            "unit": "ns",
            "range": "± 153268.089559328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10076818.559322033,
            "unit": "ns",
            "range": "± 444955.543688986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3015120.625,
            "unit": "ns",
            "range": "± 90098.84973801221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3181808.588235294,
            "unit": "ns",
            "range": "± 64423.58272117714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4073353.714285714,
            "unit": "ns",
            "range": "± 110920.14120607043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3931810.706349206,
            "unit": "ns",
            "range": "± 179609.4266329707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14424257.659574468,
            "unit": "ns",
            "range": "± 1443851.361543522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5109058.628125,
            "unit": "ns",
            "range": "± 43201.67480365196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1577563.7272135417,
            "unit": "ns",
            "range": "± 10043.95278077439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 946660.0793619792,
            "unit": "ns",
            "range": "± 6413.009208661865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2348054.959114583,
            "unit": "ns",
            "range": "± 14347.613715577634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 738155.6647135416,
            "unit": "ns",
            "range": "± 3303.400702700961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763666.7163461539,
            "unit": "ns",
            "range": "± 2576.5434194345466"
          }
        ]
      }
    ]
  }
}