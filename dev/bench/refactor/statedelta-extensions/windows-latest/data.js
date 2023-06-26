window.BENCHMARK_DATA = {
  "lastUpdate": 1687775863345,
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
          "id": "38760ca734d2cb1d46c8098904887f1b9efb5b7b",
          "message": "Changelog",
          "timestamp": "2023-06-26T17:31:05+09:00",
          "tree_id": "ad06312248e71ce0ee14c0f626ec5f22fe6c6aa2",
          "url": "https://github.com/greymistcube/libplanet/commit/38760ca734d2cb1d46c8098904887f1b9efb5b7b"
        },
        "date": 1687769293111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440736.3636363635,
            "unit": "ns",
            "range": "± 118447.27876935975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2666652,
            "unit": "ns",
            "range": "± 103113.38813289425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2239664.864864865,
            "unit": "ns",
            "range": "± 111919.83240515475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5247955.172413793,
            "unit": "ns",
            "range": "± 151685.39949091742"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51036.17021276596,
            "unit": "ns",
            "range": "± 3808.0235345298597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7631633.333333333,
            "unit": "ns",
            "range": "± 263300.276184049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20786680,
            "unit": "ns",
            "range": "± 209482.6525378312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52477823.07692308,
            "unit": "ns",
            "range": "± 538461.5974450518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106457840,
            "unit": "ns",
            "range": "± 1339999.1704688263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210177060,
            "unit": "ns",
            "range": "± 1244378.4810096966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4905998.158482143,
            "unit": "ns",
            "range": "± 14869.653756567905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1561147.7120535714,
            "unit": "ns",
            "range": "± 6165.241231827491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224067.2135416667,
            "unit": "ns",
            "range": "± 3426.50883179477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670637.6302083335,
            "unit": "ns",
            "range": "± 4089.454406629076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846224.8395647322,
            "unit": "ns",
            "range": "± 1934.1612387056352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795052.0572916666,
            "unit": "ns",
            "range": "± 2339.0862273670273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3389968.1818181816,
            "unit": "ns",
            "range": "± 69671.6013497037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3481890.625,
            "unit": "ns",
            "range": "± 104827.90615706389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4366846.666666667,
            "unit": "ns",
            "range": "± 79206.76257804783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4336986.486486486,
            "unit": "ns",
            "range": "± 133151.98117223073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6723625,
            "unit": "ns",
            "range": "± 185429.79628919365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270479.5918367347,
            "unit": "ns",
            "range": "± 10776.749270068965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262135.29411764705,
            "unit": "ns",
            "range": "± 10671.547657756333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234333.70786516854,
            "unit": "ns",
            "range": "± 12949.859106115127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4326425,
            "unit": "ns",
            "range": "± 61196.39212478877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970064.285714286,
            "unit": "ns",
            "range": "± 22493.88317342695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23115.957446808512,
            "unit": "ns",
            "range": "± 2876.7254080705334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90923.07692307692,
            "unit": "ns",
            "range": "± 4122.843334743289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77591.66666666667,
            "unit": "ns",
            "range": "± 3774.3668436470953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98972.1649484536,
            "unit": "ns",
            "range": "± 13818.93132526928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6260.416666666667,
            "unit": "ns",
            "range": "± 1081.857969729237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21022.82608695652,
            "unit": "ns",
            "range": "± 2385.998685595539"
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
          "id": "e105b12db61377b35d96e7224587d33d21db53dc",
          "message": "Minor streamlining",
          "timestamp": "2023-06-26T17:27:37+09:00",
          "tree_id": "d555eb2892f956aa6baefb42a14972b46a5a7f75",
          "url": "https://github.com/greymistcube/libplanet/commit/e105b12db61377b35d96e7224587d33d21db53dc"
        },
        "date": 1687769371821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713011.7021276595,
            "unit": "ns",
            "range": "± 135164.53840498588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3232726.8041237113,
            "unit": "ns",
            "range": "± 259878.33752685445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2650307.3684210526,
            "unit": "ns",
            "range": "± 272222.7171106155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6662919.3877551025,
            "unit": "ns",
            "range": "± 553891.5312433711"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55280.21978021978,
            "unit": "ns",
            "range": "± 9339.298329344303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8687662.5,
            "unit": "ns",
            "range": "± 169774.34778748723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23029297.959183674,
            "unit": "ns",
            "range": "± 1375634.6177088926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62640835.55555555,
            "unit": "ns",
            "range": "± 3487954.240413137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121870755,
            "unit": "ns",
            "range": "± 6370318.540371233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245982764.51612905,
            "unit": "ns",
            "range": "± 11029306.505644023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6498017.65625,
            "unit": "ns",
            "range": "± 172006.67737360188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963217.4739583333,
            "unit": "ns",
            "range": "± 24318.607502970684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1478279.78515625,
            "unit": "ns",
            "range": "± 19225.366700561513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3563458.0292166094,
            "unit": "ns",
            "range": "± 176644.66008358618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1097205.546875,
            "unit": "ns",
            "range": "± 25066.60362384347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1006433.4866431452,
            "unit": "ns",
            "range": "± 30452.72281012638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3681524.4680851065,
            "unit": "ns",
            "range": "± 266282.493574254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3846627.272727273,
            "unit": "ns",
            "range": "± 298796.2372444902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5022009,
            "unit": "ns",
            "range": "± 370501.67520852486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4775746.9387755105,
            "unit": "ns",
            "range": "± 411799.3711796247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8174764.583333333,
            "unit": "ns",
            "range": "± 551370.6660351411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318728.125,
            "unit": "ns",
            "range": "± 44807.34362538308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326528.5714285714,
            "unit": "ns",
            "range": "± 34388.220231958054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332881.31868131866,
            "unit": "ns",
            "range": "± 19217.156178141748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5298563.793103448,
            "unit": "ns",
            "range": "± 230068.68516626046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4820991.666666667,
            "unit": "ns",
            "range": "± 58440.94856944889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32633.505154639177,
            "unit": "ns",
            "range": "± 5860.952717142266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138925.8064516129,
            "unit": "ns",
            "range": "± 11120.475662584397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132365.21739130435,
            "unit": "ns",
            "range": "± 13805.170513950728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138025.27472527474,
            "unit": "ns",
            "range": "± 15418.896007508258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10390.10989010989,
            "unit": "ns",
            "range": "± 1759.106777446058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32110,
            "unit": "ns",
            "range": "± 2955.7048247813846"
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
          "id": "408a2fffe21226e9d082fa46ea4a7c3ceb5bfca2",
          "message": "Code reroute",
          "timestamp": "2023-06-26T19:15:32+09:00",
          "tree_id": "7fd7c20fd11e605703f4b3bff0c5690ac74a9ea0",
          "url": "https://github.com/greymistcube/libplanet/commit/408a2fffe21226e9d082fa46ea4a7c3ceb5bfca2"
        },
        "date": 1687775836362,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698911.5789473683,
            "unit": "ns",
            "range": "± 206540.87219186977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3358125.2525252528,
            "unit": "ns",
            "range": "± 355091.5413286408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2743178.125,
            "unit": "ns",
            "range": "± 242118.61303833142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7022273.195876288,
            "unit": "ns",
            "range": "± 679965.619461054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59423.40425531915,
            "unit": "ns",
            "range": "± 14575.287861425673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9046095.604395604,
            "unit": "ns",
            "range": "± 601983.1758284146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24472225,
            "unit": "ns",
            "range": "± 1463644.4720016718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65270023.37662338,
            "unit": "ns",
            "range": "± 3318858.6911489265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124023708.1081081,
            "unit": "ns",
            "range": "± 4206646.642806171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250410507.69230768,
            "unit": "ns",
            "range": "± 8643984.900659766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6042187.434895833,
            "unit": "ns",
            "range": "± 77876.40106919514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2148477.762276786,
            "unit": "ns",
            "range": "± 36909.6311889436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1495295.3822544643,
            "unit": "ns",
            "range": "± 18915.416370077157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3270147.1354166665,
            "unit": "ns",
            "range": "± 52438.02372842423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1072960.7840401786,
            "unit": "ns",
            "range": "± 16757.49263835167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1016969.9928977273,
            "unit": "ns",
            "range": "± 23892.080594125237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3582709.6774193547,
            "unit": "ns",
            "range": "± 323286.7252968418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3923186.3157894737,
            "unit": "ns",
            "range": "± 361236.0039578435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5256259.183673469,
            "unit": "ns",
            "range": "± 400944.33293247444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4943554.945054945,
            "unit": "ns",
            "range": "± 365769.4839539534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8531343.877551021,
            "unit": "ns",
            "range": "± 545367.9645108487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325951.0416666667,
            "unit": "ns",
            "range": "± 54190.13892580684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320749.4845360825,
            "unit": "ns",
            "range": "± 52520.78977991982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282611.7021276596,
            "unit": "ns",
            "range": "± 48216.07918210755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4832003.157894737,
            "unit": "ns",
            "range": "± 658376.5966944967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4234869.892473118,
            "unit": "ns",
            "range": "± 315362.93266818044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30027,
            "unit": "ns",
            "range": "± 11121.186033327505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109674.22680412371,
            "unit": "ns",
            "range": "± 20432.879336737904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118719.14893617021,
            "unit": "ns",
            "range": "± 27176.580195010913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139038.70967741936,
            "unit": "ns",
            "range": "± 23947.451676435874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8018.888888888889,
            "unit": "ns",
            "range": "± 2087.947997783515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27032.98969072165,
            "unit": "ns",
            "range": "± 8944.455005400978"
          }
        ]
      }
    ]
  }
}