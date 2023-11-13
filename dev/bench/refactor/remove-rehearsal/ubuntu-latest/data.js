window.BENCHMARK_DATA = {
  "lastUpdate": 1699883222690,
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
          "id": "e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb",
          "message": "More cleanup",
          "timestamp": "2023-11-13T22:30:12+09:00",
          "tree_id": "7a0fd03c1f94e4318c5ac397ab25ec869b9f15b8",
          "url": "https://github.com/greymistcube/libplanet/commit/e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb"
        },
        "date": 1699882879518,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5436023.933333334,
            "unit": "ns",
            "range": "± 22729.762274750403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14511397.086956521,
            "unit": "ns",
            "range": "± 364592.23109534715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35796923.93333333,
            "unit": "ns",
            "range": "± 337867.7827273069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73954053.88461539,
            "unit": "ns",
            "range": "± 699264.6436888229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147351882.35714287,
            "unit": "ns",
            "range": "± 574776.5133030947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966792.5056179776,
            "unit": "ns",
            "range": "± 75993.10008737091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984862.2207792208,
            "unit": "ns",
            "range": "± 100846.62558188672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481906.569892473,
            "unit": "ns",
            "range": "± 131297.19846272736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6331151.461538462,
            "unit": "ns",
            "range": "± 295345.96014674456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2399452.945945946,
            "unit": "ns",
            "range": "± 80200.05541281888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507094.2636363637,
            "unit": "ns",
            "range": "± 106076.56796040261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3090067.933333333,
            "unit": "ns",
            "range": "± 44287.22768871835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2986464.7066666665,
            "unit": "ns",
            "range": "± 146694.1155545962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7261766.848837209,
            "unit": "ns",
            "range": "± 212045.9307136842"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39406.770833333336,
            "unit": "ns",
            "range": "± 4837.722845087055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748036.5237165177,
            "unit": "ns",
            "range": "± 52646.93629387948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217812.1865234375,
            "unit": "ns",
            "range": "± 2609.6450538212403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775271.9773995535,
            "unit": "ns",
            "range": "± 3676.44957531241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942481.6176060268,
            "unit": "ns",
            "range": "± 14028.86698388525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625634.0098407452,
            "unit": "ns",
            "range": "± 734.1627601034783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577772.8352050781,
            "unit": "ns",
            "range": "± 630.1746232923387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197055.36923076923,
            "unit": "ns",
            "range": "± 8993.464141685808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189121.93548387097,
            "unit": "ns",
            "range": "± 7899.809758802906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170858,
            "unit": "ns",
            "range": "± 2252.309916849469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119383,
            "unit": "ns",
            "range": "± 22211.821199532467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738520.714285714,
            "unit": "ns",
            "range": "± 24909.58833130658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14641.855670103092,
            "unit": "ns",
            "range": "± 3536.570882076576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65670.47916666667,
            "unit": "ns",
            "range": "± 7558.247538430649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52007.36734693877,
            "unit": "ns",
            "range": "± 1846.8443885661377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66612.17741935483,
            "unit": "ns",
            "range": "± 6997.294120122886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3235.0947368421052,
            "unit": "ns",
            "range": "± 543.6818741609411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13644.635416666666,
            "unit": "ns",
            "range": "± 3113.7805761174204"
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
          "id": "4e657671079e61ee97e92a87749c25254b73e619",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:35:58+09:00",
          "tree_id": "ffc87d30a0b081f79f43c2ec82fa9d3e084c909c",
          "url": "https://github.com/greymistcube/libplanet/commit/4e657671079e61ee97e92a87749c25254b73e619"
        },
        "date": 1699883215690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5724259.630434782,
            "unit": "ns",
            "range": "± 139325.52507781726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14263025.333333334,
            "unit": "ns",
            "range": "± 95253.07233790166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36571577.06666667,
            "unit": "ns",
            "range": "± 267939.2257451749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74655578.58333333,
            "unit": "ns",
            "range": "± 250563.00734163323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151104135.58333334,
            "unit": "ns",
            "range": "± 568974.9192039788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020897.7653061225,
            "unit": "ns",
            "range": "± 114005.48325136532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876488.6923076923,
            "unit": "ns",
            "range": "± 77173.58054603677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495382.8578947368,
            "unit": "ns",
            "range": "± 129748.94796547348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6201965.785714285,
            "unit": "ns",
            "range": "± 174859.2821640171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398814.3666666667,
            "unit": "ns",
            "range": "± 71566.22304502233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2637337.36,
            "unit": "ns",
            "range": "± 101032.33407061083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186453.9523809524,
            "unit": "ns",
            "range": "± 69239.56673209053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3028105.709677419,
            "unit": "ns",
            "range": "± 132681.114410922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7361115.720930233,
            "unit": "ns",
            "range": "± 267001.9993340807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40233.916666666664,
            "unit": "ns",
            "range": "± 5751.322468819747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3784684.40234375,
            "unit": "ns",
            "range": "± 33783.36818547332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218932.2528545673,
            "unit": "ns",
            "range": "± 4305.726250952177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765126.7040364583,
            "unit": "ns",
            "range": "± 13793.832745923077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926143.2540690105,
            "unit": "ns",
            "range": "± 4144.543821396802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618647.957438151,
            "unit": "ns",
            "range": "± 1456.337057834508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577578.0894990809,
            "unit": "ns",
            "range": "± 11423.701891847211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200182.5,
            "unit": "ns",
            "range": "± 7683.093767462599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196766.22340425532,
            "unit": "ns",
            "range": "± 12846.057294100683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175082.4393939394,
            "unit": "ns",
            "range": "± 5463.741832179859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166303.714285714,
            "unit": "ns",
            "range": "± 43919.352174321604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2830212.210526316,
            "unit": "ns",
            "range": "± 51406.83688055829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13878.563829787234,
            "unit": "ns",
            "range": "± 2570.6569452749914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64624.52577319588,
            "unit": "ns",
            "range": "± 8283.458748328883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95063.9387755102,
            "unit": "ns",
            "range": "± 5552.096124677258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59106.69072164949,
            "unit": "ns",
            "range": "± 8975.020484378696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3158.548387096774,
            "unit": "ns",
            "range": "± 358.1045061251713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13377.75,
            "unit": "ns",
            "range": "± 2835.6110972305146"
          }
        ]
      }
    ]
  }
}