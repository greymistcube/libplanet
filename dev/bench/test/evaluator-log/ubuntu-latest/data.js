window.BENCHMARK_DATA = {
  "lastUpdate": 1702440659126,
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
          "id": "08a91d1f1a64abf46de24658a987d2f2bf94850d",
          "message": "Added trie inconsistent log",
          "timestamp": "2023-12-13T12:14:14+09:00",
          "tree_id": "f3274a42fab16eeb412f7c65652d5dd7e3c42c11",
          "url": "https://github.com/greymistcube/libplanet/commit/08a91d1f1a64abf46de24658a987d2f2bf94850d"
        },
        "date": 1702437983829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204318.77083333334,
            "unit": "ns",
            "range": "± 8074.486522741847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200332.6379310345,
            "unit": "ns",
            "range": "± 5466.095856172575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167705.92307692306,
            "unit": "ns",
            "range": "± 4442.1574773803495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3068530.6428571427,
            "unit": "ns",
            "range": "± 39302.42480062511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2855366.0714285714,
            "unit": "ns",
            "range": "± 32755.97668885267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14685.908163265307,
            "unit": "ns",
            "range": "± 2498.101026560324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60126.12359550562,
            "unit": "ns",
            "range": "± 4410.877228821086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55291.413043478264,
            "unit": "ns",
            "range": "± 5978.185467753652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62069.34444444445,
            "unit": "ns",
            "range": "± 7974.7265800209325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3172.061855670103,
            "unit": "ns",
            "range": "± 492.426999971252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13026.694736842106,
            "unit": "ns",
            "range": "± 2278.7087752538305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40207.114583333336,
            "unit": "ns",
            "range": "± 5400.449444005449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925191.3727272727,
            "unit": "ns",
            "range": "± 39011.451678181074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827483.7926829269,
            "unit": "ns",
            "range": "± 65359.80204347467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1407584.5102040817,
            "unit": "ns",
            "range": "± 115404.6955924832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6106332.3522727275,
            "unit": "ns",
            "range": "± 336038.67958919087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2639621,
            "unit": "ns",
            "range": "± 51514.92356848321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2578279.515151515,
            "unit": "ns",
            "range": "± 117314.80194502212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186761.5,
            "unit": "ns",
            "range": "± 61578.79293284878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3168149.6,
            "unit": "ns",
            "range": "± 83993.49060145475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7064366.576923077,
            "unit": "ns",
            "range": "± 181689.59414587796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5582990,
            "unit": "ns",
            "range": "± 10503.903490867315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14395506.366666667,
            "unit": "ns",
            "range": "± 76379.2660906897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36899541,
            "unit": "ns",
            "range": "± 192722.0965607453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75925051.3,
            "unit": "ns",
            "range": "± 786106.106581239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151671051.93333334,
            "unit": "ns",
            "range": "± 1061875.258016043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759067.376502404,
            "unit": "ns",
            "range": "± 8266.40643559218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218719.840983073,
            "unit": "ns",
            "range": "± 2086.627234509402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772726.7804236779,
            "unit": "ns",
            "range": "± 1618.3441327892913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946258.5401041666,
            "unit": "ns",
            "range": "± 24400.648014029655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623153.1393694197,
            "unit": "ns",
            "range": "± 774.9315203483762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566979.0736177885,
            "unit": "ns",
            "range": "± 2434.403567474002"
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
          "id": "75829b976afeecadfb6476fd0014e92850b63fa7",
          "message": "More logging",
          "timestamp": "2023-12-13T12:22:26+09:00",
          "tree_id": "70f98720fd85a03c40578e4cd45ba6c0b468464c",
          "url": "https://github.com/greymistcube/libplanet/commit/75829b976afeecadfb6476fd0014e92850b63fa7"
        },
        "date": 1702438415619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200466.46341463414,
            "unit": "ns",
            "range": "± 6555.795951284485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194715.16129032258,
            "unit": "ns",
            "range": "± 8776.262141622537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167254.39130434784,
            "unit": "ns",
            "range": "± 6359.171694763262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3090000.6,
            "unit": "ns",
            "range": "± 32277.996365945644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878532.277777778,
            "unit": "ns",
            "range": "± 60998.037637245114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13449.868131868132,
            "unit": "ns",
            "range": "± 1356.278414623317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68058.72631578948,
            "unit": "ns",
            "range": "± 8501.101945395212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63060,
            "unit": "ns",
            "range": "± 1988.9138367460769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67281.51546391753,
            "unit": "ns",
            "range": "± 13739.674201706139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3778.989010989011,
            "unit": "ns",
            "range": "± 569.3266489557935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13990.541666666666,
            "unit": "ns",
            "range": "± 2490.862572712584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41070.84042553192,
            "unit": "ns",
            "range": "± 5670.940236663631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948100.1685393258,
            "unit": "ns",
            "range": "± 79282.4527460975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1938234.087628866,
            "unit": "ns",
            "range": "± 124382.70386172336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1433206.7525773195,
            "unit": "ns",
            "range": "± 125612.63504321787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5805345.8965517245,
            "unit": "ns",
            "range": "± 168303.76650915298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2474743.089285714,
            "unit": "ns",
            "range": "± 105747.26224975829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2493417.9795918367,
            "unit": "ns",
            "range": "± 92087.4199290385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111451.842857143,
            "unit": "ns",
            "range": "± 82638.44001145018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3008643.4237288134,
            "unit": "ns",
            "range": "± 133252.60312009996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6828090.125,
            "unit": "ns",
            "range": "± 131035.9700982266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5634478.5,
            "unit": "ns",
            "range": "± 108851.28705777132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14615226.357142856,
            "unit": "ns",
            "range": "± 174471.3405288661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36439286.07692308,
            "unit": "ns",
            "range": "± 228397.35348089505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76344003.33333333,
            "unit": "ns",
            "range": "± 817872.5767554911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147835577.34615386,
            "unit": "ns",
            "range": "± 1272481.8855530482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698383.354266827,
            "unit": "ns",
            "range": "± 7912.219693543852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221617.7107872595,
            "unit": "ns",
            "range": "± 2896.7137360358165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765184.8166691706,
            "unit": "ns",
            "range": "± 2937.509976439753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944868.8810096155,
            "unit": "ns",
            "range": "± 5333.028699479135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621859.3060546875,
            "unit": "ns",
            "range": "± 1046.6930761453254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570023.603125,
            "unit": "ns",
            "range": "± 1201.5342565308356"
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
          "id": "07f63041dd9079f6504b57bc4b6b0a37f887bc49",
          "message": "More logging",
          "timestamp": "2023-12-13T12:51:33+09:00",
          "tree_id": "7184d61ffb07896c0fc8a8775d8f83c8af77c537",
          "url": "https://github.com/greymistcube/libplanet/commit/07f63041dd9079f6504b57bc4b6b0a37f887bc49"
        },
        "date": 1702440380215,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201410.10869565216,
            "unit": "ns",
            "range": "± 4501.265243736077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183834.125,
            "unit": "ns",
            "range": "± 5678.898500362491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166798.8076923077,
            "unit": "ns",
            "range": "± 4138.186779440781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3007010.214285714,
            "unit": "ns",
            "range": "± 45146.881826354926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804450.0714285714,
            "unit": "ns",
            "range": "± 44105.85596295887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13384.1875,
            "unit": "ns",
            "range": "± 2340.741962048516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64966.113402061856,
            "unit": "ns",
            "range": "± 8807.256057834133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76545.56060606061,
            "unit": "ns",
            "range": "± 14289.596204587693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64054.78125,
            "unit": "ns",
            "range": "± 7106.180360048531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2676.7580645161293,
            "unit": "ns",
            "range": "± 365.5517242656701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14529.95744680851,
            "unit": "ns",
            "range": "± 1936.2371328762638"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41119.66494845361,
            "unit": "ns",
            "range": "± 5481.530539533819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959235.7731958763,
            "unit": "ns",
            "range": "± 89271.15671783184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837190.0232558139,
            "unit": "ns",
            "range": "± 64698.12455642353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1392229.0208333333,
            "unit": "ns",
            "range": "± 110565.95084506461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6046947.773195877,
            "unit": "ns",
            "range": "± 424414.7888341492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2305880.121621622,
            "unit": "ns",
            "range": "± 44525.5384678597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2478492.0714285714,
            "unit": "ns",
            "range": "± 35271.52026060835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3074992.714285714,
            "unit": "ns",
            "range": "± 47736.23385805116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2949851.1636363636,
            "unit": "ns",
            "range": "± 124267.72265701831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6862038,
            "unit": "ns",
            "range": "± 187708.40849615663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5582132.571428572,
            "unit": "ns",
            "range": "± 28625.320702172015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14198117.233333332,
            "unit": "ns",
            "range": "± 88996.68967396377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36175088.28571428,
            "unit": "ns",
            "range": "± 241561.36593402532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73286622.53846154,
            "unit": "ns",
            "range": "± 345839.3559972644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151480103.2857143,
            "unit": "ns",
            "range": "± 1156686.1731936182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3695410.0826322115,
            "unit": "ns",
            "range": "± 22102.27031740637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219074.2850260416,
            "unit": "ns",
            "range": "± 8916.652868118974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766280.7289663461,
            "unit": "ns",
            "range": "± 3671.053719220278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946339.0022536058,
            "unit": "ns",
            "range": "± 5476.040930673726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607637.3360677083,
            "unit": "ns",
            "range": "± 1209.9985063629697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570026.0914713541,
            "unit": "ns",
            "range": "± 1002.2017674754364"
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
          "id": "487aa0b0f6ebef094da29263febb0c962d338ab9",
          "message": "Elevate log level",
          "timestamp": "2023-12-13T12:59:42+09:00",
          "tree_id": "34d310ce3d987569c6f7b7ba96c9c7b32dee54a0",
          "url": "https://github.com/greymistcube/libplanet/commit/487aa0b0f6ebef094da29263febb0c962d338ab9"
        },
        "date": 1702440652338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200117.3431372549,
            "unit": "ns",
            "range": "± 8163.581239560365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196093.37662337662,
            "unit": "ns",
            "range": "± 9993.753799300106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166444.7837837838,
            "unit": "ns",
            "range": "± 5510.879901185044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3165327.533333333,
            "unit": "ns",
            "range": "± 29073.87794141643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2749315.076923077,
            "unit": "ns",
            "range": "± 37850.55273366017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12977.65909090909,
            "unit": "ns",
            "range": "± 857.684116306628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62995.58064516129,
            "unit": "ns",
            "range": "± 5412.69048529669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65463.39175257732,
            "unit": "ns",
            "range": "± 14475.309175279514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65667.34020618557,
            "unit": "ns",
            "range": "± 12401.889603072757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4445.111111111111,
            "unit": "ns",
            "range": "± 1835.4282928353778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12029.487951807228,
            "unit": "ns",
            "range": "± 1088.4231993249134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38216.69387755102,
            "unit": "ns",
            "range": "± 4336.976455008989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955385.5869565217,
            "unit": "ns",
            "range": "± 75032.15363497335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1908347.1417910447,
            "unit": "ns",
            "range": "± 90611.21966831059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393240.7558139535,
            "unit": "ns",
            "range": "± 75549.69565278146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5984247.049180328,
            "unit": "ns",
            "range": "± 269353.1634803662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2392357.4,
            "unit": "ns",
            "range": "± 33386.03091713658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576476.533333333,
            "unit": "ns",
            "range": "± 40399.27778857062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101980.8571428573,
            "unit": "ns",
            "range": "± 37078.60753724577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2936691.279411765,
            "unit": "ns",
            "range": "± 137115.12680550935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7050215.22,
            "unit": "ns",
            "range": "± 176773.39232039417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5593029,
            "unit": "ns",
            "range": "± 35119.41529870731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14520127.714285715,
            "unit": "ns",
            "range": "± 82096.4397320695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38443727.192307696,
            "unit": "ns",
            "range": "± 229323.1888719443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74809950.71428572,
            "unit": "ns",
            "range": "± 575125.3674907864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151091377.26923078,
            "unit": "ns",
            "range": "± 865514.6403609776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662082.7734375,
            "unit": "ns",
            "range": "± 12373.517658018394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227344.0608473558,
            "unit": "ns",
            "range": "± 5365.569010946993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780804.7392578125,
            "unit": "ns",
            "range": "± 2449.879004319603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938388.4561298077,
            "unit": "ns",
            "range": "± 3412.8362158145724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621266.5178786058,
            "unit": "ns",
            "range": "± 1633.3083921254588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591435.5822566106,
            "unit": "ns",
            "range": "± 495.33779803249905"
          }
        ]
      }
    ]
  }
}