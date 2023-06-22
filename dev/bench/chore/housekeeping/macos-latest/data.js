window.BENCHMARK_DATA = {
  "lastUpdate": 1687440838750,
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
          "id": "76832be1dd36f1c70b3da27dec6ee5d77d0869b1",
          "message": "Housekeeping",
          "timestamp": "2023-06-22T22:07:03+09:00",
          "tree_id": "355d07e94a01d318834dec7b59c143d0d1548a98",
          "url": "https://github.com/greymistcube/libplanet/commit/76832be1dd36f1c70b3da27dec6ee5d77d0869b1"
        },
        "date": 1687440808857,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10010359.43478261,
            "unit": "ns",
            "range": "± 560082.7459344746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23592281.152941175,
            "unit": "ns",
            "range": "± 1707745.9894145245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57300344.58,
            "unit": "ns",
            "range": "± 2303103.427247156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112737765.9923077,
            "unit": "ns",
            "range": "± 4819811.58344784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243324840.73863637,
            "unit": "ns",
            "range": "± 13319395.569990383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87527.74725274726,
            "unit": "ns",
            "range": "± 11260.965511785891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394444.68131868134,
            "unit": "ns",
            "range": "± 45263.51727971045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370800.2967032967,
            "unit": "ns",
            "range": "± 45369.44345175616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 371956.57446808513,
            "unit": "ns",
            "range": "± 40421.79107045922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4700316.0125,
            "unit": "ns",
            "range": "± 244320.19026383557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4421747.157303371,
            "unit": "ns",
            "range": "± 554270.8570317834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28060.763157894737,
            "unit": "ns",
            "range": "± 4612.706749585407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133309.09782608695,
            "unit": "ns",
            "range": "± 14278.774615029415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131429.13218390805,
            "unit": "ns",
            "range": "± 12852.133887716443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142338.81720430107,
            "unit": "ns",
            "range": "± 25387.666366182035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9053.111111111111,
            "unit": "ns",
            "range": "± 819.3728684963671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26828.892473118278,
            "unit": "ns",
            "range": "± 3193.093002575232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2012069.3636363635,
            "unit": "ns",
            "range": "± 341560.2650565467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3398621.2291666665,
            "unit": "ns",
            "range": "± 295255.82380232407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2968249.5531914895,
            "unit": "ns",
            "range": "± 374427.08474901714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8584803.81443299,
            "unit": "ns",
            "range": "± 1818658.6319897645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3649225.56185567,
            "unit": "ns",
            "range": "± 364648.36288899084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3807310.625,
            "unit": "ns",
            "range": "± 314798.6030042033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4861539.534090909,
            "unit": "ns",
            "range": "± 288788.2191591708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4983834.607526882,
            "unit": "ns",
            "range": "± 540427.213773842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8481810.288888888,
            "unit": "ns",
            "range": "± 570454.8254123313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7685645.925085616,
            "unit": "ns",
            "range": "± 350072.22804182436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2219937.91457648,
            "unit": "ns",
            "range": "± 89252.12573685004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1429700.7156862745,
            "unit": "ns",
            "range": "± 57935.73083029289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3155315.260056516,
            "unit": "ns",
            "range": "± 179276.9607559567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 910413.3715543927,
            "unit": "ns",
            "range": "± 37305.319607872814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 922133.4604166667,
            "unit": "ns",
            "range": "± 46542.54457273562"
          }
        ]
      }
    ]
  }
}