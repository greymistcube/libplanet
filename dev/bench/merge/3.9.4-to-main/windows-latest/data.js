window.BENCHMARK_DATA = {
  "lastUpdate": 1705280806224,
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
          "id": "9af4f63dca620dc3bdf9581d529522306222d070",
          "message": "Changelog",
          "timestamp": "2024-01-15T09:54:44+09:00",
          "tree_id": "6e25bb6d8426c90711dd0d7b0ee7fe8226526174",
          "url": "https://github.com/greymistcube/libplanet/commit/9af4f63dca620dc3bdf9581d529522306222d070"
        },
        "date": 1705280789276,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987003.0303030303,
            "unit": "ns",
            "range": "± 111903.68804863772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1753953.5714285714,
            "unit": "ns",
            "range": "± 74891.43649136569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1533226.530612245,
            "unit": "ns",
            "range": "± 173236.28732928063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10900942.857142856,
            "unit": "ns",
            "range": "± 985829.5451201216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33973.13432835821,
            "unit": "ns",
            "range": "± 1628.1223699032785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4964926.666666667,
            "unit": "ns",
            "range": "± 32864.189513526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13287114.285714285,
            "unit": "ns",
            "range": "± 119661.36743804516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32512400,
            "unit": "ns",
            "range": "± 363060.05996647046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64871853.333333336,
            "unit": "ns",
            "range": "± 518099.0264786214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133629135.71428572,
            "unit": "ns",
            "range": "± 1330667.9159251295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3287933.4114583335,
            "unit": "ns",
            "range": "± 10581.920964621784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067562.9036458333,
            "unit": "ns",
            "range": "± 2344.2392363575896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739046.142578125,
            "unit": "ns",
            "range": "± 1604.6018472315411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963785.3794642857,
            "unit": "ns",
            "range": "± 3725.504801576705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638494.2731584822,
            "unit": "ns",
            "range": "± 1023.5122308294104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569254.2442908654,
            "unit": "ns",
            "range": "± 697.1086912702332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2201523.076923077,
            "unit": "ns",
            "range": "± 76149.1350524139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2373176.3636363638,
            "unit": "ns",
            "range": "± 99809.70591049446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2872252.380952381,
            "unit": "ns",
            "range": "± 68228.7081736685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2864495.1219512196,
            "unit": "ns",
            "range": "± 147479.63065248146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12754800.54945055,
            "unit": "ns",
            "range": "± 1798476.2345678217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177598.5294117647,
            "unit": "ns",
            "range": "± 7096.530425056239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171131.74603174604,
            "unit": "ns",
            "range": "± 7747.399676079156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142718.75,
            "unit": "ns",
            "range": "± 2785.2513351581038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2936540,
            "unit": "ns",
            "range": "± 47421.57134228503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2495226.6666666665,
            "unit": "ns",
            "range": "± 31938.2544175178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12654.255319148937,
            "unit": "ns",
            "range": "± 1517.5436358798252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59367.03296703297,
            "unit": "ns",
            "range": "± 4981.478025759355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48259.13978494624,
            "unit": "ns",
            "range": "± 3884.7314427668857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65888.88888888889,
            "unit": "ns",
            "range": "± 13117.124567377554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2803.125,
            "unit": "ns",
            "range": "± 505.6425042510401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11786.021505376344,
            "unit": "ns",
            "range": "± 1693.6962022805176"
          }
        ]
      }
    ]
  }
}