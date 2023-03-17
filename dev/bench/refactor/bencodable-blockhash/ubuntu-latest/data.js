window.BENCHMARK_DATA = {
  "lastUpdate": 1679042400049,
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
          "id": "e91bd1b21264a90118c46bdd6e6a4984ebd773f0",
          "message": "Implemented IBencodable for BlockHash",
          "timestamp": "2023-03-17T17:27:41+09:00",
          "tree_id": "8289f76ee67db2138eb0bb233531e044803695cf",
          "url": "https://github.com/greymistcube/libplanet/commit/e91bd1b21264a90118c46bdd6e6a4984ebd773f0"
        },
        "date": 1679042392791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3155377.1153846155,
            "unit": "ns",
            "range": "± 84615.67571192795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4895518.533333333,
            "unit": "ns",
            "range": "± 83752.15279183375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22646141.4,
            "unit": "ns",
            "range": "± 337843.97553156316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6065081.684210527,
            "unit": "ns",
            "range": "± 126893.54503417098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25872038.125,
            "unit": "ns",
            "range": "± 479497.27485146705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7556186.923076923,
            "unit": "ns",
            "range": "± 11787.461024760862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19409020,
            "unit": "ns",
            "range": "± 201341.57001119124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49139394.8,
            "unit": "ns",
            "range": "± 327700.4154749535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97947217.2,
            "unit": "ns",
            "range": "± 762867.9358498055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 196695930.92857143,
            "unit": "ns",
            "range": "± 2029065.8884387196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332169.530612245,
            "unit": "ns",
            "range": "± 101319.30492486524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2414860.6666666665,
            "unit": "ns",
            "range": "± 56148.072789129044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2059450.2567567567,
            "unit": "ns",
            "range": "± 101907.74650580829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4979245.324324325,
            "unit": "ns",
            "range": "± 167075.58401248854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44064.09333333333,
            "unit": "ns",
            "range": "± 2227.1534078239833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5849628.813616072,
            "unit": "ns",
            "range": "± 14796.598517352373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910423.9454427084,
            "unit": "ns",
            "range": "± 3431.778679144006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340929.365234375,
            "unit": "ns",
            "range": "± 1698.6913731709863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567224.3778645834,
            "unit": "ns",
            "range": "± 2978.8492492129035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815952.3296223958,
            "unit": "ns",
            "range": "± 787.8171140434271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724438.3609375,
            "unit": "ns",
            "range": "± 598.967813923959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189533.83333333334,
            "unit": "ns",
            "range": "± 2665.951470380555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188303.25714285715,
            "unit": "ns",
            "range": "± 6122.673970544229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159015.84615384616,
            "unit": "ns",
            "range": "± 2657.3630678473305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11414174.666666666,
            "unit": "ns",
            "range": "± 51833.54784365629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9023166.714285715,
            "unit": "ns",
            "range": "± 71607.46329971324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16870.875,
            "unit": "ns",
            "range": "± 1332.844092039354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49080.510869565216,
            "unit": "ns",
            "range": "± 2748.5717829509936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37671.42857142857,
            "unit": "ns",
            "range": "± 650.950277468459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78014.16853932584,
            "unit": "ns",
            "range": "± 6862.259222859936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4372.631578947368,
            "unit": "ns",
            "range": "± 317.7186314640603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15601.106382978724,
            "unit": "ns",
            "range": "± 1244.2032858492055"
          }
        ]
      }
    ]
  }
}