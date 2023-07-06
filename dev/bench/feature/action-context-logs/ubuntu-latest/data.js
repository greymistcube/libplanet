window.BENCHMARK_DATA = {
  "lastUpdate": 1688622076695,
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
          "id": "73a2f0860f2e00cc1be3bd877287d3739e6b2225",
          "message": "Changelog",
          "timestamp": "2023-07-06T14:27:12+09:00",
          "tree_id": "feb40a6a7ede078cb6bcd0f76c2bb0bef7b94ca9",
          "url": "https://github.com/greymistcube/libplanet/commit/73a2f0860f2e00cc1be3bd877287d3739e6b2225"
        },
        "date": 1688622069511,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8126483.333333333,
            "unit": "ns",
            "range": "± 123077.52396974765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22498858.666666668,
            "unit": "ns",
            "range": "± 192718.95650390073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56806307.928571425,
            "unit": "ns",
            "range": "± 574757.3613583473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113921637.53333333,
            "unit": "ns",
            "range": "± 1335510.0263287253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225152893.66666666,
            "unit": "ns",
            "range": "± 1737575.176880071"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50127.10227272727,
            "unit": "ns",
            "range": "± 2591.926115733252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297367.41025641025,
            "unit": "ns",
            "range": "± 9315.242075894947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284408.8387096774,
            "unit": "ns",
            "range": "± 8007.913091006813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253658.5357142857,
            "unit": "ns",
            "range": "± 7026.167373585702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4585648.8,
            "unit": "ns",
            "range": "± 68604.49412309456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4234011.785714285,
            "unit": "ns",
            "range": "± 56277.68612483934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19864.65263157895,
            "unit": "ns",
            "range": "± 1843.596581894997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97204.09677419355,
            "unit": "ns",
            "range": "± 5142.393280718273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82771.71134020618,
            "unit": "ns",
            "range": "± 5242.039450758412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98856.75,
            "unit": "ns",
            "range": "± 7407.67788741755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5603.724489795918,
            "unit": "ns",
            "range": "± 801.8359413993861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20078.78350515464,
            "unit": "ns",
            "range": "± 2300.1362696352912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517381.2857142857,
            "unit": "ns",
            "range": "± 92887.25804819164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2878529.3333333335,
            "unit": "ns",
            "range": "± 90071.41233268283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1952041.119047619,
            "unit": "ns",
            "range": "± 103623.47870639438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5272078.490196078,
            "unit": "ns",
            "range": "± 214511.1240566673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149328.331473215,
            "unit": "ns",
            "range": "± 34625.131902304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912583.8342848558,
            "unit": "ns",
            "range": "± 2394.601068106713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1406480.7819010417,
            "unit": "ns",
            "range": "± 4096.886180671211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2708085.906510417,
            "unit": "ns",
            "range": "± 5182.4743873063635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850759.6277994792,
            "unit": "ns",
            "range": "± 347.5089941732624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778646.6887555803,
            "unit": "ns",
            "range": "± 247.51467291974566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3576836.296296296,
            "unit": "ns",
            "range": "± 99150.40894745363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3772592.1904761903,
            "unit": "ns",
            "range": "± 129423.3040803888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4590669.838709678,
            "unit": "ns",
            "range": "± 140036.3551413458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4269296.888888889,
            "unit": "ns",
            "range": "± 90251.47078800817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6823621.666666667,
            "unit": "ns",
            "range": "± 235055.85946159277"
          }
        ]
      }
    ]
  }
}