window.BENCHMARK_DATA = {
  "lastUpdate": 1678871703646,
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
      },
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
          "id": "15b601af28513044eddc4ba6bece5e7ed539f952",
          "message": "Release 0.51.2",
          "timestamp": "2023-03-15T17:57:48+09:00",
          "tree_id": "8ea7ba6864a0af3ce8fc71e60b7c98bcdac8f132",
          "url": "https://github.com/greymistcube/libplanet/commit/15b601af28513044eddc4ba6bece5e7ed539f952"
        },
        "date": 1678871684563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8398707.214285715,
            "unit": "ns",
            "range": "± 50028.37666023395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20647845.566666666,
            "unit": "ns",
            "range": "± 383441.70732449513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51770576.5,
            "unit": "ns",
            "range": "± 1300507.059631012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101899366.43333334,
            "unit": "ns",
            "range": "± 774909.015982749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 211258453.16666666,
            "unit": "ns",
            "range": "± 3758515.863281403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71841.18279569893,
            "unit": "ns",
            "range": "± 8314.095072128805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234182.97894736842,
            "unit": "ns",
            "range": "± 27562.542628511033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224677.9107142857,
            "unit": "ns",
            "range": "± 9184.293348927606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220478.325,
            "unit": "ns",
            "range": "± 7765.004946215011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12838248.214285715,
            "unit": "ns",
            "range": "± 172754.09188304387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10388750.785714285,
            "unit": "ns",
            "range": "± 178823.66782711638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25284.26923076923,
            "unit": "ns",
            "range": "± 2391.1576930057354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64011.066666666666,
            "unit": "ns",
            "range": "± 5516.273988355431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63102.375,
            "unit": "ns",
            "range": "± 3654.94068855325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123626.22352941177,
            "unit": "ns",
            "range": "± 8442.822696254621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8643.989583333334,
            "unit": "ns",
            "range": "± 783.1152566215964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24805.736559139787,
            "unit": "ns",
            "range": "± 2603.1372894604187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611356.878787879,
            "unit": "ns",
            "range": "± 180323.37360110338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2818585.6428571427,
            "unit": "ns",
            "range": "± 120856.94772016114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2565606.0204081633,
            "unit": "ns",
            "range": "± 230180.97231496006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6048730.75,
            "unit": "ns",
            "range": "± 179924.4452044683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3341342.2291666665,
            "unit": "ns",
            "range": "± 130627.42676686854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5578947.466666667,
            "unit": "ns",
            "range": "± 100567.82566781675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25198459.833333332,
            "unit": "ns",
            "range": "± 521451.14403184276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6503386.735294118,
            "unit": "ns",
            "range": "± 265826.31807349506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28741438.166666668,
            "unit": "ns",
            "range": "± 859652.4901142777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7073249.458180147,
            "unit": "ns",
            "range": "± 138410.9603154376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1947473.710546875,
            "unit": "ns",
            "range": "± 21637.199576542018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304113.5052083333,
            "unit": "ns",
            "range": "± 8050.268123278708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2750179.9484375,
            "unit": "ns",
            "range": "± 61145.55353262686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805393.1357421875,
            "unit": "ns",
            "range": "± 6144.604726542325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737484.8096354167,
            "unit": "ns",
            "range": "± 5839.607532059345"
          }
        ]
      }
    ]
  }
}