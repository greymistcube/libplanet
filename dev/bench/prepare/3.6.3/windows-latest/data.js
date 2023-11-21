window.BENCHMARK_DATA = {
  "lastUpdate": 1700533837731,
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
          "id": "3dd68b79479d07038eaddb6a0d4c74d9dcb66d4b",
          "message": "Prepare 3.6.3",
          "timestamp": "2023-11-21T11:19:57+09:00",
          "tree_id": "bd6e4b1ea8d66955ebd09d534ee5832113ea0f64",
          "url": "https://github.com/greymistcube/libplanet/commit/3dd68b79479d07038eaddb6a0d4c74d9dcb66d4b"
        },
        "date": 1700533819291,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988964.5833333334,
            "unit": "ns",
            "range": "± 94036.02890624494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1789835,
            "unit": "ns",
            "range": "± 88675.76710063509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1395917.7083333333,
            "unit": "ns",
            "range": "± 156531.50750251135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5073593.023255814,
            "unit": "ns",
            "range": "± 185195.9893571555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33967.12328767123,
            "unit": "ns",
            "range": "± 1602.7801189149561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5192928.571428572,
            "unit": "ns",
            "range": "± 89546.28737372412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13621041.666666666,
            "unit": "ns",
            "range": "± 54327.88432427233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33308046.153846152,
            "unit": "ns",
            "range": "± 301198.0843658224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65473993.333333336,
            "unit": "ns",
            "range": "± 533688.6725780258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131578535.71428572,
            "unit": "ns",
            "range": "± 891538.9931565985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3149717.7734375,
            "unit": "ns",
            "range": "± 8978.443674372544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1008201.7728365385,
            "unit": "ns",
            "range": "± 2563.670197872196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 681729.04296875,
            "unit": "ns",
            "range": "± 1804.632999274285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1991380.6770833333,
            "unit": "ns",
            "range": "± 2967.4481214511566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612657.3467548077,
            "unit": "ns",
            "range": "± 2691.9950851232857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563357.71484375,
            "unit": "ns",
            "range": "± 940.8379952871278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120622.727272727,
            "unit": "ns",
            "range": "± 99484.93166992995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2246942.3076923075,
            "unit": "ns",
            "range": "± 91322.49330151598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2831150,
            "unit": "ns",
            "range": "± 84606.29051045433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2622703.703703704,
            "unit": "ns",
            "range": "± 136992.6379814299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6142504.225352113,
            "unit": "ns",
            "range": "± 299771.051893474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174169.8795180723,
            "unit": "ns",
            "range": "± 9298.790046386168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168025.37313432837,
            "unit": "ns",
            "range": "± 7566.0193946270965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139457.8947368421,
            "unit": "ns",
            "range": "± 2634.2436800876776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2837292.8571428573,
            "unit": "ns",
            "range": "± 39277.89482619992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2523520,
            "unit": "ns",
            "range": "± 33563.69637399484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11194.791666666666,
            "unit": "ns",
            "range": "± 1931.0956689030556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54985.10638297872,
            "unit": "ns",
            "range": "± 6388.665323228075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44338.541666666664,
            "unit": "ns",
            "range": "± 2842.6588662420545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56596.969696969696,
            "unit": "ns",
            "range": "± 14461.450900657705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2823.9583333333335,
            "unit": "ns",
            "range": "± 669.4451420733546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10714.444444444445,
            "unit": "ns",
            "range": "± 1648.7353758488748"
          }
        ]
      }
    ]
  }
}