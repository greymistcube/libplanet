window.BENCHMARK_DATA = {
  "lastUpdate": 1702517018843,
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
          "id": "12c4fdea1532e2402db242e451b1655bdbe69092",
          "message": "Updated tests",
          "timestamp": "2023-12-13T09:33:00+09:00",
          "tree_id": "85070767558264a9019ca1c00801a3da551959e4",
          "url": "https://github.com/greymistcube/libplanet/commit/12c4fdea1532e2402db242e451b1655bdbe69092"
        },
        "date": 1702517011882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214785.12105263158,
            "unit": "ns",
            "range": "± 12997.94792410902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209044.5164835165,
            "unit": "ns",
            "range": "± 12703.900527320679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175841.16091954024,
            "unit": "ns",
            "range": "± 9624.465866029239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3160165.933333333,
            "unit": "ns",
            "range": "± 39059.79840754552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2933800.6666666665,
            "unit": "ns",
            "range": "± 57670.187706627476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18380.408163265307,
            "unit": "ns",
            "range": "± 3375.891640406683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88518.29166666667,
            "unit": "ns",
            "range": "± 13157.826408976975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102019.75862068965,
            "unit": "ns",
            "range": "± 2686.063937319709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94716.56842105264,
            "unit": "ns",
            "range": "± 11258.944323980002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7004.96875,
            "unit": "ns",
            "range": "± 1816.0127315408395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17662.79292929293,
            "unit": "ns",
            "range": "± 4695.03210580517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43227.617021276594,
            "unit": "ns",
            "range": "± 5677.588764108476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067664.7395833333,
            "unit": "ns",
            "range": "± 92083.12063145019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1998225.3196721312,
            "unit": "ns",
            "range": "± 84913.14735236001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1558068.0416666667,
            "unit": "ns",
            "range": "± 107153.41657641275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5949440.1486486485,
            "unit": "ns",
            "range": "± 200268.7047717552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2579935.4365079366,
            "unit": "ns",
            "range": "± 115885.69642580001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2716287.2,
            "unit": "ns",
            "range": "± 30792.822891056938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3315624,
            "unit": "ns",
            "range": "± 43061.92671562129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3182046.1666666665,
            "unit": "ns",
            "range": "± 146158.41895067587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7082248.741935484,
            "unit": "ns",
            "range": "± 184630.3795540282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5902722.916666667,
            "unit": "ns",
            "range": "± 43243.0913062387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14882433.576923076,
            "unit": "ns",
            "range": "± 68137.72856680497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37392189.428571425,
            "unit": "ns",
            "range": "± 276842.7934602581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75893386.76923077,
            "unit": "ns",
            "range": "± 660881.8783416285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150343991.23076922,
            "unit": "ns",
            "range": "± 1040786.5218708521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728972.7879464286,
            "unit": "ns",
            "range": "± 26588.600867078952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212337.2785993305,
            "unit": "ns",
            "range": "± 3332.5199738434485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772084.0970865885,
            "unit": "ns",
            "range": "± 4347.44217547059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959185.4254807692,
            "unit": "ns",
            "range": "± 13276.259077481465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626257.6910807291,
            "unit": "ns",
            "range": "± 4050.602727483309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591322.6735491072,
            "unit": "ns",
            "range": "± 1451.1430386645504"
          }
        ]
      }
    ]
  }
}