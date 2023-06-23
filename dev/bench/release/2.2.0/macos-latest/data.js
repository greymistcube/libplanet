window.BENCHMARK_DATA = {
  "lastUpdate": 1687486461649,
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
          "id": "a1b809aebe20f9fa9d23c821b674da5f9365766b",
          "message": "Release 2.2.0",
          "timestamp": "2023-06-23T10:51:07+09:00",
          "tree_id": "378e041fcf4b607cf95c54995288889dcc255288",
          "url": "https://github.com/greymistcube/libplanet/commit/a1b809aebe20f9fa9d23c821b674da5f9365766b"
        },
        "date": 1687486444466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8367442.753164557,
            "unit": "ns",
            "range": "± 432619.6014950432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20843644.861445785,
            "unit": "ns",
            "range": "± 2786597.0444639474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50940998.38709678,
            "unit": "ns",
            "range": "± 3117014.9147731117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119517151.82417582,
            "unit": "ns",
            "range": "± 20564085.498801246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294417742.0851064,
            "unit": "ns",
            "range": "± 59318588.684476405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79239.38554216867,
            "unit": "ns",
            "range": "± 9295.151790087348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341030.2,
            "unit": "ns",
            "range": "± 29185.195712741268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340999.3010752688,
            "unit": "ns",
            "range": "± 37007.20612987156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316183.63333333336,
            "unit": "ns",
            "range": "± 27634.911339268194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4540081.4,
            "unit": "ns",
            "range": "± 411935.4646885886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4229558.191011236,
            "unit": "ns",
            "range": "± 299532.9461072717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21364.989130434784,
            "unit": "ns",
            "range": "± 3506.360877644536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121983.34736842105,
            "unit": "ns",
            "range": "± 19361.86761189645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129852.48387096774,
            "unit": "ns",
            "range": "± 24441.83631230829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120498.73626373627,
            "unit": "ns",
            "range": "± 21915.33184570674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7084.34375,
            "unit": "ns",
            "range": "± 2034.7076155045238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19747.98979591837,
            "unit": "ns",
            "range": "± 4309.596760371927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2176787.6063829786,
            "unit": "ns",
            "range": "± 579948.6547601215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3570785.2795698927,
            "unit": "ns",
            "range": "± 545527.2690743366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3502803.188888889,
            "unit": "ns",
            "range": "± 804197.1135816723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8310099.9186046515,
            "unit": "ns",
            "range": "± 1485075.2301456966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3831971.773809524,
            "unit": "ns",
            "range": "± 591871.5072735581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4457611.275280898,
            "unit": "ns",
            "range": "± 1164030.7927956607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4747697.706896552,
            "unit": "ns",
            "range": "± 411803.8576275242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4790019.111111111,
            "unit": "ns",
            "range": "± 552056.3190720497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8452311.340909092,
            "unit": "ns",
            "range": "± 1155523.7338463175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7341290.423162775,
            "unit": "ns",
            "range": "± 477234.3578750041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1940865.5338040865,
            "unit": "ns",
            "range": "± 23773.049320764883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390201.1079545454,
            "unit": "ns",
            "range": "± 58574.54097155613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2982133.1835132088,
            "unit": "ns",
            "range": "± 326289.14525164687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890548.7261513158,
            "unit": "ns",
            "range": "± 17536.14740183749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834934.8285337936,
            "unit": "ns",
            "range": "± 30467.392173166714"
          }
        ]
      }
    ]
  }
}