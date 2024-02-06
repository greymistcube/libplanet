window.BENCHMARK_DATA = {
  "lastUpdate": 1707187214856,
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
          "id": "581b937b0b76ce7f38ce36160ca0ee9690ba8619",
          "message": "Release 4.0.2",
          "timestamp": "2024-02-06T11:28:37+09:00",
          "tree_id": "ef42b44dbe32becfe4bec6a583d944ef92df7e9c",
          "url": "https://github.com/greymistcube/libplanet/commit/581b937b0b76ce7f38ce36160ca0ee9690ba8619"
        },
        "date": 1707187208543,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209139.14285714287,
            "unit": "ns",
            "range": "± 13161.43554950635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195052.5652173913,
            "unit": "ns",
            "range": "± 9332.150741133739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167732.7027027027,
            "unit": "ns",
            "range": "± 4896.791125403025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3237763.8846153845,
            "unit": "ns",
            "range": "± 41729.77276385623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2865308.2,
            "unit": "ns",
            "range": "± 42248.25180018019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16118.69387755102,
            "unit": "ns",
            "range": "± 3355.892120724609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73584.63917525773,
            "unit": "ns",
            "range": "± 15361.106792118395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57136.87640449438,
            "unit": "ns",
            "range": "± 5648.77700323511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74154.71428571429,
            "unit": "ns",
            "range": "± 17954.920713120206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3735.232558139535,
            "unit": "ns",
            "range": "± 526.7826357051243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15944.18085106383,
            "unit": "ns",
            "range": "± 2706.9389298923993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42485.45360824742,
            "unit": "ns",
            "range": "± 5704.590078065461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2409326.329787234,
            "unit": "ns",
            "range": "± 93125.11220099902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2644817.2083333335,
            "unit": "ns",
            "range": "± 68672.92048796246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3179766.730769231,
            "unit": "ns",
            "range": "± 41568.80768507769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3233631.6,
            "unit": "ns",
            "range": "± 179301.36683085054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13983215.456521738,
            "unit": "ns",
            "range": "± 1076745.992311638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023124.4842105263,
            "unit": "ns",
            "range": "± 100691.01411236166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1986078.5212765958,
            "unit": "ns",
            "range": "± 114340.2467660023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694889.87,
            "unit": "ns",
            "range": "± 205133.72276869186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12718892.615384616,
            "unit": "ns",
            "range": "± 933977.5205337029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5606603.6,
            "unit": "ns",
            "range": "± 101288.57341900488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14539998.666666666,
            "unit": "ns",
            "range": "± 111016.0853864151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37004593.384615384,
            "unit": "ns",
            "range": "± 324657.19105402514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75347236.86666666,
            "unit": "ns",
            "range": "± 727060.6299639338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152584579.53333333,
            "unit": "ns",
            "range": "± 1189901.038300837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759355.9713541665,
            "unit": "ns",
            "range": "± 45571.936483433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207119.759486607,
            "unit": "ns",
            "range": "± 6471.018268982359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765327.0187825521,
            "unit": "ns",
            "range": "± 11039.546714487973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938825.4379507212,
            "unit": "ns",
            "range": "± 7930.25359908226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613107.2182942708,
            "unit": "ns",
            "range": "± 957.5936089873031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565178.7947916667,
            "unit": "ns",
            "range": "± 1980.6569681540038"
          }
        ]
      }
    ]
  }
}