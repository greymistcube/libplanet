window.BENCHMARK_DATA = {
  "lastUpdate": 1689324503451,
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
          "id": "71b3f912ea5fa366f1a67c91704479fd1a3be0e0",
          "message": "Merge tag '2.4.1' into port/2.4.1-to-2.5.1\n\nLibplanet 2.4.1",
          "timestamp": "2023-07-14T17:35:32+09:00",
          "tree_id": "e42dafe523e0e77b5f490a7f80835e4746fbf95e",
          "url": "https://github.com/greymistcube/libplanet/commit/71b3f912ea5fa366f1a67c91704479fd1a3be0e0"
        },
        "date": 1689324496029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290940.037037037,
            "unit": "ns",
            "range": "± 8118.0808146975305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276248.3333333333,
            "unit": "ns",
            "range": "± 9648.558259720881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236593.9411764706,
            "unit": "ns",
            "range": "± 4701.301541469504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4240243.357142857,
            "unit": "ns",
            "range": "± 31151.340031942676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3886401.5714285714,
            "unit": "ns",
            "range": "± 39124.31440090241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19390.297872340427,
            "unit": "ns",
            "range": "± 1514.9582614626447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91157.453125,
            "unit": "ns",
            "range": "± 4197.315407815869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73793.375,
            "unit": "ns",
            "range": "± 1450.1931767871479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86886.09756097561,
            "unit": "ns",
            "range": "± 6463.036582513482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4929.548387096775,
            "unit": "ns",
            "range": "± 605.1617016411728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18926.774193548386,
            "unit": "ns",
            "range": "± 1327.8240710555804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393172.25,
            "unit": "ns",
            "range": "± 99958.97439365601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638846.2333333334,
            "unit": "ns",
            "range": "± 78036.15282970399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1805472.8235294118,
            "unit": "ns",
            "range": "± 97219.72994216766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4805491.777777778,
            "unit": "ns",
            "range": "± 100269.92816543081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6035811.309709822,
            "unit": "ns",
            "range": "± 20014.174672017725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046936.2391183036,
            "unit": "ns",
            "range": "± 2584.423638844557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343384.7801339286,
            "unit": "ns",
            "range": "± 935.8615597131661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593666.570612981,
            "unit": "ns",
            "range": "± 1125.3275198595657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793152.1082589285,
            "unit": "ns",
            "range": "± 450.5564049964303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722788.5746744792,
            "unit": "ns",
            "range": "± 618.6442415781564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3384089.7407407407,
            "unit": "ns",
            "range": "± 94059.47536638417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3574640.7027027025,
            "unit": "ns",
            "range": "± 119877.30476613366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4347272.142857143,
            "unit": "ns",
            "range": "± 28795.60238555972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3797407.9655172415,
            "unit": "ns",
            "range": "± 86976.00616363884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6303249.705882353,
            "unit": "ns",
            "range": "± 123961.7704207454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7698989.466666667,
            "unit": "ns",
            "range": "± 52707.09955142485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19521142.53846154,
            "unit": "ns",
            "range": "± 99100.0399181011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50295487.4,
            "unit": "ns",
            "range": "± 263081.44719697954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99791390.64285715,
            "unit": "ns",
            "range": "± 473467.6032901556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200361058.92307693,
            "unit": "ns",
            "range": "± 382523.3127362874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47173.151162790695,
            "unit": "ns",
            "range": "± 2405.1547951526304"
          }
        ]
      }
    ]
  }
}