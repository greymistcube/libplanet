window.BENCHMARK_DATA = {
  "lastUpdate": 1688725437809,
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
          "id": "c6666c552fccd7852bb136bc2ab2f9583e6e8c94",
          "message": "Align with changed spec",
          "timestamp": "2023-07-07T19:08:19+09:00",
          "tree_id": "850c7723dcc2192085bf7c27cb7c000e2d820f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/c6666c552fccd7852bb136bc2ab2f9583e6e8c94"
        },
        "date": 1688725416866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461920.202020202,
            "unit": "ns",
            "range": "± 173528.573180796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2499269.230769231,
            "unit": "ns",
            "range": "± 94971.60471086853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1819493.8775510204,
            "unit": "ns",
            "range": "± 109677.2357629577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4978775.510204081,
            "unit": "ns",
            "range": "± 293514.9653927902"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44582.558139534885,
            "unit": "ns",
            "range": "± 3368.8256589068897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7307154.545454546,
            "unit": "ns",
            "range": "± 174948.32632270845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18263338.46153846,
            "unit": "ns",
            "range": "± 303820.81215320964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46339192.85714286,
            "unit": "ns",
            "range": "± 692503.9244146348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92154478.57142857,
            "unit": "ns",
            "range": "± 805707.3224847188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185432400,
            "unit": "ns",
            "range": "± 1900349.3342824345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4916244.244791667,
            "unit": "ns",
            "range": "± 54793.448283754245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519356.8229166667,
            "unit": "ns",
            "range": "± 10188.498029032113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170266.7410714286,
            "unit": "ns",
            "range": "± 8727.98704495927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649838.9322916665,
            "unit": "ns",
            "range": "± 30588.551707800158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823879.6274038461,
            "unit": "ns",
            "range": "± 3332.442629354051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741790.3846153846,
            "unit": "ns",
            "range": "± 1122.476738782459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3156785,
            "unit": "ns",
            "range": "± 68586.19835843913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3265454.1666666665,
            "unit": "ns",
            "range": "± 84161.1754917012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4043261.904761905,
            "unit": "ns",
            "range": "± 86776.88330535083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3572280,
            "unit": "ns",
            "range": "± 137816.00777848705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6138175.609756097,
            "unit": "ns",
            "range": "± 217465.07395497765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266965.306122449,
            "unit": "ns",
            "range": "± 10279.541798729977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255116.39344262294,
            "unit": "ns",
            "range": "± 10174.611873479807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238160.86956521738,
            "unit": "ns",
            "range": "± 14528.508968986485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3928953.846153846,
            "unit": "ns",
            "range": "± 25883.76632127479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3582106.6666666665,
            "unit": "ns",
            "range": "± 38006.75629160589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21917.894736842107,
            "unit": "ns",
            "range": "± 1779.1331230835021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95264.89361702128,
            "unit": "ns",
            "range": "± 7695.672676611852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70445.05494505494,
            "unit": "ns",
            "range": "± 4584.1093582132835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93645.36082474227,
            "unit": "ns",
            "range": "± 12639.422625085872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5149.484536082474,
            "unit": "ns",
            "range": "± 1037.4371177068401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19896.875,
            "unit": "ns",
            "range": "± 2075.1894333314553"
          }
        ]
      }
    ]
  }
}