window.BENCHMARK_DATA = {
  "lastUpdate": 1680684576313,
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
          "id": "1faba70c08b30f355a4a8e72c7f5ebd93ceb071b",
          "message": "Remove tx execution update from propose",
          "timestamp": "2023-04-05T17:18:33+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/1faba70c08b30f355a4a8e72c7f5ebd93ceb071b"
        },
        "date": 1680683449185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7473933.846153846,
            "unit": "ns",
            "range": "± 19872.823154776615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19019132.8,
            "unit": "ns",
            "range": "± 107315.03320677597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49377067.4,
            "unit": "ns",
            "range": "± 308565.1116242498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97688277.33333333,
            "unit": "ns",
            "range": "± 432525.2653571096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196322414.08333334,
            "unit": "ns",
            "range": "± 694674.5301188907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45608.15517241379,
            "unit": "ns",
            "range": "± 2005.8719484914052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378941.72,
            "unit": "ns",
            "range": "± 111666.0213064191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2532828.1764705884,
            "unit": "ns",
            "range": "± 49364.67660209486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2421276,
            "unit": "ns",
            "range": "± 44341.52375434501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5448558.9130434785,
            "unit": "ns",
            "range": "± 133330.49750147975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5995242.45234375,
            "unit": "ns",
            "range": "± 17531.39225291899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1936402.431919643,
            "unit": "ns",
            "range": "± 6490.344785700877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350527.1334635417,
            "unit": "ns",
            "range": "± 525.8589325199538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2544327.6330915177,
            "unit": "ns",
            "range": "± 1077.5396108154084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810282.7655552456,
            "unit": "ns",
            "range": "± 559.5129347378082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797410.185546875,
            "unit": "ns",
            "range": "± 909.3855951097053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319911.0714285714,
            "unit": "ns",
            "range": "± 8107.632576449736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265286.6216216216,
            "unit": "ns",
            "range": "± 8274.23717649264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237683.08333333334,
            "unit": "ns",
            "range": "± 6105.2889182545905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5616853.357142857,
            "unit": "ns",
            "range": "± 42889.589028300135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4031691.0714285714,
            "unit": "ns",
            "range": "± 42431.424525959505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17115.536842105263,
            "unit": "ns",
            "range": "± 1447.646261383044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85614.7,
            "unit": "ns",
            "range": "± 3883.7928695571795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74557.20930232559,
            "unit": "ns",
            "range": "± 2701.982099251087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175319.94805194804,
            "unit": "ns",
            "range": "± 8697.209865504818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5149.958333333333,
            "unit": "ns",
            "range": "± 755.019719737824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17193.625,
            "unit": "ns",
            "range": "± 1598.4476367302186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230434.8518518517,
            "unit": "ns",
            "range": "± 88658.40581420169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3337162.15,
            "unit": "ns",
            "range": "± 64197.54059092673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4233774.933333334,
            "unit": "ns",
            "range": "± 42321.36103919065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4228933.975609756,
            "unit": "ns",
            "range": "± 150525.32033174482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7202646.260869565,
            "unit": "ns",
            "range": "± 170849.8703554507"
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
          "id": "7e0ec34410b8a518b823616ad592b53b7deedd09",
          "message": "[skip changelog] Remove tx execution update from propose",
          "timestamp": "2023-04-05T17:29:37+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/7e0ec34410b8a518b823616ad592b53b7deedd09"
        },
        "date": 1680684567967,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4003856.3711340204,
            "unit": "ns",
            "range": "± 404978.3052946149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4444314.34375,
            "unit": "ns",
            "range": "± 458556.62386600097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5384394.659574468,
            "unit": "ns",
            "range": "± 451818.1466625028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5704059.468085106,
            "unit": "ns",
            "range": "± 455345.1275835738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9902795.010526316,
            "unit": "ns",
            "range": "± 799261.957980511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8970877.0625,
            "unit": "ns",
            "range": "± 562012.9190968144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24808531.91836735,
            "unit": "ns",
            "range": "± 1842051.3231501142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64515545.32258064,
            "unit": "ns",
            "range": "± 3652625.6936800396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134021018.39175257,
            "unit": "ns",
            "range": "± 8187895.215396896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274228549.2340425,
            "unit": "ns",
            "range": "± 10059030.47646132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1702605.1414141415,
            "unit": "ns",
            "range": "± 226454.8703337549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3388160.1326530613,
            "unit": "ns",
            "range": "± 378560.8219783179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2776276.4468085105,
            "unit": "ns",
            "range": "± 285320.5374173419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7474083.265957447,
            "unit": "ns",
            "range": "± 652533.1538371104"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69796.36559139784,
            "unit": "ns",
            "range": "± 19213.653388074432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7169174.923491379,
            "unit": "ns",
            "range": "± 191875.25720259102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2391766.3255208335,
            "unit": "ns",
            "range": "± 56547.02995646257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1673909.0729631695,
            "unit": "ns",
            "range": "± 25081.918110788716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3100829.8018973214,
            "unit": "ns",
            "range": "± 46612.25374625135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1059116.971015625,
            "unit": "ns",
            "range": "± 27673.01045588593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962420.5141601562,
            "unit": "ns",
            "range": "± 16733.275745436662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 463479.01020408166,
            "unit": "ns",
            "range": "± 68454.75978187135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 383160.92783505155,
            "unit": "ns",
            "range": "± 54271.86306174365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319083.0425531915,
            "unit": "ns",
            "range": "± 42324.911840165005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6881217.378947369,
            "unit": "ns",
            "range": "± 583481.273763106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5248704.87628866,
            "unit": "ns",
            "range": "± 480975.91815168824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29555.907216494845,
            "unit": "ns",
            "range": "± 9984.897156750534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123346.20202020202,
            "unit": "ns",
            "range": "± 22072.222996789333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103566.44086021505,
            "unit": "ns",
            "range": "± 23144.387089981905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258545.79787234042,
            "unit": "ns",
            "range": "± 38797.26931876926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6483.538461538462,
            "unit": "ns",
            "range": "± 1124.412649714333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28954.737373737375,
            "unit": "ns",
            "range": "± 11348.56477357906"
          }
        ]
      }
    ]
  }
}