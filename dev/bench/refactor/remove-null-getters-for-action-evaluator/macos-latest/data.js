window.BENCHMARK_DATA = {
  "lastUpdate": 1686749436455,
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
          "id": "547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2",
          "message": "General internal API cleanup",
          "timestamp": "2023-06-14T21:58:12+09:00",
          "tree_id": "c1642302083e2f353fa08f273beb05f5929b1087",
          "url": "https://github.com/greymistcube/libplanet/commit/547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2"
        },
        "date": 1686749414478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9971207.989898989,
            "unit": "ns",
            "range": "± 1658786.3406719891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27043722.18,
            "unit": "ns",
            "range": "± 4659741.5074520195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74080350.98,
            "unit": "ns",
            "range": "± 5473188.755165408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 151299500.99,
            "unit": "ns",
            "range": "± 13238296.903231144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297668907.05,
            "unit": "ns",
            "range": "± 17479218.44057402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80396.35483870968,
            "unit": "ns",
            "range": "± 17968.500615899768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 463085.40625,
            "unit": "ns",
            "range": "± 87919.80036458802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 436298.36734693876,
            "unit": "ns",
            "range": "± 96110.69458438292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 418028.85,
            "unit": "ns",
            "range": "± 82524.76629906108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6136169.44,
            "unit": "ns",
            "range": "± 1132246.4621763073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5544967.262626262,
            "unit": "ns",
            "range": "± 834293.5691926775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32936.163043478264,
            "unit": "ns",
            "range": "± 5756.269049369486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 160907.22340425532,
            "unit": "ns",
            "range": "± 29152.11499184821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 161391.50505050505,
            "unit": "ns",
            "range": "± 30964.388707811497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 167087.84210526315,
            "unit": "ns",
            "range": "± 31379.794444330273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11008.193548387097,
            "unit": "ns",
            "range": "± 1334.5272429335555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32450.433333333334,
            "unit": "ns",
            "range": "± 7804.579915564127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1788611.306122449,
            "unit": "ns",
            "range": "± 337029.5668169375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3145750.5168539328,
            "unit": "ns",
            "range": "± 298665.835985452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2672609.5894736843,
            "unit": "ns",
            "range": "± 349051.0251006259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7388213.617021277,
            "unit": "ns",
            "range": "± 926099.4553798165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4631293.94,
            "unit": "ns",
            "range": "± 807427.8045353992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5146211.03030303,
            "unit": "ns",
            "range": "± 874812.4322979002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6170896.714285715,
            "unit": "ns",
            "range": "± 1002437.9946739847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6331583.01,
            "unit": "ns",
            "range": "± 1020416.036499527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10035678.636842106,
            "unit": "ns",
            "range": "± 1419400.3818331298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8549250.1671875,
            "unit": "ns",
            "range": "± 1074545.5971735606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2560949.1565234377,
            "unit": "ns",
            "range": "± 227806.64511228874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1528444.4347213274,
            "unit": "ns",
            "range": "± 88617.2168329855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3335189.9026171877,
            "unit": "ns",
            "range": "± 206922.62033109774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1107265.2331671463,
            "unit": "ns",
            "range": "± 55736.14507637629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1006107.6966737689,
            "unit": "ns",
            "range": "± 65647.30677453111"
          }
        ]
      }
    ]
  }
}