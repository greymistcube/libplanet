window.BENCHMARK_DATA = {
  "lastUpdate": 1682404148174,
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
          "id": "4d274668f6e5f59f976c213633050e5f9f0b6354",
          "message": "More generic action type attribute",
          "timestamp": "2023-04-25T15:05:55+09:00",
          "tree_id": "25a1af8f6e05b1ac97500b0c46b20ad00c536bb8",
          "url": "https://github.com/greymistcube/libplanet/commit/4d274668f6e5f59f976c213633050e5f9f0b6354"
        },
        "date": 1682404129023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8988069.214285715,
            "unit": "ns",
            "range": "± 749297.0491736198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22574927.125,
            "unit": "ns",
            "range": "± 1840822.5538720458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57726210.421686746,
            "unit": "ns",
            "range": "± 3772363.9024910284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124121221.2721519,
            "unit": "ns",
            "range": "± 20296686.379163824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224756943.54545453,
            "unit": "ns",
            "range": "± 5439817.532890495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71906.35483870968,
            "unit": "ns",
            "range": "± 8404.811662330252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441337.0268817204,
            "unit": "ns",
            "range": "± 91047.51846409313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 400300.06382978725,
            "unit": "ns",
            "range": "± 50939.85827874129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 383086.73913043475,
            "unit": "ns",
            "range": "± 63654.23335246008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4921385.841176471,
            "unit": "ns",
            "range": "± 597274.8018743042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4483657.829545454,
            "unit": "ns",
            "range": "± 792510.4956113327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25955.072916666668,
            "unit": "ns",
            "range": "± 6245.078316890899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117439.20408163265,
            "unit": "ns",
            "range": "± 19654.930368691912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126191.81868131868,
            "unit": "ns",
            "range": "± 18446.15639691738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145152.42222222223,
            "unit": "ns",
            "range": "± 21773.65606217999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10443.25,
            "unit": "ns",
            "range": "± 2202.1838443260194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24357.032608695652,
            "unit": "ns",
            "range": "± 6251.128823688852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704906.5204081633,
            "unit": "ns",
            "range": "± 199142.29091436934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3130628.011235955,
            "unit": "ns",
            "range": "± 172237.5014013086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2720055.5729166665,
            "unit": "ns",
            "range": "± 333986.37335856253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8162233.925531914,
            "unit": "ns",
            "range": "± 1005841.7227311479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3610890.652631579,
            "unit": "ns",
            "range": "± 350994.0463352064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4139675.3020833335,
            "unit": "ns",
            "range": "± 405812.1731616765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5208391.785714285,
            "unit": "ns",
            "range": "± 545856.9939208004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5200731.458762887,
            "unit": "ns",
            "range": "± 622216.7281130145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9009845.659793815,
            "unit": "ns",
            "range": "± 766208.2310593387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7250976.6842927635,
            "unit": "ns",
            "range": "± 555549.7981243829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2088088.2456430288,
            "unit": "ns",
            "range": "± 26275.3064808777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322840.8899739583,
            "unit": "ns",
            "range": "± 16794.442175320353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591843.056082589,
            "unit": "ns",
            "range": "± 43555.858026943526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937689.6038161058,
            "unit": "ns",
            "range": "± 13920.543322703175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810411.5345830503,
            "unit": "ns",
            "range": "± 29544.61719051205"
          }
        ]
      }
    ]
  }
}