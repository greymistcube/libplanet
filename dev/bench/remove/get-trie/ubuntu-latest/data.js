window.BENCHMARK_DATA = {
  "lastUpdate": 1684217695434,
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
      }
    ]
  }
}