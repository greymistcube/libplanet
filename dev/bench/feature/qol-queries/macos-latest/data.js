window.BENCHMARK_DATA = {
  "lastUpdate": 1702517918298,
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
          "id": "e8396a4c123eca45891de7a292befa11b49e186e",
          "message": "Added HelperQuery",
          "timestamp": "2023-12-14T10:21:08+09:00",
          "tree_id": "3b228ebd7e37b79a77a996183e1fef4220da9d13",
          "url": "https://github.com/greymistcube/libplanet/commit/e8396a4c123eca45891de7a292befa11b49e186e"
        },
        "date": 1702517904550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8268008.384615385,
            "unit": "ns",
            "range": "± 218083.8864960136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20848371.666666668,
            "unit": "ns",
            "range": "± 815531.3037312217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50011212.6,
            "unit": "ns",
            "range": "± 1063562.6044689019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101577939.14285715,
            "unit": "ns",
            "range": "± 1454818.4438738849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208050397.7857143,
            "unit": "ns",
            "range": "± 3162880.4612311963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64534.80412371134,
            "unit": "ns",
            "range": "± 11189.323621983718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317793.28723404254,
            "unit": "ns",
            "range": "± 26332.07551070663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317043.13440860214,
            "unit": "ns",
            "range": "± 36697.63042486085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287188.05376344087,
            "unit": "ns",
            "range": "± 26627.849952946694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4021918.95,
            "unit": "ns",
            "range": "± 142358.6888690334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3737532.8157894737,
            "unit": "ns",
            "range": "± 127549.02795864372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19801.873684210525,
            "unit": "ns",
            "range": "± 2217.061474028012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82644.84782608696,
            "unit": "ns",
            "range": "± 7192.011368597743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83513.50515463918,
            "unit": "ns",
            "range": "± 11259.064160640111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100053.82474226804,
            "unit": "ns",
            "range": "± 17051.46485399074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5575.958762886598,
            "unit": "ns",
            "range": "± 922.1573993170149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17154.703296703297,
            "unit": "ns",
            "range": "± 1093.539548586307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388269.2157894736,
            "unit": "ns",
            "range": "± 184059.38961792944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2655585.846153846,
            "unit": "ns",
            "range": "± 135686.2018308226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137419.285714286,
            "unit": "ns",
            "range": "± 190678.51766150174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9453278.621621622,
            "unit": "ns",
            "range": "± 471861.9433337802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3215041.086956522,
            "unit": "ns",
            "range": "± 153579.8512211481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3411440.4375,
            "unit": "ns",
            "range": "± 260283.06303435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4400589.794117647,
            "unit": "ns",
            "range": "± 202544.46765495377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4187501.712121212,
            "unit": "ns",
            "range": "± 274434.3198997572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19409171.42,
            "unit": "ns",
            "range": "± 3499650.9319099043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5659612.214355469,
            "unit": "ns",
            "range": "± 108236.5509125929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1745240.2400948661,
            "unit": "ns",
            "range": "± 11460.140525079061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074414.9184895833,
            "unit": "ns",
            "range": "± 11135.714324349408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2845881.657939189,
            "unit": "ns",
            "range": "± 95567.924154233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867591.9684570313,
            "unit": "ns",
            "range": "± 10612.075170213118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779324.690625,
            "unit": "ns",
            "range": "± 9188.41454219806"
          }
        ]
      }
    ]
  }
}