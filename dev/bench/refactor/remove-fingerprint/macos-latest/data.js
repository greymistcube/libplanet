window.BENCHMARK_DATA = {
  "lastUpdate": 1691458844204,
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
          "id": "61fdcfcd956d5b1ee1c6309a79e51f1fe2264db8",
          "message": "Removed bencodex fingerprint support",
          "timestamp": "2023-08-08T10:22:41+09:00",
          "tree_id": "8702cf6c8c003452776c96afe2905350bc5e85af",
          "url": "https://github.com/greymistcube/libplanet/commit/61fdcfcd956d5b1ee1c6309a79e51f1fe2264db8"
        },
        "date": 1691458828149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8460535.766666668,
            "unit": "ns",
            "range": "± 120857.50101578698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21244420.425531916,
            "unit": "ns",
            "range": "± 1619851.0306286097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53445248.428571425,
            "unit": "ns",
            "range": "± 1735197.9990589018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101435332.73333333,
            "unit": "ns",
            "range": "± 1695231.20092627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208396239.19230768,
            "unit": "ns",
            "range": "± 5671868.418949643"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70149.97252747252,
            "unit": "ns",
            "range": "± 8573.323270264518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352109.8526315789,
            "unit": "ns",
            "range": "± 35583.86223609835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375670.6530612245,
            "unit": "ns",
            "range": "± 62010.72846304554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336617.6157894737,
            "unit": "ns",
            "range": "± 41506.673289879946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4235354.206896552,
            "unit": "ns",
            "range": "± 171626.0809842916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3713537.777777778,
            "unit": "ns",
            "range": "± 61041.471843094034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16901.648351648353,
            "unit": "ns",
            "range": "± 1358.2525487112428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89590.8829787234,
            "unit": "ns",
            "range": "± 7099.248640928747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94146.68947368421,
            "unit": "ns",
            "range": "± 13377.371415378822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116435.08988764045,
            "unit": "ns",
            "range": "± 16445.813916562234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7984.941860465116,
            "unit": "ns",
            "range": "± 1400.8116500561268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24249.136363636364,
            "unit": "ns",
            "range": "± 4341.926994684301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592576.1494845361,
            "unit": "ns",
            "range": "± 165940.85030535233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2943578.934782609,
            "unit": "ns",
            "range": "± 165401.30639569415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1988080.4479166667,
            "unit": "ns",
            "range": "± 152973.41094471424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5798629.72972973,
            "unit": "ns",
            "range": "± 283270.37715530157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3406596.4583333335,
            "unit": "ns",
            "range": "± 130622.49316172716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461995.839285714,
            "unit": "ns",
            "range": "± 148979.56851403567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4526749.68627451,
            "unit": "ns",
            "range": "± 184231.49836610357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3874077.9,
            "unit": "ns",
            "range": "± 176299.12684158646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7604131.595744681,
            "unit": "ns",
            "range": "± 578612.6548023105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7124105.091488487,
            "unit": "ns",
            "range": "± 151452.85298490096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2103107.1696777344,
            "unit": "ns",
            "range": "± 40286.00505465933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368868.046875,
            "unit": "ns",
            "range": "± 22949.41411014793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2983161.9982077205,
            "unit": "ns",
            "range": "± 159556.13969647838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849541.0654296875,
            "unit": "ns",
            "range": "± 17906.40081192299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747120.8089192709,
            "unit": "ns",
            "range": "± 6157.271873911749"
          }
        ]
      }
    ]
  }
}