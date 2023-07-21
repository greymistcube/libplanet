window.BENCHMARK_DATA = {
  "lastUpdate": 1689924743822,
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
          "id": "50d76b09787bcfbbce44883cd1e84b8eed45b411",
          "message": "Changelog",
          "timestamp": "2023-07-21T15:02:33+09:00",
          "tree_id": "16f0b3f1016715998210b35b2779d961ca82a04d",
          "url": "https://github.com/greymistcube/libplanet/commit/50d76b09787bcfbbce44883cd1e84b8eed45b411"
        },
        "date": 1689920262828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8078209.571428572,
            "unit": "ns",
            "range": "± 37471.732117925676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21005147.785714287,
            "unit": "ns",
            "range": "± 145038.07734810596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53225342.36666667,
            "unit": "ns",
            "range": "± 472862.70096401236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102884912.73333333,
            "unit": "ns",
            "range": "± 1240972.9968667135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209575335.35714287,
            "unit": "ns",
            "range": "± 1320994.0254374067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78918.3947368421,
            "unit": "ns",
            "range": "± 6578.618529353959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336321.0833333333,
            "unit": "ns",
            "range": "± 12568.744985222116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325596.4482758621,
            "unit": "ns",
            "range": "± 13375.705874041065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335868.93333333335,
            "unit": "ns",
            "range": "± 8062.842416929026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4333063.6875,
            "unit": "ns",
            "range": "± 83801.34356537787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3746650.2666666666,
            "unit": "ns",
            "range": "± 59616.86666595844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20684.462365591397,
            "unit": "ns",
            "range": "± 2972.916901539557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104733.93,
            "unit": "ns",
            "range": "± 14388.647857136075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119721.95652173914,
            "unit": "ns",
            "range": "± 4349.365939518703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127468.13684210526,
            "unit": "ns",
            "range": "± 10766.559843517973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9160.729166666666,
            "unit": "ns",
            "range": "± 931.3297508533494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24655.436842105264,
            "unit": "ns",
            "range": "± 3112.4901052924024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664132.1414141415,
            "unit": "ns",
            "range": "± 198204.65116605448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3027528.54,
            "unit": "ns",
            "range": "± 120544.37686966707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2089871.72,
            "unit": "ns",
            "range": "± 188136.5326584903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6015086.327586207,
            "unit": "ns",
            "range": "± 216039.76632948348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3378989.466666667,
            "unit": "ns",
            "range": "± 56233.823222920444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3605755.272727273,
            "unit": "ns",
            "range": "± 86559.8514231527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4516294.3,
            "unit": "ns",
            "range": "± 116915.3828330558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4008878.617647059,
            "unit": "ns",
            "range": "± 125710.23475094323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7046837.3965517245,
            "unit": "ns",
            "range": "± 200374.64013894158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6665342.097135416,
            "unit": "ns",
            "range": "± 52105.68375752884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972661.9131610577,
            "unit": "ns",
            "range": "± 4093.1368188055394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283531.617578125,
            "unit": "ns",
            "range": "± 2487.1355439345716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620124.6768229166,
            "unit": "ns",
            "range": "± 31304.848326679312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801032.9276646206,
            "unit": "ns",
            "range": "± 1526.1312960820335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726863.8666015625,
            "unit": "ns",
            "range": "± 1954.9049495719205"
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
          "id": "fe1d5afae59d3ab659475584cbf054a6ddf27639",
          "message": "Changelog",
          "timestamp": "2023-07-21T15:01:37+09:00",
          "tree_id": "6d9838ae626adc66676c4eaa170f9f89a93aec0b",
          "url": "https://github.com/greymistcube/libplanet/commit/fe1d5afae59d3ab659475584cbf054a6ddf27639"
        },
        "date": 1689920328668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9061478.05670103,
            "unit": "ns",
            "range": "± 525247.9389226969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22601907.984210525,
            "unit": "ns",
            "range": "± 1290014.632140262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55655687.24324324,
            "unit": "ns",
            "range": "± 1877825.4500214013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121565895.17032968,
            "unit": "ns",
            "range": "± 8792762.30326057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227150712.4375,
            "unit": "ns",
            "range": "± 4257663.594232107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76678.59090909091,
            "unit": "ns",
            "range": "± 6162.8282946502495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318942.32608695654,
            "unit": "ns",
            "range": "± 26636.736317963554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296101.74242424243,
            "unit": "ns",
            "range": "± 13917.29030468725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317593.98412698414,
            "unit": "ns",
            "range": "± 14485.896708013206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4338373.857142857,
            "unit": "ns",
            "range": "± 71106.38154403382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3739341.5,
            "unit": "ns",
            "range": "± 23297.78921832581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20137.054347826088,
            "unit": "ns",
            "range": "± 2958.345087435628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99440.89795918367,
            "unit": "ns",
            "range": "± 13332.662867713994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108665.47252747252,
            "unit": "ns",
            "range": "± 11613.76294875147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123866.9375,
            "unit": "ns",
            "range": "± 23636.800170747352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6715.430107526881,
            "unit": "ns",
            "range": "± 866.3021036196657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18143.956521739132,
            "unit": "ns",
            "range": "± 2787.2294365830026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1629542.7216494845,
            "unit": "ns",
            "range": "± 167158.7038487391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2791485.8571428573,
            "unit": "ns",
            "range": "± 95666.6860984129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160620.0515463916,
            "unit": "ns",
            "range": "± 203136.64792092395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6126708.965909091,
            "unit": "ns",
            "range": "± 331110.2580756248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3572416.4587628865,
            "unit": "ns",
            "range": "± 271879.446914242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3973022.616161616,
            "unit": "ns",
            "range": "± 460808.7679431455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4682826.141975309,
            "unit": "ns",
            "range": "± 244184.20409121006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4101999.815217391,
            "unit": "ns",
            "range": "± 293537.3594031279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7246593.742857143,
            "unit": "ns",
            "range": "± 330693.695921228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6944583.065885416,
            "unit": "ns",
            "range": "± 93605.63634462655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1992574.3033854167,
            "unit": "ns",
            "range": "± 22793.466055638968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1319586.194140625,
            "unit": "ns",
            "range": "± 14515.629442870897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2723077.688058036,
            "unit": "ns",
            "range": "± 19127.68805410329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826779.4937133789,
            "unit": "ns",
            "range": "± 15775.134311832895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792679.8389322917,
            "unit": "ns",
            "range": "± 11451.565222967585"
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
          "id": "80b4c83da5527d758a1adc1cde4bc2c02ec2736a",
          "message": "Suggestions",
          "timestamp": "2023-07-21T16:15:46+09:00",
          "tree_id": "7bf67711de078c5d39016d8dea5d12d1e87eb049",
          "url": "https://github.com/greymistcube/libplanet/commit/80b4c83da5527d758a1adc1cde4bc2c02ec2736a"
        },
        "date": 1689924602101,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7712099.653846154,
            "unit": "ns",
            "range": "± 52827.14720647292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18819473.533333335,
            "unit": "ns",
            "range": "± 337084.2548742433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46644080.05263158,
            "unit": "ns",
            "range": "± 1016261.2425379759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92178109.73333333,
            "unit": "ns",
            "range": "± 1035639.3374735427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188666681.34615386,
            "unit": "ns",
            "range": "± 938653.3977651927"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54297.75,
            "unit": "ns",
            "range": "± 5129.9437085894715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306034.8214285714,
            "unit": "ns",
            "range": "± 15103.957353581622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288218.05633802817,
            "unit": "ns",
            "range": "± 10683.179926390729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283584.1282051282,
            "unit": "ns",
            "range": "± 9813.768775979697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972225.1764705884,
            "unit": "ns",
            "range": "± 76620.09240339254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3562371.6666666665,
            "unit": "ns",
            "range": "± 61262.31398976823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18133.195652173912,
            "unit": "ns",
            "range": "± 1623.7732765405588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85798.26315789473,
            "unit": "ns",
            "range": "± 8025.09855604693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78956.58064516129,
            "unit": "ns",
            "range": "± 5920.9860212243675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100262.06315789474,
            "unit": "ns",
            "range": "± 13221.845225466126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5417.670454545455,
            "unit": "ns",
            "range": "± 641.1673212428063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17840.302197802197,
            "unit": "ns",
            "range": "± 1977.8775617637327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1486014.9278350514,
            "unit": "ns",
            "range": "± 124798.57717473582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2796456.0428571426,
            "unit": "ns",
            "range": "± 135871.40423981636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2002592.6979166667,
            "unit": "ns",
            "range": "± 182519.9897247375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5957463.055555556,
            "unit": "ns",
            "range": "± 401873.5022774506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3088887.717391304,
            "unit": "ns",
            "range": "± 75321.52044982839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3283688.581818182,
            "unit": "ns",
            "range": "± 137846.9367463743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4268712.868421053,
            "unit": "ns",
            "range": "± 93108.37808716996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3708572.4833333334,
            "unit": "ns",
            "range": "± 165342.8448457256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6889333.3,
            "unit": "ns",
            "range": "± 276000.5684076704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6072392.45,
            "unit": "ns",
            "range": "± 26077.5811057203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836907.4938802083,
            "unit": "ns",
            "range": "± 14679.777862613186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1227122.5541294643,
            "unit": "ns",
            "range": "± 10165.752410038516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2710543.801983173,
            "unit": "ns",
            "range": "± 16026.257917779394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812863.2186848958,
            "unit": "ns",
            "range": "± 5032.367104335474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737860.12109375,
            "unit": "ns",
            "range": "± 3731.9453304904187"
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
          "id": "80d80b07f386d47724b8f608c41b63b1863afa0e",
          "message": "Changelog",
          "timestamp": "2023-07-21T16:16:40+09:00",
          "tree_id": "77a8faa1ebc3e13f4309edf118475025bff5107f",
          "url": "https://github.com/greymistcube/libplanet/commit/80d80b07f386d47724b8f608c41b63b1863afa0e"
        },
        "date": 1689924729014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8271796.833333333,
            "unit": "ns",
            "range": "± 165332.19431478303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19826300.29411765,
            "unit": "ns",
            "range": "± 398563.0989272221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51370921.666666664,
            "unit": "ns",
            "range": "± 912225.4949320109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109175598.76923077,
            "unit": "ns",
            "range": "± 952722.4689523662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199367371.43333334,
            "unit": "ns",
            "range": "± 1600801.8569800959"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61277.663043478264,
            "unit": "ns",
            "range": "± 6591.58114446858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316778.23863636365,
            "unit": "ns",
            "range": "± 17307.93139030091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305326.86666666664,
            "unit": "ns",
            "range": "± 21422.56709782173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304174.6111111111,
            "unit": "ns",
            "range": "± 9460.303185349303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4099105.75,
            "unit": "ns",
            "range": "± 58431.78895729618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3840402.411764706,
            "unit": "ns",
            "range": "± 77480.69740511086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18839.57608695652,
            "unit": "ns",
            "range": "± 1524.9323547144147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90091.11235955056,
            "unit": "ns",
            "range": "± 7638.591639643519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88454.97777777778,
            "unit": "ns",
            "range": "± 6301.00933278631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113774.4587628866,
            "unit": "ns",
            "range": "± 19549.123608296315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6716.63829787234,
            "unit": "ns",
            "range": "± 1163.5813791176488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17918.055555555555,
            "unit": "ns",
            "range": "± 1541.6217446638698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506160.6666666667,
            "unit": "ns",
            "range": "± 145728.76807043463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861899.265957447,
            "unit": "ns",
            "range": "± 164015.66857182552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2164533.3282828284,
            "unit": "ns",
            "range": "± 252589.59538140046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6010179.011494253,
            "unit": "ns",
            "range": "± 328327.49996446905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225475.816666667,
            "unit": "ns",
            "range": "± 142650.62061738514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3454690.5,
            "unit": "ns",
            "range": "± 170246.25384587926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4433526.481481481,
            "unit": "ns",
            "range": "± 186265.4624497076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3863137.835616438,
            "unit": "ns",
            "range": "± 189772.4002152179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7234366.448275862,
            "unit": "ns",
            "range": "± 302248.6982627881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6447099.904447115,
            "unit": "ns",
            "range": "± 36197.797457200686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1969477.160435268,
            "unit": "ns",
            "range": "± 11064.983752036003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293840.2953725962,
            "unit": "ns",
            "range": "± 5118.105778222491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2720576.0063802083,
            "unit": "ns",
            "range": "± 17290.9626692256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791894.4666015625,
            "unit": "ns",
            "range": "± 6674.274912734729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732316.86640625,
            "unit": "ns",
            "range": "± 5050.486227235989"
          }
        ]
      }
    ]
  }
}