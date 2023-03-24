window.BENCHMARK_DATA = {
  "lastUpdate": 1679618137495,
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
      },
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
          "id": "b1116e9d097b3b696572b0eaa77a2eec90c1143e",
          "message": "Added caching to AccountStateDeltaImpl",
          "timestamp": "2023-03-24T09:21:59+09:00",
          "tree_id": "ecfd3ce8bde11199f643174bd303a620d5911aaf",
          "url": "https://github.com/greymistcube/libplanet/commit/b1116e9d097b3b696572b0eaa77a2eec90c1143e"
        },
        "date": 1679618128899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125199.19512195123,
            "unit": "ns",
            "range": "± 4455.928249082968"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5529863.899334016,
            "unit": "ns",
            "range": "± 245301.09789459052"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6918776.181818182,
            "unit": "ns",
            "range": "± 294828.6388331798"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31323996,
            "unit": "ns",
            "range": "± 638679.613789906"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7641462.9772727275,
            "unit": "ns",
            "range": "± 414103.32904331747"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38906392.86,
            "unit": "ns",
            "range": "± 3293503.4041674016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6911406.479910715,
            "unit": "ns",
            "range": "± 39116.099853562184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2146575.8758370536,
            "unit": "ns",
            "range": "± 26018.25222215664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1589821.1416015625,
            "unit": "ns",
            "range": "± 35240.68964589288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3054569.58515625,
            "unit": "ns",
            "range": "± 27455.571453237997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965387.6012369791,
            "unit": "ns",
            "range": "± 11371.607526611046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893042.9979166667,
            "unit": "ns",
            "range": "± 5533.372708568187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106519.76530612246,
            "unit": "ns",
            "range": "± 10659.863106992269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224539.6,
            "unit": "ns",
            "range": "± 10443.350717681564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199648.6923076923,
            "unit": "ns",
            "range": "± 5210.954697705447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4415513.1,
            "unit": "ns",
            "range": "± 95619.69712900218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11199641.888888888,
            "unit": "ns",
            "range": "± 229420.2040579402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21056.559139784946,
            "unit": "ns",
            "range": "± 1736.9143020483543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63248.83544303798,
            "unit": "ns",
            "range": "± 3103.8712694293918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48460.470588235294,
            "unit": "ns",
            "range": "± 1000.1526831968619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110544.80412371134,
            "unit": "ns",
            "range": "± 20197.104155896937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5877.270833333333,
            "unit": "ns",
            "range": "± 446.57554271464215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20576.159574468085,
            "unit": "ns",
            "range": "± 1787.4275159568897"
          }
        ]
      }
    ]
  }
}