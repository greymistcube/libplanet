window.BENCHMARK_DATA = {
  "lastUpdate": 1690857542032,
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
          "id": "a40682ffd34f05ff76cf32151f4cb14e5a4eb214",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-01T11:20:04+09:00",
          "tree_id": "8e44e21bd65dfad89e80b457d02f8433363502ad",
          "url": "https://github.com/greymistcube/libplanet/commit/a40682ffd34f05ff76cf32151f4cb14e5a4eb214"
        },
        "date": 1690857518103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405643.6170212766,
            "unit": "ns",
            "range": "± 95556.8710453664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2649660.5263157897,
            "unit": "ns",
            "range": "± 133648.49826211776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1793634.0206185568,
            "unit": "ns",
            "range": "± 113946.78206531871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4714094.285714285,
            "unit": "ns",
            "range": "± 154600.34042816403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49461.95652173913,
            "unit": "ns",
            "range": "± 3233.643282307086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7562141.666666667,
            "unit": "ns",
            "range": "± 189500.66861569934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20701266.666666668,
            "unit": "ns",
            "range": "± 278415.59805099864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51373026.666666664,
            "unit": "ns",
            "range": "± 733095.497059915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103052600,
            "unit": "ns",
            "range": "± 1675205.5225724224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210241071.42857143,
            "unit": "ns",
            "range": "± 2428378.528796711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4916802.708333333,
            "unit": "ns",
            "range": "± 13735.999625423532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564930.498798077,
            "unit": "ns",
            "range": "± 1375.3144011033937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182900.4296875,
            "unit": "ns",
            "range": "± 6119.4012563262295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669561.1197916665,
            "unit": "ns",
            "range": "± 4260.7997713743125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864085.1888020834,
            "unit": "ns",
            "range": "± 3033.905090715453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783088.61328125,
            "unit": "ns",
            "range": "± 2088.311157632178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328092.3076923075,
            "unit": "ns",
            "range": "± 116301.03494270779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587180,
            "unit": "ns",
            "range": "± 66002.77266903262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4340370.37037037,
            "unit": "ns",
            "range": "± 120830.60875207082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4006155,
            "unit": "ns",
            "range": "± 75128.72094296772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6504184.090909091,
            "unit": "ns",
            "range": "± 240241.32435337038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273153.3333333333,
            "unit": "ns",
            "range": "± 10171.855109253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259109.25925925927,
            "unit": "ns",
            "range": "± 10830.917808432756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240967.67676767678,
            "unit": "ns",
            "range": "± 14115.968872187883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4231138.461538462,
            "unit": "ns",
            "range": "± 49486.30346640604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3854120,
            "unit": "ns",
            "range": "± 65588.43756987312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22571.875,
            "unit": "ns",
            "range": "± 2203.905773370254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92411.70212765958,
            "unit": "ns",
            "range": "± 6498.913993361792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79190.52631578948,
            "unit": "ns",
            "range": "± 6248.916053821204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98307.14285714286,
            "unit": "ns",
            "range": "± 15791.079629850794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5424.468085106383,
            "unit": "ns",
            "range": "± 783.6619539765038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20736.458333333332,
            "unit": "ns",
            "range": "± 1942.007631383275"
          }
        ]
      }
    ]
  }
}