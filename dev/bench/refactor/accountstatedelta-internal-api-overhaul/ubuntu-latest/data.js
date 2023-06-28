window.BENCHMARK_DATA = {
  "lastUpdate": 1687930539160,
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
          "id": "c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca",
          "message": "Use mocked state for testing; make AccountStateDelta creator private",
          "timestamp": "2023-06-27T19:17:10+09:00",
          "tree_id": "cfb95f884f28b3ef3c68c89991ef131469521fa8",
          "url": "https://github.com/greymistcube/libplanet/commit/c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca"
        },
        "date": 1687930529299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3729164.824742268,
            "unit": "ns",
            "range": "± 253163.76041527823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4030733.3440860217,
            "unit": "ns",
            "range": "± 313687.4179328183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5154448.928571428,
            "unit": "ns",
            "range": "± 406592.7601938919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4972199.591836735,
            "unit": "ns",
            "range": "± 415237.302202573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9086031.505376345,
            "unit": "ns",
            "range": "± 546982.2648868542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9144888.717948718,
            "unit": "ns",
            "range": "± 313571.38840511756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22947053.56521739,
            "unit": "ns",
            "range": "± 572255.4051381275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63989728.010752685,
            "unit": "ns",
            "range": "± 3625755.4509214065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125783813.31460674,
            "unit": "ns",
            "range": "± 6727559.362973694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248456288.84313726,
            "unit": "ns",
            "range": "± 10045096.590080597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371217.77,
            "unit": "ns",
            "range": "± 58756.65356002525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344981.81052631576,
            "unit": "ns",
            "range": "± 54863.673048844685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310756.1919191919,
            "unit": "ns",
            "range": "± 52918.19519453082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4890650.161290322,
            "unit": "ns",
            "range": "± 330722.0605775796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4566321.285714285,
            "unit": "ns",
            "range": "± 303955.2449365756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22570.19587628866,
            "unit": "ns",
            "range": "± 8078.490889701046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101441.64893617021,
            "unit": "ns",
            "range": "± 18576.43148289977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105484.97938144329,
            "unit": "ns",
            "range": "± 25002.98702112884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128530.83870967742,
            "unit": "ns",
            "range": "± 32699.54839878637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5580.489130434783,
            "unit": "ns",
            "range": "± 856.8469094617666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23133.2,
            "unit": "ns",
            "range": "± 10044.469203285831"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59528.53125,
            "unit": "ns",
            "range": "± 14665.032270463984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6915105.919497282,
            "unit": "ns",
            "range": "± 166962.00316419423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2318061.1944110575,
            "unit": "ns",
            "range": "± 33353.64033525347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1654001.6322265626,
            "unit": "ns",
            "range": "± 37114.05970584713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3101622.34921875,
            "unit": "ns",
            "range": "± 40082.748609497685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047303.668108259,
            "unit": "ns",
            "range": "± 17989.178725750327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939824.3430786133,
            "unit": "ns",
            "range": "± 17869.62062959746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635534.7216494845,
            "unit": "ns",
            "range": "± 160994.15112375087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3281327.525252525,
            "unit": "ns",
            "range": "± 256568.24018291512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2691506.8865979384,
            "unit": "ns",
            "range": "± 243156.47429175608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7132414.838383839,
            "unit": "ns",
            "range": "± 647046.4491903426"
          }
        ]
      }
    ]
  }
}