window.BENCHMARK_DATA = {
  "lastUpdate": 1688713353220,
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
          "id": "0aed9b230db9b2c83eecbce1661b3802ebae291f",
          "message": "Changelog",
          "timestamp": "2023-07-07T15:47:32+09:00",
          "tree_id": "b15415eece6a9424f5306a422cfab23d029cd5fe",
          "url": "https://github.com/greymistcube/libplanet/commit/0aed9b230db9b2c83eecbce1661b3802ebae291f"
        },
        "date": 1688713326036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368651.0204081633,
            "unit": "ns",
            "range": "± 121014.0532393749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2463367.272727273,
            "unit": "ns",
            "range": "± 103547.58443548667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1796419.191919192,
            "unit": "ns",
            "range": "± 147070.65890089844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4603917.777777778,
            "unit": "ns",
            "range": "± 161301.696841789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43902.857142857145,
            "unit": "ns",
            "range": "± 2097.892070321149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6897710,
            "unit": "ns",
            "range": "± 28978.85435968786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17716480,
            "unit": "ns",
            "range": "± 207356.70508294913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45392980,
            "unit": "ns",
            "range": "± 480161.74536741857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90855533.33333333,
            "unit": "ns",
            "range": "± 856597.9300754373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181991600,
            "unit": "ns",
            "range": "± 918036.5671210644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4777748.177083333,
            "unit": "ns",
            "range": "± 13020.851930046245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505973.828125,
            "unit": "ns",
            "range": "± 828.4678209890673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159581.5625,
            "unit": "ns",
            "range": "± 1604.8889972650695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2715386.5234375,
            "unit": "ns",
            "range": "± 15940.995611238719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822837.7301897322,
            "unit": "ns",
            "range": "± 856.9596582259056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750342.5013950893,
            "unit": "ns",
            "range": "± 1071.6487738550234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3031900,
            "unit": "ns",
            "range": "± 77991.12257173889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3133902.777777778,
            "unit": "ns",
            "range": "± 99939.42589992374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3974818.5185185187,
            "unit": "ns",
            "range": "± 108462.783539357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3558356.25,
            "unit": "ns",
            "range": "± 66593.9483611937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5990106.25,
            "unit": "ns",
            "range": "± 185601.28951425644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257190.9090909091,
            "unit": "ns",
            "range": "± 10524.0198121722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238972.3404255319,
            "unit": "ns",
            "range": "± 9210.738112509945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216805.1948051948,
            "unit": "ns",
            "range": "± 11081.455539298362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3849326.6666666665,
            "unit": "ns",
            "range": "± 25681.607277990843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3454961.5384615385,
            "unit": "ns",
            "range": "± 32335.469133794308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18483.673469387755,
            "unit": "ns",
            "range": "± 1574.2577290371485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83624.65753424658,
            "unit": "ns",
            "range": "± 4069.4587690201447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69155.88235294117,
            "unit": "ns",
            "range": "± 2206.4905875648956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84252.56410256411,
            "unit": "ns",
            "range": "± 4671.291830529042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4981.443298969072,
            "unit": "ns",
            "range": "± 799.521979178186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17863.40206185567,
            "unit": "ns",
            "range": "± 1794.4143001025072"
          }
        ]
      }
    ]
  }
}