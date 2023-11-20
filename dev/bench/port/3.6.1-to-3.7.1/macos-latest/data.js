window.BENCHMARK_DATA = {
  "lastUpdate": 1700475225750,
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
          "id": "86ab4423f441b9207d73886941dca2c810502142",
          "message": "Changelog",
          "timestamp": "2023-11-20T18:53:37+09:00",
          "tree_id": "7b2d200491c069bfa925e051918907d9765d8cac",
          "url": "https://github.com/greymistcube/libplanet/commit/86ab4423f441b9207d73886941dca2c810502142"
        },
        "date": 1700475211828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7561054.071428572,
            "unit": "ns",
            "range": "± 100838.85138462967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18623722.46153846,
            "unit": "ns",
            "range": "± 85611.02359666792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49825590.1,
            "unit": "ns",
            "range": "± 4119714.786505373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94984496.4090909,
            "unit": "ns",
            "range": "± 3491672.262131083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238590000.77083334,
            "unit": "ns",
            "range": "± 19427619.25776454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36077.08888888889,
            "unit": "ns",
            "range": "± 4955.88295888052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249940.0625,
            "unit": "ns",
            "range": "± 31397.569300089894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225084.92857142858,
            "unit": "ns",
            "range": "± 22785.510357409574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235195.21717171717,
            "unit": "ns",
            "range": "± 29739.10095639581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4195750.552083333,
            "unit": "ns",
            "range": "± 418163.5757632946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700001.9263157896,
            "unit": "ns",
            "range": "± 242655.43687510426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13055.82558139535,
            "unit": "ns",
            "range": "± 1192.3941629379447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61437.085106382976,
            "unit": "ns",
            "range": "± 7999.62597735827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57042.32967032967,
            "unit": "ns",
            "range": "± 8827.755627759709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64702.1875,
            "unit": "ns",
            "range": "± 14538.128798954836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4093.6288659793813,
            "unit": "ns",
            "range": "± 1361.9911153618962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12684.08888888889,
            "unit": "ns",
            "range": "± 1502.305313860978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1264177.8229166667,
            "unit": "ns",
            "range": "± 116422.36218007846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2842465.069892473,
            "unit": "ns",
            "range": "± 173262.6966019843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1843928.5454545454,
            "unit": "ns",
            "range": "± 157044.82178426153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8062563.237113402,
            "unit": "ns",
            "range": "± 763334.0103796138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3846505.005263158,
            "unit": "ns",
            "range": "± 392285.6430727453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3608219.478021978,
            "unit": "ns",
            "range": "± 438550.03937047365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3948472.1428571427,
            "unit": "ns",
            "range": "± 423318.0880826845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3422736.0166666666,
            "unit": "ns",
            "range": "± 150686.58033919858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13215461,
            "unit": "ns",
            "range": "± 2405131.7206678246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4426719.0625,
            "unit": "ns",
            "range": "± 100706.61633202895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509803.3763950893,
            "unit": "ns",
            "range": "± 174198.95640237982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 869884.6758961397,
            "unit": "ns",
            "range": "± 17731.585859615272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2285040.4686328126,
            "unit": "ns",
            "range": "± 296065.8823009216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626174.7648344494,
            "unit": "ns",
            "range": "± 14129.345593773001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576737.392686632,
            "unit": "ns",
            "range": "± 12236.461852889845"
          }
        ]
      }
    ]
  }
}