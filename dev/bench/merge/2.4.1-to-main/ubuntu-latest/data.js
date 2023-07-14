window.BENCHMARK_DATA = {
  "lastUpdate": 1689325113779,
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
          "id": "589bc3f9aa3318991231573683e452f6d1fc70dc",
          "message": "Merge tag '2.4.1' into merge/2.4.1-to-main\n\nLibplanet 2.4.1",
          "timestamp": "2023-07-14T17:43:32+09:00",
          "tree_id": "cede7080b7cb7a22e5c7e49ead453919777f42df",
          "url": "https://github.com/greymistcube/libplanet/commit/589bc3f9aa3318991231573683e452f6d1fc70dc"
        },
        "date": 1689325106352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317398.4871794872,
            "unit": "ns",
            "range": "± 16294.842061570336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308147.83720930235,
            "unit": "ns",
            "range": "± 11298.012416708803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287793.92957746476,
            "unit": "ns",
            "range": "± 14001.504467453227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4777002.2,
            "unit": "ns",
            "range": "± 49961.2987509904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4240057.066666666,
            "unit": "ns",
            "range": "± 39392.04867095945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25951.614583333332,
            "unit": "ns",
            "range": "± 2774.615771862709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112040.4947368421,
            "unit": "ns",
            "range": "± 8489.674885228933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90989.76530612246,
            "unit": "ns",
            "range": "± 8048.321300027394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125484.4387755102,
            "unit": "ns",
            "range": "± 19757.348648799856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7886.84693877551,
            "unit": "ns",
            "range": "± 1359.466832664278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25903.690721649484,
            "unit": "ns",
            "range": "± 3033.397669970729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626712.5212765958,
            "unit": "ns",
            "range": "± 87135.07946684326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3076181.8,
            "unit": "ns",
            "range": "± 80771.00917563181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2068822.9540229884,
            "unit": "ns",
            "range": "± 104576.44552358193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5556412.739130435,
            "unit": "ns",
            "range": "± 210277.16943125168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6285618.066666666,
            "unit": "ns",
            "range": "± 51330.39115900105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934308.4049479167,
            "unit": "ns",
            "range": "± 981.2165240685641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377162.9448242188,
            "unit": "ns",
            "range": "± 967.4130409599071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2698041.3849158655,
            "unit": "ns",
            "range": "± 2302.55911298267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844035.0639648438,
            "unit": "ns",
            "range": "± 393.4427464611588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767440.4270368303,
            "unit": "ns",
            "range": "± 342.63213063383705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3877825.411764706,
            "unit": "ns",
            "range": "± 77445.54567408867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4042625.3684210526,
            "unit": "ns",
            "range": "± 73499.70944100582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4816989.5,
            "unit": "ns",
            "range": "± 73838.2831554618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4409111.586206896,
            "unit": "ns",
            "range": "± 127438.99986646757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7033019.814814814,
            "unit": "ns",
            "range": "± 193556.40745271867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8950732.266666668,
            "unit": "ns",
            "range": "± 140520.84877924022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23283248.8,
            "unit": "ns",
            "range": "± 211588.76476491577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58313957.6,
            "unit": "ns",
            "range": "± 226586.78765787356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115671542.85714285,
            "unit": "ns",
            "range": "± 884349.5376348093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232774996.93333334,
            "unit": "ns",
            "range": "± 863533.925274216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55901.54838709677,
            "unit": "ns",
            "range": "± 3911.1869362574103"
          }
        ]
      }
    ]
  }
}