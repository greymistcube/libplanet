window.BENCHMARK_DATA = {
  "lastUpdate": 1704333405410,
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
          "id": "6af45500afe3dfcb336b82e35ad2b48e86f3ae41",
          "message": "Release 3.9.3",
          "timestamp": "2024-01-04T10:44:24+09:00",
          "tree_id": "27d8eecf75f45f048e9556d45d30d7f023e92d47",
          "url": "https://github.com/greymistcube/libplanet/commit/6af45500afe3dfcb336b82e35ad2b48e86f3ae41"
        },
        "date": 1704333380111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004316.4948453609,
            "unit": "ns",
            "range": "± 108804.84505948825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1803691.7647058824,
            "unit": "ns",
            "range": "± 96171.90240566591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1377964.8936170214,
            "unit": "ns",
            "range": "± 120305.41394824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5241887.5,
            "unit": "ns",
            "range": "± 147887.58317744095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35748.3870967742,
            "unit": "ns",
            "range": "± 2764.2363873317863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5034360,
            "unit": "ns",
            "range": "± 76548.42351647186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13583630.76923077,
            "unit": "ns",
            "range": "± 70145.472467525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33405646.666666668,
            "unit": "ns",
            "range": "± 230016.67289464865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66690707.14285714,
            "unit": "ns",
            "range": "± 780355.6235305953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137436806.66666666,
            "unit": "ns",
            "range": "± 1638641.2762088103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3307889.6354166665,
            "unit": "ns",
            "range": "± 8124.4565179059455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050139.174107143,
            "unit": "ns",
            "range": "± 2353.658950853327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737760.6510416666,
            "unit": "ns",
            "range": "± 1407.103394961714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957688.4375,
            "unit": "ns",
            "range": "± 3845.2606296522945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617345.0871394231,
            "unit": "ns",
            "range": "± 700.4580343254809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568388.4164663461,
            "unit": "ns",
            "range": "± 1574.5279763039152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2213996,
            "unit": "ns",
            "range": "± 51890.03179802456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307252.3076923075,
            "unit": "ns",
            "range": "± 106403.17357181526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2903491.6666666665,
            "unit": "ns",
            "range": "± 72073.6876347767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2731852,
            "unit": "ns",
            "range": "± 69284.91370180572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6219951.515151516,
            "unit": "ns",
            "range": "± 193141.21148982568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184431.25,
            "unit": "ns",
            "range": "± 9561.017817620714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176838.63636363635,
            "unit": "ns",
            "range": "± 6499.846721237137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143912.28070175438,
            "unit": "ns",
            "range": "± 6264.18590581862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2783393.3333333335,
            "unit": "ns",
            "range": "± 31864.208910999336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2621653.3333333335,
            "unit": "ns",
            "range": "± 46335.23600067334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12841.304347826086,
            "unit": "ns",
            "range": "± 1860.0574358326337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62943.298969072166,
            "unit": "ns",
            "range": "± 8434.723706407722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47902.0618556701,
            "unit": "ns",
            "range": "± 3827.6673537722713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70012.12121212122,
            "unit": "ns",
            "range": "± 16307.20557354358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3323.469387755102,
            "unit": "ns",
            "range": "± 767.4836403653745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12443.8202247191,
            "unit": "ns",
            "range": "± 1365.729496724251"
          }
        ]
      }
    ]
  }
}