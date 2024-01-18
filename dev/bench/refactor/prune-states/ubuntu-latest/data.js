window.BENCHMARK_DATA = {
  "lastUpdate": 1705567283910,
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
          "id": "46bdf3567a04df25b0114e104657b6d6f285e9b4",
          "message": "Updated tests",
          "timestamp": "2024-01-18T17:29:08+09:00",
          "tree_id": "9ecf5d78b18d3302db8b279468415eba52fde7b0",
          "url": "https://github.com/greymistcube/libplanet/commit/46bdf3567a04df25b0114e104657b6d6f285e9b4"
        },
        "date": 1705567276919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3690308.6809895835,
            "unit": "ns",
            "range": "± 5563.169888882821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194413.4822716345,
            "unit": "ns",
            "range": "± 4186.20386071231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 804164.5723958333,
            "unit": "ns",
            "range": "± 14357.91802262711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929534.3560697115,
            "unit": "ns",
            "range": "± 11851.421029319008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618190.4635667067,
            "unit": "ns",
            "range": "± 1817.5212915435086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579046.6026141827,
            "unit": "ns",
            "range": "± 721.8932467433121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2490611.4571428574,
            "unit": "ns",
            "range": "± 80652.90417707623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2667115.8870967743,
            "unit": "ns",
            "range": "± 80794.30219542193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3215983.5384615385,
            "unit": "ns",
            "range": "± 47571.42463639172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3014753.038961039,
            "unit": "ns",
            "range": "± 153691.30711826918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7013278.933333334,
            "unit": "ns",
            "range": "± 206293.6168733416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42399.52127659575,
            "unit": "ns",
            "range": "± 5581.039284895102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206455.8,
            "unit": "ns",
            "range": "± 19145.59280362578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194762.80701754385,
            "unit": "ns",
            "range": "± 8375.230694985996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172049.33333333334,
            "unit": "ns",
            "range": "± 3764.0909366950928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3066748.433333333,
            "unit": "ns",
            "range": "± 42925.69532254323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2771757.3571428573,
            "unit": "ns",
            "range": "± 41236.26057592655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12542.59090909091,
            "unit": "ns",
            "range": "± 1271.988900012687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65335.56989247312,
            "unit": "ns",
            "range": "± 6074.209441131896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69271.49,
            "unit": "ns",
            "range": "± 19395.15911876784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67031.07291666667,
            "unit": "ns",
            "range": "± 15256.849465935164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2945.7938144329896,
            "unit": "ns",
            "range": "± 809.3598027935456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14400.530612244898,
            "unit": "ns",
            "range": "± 3175.764949506992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5913972.916666667,
            "unit": "ns",
            "range": "± 23165.478549923584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15201841.714285715,
            "unit": "ns",
            "range": "± 112477.28940626778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38852419.666666664,
            "unit": "ns",
            "range": "± 364197.00743162556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75767910.78571428,
            "unit": "ns",
            "range": "± 721178.8739976296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151900986.5,
            "unit": "ns",
            "range": "± 1235583.7089626133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050472.5578947368,
            "unit": "ns",
            "range": "± 85965.87164420044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2039017.2272727273,
            "unit": "ns",
            "range": "± 73220.76427501228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1577121.3595505618,
            "unit": "ns",
            "range": "± 103992.1832621051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5999916.357142857,
            "unit": "ns",
            "range": "± 196829.24493926545"
          }
        ]
      }
    ]
  }
}