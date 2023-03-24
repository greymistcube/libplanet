window.BENCHMARK_DATA = {
  "lastUpdate": 1679617731642,
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
          "id": "f538f484557cd8661e871aa47925b2262bb986c6",
          "message": "Added caching to AccountStateDeltaImpl",
          "timestamp": "2023-03-24T09:17:52+09:00",
          "tree_id": "c3296d57c93f2484d8a6daaf2ff57cefa8e546e2",
          "url": "https://github.com/greymistcube/libplanet/commit/f538f484557cd8661e871aa47925b2262bb986c6"
        },
        "date": 1679617724589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115316.28571428571,
            "unit": "ns",
            "range": "± 1922.2811540367436"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5233934.430288462,
            "unit": "ns",
            "range": "± 85926.58356672959"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6172710.2,
            "unit": "ns",
            "range": "± 72212.9274845281"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29258366.55,
            "unit": "ns",
            "range": "± 1294025.7519809434"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7062539.944444444,
            "unit": "ns",
            "range": "± 149589.7000824637"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30840663,
            "unit": "ns",
            "range": "± 618675.0724258453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5950909.7171875,
            "unit": "ns",
            "range": "± 25844.855111036475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860116.0668247768,
            "unit": "ns",
            "range": "± 6210.160552151163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351902.4251302083,
            "unit": "ns",
            "range": "± 5256.739506087072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646744.1389508927,
            "unit": "ns",
            "range": "± 2740.3447642353635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825289.7784705529,
            "unit": "ns",
            "range": "± 1174.303222009488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750684.1048828125,
            "unit": "ns",
            "range": "± 749.354835490918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100921.31958762887,
            "unit": "ns",
            "range": "± 9906.612807810909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214107.16129032258,
            "unit": "ns",
            "range": "± 9037.12705362689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181029.22471910113,
            "unit": "ns",
            "range": "± 10026.028073280075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3907935.533333333,
            "unit": "ns",
            "range": "± 66114.55783375082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9334956.066666666,
            "unit": "ns",
            "range": "± 154257.52136442243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18135.23595505618,
            "unit": "ns",
            "range": "± 1516.0075259353246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52739.31914893617,
            "unit": "ns",
            "range": "± 4827.745058374731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41647.46666666667,
            "unit": "ns",
            "range": "± 1587.2692903222187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108748.08421052631,
            "unit": "ns",
            "range": "± 16839.141735762198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6029.893617021276,
            "unit": "ns",
            "range": "± 725.9610533124772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20771.125,
            "unit": "ns",
            "range": "± 3051.453469897152"
          }
        ]
      }
    ]
  }
}