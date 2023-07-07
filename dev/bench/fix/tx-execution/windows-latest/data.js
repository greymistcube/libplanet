window.BENCHMARK_DATA = {
  "lastUpdate": 1688725715843,
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
      },
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
          "id": "2687fe01d517c7a827a8b221a83126684a56abb3",
          "message": "[skip changelog] Align with changed spec",
          "timestamp": "2023-07-07T19:12:16+09:00",
          "tree_id": "850c7723dcc2192085bf7c27cb7c000e2d820f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/2687fe01d517c7a827a8b221a83126684a56abb3"
        },
        "date": 1688725695906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363230.303030303,
            "unit": "ns",
            "range": "± 95600.4562521619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2540025.2525252528,
            "unit": "ns",
            "range": "± 154934.40636014417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1741809.4736842106,
            "unit": "ns",
            "range": "± 99676.81293537676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5067195,
            "unit": "ns",
            "range": "± 316219.16558269865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47344.086021505376,
            "unit": "ns",
            "range": "± 3069.3244677244606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7164013.333333333,
            "unit": "ns",
            "range": "± 66879.52779509765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20154991.666666668,
            "unit": "ns",
            "range": "± 207753.83798372943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50182253.333333336,
            "unit": "ns",
            "range": "± 826636.6699434753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100735760,
            "unit": "ns",
            "range": "± 2190153.802433927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197306700,
            "unit": "ns",
            "range": "± 3576105.985938709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4829016.09375,
            "unit": "ns",
            "range": "± 32380.17163511151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524978.6653645833,
            "unit": "ns",
            "range": "± 8464.878987186688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1200762.6888020833,
            "unit": "ns",
            "range": "± 6764.289798356497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680224.4140625,
            "unit": "ns",
            "range": "± 5545.887794205911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851927.3716517857,
            "unit": "ns",
            "range": "± 2182.248307589161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763333.3658854166,
            "unit": "ns",
            "range": "± 2754.6998760647157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3172192.3076923075,
            "unit": "ns",
            "range": "± 30283.946834873357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3302791.4285714286,
            "unit": "ns",
            "range": "± 94712.96690971272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4061170,
            "unit": "ns",
            "range": "± 142768.35855723845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3629482.3529411764,
            "unit": "ns",
            "range": "± 147100.35717955595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6207752,
            "unit": "ns",
            "range": "± 248651.34613489202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264357.44680851063,
            "unit": "ns",
            "range": "± 10117.693169820426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248680,
            "unit": "ns",
            "range": "± 9825.212258183908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224213.49206349207,
            "unit": "ns",
            "range": "± 9938.314609943998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4075835.714285714,
            "unit": "ns",
            "range": "± 72001.43008347775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3674835.714285714,
            "unit": "ns",
            "range": "± 58349.657004368695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17442.105263157893,
            "unit": "ns",
            "range": "± 1692.0074283932565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83196.875,
            "unit": "ns",
            "range": "± 6284.993876394454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70739.39393939394,
            "unit": "ns",
            "range": "± 2229.0608159518933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92780.61224489796,
            "unit": "ns",
            "range": "± 15121.669152967448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5325.510204081633,
            "unit": "ns",
            "range": "± 856.7874815580564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16927.835051546394,
            "unit": "ns",
            "range": "± 1969.9694513304655"
          }
        ]
      }
    ]
  }
}