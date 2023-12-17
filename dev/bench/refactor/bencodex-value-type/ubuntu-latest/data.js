window.BENCHMARK_DATA = {
  "lastUpdate": 1702797390394,
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
          "id": "12c4fdea1532e2402db242e451b1655bdbe69092",
          "message": "Updated tests",
          "timestamp": "2023-12-13T09:33:00+09:00",
          "tree_id": "85070767558264a9019ca1c00801a3da551959e4",
          "url": "https://github.com/greymistcube/libplanet/commit/12c4fdea1532e2402db242e451b1655bdbe69092"
        },
        "date": 1702517011882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214785.12105263158,
            "unit": "ns",
            "range": "± 12997.94792410902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209044.5164835165,
            "unit": "ns",
            "range": "± 12703.900527320679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175841.16091954024,
            "unit": "ns",
            "range": "± 9624.465866029239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3160165.933333333,
            "unit": "ns",
            "range": "± 39059.79840754552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2933800.6666666665,
            "unit": "ns",
            "range": "± 57670.187706627476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18380.408163265307,
            "unit": "ns",
            "range": "± 3375.891640406683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88518.29166666667,
            "unit": "ns",
            "range": "± 13157.826408976975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102019.75862068965,
            "unit": "ns",
            "range": "± 2686.063937319709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94716.56842105264,
            "unit": "ns",
            "range": "± 11258.944323980002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7004.96875,
            "unit": "ns",
            "range": "± 1816.0127315408395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17662.79292929293,
            "unit": "ns",
            "range": "± 4695.03210580517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43227.617021276594,
            "unit": "ns",
            "range": "± 5677.588764108476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067664.7395833333,
            "unit": "ns",
            "range": "± 92083.12063145019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1998225.3196721312,
            "unit": "ns",
            "range": "± 84913.14735236001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1558068.0416666667,
            "unit": "ns",
            "range": "± 107153.41657641275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5949440.1486486485,
            "unit": "ns",
            "range": "± 200268.7047717552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2579935.4365079366,
            "unit": "ns",
            "range": "± 115885.69642580001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2716287.2,
            "unit": "ns",
            "range": "± 30792.822891056938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3315624,
            "unit": "ns",
            "range": "± 43061.92671562129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3182046.1666666665,
            "unit": "ns",
            "range": "± 146158.41895067587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7082248.741935484,
            "unit": "ns",
            "range": "± 184630.3795540282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5902722.916666667,
            "unit": "ns",
            "range": "± 43243.0913062387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14882433.576923076,
            "unit": "ns",
            "range": "± 68137.72856680497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37392189.428571425,
            "unit": "ns",
            "range": "± 276842.7934602581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75893386.76923077,
            "unit": "ns",
            "range": "± 660881.8783416285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150343991.23076922,
            "unit": "ns",
            "range": "± 1040786.5218708521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728972.7879464286,
            "unit": "ns",
            "range": "± 26588.600867078952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212337.2785993305,
            "unit": "ns",
            "range": "± 3332.5199738434485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772084.0970865885,
            "unit": "ns",
            "range": "± 4347.44217547059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959185.4254807692,
            "unit": "ns",
            "range": "± 13276.259077481465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626257.6910807291,
            "unit": "ns",
            "range": "± 4050.602727483309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591322.6735491072,
            "unit": "ns",
            "range": "± 1451.1430386645504"
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
          "id": "94ab506bcd153ff3d15d4961f03b4c20e94ab411",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:19:12+09:00",
          "tree_id": "0121cc3330c21941378a8b93fc4bb14de81402ba",
          "url": "https://github.com/greymistcube/libplanet/commit/94ab506bcd153ff3d15d4961f03b4c20e94ab411"
        },
        "date": 1702517412653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199436.28169014084,
            "unit": "ns",
            "range": "± 9737.19331691354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192955.2528735632,
            "unit": "ns",
            "range": "± 10559.577902084682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164150.93333333332,
            "unit": "ns",
            "range": "± 2388.24656141179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3052562.785714286,
            "unit": "ns",
            "range": "± 42030.83962297313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800884.785714286,
            "unit": "ns",
            "range": "± 42533.133023523005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19816.305263157894,
            "unit": "ns",
            "range": "± 4831.507773280498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65895.59677419355,
            "unit": "ns",
            "range": "± 6709.883670449715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56127.010416666664,
            "unit": "ns",
            "range": "± 7047.120239008856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65116.46464646464,
            "unit": "ns",
            "range": "± 16352.098590471893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5734.030612244898,
            "unit": "ns",
            "range": "± 650.8047231797134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13296.469387755102,
            "unit": "ns",
            "range": "± 2698.838452723429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41930.65789473684,
            "unit": "ns",
            "range": "± 6012.673217420424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942492.7362637363,
            "unit": "ns",
            "range": "± 79870.86496795733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844989.4411764706,
            "unit": "ns",
            "range": "± 84555.48096807656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1412889.0612244897,
            "unit": "ns",
            "range": "± 122633.43223370571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6013745.670454546,
            "unit": "ns",
            "range": "± 330509.0326907534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2342515.282608696,
            "unit": "ns",
            "range": "± 56754.15332575511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486875.4183673467,
            "unit": "ns",
            "range": "± 96759.88856288297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101745.8076923075,
            "unit": "ns",
            "range": "± 29077.48253484305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2944003.6507936507,
            "unit": "ns",
            "range": "± 134676.2184470542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6942842.736842105,
            "unit": "ns",
            "range": "± 235013.46085101616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5573944.142857143,
            "unit": "ns",
            "range": "± 15949.74086048057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14136172.233333332,
            "unit": "ns",
            "range": "± 97421.07298472563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36089498.07692308,
            "unit": "ns",
            "range": "± 286573.61473725544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73339717.38461539,
            "unit": "ns",
            "range": "± 635727.5862370268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149549337.69230768,
            "unit": "ns",
            "range": "± 1017007.5892674371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3821201.4916992188,
            "unit": "ns",
            "range": "± 70563.93115640762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222075.0685096155,
            "unit": "ns",
            "range": "± 2024.50142000595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774058.197265625,
            "unit": "ns",
            "range": "± 2996.9540646822547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927216.8317307692,
            "unit": "ns",
            "range": "± 2615.579726474746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619569.0176532452,
            "unit": "ns",
            "range": "± 1329.1792899735428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572865.8701923077,
            "unit": "ns",
            "range": "± 2916.8550229626317"
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
          "id": "f5a81643918efef744a1a7f883191d66384c3830",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:23:23+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/greymistcube/libplanet/commit/f5a81643918efef744a1a7f883191d66384c3830"
        },
        "date": 1702517671293,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196483.3076923077,
            "unit": "ns",
            "range": "± 7939.08064277525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194879.04166666666,
            "unit": "ns",
            "range": "± 7562.420897306244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165774.9375,
            "unit": "ns",
            "range": "± 3012.7812061006575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106393.785714286,
            "unit": "ns",
            "range": "± 38145.921887442404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2780571.714285714,
            "unit": "ns",
            "range": "± 26964.90815123233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13452.744897959185,
            "unit": "ns",
            "range": "± 2739.7720663385785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62019.520833333336,
            "unit": "ns",
            "range": "± 5594.197239770522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51884.69047619047,
            "unit": "ns",
            "range": "± 2391.8398901071605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59037.875,
            "unit": "ns",
            "range": "± 12566.574161346902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2856.642105263158,
            "unit": "ns",
            "range": "± 625.4558663578736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14507.0206185567,
            "unit": "ns",
            "range": "± 3022.840858155969"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41639.742105263154,
            "unit": "ns",
            "range": "± 4770.382898044241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 921316.4175824176,
            "unit": "ns",
            "range": "± 68572.81572671748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1816180.6142857142,
            "unit": "ns",
            "range": "± 59116.22141011791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1369386.4777777777,
            "unit": "ns",
            "range": "± 87564.80447654954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6160922.673469388,
            "unit": "ns",
            "range": "± 372484.8768128846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2396318.4583333335,
            "unit": "ns",
            "range": "± 60730.23592905093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528955.015151515,
            "unit": "ns",
            "range": "± 78902.48260951664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3093083.6428571427,
            "unit": "ns",
            "range": "± 50348.44954240573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2958822.769230769,
            "unit": "ns",
            "range": "± 41881.78736864399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7229197.5,
            "unit": "ns",
            "range": "± 250174.49693984006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5603853.428571428,
            "unit": "ns",
            "range": "± 19890.29234311315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14420979,
            "unit": "ns",
            "range": "± 349757.9301281442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36338007.35714286,
            "unit": "ns",
            "range": "± 297202.2302423326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74501186.03846154,
            "unit": "ns",
            "range": "± 243091.86873951426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148254753.66666666,
            "unit": "ns",
            "range": "± 1143173.2833881227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783763.683965774,
            "unit": "ns",
            "range": "± 88958.99266745268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194860.3357872595,
            "unit": "ns",
            "range": "± 3335.7807511192977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765849.992563101,
            "unit": "ns",
            "range": "± 1684.2058432907954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929002.4076450893,
            "unit": "ns",
            "range": "± 3687.099927243028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620022.0407151442,
            "unit": "ns",
            "range": "± 6778.028170184173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583020.2325721154,
            "unit": "ns",
            "range": "± 5734.274157744253"
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
          "id": "036ce412e50c6df0be53f97821ade6a96bad4d2a",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:56:39+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/greymistcube/libplanet/commit/036ce412e50c6df0be53f97821ade6a96bad4d2a"
        },
        "date": 1702519691640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715239.0948660714,
            "unit": "ns",
            "range": "± 38654.29627144797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219160.6774338942,
            "unit": "ns",
            "range": "± 5749.138565013902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772646.5795200893,
            "unit": "ns",
            "range": "± 12251.349282936164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922530.1240234375,
            "unit": "ns",
            "range": "± 4549.043392406678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612410.9744466146,
            "unit": "ns",
            "range": "± 951.9803084450674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578536.8267299107,
            "unit": "ns",
            "range": "± 1727.1808455106516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2438997.805084746,
            "unit": "ns",
            "range": "± 96729.62483275033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2633306.533333333,
            "unit": "ns",
            "range": "± 43583.19968399794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3208875.3103448274,
            "unit": "ns",
            "range": "± 90447.89983232788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2910345.205128205,
            "unit": "ns",
            "range": "± 142686.46111668347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6950474.518518519,
            "unit": "ns",
            "range": "± 188704.53788424225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41631.914893617024,
            "unit": "ns",
            "range": "± 5291.540047408143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204368.62921348316,
            "unit": "ns",
            "range": "± 11026.932461418375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195675.55357142858,
            "unit": "ns",
            "range": "± 8175.02437342965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167860.36842105264,
            "unit": "ns",
            "range": "± 5743.96291027819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3079642.076923077,
            "unit": "ns",
            "range": "± 35785.97633957921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2907408.730769231,
            "unit": "ns",
            "range": "± 17360.230553163005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16608.144444444446,
            "unit": "ns",
            "range": "± 2232.445973331761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73225.01578947369,
            "unit": "ns",
            "range": "± 9050.277025104317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76574.67,
            "unit": "ns",
            "range": "± 18481.107709299446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76257.28865979382,
            "unit": "ns",
            "range": "± 14688.67600253591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4000.3571428571427,
            "unit": "ns",
            "range": "± 747.9780978883238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15534.527472527472,
            "unit": "ns",
            "range": "± 2506.136824945515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5666279.266666667,
            "unit": "ns",
            "range": "± 59872.6024100538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14823628.933333334,
            "unit": "ns",
            "range": "± 81422.07616880139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37271899.4,
            "unit": "ns",
            "range": "± 199471.46376103885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76018321.85714285,
            "unit": "ns",
            "range": "± 272524.8409930473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150227975.53846154,
            "unit": "ns",
            "range": "± 632543.0684391663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974554.6979166666,
            "unit": "ns",
            "range": "± 76545.57910835935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900194.7894736843,
            "unit": "ns",
            "range": "± 81986.09851605001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1429987.9892473118,
            "unit": "ns",
            "range": "± 92350.50322259903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6225929.9948453605,
            "unit": "ns",
            "range": "± 384594.2753356322"
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
          "id": "9dc6ae2bd558d913b25a18a94aa052a747d8d7db",
          "message": "Changelog",
          "timestamp": "2023-12-17T16:03:29+09:00",
          "tree_id": "88f79895e70175a13d674a8d17214fe3f008f307",
          "url": "https://github.com/greymistcube/libplanet/commit/9dc6ae2bd558d913b25a18a94aa052a747d8d7db"
        },
        "date": 1702797284825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3741452.8828125,
            "unit": "ns",
            "range": "± 46600.994259764135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201675.1533203125,
            "unit": "ns",
            "range": "± 5161.922779277745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775896.1419270834,
            "unit": "ns",
            "range": "± 1968.797419355618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919629.675,
            "unit": "ns",
            "range": "± 24384.123101779423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620342.7254464285,
            "unit": "ns",
            "range": "± 462.8570761399505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570951.41796875,
            "unit": "ns",
            "range": "± 742.4306576773494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480002.6333333333,
            "unit": "ns",
            "range": "± 43529.79789239069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486762.0975609757,
            "unit": "ns",
            "range": "± 89433.90214421063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3187158.214285714,
            "unit": "ns",
            "range": "± 51565.984921753894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3058154.619047619,
            "unit": "ns",
            "range": "± 100506.45697354834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6952768.947368421,
            "unit": "ns",
            "range": "± 153299.94940474402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38260.239130434784,
            "unit": "ns",
            "range": "± 4453.2963266503475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204843.3186813187,
            "unit": "ns",
            "range": "± 12481.214395935749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209392.60606060605,
            "unit": "ns",
            "range": "± 20329.66328350716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167711.66666666666,
            "unit": "ns",
            "range": "± 3839.721348396695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3216421.033333333,
            "unit": "ns",
            "range": "± 43466.74357296731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2823538.6153846155,
            "unit": "ns",
            "range": "± 31136.1069862051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13984.729166666666,
            "unit": "ns",
            "range": "± 2506.9769401629474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65946.64583333333,
            "unit": "ns",
            "range": "± 8261.765581634303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75171.44,
            "unit": "ns",
            "range": "± 18256.9580355966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76239.69473684211,
            "unit": "ns",
            "range": "± 18089.801930789203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6174.555555555556,
            "unit": "ns",
            "range": "± 2005.654528119886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12584.010869565218,
            "unit": "ns",
            "range": "± 1796.396695552695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5652333.115384615,
            "unit": "ns",
            "range": "± 12029.55503152175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14300794.57142857,
            "unit": "ns",
            "range": "± 135358.4782843544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36061018.13333333,
            "unit": "ns",
            "range": "± 273703.5855161739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76715464.21428572,
            "unit": "ns",
            "range": "± 552554.0037484925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148880243.63333333,
            "unit": "ns",
            "range": "± 851055.7194426113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977662.96875,
            "unit": "ns",
            "range": "± 83572.6376658688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870550.588888889,
            "unit": "ns",
            "range": "± 71144.84328173636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1433965.9468085107,
            "unit": "ns",
            "range": "± 120406.55906629555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6033236.537037037,
            "unit": "ns",
            "range": "± 251905.00125737826"
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
          "id": "065a853f3002a398d0666e85502bd823d477b768",
          "message": "Fixed changelog due to reverting",
          "timestamp": "2023-12-17T16:05:29+09:00",
          "tree_id": "3c00699ed21dbef772b741b88a672b59f77cf114",
          "url": "https://github.com/greymistcube/libplanet/commit/065a853f3002a398d0666e85502bd823d477b768"
        },
        "date": 1702797384455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3615812.573918269,
            "unit": "ns",
            "range": "± 12223.66657646665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200016.517299107,
            "unit": "ns",
            "range": "± 3148.361044386953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762258.7715541294,
            "unit": "ns",
            "range": "± 9456.669430571426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956790.436328125,
            "unit": "ns",
            "range": "± 25189.245983205317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625333.1811147836,
            "unit": "ns",
            "range": "± 2154.551234095612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574952.4075753348,
            "unit": "ns",
            "range": "± 1050.747727767738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2444880.507936508,
            "unit": "ns",
            "range": "± 110642.8937746777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2559251.8285714285,
            "unit": "ns",
            "range": "± 83499.98393711918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153158.785714286,
            "unit": "ns",
            "range": "± 89092.83667690442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2989909.5,
            "unit": "ns",
            "range": "± 147380.3129272925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7049250.214285715,
            "unit": "ns",
            "range": "± 253725.57331182915"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39997.32989690721,
            "unit": "ns",
            "range": "± 4859.81010157472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197710.23913043478,
            "unit": "ns",
            "range": "± 7563.509401314188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189489.70588235295,
            "unit": "ns",
            "range": "± 9023.493482494549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167278.66666666666,
            "unit": "ns",
            "range": "± 5310.9596511992695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3088203.5714285714,
            "unit": "ns",
            "range": "± 42696.519522563656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2797803.9285714286,
            "unit": "ns",
            "range": "± 47719.10364827179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12730.630434782608,
            "unit": "ns",
            "range": "± 1336.7390592296383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60474.86956521739,
            "unit": "ns",
            "range": "± 5974.9519419050175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60974.94736842105,
            "unit": "ns",
            "range": "± 5191.685620519297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64019.42857142857,
            "unit": "ns",
            "range": "± 15467.029486427591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3489.1414141414143,
            "unit": "ns",
            "range": "± 991.053757990227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11539.802197802197,
            "unit": "ns",
            "range": "± 881.3543267769492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5720207,
            "unit": "ns",
            "range": "± 80305.12072357885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14306988.142857144,
            "unit": "ns",
            "range": "± 69160.34257140002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36796789.461538464,
            "unit": "ns",
            "range": "± 198019.0438866152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73837413.07142857,
            "unit": "ns",
            "range": "± 432452.8358933784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152075865.91666666,
            "unit": "ns",
            "range": "± 563302.9214501423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971295.9545454546,
            "unit": "ns",
            "range": "± 81614.00924089512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1896627.809859155,
            "unit": "ns",
            "range": "± 92454.79626693123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1440019.4239130435,
            "unit": "ns",
            "range": "± 129071.17221770897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6172664.259259259,
            "unit": "ns",
            "range": "± 323111.80780558666"
          }
        ]
      }
    ]
  }
}