window.BENCHMARK_DATA = {
  "lastUpdate": 1691655695405,
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
          "id": "c4a3c54845f711796891067c0a6f57d1d81718d2",
          "message": "Release 3.2.0",
          "timestamp": "2023-08-10T17:00:18+09:00",
          "tree_id": "1371cd3f03bb4071f0170747f91bc7ad2a1abe94",
          "url": "https://github.com/greymistcube/libplanet/commit/c4a3c54845f711796891067c0a6f57d1d81718d2"
        },
        "date": 1691655665902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1631883.1578947369,
            "unit": "ns",
            "range": "± 158019.8867451274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3119309.574468085,
            "unit": "ns",
            "range": "± 196848.34404308596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2070709.375,
            "unit": "ns",
            "range": "± 168943.45181505027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5612712.765957447,
            "unit": "ns",
            "range": "± 418062.8342530164"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58701.0989010989,
            "unit": "ns",
            "range": "± 4461.999912981086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9443095.833333334,
            "unit": "ns",
            "range": "± 245326.59417187326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25923464.583333332,
            "unit": "ns",
            "range": "± 1020954.1589495675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62232338.461538464,
            "unit": "ns",
            "range": "± 545763.3378099301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130208825.71428572,
            "unit": "ns",
            "range": "± 4199137.579547304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261080025,
            "unit": "ns",
            "range": "± 8492637.478507906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5744238.072916667,
            "unit": "ns",
            "range": "± 95241.07160443002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1798472.9910714286,
            "unit": "ns",
            "range": "± 25364.546476232787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1309110.1888020833,
            "unit": "ns",
            "range": "± 27647.647639297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3296767.4753289474,
            "unit": "ns",
            "range": "± 70805.75706028679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047586.3141741072,
            "unit": "ns",
            "range": "± 17373.053795255568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968657.9557291666,
            "unit": "ns",
            "range": "± 15310.974000429738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4018500,
            "unit": "ns",
            "range": "± 109312.09631143298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4211266.666666667,
            "unit": "ns",
            "range": "± 105679.78979452266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5007676,
            "unit": "ns",
            "range": "± 126463.15761253684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4586925.352112676,
            "unit": "ns",
            "range": "± 223124.43403261385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7131413.043478261,
            "unit": "ns",
            "range": "± 163236.55813892756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308906.1224489796,
            "unit": "ns",
            "range": "± 11378.715659863692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297923.21428571426,
            "unit": "ns",
            "range": "± 12842.641912733583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270541.9540229885,
            "unit": "ns",
            "range": "± 14701.283114312297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5004433.333333333,
            "unit": "ns",
            "range": "± 54691.78139703398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4580088.235294118,
            "unit": "ns",
            "range": "± 93121.61995445084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25534.615384615383,
            "unit": "ns",
            "range": "± 2183.0113287700688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103626.08695652174,
            "unit": "ns",
            "range": "± 6870.943271698939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89271.11111111111,
            "unit": "ns",
            "range": "± 6077.629720641384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100987.62886597938,
            "unit": "ns",
            "range": "± 17621.874768617123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6534.408602150537,
            "unit": "ns",
            "range": "± 956.1579166980363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24408.42105263158,
            "unit": "ns",
            "range": "± 2155.3329780710415"
          }
        ]
      }
    ]
  }
}