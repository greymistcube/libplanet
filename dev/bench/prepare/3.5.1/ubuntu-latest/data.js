window.BENCHMARK_DATA = {
  "lastUpdate": 1696420256468,
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
          "id": "4b291f9f2f211836d49e6e0dc09e2ce4eb81f773",
          "message": "Prepare 3.5.1",
          "timestamp": "2023-10-04T20:35:54+09:00",
          "tree_id": "6660c95a6a1132eb392ccdb1480cc8a13c802149",
          "url": "https://github.com/greymistcube/libplanet/commit/4b291f9f2f211836d49e6e0dc09e2ce4eb81f773"
        },
        "date": 1696420249094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55018.25274725275,
            "unit": "ns",
            "range": "± 4784.11113674655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8478225.866666667,
            "unit": "ns",
            "range": "± 150647.087961456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22877534.5,
            "unit": "ns",
            "range": "± 226429.47028082242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59174978,
            "unit": "ns",
            "range": "± 389457.1885173737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117126165.53333333,
            "unit": "ns",
            "range": "± 1069741.8910902136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230853084.15384614,
            "unit": "ns",
            "range": "± 2038501.2725995474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283988.75,
            "unit": "ns",
            "range": "± 9717.278699333101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274771.53571428574,
            "unit": "ns",
            "range": "± 11687.443299174913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255325.95918367346,
            "unit": "ns",
            "range": "± 16344.711175820674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4562996.266666667,
            "unit": "ns",
            "range": "± 77235.0240596534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4100539.6875,
            "unit": "ns",
            "range": "± 75294.15233931407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24400.484210526316,
            "unit": "ns",
            "range": "± 2181.243115519992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93026.3125,
            "unit": "ns",
            "range": "± 6330.50619130555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79219.70103092784,
            "unit": "ns",
            "range": "± 6561.423157943946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90432.40860215054,
            "unit": "ns",
            "range": "± 12435.213270873126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5936.826530612245,
            "unit": "ns",
            "range": "± 855.6579553819726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22217.010416666668,
            "unit": "ns",
            "range": "± 2215.567065322777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483484.8072289156,
            "unit": "ns",
            "range": "± 75545.27809628681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2832571.1333333333,
            "unit": "ns",
            "range": "± 70697.85264735504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2204540.0674157306,
            "unit": "ns",
            "range": "± 120666.9701136334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9271885.4,
            "unit": "ns",
            "range": "± 300790.7052744189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5080043.80859375,
            "unit": "ns",
            "range": "± 20551.760558565995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1594064.70625,
            "unit": "ns",
            "range": "± 2327.0356391376613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1080093.3589564732,
            "unit": "ns",
            "range": "± 826.3601473288691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685304.70859375,
            "unit": "ns",
            "range": "± 3804.2490365053955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846075.18046875,
            "unit": "ns",
            "range": "± 1083.1490821786392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746735.9964425223,
            "unit": "ns",
            "range": "± 556.5929070907091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3692814.5625,
            "unit": "ns",
            "range": "± 61157.761528655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3879580.375,
            "unit": "ns",
            "range": "± 71589.08826338923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4614266.266666667,
            "unit": "ns",
            "range": "± 70256.4723866031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4581571.666666667,
            "unit": "ns",
            "range": "± 149163.41548095114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10948081.5,
            "unit": "ns",
            "range": "± 243165.4803508458"
          }
        ]
      }
    ]
  }
}