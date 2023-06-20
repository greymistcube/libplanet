window.BENCHMARK_DATA = {
  "lastUpdate": 1687245502212,
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
          "id": "4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19",
          "message": "Added back in caching",
          "timestamp": "2023-06-15T14:05:24+09:00",
          "tree_id": "110b574e04752f39a883ac7f751da8fc894a7002",
          "url": "https://github.com/greymistcube/libplanet/commit/4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19"
        },
        "date": 1686807258567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481617.4795918367,
            "unit": "ns",
            "range": "± 103865.90969975333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2843740.150943396,
            "unit": "ns",
            "range": "± 117307.30959328682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2369360.7204301073,
            "unit": "ns",
            "range": "± 134180.41989356084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5824962.701492538,
            "unit": "ns",
            "range": "± 275279.84022571915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623826.882352941,
            "unit": "ns",
            "range": "± 115890.05631011445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3722344.8214285714,
            "unit": "ns",
            "range": "± 106268.56675669661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4410584.878787879,
            "unit": "ns",
            "range": "± 135801.42755687382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4428228.5636363635,
            "unit": "ns",
            "range": "± 186893.1903326924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7258215.344827586,
            "unit": "ns",
            "range": "± 315958.399154152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7747104.666666667,
            "unit": "ns",
            "range": "± 122243.80540815418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21241873.133333333,
            "unit": "ns",
            "range": "± 342212.01818627556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55071528.2,
            "unit": "ns",
            "range": "± 791048.3518769976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106698900.5,
            "unit": "ns",
            "range": "± 995876.6631529111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216208544.33333334,
            "unit": "ns",
            "range": "± 3149719.4792001187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6014838.7328125,
            "unit": "ns",
            "range": "± 18741.519647031637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863230.1984375,
            "unit": "ns",
            "range": "± 4764.94501154676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372367.8225260417,
            "unit": "ns",
            "range": "± 5836.203572141832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612385.468489583,
            "unit": "ns",
            "range": "± 4255.908262260925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831353.8751953125,
            "unit": "ns",
            "range": "± 1092.55796900701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760317.0839146206,
            "unit": "ns",
            "range": "± 905.8677101889817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47929.79069767442,
            "unit": "ns",
            "range": "± 2591.294335298046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284955.4032258064,
            "unit": "ns",
            "range": "± 12979.058034298727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271409.5294117647,
            "unit": "ns",
            "range": "± 8757.789212640831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235283.32,
            "unit": "ns",
            "range": "± 6087.9242680353145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4326899,
            "unit": "ns",
            "range": "± 62253.56089298943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3974391.6875,
            "unit": "ns",
            "range": "± 75771.17371377125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19876.052631578947,
            "unit": "ns",
            "range": "± 2327.859359868656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88815.61445783133,
            "unit": "ns",
            "range": "± 4724.860671145726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75423.24074074074,
            "unit": "ns",
            "range": "± 3002.947262558085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103370.73469387754,
            "unit": "ns",
            "range": "± 13597.858104189441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5415.697916666667,
            "unit": "ns",
            "range": "± 907.8809928943175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16946.52688172043,
            "unit": "ns",
            "range": "± 1334.657199037802"
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
          "id": "6939f2f1409576ece7d5d7afedd55a9e41b222e2",
          "message": "Changelog",
          "timestamp": "2023-06-15T14:24:20+09:00",
          "tree_id": "c7ee0cc40c745c22e6df2ec74f560c23631c0f7c",
          "url": "https://github.com/greymistcube/libplanet/commit/6939f2f1409576ece7d5d7afedd55a9e41b222e2"
        },
        "date": 1686807380632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3119349.8333333335,
            "unit": "ns",
            "range": "± 25097.315448010962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3304532.1739130435,
            "unit": "ns",
            "range": "± 126616.36501448062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4135638.4285714286,
            "unit": "ns",
            "range": "± 50050.240453912964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4117042.5384615385,
            "unit": "ns",
            "range": "± 101556.23039133768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6697803.888888889,
            "unit": "ns",
            "range": "± 186723.18028781234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5961546.494419643,
            "unit": "ns",
            "range": "± 31438.573708379165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1951400.0248325893,
            "unit": "ns",
            "range": "± 2232.1438028466378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356640.7409319195,
            "unit": "ns",
            "range": "± 843.1877835811865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593073.9166666665,
            "unit": "ns",
            "range": "± 8395.153270138411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803222.3676432292,
            "unit": "ns",
            "range": "± 501.0731576298363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739510.9210611979,
            "unit": "ns",
            "range": "± 689.4498701861903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274306.8679245283,
            "unit": "ns",
            "range": "± 11431.079039244345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264923.68888888886,
            "unit": "ns",
            "range": "± 9441.480264388008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229368.61538461538,
            "unit": "ns",
            "range": "± 894.9116845124568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4139416.9285714286,
            "unit": "ns",
            "range": "± 27001.18756494948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3735820.3076923075,
            "unit": "ns",
            "range": "± 31000.84900016077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16167.677083333334,
            "unit": "ns",
            "range": "± 1719.234851198219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84305.60869565218,
            "unit": "ns",
            "range": "± 3940.78493680619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69289.26315789473,
            "unit": "ns",
            "range": "± 1419.495483226553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86774.77083333333,
            "unit": "ns",
            "range": "± 12935.181693415312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4315.625,
            "unit": "ns",
            "range": "± 440.1741581166303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15847.305263157894,
            "unit": "ns",
            "range": "± 1200.8712092236276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362020.0106382978,
            "unit": "ns",
            "range": "± 84457.31744210217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2613575.7297297297,
            "unit": "ns",
            "range": "± 87970.85015555774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171282.864197531,
            "unit": "ns",
            "range": "± 112332.15582055668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5192679.461538462,
            "unit": "ns",
            "range": "± 85302.77138191875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45010.2987012987,
            "unit": "ns",
            "range": "± 2163.2834453364435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7658012.333333333,
            "unit": "ns",
            "range": "± 15020.065943676178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19413131.46153846,
            "unit": "ns",
            "range": "± 79790.01799683904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48624926.4,
            "unit": "ns",
            "range": "± 302876.42049564887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98369204.8125,
            "unit": "ns",
            "range": "± 1857368.2129693157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196138560.7857143,
            "unit": "ns",
            "range": "± 1257443.8940643515"
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
          "id": "cb0a0e165aa4f47e0a781e57e1d862caf74607e5",
          "message": "Changelog",
          "timestamp": "2023-06-20T16:03:37+09:00",
          "tree_id": "02536a43bb60d6ac2558deeda114df9106d0245f",
          "url": "https://github.com/greymistcube/libplanet/commit/cb0a0e165aa4f47e0a781e57e1d862caf74607e5"
        },
        "date": 1687245494476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594961.7333333334,
            "unit": "ns",
            "range": "± 58138.21408931683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3874967.6470588236,
            "unit": "ns",
            "range": "± 117948.37137927412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4626738.368421053,
            "unit": "ns",
            "range": "± 124716.41480930898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4777393.161290322,
            "unit": "ns",
            "range": "± 142790.2329771652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7367098.325581395,
            "unit": "ns",
            "range": "± 241522.9679701903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5989428.676339285,
            "unit": "ns",
            "range": "± 30279.862671004226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897366.6473858173,
            "unit": "ns",
            "range": "± 1452.0972428421114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360361.3061197917,
            "unit": "ns",
            "range": "± 3507.7424359854795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626643.755729167,
            "unit": "ns",
            "range": "± 6623.505634180836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836673.0862630209,
            "unit": "ns",
            "range": "± 480.3589667248385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767599.1276692708,
            "unit": "ns",
            "range": "± 781.4499562058587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302428,
            "unit": "ns",
            "range": "± 10812.403690252026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296693.54098360654,
            "unit": "ns",
            "range": "± 13376.057124047893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266816,
            "unit": "ns",
            "range": "± 12143.02355196623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4642055.214285715,
            "unit": "ns",
            "range": "± 53207.23914046424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4220816.571428572,
            "unit": "ns",
            "range": "± 49221.21574579914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24071.278350515466,
            "unit": "ns",
            "range": "± 2184.8393235271515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100482.91836734694,
            "unit": "ns",
            "range": "± 7499.917012150448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84557.26262626263,
            "unit": "ns",
            "range": "± 5721.273804908466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108132.89583333333,
            "unit": "ns",
            "range": "± 12817.773340153948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5675,
            "unit": "ns",
            "range": "± 846.0434230488471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21572.747368421053,
            "unit": "ns",
            "range": "± 2244.269425592047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1513337.9042553192,
            "unit": "ns",
            "range": "± 105726.81586345607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944816.4411764704,
            "unit": "ns",
            "range": "± 94019.31097779253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2463599.032608696,
            "unit": "ns",
            "range": "± 138577.8552620976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5845910.095238095,
            "unit": "ns",
            "range": "± 134382.71826425628"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48883.55789473684,
            "unit": "ns",
            "range": "± 4221.360773635322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8697698.733333332,
            "unit": "ns",
            "range": "± 76198.77279145518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22943304.285714287,
            "unit": "ns",
            "range": "± 190073.75776035697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56356206.53333333,
            "unit": "ns",
            "range": "± 281287.2927618073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112050271.23076923,
            "unit": "ns",
            "range": "± 611621.2121470219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225623222.06666666,
            "unit": "ns",
            "range": "± 1001102.7671166622"
          }
        ]
      }
    ]
  }
}