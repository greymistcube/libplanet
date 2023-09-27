window.BENCHMARK_DATA = {
  "lastUpdate": 1695777389936,
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
          "id": "1e1e0e68367e7006a93ab97437129933f338c9f5",
          "message": "Remove unnecessary copy methods",
          "timestamp": "2023-09-27T09:58:56+09:00",
          "tree_id": "c9eed7988ffb1c411dc9f49c109ffa4787b995d0",
          "url": "https://github.com/greymistcube/libplanet/commit/1e1e0e68367e7006a93ab97437129933f338c9f5"
        },
        "date": 1695777373464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8215893.6,
            "unit": "ns",
            "range": "± 394844.8162470188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20762314.060606062,
            "unit": "ns",
            "range": "± 650674.4524771459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51187732.86666667,
            "unit": "ns",
            "range": "± 867011.0755458225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104432851.13380282,
            "unit": "ns",
            "range": "± 4933584.876327419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201075522.03846154,
            "unit": "ns",
            "range": "± 1697699.6358173224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59853.42857142857,
            "unit": "ns",
            "range": "± 9680.18645957109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315908.5360824742,
            "unit": "ns",
            "range": "± 30848.843291409736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321734.4793814433,
            "unit": "ns",
            "range": "± 34557.40214844817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314188.0208333333,
            "unit": "ns",
            "range": "± 34173.38819022137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4101439.9032258065,
            "unit": "ns",
            "range": "± 123845.95857175552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3686498.375,
            "unit": "ns",
            "range": "± 67642.94599426708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19099.07608695652,
            "unit": "ns",
            "range": "± 2719.863184316429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85199.45054945054,
            "unit": "ns",
            "range": "± 9574.844003677015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88315.0202020202,
            "unit": "ns",
            "range": "± 14932.10612902839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97839.72916666667,
            "unit": "ns",
            "range": "± 14192.127647677864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6025.642105263158,
            "unit": "ns",
            "range": "± 1633.9517813387888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19513.9793814433,
            "unit": "ns",
            "range": "± 3926.9710469695483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447237.043956044,
            "unit": "ns",
            "range": "± 168623.98264639394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2759705.2,
            "unit": "ns",
            "range": "± 139249.52822007518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2368975.6505376343,
            "unit": "ns",
            "range": "± 167800.88424398736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10946774.684210526,
            "unit": "ns",
            "range": "± 593348.1070353717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3309859.168421053,
            "unit": "ns",
            "range": "± 223310.8305917748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3494787.2653061226,
            "unit": "ns",
            "range": "± 252002.40222274067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4341740.02,
            "unit": "ns",
            "range": "± 172372.47037459436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4455605.989130435,
            "unit": "ns",
            "range": "± 288490.8014166705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15803867.864583334,
            "unit": "ns",
            "range": "± 1958483.6512469088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902332.79296875,
            "unit": "ns",
            "range": "± 234198.05194239385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1598904.0035445602,
            "unit": "ns",
            "range": "± 44111.28452675064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 998129.5376302083,
            "unit": "ns",
            "range": "± 29323.93096962604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633558.3234375,
            "unit": "ns",
            "range": "± 37977.16376358251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757968.4809570312,
            "unit": "ns",
            "range": "± 2728.6106469384636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 684577.3219168527,
            "unit": "ns",
            "range": "± 6129.38337828926"
          }
        ]
      }
    ]
  }
}