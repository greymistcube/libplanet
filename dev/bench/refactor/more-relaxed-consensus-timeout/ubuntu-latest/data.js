window.BENCHMARK_DATA = {
  "lastUpdate": 1700527063683,
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
          "id": "2ae593ded64ac7056f5adb3dd7daa09963e75495",
          "message": "Changed default ContextTimeoutOption values",
          "timestamp": "2023-11-21T09:26:48+09:00",
          "tree_id": "e18ded43cd8ed7dcf96832af16e16975454e9894",
          "url": "https://github.com/greymistcube/libplanet/commit/2ae593ded64ac7056f5adb3dd7daa09963e75495"
        },
        "date": 1700527056627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200269.97297297296,
            "unit": "ns",
            "range": "± 9182.418259649792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194242.61904761905,
            "unit": "ns",
            "range": "± 10325.432711729425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163100.18421052632,
            "unit": "ns",
            "range": "± 3450.533244661558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115810,
            "unit": "ns",
            "range": "± 35535.04462444839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2865359.346153846,
            "unit": "ns",
            "range": "± 26396.705002222512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16371.96875,
            "unit": "ns",
            "range": "± 1085.4208444375267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63670.085106382976,
            "unit": "ns",
            "range": "± 6618.149552409295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61221.880952380954,
            "unit": "ns",
            "range": "± 1391.7281155524047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62581.80927835051,
            "unit": "ns",
            "range": "± 11758.74830300192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3135.412087912088,
            "unit": "ns",
            "range": "± 568.7129064504954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12102.163157894736,
            "unit": "ns",
            "range": "± 1260.9565063324992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3878026.8506610575,
            "unit": "ns",
            "range": "± 6509.214492796172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1153556.5042317708,
            "unit": "ns",
            "range": "± 4420.48121709189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738445.494140625,
            "unit": "ns",
            "range": "± 2731.977123767808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1978546.9026442308,
            "unit": "ns",
            "range": "± 4502.611530377873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624346.846875,
            "unit": "ns",
            "range": "± 13935.051521111585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578167.1244860197,
            "unit": "ns",
            "range": "± 12619.903066311703"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38975.87234042553,
            "unit": "ns",
            "range": "± 4938.58980184016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377674.081081081,
            "unit": "ns",
            "range": "± 53334.79272918819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2540228.6153846155,
            "unit": "ns",
            "range": "± 65445.175834633934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3133401.2,
            "unit": "ns",
            "range": "± 57769.49233214955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2988225.537735849,
            "unit": "ns",
            "range": "± 123852.39755015493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6462032.375,
            "unit": "ns",
            "range": "± 124755.31277337784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5805996.714285715,
            "unit": "ns",
            "range": "± 20475.478114746737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14719770,
            "unit": "ns",
            "range": "± 195538.3907054886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37203590.461538464,
            "unit": "ns",
            "range": "± 94010.55778175076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74895029.73076923,
            "unit": "ns",
            "range": "± 941671.7742745393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153287335.53333333,
            "unit": "ns",
            "range": "± 1493548.3217831987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969462.612244898,
            "unit": "ns",
            "range": "± 94878.46911467308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868636.5666666667,
            "unit": "ns",
            "range": "± 82163.95623682569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1410745.2,
            "unit": "ns",
            "range": "± 125548.58063312182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5804777.4375,
            "unit": "ns",
            "range": "± 374514.2070425525"
          }
        ]
      }
    ]
  }
}