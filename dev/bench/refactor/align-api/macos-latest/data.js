window.BENCHMARK_DATA = {
  "lastUpdate": 1688377762049,
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
          "id": "4eb356f93cfaee26859c79aa1416e4a1a8e498cb",
          "message": "Align TxResult nullability with TxSuccess",
          "timestamp": "2023-07-03T18:18:49+09:00",
          "tree_id": "e5e2c5e6b39c0cf7ee667f8c3115cbc0aac4ef71",
          "url": "https://github.com/greymistcube/libplanet/commit/4eb356f93cfaee26859c79aa1416e4a1a8e498cb"
        },
        "date": 1688376844592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9437165.413978495,
            "unit": "ns",
            "range": "± 2054724.998262153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19932205.64285714,
            "unit": "ns",
            "range": "± 343590.8971825487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52058761.51724138,
            "unit": "ns",
            "range": "± 1463408.7472856364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98629935.66666667,
            "unit": "ns",
            "range": "± 1059798.8552860036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204737378.76923078,
            "unit": "ns",
            "range": "± 908165.9509674938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57760.574468085106,
            "unit": "ns",
            "range": "± 7169.765262859198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319336.09375,
            "unit": "ns",
            "range": "± 24285.995982124143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305313.77659574465,
            "unit": "ns",
            "range": "± 22048.527002785577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290722.39784946234,
            "unit": "ns",
            "range": "± 19447.347038885917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4151540.125,
            "unit": "ns",
            "range": "± 101534.92263312229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795529.652173913,
            "unit": "ns",
            "range": "± 93385.16296237793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17331.380434782608,
            "unit": "ns",
            "range": "± 1791.1965050247827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83307.76767676767,
            "unit": "ns",
            "range": "± 7788.588522971865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86948.21428571429,
            "unit": "ns",
            "range": "± 12489.042012776928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96809.25,
            "unit": "ns",
            "range": "± 12895.44913525698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5546.510638297872,
            "unit": "ns",
            "range": "± 730.7769285085897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15725.521978021978,
            "unit": "ns",
            "range": "± 1939.1463240762068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1568780.7659574468,
            "unit": "ns",
            "range": "± 189309.6129807831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877033.214285714,
            "unit": "ns",
            "range": "± 139259.53940679968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2037986.7835051545,
            "unit": "ns",
            "range": "± 207309.4618795688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5745196.960784313,
            "unit": "ns",
            "range": "± 233783.47853567076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3326935.6458333335,
            "unit": "ns",
            "range": "± 130783.5312967438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3531123.7578947367,
            "unit": "ns",
            "range": "± 243688.03378647333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4587410.06185567,
            "unit": "ns",
            "range": "± 306577.94584024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4021888.03125,
            "unit": "ns",
            "range": "± 293615.29853174073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7270884.050847458,
            "unit": "ns",
            "range": "± 299627.2893464205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6654722.25,
            "unit": "ns",
            "range": "± 108557.65708435635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998019.956752232,
            "unit": "ns",
            "range": "± 25769.73136996159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285296.7239118305,
            "unit": "ns",
            "range": "± 10146.215645200049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2503636.4365985575,
            "unit": "ns",
            "range": "± 23837.518935730277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792325.4735026042,
            "unit": "ns",
            "range": "± 7278.335715132423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737671.0627604167,
            "unit": "ns",
            "range": "± 3130.3923489305744"
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
          "id": "f791366a0dccda02042497e48ec7b9118bc9ffd7",
          "message": "Changelog",
          "timestamp": "2023-07-03T18:21:10+09:00",
          "tree_id": "0ff340aa0972ee9d0297222e1544e2fa14961ab4",
          "url": "https://github.com/greymistcube/libplanet/commit/f791366a0dccda02042497e48ec7b9118bc9ffd7"
        },
        "date": 1688377123672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9457054.29,
            "unit": "ns",
            "range": "± 696533.279238888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22486148.265306123,
            "unit": "ns",
            "range": "± 1492073.1864058047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56223480.49056604,
            "unit": "ns",
            "range": "± 2246116.6247741957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131947939.53658536,
            "unit": "ns",
            "range": "± 9981479.576146467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228126019.20833334,
            "unit": "ns",
            "range": "± 5802988.85612902"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75793.11627906977,
            "unit": "ns",
            "range": "± 4223.077350682737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383426.73711340205,
            "unit": "ns",
            "range": "± 66373.23849605056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384558.95454545453,
            "unit": "ns",
            "range": "± 59592.70803088701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 370597.09375,
            "unit": "ns",
            "range": "± 70344.90524425132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4539437.864583333,
            "unit": "ns",
            "range": "± 295624.4946284362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3820641.933333333,
            "unit": "ns",
            "range": "± 45616.5206656327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22994.666666666668,
            "unit": "ns",
            "range": "± 2469.7625142534644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109190.98969072165,
            "unit": "ns",
            "range": "± 9484.786610777068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114839.28571428571,
            "unit": "ns",
            "range": "± 4405.4607713373425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118959.5752688172,
            "unit": "ns",
            "range": "± 8799.001112078575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7480.260416666667,
            "unit": "ns",
            "range": "± 729.3490283489166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21887.863157894735,
            "unit": "ns",
            "range": "± 2641.717488602001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742146.36,
            "unit": "ns",
            "range": "± 297085.19406822673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3043731.476190476,
            "unit": "ns",
            "range": "± 161019.93866531734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2287635.787234043,
            "unit": "ns",
            "range": "± 310739.8110780981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6009766.367647059,
            "unit": "ns",
            "range": "± 287025.4737189873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3607268.744680851,
            "unit": "ns",
            "range": "± 310805.0130047114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3932169.4444444445,
            "unit": "ns",
            "range": "± 378041.6583587815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4735332.897849462,
            "unit": "ns",
            "range": "± 333231.8154933635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4362483.956521739,
            "unit": "ns",
            "range": "± 456622.0641237996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7853674.94680851,
            "unit": "ns",
            "range": "± 587609.1872425057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7615368.405691965,
            "unit": "ns",
            "range": "± 323259.3984093388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2128825.1831054688,
            "unit": "ns",
            "range": "± 54582.79726572887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413626.4744791666,
            "unit": "ns",
            "range": "± 17383.084166474404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3009710.1829427085,
            "unit": "ns",
            "range": "± 62327.09601484968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851854.8955891927,
            "unit": "ns",
            "range": "± 8948.99945071683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794249.8345853365,
            "unit": "ns",
            "range": "± 8776.730893126583"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20ebf243bf70cb5dab6152dffd0a9b5438819b06",
          "message": "Update CHANGES.md\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-07-03T18:30:56+09:00",
          "tree_id": "08ef06cc2cee22baf60d1b4ccb2cbe34c8e7976f",
          "url": "https://github.com/greymistcube/libplanet/commit/20ebf243bf70cb5dab6152dffd0a9b5438819b06"
        },
        "date": 1688377739809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9300522.3,
            "unit": "ns",
            "range": "± 133287.44330538312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23626757.17948718,
            "unit": "ns",
            "range": "± 826922.9077043104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59700499.58695652,
            "unit": "ns",
            "range": "± 1505446.2257579044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120365428.76666667,
            "unit": "ns",
            "range": "± 1891446.606120544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235390793.69230768,
            "unit": "ns",
            "range": "± 1664428.7972231586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65659.55555555556,
            "unit": "ns",
            "range": "± 4934.505979419201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400642.82584269665,
            "unit": "ns",
            "range": "± 44934.53051429766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361756.39130434784,
            "unit": "ns",
            "range": "± 16450.40759929262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330009.0657894737,
            "unit": "ns",
            "range": "± 16163.035267206074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4841083.833333333,
            "unit": "ns",
            "range": "± 80193.45912823801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4308043.944444444,
            "unit": "ns",
            "range": "± 92144.98023445715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19926.66304347826,
            "unit": "ns",
            "range": "± 2023.3674590206303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101190.78787878787,
            "unit": "ns",
            "range": "± 4778.904806994209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102952.3,
            "unit": "ns",
            "range": "± 14022.709659403177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120611.9494949495,
            "unit": "ns",
            "range": "± 18897.339956083517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5354.989361702128,
            "unit": "ns",
            "range": "± 908.5414104537368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18513.563218390806,
            "unit": "ns",
            "range": "± 1907.4833639504332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1789545.0404040404,
            "unit": "ns",
            "range": "± 125435.23983607255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3411363.3658536584,
            "unit": "ns",
            "range": "± 177006.6557533236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2419812.015151515,
            "unit": "ns",
            "range": "± 268007.379263522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6706088.361702127,
            "unit": "ns",
            "range": "± 254216.99759914333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4146849.0736842104,
            "unit": "ns",
            "range": "± 282908.3921479705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4254782.813432836,
            "unit": "ns",
            "range": "± 199900.85284628728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5426114.597560976,
            "unit": "ns",
            "range": "± 287420.63262994494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4782648.305263158,
            "unit": "ns",
            "range": "± 286390.5874912373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8925518.64,
            "unit": "ns",
            "range": "± 448681.5760931985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6918368.702083333,
            "unit": "ns",
            "range": "± 75867.32822306026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2185031.568917411,
            "unit": "ns",
            "range": "± 24660.784222537735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1475730.701450893,
            "unit": "ns",
            "range": "± 10172.355734052779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2940551.5296875,
            "unit": "ns",
            "range": "± 43872.087486817225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900953.6055385044,
            "unit": "ns",
            "range": "± 7316.203999809488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911778.9191778274,
            "unit": "ns",
            "range": "± 17943.402912581307"
          }
        ]
      }
    ]
  }
}