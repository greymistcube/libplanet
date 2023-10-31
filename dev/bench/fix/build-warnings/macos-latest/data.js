window.BENCHMARK_DATA = {
  "lastUpdate": 1698742295969,
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
          "id": "4406a0ccc94406e81a1a0a30da9d595ec444d301",
          "message": "Fix build warnings",
          "timestamp": "2023-10-31T17:21:43+09:00",
          "tree_id": "7719f0f09854ffd982d342983918c97f915476f2",
          "url": "https://github.com/greymistcube/libplanet/commit/4406a0ccc94406e81a1a0a30da9d595ec444d301"
        },
        "date": 1698742282459,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8247619.866666666,
            "unit": "ns",
            "range": "± 131125.06141840678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20046215.076923076,
            "unit": "ns",
            "range": "± 216743.63257831495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48376766.08108108,
            "unit": "ns",
            "range": "± 1629092.43928748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100651263.29166667,
            "unit": "ns",
            "range": "± 4968112.187627305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199431598.05555555,
            "unit": "ns",
            "range": "± 4245174.950412326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51574.56989247312,
            "unit": "ns",
            "range": "± 10098.971333106643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234597.51063829788,
            "unit": "ns",
            "range": "± 19266.804071622628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248079.4294117647,
            "unit": "ns",
            "range": "± 13275.56839764958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221649.57142857142,
            "unit": "ns",
            "range": "± 25492.644784895623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3916858.4032258065,
            "unit": "ns",
            "range": "± 117329.37182034596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3613929.8974358975,
            "unit": "ns",
            "range": "± 116131.96305627917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21385.367346938776,
            "unit": "ns",
            "range": "± 5037.711647878451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75104.1836734694,
            "unit": "ns",
            "range": "± 14251.252939923172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75732.40909090909,
            "unit": "ns",
            "range": "± 20604.914499518498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76040.79166666667,
            "unit": "ns",
            "range": "± 14841.82050893011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6231.59375,
            "unit": "ns",
            "range": "± 1766.1548813177828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20010.56842105263,
            "unit": "ns",
            "range": "± 6229.551077799031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1205132.9892473118,
            "unit": "ns",
            "range": "± 148141.01499170184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2391978.3723404254,
            "unit": "ns",
            "range": "± 142937.61693229884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1843703.5054945054,
            "unit": "ns",
            "range": "± 102000.09595783871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9931347.808510639,
            "unit": "ns",
            "range": "± 2476480.823031287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3074103.769230769,
            "unit": "ns",
            "range": "± 158520.2051156684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3217004.9736842103,
            "unit": "ns",
            "range": "± 161931.25933320998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3696880.1785714286,
            "unit": "ns",
            "range": "± 159020.02594357356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3634385.5,
            "unit": "ns",
            "range": "± 174811.53103658542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11808842.510869564,
            "unit": "ns",
            "range": "± 1432670.777098635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4544452.819673295,
            "unit": "ns",
            "range": "± 190392.40217832744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1376119.4142127405,
            "unit": "ns",
            "range": "± 11363.253172900757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 882059.8518880209,
            "unit": "ns",
            "range": "± 5169.012246646251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968420.8530273438,
            "unit": "ns",
            "range": "± 45738.678577962535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625866.4512469952,
            "unit": "ns",
            "range": "± 3604.5629751947044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556677.3395353619,
            "unit": "ns",
            "range": "± 11729.82658551817"
          }
        ]
      }
    ]
  }
}