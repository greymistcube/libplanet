window.BENCHMARK_DATA = {
  "lastUpdate": 1693307853911,
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
      },
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
          "id": "9b583597c1581017f0c14fb3c0da0eda4248b776",
          "message": "Removed VolatileKeyValueStore and readonly option",
          "timestamp": "2023-08-29T19:51:50+09:00",
          "tree_id": "6827c39f849230f82333e50a670bc65fc498be41",
          "url": "https://github.com/greymistcube/libplanet/commit/9b583597c1581017f0c14fb3c0da0eda4248b776"
        },
        "date": 1693307836283,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8218002.833333333,
            "unit": "ns",
            "range": "± 411796.56393278314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27424760.31111111,
            "unit": "ns",
            "range": "± 8509130.876348276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63486492.32978723,
            "unit": "ns",
            "range": "± 16541999.552034808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125521838.2628866,
            "unit": "ns",
            "range": "± 27867294.782367066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300418702.53,
            "unit": "ns",
            "range": "± 63226714.2065256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77959.35393258427,
            "unit": "ns",
            "range": "± 9503.616488128184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332883.8370786517,
            "unit": "ns",
            "range": "± 32966.63921504719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320217.5051546392,
            "unit": "ns",
            "range": "± 35004.36106018425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288071.84,
            "unit": "ns",
            "range": "± 11501.217150069868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4236125.459183673,
            "unit": "ns",
            "range": "± 278786.04074618104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863327.4591836734,
            "unit": "ns",
            "range": "± 232214.47606109365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22381.277777777777,
            "unit": "ns",
            "range": "± 3476.818008078418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97756.18181818182,
            "unit": "ns",
            "range": "± 15392.515400491238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96101.82653061225,
            "unit": "ns",
            "range": "± 16064.195411763703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97087.73195876289,
            "unit": "ns",
            "range": "± 15300.2006785011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6806.908163265306,
            "unit": "ns",
            "range": "± 1430.236870921381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24941.625,
            "unit": "ns",
            "range": "± 4668.548074193157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1840601.46875,
            "unit": "ns",
            "range": "± 322515.7136657458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3240109.4270833335,
            "unit": "ns",
            "range": "± 471298.2422366798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2496334.577777778,
            "unit": "ns",
            "range": "± 563017.5022648447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6510266.825842696,
            "unit": "ns",
            "range": "± 1149294.5169854476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3462588.775862069,
            "unit": "ns",
            "range": "± 239970.0765857087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3815569.6494252873,
            "unit": "ns",
            "range": "± 539222.4847685253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4892014.459770115,
            "unit": "ns",
            "range": "± 747506.8858576333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4207846.593406593,
            "unit": "ns",
            "range": "± 481903.7912543904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7331639.114583333,
            "unit": "ns",
            "range": "± 594238.6738920007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7786715.801484375,
            "unit": "ns",
            "range": "± 1453664.4851544122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2272376.6092155613,
            "unit": "ns",
            "range": "± 365625.23828874057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376050.8801757812,
            "unit": "ns",
            "range": "± 304888.1091093989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2812479.3294802294,
            "unit": "ns",
            "range": "± 250734.0603713307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844968.9992487981,
            "unit": "ns",
            "range": "± 11909.513226419265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858327.225,
            "unit": "ns",
            "range": "± 14054.20727234607"
          }
        ]
      }
    ]
  }
}