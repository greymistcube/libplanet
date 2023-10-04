window.BENCHMARK_DATA = {
  "lastUpdate": 1696398632454,
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
      }
    ]
  }
}