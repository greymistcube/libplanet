window.BENCHMARK_DATA = {
  "lastUpdate": 1683610486993,
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
          "id": "f1d09b79c28cb8adebced6227ec54e4e1a7b5d13",
          "message": "Release 1.1.0",
          "timestamp": "2023-05-09T14:18:03+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/greymistcube/libplanet/commit/f1d09b79c28cb8adebced6227ec54e4e1a7b5d13"
        },
        "date": 1683610464793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1320956.1224489796,
            "unit": "ns",
            "range": "± 122623.26688147677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2373993.3333333335,
            "unit": "ns",
            "range": "± 69634.35380532412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2083019.7674418604,
            "unit": "ns",
            "range": "± 112315.19285398406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4918088.596491228,
            "unit": "ns",
            "range": "± 213825.52780445118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41572,
            "unit": "ns",
            "range": "± 1981.0289436743915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6760123.076923077,
            "unit": "ns",
            "range": "± 18867.439052777045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17033685.714285713,
            "unit": "ns",
            "range": "± 82975.86170913579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44742473.333333336,
            "unit": "ns",
            "range": "± 286989.1672088654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89202006.66666667,
            "unit": "ns",
            "range": "± 1655363.7414118242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178546735.7142857,
            "unit": "ns",
            "range": "± 1960538.4694427282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4802197.209821428,
            "unit": "ns",
            "range": "± 14021.990027726255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497346.9651442308,
            "unit": "ns",
            "range": "± 2182.214377817946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158258.6763822115,
            "unit": "ns",
            "range": "± 1537.8599731946836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2541977.4832589286,
            "unit": "ns",
            "range": "± 9722.166729099936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816897.8125,
            "unit": "ns",
            "range": "± 3654.0009968704294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722558.6125300481,
            "unit": "ns",
            "range": "± 718.5069631194175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2842921.4285714286,
            "unit": "ns",
            "range": "± 32173.52419833207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3071473.6842105263,
            "unit": "ns",
            "range": "± 67584.59589536051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3830253.846153846,
            "unit": "ns",
            "range": "± 53187.586512027025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3846657.1428571427,
            "unit": "ns",
            "range": "± 91856.55656580528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6197592.857142857,
            "unit": "ns",
            "range": "± 166011.1797408289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249666.66666666666,
            "unit": "ns",
            "range": "± 8172.724672435049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237116.66666666666,
            "unit": "ns",
            "range": "± 7854.734695892481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223597.46835443037,
            "unit": "ns",
            "range": "± 11583.431742989576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3757228.5714285714,
            "unit": "ns",
            "range": "± 35758.94570316913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3375728.5714285714,
            "unit": "ns",
            "range": "± 36231.848050945635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16521.649484536083,
            "unit": "ns",
            "range": "± 1513.703158105679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76644.04761904762,
            "unit": "ns",
            "range": "± 4117.560138198471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70108.0808080808,
            "unit": "ns",
            "range": "± 5775.523242797773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81883.33333333333,
            "unit": "ns",
            "range": "± 8400.859372840803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4352.1505376344085,
            "unit": "ns",
            "range": "± 847.4999672468452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15762.886597938144,
            "unit": "ns",
            "range": "± 1650.4620304900525"
          }
        ]
      }
    ]
  }
}