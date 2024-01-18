window.BENCHMARK_DATA = {
  "lastUpdate": 1705574054891,
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
          "id": "e5cd975ccbf0c3a5de3322248f1a35a8e7c762e8",
          "message": "Release 3.9.5",
          "timestamp": "2024-01-18T19:23:04+09:00",
          "tree_id": "da14c07be829cc800aae2bc03d11a08274732fb5",
          "url": "https://github.com/greymistcube/libplanet/commit/e5cd975ccbf0c3a5de3322248f1a35a8e7c762e8"
        },
        "date": 1705574048547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3701130.7708333335,
            "unit": "ns",
            "range": "± 43917.88354002532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207315.8115885416,
            "unit": "ns",
            "range": "± 22533.295306728767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764210.5253092448,
            "unit": "ns",
            "range": "± 3459.0682072361697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968262.4293870192,
            "unit": "ns",
            "range": "± 18651.633292835537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617706.2136230469,
            "unit": "ns",
            "range": "± 1230.4806131463552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566183.7019042969,
            "unit": "ns",
            "range": "± 679.092354978438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2509698.1666666665,
            "unit": "ns",
            "range": "± 34308.24835572483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2597832.382352941,
            "unit": "ns",
            "range": "± 83419.16814171331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3250882.214285714,
            "unit": "ns",
            "range": "± 92411.99878717735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3129899.925287356,
            "unit": "ns",
            "range": "± 206734.4050918131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6856537.326086956,
            "unit": "ns",
            "range": "± 144192.33448596994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41479.836734693876,
            "unit": "ns",
            "range": "± 5549.21137694892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210544.98936170212,
            "unit": "ns",
            "range": "± 13794.047350055913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208530.0888888889,
            "unit": "ns",
            "range": "± 12549.974954891919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166951.40625,
            "unit": "ns",
            "range": "± 5187.031215409937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3110761.1923076925,
            "unit": "ns",
            "range": "± 31790.555409284207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2838214.4285714286,
            "unit": "ns",
            "range": "± 46147.201479803545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16803.416666666668,
            "unit": "ns",
            "range": "± 2662.800843064415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66097.49462365592,
            "unit": "ns",
            "range": "± 6308.228712706809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89527,
            "unit": "ns",
            "range": "± 1895.7083729556393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76542.46808510639,
            "unit": "ns",
            "range": "± 11770.541029993285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5199.747474747474,
            "unit": "ns",
            "range": "± 1430.802474590598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15898.30612244898,
            "unit": "ns",
            "range": "± 3523.903650250782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5743481.933333334,
            "unit": "ns",
            "range": "± 42422.792425882624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14780061.733333332,
            "unit": "ns",
            "range": "± 94765.71688527953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37170659.615384616,
            "unit": "ns",
            "range": "± 162104.1754086645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74926033.21428572,
            "unit": "ns",
            "range": "± 268661.4846216413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151313206.92857143,
            "unit": "ns",
            "range": "± 812650.5302045905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946751.2010309278,
            "unit": "ns",
            "range": "± 63564.62056626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1863119.177777778,
            "unit": "ns",
            "range": "± 69896.83395752526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1388583.402173913,
            "unit": "ns",
            "range": "± 101437.07704216668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5804740.25,
            "unit": "ns",
            "range": "± 259050.13126587804"
          }
        ]
      }
    ]
  }
}