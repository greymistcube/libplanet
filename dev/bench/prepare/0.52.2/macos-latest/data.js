window.BENCHMARK_DATA = {
  "lastUpdate": 1678875751534,
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
          "id": "fa27c557bf7e6bc4b3f3e876ad603cccb8649249",
          "message": "Prepare 0.52.2",
          "timestamp": "2023-03-15T18:58:28+09:00",
          "tree_id": "052b095cbc893302d5a8a8513b9e3eb3ff447e9c",
          "url": "https://github.com/greymistcube/libplanet/commit/fa27c557bf7e6bc4b3f3e876ad603cccb8649249"
        },
        "date": 1678875738320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9332731.712643677,
            "unit": "ns",
            "range": "± 510672.30125517247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22666830.092105262,
            "unit": "ns",
            "range": "± 1135968.403908315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58901765.29213483,
            "unit": "ns",
            "range": "± 4111004.4705357463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111747642.85416667,
            "unit": "ns",
            "range": "± 4385494.586780914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 232088060.88636363,
            "unit": "ns",
            "range": "± 8647719.702090966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81015.56521739131,
            "unit": "ns",
            "range": "± 7868.714646148577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241605.54945054944,
            "unit": "ns",
            "range": "± 24643.04147095472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232069.61290322582,
            "unit": "ns",
            "range": "± 33974.38371934651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218197.50574712644,
            "unit": "ns",
            "range": "± 17977.88582512542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13918181.89361702,
            "unit": "ns",
            "range": "± 1044180.3660171705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11347550.354166666,
            "unit": "ns",
            "range": "± 963623.1517539142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27245.963917525773,
            "unit": "ns",
            "range": "± 3901.6302150026977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67174.48888888888,
            "unit": "ns",
            "range": "± 5184.6672939845785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70074.54040404041,
            "unit": "ns",
            "range": "± 9962.61599519617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133008.98958333334,
            "unit": "ns",
            "range": "± 15085.335797944059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8976.966666666667,
            "unit": "ns",
            "range": "± 967.5127435795167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25986.44680851064,
            "unit": "ns",
            "range": "± 3413.355850743797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564166.6538461538,
            "unit": "ns",
            "range": "± 129962.9323679917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3097406.829787234,
            "unit": "ns",
            "range": "± 322476.6390664681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2897544.293814433,
            "unit": "ns",
            "range": "± 511571.33568936284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7234677.659340659,
            "unit": "ns",
            "range": "± 916322.8259810116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3731087.3225806453,
            "unit": "ns",
            "range": "± 523069.36316166644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5566415.848314607,
            "unit": "ns",
            "range": "± 542065.3560127711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27494185.9,
            "unit": "ns",
            "range": "± 1886969.473372761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6761378.945652174,
            "unit": "ns",
            "range": "± 482201.09417124104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31800239.02352941,
            "unit": "ns",
            "range": "± 1654181.8745465844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7409369.807091346,
            "unit": "ns",
            "range": "± 113689.2444812729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2180957.2825520835,
            "unit": "ns",
            "range": "± 55188.39011826308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390926.3601953124,
            "unit": "ns",
            "range": "± 51837.729874423334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3004865.881525213,
            "unit": "ns",
            "range": "± 165298.63657956576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 917510.068462171,
            "unit": "ns",
            "range": "± 31091.748846223752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787196.0087139423,
            "unit": "ns",
            "range": "± 12556.053511343851"
          }
        ]
      }
    ]
  }
}