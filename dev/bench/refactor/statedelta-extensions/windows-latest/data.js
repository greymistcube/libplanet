window.BENCHMARK_DATA = {
  "lastUpdate": 1687854841514,
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
          "id": "615d3b63e0ccddc29c3c916a0083ccb74fb2abba",
          "message": "Code reroute",
          "timestamp": "2023-06-27T15:47:45+09:00",
          "tree_id": "7fd7c20fd11e605703f4b3bff0c5690ac74a9ea0",
          "url": "https://github.com/greymistcube/libplanet/commit/615d3b63e0ccddc29c3c916a0083ccb74fb2abba"
        },
        "date": 1687849465447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443513,
            "unit": "ns",
            "range": "± 129312.93157970464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717430.1369863013,
            "unit": "ns",
            "range": "± 134468.37472569474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2254601.0416666665,
            "unit": "ns",
            "range": "± 144186.42865897546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5444867.605633803,
            "unit": "ns",
            "range": "± 267107.9138660991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49882.10526315789,
            "unit": "ns",
            "range": "± 4339.329758702285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7256568.75,
            "unit": "ns",
            "range": "± 139314.61143158434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20913613.333333332,
            "unit": "ns",
            "range": "± 362082.1352492645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53297951.85185185,
            "unit": "ns",
            "range": "± 1478467.4446535115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103876126.66666667,
            "unit": "ns",
            "range": "± 1569726.4113153452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212465866.66666666,
            "unit": "ns",
            "range": "± 2663057.910873638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4970859.284855769,
            "unit": "ns",
            "range": "± 11518.678146476374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566051.4229910714,
            "unit": "ns",
            "range": "± 2414.524015287755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1214818.2291666667,
            "unit": "ns",
            "range": "± 4540.951729861216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674088.4635416665,
            "unit": "ns",
            "range": "± 5463.4740451578145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846554.7981770834,
            "unit": "ns",
            "range": "± 2574.90099344022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772940.9765625,
            "unit": "ns",
            "range": "± 2539.0738393140514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3425866.6666666665,
            "unit": "ns",
            "range": "± 87668.47961976174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3513530.1587301586,
            "unit": "ns",
            "range": "± 156315.34363723226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4219482.352941177,
            "unit": "ns",
            "range": "± 136282.45061566457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4335764.150943397,
            "unit": "ns",
            "range": "± 173578.52257068825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6949790,
            "unit": "ns",
            "range": "± 275598.85166817426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267711.29032258067,
            "unit": "ns",
            "range": "± 11634.591651533698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261950.94339622642,
            "unit": "ns",
            "range": "± 10734.60655725407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245015.26315789475,
            "unit": "ns",
            "range": "± 16923.506052554894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4170820,
            "unit": "ns",
            "range": "± 68413.26312513219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3789155.5555555555,
            "unit": "ns",
            "range": "± 78477.98658913828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21340,
            "unit": "ns",
            "range": "± 1785.3209197555643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91658.76288659793,
            "unit": "ns",
            "range": "± 7804.869641465828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77170.52631578948,
            "unit": "ns",
            "range": "± 5517.050431591653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106170.10309278351,
            "unit": "ns",
            "range": "± 17703.57876337233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5744.791666666667,
            "unit": "ns",
            "range": "± 1068.877403404512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20220,
            "unit": "ns",
            "range": "± 2454.3318196305618"
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
          "id": "7e555da31d60e47e40aa9a646127377be600f5c4",
          "message": "Code reroute",
          "timestamp": "2023-06-27T16:58:27+09:00",
          "tree_id": "7fd7c20fd11e605703f4b3bff0c5690ac74a9ea0",
          "url": "https://github.com/greymistcube/libplanet/commit/7e555da31d60e47e40aa9a646127377be600f5c4"
        },
        "date": 1687853929002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534925.2688172043,
            "unit": "ns",
            "range": "± 191179.30046215432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3002837.234042553,
            "unit": "ns",
            "range": "± 255693.18222711477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2518813.3333333335,
            "unit": "ns",
            "range": "± 208387.5814195453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5872394.897959184,
            "unit": "ns",
            "range": "± 674294.4730349297"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53816.84210526316,
            "unit": "ns",
            "range": "± 6608.4190762670305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7915493.939393939,
            "unit": "ns",
            "range": "± 1006952.9000008078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21902282,
            "unit": "ns",
            "range": "± 1665030.7227656597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55291442.85714286,
            "unit": "ns",
            "range": "± 1800158.4424197574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118334723.33333333,
            "unit": "ns",
            "range": "± 3442692.1798643065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235574479.16666666,
            "unit": "ns",
            "range": "± 5884684.3051506365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5441755.046452703,
            "unit": "ns",
            "range": "± 183585.4168408023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1714514.8549107143,
            "unit": "ns",
            "range": "± 54675.86557053993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357931.6948784722,
            "unit": "ns",
            "range": "± 28818.37600070016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2896909.375,
            "unit": "ns",
            "range": "± 57900.883232835855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 902596.8089384191,
            "unit": "ns",
            "range": "± 17573.316738257272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 842866.89453125,
            "unit": "ns",
            "range": "± 14416.54749033269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3571358.585858586,
            "unit": "ns",
            "range": "± 377870.6894709421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4073140,
            "unit": "ns",
            "range": "± 131501.83671273768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4530679.591836735,
            "unit": "ns",
            "range": "± 479233.01694235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4574748.979591837,
            "unit": "ns",
            "range": "± 417261.39981089067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7456408.080808081,
            "unit": "ns",
            "range": "± 774097.795287345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305368.4210526316,
            "unit": "ns",
            "range": "± 26482.142771654173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291192.55319148937,
            "unit": "ns",
            "range": "± 26989.250107554075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264967.17171717173,
            "unit": "ns",
            "range": "± 25838.62415148378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4643795,
            "unit": "ns",
            "range": "± 422032.8005288478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4310009.090909091,
            "unit": "ns",
            "range": "± 328070.43205064954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22172.63157894737,
            "unit": "ns",
            "range": "± 3241.927523087092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95907.52688172043,
            "unit": "ns",
            "range": "± 11603.440611930397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86163.26530612246,
            "unit": "ns",
            "range": "± 10710.620875427083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117963.9175257732,
            "unit": "ns",
            "range": "± 18967.26997557794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6474.226804123711,
            "unit": "ns",
            "range": "± 1415.3384717765296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20883.695652173912,
            "unit": "ns",
            "range": "± 2264.842481673742"
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
          "id": "9cb51d145a7bf5b12355ba60de5039acab797814",
          "message": "Added missing link",
          "timestamp": "2023-06-27T17:12:55+09:00",
          "tree_id": "8abed9007c9509a24516b92f4a12b33630211819",
          "url": "https://github.com/greymistcube/libplanet/commit/9cb51d145a7bf5b12355ba60de5039acab797814"
        },
        "date": 1687854816041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1491626.0869565217,
            "unit": "ns",
            "range": "± 161003.40442074285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2876432.6315789474,
            "unit": "ns",
            "range": "± 264169.8210420413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2460340.8163265307,
            "unit": "ns",
            "range": "± 309777.19124196307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5995557.894736842,
            "unit": "ns",
            "range": "± 578885.9542220045"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62561.05263157895,
            "unit": "ns",
            "range": "± 13088.587644958248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7675296.842105263,
            "unit": "ns",
            "range": "± 490021.79531479895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20455981.818181816,
            "unit": "ns",
            "range": "± 1780160.4548388806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57874547,
            "unit": "ns",
            "range": "± 5209352.315437549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124647838.38383839,
            "unit": "ns",
            "range": "± 7872020.243483736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218749878.84615386,
            "unit": "ns",
            "range": "± 8978894.232049292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5366348.350694444,
            "unit": "ns",
            "range": "± 113068.61850647336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1730173.842075893,
            "unit": "ns",
            "range": "± 23590.135244954527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321912.01171875,
            "unit": "ns",
            "range": "± 26487.778825168363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2918306.5011160714,
            "unit": "ns",
            "range": "± 37855.47028375327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 944471.0774739584,
            "unit": "ns",
            "range": "± 20023.215609600138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893780.4342830882,
            "unit": "ns",
            "range": "± 17751.993758927158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3306355.3191489363,
            "unit": "ns",
            "range": "± 348384.954435146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3488893.6170212766,
            "unit": "ns",
            "range": "± 381598.5217303344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4518458.333333333,
            "unit": "ns",
            "range": "± 457323.88031762774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4318894.897959184,
            "unit": "ns",
            "range": "± 517005.09765826166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7991094.680851064,
            "unit": "ns",
            "range": "± 577954.8061296763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317731.18279569893,
            "unit": "ns",
            "range": "± 35220.07202698183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296334.7368421053,
            "unit": "ns",
            "range": "± 36267.09653602581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249414.2105263158,
            "unit": "ns",
            "range": "± 27494.943116443865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4366318.085106383,
            "unit": "ns",
            "range": "± 305580.57556728914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4043547.9166666665,
            "unit": "ns",
            "range": "± 369082.3080301698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29614.141414141413,
            "unit": "ns",
            "range": "± 9446.390198150631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102710.63829787234,
            "unit": "ns",
            "range": "± 14748.927193244795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109167.36842105263,
            "unit": "ns",
            "range": "± 20810.91388233926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135174.22680412373,
            "unit": "ns",
            "range": "± 25942.473532600758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5171.951219512195,
            "unit": "ns",
            "range": "± 998.3040421404944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29274,
            "unit": "ns",
            "range": "± 9034.45279879957"
          }
        ]
      }
    ]
  }
}