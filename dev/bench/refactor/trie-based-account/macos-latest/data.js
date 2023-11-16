window.BENCHMARK_DATA = {
  "lastUpdate": 1700147315291,
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
          "id": "230112d213d64abb0a6d51bbb0b61790bd7cd397",
          "message": "Remove unnecessary extensions",
          "timestamp": "2023-11-16T22:21:59+09:00",
          "tree_id": "4940d84801c8aca15903cc63aa02253da0eac664",
          "url": "https://github.com/greymistcube/libplanet/commit/230112d213d64abb0a6d51bbb0b61790bd7cd397"
        },
        "date": 1700147300929,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8617357.261363637,
            "unit": "ns",
            "range": "± 514796.639573973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21351353.411764707,
            "unit": "ns",
            "range": "± 413391.9872442587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54211940.78181818,
            "unit": "ns",
            "range": "± 2289074.6269590454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102184020.03846154,
            "unit": "ns",
            "range": "± 689038.9026353562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210679471.08333334,
            "unit": "ns",
            "range": "± 718074.4601707666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67750.39247311828,
            "unit": "ns",
            "range": "± 9011.51465512966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356225.29292929295,
            "unit": "ns",
            "range": "± 53372.64032450741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327926.6770833333,
            "unit": "ns",
            "range": "± 33193.00437235305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305064.8918918919,
            "unit": "ns",
            "range": "± 15157.936185123028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4393376.591836735,
            "unit": "ns",
            "range": "± 358760.5125632144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3919316.7441860465,
            "unit": "ns",
            "range": "± 211826.6901573457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23652.36842105263,
            "unit": "ns",
            "range": "± 3850.0436307354535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116279.69191919192,
            "unit": "ns",
            "range": "± 21469.75206964857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113120.06060606061,
            "unit": "ns",
            "range": "± 5276.991091605686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130740.77083333333,
            "unit": "ns",
            "range": "± 23379.160263375878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9131.083333333334,
            "unit": "ns",
            "range": "± 1365.9271974640267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27456.41208791209,
            "unit": "ns",
            "range": "± 6556.2152016207765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415031.3181818181,
            "unit": "ns",
            "range": "± 139285.71332749916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2749299.597938144,
            "unit": "ns",
            "range": "± 159208.9080412941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105036.5757575757,
            "unit": "ns",
            "range": "± 193076.71366859102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20873002.51010101,
            "unit": "ns",
            "range": "± 2449797.5437490144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230505.6785714286,
            "unit": "ns",
            "range": "± 72920.66775361837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3348477.6951219514,
            "unit": "ns",
            "range": "± 148648.41860559076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4393466.633333334,
            "unit": "ns",
            "range": "± 130519.44696044692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4070125.59375,
            "unit": "ns",
            "range": "± 187783.62032282428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23062937.840206187,
            "unit": "ns",
            "range": "± 3047182.565760692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6550842.323102678,
            "unit": "ns",
            "range": "± 115383.10106306605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1761247.2798978365,
            "unit": "ns",
            "range": "± 21643.436261226427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1108736.4229266827,
            "unit": "ns",
            "range": "± 11712.750522028216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032217.2565104165,
            "unit": "ns",
            "range": "± 38394.71192573379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808955.6780215993,
            "unit": "ns",
            "range": "± 16344.753235176318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779451.3298527644,
            "unit": "ns",
            "range": "± 6576.424725748473"
          }
        ]
      }
    ]
  }
}