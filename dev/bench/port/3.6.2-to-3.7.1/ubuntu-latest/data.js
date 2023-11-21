window.BENCHMARK_DATA = {
  "lastUpdate": 1700533946462,
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
        "date": 1700533940205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202656.97894736842,
            "unit": "ns",
            "range": "± 12304.842217580528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204275.76041666666,
            "unit": "ns",
            "range": "± 14115.188920371738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166917,
            "unit": "ns",
            "range": "± 3415.6762141631634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117738.3,
            "unit": "ns",
            "range": "± 54702.517577477964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2768271.8,
            "unit": "ns",
            "range": "± 24300.909336895194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15089.408163265307,
            "unit": "ns",
            "range": "± 2445.567662631723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65288.11224489796,
            "unit": "ns",
            "range": "± 8383.161396984418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64283.57,
            "unit": "ns",
            "range": "± 15268.500128924568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80784.81818181818,
            "unit": "ns",
            "range": "± 25831.65944101944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4468.373737373738,
            "unit": "ns",
            "range": "± 1916.036329519337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12033.369565217392,
            "unit": "ns",
            "range": "± 1393.2211133599349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3756086.771033654,
            "unit": "ns",
            "range": "± 20853.663199617713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212655.455357143,
            "unit": "ns",
            "range": "± 5381.073437714463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769068.5616048177,
            "unit": "ns",
            "range": "± 5625.1971508790675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930231.7797475962,
            "unit": "ns",
            "range": "± 3824.51847322861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620869.98046875,
            "unit": "ns",
            "range": "± 1622.5815031176235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567487.0270182291,
            "unit": "ns",
            "range": "± 983.9528624956824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40623.925531914894,
            "unit": "ns",
            "range": "± 5418.994100283835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397012.1016949154,
            "unit": "ns",
            "range": "± 105955.42785346191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2487757.2,
            "unit": "ns",
            "range": "± 40775.18744145407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3124751.1578947366,
            "unit": "ns",
            "range": "± 68958.0346251441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2981451.372881356,
            "unit": "ns",
            "range": "± 131886.34336478674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6530433.8,
            "unit": "ns",
            "range": "± 211384.56143258678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5493627.928571428,
            "unit": "ns",
            "range": "± 33272.95935305259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14206186.642857144,
            "unit": "ns",
            "range": "± 134848.50335931525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37130859.615384616,
            "unit": "ns",
            "range": "± 269644.35413044173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74562967.33333333,
            "unit": "ns",
            "range": "± 1177322.405316261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150122086.03333333,
            "unit": "ns",
            "range": "± 789301.6507439497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967676.7872340425,
            "unit": "ns",
            "range": "± 79821.5725247244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1894813.2602739725,
            "unit": "ns",
            "range": "± 93625.6869209376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1441631.8974358975,
            "unit": "ns",
            "range": "± 73777.04221373696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5511635.3125,
            "unit": "ns",
            "range": "± 216144.65550399997"
          }
        ]
      }
    ]
  }
}