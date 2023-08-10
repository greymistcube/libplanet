window.BENCHMARK_DATA = {
  "lastUpdate": 1691649999256,
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
          "id": "e6a9c088de78199baade8ba9db605f9b638d2f6d",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:24:55+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/e6a9c088de78199baade8ba9db605f9b638d2f6d"
        },
        "date": 1691649401151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029927.5510204082,
            "unit": "ns",
            "range": "± 116776.60740593397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1784531.8181818181,
            "unit": "ns",
            "range": "± 81573.41414397767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1313220.8333333333,
            "unit": "ns",
            "range": "± 146793.24372568642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3239952.1126760566,
            "unit": "ns",
            "range": "± 151770.65955781995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34543.181818181816,
            "unit": "ns",
            "range": "± 1912.138806974244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4974553.333333333,
            "unit": "ns",
            "range": "± 40007.37193972893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13299506.666666666,
            "unit": "ns",
            "range": "± 188608.37531269714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32352035.714285713,
            "unit": "ns",
            "range": "± 412407.91905987536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64590673.333333336,
            "unit": "ns",
            "range": "± 666311.5256680582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129281628.57142857,
            "unit": "ns",
            "range": "± 1088251.7401273062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3185744.7916666665,
            "unit": "ns",
            "range": "± 9435.383990542774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1001318.0438701923,
            "unit": "ns",
            "range": "± 1824.8013994308228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 689232.12890625,
            "unit": "ns",
            "range": "± 1662.7567621550738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942661.2109375,
            "unit": "ns",
            "range": "± 2960.9164326044474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621142.96875,
            "unit": "ns",
            "range": "± 691.476447211132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580951.1648995535,
            "unit": "ns",
            "range": "± 825.1430871690281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2147145,
            "unit": "ns",
            "range": "± 49311.506877465385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2373682.8571428573,
            "unit": "ns",
            "range": "± 76419.9446006938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2992113.3333333335,
            "unit": "ns",
            "range": "± 47639.37247197752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2583938.75,
            "unit": "ns",
            "range": "± 131062.0236721936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4185886.9565217393,
            "unit": "ns",
            "range": "± 135480.47109568663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172857.57575757575,
            "unit": "ns",
            "range": "± 6149.973373452319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167754.09836065574,
            "unit": "ns",
            "range": "± 6748.421389986743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142261.90476190476,
            "unit": "ns",
            "range": "± 2615.4304025296083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2777500,
            "unit": "ns",
            "range": "± 38995.915537033216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2544880,
            "unit": "ns",
            "range": "± 41001.5365565731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12260.416666666666,
            "unit": "ns",
            "range": "± 1472.8761098910252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57423.07692307692,
            "unit": "ns",
            "range": "± 3756.655632136321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53661.22448979592,
            "unit": "ns",
            "range": "± 7111.391074976101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66110.20408163265,
            "unit": "ns",
            "range": "± 13304.913361068917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3532.9896907216494,
            "unit": "ns",
            "range": "± 660.6060426930804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13086.95652173913,
            "unit": "ns",
            "range": "± 1536.4592799576526"
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
          "id": "dfa6d07a983fdb8631ce260e4dc6379cbab6bb43",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:24:33+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/dfa6d07a983fdb8631ce260e4dc6379cbab6bb43"
        },
        "date": 1691649955714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1690260.606060606,
            "unit": "ns",
            "range": "± 147079.1809641947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3067157.5268817204,
            "unit": "ns",
            "range": "± 204148.3051269554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2132242.7083333335,
            "unit": "ns",
            "range": "± 173761.38069190213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5776253.0612244895,
            "unit": "ns",
            "range": "± 412950.7260000088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60600,
            "unit": "ns",
            "range": "± 9905.827409493195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8651478.048780488,
            "unit": "ns",
            "range": "± 307695.25468569965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23502183.333333332,
            "unit": "ns",
            "range": "± 501127.09700528183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59795276.315789476,
            "unit": "ns",
            "range": "± 2055229.1804123675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115258459.25925925,
            "unit": "ns",
            "range": "± 4680446.580189437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242260057.14285713,
            "unit": "ns",
            "range": "± 11731326.031694146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5314666.40625,
            "unit": "ns",
            "range": "± 101185.7639119296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1712325.46875,
            "unit": "ns",
            "range": "± 17940.554491141324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1207884.296875,
            "unit": "ns",
            "range": "± 16570.488684468288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3029744.53125,
            "unit": "ns",
            "range": "± 23051.15717735053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967911.4127604166,
            "unit": "ns",
            "range": "± 14315.727263255172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901126.5555245535,
            "unit": "ns",
            "range": "± 8646.004531963043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3756032.222222222,
            "unit": "ns",
            "range": "± 209098.6820563508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3824045.4545454546,
            "unit": "ns",
            "range": "± 315137.2416520567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4675232.142857143,
            "unit": "ns",
            "range": "± 188997.00537035245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4267814.583333333,
            "unit": "ns",
            "range": "± 277418.5183281814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7409529.381443299,
            "unit": "ns",
            "range": "± 435879.65295722784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293875.7894736842,
            "unit": "ns",
            "range": "± 18832.547176276938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281729.347826087,
            "unit": "ns",
            "range": "± 19903.710726115783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243866.66666666666,
            "unit": "ns",
            "range": "± 20144.814487223193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4526441.025641026,
            "unit": "ns",
            "range": "± 232117.9628651102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4318248.80952381,
            "unit": "ns",
            "range": "± 229300.73822991183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23962,
            "unit": "ns",
            "range": "± 6907.816974524973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92499,
            "unit": "ns",
            "range": "± 12638.16965874538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94694,
            "unit": "ns",
            "range": "± 15539.61259478368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102439.36170212766,
            "unit": "ns",
            "range": "± 15468.616984596649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11154,
            "unit": "ns",
            "range": "± 5262.837503273171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22060,
            "unit": "ns",
            "range": "± 7781.5957440124275"
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
          "id": "d0fd56e61303efd4e96725b9bbbc2ad0b1d1be17",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:19:05+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/d0fd56e61303efd4e96725b9bbbc2ad0b1d1be17"
        },
        "date": 1691649963343,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1920070.1030927836,
            "unit": "ns",
            "range": "± 304452.6260236518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3549910.112359551,
            "unit": "ns",
            "range": "± 310857.0418452186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2436231.5789473685,
            "unit": "ns",
            "range": "± 327943.64210396964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6660402.105263158,
            "unit": "ns",
            "range": "± 797494.1226994727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56345.294117647056,
            "unit": "ns",
            "range": "± 6814.007035273055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9922760.52631579,
            "unit": "ns",
            "range": "± 715725.7205955785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27548224.444444444,
            "unit": "ns",
            "range": "± 1857450.6997743936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72535862.02531646,
            "unit": "ns",
            "range": "± 3766391.960494539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147056332,
            "unit": "ns",
            "range": "± 11760260.248845764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299756151.64835167,
            "unit": "ns",
            "range": "± 16809094.49660684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6164172.439236111,
            "unit": "ns",
            "range": "± 200834.62954343666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2002737.1813322369,
            "unit": "ns",
            "range": "± 68943.01579339987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444052.255859375,
            "unit": "ns",
            "range": "± 33230.38519988525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3678945.847486413,
            "unit": "ns",
            "range": "± 92240.7071163303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1185667.0748197115,
            "unit": "ns",
            "range": "± 32153.72735769652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1116622.587890625,
            "unit": "ns",
            "range": "± 39594.03431017029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4245796.774193549,
            "unit": "ns",
            "range": "± 387549.4168915228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4361632.258064516,
            "unit": "ns",
            "range": "± 431169.5709904707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5878620.4301075265,
            "unit": "ns",
            "range": "± 625385.4428095317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4938192.222222222,
            "unit": "ns",
            "range": "± 448723.8747621115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8795160.416666666,
            "unit": "ns",
            "range": "± 951889.4088218404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327555.55555555556,
            "unit": "ns",
            "range": "± 44950.418030854446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330507.86516853934,
            "unit": "ns",
            "range": "± 51576.662324418285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272227.5862068966,
            "unit": "ns",
            "range": "± 31657.56711646935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5184775.824175824,
            "unit": "ns",
            "range": "± 385343.50054079725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4760273.563218391,
            "unit": "ns",
            "range": "± 390440.7555510764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22823.333333333332,
            "unit": "ns",
            "range": "± 3617.0569699129023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105983.908045977,
            "unit": "ns",
            "range": "± 13816.394656123997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114484.61538461539,
            "unit": "ns",
            "range": "± 14525.027619609797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119636.17021276595,
            "unit": "ns",
            "range": "± 19548.681175789112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6865.979381443299,
            "unit": "ns",
            "range": "± 1004.249989413549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21591.764705882353,
            "unit": "ns",
            "range": "± 3145.110027778796"
          }
        ]
      }
    ]
  }
}