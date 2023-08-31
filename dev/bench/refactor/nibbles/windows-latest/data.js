window.BENCHMARK_DATA = {
  "lastUpdate": 1693480170817,
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
          "id": "b541ef00cfb97a92d9e53daa5e24e8f466f9331b",
          "message": "Refactor Nibbles",
          "timestamp": "2023-08-31T19:51:07+09:00",
          "tree_id": "1f4eeee57e62a9fd70bd85b53ac841c49eb803da",
          "url": "https://github.com/greymistcube/libplanet/commit/b541ef00cfb97a92d9e53daa5e24e8f466f9331b"
        },
        "date": 1693480145512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1239957.2164948455,
            "unit": "ns",
            "range": "± 85232.1025291902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2299412,
            "unit": "ns",
            "range": "± 85596.89554259904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1615420.8333333333,
            "unit": "ns",
            "range": "± 117052.03154033377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4256887.5,
            "unit": "ns",
            "range": "± 165838.65989877415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43014.28571428572,
            "unit": "ns",
            "range": "± 2089.8155881671914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6939660,
            "unit": "ns",
            "range": "± 24847.011892780993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17388040,
            "unit": "ns",
            "range": "± 105371.48435077544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44700706.666666664,
            "unit": "ns",
            "range": "± 461888.30973154824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89290393.33333333,
            "unit": "ns",
            "range": "± 818535.340424474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178110306.66666666,
            "unit": "ns",
            "range": "± 1518217.2089407397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4359372.65625,
            "unit": "ns",
            "range": "± 5620.775350389907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1378356.8229166667,
            "unit": "ns",
            "range": "± 2107.477317713425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 996138.90625,
            "unit": "ns",
            "range": "± 1206.4969258600388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523972.4869791665,
            "unit": "ns",
            "range": "± 3532.2192425099747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796450.6068638393,
            "unit": "ns",
            "range": "± 827.579046307348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733442.63671875,
            "unit": "ns",
            "range": "± 794.0058694205927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2901937.5,
            "unit": "ns",
            "range": "± 44142.02646005278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2986543.75,
            "unit": "ns",
            "range": "± 37972.18225227515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3859277.419354839,
            "unit": "ns",
            "range": "± 116845.35566202427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3301550,
            "unit": "ns",
            "range": "± 146133.25878127094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5488694.285714285,
            "unit": "ns",
            "range": "± 158097.66702683418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240996.42857142858,
            "unit": "ns",
            "range": "± 9557.100440571337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226669.04761904763,
            "unit": "ns",
            "range": "± 6489.973057753016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204016.66666666666,
            "unit": "ns",
            "range": "± 7932.811831002881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3722626.6666666665,
            "unit": "ns",
            "range": "± 32665.041747730134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3374485.714285714,
            "unit": "ns",
            "range": "± 22723.348112691263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16769.38775510204,
            "unit": "ns",
            "range": "± 1700.2369854990293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76097.72727272728,
            "unit": "ns",
            "range": "± 4511.644634063639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63534.782608695656,
            "unit": "ns",
            "range": "± 2455.73862084568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70626.31578947368,
            "unit": "ns",
            "range": "± 10196.15290953089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4094.8453608247423,
            "unit": "ns",
            "range": "± 419.4170393784236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15472.527472527472,
            "unit": "ns",
            "range": "± 1458.695454778834"
          }
        ]
      }
    ]
  }
}