window.BENCHMARK_DATA = {
  "lastUpdate": 1687253274541,
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
          "id": "a773290c3c3a18d5b2b87a7a12c0ea77f49f885b",
          "message": "Prepare 2.2.0",
          "timestamp": "2023-06-20T18:01:12+09:00",
          "tree_id": "3d26d1121715b7705e92c24024b98f0ed814593b",
          "url": "https://github.com/greymistcube/libplanet/commit/a773290c3c3a18d5b2b87a7a12c0ea77f49f885b"
        },
        "date": 1687253241477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10219809.563829787,
            "unit": "ns",
            "range": "± 1153518.723428837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26228572.90425532,
            "unit": "ns",
            "range": "± 2057004.4606677634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61256093.47849462,
            "unit": "ns",
            "range": "± 6197366.654603591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120442185.54395604,
            "unit": "ns",
            "range": "± 9571690.165356366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258660989.3617021,
            "unit": "ns",
            "range": "± 23949068.646530706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79818,
            "unit": "ns",
            "range": "± 9954.854051874274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382565.9222222222,
            "unit": "ns",
            "range": "± 59583.52298371746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318290.74731182796,
            "unit": "ns",
            "range": "± 33078.32060778858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318809.1304347826,
            "unit": "ns",
            "range": "± 23274.646702488462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4503362.840425532,
            "unit": "ns",
            "range": "± 264692.5795622912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3977392.8208955224,
            "unit": "ns",
            "range": "± 187689.24430638205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19624.51111111111,
            "unit": "ns",
            "range": "± 3778.31624482951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99624.32291666667,
            "unit": "ns",
            "range": "± 17775.38039003432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112078.92222222222,
            "unit": "ns",
            "range": "± 10545.866401429708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117917.97252747252,
            "unit": "ns",
            "range": "± 13445.070106292706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7333.064516129032,
            "unit": "ns",
            "range": "± 1494.9067064569003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19859.33695652174,
            "unit": "ns",
            "range": "± 2913.3362517879464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1904525.8555555556,
            "unit": "ns",
            "range": "± 337377.3501060997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3492940.131868132,
            "unit": "ns",
            "range": "± 506425.6747390635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2787074.5,
            "unit": "ns",
            "range": "± 331703.6430741112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7524837.3522727275,
            "unit": "ns",
            "range": "± 887880.7927650755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3788529.8260869565,
            "unit": "ns",
            "range": "± 395213.21148500097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4090621.3125,
            "unit": "ns",
            "range": "± 467758.8530690689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5039139.457894737,
            "unit": "ns",
            "range": "± 617152.5607760055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4767114.37628866,
            "unit": "ns",
            "range": "± 495511.822711066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8573046.645833334,
            "unit": "ns",
            "range": "± 951828.89205634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8224218.860260953,
            "unit": "ns",
            "range": "± 651004.9540851421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2114848.9388020835,
            "unit": "ns",
            "range": "± 34423.62358913367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1538462.6703447164,
            "unit": "ns",
            "range": "± 97568.97812694499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3974946.8728086893,
            "unit": "ns",
            "range": "± 210375.0631921759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1084081.6178278688,
            "unit": "ns",
            "range": "± 48756.55447417755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1009714.14679827,
            "unit": "ns",
            "range": "± 40434.16386233659"
          }
        ]
      }
    ]
  }
}