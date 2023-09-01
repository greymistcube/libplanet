window.BENCHMARK_DATA = {
  "lastUpdate": 1693546598826,
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
          "id": "5a1e57cbc860d5c0098ae5e3cd0da8fd9360f901",
          "message": "Cleanup",
          "timestamp": "2023-09-01T14:19:05+09:00",
          "tree_id": "376d8fea536cfb7fb26b670d17d90980e62eaa03",
          "url": "https://github.com/greymistcube/libplanet/commit/5a1e57cbc860d5c0098ae5e3cd0da8fd9360f901"
        },
        "date": 1693546584576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8536407.514084507,
            "unit": "ns",
            "range": "± 414883.4061265713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20759747.44680851,
            "unit": "ns",
            "range": "± 804261.15186832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52446653.058823526,
            "unit": "ns",
            "range": "± 1067651.938336499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103903235.47058824,
            "unit": "ns",
            "range": "± 2057824.1663613755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209675776.5,
            "unit": "ns",
            "range": "± 3182462.854436979"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61852.21276595745,
            "unit": "ns",
            "range": "± 9003.933155651934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305350.3804347826,
            "unit": "ns",
            "range": "± 20664.668685624893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300291.3488372093,
            "unit": "ns",
            "range": "± 16337.054821167192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283410.6641791045,
            "unit": "ns",
            "range": "± 13407.362560782534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4078632.533333333,
            "unit": "ns",
            "range": "± 122006.053944405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3730089.7,
            "unit": "ns",
            "range": "± 69463.63230517514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20527.021276595744,
            "unit": "ns",
            "range": "± 4455.324396498763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89194.73684210527,
            "unit": "ns",
            "range": "± 9310.609878109579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88934.36734693877,
            "unit": "ns",
            "range": "± 10703.67052698573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96961.67021276595,
            "unit": "ns",
            "range": "± 11467.803089837009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6874.903225806452,
            "unit": "ns",
            "range": "± 1019.1853211236065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20057.761363636364,
            "unit": "ns",
            "range": "± 2979.566422960713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532409.03125,
            "unit": "ns",
            "range": "± 156628.1633151689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2776402.08,
            "unit": "ns",
            "range": "± 132122.5126000496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1928804.7216494845,
            "unit": "ns",
            "range": "± 169110.7150636173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5427791.586206896,
            "unit": "ns",
            "range": "± 235089.12230367016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432457.5,
            "unit": "ns",
            "range": "± 208100.06423130265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3481432.022727273,
            "unit": "ns",
            "range": "± 251646.97946751898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4329249.025641026,
            "unit": "ns",
            "range": "± 208569.89212251932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3963437.295081967,
            "unit": "ns",
            "range": "± 177040.48690251092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6787095.972222222,
            "unit": "ns",
            "range": "± 201216.1798230928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5361609.7390625,
            "unit": "ns",
            "range": "± 37419.1992420333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1729126.119921875,
            "unit": "ns",
            "range": "± 12674.261649829286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1024242.8346354166,
            "unit": "ns",
            "range": "± 12932.976515142162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545243.2638221155,
            "unit": "ns",
            "range": "± 25689.406503388203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789675.8526278409,
            "unit": "ns",
            "range": "± 18953.471833059615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 832409.773334704,
            "unit": "ns",
            "range": "± 16542.94711634755"
          }
        ]
      }
    ]
  }
}