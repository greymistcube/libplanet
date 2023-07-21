window.BENCHMARK_DATA = {
  "lastUpdate": 1689903385084,
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
          "id": "af86f2410462b8ca09b8023e578a566d3d066f6a",
          "message": "Removed KeyValuePairExtensions",
          "timestamp": "2023-07-20T20:05:07+09:00",
          "tree_id": "256acdd1ba23fd837a2a0a0fe8e2e6555f3c5e7c",
          "url": "https://github.com/greymistcube/libplanet/commit/af86f2410462b8ca09b8023e578a566d3d066f6a"
        },
        "date": 1689903369940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8497239.42857143,
            "unit": "ns",
            "range": "± 141677.55271890317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21047071.987179488,
            "unit": "ns",
            "range": "± 1084302.0302089332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52646850.93589743,
            "unit": "ns",
            "range": "± 1803711.9498643375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103481753.63333334,
            "unit": "ns",
            "range": "± 3042392.551598141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237865407.30645162,
            "unit": "ns",
            "range": "± 7231450.7137899995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64351.354166666664,
            "unit": "ns",
            "range": "± 9731.625990584209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370320.3010752688,
            "unit": "ns",
            "range": "± 50300.39185532923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301733.0430107527,
            "unit": "ns",
            "range": "± 23847.7302583787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293729.5411764706,
            "unit": "ns",
            "range": "± 16932.09075462003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4198375.921052632,
            "unit": "ns",
            "range": "± 91497.89697238084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3823659.3870967743,
            "unit": "ns",
            "range": "± 87225.5149164805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18292.406593406595,
            "unit": "ns",
            "range": "± 2578.975360607912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105836.80412371134,
            "unit": "ns",
            "range": "± 11480.923067055606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102913.22727272728,
            "unit": "ns",
            "range": "± 11119.14907625412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110317.25806451614,
            "unit": "ns",
            "range": "± 14862.157879123179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6379.333333333333,
            "unit": "ns",
            "range": "± 801.7642344974602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21779.617021276597,
            "unit": "ns",
            "range": "± 4011.7634013372867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663797.1134020619,
            "unit": "ns",
            "range": "± 221945.00855982865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3024732.5430107526,
            "unit": "ns",
            "range": "± 207160.51626046523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2211221.25,
            "unit": "ns",
            "range": "± 204241.00236178673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5992160.08045977,
            "unit": "ns",
            "range": "± 327785.7336560329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3463719.7916666665,
            "unit": "ns",
            "range": "± 300785.9370561664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3761029.0483870967,
            "unit": "ns",
            "range": "± 393943.5763820012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4637039.204301075,
            "unit": "ns",
            "range": "± 345397.1804129068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4007938.35,
            "unit": "ns",
            "range": "± 318074.84667807404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7571046.244897959,
            "unit": "ns",
            "range": "± 495237.29505151307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6688141.249399038,
            "unit": "ns",
            "range": "± 98151.92891804595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2125657.702938988,
            "unit": "ns",
            "range": "± 48583.196484439744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336349.6594401042,
            "unit": "ns",
            "range": "± 15574.766144035548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2817898.852120536,
            "unit": "ns",
            "range": "± 39353.81777472189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 912019.9151475695,
            "unit": "ns",
            "range": "± 18777.00834474759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764862.0971354167,
            "unit": "ns",
            "range": "± 9756.18334522729"
          }
        ]
      }
    ]
  }
}