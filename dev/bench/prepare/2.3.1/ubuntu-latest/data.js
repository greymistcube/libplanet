window.BENCHMARK_DATA = {
  "lastUpdate": 1688020556730,
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
          "id": "0bd22b8deafcf87e5fad43b9a49cc9c73e5bf719",
          "message": "Prepare 2.3.1",
          "timestamp": "2023-06-29T15:22:24+09:00",
          "tree_id": "6f08e98fa366bfb1d100cf7f23172cbaf3198b47",
          "url": "https://github.com/greymistcube/libplanet/commit/0bd22b8deafcf87e5fad43b9a49cc9c73e5bf719"
        },
        "date": 1688020549284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448941.5714285714,
            "unit": "ns",
            "range": "± 75831.23377578096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3743399.5,
            "unit": "ns",
            "range": "± 61911.65222221593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4401845.119047619,
            "unit": "ns",
            "range": "± 151112.1389687711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4616452.806451613,
            "unit": "ns",
            "range": "± 124061.28303206158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6931097.384615385,
            "unit": "ns",
            "range": "± 188193.79633815284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7889439.785714285,
            "unit": "ns",
            "range": "± 64394.268701227855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21889983.266666666,
            "unit": "ns",
            "range": "± 393724.1447348759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54592837.85714286,
            "unit": "ns",
            "range": "± 869086.2813412235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108969420.73333333,
            "unit": "ns",
            "range": "± 1257916.288160275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216649180.33333334,
            "unit": "ns",
            "range": "± 2069976.0794700591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281199.5714285714,
            "unit": "ns",
            "range": "± 6902.190373908267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269859.8367346939,
            "unit": "ns",
            "range": "± 9157.30834804215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247157.18367346938,
            "unit": "ns",
            "range": "± 9724.44775568573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4417853.285714285,
            "unit": "ns",
            "range": "± 41276.95091681326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4091236.2666666666,
            "unit": "ns",
            "range": "± 50733.38365340725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20200.552083333332,
            "unit": "ns",
            "range": "± 2697.0701915803756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85775.94318181818,
            "unit": "ns",
            "range": "± 4503.2705391147365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73680.66666666667,
            "unit": "ns",
            "range": "± 2317.5835026308473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88497.32926829268,
            "unit": "ns",
            "range": "± 6326.884268308128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5701.2474226804125,
            "unit": "ns",
            "range": "± 826.1095446797576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19236.071428571428,
            "unit": "ns",
            "range": "± 1707.499294350128"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47254.33734939759,
            "unit": "ns",
            "range": "± 2449.790694280459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6043393.444754465,
            "unit": "ns",
            "range": "± 26953.311578154644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856939.9071614584,
            "unit": "ns",
            "range": "± 4900.412256219476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375975.04375,
            "unit": "ns",
            "range": "± 4491.756331033249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629771.826041667,
            "unit": "ns",
            "range": "± 3417.904591800547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822028.8139272836,
            "unit": "ns",
            "range": "± 619.1792993995099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755118.9080729167,
            "unit": "ns",
            "range": "± 761.002618105304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470594.84,
            "unit": "ns",
            "range": "± 108473.72559248406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678974.269230769,
            "unit": "ns",
            "range": "± 71444.7381427395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289063.3670886075,
            "unit": "ns",
            "range": "± 118785.3956580756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5701402.876923077,
            "unit": "ns",
            "range": "± 265493.63276725373"
          }
        ]
      }
    ]
  }
}