window.BENCHMARK_DATA = {
  "lastUpdate": 1689062735652,
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
          "id": "d34f81fcdc5110778e15209b674451cf0f8e1951",
          "message": "Derive ActionContext.BlockAction instead of assigning",
          "timestamp": "2023-06-12T22:04:14+09:00",
          "tree_id": "86d1e01d5b015b0e21d3b4082135395949884e73",
          "url": "https://github.com/greymistcube/libplanet/commit/d34f81fcdc5110778e15209b674451cf0f8e1951"
        },
        "date": 1686575776046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499915.3529411764,
            "unit": "ns",
            "range": "± 30396.46629943433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2589763.3513513515,
            "unit": "ns",
            "range": "± 87065.98955237478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2147462.3720930233,
            "unit": "ns",
            "range": "± 116723.32995089123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234223.586206896,
            "unit": "ns",
            "range": "± 151887.2021740187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3219329.8,
            "unit": "ns",
            "range": "± 54853.88614335881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3305566.5,
            "unit": "ns",
            "range": "± 105803.35988631248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4137920.5714285714,
            "unit": "ns",
            "range": "± 55172.69238381539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4109267,
            "unit": "ns",
            "range": "± 72050.40173973455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6545338.583333333,
            "unit": "ns",
            "range": "± 61985.35084922497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7569146.142857143,
            "unit": "ns",
            "range": "± 14122.892724265057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19413425.083333332,
            "unit": "ns",
            "range": "± 63967.67987245709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50176930.4,
            "unit": "ns",
            "range": "± 404586.6734137092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98730189.2,
            "unit": "ns",
            "range": "± 1040238.862200834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197580772.8,
            "unit": "ns",
            "range": "± 1319907.599841162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5920081.783482143,
            "unit": "ns",
            "range": "± 16093.010869007627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1968733.3758370536,
            "unit": "ns",
            "range": "± 1316.8193804876462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362621.5583333333,
            "unit": "ns",
            "range": "± 1114.8165526264722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553313.7953125,
            "unit": "ns",
            "range": "± 2203.2359904522905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807926.2838309152,
            "unit": "ns",
            "range": "± 440.16061464913446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741823.6154296875,
            "unit": "ns",
            "range": "± 356.88049502294064"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44829.0843373494,
            "unit": "ns",
            "range": "± 2399.960407218233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279601.1875,
            "unit": "ns",
            "range": "± 5361.46996284601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264423.4,
            "unit": "ns",
            "range": "± 9327.750421579296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226722.42857142858,
            "unit": "ns",
            "range": "± 3185.3459107965923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4195426.714285715,
            "unit": "ns",
            "range": "± 29810.334262385666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3818319.4615384615,
            "unit": "ns",
            "range": "± 24926.045028628807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16008.4,
            "unit": "ns",
            "range": "± 1310.084059346267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83523.32786885246,
            "unit": "ns",
            "range": "± 3544.7120885497006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69796.44,
            "unit": "ns",
            "range": "± 1845.0642960793173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80886.97590361445,
            "unit": "ns",
            "range": "± 4759.350411650281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4189.806122448979,
            "unit": "ns",
            "range": "± 531.5724322082352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15917.957894736843,
            "unit": "ns",
            "range": "± 1354.347490811668"
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
          "id": "982c6187ade7c9ea1f0e35a05897cc555dce8767",
          "message": "Changelog",
          "timestamp": "2023-06-12T22:08:56+09:00",
          "tree_id": "c34a81b54b5793c4ec53c0313463f15661791867",
          "url": "https://github.com/greymistcube/libplanet/commit/982c6187ade7c9ea1f0e35a05897cc555dce8767"
        },
        "date": 1686576120942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440613.4242424243,
            "unit": "ns",
            "range": "± 115116.91109592526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2746061.4150943398,
            "unit": "ns",
            "range": "± 113700.29581323301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2290327.8,
            "unit": "ns",
            "range": "± 112973.74846014068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5450786.542857143,
            "unit": "ns",
            "range": "± 176599.3156530846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3364734.448979592,
            "unit": "ns",
            "range": "± 132473.55858089522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3503635.220338983,
            "unit": "ns",
            "range": "± 153226.58661412558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4241577.456521739,
            "unit": "ns",
            "range": "± 162243.87169412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4349447.032786885,
            "unit": "ns",
            "range": "± 196032.21900136443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6947517.205882353,
            "unit": "ns",
            "range": "± 220776.32499264806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7836923.48,
            "unit": "ns",
            "range": "± 203835.5776561753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21607039.666666668,
            "unit": "ns",
            "range": "± 297952.1043971106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54011332.38888889,
            "unit": "ns",
            "range": "± 1104930.884791237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109323069.15384616,
            "unit": "ns",
            "range": "± 837073.6548473344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211820483.86666667,
            "unit": "ns",
            "range": "± 3068978.5439280667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5320800.2640625,
            "unit": "ns",
            "range": "± 38480.09058594734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1678348.2177734375,
            "unit": "ns",
            "range": "± 5270.212294611992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1222565.3759765625,
            "unit": "ns",
            "range": "± 3912.46238873067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2311030.255989583,
            "unit": "ns",
            "range": "± 3634.7059852035463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841841.1157602164,
            "unit": "ns",
            "range": "± 1143.1982414424485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 678808.985546875,
            "unit": "ns",
            "range": "± 1432.6831486163644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49129.85393258427,
            "unit": "ns",
            "range": "± 2740.400466548315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285801.0333333333,
            "unit": "ns",
            "range": "± 10840.520720049299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274985.42424242425,
            "unit": "ns",
            "range": "± 8535.743644486633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235575.72727272726,
            "unit": "ns",
            "range": "± 5739.601928969491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4419250.357142857,
            "unit": "ns",
            "range": "± 65360.33753750423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4039462.6,
            "unit": "ns",
            "range": "± 64192.48728495081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19791.958333333332,
            "unit": "ns",
            "range": "± 1758.131244227752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89416.8125,
            "unit": "ns",
            "range": "± 7704.860950024376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72271.4705882353,
            "unit": "ns",
            "range": "± 1477.2816724328109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99404.23469387754,
            "unit": "ns",
            "range": "± 14221.897446015053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5525.602040816327,
            "unit": "ns",
            "range": "± 1038.9555296417223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18214.010638297874,
            "unit": "ns",
            "range": "± 2056.40715234841"
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
          "id": "491a8b1b2360f52794079532c4417611f278c754",
          "message": "Changelog",
          "timestamp": "2023-06-13T00:56:09+09:00",
          "tree_id": "c7d11a1c3f55368b271cae22081535314ea65a25",
          "url": "https://github.com/greymistcube/libplanet/commit/491a8b1b2360f52794079532c4417611f278c754"
        },
        "date": 1686586141606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368452,
            "unit": "ns",
            "range": "± 75710.10848068641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2625748.8076923075,
            "unit": "ns",
            "range": "± 69549.00988512732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2236491.2926829266,
            "unit": "ns",
            "range": "± 116794.61753743514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5422806.342105263,
            "unit": "ns",
            "range": "± 182833.78941855926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3368194.52,
            "unit": "ns",
            "range": "± 88500.38540976343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3624230.7333333334,
            "unit": "ns",
            "range": "± 65670.0124980591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4361367.653846154,
            "unit": "ns",
            "range": "± 118443.47026086067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4512654.647058823,
            "unit": "ns",
            "range": "± 92561.36631577264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7008997.03125,
            "unit": "ns",
            "range": "± 213647.6562165039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7565564.214285715,
            "unit": "ns",
            "range": "± 47738.21092838374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21508306.733333334,
            "unit": "ns",
            "range": "± 289883.05008879176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53493170.4,
            "unit": "ns",
            "range": "± 853802.9359669762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107991118.26666667,
            "unit": "ns",
            "range": "± 1755970.3139002854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214520604.53333333,
            "unit": "ns",
            "range": "± 2138322.2874731845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6055714.629206731,
            "unit": "ns",
            "range": "± 27100.16577584881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848752.218359375,
            "unit": "ns",
            "range": "± 6944.192214574493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372096.204799107,
            "unit": "ns",
            "range": "± 2332.6033961271924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617907.8052083333,
            "unit": "ns",
            "range": "± 4272.521253784924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809464.2804827009,
            "unit": "ns",
            "range": "± 1504.652855969369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763100.8406901042,
            "unit": "ns",
            "range": "± 647.5418540890265"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48162.69135802469,
            "unit": "ns",
            "range": "± 2250.483651584562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287221.9210526316,
            "unit": "ns",
            "range": "± 9905.120402235807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275126.4705882353,
            "unit": "ns",
            "range": "± 8833.721135805077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242186,
            "unit": "ns",
            "range": "± 5581.793712833857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4369742.8125,
            "unit": "ns",
            "range": "± 84917.21488463043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4087097.4615384615,
            "unit": "ns",
            "range": "± 18411.425074372455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18931.880434782608,
            "unit": "ns",
            "range": "± 1541.756981480112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91036.9247311828,
            "unit": "ns",
            "range": "± 5509.597827658013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71095.375,
            "unit": "ns",
            "range": "± 774.3601121786513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93818.06451612903,
            "unit": "ns",
            "range": "± 11783.439660596683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5840.989795918367,
            "unit": "ns",
            "range": "± 772.7242008740587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19449.55319148936,
            "unit": "ns",
            "range": "± 1599.3938342150716"
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
          "id": "5933669b840dd26e15ad7aaf3d629a322056ea7a",
          "message": "Changelog",
          "timestamp": "2023-06-14T12:03:45+09:00",
          "tree_id": "6a4d569228751c536a089727c09800efa4427895",
          "url": "https://github.com/greymistcube/libplanet/commit/5933669b840dd26e15ad7aaf3d629a322056ea7a"
        },
        "date": 1686712687727,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431776.9550561798,
            "unit": "ns",
            "range": "± 81580.7845406667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2794000.464285714,
            "unit": "ns",
            "range": "± 79653.78724551792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2341963.9846153846,
            "unit": "ns",
            "range": "± 109348.7063803072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5715987.166666667,
            "unit": "ns",
            "range": "± 208266.70819559728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3535480.1,
            "unit": "ns",
            "range": "± 103232.12125989294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3644987.5714285714,
            "unit": "ns",
            "range": "± 119789.37641913416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4424523.928571428,
            "unit": "ns",
            "range": "± 60761.4157801634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4560726.571428572,
            "unit": "ns",
            "range": "± 75108.1459586153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7127195.407407408,
            "unit": "ns",
            "range": "± 199053.4650449586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8202827.222222222,
            "unit": "ns",
            "range": "± 167946.96188049632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21943821.333333332,
            "unit": "ns",
            "range": "± 339733.12872494216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56195352.2,
            "unit": "ns",
            "range": "± 407043.96082297683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111109042.33333333,
            "unit": "ns",
            "range": "± 1033344.6377303629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218770444.33333334,
            "unit": "ns",
            "range": "± 2012202.7060571376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6053086.606119792,
            "unit": "ns",
            "range": "± 19154.50531698551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850752.4532552084,
            "unit": "ns",
            "range": "± 2771.1685350595562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366852.8455729166,
            "unit": "ns",
            "range": "± 3396.002900699927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628205.284375,
            "unit": "ns",
            "range": "± 2366.26367720395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833285.0873697917,
            "unit": "ns",
            "range": "± 774.0430124937154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751483.95625,
            "unit": "ns",
            "range": "± 455.8808523567285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46527.670731707316,
            "unit": "ns",
            "range": "± 2371.3268883120177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285005.24,
            "unit": "ns",
            "range": "± 5666.603202683833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275571.54901960783,
            "unit": "ns",
            "range": "± 10868.4623978072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246309.0754716981,
            "unit": "ns",
            "range": "± 10288.65463442632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4459858.6,
            "unit": "ns",
            "range": "± 40977.45348324403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4023805.2666666666,
            "unit": "ns",
            "range": "± 58696.94632537377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20912.968421052632,
            "unit": "ns",
            "range": "± 2438.851000188372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92444.92929292929,
            "unit": "ns",
            "range": "± 7310.594493055149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78070.77777777778,
            "unit": "ns",
            "range": "± 3574.459302420367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96252.15463917526,
            "unit": "ns",
            "range": "± 12735.520386191041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5402.092783505154,
            "unit": "ns",
            "range": "± 742.1771054707089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19422.860215053763,
            "unit": "ns",
            "range": "± 1453.6521666313877"
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
          "id": "9a732dad85b58fca84e3790f2fbaf9f08655b765",
          "message": "Changed GasUsed and GasLimit to property",
          "timestamp": "2023-07-10T15:14:05+09:00",
          "tree_id": "31421bc2504ee81adbd2844a2d5ed07fe079a4d4",
          "url": "https://github.com/greymistcube/libplanet/commit/9a732dad85b58fca84e3790f2fbaf9f08655b765"
        },
        "date": 1689062727843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317831.125,
            "unit": "ns",
            "range": "± 5989.633832714651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297759.4137931034,
            "unit": "ns",
            "range": "± 12997.308185596945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287122.63,
            "unit": "ns",
            "range": "± 17558.433147610038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4780790.571428572,
            "unit": "ns",
            "range": "± 52072.50676732364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4331309.461538462,
            "unit": "ns",
            "range": "± 36512.420463488364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23376.326315789473,
            "unit": "ns",
            "range": "± 2611.5219514726496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101392.96774193548,
            "unit": "ns",
            "range": "± 5984.320684363091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83988.23333333334,
            "unit": "ns",
            "range": "± 5914.267249816092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122192.19387755102,
            "unit": "ns",
            "range": "± 23502.84078625134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6493.432989690722,
            "unit": "ns",
            "range": "± 1223.9937611089676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22550.44680851064,
            "unit": "ns",
            "range": "± 2660.970037439541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605613.5918367347,
            "unit": "ns",
            "range": "± 119095.33434513771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2979148.288888889,
            "unit": "ns",
            "range": "± 110244.06665019998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2005100.6973684211,
            "unit": "ns",
            "range": "± 98022.36791739863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5469948.285714285,
            "unit": "ns",
            "range": "± 194063.8169151387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6241656.919791667,
            "unit": "ns",
            "range": "± 49901.229892021365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945176.7066127232,
            "unit": "ns",
            "range": "± 1890.871309065971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390037.2045572917,
            "unit": "ns",
            "range": "± 4192.703341284862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651541.007421875,
            "unit": "ns",
            "range": "± 2064.3786415255345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843753.7850260417,
            "unit": "ns",
            "range": "± 336.8102237517139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769637.6102818081,
            "unit": "ns",
            "range": "± 321.6430573419552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3795793.0833333335,
            "unit": "ns",
            "range": "± 95961.55430574977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4040164.68,
            "unit": "ns",
            "range": "± 107859.35060675081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4736913.487179487,
            "unit": "ns",
            "range": "± 165646.40245253424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4385723.315789473,
            "unit": "ns",
            "range": "± 92483.3108115865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7088834.774193549,
            "unit": "ns",
            "range": "± 210838.0624624358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8511914.5,
            "unit": "ns",
            "range": "± 173099.36937705838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22913895.8,
            "unit": "ns",
            "range": "± 336874.1769188355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58317642.35714286,
            "unit": "ns",
            "range": "± 680231.1606561639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116212242.26666667,
            "unit": "ns",
            "range": "± 752790.4622915109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232083610.06666666,
            "unit": "ns",
            "range": "± 863080.4456669367"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51650.406593406595,
            "unit": "ns",
            "range": "± 3459.3909000735375"
          }
        ]
      }
    ]
  }
}