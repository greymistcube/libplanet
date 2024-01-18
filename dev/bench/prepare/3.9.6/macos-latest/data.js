window.BENCHMARK_DATA = {
  "lastUpdate": 1705577698594,
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
          "id": "0544e7ea2b52012d2ccfe0649b91a3e66350c074",
          "message": "Prepare 3.9.6",
          "timestamp": "2024-01-18T20:21:08+09:00",
          "tree_id": "7404f8c95fac3421006e37312490bb01484847f1",
          "url": "https://github.com/greymistcube/libplanet/commit/0544e7ea2b52012d2ccfe0649b91a3e66350c074"
        },
        "date": 1705577683154,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7882525.97368421,
            "unit": "ns",
            "range": "± 269829.84554049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19423105.32,
            "unit": "ns",
            "range": "± 469419.29676859966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47591398.6,
            "unit": "ns",
            "range": "± 881666.2159333639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93099585.13333334,
            "unit": "ns",
            "range": "± 1147792.6111419797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189915278.64285713,
            "unit": "ns",
            "range": "± 2775959.452634533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36117.93103448276,
            "unit": "ns",
            "range": "± 3747.6115767341967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219668.32631578948,
            "unit": "ns",
            "range": "± 17363.97527987312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213854.46875,
            "unit": "ns",
            "range": "± 17827.26219967203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194162.16666666666,
            "unit": "ns",
            "range": "± 16170.12781088294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3684918.8,
            "unit": "ns",
            "range": "± 68848.09822974511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3477429.9285714286,
            "unit": "ns",
            "range": "± 96888.07040655635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17817.478260869564,
            "unit": "ns",
            "range": "± 4498.286738519433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80764.62903225806,
            "unit": "ns",
            "range": "± 13985.965530103977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86058.91111111111,
            "unit": "ns",
            "range": "± 9265.10972017285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92006.59574468085,
            "unit": "ns",
            "range": "± 16603.98277931821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6787.880434782609,
            "unit": "ns",
            "range": "± 1540.4573663801843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18768.59375,
            "unit": "ns",
            "range": "± 3702.7789381493776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033104.8787878788,
            "unit": "ns",
            "range": "± 93876.42653654255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2218911.0913978494,
            "unit": "ns",
            "range": "± 141794.06852830443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499199.3775510204,
            "unit": "ns",
            "range": "± 116677.08474178004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6528107.615384615,
            "unit": "ns",
            "range": "± 225103.82418793417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2835406.1875,
            "unit": "ns",
            "range": "± 59386.106955402865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3182205.3421052634,
            "unit": "ns",
            "range": "± 68839.82159272443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3562423.611111111,
            "unit": "ns",
            "range": "± 117637.65542941664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3714697.285714286,
            "unit": "ns",
            "range": "± 86609.72142556681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13429512.363636363,
            "unit": "ns",
            "range": "± 2148679.8181205974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749701.632011218,
            "unit": "ns",
            "range": "± 162330.0064205331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1466323.781131629,
            "unit": "ns",
            "range": "± 45682.53521274625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 886243.8286508414,
            "unit": "ns",
            "range": "± 9865.780594849979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2078336.2993164062,
            "unit": "ns",
            "range": "± 38454.00327902722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635989.8371744792,
            "unit": "ns",
            "range": "± 10955.460584626515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584584.5893322172,
            "unit": "ns",
            "range": "± 21258.019166657356"
          }
        ]
      }
    ]
  }
}