window.BENCHMARK_DATA = {
  "lastUpdate": 1702002566028,
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
          "id": "718d7eab7705a0ccf84634c14106a58dbfe3fad0",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:09:49+09:00",
          "tree_id": "1a9ea1ff57502e6c167c79e20296575b0a8644cc",
          "url": "https://github.com/greymistcube/libplanet/commit/718d7eab7705a0ccf84634c14106a58dbfe3fad0"
        },
        "date": 1702002548815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7629823.166666667,
            "unit": "ns",
            "range": "± 19270.563042363265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18600599.615384616,
            "unit": "ns",
            "range": "± 250733.794313989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46419276.71428572,
            "unit": "ns",
            "range": "± 458267.58859215205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92747524.73333333,
            "unit": "ns",
            "range": "± 1347274.4616793387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190950793.2142857,
            "unit": "ns",
            "range": "± 2145763.3487853156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35157.03370786517,
            "unit": "ns",
            "range": "± 4106.132704010159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214286.56818181818,
            "unit": "ns",
            "range": "± 12987.565965932019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211639.82291666666,
            "unit": "ns",
            "range": "± 18289.065059408007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189602.5,
            "unit": "ns",
            "range": "± 11705.998128477044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3691982.8125,
            "unit": "ns",
            "range": "± 61851.123329835325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3453699.8125,
            "unit": "ns",
            "range": "± 64089.54370640997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12880.670103092783,
            "unit": "ns",
            "range": "± 1235.4553034007467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57883.86559139785,
            "unit": "ns",
            "range": "± 5257.151898345856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52501.89024390244,
            "unit": "ns",
            "range": "± 3979.4148361815915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60714.20430107527,
            "unit": "ns",
            "range": "± 11257.688884142926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3365.870786516854,
            "unit": "ns",
            "range": "± 385.3421555762451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11482.616279069767,
            "unit": "ns",
            "range": "± 784.3596589291187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004881.8105263158,
            "unit": "ns",
            "range": "± 62049.97517826491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2235050.904255319,
            "unit": "ns",
            "range": "± 131327.02645407876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559826.8333333333,
            "unit": "ns",
            "range": "± 182666.03940499935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6964710.505376345,
            "unit": "ns",
            "range": "± 467270.7668804641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2916919.6470588236,
            "unit": "ns",
            "range": "± 139161.80195646037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3077281.9285714286,
            "unit": "ns",
            "range": "± 51596.346117969195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3538320.9375,
            "unit": "ns",
            "range": "± 92602.9245824438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3430312.676056338,
            "unit": "ns",
            "range": "± 167592.6492243938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14161285.434343435,
            "unit": "ns",
            "range": "± 2203023.235151321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4346633.2373046875,
            "unit": "ns",
            "range": "± 80521.61601616646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1346381.74609375,
            "unit": "ns",
            "range": "± 20745.770781077106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 884193.7922014509,
            "unit": "ns",
            "range": "± 7399.393887083533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2284660.775330219,
            "unit": "ns",
            "range": "± 227827.10412791086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 719570.6906835937,
            "unit": "ns",
            "range": "± 60790.76725018455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 632616.9630558895,
            "unit": "ns",
            "range": "± 29520.360878851858"
          }
        ]
      }
    ]
  }
}