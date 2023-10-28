window.BENCHMARK_DATA = {
  "lastUpdate": 1698491266868,
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
          "id": "d513aa040397dea6f1673fd73b03d7ceec5b4e04",
          "message": "Fixed trie key conversion",
          "timestamp": "2023-10-28T19:52:12+09:00",
          "tree_id": "07ce30e41caa5c9406c7e657fa5b57405dd93423",
          "url": "https://github.com/greymistcube/libplanet/commit/d513aa040397dea6f1673fd73b03d7ceec5b4e04"
        },
        "date": 1698491250493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7695658.643835616,
            "unit": "ns",
            "range": "± 364342.31190969946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18570754,
            "unit": "ns",
            "range": "± 255893.3473389015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47739273.89655172,
            "unit": "ns",
            "range": "± 2069822.9797771438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94379687.41666667,
            "unit": "ns",
            "range": "± 4978325.200628609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202998259.0892857,
            "unit": "ns",
            "range": "± 8665426.879354615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37102.6404494382,
            "unit": "ns",
            "range": "± 4330.683830232376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226396.60824742267,
            "unit": "ns",
            "range": "± 19700.864971787352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226830.58163265305,
            "unit": "ns",
            "range": "± 25459.447627924703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200332.62886597938,
            "unit": "ns",
            "range": "± 23272.04841933039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3674129.5,
            "unit": "ns",
            "range": "± 93727.20526126315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3426888.74,
            "unit": "ns",
            "range": "± 90174.37665909683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12799.445054945056,
            "unit": "ns",
            "range": "± 1136.181111957825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59237.71264367816,
            "unit": "ns",
            "range": "± 5461.416450795921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53194.45054945055,
            "unit": "ns",
            "range": "± 4697.4125129662525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57694.60638297872,
            "unit": "ns",
            "range": "± 9752.923602990299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3289.769230769231,
            "unit": "ns",
            "range": "± 487.49568834385207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11970.684782608696,
            "unit": "ns",
            "range": "± 984.275556982687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1108540.64,
            "unit": "ns",
            "range": "± 108422.83622028575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2282344.6836734693,
            "unit": "ns",
            "range": "± 138104.16426907905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1575481.0333333334,
            "unit": "ns",
            "range": "± 127742.70908594686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6406041.779661017,
            "unit": "ns",
            "range": "± 281740.0380980401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2858668.5098039214,
            "unit": "ns",
            "range": "± 97791.51786517531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2990563.563380282,
            "unit": "ns",
            "range": "± 144644.09615967565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3608761.58,
            "unit": "ns",
            "range": "± 144053.48325702944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3653368.305263158,
            "unit": "ns",
            "range": "± 282172.1441195478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9971868.17977528,
            "unit": "ns",
            "range": "± 1045646.7448011603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4373315.731222588,
            "unit": "ns",
            "range": "± 190129.91735804314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1387402.5360604746,
            "unit": "ns",
            "range": "± 56178.33850504708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 868765.4919921875,
            "unit": "ns",
            "range": "± 33553.60085460838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2027943.1687127976,
            "unit": "ns",
            "range": "± 92448.90732267563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 663611.4151429521,
            "unit": "ns",
            "range": "± 25801.227649316155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583529.6746981534,
            "unit": "ns",
            "range": "± 24522.131503838613"
          }
        ]
      }
    ]
  }
}