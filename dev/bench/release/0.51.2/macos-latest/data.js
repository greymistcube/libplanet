window.BENCHMARK_DATA = {
  "lastUpdate": 1678867084171,
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
          "id": "d9ac9e43466be30ffab0ca9f7fa20412332985f0",
          "message": "Release 0.51.2",
          "timestamp": "2023-03-15T16:31:49+09:00",
          "tree_id": "c71203d3f8c74634e228142d5310896d1e4e9475",
          "url": "https://github.com/greymistcube/libplanet/commit/d9ac9e43466be30ffab0ca9f7fa20412332985f0"
        },
        "date": 1678867065001,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10054980.222222222,
            "unit": "ns",
            "range": "± 1792025.2547006335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21997490.59574468,
            "unit": "ns",
            "range": "± 1556404.1812535278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54928295.03636364,
            "unit": "ns",
            "range": "± 2319889.733456998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103774475.43137255,
            "unit": "ns",
            "range": "± 4193929.2224194547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 232907087.27659574,
            "unit": "ns",
            "range": "± 13707858.757984737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79259.43157894736,
            "unit": "ns",
            "range": "± 14190.975593329784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227406.0909090909,
            "unit": "ns",
            "range": "± 16858.350426275072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256414.90217391305,
            "unit": "ns",
            "range": "± 30484.060361297084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258742.7882352941,
            "unit": "ns",
            "range": "± 38651.31654170402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14942578.755319148,
            "unit": "ns",
            "range": "± 1116568.9142444092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11697729.054347826,
            "unit": "ns",
            "range": "± 1023937.8050440063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26910.579545454544,
            "unit": "ns",
            "range": "± 2424.197984316258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71872.31318681319,
            "unit": "ns",
            "range": "± 10044.557132997274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62477.48648648649,
            "unit": "ns",
            "range": "± 3124.2874354429905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134580.8829787234,
            "unit": "ns",
            "range": "± 19456.75166716612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10444.037634408602,
            "unit": "ns",
            "range": "± 1395.886686873256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31861.445054945056,
            "unit": "ns",
            "range": "± 5838.839523898253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671648.1404494382,
            "unit": "ns",
            "range": "± 183672.01488468805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3216805.2558139535,
            "unit": "ns",
            "range": "± 398150.78737557045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3001875.2528089886,
            "unit": "ns",
            "range": "± 610275.9738200095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8486280.077777777,
            "unit": "ns",
            "range": "± 2470352.024531745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3341530.4567901236,
            "unit": "ns",
            "range": "± 173340.11206195533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5220083.229885058,
            "unit": "ns",
            "range": "± 390556.14904460433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26756197.069892474,
            "unit": "ns",
            "range": "± 1934924.070433685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7083322.681318682,
            "unit": "ns",
            "range": "± 697614.0706122688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33130312.597826086,
            "unit": "ns",
            "range": "± 3006412.2886496866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8055371.6078125,
            "unit": "ns",
            "range": "± 474080.00387767423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2375330.5812739157,
            "unit": "ns",
            "range": "± 186126.11025177813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413734.1765625,
            "unit": "ns",
            "range": "± 28015.20142393993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3455784.6085379464,
            "unit": "ns",
            "range": "± 370169.97209139296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967222.8300083706,
            "unit": "ns",
            "range": "± 51622.12870023846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769681.2959408967,
            "unit": "ns",
            "range": "± 53564.81548222503"
          }
        ]
      }
    ]
  }
}