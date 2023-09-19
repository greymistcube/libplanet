window.BENCHMARK_DATA = {
  "lastUpdate": 1695089533970,
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
          "id": "a8930c3076bea9c0507e1986d89c2065ed404130",
          "message": "Added test",
          "timestamp": "2023-09-15T17:43:48+09:00",
          "tree_id": "1c684cbbb77075e1b3858f3181f76e8fc81d857d",
          "url": "https://github.com/greymistcube/libplanet/commit/a8930c3076bea9c0507e1986d89c2065ed404130"
        },
        "date": 1694768205416,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266163.1818181818,
            "unit": "ns",
            "range": "± 7737.828912454003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254851.27272727274,
            "unit": "ns",
            "range": "± 8003.178771872178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218399.64285714287,
            "unit": "ns",
            "range": "± 3523.9837947576157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4122688.933333333,
            "unit": "ns",
            "range": "± 29997.96547498005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3810079.933333333,
            "unit": "ns",
            "range": "± 31345.807376213274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18323.382978723403,
            "unit": "ns",
            "range": "± 1390.7211953328465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86076.1875,
            "unit": "ns",
            "range": "± 4508.040414872104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68734.95,
            "unit": "ns",
            "range": "± 1525.3053352655245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76862.08163265306,
            "unit": "ns",
            "range": "± 10711.807971294387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4471.875,
            "unit": "ns",
            "range": "± 459.45118863361546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17578.926315789475,
            "unit": "ns",
            "range": "± 1822.5210867186572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3309029.68,
            "unit": "ns",
            "range": "± 133643.15895964086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3436190.052631579,
            "unit": "ns",
            "range": "± 75982.79167056599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4256940.8,
            "unit": "ns",
            "range": "± 70217.52668285278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3796374.0689655175,
            "unit": "ns",
            "range": "± 107598.75163605723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5965567.1875,
            "unit": "ns",
            "range": "± 114773.9989580792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1288780.0303030303,
            "unit": "ns",
            "range": "± 96911.91016456114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2465697.25,
            "unit": "ns",
            "range": "± 81300.3182275884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1661255.0697674418,
            "unit": "ns",
            "range": "± 90235.51866438387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4340246.342857143,
            "unit": "ns",
            "range": "± 114289.18844239015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45339.13924050633,
            "unit": "ns",
            "range": "± 2291.3074015872785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7593642.066666666,
            "unit": "ns",
            "range": "± 77473.7193057534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19769624.066666666,
            "unit": "ns",
            "range": "± 79794.03431108176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49826565.333333336,
            "unit": "ns",
            "range": "± 328528.0778610791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101845339.66666667,
            "unit": "ns",
            "range": "± 595590.0988346008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201797513.73333332,
            "unit": "ns",
            "range": "± 1430217.4826252058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4928449.295572917,
            "unit": "ns",
            "range": "± 4396.540789912866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1572807.6029146635,
            "unit": "ns",
            "range": "± 1718.0941708364542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073798.6830357143,
            "unit": "ns",
            "range": "± 789.6627616976467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556358.6920072115,
            "unit": "ns",
            "range": "± 1634.6498992524464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804133.9688802083,
            "unit": "ns",
            "range": "± 665.333587817142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743715.8364955357,
            "unit": "ns",
            "range": "± 529.1865232143402"
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
          "id": "fae541ca878ecab58d86efe8734aea616420b4d1",
          "message": "Typo fix",
          "timestamp": "2023-09-15T17:45:16+09:00",
          "tree_id": "a585c6e34603a7b2c98ce5f8223081084e6c06c1",
          "url": "https://github.com/greymistcube/libplanet/commit/fae541ca878ecab58d86efe8734aea616420b4d1"
        },
        "date": 1694768364048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273732.8947368421,
            "unit": "ns",
            "range": "± 6058.669361563522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266525.01612903224,
            "unit": "ns",
            "range": "± 12050.508475078235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231347.125,
            "unit": "ns",
            "range": "± 7007.464010242129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4386776.642857143,
            "unit": "ns",
            "range": "± 47042.93575121994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4055862.6,
            "unit": "ns",
            "range": "± 61857.35823397015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19026.936170212764,
            "unit": "ns",
            "range": "± 1548.776241212498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84039.45238095238,
            "unit": "ns",
            "range": "± 4444.148215254628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70053.30434782608,
            "unit": "ns",
            "range": "± 1629.4098327805855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80182.0612244898,
            "unit": "ns",
            "range": "± 13511.71797421666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4869.144329896907,
            "unit": "ns",
            "range": "± 472.42565529956505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18200.1935483871,
            "unit": "ns",
            "range": "± 1468.5619056844318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419408.217391304,
            "unit": "ns",
            "range": "± 130533.2357153045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3634481.6078431373,
            "unit": "ns",
            "range": "± 148010.40516099922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4330088.333333333,
            "unit": "ns",
            "range": "± 88213.83452791092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3952211.9444444445,
            "unit": "ns",
            "range": "± 131867.25094361146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6295313.307692308,
            "unit": "ns",
            "range": "± 219303.1518599136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423319.680851064,
            "unit": "ns",
            "range": "± 80908.5500166053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2676171.2325581396,
            "unit": "ns",
            "range": "± 97612.71817184996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1804744.4747474748,
            "unit": "ns",
            "range": "± 145337.04050784314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4536416.870967742,
            "unit": "ns",
            "range": "± 136742.82863749308"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46125.49438202247,
            "unit": "ns",
            "range": "± 2228.907249199989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8020874.066666666,
            "unit": "ns",
            "range": "± 106326.90963148019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21979327.4,
            "unit": "ns",
            "range": "± 371134.5071597166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55087660.666666664,
            "unit": "ns",
            "range": "± 995201.1684456901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108978908.66666667,
            "unit": "ns",
            "range": "± 1538845.386690603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218213488.76923078,
            "unit": "ns",
            "range": "± 2259806.8348819166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4984197.209821428,
            "unit": "ns",
            "range": "± 23178.28798961223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1584832.8433314732,
            "unit": "ns",
            "range": "± 4946.188512098473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079857.5982142857,
            "unit": "ns",
            "range": "± 2581.4532900727704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618831.19921875,
            "unit": "ns",
            "range": "± 2507.213856086178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822298.4061802456,
            "unit": "ns",
            "range": "± 1343.8076506366046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757246.3785574777,
            "unit": "ns",
            "range": "± 990.0648524905802"
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
          "id": "d19fdac843f77e2bf0593612ab26bd7ba6f50e51",
          "message": "Typo fix",
          "timestamp": "2023-09-19T10:51:13+09:00",
          "tree_id": "8aa6f017f95187f17ddf6cdf3aadfbaffcb0dcd9",
          "url": "https://github.com/greymistcube/libplanet/commit/d19fdac843f77e2bf0593612ab26bd7ba6f50e51"
        },
        "date": 1695089464991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350943.62765957444,
            "unit": "ns",
            "range": "± 38530.0573812979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350469.2659574468,
            "unit": "ns",
            "range": "± 42430.40261015311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301463.45454545453,
            "unit": "ns",
            "range": "± 39824.918168503675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5292694.397849462,
            "unit": "ns",
            "range": "± 335870.47155514726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4878555.734042553,
            "unit": "ns",
            "range": "± 287880.14828576846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27087.505263157895,
            "unit": "ns",
            "range": "± 8762.816863331744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120004.9494949495,
            "unit": "ns",
            "range": "± 21674.59470909539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123705.32967032967,
            "unit": "ns",
            "range": "± 18485.004223877702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125032.60824742269,
            "unit": "ns",
            "range": "± 23485.22432764761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7479.369565217391,
            "unit": "ns",
            "range": "± 865.5522624680412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27488.908163265307,
            "unit": "ns",
            "range": "± 9824.654846209569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4271255.673913044,
            "unit": "ns",
            "range": "± 299713.8579031494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4509083.010416667,
            "unit": "ns",
            "range": "± 362132.7022741654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5555996.978021978,
            "unit": "ns",
            "range": "± 331641.33802930266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4789588.37113402,
            "unit": "ns",
            "range": "± 354037.87292096653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8165419.62962963,
            "unit": "ns",
            "range": "± 425923.54707874055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1760835.275510204,
            "unit": "ns",
            "range": "± 186209.44142306066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3408972.9479166665,
            "unit": "ns",
            "range": "± 270011.34890972625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217935.8172043012,
            "unit": "ns",
            "range": "± 188617.27079170637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6055496.247058824,
            "unit": "ns",
            "range": "± 326871.276145916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71247.82474226804,
            "unit": "ns",
            "range": "± 19452.374635466695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9926669.822916666,
            "unit": "ns",
            "range": "± 731707.1330345366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26725955,
            "unit": "ns",
            "range": "± 542799.4353410434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70707988.27906977,
            "unit": "ns",
            "range": "± 2578171.8795306277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142086125.44,
            "unit": "ns",
            "range": "± 3698178.5830829735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282959232.5,
            "unit": "ns",
            "range": "± 4210864.578894855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6258164.6806640625,
            "unit": "ns",
            "range": "± 184246.00970344114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046832.099330357,
            "unit": "ns",
            "range": "± 26053.062741949667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360533.2829427083,
            "unit": "ns",
            "range": "± 16441.57394329934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3337908.859592014,
            "unit": "ns",
            "range": "± 67931.91261958616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045830.7961856618,
            "unit": "ns",
            "range": "± 20530.355299819483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 991216.275,
            "unit": "ns",
            "range": "± 13577.014113110587"
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
          "id": "8ab83ad6344629d006d1065cd659b33a862d19f6",
          "message": "Changelog",
          "timestamp": "2023-09-19T10:52:59+09:00",
          "tree_id": "cc068e28f549f9bb67e03f8e667c1fb610b3a3ce",
          "url": "https://github.com/greymistcube/libplanet/commit/8ab83ad6344629d006d1065cd659b33a862d19f6"
        },
        "date": 1695089524577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371914.0206185567,
            "unit": "ns",
            "range": "± 52310.96473453634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351057.0909090909,
            "unit": "ns",
            "range": "± 51419.58532427329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301495.3617021277,
            "unit": "ns",
            "range": "± 39426.06229628246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5025003.72,
            "unit": "ns",
            "range": "± 331594.58196576755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4626676.76056338,
            "unit": "ns",
            "range": "± 226489.59571502646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26684.959595959597,
            "unit": "ns",
            "range": "± 8571.634292673158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116488.09278350516,
            "unit": "ns",
            "range": "± 23480.4248906059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110902.17346938775,
            "unit": "ns",
            "range": "± 19673.23263707006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125778.05263157895,
            "unit": "ns",
            "range": "± 22776.03099348851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6637.395604395604,
            "unit": "ns",
            "range": "± 828.7604248262834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26959.876288659794,
            "unit": "ns",
            "range": "± 10753.532387911862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3974700.5306122447,
            "unit": "ns",
            "range": "± 301335.1497775318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4136668.1530612246,
            "unit": "ns",
            "range": "± 308284.7295043565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5562241.702702703,
            "unit": "ns",
            "range": "± 278014.3995350142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4759625.97,
            "unit": "ns",
            "range": "± 449879.8523667897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8096618.216494845,
            "unit": "ns",
            "range": "± 548676.051529407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716287.237113402,
            "unit": "ns",
            "range": "± 170648.52510782052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3287250.2474226803,
            "unit": "ns",
            "range": "± 252606.12591208698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153909.9081632653,
            "unit": "ns",
            "range": "± 195163.3486612745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6088108.34375,
            "unit": "ns",
            "range": "± 514499.06480669515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65957.78787878787,
            "unit": "ns",
            "range": "± 14256.055861992818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9339475.927083334,
            "unit": "ns",
            "range": "± 546115.370468534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25587929.717171717,
            "unit": "ns",
            "range": "± 1608708.770643267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65112482.016393445,
            "unit": "ns",
            "range": "± 2909548.8763637026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132372863.89361702,
            "unit": "ns",
            "range": "± 5118076.349249734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269380087.7692308,
            "unit": "ns",
            "range": "± 9213725.752404692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5968772.363541666,
            "unit": "ns",
            "range": "± 59385.42086377424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919871.5821814905,
            "unit": "ns",
            "range": "± 26410.500648413243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1436314.9486607143,
            "unit": "ns",
            "range": "± 14428.85750116626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3192359.236197917,
            "unit": "ns",
            "range": "± 34362.60870164185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1044052.0024414062,
            "unit": "ns",
            "range": "± 19221.09491304584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 947306.3364955357,
            "unit": "ns",
            "range": "± 12821.291613951635"
          }
        ]
      }
    ]
  }
}