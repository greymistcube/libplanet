window.BENCHMARK_DATA = {
  "lastUpdate": 1702811931273,
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
          "id": "ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69",
          "message": "Changelog",
          "timestamp": "2023-12-17T17:23:08+09:00",
          "tree_id": "6d61ab432ba0e1be66424d63f8c2401df9e7828e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69"
        },
        "date": 1702802257325,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7529178.142857143,
            "unit": "ns",
            "range": "± 80073.8654011764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19037531.266666666,
            "unit": "ns",
            "range": "± 113309.29646797154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46742556.56666667,
            "unit": "ns",
            "range": "± 531954.1180459709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91754651.93333334,
            "unit": "ns",
            "range": "± 1004223.8274866436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191113957.6521739,
            "unit": "ns",
            "range": "± 4805621.460489689"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36158.488764044945,
            "unit": "ns",
            "range": "± 4364.696260114114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213188.27528089887,
            "unit": "ns",
            "range": "± 12872.148672577063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222368.8404255319,
            "unit": "ns",
            "range": "± 19591.212606788016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192894.6043956044,
            "unit": "ns",
            "range": "± 16543.80070793832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3669028.617647059,
            "unit": "ns",
            "range": "± 71677.11862135847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3331189.1578947366,
            "unit": "ns",
            "range": "± 60022.703649224044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12300.454545454546,
            "unit": "ns",
            "range": "± 1172.6640454228043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58030.086956521736,
            "unit": "ns",
            "range": "± 5354.482971628015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50842.282051282054,
            "unit": "ns",
            "range": "± 2477.081393717661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61267.354166666664,
            "unit": "ns",
            "range": "± 12506.465574993948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3042.438202247191,
            "unit": "ns",
            "range": "± 348.5384077914832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12070.505376344086,
            "unit": "ns",
            "range": "± 1309.920157072775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078013.2346938776,
            "unit": "ns",
            "range": "± 81936.39216304882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2277692.5555555555,
            "unit": "ns",
            "range": "± 134003.61204218143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530621.989010989,
            "unit": "ns",
            "range": "± 85698.93717667092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6890812.576271187,
            "unit": "ns",
            "range": "± 303379.47941385355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2828301.476190476,
            "unit": "ns",
            "range": "± 92655.98195402858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2920238.12,
            "unit": "ns",
            "range": "± 101471.57276063044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3521686.3695652173,
            "unit": "ns",
            "range": "± 124523.29870074894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3432272.3235294116,
            "unit": "ns",
            "range": "± 109014.82339446087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14364842.79,
            "unit": "ns",
            "range": "± 2781144.9569561547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4404721.768229167,
            "unit": "ns",
            "range": "± 60264.52452446519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1321398.347265625,
            "unit": "ns",
            "range": "± 14259.985444882626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 876098.7974330357,
            "unit": "ns",
            "range": "± 8710.586641571048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953959.0526455967,
            "unit": "ns",
            "range": "± 42776.88811395851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612592.3312049279,
            "unit": "ns",
            "range": "± 6358.694826478809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550806.7729166667,
            "unit": "ns",
            "range": "± 6212.768777716536"
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
          "id": "6b5f6607eb743676bd8bdd4086e51973828d3ba3",
          "message": "Changelog",
          "timestamp": "2023-12-17T17:26:18+09:00",
          "tree_id": "eb2b1eee3447ce5267dacd08576a272bff97ff42",
          "url": "https://github.com/greymistcube/libplanet/commit/6b5f6607eb743676bd8bdd4086e51973828d3ba3"
        },
        "date": 1702802411266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7657054.2727272725,
            "unit": "ns",
            "range": "± 180617.9336561234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19216892.65714286,
            "unit": "ns",
            "range": "± 929944.6467340374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46457247.4375,
            "unit": "ns",
            "range": "± 717221.3208941824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94378722.88571429,
            "unit": "ns",
            "range": "± 3028730.0066357628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191058936.5945946,
            "unit": "ns",
            "range": "± 6462049.488062657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36222.181818181816,
            "unit": "ns",
            "range": "± 3331.4716383164664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221964.914893617,
            "unit": "ns",
            "range": "± 14301.309459302793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221524.875,
            "unit": "ns",
            "range": "± 17197.880908781513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195616.48913043478,
            "unit": "ns",
            "range": "± 15170.712325083157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3706420.1333333333,
            "unit": "ns",
            "range": "± 66942.07473081983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3498677.3333333335,
            "unit": "ns",
            "range": "± 97209.69722441037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13879.958762886597,
            "unit": "ns",
            "range": "± 1792.3261475287136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57910.12222222222,
            "unit": "ns",
            "range": "± 5004.532114146446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52518.815217391304,
            "unit": "ns",
            "range": "± 4404.174999590574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60313.02631578947,
            "unit": "ns",
            "range": "± 12161.379394783906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3430.211111111111,
            "unit": "ns",
            "range": "± 353.60609375133436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12604.967391304348,
            "unit": "ns",
            "range": "± 1037.3926365853345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1227384.2736842106,
            "unit": "ns",
            "range": "± 115489.02062123465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2535501.602040816,
            "unit": "ns",
            "range": "± 252712.84616876187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1667356.6464646466,
            "unit": "ns",
            "range": "± 173720.88296191572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7043516.8522727275,
            "unit": "ns",
            "range": "± 397193.69831931574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2865512.5263157897,
            "unit": "ns",
            "range": "± 119832.1018663949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2986323.48,
            "unit": "ns",
            "range": "± 119028.39610357436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3561053.3076923075,
            "unit": "ns",
            "range": "± 139705.19964561492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3420480.775362319,
            "unit": "ns",
            "range": "± 154718.81336246963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14239745.25510204,
            "unit": "ns",
            "range": "± 2537683.5978681003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4518189.832421875,
            "unit": "ns",
            "range": "± 101770.2202827801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1343982.4751674107,
            "unit": "ns",
            "range": "± 33331.064701242685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915504.6598097278,
            "unit": "ns",
            "range": "± 27150.556290019587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1997038.0473090278,
            "unit": "ns",
            "range": "± 55625.63296282988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645096.1131465518,
            "unit": "ns",
            "range": "± 18332.58042943406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582222.3483479818,
            "unit": "ns",
            "range": "± 14889.028883236051"
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
          "id": "5075a20c564790141be3da4cb8bf272955e1107d",
          "message": "Changelog",
          "timestamp": "2023-12-17T20:01:58+09:00",
          "tree_id": "26d672d2c7ef1653d612add104911d0112611adc",
          "url": "https://github.com/greymistcube/libplanet/commit/5075a20c564790141be3da4cb8bf272955e1107d"
        },
        "date": 1702811915866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7955297.11,
            "unit": "ns",
            "range": "± 504155.50912614283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18854748.153846152,
            "unit": "ns",
            "range": "± 195933.39910704613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47480261.44444445,
            "unit": "ns",
            "range": "± 1985034.8907675038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94166386.10416667,
            "unit": "ns",
            "range": "± 3502968.665129452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195783126.64035088,
            "unit": "ns",
            "range": "± 8465833.690163659"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36555.57608695652,
            "unit": "ns",
            "range": "± 4462.825294533921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229626.86021505378,
            "unit": "ns",
            "range": "± 23739.232081913335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221988.15263157894,
            "unit": "ns",
            "range": "± 25783.85339405529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199657.3510638298,
            "unit": "ns",
            "range": "± 18181.333070769804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3763184.230769231,
            "unit": "ns",
            "range": "± 152993.43847856586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3347002.911764706,
            "unit": "ns",
            "range": "± 67748.06727691465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12981.305263157894,
            "unit": "ns",
            "range": "± 1108.3154754207444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64759.242105263154,
            "unit": "ns",
            "range": "± 10228.10009469718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52964.868131868134,
            "unit": "ns",
            "range": "± 3774.720693740256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62219.78787878788,
            "unit": "ns",
            "range": "± 11688.689507097062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3368.6043956043954,
            "unit": "ns",
            "range": "± 389.9386811943322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12169.983146067416,
            "unit": "ns",
            "range": "± 898.8259654627194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061121.8723404256,
            "unit": "ns",
            "range": "± 124896.85178053062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2267654.568421053,
            "unit": "ns",
            "range": "± 148677.79475584338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1569300.7474747475,
            "unit": "ns",
            "range": "± 115432.35149621523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6858240.292134832,
            "unit": "ns",
            "range": "± 376795.4775888856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2943604.8767123288,
            "unit": "ns",
            "range": "± 140092.7393203383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2950688.2,
            "unit": "ns",
            "range": "± 124118.42537889205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3527718.6875,
            "unit": "ns",
            "range": "± 95646.43016168135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3433009.925925926,
            "unit": "ns",
            "range": "± 142342.04933173003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14166325.35,
            "unit": "ns",
            "range": "± 2228778.726064525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4439776.1946390085,
            "unit": "ns",
            "range": "± 180729.5271056945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1416147.3047351371,
            "unit": "ns",
            "range": "± 74334.85787006981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 907646.330703125,
            "unit": "ns",
            "range": "± 35683.692630199606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2005172.3944010416,
            "unit": "ns",
            "range": "± 59450.20397296592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 749304.9571386719,
            "unit": "ns",
            "range": "± 93779.99691821894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 609640.7391790574,
            "unit": "ns",
            "range": "± 27553.208817555413"
          }
        ]
      }
    ]
  }
}