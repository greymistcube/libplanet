window.BENCHMARK_DATA = {
  "lastUpdate": 1687940898102,
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
          "id": "764c06906d561a03f2c1da52d32456d46cc6055f",
          "message": "Release 2.3.0",
          "timestamp": "2023-06-28T17:09:03+09:00",
          "tree_id": "e73d3fb6303de55230d2e5a46b9e5b507b528da9",
          "url": "https://github.com/greymistcube/libplanet/commit/764c06906d561a03f2c1da52d32456d46cc6055f"
        },
        "date": 1687940888804,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4033431.5729166665,
            "unit": "ns",
            "range": "± 396002.90032342315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4271197.649484536,
            "unit": "ns",
            "range": "± 381683.6574867454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5837530.5,
            "unit": "ns",
            "range": "± 433092.0177053875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5338830.62886598,
            "unit": "ns",
            "range": "± 416922.248661779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9283280.469135802,
            "unit": "ns",
            "range": "± 484282.9104017116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9615614.132653061,
            "unit": "ns",
            "range": "± 640398.3447468039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26779388.626262628,
            "unit": "ns",
            "range": "± 1990870.6737027352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69141136.3076923,
            "unit": "ns",
            "range": "± 1867394.794867197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141150705.74603173,
            "unit": "ns",
            "range": "± 6468623.807105161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282249753.15384614,
            "unit": "ns",
            "range": "± 4687814.845570995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374715.4680851064,
            "unit": "ns",
            "range": "± 56866.59848507216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378488.17346938775,
            "unit": "ns",
            "range": "± 65022.38395979464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320614.7311827957,
            "unit": "ns",
            "range": "± 42439.226392147015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5224368.989583333,
            "unit": "ns",
            "range": "± 348442.5255940315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4925121.402061855,
            "unit": "ns",
            "range": "± 342425.1807816521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28804.11,
            "unit": "ns",
            "range": "± 11249.264362835002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125536.92929292929,
            "unit": "ns",
            "range": "± 26068.914772451055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128760.25510204081,
            "unit": "ns",
            "range": "± 29072.647097998622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148459.8404255319,
            "unit": "ns",
            "range": "± 24663.929611864234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7046.4047619047615,
            "unit": "ns",
            "range": "± 1644.2932206999158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30480.683673469386,
            "unit": "ns",
            "range": "± 12097.77207110768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71639.26804123711,
            "unit": "ns",
            "range": "± 17954.33340131955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7243289.10625,
            "unit": "ns",
            "range": "± 103889.72953680005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2337386.2907366073,
            "unit": "ns",
            "range": "± 38769.28406618631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1722969.5375339673,
            "unit": "ns",
            "range": "± 43577.34135128597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3207999.8442708333,
            "unit": "ns",
            "range": "± 59130.681732404926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1094523.5558035714,
            "unit": "ns",
            "range": "± 17847.623220409052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1010126.7638020833,
            "unit": "ns",
            "range": "± 16968.94714251572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1885945.0537634408,
            "unit": "ns",
            "range": "± 198067.5707005152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3533595.5204081633,
            "unit": "ns",
            "range": "± 364279.3153064396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2830330.698924731,
            "unit": "ns",
            "range": "± 291737.0247038599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7427703.084210526,
            "unit": "ns",
            "range": "± 698799.0911222709"
          }
        ]
      }
    ]
  }
}