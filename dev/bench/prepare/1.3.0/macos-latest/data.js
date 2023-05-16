window.BENCHMARK_DATA = {
  "lastUpdate": 1684228660405,
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
          "id": "e0ac72d952263a8df2cdfc10c1bedbc403f4e6e6",
          "message": "Prepare 1.3.0",
          "timestamp": "2023-05-16T17:56:38+09:00",
          "tree_id": "55c7a7526e013a7451c0e1a0d1a8ad138feb19c8",
          "url": "https://github.com/greymistcube/libplanet/commit/e0ac72d952263a8df2cdfc10c1bedbc403f4e6e6"
        },
        "date": 1684228644523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8615714.55882353,
            "unit": "ns",
            "range": "± 260281.1587955436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21220049.21875,
            "unit": "ns",
            "range": "± 643640.071414854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53004635.8,
            "unit": "ns",
            "range": "± 814331.4939859039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103879433.88235295,
            "unit": "ns",
            "range": "± 2055373.2130096192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216070879.7142857,
            "unit": "ns",
            "range": "± 2516323.8162687365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71223.21578947369,
            "unit": "ns",
            "range": "± 6759.755599042809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 390485.60638297873,
            "unit": "ns",
            "range": "± 83450.6355209078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362740.07692307694,
            "unit": "ns",
            "range": "± 63100.82545845547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 362480.4222222222,
            "unit": "ns",
            "range": "± 41661.54845769369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4712113.697916667,
            "unit": "ns",
            "range": "± 373186.8562634998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4195802.131313131,
            "unit": "ns",
            "range": "± 399681.54447335325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25473.172043010753,
            "unit": "ns",
            "range": "± 5345.23632215122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138913.3777777778,
            "unit": "ns",
            "range": "± 16002.404519867576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138557.0224719101,
            "unit": "ns",
            "range": "± 15585.79739551476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137565.07777777777,
            "unit": "ns",
            "range": "± 27555.12604821848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7606.360215053764,
            "unit": "ns",
            "range": "± 1521.613378531498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24286.73711340206,
            "unit": "ns",
            "range": "± 6207.188745339948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1554367.0154639175,
            "unit": "ns",
            "range": "± 154009.6784240302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3018455.9682539683,
            "unit": "ns",
            "range": "± 135250.32824728737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2551778.7216494847,
            "unit": "ns",
            "range": "± 223183.9039799793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6476989.766666667,
            "unit": "ns",
            "range": "± 285688.65107151755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290609.0675675673,
            "unit": "ns",
            "range": "± 110639.52443070358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3931031.644444444,
            "unit": "ns",
            "range": "± 303278.74372719985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5123985.969072165,
            "unit": "ns",
            "range": "± 556629.3654760591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5946222.7272727275,
            "unit": "ns",
            "range": "± 1911923.9861562313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8801312.144329896,
            "unit": "ns",
            "range": "± 1133650.263400214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7488762.701136364,
            "unit": "ns",
            "range": "± 315387.3356894239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2076462.850240688,
            "unit": "ns",
            "range": "± 120975.18690333213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439318.8695591518,
            "unit": "ns",
            "range": "± 25194.716469011582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2961066.8705903674,
            "unit": "ns",
            "range": "± 199622.58024767693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 883381.052734375,
            "unit": "ns",
            "range": "± 17979.469555853215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866926.5627441406,
            "unit": "ns",
            "range": "± 72992.72213440707"
          }
        ]
      }
    ]
  }
}