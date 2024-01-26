window.BENCHMARK_DATA = {
  "lastUpdate": 1706249346737,
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
          "id": "b9b3fa41f1a1b9b093d7fcb6025c36ddfb3ad1da",
          "message": "Prepare 3.9.7",
          "timestamp": "2024-01-26T14:58:26+09:00",
          "tree_id": "f8eca58fb710468ba83443f054ca5b1b04049647",
          "url": "https://github.com/greymistcube/libplanet/commit/b9b3fa41f1a1b9b093d7fcb6025c36ddfb3ad1da"
        },
        "date": 1706249329911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979471.7171717172,
            "unit": "ns",
            "range": "± 119668.01871061155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1710361.971830986,
            "unit": "ns",
            "range": "± 80926.6799837927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1333973.9583333333,
            "unit": "ns",
            "range": "± 110560.27005526435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5431050,
            "unit": "ns",
            "range": "± 276139.79237576993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35633.92857142857,
            "unit": "ns",
            "range": "± 1477.501181136496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5157842.857142857,
            "unit": "ns",
            "range": "± 45699.43130913143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13722078.57142857,
            "unit": "ns",
            "range": "± 123790.51895204892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34182240,
            "unit": "ns",
            "range": "± 432475.4870014517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65953013.333333336,
            "unit": "ns",
            "range": "± 796373.628991054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134153586.66666667,
            "unit": "ns",
            "range": "± 1018392.3008256457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3330889.5052083335,
            "unit": "ns",
            "range": "± 5830.765058961393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1098092.0442708333,
            "unit": "ns",
            "range": "± 3170.958243572988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743105.3013392857,
            "unit": "ns",
            "range": "± 1021.8101087302653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964531.40625,
            "unit": "ns",
            "range": "± 3529.591178855945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621073.2271634615,
            "unit": "ns",
            "range": "± 616.6251458711731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564482.177734375,
            "unit": "ns",
            "range": "± 1084.7424223980734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182280.2325581396,
            "unit": "ns",
            "range": "± 80419.65684512391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2327139.534883721,
            "unit": "ns",
            "range": "± 78111.55984059528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2879021.052631579,
            "unit": "ns",
            "range": "± 62583.27411401875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2712295.4545454546,
            "unit": "ns",
            "range": "± 62699.19477931137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6318253.658536585,
            "unit": "ns",
            "range": "± 333586.87734911917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174262.71186440677,
            "unit": "ns",
            "range": "± 7053.43883616683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164089.47368421053,
            "unit": "ns",
            "range": "± 6159.739216723798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142186.11111111112,
            "unit": "ns",
            "range": "± 4687.134536017732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2773240,
            "unit": "ns",
            "range": "± 41997.292429733745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2476700,
            "unit": "ns",
            "range": "± 19201.32571180722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10773.626373626374,
            "unit": "ns",
            "range": "± 853.7284456150321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55903.260869565216,
            "unit": "ns",
            "range": "± 5638.806885861087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44703.370786516854,
            "unit": "ns",
            "range": "± 2311.849389469699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55913.793103448275,
            "unit": "ns",
            "range": "± 9173.130281752157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2564.285714285714,
            "unit": "ns",
            "range": "± 587.3670062235366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11300,
            "unit": "ns",
            "range": "± 1578.3104351765637"
          }
        ]
      }
    ]
  }
}