window.BENCHMARK_DATA = {
  "lastUpdate": 1678780484994,
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
          "id": "510663df583cb592fdb5d5cfef7657221fcdc407",
          "message": "Updated Validator bencoding",
          "timestamp": "2023-03-14T16:30:26+09:00",
          "tree_id": "ee01ffd92a2e7274fd6bf935fa718bd6afb0f9a5",
          "url": "https://github.com/greymistcube/libplanet/commit/510663df583cb592fdb5d5cfef7657221fcdc407"
        },
        "date": 1678779886233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94340.47619047618,
            "unit": "ns",
            "range": "± 3444.901465815151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4751738.802083333,
            "unit": "ns",
            "range": "± 41482.25806185062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503524.7200520833,
            "unit": "ns",
            "range": "± 3765.6915978958964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127956.328125,
            "unit": "ns",
            "range": "± 4354.788630785226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2495423.984375,
            "unit": "ns",
            "range": "± 8083.205984619034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783616.0606971154,
            "unit": "ns",
            "range": "± 874.2708552486101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759939.4466145834,
            "unit": "ns",
            "range": "± 1115.4012256217652"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3795527.6041666665,
            "unit": "ns",
            "range": "± 18521.76638518212"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5512138.461538462,
            "unit": "ns",
            "range": "± 51374.59713486063"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22071640,
            "unit": "ns",
            "range": "± 404172.8127564106"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5421683.098591549,
            "unit": "ns",
            "range": "± 224391.61557160065"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25430764.285714287,
            "unit": "ns",
            "range": "± 298937.4274818236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96756.25,
            "unit": "ns",
            "range": "± 11175.234013798454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201632.7868852459,
            "unit": "ns",
            "range": "± 8623.23839616872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194508.16326530612,
            "unit": "ns",
            "range": "± 7711.161735181182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3474538.4615384615,
            "unit": "ns",
            "range": "± 20897.70874448275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8758173.333333334,
            "unit": "ns",
            "range": "± 46890.63974012399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23301.052631578947,
            "unit": "ns",
            "range": "± 2449.1637624908467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55742.528735632186,
            "unit": "ns",
            "range": "± 5775.240500054261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44769,
            "unit": "ns",
            "range": "± 7714.405978165759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83917.8947368421,
            "unit": "ns",
            "range": "± 18166.60473053813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3874.1176470588234,
            "unit": "ns",
            "range": "± 431.26418297629044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18029,
            "unit": "ns",
            "range": "± 2773.6237828676203"
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
          "id": "b6413304ea412b7c269267638fb026072a223a4c",
          "message": "Changelog",
          "timestamp": "2023-03-14T16:33:49+09:00",
          "tree_id": "e3a77857dea38365cbc1f77c5f33825d3a97df54",
          "url": "https://github.com/greymistcube/libplanet/commit/b6413304ea412b7c269267638fb026072a223a4c"
        },
        "date": 1678780061316,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94258.82352941176,
            "unit": "ns",
            "range": "± 1902.9775430655416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4270174.791666667,
            "unit": "ns",
            "range": "± 20176.117683775887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1350280.3125,
            "unit": "ns",
            "range": "± 9127.643636191337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033350.390625,
            "unit": "ns",
            "range": "± 5366.037225361243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2330094.140625,
            "unit": "ns",
            "range": "± 6569.8891693403675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 734753.6733774039,
            "unit": "ns",
            "range": "± 1528.271752204219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 669780.0455729166,
            "unit": "ns",
            "range": "± 2239.274243423704"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4226599.53125,
            "unit": "ns",
            "range": "± 35328.39914730864"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4641936.046511628,
            "unit": "ns",
            "range": "± 251746.36718579454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22902159.375,
            "unit": "ns",
            "range": "± 685395.1621483559"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5158633.333333333,
            "unit": "ns",
            "range": "± 224085.6686733043"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25673495.454545453,
            "unit": "ns",
            "range": "± 626390.8003317575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82961.29032258065,
            "unit": "ns",
            "range": "± 7180.5448542521535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178088.77551020408,
            "unit": "ns",
            "range": "± 14535.26733236481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153907.22891566265,
            "unit": "ns",
            "range": "± 8175.898296771657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3177258.8235294116,
            "unit": "ns",
            "range": "± 60394.28841810633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 7703675,
            "unit": "ns",
            "range": "± 155265.4530829464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19804.123711340206,
            "unit": "ns",
            "range": "± 2635.2149471854123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49246,
            "unit": "ns",
            "range": "± 8261.428203379604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37808.333333333336,
            "unit": "ns",
            "range": "± 1242.4342466073836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94625.26315789473,
            "unit": "ns",
            "range": "± 17375.869599674857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5601.0204081632655,
            "unit": "ns",
            "range": "± 812.3397412716654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20140.625,
            "unit": "ns",
            "range": "± 2424.1147326069586"
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
          "id": "226c7fdd527bac7375ee204bec6940f0be2d6ec0",
          "message": "Updated Validator bencoding",
          "timestamp": "2023-03-14T16:36:08+09:00",
          "tree_id": "01f6ba45b937da56e7e2ab5e83cb6dc8ec80f2e4",
          "url": "https://github.com/greymistcube/libplanet/commit/226c7fdd527bac7375ee204bec6940f0be2d6ec0"
        },
        "date": 1678780454139,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121732.75862068965,
            "unit": "ns",
            "range": "± 3528.5639496540275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5727020.1171875,
            "unit": "ns",
            "range": "± 93611.69501142357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834136.6489955357,
            "unit": "ns",
            "range": "± 11895.932572412526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367825.64453125,
            "unit": "ns",
            "range": "± 23482.208865981436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3062294.0011160714,
            "unit": "ns",
            "range": "± 24588.770194747623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975502.9724121094,
            "unit": "ns",
            "range": "± 18761.62726879777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906221.9848632812,
            "unit": "ns",
            "range": "± 16858.39646766325"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5267006.662570225,
            "unit": "ns",
            "range": "± 290358.8955401344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6023001.020408163,
            "unit": "ns",
            "range": "± 434233.2594438103"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30692211.111111112,
            "unit": "ns",
            "range": "± 1852951.9453601753"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6646722.7272727275,
            "unit": "ns",
            "range": "± 227628.0737004446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35634520.202020206,
            "unit": "ns",
            "range": "± 2400907.940205708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103452.22222222222,
            "unit": "ns",
            "range": "± 8817.12108455619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224118.6813186813,
            "unit": "ns",
            "range": "± 22197.101472879604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196001.05263157896,
            "unit": "ns",
            "range": "± 15559.969744657192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4068956.179775281,
            "unit": "ns",
            "range": "± 224872.83828616652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10429846.666666666,
            "unit": "ns",
            "range": "± 169710.59764310817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22892.222222222223,
            "unit": "ns",
            "range": "± 2694.062459248502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58263.09523809524,
            "unit": "ns",
            "range": "± 5548.076400866931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44844.444444444445,
            "unit": "ns",
            "range": "± 1480.7178166434182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106479.56989247311,
            "unit": "ns",
            "range": "± 17259.122094277296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6361.224489795918,
            "unit": "ns",
            "range": "± 888.6028246706304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22467.058823529413,
            "unit": "ns",
            "range": "± 2249.9940865157273"
          }
        ]
      }
    ]
  }
}