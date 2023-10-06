window.BENCHMARK_DATA = {
  "lastUpdate": 1696597707249,
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
          "id": "1722d4fb254d6e1366b926fc53cabd07dbede07e",
          "message": "Prepare 3.7.0",
          "timestamp": "2023-10-06T21:54:42+09:00",
          "tree_id": "cbd6e25eb97c88fc010844922b0bba97a7b24078",
          "url": "https://github.com/greymistcube/libplanet/commit/1722d4fb254d6e1366b926fc53cabd07dbede07e"
        },
        "date": 1696597700079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51956.03658536585,
            "unit": "ns",
            "range": "± 2762.958789097283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8142415.428571428,
            "unit": "ns",
            "range": "± 192054.43234967825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21896042,
            "unit": "ns",
            "range": "± 210358.86753721235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56175759.666666664,
            "unit": "ns",
            "range": "± 742898.5329879624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110384146.13333334,
            "unit": "ns",
            "range": "± 1482953.2907302077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220037143.6,
            "unit": "ns",
            "range": "± 2599810.6332334722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277460.4705882353,
            "unit": "ns",
            "range": "± 8786.847603215789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267062.1212121212,
            "unit": "ns",
            "range": "± 8063.320775111733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233991.14814814815,
            "unit": "ns",
            "range": "± 6344.153412053457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4389665.666666667,
            "unit": "ns",
            "range": "± 58959.424313513715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3889722.5714285714,
            "unit": "ns",
            "range": "± 53636.744445624914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19431.444444444445,
            "unit": "ns",
            "range": "± 1345.5237576022805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85360.33333333333,
            "unit": "ns",
            "range": "± 4734.778568200169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74860.36363636363,
            "unit": "ns",
            "range": "± 2597.537090103024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96514,
            "unit": "ns",
            "range": "± 1797.6485381371594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5826.855670103093,
            "unit": "ns",
            "range": "± 637.6294474733919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21307.827956989247,
            "unit": "ns",
            "range": "± 1507.0815781247393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404649.22,
            "unit": "ns",
            "range": "± 96922.64303526298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2649243.272727273,
            "unit": "ns",
            "range": "± 57111.02233968485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2085748.93220339,
            "unit": "ns",
            "range": "± 87878.9410262315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8977135.82051282,
            "unit": "ns",
            "range": "± 309649.47198038315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5075641.392299107,
            "unit": "ns",
            "range": "± 32144.43014124918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588809.6832932692,
            "unit": "ns",
            "range": "± 1619.205921983893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1094866.6727864584,
            "unit": "ns",
            "range": "± 2987.013373752793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618416.92578125,
            "unit": "ns",
            "range": "± 4043.3276846532376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839540.4767578125,
            "unit": "ns",
            "range": "± 1073.9600759164414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756184.2841796875,
            "unit": "ns",
            "range": "± 697.2643421410479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470895.8235294116,
            "unit": "ns",
            "range": "± 109862.30587186429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3658945.846153846,
            "unit": "ns",
            "range": "± 99616.60274259197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4379758.05,
            "unit": "ns",
            "range": "± 100752.16547312362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4387868,
            "unit": "ns",
            "range": "± 136668.79661018093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10768956.9,
            "unit": "ns",
            "range": "± 305000.2966216128"
          }
        ]
      }
    ]
  }
}