window.BENCHMARK_DATA = {
  "lastUpdate": 1694668491869,
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
          "id": "80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0",
          "message": "Initial implementation of AccountDiff",
          "timestamp": "2023-09-14T11:31:17+09:00",
          "tree_id": "c9d18aa7f1110322223d748a09b0a9fa834f95e2",
          "url": "https://github.com/greymistcube/libplanet/commit/80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0"
        },
        "date": 1694659501158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378311.7777777778,
            "unit": "ns",
            "range": "± 68803.44516555838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2650162.4838709678,
            "unit": "ns",
            "range": "± 69550.10885295627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1742057.8481012657,
            "unit": "ns",
            "range": "± 87510.74837780386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4600287.105263158,
            "unit": "ns",
            "range": "± 99861.35374212851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279555.5,
            "unit": "ns",
            "range": "± 7785.927529845111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270439.8888888889,
            "unit": "ns",
            "range": "± 8819.444299882514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234103.10344827586,
            "unit": "ns",
            "range": "± 6659.723215745895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4409882.642857143,
            "unit": "ns",
            "range": "± 48110.086346287644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4027948.4,
            "unit": "ns",
            "range": "± 43513.69301856928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19446.893617021276,
            "unit": "ns",
            "range": "± 1288.7237536773166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86478.07042253521,
            "unit": "ns",
            "range": "± 4227.340509195362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74592.05714285714,
            "unit": "ns",
            "range": "± 2415.9163398893884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87697.9693877551,
            "unit": "ns",
            "range": "± 12752.136240245196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5388.9795918367345,
            "unit": "ns",
            "range": "± 599.512843118268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19685.827956989247,
            "unit": "ns",
            "range": "± 1405.0553263410934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47764.14666666667,
            "unit": "ns",
            "range": "± 2409.2187905835576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7986635.642857143,
            "unit": "ns",
            "range": "± 59734.265390860164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21949237.533333335,
            "unit": "ns",
            "range": "± 244417.4215756627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55675034.333333336,
            "unit": "ns",
            "range": "± 980581.6485731215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107690261.35714285,
            "unit": "ns",
            "range": "± 1043420.1191778748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223557475.85714287,
            "unit": "ns",
            "range": "± 2709360.0576676875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3509314.947368421,
            "unit": "ns",
            "range": "± 74070.15040072461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3817485.3,
            "unit": "ns",
            "range": "± 111753.67535393988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4499895.75,
            "unit": "ns",
            "range": "± 127213.76259422417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4193616.933333333,
            "unit": "ns",
            "range": "± 76968.708949497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6269722.944444444,
            "unit": "ns",
            "range": "± 126520.51345438587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5006363.415264423,
            "unit": "ns",
            "range": "± 12121.502983091255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590765.7559344952,
            "unit": "ns",
            "range": "± 935.4061056018484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1099393.6608072917,
            "unit": "ns",
            "range": "± 1667.1987950910896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2702696.5231584823,
            "unit": "ns",
            "range": "± 2391.1690992290946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826071.5979817709,
            "unit": "ns",
            "range": "± 558.6459127031201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759332.3154947917,
            "unit": "ns",
            "range": "± 393.99121499251584"
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
          "id": "8f1fea75e684d66b3b263d2a2c1ae68bc9efdc27",
          "message": "Docs",
          "timestamp": "2023-09-14T14:01:24+09:00",
          "tree_id": "6105a38490983f22a560c0118ce296691097dc4d",
          "url": "https://github.com/greymistcube/libplanet/commit/8f1fea75e684d66b3b263d2a2c1ae68bc9efdc27"
        },
        "date": 1694668484732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367534.0808080807,
            "unit": "ns",
            "range": "± 80767.29639964241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2632883.9310344825,
            "unit": "ns",
            "range": "± 75946.15974111953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1723896.6597938144,
            "unit": "ns",
            "range": "± 106548.23092656664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4370199.818181818,
            "unit": "ns",
            "range": "± 102109.24818272614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269387.5789473684,
            "unit": "ns",
            "range": "± 5871.464366992744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257226.76470588235,
            "unit": "ns",
            "range": "± 8133.661082785886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221441.3076923077,
            "unit": "ns",
            "range": "± 1945.231879263386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4203735.4,
            "unit": "ns",
            "range": "± 51517.01540933553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920434.5,
            "unit": "ns",
            "range": "± 51127.59488505957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18141.76595744681,
            "unit": "ns",
            "range": "± 1118.1881122210675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79156.93220338984,
            "unit": "ns",
            "range": "± 2681.8850284210916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69131.61538461539,
            "unit": "ns",
            "range": "± 1052.4264454473403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74624.40816326531,
            "unit": "ns",
            "range": "± 11195.61416321048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4713.453608247422,
            "unit": "ns",
            "range": "± 364.1721210676163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17065.38202247191,
            "unit": "ns",
            "range": "± 960.4187120211728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46394.20253164557,
            "unit": "ns",
            "range": "± 2102.940513806535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7945605.266666667,
            "unit": "ns",
            "range": "± 104785.87787788054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21632968.666666668,
            "unit": "ns",
            "range": "± 289727.47547151137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53394999.53333333,
            "unit": "ns",
            "range": "± 623947.1200580184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105345981.33333333,
            "unit": "ns",
            "range": "± 1473954.3525290187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208783333.23076922,
            "unit": "ns",
            "range": "± 1614976.1486657811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331870.705882353,
            "unit": "ns",
            "range": "± 66868.54315349324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3534983.88,
            "unit": "ns",
            "range": "± 93111.63368967382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4207377.333333333,
            "unit": "ns",
            "range": "± 87996.77801298561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3874307.40625,
            "unit": "ns",
            "range": "± 120522.78174895838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6139505.25,
            "unit": "ns",
            "range": "± 134777.8270601853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4938821.287388393,
            "unit": "ns",
            "range": "± 21878.52584544471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1559028.2361886161,
            "unit": "ns",
            "range": "± 3973.2337717921887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091766.2286458334,
            "unit": "ns",
            "range": "± 4356.409705253248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597236.476822917,
            "unit": "ns",
            "range": "± 6624.801663412723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828995.4787109375,
            "unit": "ns",
            "range": "± 1426.9976966004795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755326.3965494792,
            "unit": "ns",
            "range": "± 1291.2043713121193"
          }
        ]
      }
    ]
  }
}