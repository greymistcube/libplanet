window.BENCHMARK_DATA = {
  "lastUpdate": 1687484575018,
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
          "id": "1af342df243f9b25192e5e3e88e2d2407fe8a1c6",
          "message": "[skip changelog] Housekeeping",
          "timestamp": "2023-06-23T10:21:43+09:00",
          "tree_id": "0a1142c010416a4a2d71e91e847d15ca5bf08133",
          "url": "https://github.com/greymistcube/libplanet/commit/1af342df243f9b25192e5e3e88e2d2407fe8a1c6"
        },
        "date": 1687484552240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9198353.416666666,
            "unit": "ns",
            "range": "± 99284.71778353435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24371468.689655174,
            "unit": "ns",
            "range": "± 2055574.1370317324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61452025.40322581,
            "unit": "ns",
            "range": "± 2489867.8072318877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112716592.6,
            "unit": "ns",
            "range": "± 1678980.9368768819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224869495.2,
            "unit": "ns",
            "range": "± 4006726.4152210914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72689.13978494624,
            "unit": "ns",
            "range": "± 7830.894923025411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385586.0869565217,
            "unit": "ns",
            "range": "± 17861.2778606643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 380700.5888888889,
            "unit": "ns",
            "range": "± 32626.86597906096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331788.9301075269,
            "unit": "ns",
            "range": "± 18855.093827028286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4921401.6,
            "unit": "ns",
            "range": "± 63174.89234520761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4337534.571428572,
            "unit": "ns",
            "range": "± 54867.44718475089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20128.064516129034,
            "unit": "ns",
            "range": "± 1510.0432171072314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100780.75824175825,
            "unit": "ns",
            "range": "± 7597.00541198915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101141.15789473684,
            "unit": "ns",
            "range": "± 14112.943115042342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115041.63917525773,
            "unit": "ns",
            "range": "± 16057.509484911807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6467.69587628866,
            "unit": "ns",
            "range": "± 1130.1911125186532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19306.67021276596,
            "unit": "ns",
            "range": "± 1275.5989159496792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2086614.6091954024,
            "unit": "ns",
            "range": "± 328733.163580736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3920877.4942528736,
            "unit": "ns",
            "range": "± 442421.65516971855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3259182.2282608696,
            "unit": "ns",
            "range": "± 366334.1775952932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12364159.06122449,
            "unit": "ns",
            "range": "± 5527444.386329515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3791068.757575758,
            "unit": "ns",
            "range": "± 112293.05685098875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4390389.642857143,
            "unit": "ns",
            "range": "± 69073.47498871389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5181107.795454546,
            "unit": "ns",
            "range": "± 193855.65087487127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5063991.379746836,
            "unit": "ns",
            "range": "± 258885.92521533018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9111476.916666666,
            "unit": "ns",
            "range": "± 388012.7744866879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7773714.45625,
            "unit": "ns",
            "range": "± 116226.8600557255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2598931.799278846,
            "unit": "ns",
            "range": "± 35801.352528496514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1443568.5922475962,
            "unit": "ns",
            "range": "± 10620.978990991613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2806966.6169084823,
            "unit": "ns",
            "range": "± 30341.61976231512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1072725.0923978365,
            "unit": "ns",
            "range": "± 6748.379969241689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920867.7291165865,
            "unit": "ns",
            "range": "± 6375.418833879594"
          }
        ]
      }
    ]
  }
}