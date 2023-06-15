window.BENCHMARK_DATA = {
  "lastUpdate": 1686807707784,
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
          "id": "6939f2f1409576ece7d5d7afedd55a9e41b222e2",
          "message": "Changelog",
          "timestamp": "2023-06-15T14:24:20+09:00",
          "tree_id": "c7ee0cc40c745c22e6df2ec74f560c23631c0f7c",
          "url": "https://github.com/greymistcube/libplanet/commit/6939f2f1409576ece7d5d7afedd55a9e41b222e2"
        },
        "date": 1686807687742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9067438.35,
            "unit": "ns",
            "range": "± 204334.4943928112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22693310.115384616,
            "unit": "ns",
            "range": "± 208077.64521588988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59422099.26923077,
            "unit": "ns",
            "range": "± 1566291.9186444029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114457071.5,
            "unit": "ns",
            "range": "± 1248718.7323633127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233938088.7857143,
            "unit": "ns",
            "range": "± 3280800.1798118185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65342.20786516854,
            "unit": "ns",
            "range": "± 3857.1667422246346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377922.87234042556,
            "unit": "ns",
            "range": "± 31397.60337584652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353139.47826086957,
            "unit": "ns",
            "range": "± 13448.278972483397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318654.0833333333,
            "unit": "ns",
            "range": "± 7572.277567414643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4828296.105263158,
            "unit": "ns",
            "range": "± 106581.91443459748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4323478.1,
            "unit": "ns",
            "range": "± 87757.09381067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19914.62365591398,
            "unit": "ns",
            "range": "± 1430.7721381035644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97825.50537634408,
            "unit": "ns",
            "range": "± 5540.668488203064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91308.31460674158,
            "unit": "ns",
            "range": "± 6925.121342218005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113648.71578947369,
            "unit": "ns",
            "range": "± 15809.386617667229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5831.628865979382,
            "unit": "ns",
            "range": "± 619.4958689596529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19197.934782608696,
            "unit": "ns",
            "range": "± 1526.2429688930774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1788597.530927835,
            "unit": "ns",
            "range": "± 165114.94374131298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3521279.164556962,
            "unit": "ns",
            "range": "± 176205.98188516076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2969371.393939394,
            "unit": "ns",
            "range": "± 299346.87174661784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8016816.703296703,
            "unit": "ns",
            "range": "± 522933.5718026078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4015726.0833333335,
            "unit": "ns",
            "range": "± 133687.76965246297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4051642.2391304346,
            "unit": "ns",
            "range": "± 271119.9473927138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5216731.451219512,
            "unit": "ns",
            "range": "± 182981.85682055357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5114430.277777778,
            "unit": "ns",
            "range": "± 190788.70484540187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9312056.739726027,
            "unit": "ns",
            "range": "± 461029.0074019213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7374401.661830357,
            "unit": "ns",
            "range": "± 41360.30988718297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275571.30546875,
            "unit": "ns",
            "range": "± 28723.37119862779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1490718.1681082589,
            "unit": "ns",
            "range": "± 16094.707143110869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3192824.886458333,
            "unit": "ns",
            "range": "± 49105.80470885415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048681.5623697916,
            "unit": "ns",
            "range": "± 10897.59051283885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 885271.5861979167,
            "unit": "ns",
            "range": "± 11266.7949934779"
          }
        ]
      }
    ]
  }
}