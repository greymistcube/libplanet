window.BENCHMARK_DATA = {
  "lastUpdate": 1684476335413,
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
          "id": "1359ce47893455262fa503398dc5a6fead7207d6",
          "message": "Removed GetTrie() from IBlockChainStates",
          "timestamp": "2023-05-16T14:20:38+09:00",
          "tree_id": "d29b7d716f0b5b86b82d1b4a4e81ddca913e0a39",
          "url": "https://github.com/greymistcube/libplanet/commit/1359ce47893455262fa503398dc5a6fead7207d6"
        },
        "date": 1684217688022,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3266544,
            "unit": "ns",
            "range": "± 43553.05194324996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469280.529411765,
            "unit": "ns",
            "range": "± 96222.71330025332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4360242.454545454,
            "unit": "ns",
            "range": "± 106276.95361187977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4244278.862745098,
            "unit": "ns",
            "range": "± 162373.42963551884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6920812.952380952,
            "unit": "ns",
            "range": "± 162266.31109089655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282838,
            "unit": "ns",
            "range": "± 9484.317577177702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274222.47142857144,
            "unit": "ns",
            "range": "± 13304.16209771815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248472.4255319149,
            "unit": "ns",
            "range": "± 9648.458393971729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4246882.066666666,
            "unit": "ns",
            "range": "± 22796.0232386098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3947642.9285714286,
            "unit": "ns",
            "range": "± 12969.953409941147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18090.287234042553,
            "unit": "ns",
            "range": "± 1874.2658641485998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88322.8817204301,
            "unit": "ns",
            "range": "± 6181.583077541993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71761.11764705883,
            "unit": "ns",
            "range": "± 2322.8719132000565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82527.88571428572,
            "unit": "ns",
            "range": "± 2094.946352208939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4814.5625,
            "unit": "ns",
            "range": "± 558.3777595574711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18783.347826086956,
            "unit": "ns",
            "range": "± 1418.1210323180865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6243791.349888393,
            "unit": "ns",
            "range": "± 31110.18574122244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859996.5491286058,
            "unit": "ns",
            "range": "± 1543.1831321355996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343882.8833333333,
            "unit": "ns",
            "range": "± 713.491343198523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2513242.3190104165,
            "unit": "ns",
            "range": "± 1780.7056497937854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804490.4286458333,
            "unit": "ns",
            "range": "± 1077.81672924463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729329.2329101562,
            "unit": "ns",
            "range": "± 195.7565765819604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7649089.933333334,
            "unit": "ns",
            "range": "± 57456.09325322954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19346200.133333333,
            "unit": "ns",
            "range": "± 78897.22925776533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48922569,
            "unit": "ns",
            "range": "± 160165.78933333184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100473920.06666666,
            "unit": "ns",
            "range": "± 872635.8032080138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199498824.46666667,
            "unit": "ns",
            "range": "± 1454548.8178588413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378163.99,
            "unit": "ns",
            "range": "± 91463.30189449945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2546376.1052631577,
            "unit": "ns",
            "range": "± 55501.16015293408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2172565.7789473683,
            "unit": "ns",
            "range": "± 124186.78248750773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5453226.9718309855,
            "unit": "ns",
            "range": "± 266031.7233426963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44976.057471264365,
            "unit": "ns",
            "range": "± 2121.5871656167724"
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
          "id": "a4f2967e88352c699eaa3d23f316b2779c501df9",
          "message": "Removed GetTrie() from IBlockChainStates",
          "timestamp": "2023-05-19T14:51:21+09:00",
          "tree_id": "4061793da82e54481b786ed4c3368e87683fc4a6",
          "url": "https://github.com/greymistcube/libplanet/commit/a4f2967e88352c699eaa3d23f316b2779c501df9"
        },
        "date": 1684476328509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3653615.1428571427,
            "unit": "ns",
            "range": "± 57369.47789394789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3885646.0714285714,
            "unit": "ns",
            "range": "± 55396.630350818945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4643353.333333333,
            "unit": "ns",
            "range": "± 71804.54482598345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4764367.48,
            "unit": "ns",
            "range": "± 124333.02859059616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7222268.16,
            "unit": "ns",
            "range": "± 192757.84890302995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292908.2545454545,
            "unit": "ns",
            "range": "± 12286.30334396529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281489.2,
            "unit": "ns",
            "range": "± 7848.418028165141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255123.14285714287,
            "unit": "ns",
            "range": "± 11702.125440880447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4512415.285714285,
            "unit": "ns",
            "range": "± 31723.2895021176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3937083.2666666666,
            "unit": "ns",
            "range": "± 67262.92509831068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18821.666666666668,
            "unit": "ns",
            "range": "± 2108.5059532931045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87913.93506493507,
            "unit": "ns",
            "range": "± 4519.135514493843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75388.225,
            "unit": "ns",
            "range": "± 2677.95120201706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96816.20408163265,
            "unit": "ns",
            "range": "± 12903.724451522045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5267.063829787234,
            "unit": "ns",
            "range": "± 469.834489469273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16993.787234042553,
            "unit": "ns",
            "range": "± 1306.1360059625636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5966381.804166666,
            "unit": "ns",
            "range": "± 40282.99651996655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833997.8704427083,
            "unit": "ns",
            "range": "± 7907.151859790042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366190.787109375,
            "unit": "ns",
            "range": "± 4000.0490345655644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605110.5694754464,
            "unit": "ns",
            "range": "± 11277.955873197447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825384.2220284598,
            "unit": "ns",
            "range": "± 2856.374469045005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751393.0901041667,
            "unit": "ns",
            "range": "± 1541.2812568468016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8773849.07142857,
            "unit": "ns",
            "range": "± 148379.67813969898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22684713.8,
            "unit": "ns",
            "range": "± 238607.30369141197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56451040.6,
            "unit": "ns",
            "range": "± 279146.22634121863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112721542.8,
            "unit": "ns",
            "range": "± 274521.7933428445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223412622.13333333,
            "unit": "ns",
            "range": "± 372840.4439114992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431995.7222222222,
            "unit": "ns",
            "range": "± 77250.2887552187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2828383.320754717,
            "unit": "ns",
            "range": "± 117500.46611311371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2332314.4285714286,
            "unit": "ns",
            "range": "± 118817.23044719927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5704588.133333334,
            "unit": "ns",
            "range": "± 166284.2653142054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51956.37634408602,
            "unit": "ns",
            "range": "± 3252.091089537885"
          }
        ]
      }
    ]
  }
}