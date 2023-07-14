window.BENCHMARK_DATA = {
  "lastUpdate": 1689323837810,
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
          "id": "f2c4aee1803596e177022ea1920efaac6587e0ef",
          "message": "Prepare 2.4.2",
          "timestamp": "2023-07-14T17:22:48+09:00",
          "tree_id": "29f5b2dadb9582f291c89f15d3058758bae66af2",
          "url": "https://github.com/greymistcube/libplanet/commit/f2c4aee1803596e177022ea1920efaac6587e0ef"
        },
        "date": 1689323829910,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298879.5416666667,
            "unit": "ns",
            "range": "± 11785.630460859065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284148,
            "unit": "ns",
            "range": "± 10617.46117382954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256234.5052631579,
            "unit": "ns",
            "range": "± 14696.819615339335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4651200.785714285,
            "unit": "ns",
            "range": "± 50753.12051517101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4265699.2,
            "unit": "ns",
            "range": "± 67511.66030101763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21428.5,
            "unit": "ns",
            "range": "± 2151.874968282516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95977.70833333333,
            "unit": "ns",
            "range": "± 6917.392386573467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80274.16666666667,
            "unit": "ns",
            "range": "± 5163.736274130577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112247.44897959183,
            "unit": "ns",
            "range": "± 18169.650749908727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5838.816326530612,
            "unit": "ns",
            "range": "± 838.9717976526204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21517.84375,
            "unit": "ns",
            "range": "± 1871.7232326226742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570326.1041666667,
            "unit": "ns",
            "range": "± 112799.08256751578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2923017.512820513,
            "unit": "ns",
            "range": "± 101584.84105283668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1976299.9125,
            "unit": "ns",
            "range": "± 102515.87706637666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5346949.150943397,
            "unit": "ns",
            "range": "± 221014.63844996577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089261.795833333,
            "unit": "ns",
            "range": "± 21991.134498206426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1917643.8271484375,
            "unit": "ns",
            "range": "± 2015.9577679429883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405785.7950520834,
            "unit": "ns",
            "range": "± 3372.460509016681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627069.331770833,
            "unit": "ns",
            "range": "± 2744.8580304934862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860636.8645368303,
            "unit": "ns",
            "range": "± 1542.5908246217427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763710.2522135417,
            "unit": "ns",
            "range": "± 246.70746206118568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3604455.117647059,
            "unit": "ns",
            "range": "± 66588.02474815043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3872142.25,
            "unit": "ns",
            "range": "± 88916.97542910761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4561559.933333334,
            "unit": "ns",
            "range": "± 74908.27381105762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4264308.970588235,
            "unit": "ns",
            "range": "± 136602.57957444672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6806521.555555556,
            "unit": "ns",
            "range": "± 187508.4637682202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8519540.28125,
            "unit": "ns",
            "range": "± 263155.83506616374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22921093.785714287,
            "unit": "ns",
            "range": "± 119377.7568787925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57397903.6,
            "unit": "ns",
            "range": "± 345012.6926849007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114449343.26666667,
            "unit": "ns",
            "range": "± 556978.0536154091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229063477.93333334,
            "unit": "ns",
            "range": "± 1548548.2184736065"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50173.709677419356,
            "unit": "ns",
            "range": "± 2843.325852576005"
          }
        ]
      }
    ]
  }
}