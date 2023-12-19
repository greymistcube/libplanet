window.BENCHMARK_DATA = {
  "lastUpdate": 1702977655083,
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
          "id": "bcbaa618ef1e369234e7393f00ac95fb7f8fd794",
          "message": "Remove ExecuteRecord",
          "timestamp": "2023-12-19T18:09:45+09:00",
          "tree_id": "aef18ca1a5f3a2a0a1e649adcc6097661f51a3c9",
          "url": "https://github.com/greymistcube/libplanet/commit/bcbaa618ef1e369234e7393f00ac95fb7f8fd794"
        },
        "date": 1702977648889,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3688751.108173077,
            "unit": "ns",
            "range": "± 23726.340829531728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208008.6449497768,
            "unit": "ns",
            "range": "± 7303.170502694523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766728.3271484375,
            "unit": "ns",
            "range": "± 5456.876487979927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957902.7889322916,
            "unit": "ns",
            "range": "± 24007.68480208144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607053.7267127404,
            "unit": "ns",
            "range": "± 776.1582388255985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571551.4584635417,
            "unit": "ns",
            "range": "± 886.3808049114896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398007.2702702703,
            "unit": "ns",
            "range": "± 79574.66289231092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2496763.26,
            "unit": "ns",
            "range": "± 100543.55391987685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3092629.25,
            "unit": "ns",
            "range": "± 70620.3848465978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2978772.5283018867,
            "unit": "ns",
            "range": "± 113321.99122354572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6978035.304347826,
            "unit": "ns",
            "range": "± 173513.4921807719"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39679.755102040814,
            "unit": "ns",
            "range": "± 5169.682700409363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202521.8275862069,
            "unit": "ns",
            "range": "± 8887.335276708602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195507.20652173914,
            "unit": "ns",
            "range": "± 10978.160386074462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158763.58333333334,
            "unit": "ns",
            "range": "± 1246.9941647697062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3059578.6923076925,
            "unit": "ns",
            "range": "± 35881.502967835244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2786566.4285714286,
            "unit": "ns",
            "range": "± 27907.284435634876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15414.770833333334,
            "unit": "ns",
            "range": "± 2669.7739998149123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66829.52083333333,
            "unit": "ns",
            "range": "± 7280.975132753301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57094.836956521736,
            "unit": "ns",
            "range": "± 7478.760544422921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77098.40721649484,
            "unit": "ns",
            "range": "± 22258.12429020884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3445.9555555555557,
            "unit": "ns",
            "range": "± 801.089832260285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12551.395833333334,
            "unit": "ns",
            "range": "± 1623.576146912907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5732586.533333333,
            "unit": "ns",
            "range": "± 62740.03593157433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14485575.214285715,
            "unit": "ns",
            "range": "± 136221.1148820908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36874969.15384615,
            "unit": "ns",
            "range": "± 210712.66107144032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74267801.5,
            "unit": "ns",
            "range": "± 713151.444930501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150385758.57142857,
            "unit": "ns",
            "range": "± 686455.5886745853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971301.7934782609,
            "unit": "ns",
            "range": "± 80309.33413248445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1891834.7391304348,
            "unit": "ns",
            "range": "± 91357.34022485746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1387586.3368421053,
            "unit": "ns",
            "range": "± 87866.9701665366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5933718.4655172415,
            "unit": "ns",
            "range": "± 259907.47451165214"
          }
        ]
      }
    ]
  }
}