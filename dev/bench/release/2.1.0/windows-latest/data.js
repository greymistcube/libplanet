window.BENCHMARK_DATA = {
  "lastUpdate": 1687247763382,
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
          "id": "6410b97d4821e1fe654a43a26373a02c076057c2",
          "message": "Release 2.1.0",
          "timestamp": "2023-06-20T16:41:20+09:00",
          "tree_id": "3c8b47900f776e7c6b705a66d3eb009253049fe9",
          "url": "https://github.com/greymistcube/libplanet/commit/6410b97d4821e1fe654a43a26373a02c076057c2"
        },
        "date": 1687247739257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333989.7727272727,
            "unit": "ns",
            "range": "± 72665.12711609557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2465385.4166666665,
            "unit": "ns",
            "range": "± 90065.51041203363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2338810,
            "unit": "ns",
            "range": "± 53178.051467637815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5067523.529411765,
            "unit": "ns",
            "range": "± 158967.94809174302"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43751.94805194805,
            "unit": "ns",
            "range": "± 2244.444040268652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6684878.571428572,
            "unit": "ns",
            "range": "± 13273.581545045296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17332980,
            "unit": "ns",
            "range": "± 81798.74431449772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44853120,
            "unit": "ns",
            "range": "± 390915.5721782244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88546800,
            "unit": "ns",
            "range": "± 787376.3331469902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175765071.42857143,
            "unit": "ns",
            "range": "± 691919.4822304904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4799818.930288462,
            "unit": "ns",
            "range": "± 8171.668501126939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510666.30859375,
            "unit": "ns",
            "range": "± 2355.441625421292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141514.5182291667,
            "unit": "ns",
            "range": "± 2037.2996662780051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567625.78125,
            "unit": "ns",
            "range": "± 10677.207183947885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815075.5859375,
            "unit": "ns",
            "range": "± 1789.439273789781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735098.8802083334,
            "unit": "ns",
            "range": "± 765.7998572030813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2959420,
            "unit": "ns",
            "range": "± 67390.51627796396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3200620,
            "unit": "ns",
            "range": "± 56593.80581956701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3978053.3333333335,
            "unit": "ns",
            "range": "± 73413.72844236644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3933500,
            "unit": "ns",
            "range": "± 149837.09376074627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6355635.416666667,
            "unit": "ns",
            "range": "± 247117.98499139168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252111.90476190476,
            "unit": "ns",
            "range": "± 9028.679302197415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241972.72727272726,
            "unit": "ns",
            "range": "± 9064.25034128424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214169.69696969696,
            "unit": "ns",
            "range": "± 6791.285079445792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3773621.4285714286,
            "unit": "ns",
            "range": "± 48727.83801690977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3530046.6666666665,
            "unit": "ns",
            "range": "± 56612.85652402221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16567.708333333332,
            "unit": "ns",
            "range": "± 1483.9488423347573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82271.9512195122,
            "unit": "ns",
            "range": "± 4345.318877336765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66097.95918367348,
            "unit": "ns",
            "range": "± 2616.732201614446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89458.58585858585,
            "unit": "ns",
            "range": "± 11906.660887503347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4891.836734693878,
            "unit": "ns",
            "range": "± 709.6788106649045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15706.593406593407,
            "unit": "ns",
            "range": "± 1739.0164651831983"
          }
        ]
      }
    ]
  }
}