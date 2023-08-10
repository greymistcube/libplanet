window.BENCHMARK_DATA = {
  "lastUpdate": 1691651802122,
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
          "id": "04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:03:27+09:00",
          "tree_id": "4b1c486d0920781a82c56ed2b2866158aa607126",
          "url": "https://github.com/greymistcube/libplanet/commit/04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9"
        },
        "date": 1691651794529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290659.7333333334,
            "unit": "ns",
            "range": "± 45935.0686893493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414391.882352941,
            "unit": "ns",
            "range": "± 100331.35037457503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4123136.3571428573,
            "unit": "ns",
            "range": "± 39625.02079127266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3643675.1875,
            "unit": "ns",
            "range": "± 70217.89820097508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5839172.142857143,
            "unit": "ns",
            "range": "± 104254.74572137505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7739475.571428572,
            "unit": "ns",
            "range": "± 20147.065454243762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19690733.866666667,
            "unit": "ns",
            "range": "± 156145.78600455713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50449672.4,
            "unit": "ns",
            "range": "± 320392.44612167217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101682993.26666667,
            "unit": "ns",
            "range": "± 726394.5738785565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200392154,
            "unit": "ns",
            "range": "± 1953027.2542519136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45088.45348837209,
            "unit": "ns",
            "range": "± 2467.2913018935265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4958516.57421875,
            "unit": "ns",
            "range": "± 29049.648245390108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1627773.6136997768,
            "unit": "ns",
            "range": "± 4714.496643762204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068294.1571614584,
            "unit": "ns",
            "range": "± 1061.4646678884053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517595.828450521,
            "unit": "ns",
            "range": "± 1097.7249509554051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816252.7709635417,
            "unit": "ns",
            "range": "± 1151.5881988373535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726953.1909877232,
            "unit": "ns",
            "range": "± 505.87870471051394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265842.4736842105,
            "unit": "ns",
            "range": "± 5828.533886249431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249339,
            "unit": "ns",
            "range": "± 5447.215317939984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214275.3125,
            "unit": "ns",
            "range": "± 4092.4178137746394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4097820.8666666667,
            "unit": "ns",
            "range": "± 29156.071315463283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3812442.5714285714,
            "unit": "ns",
            "range": "± 28023.965687945038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16537.68817204301,
            "unit": "ns",
            "range": "± 1115.8848504807704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79583.32394366198,
            "unit": "ns",
            "range": "± 3856.8045091931735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66246.23076923077,
            "unit": "ns",
            "range": "± 778.4394810394869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73265.09278350516,
            "unit": "ns",
            "range": "± 9695.372509908264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4736.852631578948,
            "unit": "ns",
            "range": "± 428.75847410324326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18407.489361702126,
            "unit": "ns",
            "range": "± 1637.0072729568326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1283062.7283950618,
            "unit": "ns",
            "range": "± 63202.57820057904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2460478.16,
            "unit": "ns",
            "range": "± 57812.195084370665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1617903.3157894737,
            "unit": "ns",
            "range": "± 91739.30016515731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4339379.611111111,
            "unit": "ns",
            "range": "± 128574.08690362761"
          }
        ]
      }
    ]
  }
}