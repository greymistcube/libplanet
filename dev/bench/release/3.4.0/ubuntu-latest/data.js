window.BENCHMARK_DATA = {
  "lastUpdate": 1695630993864,
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
          "id": "8e4b006558fdac842074ff6ab4d581ac3656284f",
          "message": "Libplanet 3.4.0",
          "timestamp": "2023-09-25T17:21:47+09:00",
          "tree_id": "260dfc4ebefa249cd7442ff61da7dfb4918da96d",
          "url": "https://github.com/greymistcube/libplanet/commit/8e4b006558fdac842074ff6ab4d581ac3656284f"
        },
        "date": 1695630986642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283949.07692307694,
            "unit": "ns",
            "range": "± 6963.638628895539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272758.925,
            "unit": "ns",
            "range": "± 8196.813287562054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256348.65,
            "unit": "ns",
            "range": "± 9118.33297165942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4627963.461538462,
            "unit": "ns",
            "range": "± 31147.15055350271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4170740.9285714286,
            "unit": "ns",
            "range": "± 28423.267698961234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22532.795698924732,
            "unit": "ns",
            "range": "± 1526.2486802268966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96496.71830985915,
            "unit": "ns",
            "range": "± 4580.1547764960915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81710.4857142857,
            "unit": "ns",
            "range": "± 3947.327419997298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92132.72448979592,
            "unit": "ns",
            "range": "± 12483.059450014245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6310.484536082474,
            "unit": "ns",
            "range": "± 661.9994510540597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21929.297872340427,
            "unit": "ns",
            "range": "± 1616.5966096989218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3696577.6923076925,
            "unit": "ns",
            "range": "± 60928.270076903565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3844262.2666666666,
            "unit": "ns",
            "range": "± 38669.303892043856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4578147.2,
            "unit": "ns",
            "range": "± 81032.97353917109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4558071.266666667,
            "unit": "ns",
            "range": "± 172125.88086965465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11114734.61764706,
            "unit": "ns",
            "range": "± 223603.2986197593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423878.2702702703,
            "unit": "ns",
            "range": "± 60212.94810789256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2794368.5,
            "unit": "ns",
            "range": "± 95814.22976492555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171699.9367088606,
            "unit": "ns",
            "range": "± 106606.44163973248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9197021.652173912,
            "unit": "ns",
            "range": "± 226615.36758260857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48255.5,
            "unit": "ns",
            "range": "± 3292.5933381014256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8641989.933333334,
            "unit": "ns",
            "range": "± 110076.37826622714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23059142.07142857,
            "unit": "ns",
            "range": "± 195619.50289842082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57630669,
            "unit": "ns",
            "range": "± 201473.8295942791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116340373.6923077,
            "unit": "ns",
            "range": "± 361130.4673065734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229526317.6,
            "unit": "ns",
            "range": "± 732787.2955788934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5007720.467548077,
            "unit": "ns",
            "range": "± 23632.096670596315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586216.2024739583,
            "unit": "ns",
            "range": "± 1599.7625209670443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085601.6057692308,
            "unit": "ns",
            "range": "± 445.17404393668556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618570.553185096,
            "unit": "ns",
            "range": "± 2466.1042284880723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838230.5638671875,
            "unit": "ns",
            "range": "± 2842.375601717408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747473.1966796875,
            "unit": "ns",
            "range": "± 266.5682587217775"
          }
        ]
      }
    ]
  }
}