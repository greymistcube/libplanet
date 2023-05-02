window.BENCHMARK_DATA = {
  "lastUpdate": 1683015852630,
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
          "id": "02a90bf9b723dac067810660ba4256f7507d36bd",
          "message": "Removed unnecessary usage of BlockChain<T>.EvaluateAndSign()",
          "timestamp": "2023-05-02T17:09:48+09:00",
          "tree_id": "d747245eadd7dd1eaffb8294c75b033f9a8e9153",
          "url": "https://github.com/greymistcube/libplanet/commit/02a90bf9b723dac067810660ba4256f7507d36bd"
        },
        "date": 1683015845768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284576.0833333333,
            "unit": "ns",
            "range": "± 8342.729855988386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277311.7837837838,
            "unit": "ns",
            "range": "± 9375.26765583888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231187.31578947368,
            "unit": "ns",
            "range": "± 4837.926140318937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4329184.266666667,
            "unit": "ns",
            "range": "± 37690.91502976483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3928544,
            "unit": "ns",
            "range": "± 54195.03552514224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21454.957894736843,
            "unit": "ns",
            "range": "± 1814.92947472024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91939.81720430107,
            "unit": "ns",
            "range": "± 5199.525563528633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79550.96153846153,
            "unit": "ns",
            "range": "± 3259.136785519595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100987.3163265306,
            "unit": "ns",
            "range": "± 16883.7364913462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5961.886597938144,
            "unit": "ns",
            "range": "± 710.6870044231945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19304.516129032258,
            "unit": "ns",
            "range": "± 1540.6376546382346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3451311.1052631577,
            "unit": "ns",
            "range": "± 107381.23365583057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3719381.933333333,
            "unit": "ns",
            "range": "± 110409.75539855078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4203301.466666667,
            "unit": "ns",
            "range": "± 60959.57983060423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4557817.25,
            "unit": "ns",
            "range": "± 159540.90674402326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6759374.238095238,
            "unit": "ns",
            "range": "± 137033.38313962214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5897750.254464285,
            "unit": "ns",
            "range": "± 26063.32615619408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837393.6114583334,
            "unit": "ns",
            "range": "± 1574.8988658091532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377479.523046875,
            "unit": "ns",
            "range": "± 3532.9923766224792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2851024.073958333,
            "unit": "ns",
            "range": "± 6702.348779068702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826687.4375,
            "unit": "ns",
            "range": "± 1114.4278246113465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763372.7662259615,
            "unit": "ns",
            "range": "± 789.7606114865304"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50026.22340425532,
            "unit": "ns",
            "range": "± 3683.711931559683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7950832.642857143,
            "unit": "ns",
            "range": "± 106790.49804432482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21531248.266666666,
            "unit": "ns",
            "range": "± 219394.43221919044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54314477.666666664,
            "unit": "ns",
            "range": "± 475293.5692576396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109092417.86666666,
            "unit": "ns",
            "range": "± 1519840.4144884453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216528850.46666667,
            "unit": "ns",
            "range": "± 1251767.357292758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420417.0344827587,
            "unit": "ns",
            "range": "± 77744.75426668458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700545.9166666665,
            "unit": "ns",
            "range": "± 69096.76507869655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2263133.1166666667,
            "unit": "ns",
            "range": "± 100604.62054929441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5193273.46875,
            "unit": "ns",
            "range": "± 145930.81681001344"
          }
        ]
      }
    ]
  }
}