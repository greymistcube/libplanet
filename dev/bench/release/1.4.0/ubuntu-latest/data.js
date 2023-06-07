window.BENCHMARK_DATA = {
  "lastUpdate": 1686127671653,
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
          "id": "c904ed9407d3095e90ee6036d60d223ecf31973c",
          "message": "Release 1.4.0",
          "timestamp": "2023-06-07T17:32:01+09:00",
          "tree_id": "1f32bb1e8779c3a4e467e6db02a8d55373fb9578",
          "url": "https://github.com/greymistcube/libplanet/commit/c904ed9407d3095e90ee6036d60d223ecf31973c"
        },
        "date": 1686127662400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1720181.5379746836,
            "unit": "ns",
            "range": "± 88849.2079446743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3315120.3333333335,
            "unit": "ns",
            "range": "± 96186.65496667488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2760000.25,
            "unit": "ns",
            "range": "± 132309.56791002178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6539029.285714285,
            "unit": "ns",
            "range": "± 149712.11446811608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4226762.409090909,
            "unit": "ns",
            "range": "± 99937.65775039056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4388919.25,
            "unit": "ns",
            "range": "± 113024.85344777627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5349794.466666667,
            "unit": "ns",
            "range": "± 92736.03740792362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5520529.333333333,
            "unit": "ns",
            "range": "± 161516.82052671007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8587368.535714285,
            "unit": "ns",
            "range": "± 238447.4336001127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9982665.8,
            "unit": "ns",
            "range": "± 107265.12233593386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26463971.2,
            "unit": "ns",
            "range": "± 215446.07554864927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67091989.53333333,
            "unit": "ns",
            "range": "± 442442.11729863065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131408935.66666667,
            "unit": "ns",
            "range": "± 537743.295523546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261916222.8,
            "unit": "ns",
            "range": "± 1404312.458485453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7246064.041666667,
            "unit": "ns",
            "range": "± 31841.493716652072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2241263.75703125,
            "unit": "ns",
            "range": "± 2998.4014581948213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1616052.475,
            "unit": "ns",
            "range": "± 3532.5887100936025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3082353.1344866073,
            "unit": "ns",
            "range": "± 5904.052390811984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982700.6605747768,
            "unit": "ns",
            "range": "± 3005.791369305983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903622.6153645833,
            "unit": "ns",
            "range": "± 4163.376615795211"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58660.914893617024,
            "unit": "ns",
            "range": "± 3348.226880005423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346302.67391304346,
            "unit": "ns",
            "range": "± 13360.785091793152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338531.0256410256,
            "unit": "ns",
            "range": "± 11274.998887821579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306960.6206896552,
            "unit": "ns",
            "range": "± 8850.299508304763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5332323.466666667,
            "unit": "ns",
            "range": "± 39738.42568394091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4818949.933333334,
            "unit": "ns",
            "range": "± 35060.13372859075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24754.659574468085,
            "unit": "ns",
            "range": "± 1579.6017774545116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109193.08510638298,
            "unit": "ns",
            "range": "± 7820.929846897897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100651.66666666667,
            "unit": "ns",
            "range": "± 6881.207382837262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117239.33673469388,
            "unit": "ns",
            "range": "± 16634.84016819889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7414.397849462365,
            "unit": "ns",
            "range": "± 903.0152406122135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23918.489361702126,
            "unit": "ns",
            "range": "± 1897.9527495885013"
          }
        ]
      }
    ]
  }
}