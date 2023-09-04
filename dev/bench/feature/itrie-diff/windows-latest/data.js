window.BENCHMARK_DATA = {
  "lastUpdate": 1693793281214,
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
          "id": "06d288e10ab42d4c0d44ef20ef909b3ce5937896",
          "message": "Cleanup",
          "timestamp": "2023-09-04T10:42:36+09:00",
          "tree_id": "0282daa55f3754af880a2bddc6126756ea723363",
          "url": "https://github.com/greymistcube/libplanet/commit/06d288e10ab42d4c0d44ef20ef909b3ce5937896"
        },
        "date": 1693792805593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428997.9166666667,
            "unit": "ns",
            "range": "± 121853.70864854098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2612034.375,
            "unit": "ns",
            "range": "± 79840.95120875849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1871362.5,
            "unit": "ns",
            "range": "± 146226.72464361636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4946623.72881356,
            "unit": "ns",
            "range": "± 217785.8560201005"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60787.5,
            "unit": "ns",
            "range": "± 6151.512437048136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8388333.333333333,
            "unit": "ns",
            "range": "± 136349.41283684495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22158350,
            "unit": "ns",
            "range": "± 229558.73975956568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54226906.666666664,
            "unit": "ns",
            "range": "± 622011.5139800947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108134657.14285715,
            "unit": "ns",
            "range": "± 941665.4693142895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217889856.66666666,
            "unit": "ns",
            "range": "± 1550607.6276583904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4659603.541666667,
            "unit": "ns",
            "range": "± 30755.227597261972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1453144.517299107,
            "unit": "ns",
            "range": "± 3663.4325730209453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1063933.1640625,
            "unit": "ns",
            "range": "± 4370.795000058767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680269.112723214,
            "unit": "ns",
            "range": "± 11115.085765346334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844648.8671875,
            "unit": "ns",
            "range": "± 3842.7591688831917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762107.0033482143,
            "unit": "ns",
            "range": "± 2193.996621214482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3633061.5384615385,
            "unit": "ns",
            "range": "± 52535.26654323961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3726107.1428571427,
            "unit": "ns",
            "range": "± 64118.3816711859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439625,
            "unit": "ns",
            "range": "± 49743.80043601596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4283343.75,
            "unit": "ns",
            "range": "± 84065.15702120587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6355635.714285715,
            "unit": "ns",
            "range": "± 178841.19836548914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286322.44897959183,
            "unit": "ns",
            "range": "± 17268.39990206917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278214.38356164383,
            "unit": "ns",
            "range": "± 13838.797814909653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270250.63291139243,
            "unit": "ns",
            "range": "± 13917.982035958446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4350620,
            "unit": "ns",
            "range": "± 70486.2823533771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3988680,
            "unit": "ns",
            "range": "± 72438.81358971662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29019.38775510204,
            "unit": "ns",
            "range": "± 3264.007345455693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114021.42857142857,
            "unit": "ns",
            "range": "± 12501.498879206609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102855.10204081633,
            "unit": "ns",
            "range": "± 13510.79081868198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108374.15730337078,
            "unit": "ns",
            "range": "± 15086.127945369724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8055.102040816327,
            "unit": "ns",
            "range": "± 1397.1342133449045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28272.448979591838,
            "unit": "ns",
            "range": "± 3921.3342094121695"
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
          "id": "4c9242b0ddc85ac71c2743b148f11d94c4404d60",
          "message": "Changelog",
          "timestamp": "2023-09-04T10:47:58+09:00",
          "tree_id": "8b179a404dc20856cf5631d621abbc7c4fcf84dd",
          "url": "https://github.com/greymistcube/libplanet/commit/4c9242b0ddc85ac71c2743b148f11d94c4404d60"
        },
        "date": 1693793254567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1516370.238095238,
            "unit": "ns",
            "range": "± 80699.98548806533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2973535.135135135,
            "unit": "ns",
            "range": "± 148892.98577960295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2085246.9387755103,
            "unit": "ns",
            "range": "± 199902.3082047425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5334854.929577465,
            "unit": "ns",
            "range": "± 260971.4247021432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55866.29213483146,
            "unit": "ns",
            "range": "± 3625.1001183736835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8955140.476190476,
            "unit": "ns",
            "range": "± 323880.84082487226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24563114.285714287,
            "unit": "ns",
            "range": "± 403720.8610245124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62276892.307692304,
            "unit": "ns",
            "range": "± 703723.6288268504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125962465.85365854,
            "unit": "ns",
            "range": "± 3818835.9357669298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256795385.41666666,
            "unit": "ns",
            "range": "± 10007568.057714263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5493682.954545454,
            "unit": "ns",
            "range": "± 172541.1735677482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1754884.2354910714,
            "unit": "ns",
            "range": "± 41459.78957629977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283383.2763671875,
            "unit": "ns",
            "range": "± 23594.380985228363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3232375.4947916665,
            "unit": "ns",
            "range": "± 32346.76597888763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002497.5060096154,
            "unit": "ns",
            "range": "± 8387.195220107156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932096.7447916666,
            "unit": "ns",
            "range": "± 25216.86296939509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3963237.777777778,
            "unit": "ns",
            "range": "± 141050.58616888433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4089106.25,
            "unit": "ns",
            "range": "± 187990.09419613847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5029126.315789473,
            "unit": "ns",
            "range": "± 216536.9454836714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4673564.705882353,
            "unit": "ns",
            "range": "± 148815.20344771096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7108813.793103448,
            "unit": "ns",
            "range": "± 203984.7976200641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302047.311827957,
            "unit": "ns",
            "range": "± 17141.14419217468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292233.3333333333,
            "unit": "ns",
            "range": "± 12867.416037426703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265266.6666666667,
            "unit": "ns",
            "range": "± 18048.721585674506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4940314.285714285,
            "unit": "ns",
            "range": "± 66120.05231910602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4416180.645161291,
            "unit": "ns",
            "range": "± 130611.69528888505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24222.340425531915,
            "unit": "ns",
            "range": "± 2481.2047999325687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103210.30927835051,
            "unit": "ns",
            "range": "± 9400.891851929999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90884.78260869565,
            "unit": "ns",
            "range": "± 10320.308952511963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106170.83333333333,
            "unit": "ns",
            "range": "± 15280.837099326083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8386.458333333334,
            "unit": "ns",
            "range": "± 1173.8035154924592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24942.55319148936,
            "unit": "ns",
            "range": "± 2669.4000518703056"
          }
        ]
      }
    ]
  }
}