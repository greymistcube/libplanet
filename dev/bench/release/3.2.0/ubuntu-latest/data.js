window.BENCHMARK_DATA = {
  "lastUpdate": 1691655451725,
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
        "date": 1691655443307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4334292.952380952,
            "unit": "ns",
            "range": "± 99514.30272703327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4471132.574074074,
            "unit": "ns",
            "range": "± 187434.42347563946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5340168.346153846,
            "unit": "ns",
            "range": "± 145332.4087465538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4930277.566666666,
            "unit": "ns",
            "range": "± 145414.67805690027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7683113.615384615,
            "unit": "ns",
            "range": "± 208087.83672018448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10147330,
            "unit": "ns",
            "range": "± 376026.03102046007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26861516.666666668,
            "unit": "ns",
            "range": "± 417811.14639710926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67631667.33333333,
            "unit": "ns",
            "range": "± 501497.26664554456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135559861.26666668,
            "unit": "ns",
            "range": "± 1342156.3376707577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269259390.14285713,
            "unit": "ns",
            "range": "± 1285022.0814711472"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58221.13043478261,
            "unit": "ns",
            "range": "± 4055.1889082632024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6064127.141145834,
            "unit": "ns",
            "range": "± 64787.163441876546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927702.86015625,
            "unit": "ns",
            "range": "± 10514.149034058313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269655.4982421875,
            "unit": "ns",
            "range": "± 9971.974970366857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3089894.03125,
            "unit": "ns",
            "range": "± 6377.94855589309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972056.8559244792,
            "unit": "ns",
            "range": "± 9107.762582321295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890111.88203125,
            "unit": "ns",
            "range": "± 6473.160927603137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327732.224137931,
            "unit": "ns",
            "range": "± 14326.174307267596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321483.36363636365,
            "unit": "ns",
            "range": "± 11393.59211807521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297127.73529411765,
            "unit": "ns",
            "range": "± 9318.723704095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5364678.333333333,
            "unit": "ns",
            "range": "± 95324.61638202879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5017010.285714285,
            "unit": "ns",
            "range": "± 116631.52305579434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25215.09677419355,
            "unit": "ns",
            "range": "± 1689.1207711893765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108614.75531914894,
            "unit": "ns",
            "range": "± 7955.123322018319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91744.75257731958,
            "unit": "ns",
            "range": "± 6417.595960896183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101830.0824742268,
            "unit": "ns",
            "range": "± 15489.8206215876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6843.551020408163,
            "unit": "ns",
            "range": "± 661.1111565293752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25423.96875,
            "unit": "ns",
            "range": "± 1776.142724546799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738111.9186046512,
            "unit": "ns",
            "range": "± 91173.97241475999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3398661.9393939395,
            "unit": "ns",
            "range": "± 106212.27085268307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198359.111111111,
            "unit": "ns",
            "range": "± 115583.2563259056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5737582.484848484,
            "unit": "ns",
            "range": "± 169550.063344894"
          }
        ]
      }
    ]
  }
}