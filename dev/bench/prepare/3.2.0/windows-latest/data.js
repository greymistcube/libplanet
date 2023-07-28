window.BENCHMARK_DATA = {
  "lastUpdate": 1690509427502,
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
          "id": "84896c2dbd5ae69d8598f91563d85f18494aa068",
          "message": "Prepare 3.2.0",
          "timestamp": "2023-07-28T10:34:17+09:00",
          "tree_id": "caa34c3224c3f99addd0c02b454de2a675696ee0",
          "url": "https://github.com/greymistcube/libplanet/commit/84896c2dbd5ae69d8598f91563d85f18494aa068"
        },
        "date": 1690509398354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1828417.0212765958,
            "unit": "ns",
            "range": "± 162372.17678279226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3478654.1666666665,
            "unit": "ns",
            "range": "± 236456.48577839156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2310069.14893617,
            "unit": "ns",
            "range": "± 207479.03691314862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6403836.486486486,
            "unit": "ns",
            "range": "± 320863.533734572"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75587.5,
            "unit": "ns",
            "range": "± 11485.150595901054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10978606.666666666,
            "unit": "ns",
            "range": "± 188038.6186272333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25787071.42857143,
            "unit": "ns",
            "range": "± 285571.9697206116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65803878.26086956,
            "unit": "ns",
            "range": "± 1588958.6647053764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130959928.57142857,
            "unit": "ns",
            "range": "± 1255955.4563564935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267083707.14285713,
            "unit": "ns",
            "range": "± 2536108.6246647444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6133853.571428572,
            "unit": "ns",
            "range": "± 96915.39604589864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1971747.6106770833,
            "unit": "ns",
            "range": "± 17283.933391984294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477764.3098958333,
            "unit": "ns",
            "range": "± 24247.6089710566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3351463.643973214,
            "unit": "ns",
            "range": "± 34869.73860444632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1066288.3919270833,
            "unit": "ns",
            "range": "± 15830.491952381684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 979770.9244791666,
            "unit": "ns",
            "range": "± 12177.12660274924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4219180,
            "unit": "ns",
            "range": "± 267668.8596485066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4517009.090909091,
            "unit": "ns",
            "range": "± 211857.25072631967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5598847.826086956,
            "unit": "ns",
            "range": "± 215487.8648185507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4880833.720930233,
            "unit": "ns",
            "range": "± 179873.02522855575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8346661.728395062,
            "unit": "ns",
            "range": "± 435812.3600151506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349358.5106382979,
            "unit": "ns",
            "range": "± 29318.042481759436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356546.2365591398,
            "unit": "ns",
            "range": "± 35793.75874409376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315852.74725274724,
            "unit": "ns",
            "range": "± 24283.859937824003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5205775,
            "unit": "ns",
            "range": "± 95976.82011819312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4813632.432432433,
            "unit": "ns",
            "range": "± 233277.14137298777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32784.21052631579,
            "unit": "ns",
            "range": "± 7175.405923567887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131186.02150537635,
            "unit": "ns",
            "range": "± 16841.625395313073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142972.52747252746,
            "unit": "ns",
            "range": "± 10695.222878920871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154006.1224489796,
            "unit": "ns",
            "range": "± 22655.02295787769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9664.70588235294,
            "unit": "ns",
            "range": "± 1319.425008456781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30725,
            "unit": "ns",
            "range": "± 6449.799809483825"
          }
        ]
      }
    ]
  }
}