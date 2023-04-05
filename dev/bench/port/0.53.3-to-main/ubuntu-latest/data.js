window.BENCHMARK_DATA = {
  "lastUpdate": 1680661797500,
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
          "id": "fb76686b4182016bc58f8f9c7ddcaad65f667177",
          "message": "Merge tag '0.53.3' into port/0.53.4-to-main",
          "timestamp": "2023-04-05T11:13:46+09:00",
          "tree_id": "59bc08dfe2b68ab052100fa319209ce2d4dc57b2",
          "url": "https://github.com/greymistcube/libplanet/commit/fb76686b4182016bc58f8f9c7ddcaad65f667177"
        },
        "date": 1680661631019,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250979.5483870967,
            "unit": "ns",
            "range": "± 96791.3731802715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447554.0322580645,
            "unit": "ns",
            "range": "± 97576.79201138075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4217606.6875,
            "unit": "ns",
            "range": "± 72521.62026937783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4419623.216216216,
            "unit": "ns",
            "range": "± 147430.52332429052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7493743.388888889,
            "unit": "ns",
            "range": "± 127609.23589206825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7559425.75,
            "unit": "ns",
            "range": "± 18911.68290730266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20499552.75,
            "unit": "ns",
            "range": "± 195623.6029750291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50979434.428571425,
            "unit": "ns",
            "range": "± 640779.033010446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101207730.71428572,
            "unit": "ns",
            "range": "± 707503.9869134121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200239516.07142857,
            "unit": "ns",
            "range": "± 1102489.2139210366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354304.4387755103,
            "unit": "ns",
            "range": "± 86389.71874026438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606248.2258064514,
            "unit": "ns",
            "range": "± 78976.33896246381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169241.5,
            "unit": "ns",
            "range": "± 97985.05512271573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5415843.735294118,
            "unit": "ns",
            "range": "± 160904.69930766922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49080.873239436616,
            "unit": "ns",
            "range": "± 2405.2397203342625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5785848.108854166,
            "unit": "ns",
            "range": "± 28566.316679333486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821168.5425502232,
            "unit": "ns",
            "range": "± 2770.8958839382035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348824.888671875,
            "unit": "ns",
            "range": "± 7383.395411646043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578268.080208333,
            "unit": "ns",
            "range": "± 5936.2370114386595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829124.1065104167,
            "unit": "ns",
            "range": "± 2018.5814799521056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751430.0486328125,
            "unit": "ns",
            "range": "± 1356.505462122278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321405.88,
            "unit": "ns",
            "range": "± 8442.36764934261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262953.14285714284,
            "unit": "ns",
            "range": "± 4641.500103284628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235441.15384615384,
            "unit": "ns",
            "range": "± 1789.0891465656412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5581311.533333333,
            "unit": "ns",
            "range": "± 80367.73924002331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3792667.6666666665,
            "unit": "ns",
            "range": "± 65871.14370026493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17477.842105263157,
            "unit": "ns",
            "range": "± 838.3611163475492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83097.30769230769,
            "unit": "ns",
            "range": "± 4257.932777823006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72247.15384615384,
            "unit": "ns",
            "range": "± 806.8615996722369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 176569.30208333334,
            "unit": "ns",
            "range": "± 15037.973715070579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5450.628865979382,
            "unit": "ns",
            "range": "± 527.7623028644073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16765.3125,
            "unit": "ns",
            "range": "± 882.3427330555567"
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
          "id": "f49dfaa339aaffdb66c83f210d97837dce3c2835",
          "message": "Changelog mistake fix",
          "timestamp": "2023-04-05T11:17:13+09:00",
          "tree_id": "219fa0924074c1e940bb2bcfe5a9724834bf7855",
          "url": "https://github.com/greymistcube/libplanet/commit/f49dfaa339aaffdb66c83f210d97837dce3c2835"
        },
        "date": 1680661790883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3437933.1333333333,
            "unit": "ns",
            "range": "± 34594.09782827673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3575597.4444444445,
            "unit": "ns",
            "range": "± 75579.36962769841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4262001.208333333,
            "unit": "ns",
            "range": "± 108725.67652542445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4593573.275862069,
            "unit": "ns",
            "range": "± 134404.96445149227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7789051.315789473,
            "unit": "ns",
            "range": "± 251688.50637472665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7567383.571428572,
            "unit": "ns",
            "range": "± 28965.40218609432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21332323.933333334,
            "unit": "ns",
            "range": "± 338630.5204617704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54486825.93333333,
            "unit": "ns",
            "range": "± 568683.7036830211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104687984.73333333,
            "unit": "ns",
            "range": "± 1293352.4594462952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207499493.5,
            "unit": "ns",
            "range": "± 3430930.0777470227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436073.0215053763,
            "unit": "ns",
            "range": "± 79762.86073308568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2704009.1764705884,
            "unit": "ns",
            "range": "± 84710.14966395187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2339239,
            "unit": "ns",
            "range": "± 146953.157420925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5677380.407407408,
            "unit": "ns",
            "range": "± 108129.42947556994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50107.22727272727,
            "unit": "ns",
            "range": "± 2318.9548427981654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5838064.606026785,
            "unit": "ns",
            "range": "± 34463.27942813337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1823388.7919921875,
            "unit": "ns",
            "range": "± 5359.562344268681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351097.616015625,
            "unit": "ns",
            "range": "± 6618.8074768222305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638982.3359375,
            "unit": "ns",
            "range": "± 5774.334052744194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828731.6376255581,
            "unit": "ns",
            "range": "± 2167.741120543834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748933.8563058035,
            "unit": "ns",
            "range": "± 635.6164412116336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334490.5319148936,
            "unit": "ns",
            "range": "± 12975.86880705382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273452.96875,
            "unit": "ns",
            "range": "± 8078.96394061953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230898.15384615384,
            "unit": "ns",
            "range": "± 2393.3136319809073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5737169.571428572,
            "unit": "ns",
            "range": "± 41188.8148515968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3974819,
            "unit": "ns",
            "range": "± 40541.47608029623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19289,
            "unit": "ns",
            "range": "± 1391.564919907005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90756.44285714286,
            "unit": "ns",
            "range": "± 4259.985591034059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77448.03846153847,
            "unit": "ns",
            "range": "± 2108.227643889895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 201831.20408163266,
            "unit": "ns",
            "range": "± 16080.259765403973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6571.845360824742,
            "unit": "ns",
            "range": "± 853.5192384597797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18874.126315789475,
            "unit": "ns",
            "range": "± 1632.5422169908986"
          }
        ]
      }
    ]
  }
}