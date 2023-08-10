window.BENCHMARK_DATA = {
  "lastUpdate": 1691651955177,
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
          "id": "3789e108ccadf24637956b134961a96a602565c6",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:05:36+09:00",
          "tree_id": "b878dcdafcb1e7623fb1d36600d7e92799bba72d",
          "url": "https://github.com/greymistcube/libplanet/commit/3789e108ccadf24637956b134961a96a602565c6"
        },
        "date": 1691651947913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3674144.846153846,
            "unit": "ns",
            "range": "± 93677.30774213883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3710605.9411764704,
            "unit": "ns",
            "range": "± 76173.8658944708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4449503.375,
            "unit": "ns",
            "range": "± 155614.2744107822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4181923.263157895,
            "unit": "ns",
            "range": "± 88902.44300220459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6523316.310344827,
            "unit": "ns",
            "range": "± 171374.88840469506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8272161.681818182,
            "unit": "ns",
            "range": "± 201513.8259045852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22525174,
            "unit": "ns",
            "range": "± 195913.3757385792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57208024.86666667,
            "unit": "ns",
            "range": "± 751531.1143759277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113451852.28571428,
            "unit": "ns",
            "range": "± 1161216.0519949254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233355041.2857143,
            "unit": "ns",
            "range": "± 1316175.3995519003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47684.10447761194,
            "unit": "ns",
            "range": "± 2284.933876997839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5379257.750520834,
            "unit": "ns",
            "range": "± 26229.653031175607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582870.710658482,
            "unit": "ns",
            "range": "± 2241.579952756442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1096764.3536551339,
            "unit": "ns",
            "range": "± 967.5512314034509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606788.8604166666,
            "unit": "ns",
            "range": "± 1905.878268605674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825160.4018179086,
            "unit": "ns",
            "range": "± 350.85126492876657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775485.6056941106,
            "unit": "ns",
            "range": "± 240.0572258415861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290508.3214285714,
            "unit": "ns",
            "range": "± 7920.157354654437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273471.3396226415,
            "unit": "ns",
            "range": "± 10155.401268334985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248314.65384615384,
            "unit": "ns",
            "range": "± 10223.179298822224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4454088.933333334,
            "unit": "ns",
            "range": "± 77337.76969009447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4166713.7333333334,
            "unit": "ns",
            "range": "± 44669.46963365897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21418.255319148935,
            "unit": "ns",
            "range": "± 2077.5949957509165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86752.07777777778,
            "unit": "ns",
            "range": "± 5440.853372482017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69762.23076923077,
            "unit": "ns",
            "range": "± 963.806010378139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87427.48979591837,
            "unit": "ns",
            "range": "± 13756.00871690195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5402.15625,
            "unit": "ns",
            "range": "± 656.1471325392451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19749.177083333332,
            "unit": "ns",
            "range": "± 2025.9577487920008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496164.5416666667,
            "unit": "ns",
            "range": "± 89778.76988170382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2820019.9210526315,
            "unit": "ns",
            "range": "± 96204.32004835631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1863808.5185185184,
            "unit": "ns",
            "range": "± 91499.35059771067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4797850.576923077,
            "unit": "ns",
            "range": "± 122688.83078134636"
          }
        ]
      }
    ]
  }
}