window.BENCHMARK_DATA = {
  "lastUpdate": 1691378513273,
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
          "id": "8baa1b4083c0287391fb9c277de7b85761d2f44a",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-08-07T12:06:49+09:00",
          "tree_id": "89104245f00df6627deea8fceab4446cec039eb5",
          "url": "https://github.com/greymistcube/libplanet/commit/8baa1b4083c0287391fb9c277de7b85761d2f44a"
        },
        "date": 1691378505587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3672665.527777778,
            "unit": "ns",
            "range": "± 122123.83359653222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3891316.3333333335,
            "unit": "ns",
            "range": "± 65287.39363183443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653381.933333334,
            "unit": "ns",
            "range": "± 84828.84299868316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4217512.083333333,
            "unit": "ns",
            "range": "± 106974.96672095427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6784075.541666667,
            "unit": "ns",
            "range": "± 171162.2527570485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8239484.384615385,
            "unit": "ns",
            "range": "± 84743.22876346174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22596899.466666665,
            "unit": "ns",
            "range": "± 288576.0514466721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56819848.8,
            "unit": "ns",
            "range": "± 466236.21446923236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113024613.73333333,
            "unit": "ns",
            "range": "± 933442.7716857378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226782817.73333332,
            "unit": "ns",
            "range": "± 2532396.2042384306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50428.043956043955,
            "unit": "ns",
            "range": "± 3184.350769037328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6178081.788541666,
            "unit": "ns",
            "range": "± 34073.43163923324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1960302.7503004808,
            "unit": "ns",
            "range": "± 4136.281584971287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415831.767578125,
            "unit": "ns",
            "range": "± 3021.429526294105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652400.676339286,
            "unit": "ns",
            "range": "± 8390.48796194989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850330.2130208333,
            "unit": "ns",
            "range": "± 1716.536146053292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770728.9254807692,
            "unit": "ns",
            "range": "± 694.8132121602283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300139.52777777775,
            "unit": "ns",
            "range": "± 9438.361814534528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293099.3076923077,
            "unit": "ns",
            "range": "± 7747.190586369905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257970.0819672131,
            "unit": "ns",
            "range": "± 11493.623242614549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4583064.2,
            "unit": "ns",
            "range": "± 58529.02417628856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4291321.066666666,
            "unit": "ns",
            "range": "± 67286.84329736244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22660.882978723403,
            "unit": "ns",
            "range": "± 2069.5825502732023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99035.15384615384,
            "unit": "ns",
            "range": "± 5522.701892940683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80717.51515151515,
            "unit": "ns",
            "range": "± 3816.9004914073093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101044.79310344828,
            "unit": "ns",
            "range": "± 8381.762565289122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6469.459183673469,
            "unit": "ns",
            "range": "± 838.9420088380014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21832.891304347828,
            "unit": "ns",
            "range": "± 2156.4727430116354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564284.47,
            "unit": "ns",
            "range": "± 116708.42552980292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2992960.897959184,
            "unit": "ns",
            "range": "± 111714.50088268996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1954316.4948453608,
            "unit": "ns",
            "range": "± 127660.16484230732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5074856.696969697,
            "unit": "ns",
            "range": "± 157762.47887557995"
          }
        ]
      }
    ]
  }
}