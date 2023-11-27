window.BENCHMARK_DATA = {
  "lastUpdate": 1701060051386,
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
          "id": "4a56d8893481517f81dc94973411460905ab698b",
          "message": "Better readability; test fix",
          "timestamp": "2023-11-27T13:27:12+09:00",
          "tree_id": "08072e7d8152ced75702896a41267846d5496111",
          "url": "https://github.com/greymistcube/libplanet/commit/4a56d8893481517f81dc94973411460905ab698b"
        },
        "date": 1701060036151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8415795.363636363,
            "unit": "ns",
            "range": "± 201347.2520730383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20452285.269230768,
            "unit": "ns",
            "range": "± 308379.7640383671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51219353.35714286,
            "unit": "ns",
            "range": "± 304623.3266473044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102042910.7,
            "unit": "ns",
            "range": "± 717164.5432571047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199575972.3809524,
            "unit": "ns",
            "range": "± 4680395.9832431"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50513.593406593405,
            "unit": "ns",
            "range": "± 11552.04007954922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253858.67777777778,
            "unit": "ns",
            "range": "± 16559.3126048628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241151.74736842106,
            "unit": "ns",
            "range": "± 15189.018839187751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224049.27551020408,
            "unit": "ns",
            "range": "± 22658.137773809212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3881551.705882353,
            "unit": "ns",
            "range": "± 78395.2914735355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3552870.1363636362,
            "unit": "ns",
            "range": "± 84885.97254555271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18231.907216494845,
            "unit": "ns",
            "range": "± 4601.779784954753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69157.69387755102,
            "unit": "ns",
            "range": "± 14210.805620537645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76243.94210526315,
            "unit": "ns",
            "range": "± 17411.562910108794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80099.29896907216,
            "unit": "ns",
            "range": "± 20691.728410348016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6060.877551020408,
            "unit": "ns",
            "range": "± 1604.6757485696448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18033.978260869564,
            "unit": "ns",
            "range": "± 3024.4150155584475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1264344.6458333333,
            "unit": "ns",
            "range": "± 278502.20613896986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2528054.682352941,
            "unit": "ns",
            "range": "± 314369.10191419633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680289.177777778,
            "unit": "ns",
            "range": "± 136438.36532401093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7364311.94680851,
            "unit": "ns",
            "range": "± 1001125.1306128165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3019181.0789473685,
            "unit": "ns",
            "range": "± 65701.85847474246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3093616.5223880596,
            "unit": "ns",
            "range": "± 139839.92250983376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3666100.787234043,
            "unit": "ns",
            "range": "± 142560.840262025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3595748.864864865,
            "unit": "ns",
            "range": "± 121708.20738945034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13723262.260416666,
            "unit": "ns",
            "range": "± 2797404.347614921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4667879.185369318,
            "unit": "ns",
            "range": "± 217216.90566694204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1406472.3205247961,
            "unit": "ns",
            "range": "± 33270.298413900135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 902060.0340494792,
            "unit": "ns",
            "range": "± 12811.404742915473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2096100.835546875,
            "unit": "ns",
            "range": "± 31326.869579508388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 646959.0546061198,
            "unit": "ns",
            "range": "± 3985.0762129579525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 598833.6824448529,
            "unit": "ns",
            "range": "± 12029.358754779798"
          }
        ]
      }
    ]
  }
}