window.BENCHMARK_DATA = {
  "lastUpdate": 1678873079300,
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
          "id": "23388947245416bf15682b5711eb1f909b907d5a",
          "message": "Prepare 0.51.3",
          "timestamp": "2023-03-15T18:21:01+09:00",
          "tree_id": "47dbbdaffe5d3c55e1f6518e77cde938901434ba",
          "url": "https://github.com/greymistcube/libplanet/commit/23388947245416bf15682b5711eb1f909b907d5a"
        },
        "date": 1678873057639,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1585377.4193548388,
            "unit": "ns",
            "range": "± 48244.1133519757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2567337.037037037,
            "unit": "ns",
            "range": "± 71606.37137610327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2453184.782608696,
            "unit": "ns",
            "range": "± 60891.99535911292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5128672,
            "unit": "ns",
            "range": "± 134872.3301249494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47363.541666666664,
            "unit": "ns",
            "range": "± 2901.1474968097727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6912742.857142857,
            "unit": "ns",
            "range": "± 45639.064142729476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20107930.769230768,
            "unit": "ns",
            "range": "± 174836.33005669134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49316900,
            "unit": "ns",
            "range": "± 1337641.484404547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97870100,
            "unit": "ns",
            "range": "± 2022430.5232013462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191078993.33333334,
            "unit": "ns",
            "range": "± 3271741.3258880675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4762537.332589285,
            "unit": "ns",
            "range": "± 28675.00556226423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566128.4244791667,
            "unit": "ns",
            "range": "± 10852.501482740894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154882.890625,
            "unit": "ns",
            "range": "± 6165.69175109018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618493.359375,
            "unit": "ns",
            "range": "± 13940.193554691064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836010.3190104166,
            "unit": "ns",
            "range": "± 2196.262897958424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755273.3537946428,
            "unit": "ns",
            "range": "± 1311.3201015577483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3070532,
            "unit": "ns",
            "range": "± 64679.122855318106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4954758.620689655,
            "unit": "ns",
            "range": "± 144000.43034965798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22923440.740740743,
            "unit": "ns",
            "range": "± 619575.0691831269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6094797.222222222,
            "unit": "ns",
            "range": "± 165733.6580801707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26788133.333333332,
            "unit": "ns",
            "range": "± 400470.6707054064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185669.5652173913,
            "unit": "ns",
            "range": "± 7063.957643172916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185482.27848101265,
            "unit": "ns",
            "range": "± 9595.882657303395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166475.51020408163,
            "unit": "ns",
            "range": "± 11404.946125640436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11073264.285714285,
            "unit": "ns",
            "range": "± 137878.7572590379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8882606.25,
            "unit": "ns",
            "range": "± 173826.7661351381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21659.79381443299,
            "unit": "ns",
            "range": "± 2522.881115651576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57076.28865979381,
            "unit": "ns",
            "range": "± 6249.346185733424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41637.36263736264,
            "unit": "ns",
            "range": "± 2308.8548557262634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106283.69565217392,
            "unit": "ns",
            "range": "± 13337.481492609284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6297.872340425532,
            "unit": "ns",
            "range": "± 957.8177171188272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19729.166666666668,
            "unit": "ns",
            "range": "± 2316.2999836021004"
          }
        ]
      }
    ]
  }
}