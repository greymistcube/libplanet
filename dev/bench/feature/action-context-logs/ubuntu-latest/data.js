window.BENCHMARK_DATA = {
  "lastUpdate": 1688621716066,
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
          "id": "53865623b75169fd62a87bd0c1fbb9e6a4741632",
          "message": "Expose Logs for ActionContext",
          "timestamp": "2023-07-06T14:21:34+09:00",
          "tree_id": "7d248476019cf58680d210b23add1a089dcb8e18",
          "url": "https://github.com/greymistcube/libplanet/commit/53865623b75169fd62a87bd0c1fbb9e6a4741632"
        },
        "date": 1688621708652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8401697.333333334,
            "unit": "ns",
            "range": "± 136196.48320699172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22684514.933333334,
            "unit": "ns",
            "range": "± 287339.7753781268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56558657.06666667,
            "unit": "ns",
            "range": "± 251375.55500669475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111738420.53333333,
            "unit": "ns",
            "range": "± 713408.161940661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222208453.4,
            "unit": "ns",
            "range": "± 1214291.8598469999"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49434.8,
            "unit": "ns",
            "range": "± 2591.4763174294044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294829.3333333333,
            "unit": "ns",
            "range": "± 9348.21916119398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275982.6904761905,
            "unit": "ns",
            "range": "± 8319.15128318929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254159.52,
            "unit": "ns",
            "range": "± 10255.90244636657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4503610.384615385,
            "unit": "ns",
            "range": "± 57247.68533099317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4048375.2666666666,
            "unit": "ns",
            "range": "± 43390.262130816314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21641.978723404256,
            "unit": "ns",
            "range": "± 1575.6753048166695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91732.15555555555,
            "unit": "ns",
            "range": "± 5114.241815393276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78291.04615384615,
            "unit": "ns",
            "range": "± 3670.6449809211376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97207.3469387755,
            "unit": "ns",
            "range": "± 13772.174705754182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6522.052083333333,
            "unit": "ns",
            "range": "± 829.4838771922754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20141.104166666668,
            "unit": "ns",
            "range": "± 1828.8933926466755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470340.0736842104,
            "unit": "ns",
            "range": "± 83417.75360506772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770993.193548387,
            "unit": "ns",
            "range": "± 82226.23074519036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1915125.8775510204,
            "unit": "ns",
            "range": "± 118922.7915494881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5089657.918918919,
            "unit": "ns",
            "range": "± 169990.569446167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5980241.017857143,
            "unit": "ns",
            "range": "± 17149.4770559263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851421.9765625,
            "unit": "ns",
            "range": "± 2123.8126942893496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367542.3368489584,
            "unit": "ns",
            "range": "± 2719.5137464188633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634345.6155133927,
            "unit": "ns",
            "range": "± 1367.677478772165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839216.0354567308,
            "unit": "ns",
            "range": "± 1096.0639350333695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756025.9601702009,
            "unit": "ns",
            "range": "± 246.81957546602985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3689670.1428571427,
            "unit": "ns",
            "range": "± 63260.8374368281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3822595.8,
            "unit": "ns",
            "range": "± 68890.83781420326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4569281.176470588,
            "unit": "ns",
            "range": "± 89319.81793759104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4235662.326530612,
            "unit": "ns",
            "range": "± 164576.4469729022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6714697.586206896,
            "unit": "ns",
            "range": "± 185274.84051991464"
          }
        ]
      }
    ]
  }
}