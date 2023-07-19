window.BENCHMARK_DATA = {
  "lastUpdate": 1689780694122,
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
          "id": "0e9db4a144b2f78afa6a4c708219dc39103a657b",
          "message": "Edited csproj",
          "timestamp": "2023-07-20T00:14:50+09:00",
          "tree_id": "9d01215fa046c2270f1c12d42b56752b93b1a265",
          "url": "https://github.com/greymistcube/libplanet/commit/0e9db4a144b2f78afa6a4c708219dc39103a657b"
        },
        "date": 1689780684765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340012.3734939759,
            "unit": "ns",
            "range": "± 18129.853876364068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325854.35714285716,
            "unit": "ns",
            "range": "± 13594.62415198619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300543.2727272727,
            "unit": "ns",
            "range": "± 10407.962587664102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4699443.466666667,
            "unit": "ns",
            "range": "± 75196.3407068139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136548.28,
            "unit": "ns",
            "range": "± 106213.06459836599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31075.73404255319,
            "unit": "ns",
            "range": "± 3131.754581135478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131029.91111111111,
            "unit": "ns",
            "range": "± 8638.466738230554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124954.27777777778,
            "unit": "ns",
            "range": "± 7602.034869554834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132216.64583333334,
            "unit": "ns",
            "range": "± 15230.497766326866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7914.010752688172,
            "unit": "ns",
            "range": "± 1079.3080864773026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24853.36170212766,
            "unit": "ns",
            "range": "± 1612.7054464508158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595961.923076923,
            "unit": "ns",
            "range": "± 149743.2926846794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2928861.9736842103,
            "unit": "ns",
            "range": "± 98500.88208151805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057877.775280899,
            "unit": "ns",
            "range": "± 122103.39743977351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5393440,
            "unit": "ns",
            "range": "± 169041.4332314344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6477883.7421875,
            "unit": "ns",
            "range": "± 27797.361416246596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017146.644252232,
            "unit": "ns",
            "range": "± 5322.691845787192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369818.7146935095,
            "unit": "ns",
            "range": "± 3374.837577991427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2921873.3079927885,
            "unit": "ns",
            "range": "± 78377.779725868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825767.7617885044,
            "unit": "ns",
            "range": "± 2741.609860772163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737308.4358072917,
            "unit": "ns",
            "range": "± 3031.6200873833413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3752441.3571428573,
            "unit": "ns",
            "range": "± 134555.63415904407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3940265.15625,
            "unit": "ns",
            "range": "± 122040.77017078361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4808110.045454546,
            "unit": "ns",
            "range": "± 108028.98452222254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4307133.306122449,
            "unit": "ns",
            "range": "± 170344.62467588123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6913867.4,
            "unit": "ns",
            "range": "± 202805.1589914779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9122842.294117646,
            "unit": "ns",
            "range": "± 293546.58918697183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22503215.076923076,
            "unit": "ns",
            "range": "± 277435.20580021973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57232513.71428572,
            "unit": "ns",
            "range": "± 749421.125680392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113185857.38461539,
            "unit": "ns",
            "range": "± 1677312.9295918287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227402426.85714287,
            "unit": "ns",
            "range": "± 6155263.462722601"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74312.96629213484,
            "unit": "ns",
            "range": "± 6483.17375534797"
          }
        ]
      }
    ]
  }
}