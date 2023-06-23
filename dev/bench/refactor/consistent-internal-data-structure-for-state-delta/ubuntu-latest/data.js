window.BENCHMARK_DATA = {
  "lastUpdate": 1687509883269,
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
          "id": "446efe09eb83fd231f5a7a3139388e187a5a2ffa",
          "message": "Changelog",
          "timestamp": "2023-06-23T17:31:45+09:00",
          "tree_id": "e17e57d2b2c6e0631cc02161e05f800085eddfe1",
          "url": "https://github.com/greymistcube/libplanet/commit/446efe09eb83fd231f5a7a3139388e187a5a2ffa"
        },
        "date": 1687509874861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371271.806451613,
            "unit": "ns",
            "range": "± 93186.35201945949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461832.6,
            "unit": "ns",
            "range": "± 61843.74555654887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4387951.521739131,
            "unit": "ns",
            "range": "± 99123.47060467272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4360957.733333333,
            "unit": "ns",
            "range": "± 129199.10506253871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6857546.785714285,
            "unit": "ns",
            "range": "± 171741.44974444216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7991749.571428572,
            "unit": "ns",
            "range": "± 52765.11680838201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19985667.866666667,
            "unit": "ns",
            "range": "± 75548.37474083049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51574273.86666667,
            "unit": "ns",
            "range": "± 312286.1065773927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102083310.28571428,
            "unit": "ns",
            "range": "± 356204.84584325884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205091361,
            "unit": "ns",
            "range": "± 307987.90250917326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281793.28571428574,
            "unit": "ns",
            "range": "± 8109.832190080168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268003.10204081633,
            "unit": "ns",
            "range": "± 9986.292872910217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240470.7142857143,
            "unit": "ns",
            "range": "± 9989.614435574007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4239235.071428572,
            "unit": "ns",
            "range": "± 24943.219058383496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002558.933333333,
            "unit": "ns",
            "range": "± 34843.131129733585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18955.083333333332,
            "unit": "ns",
            "range": "± 1988.8979528036793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89299.68965517242,
            "unit": "ns",
            "range": "± 3915.467780110582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73759.84444444445,
            "unit": "ns",
            "range": "± 2804.2210306765924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90696.2808988764,
            "unit": "ns",
            "range": "± 8669.454475849998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4703.136842105263,
            "unit": "ns",
            "range": "± 539.2061463940024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18646.172043010753,
            "unit": "ns",
            "range": "± 1166.980231787936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46580.905263157896,
            "unit": "ns",
            "range": "± 2993.85536708348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5888241.748325893,
            "unit": "ns",
            "range": "± 15635.878192349368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962203.8091947115,
            "unit": "ns",
            "range": "± 1501.4276215854075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344613.7389322917,
            "unit": "ns",
            "range": "± 386.70066132182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2527313.707589286,
            "unit": "ns",
            "range": "± 1596.2260784263128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802165.6089564732,
            "unit": "ns",
            "range": "± 487.6000633707537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758208.9457310268,
            "unit": "ns",
            "range": "± 1389.315422003931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412703.0625,
            "unit": "ns",
            "range": "± 117265.5665527755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2703443.09375,
            "unit": "ns",
            "range": "± 83581.27638002131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2249937.58,
            "unit": "ns",
            "range": "± 159127.1198566807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5309420.133333334,
            "unit": "ns",
            "range": "± 91557.52822434856"
          }
        ]
      }
    ]
  }
}