window.BENCHMARK_DATA = {
  "lastUpdate": 1693482081113,
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
          "id": "571d2e2ecda5fef58ff55aa70421c94e053a5be9",
          "message": "Refactor NodeDecoder",
          "timestamp": "2023-08-31T10:55:48+09:00",
          "tree_id": "f99d98bba7f37125fa41427b2ed6228f30cb9410",
          "url": "https://github.com/greymistcube/libplanet/commit/571d2e2ecda5fef58ff55aa70421c94e053a5be9"
        },
        "date": 1693447843290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414219.8105263158,
            "unit": "ns",
            "range": "± 93850.02997361709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693394.8958333335,
            "unit": "ns",
            "range": "± 104741.03843496935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1816250.2474226805,
            "unit": "ns",
            "range": "± 113260.65533989055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4998366.97260274,
            "unit": "ns",
            "range": "± 246562.6231969259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276804.4,
            "unit": "ns",
            "range": "± 3816.9210067053486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266556.04,
            "unit": "ns",
            "range": "± 6994.343246986573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227507.0357142857,
            "unit": "ns",
            "range": "± 6331.402503817296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4333062.133333334,
            "unit": "ns",
            "range": "± 78037.94069083748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4124374,
            "unit": "ns",
            "range": "± 106828.25801704585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20824.16304347826,
            "unit": "ns",
            "range": "± 1441.7881242064393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83663.46753246753,
            "unit": "ns",
            "range": "± 3901.8075115880106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69739.77777777778,
            "unit": "ns",
            "range": "± 1460.8203801311563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80877.17582417582,
            "unit": "ns",
            "range": "± 11053.434248225909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4774.052083333333,
            "unit": "ns",
            "range": "± 622.6240966103259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19526.28125,
            "unit": "ns",
            "range": "± 1607.3545294127505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49263.857142857145,
            "unit": "ns",
            "range": "± 2628.3614765924253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7933149.666666667,
            "unit": "ns",
            "range": "± 26110.33808260396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22402816.5,
            "unit": "ns",
            "range": "± 373358.63727804046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62539036.86666667,
            "unit": "ns",
            "range": "± 927505.7454137696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111078205.3125,
            "unit": "ns",
            "range": "± 2114296.3207097123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217384311.6,
            "unit": "ns",
            "range": "± 2630814.445240099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3450248.9310344825,
            "unit": "ns",
            "range": "± 100832.90451602559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3644707.210526316,
            "unit": "ns",
            "range": "± 125742.58817083584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4229636.642857143,
            "unit": "ns",
            "range": "± 120607.19800465638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3881237.6836734693,
            "unit": "ns",
            "range": "± 146883.83477310586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6412315.84,
            "unit": "ns",
            "range": "± 165600.26483163203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5182558.352764423,
            "unit": "ns",
            "range": "± 13160.91339593425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1581305.0046037945,
            "unit": "ns",
            "range": "± 3086.730924415859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058077.0029947916,
            "unit": "ns",
            "range": "± 2664.2341133968007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590644.72265625,
            "unit": "ns",
            "range": "± 6287.248133311117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820724.5516276042,
            "unit": "ns",
            "range": "± 1397.840194586804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762438.4416155134,
            "unit": "ns",
            "range": "± 977.7733937162633"
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
          "id": "b009c43def68be5293857b846e3d88bf5d14f615",
          "message": "Refactor NodeDecoder",
          "timestamp": "2023-08-31T20:21:28+09:00",
          "tree_id": "a28e26137d61b69419adef608eb66cfff1c312f0",
          "url": "https://github.com/greymistcube/libplanet/commit/b009c43def68be5293857b846e3d88bf5d14f615"
        },
        "date": 1693482071471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1627035.2142857143,
            "unit": "ns",
            "range": "± 170034.75072995806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3253795.1145833335,
            "unit": "ns",
            "range": "± 350728.0747864473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2161642.3225806453,
            "unit": "ns",
            "range": "± 228670.04295810158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6406855.555555556,
            "unit": "ns",
            "range": "± 528832.517065219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371200.2916666667,
            "unit": "ns",
            "range": "± 41653.2298030996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332655.23333333334,
            "unit": "ns",
            "range": "± 38347.880517160615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298839.3229166667,
            "unit": "ns",
            "range": "± 48889.43827184694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5155316.041237113,
            "unit": "ns",
            "range": "± 327359.4301822196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4741877,
            "unit": "ns",
            "range": "± 370977.9884390286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25801.445652173912,
            "unit": "ns",
            "range": "± 7603.313650609274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108930.12222222223,
            "unit": "ns",
            "range": "± 12324.210160737177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114853.83157894737,
            "unit": "ns",
            "range": "± 20997.068705575348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113544.52688172043,
            "unit": "ns",
            "range": "± 23843.38531305422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5502.3,
            "unit": "ns",
            "range": "± 1180.1015520003805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23602.25773195876,
            "unit": "ns",
            "range": "± 9058.576578624203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64033.333333333336,
            "unit": "ns",
            "range": "± 11338.038428165197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10769246.234567901,
            "unit": "ns",
            "range": "± 566362.968808371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26874080.101694915,
            "unit": "ns",
            "range": "± 1151735.920816901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69940696.65432099,
            "unit": "ns",
            "range": "± 3669445.802866402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136903198.51923078,
            "unit": "ns",
            "range": "± 5551638.193560508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277868568.75,
            "unit": "ns",
            "range": "± 7010261.610361715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3898171.3333333335,
            "unit": "ns",
            "range": "± 295853.322762029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4105394.4591836734,
            "unit": "ns",
            "range": "± 374727.7925056645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5563567.195876288,
            "unit": "ns",
            "range": "± 376329.34086943266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4804207.758241759,
            "unit": "ns",
            "range": "± 267854.7137226672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8532336,
            "unit": "ns",
            "range": "± 469829.807925945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5848095.902901785,
            "unit": "ns",
            "range": "± 67935.91964483536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2012218.8126446758,
            "unit": "ns",
            "range": "± 56344.7394285716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1328117.9889787945,
            "unit": "ns",
            "range": "± 20140.71029312343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3220072.7490985575,
            "unit": "ns",
            "range": "± 37070.28165225591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1088233.0857747395,
            "unit": "ns",
            "range": "± 27588.061759632303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 986997.7022786458,
            "unit": "ns",
            "range": "± 10648.37097810528"
          }
        ]
      }
    ]
  }
}