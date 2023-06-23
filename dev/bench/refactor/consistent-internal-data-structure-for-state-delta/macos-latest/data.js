window.BENCHMARK_DATA = {
  "lastUpdate": 1687510899644,
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
        "date": 1687509028989,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8752418.846153846,
            "unit": "ns",
            "range": "± 72820.22279770704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21980768.066666666,
            "unit": "ns",
            "range": "± 242574.95325641593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54126507.36666667,
            "unit": "ns",
            "range": "± 678636.8775657006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103768066.11764705,
            "unit": "ns",
            "range": "± 2050174.0394248508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223150448.85714287,
            "unit": "ns",
            "range": "± 3007916.724447992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82875.41666666667,
            "unit": "ns",
            "range": "± 5949.490383601053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320406.13157894736,
            "unit": "ns",
            "range": "± 26675.948067481917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343593.71428571426,
            "unit": "ns",
            "range": "± 35138.42731834123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305726.45263157896,
            "unit": "ns",
            "range": "± 21966.20835669053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4211080.418918919,
            "unit": "ns",
            "range": "± 141873.1369188251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867811.111111111,
            "unit": "ns",
            "range": "± 87882.74325850909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22523.350515463917,
            "unit": "ns",
            "range": "± 5193.288365046348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96009.10752688172,
            "unit": "ns",
            "range": "± 12179.629053448904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99543.09183673469,
            "unit": "ns",
            "range": "± 19499.851839689178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106417.3125,
            "unit": "ns",
            "range": "± 19635.571889765724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5820.893617021276,
            "unit": "ns",
            "range": "± 1639.692781794351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17405.08791208791,
            "unit": "ns",
            "range": "± 3250.497177863211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710060.0151515151,
            "unit": "ns",
            "range": "± 193244.3639202608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3118155.3538461537,
            "unit": "ns",
            "range": "± 144949.78302409497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619143.6041666665,
            "unit": "ns",
            "range": "± 170856.13435331333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6739405,
            "unit": "ns",
            "range": "± 263243.3188249229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3454697.8378378376,
            "unit": "ns",
            "range": "± 109677.96806041706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3568115.0392156863,
            "unit": "ns",
            "range": "± 144703.95513101373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653292.239130435,
            "unit": "ns",
            "range": "± 172868.58732834345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4526249.054054054,
            "unit": "ns",
            "range": "± 226954.8782153031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7485408.8,
            "unit": "ns",
            "range": "± 229921.7179315092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6155187.0953125,
            "unit": "ns",
            "range": "± 68961.7475768746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974870.45,
            "unit": "ns",
            "range": "± 18021.98890582639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267487.7920572916,
            "unit": "ns",
            "range": "± 6742.873896918901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2693589.4877604167,
            "unit": "ns",
            "range": "± 47584.60299434394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837718.0934895833,
            "unit": "ns",
            "range": "± 7004.380031689226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715422.977734375,
            "unit": "ns",
            "range": "± 2069.942976167812"
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
        "date": 1687510478703,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9023796.029411765,
            "unit": "ns",
            "range": "± 181174.2096664553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22054355.89230769,
            "unit": "ns",
            "range": "± 950016.7298152918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61069122.744444445,
            "unit": "ns",
            "range": "± 12991952.443501925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 155043229.26262626,
            "unit": "ns",
            "range": "± 50107867.151512116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294131873.9893617,
            "unit": "ns",
            "range": "± 75044951.26705709"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74533.77777777778,
            "unit": "ns",
            "range": "± 9887.418396120904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365525.8850574713,
            "unit": "ns",
            "range": "± 38814.37849483259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358679.71764705883,
            "unit": "ns",
            "range": "± 42467.13024423987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339762.27906976745,
            "unit": "ns",
            "range": "± 25200.131075009795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4427534.252873563,
            "unit": "ns",
            "range": "± 255202.37724389503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3823901.3387096776,
            "unit": "ns",
            "range": "± 174040.19584352418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23590.31052631579,
            "unit": "ns",
            "range": "± 4995.400994052166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125325.46703296703,
            "unit": "ns",
            "range": "± 13218.941573406068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128756.7,
            "unit": "ns",
            "range": "± 10758.378023191399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131861.72222222222,
            "unit": "ns",
            "range": "± 16306.732239713232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8876.21875,
            "unit": "ns",
            "range": "± 1322.787087161243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25729.302083333332,
            "unit": "ns",
            "range": "± 3741.9338839690395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1808017.9777777777,
            "unit": "ns",
            "range": "± 334923.8984036666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3298560.120689655,
            "unit": "ns",
            "range": "± 361430.3365394621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2779612.2386363638,
            "unit": "ns",
            "range": "± 435926.077697655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8083733.595505618,
            "unit": "ns",
            "range": "± 2093059.5677590112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3730061.7352941176,
            "unit": "ns",
            "range": "± 448600.1302385181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3738887.9777777777,
            "unit": "ns",
            "range": "± 340698.503590042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4868359.322222223,
            "unit": "ns",
            "range": "± 634550.0312141009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5209086.340909091,
            "unit": "ns",
            "range": "± 1105834.2674187904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11279606.760869564,
            "unit": "ns",
            "range": "± 4721524.425943019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8361972.08030914,
            "unit": "ns",
            "range": "± 1084152.0126892566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2106439.219938859,
            "unit": "ns",
            "range": "± 79392.4936677191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415390.381869612,
            "unit": "ns",
            "range": "± 40631.03791409519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3150323.412006579,
            "unit": "ns",
            "range": "± 201114.53105431853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875775.8211862665,
            "unit": "ns",
            "range": "± 37980.47974819363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749499.1364215353,
            "unit": "ns",
            "range": "± 28384.810636319842"
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
          "id": "d6e603608707fb7410eb4561889d7e1f0b4408e2",
          "message": "Docs",
          "timestamp": "2023-06-23T17:38:35+09:00",
          "tree_id": "9b2ff0a847eeb7be8c7e7c92d9e9ea45ffb83f01",
          "url": "https://github.com/greymistcube/libplanet/commit/d6e603608707fb7410eb4561889d7e1f0b4408e2"
        },
        "date": 1687510884998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8814504.793103449,
            "unit": "ns",
            "range": "± 256408.99450952228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22275175.5,
            "unit": "ns",
            "range": "± 301970.21544153604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68555130.06521739,
            "unit": "ns",
            "range": "± 15014251.91841152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121451215.54945055,
            "unit": "ns",
            "range": "± 18140231.43431109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243493091.7840909,
            "unit": "ns",
            "range": "± 26747248.535976533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77888.97126436782,
            "unit": "ns",
            "range": "± 4624.4636315986545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344698.4433962264,
            "unit": "ns",
            "range": "± 14267.114617748226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342236.06043956045,
            "unit": "ns",
            "range": "± 33023.43220677934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323026.5411764706,
            "unit": "ns",
            "range": "± 16804.882184986018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4500281.205263158,
            "unit": "ns",
            "range": "± 307767.79236158705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3971627.0384615385,
            "unit": "ns",
            "range": "± 163496.48322325174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24585.608695652172,
            "unit": "ns",
            "range": "± 4112.75731806366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119986.44736842105,
            "unit": "ns",
            "range": "± 15300.971784163048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119688.06976744186,
            "unit": "ns",
            "range": "± 7102.89107632477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125077.34375,
            "unit": "ns",
            "range": "± 12938.73226794823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8167.295698924731,
            "unit": "ns",
            "range": "± 1035.1563792715172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22776.478723404256,
            "unit": "ns",
            "range": "± 3669.6284742910125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2053019.2472527472,
            "unit": "ns",
            "range": "± 467877.9890372797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3559217.2365591396,
            "unit": "ns",
            "range": "± 520823.5042555704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2863598.409090909,
            "unit": "ns",
            "range": "± 332815.15998557146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7934932.947058824,
            "unit": "ns",
            "range": "± 1569366.713866536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3831399.217391304,
            "unit": "ns",
            "range": "± 580777.6260317009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3795794.8651685393,
            "unit": "ns",
            "range": "± 289721.95402175887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4855850.652173913,
            "unit": "ns",
            "range": "± 389866.5849863395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4632502.091836735,
            "unit": "ns",
            "range": "± 365136.04982862953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7935067.724137931,
            "unit": "ns",
            "range": "± 454171.24137722806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7639884.795882937,
            "unit": "ns",
            "range": "± 348657.4515420386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275421.6171875,
            "unit": "ns",
            "range": "± 87620.31480323437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1459346.8900669643,
            "unit": "ns",
            "range": "± 34011.44296037159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3327179.655009191,
            "unit": "ns",
            "range": "± 178136.91083492234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001543.385566907,
            "unit": "ns",
            "range": "± 34823.84783354758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910885.154260706,
            "unit": "ns",
            "range": "± 25036.21754233304"
          }
        ]
      }
    ]
  }
}