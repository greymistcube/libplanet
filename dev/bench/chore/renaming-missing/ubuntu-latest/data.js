window.BENCHMARK_DATA = {
  "lastUpdate": 1688653936394,
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
          "id": "60eacade4de9605e11fb451c3e6d13a34edbd2bf",
          "message": "Rename for consistency",
          "timestamp": "2023-07-06T23:19:19+09:00",
          "tree_id": "e811de14bbc4e38e3ab42577020221039d670e6e",
          "url": "https://github.com/greymistcube/libplanet/commit/60eacade4de9605e11fb451c3e6d13a34edbd2bf"
        },
        "date": 1688653928549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282904.347826087,
            "unit": "ns",
            "range": "± 6781.959911202229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268600,
            "unit": "ns",
            "range": "± 5893.151174815624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235968.62962962964,
            "unit": "ns",
            "range": "± 6424.834724891002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276807.333333333,
            "unit": "ns",
            "range": "± 43436.402280751085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3906070.066666667,
            "unit": "ns",
            "range": "± 34371.4987421403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19367.74193548387,
            "unit": "ns",
            "range": "± 1709.2562131652583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92453.58762886598,
            "unit": "ns",
            "range": "± 6590.04967538273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74376.89743589744,
            "unit": "ns",
            "range": "± 2564.237783485847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92020.33673469388,
            "unit": "ns",
            "range": "± 10939.7621847386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5015.4639175257735,
            "unit": "ns",
            "range": "± 770.3273392668817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17689.36170212766,
            "unit": "ns",
            "range": "± 1405.459254915339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377862.8210526316,
            "unit": "ns",
            "range": "± 87046.2310961371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596098.90625,
            "unit": "ns",
            "range": "± 71652.12096510039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1800967.91954023,
            "unit": "ns",
            "range": "± 97547.78462698672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4695828.172413793,
            "unit": "ns",
            "range": "± 132685.67403348113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6057320.751674107,
            "unit": "ns",
            "range": "± 27261.232696334486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871791.524609375,
            "unit": "ns",
            "range": "± 3730.9010436856133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372974.8588541667,
            "unit": "ns",
            "range": "± 833.5951508611458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2522616.533203125,
            "unit": "ns",
            "range": "± 1877.5312838427521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804269.2633463541,
            "unit": "ns",
            "range": "± 1369.6543579757758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739766.0869791667,
            "unit": "ns",
            "range": "± 1185.0341475191628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356894.117647059,
            "unit": "ns",
            "range": "± 108193.73460036222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3554086.6666666665,
            "unit": "ns",
            "range": "± 53747.56960175258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4340050.071428572,
            "unit": "ns",
            "range": "± 48256.73034042352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3880468.4210526315,
            "unit": "ns",
            "range": "± 83554.18104194813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6233006.5625,
            "unit": "ns",
            "range": "± 110175.29036825438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7984815.933333334,
            "unit": "ns",
            "range": "± 72925.44446063357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20182392.4,
            "unit": "ns",
            "range": "± 101341.61817112878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51020004.53333333,
            "unit": "ns",
            "range": "± 209101.43922640127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102112293.92857143,
            "unit": "ns",
            "range": "± 415452.4832067884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203900687.06666666,
            "unit": "ns",
            "range": "± 699560.9772829432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47036.104651162794,
            "unit": "ns",
            "range": "± 2565.653454335331"
          }
        ]
      }
    ]
  }
}