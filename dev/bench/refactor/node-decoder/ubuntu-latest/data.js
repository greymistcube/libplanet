window.BENCHMARK_DATA = {
  "lastUpdate": 1693447850575,
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
      }
    ]
  }
}