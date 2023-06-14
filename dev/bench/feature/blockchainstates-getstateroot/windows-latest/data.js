window.BENCHMARK_DATA = {
  "lastUpdate": 1686721689572,
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
          "id": "4ac1610cd444d14c98eca5e393878591f2f85031",
          "message": "Introduce BlockChainStates.GetStateRoot; expand BlockChainStates query\nscope",
          "timestamp": "2023-06-14T14:30:04+09:00",
          "tree_id": "31b203bf80340635c6bc8123a588dfb41aa59cfa",
          "url": "https://github.com/greymistcube/libplanet/commit/4ac1610cd444d14c98eca5e393878591f2f85031"
        },
        "date": 1686721667595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1409924.2424242424,
            "unit": "ns",
            "range": "± 41598.34003826828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2631909.782608696,
            "unit": "ns",
            "range": "± 148265.72748685032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248068,
            "unit": "ns",
            "range": "± 149215.16758823092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5580678.409090909,
            "unit": "ns",
            "range": "± 297664.6915724708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48816.30434782609,
            "unit": "ns",
            "range": "± 3270.624404340339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6878242.857142857,
            "unit": "ns",
            "range": "± 58679.6349719352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19937238.095238097,
            "unit": "ns",
            "range": "± 469099.25013390335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49455094.11764706,
            "unit": "ns",
            "range": "± 974518.4807576691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97960564.70588236,
            "unit": "ns",
            "range": "± 1998005.644993645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195224720,
            "unit": "ns",
            "range": "± 3478466.417053847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4779487.053571428,
            "unit": "ns",
            "range": "± 16006.37039561009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513643.6197916667,
            "unit": "ns",
            "range": "± 5999.11886224109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172126.6145833333,
            "unit": "ns",
            "range": "± 6383.974901594346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604434.7916666665,
            "unit": "ns",
            "range": "± 9051.85104440145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835934.2252604166,
            "unit": "ns",
            "range": "± 2976.703437496083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766628.8606770834,
            "unit": "ns",
            "range": "± 2287.0803465540457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3088646.4285714286,
            "unit": "ns",
            "range": "± 86982.64399949485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461458.536585366,
            "unit": "ns",
            "range": "± 122009.95241292768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4018479.1666666665,
            "unit": "ns",
            "range": "± 102253.40636046724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4372973.333333333,
            "unit": "ns",
            "range": "± 81480.35229135801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691177.358490566,
            "unit": "ns",
            "range": "± 276326.3306599014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269216.39344262297,
            "unit": "ns",
            "range": "± 12097.57799903034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258015.55555555556,
            "unit": "ns",
            "range": "± 9444.838791529466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231774.74747474748,
            "unit": "ns",
            "range": "± 17172.963702679262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4066693.3333333335,
            "unit": "ns",
            "range": "± 52444.39867498676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3741300,
            "unit": "ns",
            "range": "± 64088.49650768369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21642.85714285714,
            "unit": "ns",
            "range": "± 2544.450196825183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89927.36842105263,
            "unit": "ns",
            "range": "± 6645.242132617879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76369.14893617021,
            "unit": "ns",
            "range": "± 6313.6015759073625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101003.1914893617,
            "unit": "ns",
            "range": "± 11168.450688441162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5968.367346938776,
            "unit": "ns",
            "range": "± 1105.2449407841552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20534.40860215054,
            "unit": "ns",
            "range": "± 2099.55971697463"
          }
        ]
      }
    ]
  }
}