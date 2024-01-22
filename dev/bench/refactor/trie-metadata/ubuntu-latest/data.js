window.BENCHMARK_DATA = {
  "lastUpdate": 1705898695093,
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
          "id": "b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d",
          "message": "Move TrieMetadata to Libplanet.Store",
          "timestamp": "2024-01-22T13:33:41+09:00",
          "tree_id": "f25875bc53002857b9c25706e851573729068f20",
          "url": "https://github.com/greymistcube/libplanet/commit/b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d"
        },
        "date": 1705898688655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734249.099158654,
            "unit": "ns",
            "range": "± 13686.832427460376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209727.5631975445,
            "unit": "ns",
            "range": "± 1888.2031139317621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752797.3510091145,
            "unit": "ns",
            "range": "± 12605.397723183762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935473.9822823661,
            "unit": "ns",
            "range": "± 20189.964749206858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616048.0158503606,
            "unit": "ns",
            "range": "± 1195.9367005556871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580563.1714242789,
            "unit": "ns",
            "range": "± 1515.7200386219376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411335.743243243,
            "unit": "ns",
            "range": "± 81605.68379081794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476397.216981132,
            "unit": "ns",
            "range": "± 102347.86281737272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121293.111111111,
            "unit": "ns",
            "range": "± 80430.3566970224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3064728.5,
            "unit": "ns",
            "range": "± 94279.20947647898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13679767.395348838,
            "unit": "ns",
            "range": "± 925005.0655369762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41345.25257731959,
            "unit": "ns",
            "range": "± 5521.48029862865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207145.7857142857,
            "unit": "ns",
            "range": "± 3568.869831420918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194774.89130434784,
            "unit": "ns",
            "range": "± 7412.814230861046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164057.16666666666,
            "unit": "ns",
            "range": "± 3441.216034211983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3165094.714285714,
            "unit": "ns",
            "range": "± 30078.302584647732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879216.4,
            "unit": "ns",
            "range": "± 47752.250081316284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12528.608695652174,
            "unit": "ns",
            "range": "± 942.4985260316892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67102.53125,
            "unit": "ns",
            "range": "± 5256.926415297751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53830.88888888889,
            "unit": "ns",
            "range": "± 1829.2111918062908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59569.68085106383,
            "unit": "ns",
            "range": "± 9931.32185049523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3511.34375,
            "unit": "ns",
            "range": "± 553.7300563712859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15664.186813186812,
            "unit": "ns",
            "range": "± 1582.3628458176636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5540052.066666666,
            "unit": "ns",
            "range": "± 25732.3837202038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14080435.76923077,
            "unit": "ns",
            "range": "± 78645.93020531307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36383731.07692308,
            "unit": "ns",
            "range": "± 198358.9191669407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73636654.75,
            "unit": "ns",
            "range": "± 264931.11487572663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 157583581.7142857,
            "unit": "ns",
            "range": "± 620009.9427120166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970224.7010309278,
            "unit": "ns",
            "range": "± 89059.30445777935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1849402.238095238,
            "unit": "ns",
            "range": "± 66064.64317244818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1605129.5913978494,
            "unit": "ns",
            "range": "± 133515.0275754883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12730125.010416666,
            "unit": "ns",
            "range": "± 1048577.958286078"
          }
        ]
      }
    ]
  }
}