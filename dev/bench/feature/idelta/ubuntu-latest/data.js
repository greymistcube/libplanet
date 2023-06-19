window.BENCHMARK_DATA = {
  "lastUpdate": 1687178034333,
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
          "id": "977f00de1f334f7bce2c45892aa4180ad9ac77cf",
          "message": "Moved some tesets; added Delta tests",
          "timestamp": "2023-06-17T22:16:16+09:00",
          "tree_id": "240faaab1c61b42b573cf8cdd8b55166ec87ad35",
          "url": "https://github.com/greymistcube/libplanet/commit/977f00de1f334f7bce2c45892aa4180ad9ac77cf"
        },
        "date": 1687008524677,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3211353.0322580645,
            "unit": "ns",
            "range": "± 94018.98827559032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347538.9375,
            "unit": "ns",
            "range": "± 103695.38928995816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4192475.076923077,
            "unit": "ns",
            "range": "± 31109.952816479643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3709964.0588235296,
            "unit": "ns",
            "range": "± 74790.21071844111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6152587.238095238,
            "unit": "ns",
            "range": "± 145514.14537147403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5889174.713169643,
            "unit": "ns",
            "range": "± 20645.413425886396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878514.697544643,
            "unit": "ns",
            "range": "± 2535.589350027453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337179.505078125,
            "unit": "ns",
            "range": "± 1488.7034791776885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569422.150520833,
            "unit": "ns",
            "range": "± 3069.9355602237442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787496.4912109375,
            "unit": "ns",
            "range": "± 762.1465138913024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745562.9550083706,
            "unit": "ns",
            "range": "± 503.63666122934836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274707.54761904763,
            "unit": "ns",
            "range": "± 9798.651754450415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263424.756097561,
            "unit": "ns",
            "range": "± 8060.4092445126125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228550.25,
            "unit": "ns",
            "range": "± 1816.8279612855729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150442,
            "unit": "ns",
            "range": "± 25734.20745955524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3760586.066666667,
            "unit": "ns",
            "range": "± 43911.448623445845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15446.336842105264,
            "unit": "ns",
            "range": "± 1273.7807153753988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80033.03529411765,
            "unit": "ns",
            "range": "± 3979.8110222156306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69469.38461538461,
            "unit": "ns",
            "range": "± 1159.454508124513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81835.75510204081,
            "unit": "ns",
            "range": "± 10925.900806535454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4055.0714285714284,
            "unit": "ns",
            "range": "± 482.02945647254427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14678.72340425532,
            "unit": "ns",
            "range": "± 918.0240984052665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326158.8484848484,
            "unit": "ns",
            "range": "± 85644.57537468128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2546696,
            "unit": "ns",
            "range": "± 66931.2862824006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702521,
            "unit": "ns",
            "range": "± 101570.64224710486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4735938.813953488,
            "unit": "ns",
            "range": "± 171515.49568246788"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45335.5,
            "unit": "ns",
            "range": "± 2312.6476342063006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7529263.666666667,
            "unit": "ns",
            "range": "± 13470.650645366906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19235738.666666668,
            "unit": "ns",
            "range": "± 103519.30848305317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49189181.71428572,
            "unit": "ns",
            "range": "± 360254.6742105194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99263669,
            "unit": "ns",
            "range": "± 759633.2556046841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197635505.6153846,
            "unit": "ns",
            "range": "± 1173962.4424285996"
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
          "id": "d0440cd8f1cc7ac6546112aaa576ed9355c1bebe",
          "message": "Changelog",
          "timestamp": "2023-06-19T21:17:46+09:00",
          "tree_id": "703e3c94ebcc9beff387dbd0010d4547b22117d2",
          "url": "https://github.com/greymistcube/libplanet/commit/d0440cd8f1cc7ac6546112aaa576ed9355c1bebe"
        },
        "date": 1687178025406,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3801449.703703704,
            "unit": "ns",
            "range": "± 159206.37625168648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4059080.71875,
            "unit": "ns",
            "range": "± 125787.69402763259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4909375.517857143,
            "unit": "ns",
            "range": "± 210533.31121925844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4467219.486486486,
            "unit": "ns",
            "range": "± 140218.44795425885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7390840.204081632,
            "unit": "ns",
            "range": "± 292305.8477672245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6980364.447916667,
            "unit": "ns",
            "range": "± 72736.67229106126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2140356.1157552083,
            "unit": "ns",
            "range": "± 22762.068468231097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1579689.5400390625,
            "unit": "ns",
            "range": "± 11702.419239922207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3015318.9932291666,
            "unit": "ns",
            "range": "± 28600.81719336079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 964997.5508510044,
            "unit": "ns",
            "range": "± 6225.086786932292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882843.8397135417,
            "unit": "ns",
            "range": "± 8252.098388781638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344309.6265060241,
            "unit": "ns",
            "range": "± 18013.304569943095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345521.4117647059,
            "unit": "ns",
            "range": "± 6765.210871240669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273065.6666666667,
            "unit": "ns",
            "range": "± 14062.968733582948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5038437.303030303,
            "unit": "ns",
            "range": "± 156597.06402529648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4493319,
            "unit": "ns",
            "range": "± 116947.46257905728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19496.956989247312,
            "unit": "ns",
            "range": "± 1150.365517658159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98014.71578947369,
            "unit": "ns",
            "range": "± 6212.500208764342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82636.47457627118,
            "unit": "ns",
            "range": "± 3660.416781224991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100911.90625,
            "unit": "ns",
            "range": "± 14635.06228643939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5592.8247422680415,
            "unit": "ns",
            "range": "± 525.82286724217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20141.72340425532,
            "unit": "ns",
            "range": "± 2164.229686915398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668101.8659793814,
            "unit": "ns",
            "range": "± 103639.02199357118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131076.9782608696,
            "unit": "ns",
            "range": "± 119574.64330654894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076043.4545454546,
            "unit": "ns",
            "range": "± 134531.730530519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6045436.507246377,
            "unit": "ns",
            "range": "± 288007.94678204035"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53958.19565217391,
            "unit": "ns",
            "range": "± 3692.986632658163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9923762.533333333,
            "unit": "ns",
            "range": "± 175655.17943519208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25770913.64,
            "unit": "ns",
            "range": "± 677325.5950528815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63606606.68181818,
            "unit": "ns",
            "range": "± 1529466.803560714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124410289.94117647,
            "unit": "ns",
            "range": "± 3732266.5382984425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242422288.26666668,
            "unit": "ns",
            "range": "± 4305743.220271775"
          }
        ]
      }
    ]
  }
}