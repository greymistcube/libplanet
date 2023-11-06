window.BENCHMARK_DATA = {
  "lastUpdate": 1699254956375,
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
          "id": "142e48097ebf05b86f61f397382388d721ecbd11",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T15:19:37+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/greymistcube/libplanet/commit/142e48097ebf05b86f61f397382388d721ecbd11"
        },
        "date": 1699254950257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5769576.466666667,
            "unit": "ns",
            "range": "± 59388.605798547236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14165417.42857143,
            "unit": "ns",
            "range": "± 107279.38820558092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36213418.75,
            "unit": "ns",
            "range": "± 334089.9674766786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76153801.53846154,
            "unit": "ns",
            "range": "± 268711.4230038783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151170336.57142857,
            "unit": "ns",
            "range": "± 2626884.648783589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043719.9591836735,
            "unit": "ns",
            "range": "± 110879.81405180685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1932010.0666666667,
            "unit": "ns",
            "range": "± 72190.22291185723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495728.0919540229,
            "unit": "ns",
            "range": "± 102171.03839260912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6372236.684210527,
            "unit": "ns",
            "range": "± 274604.68958038813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411144.0396825396,
            "unit": "ns",
            "range": "± 97803.02022858536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2568473.4,
            "unit": "ns",
            "range": "± 61841.80212647429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3168724.1944444445,
            "unit": "ns",
            "range": "± 98839.11436465666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3057938.1228070175,
            "unit": "ns",
            "range": "± 131196.5550278706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7685912.816326531,
            "unit": "ns",
            "range": "± 261539.89804582344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41813.92857142857,
            "unit": "ns",
            "range": "± 5676.067371805796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717842.86484375,
            "unit": "ns",
            "range": "± 58891.666733646474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196390.4151141827,
            "unit": "ns",
            "range": "± 6341.264187067526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781800.5374098558,
            "unit": "ns",
            "range": "± 4269.076366974023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960636.39453125,
            "unit": "ns",
            "range": "± 4486.784774542251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618404.984514509,
            "unit": "ns",
            "range": "± 657.9119478026926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586015.8731282552,
            "unit": "ns",
            "range": "± 1085.8283763917325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208099.22222222222,
            "unit": "ns",
            "range": "± 4423.97875959633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192827.38028169013,
            "unit": "ns",
            "range": "± 8710.203700039228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176068.1875,
            "unit": "ns",
            "range": "± 5382.326852840363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119335.285714286,
            "unit": "ns",
            "range": "± 40487.77964622559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2907842.6666666665,
            "unit": "ns",
            "range": "± 36750.40343931453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18218.217391304348,
            "unit": "ns",
            "range": "± 1126.7075229763852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69700.83838383839,
            "unit": "ns",
            "range": "± 8454.713537076335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89839.78571428571,
            "unit": "ns",
            "range": "± 1496.6275513542198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88232.51020408163,
            "unit": "ns",
            "range": "± 13785.651373012639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5053.979797979798,
            "unit": "ns",
            "range": "± 1171.2305492889582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14129.333333333334,
            "unit": "ns",
            "range": "± 1880.768071919256"
          }
        ]
      }
    ]
  }
}