window.BENCHMARK_DATA = {
  "lastUpdate": 1691482647788,
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
          "id": "b1f623b36c98e27c21c226c5817feae3e4ac02d5",
          "message": "Added single get to ITrie; automatic parallel switch",
          "timestamp": "2023-08-08T16:57:00+09:00",
          "tree_id": "d610e24cc0d89f3256b8bdabcfe58ee6378c5b2a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1f623b36c98e27c21c226c5817feae3e4ac02d5"
        },
        "date": 1691482622752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611232.2222222222,
            "unit": "ns",
            "range": "± 87526.67115540021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3022300,
            "unit": "ns",
            "range": "± 110345.95708000561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2063188.5416666667,
            "unit": "ns",
            "range": "± 122864.89702089911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5384283.333333333,
            "unit": "ns",
            "range": "± 156478.9202137603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56451.64835164835,
            "unit": "ns",
            "range": "± 3184.9075562151156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8693555.88235294,
            "unit": "ns",
            "range": "± 147590.84266388378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24263464.285714287,
            "unit": "ns",
            "range": "± 274799.00516879285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60895073.333333336,
            "unit": "ns",
            "range": "± 620013.7964670818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123640553.84615384,
            "unit": "ns",
            "range": "± 1554172.9459830527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245235684.6153846,
            "unit": "ns",
            "range": "± 1916986.92781413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5884658.537946428,
            "unit": "ns",
            "range": "± 46239.215505730645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906415.3776041667,
            "unit": "ns",
            "range": "± 24436.155548907427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1421237.3177083333,
            "unit": "ns",
            "range": "± 15850.152382492763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197534.735576923,
            "unit": "ns",
            "range": "± 20781.361088864913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048868.1380208333,
            "unit": "ns",
            "range": "± 17193.20519608154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932976.3881138393,
            "unit": "ns",
            "range": "± 7616.14073646373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3964053.3333333335,
            "unit": "ns",
            "range": "± 108346.12713137381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4182342.62295082,
            "unit": "ns",
            "range": "± 186196.37882176656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5036722.7272727275,
            "unit": "ns",
            "range": "± 109388.92575540762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4599416.666666667,
            "unit": "ns",
            "range": "± 95968.07220296207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7441935.897435897,
            "unit": "ns",
            "range": "± 242959.23037586224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320988.23529411765,
            "unit": "ns",
            "range": "± 10180.522541386874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303810.71428571426,
            "unit": "ns",
            "range": "± 8614.171755105364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279866.0714285714,
            "unit": "ns",
            "range": "± 12031.750069722182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4965440,
            "unit": "ns",
            "range": "± 63590.83267264237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4530738.461538462,
            "unit": "ns",
            "range": "± 64460.13675729545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24794.736842105263,
            "unit": "ns",
            "range": "± 2296.4991127130984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108305.20833333333,
            "unit": "ns",
            "range": "± 6776.885945184195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93830.52631578948,
            "unit": "ns",
            "range": "± 6721.972128364777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120442.85714285714,
            "unit": "ns",
            "range": "± 15716.666575563113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6824.468085106383,
            "unit": "ns",
            "range": "± 1018.2935515041834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25218.367346938776,
            "unit": "ns",
            "range": "± 2394.596448741384"
          }
        ]
      }
    ]
  }
}