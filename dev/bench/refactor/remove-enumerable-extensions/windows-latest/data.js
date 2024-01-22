window.BENCHMARK_DATA = {
  "lastUpdate": 1705903380538,
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
          "id": "2492963ab81141a40d92fca3e8a1b7cf63e3d07e",
          "message": "Removed EnumerableExtensions",
          "timestamp": "2024-01-22T14:45:02+09:00",
          "tree_id": "5f0010686140c2cef7ccc8649fdd5c2f99f01253",
          "url": "https://github.com/greymistcube/libplanet/commit/2492963ab81141a40d92fca3e8a1b7cf63e3d07e"
        },
        "date": 1705903084550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043298.9795918367,
            "unit": "ns",
            "range": "± 137882.8731205546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1846504.8780487804,
            "unit": "ns",
            "range": "± 65448.60942456881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1690729.292929293,
            "unit": "ns",
            "range": "± 167549.4622385692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11068616.091954023,
            "unit": "ns",
            "range": "± 905905.6890275369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45000,
            "unit": "ns",
            "range": "± 5516.069368363286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5440053.333333333,
            "unit": "ns",
            "range": "± 65259.45871964425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14163414.285714285,
            "unit": "ns",
            "range": "± 164311.97277010704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35553150,
            "unit": "ns",
            "range": "± 301350.2760014562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70599264.28571428,
            "unit": "ns",
            "range": "± 408195.38611032616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142149153.33333334,
            "unit": "ns",
            "range": "± 1322134.0767684574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3515729.659598214,
            "unit": "ns",
            "range": "± 49988.48079487579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079995.928485577,
            "unit": "ns",
            "range": "± 1362.2555547772472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761559.8563058035,
            "unit": "ns",
            "range": "± 1493.884685014438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974944.6364182692,
            "unit": "ns",
            "range": "± 17443.464471990355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617827.7204241072,
            "unit": "ns",
            "range": "± 1337.7383234968916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561878.8932291666,
            "unit": "ns",
            "range": "± 1065.1913837339432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398737.037037037,
            "unit": "ns",
            "range": "± 66159.20279114699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2441833.3333333335,
            "unit": "ns",
            "range": "± 33071.452226670546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2969820.512820513,
            "unit": "ns",
            "range": "± 103153.78192798306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3221968.1818181816,
            "unit": "ns",
            "range": "± 76081.29352940987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12997912.903225806,
            "unit": "ns",
            "range": "± 1852918.9546922406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205324.39024390245,
            "unit": "ns",
            "range": "± 10837.36746512845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198174.44444444444,
            "unit": "ns",
            "range": "± 11015.54887890842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181254.83870967742,
            "unit": "ns",
            "range": "± 11164.68146442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3010540,
            "unit": "ns",
            "range": "± 36843.85585529444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2656750,
            "unit": "ns",
            "range": "± 25941.672741274502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18634.736842105263,
            "unit": "ns",
            "range": "± 2828.380802142118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79920.65217391304,
            "unit": "ns",
            "range": "± 8954.212441589496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72845,
            "unit": "ns",
            "range": "± 6883.333333333333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92058.16326530612,
            "unit": "ns",
            "range": "± 18066.919838974074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5833.673469387755,
            "unit": "ns",
            "range": "± 873.1615593768464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19824.175824175825,
            "unit": "ns",
            "range": "± 2868.8883119633892"
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
          "id": "ff138feed4ca3f49617346cded8736cb6080f8bb",
          "message": "Changelog",
          "timestamp": "2024-01-22T14:48:11+09:00",
          "tree_id": "32d84acaee29aa0e45ba746d842baef0da246626",
          "url": "https://github.com/greymistcube/libplanet/commit/ff138feed4ca3f49617346cded8736cb6080f8bb"
        },
        "date": 1705903354235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1075128,
            "unit": "ns",
            "range": "± 133601.7994798065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895600,
            "unit": "ns",
            "range": "± 93759.33091342608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1724053.0612244897,
            "unit": "ns",
            "range": "± 191274.29497548108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11350513.483146068,
            "unit": "ns",
            "range": "± 966943.5078204614"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36327.94117647059,
            "unit": "ns",
            "range": "± 1747.2234338605442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5137507.142857143,
            "unit": "ns",
            "range": "± 61176.68565827891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13959973.333333334,
            "unit": "ns",
            "range": "± 186612.87838986993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33375580,
            "unit": "ns",
            "range": "± 321241.9542071943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69301513.33333333,
            "unit": "ns",
            "range": "± 858251.3350384246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137267403.33333334,
            "unit": "ns",
            "range": "± 2011937.256855643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3348045.0911458335,
            "unit": "ns",
            "range": "± 15138.853085028388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073462.1651785714,
            "unit": "ns",
            "range": "± 3747.0599228587307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743272.4308894231,
            "unit": "ns",
            "range": "± 2666.042850381527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964133.046875,
            "unit": "ns",
            "range": "± 12819.112957038411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631272.5130208334,
            "unit": "ns",
            "range": "± 3105.5741706477847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581070.6430288461,
            "unit": "ns",
            "range": "± 808.0416253364133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2198670.212765957,
            "unit": "ns",
            "range": "± 85727.49271077212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2387615.3846153845,
            "unit": "ns",
            "range": "± 98510.61331218728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2946153.703703704,
            "unit": "ns",
            "range": "± 80839.99620085955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2864487.654320988,
            "unit": "ns",
            "range": "± 141350.3346146694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12603696.629213484,
            "unit": "ns",
            "range": "± 1670079.5019487601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184419.51219512196,
            "unit": "ns",
            "range": "± 9432.076071489668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169064.47368421053,
            "unit": "ns",
            "range": "± 8584.213478975902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145908.16326530612,
            "unit": "ns",
            "range": "± 5830.660223289964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2869414.285714286,
            "unit": "ns",
            "range": "± 56046.65276101942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2560364.705882353,
            "unit": "ns",
            "range": "± 51991.00813093152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12579.79797979798,
            "unit": "ns",
            "range": "± 2330.147573411055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59481.25,
            "unit": "ns",
            "range": "± 8775.208049715373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46290.625,
            "unit": "ns",
            "range": "± 3789.4056783006013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64918.75,
            "unit": "ns",
            "range": "± 16199.560179214743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3603.125,
            "unit": "ns",
            "range": "± 865.7765756518066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12997.872340425532,
            "unit": "ns",
            "range": "± 2460.6135576928755"
          }
        ]
      }
    ]
  }
}