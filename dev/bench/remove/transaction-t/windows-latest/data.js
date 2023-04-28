window.BENCHMARK_DATA = {
  "lastUpdate": 1682677345179,
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
          "id": "fe1b7be5dbef726cda8b35ac5aa658e6ae372266",
          "message": "Partially removed t from transaction",
          "timestamp": "2023-04-28T18:39:17+09:00",
          "tree_id": "f6b5624d4eb813142323df63ac2449af272bad92",
          "url": "https://github.com/greymistcube/libplanet/commit/fe1b7be5dbef726cda8b35ac5aa658e6ae372266"
        },
        "date": 1682676265854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632156.5656565656,
            "unit": "ns",
            "range": "± 127495.48544357596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011742.4657534244,
            "unit": "ns",
            "range": "± 149242.13911720802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2566488.5057471264,
            "unit": "ns",
            "range": "± 140259.82486441743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6303097.97979798,
            "unit": "ns",
            "range": "± 409258.5271398673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58339.784946236556,
            "unit": "ns",
            "range": "± 5379.816139272755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8380136.666666667,
            "unit": "ns",
            "range": "± 97116.45341449369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23162650,
            "unit": "ns",
            "range": "± 187749.14831313535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58346022.72727273,
            "unit": "ns",
            "range": "± 1367018.9401731815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117161833.33333333,
            "unit": "ns",
            "range": "± 829052.3048893986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238033133.33333334,
            "unit": "ns",
            "range": "± 3971495.623757353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5841452.232142857,
            "unit": "ns",
            "range": "± 42311.65527289155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845582.2135416667,
            "unit": "ns",
            "range": "± 15198.126415080602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422622.8515625,
            "unit": "ns",
            "range": "± 12335.408704987993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3225246.2890625,
            "unit": "ns",
            "range": "± 32092.24410909913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986489.2277644231,
            "unit": "ns",
            "range": "± 4396.235543250608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924339.12109375,
            "unit": "ns",
            "range": "± 8420.163895306641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3746872.222222222,
            "unit": "ns",
            "range": "± 79081.66148359895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4037543.75,
            "unit": "ns",
            "range": "± 78394.9315432233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4680394.736842105,
            "unit": "ns",
            "range": "± 101996.16808534312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4960616.666666667,
            "unit": "ns",
            "range": "± 164111.8494894782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7725952.631578947,
            "unit": "ns",
            "range": "± 335524.6223162336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317480,
            "unit": "ns",
            "range": "± 10152.180516064971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303625,
            "unit": "ns",
            "range": "± 6900.638795754614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257512.32876712328,
            "unit": "ns",
            "range": "± 12755.771517298435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4635992.105263158,
            "unit": "ns",
            "range": "± 98403.76187360518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4197626.666666667,
            "unit": "ns",
            "range": "± 58772.217278315475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25146.315789473683,
            "unit": "ns",
            "range": "± 2468.8618502027084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114095.65217391304,
            "unit": "ns",
            "range": "± 7412.684599832144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103189.69072164949,
            "unit": "ns",
            "range": "± 8486.698962397013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119613.54166666667,
            "unit": "ns",
            "range": "± 17546.54933713039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7880.6122448979595,
            "unit": "ns",
            "range": "± 1272.9265058647545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24838.297872340427,
            "unit": "ns",
            "range": "± 2672.2833208470142"
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
          "id": "7f194abb611a038ebed510e3d018980e945c326c",
          "message": "Partially removed t from transaction",
          "timestamp": "2023-04-28T19:02:49+09:00",
          "tree_id": "21ae5700d32b3587eb21a0a9ad3d3c38553cfdd0",
          "url": "https://github.com/greymistcube/libplanet/commit/7f194abb611a038ebed510e3d018980e945c326c"
        },
        "date": 1682677315620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685761.7021276595,
            "unit": "ns",
            "range": "± 196992.13515569762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3133567.0212765955,
            "unit": "ns",
            "range": "± 197874.1678948115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2731985.4166666665,
            "unit": "ns",
            "range": "± 293672.3939068541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6967023.404255319,
            "unit": "ns",
            "range": "± 668505.0843736702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61782.02247191011,
            "unit": "ns",
            "range": "± 10110.464446189952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8781262.962962963,
            "unit": "ns",
            "range": "± 366265.9916252721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24538642.1875,
            "unit": "ns",
            "range": "± 1128756.9046430083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63379595,
            "unit": "ns",
            "range": "± 2825893.448362836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122749568.75,
            "unit": "ns",
            "range": "± 3716383.162599088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241036947.05882353,
            "unit": "ns",
            "range": "± 4907421.632221656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6330973.404947917,
            "unit": "ns",
            "range": "± 153041.80393271887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913455.357142857,
            "unit": "ns",
            "range": "± 32476.867856789497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410252.1129261365,
            "unit": "ns",
            "range": "± 29920.58609888663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3182948.074776786,
            "unit": "ns",
            "range": "± 49633.67435671488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1033838.125,
            "unit": "ns",
            "range": "± 14940.40145288691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934632.373046875,
            "unit": "ns",
            "range": "± 13871.709331495116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3914824.5901639345,
            "unit": "ns",
            "range": "± 162485.46053492266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4047738.6666666665,
            "unit": "ns",
            "range": "± 203726.67758631997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5030511.111111111,
            "unit": "ns",
            "range": "± 229475.6949046485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4689609.47368421,
            "unit": "ns",
            "range": "± 342494.60752819193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8297849.4949494945,
            "unit": "ns",
            "range": "± 681458.2987486583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317711.82795698923,
            "unit": "ns",
            "range": "± 22492.819382997906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290411.4583333333,
            "unit": "ns",
            "range": "± 25258.907213898838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246891.7808219178,
            "unit": "ns",
            "range": "± 12240.651233409128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4758584.615384615,
            "unit": "ns",
            "range": "± 130006.06968078898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3955796.7391304346,
            "unit": "ns",
            "range": "± 246171.2673046811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25360,
            "unit": "ns",
            "range": "± 5305.171861952116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100569.89247311828,
            "unit": "ns",
            "range": "± 11690.5181287549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104663.9175257732,
            "unit": "ns",
            "range": "± 16703.905391448447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118120,
            "unit": "ns",
            "range": "± 14653.534901394372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9981,
            "unit": "ns",
            "range": "± 4808.361719363719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23250,
            "unit": "ns",
            "range": "± 4698.701490723233"
          }
        ]
      }
    ]
  }
}