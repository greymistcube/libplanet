window.BENCHMARK_DATA = {
  "lastUpdate": 1707287529118,
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
          "id": "db763b0d5205886da9a7c7240b3b551bd24e2768",
          "message": "Revert query argument type to be compatible with legacy queries",
          "timestamp": "2024-02-07T15:15:42+09:00",
          "tree_id": "f9cfa42ebc5d7a160cad261c75e8cfbd601eda52",
          "url": "https://github.com/greymistcube/libplanet/commit/db763b0d5205886da9a7c7240b3b551bd24e2768"
        },
        "date": 1707287270306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007605.1020408163,
            "unit": "ns",
            "range": "± 115690.28808506779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1757807.843137255,
            "unit": "ns",
            "range": "± 71599.51911329365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519407.5268817204,
            "unit": "ns",
            "range": "± 146085.4427147518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10886665.168539327,
            "unit": "ns",
            "range": "± 834620.3553250919"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35651.64835164835,
            "unit": "ns",
            "range": "± 2747.0534775105502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5212006.666666667,
            "unit": "ns",
            "range": "± 79887.23719510312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13609528.57142857,
            "unit": "ns",
            "range": "± 142431.47571630814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34396171.428571425,
            "unit": "ns",
            "range": "± 265834.3250064753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67436413.33333333,
            "unit": "ns",
            "range": "± 1114891.68715855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132481892.3076923,
            "unit": "ns",
            "range": "± 856883.5650790392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3443775.390625,
            "unit": "ns",
            "range": "± 8642.891222133352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074465.5859375,
            "unit": "ns",
            "range": "± 2025.9567963299105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749045.9333147322,
            "unit": "ns",
            "range": "± 1004.7429102795803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1983428.75,
            "unit": "ns",
            "range": "± 7272.641720315658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629898.6783854166,
            "unit": "ns",
            "range": "± 986.4071901508034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561865.0320870535,
            "unit": "ns",
            "range": "± 863.1513906163182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2224592.592592593,
            "unit": "ns",
            "range": "± 82774.31889555686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2358763.1578947366,
            "unit": "ns",
            "range": "± 80383.79028827598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2821147.5,
            "unit": "ns",
            "range": "± 94694.40182597643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2847673.913043478,
            "unit": "ns",
            "range": "± 137209.29338720412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12683855.913978495,
            "unit": "ns",
            "range": "± 1703597.3676862356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183590.74074074073,
            "unit": "ns",
            "range": "± 7742.342985986122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176272.131147541,
            "unit": "ns",
            "range": "± 7875.830774116065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145065.21739130435,
            "unit": "ns",
            "range": "± 6928.942413294537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2909180,
            "unit": "ns",
            "range": "± 50131.900308799675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2545786.6666666665,
            "unit": "ns",
            "range": "± 46482.28336330592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13223.404255319148,
            "unit": "ns",
            "range": "± 2221.4702838249227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56360.98901098901,
            "unit": "ns",
            "range": "± 4607.179193617297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50618.085106382976,
            "unit": "ns",
            "range": "± 6111.336421184328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64713.40206185567,
            "unit": "ns",
            "range": "± 13388.059269877234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3164.8936170212764,
            "unit": "ns",
            "range": "± 676.917022409421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12112.087912087913,
            "unit": "ns",
            "range": "± 1577.257476679425"
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
          "id": "e66926ff0357484101e329c6ef9339cbdade10b0",
          "message": "Changelog",
          "timestamp": "2024-02-07T15:17:34+09:00",
          "tree_id": "c09809b429d316a314d7871557a54e8205373358",
          "url": "https://github.com/greymistcube/libplanet/commit/e66926ff0357484101e329c6ef9339cbdade10b0"
        },
        "date": 1707287406299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992436.3636363636,
            "unit": "ns",
            "range": "± 120281.80215435365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1707681.25,
            "unit": "ns",
            "range": "± 71733.64727095402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1473272.9166666667,
            "unit": "ns",
            "range": "± 133929.10338106554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11011185.714285715,
            "unit": "ns",
            "range": "± 987966.1926932329"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34629.166666666664,
            "unit": "ns",
            "range": "± 1710.4844466564207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4978442.857142857,
            "unit": "ns",
            "range": "± 37817.05891598321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13254300,
            "unit": "ns",
            "range": "± 138447.15856342344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32775573.076923076,
            "unit": "ns",
            "range": "± 260804.14156299405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64288823.07692308,
            "unit": "ns",
            "range": "± 208391.43518007227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132144386.66666667,
            "unit": "ns",
            "range": "± 1035275.3628636107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3390217.6822916665,
            "unit": "ns",
            "range": "± 24184.914725551855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062724.3489583333,
            "unit": "ns",
            "range": "± 3301.8397142148774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739984.5628004808,
            "unit": "ns",
            "range": "± 1422.8678772456235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927609.779575893,
            "unit": "ns",
            "range": "± 2676.018881863185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653666.8596540178,
            "unit": "ns",
            "range": "± 1242.0787969202463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560131.58203125,
            "unit": "ns",
            "range": "± 1383.1459579569228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159506.25,
            "unit": "ns",
            "range": "± 67066.1009390086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249603.6363636362,
            "unit": "ns",
            "range": "± 94981.6121846679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2798815.789473684,
            "unit": "ns",
            "range": "± 58716.0423200593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2917718.1818181816,
            "unit": "ns",
            "range": "± 68999.79045077659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12348134.444444444,
            "unit": "ns",
            "range": "± 1485463.9779960488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174340.9090909091,
            "unit": "ns",
            "range": "± 8524.456794210622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165682.08955223882,
            "unit": "ns",
            "range": "± 7362.392672945852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139869.5652173913,
            "unit": "ns",
            "range": "± 2791.1279542358848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2813740,
            "unit": "ns",
            "range": "± 32991.63963361454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2517231.25,
            "unit": "ns",
            "range": "± 39777.0238328611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10715.90909090909,
            "unit": "ns",
            "range": "± 1124.7361237029697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53690.86021505376,
            "unit": "ns",
            "range": "± 4263.042304126188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44313.04347826087,
            "unit": "ns",
            "range": "± 2141.1179764922604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59376.767676767675,
            "unit": "ns",
            "range": "± 13347.588854208288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2429.1666666666665,
            "unit": "ns",
            "range": "± 405.98591281411325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10287.80487804878,
            "unit": "ns",
            "range": "± 790.2789387068121"
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
          "id": "7cd736df3da78ffe315c713c0fa5fae0256becb1",
          "message": "Changelog",
          "timestamp": "2024-02-07T15:18:01+09:00",
          "tree_id": "860337a27fac6ecfcb572b6ddca5876c812426c9",
          "url": "https://github.com/greymistcube/libplanet/commit/7cd736df3da78ffe315c713c0fa5fae0256becb1"
        },
        "date": 1707287510905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1069915.2631578948,
            "unit": "ns",
            "range": "± 126779.8802485405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839979.0322580645,
            "unit": "ns",
            "range": "± 81379.73352473156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1659656,
            "unit": "ns",
            "range": "± 195373.23970267572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11171912.359550562,
            "unit": "ns",
            "range": "± 928785.1910401596"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38793.47826086957,
            "unit": "ns",
            "range": "± 4473.064793614537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5499721.428571428,
            "unit": "ns",
            "range": "± 86876.22653098911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13901186.666666666,
            "unit": "ns",
            "range": "± 124246.4306280447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34552266.666666664,
            "unit": "ns",
            "range": "± 160213.19224613486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70338320,
            "unit": "ns",
            "range": "± 378246.3770008719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140267373.33333334,
            "unit": "ns",
            "range": "± 1528727.7523047284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3527970.342548077,
            "unit": "ns",
            "range": "± 30047.849853681797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082062.7864583333,
            "unit": "ns",
            "range": "± 1431.8026286501754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769285.21484375,
            "unit": "ns",
            "range": "± 1062.7107528545168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981977.8645833333,
            "unit": "ns",
            "range": "± 8049.95900921905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630212.9361979166,
            "unit": "ns",
            "range": "± 781.5247266217766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570687.7408854166,
            "unit": "ns",
            "range": "± 744.1335450407636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2271291.6666666665,
            "unit": "ns",
            "range": "± 67271.02698360248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2371760.714285714,
            "unit": "ns",
            "range": "± 54663.88434169997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2923475,
            "unit": "ns",
            "range": "± 89639.59738505544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3003234.736842105,
            "unit": "ns",
            "range": "± 193839.0151143859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12707166.29213483,
            "unit": "ns",
            "range": "± 1345042.0019585583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193136.7088607595,
            "unit": "ns",
            "range": "± 9938.118498284579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182850,
            "unit": "ns",
            "range": "± 11519.97776215082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150667.9012345679,
            "unit": "ns",
            "range": "± 7888.200478570728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2927526.6666666665,
            "unit": "ns",
            "range": "± 41711.6370652923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2549587.5,
            "unit": "ns",
            "range": "± 48956.49599389237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13279.347826086956,
            "unit": "ns",
            "range": "± 2059.848391064509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60994.73684210526,
            "unit": "ns",
            "range": "± 7675.123790270009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65314.14141414141,
            "unit": "ns",
            "range": "± 9827.38790736576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71124.7191011236,
            "unit": "ns",
            "range": "± 13548.60174686669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4595.918367346939,
            "unit": "ns",
            "range": "± 1065.8638012203746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13846.59090909091,
            "unit": "ns",
            "range": "± 1713.9689011004236"
          }
        ]
      }
    ]
  }
}