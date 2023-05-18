window.BENCHMARK_DATA = {
  "lastUpdate": 1684377129992,
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
          "id": "ccebb8e5ccd3d96fd056ed0f4e64cc5bbe8ef699",
          "message": "Prepare 1.2.2",
          "timestamp": "2023-05-18T11:18:14+09:00",
          "tree_id": "02032a856fc0fc2cfdbf33544da2b4656195e77b",
          "url": "https://github.com/greymistcube/libplanet/commit/ccebb8e5ccd3d96fd056ed0f4e64cc5bbe8ef699"
        },
        "date": 1684377122974,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3620820.4,
            "unit": "ns",
            "range": "± 93890.69715365842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3977098.714285714,
            "unit": "ns",
            "range": "± 68144.17018964399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4529887,
            "unit": "ns",
            "range": "± 71970.83648752657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4726629.6,
            "unit": "ns",
            "range": "± 64830.32577516702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7122486.1875,
            "unit": "ns",
            "range": "± 136547.38905753256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292016.19444444444,
            "unit": "ns",
            "range": "± 8248.209838052113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282929.3650793651,
            "unit": "ns",
            "range": "± 12947.513342401471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252273.90566037735,
            "unit": "ns",
            "range": "± 10217.064001847692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4508927.571428572,
            "unit": "ns",
            "range": "± 50470.75877821089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4135086.3333333335,
            "unit": "ns",
            "range": "± 40710.019261087255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20289.797872340427,
            "unit": "ns",
            "range": "± 1850.7169699311462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94518.87912087912,
            "unit": "ns",
            "range": "± 5307.297187908497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86946.47422680413,
            "unit": "ns",
            "range": "± 7069.576509435789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104412.9574468085,
            "unit": "ns",
            "range": "± 13639.517605630292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6694.9375,
            "unit": "ns",
            "range": "± 969.9872686359288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19776.263736263736,
            "unit": "ns",
            "range": "± 1964.288872369533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6038088.688616072,
            "unit": "ns",
            "range": "± 28993.347057814866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840438.6155348558,
            "unit": "ns",
            "range": "± 940.5657527509488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347704.0993489583,
            "unit": "ns",
            "range": "± 2985.966342851122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635799.8213541666,
            "unit": "ns",
            "range": "± 3306.69745884533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845229.0772786458,
            "unit": "ns",
            "range": "± 429.8497341110283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757282.3069411058,
            "unit": "ns",
            "range": "± 380.1067030084365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8213083.625,
            "unit": "ns",
            "range": "± 149542.08387423924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21927487,
            "unit": "ns",
            "range": "± 220581.1687885955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54662421.571428575,
            "unit": "ns",
            "range": "± 405253.1654960531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110720291.73333333,
            "unit": "ns",
            "range": "± 986104.379886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221651256.6,
            "unit": "ns",
            "range": "± 1595537.445326755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1490344.275510204,
            "unit": "ns",
            "range": "± 98640.99076232353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877648.3571428573,
            "unit": "ns",
            "range": "± 80329.09409709735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2403827.7662337665,
            "unit": "ns",
            "range": "± 121909.39963780438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5847960.037735849,
            "unit": "ns",
            "range": "± 241631.9490822897"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50482.57142857143,
            "unit": "ns",
            "range": "± 3139.970152522179"
          }
        ]
      }
    ]
  }
}