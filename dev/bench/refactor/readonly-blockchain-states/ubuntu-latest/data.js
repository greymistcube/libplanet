window.BENCHMARK_DATA = {
  "lastUpdate": 1691646027111,
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
          "id": "70d7b370f6d49c724d92636de09e0b04f4a36433",
          "message": "Readonly state root from BlockChainStates",
          "timestamp": "2023-08-10T14:21:04+09:00",
          "tree_id": "c925c4650a2aed4912f3bb5385e4b96d9681a5c7",
          "url": "https://github.com/greymistcube/libplanet/commit/70d7b370f6d49c724d92636de09e0b04f4a36433"
        },
        "date": 1691646017518,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3780959.489361702,
            "unit": "ns",
            "range": "± 268423.2540602538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3888355.3020833335,
            "unit": "ns",
            "range": "± 350001.6484408735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4978343.031578948,
            "unit": "ns",
            "range": "± 409901.7776640626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4476152.364583333,
            "unit": "ns",
            "range": "± 415014.7162295287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7896268.125,
            "unit": "ns",
            "range": "± 678468.8210196816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9204340.21875,
            "unit": "ns",
            "range": "± 563537.3899391735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23797748.11,
            "unit": "ns",
            "range": "± 1721931.2852404935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64634266.161290325,
            "unit": "ns",
            "range": "± 1885996.0925797643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133257336.75,
            "unit": "ns",
            "range": "± 8724095.737387232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257627997.33734939,
            "unit": "ns",
            "range": "± 13716053.821358602"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70948.81,
            "unit": "ns",
            "range": "± 21600.24056623192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5714820.725,
            "unit": "ns",
            "range": "± 85167.82750106466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844201.623046875,
            "unit": "ns",
            "range": "± 33087.40882932827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1257197.0886896306,
            "unit": "ns",
            "range": "± 29340.521450628617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3035521.9477539062,
            "unit": "ns",
            "range": "± 71625.39648300067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987650.1803768382,
            "unit": "ns",
            "range": "± 19787.281301365045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 949628.9486667799,
            "unit": "ns",
            "range": "± 22066.77983559607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333101.34375,
            "unit": "ns",
            "range": "± 42557.39136540162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322800.75257731957,
            "unit": "ns",
            "range": "± 34993.99660627249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287339.12765957444,
            "unit": "ns",
            "range": "± 39892.22472338911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4688719.177777777,
            "unit": "ns",
            "range": "± 265820.60893588874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4319668.182795699,
            "unit": "ns",
            "range": "± 358651.10809149843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26743.19387755102,
            "unit": "ns",
            "range": "± 9872.460181443575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109761.80612244898,
            "unit": "ns",
            "range": "± 21425.071336314093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108600.42857142857,
            "unit": "ns",
            "range": "± 24317.664364921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111972.98958333333,
            "unit": "ns",
            "range": "± 28712.744047674343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6238.944444444444,
            "unit": "ns",
            "range": "± 1312.8192697706522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28425.35,
            "unit": "ns",
            "range": "± 12035.486491134578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556720.448979592,
            "unit": "ns",
            "range": "± 212335.04480823193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3039298.125,
            "unit": "ns",
            "range": "± 313048.7741836053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2071749.5463917525,
            "unit": "ns",
            "range": "± 254813.88371707613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5604408.897959184,
            "unit": "ns",
            "range": "± 607363.6252407595"
          }
        ]
      }
    ]
  }
}