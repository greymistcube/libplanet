window.BENCHMARK_DATA = {
  "lastUpdate": 1692945369462,
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
          "id": "6fcd8099d02bc91daaa0343e8fb3c79eaa0b5993",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-25T15:02:56+09:00",
          "tree_id": "ed0b15e2dee8bfb58845170ff9685d398e0e31ef",
          "url": "https://github.com/greymistcube/libplanet/commit/6fcd8099d02bc91daaa0343e8fb3c79eaa0b5993"
        },
        "date": 1692945347087,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413862.6262626264,
            "unit": "ns",
            "range": "± 119544.68431567505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2663095.744680851,
            "unit": "ns",
            "range": "± 175067.88171307725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775313.2653061224,
            "unit": "ns",
            "range": "± 177161.5761078617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4720186.170212766,
            "unit": "ns",
            "range": "± 269056.356810267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50471.739130434784,
            "unit": "ns",
            "range": "± 3292.0425566713893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8068430.23255814,
            "unit": "ns",
            "range": "± 568943.8169449997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21792322.222222224,
            "unit": "ns",
            "range": "± 832057.8970326144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52278161.538461536,
            "unit": "ns",
            "range": "± 828860.4803568788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108630173.49397591,
            "unit": "ns",
            "range": "± 5740576.511034842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213637940.74074075,
            "unit": "ns",
            "range": "± 5608166.949826165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4759572.225215517,
            "unit": "ns",
            "range": "± 135253.84411060755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1465836.1787683824,
            "unit": "ns",
            "range": "± 29225.756989663896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1108777.6953125,
            "unit": "ns",
            "range": "± 17243.785932613377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706119.2447916665,
            "unit": "ns",
            "range": "± 38298.246950815825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878155.4138183594,
            "unit": "ns",
            "range": "± 16502.653357582723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789700.5078125,
            "unit": "ns",
            "range": "± 14742.355247728972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3287891.358024691,
            "unit": "ns",
            "range": "± 172373.98744991285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3478069.230769231,
            "unit": "ns",
            "range": "± 194992.96664940263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4302457.575757576,
            "unit": "ns",
            "range": "± 132619.31191926534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3782712.5,
            "unit": "ns",
            "range": "± 94976.58435681374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6090713.829787234,
            "unit": "ns",
            "range": "± 232796.14839329498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252813.63636363635,
            "unit": "ns",
            "range": "± 11252.690431983008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242993.33333333334,
            "unit": "ns",
            "range": "± 8587.493205122353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200056.52173913043,
            "unit": "ns",
            "range": "± 3770.800022054221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3958100,
            "unit": "ns",
            "range": "± 88037.5219049122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3730075,
            "unit": "ns",
            "range": "± 123798.03916056184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18539.17525773196,
            "unit": "ns",
            "range": "± 1901.4006186794977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81254.63917525773,
            "unit": "ns",
            "range": "± 4993.078972824883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65654.76190476191,
            "unit": "ns",
            "range": "± 1546.439843794834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83431.57894736843,
            "unit": "ns",
            "range": "± 14243.447639946322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4868.75,
            "unit": "ns",
            "range": "± 525.8201613719876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18938.297872340427,
            "unit": "ns",
            "range": "± 2659.9723655682633"
          }
        ]
      }
    ]
  }
}