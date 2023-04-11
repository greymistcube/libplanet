window.BENCHMARK_DATA = {
  "lastUpdate": 1681171750040,
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
          "id": "610a906bda27f7a618e63d50ab8551c99e390adc",
          "message": "[skip changelog] Updated BlockChain<T>.Count description",
          "timestamp": "2023-04-11T08:50:26+09:00",
          "tree_id": "e2b21b61850aefe125b79bff5a1a8fbed3c50ce0",
          "url": "https://github.com/greymistcube/libplanet/commit/610a906bda27f7a618e63d50ab8551c99e390adc"
        },
        "date": 1681171737299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8832129.059701493,
            "unit": "ns",
            "range": "± 416613.05171508965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22142605,
            "unit": "ns",
            "range": "± 829973.6733275005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55187672.62195122,
            "unit": "ns",
            "range": "± 1981031.8107352694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107147955.33333333,
            "unit": "ns",
            "range": "± 2470160.2122380305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229233784.02941176,
            "unit": "ns",
            "range": "± 4391632.784552932"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72522.13829787234,
            "unit": "ns",
            "range": "± 11328.98760944073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379925.93617021275,
            "unit": "ns",
            "range": "± 23207.103463318563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304070.3965517241,
            "unit": "ns",
            "range": "± 13348.869317963154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322647.91752577317,
            "unit": "ns",
            "range": "± 33587.61105665491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5793949.0625,
            "unit": "ns",
            "range": "± 265060.939520017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914547.566666667,
            "unit": "ns",
            "range": "± 72893.39729697909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16526.384615384617,
            "unit": "ns",
            "range": "± 1333.498987786399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86778.02127659574,
            "unit": "ns",
            "range": "± 8196.278026239312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120142.23157894737,
            "unit": "ns",
            "range": "± 18310.668342179375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 281005.0416666667,
            "unit": "ns",
            "range": "± 33338.1090493705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8206.709677419354,
            "unit": "ns",
            "range": "± 1642.6570706490008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19583.066666666666,
            "unit": "ns",
            "range": "± 4388.300057468954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671357.391304348,
            "unit": "ns",
            "range": "± 209822.01759455467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3145523.505263158,
            "unit": "ns",
            "range": "± 204428.5879208592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2807515.0789473685,
            "unit": "ns",
            "range": "± 330427.26575848623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7278087.852631579,
            "unit": "ns",
            "range": "± 645765.9701888413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3435704.077777778,
            "unit": "ns",
            "range": "± 191163.92089567365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3628719.9731182796,
            "unit": "ns",
            "range": "± 278182.2176239646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4558247.059139785,
            "unit": "ns",
            "range": "± 256132.77959129369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4767446.194805195,
            "unit": "ns",
            "range": "± 234524.92629799497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9074261.739583334,
            "unit": "ns",
            "range": "± 765913.5921620765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7342446.178693182,
            "unit": "ns",
            "range": "± 297374.13203393936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016874.3779871324,
            "unit": "ns",
            "range": "± 81033.38890861487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466575.1784733953,
            "unit": "ns",
            "range": "± 72833.82596081233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580576.1166992188,
            "unit": "ns",
            "range": "± 64786.54524248411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 968593.7188091855,
            "unit": "ns",
            "range": "± 29900.929496149307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797605.2732204861,
            "unit": "ns",
            "range": "± 22260.611756432198"
          }
        ]
      }
    ]
  }
}