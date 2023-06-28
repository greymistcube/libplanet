window.BENCHMARK_DATA = {
  "lastUpdate": 1687931842600,
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
          "id": "7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39",
          "message": "Consistent API across IBlockChainStates, IBlockStates, and IAccountState",
          "timestamp": "2023-06-26T21:18:27+09:00",
          "tree_id": "854e42435068d707308c2e422a6d234a2bb48784",
          "url": "https://github.com/greymistcube/libplanet/commit/7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39"
        },
        "date": 1687783168604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9108189.476190476,
            "unit": "ns",
            "range": "± 453397.7361465523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24055715.985714287,
            "unit": "ns",
            "range": "± 782999.9994825472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58786419.94444445,
            "unit": "ns",
            "range": "± 1224338.1018728865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122289981.375,
            "unit": "ns",
            "range": "± 2328557.1669849944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230190850.74358973,
            "unit": "ns",
            "range": "± 7893637.741052169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71853.44565217392,
            "unit": "ns",
            "range": "± 8816.560186630973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369185.33928571426,
            "unit": "ns",
            "range": "± 15627.837941869557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356736.44615384616,
            "unit": "ns",
            "range": "± 16508.778518971703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337257.4166666667,
            "unit": "ns",
            "range": "± 14893.489160227675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4795579.52,
            "unit": "ns",
            "range": "± 122996.67751885281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4341756.944444444,
            "unit": "ns",
            "range": "± 92806.73324423892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19965.697916666668,
            "unit": "ns",
            "range": "± 2409.9573139691724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100406.92857142857,
            "unit": "ns",
            "range": "± 7570.8586981818025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100772.69696969698,
            "unit": "ns",
            "range": "± 15712.82896264312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112609.61458333333,
            "unit": "ns",
            "range": "± 13102.886402677435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5621.663157894737,
            "unit": "ns",
            "range": "± 970.2247667918526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19357.870967741936,
            "unit": "ns",
            "range": "± 1886.462880780062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1797684.1666666667,
            "unit": "ns",
            "range": "± 154864.23683354104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3525666.814285714,
            "unit": "ns",
            "range": "± 165023.79304407415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2942084.9896907215,
            "unit": "ns",
            "range": "± 210763.03263328972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7440935.2549019605,
            "unit": "ns",
            "range": "± 303982.95265970705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3835752.659090909,
            "unit": "ns",
            "range": "± 204310.57249917326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3917250.753164557,
            "unit": "ns",
            "range": "± 195420.6447079307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5201509.391304348,
            "unit": "ns",
            "range": "± 83594.56518640167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4928350.803030303,
            "unit": "ns",
            "range": "± 228956.73385107704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10080490.908045977,
            "unit": "ns",
            "range": "± 1649316.7343194294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6883090.948102678,
            "unit": "ns",
            "range": "± 75987.54743260067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2175767.0811298075,
            "unit": "ns",
            "range": "± 14812.213179027594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448131.201171875,
            "unit": "ns",
            "range": "± 9128.430533925026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3117322.7014508927,
            "unit": "ns",
            "range": "± 33554.83692361511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938249.9059012277,
            "unit": "ns",
            "range": "± 4878.535780934602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860132.9190027574,
            "unit": "ns",
            "range": "± 17005.870989416915"
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
          "id": "0f9afdc85d91845eba84ae6be99f4092ccc7f53a",
          "message": "Changelog",
          "timestamp": "2023-06-27T17:15:37+09:00",
          "tree_id": "c82a291261ba65157a5c339e8968dcac918e6314",
          "url": "https://github.com/greymistcube/libplanet/commit/0f9afdc85d91845eba84ae6be99f4092ccc7f53a"
        },
        "date": 1687854727778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8527433.88235294,
            "unit": "ns",
            "range": "± 170493.115538019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20823241.666666668,
            "unit": "ns",
            "range": "± 349223.2444202146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52185439.928571425,
            "unit": "ns",
            "range": "± 844681.6200984082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104953410.28571428,
            "unit": "ns",
            "range": "± 1019089.3960401178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212642556.19230768,
            "unit": "ns",
            "range": "± 1659949.4235085088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74473.63684210526,
            "unit": "ns",
            "range": "± 7369.4803789373855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307767.8448275862,
            "unit": "ns",
            "range": "± 16695.634663983266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302762.0053763441,
            "unit": "ns",
            "range": "± 25671.26877956538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312444.38659793814,
            "unit": "ns",
            "range": "± 24810.559729291796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4265596.630434782,
            "unit": "ns",
            "range": "± 92600.41032321438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3945889.649122807,
            "unit": "ns",
            "range": "± 169288.45895546908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23375.394736842107,
            "unit": "ns",
            "range": "± 2784.9674411698716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96962.14948453609,
            "unit": "ns",
            "range": "± 13753.281849284524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107155.41836734694,
            "unit": "ns",
            "range": "± 16428.682566147745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116545.69072164949,
            "unit": "ns",
            "range": "± 15352.644851105748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6343.152631578947,
            "unit": "ns",
            "range": "± 898.0889967796167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18532.938775510203,
            "unit": "ns",
            "range": "± 2558.337071914588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1690040.9595959596,
            "unit": "ns",
            "range": "± 175307.80362294312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3084781.054054054,
            "unit": "ns",
            "range": "± 153226.66821457964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2657914.7525773197,
            "unit": "ns",
            "range": "± 273732.79244312143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6647344.84057971,
            "unit": "ns",
            "range": "± 317359.9245838104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3394852.2666666666,
            "unit": "ns",
            "range": "± 47022.41760125341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3545857.785714286,
            "unit": "ns",
            "range": "± 130181.7985313705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4507433.833333333,
            "unit": "ns",
            "range": "± 93053.3972753964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4609014.45,
            "unit": "ns",
            "range": "± 103329.86400102852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7649266.976190476,
            "unit": "ns",
            "range": "± 276309.22676067986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6746442.05078125,
            "unit": "ns",
            "range": "± 90323.27311975163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952899.335731908,
            "unit": "ns",
            "range": "± 42887.031381397894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1255080.1583533655,
            "unit": "ns",
            "range": "± 10291.992613551056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2453378.767447917,
            "unit": "ns",
            "range": "± 33328.50195067986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861196.105066636,
            "unit": "ns",
            "range": "± 27436.79778109583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820035.5459681919,
            "unit": "ns",
            "range": "± 8754.990058185236"
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
          "id": "e1f035701404d80a082f6b589a5ad6f42342161e",
          "message": "Changelog",
          "timestamp": "2023-06-28T14:39:53+09:00",
          "tree_id": "c82a291261ba65157a5c339e8968dcac918e6314",
          "url": "https://github.com/greymistcube/libplanet/commit/e1f035701404d80a082f6b589a5ad6f42342161e"
        },
        "date": 1687931827666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8118420.863636363,
            "unit": "ns",
            "range": "± 199237.63592475516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20441307.666666668,
            "unit": "ns",
            "range": "± 421306.46612971165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51337493.02,
            "unit": "ns",
            "range": "± 1331596.5093815993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105666526.95555556,
            "unit": "ns",
            "range": "± 3970063.5383479805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207912501.64285713,
            "unit": "ns",
            "range": "± 3279761.762598938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58959.41208791209,
            "unit": "ns",
            "range": "± 6320.21998324663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318703.47297297296,
            "unit": "ns",
            "range": "± 15980.628850094257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316411.96875,
            "unit": "ns",
            "range": "± 27206.99247482766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285566.3163265306,
            "unit": "ns",
            "range": "± 20229.255062494074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4110661.35,
            "unit": "ns",
            "range": "± 92762.83122212655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763180.42,
            "unit": "ns",
            "range": "± 98478.0594320041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17650.010638297874,
            "unit": "ns",
            "range": "± 2306.1998509612695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84759.8956043956,
            "unit": "ns",
            "range": "± 7364.692592029322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103441.68421052632,
            "unit": "ns",
            "range": "± 14864.285671955917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115105.66666666667,
            "unit": "ns",
            "range": "± 15925.180750964095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4916.863157894737,
            "unit": "ns",
            "range": "± 727.1077155492151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15822.994623655914,
            "unit": "ns",
            "range": "± 1495.527765093792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1604325.9583333333,
            "unit": "ns",
            "range": "± 154241.5362467115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2809972.6714285715,
            "unit": "ns",
            "range": "± 91219.23800882643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2465743.78125,
            "unit": "ns",
            "range": "± 211596.30994728982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6269781.979452055,
            "unit": "ns",
            "range": "± 278798.6201295017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3311708.125,
            "unit": "ns",
            "range": "± 150917.8869271484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3535330.4375,
            "unit": "ns",
            "range": "± 276440.93081710534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4530130.12244898,
            "unit": "ns",
            "range": "± 177012.61000651348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4290882.697674419,
            "unit": "ns",
            "range": "± 231627.0057673515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7672401.452380952,
            "unit": "ns",
            "range": "± 278545.0760749858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6568660.59375,
            "unit": "ns",
            "range": "± 39076.201010428595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2200723.940708705,
            "unit": "ns",
            "range": "± 62095.71878704434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396686.700390625,
            "unit": "ns",
            "range": "± 25673.363457116735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3064573.078255208,
            "unit": "ns",
            "range": "± 38643.67440221313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874337.9077473958,
            "unit": "ns",
            "range": "± 13695.327679884182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834051.9412109375,
            "unit": "ns",
            "range": "± 14511.00120959171"
          }
        ]
      }
    ]
  }
}