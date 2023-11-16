window.BENCHMARK_DATA = {
  "lastUpdate": 1700108176095,
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
          "id": "e0a3acc770b366a4aac36b44f933beca69ce8ce8",
          "message": "Tune ContextTimeoutOption",
          "timestamp": "2023-11-16T13:03:22+09:00",
          "tree_id": "dcf69d0992d138a93059d895526a95cd3535e952",
          "url": "https://github.com/greymistcube/libplanet/commit/e0a3acc770b366a4aac36b44f933beca69ce8ce8"
        },
        "date": 1700108150356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967282.9787234042,
            "unit": "ns",
            "range": "± 90819.30972534855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1739681.3333333333,
            "unit": "ns",
            "range": "± 79602.60876706569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1459548.9795918367,
            "unit": "ns",
            "range": "± 86263.26313071136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5734978.571428572,
            "unit": "ns",
            "range": "± 207471.29397171948"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34501.25,
            "unit": "ns",
            "range": "± 1743.7406140575852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5021920,
            "unit": "ns",
            "range": "± 78967.85241024168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13222042.857142856,
            "unit": "ns",
            "range": "± 161454.08356217286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33407966.666666668,
            "unit": "ns",
            "range": "± 576842.8860947279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66977313.333333336,
            "unit": "ns",
            "range": "± 797864.0708314979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131109064.28571428,
            "unit": "ns",
            "range": "± 1030759.7799734859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3132022.1354166665,
            "unit": "ns",
            "range": "± 10418.900196626168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1013241.1411830357,
            "unit": "ns",
            "range": "± 2575.2087345172595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 692975.4427083334,
            "unit": "ns",
            "range": "± 2879.858408237072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893870.2845982143,
            "unit": "ns",
            "range": "± 5385.715452195144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626069.6744791666,
            "unit": "ns",
            "range": "± 2507.816546697313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565935.1712740385,
            "unit": "ns",
            "range": "± 1879.8818346039436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2172809.7560975607,
            "unit": "ns",
            "range": "± 76054.54886092628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2394830.769230769,
            "unit": "ns",
            "range": "± 98654.96725508838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2807162.0689655175,
            "unit": "ns",
            "range": "± 79333.23215486642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2739550,
            "unit": "ns",
            "range": "± 103467.6226467498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6808308.196721312,
            "unit": "ns",
            "range": "± 301331.6170462269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172877.52808988764,
            "unit": "ns",
            "range": "± 10948.150038923022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168463.85542168675,
            "unit": "ns",
            "range": "± 8962.286542864113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142922.72727272726,
            "unit": "ns",
            "range": "± 3351.3226696878405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2797628.5714285714,
            "unit": "ns",
            "range": "± 41879.76248135256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2514233.3333333335,
            "unit": "ns",
            "range": "± 44049.933787313086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11393.617021276596,
            "unit": "ns",
            "range": "± 2297.430004579839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56808.333333333336,
            "unit": "ns",
            "range": "± 7473.1190792017915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45042.307692307695,
            "unit": "ns",
            "range": "± 2335.914917435672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52803.260869565216,
            "unit": "ns",
            "range": "± 7100.417122663613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2735.5670103092784,
            "unit": "ns",
            "range": "± 579.8688232985777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10282.022471910112,
            "unit": "ns",
            "range": "± 1137.3375805874648"
          }
        ]
      }
    ]
  }
}