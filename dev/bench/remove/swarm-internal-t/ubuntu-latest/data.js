window.BENCHMARK_DATA = {
  "lastUpdate": 1684467479626,
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
          "id": "8aba8aef32232d502aaa8404b23532abd679bd9e",
          "message": "Removed t from BlockCompletion",
          "timestamp": "2023-05-19T12:13:30+09:00",
          "tree_id": "758f003cc68e38226c3434603c44a525979ac94b",
          "url": "https://github.com/greymistcube/libplanet/commit/8aba8aef32232d502aaa8404b23532abd679bd9e"
        },
        "date": 1684467249880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4114098.592592593,
            "unit": "ns",
            "range": "± 111854.24448370273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4323789.0625,
            "unit": "ns",
            "range": "± 84783.52390763098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5379310.461538462,
            "unit": "ns",
            "range": "± 142546.79233689708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5121971.55319149,
            "unit": "ns",
            "range": "± 199488.9318052953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8235168.16,
            "unit": "ns",
            "range": "± 168047.50475676017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330890.13636363635,
            "unit": "ns",
            "range": "± 15289.212936311935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328149.02040816325,
            "unit": "ns",
            "range": "± 13112.335730604018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283010.8888888889,
            "unit": "ns",
            "range": "± 11776.011907273683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5030317.5,
            "unit": "ns",
            "range": "± 166765.11386335315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4569273.35,
            "unit": "ns",
            "range": "± 104151.31183815158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22052.483870967742,
            "unit": "ns",
            "range": "± 1548.7975182232237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104474.52083333333,
            "unit": "ns",
            "range": "± 7719.675567193178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93084.4255319149,
            "unit": "ns",
            "range": "± 5352.231962300013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106563.1875,
            "unit": "ns",
            "range": "± 13970.165376945633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6075.315789473684,
            "unit": "ns",
            "range": "± 621.9903752275432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20224.263157894737,
            "unit": "ns",
            "range": "± 1937.217653884518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7058222.62421875,
            "unit": "ns",
            "range": "± 55438.58366385132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165751.2125,
            "unit": "ns",
            "range": "± 20471.23684474884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609892.9117838542,
            "unit": "ns",
            "range": "± 10895.282335335974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3092413.4540264425,
            "unit": "ns",
            "range": "± 11772.667420569383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008667.2796766493,
            "unit": "ns",
            "range": "± 33381.62354423196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905063.051204427,
            "unit": "ns",
            "range": "± 5939.953677192971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10077059.666666666,
            "unit": "ns",
            "range": "± 168100.88308881098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26599147.153846152,
            "unit": "ns",
            "range": "± 200727.27255194055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67768890.72727273,
            "unit": "ns",
            "range": "± 1649020.9187904194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131319772.6,
            "unit": "ns",
            "range": "± 1270269.341070895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266092762.33333334,
            "unit": "ns",
            "range": "± 1296156.548119129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617732.108695652,
            "unit": "ns",
            "range": "± 94651.23843456483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3214716.8766233767,
            "unit": "ns",
            "range": "± 163295.91200430223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2687237.025,
            "unit": "ns",
            "range": "± 132585.66903102474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6813862.47,
            "unit": "ns",
            "range": "± 412109.420828112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53117.81707317073,
            "unit": "ns",
            "range": "± 2374.189863792392"
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
          "id": "249122e6eec54718ebec56af1d1d48ffc83915a5",
          "message": "Changelog",
          "timestamp": "2023-05-19T12:19:43+09:00",
          "tree_id": "876e6324e9b02798028790be7c80ce480be47c3e",
          "url": "https://github.com/greymistcube/libplanet/commit/249122e6eec54718ebec56af1d1d48ffc83915a5"
        },
        "date": 1684467470680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4363684.591836735,
            "unit": "ns",
            "range": "± 265446.5250587968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4625701.724489796,
            "unit": "ns",
            "range": "± 311633.8319288775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6214287.725,
            "unit": "ns",
            "range": "± 220191.00972005606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5773054.436619719,
            "unit": "ns",
            "range": "± 280440.86565455835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9571732.342105264,
            "unit": "ns",
            "range": "± 328666.95860434644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391170.8333333333,
            "unit": "ns",
            "range": "± 38411.5827234351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358529.72631578945,
            "unit": "ns",
            "range": "± 31575.975764455663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335867.1397849462,
            "unit": "ns",
            "range": "± 31986.649951187646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5697849.464285715,
            "unit": "ns",
            "range": "± 242012.46057454182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5210218.967213115,
            "unit": "ns",
            "range": "± 232868.02045056675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24760.628865979383,
            "unit": "ns",
            "range": "± 9572.687199266014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121528.77659574468,
            "unit": "ns",
            "range": "± 17467.308593117268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130779.77659574468,
            "unit": "ns",
            "range": "± 21510.571965498435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136440.53125,
            "unit": "ns",
            "range": "± 35040.283619662405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8302.241379310344,
            "unit": "ns",
            "range": "± 2015.2222104119462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27765.76,
            "unit": "ns",
            "range": "± 10210.967358995164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7650944.754166666,
            "unit": "ns",
            "range": "± 102808.53745575467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2439594.096261161,
            "unit": "ns",
            "range": "± 24255.38721676524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1772222.3907552084,
            "unit": "ns",
            "range": "± 21739.924260601063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3388059.4203125,
            "unit": "ns",
            "range": "± 53979.408358630855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1109221.3739583334,
            "unit": "ns",
            "range": "± 18887.050553697147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1030879.783342634,
            "unit": "ns",
            "range": "± 11936.327004210008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10141796.58888889,
            "unit": "ns",
            "range": "± 561216.7110927186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28281421.384615384,
            "unit": "ns",
            "range": "± 771802.2419410857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71285223.2,
            "unit": "ns",
            "range": "± 1016568.7909127169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146465549.73333332,
            "unit": "ns",
            "range": "± 2654105.90359273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296313498.5,
            "unit": "ns",
            "range": "± 3960582.736621017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1860501.5368421052,
            "unit": "ns",
            "range": "± 147267.97571859026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3691740.845360825,
            "unit": "ns",
            "range": "± 225509.3339417711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3006357.7291666665,
            "unit": "ns",
            "range": "± 219693.40877209956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7595113.046875,
            "unit": "ns",
            "range": "± 351383.2013050855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72088.17346938775,
            "unit": "ns",
            "range": "± 14612.14893488878"
          }
        ]
      }
    ]
  }
}