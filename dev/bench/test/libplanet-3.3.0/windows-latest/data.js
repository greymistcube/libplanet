window.BENCHMARK_DATA = {
  "lastUpdate": 1694177920390,
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
      }
    ]
  }
}