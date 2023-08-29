window.BENCHMARK_DATA = {
  "lastUpdate": 1693298573542,
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
          "id": "5d14d199aa77b76bae7c611bf121ea9de702df23",
          "message": "Remove Set() from IRecordableTrie",
          "timestamp": "2023-08-29T17:23:26+09:00",
          "tree_id": "6eb0630752eb3a2d5f6adff105778ceb565a0fc7",
          "url": "https://github.com/greymistcube/libplanet/commit/5d14d199aa77b76bae7c611bf121ea9de702df23"
        },
        "date": 1693298391810,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1319989,
            "unit": "ns",
            "range": "± 104324.18673722714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2494732,
            "unit": "ns",
            "range": "± 123750.21393374902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1739728,
            "unit": "ns",
            "range": "± 120668.2697700308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4413034.545454546,
            "unit": "ns",
            "range": "± 185748.03644660968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49179.51807228916,
            "unit": "ns",
            "range": "± 2619.0558267150195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7519175,
            "unit": "ns",
            "range": "± 144216.83443112086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20454415.384615384,
            "unit": "ns",
            "range": "± 280205.3736284449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51969533.333333336,
            "unit": "ns",
            "range": "± 689444.3639282149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105070760,
            "unit": "ns",
            "range": "± 1443817.7451267377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209681186.66666666,
            "unit": "ns",
            "range": "± 2455452.7120753303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4537611.041666667,
            "unit": "ns",
            "range": "± 15373.290718910323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1432420.5729166667,
            "unit": "ns",
            "range": "± 4149.519448791429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070845.5729166667,
            "unit": "ns",
            "range": "± 3020.4054191192545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690477.9947916665,
            "unit": "ns",
            "range": "± 7982.9645734780615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842973.8839285715,
            "unit": "ns",
            "range": "± 1883.1070376188773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771956.1104910715,
            "unit": "ns",
            "range": "± 1774.1762850470022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3318981.25,
            "unit": "ns",
            "range": "± 61622.76872228316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3416657.1428571427,
            "unit": "ns",
            "range": "± 124950.81011236059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4088291.304347826,
            "unit": "ns",
            "range": "± 100338.25026580422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821613.725490196,
            "unit": "ns",
            "range": "± 154589.16005931055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6073263.414634147,
            "unit": "ns",
            "range": "± 218063.88256208037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261700,
            "unit": "ns",
            "range": "± 4898.833680435725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250996.42857142858,
            "unit": "ns",
            "range": "± 10124.245682980569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215268.8524590164,
            "unit": "ns",
            "range": "± 9524.801677438514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4103758.3333333335,
            "unit": "ns",
            "range": "± 58725.655820221815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3733968.75,
            "unit": "ns",
            "range": "± 70276.3328463668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21080.434782608696,
            "unit": "ns",
            "range": "± 1799.7703840380284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86721.50537634408,
            "unit": "ns",
            "range": "± 5858.120515154965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74480,
            "unit": "ns",
            "range": "± 5196.594629628219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80190.58823529411,
            "unit": "ns",
            "range": "± 9214.373134885931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5683.505154639175,
            "unit": "ns",
            "range": "± 772.2640433021079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19938.947368421053,
            "unit": "ns",
            "range": "± 1956.293430588098"
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
          "id": "fefd69f5a1ecaf4665b7cebac86d4bae83bf4ccc",
          "message": "Update changelog",
          "timestamp": "2023-08-29T17:25:43+09:00",
          "tree_id": "141691f335aa09b4e2357713cdc829d1cecafe60",
          "url": "https://github.com/greymistcube/libplanet/commit/fefd69f5a1ecaf4665b7cebac86d4bae83bf4ccc"
        },
        "date": 1693298547412,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322246,
            "unit": "ns",
            "range": "± 129028.12426957641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469660,
            "unit": "ns",
            "range": "± 127636.59905262878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1760571.7171717172,
            "unit": "ns",
            "range": "± 134449.13008150813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4497963.636363637,
            "unit": "ns",
            "range": "± 203958.7361256145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49548.958333333336,
            "unit": "ns",
            "range": "± 2988.3632130285728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7356516.666666667,
            "unit": "ns",
            "range": "± 75550.64211381346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20668953.333333332,
            "unit": "ns",
            "range": "± 372686.2408182493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52430160,
            "unit": "ns",
            "range": "± 820085.9308633455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102080635.71428572,
            "unit": "ns",
            "range": "± 2337520.9426410953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201562046.66666666,
            "unit": "ns",
            "range": "± 3715805.140951798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4534974.322916667,
            "unit": "ns",
            "range": "± 17364.94428467878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1437403.8932291667,
            "unit": "ns",
            "range": "± 6027.785920786734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061338.828125,
            "unit": "ns",
            "range": "± 3484.076323294036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651653.3854166665,
            "unit": "ns",
            "range": "± 11920.154508306787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841922.0377604166,
            "unit": "ns",
            "range": "± 3063.7041251897344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776043.9453125,
            "unit": "ns",
            "range": "± 2919.4893769553073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3121023.529411765,
            "unit": "ns",
            "range": "± 100627.6908055767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3676105.263157895,
            "unit": "ns",
            "range": "± 125195.91554379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4042682.8571428573,
            "unit": "ns",
            "range": "± 131503.50584839997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3757470.588235294,
            "unit": "ns",
            "range": "± 144800.51145506033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6052725,
            "unit": "ns",
            "range": "± 156374.9569909231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256240.9090909091,
            "unit": "ns",
            "range": "± 8200.406064302568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251840,
            "unit": "ns",
            "range": "± 6377.362983294087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227077.64705882352,
            "unit": "ns",
            "range": "± 12153.839061036173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4031407.6923076925,
            "unit": "ns",
            "range": "± 61923.776552824216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3893561.111111111,
            "unit": "ns",
            "range": "± 79576.6825062016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19750.526315789473,
            "unit": "ns",
            "range": "± 1482.2261638818338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84720.61855670103,
            "unit": "ns",
            "range": "± 6137.621997163783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69717.85714285714,
            "unit": "ns",
            "range": "± 2966.976247284102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80868.75,
            "unit": "ns",
            "range": "± 11878.102918705848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4649.473684210527,
            "unit": "ns",
            "range": "± 693.8749786541085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18779.381443298967,
            "unit": "ns",
            "range": "± 1913.5448205016594"
          }
        ]
      }
    ]
  }
}