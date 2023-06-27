window.BENCHMARK_DATA = {
  "lastUpdate": 1687775808235,
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
          "id": "e105b12db61377b35d96e7224587d33d21db53dc",
          "message": "Minor streamlining",
          "timestamp": "2023-06-26T17:27:37+09:00",
          "tree_id": "d555eb2892f956aa6baefb42a14972b46a5a7f75",
          "url": "https://github.com/greymistcube/libplanet/commit/e105b12db61377b35d96e7224587d33d21db53dc"
        },
        "date": 1687769496785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8772991.75,
            "unit": "ns",
            "range": "± 115503.51343268937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23597524.66129032,
            "unit": "ns",
            "range": "± 1764385.1755896213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56380877.92553192,
            "unit": "ns",
            "range": "± 4150201.8396867514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107905366.3611111,
            "unit": "ns",
            "range": "± 3569884.5583222853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217818409.08974358,
            "unit": "ns",
            "range": "± 7604539.148372021"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76233.95238095238,
            "unit": "ns",
            "range": "± 7802.963192019962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354510.41011235956,
            "unit": "ns",
            "range": "± 45542.9017744509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335779.72580645164,
            "unit": "ns",
            "range": "± 42736.16378511322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341107.5057471264,
            "unit": "ns",
            "range": "± 32131.93612782524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4771226.130434782,
            "unit": "ns",
            "range": "± 506584.36177590984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4020284.829787234,
            "unit": "ns",
            "range": "± 338785.29911791766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26210.32608695652,
            "unit": "ns",
            "range": "± 5067.771308509881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116936.29032258065,
            "unit": "ns",
            "range": "± 15336.304491219691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119091.48863636363,
            "unit": "ns",
            "range": "± 8320.159992375144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123996.74210526315,
            "unit": "ns",
            "range": "± 19236.50064757532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7384.510638297872,
            "unit": "ns",
            "range": "± 815.4992763810908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23777.020833333332,
            "unit": "ns",
            "range": "± 5424.159867965323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1962914.5531914893,
            "unit": "ns",
            "range": "± 387011.0738252922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3686354.087912088,
            "unit": "ns",
            "range": "± 664098.3745257199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3082543.129213483,
            "unit": "ns",
            "range": "± 570003.851493694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9202327.336956521,
            "unit": "ns",
            "range": "± 2794407.742298403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3584947.0204081633,
            "unit": "ns",
            "range": "± 365653.0210509905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3717100.5631578946,
            "unit": "ns",
            "range": "± 380095.9361669555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5011674.86746988,
            "unit": "ns",
            "range": "± 740178.8091902108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4685789.955555555,
            "unit": "ns",
            "range": "± 595287.63080635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10567193.123655913,
            "unit": "ns",
            "range": "± 3046317.1646737247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7704037.798060042,
            "unit": "ns",
            "range": "± 644750.7450535144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2077468.8084788602,
            "unit": "ns",
            "range": "± 40529.56268884181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372701.267211914,
            "unit": "ns",
            "range": "± 24977.3664664718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2956325.2263911734,
            "unit": "ns",
            "range": "± 126426.31567803836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978252.7061548478,
            "unit": "ns",
            "range": "± 49985.78198373107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889970.5076246995,
            "unit": "ns",
            "range": "± 45914.005730579"
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
          "id": "38760ca734d2cb1d46c8098904887f1b9efb5b7b",
          "message": "Changelog",
          "timestamp": "2023-06-26T17:31:05+09:00",
          "tree_id": "ad06312248e71ce0ee14c0f626ec5f22fe6c6aa2",
          "url": "https://github.com/greymistcube/libplanet/commit/38760ca734d2cb1d46c8098904887f1b9efb5b7b"
        },
        "date": 1687769679074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9454643.319148935,
            "unit": "ns",
            "range": "± 698673.6634964208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22160329.123076923,
            "unit": "ns",
            "range": "± 1025430.105149854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56384706.11111111,
            "unit": "ns",
            "range": "± 1883059.316526089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112673846.31343284,
            "unit": "ns",
            "range": "± 5329355.038360765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239122014.44,
            "unit": "ns",
            "range": "± 6376332.6014569895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74478.19318181818,
            "unit": "ns",
            "range": "± 11478.512009936296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372939.6551724138,
            "unit": "ns",
            "range": "± 39071.767841989385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342027.53571428574,
            "unit": "ns",
            "range": "± 36265.50707967141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344774.652173913,
            "unit": "ns",
            "range": "± 34577.40314181407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4639270,
            "unit": "ns",
            "range": "± 522438.7425163929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4008669.8908045976,
            "unit": "ns",
            "range": "± 307200.45642314677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19009.2688172043,
            "unit": "ns",
            "range": "± 2448.188075059776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110254.62765957447,
            "unit": "ns",
            "range": "± 17005.640732260297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116671.87209302325,
            "unit": "ns",
            "range": "± 7844.9484920087825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140504.8505154639,
            "unit": "ns",
            "range": "± 30007.871626680877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8640.41489361702,
            "unit": "ns",
            "range": "± 1443.6656722815646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21728.61224489796,
            "unit": "ns",
            "range": "± 4062.927515669025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1926147.7789473685,
            "unit": "ns",
            "range": "± 342530.0373659494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3515069.1555555556,
            "unit": "ns",
            "range": "± 535094.755181055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3070078.1703296704,
            "unit": "ns",
            "range": "± 612226.189616914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8928815.5,
            "unit": "ns",
            "range": "± 2628396.3502136995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3732581.528735632,
            "unit": "ns",
            "range": "± 596905.1351998292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3986845.147727273,
            "unit": "ns",
            "range": "± 604959.4495830704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5270047.877777778,
            "unit": "ns",
            "range": "± 1067860.2318429698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4638679.337078651,
            "unit": "ns",
            "range": "± 555308.3335126847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8727041.593023255,
            "unit": "ns",
            "range": "± 1891198.9871384806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8579842.832446808,
            "unit": "ns",
            "range": "± 1499044.9207366712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2353637.680486506,
            "unit": "ns",
            "range": "± 347569.22339820355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386898.8526785714,
            "unit": "ns",
            "range": "± 44309.08312038634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2945558.2209087173,
            "unit": "ns",
            "range": "± 170506.6252283416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008601.38546875,
            "unit": "ns",
            "range": "± 40396.28831513882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827434.7328186035,
            "unit": "ns",
            "range": "± 36136.231797717206"
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
        "date": 1687775781299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8734375.465517242,
            "unit": "ns",
            "range": "± 730525.2108906471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28736941.32183908,
            "unit": "ns",
            "range": "± 7900486.067955984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57160752.073033705,
            "unit": "ns",
            "range": "± 9067829.25418496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118977777.65934066,
            "unit": "ns",
            "range": "± 20945777.059349302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224779065.9213483,
            "unit": "ns",
            "range": "± 26763909.517636783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71572.98958333333,
            "unit": "ns",
            "range": "± 13971.694509742709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335265.6111111111,
            "unit": "ns",
            "range": "± 33737.209022668154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311194.1222222222,
            "unit": "ns",
            "range": "± 23693.427618805817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291863.3595505618,
            "unit": "ns",
            "range": "± 19480.214782187675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4158559.1333333333,
            "unit": "ns",
            "range": "± 185925.8433062345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3599751.6153846155,
            "unit": "ns",
            "range": "± 97323.84483992684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16759.816091954024,
            "unit": "ns",
            "range": "± 2063.6026497407656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83800.14772727272,
            "unit": "ns",
            "range": "± 8174.448427439514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81687.87234042553,
            "unit": "ns",
            "range": "± 11287.50254597815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105151.71739130435,
            "unit": "ns",
            "range": "± 14394.031728177553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6045.736842105263,
            "unit": "ns",
            "range": "± 964.7864851489638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16305.461538461539,
            "unit": "ns",
            "range": "± 1590.7200976475494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1786697.9782608696,
            "unit": "ns",
            "range": "± 259801.76026038607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131033.6704545454,
            "unit": "ns",
            "range": "± 235841.13420513822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2727043.6219512196,
            "unit": "ns",
            "range": "± 315950.2641702787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12563815.03,
            "unit": "ns",
            "range": "± 4036723.9654352595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3472796.784090909,
            "unit": "ns",
            "range": "± 260685.52847567605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3716943.8863636362,
            "unit": "ns",
            "range": "± 410875.84716157935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4990927.67032967,
            "unit": "ns",
            "range": "± 793700.9919970289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4635928.804597701,
            "unit": "ns",
            "range": "± 492839.5924046697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9597613.23655914,
            "unit": "ns",
            "range": "± 1988620.433317007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6403376.424479167,
            "unit": "ns",
            "range": "± 76263.22287666399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2065388.567608173,
            "unit": "ns",
            "range": "± 80501.97758260244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354379.5713541666,
            "unit": "ns",
            "range": "± 21592.987607265168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628957.5725446427,
            "unit": "ns",
            "range": "± 34873.36710695216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826675.6902901785,
            "unit": "ns",
            "range": "± 14257.504915823461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706506.5391276042,
            "unit": "ns",
            "range": "± 9016.306098269846"
          }
        ]
      }
    ]
  }
}