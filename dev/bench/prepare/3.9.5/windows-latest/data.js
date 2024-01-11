window.BENCHMARK_DATA = {
  "lastUpdate": 1704944116621,
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
          "id": "04fdca19947689f211b0611543c82297baee08b4",
          "message": "Prepare 3.9.5",
          "timestamp": "2024-01-11T12:24:04+09:00",
          "tree_id": "203f0a8333f2a961fa901363c5537652e1d0075f",
          "url": "https://github.com/greymistcube/libplanet/commit/04fdca19947689f211b0611543c82297baee08b4"
        },
        "date": 1704944098965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 910163.2653061225,
            "unit": "ns",
            "range": "± 78290.53923404637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1626256.4102564103,
            "unit": "ns",
            "range": "± 56566.58765920222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1276561.855670103,
            "unit": "ns",
            "range": "± 101373.49304603226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5214504.545454546,
            "unit": "ns",
            "range": "± 265878.85426174954"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33632.89473684211,
            "unit": "ns",
            "range": "± 1629.0191861276314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4991253.333333333,
            "unit": "ns",
            "range": "± 32380.74530746114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13087660,
            "unit": "ns",
            "range": "± 180039.9868283234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32280257.14285714,
            "unit": "ns",
            "range": "± 178278.87710544406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64988230.76923077,
            "unit": "ns",
            "range": "± 767675.0380039454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129017907.14285715,
            "unit": "ns",
            "range": "± 367445.82324742514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3348856.971153846,
            "unit": "ns",
            "range": "± 3393.567926930686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047127.0833333334,
            "unit": "ns",
            "range": "± 1521.4359993050987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744361.1628605769,
            "unit": "ns",
            "range": "± 1692.8327788404742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916128.0799278845,
            "unit": "ns",
            "range": "± 2165.4898276500735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633606.8219866072,
            "unit": "ns",
            "range": "± 801.1268729108698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565464.94140625,
            "unit": "ns",
            "range": "± 1229.9328925530115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2125475.806451613,
            "unit": "ns",
            "range": "± 64739.22544970674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266758.3333333335,
            "unit": "ns",
            "range": "± 27687.261867092777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2739713.3333333335,
            "unit": "ns",
            "range": "± 80834.74301413298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2598708.3333333335,
            "unit": "ns",
            "range": "± 85490.87963051966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6285217.333333333,
            "unit": "ns",
            "range": "± 315379.7982241855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 162400,
            "unit": "ns",
            "range": "± 4716.620784831761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154322.0338983051,
            "unit": "ns",
            "range": "± 5949.03839800182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139925,
            "unit": "ns",
            "range": "± 3944.0179738152538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2657550,
            "unit": "ns",
            "range": "± 42241.09828846055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2443153.3333333335,
            "unit": "ns",
            "range": "± 37344.780982978955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9053.012048192772,
            "unit": "ns",
            "range": "± 627.2933241213533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48691.11111111111,
            "unit": "ns",
            "range": "± 2704.12271364244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43118.75,
            "unit": "ns",
            "range": "± 1939.225422197027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47139.17525773196,
            "unit": "ns",
            "range": "± 8877.36537376836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2101.0309278350514,
            "unit": "ns",
            "range": "± 327.7113965826819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8766.666666666666,
            "unit": "ns",
            "range": "± 861.1463486004369"
          }
        ]
      }
    ]
  }
}