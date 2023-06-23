window.BENCHMARK_DATA = {
  "lastUpdate": 1687509117964,
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
          "id": "be698740ac9a4dd6770738b1fb5b5374c09b4b9d",
          "message": "Returned data structures changed for more consistency",
          "timestamp": "2023-06-23T17:14:53+09:00",
          "tree_id": "909236209132c6afc22bab5b18d495022603ce44",
          "url": "https://github.com/greymistcube/libplanet/commit/be698740ac9a4dd6770738b1fb5b5374c09b4b9d"
        },
        "date": 1687509108232,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3979202.0405405406,
            "unit": "ns",
            "range": "± 198874.80085904396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4294028.05,
            "unit": "ns",
            "range": "± 189843.74893512612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5403208.567567567,
            "unit": "ns",
            "range": "± 178278.17756163175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5206603.5,
            "unit": "ns",
            "range": "± 289007.9054976532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8317758.96491228,
            "unit": "ns",
            "range": "± 360181.64245984296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10103961.703703703,
            "unit": "ns",
            "range": "± 281158.15436030563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26555314.466666665,
            "unit": "ns",
            "range": "± 363558.3735342072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65000445.93333333,
            "unit": "ns",
            "range": "± 1060513.8005203938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135940986.4,
            "unit": "ns",
            "range": "± 2255273.27124864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261320944.85714287,
            "unit": "ns",
            "range": "± 3374184.072547747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330090.71875,
            "unit": "ns",
            "range": "± 15304.906014416392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328220.84210526315,
            "unit": "ns",
            "range": "± 14152.757518778393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297718.4054054054,
            "unit": "ns",
            "range": "± 14912.653411737312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5438736.733333333,
            "unit": "ns",
            "range": "± 88019.05607997352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4820761.4,
            "unit": "ns",
            "range": "± 70202.36485821339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22193.69230769231,
            "unit": "ns",
            "range": "± 2171.9310542173075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105070.96875,
            "unit": "ns",
            "range": "± 7361.369628645167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92755.52747252748,
            "unit": "ns",
            "range": "± 5220.481621759219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118327.36082474227,
            "unit": "ns",
            "range": "± 12233.596011756557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7194.768421052631,
            "unit": "ns",
            "range": "± 821.9618649930177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24966.288659793816,
            "unit": "ns",
            "range": "± 1767.8523750512163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55397.25263157895,
            "unit": "ns",
            "range": "± 4626.606717966459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7060922.603860294,
            "unit": "ns",
            "range": "± 141483.76120185258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2252812.7252604165,
            "unit": "ns",
            "range": "± 30101.458455029915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1565619.02265625,
            "unit": "ns",
            "range": "± 20727.85255839188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2986957.9265625,
            "unit": "ns",
            "range": "± 49052.169833336404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965566.8814453125,
            "unit": "ns",
            "range": "± 8943.784548959668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909632.0641276041,
            "unit": "ns",
            "range": "± 4970.686972840006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774943.9764705882,
            "unit": "ns",
            "range": "± 95964.86762202991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3247134.3214285714,
            "unit": "ns",
            "range": "± 91191.03319631473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2802246.988505747,
            "unit": "ns",
            "range": "± 152644.01373796072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6942272.071428572,
            "unit": "ns",
            "range": "± 370929.81613522966"
          }
        ]
      }
    ]
  }
}