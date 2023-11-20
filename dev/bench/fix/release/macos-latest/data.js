window.BENCHMARK_DATA = {
  "lastUpdate": 1700482009399,
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
          "id": "a773b1e3352c423c8b1d3e5a8458b2eb80511f05",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:35:00+09:00",
          "tree_id": "30cc4f94e623cf3b676e1211b9e1635f7d073bc6",
          "url": "https://github.com/greymistcube/libplanet/commit/a773b1e3352c423c8b1d3e5a8458b2eb80511f05"
        },
        "date": 1700481211353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8025616.695876288,
            "unit": "ns",
            "range": "± 694565.3449522052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18465026.333333332,
            "unit": "ns",
            "range": "± 234403.96319774442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46904324.333333336,
            "unit": "ns",
            "range": "± 852277.6073277051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92431604.08823529,
            "unit": "ns",
            "range": "± 1283056.4351435918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195285349.05660376,
            "unit": "ns",
            "range": "± 8037453.525943339"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40552.79569892473,
            "unit": "ns",
            "range": "± 9588.48667453876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229509.42708333334,
            "unit": "ns",
            "range": "± 21121.14231347836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216804.3404255319,
            "unit": "ns",
            "range": "± 14132.220635764152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203070.36559139786,
            "unit": "ns",
            "range": "± 20902.618868470578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3724947.6923076925,
            "unit": "ns",
            "range": "± 90877.5775015022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3443926.3181818184,
            "unit": "ns",
            "range": "± 78114.23280935388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12154.404255319148,
            "unit": "ns",
            "range": "± 981.5319830474903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58327.37362637363,
            "unit": "ns",
            "range": "± 4757.4952341853905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56221.15909090909,
            "unit": "ns",
            "range": "± 4446.566351605105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60098.385416666664,
            "unit": "ns",
            "range": "± 11067.727780752368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3264.190476190476,
            "unit": "ns",
            "range": "± 487.60254346150816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11574.139784946237,
            "unit": "ns",
            "range": "± 746.2536518211989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338802.6595744682,
            "unit": "ns",
            "range": "± 104729.70522421328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894676.642105263,
            "unit": "ns",
            "range": "± 222760.07277036383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1913677.3440860214,
            "unit": "ns",
            "range": "± 154566.98290761493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8605008.967032967,
            "unit": "ns",
            "range": "± 677344.1990059977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2857900.533333333,
            "unit": "ns",
            "range": "± 49696.37389742214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2964721.1842105263,
            "unit": "ns",
            "range": "± 100374.833565977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3585043.7906976743,
            "unit": "ns",
            "range": "± 130982.33232106028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3496822.8928571427,
            "unit": "ns",
            "range": "± 97332.04755404136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12679409.715789475,
            "unit": "ns",
            "range": "± 2061540.2397474186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4197562.8694661455,
            "unit": "ns",
            "range": "± 105976.33747272813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534503.4262152778,
            "unit": "ns",
            "range": "± 129668.88671881672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060810.9622167968,
            "unit": "ns",
            "range": "± 121245.71063901266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2804317.4229266825,
            "unit": "ns",
            "range": "± 96364.04257394593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872287.5679552802,
            "unit": "ns",
            "range": "± 25322.585941814054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773573.5153808594,
            "unit": "ns",
            "range": "± 23240.369397251747"
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
          "id": "4f79b61f37a3c78189e4e9b3ce7197dc0836a77a",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:36:46+09:00",
          "tree_id": "4ab1130a8fe8964c78fd960543263fe9019b43bf",
          "url": "https://github.com/greymistcube/libplanet/commit/4f79b61f37a3c78189e4e9b3ce7197dc0836a77a"
        },
        "date": 1700481981886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11189480.318181818,
            "unit": "ns",
            "range": "± 243648.18186756523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29781740.576923076,
            "unit": "ns",
            "range": "± 1518064.8221078245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75937063.02325581,
            "unit": "ns",
            "range": "± 2800879.8281924054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141016989.5927835,
            "unit": "ns",
            "range": "± 14160760.919537352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 357234486.18686867,
            "unit": "ns",
            "range": "± 81514772.28051436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81867.86170212766,
            "unit": "ns",
            "range": "± 23064.540796717887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368944.1868131868,
            "unit": "ns",
            "range": "± 48543.99543047113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360895.5517241379,
            "unit": "ns",
            "range": "± 33404.954301740385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299113.8222222222,
            "unit": "ns",
            "range": "± 37756.72315035177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5511576.916666667,
            "unit": "ns",
            "range": "± 51734.55370614733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4694474.326086956,
            "unit": "ns",
            "range": "± 356380.4178024619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27547.858695652172,
            "unit": "ns",
            "range": "± 4791.227566626144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118894.23913043478,
            "unit": "ns",
            "range": "± 12103.698187798187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118057.2311827957,
            "unit": "ns",
            "range": "± 19347.6454460843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93420.32978723405,
            "unit": "ns",
            "range": "± 16791.363137290267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6040.035353535353,
            "unit": "ns",
            "range": "± 2539.296923074041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17450.18817204301,
            "unit": "ns",
            "range": "± 3932.7198658194247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1942238.8333333333,
            "unit": "ns",
            "range": "± 538264.5830853207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4643535.775510204,
            "unit": "ns",
            "range": "± 1115262.5689480172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3127383.8229166665,
            "unit": "ns",
            "range": "± 767066.131343514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13706114.010309279,
            "unit": "ns",
            "range": "± 3467915.073235639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4549344.071428572,
            "unit": "ns",
            "range": "± 77825.91472537062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4496979.393258427,
            "unit": "ns",
            "range": "± 251992.55409817796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5555625.044117647,
            "unit": "ns",
            "range": "± 261778.0702335036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5516317.945054945,
            "unit": "ns",
            "range": "± 640273.1511866091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20227825.14893617,
            "unit": "ns",
            "range": "± 3716262.3255560133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6226606.966897552,
            "unit": "ns",
            "range": "± 403033.6020783626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1916067.7900191327,
            "unit": "ns",
            "range": "± 159593.95698608813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217859.361497962,
            "unit": "ns",
            "range": "± 89808.7062705151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3092060.0134055396,
            "unit": "ns",
            "range": "± 186937.0353246173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935814.8643564552,
            "unit": "ns",
            "range": "± 69947.58359283251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 633412.5744258997,
            "unit": "ns",
            "range": "± 60677.19108981616"
          }
        ]
      }
    ]
  }
}