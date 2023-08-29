window.BENCHMARK_DATA = {
  "lastUpdate": 1693307616067,
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
          "id": "3db250238e98ac1f2cfe74ce90f596d0ccec24c6",
          "message": "Changelog",
          "timestamp": "2023-08-29T19:55:39+09:00",
          "tree_id": "d92c57f29354696c1ff88c1d03f95f8f66c1a87d",
          "url": "https://github.com/greymistcube/libplanet/commit/3db250238e98ac1f2cfe74ce90f596d0ccec24c6"
        },
        "date": 1693307600654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8753643.1875,
            "unit": "ns",
            "range": "± 158055.756754684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21711173.214285713,
            "unit": "ns",
            "range": "± 352054.95055594743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54867925.538461536,
            "unit": "ns",
            "range": "± 1292844.4939583486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110963487.02380952,
            "unit": "ns",
            "range": "± 2587053.7155684573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230335874.60714287,
            "unit": "ns",
            "range": "± 9908704.296370525"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71881.90625,
            "unit": "ns",
            "range": "± 14942.283039171001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362409.5714285714,
            "unit": "ns",
            "range": "± 29560.093302745343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333443.6022727273,
            "unit": "ns",
            "range": "± 24658.989698585327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335243.9505494505,
            "unit": "ns",
            "range": "± 19062.847029563225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4381283.078947368,
            "unit": "ns",
            "range": "± 151063.16266515476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3958461,
            "unit": "ns",
            "range": "± 62288.60569023305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27311.4,
            "unit": "ns",
            "range": "± 4031.6252949832697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111197.1530612245,
            "unit": "ns",
            "range": "± 15862.868195528255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112025.85858585859,
            "unit": "ns",
            "range": "± 16694.104533753216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106120.09595959596,
            "unit": "ns",
            "range": "± 18289.877219167665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6447.770833333333,
            "unit": "ns",
            "range": "± 1428.7137128359948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17933.03846153846,
            "unit": "ns",
            "range": "± 2130.1467988416634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1531542.0210526315,
            "unit": "ns",
            "range": "± 193639.70143075267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2954907.3440860217,
            "unit": "ns",
            "range": "± 195227.3962517809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2111228.715909091,
            "unit": "ns",
            "range": "± 280775.13425359677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5665651.273809524,
            "unit": "ns",
            "range": "± 293210.1199237421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3437433.977272727,
            "unit": "ns",
            "range": "± 220530.71200743274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3586184.907407407,
            "unit": "ns",
            "range": "± 149694.50265898695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4588106.576923077,
            "unit": "ns",
            "range": "± 213359.19672052655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4025350.2395833335,
            "unit": "ns",
            "range": "± 231048.50519808242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7130641.576923077,
            "unit": "ns",
            "range": "± 328921.84262537526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5857367.4125,
            "unit": "ns",
            "range": "± 104509.83753724278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1769821.932525059,
            "unit": "ns",
            "range": "± 72713.40392985496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076078.5157752405,
            "unit": "ns",
            "range": "± 8244.671411814825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655137.3697916665,
            "unit": "ns",
            "range": "± 24327.961900413524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849865.1878487723,
            "unit": "ns",
            "range": "± 23615.26436430273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741705.9514723558,
            "unit": "ns",
            "range": "± 9548.329850622062"
          }
        ]
      }
    ]
  }
}