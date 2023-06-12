window.BENCHMARK_DATA = {
  "lastUpdate": 1686576128661,
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
      }
    ]
  }
}