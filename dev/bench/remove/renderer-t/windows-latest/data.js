window.BENCHMARK_DATA = {
  "lastUpdate": 1684143768695,
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
          "id": "2b3cbf39451018cb40616ce35eaec98920f1d09f",
          "message": "Removed t from ValidatingActionRenderer",
          "timestamp": "2023-05-15T18:16:40+09:00",
          "tree_id": "97f78ae1c1cd89e5920809d894e84fe961e1e86c",
          "url": "https://github.com/greymistcube/libplanet/commit/2b3cbf39451018cb40616ce35eaec98920f1d09f"
        },
        "date": 1684143059473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1218475.2577319588,
            "unit": "ns",
            "range": "± 126218.59677999103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2302934.722222222,
            "unit": "ns",
            "range": "± 112331.05017636294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033946.3917525774,
            "unit": "ns",
            "range": "± 169561.29487952116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5212817.24137931,
            "unit": "ns",
            "range": "± 379640.6174531494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49525,
            "unit": "ns",
            "range": "± 850.4900548115382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6122869.230769231,
            "unit": "ns",
            "range": "± 57502.81709932979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17277346.666666668,
            "unit": "ns",
            "range": "± 297697.08205937565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43765985,
            "unit": "ns",
            "range": "± 942483.5987823259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89806318.42105263,
            "unit": "ns",
            "range": "± 3049953.064136443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178378741.66666666,
            "unit": "ns",
            "range": "± 5372648.640787628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4377800.558035715,
            "unit": "ns",
            "range": "± 56363.9214217396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1383795.2213541667,
            "unit": "ns",
            "range": "± 19741.284550439956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073762.560614224,
            "unit": "ns",
            "range": "± 31425.671692038606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2430715.8088235296,
            "unit": "ns",
            "range": "± 46848.98417848746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 749172.5471047794,
            "unit": "ns",
            "range": "± 14572.221910472517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 688707.2265625,
            "unit": "ns",
            "range": "± 6305.004335269927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2913057.777777778,
            "unit": "ns",
            "range": "± 108780.65396368821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3162334.6153846155,
            "unit": "ns",
            "range": "± 130436.71726033697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3694046.8085106383,
            "unit": "ns",
            "range": "± 213239.39180065048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3681960.465116279,
            "unit": "ns",
            "range": "± 197824.05449351124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6097430.555555556,
            "unit": "ns",
            "range": "± 300584.65407348354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241165.06024096385,
            "unit": "ns",
            "range": "± 12844.648062044756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233935.29411764705,
            "unit": "ns",
            "range": "± 10125.507390358454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227118.55670103093,
            "unit": "ns",
            "range": "± 15526.699651305671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3697835.714285714,
            "unit": "ns",
            "range": "± 61581.41399359509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3324534.210526316,
            "unit": "ns",
            "range": "± 71230.26247598462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21064.516129032258,
            "unit": "ns",
            "range": "± 2932.488376539858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86198.96907216495,
            "unit": "ns",
            "range": "± 7759.127620172054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72847.36842105263,
            "unit": "ns",
            "range": "± 6070.645135636075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108202.04081632652,
            "unit": "ns",
            "range": "± 17712.148429191144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7035.416666666667,
            "unit": "ns",
            "range": "± 1452.11128808451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20034.40860215054,
            "unit": "ns",
            "range": "± 2521.321885166757"
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
          "id": "5f91d28dd93096f81522e019fb7aa79c92594c41",
          "message": "Changelog",
          "timestamp": "2023-05-15T18:24:37+09:00",
          "tree_id": "fdc8462c023211bfe1f722a7dac715dc8cf8b11d",
          "url": "https://github.com/greymistcube/libplanet/commit/5f91d28dd93096f81522e019fb7aa79c92594c41"
        },
        "date": 1684143747435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1292086.7346938776,
            "unit": "ns",
            "range": "± 92130.53003475878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2397565.3061224488,
            "unit": "ns",
            "range": "± 95373.91229397326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2120190.625,
            "unit": "ns",
            "range": "± 128404.34660467567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5260219.76744186,
            "unit": "ns",
            "range": "± 284313.281980518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46985.91549295775,
            "unit": "ns",
            "range": "± 2327.309653081851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6738292.857142857,
            "unit": "ns",
            "range": "± 27635.10766804023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18394892.307692308,
            "unit": "ns",
            "range": "± 270055.11616933084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48456681.25,
            "unit": "ns",
            "range": "± 917188.7251950931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93679269.56521739,
            "unit": "ns",
            "range": "± 2355312.564942724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196472240,
            "unit": "ns",
            "range": "± 3579219.1931441454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4783454.869791667,
            "unit": "ns",
            "range": "± 20008.290998390963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497170.4799107143,
            "unit": "ns",
            "range": "± 5394.437107344401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150983.7369791667,
            "unit": "ns",
            "range": "± 5986.74431890564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605170.1822916665,
            "unit": "ns",
            "range": "± 6649.909149215844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832846.240234375,
            "unit": "ns",
            "range": "± 2554.909183034351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756211.0416666666,
            "unit": "ns",
            "range": "± 2380.3795073302163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212458.8235294116,
            "unit": "ns",
            "range": "± 61757.86446704106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3274414.6341463416,
            "unit": "ns",
            "range": "± 115955.61340654365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3997995,
            "unit": "ns",
            "range": "± 138369.28099501322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4211244.444444444,
            "unit": "ns",
            "range": "± 117198.54400950858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6500952.380952381,
            "unit": "ns",
            "range": "± 150397.38900342523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251289.36170212767,
            "unit": "ns",
            "range": "± 8065.579955496157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241845,
            "unit": "ns",
            "range": "± 10196.982355213839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214578.78787878787,
            "unit": "ns",
            "range": "± 10097.395172884404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3861340.909090909,
            "unit": "ns",
            "range": "± 92950.41002030988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3480040,
            "unit": "ns",
            "range": "± 76899.054815901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17775,
            "unit": "ns",
            "range": "± 1652.7489063280063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81178.94736842105,
            "unit": "ns",
            "range": "± 6593.434754276603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70434.78260869565,
            "unit": "ns",
            "range": "± 1771.3910034084856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89927.8350515464,
            "unit": "ns",
            "range": "± 14088.431589044083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5186.559139784947,
            "unit": "ns",
            "range": "± 646.8628216642427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17572.916666666668,
            "unit": "ns",
            "range": "± 1930.992609033072"
          }
        ]
      }
    ]
  }
}