window.BENCHMARK_DATA = {
  "lastUpdate": 1702517420590,
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
          "id": "12c4fdea1532e2402db242e451b1655bdbe69092",
          "message": "Updated tests",
          "timestamp": "2023-12-13T09:33:00+09:00",
          "tree_id": "85070767558264a9019ca1c00801a3da551959e4",
          "url": "https://github.com/greymistcube/libplanet/commit/12c4fdea1532e2402db242e451b1655bdbe69092"
        },
        "date": 1702517011882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214785.12105263158,
            "unit": "ns",
            "range": "± 12997.94792410902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209044.5164835165,
            "unit": "ns",
            "range": "± 12703.900527320679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175841.16091954024,
            "unit": "ns",
            "range": "± 9624.465866029239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3160165.933333333,
            "unit": "ns",
            "range": "± 39059.79840754552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2933800.6666666665,
            "unit": "ns",
            "range": "± 57670.187706627476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18380.408163265307,
            "unit": "ns",
            "range": "± 3375.891640406683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88518.29166666667,
            "unit": "ns",
            "range": "± 13157.826408976975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102019.75862068965,
            "unit": "ns",
            "range": "± 2686.063937319709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94716.56842105264,
            "unit": "ns",
            "range": "± 11258.944323980002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7004.96875,
            "unit": "ns",
            "range": "± 1816.0127315408395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17662.79292929293,
            "unit": "ns",
            "range": "± 4695.03210580517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43227.617021276594,
            "unit": "ns",
            "range": "± 5677.588764108476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067664.7395833333,
            "unit": "ns",
            "range": "± 92083.12063145019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1998225.3196721312,
            "unit": "ns",
            "range": "± 84913.14735236001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1558068.0416666667,
            "unit": "ns",
            "range": "± 107153.41657641275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5949440.1486486485,
            "unit": "ns",
            "range": "± 200268.7047717552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2579935.4365079366,
            "unit": "ns",
            "range": "± 115885.69642580001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2716287.2,
            "unit": "ns",
            "range": "± 30792.822891056938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3315624,
            "unit": "ns",
            "range": "± 43061.92671562129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3182046.1666666665,
            "unit": "ns",
            "range": "± 146158.41895067587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7082248.741935484,
            "unit": "ns",
            "range": "± 184630.3795540282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5902722.916666667,
            "unit": "ns",
            "range": "± 43243.0913062387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14882433.576923076,
            "unit": "ns",
            "range": "± 68137.72856680497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37392189.428571425,
            "unit": "ns",
            "range": "± 276842.7934602581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75893386.76923077,
            "unit": "ns",
            "range": "± 660881.8783416285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150343991.23076922,
            "unit": "ns",
            "range": "± 1040786.5218708521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728972.7879464286,
            "unit": "ns",
            "range": "± 26588.600867078952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212337.2785993305,
            "unit": "ns",
            "range": "± 3332.5199738434485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772084.0970865885,
            "unit": "ns",
            "range": "± 4347.44217547059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959185.4254807692,
            "unit": "ns",
            "range": "± 13276.259077481465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626257.6910807291,
            "unit": "ns",
            "range": "± 4050.602727483309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591322.6735491072,
            "unit": "ns",
            "range": "± 1451.1430386645504"
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
          "id": "94ab506bcd153ff3d15d4961f03b4c20e94ab411",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:19:12+09:00",
          "tree_id": "0121cc3330c21941378a8b93fc4bb14de81402ba",
          "url": "https://github.com/greymistcube/libplanet/commit/94ab506bcd153ff3d15d4961f03b4c20e94ab411"
        },
        "date": 1702517412653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199436.28169014084,
            "unit": "ns",
            "range": "± 9737.19331691354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192955.2528735632,
            "unit": "ns",
            "range": "± 10559.577902084682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164150.93333333332,
            "unit": "ns",
            "range": "± 2388.24656141179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3052562.785714286,
            "unit": "ns",
            "range": "± 42030.83962297313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800884.785714286,
            "unit": "ns",
            "range": "± 42533.133023523005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19816.305263157894,
            "unit": "ns",
            "range": "± 4831.507773280498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65895.59677419355,
            "unit": "ns",
            "range": "± 6709.883670449715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56127.010416666664,
            "unit": "ns",
            "range": "± 7047.120239008856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65116.46464646464,
            "unit": "ns",
            "range": "± 16352.098590471893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5734.030612244898,
            "unit": "ns",
            "range": "± 650.8047231797134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13296.469387755102,
            "unit": "ns",
            "range": "± 2698.838452723429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41930.65789473684,
            "unit": "ns",
            "range": "± 6012.673217420424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942492.7362637363,
            "unit": "ns",
            "range": "± 79870.86496795733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844989.4411764706,
            "unit": "ns",
            "range": "± 84555.48096807656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1412889.0612244897,
            "unit": "ns",
            "range": "± 122633.43223370571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6013745.670454546,
            "unit": "ns",
            "range": "± 330509.0326907534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2342515.282608696,
            "unit": "ns",
            "range": "± 56754.15332575511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486875.4183673467,
            "unit": "ns",
            "range": "± 96759.88856288297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101745.8076923075,
            "unit": "ns",
            "range": "± 29077.48253484305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2944003.6507936507,
            "unit": "ns",
            "range": "± 134676.2184470542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6942842.736842105,
            "unit": "ns",
            "range": "± 235013.46085101616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5573944.142857143,
            "unit": "ns",
            "range": "± 15949.74086048057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14136172.233333332,
            "unit": "ns",
            "range": "± 97421.07298472563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36089498.07692308,
            "unit": "ns",
            "range": "± 286573.61473725544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73339717.38461539,
            "unit": "ns",
            "range": "± 635727.5862370268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149549337.69230768,
            "unit": "ns",
            "range": "± 1017007.5892674371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3821201.4916992188,
            "unit": "ns",
            "range": "± 70563.93115640762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222075.0685096155,
            "unit": "ns",
            "range": "± 2024.50142000595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774058.197265625,
            "unit": "ns",
            "range": "± 2996.9540646822547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927216.8317307692,
            "unit": "ns",
            "range": "± 2615.579726474746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619569.0176532452,
            "unit": "ns",
            "range": "± 1329.1792899735428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572865.8701923077,
            "unit": "ns",
            "range": "± 2916.8550229626317"
          }
        ]
      }
    ]
  }
}