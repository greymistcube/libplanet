window.BENCHMARK_DATA = {
  "lastUpdate": 1681801051068,
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
      }
    ]
  }
}