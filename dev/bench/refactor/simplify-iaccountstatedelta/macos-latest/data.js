window.BENCHMARK_DATA = {
  "lastUpdate": 1687758514412,
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
          "id": "411675855d61636b9c11aae608da481940e88491",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T14:32:00+09:00",
          "tree_id": "c2d985f43f19e3af563e442baadc44551033d058",
          "url": "https://github.com/greymistcube/libplanet/commit/411675855d61636b9c11aae608da481940e88491"
        },
        "date": 1687758489578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8206915.769230769,
            "unit": "ns",
            "range": "± 63586.3304337154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20711464.136363637,
            "unit": "ns",
            "range": "± 655277.5115465784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50847612.428571425,
            "unit": "ns",
            "range": "± 432687.6323781776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99642103.06666666,
            "unit": "ns",
            "range": "± 1089347.2744314412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199812792.64285713,
            "unit": "ns",
            "range": "± 2566482.3314969344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59627.97802197802,
            "unit": "ns",
            "range": "± 5681.099875861329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323206.42553191487,
            "unit": "ns",
            "range": "± 18297.42556160748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310552.5967741936,
            "unit": "ns",
            "range": "± 17818.97961021418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298218.9270833333,
            "unit": "ns",
            "range": "± 20041.10795615893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155997.5,
            "unit": "ns",
            "range": "± 104199.15851605783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3777009.8636363638,
            "unit": "ns",
            "range": "± 92324.76821798325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17930.436842105264,
            "unit": "ns",
            "range": "± 1908.7679986222502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89451.32795698925,
            "unit": "ns",
            "range": "± 7354.906050627549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93267.98837209302,
            "unit": "ns",
            "range": "± 7753.770866289642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112638.9574468085,
            "unit": "ns",
            "range": "± 15072.125977513613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6424.244680851064,
            "unit": "ns",
            "range": "± 760.1809870260627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17969,
            "unit": "ns",
            "range": "± 1667.8240059711386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1702371.7959183673,
            "unit": "ns",
            "range": "± 182572.93900026652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3002293.3018867923,
            "unit": "ns",
            "range": "± 124855.86874820363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2598005.663265306,
            "unit": "ns",
            "range": "± 204906.19562483256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6282285.472222222,
            "unit": "ns",
            "range": "± 193879.2460565502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3276735.3988764044,
            "unit": "ns",
            "range": "± 176181.62220032312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4014761,
            "unit": "ns",
            "range": "± 12521.273199856896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4574847.184210527,
            "unit": "ns",
            "range": "± 115033.84202541142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4339384.552238806,
            "unit": "ns",
            "range": "± 205053.27170941667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7639058,
            "unit": "ns",
            "range": "± 293143.6423934661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6409863.376464844,
            "unit": "ns",
            "range": "± 125289.02903160632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1931293.5037760416,
            "unit": "ns",
            "range": "± 8452.44509587445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286008.3213541666,
            "unit": "ns",
            "range": "± 9973.797702340276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688826.6110491073,
            "unit": "ns",
            "range": "± 18509.841398649165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843963.5417829241,
            "unit": "ns",
            "range": "± 4685.583329001169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778844.8296875,
            "unit": "ns",
            "range": "± 5857.211988185947"
          }
        ]
      }
    ]
  }
}