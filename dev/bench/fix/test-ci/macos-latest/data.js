window.BENCHMARK_DATA = {
  "lastUpdate": 1707236817236,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89190968ea5bc627a904f2997040d8261ffad241",
          "message": "Merge pull request #3654 from greymistcube/merge/4.0.2-to-main\n\n🔀 Merge 4.0.2 to main",
          "timestamp": "2024-02-06T15:08:58+09:00",
          "tree_id": "1962cabcefac60b16dcc0d70eadaa10d61f02fac",
          "url": "https://github.com/greymistcube/libplanet/commit/89190968ea5bc627a904f2997040d8261ffad241"
        },
        "date": 1707236798742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8002987.774193549,
            "unit": "ns",
            "range": "± 242887.12840806114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19757741.42,
            "unit": "ns",
            "range": "± 512648.2232807503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49762215.541666664,
            "unit": "ns",
            "range": "± 1943993.4176375729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97766418.03571428,
            "unit": "ns",
            "range": "± 2718200.083890216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197759908.29411766,
            "unit": "ns",
            "range": "± 3845500.8843853287"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47901.755319148935,
            "unit": "ns",
            "range": "± 9720.76106769354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247029.25555555554,
            "unit": "ns",
            "range": "± 16112.53406046634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262894.32795698923,
            "unit": "ns",
            "range": "± 33977.905480468406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210644.31914893616,
            "unit": "ns",
            "range": "± 22864.598108557824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039738.3666666667,
            "unit": "ns",
            "range": "± 68842.48994092723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3519515.1428571427,
            "unit": "ns",
            "range": "± 56772.54417932498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15594.54347826087,
            "unit": "ns",
            "range": "± 2226.0475045682115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66199.56701030929,
            "unit": "ns",
            "range": "± 10068.355217697363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65809.27551020408,
            "unit": "ns",
            "range": "± 12859.516112796406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67099.70833333333,
            "unit": "ns",
            "range": "± 14648.516401197097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4050.8505154639174,
            "unit": "ns",
            "range": "± 1397.711753793478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12749.8202247191,
            "unit": "ns",
            "range": "± 1651.3601801503848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1084709,
            "unit": "ns",
            "range": "± 118158.61847359095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2201188.1612903224,
            "unit": "ns",
            "range": "± 99028.93689732585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1727294.706521739,
            "unit": "ns",
            "range": "± 117314.07018623204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19542701.804347824,
            "unit": "ns",
            "range": "± 2676832.6878463486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2948350.144927536,
            "unit": "ns",
            "range": "± 141365.99529239023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3122021.712121212,
            "unit": "ns",
            "range": "± 147143.80732733905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3638662.0217391304,
            "unit": "ns",
            "range": "± 88954.17472081268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3745100.909090909,
            "unit": "ns",
            "range": "± 204865.98147225258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22175648.544444446,
            "unit": "ns",
            "range": "± 2888075.054978521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4742214.076822917,
            "unit": "ns",
            "range": "± 120694.49832023327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1446304.7585819128,
            "unit": "ns",
            "range": "± 45765.24408858994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 920734.917578125,
            "unit": "ns",
            "range": "± 27495.485631325522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2155577.418229167,
            "unit": "ns",
            "range": "± 81789.01056811903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641530.5332438151,
            "unit": "ns",
            "range": "± 16595.859567326337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581550.1881510416,
            "unit": "ns",
            "range": "± 6648.3827147756665"
          }
        ]
      }
    ]
  }
}