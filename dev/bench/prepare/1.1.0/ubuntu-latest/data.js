window.BENCHMARK_DATA = {
  "lastUpdate": 1681802040133,
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
          "id": "d2ed2693ec59760d48ad3470a61629982a10c806",
          "message": "Prepare 1.1.0",
          "timestamp": "2023-04-18T15:44:40+09:00",
          "tree_id": "12f24b946ecaf7de0e7fbca77aff22ba4d17a8ae",
          "url": "https://github.com/greymistcube/libplanet/commit/d2ed2693ec59760d48ad3470a61629982a10c806"
        },
        "date": 1681801043447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7672401.2,
            "unit": "ns",
            "range": "± 14308.328749368322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19390069.866666667,
            "unit": "ns",
            "range": "± 155808.4579896862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48223951.733333334,
            "unit": "ns",
            "range": "± 295449.44239278825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96131685,
            "unit": "ns",
            "range": "± 954726.1301871563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192623387.2,
            "unit": "ns",
            "range": "± 1039299.6479800505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45904.255319148935,
            "unit": "ns",
            "range": "± 2629.7272802554626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334594.93814433,
            "unit": "ns",
            "range": "± 118813.39562715337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2518509.5714285714,
            "unit": "ns",
            "range": "± 59100.06796829546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2148257.26,
            "unit": "ns",
            "range": "± 156711.33304454526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5301195,
            "unit": "ns",
            "range": "± 109586.59835410317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5991769.647879465,
            "unit": "ns",
            "range": "± 23107.3290633542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925830.0274739584,
            "unit": "ns",
            "range": "± 5395.508138538112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359319.980859375,
            "unit": "ns",
            "range": "± 2232.2206033450548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2531235.845833333,
            "unit": "ns",
            "range": "± 8352.569452390111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791172.1538085938,
            "unit": "ns",
            "range": "± 626.5349934707599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727248.5205078125,
            "unit": "ns",
            "range": "± 620.0114342593548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317261.22222222225,
            "unit": "ns",
            "range": "± 10480.996504180075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267669.21428571426,
            "unit": "ns",
            "range": "± 9714.601031275763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232616.8,
            "unit": "ns",
            "range": "± 3737.6660823108773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5597967.133333334,
            "unit": "ns",
            "range": "± 32514.980461466126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3931171.3333333335,
            "unit": "ns",
            "range": "± 62847.89167127097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17852.072164948455,
            "unit": "ns",
            "range": "± 1654.9193852938295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83006.01492537314,
            "unit": "ns",
            "range": "± 3954.871141035837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74342.15789473684,
            "unit": "ns",
            "range": "± 1653.7672906010653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 173034.75510204083,
            "unit": "ns",
            "range": "± 14462.417284555258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4355.208333333333,
            "unit": "ns",
            "range": "± 400.0973017619502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15812.510416666666,
            "unit": "ns",
            "range": "± 1463.9908541186253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3144493.7333333334,
            "unit": "ns",
            "range": "± 41396.11370383641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3265027.066666667,
            "unit": "ns",
            "range": "± 51815.604666198866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4158638.35,
            "unit": "ns",
            "range": "± 94746.4440228567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4168331.476190476,
            "unit": "ns",
            "range": "± 95472.1174661058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7066969.454545454,
            "unit": "ns",
            "range": "± 151104.67414463052"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff0633b44c3f2b3182362f39e957058a5e2888b8",
          "message": "Update CHANGES.md\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong@minhee.org>",
          "timestamp": "2023-04-18T16:00:30+09:00",
          "tree_id": "b2d6a09751ee7609ecd7bdca13376d6dff6b07ff",
          "url": "https://github.com/greymistcube/libplanet/commit/ff0633b44c3f2b3182362f39e957058a5e2888b8"
        },
        "date": 1681802032886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7600097.533333333,
            "unit": "ns",
            "range": "± 71625.23419045898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20427126.23529412,
            "unit": "ns",
            "range": "± 410015.7618879623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51690517.76,
            "unit": "ns",
            "range": "± 1343028.7930326946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108970922.26666667,
            "unit": "ns",
            "range": "± 1975175.6524377943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209958654.23809522,
            "unit": "ns",
            "range": "± 4759880.92304714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46228.035294117646,
            "unit": "ns",
            "range": "± 2350.0569114033674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404938.5957446808,
            "unit": "ns",
            "range": "± 94956.64297387034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2654949.6,
            "unit": "ns",
            "range": "± 60669.82015918102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2277434.2315789475,
            "unit": "ns",
            "range": "± 130276.37467098124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5476359.344827586,
            "unit": "ns",
            "range": "± 159480.47500428112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5857255.101004465,
            "unit": "ns",
            "range": "± 27310.558802790678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1879472.7642728365,
            "unit": "ns",
            "range": "± 4363.574954240259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350889.2455729167,
            "unit": "ns",
            "range": "± 6790.073778263909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607498.6082589286,
            "unit": "ns",
            "range": "± 6296.098562935445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820288.062109375,
            "unit": "ns",
            "range": "± 2501.92417488144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759274.1788504465,
            "unit": "ns",
            "range": "± 991.8345058800854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341485.26086956525,
            "unit": "ns",
            "range": "± 7848.678436627471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273175.05555555556,
            "unit": "ns",
            "range": "± 8958.41473841197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230520.75,
            "unit": "ns",
            "range": "± 4342.613675349597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5659520.066666666,
            "unit": "ns",
            "range": "± 60704.18042967136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4042884.933333333,
            "unit": "ns",
            "range": "± 58629.90184741993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18654.628865979383,
            "unit": "ns",
            "range": "± 1267.1581748114197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89228.02173913043,
            "unit": "ns",
            "range": "± 5042.345590542885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79070.98360655738,
            "unit": "ns",
            "range": "± 3514.731594739506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 196236.51546391752,
            "unit": "ns",
            "range": "± 19808.16485385162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6318.125,
            "unit": "ns",
            "range": "± 764.2492187899525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18240.548387096773,
            "unit": "ns",
            "range": "± 1609.5191390742402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3318041.5263157897,
            "unit": "ns",
            "range": "± 72336.01693130042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3457443.763157895,
            "unit": "ns",
            "range": "± 101212.66379755274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4230510.65,
            "unit": "ns",
            "range": "± 150168.3986547803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4545803.108108108,
            "unit": "ns",
            "range": "± 152732.39308505578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7330105.782608695,
            "unit": "ns",
            "range": "± 182814.4099241226"
          }
        ]
      }
    ]
  }
}