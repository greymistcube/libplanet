window.BENCHMARK_DATA = {
  "lastUpdate": 1689914305040,
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
          "id": "94ceefc81e5c28a3cba877c38447820481d4f9d3",
          "message": "Removed more string usage",
          "timestamp": "2023-07-21T13:17:38+09:00",
          "tree_id": "88db91efeeaac436e3e33d1df6fc60791a1ed43f",
          "url": "https://github.com/greymistcube/libplanet/commit/94ceefc81e5c28a3cba877c38447820481d4f9d3"
        },
        "date": 1689914286043,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8154021.608695652,
            "unit": "ns",
            "range": "± 189061.55862040355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21122678.10526316,
            "unit": "ns",
            "range": "± 687137.1201846574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51870015.375,
            "unit": "ns",
            "range": "± 1342137.0157103222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106319414.81578948,
            "unit": "ns",
            "range": "± 3314620.666648616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212018193.04545453,
            "unit": "ns",
            "range": "± 5106485.394514348"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71462.54347826086,
            "unit": "ns",
            "range": "± 11537.466912945823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342386.7415730337,
            "unit": "ns",
            "range": "± 33945.62875143402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309432.22105263156,
            "unit": "ns",
            "range": "± 25579.497788467044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317292.1847826087,
            "unit": "ns",
            "range": "± 27110.105710727115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4720483.275510204,
            "unit": "ns",
            "range": "± 297523.07204972836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4201105.197916667,
            "unit": "ns",
            "range": "± 352896.0499500076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25370.649425287356,
            "unit": "ns",
            "range": "± 4539.946174582925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114098.9255319149,
            "unit": "ns",
            "range": "± 17624.47912781121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116525.55319148937,
            "unit": "ns",
            "range": "± 14368.608758811934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120714.74175824175,
            "unit": "ns",
            "range": "± 18756.18988099701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7394.795698924731,
            "unit": "ns",
            "range": "± 1304.2048181966613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23782.883720930233,
            "unit": "ns",
            "range": "± 3185.1678002472454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635360.2727272727,
            "unit": "ns",
            "range": "± 191982.21641120707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2983798.8076923075,
            "unit": "ns",
            "range": "± 138124.41885612172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2116826.8229166665,
            "unit": "ns",
            "range": "± 178590.13439923478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5940746.016483516,
            "unit": "ns",
            "range": "± 331555.76127511216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3498086.3157894737,
            "unit": "ns",
            "range": "± 265501.87974436797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3560898.3298969073,
            "unit": "ns",
            "range": "± 242113.06823752826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4938436.722222222,
            "unit": "ns",
            "range": "± 392762.19656065956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4069753.40625,
            "unit": "ns",
            "range": "± 263102.49761816673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7895865.675257732,
            "unit": "ns",
            "range": "± 555711.2262929749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7597700.184151785,
            "unit": "ns",
            "range": "± 337253.6351395294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2387179.433449074,
            "unit": "ns",
            "range": "± 100088.87998820904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1443526.3651475694,
            "unit": "ns",
            "range": "± 54679.292205154066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3367837.366647274,
            "unit": "ns",
            "range": "± 187624.06980975307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010028.561355745,
            "unit": "ns",
            "range": "± 59738.68152559796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956065.4862630208,
            "unit": "ns",
            "range": "± 14978.387887587973"
          }
        ]
      }
    ]
  }
}