window.BENCHMARK_DATA = {
  "lastUpdate": 1687510493442,
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
      }
    ]
  }
}