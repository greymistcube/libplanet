window.BENCHMARK_DATA = {
  "lastUpdate": 1680664051358,
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
          "id": "f447ded783a1a25394a0bca86199f7e59a4bc226",
          "message": "Merge tag '0.53.4' into port/0.53.4-to-main\n\nLibplanet 0.53.4",
          "timestamp": "2023-04-05T11:50:52+09:00",
          "tree_id": "6c6797cf881deada6e66d7f68eedc5e7c54df135",
          "url": "https://github.com/greymistcube/libplanet/commit/f447ded783a1a25394a0bca86199f7e59a4bc226"
        },
        "date": 1680664029445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399659.793814433,
            "unit": "ns",
            "range": "± 123644.51451961133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2519557.407407407,
            "unit": "ns",
            "range": "± 105830.12304677264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2190913.402061856,
            "unit": "ns",
            "range": "± 126742.86931689848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5647389.795918368,
            "unit": "ns",
            "range": "± 331702.274121975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52837.113402061856,
            "unit": "ns",
            "range": "± 4144.482265304398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7140342.105263158,
            "unit": "ns",
            "range": "± 228359.52170252247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20200826.666666668,
            "unit": "ns",
            "range": "± 200137.68284667959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50813008.333333336,
            "unit": "ns",
            "range": "± 674949.5973886875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100994550,
            "unit": "ns",
            "range": "± 1000477.7280033621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204190114.2857143,
            "unit": "ns",
            "range": "± 2431933.4118721713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4988175.041118421,
            "unit": "ns",
            "range": "± 99872.6685888707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586699.5052083333,
            "unit": "ns",
            "range": "± 29417.188391416123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1216657.9892113095,
            "unit": "ns",
            "range": "± 28336.994260989428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2703605.0186820654,
            "unit": "ns",
            "range": "± 66325.40274585414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851298.3258928572,
            "unit": "ns",
            "range": "± 19438.833599726087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775504.1276041666,
            "unit": "ns",
            "range": "± 10904.055036443355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3367789.4736842103,
            "unit": "ns",
            "range": "± 59879.452000914505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3585415.3846153845,
            "unit": "ns",
            "range": "± 59289.78793895416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4187084,
            "unit": "ns",
            "range": "± 209108.40589564116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4535330.645161291,
            "unit": "ns",
            "range": "± 206571.22344836415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7579842.682926829,
            "unit": "ns",
            "range": "± 267300.996434959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324265.3846153846,
            "unit": "ns",
            "range": "± 13381.299280615682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269437.2549019608,
            "unit": "ns",
            "range": "± 10994.234139480817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225941.55844155845,
            "unit": "ns",
            "range": "± 11501.422688306535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5241628.571428572,
            "unit": "ns",
            "range": "± 73855.10167859797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716418.1818181816,
            "unit": "ns",
            "range": "± 89872.79177425557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23151.041666666668,
            "unit": "ns",
            "range": "± 2736.3823521563977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99283.15789473684,
            "unit": "ns",
            "range": "± 7331.767843354467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90782.6530612245,
            "unit": "ns",
            "range": "± 10242.644084276066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 193567.36842105264,
            "unit": "ns",
            "range": "± 17735.776093518372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8602.040816326531,
            "unit": "ns",
            "range": "± 1468.0079490667065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24293.548387096773,
            "unit": "ns",
            "range": "± 2249.435023347791"
          }
        ]
      }
    ]
  }
}