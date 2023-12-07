window.BENCHMARK_DATA = {
  "lastUpdate": 1701938251435,
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
          "id": "9af94f81a831efe724530498c77692279d504295",
          "message": "Updated to test more elaborate cases",
          "timestamp": "2023-12-07T16:13:39+09:00",
          "tree_id": "0fbdbcb4ef02850f4a42e7bd27f95c5da30d81d1",
          "url": "https://github.com/greymistcube/libplanet/commit/9af94f81a831efe724530498c77692279d504295"
        },
        "date": 1701933944778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 910329.0322580645,
            "unit": "ns",
            "range": "± 78610.83781438398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1671025.4237288137,
            "unit": "ns",
            "range": "± 73437.35447403416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1289920.202020202,
            "unit": "ns",
            "range": "± 109015.58677153669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5003329.87012987,
            "unit": "ns",
            "range": "± 256035.54444078298"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34594.444444444445,
            "unit": "ns",
            "range": "± 1713.5655018891096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4984876.923076923,
            "unit": "ns",
            "range": "± 27935.49575498747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13021438.461538462,
            "unit": "ns",
            "range": "± 75578.00097097852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32761385.714285713,
            "unit": "ns",
            "range": "± 921034.9933892952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64691123.07692308,
            "unit": "ns",
            "range": "± 377063.83887843665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127117886.66666667,
            "unit": "ns",
            "range": "± 682472.6879586639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3114760.7421875,
            "unit": "ns",
            "range": "± 9902.593041295271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 995735.9765625,
            "unit": "ns",
            "range": "± 2683.2738708749534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 679702.6785714285,
            "unit": "ns",
            "range": "± 1418.6205419162352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941715.15625,
            "unit": "ns",
            "range": "± 5497.693129835736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612734.1421274039,
            "unit": "ns",
            "range": "± 1626.2087505573973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 546893.2747395834,
            "unit": "ns",
            "range": "± 985.1391644795333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123363.0434782607,
            "unit": "ns",
            "range": "± 81012.24148566315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251239.534883721,
            "unit": "ns",
            "range": "± 78263.66042190755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2729893.3333333335,
            "unit": "ns",
            "range": "± 47475.29382541538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2569491.2280701753,
            "unit": "ns",
            "range": "± 75306.33932882256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5836500,
            "unit": "ns",
            "range": "± 144891.43521961538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168672.22222222222,
            "unit": "ns",
            "range": "± 8250.842419170183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160115.5172413793,
            "unit": "ns",
            "range": "± 6569.835420089756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143626.31578947368,
            "unit": "ns",
            "range": "± 4522.836004013789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2759433.3333333335,
            "unit": "ns",
            "range": "± 31171.911959937508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2559066.6666666665,
            "unit": "ns",
            "range": "± 31527.984545857187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9637.777777777777,
            "unit": "ns",
            "range": "± 923.1818180421154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54191.836734693876,
            "unit": "ns",
            "range": "± 9221.709856317351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44502.94117647059,
            "unit": "ns",
            "range": "± 2140.718988455262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45923.958333333336,
            "unit": "ns",
            "range": "± 7616.778498353648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2243.75,
            "unit": "ns",
            "range": "± 320.79260393101663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9561.827956989247,
            "unit": "ns",
            "range": "± 1072.973262599488"
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
          "id": "d471c63d12510026101fa9360e81bed713ebb110",
          "message": "Fix TxResult query behavior to rely less on IBlockChainIndex and use fallback",
          "timestamp": "2023-12-07T17:23:39+09:00",
          "tree_id": "7e8ecced66d0c1c611d2db9c3e6ddc10ab9e79cd",
          "url": "https://github.com/greymistcube/libplanet/commit/d471c63d12510026101fa9360e81bed713ebb110"
        },
        "date": 1701938226492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963652,
            "unit": "ns",
            "range": "± 130547.90945329712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1673384.8484848484,
            "unit": "ns",
            "range": "± 77058.73931853095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1336832.6530612244,
            "unit": "ns",
            "range": "± 145801.59289183337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5138815.476190476,
            "unit": "ns",
            "range": "± 266601.9059639783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34814.13043478261,
            "unit": "ns",
            "range": "± 2301.7232685051067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5146906.666666667,
            "unit": "ns",
            "range": "± 36792.39957744896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13317514.285714285,
            "unit": "ns",
            "range": "± 141932.33413330268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32344180,
            "unit": "ns",
            "range": "± 351683.2263760751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64289264.28571428,
            "unit": "ns",
            "range": "± 618978.6880973215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130731433.33333333,
            "unit": "ns",
            "range": "± 929296.6500582707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3178314.6484375,
            "unit": "ns",
            "range": "± 7456.417141735173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050072.084263393,
            "unit": "ns",
            "range": "± 7263.560513446077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 687627.1419270834,
            "unit": "ns",
            "range": "± 1282.9969635412745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908919.8939732143,
            "unit": "ns",
            "range": "± 5466.153340677853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609118.9903846154,
            "unit": "ns",
            "range": "± 1777.8200052732384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569492.1549479166,
            "unit": "ns",
            "range": "± 2752.8860983267364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2078959.2592592593,
            "unit": "ns",
            "range": "± 43733.71573212013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237060.714285714,
            "unit": "ns",
            "range": "± 51744.510099109306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2739390.476190476,
            "unit": "ns",
            "range": "± 64374.66042443956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2816837.5,
            "unit": "ns",
            "range": "± 53889.82433323258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6453998,
            "unit": "ns",
            "range": "± 500535.23453005846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184190.72164948453,
            "unit": "ns",
            "range": "± 11858.76155066219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174985.39325842698,
            "unit": "ns",
            "range": "± 11651.565936132574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141796.55172413794,
            "unit": "ns",
            "range": "± 3586.2318822547563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2711050,
            "unit": "ns",
            "range": "± 51935.087689666354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2536885.714285714,
            "unit": "ns",
            "range": "± 35138.57965569724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9205.61797752809,
            "unit": "ns",
            "range": "± 1007.9636932677005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48957.471264367814,
            "unit": "ns",
            "range": "± 2890.8288094524055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43256.818181818184,
            "unit": "ns",
            "range": "± 1623.5759738668062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48669.14893617021,
            "unit": "ns",
            "range": "± 7404.474476872398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2030.9278350515465,
            "unit": "ns",
            "range": "± 252.22378652294572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10991.752577319588,
            "unit": "ns",
            "range": "± 3716.5079404566945"
          }
        ]
      }
    ]
  }
}