window.BENCHMARK_DATA = {
  "lastUpdate": 1691723607825,
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
          "id": "e48262a64ed22b0e650c843b3fde0de33b1170d6",
          "message": "Prepare 3.2.1",
          "timestamp": "2023-08-11T11:57:16+09:00",
          "tree_id": "b4396921fa9482f449cd092c685901864dc9aece",
          "url": "https://github.com/greymistcube/libplanet/commit/e48262a64ed22b0e650c843b3fde0de33b1170d6"
        },
        "date": 1691723583244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369614,
            "unit": "ns",
            "range": "± 109159.93457845107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600210.9589041094,
            "unit": "ns",
            "range": "± 129232.58593374694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1701012.121212121,
            "unit": "ns",
            "range": "± 135083.42492071958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4429053.846153846,
            "unit": "ns",
            "range": "± 174529.5732696936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47070.65217391304,
            "unit": "ns",
            "range": "± 3058.1017614170455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7582340.740740741,
            "unit": "ns",
            "range": "± 205734.78494870948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20648492.85714286,
            "unit": "ns",
            "range": "± 261671.70995583147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52830786.666666664,
            "unit": "ns",
            "range": "± 741288.5074234561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105007273.33333333,
            "unit": "ns",
            "range": "± 1807895.2243134107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213046413.33333334,
            "unit": "ns",
            "range": "± 3182225.407942119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4562160.729166667,
            "unit": "ns",
            "range": "± 10413.351541022601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1434887.6255580357,
            "unit": "ns",
            "range": "± 4600.338543587644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070394.140625,
            "unit": "ns",
            "range": "± 2579.2162096920583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679179.777644231,
            "unit": "ns",
            "range": "± 5863.288834248489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836828.5456730769,
            "unit": "ns",
            "range": "± 1642.190493867804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766848.9583333334,
            "unit": "ns",
            "range": "± 2409.9387265639257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432150,
            "unit": "ns",
            "range": "± 81889.75603124693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625305.263157895,
            "unit": "ns",
            "range": "± 60437.95233023158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4260866.101694915,
            "unit": "ns",
            "range": "± 187738.3695007951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3825181.4814814813,
            "unit": "ns",
            "range": "± 102888.01992396706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6056856,
            "unit": "ns",
            "range": "± 159044.10572752033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265433.3333333333,
            "unit": "ns",
            "range": "± 6173.356731417141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253497.72727272726,
            "unit": "ns",
            "range": "± 9200.113463313568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232025,
            "unit": "ns",
            "range": "± 18738.354632769504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4069913.3333333335,
            "unit": "ns",
            "range": "± 72086.64297384152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3762735.714285714,
            "unit": "ns",
            "range": "± 49812.56571686208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22673.469387755104,
            "unit": "ns",
            "range": "± 3704.4568036884216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87789.58333333333,
            "unit": "ns",
            "range": "± 6925.307960724721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73850,
            "unit": "ns",
            "range": "± 8054.181442559971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86315.46391752578,
            "unit": "ns",
            "range": "± 13305.194319373493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5577.319587628866,
            "unit": "ns",
            "range": "± 911.672587729002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21261.616161616163,
            "unit": "ns",
            "range": "± 3888.6204224557864"
          }
        ]
      }
    ]
  }
}