window.BENCHMARK_DATA = {
  "lastUpdate": 1693479928518,
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
          "id": "b541ef00cfb97a92d9e53daa5e24e8f466f9331b",
          "message": "Refactor Nibbles",
          "timestamp": "2023-08-31T19:51:07+09:00",
          "tree_id": "1f4eeee57e62a9fd70bd85b53ac841c49eb803da",
          "url": "https://github.com/greymistcube/libplanet/commit/b541ef00cfb97a92d9e53daa5e24e8f466f9331b"
        },
        "date": 1693479920928,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1271095.8181818181,
            "unit": "ns",
            "range": "± 99461.36040277492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2440030.42,
            "unit": "ns",
            "range": "± 97435.8096875736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604859.7951807228,
            "unit": "ns",
            "range": "± 85623.23581672108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4326873.76,
            "unit": "ns",
            "range": "± 108932.00261259315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264031.27777777775,
            "unit": "ns",
            "range": "± 8732.171399440484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254092.67346938775,
            "unit": "ns",
            "range": "± 10042.31693341514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226900.52631578947,
            "unit": "ns",
            "range": "± 4911.14607996071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4131905.5714285714,
            "unit": "ns",
            "range": "± 36957.952232054384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867479.2,
            "unit": "ns",
            "range": "± 35091.21468239187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17413.83908045977,
            "unit": "ns",
            "range": "± 974.32828231083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81978.02352941176,
            "unit": "ns",
            "range": "± 4342.606716556067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66414.28571428571,
            "unit": "ns",
            "range": "± 1156.8239962249047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67427.24719101124,
            "unit": "ns",
            "range": "± 7561.290887986501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4362.787234042553,
            "unit": "ns",
            "range": "± 457.68035688959793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16621.105263157893,
            "unit": "ns",
            "range": "± 1055.3505465179967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46178.849315068495,
            "unit": "ns",
            "range": "± 2310.5905129739795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7712013.6,
            "unit": "ns",
            "range": "± 30755.31511276895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19377054.4,
            "unit": "ns",
            "range": "± 94060.66090925428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50707510.86666667,
            "unit": "ns",
            "range": "± 240679.69815707547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101429890.06666666,
            "unit": "ns",
            "range": "± 623587.552050743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202553846.4,
            "unit": "ns",
            "range": "± 1078961.2497366425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3163888.6,
            "unit": "ns",
            "range": "± 47613.43865188843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3345902.8125,
            "unit": "ns",
            "range": "± 49407.82245113116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4101407.6,
            "unit": "ns",
            "range": "± 38641.37570347545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3685979.64,
            "unit": "ns",
            "range": "± 95134.10853626579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5978315.894736842,
            "unit": "ns",
            "range": "± 125800.87696386379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4990020.198317308,
            "unit": "ns",
            "range": "± 19689.851688650484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564994.7804129464,
            "unit": "ns",
            "range": "± 1308.8260154496609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076396.28515625,
            "unit": "ns",
            "range": "± 805.63192241247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543263.339285714,
            "unit": "ns",
            "range": "± 2532.6029538525095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795202.2486979166,
            "unit": "ns",
            "range": "± 682.7417666346593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750066.4916015625,
            "unit": "ns",
            "range": "± 703.1380113333731"
          }
        ]
      }
    ]
  }
}