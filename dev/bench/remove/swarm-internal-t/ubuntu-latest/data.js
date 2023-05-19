window.BENCHMARK_DATA = {
  "lastUpdate": 1684469177291,
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
          "id": "621faf1cc3185543ff81b6fd854ef48e164acb9b",
          "message": "Removed t from swarm",
          "timestamp": "2023-05-19T12:43:53+09:00",
          "tree_id": "bf4dabeb40455252b8b6d33e0a715f9d6624b797",
          "url": "https://github.com/greymistcube/libplanet/commit/621faf1cc3185543ff81b6fd854ef48e164acb9b"
        },
        "date": 1684468647065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3544819.757575758,
            "unit": "ns",
            "range": "± 109355.17300722172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3704632.230769231,
            "unit": "ns",
            "range": "± 58870.398921633845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4545929.714285715,
            "unit": "ns",
            "range": "± 69681.27219807958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4580965.6,
            "unit": "ns",
            "range": "± 132056.08395771956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7127589.157894737,
            "unit": "ns",
            "range": "± 153705.27519114234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288849.44444444444,
            "unit": "ns",
            "range": "± 6335.806877965252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278495.1904761905,
            "unit": "ns",
            "range": "± 12217.6070446965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259276.68421052632,
            "unit": "ns",
            "range": "± 11166.645013735411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4496015.2,
            "unit": "ns",
            "range": "± 63318.91660723741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4042865.066666667,
            "unit": "ns",
            "range": "± 46959.04360103397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21733.729166666668,
            "unit": "ns",
            "range": "± 1892.6117375296728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93127.59139784946,
            "unit": "ns",
            "range": "± 7214.1771009778395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87078.37,
            "unit": "ns",
            "range": "± 7362.997869712712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99024.206185567,
            "unit": "ns",
            "range": "± 12970.047792042942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6239.65625,
            "unit": "ns",
            "range": "± 713.6904507834428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23793.621052631577,
            "unit": "ns",
            "range": "± 2172.959248910207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6025052.228125,
            "unit": "ns",
            "range": "± 32435.054538688557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860953.5768229167,
            "unit": "ns",
            "range": "± 999.5602066881454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375980.8127604167,
            "unit": "ns",
            "range": "± 2814.306341330987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642248.4503348214,
            "unit": "ns",
            "range": "± 2390.225376107213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832462.3312174479,
            "unit": "ns",
            "range": "± 479.3595054548238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758854.5032552084,
            "unit": "ns",
            "range": "± 293.69319388680964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8249266.0625,
            "unit": "ns",
            "range": "± 117909.25749828057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22068771.4,
            "unit": "ns",
            "range": "± 197204.41730665453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55552457.86666667,
            "unit": "ns",
            "range": "± 333066.52670940483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111576849.66666667,
            "unit": "ns",
            "range": "± 533792.0269710007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220109951.4,
            "unit": "ns",
            "range": "± 1012529.8480949163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1475891.8041237113,
            "unit": "ns",
            "range": "± 90062.06294951082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2799563.861111111,
            "unit": "ns",
            "range": "± 93165.14290292813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2351639.2535211267,
            "unit": "ns",
            "range": "± 111526.56789120677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5576983.857142857,
            "unit": "ns",
            "range": "± 128162.61150362292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50903.03191489362,
            "unit": "ns",
            "range": "± 3039.2621220096034"
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
          "id": "ba757c9338d106b22ec7eb0fcee7cf77ceb1c335",
          "message": "Cleanup",
          "timestamp": "2023-05-19T12:50:25+09:00",
          "tree_id": "caf70697d4c2f25a8f988fb20a0b39fc7a10d810",
          "url": "https://github.com/greymistcube/libplanet/commit/ba757c9338d106b22ec7eb0fcee7cf77ceb1c335"
        },
        "date": 1684469169176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4077150.0434782607,
            "unit": "ns",
            "range": "± 101183.89599656398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4251595.902439024,
            "unit": "ns",
            "range": "± 152184.92111947306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5154514.783783784,
            "unit": "ns",
            "range": "± 174928.90860116977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5326575.138461539,
            "unit": "ns",
            "range": "± 247735.04115428423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8280702.882352941,
            "unit": "ns",
            "range": "± 257352.12963455397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328361.45714285714,
            "unit": "ns",
            "range": "± 10499.280738230027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313382.8775510204,
            "unit": "ns",
            "range": "± 12434.058598651283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288213.9,
            "unit": "ns",
            "range": "± 12864.437436829552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5252098.384615385,
            "unit": "ns",
            "range": "± 143296.37357311646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4793344.533333333,
            "unit": "ns",
            "range": "± 80613.35808560572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22434.319587628866,
            "unit": "ns",
            "range": "± 2324.0526275344605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103347.33333333333,
            "unit": "ns",
            "range": "± 7177.314376292873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87787.73033707865,
            "unit": "ns",
            "range": "± 4854.47891774382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122080.62244897959,
            "unit": "ns",
            "range": "± 14794.108480830591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7353.302083333333,
            "unit": "ns",
            "range": "± 820.7331141285777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23395.168421052633,
            "unit": "ns",
            "range": "± 2123.360001209602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7053736.95546875,
            "unit": "ns",
            "range": "± 20460.204794898153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2234981.277083333,
            "unit": "ns",
            "range": "± 5604.835957603312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1633812.3180989583,
            "unit": "ns",
            "range": "± 5308.101149756881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3105469.305078125,
            "unit": "ns",
            "range": "± 6632.677569935498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 984417.8614583333,
            "unit": "ns",
            "range": "± 1285.1178390531488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905755.2984793527,
            "unit": "ns",
            "range": "± 2694.7935725874577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9846600.836734693,
            "unit": "ns",
            "range": "± 647957.994930222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26905109.51612903,
            "unit": "ns",
            "range": "± 798381.4983975131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66971660.166666664,
            "unit": "ns",
            "range": "± 2778991.0059124096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126657424.47058824,
            "unit": "ns",
            "range": "± 1856403.0456024734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257214655.26666668,
            "unit": "ns",
            "range": "± 3606209.6321398867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672165.5617977527,
            "unit": "ns",
            "range": "± 102784.70778160037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3199093.1714285715,
            "unit": "ns",
            "range": "± 102572.51435863363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2724814.36,
            "unit": "ns",
            "range": "± 136681.69710312446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6619202,
            "unit": "ns",
            "range": "± 272078.08037104376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57191.043956043955,
            "unit": "ns",
            "range": "± 3227.2165299805547"
          }
        ]
      }
    ]
  }
}