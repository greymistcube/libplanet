window.BENCHMARK_DATA = {
  "lastUpdate": 1694421612703,
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
          "id": "a3e6a6f8dfd6d77a0266a59859eb29e337503444",
          "message": "Parallel on Account level",
          "timestamp": "2023-09-07T18:31:10+09:00",
          "tree_id": "e11338d9a9bb3de5c4fbbb380eeebf73e8491981",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e6a6f8dfd6d77a0266a59859eb29e337503444"
        },
        "date": 1694080043749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297952.6315789474,
            "unit": "ns",
            "range": "± 28438.22483171106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2349675.352112676,
            "unit": "ns",
            "range": "± 113966.35809158755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608081.6326530613,
            "unit": "ns",
            "range": "± 102112.5802269531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4088426.3157894737,
            "unit": "ns",
            "range": "± 140849.41294375452"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46503.57142857143,
            "unit": "ns",
            "range": "± 2488.5010937573784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7120030.769230769,
            "unit": "ns",
            "range": "± 16225.770891567558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19622315.789473683,
            "unit": "ns",
            "range": "± 413972.3974469231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49893741.025641024,
            "unit": "ns",
            "range": "± 1715706.4576433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97471400,
            "unit": "ns",
            "range": "± 1813328.7949435504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192678016.66666666,
            "unit": "ns",
            "range": "± 4922096.935662479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4365599.158653846,
            "unit": "ns",
            "range": "± 13806.669462594025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400601.09375,
            "unit": "ns",
            "range": "± 6144.400173976985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1037416.5234375,
            "unit": "ns",
            "range": "± 3320.5571861981043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613704.609375,
            "unit": "ns",
            "range": "± 16723.497552861514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833812.5260416666,
            "unit": "ns",
            "range": "± 4840.977567278857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750944.0987723215,
            "unit": "ns",
            "range": "± 2752.8992200082034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3165176.923076923,
            "unit": "ns",
            "range": "± 46764.59048336597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3197568.888888889,
            "unit": "ns",
            "range": "± 105093.25474034568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3899314.814814815,
            "unit": "ns",
            "range": "± 107741.5986505309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3652454.1666666665,
            "unit": "ns",
            "range": "± 93599.35887539005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5683217.5,
            "unit": "ns",
            "range": "± 200512.71509973292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240861.53846153847,
            "unit": "ns",
            "range": "± 8088.3156591733705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229637.5,
            "unit": "ns",
            "range": "± 6674.7420063298205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204652.63157894736,
            "unit": "ns",
            "range": "± 4470.9393023853545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3890377.777777778,
            "unit": "ns",
            "range": "± 73850.89553446072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3604242.8571428573,
            "unit": "ns",
            "range": "± 55691.46757304534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18079.381443298967,
            "unit": "ns",
            "range": "± 1541.1669107320579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78788.88888888889,
            "unit": "ns",
            "range": "± 4221.678787552223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65578.57142857143,
            "unit": "ns",
            "range": "± 2006.9836056324202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72486.73469387754,
            "unit": "ns",
            "range": "± 13555.343890537883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4344.210526315789,
            "unit": "ns",
            "range": "± 553.4640985634534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15903.260869565218,
            "unit": "ns",
            "range": "± 1151.0579068081715"
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
          "id": "f24a4327a1ed2583f43238d02507c97d43621e7e",
          "message": "Remove metrics",
          "timestamp": "2023-09-07T22:12:39+09:00",
          "tree_id": "cdc7d99617b6a4f2ea2964420c4ae7788e6e8fc9",
          "url": "https://github.com/greymistcube/libplanet/commit/f24a4327a1ed2583f43238d02507c97d43621e7e"
        },
        "date": 1694093750478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597375.2577319588,
            "unit": "ns",
            "range": "± 180538.27850747693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3111467.7083333335,
            "unit": "ns",
            "range": "± 325599.0425741749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110277.551020408,
            "unit": "ns",
            "range": "± 264884.7921249827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5419802.06185567,
            "unit": "ns",
            "range": "± 441247.9622189445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65702.08333333333,
            "unit": "ns",
            "range": "± 14743.255222690937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8633139.583333334,
            "unit": "ns",
            "range": "± 623883.7728260081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24878429.62962963,
            "unit": "ns",
            "range": "± 1303360.4256348705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65405171.79487179,
            "unit": "ns",
            "range": "± 2277648.389174644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129168008.33333333,
            "unit": "ns",
            "range": "± 3336390.6880648434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252108789.13043478,
            "unit": "ns",
            "range": "± 6265549.743256164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5084434.615384615,
            "unit": "ns",
            "range": "± 59896.17939612262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1690747.7590460526,
            "unit": "ns",
            "range": "± 36917.20596346488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211901.8424479167,
            "unit": "ns",
            "range": "± 20755.374714702222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3076603.639914773,
            "unit": "ns",
            "range": "± 69559.96795861497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998195.166015625,
            "unit": "ns",
            "range": "± 19167.87622878867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902805.7826450893,
            "unit": "ns",
            "range": "± 9593.40748512604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3699850,
            "unit": "ns",
            "range": "± 339728.74597552867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3945041.414141414,
            "unit": "ns",
            "range": "± 319877.3668110636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5158440,
            "unit": "ns",
            "range": "± 330283.1523456869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4300402.083333333,
            "unit": "ns",
            "range": "± 406735.9181993997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7346011.855670103,
            "unit": "ns",
            "range": "± 440955.41073788924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322825.2525252525,
            "unit": "ns",
            "range": "± 48225.11273869735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306169.1489361702,
            "unit": "ns",
            "range": "± 37880.74673843495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266528.5714285714,
            "unit": "ns",
            "range": "± 31494.879308871976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4548381.818181818,
            "unit": "ns",
            "range": "± 342324.1775323372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174377.0833333335,
            "unit": "ns",
            "range": "± 318721.04499378416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28386.59793814433,
            "unit": "ns",
            "range": "± 10303.788025789952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103000,
            "unit": "ns",
            "range": "± 17447.928742154592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113500.52631578948,
            "unit": "ns",
            "range": "± 22348.301252421425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120690.625,
            "unit": "ns",
            "range": "± 23314.062068450854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7751.282051282052,
            "unit": "ns",
            "range": "± 783.3898350755095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28060.60606060606,
            "unit": "ns",
            "range": "± 9672.777054986489"
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
          "id": "ef5555cd29e15a4e969485539a0ee47e8da59eae",
          "message": "More caching",
          "timestamp": "2023-09-08T20:40:03+09:00",
          "tree_id": "3b0d2d056f0818d09d76a7fd624d6c5176d26d78",
          "url": "https://github.com/greymistcube/libplanet/commit/ef5555cd29e15a4e969485539a0ee47e8da59eae"
        },
        "date": 1694174271618,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1476955,
            "unit": "ns",
            "range": "± 95634.95871428412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2758261.111111111,
            "unit": "ns",
            "range": "± 114605.60206707712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1920880.303030303,
            "unit": "ns",
            "range": "± 137697.84908917345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4900493.181818182,
            "unit": "ns",
            "range": "± 182097.28986365255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53619.14893617021,
            "unit": "ns",
            "range": "± 3684.6390405709935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8322240,
            "unit": "ns",
            "range": "± 103767.11425109595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21824473.333333332,
            "unit": "ns",
            "range": "± 118425.12683829672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54898846.666666664,
            "unit": "ns",
            "range": "± 789985.17243469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109950246.66666667,
            "unit": "ns",
            "range": "± 829319.8141219333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217902426.66666666,
            "unit": "ns",
            "range": "± 1913583.4396928363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4565273.90625,
            "unit": "ns",
            "range": "± 20622.056231428356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1439364.5052083333,
            "unit": "ns",
            "range": "± 3199.7065677530354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1088894.4791666667,
            "unit": "ns",
            "range": "± 4160.022883526948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653283.8541666665,
            "unit": "ns",
            "range": "± 6195.370324099256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832498.4114583334,
            "unit": "ns",
            "range": "± 2885.5281692006088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771688.4765625,
            "unit": "ns",
            "range": "± 2466.674772521544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3622685.714285714,
            "unit": "ns",
            "range": "± 48032.40664293314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3791856.3636363638,
            "unit": "ns",
            "range": "± 150313.22945600946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4558544.444444444,
            "unit": "ns",
            "range": "± 96096.50922363061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4123960,
            "unit": "ns",
            "range": "± 132235.52561733974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6400064.705882353,
            "unit": "ns",
            "range": "± 106524.07557200667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282060,
            "unit": "ns",
            "range": "± 11703.475267344027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271591.5789473684,
            "unit": "ns",
            "range": "± 16198.270614008721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268707.14285714284,
            "unit": "ns",
            "range": "± 7686.589022033817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4328413.333333333,
            "unit": "ns",
            "range": "± 33823.48859819728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4019350,
            "unit": "ns",
            "range": "± 33250.61858618026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30543.010752688173,
            "unit": "ns",
            "range": "± 2648.190434234305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113762.36559139784,
            "unit": "ns",
            "range": "± 7401.526193652557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101824.48979591837,
            "unit": "ns",
            "range": "± 9930.501396426613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106366.31578947368,
            "unit": "ns",
            "range": "± 14675.291222064647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8218.367346938776,
            "unit": "ns",
            "range": "± 1630.782933767433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25467.021276595744,
            "unit": "ns",
            "range": "± 2009.567882608411"
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
          "id": "ba5e7833214ca8143f1722794446e97c1e2c0d51",
          "message": "Detailed logging; huge cache",
          "timestamp": "2023-09-08T21:36:41+09:00",
          "tree_id": "1317f701bc3f6339a40fc2b723aa5cbf8d575424",
          "url": "https://github.com/greymistcube/libplanet/commit/ba5e7833214ca8143f1722794446e97c1e2c0d51"
        },
        "date": 1694177883828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656588.5416666667,
            "unit": "ns",
            "range": "± 157350.58668617177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3026089.8734177216,
            "unit": "ns",
            "range": "± 157221.37878615514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032755.7471264368,
            "unit": "ns",
            "range": "± 110022.10492095504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5347097.297297297,
            "unit": "ns",
            "range": "± 179708.38953780168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54292.47311827957,
            "unit": "ns",
            "range": "± 3571.0866863676274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9337736.956521738,
            "unit": "ns",
            "range": "± 357641.41654188617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26034979.032258064,
            "unit": "ns",
            "range": "± 1149880.9011937696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61440492.85714286,
            "unit": "ns",
            "range": "± 980946.8773072786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130606245.94594595,
            "unit": "ns",
            "range": "± 4303799.486861359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254544905.55555555,
            "unit": "ns",
            "range": "± 5378393.836067574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5780444.243421053,
            "unit": "ns",
            "range": "± 126874.85179124295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1823034.1536458333,
            "unit": "ns",
            "range": "± 25615.772371823485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337170.9765625,
            "unit": "ns",
            "range": "± 18742.545115252797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3325549.78515625,
            "unit": "ns",
            "range": "± 74209.42746261971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047234.8420516305,
            "unit": "ns",
            "range": "± 26439.079805431684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 995487.3109879033,
            "unit": "ns",
            "range": "± 29800.696586098245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4101813.2352941176,
            "unit": "ns",
            "range": "± 196496.05206957436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4168128.3950617285,
            "unit": "ns",
            "range": "± 219045.2015193256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5097947.692307692,
            "unit": "ns",
            "range": "± 238221.92129116465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4660044.444444444,
            "unit": "ns",
            "range": "± 230112.14895233512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7592136,
            "unit": "ns",
            "range": "± 302170.96712197317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300070.8333333333,
            "unit": "ns",
            "range": "± 11675.906422207307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288937.5,
            "unit": "ns",
            "range": "± 12433.397165672988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264351.05263157893,
            "unit": "ns",
            "range": "± 15963.618842222259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5089057.746478873,
            "unit": "ns",
            "range": "± 240338.16869567754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4616330.434782608,
            "unit": "ns",
            "range": "± 115479.94487348957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24149.462365591397,
            "unit": "ns",
            "range": "± 2056.3593650532407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103630.85106382979,
            "unit": "ns",
            "range": "± 8888.569760438493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89071.875,
            "unit": "ns",
            "range": "± 5724.052725583785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100246.9387755102,
            "unit": "ns",
            "range": "± 17959.53185210373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6152.127659574468,
            "unit": "ns",
            "range": "± 790.7705135076634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24448.936170212764,
            "unit": "ns",
            "range": "± 2100.81882043932"
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
          "id": "63c94c408040a87c9c6ca1a4d39782905189e59d",
          "message": "Detailed logging; huge cache",
          "timestamp": "2023-09-09T00:11:19+09:00",
          "tree_id": "b872e70bed61f03f3edf55a49e14b57f2bbd4c5a",
          "url": "https://github.com/greymistcube/libplanet/commit/63c94c408040a87c9c6ca1a4d39782905189e59d"
        },
        "date": 1694187135675,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654674.1935483871,
            "unit": "ns",
            "range": "± 92978.67205560101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3244563.440860215,
            "unit": "ns",
            "range": "± 196970.97269314568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2167289.6907216497,
            "unit": "ns",
            "range": "± 146985.04847754078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6073964.583333333,
            "unit": "ns",
            "range": "± 511196.85073965427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62590.10989010989,
            "unit": "ns",
            "range": "± 5889.558650603721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9669812.5,
            "unit": "ns",
            "range": "± 111054.49638203159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26081016.666666668,
            "unit": "ns",
            "range": "± 647755.4776615785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64931301.78571428,
            "unit": "ns",
            "range": "± 2750092.071615129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131636056.89655173,
            "unit": "ns",
            "range": "± 5680946.459904589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258879740,
            "unit": "ns",
            "range": "± 7549612.0236738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5783436.188616072,
            "unit": "ns",
            "range": "± 161040.83734638352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835166.484375,
            "unit": "ns",
            "range": "± 33337.8335250067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1328878.8311298077,
            "unit": "ns",
            "range": "± 15205.63229510274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3292070.0911458335,
            "unit": "ns",
            "range": "± 44294.109880310214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1061596.1393229167,
            "unit": "ns",
            "range": "± 18674.199801549934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952275.9765625,
            "unit": "ns",
            "range": "± 27975.865818234193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4162558.064516129,
            "unit": "ns",
            "range": "± 126149.57728610256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4346601.923076923,
            "unit": "ns",
            "range": "± 172081.18978721122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5240300,
            "unit": "ns",
            "range": "± 133841.8632111272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4738518.253968254,
            "unit": "ns",
            "range": "± 216029.07870678476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7675742.307692308,
            "unit": "ns",
            "range": "± 295796.67456678115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317046.1538461539,
            "unit": "ns",
            "range": "± 10938.316192796918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301314.89361702127,
            "unit": "ns",
            "range": "± 11066.046360541512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286902.11267605633,
            "unit": "ns",
            "range": "± 14080.806177761777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5003034.615384615,
            "unit": "ns",
            "range": "± 71227.2869780705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4688153.846153846,
            "unit": "ns",
            "range": "± 66721.50597052167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26669.38775510204,
            "unit": "ns",
            "range": "± 2535.415464979005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110000,
            "unit": "ns",
            "range": "± 8213.231636392797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96596.73913043478,
            "unit": "ns",
            "range": "± 7971.480084926892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99445.3488372093,
            "unit": "ns",
            "range": "± 8831.583123376933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8416.494845360825,
            "unit": "ns",
            "range": "± 1590.5764424396539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27839.78494623656,
            "unit": "ns",
            "range": "± 3004.6029827056964"
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
          "id": "5dcaa8d4db717b2b4f5df60e0cbd0bf388f6071c",
          "message": "Use Nibbles directly",
          "timestamp": "2023-09-09T13:08:21+09:00",
          "tree_id": "00033366101154eccf0b61e2ae1b8625b9c1e25a",
          "url": "https://github.com/greymistcube/libplanet/commit/5dcaa8d4db717b2b4f5df60e0cbd0bf388f6071c"
        },
        "date": 1694233544402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428841.4141414142,
            "unit": "ns",
            "range": "± 112271.13137773637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2658975,
            "unit": "ns",
            "range": "± 98519.70858017904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1831909.0909090908,
            "unit": "ns",
            "range": "± 133724.70051847925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5007807,
            "unit": "ns",
            "range": "± 345238.1263561413"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48909.278350515466,
            "unit": "ns",
            "range": "± 4300.268462409906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7756490.909090909,
            "unit": "ns",
            "range": "± 242772.33981092804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21038493.333333332,
            "unit": "ns",
            "range": "± 268027.0467873043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53488407.14285714,
            "unit": "ns",
            "range": "± 372847.5899475151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106161750,
            "unit": "ns",
            "range": "± 793505.5084390258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212978906.66666666,
            "unit": "ns",
            "range": "± 1130887.2821605082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4541737.199519231,
            "unit": "ns",
            "range": "± 22798.781779661906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1427827.4739583333,
            "unit": "ns",
            "range": "± 3554.098970169602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062053.5714285714,
            "unit": "ns",
            "range": "± 1749.094596690989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667157.2395833335,
            "unit": "ns",
            "range": "± 8813.736271421698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834547.1304086539,
            "unit": "ns",
            "range": "± 2048.5300545260534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763766.5559895834,
            "unit": "ns",
            "range": "± 2591.910550171344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3481071.4285714286,
            "unit": "ns",
            "range": "± 63337.95973077395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3646371.4285714286,
            "unit": "ns",
            "range": "± 62849.67937708352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363318.75,
            "unit": "ns",
            "range": "± 135839.8735644288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3992584.6153846155,
            "unit": "ns",
            "range": "± 52276.28280195277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6273686.363636363,
            "unit": "ns",
            "range": "± 152534.4591683015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262637.28813559323,
            "unit": "ns",
            "range": "± 11554.860125462132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250609.25925925927,
            "unit": "ns",
            "range": "± 10464.716432230169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223037,
            "unit": "ns",
            "range": "± 14024.917616207738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4091984.6153846155,
            "unit": "ns",
            "range": "± 35636.471162603586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3843593.75,
            "unit": "ns",
            "range": "± 74598.02024852938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22638.383838383837,
            "unit": "ns",
            "range": "± 2099.645600353325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90637.23404255319,
            "unit": "ns",
            "range": "± 5859.648491100703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79745.91836734694,
            "unit": "ns",
            "range": "± 5865.382777559196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90957.07070707071,
            "unit": "ns",
            "range": "± 16150.17692785661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6291.666666666667,
            "unit": "ns",
            "range": "± 876.3160528949606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21618.947368421053,
            "unit": "ns",
            "range": "± 2358.0687525772646"
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
          "id": "5ce3494629d6661365656da8962c2600715ace1d",
          "message": "Changed ITrie.Get() traversal from recursion to loop",
          "timestamp": "2023-09-10T14:51:26+09:00",
          "tree_id": "c853e69d4c380a552dbf41f02f7bc5b89a7e93fd",
          "url": "https://github.com/greymistcube/libplanet/commit/5ce3494629d6661365656da8962c2600715ace1d"
        },
        "date": 1694326092512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338163.6363636365,
            "unit": "ns",
            "range": "± 95167.82646885025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2564549.411764706,
            "unit": "ns",
            "range": "± 137840.94407230782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1756450.5154639175,
            "unit": "ns",
            "range": "± 121685.71465366505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4931304,
            "unit": "ns",
            "range": "± 401955.80663661135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48582.857142857145,
            "unit": "ns",
            "range": "± 2344.0316704451093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7268128.571428572,
            "unit": "ns",
            "range": "± 111299.32219415858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20250780.769230768,
            "unit": "ns",
            "range": "± 260656.831819845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52082678.571428575,
            "unit": "ns",
            "range": "± 560650.4305489521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104591030,
            "unit": "ns",
            "range": "± 1441785.6400014136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210332013.33333334,
            "unit": "ns",
            "range": "± 1893955.797442661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4525435.46875,
            "unit": "ns",
            "range": "± 31436.461997328177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1421756.1588541667,
            "unit": "ns",
            "range": "± 6963.183106219728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062435.4116586538,
            "unit": "ns",
            "range": "± 2715.935648583963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638383.894230769,
            "unit": "ns",
            "range": "± 5389.375343796323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838636.8294270834,
            "unit": "ns",
            "range": "± 3358.9890533210705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764904.4466145834,
            "unit": "ns",
            "range": "± 2636.3972558080113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3415645,
            "unit": "ns",
            "range": "± 73732.69270604601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3549680.769230769,
            "unit": "ns",
            "range": "± 127385.5180590062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4162653.0303030303,
            "unit": "ns",
            "range": "± 129783.36874588477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3705390.909090909,
            "unit": "ns",
            "range": "± 173576.58183706048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5969484.782608695,
            "unit": "ns",
            "range": "± 149893.99772292312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261432.19178082192,
            "unit": "ns",
            "range": "± 12938.662373609757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244200,
            "unit": "ns",
            "range": "± 9576.87818366094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224518.18181818182,
            "unit": "ns",
            "range": "± 16877.647115954474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4030550,
            "unit": "ns",
            "range": "± 57684.536656115815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3689491.6666666665,
            "unit": "ns",
            "range": "± 91462.25601504874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21178.125,
            "unit": "ns",
            "range": "± 1777.354813080086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90659.1836734694,
            "unit": "ns",
            "range": "± 7303.41096323321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75927.8350515464,
            "unit": "ns",
            "range": "± 6555.813931606199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82309.375,
            "unit": "ns",
            "range": "± 13721.792717962797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5179.381443298969,
            "unit": "ns",
            "range": "± 644.5182542556328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19568.539325842696,
            "unit": "ns",
            "range": "± 1628.3424021223366"
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
          "id": "c68d3d8dc425035b59035d663d4752d62e5ec2ed",
          "message": "Added diff query",
          "timestamp": "2023-09-11T02:51:59+09:00",
          "tree_id": "2701395fbecc840210ea8aacd1d03fa59d8e943b",
          "url": "https://github.com/greymistcube/libplanet/commit/c68d3d8dc425035b59035d663d4752d62e5ec2ed"
        },
        "date": 1694369315760,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390911.3402061856,
            "unit": "ns",
            "range": "± 125514.85791554775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2530961.111111111,
            "unit": "ns",
            "range": "± 80718.03932836743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1780138.9473684211,
            "unit": "ns",
            "range": "± 111731.56880204129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5085519,
            "unit": "ns",
            "range": "± 396345.8431889141"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51184.04255319149,
            "unit": "ns",
            "range": "± 3627.2357789395505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7508496,
            "unit": "ns",
            "range": "± 193063.49016148376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21228021.42857143,
            "unit": "ns",
            "range": "± 331874.3000654857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53029980,
            "unit": "ns",
            "range": "± 563635.1950888599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102942246.66666667,
            "unit": "ns",
            "range": "± 1274726.3106064694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206850776.92307693,
            "unit": "ns",
            "range": "± 2997294.1564445104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4551559.166666667,
            "unit": "ns",
            "range": "± 25434.558492345946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1446303.02734375,
            "unit": "ns",
            "range": "± 7240.678848669705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068539.6614583333,
            "unit": "ns",
            "range": "± 7014.753689512536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2687845.7552083335,
            "unit": "ns",
            "range": "± 18459.873460695027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833074.4290865385,
            "unit": "ns",
            "range": "± 2122.4978633813525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777906.7731584822,
            "unit": "ns",
            "range": "± 2208.7904137886085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3304340.625,
            "unit": "ns",
            "range": "± 152818.18922606474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3475351.282051282,
            "unit": "ns",
            "range": "± 119913.9557125395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4120124,
            "unit": "ns",
            "range": "± 100405.49984936084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3868250,
            "unit": "ns",
            "range": "± 145872.82287851104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6218819.444444444,
            "unit": "ns",
            "range": "± 203706.10316888883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262565.9090909091,
            "unit": "ns",
            "range": "± 9869.095365857022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256778.94736842104,
            "unit": "ns",
            "range": "± 8691.535425412998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228568.3673469388,
            "unit": "ns",
            "range": "± 17201.573872722132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4103035.714285714,
            "unit": "ns",
            "range": "± 52406.93740252417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3735742.8571428573,
            "unit": "ns",
            "range": "± 63800.47882971647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22152.04081632653,
            "unit": "ns",
            "range": "± 2435.4440138727487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95385.41666666667,
            "unit": "ns",
            "range": "± 9225.639092586849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73898.95833333333,
            "unit": "ns",
            "range": "± 6128.372236730553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96651.54639175258,
            "unit": "ns",
            "range": "± 15464.051817859045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5941.237113402062,
            "unit": "ns",
            "range": "± 996.7397455077802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21025.77319587629,
            "unit": "ns",
            "range": "± 2649.2246645054574"
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
          "id": "e7e0df88f1737b4e0d96f8bf8d1de655eb7f268d",
          "message": "Move from block query to state query",
          "timestamp": "2023-09-11T14:26:27+09:00",
          "tree_id": "89cb20479bb0665e963fd4182b0814f73e555956",
          "url": "https://github.com/greymistcube/libplanet/commit/e7e0df88f1737b4e0d96f8bf8d1de655eb7f268d"
        },
        "date": 1694410968650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362270.8333333333,
            "unit": "ns",
            "range": "± 98331.25745653035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2525023.8095238097,
            "unit": "ns",
            "range": "± 135183.7764015348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1722358.3333333333,
            "unit": "ns",
            "range": "± 126392.57362150146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4506708.108108108,
            "unit": "ns",
            "range": "± 151452.69224410632"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48225.60975609756,
            "unit": "ns",
            "range": "± 2559.552959405687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7273623.076923077,
            "unit": "ns",
            "range": "± 61140.01899800918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20326594.444444444,
            "unit": "ns",
            "range": "± 381022.0766681331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51488277.777777776,
            "unit": "ns",
            "range": "± 1095195.3516613615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101689357.14285715,
            "unit": "ns",
            "range": "± 1005007.5940886338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203428775,
            "unit": "ns",
            "range": "± 4642978.021290238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4541409.435096154,
            "unit": "ns",
            "range": "± 16141.076347268476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1419704.4503348214,
            "unit": "ns",
            "range": "± 5637.449135498239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068238.0161830357,
            "unit": "ns",
            "range": "± 3676.991385269107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658186.5364583335,
            "unit": "ns",
            "range": "± 8647.48372790902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832863.3998325893,
            "unit": "ns",
            "range": "± 2465.1723194702354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753920.56640625,
            "unit": "ns",
            "range": "± 4145.857397900088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3256186.9565217393,
            "unit": "ns",
            "range": "± 123925.68312177289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3395441.1764705884,
            "unit": "ns",
            "range": "± 136293.66849046305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4027278.125,
            "unit": "ns",
            "range": "± 124562.39331607686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3673903.0303030303,
            "unit": "ns",
            "range": "± 170989.63438641265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6139998.113207547,
            "unit": "ns",
            "range": "± 254535.50265484804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252170.58823529413,
            "unit": "ns",
            "range": "± 11992.24947247216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242478.78787878787,
            "unit": "ns",
            "range": "± 7533.373977498295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219661.22448979592,
            "unit": "ns",
            "range": "± 8707.894318914749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4052300,
            "unit": "ns",
            "range": "± 74247.34723495899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3687815.3846153845,
            "unit": "ns",
            "range": "± 37805.11090125792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20468.367346938776,
            "unit": "ns",
            "range": "± 2341.0103087613497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81195.65217391304,
            "unit": "ns",
            "range": "± 4596.054520174103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68250,
            "unit": "ns",
            "range": "± 1853.699004693049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72301.35135135135,
            "unit": "ns",
            "range": "± 3630.8606188843537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5138.144329896907,
            "unit": "ns",
            "range": "± 640.87233826394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19820.43010752688,
            "unit": "ns",
            "range": "± 1815.7858006566448"
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
          "id": "3e20ee53dbd33e82cb0ad1d84301641ae928a4e4",
          "message": "Added diff query",
          "timestamp": "2023-09-11T10:46:02+09:00",
          "tree_id": "52b078ad30e3f2b6ea739411a5772450426f4217",
          "url": "https://github.com/greymistcube/libplanet/commit/3e20ee53dbd33e82cb0ad1d84301641ae928a4e4"
        },
        "date": 1694413161462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1319255.0847457626,
            "unit": "ns",
            "range": "± 52557.98906996825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2594818,
            "unit": "ns",
            "range": "± 104328.86082000512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1909442.3076923077,
            "unit": "ns",
            "range": "± 51175.448590721106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5014140,
            "unit": "ns",
            "range": "± 375551.84338611236"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48406.382978723406,
            "unit": "ns",
            "range": "± 3424.447479509974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7842029.411764706,
            "unit": "ns",
            "range": "± 158605.25198076625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21092346.666666668,
            "unit": "ns",
            "range": "± 58141.46377176799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53380384.615384616,
            "unit": "ns",
            "range": "± 425817.3705673867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106503657.14285715,
            "unit": "ns",
            "range": "± 1545002.1047853653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208929360,
            "unit": "ns",
            "range": "± 2794290.2691534595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4527096.875,
            "unit": "ns",
            "range": "± 23192.384364374502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1442263.8541666667,
            "unit": "ns",
            "range": "± 5216.002847618632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1063117.6041666667,
            "unit": "ns",
            "range": "± 3028.738648312915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683363.59375,
            "unit": "ns",
            "range": "± 8007.301113625463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846669.9986049107,
            "unit": "ns",
            "range": "± 2369.729661655888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759960.9700520834,
            "unit": "ns",
            "range": "± 2216.3084129221606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3395105,
            "unit": "ns",
            "range": "± 117341.97436858623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3534104.761904762,
            "unit": "ns",
            "range": "± 83305.9930388593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4150608.695652174,
            "unit": "ns",
            "range": "± 102175.66830550162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3949442.4242424243,
            "unit": "ns",
            "range": "± 121720.58430659703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6262972.972972973,
            "unit": "ns",
            "range": "± 211149.77786797148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257835.55555555556,
            "unit": "ns",
            "range": "± 9267.983882836937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246810.8108108108,
            "unit": "ns",
            "range": "± 8196.977213304635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229803.0303030303,
            "unit": "ns",
            "range": "± 16013.708760764403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4139720,
            "unit": "ns",
            "range": "± 65273.97424920375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3829321.4285714286,
            "unit": "ns",
            "range": "± 43889.497229211534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21972.043010752688,
            "unit": "ns",
            "range": "± 1925.6487100849176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88477.08333333333,
            "unit": "ns",
            "range": "± 7175.755660433654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72191.75257731958,
            "unit": "ns",
            "range": "± 4324.558505960771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80772.09302325582,
            "unit": "ns",
            "range": "± 8617.583272012427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5073.469387755102,
            "unit": "ns",
            "range": "± 608.2849000853023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21373.711340206184,
            "unit": "ns",
            "range": "± 1807.1486055314397"
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
          "id": "6abfc2fc0d7397d069fdc05cf27d9612e196db71",
          "message": "Added diff timer log",
          "timestamp": "2023-09-11T17:25:05+09:00",
          "tree_id": "e08bfa9a7b244a19af304f2e0b489a11c0917f03",
          "url": "https://github.com/greymistcube/libplanet/commit/6abfc2fc0d7397d069fdc05cf27d9612e196db71"
        },
        "date": 1694421586778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1283100,
            "unit": "ns",
            "range": "± 102030.74699978107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2332000,
            "unit": "ns",
            "range": "± 82501.87876648628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1808855.8823529412,
            "unit": "ns",
            "range": "± 35360.155376288916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4286504.545454546,
            "unit": "ns",
            "range": "± 158265.56421429032"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42887.83783783784,
            "unit": "ns",
            "range": "± 2156.287569628005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7048907.142857143,
            "unit": "ns",
            "range": "± 29819.855653721585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17721226.666666668,
            "unit": "ns",
            "range": "± 131886.62049907362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45141330,
            "unit": "ns",
            "range": "± 484714.30053471413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91895740,
            "unit": "ns",
            "range": "± 574107.5954408346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180054293.33333334,
            "unit": "ns",
            "range": "± 1651831.824052431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4310057.992788462,
            "unit": "ns",
            "range": "± 6133.614623382331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1394572.4739583333,
            "unit": "ns",
            "range": "± 5591.596653671682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 991349.7200520834,
            "unit": "ns",
            "range": "± 1119.6014171576253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2524056.8098958335,
            "unit": "ns",
            "range": "± 2745.781519867028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804924.0652901785,
            "unit": "ns",
            "range": "± 877.37753563785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733883.8936941965,
            "unit": "ns",
            "range": "± 1259.6963235309593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2996812.0689655175,
            "unit": "ns",
            "range": "± 128639.80731959772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3151736.3636363638,
            "unit": "ns",
            "range": "± 77209.98914805276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3835104.1666666665,
            "unit": "ns",
            "range": "± 98717.17607108336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3328186.6666666665,
            "unit": "ns",
            "range": "± 90032.7085519224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5688573.333333333,
            "unit": "ns",
            "range": "± 167112.97837160906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239737.93103448275,
            "unit": "ns",
            "range": "± 10408.529356425977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233027.46478873238,
            "unit": "ns",
            "range": "± 11376.469414454916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197134.2105263158,
            "unit": "ns",
            "range": "± 5986.799727860272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3725846.6666666665,
            "unit": "ns",
            "range": "± 35376.32110943838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3451426.6666666665,
            "unit": "ns",
            "range": "± 38636.18708388488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17166.304347826088,
            "unit": "ns",
            "range": "± 1131.203499333328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78889.55223880598,
            "unit": "ns",
            "range": "± 3736.192127641993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62303.22580645161,
            "unit": "ns",
            "range": "± 1487.1637145850802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73186.8686868687,
            "unit": "ns",
            "range": "± 12955.494039561423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3828.723404255319,
            "unit": "ns",
            "range": "± 454.9896230473388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15695.555555555555,
            "unit": "ns",
            "range": "± 1096.051248608171"
          }
        ]
      }
    ]
  }
}