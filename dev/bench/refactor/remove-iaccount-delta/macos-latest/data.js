window.BENCHMARK_DATA = {
  "lastUpdate": 1701747199577,
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
          "id": "994021d4014c1a3eff9336c73c55959c1de602c0",
          "message": "Remove IAccountDelta and AccountDelta",
          "timestamp": "2023-12-05T12:19:24+09:00",
          "tree_id": "e063b5281a3b9b71847ed41dda78efc7329a6b5f",
          "url": "https://github.com/greymistcube/libplanet/commit/994021d4014c1a3eff9336c73c55959c1de602c0"
        },
        "date": 1701747186917,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8158140.041666667,
            "unit": "ns",
            "range": "± 591815.2640634606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20132733.96153846,
            "unit": "ns",
            "range": "± 238196.4333215394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48654443.0106383,
            "unit": "ns",
            "range": "± 1877649.5708115445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97664900.17901234,
            "unit": "ns",
            "range": "± 5089095.340415253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207834065,
            "unit": "ns",
            "range": "± 4913805.248580371"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47891.35164835165,
            "unit": "ns",
            "range": "± 7992.477630557967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233353.1894736842,
            "unit": "ns",
            "range": "± 20132.861918982708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229381.806122449,
            "unit": "ns",
            "range": "± 24346.18095007462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221041.9255319149,
            "unit": "ns",
            "range": "± 18766.57088393366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3963542.4,
            "unit": "ns",
            "range": "± 139556.65402905236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3539662.0862068967,
            "unit": "ns",
            "range": "± 100667.58100320552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16086.184782608696,
            "unit": "ns",
            "range": "± 2513.2578390368494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66003.53191489361,
            "unit": "ns",
            "range": "± 6797.342399240962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65445.354166666664,
            "unit": "ns",
            "range": "± 9706.056153903053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73046.91489361702,
            "unit": "ns",
            "range": "± 12096.382893698372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4978.145833333333,
            "unit": "ns",
            "range": "± 802.1179986585078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16049.943298969072,
            "unit": "ns",
            "range": "± 4338.701989960708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1161470.2777777778,
            "unit": "ns",
            "range": "± 154693.32805930066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2416994.8789473684,
            "unit": "ns",
            "range": "± 156164.22020875354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1647951.147368421,
            "unit": "ns",
            "range": "± 140225.92313492496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7167004.662921349,
            "unit": "ns",
            "range": "± 521060.53816277045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2962149.471264368,
            "unit": "ns",
            "range": "± 160371.9686774613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3024691.5,
            "unit": "ns",
            "range": "± 124796.30332477565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3636874.5,
            "unit": "ns",
            "range": "± 109190.86107341835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3542497.5185185187,
            "unit": "ns",
            "range": "± 148972.70439317607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15022815.44736842,
            "unit": "ns",
            "range": "± 2806915.1354221613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4663632.856770833,
            "unit": "ns",
            "range": "± 82850.65184321725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1403651.0284423828,
            "unit": "ns",
            "range": "± 27111.130849857178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 869469.6110491072,
            "unit": "ns",
            "range": "± 8083.6617438641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957781.3597935268,
            "unit": "ns",
            "range": "± 22679.081205804614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625928.0105168269,
            "unit": "ns",
            "range": "± 14940.815231627019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550742.7522135417,
            "unit": "ns",
            "range": "± 7847.316365133219"
          }
        ]
      }
    ]
  }
}