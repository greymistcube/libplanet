window.BENCHMARK_DATA = {
  "lastUpdate": 1707207713216,
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
          "id": "40ab0cee84b3b942a8ca8b05d223d94cc787bbd3",
          "message": "Use IDGraphType for legacy queries",
          "timestamp": "2024-02-06T17:01:43+09:00",
          "tree_id": "443a9a9a1176659d366f0d228e4fd11922a4db79",
          "url": "https://github.com/greymistcube/libplanet/commit/40ab0cee84b3b942a8ca8b05d223d94cc787bbd3"
        },
        "date": 1707207688462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7649654.666666667,
            "unit": "ns",
            "range": "± 61887.409470502935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18997886.666666668,
            "unit": "ns",
            "range": "± 156392.86273666614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48693521.663157895,
            "unit": "ns",
            "range": "± 2871395.096496362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94767216.96428572,
            "unit": "ns",
            "range": "± 2672026.9502213523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206392449.5609756,
            "unit": "ns",
            "range": "± 10944091.084842952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39692.163043478264,
            "unit": "ns",
            "range": "± 8267.243746916316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273164.9574468085,
            "unit": "ns",
            "range": "± 39430.13750979294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245020.36559139786,
            "unit": "ns",
            "range": "± 26366.281813918642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259109.4693877551,
            "unit": "ns",
            "range": "± 40692.1014781787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4069616.26,
            "unit": "ns",
            "range": "± 162389.46958187924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3506671.777777778,
            "unit": "ns",
            "range": "± 64332.22293921339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19260.94382022472,
            "unit": "ns",
            "range": "± 7280.582026495907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88855.73195876289,
            "unit": "ns",
            "range": "± 23342.90958572658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79011.26,
            "unit": "ns",
            "range": "± 25803.409780989343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92048.25263157894,
            "unit": "ns",
            "range": "± 17570.183425197152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5245.364583333333,
            "unit": "ns",
            "range": "± 1780.5546393117409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15788.326086956522,
            "unit": "ns",
            "range": "± 3838.4720163069223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070199.5,
            "unit": "ns",
            "range": "± 84803.95244019288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2211530.1636363636,
            "unit": "ns",
            "range": "± 93333.13500986143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1828621.0721649486,
            "unit": "ns",
            "range": "± 179700.100014942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19067827.786516853,
            "unit": "ns",
            "range": "± 2118365.2935794806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3143365.489361702,
            "unit": "ns",
            "range": "± 193837.11453984835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3254424.0625,
            "unit": "ns",
            "range": "± 219074.64809361997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3799427.7702702703,
            "unit": "ns",
            "range": "± 189858.74738158015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4023995.7934782607,
            "unit": "ns",
            "range": "± 318756.7705094187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23729056.291666668,
            "unit": "ns",
            "range": "± 3388544.213186942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4989616.122861842,
            "unit": "ns",
            "range": "± 378555.9967649717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1451286.7186465992,
            "unit": "ns",
            "range": "± 78301.8790017022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 945497.4862985322,
            "unit": "ns",
            "range": "± 29209.70128451947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2284310.197832661,
            "unit": "ns",
            "range": "± 186455.16086438543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 683007.5632629395,
            "unit": "ns",
            "range": "± 19792.862050832937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 623704.8206630609,
            "unit": "ns",
            "range": "± 21786.070673359118"
          }
        ]
      }
    ]
  }
}