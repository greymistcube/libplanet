window.BENCHMARK_DATA = {
  "lastUpdate": 1687247759704,
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
        "date": 1687247751549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298498.7,
            "unit": "ns",
            "range": "± 97228.51223904046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3422809.464285714,
            "unit": "ns",
            "range": "± 95958.76082771843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286592.4,
            "unit": "ns",
            "range": "± 45777.43480580798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4212202.136363637,
            "unit": "ns",
            "range": "± 102115.62044182375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6841345.352941177,
            "unit": "ns",
            "range": "± 197474.9013943801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5923469.805729167,
            "unit": "ns",
            "range": "± 19226.330537039164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888238.6609375,
            "unit": "ns",
            "range": "± 10655.5558989395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358893.746484375,
            "unit": "ns",
            "range": "± 612.2592301961406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628201.515299479,
            "unit": "ns",
            "range": "± 1973.7319789636495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799222.4198567708,
            "unit": "ns",
            "range": "± 642.7724783441865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730556.185546875,
            "unit": "ns",
            "range": "± 584.0674559299024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279070.43902439025,
            "unit": "ns",
            "range": "± 8930.602703761882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266572.05263157893,
            "unit": "ns",
            "range": "± 11383.3461428481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240029.76470588235,
            "unit": "ns",
            "range": "± 4782.825688458286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4186629.8,
            "unit": "ns",
            "range": "± 23967.7343055796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3848049,
            "unit": "ns",
            "range": "± 30492.935649097482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16575.298969072166,
            "unit": "ns",
            "range": "± 1425.6249372712869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83496.53571428571,
            "unit": "ns",
            "range": "± 3409.785207654239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71158.41666666667,
            "unit": "ns",
            "range": "± 993.0051229688719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90119.65979381443,
            "unit": "ns",
            "range": "± 12819.739546469113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4494.897959183673,
            "unit": "ns",
            "range": "± 518.3980974294489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16371.578947368422,
            "unit": "ns",
            "range": "± 1471.7671501405791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434401.86,
            "unit": "ns",
            "range": "± 125824.22008918201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2580255.5384615385,
            "unit": "ns",
            "range": "± 69954.86049802731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2152166.404255319,
            "unit": "ns",
            "range": "± 133864.45433671735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5199337.19047619,
            "unit": "ns",
            "range": "± 120382.1522629576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46217.92537313433,
            "unit": "ns",
            "range": "± 1976.5851813658155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7762070,
            "unit": "ns",
            "range": "± 23149.877986054933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19632840.866666667,
            "unit": "ns",
            "range": "± 127289.29142921796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49943750.571428575,
            "unit": "ns",
            "range": "± 309129.25407585496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99485487.6,
            "unit": "ns",
            "range": "± 1228288.2272975207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204536573.2,
            "unit": "ns",
            "range": "± 1186350.1212596921"
          }
        ]
      }
    ]
  }
}