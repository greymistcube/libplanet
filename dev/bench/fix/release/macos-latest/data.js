window.BENCHMARK_DATA = {
  "lastUpdate": 1700481234485,
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
      }
    ]
  }
}