window.BENCHMARK_DATA = {
  "lastUpdate": 1707187401352,
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
          "id": "581b937b0b76ce7f38ce36160ca0ee9690ba8619",
          "message": "Release 4.0.2",
          "timestamp": "2024-02-06T11:28:37+09:00",
          "tree_id": "ef42b44dbe32becfe4bec6a583d944ef92df7e9c",
          "url": "https://github.com/greymistcube/libplanet/commit/581b937b0b76ce7f38ce36160ca0ee9690ba8619"
        },
        "date": 1707187375703,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967819,
            "unit": "ns",
            "range": "± 105769.48128220669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1753319.191919192,
            "unit": "ns",
            "range": "± 102471.5756275136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1503493.75,
            "unit": "ns",
            "range": "± 153449.78181631176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10868267.777777778,
            "unit": "ns",
            "range": "± 904828.5087785291"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34622.97297297297,
            "unit": "ns",
            "range": "± 1720.269754037661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4988850,
            "unit": "ns",
            "range": "± 31492.50826661917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13026406.666666666,
            "unit": "ns",
            "range": "± 181066.48134502053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33254635.714285713,
            "unit": "ns",
            "range": "± 263784.38341582305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66498153.333333336,
            "unit": "ns",
            "range": "± 593635.5638492919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135866684.6153846,
            "unit": "ns",
            "range": "± 1078685.0898556646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355549.21875,
            "unit": "ns",
            "range": "± 5696.601623632445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1109241.7057291667,
            "unit": "ns",
            "range": "± 2774.1755748394526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742857.9036458334,
            "unit": "ns",
            "range": "± 1804.835569844859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971876.869419643,
            "unit": "ns",
            "range": "± 5937.17395839968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610154.90234375,
            "unit": "ns",
            "range": "± 2245.3268228588486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 603261.62109375,
            "unit": "ns",
            "range": "± 1385.5513420710517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2276597.9166666665,
            "unit": "ns",
            "range": "± 88922.03491508568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260877.419354839,
            "unit": "ns",
            "range": "± 62678.00629501771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746639.534883721,
            "unit": "ns",
            "range": "± 79720.57791207776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2860439.4736842103,
            "unit": "ns",
            "range": "± 83794.45424297283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12352748.351648351,
            "unit": "ns",
            "range": "± 1548641.4153030058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172704.22535211267,
            "unit": "ns",
            "range": "± 8467.052727563949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160657.8947368421,
            "unit": "ns",
            "range": "± 7479.202509321336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142676,
            "unit": "ns",
            "range": "± 3625.175857803315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2799292.8571428573,
            "unit": "ns",
            "range": "± 39472.94037664311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2478207.1428571427,
            "unit": "ns",
            "range": "± 35542.31420294828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10919.565217391304,
            "unit": "ns",
            "range": "± 1084.7837816094086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51336.95652173913,
            "unit": "ns",
            "range": "± 4184.448376771911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44271.698113207545,
            "unit": "ns",
            "range": "± 1770.1996148295045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54341.836734693876,
            "unit": "ns",
            "range": "± 10096.768120964924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2237.8947368421054,
            "unit": "ns",
            "range": "± 390.90156223144356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9816.483516483517,
            "unit": "ns",
            "range": "± 1321.1328250376423"
          }
        ]
      }
    ]
  }
}