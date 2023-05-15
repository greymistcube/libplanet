window.BENCHMARK_DATA = {
  "lastUpdate": 1684127536230,
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
          "id": "c551f90e210cec2fb0d2b8328218db7698d1459f",
          "message": "Changelog",
          "timestamp": "2023-05-15T13:59:10+09:00",
          "tree_id": "c0c0a06df54444d921759ddab9a0c0441bf134da",
          "url": "https://github.com/greymistcube/libplanet/commit/c551f90e210cec2fb0d2b8328218db7698d1459f"
        },
        "date": 1684127528102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3515325.64516129,
            "unit": "ns",
            "range": "± 49824.49551813404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745921.6,
            "unit": "ns",
            "range": "± 39305.62242914946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4564199.470588235,
            "unit": "ns",
            "range": "± 93691.1419953333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4652834.176470588,
            "unit": "ns",
            "range": "± 150199.0882348291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7167850.444444444,
            "unit": "ns",
            "range": "± 177291.33395722797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305870.54761904763,
            "unit": "ns",
            "range": "± 16369.139133184755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304718.7368421053,
            "unit": "ns",
            "range": "± 9987.99738790355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272147.82608695654,
            "unit": "ns",
            "range": "± 6749.297711965527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4530148.642857143,
            "unit": "ns",
            "range": "± 47148.827585728905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3975265.8,
            "unit": "ns",
            "range": "± 57263.740642000375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23148.61224489796,
            "unit": "ns",
            "range": "± 2560.4933627070927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113973.3870967742,
            "unit": "ns",
            "range": "± 8059.195850801171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92161.101010101,
            "unit": "ns",
            "range": "± 9453.61503848212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101958.22680412371,
            "unit": "ns",
            "range": "± 14283.462756734589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6164.734042553191,
            "unit": "ns",
            "range": "± 813.569781101238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23049.53125,
            "unit": "ns",
            "range": "± 1842.3375423808172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6065333.041145833,
            "unit": "ns",
            "range": "± 58191.1649121342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839634.8670479911,
            "unit": "ns",
            "range": "± 3293.779248222009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340390.9548177083,
            "unit": "ns",
            "range": "± 527.8474017105235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536488.073958333,
            "unit": "ns",
            "range": "± 4370.38016121169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797354.171875,
            "unit": "ns",
            "range": "± 655.354724932539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754968.8421223959,
            "unit": "ns",
            "range": "± 547.0127998521795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8167149.642857143,
            "unit": "ns",
            "range": "± 86244.08672849326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20213513.85714286,
            "unit": "ns",
            "range": "± 174503.6294808163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50380576.21428572,
            "unit": "ns",
            "range": "± 326906.03349543706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102378483.13333334,
            "unit": "ns",
            "range": "± 1000153.180613626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208022663.5,
            "unit": "ns",
            "range": "± 1897782.1030690111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1463186.9247311829,
            "unit": "ns",
            "range": "± 87113.0106325207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764837.272727273,
            "unit": "ns",
            "range": "± 103698.09913517929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312496.340909091,
            "unit": "ns",
            "range": "± 122943.03476083661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5502766.166666667,
            "unit": "ns",
            "range": "± 162316.10798538444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53757.886597938144,
            "unit": "ns",
            "range": "± 6936.226953581418"
          }
        ]
      }
    ]
  }
}