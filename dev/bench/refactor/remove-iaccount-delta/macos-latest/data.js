window.BENCHMARK_DATA = {
  "lastUpdate": 1701747679033,
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
          "id": "a00f6ec71287403ef187b3abf4e88cf75d8ce188",
          "message": "Changelog",
          "timestamp": "2023-12-05T12:22:22+09:00",
          "tree_id": "7cef5086b6450859deb782f56a7fce91ad1f9bbf",
          "url": "https://github.com/greymistcube/libplanet/commit/a00f6ec71287403ef187b3abf4e88cf75d8ce188"
        },
        "date": 1701747658590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7495381.083333333,
            "unit": "ns",
            "range": "± 9694.589751349446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18658963.5,
            "unit": "ns",
            "range": "± 149248.1371324279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48017056.196428575,
            "unit": "ns",
            "range": "± 2038849.081194869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95036245.4736842,
            "unit": "ns",
            "range": "± 3261927.0425242833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186693804.42307693,
            "unit": "ns",
            "range": "± 1887506.0173539608"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35028.056818181816,
            "unit": "ns",
            "range": "± 3500.764183760141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218128.33720930232,
            "unit": "ns",
            "range": "± 11858.119035060241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210516.30681818182,
            "unit": "ns",
            "range": "± 11731.929401402534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201829.17894736843,
            "unit": "ns",
            "range": "± 19247.348502651756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3646196.2666666666,
            "unit": "ns",
            "range": "± 67462.22579389645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3496041.261904762,
            "unit": "ns",
            "range": "± 81409.23354258089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19396.927083333332,
            "unit": "ns",
            "range": "± 5355.542062583477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81625.73913043478,
            "unit": "ns",
            "range": "± 17930.344196281712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68219.33516483517,
            "unit": "ns",
            "range": "± 7320.506025714853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85785.31443298969,
            "unit": "ns",
            "range": "± 20814.252018513806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7589.34375,
            "unit": "ns",
            "range": "± 1059.4003251902266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21651.634020618556,
            "unit": "ns",
            "range": "± 3731.8423221336734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067297.144329897,
            "unit": "ns",
            "range": "± 89077.86768935996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2234729.5733333332,
            "unit": "ns",
            "range": "± 110829.63806369218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554440.0842105264,
            "unit": "ns",
            "range": "± 120699.23918520138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6975173.582417582,
            "unit": "ns",
            "range": "± 426088.9336781979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2912436.115942029,
            "unit": "ns",
            "range": "± 138644.1944470403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3022380.9166666665,
            "unit": "ns",
            "range": "± 98161.38843946884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3510749.8076923075,
            "unit": "ns",
            "range": "± 68166.71068433284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3452940.6231884058,
            "unit": "ns",
            "range": "± 166098.80217890703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14319930.16,
            "unit": "ns",
            "range": "± 2471500.5456135827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5955218.613560268,
            "unit": "ns",
            "range": "± 169280.37080096462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864143.7433011238,
            "unit": "ns",
            "range": "± 80180.85232254319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 966050.8037923177,
            "unit": "ns",
            "range": "± 32278.71337458679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2202210.3905894887,
            "unit": "ns",
            "range": "± 93374.68847550944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 745457.647322945,
            "unit": "ns",
            "range": "± 45159.80729606153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 694475.2545166016,
            "unit": "ns",
            "range": "± 13425.387491259475"
          }
        ]
      }
    ]
  }
}