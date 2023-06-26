window.BENCHMARK_DATA = {
  "lastUpdate": 1687761175537,
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
          "id": "9463d85e43c39306971b4f49db1d9287e70e293b",
          "message": "Removed unused Signer private property",
          "timestamp": "2023-06-26T11:36:57+09:00",
          "tree_id": "da7b9469c295569b1549280bbc10673b1fa97f46",
          "url": "https://github.com/greymistcube/libplanet/commit/9463d85e43c39306971b4f49db1d9287e70e293b"
        },
        "date": 1687756510471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4401575.866666666,
            "unit": "ns",
            "range": "± 52183.3523054824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4504415.333333333,
            "unit": "ns",
            "range": "± 38886.58050879077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5400780.5,
            "unit": "ns",
            "range": "± 98631.97178738072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5470085.882352941,
            "unit": "ns",
            "range": "± 110781.64173887428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8584242.055555556,
            "unit": "ns",
            "range": "± 147399.44555345966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10036848.555555556,
            "unit": "ns",
            "range": "± 201472.46472152794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26640970,
            "unit": "ns",
            "range": "± 384541.75206061325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67167053.43333334,
            "unit": "ns",
            "range": "± 1193325.811623636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139336388.66666666,
            "unit": "ns",
            "range": "± 2514661.455631998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264461540,
            "unit": "ns",
            "range": "± 3960323.239523764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333676.6341463415,
            "unit": "ns",
            "range": "± 10302.929767197527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322656.5172413793,
            "unit": "ns",
            "range": "± 14084.16714555419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285138.3076923077,
            "unit": "ns",
            "range": "± 3057.2010724576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5245164.75,
            "unit": "ns",
            "range": "± 99098.57876781079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4883519.375,
            "unit": "ns",
            "range": "± 92747.26800639466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22173.083333333332,
            "unit": "ns",
            "range": "± 1639.3695942851527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104176.8,
            "unit": "ns",
            "range": "± 4661.19541131886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93147.9493670886,
            "unit": "ns",
            "range": "± 4855.996411783023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107213.02040816327,
            "unit": "ns",
            "range": "± 12990.900416583903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5839.627659574468,
            "unit": "ns",
            "range": "± 558.4465008221334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19973.18556701031,
            "unit": "ns",
            "range": "± 1483.7163456580415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56701.15,
            "unit": "ns",
            "range": "± 2981.319044154446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7349005.804427084,
            "unit": "ns",
            "range": "± 42272.57509399074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2291344.0463541667,
            "unit": "ns",
            "range": "± 12088.89529979481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1651153.9868489583,
            "unit": "ns",
            "range": "± 12420.093284636074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3097354.34765625,
            "unit": "ns",
            "range": "± 19391.994599582937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996362.1272135417,
            "unit": "ns",
            "range": "± 3806.9729418844495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907399.1766075721,
            "unit": "ns",
            "range": "± 3810.80566347471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1749010.5254237289,
            "unit": "ns",
            "range": "± 71933.68085769289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3287900.787878788,
            "unit": "ns",
            "range": "± 103307.81804356507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2835973.8630136987,
            "unit": "ns",
            "range": "± 140525.5838079469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6671640.130434782,
            "unit": "ns",
            "range": "± 255149.56521770247"
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
          "id": "8581a13927baef9d93e13bae426720bdb6502dd9",
          "message": "Changelog",
          "timestamp": "2023-06-26T14:07:20+09:00",
          "tree_id": "e37edb61297c65896e4ff10848dc812439df6d36",
          "url": "https://github.com/greymistcube/libplanet/commit/8581a13927baef9d93e13bae426720bdb6502dd9"
        },
        "date": 1687757190558,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4066761.8958333335,
            "unit": "ns",
            "range": "± 378354.8086597936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4203849.440860215,
            "unit": "ns",
            "range": "± 329042.7123137222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5619016.526881721,
            "unit": "ns",
            "range": "± 468611.82654154155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5221155.092783505,
            "unit": "ns",
            "range": "± 480961.5704538124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9356157.141176471,
            "unit": "ns",
            "range": "± 502453.9824282456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10025174.333333334,
            "unit": "ns",
            "range": "± 672345.7833122332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26116006.157894738,
            "unit": "ns",
            "range": "± 1869059.6871354878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68672998.96153846,
            "unit": "ns",
            "range": "± 1854452.6170964518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139093616.06976745,
            "unit": "ns",
            "range": "± 5151448.0748250615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277861295.5090909,
            "unit": "ns",
            "range": "± 11831805.3821176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 399316.59375,
            "unit": "ns",
            "range": "± 39422.181779345374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372275.2340425532,
            "unit": "ns",
            "range": "± 35809.47222691842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 352838.10204081633,
            "unit": "ns",
            "range": "± 31507.945689900636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5943066.6,
            "unit": "ns",
            "range": "± 194300.83994992677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5208200.065573771,
            "unit": "ns",
            "range": "± 233032.1348290738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26174.463917525773,
            "unit": "ns",
            "range": "± 8486.35950248723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119104.41052631578,
            "unit": "ns",
            "range": "± 20136.096232882082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134406.306122449,
            "unit": "ns",
            "range": "± 24428.590960124475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147081.9693877551,
            "unit": "ns",
            "range": "± 35080.63696874779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7512.724137931034,
            "unit": "ns",
            "range": "± 1828.189221604804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27871.26,
            "unit": "ns",
            "range": "± 11904.87712095553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63443.836956521736,
            "unit": "ns",
            "range": "± 14464.556772382497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7560870.869225544,
            "unit": "ns",
            "range": "± 187193.0132095991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2395654.4303042763,
            "unit": "ns",
            "range": "± 52249.8700681874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1707766.596484375,
            "unit": "ns",
            "range": "± 29156.18840768666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3254902.636979167,
            "unit": "ns",
            "range": "± 49620.19501018373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1050075.3602764423,
            "unit": "ns",
            "range": "± 7403.404193881333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1013771.5231584822,
            "unit": "ns",
            "range": "± 12356.788479497442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1733425.3010752688,
            "unit": "ns",
            "range": "± 179729.21804437684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3484088.0212765955,
            "unit": "ns",
            "range": "± 326481.13794428826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2853047.084210526,
            "unit": "ns",
            "range": "± 349829.8875637488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7313700.276595744,
            "unit": "ns",
            "range": "± 670146.2552226122"
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
          "id": "91b768284294b5dca70e81c297f5dbcc5a733588",
          "message": "Changelog",
          "timestamp": "2023-06-26T15:16:01+09:00",
          "tree_id": "1fedf46fd1341cd48d05cb47808ba084d1b40f41",
          "url": "https://github.com/greymistcube/libplanet/commit/91b768284294b5dca70e81c297f5dbcc5a733588"
        },
        "date": 1687761165919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4464154.933333334,
            "unit": "ns",
            "range": "± 65239.17170629782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4668624.291666667,
            "unit": "ns",
            "range": "± 118735.50338992568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5597212.333333333,
            "unit": "ns",
            "range": "± 91821.36033054827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5616644.3125,
            "unit": "ns",
            "range": "± 103439.40996977812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8741770.157894736,
            "unit": "ns",
            "range": "± 190408.00550929896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570615.05,
            "unit": "ns",
            "range": "± 241670.19999196276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28962241.583333332,
            "unit": "ns",
            "range": "± 390925.4667318796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69973957.53846154,
            "unit": "ns",
            "range": "± 598273.6047067171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136953239.2,
            "unit": "ns",
            "range": "± 1262462.9704158343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273846342.53333336,
            "unit": "ns",
            "range": "± 4208737.797496195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369439.02222222224,
            "unit": "ns",
            "range": "± 13914.249647375706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344863.82608695654,
            "unit": "ns",
            "range": "± 12470.675532454077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327448.46153846156,
            "unit": "ns",
            "range": "± 15322.738657666712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5512639.555555556,
            "unit": "ns",
            "range": "± 110971.61834993043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5014457.214285715,
            "unit": "ns",
            "range": "± 51615.17525984384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27333.531914893618,
            "unit": "ns",
            "range": "± 2005.804371415578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123885.1237113402,
            "unit": "ns",
            "range": "± 8456.36584455971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108295.08333333333,
            "unit": "ns",
            "range": "± 7242.521982477282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127666.55319148937,
            "unit": "ns",
            "range": "± 12251.977836047114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9486.845360824742,
            "unit": "ns",
            "range": "± 1156.2621111095998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27210.136842105265,
            "unit": "ns",
            "range": "± 2892.9428093372853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57875.229166666664,
            "unit": "ns",
            "range": "± 3951.882787733267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7233244.0296875,
            "unit": "ns",
            "range": "± 127195.41732127112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2286573.447135417,
            "unit": "ns",
            "range": "± 6066.894531687602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1649375.6962239584,
            "unit": "ns",
            "range": "± 14872.458078991272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3225850.909895833,
            "unit": "ns",
            "range": "± 16817.16516190933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002279.5744791667,
            "unit": "ns",
            "range": "± 11832.49234343287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909298.0263671875,
            "unit": "ns",
            "range": "± 10821.208926849487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1833649.96,
            "unit": "ns",
            "range": "± 91186.23790019122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3629392.1875,
            "unit": "ns",
            "range": "± 133150.04761812434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2928900.7,
            "unit": "ns",
            "range": "± 142588.96686776276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6839681.413793104,
            "unit": "ns",
            "range": "± 193432.16533959788"
          }
        ]
      }
    ]
  }
}