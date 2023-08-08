window.BENCHMARK_DATA = {
  "lastUpdate": 1691458639674,
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
          "id": "61fdcfcd956d5b1ee1c6309a79e51f1fe2264db8",
          "message": "Removed bencodex fingerprint support",
          "timestamp": "2023-08-08T10:22:41+09:00",
          "tree_id": "8702cf6c8c003452776c96afe2905350bc5e85af",
          "url": "https://github.com/greymistcube/libplanet/commit/61fdcfcd956d5b1ee1c6309a79e51f1fe2264db8"
        },
        "date": 1691458632515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3637125.3333333335,
            "unit": "ns",
            "range": "± 61041.045796679966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3858126.5,
            "unit": "ns",
            "range": "± 49190.46848221716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4626405.25,
            "unit": "ns",
            "range": "± 90879.98019035875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4176133.6842105263,
            "unit": "ns",
            "range": "± 89549.92056454856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6684947.25,
            "unit": "ns",
            "range": "± 156238.61638734015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8139253.8125,
            "unit": "ns",
            "range": "± 151555.9767409251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22281344.64285714,
            "unit": "ns",
            "range": "± 236506.77189543878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56812771.928571425,
            "unit": "ns",
            "range": "± 183988.7694965121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111506478.53333333,
            "unit": "ns",
            "range": "± 1243706.2791453425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224391706.5,
            "unit": "ns",
            "range": "± 1729819.7268349514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51631.03157894737,
            "unit": "ns",
            "range": "± 3422.230778160959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6069789.417708334,
            "unit": "ns",
            "range": "± 38122.27092855382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925991.70859375,
            "unit": "ns",
            "range": "± 2435.807826908988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392118.4134114583,
            "unit": "ns",
            "range": "± 3892.307156888294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669975.50390625,
            "unit": "ns",
            "range": "± 2468.3235073939168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834650.6508463542,
            "unit": "ns",
            "range": "± 370.69119571304094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772666.5735677084,
            "unit": "ns",
            "range": "± 509.49340200191943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301265.962962963,
            "unit": "ns",
            "range": "± 7067.485035664718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286389.8695652174,
            "unit": "ns",
            "range": "± 11038.407569549947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265887.39130434784,
            "unit": "ns",
            "range": "± 10233.420424120743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4587948.285714285,
            "unit": "ns",
            "range": "± 42032.657820444205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4183303.3333333335,
            "unit": "ns",
            "range": "± 67519.32295452981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21726.938144329895,
            "unit": "ns",
            "range": "± 1749.0361143976857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93855.67857142857,
            "unit": "ns",
            "range": "± 4031.461752074743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87152.1888888889,
            "unit": "ns",
            "range": "± 4811.171673722781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100228.51020408163,
            "unit": "ns",
            "range": "± 12526.042249571055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5688.721649484536,
            "unit": "ns",
            "range": "± 778.8858728747863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21744.567010309278,
            "unit": "ns",
            "range": "± 2225.315894744012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526819.247311828,
            "unit": "ns",
            "range": "± 84257.18828767486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2755709.3529411764,
            "unit": "ns",
            "range": "± 83209.24100846607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1954513.0416666667,
            "unit": "ns",
            "range": "± 141917.38667132828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5013815.319148936,
            "unit": "ns",
            "range": "± 194155.06286517112"
          }
        ]
      }
    ]
  }
}