window.BENCHMARK_DATA = {
  "lastUpdate": 1689325245122,
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
          "id": "589bc3f9aa3318991231573683e452f6d1fc70dc",
          "message": "Merge tag '2.4.1' into merge/2.4.1-to-main\n\nLibplanet 2.4.1",
          "timestamp": "2023-07-14T17:43:32+09:00",
          "tree_id": "cede7080b7cb7a22e5c7e49ead453919777f42df",
          "url": "https://github.com/greymistcube/libplanet/commit/589bc3f9aa3318991231573683e452f6d1fc70dc"
        },
        "date": 1689325226993,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8364046.875,
            "unit": "ns",
            "range": "± 159115.91183279984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22596966.53012048,
            "unit": "ns",
            "range": "± 1200983.051550325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53714128.52380952,
            "unit": "ns",
            "range": "± 1268728.357227528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111149216.03846154,
            "unit": "ns",
            "range": "± 1777490.151608189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231089348.6875,
            "unit": "ns",
            "range": "± 4507591.360160711"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74054.06818181818,
            "unit": "ns",
            "range": "± 8758.208026438871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371118.1354166667,
            "unit": "ns",
            "range": "± 31943.40697418344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329684.4943820225,
            "unit": "ns",
            "range": "± 21296.51220704055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326788.16,
            "unit": "ns",
            "range": "± 13084.245687022518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4214886.461538462,
            "unit": "ns",
            "range": "± 147599.23624549148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3710910.6764705884,
            "unit": "ns",
            "range": "± 76216.3925504508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22240.371134020617,
            "unit": "ns",
            "range": "± 4630.876751310139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102084.5,
            "unit": "ns",
            "range": "± 13242.059664629825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117310.90425531915,
            "unit": "ns",
            "range": "± 10867.290645785715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115552.23958333333,
            "unit": "ns",
            "range": "± 15310.585597274498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6925.3,
            "unit": "ns",
            "range": "± 785.2694157543312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22212.369565217392,
            "unit": "ns",
            "range": "± 4096.792842966853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1602331.530612245,
            "unit": "ns",
            "range": "± 166649.134432069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2924119.598039216,
            "unit": "ns",
            "range": "± 117700.65628436486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2287452.3434343436,
            "unit": "ns",
            "range": "± 264194.6625900003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6043534.701298702,
            "unit": "ns",
            "range": "± 305956.9367734042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3613338.6578947366,
            "unit": "ns",
            "range": "± 123305.85281291534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3710256.7717391304,
            "unit": "ns",
            "range": "± 222841.39469192884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4827249.972222222,
            "unit": "ns",
            "range": "± 238487.4245287102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4188503.288659794,
            "unit": "ns",
            "range": "± 250824.3145588062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7997809.46875,
            "unit": "ns",
            "range": "± 548071.9512416311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6597012.81796875,
            "unit": "ns",
            "range": "± 74872.18505352673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878257.7943638393,
            "unit": "ns",
            "range": "± 8614.64735602618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283718.9173177083,
            "unit": "ns",
            "range": "± 11265.442365711204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667628.5416165865,
            "unit": "ns",
            "range": "± 66049.33041517045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 772943.5200570914,
            "unit": "ns",
            "range": "± 3659.781884934619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788014.5819661458,
            "unit": "ns",
            "range": "± 8605.818941290705"
          }
        ]
      }
    ]
  }
}