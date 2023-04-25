window.BENCHMARK_DATA = {
  "lastUpdate": 1682414562799,
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
          "id": "4ae90c4687157fd081e727e541775595a2de8a89",
          "message": "Additional tool in preparation for adding Registry to ActionTypeLoader",
          "timestamp": "2023-04-25T18:04:40+09:00",
          "tree_id": "7ba5f549a63ce670d2474b5a812ea7f0d4952b89",
          "url": "https://github.com/greymistcube/libplanet/commit/4ae90c4687157fd081e727e541775595a2de8a89"
        },
        "date": 1682414541326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383857,
            "unit": "ns",
            "range": "± 120308.20039306623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2647924.242424242,
            "unit": "ns",
            "range": "± 172280.1367794818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2211930.5263157897,
            "unit": "ns",
            "range": "± 145465.23901041903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5584536.363636363,
            "unit": "ns",
            "range": "± 365175.61429596844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49540.425531914894,
            "unit": "ns",
            "range": "± 3454.3511333475344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7237057.142857143,
            "unit": "ns",
            "range": "± 112107.20634413167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19846700,
            "unit": "ns",
            "range": "± 160135.42483071724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49975286.666666664,
            "unit": "ns",
            "range": "± 379255.9028011612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99917878.57142857,
            "unit": "ns",
            "range": "± 1260794.784850213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200942520,
            "unit": "ns",
            "range": "± 1501427.268206584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4742958.958333333,
            "unit": "ns",
            "range": "± 20825.928335165227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527101.5625,
            "unit": "ns",
            "range": "± 5494.887986167242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1222547.4190848214,
            "unit": "ns",
            "range": "± 3017.6993256448745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631803.292410714,
            "unit": "ns",
            "range": "± 5328.3339235847125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869385.8984375,
            "unit": "ns",
            "range": "± 2639.5238465316456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761586.1853966346,
            "unit": "ns",
            "range": "± 931.7305411978273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222614.814814815,
            "unit": "ns",
            "range": "± 87815.67103753224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409240,
            "unit": "ns",
            "range": "± 46820.261181916285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3960361.111111111,
            "unit": "ns",
            "range": "± 83892.91590992222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4407531.25,
            "unit": "ns",
            "range": "± 72822.98830039866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6739690.909090909,
            "unit": "ns",
            "range": "± 209580.15376526644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270478.26086956525,
            "unit": "ns",
            "range": "± 10427.69630558667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252224.32432432432,
            "unit": "ns",
            "range": "± 8527.029097242792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208511.76470588235,
            "unit": "ns",
            "range": "± 4262.7576685962895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4003984.6153846155,
            "unit": "ns",
            "range": "± 45123.715977185915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3528340,
            "unit": "ns",
            "range": "± 61699.33780612468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21314.285714285714,
            "unit": "ns",
            "range": "± 2220.023683350963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90131.81818181818,
            "unit": "ns",
            "range": "± 8138.80053886952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79670.52631578948,
            "unit": "ns",
            "range": "± 6202.982701966518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96667.74193548386,
            "unit": "ns",
            "range": "± 12023.33023108499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7371.428571428572,
            "unit": "ns",
            "range": "± 1036.250178764612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19416.494845360823,
            "unit": "ns",
            "range": "± 1855.6602830018894"
          }
        ]
      }
    ]
  }
}