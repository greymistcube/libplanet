window.BENCHMARK_DATA = {
  "lastUpdate": 1678873191091,
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
          "id": "23388947245416bf15682b5711eb1f909b907d5a",
          "message": "Prepare 0.51.3",
          "timestamp": "2023-03-15T18:21:01+09:00",
          "tree_id": "47dbbdaffe5d3c55e1f6518e77cde938901434ba",
          "url": "https://github.com/greymistcube/libplanet/commit/23388947245416bf15682b5711eb1f909b907d5a"
        },
        "date": 1678873167937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9161616.8,
            "unit": "ns",
            "range": "± 157490.71748301323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23038429.2,
            "unit": "ns",
            "range": "± 373024.45614045963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57587660.78571428,
            "unit": "ns",
            "range": "± 880727.5050726031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114054599.83333333,
            "unit": "ns",
            "range": "± 673831.4682733542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 231370797.5,
            "unit": "ns",
            "range": "± 2645766.1421730365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76171.52808988764,
            "unit": "ns",
            "range": "± 8112.191914712927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234722.54545454544,
            "unit": "ns",
            "range": "± 9403.249912620206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236723,
            "unit": "ns",
            "range": "± 8325.986009214826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219229.13684210528,
            "unit": "ns",
            "range": "± 12734.80820479798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13352190.07142857,
            "unit": "ns",
            "range": "± 112690.9661941175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10874960.888888888,
            "unit": "ns",
            "range": "± 221015.9147801456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21509.010416666668,
            "unit": "ns",
            "range": "± 2566.4790810709064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62898.833333333336,
            "unit": "ns",
            "range": "± 6285.182025026744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49616.9381443299,
            "unit": "ns",
            "range": "± 5071.811029714537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121888.33333333333,
            "unit": "ns",
            "range": "± 15053.25506443997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5876.054347826087,
            "unit": "ns",
            "range": "± 538.0705122330482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20920.297872340427,
            "unit": "ns",
            "range": "± 1786.0963792330474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1832860.9040404041,
            "unit": "ns",
            "range": "± 214565.9353027532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3320235.1125,
            "unit": "ns",
            "range": "± 170462.5544042967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3142701.9565217393,
            "unit": "ns",
            "range": "± 371608.3990640163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7647125.365853659,
            "unit": "ns",
            "range": "± 403275.30703326996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3757901.253012048,
            "unit": "ns",
            "range": "± 192693.28333433656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5939816.695652174,
            "unit": "ns",
            "range": "± 227574.7740623942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27281214.6,
            "unit": "ns",
            "range": "± 349023.1465125814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7186134.314814814,
            "unit": "ns",
            "range": "± 197401.7767019329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31296397.42857143,
            "unit": "ns",
            "range": "± 812073.0226614329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7070648.928571428,
            "unit": "ns",
            "range": "± 36968.10944913492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2264704.5411658655,
            "unit": "ns",
            "range": "± 15468.682044927447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1463512.5335036058,
            "unit": "ns",
            "range": "± 8486.338218082463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2853448.5284598214,
            "unit": "ns",
            "range": "± 17520.301452822405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947817.89375,
            "unit": "ns",
            "range": "± 8662.388194979038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 859952.4333333333,
            "unit": "ns",
            "range": "± 13236.692328285697"
          }
        ]
      }
    ]
  }
}