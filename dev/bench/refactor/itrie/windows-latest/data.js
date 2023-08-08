window.BENCHMARK_DATA = {
  "lastUpdate": 1691482747643,
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
          "id": "b1f623b36c98e27c21c226c5817feae3e4ac02d5",
          "message": "Added single get to ITrie; automatic parallel switch",
          "timestamp": "2023-08-08T16:57:00+09:00",
          "tree_id": "d610e24cc0d89f3256b8bdabcfe58ee6378c5b2a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1f623b36c98e27c21c226c5817feae3e4ac02d5"
        },
        "date": 1691482622752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611232.2222222222,
            "unit": "ns",
            "range": "± 87526.67115540021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3022300,
            "unit": "ns",
            "range": "± 110345.95708000561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2063188.5416666667,
            "unit": "ns",
            "range": "± 122864.89702089911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5384283.333333333,
            "unit": "ns",
            "range": "± 156478.9202137603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56451.64835164835,
            "unit": "ns",
            "range": "± 3184.9075562151156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8693555.88235294,
            "unit": "ns",
            "range": "± 147590.84266388378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24263464.285714287,
            "unit": "ns",
            "range": "± 274799.00516879285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60895073.333333336,
            "unit": "ns",
            "range": "± 620013.7964670818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123640553.84615384,
            "unit": "ns",
            "range": "± 1554172.9459830527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245235684.6153846,
            "unit": "ns",
            "range": "± 1916986.92781413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5884658.537946428,
            "unit": "ns",
            "range": "± 46239.215505730645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906415.3776041667,
            "unit": "ns",
            "range": "± 24436.155548907427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1421237.3177083333,
            "unit": "ns",
            "range": "± 15850.152382492763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197534.735576923,
            "unit": "ns",
            "range": "± 20781.361088864913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048868.1380208333,
            "unit": "ns",
            "range": "± 17193.20519608154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932976.3881138393,
            "unit": "ns",
            "range": "± 7616.14073646373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3964053.3333333335,
            "unit": "ns",
            "range": "± 108346.12713137381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4182342.62295082,
            "unit": "ns",
            "range": "± 186196.37882176656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5036722.7272727275,
            "unit": "ns",
            "range": "± 109388.92575540762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4599416.666666667,
            "unit": "ns",
            "range": "± 95968.07220296207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7441935.897435897,
            "unit": "ns",
            "range": "± 242959.23037586224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320988.23529411765,
            "unit": "ns",
            "range": "± 10180.522541386874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303810.71428571426,
            "unit": "ns",
            "range": "± 8614.171755105364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279866.0714285714,
            "unit": "ns",
            "range": "± 12031.750069722182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4965440,
            "unit": "ns",
            "range": "± 63590.83267264237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4530738.461538462,
            "unit": "ns",
            "range": "± 64460.13675729545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24794.736842105263,
            "unit": "ns",
            "range": "± 2296.4991127130984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108305.20833333333,
            "unit": "ns",
            "range": "± 6776.885945184195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93830.52631578948,
            "unit": "ns",
            "range": "± 6721.972128364777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120442.85714285714,
            "unit": "ns",
            "range": "± 15716.666575563113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6824.468085106383,
            "unit": "ns",
            "range": "± 1018.2935515041834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25218.367346938776,
            "unit": "ns",
            "range": "± 2394.596448741384"
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
          "id": "6eee647dbd01c344f9be474baf83bdb2b3df65bb",
          "message": "Changelog",
          "timestamp": "2023-08-08T17:00:50+09:00",
          "tree_id": "bbca0c04749f4b60ee9725e7c713ec8060c5de1f",
          "url": "https://github.com/greymistcube/libplanet/commit/6eee647dbd01c344f9be474baf83bdb2b3df65bb"
        },
        "date": 1691482722914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412235.7894736843,
            "unit": "ns",
            "range": "± 109058.83529797553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2589718.1818181816,
            "unit": "ns",
            "range": "± 80616.3772697019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1803319.587628866,
            "unit": "ns",
            "range": "± 138259.78991797112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4718080.952380952,
            "unit": "ns",
            "range": "± 172180.9091682283"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50097.42268041237,
            "unit": "ns",
            "range": "± 4250.4434274434125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7279510,
            "unit": "ns",
            "range": "± 158129.999484102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20611173.333333332,
            "unit": "ns",
            "range": "± 337379.3402656648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51362880,
            "unit": "ns",
            "range": "± 606908.9578700063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102094723.07692307,
            "unit": "ns",
            "range": "± 901984.5122042896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206838221.42857143,
            "unit": "ns",
            "range": "± 2323977.973276581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5074385.993303572,
            "unit": "ns",
            "range": "± 68581.41785845156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1594780.259486607,
            "unit": "ns",
            "range": "± 14933.440760738258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186495.2473958333,
            "unit": "ns",
            "range": "± 11269.095302681746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2713411.2760416665,
            "unit": "ns",
            "range": "± 33529.70418784424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854338.1417410715,
            "unit": "ns",
            "range": "± 6522.48649706603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777799.0783691406,
            "unit": "ns",
            "range": "± 14456.32336523134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3425588.2352941176,
            "unit": "ns",
            "range": "± 68288.0469258067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3468676.595744681,
            "unit": "ns",
            "range": "± 196746.4688240631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4191793.023255814,
            "unit": "ns",
            "range": "± 141529.21185150777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3788242.8571428573,
            "unit": "ns",
            "range": "± 146618.00139591773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6410404.347826087,
            "unit": "ns",
            "range": "± 244756.9433417766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266785,
            "unit": "ns",
            "range": "± 9344.340121575857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259693.9393939394,
            "unit": "ns",
            "range": "± 8200.912273717608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237161.8556701031,
            "unit": "ns",
            "range": "± 13898.976605753576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4176541.1764705884,
            "unit": "ns",
            "range": "± 67154.40286034426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3892653.3333333335,
            "unit": "ns",
            "range": "± 52628.72472962524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23379.166666666668,
            "unit": "ns",
            "range": "± 2213.400178656628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91053.1914893617,
            "unit": "ns",
            "range": "± 5714.247466943934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77379.38144329897,
            "unit": "ns",
            "range": "± 6218.201410381357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92913.58024691358,
            "unit": "ns",
            "range": "± 6348.124783871608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5698.958333333333,
            "unit": "ns",
            "range": "± 905.3053909467196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20301.08695652174,
            "unit": "ns",
            "range": "± 1765.698477440186"
          }
        ]
      }
    ]
  }
}