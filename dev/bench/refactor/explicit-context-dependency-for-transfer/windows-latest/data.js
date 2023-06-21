window.BENCHMARK_DATA = {
  "lastUpdate": 1687351490406,
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
          "id": "8ef6b82ee106eabe33f4e852e2475ead39de2a92",
          "message": "Deleted implV0",
          "timestamp": "2023-06-21T20:58:34+09:00",
          "tree_id": "cc57646a2cb706c68e67f137d2688c8b7073abdd",
          "url": "https://github.com/greymistcube/libplanet/commit/8ef6b82ee106eabe33f4e852e2475ead39de2a92"
        },
        "date": 1687351469615,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354986.3157894737,
            "unit": "ns",
            "range": "± 112279.12938679504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2503828.5714285714,
            "unit": "ns",
            "range": "± 88446.38912923467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2180192.783505155,
            "unit": "ns",
            "range": "± 139430.19628071866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5064270.37037037,
            "unit": "ns",
            "range": "± 213395.40996074182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42347.5,
            "unit": "ns",
            "range": "± 2222.3818332271862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6890885.714285715,
            "unit": "ns",
            "range": "± 22530.009291638533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17701213.333333332,
            "unit": "ns",
            "range": "± 185958.9235237052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45240760,
            "unit": "ns",
            "range": "± 362565.3355899162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89880507.14285715,
            "unit": "ns",
            "range": "± 358466.3603234151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179837733.33333334,
            "unit": "ns",
            "range": "± 1393074.3845726189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4910780.572916667,
            "unit": "ns",
            "range": "± 8674.453711198908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1606315.5989583333,
            "unit": "ns",
            "range": "± 1929.9627307349492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157409.3033854167,
            "unit": "ns",
            "range": "± 1222.775265529246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586298.5491071427,
            "unit": "ns",
            "range": "± 12685.394270497032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810300.6901041666,
            "unit": "ns",
            "range": "± 2936.2475440017706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742301.07421875,
            "unit": "ns",
            "range": "± 516.1972391810249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3106714.285714286,
            "unit": "ns",
            "range": "± 35001.13420454251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3108927.272727273,
            "unit": "ns",
            "range": "± 57454.364348446004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4036393.3333333335,
            "unit": "ns",
            "range": "± 61652.638301404506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3870418.3098591547,
            "unit": "ns",
            "range": "± 182823.39668173072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6459610.204081632,
            "unit": "ns",
            "range": "± 236043.2916197948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253887.09677419355,
            "unit": "ns",
            "range": "± 6751.875884299804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239092.3076923077,
            "unit": "ns",
            "range": "± 7092.560394911388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219619.19191919192,
            "unit": "ns",
            "range": "± 13489.139068514714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3874971.4285714286,
            "unit": "ns",
            "range": "± 32276.245815708553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3454014.285714286,
            "unit": "ns",
            "range": "± 44141.48331728952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17364.516129032258,
            "unit": "ns",
            "range": "± 1850.1847828569141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75873.23943661971,
            "unit": "ns",
            "range": "± 3665.4743503780896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64423.529411764706,
            "unit": "ns",
            "range": "± 1883.7517084554256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83982.47422680413,
            "unit": "ns",
            "range": "± 12080.269815464926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4257.5268817204305,
            "unit": "ns",
            "range": "± 653.1256885396471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15838.297872340425,
            "unit": "ns",
            "range": "± 1436.700699368284"
          }
        ]
      }
    ]
  }
}