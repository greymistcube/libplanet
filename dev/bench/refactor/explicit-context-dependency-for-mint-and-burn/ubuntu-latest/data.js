window.BENCHMARK_DATA = {
  "lastUpdate": 1687416381391,
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
          "id": "f941479dea8a2cbd9994461bf0ee6c3932cc3d97",
          "message": "Renaming and updating docs for more sensible use",
          "timestamp": "2023-06-22T15:28:42+09:00",
          "tree_id": "a45c5f0410ad050d474db2e6ae43492669faf08f",
          "url": "https://github.com/greymistcube/libplanet/commit/f941479dea8a2cbd9994461bf0ee6c3932cc3d97"
        },
        "date": 1687416372722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4067397.7916666665,
            "unit": "ns",
            "range": "± 103412.49300778483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3886438.4285714286,
            "unit": "ns",
            "range": "± 68076.63227876055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4704689.8,
            "unit": "ns",
            "range": "± 97587.92057777816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4789999.027027027,
            "unit": "ns",
            "range": "± 160983.9351573605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7360766.419354838,
            "unit": "ns",
            "range": "± 219700.9542640138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6269283.975520833,
            "unit": "ns",
            "range": "± 21931.995369447395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907866.0166015625,
            "unit": "ns",
            "range": "± 1243.5444372988434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1417860.396875,
            "unit": "ns",
            "range": "± 2720.6895497796536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669277.0921875,
            "unit": "ns",
            "range": "± 8219.71300883874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861988.0848307292,
            "unit": "ns",
            "range": "± 392.33507260683143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765118.1591099331,
            "unit": "ns",
            "range": "± 225.99614928364358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303741.73529411765,
            "unit": "ns",
            "range": "± 8994.43228895158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289237.40425531915,
            "unit": "ns",
            "range": "± 11037.666129843506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255758.7868852459,
            "unit": "ns",
            "range": "± 11516.387427075028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4577681.857142857,
            "unit": "ns",
            "range": "± 66709.97420044603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4186095.4,
            "unit": "ns",
            "range": "± 51153.60657135665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21048.63157894737,
            "unit": "ns",
            "range": "± 1950.0036609492724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98511.8085106383,
            "unit": "ns",
            "range": "± 7738.0749978670365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83191.1237113402,
            "unit": "ns",
            "range": "± 5159.622128157198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106725.48453608247,
            "unit": "ns",
            "range": "± 13183.114624012893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6776.135416666667,
            "unit": "ns",
            "range": "± 1203.08566103378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21621.114583333332,
            "unit": "ns",
            "range": "± 2483.3297420570407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1579815.3434343433,
            "unit": "ns",
            "range": "± 108387.88827755896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2940717.5833333335,
            "unit": "ns",
            "range": "± 73056.78677274255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2512161.2666666666,
            "unit": "ns",
            "range": "± 120460.06098673506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5966097.085106383,
            "unit": "ns",
            "range": "± 230601.73524261615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50465.45744680851,
            "unit": "ns",
            "range": "± 3710.0460729970932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8585592.236842105,
            "unit": "ns",
            "range": "± 290998.88633272867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23411383.066666666,
            "unit": "ns",
            "range": "± 416779.9634972643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57508750.86666667,
            "unit": "ns",
            "range": "± 706608.5300657608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118077049.73333333,
            "unit": "ns",
            "range": "± 801467.901596588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231815684.6,
            "unit": "ns",
            "range": "± 1326555.724724306"
          }
        ]
      }
    ]
  }
}