window.BENCHMARK_DATA = {
  "lastUpdate": 1700205738751,
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
      }
    ]
  }
}