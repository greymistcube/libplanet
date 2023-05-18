window.BENCHMARK_DATA = {
  "lastUpdate": 1684399853381,
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
          "id": "4cee5a03eb1b4fc8fd2c2ac78089220e7f5184da",
          "message": "Cleanup",
          "timestamp": "2023-05-18T17:31:50+09:00",
          "tree_id": "b8f88932d597c482d3db31fe2450c40a34019690",
          "url": "https://github.com/greymistcube/libplanet/commit/4cee5a03eb1b4fc8fd2c2ac78089220e7f5184da"
        },
        "date": 1684399826544,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617088.5416666667,
            "unit": "ns",
            "range": "± 137730.4926447541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3082898.795180723,
            "unit": "ns",
            "range": "± 163889.2163701845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2555218.75,
            "unit": "ns",
            "range": "± 182943.06638808065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6181592.647058823,
            "unit": "ns",
            "range": "± 294844.1704875652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55260,
            "unit": "ns",
            "range": "± 3813.7879756751363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8489737.5,
            "unit": "ns",
            "range": "± 257842.02434073665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23977267.391304348,
            "unit": "ns",
            "range": "± 915221.173525066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60201787.5,
            "unit": "ns",
            "range": "± 1856980.8955103233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120828530.43478261,
            "unit": "ns",
            "range": "± 3026023.2306136447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240274520,
            "unit": "ns",
            "range": "± 4332232.059672836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5892413.895089285,
            "unit": "ns",
            "range": "± 64035.73733840619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867377.845982143,
            "unit": "ns",
            "range": "± 28092.857502655006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439763.0208333333,
            "unit": "ns",
            "range": "± 24917.273464198744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3180069.831730769,
            "unit": "ns",
            "range": "± 38481.39530514962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014922.2916666666,
            "unit": "ns",
            "range": "± 11130.889275957376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918621.3491586539,
            "unit": "ns",
            "range": "± 6907.558778544079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760310.465116279,
            "unit": "ns",
            "range": "± 128310.51647419143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3975475.5555555555,
            "unit": "ns",
            "range": "± 148866.7069372579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4874386.956521739,
            "unit": "ns",
            "range": "± 114207.18137087458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4944065.909090909,
            "unit": "ns",
            "range": "± 184847.71223295943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7779082.5,
            "unit": "ns",
            "range": "± 176630.33233644228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317147.61904761905,
            "unit": "ns",
            "range": "± 11341.984127519163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297231.8181818182,
            "unit": "ns",
            "range": "± 10991.15442922642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282311.4583333333,
            "unit": "ns",
            "range": "± 16277.222508392499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4767313.333333333,
            "unit": "ns",
            "range": "± 69077.39827455107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4334152.94117647,
            "unit": "ns",
            "range": "± 87496.56505862858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24531.25,
            "unit": "ns",
            "range": "± 2165.437235537579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104300,
            "unit": "ns",
            "range": "± 5733.008922402601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88353.01204819277,
            "unit": "ns",
            "range": "± 4720.178204299164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114996.90721649484,
            "unit": "ns",
            "range": "± 18594.205266741526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7165.979381443299,
            "unit": "ns",
            "range": "± 1315.0480502895884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22361.290322580644,
            "unit": "ns",
            "range": "± 2050.0812421899877"
          }
        ]
      }
    ]
  }
}