window.BENCHMARK_DATA = {
  "lastUpdate": 1689920214252,
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
          "id": "f64165140c35565e117126be8559b0b1d51d2cab",
          "message": "Changelog",
          "timestamp": "2023-07-21T15:02:01+09:00",
          "tree_id": "6d9838ae626adc66676c4eaa170f9f89a93aec0b",
          "url": "https://github.com/greymistcube/libplanet/commit/f64165140c35565e117126be8559b0b1d51d2cab"
        },
        "date": 1689920196154,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7878961.75,
            "unit": "ns",
            "range": "± 116505.84256369837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18645636.9375,
            "unit": "ns",
            "range": "± 358001.6798268725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48670347.25,
            "unit": "ns",
            "range": "± 1242881.3494389018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94308026,
            "unit": "ns",
            "range": "± 1630197.2979121709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191920693,
            "unit": "ns",
            "range": "± 2153272.312191833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54610.77777777778,
            "unit": "ns",
            "range": "± 5085.946320256863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307934.57954545453,
            "unit": "ns",
            "range": "± 17342.554630735245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299312.22222222225,
            "unit": "ns",
            "range": "± 15862.990637901554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277359.45454545453,
            "unit": "ns",
            "range": "± 11749.75702793416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4032175.1363636362,
            "unit": "ns",
            "range": "± 97368.73273347752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3557456.7419354836,
            "unit": "ns",
            "range": "± 108027.03574166601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18896.43010752688,
            "unit": "ns",
            "range": "± 2982.4052679946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86371.48387096774,
            "unit": "ns",
            "range": "± 7346.480370858617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80390.67045454546,
            "unit": "ns",
            "range": "± 6134.3862178266745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101519.92391304347,
            "unit": "ns",
            "range": "± 15127.809378708564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5232.9775280898875,
            "unit": "ns",
            "range": "± 487.89559654257835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16862.6091954023,
            "unit": "ns",
            "range": "± 1895.0519926371892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1567803.96875,
            "unit": "ns",
            "range": "± 161921.46498456088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2809704.335164835,
            "unit": "ns",
            "range": "± 164380.4391371339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2031318.3368421053,
            "unit": "ns",
            "range": "± 204362.7495722652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5610610.574074074,
            "unit": "ns",
            "range": "± 234463.52421875633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3151579.159090909,
            "unit": "ns",
            "range": "± 115984.62742063853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3318189.095238095,
            "unit": "ns",
            "range": "± 120075.35375039872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4195627.586206896,
            "unit": "ns",
            "range": "± 181715.69372330862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3793152.7032967033,
            "unit": "ns",
            "range": "± 269818.06818634475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7066351.255319149,
            "unit": "ns",
            "range": "± 255426.24279380435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6329998.60390625,
            "unit": "ns",
            "range": "± 83955.63255312246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878408.3139322917,
            "unit": "ns",
            "range": "± 18142.93953920922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236455.784765625,
            "unit": "ns",
            "range": "± 11113.969671273055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579785.69375,
            "unit": "ns",
            "range": "± 22882.88052811311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767024.8909737723,
            "unit": "ns",
            "range": "± 4052.5026422373444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764322.9745442708,
            "unit": "ns",
            "range": "± 5174.43027915867"
          }
        ]
      }
    ]
  }
}