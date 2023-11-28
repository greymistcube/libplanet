window.BENCHMARK_DATA = {
  "lastUpdate": 1701154461099,
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
          "id": "7c4d1cff60e49dcfaf20f5cde3ca660998a9fede",
          "message": "Update TxInvoice specification",
          "timestamp": "2023-11-28T15:43:22+09:00",
          "tree_id": "135093997f2cdf1d6426d6599a5f96dca0a7c2e9",
          "url": "https://github.com/greymistcube/libplanet/commit/7c4d1cff60e49dcfaf20f5cde3ca660998a9fede"
        },
        "date": 1701154453630,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194905.33606557376,
            "unit": "ns",
            "range": "± 8748.374519837631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190705.26119402985,
            "unit": "ns",
            "range": "± 8391.555400104127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165034.92,
            "unit": "ns",
            "range": "± 4326.225230305668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087689.2,
            "unit": "ns",
            "range": "± 57290.91322016084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835489.4615384615,
            "unit": "ns",
            "range": "± 33617.067013684646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12213.021505376344,
            "unit": "ns",
            "range": "± 1019.9696497881756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64150.25263157895,
            "unit": "ns",
            "range": "± 6095.25124710094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62523.833333333336,
            "unit": "ns",
            "range": "± 1630.0533111225072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66584.9947368421,
            "unit": "ns",
            "range": "± 9207.349894644974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3275.875,
            "unit": "ns",
            "range": "± 492.9482144254741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13108.170103092783,
            "unit": "ns",
            "range": "± 1951.837188616842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734631.8873697915,
            "unit": "ns",
            "range": "± 11095.73957594355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197340.642578125,
            "unit": "ns",
            "range": "± 2989.295032638015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775662.4031700721,
            "unit": "ns",
            "range": "± 3705.4552509139526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938760.03125,
            "unit": "ns",
            "range": "± 27511.701915675854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620315.4660456731,
            "unit": "ns",
            "range": "± 2350.329894347807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590611.782801011,
            "unit": "ns",
            "range": "± 10581.301261588167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40392.3969072165,
            "unit": "ns",
            "range": "± 5211.137448781647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2328913.3513513515,
            "unit": "ns",
            "range": "± 38980.143599171264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511002.3695652173,
            "unit": "ns",
            "range": "± 50315.81055900308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3122738.6153846155,
            "unit": "ns",
            "range": "± 40856.543379525836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2957284.8571428573,
            "unit": "ns",
            "range": "± 81488.16719632289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6650764.024390244,
            "unit": "ns",
            "range": "± 239218.1700563826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5596453.571428572,
            "unit": "ns",
            "range": "± 21922.282669832628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13942411.642857144,
            "unit": "ns",
            "range": "± 79953.62844016057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36357138.14285714,
            "unit": "ns",
            "range": "± 212942.16710280647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73992566.85714285,
            "unit": "ns",
            "range": "± 395196.2673627852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148225578.3846154,
            "unit": "ns",
            "range": "± 1624756.883746588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947604.2315789474,
            "unit": "ns",
            "range": "± 77570.28740980284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871942.8219178081,
            "unit": "ns",
            "range": "± 89295.88234710715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1345943.1170212766,
            "unit": "ns",
            "range": "± 87928.9151466257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5217889.045454546,
            "unit": "ns",
            "range": "± 126347.13589173858"
          }
        ]
      }
    ]
  }
}