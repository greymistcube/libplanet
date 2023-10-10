window.BENCHMARK_DATA = {
  "lastUpdate": 1696900341860,
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
          "id": "134c760b2b332ae6eaa43e5022068dac9c89d3ea",
          "message": "Prepare 3.6.1",
          "timestamp": "2023-10-10T09:56:08+09:00",
          "tree_id": "3755ab0ad6784245232eca019359e9709e05e21e",
          "url": "https://github.com/greymistcube/libplanet/commit/134c760b2b332ae6eaa43e5022068dac9c89d3ea"
        },
        "date": 1696900317238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371674,
            "unit": "ns",
            "range": "± 118228.98995020834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562493.1818181816,
            "unit": "ns",
            "range": "± 92328.25009922357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2038669.8924731184,
            "unit": "ns",
            "range": "± 116261.82855665115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8873587.5,
            "unit": "ns",
            "range": "± 625058.7024960872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54676.59574468085,
            "unit": "ns",
            "range": "± 3925.1169568744053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7457446.666666667,
            "unit": "ns",
            "range": "± 136768.74051095295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20895653.333333332,
            "unit": "ns",
            "range": "± 328732.0508226954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53319460,
            "unit": "ns",
            "range": "± 755990.9682000176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105619385.29411764,
            "unit": "ns",
            "range": "± 2126935.7909152946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211195366.66666666,
            "unit": "ns",
            "range": "± 2629270.466896709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4573227.1875,
            "unit": "ns",
            "range": "± 15272.102058442451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1442311.171875,
            "unit": "ns",
            "range": "± 5245.3246510182835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1075116.6015625,
            "unit": "ns",
            "range": "± 4967.993125061304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641579.4010416665,
            "unit": "ns",
            "range": "± 8756.294717260578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847745.01953125,
            "unit": "ns",
            "range": "± 1687.7457652685541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772503.8020833334,
            "unit": "ns",
            "range": "± 1893.7677743075515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325668,
            "unit": "ns",
            "range": "± 69569.73551768038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3543895.238095238,
            "unit": "ns",
            "range": "± 81977.30464092166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4184748.7804878047,
            "unit": "ns",
            "range": "± 149969.54044397018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4193800,
            "unit": "ns",
            "range": "± 80559.02184113211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10311421.621621622,
            "unit": "ns",
            "range": "± 305515.35434694885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265739.2156862745,
            "unit": "ns",
            "range": "± 10050.892068495663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255375,
            "unit": "ns",
            "range": "± 9476.70644877634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231345.45454545456,
            "unit": "ns",
            "range": "± 17633.22046087703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4188300,
            "unit": "ns",
            "range": "± 52433.32762808257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3797578.5714285714,
            "unit": "ns",
            "range": "± 26494.85228874088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23909.473684210527,
            "unit": "ns",
            "range": "± 1961.1695210403307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94018.55670103093,
            "unit": "ns",
            "range": "± 7163.715427661985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74296.90721649484,
            "unit": "ns",
            "range": "± 4511.084810595438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90551.54639175258,
            "unit": "ns",
            "range": "± 9727.40023295517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6174.747474747474,
            "unit": "ns",
            "range": "± 948.3975135688399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22896.808510638297,
            "unit": "ns",
            "range": "± 2831.104200695482"
          }
        ]
      }
    ]
  }
}