window.BENCHMARK_DATA = {
  "lastUpdate": 1700533471000,
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
          "id": "12bea58324a8edab0a611a6612a42843839b885f",
          "message": "Release 3.6.2",
          "timestamp": "2023-11-21T11:11:15+09:00",
          "tree_id": "b3f337e651b4db2e3f6f4aee02b43a29cc8f980a",
          "url": "https://github.com/greymistcube/libplanet/commit/12bea58324a8edab0a611a6612a42843839b885f"
        },
        "date": 1700533449969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946883.5051546391,
            "unit": "ns",
            "range": "± 110211.96214606613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1648631.8181818181,
            "unit": "ns",
            "range": "± 49750.16546765645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1292516.8421052631,
            "unit": "ns",
            "range": "± 117061.44563327158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5067771.621621622,
            "unit": "ns",
            "range": "± 254208.50277334513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34106.944444444445,
            "unit": "ns",
            "range": "± 1608.0191986879333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5208926.666666667,
            "unit": "ns",
            "range": "± 26247.679262492267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13452133.333333334,
            "unit": "ns",
            "range": "± 140356.45268217564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32939676.923076924,
            "unit": "ns",
            "range": "± 171481.15617488974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65284814.28571428,
            "unit": "ns",
            "range": "± 431705.8540205407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130806292.85714285,
            "unit": "ns",
            "range": "± 442559.03467879194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3155210.4817708335,
            "unit": "ns",
            "range": "± 4554.71204600738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1005563.4244791666,
            "unit": "ns",
            "range": "± 2509.1705781560136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 671371.484375,
            "unit": "ns",
            "range": "± 895.3901202877726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940912.6201923077,
            "unit": "ns",
            "range": "± 2838.9901498989625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633187.6255580357,
            "unit": "ns",
            "range": "± 7434.205347527861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561864.6065848215,
            "unit": "ns",
            "range": "± 1835.1044972917698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2083385.294117647,
            "unit": "ns",
            "range": "± 49089.2747796881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2202924.5614035088,
            "unit": "ns",
            "range": "± 95727.53052414245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746086.206896552,
            "unit": "ns",
            "range": "± 79325.50807607282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2633836.111111111,
            "unit": "ns",
            "range": "± 78438.56250149915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5740806.756756756,
            "unit": "ns",
            "range": "± 194274.32857880305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167566.43835616438,
            "unit": "ns",
            "range": "± 8338.248778614365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160402.12765957447,
            "unit": "ns",
            "range": "± 4867.437919110241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141312.5,
            "unit": "ns",
            "range": "± 3603.4177616836755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2700960,
            "unit": "ns",
            "range": "± 39836.5553588302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2563173.3333333335,
            "unit": "ns",
            "range": "± 38543.379395663986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10113.829787234043,
            "unit": "ns",
            "range": "± 1270.136819641316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50985.86956521739,
            "unit": "ns",
            "range": "± 4369.665200083616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44616.92307692308,
            "unit": "ns",
            "range": "± 1892.548647886068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46053.260869565216,
            "unit": "ns",
            "range": "± 7232.974721082234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2402.1052631578946,
            "unit": "ns",
            "range": "± 392.7478069520204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9637.5,
            "unit": "ns",
            "range": "± 1127.7597728519838"
          }
        ]
      }
    ]
  }
}