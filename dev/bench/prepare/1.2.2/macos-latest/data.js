window.BENCHMARK_DATA = {
  "lastUpdate": 1684377483274,
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
          "id": "ccebb8e5ccd3d96fd056ed0f4e64cc5bbe8ef699",
          "message": "Prepare 1.2.2",
          "timestamp": "2023-05-18T11:18:14+09:00",
          "tree_id": "02032a856fc0fc2cfdbf33544da2b4656195e77b",
          "url": "https://github.com/greymistcube/libplanet/commit/ccebb8e5ccd3d96fd056ed0f4e64cc5bbe8ef699"
        },
        "date": 1684377464108,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7816467.9375,
            "unit": "ns",
            "range": "± 152999.80222970605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19111617.966101695,
            "unit": "ns",
            "range": "± 843867.9688681891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47646709.21212121,
            "unit": "ns",
            "range": "± 1493989.5104346818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93162099.21428572,
            "unit": "ns",
            "range": "± 1057924.7702771816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235064520.82258064,
            "unit": "ns",
            "range": "± 6947282.520794834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62921.29120879121,
            "unit": "ns",
            "range": "± 9568.503172755547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312580.3855421687,
            "unit": "ns",
            "range": "± 16504.021347975242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303863.0273972603,
            "unit": "ns",
            "range": "± 14628.065998632565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301624.06666666665,
            "unit": "ns",
            "range": "± 21077.794188820895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4484091.587912088,
            "unit": "ns",
            "range": "± 630125.3099354065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3767399.9383561644,
            "unit": "ns",
            "range": "± 164389.05958299947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18029.844086021505,
            "unit": "ns",
            "range": "± 2039.301891924014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96004.11956521739,
            "unit": "ns",
            "range": "± 12370.271397915027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100029,
            "unit": "ns",
            "range": "± 15255.264398260186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112516.63541666667,
            "unit": "ns",
            "range": "± 14873.864578776602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6925.938775510204,
            "unit": "ns",
            "range": "± 1670.0501879385356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20374.81052631579,
            "unit": "ns",
            "range": "± 3364.497421590336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625826.4725274725,
            "unit": "ns",
            "range": "± 228973.98261691656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2988959.7268041237,
            "unit": "ns",
            "range": "± 294279.3604634926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2482882.4569892474,
            "unit": "ns",
            "range": "± 233682.3811202753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6798893.764044944,
            "unit": "ns",
            "range": "± 578145.5556444719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3128905.9285714286,
            "unit": "ns",
            "range": "± 102489.28298874092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3436395.43877551,
            "unit": "ns",
            "range": "± 136376.6135554419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4365342.692982456,
            "unit": "ns",
            "range": "± 176746.2963836501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4331338.045454546,
            "unit": "ns",
            "range": "± 461401.24829415034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7976939.038461538,
            "unit": "ns",
            "range": "± 501415.9622693475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7259849.037089647,
            "unit": "ns",
            "range": "± 557544.6018102114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2118674.971598307,
            "unit": "ns",
            "range": "± 117429.27987294756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308953.339011102,
            "unit": "ns",
            "range": "± 73214.1583375879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2780544.9200049867,
            "unit": "ns",
            "range": "± 197794.20146467997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885994.9786987305,
            "unit": "ns",
            "range": "± 26738.55133502103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812069.8934570312,
            "unit": "ns",
            "range": "± 22772.018637812344"
          }
        ]
      }
    ]
  }
}