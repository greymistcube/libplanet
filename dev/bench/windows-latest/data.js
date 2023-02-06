window.BENCHMARK_DATA = {
  "lastUpdate": 1675700730886,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/greymistcube/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675700710467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 120177.55102040817,
            "unit": "ns",
            "range": "± 9291.005856039363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4858026.328125,
            "unit": "ns",
            "range": "± 33729.37647670018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524305.2036830357,
            "unit": "ns",
            "range": "± 3324.7481883278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169025.4356971155,
            "unit": "ns",
            "range": "± 2251.0087770452283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625025.8984375,
            "unit": "ns",
            "range": "± 8402.814955531112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836736.181640625,
            "unit": "ns",
            "range": "± 3481.261179031147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769542.5065104166,
            "unit": "ns",
            "range": "± 1586.6227915499403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4929136.71875,
            "unit": "ns",
            "range": "± 49286.003100068265"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6218821.428571428,
            "unit": "ns",
            "range": "± 99637.97683901168"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26594285.714285713,
            "unit": "ns",
            "range": "± 433581.5740073387"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6672693.333333333,
            "unit": "ns",
            "range": "± 122727.7501898681"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29396987.5,
            "unit": "ns",
            "range": "± 569357.1554832696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109045.91836734694,
            "unit": "ns",
            "range": "± 14495.923126597922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221801.2048192771,
            "unit": "ns",
            "range": "± 11401.214034370967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200761.61616161617,
            "unit": "ns",
            "range": "± 12401.750263824328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3732020,
            "unit": "ns",
            "range": "± 54981.687860595914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9354000,
            "unit": "ns",
            "range": "± 88787.18722532332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26463.26530612245,
            "unit": "ns",
            "range": "± 3417.6735245835866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61082.97872340425,
            "unit": "ns",
            "range": "± 5607.591595767187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45253.15789473684,
            "unit": "ns",
            "range": "± 4089.619777144636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105212.19512195123,
            "unit": "ns",
            "range": "± 10798.495439825241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6703.125,
            "unit": "ns",
            "range": "± 803.6696264143947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29854.255319148935,
            "unit": "ns",
            "range": "± 4463.222831277649"
          }
        ]
      }
    ]
  }
}