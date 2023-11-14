window.BENCHMARK_DATA = {
  "lastUpdate": 1699946218964,
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
          "id": "0f9075efda158932155ab958a4efe01d5336e91b",
          "message": "Added logging",
          "timestamp": "2023-11-14T15:40:51+09:00",
          "tree_id": "6c7453fc44533f705b7c7c8d0ddfdef09a0f7838",
          "url": "https://github.com/greymistcube/libplanet/commit/0f9075efda158932155ab958a4efe01d5336e91b"
        },
        "date": 1699946201357,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928345.918367347,
            "unit": "ns",
            "range": "± 103457.01126093298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1639159.1836734693,
            "unit": "ns",
            "range": "± 64812.836043382595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1348637.3737373736,
            "unit": "ns",
            "range": "± 122513.43248791595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6009655,
            "unit": "ns",
            "range": "± 364112.3032371838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33783.87096774193,
            "unit": "ns",
            "range": "± 1527.6890882279847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4965240,
            "unit": "ns",
            "range": "± 25806.77651869203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12891350,
            "unit": "ns",
            "range": "± 98136.51402314729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31737828.57142857,
            "unit": "ns",
            "range": "± 151528.547341221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62842440,
            "unit": "ns",
            "range": "± 446050.7815420636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 124248515.38461539,
            "unit": "ns",
            "range": "± 475025.8235895425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3137993.5697115385,
            "unit": "ns",
            "range": "± 9468.30207813109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1030339.375,
            "unit": "ns",
            "range": "± 2296.0076931187973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 696343.6588541666,
            "unit": "ns",
            "range": "± 815.4326050413838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916537.5901442308,
            "unit": "ns",
            "range": "± 2092.0531980088135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628105.09765625,
            "unit": "ns",
            "range": "± 1610.7471905797977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550115.6040736607,
            "unit": "ns",
            "range": "± 716.1049360052428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2154507.5757575757,
            "unit": "ns",
            "range": "± 61256.8671165886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2296423.3333333335,
            "unit": "ns",
            "range": "± 67573.3710219075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741418.5185185187,
            "unit": "ns",
            "range": "± 73303.08544790142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2690295.238095238,
            "unit": "ns",
            "range": "± 97992.11255561674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7176763.265306123,
            "unit": "ns",
            "range": "± 499501.4721685074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166046.9696969697,
            "unit": "ns",
            "range": "± 7490.264855068049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155986.98630136985,
            "unit": "ns",
            "range": "± 5298.702850942626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140113.63636363635,
            "unit": "ns",
            "range": "± 2196.2187102783328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720370,
            "unit": "ns",
            "range": "± 40953.16488729185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2462478.5714285714,
            "unit": "ns",
            "range": "± 30082.45536652753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9230.337078651686,
            "unit": "ns",
            "range": "± 748.696517953646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49770.833333333336,
            "unit": "ns",
            "range": "± 2427.7989510004477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43851.851851851854,
            "unit": "ns",
            "range": "± 1195.9451911709418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 42149.4623655914,
            "unit": "ns",
            "range": "± 5539.534269701623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2394.949494949495,
            "unit": "ns",
            "range": "± 442.2515992227143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9389.772727272728,
            "unit": "ns",
            "range": "± 856.8909012931069"
          }
        ]
      }
    ]
  }
}