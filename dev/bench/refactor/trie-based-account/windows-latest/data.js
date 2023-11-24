window.BENCHMARK_DATA = {
  "lastUpdate": 1700818148743,
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
          "id": "230112d213d64abb0a6d51bbb0b61790bd7cd397",
          "message": "Remove unnecessary extensions",
          "timestamp": "2023-11-16T22:21:59+09:00",
          "tree_id": "4940d84801c8aca15903cc63aa02253da0eac664",
          "url": "https://github.com/greymistcube/libplanet/commit/230112d213d64abb0a6d51bbb0b61790bd7cd397"
        },
        "date": 1700146995610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996275.5319148937,
            "unit": "ns",
            "range": "± 88886.69807007146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798730,
            "unit": "ns",
            "range": "± 71713.82256537979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1361295.8333333333,
            "unit": "ns",
            "range": "± 116757.55259390845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9042078.350515464,
            "unit": "ns",
            "range": "± 797872.6799311934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35170.11494252874,
            "unit": "ns",
            "range": "± 2712.5511437694263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5142876.923076923,
            "unit": "ns",
            "range": "± 55038.94308950942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13924826.666666666,
            "unit": "ns",
            "range": "± 98790.6839641028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34083233.333333336,
            "unit": "ns",
            "range": "± 445167.3789015714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69870653.84615384,
            "unit": "ns",
            "range": "± 622884.1179216037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138085061.53846154,
            "unit": "ns",
            "range": "± 612485.8930871545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3190975.8333333335,
            "unit": "ns",
            "range": "± 6798.905766812761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1021750.3348214285,
            "unit": "ns",
            "range": "± 1920.5813742237492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 693215.3948102678,
            "unit": "ns",
            "range": "± 1019.4281391611272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919861.40625,
            "unit": "ns",
            "range": "± 2345.8805139432384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615787.8776041666,
            "unit": "ns",
            "range": "± 1874.7185264636582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565005.8072916666,
            "unit": "ns",
            "range": "± 860.4186966655601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2236180.9523809524,
            "unit": "ns",
            "range": "± 77082.08243954745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2391569.230769231,
            "unit": "ns",
            "range": "± 98656.8613406729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2917568.9655172415,
            "unit": "ns",
            "range": "± 73891.05930571165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2729333.3333333335,
            "unit": "ns",
            "range": "± 137243.4464869037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10202823.711340206,
            "unit": "ns",
            "range": "± 1131746.779758801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185842.02898550723,
            "unit": "ns",
            "range": "± 8487.402529928097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178329.0909090909,
            "unit": "ns",
            "range": "± 7480.064188852945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146577.08333333334,
            "unit": "ns",
            "range": "± 5761.251326228672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2771178.5714285714,
            "unit": "ns",
            "range": "± 27368.85311588925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2513053.3333333335,
            "unit": "ns",
            "range": "± 40802.326030801356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12905.61797752809,
            "unit": "ns",
            "range": "± 1510.8967498687805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62771.42857142857,
            "unit": "ns",
            "range": "± 7053.609151480941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50734.375,
            "unit": "ns",
            "range": "± 3971.0883600290103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62181.720430107525,
            "unit": "ns",
            "range": "± 11604.833571634663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3341.935483870968,
            "unit": "ns",
            "range": "± 646.6170462399507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13015.90909090909,
            "unit": "ns",
            "range": "± 1853.7868272366013"
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
          "id": "92952511538ebfcb54e8bb01725dbd27eecef617",
          "message": "Add missing cache",
          "timestamp": "2023-11-17T09:43:58+09:00",
          "tree_id": "79f699a8f5975c1c98e0075549838a2014366aa1",
          "url": "https://github.com/greymistcube/libplanet/commit/92952511538ebfcb54e8bb01725dbd27eecef617"
        },
        "date": 1700183527038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006170.1030927835,
            "unit": "ns",
            "range": "± 118890.96647501973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776535.4838709678,
            "unit": "ns",
            "range": "± 79916.40529333094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1341231.6326530613,
            "unit": "ns",
            "range": "± 121387.67545326066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8804922.448979592,
            "unit": "ns",
            "range": "± 995088.5689773574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34813.333333333336,
            "unit": "ns",
            "range": "± 2440.031313116445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5207571.428571428,
            "unit": "ns",
            "range": "± 55257.90480968351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13961635.714285715,
            "unit": "ns",
            "range": "± 188935.7628204027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33921030.76923077,
            "unit": "ns",
            "range": "± 420339.7522334669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65699323.333333336,
            "unit": "ns",
            "range": "± 538055.6907801946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136254726.66666666,
            "unit": "ns",
            "range": "± 2375986.4244641834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3214217.1614583335,
            "unit": "ns",
            "range": "± 10377.264996912747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1016611.25,
            "unit": "ns",
            "range": "± 1598.141927848448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 702015.7435825893,
            "unit": "ns",
            "range": "± 1022.5843382361151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963860.625,
            "unit": "ns",
            "range": "± 5107.502067623649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608104.39453125,
            "unit": "ns",
            "range": "± 996.5312696005107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 548531.1941964285,
            "unit": "ns",
            "range": "± 1217.8697747121275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184646.93877551,
            "unit": "ns",
            "range": "± 81838.87651467163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291537.037037037,
            "unit": "ns",
            "range": "± 55853.8831936175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2822270,
            "unit": "ns",
            "range": "± 61961.14317181289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2582509.6774193547,
            "unit": "ns",
            "range": "± 146291.27218796435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9928898.979591837,
            "unit": "ns",
            "range": "± 887628.2500039832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181650,
            "unit": "ns",
            "range": "± 8369.141844374943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174417.33333333334,
            "unit": "ns",
            "range": "± 8646.783081450445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146711.53846153847,
            "unit": "ns",
            "range": "± 7537.563607351193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2798586.6666666665,
            "unit": "ns",
            "range": "± 40221.136352965084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2604212.5,
            "unit": "ns",
            "range": "± 49586.09852233453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14082.222222222223,
            "unit": "ns",
            "range": "± 1506.583140437721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63672.04301075269,
            "unit": "ns",
            "range": "± 6609.419588925929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56659,
            "unit": "ns",
            "range": "± 6774.537816431659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71141.41414141415,
            "unit": "ns",
            "range": "± 14007.541774031108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4148.9795918367345,
            "unit": "ns",
            "range": "± 756.4492335102087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13919.78021978022,
            "unit": "ns",
            "range": "± 1594.3107030395981"
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
          "id": "7d64d9aaf51665b1cf3739ac1fc0e006ba96a6b7",
          "message": "Remove caching while writing",
          "timestamp": "2023-11-17T13:22:50+09:00",
          "tree_id": "161d53684b30dcad10be36fda99fc1883bc401b4",
          "url": "https://github.com/greymistcube/libplanet/commit/7d64d9aaf51665b1cf3739ac1fc0e006ba96a6b7"
        },
        "date": 1700196303246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007969.387755102,
            "unit": "ns",
            "range": "± 127562.8613245721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755131.5789473683,
            "unit": "ns",
            "range": "± 76198.96455496046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1286068.4210526317,
            "unit": "ns",
            "range": "± 115770.11085176235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7882031.111111111,
            "unit": "ns",
            "range": "± 716277.308304549"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34681.70731707317,
            "unit": "ns",
            "range": "± 1839.4932238762226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5222953.846153846,
            "unit": "ns",
            "range": "± 64312.94083599629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13711960,
            "unit": "ns",
            "range": "± 231736.16710141976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34663728.571428575,
            "unit": "ns",
            "range": "± 408197.3738817486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67185985.71428572,
            "unit": "ns",
            "range": "± 645439.00129726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133212053.33333333,
            "unit": "ns",
            "range": "± 1249474.9999595066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3172437.6201923075,
            "unit": "ns",
            "range": "± 8365.956085625769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1018042.109375,
            "unit": "ns",
            "range": "± 4141.134718984286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 693520.859375,
            "unit": "ns",
            "range": "± 1940.0505269736386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905483.189174107,
            "unit": "ns",
            "range": "± 5543.001125948282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615453.466796875,
            "unit": "ns",
            "range": "± 1168.444625950369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564032.7706473215,
            "unit": "ns",
            "range": "± 1575.2732975841816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182412.8205128205,
            "unit": "ns",
            "range": "± 75086.80653430114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2330084.6153846155,
            "unit": "ns",
            "range": "± 59666.59160573992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2828533.3333333335,
            "unit": "ns",
            "range": "± 73548.98200262997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2632476.6666666665,
            "unit": "ns",
            "range": "± 146300.95889307663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9153140.65934066,
            "unit": "ns",
            "range": "± 696552.4805909015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177711.76470588235,
            "unit": "ns",
            "range": "± 5698.312600096062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171847.61904761905,
            "unit": "ns",
            "range": "± 7853.350572040782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145869.44444444444,
            "unit": "ns",
            "range": "± 4849.495964645306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2818853.3333333335,
            "unit": "ns",
            "range": "± 42540.146864322116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2571660,
            "unit": "ns",
            "range": "± 48010.81425798032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12237.362637362638,
            "unit": "ns",
            "range": "± 1996.8668987885526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59047.31182795699,
            "unit": "ns",
            "range": "± 7131.0190655036085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47146.875,
            "unit": "ns",
            "range": "± 3308.3293008946216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61364.948453608245,
            "unit": "ns",
            "range": "± 14775.049642028234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2859.574468085106,
            "unit": "ns",
            "range": "± 512.0734047128694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11752.68817204301,
            "unit": "ns",
            "range": "± 2048.6258065309694"
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
          "id": "f569134a3685f787d245d8cd019e83ec0dfa13fb",
          "message": "Commit frequently",
          "timestamp": "2023-11-17T16:08:27+09:00",
          "tree_id": "1ee50c563d7535f84d9c3d16d27b943b055cdaa7",
          "url": "https://github.com/greymistcube/libplanet/commit/f569134a3685f787d245d8cd019e83ec0dfa13fb"
        },
        "date": 1700205716320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953347.9591836735,
            "unit": "ns",
            "range": "± 99084.67921725307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1762386.3157894737,
            "unit": "ns",
            "range": "± 121912.01275224467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1349880.612244898,
            "unit": "ns",
            "range": "± 124405.72521230955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5335192.307692308,
            "unit": "ns",
            "range": "± 248123.88684113798"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34273.846153846156,
            "unit": "ns",
            "range": "± 1610.6362216408577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5321300,
            "unit": "ns",
            "range": "± 87322.58748865774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13287326.666666666,
            "unit": "ns",
            "range": "± 134875.1987509017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32686721.42857143,
            "unit": "ns",
            "range": "± 402857.74771016865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65078420,
            "unit": "ns",
            "range": "± 1052924.0904669787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132777206.66666667,
            "unit": "ns",
            "range": "± 2106803.7326266356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3201469.363839286,
            "unit": "ns",
            "range": "± 6621.456465051952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1011953.7248883928,
            "unit": "ns",
            "range": "± 4142.533358269134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 694068.06640625,
            "unit": "ns",
            "range": "± 2552.131172317539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905461.6768973214,
            "unit": "ns",
            "range": "± 3775.7750717193967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617884.1861979166,
            "unit": "ns",
            "range": "± 854.8770262756253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 546849.8502604166,
            "unit": "ns",
            "range": "± 979.1137940607014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2108303.5714285714,
            "unit": "ns",
            "range": "± 59861.86247825137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245373.611111111,
            "unit": "ns",
            "range": "± 110781.26652159347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2854376.3157894737,
            "unit": "ns",
            "range": "± 63022.02297702732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2570906.6666666665,
            "unit": "ns",
            "range": "± 75946.88792380328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6322050.769230769,
            "unit": "ns",
            "range": "± 292918.87108628143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173881.66666666666,
            "unit": "ns",
            "range": "± 7741.8189004268015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168194.38202247192,
            "unit": "ns",
            "range": "± 9283.139157910307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142285.1851851852,
            "unit": "ns",
            "range": "± 3978.1812334188503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2728342.8571428573,
            "unit": "ns",
            "range": "± 24708.873033657495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2512783.3333333335,
            "unit": "ns",
            "range": "± 51869.45151049893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10813.636363636364,
            "unit": "ns",
            "range": "± 1210.697701211974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53819.78021978022,
            "unit": "ns",
            "range": "± 4275.517376885379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45081.818181818184,
            "unit": "ns",
            "range": "± 2117.248511332871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55167.010309278354,
            "unit": "ns",
            "range": "± 12075.032105284134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2551.5789473684213,
            "unit": "ns",
            "range": "± 467.8750419409232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10284.946236559139,
            "unit": "ns",
            "range": "± 1318.4267828972083"
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
          "id": "ebd89d9e125ae385e8e84e5db9972d16f1829116",
          "message": "Commit frequently",
          "timestamp": "2023-11-24T17:32:56+09:00",
          "tree_id": "052793f7c80cd2d7d33fa75139da8fee48235591",
          "url": "https://github.com/greymistcube/libplanet/commit/ebd89d9e125ae385e8e84e5db9972d16f1829116"
        },
        "date": 1700815504905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950568.085106383,
            "unit": "ns",
            "range": "± 85799.68695930806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1714316.9811320754,
            "unit": "ns",
            "range": "± 70374.19964252922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1326646.4646464647,
            "unit": "ns",
            "range": "± 119138.06885987138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5428047.368421053,
            "unit": "ns",
            "range": "± 310063.8341422636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35395.555555555555,
            "unit": "ns",
            "range": "± 2073.639318919467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5151115.384615385,
            "unit": "ns",
            "range": "± 19435.61362352825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13357933.333333334,
            "unit": "ns",
            "range": "± 136736.7892112782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32908383.333333332,
            "unit": "ns",
            "range": "± 144716.02181409273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66124993.333333336,
            "unit": "ns",
            "range": "± 498217.9979926553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131160321.42857143,
            "unit": "ns",
            "range": "± 1146092.0779082088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277536.42578125,
            "unit": "ns",
            "range": "± 7123.836271413541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061531.724330357,
            "unit": "ns",
            "range": "± 1178.6083020803987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736844.4791666666,
            "unit": "ns",
            "range": "± 2538.843486182901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1889741.1411830357,
            "unit": "ns",
            "range": "± 7633.072824263109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615658.5611979166,
            "unit": "ns",
            "range": "± 1844.7975669192708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561532.2721354166,
            "unit": "ns",
            "range": "± 1402.5914637569622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2210316.6666666665,
            "unit": "ns",
            "range": "± 64487.60952004033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2370356.8181818184,
            "unit": "ns",
            "range": "± 86543.43283221887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2898430.434782609,
            "unit": "ns",
            "range": "± 71314.54929193245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2865338.709677419,
            "unit": "ns",
            "range": "± 311178.05053931323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6118748.780487805,
            "unit": "ns",
            "range": "± 219026.4254855464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186521.42857142858,
            "unit": "ns",
            "range": "± 5839.125214898318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179519.31818181818,
            "unit": "ns",
            "range": "± 11826.114274778736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148276.92307692306,
            "unit": "ns",
            "range": "± 5132.120806022724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2860326.6666666665,
            "unit": "ns",
            "range": "± 47942.02550501813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2571571.4285714286,
            "unit": "ns",
            "range": "± 50568.48962404496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13684.444444444445,
            "unit": "ns",
            "range": "± 1441.512245199005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59978.49462365591,
            "unit": "ns",
            "range": "± 6205.604925534544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47809.278350515466,
            "unit": "ns",
            "range": "± 2982.06732242314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67460.60606060606,
            "unit": "ns",
            "range": "± 15006.167563207633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2604.255319148936,
            "unit": "ns",
            "range": "± 480.34819217323013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12138.541666666666,
            "unit": "ns",
            "range": "± 1314.4836722308132"
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
          "id": "a795dbbbc6f39719823c74582623c6a04ed8628a",
          "message": "Remove unused parameter",
          "timestamp": "2023-11-24T17:38:07+09:00",
          "tree_id": "a4ab10da4f1463df43fa4fbfc8f875e0d2a70406",
          "url": "https://github.com/greymistcube/libplanet/commit/a795dbbbc6f39719823c74582623c6a04ed8628a"
        },
        "date": 1700815795066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941121.5789473684,
            "unit": "ns",
            "range": "± 91298.86236288487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740330.5263157894,
            "unit": "ns",
            "range": "± 110373.75196150789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1375805.4347826086,
            "unit": "ns",
            "range": "± 115811.72136404585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5475375.757575758,
            "unit": "ns",
            "range": "± 334822.95385280286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34995.78313253012,
            "unit": "ns",
            "range": "± 1882.5450601816833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5058328.571428572,
            "unit": "ns",
            "range": "± 72577.23926507993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13208000,
            "unit": "ns",
            "range": "± 218540.91803857434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34355362.5,
            "unit": "ns",
            "range": "± 659211.8646535422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65497535.71428572,
            "unit": "ns",
            "range": "± 810936.2733258418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137462635.7142857,
            "unit": "ns",
            "range": "± 1892753.8665646953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310013.2254464286,
            "unit": "ns",
            "range": "± 6133.775156902353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042917.2916666666,
            "unit": "ns",
            "range": "± 2156.111501180226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742143.6872209822,
            "unit": "ns",
            "range": "± 2507.6537595762084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924517.6682692308,
            "unit": "ns",
            "range": "± 3781.5712991326423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612018.671875,
            "unit": "ns",
            "range": "± 1016.7580679456453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565991.7317708334,
            "unit": "ns",
            "range": "± 2421.4547206379275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186858.3333333335,
            "unit": "ns",
            "range": "± 92905.20828236005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2342691.4285714286,
            "unit": "ns",
            "range": "± 76339.54865648362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2849778.5714285714,
            "unit": "ns",
            "range": "± 46532.539129110475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2644356.6666666665,
            "unit": "ns",
            "range": "± 72076.86836997698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6092028.125,
            "unit": "ns",
            "range": "± 176284.83958451648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172183.33333333334,
            "unit": "ns",
            "range": "± 8388.979577694678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166257.57575757575,
            "unit": "ns",
            "range": "± 7311.86728978332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139146.15384615384,
            "unit": "ns",
            "range": "± 3705.2914346087023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2729823.076923077,
            "unit": "ns",
            "range": "± 19377.7429820122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2535834.782608696,
            "unit": "ns",
            "range": "± 58623.75107175692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11393.258426966293,
            "unit": "ns",
            "range": "± 1144.2343363784787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57594.318181818184,
            "unit": "ns",
            "range": "± 4572.012760175309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48677.083333333336,
            "unit": "ns",
            "range": "± 5258.4264039362615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62372.916666666664,
            "unit": "ns",
            "range": "± 11629.893235394153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2448.453608247423,
            "unit": "ns",
            "range": "± 496.6792648140448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10073.404255319148,
            "unit": "ns",
            "range": "± 1511.6163486010732"
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
          "id": "1d6bd55ec5931c767362676d2c1e8cc27d34a5bc",
          "message": "Remove unnecessary Flush() method",
          "timestamp": "2023-11-24T18:15:48+09:00",
          "tree_id": "617df5d29b34345413981eaebe17f3958963a57f",
          "url": "https://github.com/greymistcube/libplanet/commit/1d6bd55ec5931c767362676d2c1e8cc27d34a5bc"
        },
        "date": 1700818128758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925513.4020618557,
            "unit": "ns",
            "range": "± 107970.2858707605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1695201.0869565217,
            "unit": "ns",
            "range": "± 117468.95638036143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1272620,
            "unit": "ns",
            "range": "± 105780.8398771081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5281325.510204081,
            "unit": "ns",
            "range": "± 305769.8859550324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34093.10344827586,
            "unit": "ns",
            "range": "± 1853.079969373947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4890400,
            "unit": "ns",
            "range": "± 41690.32661581501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13268465,
            "unit": "ns",
            "range": "± 303021.42928390915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31565735.714285713,
            "unit": "ns",
            "range": "± 249523.76981621754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63591423.333333336,
            "unit": "ns",
            "range": "± 531594.038807094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126725957.14285715,
            "unit": "ns",
            "range": "± 691035.8553697437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3241891.9921875,
            "unit": "ns",
            "range": "± 5617.835493910767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1031991.0456730769,
            "unit": "ns",
            "range": "± 1888.8704875502349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732896.8424479166,
            "unit": "ns",
            "range": "± 1458.370021021233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1902453.0859375,
            "unit": "ns",
            "range": "± 6829.24667226859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608999.4698660715,
            "unit": "ns",
            "range": "± 1632.2103269988302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 542135.0435697115,
            "unit": "ns",
            "range": "± 559.551529186924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116717.3913043477,
            "unit": "ns",
            "range": "± 52925.64812308879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2233646.6666666665,
            "unit": "ns",
            "range": "± 66741.78618368336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2828248,
            "unit": "ns",
            "range": "± 75103.93975462716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2478387.323943662,
            "unit": "ns",
            "range": "± 120455.71199120383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6128405.9701492535,
            "unit": "ns",
            "range": "± 287732.54304554017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167139.21568627452,
            "unit": "ns",
            "range": "± 6543.854473668331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158440,
            "unit": "ns",
            "range": "± 4243.794990143533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142109.52380952382,
            "unit": "ns",
            "range": "± 2230.6736116932843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2669964.285714286,
            "unit": "ns",
            "range": "± 26484.23644773963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472035.714285714,
            "unit": "ns",
            "range": "± 36142.01916676141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9840.449438202248,
            "unit": "ns",
            "range": "± 1106.6656616245934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51181.05263157895,
            "unit": "ns",
            "range": "± 3974.7954513634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42995.12195121951,
            "unit": "ns",
            "range": "± 1465.5973559460654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49817.708333333336,
            "unit": "ns",
            "range": "± 10007.365653585435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2190.425531914894,
            "unit": "ns",
            "range": "± 324.6401312607282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9251.063829787234,
            "unit": "ns",
            "range": "± 1123.3345790667668"
          }
        ]
      }
    ]
  }
}