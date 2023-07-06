window.BENCHMARK_DATA = {
  "lastUpdate": 1688654224394,
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
          "id": "60eacade4de9605e11fb451c3e6d13a34edbd2bf",
          "message": "Rename for consistency",
          "timestamp": "2023-07-06T23:19:19+09:00",
          "tree_id": "e811de14bbc4e38e3ab42577020221039d670e6e",
          "url": "https://github.com/greymistcube/libplanet/commit/60eacade4de9605e11fb451c3e6d13a34edbd2bf"
        },
        "date": 1688654204159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1361995.3608247424,
            "unit": "ns",
            "range": "± 136381.94606555835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2525926.6666666665,
            "unit": "ns",
            "range": "± 127674.7920402556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1783761.224489796,
            "unit": "ns",
            "range": "± 166717.29938416436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4569586.538461538,
            "unit": "ns",
            "range": "± 187452.88247601612"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43798.88888888889,
            "unit": "ns",
            "range": "± 3399.256179193511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6722907.407407408,
            "unit": "ns",
            "range": "± 186929.42503260408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18594676.923076924,
            "unit": "ns",
            "range": "± 260665.6995522751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48192223.07692308,
            "unit": "ns",
            "range": "± 356453.20673230535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96199108.33333333,
            "unit": "ns",
            "range": "± 652772.6270697287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188831463.63636363,
            "unit": "ns",
            "range": "± 4614983.368132384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4595606.09375,
            "unit": "ns",
            "range": "± 64546.473292870876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1419255.4427083333,
            "unit": "ns",
            "range": "± 14161.452650374331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1098108.5658482143,
            "unit": "ns",
            "range": "± 10691.672477602855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2440288.7555803573,
            "unit": "ns",
            "range": "± 24304.431347814905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 769340.3217516447,
            "unit": "ns",
            "range": "± 16384.043466652318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691045.1322115385,
            "unit": "ns",
            "range": "± 4264.411891052196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3021009.090909091,
            "unit": "ns",
            "range": "± 72426.54675824793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3151797.8723404254,
            "unit": "ns",
            "range": "± 180439.743600719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3750636.111111111,
            "unit": "ns",
            "range": "± 123666.5681876132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3632430.64516129,
            "unit": "ns",
            "range": "± 103134.23427538449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5830255.128205128,
            "unit": "ns",
            "range": "± 300709.9308400497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244112.85714285713,
            "unit": "ns",
            "range": "± 11833.064966484177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240386.41975308643,
            "unit": "ns",
            "range": "± 12651.489567304117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221316.49484536084,
            "unit": "ns",
            "range": "± 15076.317524047796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3769421.052631579,
            "unit": "ns",
            "range": "± 79949.98143942088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3477842.8571428573,
            "unit": "ns",
            "range": "± 99380.98569374483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20995.833333333332,
            "unit": "ns",
            "range": "± 2317.43581829785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85560.22727272728,
            "unit": "ns",
            "range": "± 4718.770046564157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71204.49438202247,
            "unit": "ns",
            "range": "± 5453.270705656618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95693.40659340659,
            "unit": "ns",
            "range": "± 11097.395111744838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5681.632653061224,
            "unit": "ns",
            "range": "± 1077.1618816757104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20582.105263157893,
            "unit": "ns",
            "range": "± 2604.455223281519"
          }
        ]
      }
    ]
  }
}