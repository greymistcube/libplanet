window.BENCHMARK_DATA = {
  "lastUpdate": 1695085231071,
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
          "id": "86231891c004ef7bec83a29f3f51478f5228fd50",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:40:37+09:00",
          "tree_id": "c1b09f4047d1684df6c3011fc1869c6becd44299",
          "url": "https://github.com/greymistcube/libplanet/commit/86231891c004ef7bec83a29f3f51478f5228fd50"
        },
        "date": 1695085213201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9989919.67,
            "unit": "ns",
            "range": "± 1624288.6502266002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24138399.908163264,
            "unit": "ns",
            "range": "± 2959116.5932752024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56390021.8,
            "unit": "ns",
            "range": "± 7297601.7361825565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117652251.94,
            "unit": "ns",
            "range": "± 12347576.90584439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245027603.7777778,
            "unit": "ns",
            "range": "± 25028020.517739084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73086.7258064516,
            "unit": "ns",
            "range": "± 17762.1571393211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307394.0444444445,
            "unit": "ns",
            "range": "± 21390.82442213663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291225.0657894737,
            "unit": "ns",
            "range": "± 14432.308261984545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284599.8125,
            "unit": "ns",
            "range": "± 13048.631215541589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3992846.64516129,
            "unit": "ns",
            "range": "± 121536.13911221315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3899359.5555555555,
            "unit": "ns",
            "range": "± 399854.5174133839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18854.81182795699,
            "unit": "ns",
            "range": "± 2087.871487270847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115089.77894736842,
            "unit": "ns",
            "range": "± 25025.954947740967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103683.19696969698,
            "unit": "ns",
            "range": "± 21657.91346511334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102168.04166666667,
            "unit": "ns",
            "range": "± 17644.05315764563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6338.974226804124,
            "unit": "ns",
            "range": "± 1290.1084183508208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19414.202127659573,
            "unit": "ns",
            "range": "± 2900.9307574949753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556166.1235955057,
            "unit": "ns",
            "range": "± 128017.49431317262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2920181.5,
            "unit": "ns",
            "range": "± 271625.92266245646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2243447.797979798,
            "unit": "ns",
            "range": "± 401574.2397714778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5587145.234042553,
            "unit": "ns",
            "range": "± 433225.7499445214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356659.976744186,
            "unit": "ns",
            "range": "± 253704.33858571888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3547424.3735632184,
            "unit": "ns",
            "range": "± 411413.8331619903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4456383.3977272725,
            "unit": "ns",
            "range": "± 264740.61883697566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3890393.902173913,
            "unit": "ns",
            "range": "± 464222.31235850113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6774179.795180723,
            "unit": "ns",
            "range": "± 398392.4586942905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5857603.391539229,
            "unit": "ns",
            "range": "± 412108.70605606394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1689612.7848958333,
            "unit": "ns",
            "range": "± 22828.334591185278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 991413.8920572917,
            "unit": "ns",
            "range": "± 13826.855183844096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2429201.6377604166,
            "unit": "ns",
            "range": "± 27221.933372941698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817189.9873798077,
            "unit": "ns",
            "range": "± 10221.932458472453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751403.1835673564,
            "unit": "ns",
            "range": "± 25516.832936425675"
          }
        ]
      }
    ]
  }
}