window.BENCHMARK_DATA = {
  "lastUpdate": 1702518546941,
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
          "id": "481de08392e541495922a1ea17c1f8999b9268ab",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:25:44+09:00",
          "tree_id": "27ee13100144e4d42b8e20df6b95145c81e45ff1",
          "url": "https://github.com/greymistcube/libplanet/commit/481de08392e541495922a1ea17c1f8999b9268ab"
        },
        "date": 1702518527908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13568615.188172042,
            "unit": "ns",
            "range": "± 3091106.4632252464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 33287338.354166668,
            "unit": "ns",
            "range": "± 5379853.320518488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78523662.67045455,
            "unit": "ns",
            "range": "± 19529254.77773848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116650311.96875,
            "unit": "ns",
            "range": "± 16519999.488467494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 303929346.3541667,
            "unit": "ns",
            "range": "± 49155158.80822762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75394.51111111112,
            "unit": "ns",
            "range": "± 21968.26464342815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250970.4081632653,
            "unit": "ns",
            "range": "± 25761.37894356498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262947.98148148146,
            "unit": "ns",
            "range": "± 19763.759645567887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232669.44444444444,
            "unit": "ns",
            "range": "± 24558.85445959696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4670989.2,
            "unit": "ns",
            "range": "± 552117.8360571575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3885960.7,
            "unit": "ns",
            "range": "± 68710.03869283896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17126.244444444445,
            "unit": "ns",
            "range": "± 2482.58805386506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80931.58426966293,
            "unit": "ns",
            "range": "± 8544.015749752718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114170.8125,
            "unit": "ns",
            "range": "± 24891.450127688633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119552.06315789474,
            "unit": "ns",
            "range": "± 32268.3008723338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5512.118556701031,
            "unit": "ns",
            "range": "± 1389.8441267765947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21548.82978723404,
            "unit": "ns",
            "range": "± 3320.8678305731232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428902.7191011235,
            "unit": "ns",
            "range": "± 182390.4139832382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3344126.597826087,
            "unit": "ns",
            "range": "± 674097.6539412847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2896842.063218391,
            "unit": "ns",
            "range": "± 787313.9493390508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13264930.822222222,
            "unit": "ns",
            "range": "± 3569477.7308760947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3860103.3085106383,
            "unit": "ns",
            "range": "± 606510.0532489539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4224130.410526316,
            "unit": "ns",
            "range": "± 753720.8202975634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4244813.620689655,
            "unit": "ns",
            "range": "± 388620.0105893255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3703446.144329897,
            "unit": "ns",
            "range": "± 313820.3804065641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18741609.163265307,
            "unit": "ns",
            "range": "± 3444940.679684904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5220342.523242188,
            "unit": "ns",
            "range": "± 272338.25530850055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1463798.1869255514,
            "unit": "ns",
            "range": "± 29155.266230417812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 880361.9589192708,
            "unit": "ns",
            "range": "± 6840.667596774312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971152.1674479167,
            "unit": "ns",
            "range": "± 31441.680761482126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633534.66640625,
            "unit": "ns",
            "range": "± 6845.837258720373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 634115.0076023537,
            "unit": "ns",
            "range": "± 32872.82745180639"
          }
        ]
      }
    ]
  }
}