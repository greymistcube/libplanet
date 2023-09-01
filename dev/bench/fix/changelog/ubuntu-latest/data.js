window.BENCHMARK_DATA = {
  "lastUpdate": 1693547166930,
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
          "id": "8608f30b1034b8076cbb7f6bd9998add244b3e4b",
          "message": "Changelog",
          "timestamp": "2023-09-01T14:31:05+09:00",
          "tree_id": "a8e737ad5d8cf8d75c730c81eca9b1bb6ee3c066",
          "url": "https://github.com/greymistcube/libplanet/commit/8608f30b1034b8076cbb7f6bd9998add244b3e4b"
        },
        "date": 1693547159647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1459076.030612245,
            "unit": "ns",
            "range": "± 100547.75414312276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2908857.8684210526,
            "unit": "ns",
            "range": "± 147793.09624231144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1888575.9864864864,
            "unit": "ns",
            "range": "± 93786.69072509276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5022236.186046512,
            "unit": "ns",
            "range": "± 182357.50583430182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291551.11904761905,
            "unit": "ns",
            "range": "± 9886.058353356497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281223.126984127,
            "unit": "ns",
            "range": "± 12896.544465278492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274366.234375,
            "unit": "ns",
            "range": "± 12552.946062536808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4660656.769230769,
            "unit": "ns",
            "range": "± 29279.900575177977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4322936.2,
            "unit": "ns",
            "range": "± 43650.06343507091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24075.82474226804,
            "unit": "ns",
            "range": "± 2399.950008204638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104703.17525773196,
            "unit": "ns",
            "range": "± 8755.437906679184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87764.59375,
            "unit": "ns",
            "range": "± 7047.450676929212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95570.13541666667,
            "unit": "ns",
            "range": "± 11648.946809064615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7332.170103092783,
            "unit": "ns",
            "range": "± 983.2772977146532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24139.925531914894,
            "unit": "ns",
            "range": "± 2008.826256767555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54632.21276595745,
            "unit": "ns",
            "range": "± 4061.796238787302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8439105.6,
            "unit": "ns",
            "range": "± 108493.32364501907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22831538.2,
            "unit": "ns",
            "range": "± 152341.9478176832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58208148,
            "unit": "ns",
            "range": "± 449758.6567509608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116722212.86666666,
            "unit": "ns",
            "range": "± 404071.23438940936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229910640.66666666,
            "unit": "ns",
            "range": "± 1640614.2507105018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3606004.736842105,
            "unit": "ns",
            "range": "± 79897.64739189905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3787486.090909091,
            "unit": "ns",
            "range": "± 91741.82254198287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4461522.25,
            "unit": "ns",
            "range": "± 123519.46692627037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4237006.294117647,
            "unit": "ns",
            "range": "± 70236.149584602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6486246.785714285,
            "unit": "ns",
            "range": "± 108779.73198884954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5228824.322115385,
            "unit": "ns",
            "range": "± 11014.4248957843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1594113.045673077,
            "unit": "ns",
            "range": "± 1187.5388791624407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1105405.9692007212,
            "unit": "ns",
            "range": "± 2429.570735537196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2778492.6529947915,
            "unit": "ns",
            "range": "± 6063.930167041542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824031.662109375,
            "unit": "ns",
            "range": "± 544.2069246210455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768972.3865234375,
            "unit": "ns",
            "range": "± 396.36631755153843"
          }
        ]
      }
    ]
  }
}