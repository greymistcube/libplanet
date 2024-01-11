window.BENCHMARK_DATA = {
  "lastUpdate": 1704944845921,
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
          "id": "04fdca19947689f211b0611543c82297baee08b4",
          "message": "Prepare 3.9.5",
          "timestamp": "2024-01-11T12:24:04+09:00",
          "tree_id": "203f0a8333f2a961fa901363c5537652e1d0075f",
          "url": "https://github.com/greymistcube/libplanet/commit/04fdca19947689f211b0611543c82297baee08b4"
        },
        "date": 1704944827675,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10168608.131868131,
            "unit": "ns",
            "range": "± 1517036.7168065088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24947924.321052633,
            "unit": "ns",
            "range": "± 3139290.6300329943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62043106.798969075,
            "unit": "ns",
            "range": "± 7414409.189664649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112858379.69662921,
            "unit": "ns",
            "range": "± 6209530.688114263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241275262.63207546,
            "unit": "ns",
            "range": "± 10011556.443191271"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76676.7258064516,
            "unit": "ns",
            "range": "± 9402.713752733758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391183.4285714286,
            "unit": "ns",
            "range": "± 73664.12024244085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 391940.1,
            "unit": "ns",
            "range": "± 82307.27030558995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356696.6354166667,
            "unit": "ns",
            "range": "± 63121.71982191395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4641991.714285715,
            "unit": "ns",
            "range": "± 411440.7038579919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4186356.3350515463,
            "unit": "ns",
            "range": "± 262442.2993542533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25309.52298850575,
            "unit": "ns",
            "range": "± 3156.166894285165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130238.43956043955,
            "unit": "ns",
            "range": "± 22763.00313872334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113936.10588235295,
            "unit": "ns",
            "range": "± 9906.875456473854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120038.46774193548,
            "unit": "ns",
            "range": "± 14587.986575806295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8722.87113402062,
            "unit": "ns",
            "range": "± 1255.1094351322818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25426.6404494382,
            "unit": "ns",
            "range": "± 3363.318380460769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1518637.142857143,
            "unit": "ns",
            "range": "± 174488.61144508806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2954752.0764705883,
            "unit": "ns",
            "range": "± 268158.1918004289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2239182.8571428573,
            "unit": "ns",
            "range": "± 228148.51888897363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12190044.860215053,
            "unit": "ns",
            "range": "± 3282959.145179754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3575060.389473684,
            "unit": "ns",
            "range": "± 341688.5187494567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3718706.629032258,
            "unit": "ns",
            "range": "± 406530.0010991548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4792741.887096774,
            "unit": "ns",
            "range": "± 483237.677562907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4362837.397849462,
            "unit": "ns",
            "range": "± 446351.68948826083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19381210.257575758,
            "unit": "ns",
            "range": "± 3395482.090434603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6825829.28259154,
            "unit": "ns",
            "range": "± 467518.9582184829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1804707.7614257813,
            "unit": "ns",
            "range": "± 41558.819735401674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1113130.6688701923,
            "unit": "ns",
            "range": "± 14232.911416360903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2954645.3021599264,
            "unit": "ns",
            "range": "± 60657.33974740212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 912935.039993641,
            "unit": "ns",
            "range": "± 33476.613403081654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799224.007458917,
            "unit": "ns",
            "range": "± 35009.0554720704"
          }
        ]
      }
    ]
  }
}