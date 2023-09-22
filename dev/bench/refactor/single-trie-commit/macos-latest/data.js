window.BENCHMARK_DATA = {
  "lastUpdate": 1695371800330,
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
          "id": "00fb4dd87d26d008731bfbdbe97a00982680d720",
          "message": "Working",
          "timestamp": "2023-09-22T16:35:38+09:00",
          "tree_id": "208fc59fc38921dd618f815411eb39303f6b3279",
          "url": "https://github.com/greymistcube/libplanet/commit/00fb4dd87d26d008731bfbdbe97a00982680d720"
        },
        "date": 1695371771963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7825566.538461538,
            "unit": "ns",
            "range": "± 51708.95624166634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19728022.153846152,
            "unit": "ns",
            "range": "± 250399.61855064335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47670755.428571425,
            "unit": "ns",
            "range": "± 280230.37918187527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96289250.3076923,
            "unit": "ns",
            "range": "± 1238116.2043702647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197270190.5,
            "unit": "ns",
            "range": "± 1337723.2807051602"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57213.67582417582,
            "unit": "ns",
            "range": "± 7405.97254712319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289230.84810126584,
            "unit": "ns",
            "range": "± 14270.367804801783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285833.2686567164,
            "unit": "ns",
            "range": "± 13508.821316124233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267532.83636363636,
            "unit": "ns",
            "range": "± 11318.839210154012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4038097.0434782607,
            "unit": "ns",
            "range": "± 97599.37966479381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3698681,
            "unit": "ns",
            "range": "± 72261.5945575518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17074.706521739132,
            "unit": "ns",
            "range": "± 1536.336305173565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83002.19791666667,
            "unit": "ns",
            "range": "± 9060.751978923967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94637.69696969698,
            "unit": "ns",
            "range": "± 14510.291750435134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90966.02083333333,
            "unit": "ns",
            "range": "± 13227.857317024604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6456.216494845361,
            "unit": "ns",
            "range": "± 1633.9036348752086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15608.797752808989,
            "unit": "ns",
            "range": "± 1677.3727236621567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503681.9141414142,
            "unit": "ns",
            "range": "± 159764.2784830974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2789337.5795454546,
            "unit": "ns",
            "range": "± 153384.93306371104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309869.836734694,
            "unit": "ns",
            "range": "± 177502.21483681008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11234125.93877551,
            "unit": "ns",
            "range": "± 440097.1108924621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3194140.789473684,
            "unit": "ns",
            "range": "± 69209.93277668471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3310177.1428571427,
            "unit": "ns",
            "range": "± 141974.1786270151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333977.934782608,
            "unit": "ns",
            "range": "± 165712.809919974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4171693.4468085105,
            "unit": "ns",
            "range": "± 236545.93319626251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14930329.56521739,
            "unit": "ns",
            "range": "± 1300958.7261507013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5545307.104910715,
            "unit": "ns",
            "range": "± 130837.44901383741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1733861.67890625,
            "unit": "ns",
            "range": "± 21563.163405806154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 952036.7247395833,
            "unit": "ns",
            "range": "± 8044.9206684250685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2441364.625,
            "unit": "ns",
            "range": "± 48188.27124520754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826816.7903878348,
            "unit": "ns",
            "range": "± 5581.338390603559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 698478.0924479166,
            "unit": "ns",
            "range": "± 12392.064292974856"
          }
        ]
      }
    ]
  }
}