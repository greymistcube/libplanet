window.BENCHMARK_DATA = {
  "lastUpdate": 1681801489581,
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
          "id": "ec6d776019167e45410d53ad191a92d77cef6a3f",
          "message": "Prepare 1.0.1",
          "timestamp": "2023-04-18T15:47:46+09:00",
          "tree_id": "13c2e25096d4f2be554b279a8e7f29bb999bbc3c",
          "url": "https://github.com/greymistcube/libplanet/commit/ec6d776019167e45410d53ad191a92d77cef6a3f"
        },
        "date": 1681801466758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424934,
            "unit": "ns",
            "range": "± 152194.3157329279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2464051.282051282,
            "unit": "ns",
            "range": "± 76331.14792173594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2270685,
            "unit": "ns",
            "range": "± 187497.31762391058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5804056.12244898,
            "unit": "ns",
            "range": "± 366736.165191049"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50289.01098901099,
            "unit": "ns",
            "range": "± 3604.3631137044795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6849150,
            "unit": "ns",
            "range": "± 47232.1442933248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19342080,
            "unit": "ns",
            "range": "± 265662.1759195044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48971429.4117647,
            "unit": "ns",
            "range": "± 992770.4151544215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98623480,
            "unit": "ns",
            "range": "± 1294995.4077138652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196424807.69230768,
            "unit": "ns",
            "range": "± 2335528.8068092624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4863467.65625,
            "unit": "ns",
            "range": "± 74692.03111710683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543548.2421875,
            "unit": "ns",
            "range": "± 23281.478279025996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1194343.3203125,
            "unit": "ns",
            "range": "± 20018.04299253623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711739.3229166665,
            "unit": "ns",
            "range": "± 40730.170666660415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841887.98828125,
            "unit": "ns",
            "range": "± 7552.203955568051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770244.8016826923,
            "unit": "ns",
            "range": "± 5747.08868118727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3090488.888888889,
            "unit": "ns",
            "range": "± 102681.55983504893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3348465.8536585364,
            "unit": "ns",
            "range": "± 119751.29145390479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3979984.4827586208,
            "unit": "ns",
            "range": "± 173997.39844972288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4192732.6086956523,
            "unit": "ns",
            "range": "± 155561.4134594049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7081649.152542373,
            "unit": "ns",
            "range": "± 310134.5939031574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314711.53846153844,
            "unit": "ns",
            "range": "± 11771.453570199155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256758.33333333334,
            "unit": "ns",
            "range": "± 10837.119069084465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215100,
            "unit": "ns",
            "range": "± 4875.610623026455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5208141.666666667,
            "unit": "ns",
            "range": "± 28224.0213078838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700387.5,
            "unit": "ns",
            "range": "± 68066.3781417326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22294.736842105263,
            "unit": "ns",
            "range": "± 2005.278588437337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93272.44897959183,
            "unit": "ns",
            "range": "± 7188.475608189475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83961.85567010309,
            "unit": "ns",
            "range": "± 7612.93366716265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 186456.1224489796,
            "unit": "ns",
            "range": "± 19918.7515462217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8021.0526315789475,
            "unit": "ns",
            "range": "± 1104.2369789637937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22366.326530612245,
            "unit": "ns",
            "range": "± 2701.8109191418307"
          }
        ]
      }
    ]
  }
}