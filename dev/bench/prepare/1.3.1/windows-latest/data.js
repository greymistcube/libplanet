window.BENCHMARK_DATA = {
  "lastUpdate": 1684481729803,
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
          "id": "8962d75b326cf21b3b6ae9490a38351e2f28374f",
          "message": "Prepare 1.3.1",
          "timestamp": "2023-05-19T16:19:25+09:00",
          "tree_id": "c546d985806a3d5acd8e4c9d43c70e1c7aa4249d",
          "url": "https://github.com/greymistcube/libplanet/commit/8962d75b326cf21b3b6ae9490a38351e2f28374f"
        },
        "date": 1684481706931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367008.6956521738,
            "unit": "ns",
            "range": "± 119902.9842741223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2530608.9743589745,
            "unit": "ns",
            "range": "± 129447.38708182186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2136221.276595745,
            "unit": "ns",
            "range": "± 150188.90318266855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5332220.930232558,
            "unit": "ns",
            "range": "± 287370.71532666613"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47685.26315789474,
            "unit": "ns",
            "range": "± 3472.658201321098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6827830.769230769,
            "unit": "ns",
            "range": "± 12240.464630028322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19422993.333333332,
            "unit": "ns",
            "range": "± 302376.03945765155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48014966.666666664,
            "unit": "ns",
            "range": "± 979555.1535383444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96646861.1111111,
            "unit": "ns",
            "range": "± 2005529.0471561186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195361960,
            "unit": "ns",
            "range": "± 4486859.868713718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4761541.40625,
            "unit": "ns",
            "range": "± 11917.538160327991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512927.162388393,
            "unit": "ns",
            "range": "± 6056.300599548686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162442.9166666667,
            "unit": "ns",
            "range": "± 5802.97384432687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673264.84375,
            "unit": "ns",
            "range": "± 8850.426839244332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837306.1979166666,
            "unit": "ns",
            "range": "± 2514.757290267835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767480.3450520834,
            "unit": "ns",
            "range": "± 2967.347092440853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3192284.8484848486,
            "unit": "ns",
            "range": "± 100789.67928690703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3232715.789473684,
            "unit": "ns",
            "range": "± 54024.369636487965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4107800,
            "unit": "ns",
            "range": "± 84246.12750744096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4128382.926829268,
            "unit": "ns",
            "range": "± 135015.38597959685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6564341.935483871,
            "unit": "ns",
            "range": "± 198445.34222163635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261042.85714285713,
            "unit": "ns",
            "range": "± 8467.4562370319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249285.7142857143,
            "unit": "ns",
            "range": "± 6697.811005762073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224407.95454545456,
            "unit": "ns",
            "range": "± 11891.996937870608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3930081.25,
            "unit": "ns",
            "range": "± 74680.49025682679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3578906.6666666665,
            "unit": "ns",
            "range": "± 66301.61026558498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18537.894736842107,
            "unit": "ns",
            "range": "± 1868.4490637144513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83542.7536231884,
            "unit": "ns",
            "range": "± 3912.999407727579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69572.41379310345,
            "unit": "ns",
            "range": "± 3041.066474027744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91019.35483870968,
            "unit": "ns",
            "range": "± 11699.52858642005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5280.412371134021,
            "unit": "ns",
            "range": "± 817.2156966464611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18714.736842105263,
            "unit": "ns",
            "range": "± 1748.6145531657662"
          }
        ]
      }
    ]
  }
}