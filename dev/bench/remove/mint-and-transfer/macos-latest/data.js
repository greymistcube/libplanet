window.BENCHMARK_DATA = {
  "lastUpdate": 1684134097432,
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
          "id": "445e4d68e25d8322a38c01e059769dce027b0ead",
          "message": "Changelog",
          "timestamp": "2023-05-15T15:47:51+09:00",
          "tree_id": "93e901805fd0f4bf5d6425385e28af3603dccc18",
          "url": "https://github.com/greymistcube/libplanet/commit/445e4d68e25d8322a38c01e059769dce027b0ead"
        },
        "date": 1684134081923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7641577.655172414,
            "unit": "ns",
            "range": "± 216070.22504720144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19407278.486486487,
            "unit": "ns",
            "range": "± 641755.7174841886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47715647.64285714,
            "unit": "ns",
            "range": "± 742167.5585945854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93174897.95,
            "unit": "ns",
            "range": "± 2046669.2832125402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188033235.2352941,
            "unit": "ns",
            "range": "± 2803143.98484308"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60428.12631578947,
            "unit": "ns",
            "range": "± 6381.746731544328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304777.93333333335,
            "unit": "ns",
            "range": "± 13032.613265874696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296461.28125,
            "unit": "ns",
            "range": "± 19780.971813018547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276676.06666666665,
            "unit": "ns",
            "range": "± 13958.114785326861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4004816.96,
            "unit": "ns",
            "range": "± 103723.55302135255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3547513.8333333335,
            "unit": "ns",
            "range": "± 69514.30072950288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16750.264367816093,
            "unit": "ns",
            "range": "± 1439.382227463866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83205.25,
            "unit": "ns",
            "range": "± 6770.942039721146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78332.65934065935,
            "unit": "ns",
            "range": "± 9020.706306689664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98903.95789473684,
            "unit": "ns",
            "range": "± 13935.24456565407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4815.315217391304,
            "unit": "ns",
            "range": "± 587.6360338996536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16660.126373626375,
            "unit": "ns",
            "range": "± 1819.868424110513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500345.1684210526,
            "unit": "ns",
            "range": "± 145410.94617154254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2820488.9764705882,
            "unit": "ns",
            "range": "± 152041.48209280134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2332842.2666666666,
            "unit": "ns",
            "range": "± 201090.47863361562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6347738.362068965,
            "unit": "ns",
            "range": "± 276045.77549972356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3055890.6363636362,
            "unit": "ns",
            "range": "± 119869.07704540472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3339206.5714285714,
            "unit": "ns",
            "range": "± 51508.44387195064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4269398.875,
            "unit": "ns",
            "range": "± 100719.0892922154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4245807.776119403,
            "unit": "ns",
            "range": "± 200486.88131493423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7367498.58,
            "unit": "ns",
            "range": "± 292713.49955167656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6174624.397395833,
            "unit": "ns",
            "range": "± 41441.16986612954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842343.795703125,
            "unit": "ns",
            "range": "± 11953.53873712246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230654.760546875,
            "unit": "ns",
            "range": "± 7121.772093378053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2390303.340625,
            "unit": "ns",
            "range": "± 16105.78049027422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816822.0275530134,
            "unit": "ns",
            "range": "± 5468.123980668137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691327.6525390625,
            "unit": "ns",
            "range": "± 5066.3570137398865"
          }
        ]
      }
    ]
  }
}