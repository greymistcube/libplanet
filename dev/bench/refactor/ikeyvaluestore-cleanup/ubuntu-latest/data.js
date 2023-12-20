window.BENCHMARK_DATA = {
  "lastUpdate": 1693380240739,
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
          "id": "39e52aba4cbde119579b4cf5df3a381e960bc8f5",
          "message": "Removed unused Get()",
          "timestamp": "2023-08-30T16:02:47+09:00",
          "tree_id": "134dcb6fe4e18ac927f34502576fb3ad458102a9",
          "url": "https://github.com/greymistcube/libplanet/commit/39e52aba4cbde119579b4cf5df3a381e960bc8f5"
        },
        "date": 1693379808741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417751.90625,
            "unit": "ns",
            "range": "± 90983.2568508107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762232.7,
            "unit": "ns",
            "range": "± 95726.23884733177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1842182.440860215,
            "unit": "ns",
            "range": "± 104343.21951132384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4891481.116279069,
            "unit": "ns",
            "range": "± 180086.08122641282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291419.8703703704,
            "unit": "ns",
            "range": "± 12209.079394537674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281828.1111111111,
            "unit": "ns",
            "range": "± 9364.176271538487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253318.13461538462,
            "unit": "ns",
            "range": "± 10470.626984670575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4564143.533333333,
            "unit": "ns",
            "range": "± 35296.53218471563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4159153,
            "unit": "ns",
            "range": "± 39616.578484987105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23926.395833333332,
            "unit": "ns",
            "range": "± 2025.8932973365065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98948.92391304347,
            "unit": "ns",
            "range": "± 5732.259122065123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84856.63917525773,
            "unit": "ns",
            "range": "± 5458.913706776528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98547.46391752578,
            "unit": "ns",
            "range": "± 14868.539143146803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7056.3125,
            "unit": "ns",
            "range": "± 970.5070873409155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23904.559139784946,
            "unit": "ns",
            "range": "± 1869.2991331463943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50733,
            "unit": "ns",
            "range": "± 2482.548006129937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8396045.307692308,
            "unit": "ns",
            "range": "± 78568.7852928721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23039500.42857143,
            "unit": "ns",
            "range": "± 190529.98929089043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58622549.4,
            "unit": "ns",
            "range": "± 268355.1572444355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111943939.66666667,
            "unit": "ns",
            "range": "± 1040863.3049875794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230770923.92857143,
            "unit": "ns",
            "range": "± 1580457.7783859123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3721340.6428571427,
            "unit": "ns",
            "range": "± 48435.278628141634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3787263.090909091,
            "unit": "ns",
            "range": "± 112317.48140882934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4503257.461538462,
            "unit": "ns",
            "range": "± 46988.202314721835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4119903.6129032257,
            "unit": "ns",
            "range": "± 99466.36901609086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6473177.866666666,
            "unit": "ns",
            "range": "± 100941.76557151771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5065822.968149038,
            "unit": "ns",
            "range": "± 19474.760740655754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1585402.4309430805,
            "unit": "ns",
            "range": "± 2010.4814777060144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065047.506138393,
            "unit": "ns",
            "range": "± 1392.3247904690277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628939.549278846,
            "unit": "ns",
            "range": "± 2498.3643544827864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841815.2642578125,
            "unit": "ns",
            "range": "± 1129.553368605261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764581.3399088542,
            "unit": "ns",
            "range": "± 728.7741932968959"
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
          "id": "dc404976004174a02b1b7f4f50b6460bcd58eb49",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:04:43+09:00",
          "tree_id": "155e208c580ab382c2c9f1b2509ed1313ea8ad4f",
          "url": "https://github.com/greymistcube/libplanet/commit/dc404976004174a02b1b7f4f50b6460bcd58eb49"
        },
        "date": 1693380094482,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1563370.7604166667,
            "unit": "ns",
            "range": "± 100049.82890758353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3085045.7448979593,
            "unit": "ns",
            "range": "± 187609.02493757335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012350.5319148935,
            "unit": "ns",
            "range": "± 127497.61089996116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5633827.55,
            "unit": "ns",
            "range": "± 438110.3743833864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312434.31313131313,
            "unit": "ns",
            "range": "± 20556.864915050694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300792.0618556701,
            "unit": "ns",
            "range": "± 18408.810004097693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262818.36,
            "unit": "ns",
            "range": "± 18708.973435237014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5008264.297297297,
            "unit": "ns",
            "range": "± 168455.6904648593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4705865.361111111,
            "unit": "ns",
            "range": "± 156996.6233737261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22499.127659574468,
            "unit": "ns",
            "range": "± 1882.7928993405956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102069.52040816327,
            "unit": "ns",
            "range": "± 7323.308432429049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84121.38043478261,
            "unit": "ns",
            "range": "± 5304.86218159971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92240.46875,
            "unit": "ns",
            "range": "± 14231.448449382593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6350.091836734694,
            "unit": "ns",
            "range": "± 773.8224054590339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22304.43157894737,
            "unit": "ns",
            "range": "± 1489.2571163390928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57143.45054945055,
            "unit": "ns",
            "range": "± 3759.617377883423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9801857.266666668,
            "unit": "ns",
            "range": "± 162610.4904459324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25929407.35714286,
            "unit": "ns",
            "range": "± 334552.8307962521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63739931.13636363,
            "unit": "ns",
            "range": "± 1553986.7615771315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131187011.07142857,
            "unit": "ns",
            "range": "± 2132501.177813056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261631083.4,
            "unit": "ns",
            "range": "± 4020515.64119362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4003599.6756756757,
            "unit": "ns",
            "range": "± 199834.1980371569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3998013.9591836734,
            "unit": "ns",
            "range": "± 255308.81397030957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4947153.213114754,
            "unit": "ns",
            "range": "± 220551.1857203157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4633426.304347826,
            "unit": "ns",
            "range": "± 176597.71807609263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7370922.723404256,
            "unit": "ns",
            "range": "± 287119.3866770635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5686344.025520833,
            "unit": "ns",
            "range": "± 84681.5148725683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1761570.6959134615,
            "unit": "ns",
            "range": "± 19762.858711206423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1240345.4361979167,
            "unit": "ns",
            "range": "± 19313.21253114294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2951922.766183036,
            "unit": "ns",
            "range": "± 38004.546460879705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 927517.7904947917,
            "unit": "ns",
            "range": "± 9113.276221843747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881703.7682942708,
            "unit": "ns",
            "range": "± 9323.533804409562"
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
          "id": "bd669b61ec2394703aaa122b3a23b42507f3f0fb",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:09:56+09:00",
          "tree_id": "4e193552dc847b8fa221f085bdb64c18cba4df78",
          "url": "https://github.com/greymistcube/libplanet/commit/bd669b61ec2394703aaa122b3a23b42507f3f0fb"
        },
        "date": 1693380233019,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360132.412371134,
            "unit": "ns",
            "range": "± 126785.31245826812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2566456.272727273,
            "unit": "ns",
            "range": "± 79631.21094429334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1733007.585106383,
            "unit": "ns",
            "range": "± 108141.65712544248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4812775.693877551,
            "unit": "ns",
            "range": "± 280169.0970352266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281795.8923076923,
            "unit": "ns",
            "range": "± 13108.75741170177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273014.53571428574,
            "unit": "ns",
            "range": "± 7741.753775288631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220700.125,
            "unit": "ns",
            "range": "± 4238.7120823036175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4557395.142857143,
            "unit": "ns",
            "range": "± 40097.88613814016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4130093.6,
            "unit": "ns",
            "range": "± 35689.45350780415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30573.979166666668,
            "unit": "ns",
            "range": "± 2433.840806882326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90898.9213483146,
            "unit": "ns",
            "range": "± 5118.965960534143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70950.06666666667,
            "unit": "ns",
            "range": "± 1309.2582669297183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88921.15789473684,
            "unit": "ns",
            "range": "± 13109.951589014105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5352.587628865979,
            "unit": "ns",
            "range": "± 807.1293751181989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19925.78350515464,
            "unit": "ns",
            "range": "± 2066.7061062775924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50208.739130434784,
            "unit": "ns",
            "range": "± 3670.430069928073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7754979.533333333,
            "unit": "ns",
            "range": "± 77005.99044217893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19955551.785714287,
            "unit": "ns",
            "range": "± 291554.38601694844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51672274.8,
            "unit": "ns",
            "range": "± 683953.3918997488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103310869.13333334,
            "unit": "ns",
            "range": "± 1497693.8654439396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204972229.2857143,
            "unit": "ns",
            "range": "± 2664869.902467933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335738.16,
            "unit": "ns",
            "range": "± 87096.14651716802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3437295.285714286,
            "unit": "ns",
            "range": "± 96817.83282894283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4255107.636363637,
            "unit": "ns",
            "range": "± 103735.91785763613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3719664.1228070175,
            "unit": "ns",
            "range": "± 161638.01483695314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5945696.75,
            "unit": "ns",
            "range": "± 84734.1347897539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5353467.919270833,
            "unit": "ns",
            "range": "± 10573.006674660493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1612510.488671875,
            "unit": "ns",
            "range": "± 3606.161205796678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1104864.9337332589,
            "unit": "ns",
            "range": "± 1254.8037123740148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583377.3337053573,
            "unit": "ns",
            "range": "± 6284.182602606893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823589.4638671875,
            "unit": "ns",
            "range": "± 292.83734438841776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736978.248046875,
            "unit": "ns",
            "range": "± 405.0660686028671"
          }
        ]
      }
    ]
  }
}