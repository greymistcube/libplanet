window.BENCHMARK_DATA = {
  "lastUpdate": 1681461409712,
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
          "id": "91bdd549a29b070504f0670e33108f82ad57b082",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:22:38+09:00",
          "tree_id": "772c48669284e9f79b6634c1db15ff7daed361b0",
          "url": "https://github.com/greymistcube/libplanet/commit/91bdd549a29b070504f0670e33108f82ad57b082"
        },
        "date": 1681461402412,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7528900,
            "unit": "ns",
            "range": "± 73498.21770142262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21251724.533333335,
            "unit": "ns",
            "range": "± 339445.1630383379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53501811.526315786,
            "unit": "ns",
            "range": "± 1133152.9460495205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105284075.93333334,
            "unit": "ns",
            "range": "± 1880453.5015519324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214096237.66666666,
            "unit": "ns",
            "range": "± 3368706.356681293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50922.032258064515,
            "unit": "ns",
            "range": "± 2910.5596931190016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1519318.293478261,
            "unit": "ns",
            "range": "± 87399.14742002971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2783745.1944444445,
            "unit": "ns",
            "range": "± 91958.19900766075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2432991.411764706,
            "unit": "ns",
            "range": "± 119863.58003841723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6165444.19047619,
            "unit": "ns",
            "range": "± 280726.4561590883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5932432.031770834,
            "unit": "ns",
            "range": "± 61518.75677450611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880496.14375,
            "unit": "ns",
            "range": "± 4804.956665511314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335182.4770833333,
            "unit": "ns",
            "range": "± 7664.987924187222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631232.8744791667,
            "unit": "ns",
            "range": "± 3653.9444540399354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822289.98828125,
            "unit": "ns",
            "range": "± 771.1139110520252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750989.1715959822,
            "unit": "ns",
            "range": "± 851.3862561468045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342867.42424242425,
            "unit": "ns",
            "range": "± 10868.762090362176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289248.0243902439,
            "unit": "ns",
            "range": "± 10168.898405156295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235122.4,
            "unit": "ns",
            "range": "± 3872.6288929946722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5765967.307692308,
            "unit": "ns",
            "range": "± 37671.898911046446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4014848.785714286,
            "unit": "ns",
            "range": "± 55483.88058662218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19136.268041237112,
            "unit": "ns",
            "range": "± 1887.051897777456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94684.22105263158,
            "unit": "ns",
            "range": "± 6729.52960826299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79612.46315789473,
            "unit": "ns",
            "range": "± 5015.806003855119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 202485.55670103093,
            "unit": "ns",
            "range": "± 19535.08419270371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6161.336734693878,
            "unit": "ns",
            "range": "± 866.2843744403663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20309.462365591397,
            "unit": "ns",
            "range": "± 2071.4818344402843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419390.090909091,
            "unit": "ns",
            "range": "± 80673.30312935541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3514585.7321428573,
            "unit": "ns",
            "range": "± 150806.61389167386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4224358.133333334,
            "unit": "ns",
            "range": "± 42121.74484899468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4622359.685714286,
            "unit": "ns",
            "range": "± 151228.82205681707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7414543.34375,
            "unit": "ns",
            "range": "± 225082.1131893453"
          }
        ]
      }
    ]
  }
}