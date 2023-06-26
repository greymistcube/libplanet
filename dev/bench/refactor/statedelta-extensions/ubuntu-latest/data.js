window.BENCHMARK_DATA = {
  "lastUpdate": 1687768963499,
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
          "id": "e105b12db61377b35d96e7224587d33d21db53dc",
          "message": "Minor streamlining",
          "timestamp": "2023-06-26T17:27:37+09:00",
          "tree_id": "d555eb2892f956aa6baefb42a14972b46a5a7f75",
          "url": "https://github.com/greymistcube/libplanet/commit/e105b12db61377b35d96e7224587d33d21db53dc"
        },
        "date": 1687768956234,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3837301.533333333,
            "unit": "ns",
            "range": "± 68086.9288681406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4056092,
            "unit": "ns",
            "range": "± 75035.56529692152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4824598.933333334,
            "unit": "ns",
            "range": "± 59130.931544770894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4971668.155555556,
            "unit": "ns",
            "range": "± 187878.73616994597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7659863.36,
            "unit": "ns",
            "range": "± 198047.04457756158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9046706.066666666,
            "unit": "ns",
            "range": "± 144914.0250697765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23651743.6,
            "unit": "ns",
            "range": "± 229106.64004869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58875467.333333336,
            "unit": "ns",
            "range": "± 359854.94162661606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119185593.26666667,
            "unit": "ns",
            "range": "± 742948.3408778901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235027260.86666667,
            "unit": "ns",
            "range": "± 755925.185503156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315501.4166666667,
            "unit": "ns",
            "range": "± 15534.800065124116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321486.1538461539,
            "unit": "ns",
            "range": "± 14937.09603138982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309342.0243902439,
            "unit": "ns",
            "range": "± 11114.637662757625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4794827.357142857,
            "unit": "ns",
            "range": "± 36365.1361917875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4393769.642857143,
            "unit": "ns",
            "range": "± 37481.01144806967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31248.447916666668,
            "unit": "ns",
            "range": "± 2693.899384163338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127433.9052631579,
            "unit": "ns",
            "range": "± 11580.347773480693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118947.12,
            "unit": "ns",
            "range": "± 10726.634476739455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131976.61855670103,
            "unit": "ns",
            "range": "± 20452.46825846216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7917.833333333333,
            "unit": "ns",
            "range": "± 962.2357810046426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26530.463917525773,
            "unit": "ns",
            "range": "± 2938.4016951604813"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61348.989583333336,
            "unit": "ns",
            "range": "± 8938.03977154863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6467969.4171875,
            "unit": "ns",
            "range": "± 56269.56368199519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903477.3023158482,
            "unit": "ns",
            "range": "± 903.6028276267291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387977.6983072916,
            "unit": "ns",
            "range": "± 3492.9415714235624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706918.430889423,
            "unit": "ns",
            "range": "± 8237.503828910341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838089.9498465402,
            "unit": "ns",
            "range": "± 587.7882708913243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765510.5802083333,
            "unit": "ns",
            "range": "± 346.238684175282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656361.3298969073,
            "unit": "ns",
            "range": "± 107215.48383140624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3085772.214285714,
            "unit": "ns",
            "range": "± 85319.59372563807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2642250.9468085105,
            "unit": "ns",
            "range": "± 163205.45350091095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6129600.128205128,
            "unit": "ns",
            "range": "± 203032.64083382458"
          }
        ]
      }
    ]
  }
}