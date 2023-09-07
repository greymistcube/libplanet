window.BENCHMARK_DATA = {
  "lastUpdate": 1694079872545,
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
          "id": "a3e6a6f8dfd6d77a0266a59859eb29e337503444",
          "message": "Parallel on Account level",
          "timestamp": "2023-09-07T18:31:10+09:00",
          "tree_id": "e11338d9a9bb3de5c4fbbb380eeebf73e8491981",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e6a6f8dfd6d77a0266a59859eb29e337503444"
        },
        "date": 1694079864169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364891.1515151516,
            "unit": "ns",
            "range": "± 101507.8847733036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596167.411764706,
            "unit": "ns",
            "range": "± 83806.76715611124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686527.855670103,
            "unit": "ns",
            "range": "± 105533.06227384676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4456397.842105263,
            "unit": "ns",
            "range": "± 149556.8680090523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268896.1951219512,
            "unit": "ns",
            "range": "± 8549.416197084782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265591.5,
            "unit": "ns",
            "range": "± 7624.695343033325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220784.64285714287,
            "unit": "ns",
            "range": "± 2803.326529655105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4194831.133333334,
            "unit": "ns",
            "range": "± 41689.95601523682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863099.2,
            "unit": "ns",
            "range": "± 31588.964262403864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19464.797872340427,
            "unit": "ns",
            "range": "± 1366.3290633089587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86494.88888888889,
            "unit": "ns",
            "range": "± 3882.7259633935064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69035.35714285714,
            "unit": "ns",
            "range": "± 1004.22581027475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80656.71428571429,
            "unit": "ns",
            "range": "± 11436.801524613515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4645.350515463918,
            "unit": "ns",
            "range": "± 569.3628024898592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18575.36170212766,
            "unit": "ns",
            "range": "± 1175.9212983966563"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46453.80459770115,
            "unit": "ns",
            "range": "± 2550.5962815793723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7844890.666666667,
            "unit": "ns",
            "range": "± 60813.75232352191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20051192.133333333,
            "unit": "ns",
            "range": "± 65854.20097443255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51334311.06666667,
            "unit": "ns",
            "range": "± 232634.18550575024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101857602.92857143,
            "unit": "ns",
            "range": "± 290722.95105728414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204809040.4,
            "unit": "ns",
            "range": "± 322014.54604096914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3304818.55,
            "unit": "ns",
            "range": "± 74390.16151663507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3489720.3333333335,
            "unit": "ns",
            "range": "± 95903.54726093696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4293703.733333333,
            "unit": "ns",
            "range": "± 56715.83432399339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3856307.172413793,
            "unit": "ns",
            "range": "± 111880.32506275526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6001805.033333333,
            "unit": "ns",
            "range": "± 138268.204547759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5097527.827604166,
            "unit": "ns",
            "range": "± 32022.20462610154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543691.420703125,
            "unit": "ns",
            "range": "± 4978.052538080369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079521.8875558036,
            "unit": "ns",
            "range": "± 717.2079337263386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2913934.834542411,
            "unit": "ns",
            "range": "± 1678.4084027669098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820541.1160714285,
            "unit": "ns",
            "range": "± 11955.388494003379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748724.5966796875,
            "unit": "ns",
            "range": "± 222.48573156135004"
          }
        ]
      }
    ]
  }
}