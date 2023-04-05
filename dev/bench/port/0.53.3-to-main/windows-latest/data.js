window.BENCHMARK_DATA = {
  "lastUpdate": 1680661903778,
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
          "id": "f49dfaa339aaffdb66c83f210d97837dce3c2835",
          "message": "Changelog mistake fix",
          "timestamp": "2023-04-05T11:17:13+09:00",
          "tree_id": "219fa0924074c1e940bb2bcfe5a9724834bf7855",
          "url": "https://github.com/greymistcube/libplanet/commit/f49dfaa339aaffdb66c83f210d97837dce3c2835"
        },
        "date": 1680661881955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1270234.3434343433,
            "unit": "ns",
            "range": "± 93187.75775952652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2349754.285714286,
            "unit": "ns",
            "range": "± 75470.44354407555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033092.6315789474,
            "unit": "ns",
            "range": "± 124081.89149183941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5012178.787878788,
            "unit": "ns",
            "range": "± 139229.39649544144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42967.74193548387,
            "unit": "ns",
            "range": "± 1943.7604414182376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6764960,
            "unit": "ns",
            "range": "± 21425.912215952772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17044183.333333332,
            "unit": "ns",
            "range": "± 83454.16763252807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43368133.333333336,
            "unit": "ns",
            "range": "± 214873.0810324573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87746420,
            "unit": "ns",
            "range": "± 916129.0677940215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 173082050,
            "unit": "ns",
            "range": "± 445772.94970905053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4825316.953125,
            "unit": "ns",
            "range": "± 13620.948907035412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500952.5669642857,
            "unit": "ns",
            "range": "± 3379.8116864143585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147771.7317708333,
            "unit": "ns",
            "range": "± 2370.4382357160334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577083.1640625,
            "unit": "ns",
            "range": "± 5918.034352535964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803407.71484375,
            "unit": "ns",
            "range": "± 2446.753909979777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731484.7786458334,
            "unit": "ns",
            "range": "± 1132.2843132393573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2932426.6666666665,
            "unit": "ns",
            "range": "± 42620.27462984969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3013986.6666666665,
            "unit": "ns",
            "range": "± 37507.272945517165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3799262.5,
            "unit": "ns",
            "range": "± 73238.80460520912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3843891.208791209,
            "unit": "ns",
            "range": "± 213280.51150661323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6888250,
            "unit": "ns",
            "range": "± 181021.6052822076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285659.375,
            "unit": "ns",
            "range": "± 8876.440705416457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230650,
            "unit": "ns",
            "range": "± 8075.128005653675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207510.3448275862,
            "unit": "ns",
            "range": "± 6045.916262095917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5171960,
            "unit": "ns",
            "range": "± 52763.68881288397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3530953.846153846,
            "unit": "ns",
            "range": "± 23264.65901263887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15616.842105263158,
            "unit": "ns",
            "range": "± 1289.3716622117418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74606.25,
            "unit": "ns",
            "range": "± 3374.1138077044425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65801.78571428571,
            "unit": "ns",
            "range": "± 2816.1541197125607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143657.57575757575,
            "unit": "ns",
            "range": "± 14626.8629785642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4395.876288659794,
            "unit": "ns",
            "range": "± 480.65006453352566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14352.083333333334,
            "unit": "ns",
            "range": "± 1397.665660394364"
          }
        ]
      }
    ]
  }
}