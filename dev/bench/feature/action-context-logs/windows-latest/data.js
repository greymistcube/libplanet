window.BENCHMARK_DATA = {
  "lastUpdate": 1688621912911,
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
          "id": "53865623b75169fd62a87bd0c1fbb9e6a4741632",
          "message": "Expose Logs for ActionContext",
          "timestamp": "2023-07-06T14:21:34+09:00",
          "tree_id": "7d248476019cf58680d210b23add1a089dcb8e18",
          "url": "https://github.com/greymistcube/libplanet/commit/53865623b75169fd62a87bd0c1fbb9e6a4741632"
        },
        "date": 1688621892046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439373.7373737374,
            "unit": "ns",
            "range": "± 102931.71858563105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2735942.8571428573,
            "unit": "ns",
            "range": "± 133032.01267933796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1832020,
            "unit": "ns",
            "range": "± 124008.32205700527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4862770.9677419355,
            "unit": "ns",
            "range": "± 137444.81848739248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46755.555555555555,
            "unit": "ns",
            "range": "± 2610.398872233859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7640926.315789473,
            "unit": "ns",
            "range": "± 165210.05095233314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20369107.14285714,
            "unit": "ns",
            "range": "± 253813.77626515474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51507150,
            "unit": "ns",
            "range": "± 538413.0613343111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104582450,
            "unit": "ns",
            "range": "± 2050485.6224806844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207747030,
            "unit": "ns",
            "range": "± 3022500.6494622957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4920548.541666667,
            "unit": "ns",
            "range": "± 29824.408085203737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537876.171875,
            "unit": "ns",
            "range": "± 6222.662984170282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1197811.8098958333,
            "unit": "ns",
            "range": "± 6997.076122948731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676982.7864583335,
            "unit": "ns",
            "range": "± 9447.595328097592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848010.9765625,
            "unit": "ns",
            "range": "± 2650.912571090229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793038.0161830357,
            "unit": "ns",
            "range": "± 2245.569464893034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335176,
            "unit": "ns",
            "range": "± 85335.7793269232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3559440,
            "unit": "ns",
            "range": "± 88617.09027978279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4208841.025641026,
            "unit": "ns",
            "range": "± 145344.81816474034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3820453.5714285714,
            "unit": "ns",
            "range": "± 108761.38503927474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6371592.5,
            "unit": "ns",
            "range": "± 222503.68638548037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280817.64705882355,
            "unit": "ns",
            "range": "± 5197.984620758997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258000,
            "unit": "ns",
            "range": "± 7858.724162009089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225642.62295081967,
            "unit": "ns",
            "range": "± 10112.920102792492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4179928.5714285714,
            "unit": "ns",
            "range": "± 70103.32405782228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794378.5714285714,
            "unit": "ns",
            "range": "± 35261.18324668138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20527.956989247312,
            "unit": "ns",
            "range": "± 1493.1994822468098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97232.98969072165,
            "unit": "ns",
            "range": "± 6876.934904227023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77144.08602150538,
            "unit": "ns",
            "range": "± 4581.2819158527955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95200,
            "unit": "ns",
            "range": "± 10999.290686421356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5394.791666666667,
            "unit": "ns",
            "range": "± 873.0309925971059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18265.217391304348,
            "unit": "ns",
            "range": "± 1528.9466878212968"
          }
        ]
      }
    ]
  }
}