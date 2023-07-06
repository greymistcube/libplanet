window.BENCHMARK_DATA = {
  "lastUpdate": 1688658939172,
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
          "id": "89a25a4b080cbe374d3980a9597553c31d3a0b36",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T00:28:26+09:00",
          "tree_id": "6712e28f56ebe2d34846870b23e67ddbe59dca6c",
          "url": "https://github.com/greymistcube/libplanet/commit/89a25a4b080cbe374d3980a9597553c31d3a0b36"
        },
        "date": 1688658912545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1621221.7391304348,
            "unit": "ns",
            "range": "± 152920.50784645957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3194092.7083333335,
            "unit": "ns",
            "range": "± 298411.289205384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217420.8333333335,
            "unit": "ns",
            "range": "± 234871.53438990147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6305400,
            "unit": "ns",
            "range": "± 474117.3876406115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52675.294117647056,
            "unit": "ns",
            "range": "± 4583.923924261546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8761029.104477612,
            "unit": "ns",
            "range": "± 399188.2610230164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23804453.44827586,
            "unit": "ns",
            "range": "± 1034634.0294096565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62179002.222222224,
            "unit": "ns",
            "range": "± 2342681.448729686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125073396.36363636,
            "unit": "ns",
            "range": "± 5258011.858423283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256893940.6779661,
            "unit": "ns",
            "range": "± 11263155.628712257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6177063.727678572,
            "unit": "ns",
            "range": "± 67659.30462112078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953724.0885416667,
            "unit": "ns",
            "range": "± 26789.12547938535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1497220.2864583333,
            "unit": "ns",
            "range": "± 20190.607994422688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3296724.1927083335,
            "unit": "ns",
            "range": "± 52557.764548520696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1081626.4322916667,
            "unit": "ns",
            "range": "± 15236.120287588346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1003406.5625,
            "unit": "ns",
            "range": "± 13577.2044203318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3653337.3626373624,
            "unit": "ns",
            "range": "± 240945.18355304695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3956533.3333333335,
            "unit": "ns",
            "range": "± 253468.39153481516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5225840.816326531,
            "unit": "ns",
            "range": "± 361668.07099132275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4383057.894736842,
            "unit": "ns",
            "range": "± 370962.2841926023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8351420.4301075265,
            "unit": "ns",
            "range": "± 519285.62856543186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320570.21276595746,
            "unit": "ns",
            "range": "± 34463.23841580738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300794.5054945055,
            "unit": "ns",
            "range": "± 23865.59291177416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265570.96774193546,
            "unit": "ns",
            "range": "± 31609.814039606645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4823966.666666667,
            "unit": "ns",
            "range": "± 286727.02905896824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4356914.285714285,
            "unit": "ns",
            "range": "± 197883.62404098644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18702.222222222223,
            "unit": "ns",
            "range": "± 2048.5115329487944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91598.88888888889,
            "unit": "ns",
            "range": "± 9248.583182649763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96748.96907216495,
            "unit": "ns",
            "range": "± 18538.89770436159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113591.48936170213,
            "unit": "ns",
            "range": "± 17212.6651268391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5828.125,
            "unit": "ns",
            "range": "± 1143.2827273849816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17590.80459770115,
            "unit": "ns",
            "range": "± 1737.1208593470449"
          }
        ]
      }
    ]
  }
}