window.BENCHMARK_DATA = {
  "lastUpdate": 1701749668092,
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
          "id": "c2b95f304e5a3fa2aba37b65f6ef6201faaf5ff3",
          "message": "Remove internal tracking of amounts for TotalUpdatedFungibleAssets",
          "timestamp": "2023-12-05T13:02:48+09:00",
          "tree_id": "066ad56efd90c1392e78ba1aef0fda604ff04734",
          "url": "https://github.com/greymistcube/libplanet/commit/c2b95f304e5a3fa2aba37b65f6ef6201faaf5ff3"
        },
        "date": 1701749661892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204491.73626373627,
            "unit": "ns",
            "range": "± 12021.296912688067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192127.88888888888,
            "unit": "ns",
            "range": "± 6305.544837806429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166649.64,
            "unit": "ns",
            "range": "± 4433.416570772478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063148.433333333,
            "unit": "ns",
            "range": "± 34421.844454330094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2893232.8571428573,
            "unit": "ns",
            "range": "± 31689.75273978627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16400.882978723403,
            "unit": "ns",
            "range": "± 2268.216982975328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68903.09375,
            "unit": "ns",
            "range": "± 7699.900881218673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66060.5612244898,
            "unit": "ns",
            "range": "± 17465.572274110928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70737.74489795919,
            "unit": "ns",
            "range": "± 11963.901109545932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3171.863157894737,
            "unit": "ns",
            "range": "± 558.7866720894615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16272.955555555556,
            "unit": "ns",
            "range": "± 2756.483596582286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3794637.605168269,
            "unit": "ns",
            "range": "± 34385.27136388828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1229109.3822115385,
            "unit": "ns",
            "range": "± 11251.947734606092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773434.1313151042,
            "unit": "ns",
            "range": "± 11510.84661191362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914999.5151742788,
            "unit": "ns",
            "range": "± 8360.494690760226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610479.4235276442,
            "unit": "ns",
            "range": "± 2202.975190105617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572747.8863699777,
            "unit": "ns",
            "range": "± 2282.8144753440724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42321.64835164835,
            "unit": "ns",
            "range": "± 7046.692189126953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2390265.4285714286,
            "unit": "ns",
            "range": "± 94721.71865951856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2596594.7647058824,
            "unit": "ns",
            "range": "± 69813.79295270354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3133701.6363636362,
            "unit": "ns",
            "range": "± 76358.3356004503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3086265,
            "unit": "ns",
            "range": "± 92709.29255578185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6920175.333333333,
            "unit": "ns",
            "range": "± 162497.21201310912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5690028.576923077,
            "unit": "ns",
            "range": "± 55530.739049739444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14877241.42857143,
            "unit": "ns",
            "range": "± 202697.4383336725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37017745.18518519,
            "unit": "ns",
            "range": "± 1024475.9987481795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76631106.46153846,
            "unit": "ns",
            "range": "± 524422.4442817412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155211989.6818182,
            "unit": "ns",
            "range": "± 3610828.152854324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1064589.5,
            "unit": "ns",
            "range": "± 113177.08423278753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2120346.2978723403,
            "unit": "ns",
            "range": "± 154213.47776479702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557373.108695652,
            "unit": "ns",
            "range": "± 133665.69396634476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6594655.439560439,
            "unit": "ns",
            "range": "± 515277.6250057656"
          }
        ]
      }
    ]
  }
}