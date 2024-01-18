window.BENCHMARK_DATA = {
  "lastUpdate": 1705577940179,
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
          "id": "9831daffbd0096dfd13fb562ee8aa1d0f6beda36",
          "message": "Merge fix",
          "timestamp": "2024-01-18T20:25:19+09:00",
          "tree_id": "eefc446389a4bcddee5ed9fe742777ad6904810a",
          "url": "https://github.com/greymistcube/libplanet/commit/9831daffbd0096dfd13fb562ee8aa1d0f6beda36"
        },
        "date": 1705577920277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070712,
            "unit": "ns",
            "range": "± 154373.17849414074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1764446.551724138,
            "unit": "ns",
            "range": "± 67489.72167493681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1577097.93814433,
            "unit": "ns",
            "range": "± 142203.21138792118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11048285.869565217,
            "unit": "ns",
            "range": "± 981868.3457976715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34627.27272727273,
            "unit": "ns",
            "range": "± 2124.2295302482457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5081321.428571428,
            "unit": "ns",
            "range": "± 33195.074439334625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13323335.714285715,
            "unit": "ns",
            "range": "± 152424.2642058059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32883857.14285714,
            "unit": "ns",
            "range": "± 204301.15954445486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66440714.28571428,
            "unit": "ns",
            "range": "± 501850.11531507917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136355293.33333334,
            "unit": "ns",
            "range": "± 649120.5429179508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3419414.6484375,
            "unit": "ns",
            "range": "± 7795.589001848557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084988.978794643,
            "unit": "ns",
            "range": "± 1805.4640801156522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750481.6471354166,
            "unit": "ns",
            "range": "± 1304.0783759949159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938352.6088169643,
            "unit": "ns",
            "range": "± 2412.733915331347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619155.2525111607,
            "unit": "ns",
            "range": "± 2009.6083216796535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584947.9752604166,
            "unit": "ns",
            "range": "± 1245.844811284727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2234382.0512820515,
            "unit": "ns",
            "range": "± 76406.44734367324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2299403.703703704,
            "unit": "ns",
            "range": "± 63663.81342333445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2862940,
            "unit": "ns",
            "range": "± 63849.758548225276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2838413.5802469137,
            "unit": "ns",
            "range": "± 148969.72910048402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12559314.444444444,
            "unit": "ns",
            "range": "± 1513714.5252478477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186514,
            "unit": "ns",
            "range": "± 7533.266630250716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173325,
            "unit": "ns",
            "range": "± 7119.398382822339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143754.54545454544,
            "unit": "ns",
            "range": "± 4562.352114664301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2872418.75,
            "unit": "ns",
            "range": "± 54636.32758217436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2541553.3333333335,
            "unit": "ns",
            "range": "± 41834.945520063324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14006.593406593407,
            "unit": "ns",
            "range": "± 1801.2219431265235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62890.625,
            "unit": "ns",
            "range": "± 8935.759952071936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53019.791666666664,
            "unit": "ns",
            "range": "± 5213.517244759387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67113.1313131313,
            "unit": "ns",
            "range": "± 16247.082290428907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3513.265306122449,
            "unit": "ns",
            "range": "± 626.9937692026753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12474.725274725275,
            "unit": "ns",
            "range": "± 1440.4160977990127"
          }
        ]
      }
    ]
  }
}