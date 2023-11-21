window.BENCHMARK_DATA = {
  "lastUpdate": 1700534273344,
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
          "id": "1aaf4d0f97903475bf4dff51d08bfc581df2665f",
          "message": "Merge tag '3.6.2' into port/3.6.2-to-3.7.1\n\nLibplanet 3.6.2",
          "timestamp": "2023-11-21T11:21:28+09:00",
          "tree_id": "edce08a8074a4ad8dc2d4f560984a1db8e096f97",
          "url": "https://github.com/greymistcube/libplanet/commit/1aaf4d0f97903475bf4dff51d08bfc581df2665f"
        },
        "date": 1700534259422,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8133364,
            "unit": "ns",
            "range": "± 169850.42381884472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20243627.615384616,
            "unit": "ns",
            "range": "± 305002.71620909066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59104196.72527473,
            "unit": "ns",
            "range": "± 9241742.210891105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105155867.1098901,
            "unit": "ns",
            "range": "± 7644676.129155412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229894560.3,
            "unit": "ns",
            "range": "± 21253642.483682808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62132.77173913043,
            "unit": "ns",
            "range": "± 15868.704319241073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248643.3777777778,
            "unit": "ns",
            "range": "± 20415.18190571225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239210.77777777778,
            "unit": "ns",
            "range": "± 30318.62180246035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233349.88505747126,
            "unit": "ns",
            "range": "± 15995.674834318157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3874967.02,
            "unit": "ns",
            "range": "± 99338.07557281347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3610298.8076923075,
            "unit": "ns",
            "range": "± 46651.708860063234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19211.94680851064,
            "unit": "ns",
            "range": "± 4398.667883311707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73485.32978723405,
            "unit": "ns",
            "range": "± 11163.26298444874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72868.31578947368,
            "unit": "ns",
            "range": "± 6109.320800538875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75998.92783505155,
            "unit": "ns",
            "range": "± 12426.9787980354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5211.813186813187,
            "unit": "ns",
            "range": "± 962.5235225072328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15130.73076923077,
            "unit": "ns",
            "range": "± 2717.951864003985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1244068.5666666667,
            "unit": "ns",
            "range": "± 184089.0309401063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2425586.772727273,
            "unit": "ns",
            "range": "± 156881.39771234075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1634932.224719101,
            "unit": "ns",
            "range": "± 164344.33665690743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7143146.297752809,
            "unit": "ns",
            "range": "± 701619.6070779926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3237446.8936170214,
            "unit": "ns",
            "range": "± 366167.62208417454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3220939.7195121953,
            "unit": "ns",
            "range": "± 257905.7961923055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4181602.7021276597,
            "unit": "ns",
            "range": "± 644141.586433738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4371396.105263158,
            "unit": "ns",
            "range": "± 968463.0089253235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14502902.140449438,
            "unit": "ns",
            "range": "± 2099736.6775259217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4344498.893229167,
            "unit": "ns",
            "range": "± 22238.795643219062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1386842.3072916667,
            "unit": "ns",
            "range": "± 7259.604106027097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 871423.7661458333,
            "unit": "ns",
            "range": "± 12269.385179271701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928748.0958533655,
            "unit": "ns",
            "range": "± 11978.460457148429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636821.9377092634,
            "unit": "ns",
            "range": "± 10387.35501137028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565399.5254603794,
            "unit": "ns",
            "range": "± 8147.278332038211"
          }
        ]
      }
    ]
  }
}