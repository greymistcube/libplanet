window.BENCHMARK_DATA = {
  "lastUpdate": 1701933965359,
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
      }
    ]
  }
}