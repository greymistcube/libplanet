window.BENCHMARK_DATA = {
  "lastUpdate": 1683610614987,
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
          "id": "f1d09b79c28cb8adebced6227ec54e4e1a7b5d13",
          "message": "Release 1.1.0",
          "timestamp": "2023-05-09T14:18:03+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/greymistcube/libplanet/commit/f1d09b79c28cb8adebced6227ec54e4e1a7b5d13"
        },
        "date": 1683610602439,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8526513.747474747,
            "unit": "ns",
            "range": "± 530498.0993517732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21108449.272727273,
            "unit": "ns",
            "range": "± 508476.11649264896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50512147.03571428,
            "unit": "ns",
            "range": "± 1429594.9776014257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106145270.24468085,
            "unit": "ns",
            "range": "± 3872106.4030549065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212439534.06060606,
            "unit": "ns",
            "range": "± 6731238.286687998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65786.67708333333,
            "unit": "ns",
            "range": "± 10484.281381889137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337478.3510638298,
            "unit": "ns",
            "range": "± 29052.426282538097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318986.4111111111,
            "unit": "ns",
            "range": "± 20174.894309565105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303169.5263157895,
            "unit": "ns",
            "range": "± 28938.251942104685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210322.036144578,
            "unit": "ns",
            "range": "± 224581.35544811666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3852812.226190476,
            "unit": "ns",
            "range": "± 206418.75338448214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19084.531578947368,
            "unit": "ns",
            "range": "± 2650.431030592634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96549.23195876289,
            "unit": "ns",
            "range": "± 14573.101621305792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99585.69587628866,
            "unit": "ns",
            "range": "± 15609.240771120678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115206.48947368421,
            "unit": "ns",
            "range": "± 17864.190360734763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6936.1894736842105,
            "unit": "ns",
            "range": "± 1561.343844902742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19050.263157894737,
            "unit": "ns",
            "range": "± 3301.397580298787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632675.2448979593,
            "unit": "ns",
            "range": "± 161875.31045266165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3022708.4855072466,
            "unit": "ns",
            "range": "± 140139.895082451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2717500.5108695654,
            "unit": "ns",
            "range": "± 186111.62128062604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6717058.352631579,
            "unit": "ns",
            "range": "± 416621.78608681704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3444164.8541666665,
            "unit": "ns",
            "range": "± 244679.21845116562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3560653.938271605,
            "unit": "ns",
            "range": "± 187146.92418447236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457992.285714285,
            "unit": "ns",
            "range": "± 184539.63383786645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4441119.684210527,
            "unit": "ns",
            "range": "± 313660.1184550219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7999006.816455696,
            "unit": "ns",
            "range": "± 414338.572426555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6589481.399338942,
            "unit": "ns",
            "range": "± 40116.36142281024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004009.0151041667,
            "unit": "ns",
            "range": "± 34269.35512309596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1314011.0420673077,
            "unit": "ns",
            "range": "± 17427.131149559795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2538189.6015625,
            "unit": "ns",
            "range": "± 24558.737177941686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898268.3809244792,
            "unit": "ns",
            "range": "± 14066.521215298413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744691.4214409722,
            "unit": "ns",
            "range": "± 15359.594460222941"
          }
        ]
      }
    ]
  }
}