window.BENCHMARK_DATA = {
  "lastUpdate": 1691723719458,
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
          "id": "a36f825e0727644c8d0045bf2a8f721e639ef1e6",
          "message": "Prepare 3.3.0",
          "timestamp": "2023-08-11T11:55:43+09:00",
          "tree_id": "56dcba49cb260e6b5820b1b6ad2215d6b5540712",
          "url": "https://github.com/greymistcube/libplanet/commit/a36f825e0727644c8d0045bf2a8f721e639ef1e6"
        },
        "date": 1691723701774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8832768.77,
            "unit": "ns",
            "range": "± 583492.0215321664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21968621.03846154,
            "unit": "ns",
            "range": "± 1023447.7242190834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57253068,
            "unit": "ns",
            "range": "± 988549.5151552563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109870573.1111111,
            "unit": "ns",
            "range": "± 2957489.080118787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224503772.6,
            "unit": "ns",
            "range": "± 3975553.5383209"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68192.98913043478,
            "unit": "ns",
            "range": "± 11540.276886897218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343194.47826086957,
            "unit": "ns",
            "range": "± 52710.2935528545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339597.6914893617,
            "unit": "ns",
            "range": "± 35824.80263195949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319010.6157894737,
            "unit": "ns",
            "range": "± 33979.95866084644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4733524.9375,
            "unit": "ns",
            "range": "± 506761.3672848564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4306362.106060606,
            "unit": "ns",
            "range": "± 397055.9302836371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25031.97894736842,
            "unit": "ns",
            "range": "± 7098.1421842364625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130293.60416666667,
            "unit": "ns",
            "range": "± 29317.813277570833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116155.69892473119,
            "unit": "ns",
            "range": "± 21132.54643742934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122491.85869565218,
            "unit": "ns",
            "range": "± 22243.785093044036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7221.695652173913,
            "unit": "ns",
            "range": "± 1141.5847692902153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24474.9010989011,
            "unit": "ns",
            "range": "± 5678.308142112099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590847.2688172043,
            "unit": "ns",
            "range": "± 216426.30727777607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3106509.111111111,
            "unit": "ns",
            "range": "± 286150.8874373473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130448.7653061226,
            "unit": "ns",
            "range": "± 279232.8712695907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5680536.898876404,
            "unit": "ns",
            "range": "± 323573.5112745228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3552399.6326530613,
            "unit": "ns",
            "range": "± 261381.7225643246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3599834.2291666665,
            "unit": "ns",
            "range": "± 283138.7684650865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4465357.7397260275,
            "unit": "ns",
            "range": "± 220373.41616775197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3955722.631313131,
            "unit": "ns",
            "range": "± 272901.75616842246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7239021.237113402,
            "unit": "ns",
            "range": "± 577926.3471517293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6093134.979166667,
            "unit": "ns",
            "range": "± 203220.38613701516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1724186.474975586,
            "unit": "ns",
            "range": "± 26750.324927153204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1202259.5218261718,
            "unit": "ns",
            "range": "± 39645.81318002798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2931479.694140625,
            "unit": "ns",
            "range": "± 187204.1284049108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802004.6425130208,
            "unit": "ns",
            "range": "± 7862.400760875392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750468.6237980769,
            "unit": "ns",
            "range": "± 8682.455311646721"
          }
        ]
      }
    ]
  }
}