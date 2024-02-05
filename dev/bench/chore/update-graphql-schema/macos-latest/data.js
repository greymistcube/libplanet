window.BENCHMARK_DATA = {
  "lastUpdate": 1707152428868,
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
          "id": "9f60eeef9e4d848990aa140c25ac59840172a624",
          "message": "Updated graphql schema",
          "timestamp": "2024-02-06T01:36:10+09:00",
          "tree_id": "04e35806d84d3c33f6d6c16daeafa124a4123e97",
          "url": "https://github.com/greymistcube/libplanet/commit/9f60eeef9e4d848990aa140c25ac59840172a624"
        },
        "date": 1707152409410,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9610369.48275862,
            "unit": "ns",
            "range": "± 1098448.73629169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21518818.63157895,
            "unit": "ns",
            "range": "± 1792397.8372500213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60115278.265957445,
            "unit": "ns",
            "range": "± 7999197.576761457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114601725.98275863,
            "unit": "ns",
            "range": "± 9656062.190455029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256775938.989011,
            "unit": "ns",
            "range": "± 24480076.012854867"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56619.23863636364,
            "unit": "ns",
            "range": "± 9262.143403400572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379609.7731958763,
            "unit": "ns",
            "range": "± 107550.55828379672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304831.12941176473,
            "unit": "ns",
            "range": "± 37446.848360547185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295656.74358974356,
            "unit": "ns",
            "range": "± 23985.08259635933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6145495.857142857,
            "unit": "ns",
            "range": "± 1141524.7634326664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5432963.61,
            "unit": "ns",
            "range": "± 1074934.566923686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28305.98979591837,
            "unit": "ns",
            "range": "± 5982.507739699542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131843.02,
            "unit": "ns",
            "range": "± 29449.632591551523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120973.46808510639,
            "unit": "ns",
            "range": "± 27803.06611367802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87204.82608695653,
            "unit": "ns",
            "range": "± 14819.786704585928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5879.239130434783,
            "unit": "ns",
            "range": "± 1028.1583756819518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30075.51030927835,
            "unit": "ns",
            "range": "± 6711.983888437353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499117.2303370787,
            "unit": "ns",
            "range": "± 268014.48459571786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906197.855555556,
            "unit": "ns",
            "range": "± 305275.1497979649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2191049.445652174,
            "unit": "ns",
            "range": "± 240977.7756021991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28270958.92105263,
            "unit": "ns",
            "range": "± 7148307.918568059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2916087.682352941,
            "unit": "ns",
            "range": "± 156234.46880838549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3331173.112359551,
            "unit": "ns",
            "range": "± 317271.92682580656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5460108.5154639175,
            "unit": "ns",
            "range": "± 1045244.4963715835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6007080.510204081,
            "unit": "ns",
            "range": "± 1207329.097122736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33485280.86842105,
            "unit": "ns",
            "range": "± 5243040.856516068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5804819.912109375,
            "unit": "ns",
            "range": "± 848635.2678838306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1448605.789341518,
            "unit": "ns",
            "range": "± 75230.85839740733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 898169.0486653646,
            "unit": "ns",
            "range": "± 5493.45809354185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1993379.425998264,
            "unit": "ns",
            "range": "± 39630.26319716347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 750103.4264119467,
            "unit": "ns",
            "range": "± 29070.198953515126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 624783.4531954735,
            "unit": "ns",
            "range": "± 49109.36704526539"
          }
        ]
      }
    ]
  }
}