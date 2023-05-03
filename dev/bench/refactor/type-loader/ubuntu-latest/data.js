window.BENCHMARK_DATA = {
  "lastUpdate": 1683109958320,
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
          "id": "4c2ca5ac4b94e7846843416973a58b75e87c266d",
          "message": "Changed IActionTypeLoader to IActionLoader",
          "timestamp": "2023-05-03T18:42:43+09:00",
          "tree_id": "df79e2790e2a2a3e14665657538de57183736d5a",
          "url": "https://github.com/greymistcube/libplanet/commit/4c2ca5ac4b94e7846843416973a58b75e87c266d"
        },
        "date": 1683108001464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346092.2121212121,
            "unit": "ns",
            "range": "± 10979.253406304479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333307.5714285714,
            "unit": "ns",
            "range": "± 12031.834363608488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289912,
            "unit": "ns",
            "range": "± 8243.346956002582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5184298.307692308,
            "unit": "ns",
            "range": "± 26324.35458969702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4772912.214285715,
            "unit": "ns",
            "range": "± 53617.90697745351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26990.978723404256,
            "unit": "ns",
            "range": "± 1795.0978706281835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116240.20833333333,
            "unit": "ns",
            "range": "± 9839.048594267175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105023.0303030303,
            "unit": "ns",
            "range": "± 6944.859138834714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120056.85714285714,
            "unit": "ns",
            "range": "± 13796.714064191958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7237.40206185567,
            "unit": "ns",
            "range": "± 1225.3908106174554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24456.548387096773,
            "unit": "ns",
            "range": "± 2669.7404307801044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4317280.6,
            "unit": "ns",
            "range": "± 55363.415226509074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4463815.8,
            "unit": "ns",
            "range": "± 60445.208825844915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5075548.5,
            "unit": "ns",
            "range": "± 112954.18209936647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5454357.425,
            "unit": "ns",
            "range": "± 191969.69691339275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8326812.173913044,
            "unit": "ns",
            "range": "± 200605.2666236612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7055334.885216346,
            "unit": "ns",
            "range": "± 25890.026532228225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203294.870535714,
            "unit": "ns",
            "range": "± 10742.658570225956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1607217.8140625,
            "unit": "ns",
            "range": "± 9740.60039976821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3089027.476862981,
            "unit": "ns",
            "range": "± 9114.50401118848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986712.2045572917,
            "unit": "ns",
            "range": "± 1018.8519150627667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898844.478125,
            "unit": "ns",
            "range": "± 4363.195732600624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57216.18681318681,
            "unit": "ns",
            "range": "± 3450.6741882713227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10639788.5625,
            "unit": "ns",
            "range": "± 196838.28873636984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25980139.933333334,
            "unit": "ns",
            "range": "± 230650.01729010083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64912456.4,
            "unit": "ns",
            "range": "± 464118.50893661083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128747198.06666666,
            "unit": "ns",
            "range": "± 1793209.1592954022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275189736.06666666,
            "unit": "ns",
            "range": "± 1518007.8345378693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730054.5056179776,
            "unit": "ns",
            "range": "± 93069.9683480029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3209538.7,
            "unit": "ns",
            "range": "± 112458.54022299587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2738958.3380281692,
            "unit": "ns",
            "range": "± 133247.44271573884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6632804.416666667,
            "unit": "ns",
            "range": "± 219770.14652539333"
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
          "id": "864e180510f11f376012591f9151d7d00c7902e0",
          "message": "Changelog",
          "timestamp": "2023-05-03T18:47:13+09:00",
          "tree_id": "be97148de5a6bf45e2dd0858c79572a5b3145a21",
          "url": "https://github.com/greymistcube/libplanet/commit/864e180510f11f376012591f9151d7d00c7902e0"
        },
        "date": 1683108082578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286237.08928571426,
            "unit": "ns",
            "range": "± 12224.140819448265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278440.17142857146,
            "unit": "ns",
            "range": "± 9113.71791017357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235560.68421052632,
            "unit": "ns",
            "range": "± 5086.39242437475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4324341.214285715,
            "unit": "ns",
            "range": "± 68162.88802699985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3921673.0714285714,
            "unit": "ns",
            "range": "± 29449.060550418202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20652.97894736842,
            "unit": "ns",
            "range": "± 1322.968896716673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91206.70786516854,
            "unit": "ns",
            "range": "± 4900.1450678948995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80428.8947368421,
            "unit": "ns",
            "range": "± 3484.75623601366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97950.22988505747,
            "unit": "ns",
            "range": "± 9793.128804613347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6199.041666666667,
            "unit": "ns",
            "range": "± 842.2421194165595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19773.197916666668,
            "unit": "ns",
            "range": "± 1441.122607880045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3479598.3333333335,
            "unit": "ns",
            "range": "± 52815.65582647775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3702873.129032258,
            "unit": "ns",
            "range": "± 110399.79442243598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4230426.5,
            "unit": "ns",
            "range": "± 149930.44041291365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4641467.714285715,
            "unit": "ns",
            "range": "± 97899.02092316494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6685152,
            "unit": "ns",
            "range": "± 117830.3480752665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5918851.3015625,
            "unit": "ns",
            "range": "± 32420.03031146996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841347.9251302083,
            "unit": "ns",
            "range": "± 4311.2216775749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343497.548076923,
            "unit": "ns",
            "range": "± 1766.1220128924285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606689.101302083,
            "unit": "ns",
            "range": "± 1808.9457840584137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842546.6008649553,
            "unit": "ns",
            "range": "± 690.3177658039542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754430.2087239583,
            "unit": "ns",
            "range": "± 565.5957342353272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48200.53409090909,
            "unit": "ns",
            "range": "± 2413.8561316101272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7936332.228571429,
            "unit": "ns",
            "range": "± 257399.54755902986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21391385.866666667,
            "unit": "ns",
            "range": "± 202626.18672988753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54762789.06666667,
            "unit": "ns",
            "range": "± 392180.137403622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108848487.8,
            "unit": "ns",
            "range": "± 1095297.7471730951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213865722.13333333,
            "unit": "ns",
            "range": "± 2129193.193812619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440560.1578947369,
            "unit": "ns",
            "range": "± 92945.48911883048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2657584.6842105263,
            "unit": "ns",
            "range": "± 58119.26674238513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2297090.3380281692,
            "unit": "ns",
            "range": "± 112369.09108748261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5860405.17,
            "unit": "ns",
            "range": "± 391567.3175893546"
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
          "id": "12ec11d8eafc82ca85f94fc8d38fff3ebc47c55d",
          "message": "Changelog",
          "timestamp": "2023-05-03T18:46:25+09:00",
          "tree_id": "f72af88a9d0ed40709a08fb6a347aab0e1edd9bf",
          "url": "https://github.com/greymistcube/libplanet/commit/12ec11d8eafc82ca85f94fc8d38fff3ebc47c55d"
        },
        "date": 1683108166067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353908.7111111111,
            "unit": "ns",
            "range": "± 13304.675954549048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341553.57575757575,
            "unit": "ns",
            "range": "± 16001.955279624286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296371.0625,
            "unit": "ns",
            "range": "± 8242.25493315176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5431260.384615385,
            "unit": "ns",
            "range": "± 28846.893624035336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4835624.2,
            "unit": "ns",
            "range": "± 87879.68404845994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28045.072164948455,
            "unit": "ns",
            "range": "± 2310.5415501900507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121011.22448979592,
            "unit": "ns",
            "range": "± 10307.44321545389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108112.75257731958,
            "unit": "ns",
            "range": "± 7380.666920281956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118067.53846153847,
            "unit": "ns",
            "range": "± 11587.09751721734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9199.185567010309,
            "unit": "ns",
            "range": "± 1268.0815425435067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28084.821052631578,
            "unit": "ns",
            "range": "± 1961.6649733420786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4358072,
            "unit": "ns",
            "range": "± 117490.27907448343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4571378.888888889,
            "unit": "ns",
            "range": "± 97785.25063380643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5199039.047619048,
            "unit": "ns",
            "range": "± 118691.34127874544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5956300.304347826,
            "unit": "ns",
            "range": "± 145953.14896769094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8336041.157894737,
            "unit": "ns",
            "range": "± 173635.65683806076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7210351.0921875,
            "unit": "ns",
            "range": "± 38752.57965617861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2265300.187199519,
            "unit": "ns",
            "range": "± 1627.289836488302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1624066.041796875,
            "unit": "ns",
            "range": "± 3326.477547411793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3146266.7770647323,
            "unit": "ns",
            "range": "± 4030.701240487081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002122.7419270833,
            "unit": "ns",
            "range": "± 868.1896604172123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905088.6694661458,
            "unit": "ns",
            "range": "± 343.82315434686365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63215.903225806454,
            "unit": "ns",
            "range": "± 5275.8108897951215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9978790.666666666,
            "unit": "ns",
            "range": "± 197162.50939263275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28814540.466666665,
            "unit": "ns",
            "range": "± 238447.14222529388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71986266.33333333,
            "unit": "ns",
            "range": "± 337284.76605229644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131584147.2,
            "unit": "ns",
            "range": "± 573373.7318541148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263474572.14285713,
            "unit": "ns",
            "range": "± 603013.7618435811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1754556.2588235294,
            "unit": "ns",
            "range": "± 89633.30671648911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3243899.24,
            "unit": "ns",
            "range": "± 86008.60248606918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2812466.12,
            "unit": "ns",
            "range": "± 138271.41060413892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6532478.583333333,
            "unit": "ns",
            "range": "± 92084.92906645604"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe5a331c0f76c0dd0518f5111114264c8e9fa988",
          "message": "Update CHANGES.md\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-05-03T19:16:26+09:00",
          "tree_id": "ff512d970f9c6ef6f3b6e2e222b444b40220c254",
          "url": "https://github.com/greymistcube/libplanet/commit/fe5a331c0f76c0dd0518f5111114264c8e9fa988"
        },
        "date": 1683109949711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324865.4222222222,
            "unit": "ns",
            "range": "± 11158.3257022175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310343.2162162162,
            "unit": "ns",
            "range": "± 10003.535536485575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271978.5833333333,
            "unit": "ns",
            "range": "± 5744.795012172676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5151901.558441559,
            "unit": "ns",
            "range": "± 263983.0222964654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4455661.5,
            "unit": "ns",
            "range": "± 67537.04264597049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17394.42105263158,
            "unit": "ns",
            "range": "± 1154.0599617423493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92229.34666666666,
            "unit": "ns",
            "range": "± 4100.687854274963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79250.2,
            "unit": "ns",
            "range": "± 1451.8606387273244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100760.1649484536,
            "unit": "ns",
            "range": "± 13694.98877530909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4678.642105263158,
            "unit": "ns",
            "range": "± 381.1528680812786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16858.621052631577,
            "unit": "ns",
            "range": "± 1021.0049719485017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3753463.910714286,
            "unit": "ns",
            "range": "± 160288.27790898574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3943283.3571428573,
            "unit": "ns",
            "range": "± 187411.3759154518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4928044.555555556,
            "unit": "ns",
            "range": "± 224212.73851928086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4872726.426229509,
            "unit": "ns",
            "range": "± 218879.3697537115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8535563.565656565,
            "unit": "ns",
            "range": "± 506412.634568184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6923276.178645833,
            "unit": "ns",
            "range": "± 105899.54316301922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2179183.267020089,
            "unit": "ns",
            "range": "± 12892.640712522245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1587526.6457868305,
            "unit": "ns",
            "range": "± 14356.120384544422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3078865.7190290177,
            "unit": "ns",
            "range": "± 27168.131982658007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008210.6419270834,
            "unit": "ns",
            "range": "± 8993.072856090563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929484.5126953125,
            "unit": "ns",
            "range": "± 7936.732781542509"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54955.63829787234,
            "unit": "ns",
            "range": "± 3595.9580022278233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9077896.92,
            "unit": "ns",
            "range": "± 237019.35935364015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23245740.476190478,
            "unit": "ns",
            "range": "± 546029.3177340955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58369366.538461536,
            "unit": "ns",
            "range": "± 880640.9778852953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116794741.5,
            "unit": "ns",
            "range": "± 890251.1830863112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235788023.93333334,
            "unit": "ns",
            "range": "± 2942778.3270884254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639130.8333333333,
            "unit": "ns",
            "range": "± 145780.03954810003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3173935.829787234,
            "unit": "ns",
            "range": "± 195042.23214741464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2481765.077777778,
            "unit": "ns",
            "range": "± 157838.9218089928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6880766.806122449,
            "unit": "ns",
            "range": "± 470505.10011817026"
          }
        ]
      }
    ]
  }
}