window.BENCHMARK_DATA = {
  "lastUpdate": 1691566666402,
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
          "id": "b1f623b36c98e27c21c226c5817feae3e4ac02d5",
          "message": "Added single get to ITrie; automatic parallel switch",
          "timestamp": "2023-08-08T16:57:00+09:00",
          "tree_id": "d610e24cc0d89f3256b8bdabcfe58ee6378c5b2a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1f623b36c98e27c21c226c5817feae3e4ac02d5"
        },
        "date": 1691482270341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3433419.285714286,
            "unit": "ns",
            "range": "± 59625.660546482795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3541701.3076923075,
            "unit": "ns",
            "range": "± 96277.5488781343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4315892.285714285,
            "unit": "ns",
            "range": "± 58532.60483555439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3886512.785714286,
            "unit": "ns",
            "range": "± 54410.30562760157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6267969.633333334,
            "unit": "ns",
            "range": "± 174269.2147946297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7816251.4,
            "unit": "ns",
            "range": "± 59597.826526524565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19553272,
            "unit": "ns",
            "range": "± 89353.82347292571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50410445.461538464,
            "unit": "ns",
            "range": "± 233777.76194697368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101235919.86666666,
            "unit": "ns",
            "range": "± 367423.28820543643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202056552.93333334,
            "unit": "ns",
            "range": "± 818897.0258542425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47997.903225806454,
            "unit": "ns",
            "range": "± 3077.085358866463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149538.579799107,
            "unit": "ns",
            "range": "± 27460.185350086897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926952.896875,
            "unit": "ns",
            "range": "± 3398.672525498455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381718.3715444712,
            "unit": "ns",
            "range": "± 420.55580390686436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562406.698660714,
            "unit": "ns",
            "range": "± 1307.948374503499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811114.2496744791,
            "unit": "ns",
            "range": "± 342.49344200314073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729286.5297851562,
            "unit": "ns",
            "range": "± 359.8845383799867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288131.3965517241,
            "unit": "ns",
            "range": "± 12515.64497982587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276058.4516129032,
            "unit": "ns",
            "range": "± 8400.10138366877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239650.20754716982,
            "unit": "ns",
            "range": "± 9275.291420589705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4286080.933333334,
            "unit": "ns",
            "range": "± 15785.499279251135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3980832.933333333,
            "unit": "ns",
            "range": "± 40398.45446383644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19897.893617021276,
            "unit": "ns",
            "range": "± 1768.6960902112921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89283.0731707317,
            "unit": "ns",
            "range": "± 4525.217568688014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72419,
            "unit": "ns",
            "range": "± 2406.352968936833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84349.49333333333,
            "unit": "ns",
            "range": "± 3371.061852011928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4892.563829787234,
            "unit": "ns",
            "range": "± 498.4319834425844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20191.58947368421,
            "unit": "ns",
            "range": "± 1745.7427882900568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415820.1717171718,
            "unit": "ns",
            "range": "± 101012.89398025446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638833.407407407,
            "unit": "ns",
            "range": "± 73935.35800760183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1783416.1,
            "unit": "ns",
            "range": "± 93127.52523282188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4743807.346153846,
            "unit": "ns",
            "range": "± 122517.63346096508"
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
          "id": "4aaf6b6fb025f9fb44cb3940fb902e5c512dbd72",
          "message": "Cleanup tests",
          "timestamp": "2023-08-08T17:05:53+09:00",
          "tree_id": "1c88b7c93f4ad3498a0dfb49514301a05f314e63",
          "url": "https://github.com/greymistcube/libplanet/commit/4aaf6b6fb025f9fb44cb3940fb902e5c512dbd72"
        },
        "date": 1691482809218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3208733.6666666665,
            "unit": "ns",
            "range": "± 50009.71105933422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3291033.533333333,
            "unit": "ns",
            "range": "± 28455.44281821937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4137745.1333333333,
            "unit": "ns",
            "range": "± 60309.74196105902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3574167.489361702,
            "unit": "ns",
            "range": "± 139312.9038799806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6255363.866666666,
            "unit": "ns",
            "range": "± 234954.06677723976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7514825.461538462,
            "unit": "ns",
            "range": "± 12890.341245905689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19085976.933333334,
            "unit": "ns",
            "range": "± 127635.85392405932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49578265.53333333,
            "unit": "ns",
            "range": "± 385047.93930197216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97000157.92857143,
            "unit": "ns",
            "range": "± 812911.4827784108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192363485.53333333,
            "unit": "ns",
            "range": "± 1048249.1339695832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46159.70114942529,
            "unit": "ns",
            "range": "± 2385.1432559723303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6209685.026227678,
            "unit": "ns",
            "range": "± 24527.382813527176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876840.3920572917,
            "unit": "ns",
            "range": "± 5097.177967831184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381546.497265625,
            "unit": "ns",
            "range": "± 2717.833552223409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2691217.5364583335,
            "unit": "ns",
            "range": "± 6129.45288452116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812113.6065755208,
            "unit": "ns",
            "range": "± 1377.5896843319488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724844.5299479166,
            "unit": "ns",
            "range": "± 741.0184700950199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276639.0303030303,
            "unit": "ns",
            "range": "± 8674.537705566967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259296.67647058822,
            "unit": "ns",
            "range": "± 7161.6398948192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224807.38461538462,
            "unit": "ns",
            "range": "± 1327.5885117046835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4182593.4,
            "unit": "ns",
            "range": "± 29248.361374858003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3829088,
            "unit": "ns",
            "range": "± 48492.38943969898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16682.28125,
            "unit": "ns",
            "range": "± 1057.6083316727816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85394.04347826086,
            "unit": "ns",
            "range": "± 4084.7927495658055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71650,
            "unit": "ns",
            "range": "± 1033.8501602486474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76197.23684210527,
            "unit": "ns",
            "range": "± 2594.554373392708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4471.408163265306,
            "unit": "ns",
            "range": "± 609.7243561217957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15315.021505376344,
            "unit": "ns",
            "range": "± 947.2042268479267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344816.7,
            "unit": "ns",
            "range": "± 90128.74657848115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2585193.7666666666,
            "unit": "ns",
            "range": "± 64871.57605219255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716910.6041666667,
            "unit": "ns",
            "range": "± 111857.83898610623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4556785.185185186,
            "unit": "ns",
            "range": "± 123232.29628102836"
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
          "id": "6eee647dbd01c344f9be474baf83bdb2b3df65bb",
          "message": "Changelog",
          "timestamp": "2023-08-08T17:00:50+09:00",
          "tree_id": "bbca0c04749f4b60ee9725e7c713ec8060c5de1f",
          "url": "https://github.com/greymistcube/libplanet/commit/6eee647dbd01c344f9be474baf83bdb2b3df65bb"
        },
        "date": 1691482884685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4176919.131868132,
            "unit": "ns",
            "range": "± 232676.13584843677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4600733.03125,
            "unit": "ns",
            "range": "± 336034.74058957695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5976502.239130435,
            "unit": "ns",
            "range": "± 397219.2546413256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5114646.415730337,
            "unit": "ns",
            "range": "± 333169.21467090485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8975354.078651685,
            "unit": "ns",
            "range": "± 496606.12957936845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10203872.29213483,
            "unit": "ns",
            "range": "± 561832.9063260511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27015673.068181816,
            "unit": "ns",
            "range": "± 989594.2580055257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72371190.01818182,
            "unit": "ns",
            "range": "± 3039438.3953944976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149570773.92307693,
            "unit": "ns",
            "range": "± 6976256.050488182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292916054.38461536,
            "unit": "ns",
            "range": "± 4598898.820228935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57901.54761904762,
            "unit": "ns",
            "range": "± 3847.9924805325727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7955411.740885417,
            "unit": "ns",
            "range": "± 167048.89827268684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2538752.9717548075,
            "unit": "ns",
            "range": "± 37622.744684421785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1868468.3203938801,
            "unit": "ns",
            "range": "± 46970.75137979784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3463403.9677083334,
            "unit": "ns",
            "range": "± 41364.87672225336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1152865.7243088942,
            "unit": "ns",
            "range": "± 10994.528261422669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1055357.7708333333,
            "unit": "ns",
            "range": "± 21686.274037502288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366714.29347826086,
            "unit": "ns",
            "range": "± 35481.2146903391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356053.91397849465,
            "unit": "ns",
            "range": "± 38730.54083459648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301618.47252747254,
            "unit": "ns",
            "range": "± 23123.604179058948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5393689.255319149,
            "unit": "ns",
            "range": "± 208877.8823176322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5123233.095238095,
            "unit": "ns",
            "range": "± 265701.92608860706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22022.267441860466,
            "unit": "ns",
            "range": "± 2352.7625135742956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110862.8021978022,
            "unit": "ns",
            "range": "± 11368.666075587642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121085.19791666667,
            "unit": "ns",
            "range": "± 12889.781609860203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126837.72826086957,
            "unit": "ns",
            "range": "± 20459.813389040413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7204.297872340426,
            "unit": "ns",
            "range": "± 1056.2291807941187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19855.38823529412,
            "unit": "ns",
            "range": "± 1946.0461753325922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1913970.6170212766,
            "unit": "ns",
            "range": "± 222084.033214404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3736358.7204301073,
            "unit": "ns",
            "range": "± 432455.78677301155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2301839.6875,
            "unit": "ns",
            "range": "± 202652.3664208872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6867984.808510638,
            "unit": "ns",
            "range": "± 526042.9789877711"
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
          "id": "044e4de0f3272f313c3108a396d5357848245ed3",
          "message": "Update Libplanet.Store/Trie/ITrie.cs\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-08-09T16:17:00+09:00",
          "tree_id": "28b90b59745b78789e44d0dbf9e180f463bd7f52",
          "url": "https://github.com/greymistcube/libplanet/commit/044e4de0f3272f313c3108a396d5357848245ed3"
        },
        "date": 1691566655770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4182378.263157895,
            "unit": "ns",
            "range": "± 309942.0648926839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4462715.2727272725,
            "unit": "ns",
            "range": "± 377454.7926882407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5926721.8367346935,
            "unit": "ns",
            "range": "± 390002.19727447885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5857337.177083333,
            "unit": "ns",
            "range": "± 431683.3975490784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8684355.666666666,
            "unit": "ns",
            "range": "± 572996.771438331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10331311.536585366,
            "unit": "ns",
            "range": "± 371986.9276428338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27601791.595238097,
            "unit": "ns",
            "range": "± 998090.9361646866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72689570.02941176,
            "unit": "ns",
            "range": "± 2283397.7364561213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146674518.75,
            "unit": "ns",
            "range": "± 5380735.8513496285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280782707.23333335,
            "unit": "ns",
            "range": "± 8384628.097448941"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66787.04210526316,
            "unit": "ns",
            "range": "± 11898.76049231715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7890721.78515625,
            "unit": "ns",
            "range": "± 202398.96303818497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2390721.953515625,
            "unit": "ns",
            "range": "± 53482.303904190594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1682812.296983507,
            "unit": "ns",
            "range": "± 46672.503695639294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3202936.3466145834,
            "unit": "ns",
            "range": "± 94190.37113423001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024774.2482910156,
            "unit": "ns",
            "range": "± 25911.324559700843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 960502.9895426432,
            "unit": "ns",
            "range": "± 24551.20003513626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388643.9896907217,
            "unit": "ns",
            "range": "± 46386.83336458356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379326.4591836735,
            "unit": "ns",
            "range": "± 49490.90157019041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306837.59139784944,
            "unit": "ns",
            "range": "± 23580.160310900166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5469956.531914894,
            "unit": "ns",
            "range": "± 385732.8116731352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4909929.329896907,
            "unit": "ns",
            "range": "± 383626.3186622477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25216.80412371134,
            "unit": "ns",
            "range": "± 9121.270607348673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116498.15789473684,
            "unit": "ns",
            "range": "± 19025.005175896513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126465.12765957447,
            "unit": "ns",
            "range": "± 23783.829436198757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136197.28125,
            "unit": "ns",
            "range": "± 22205.269767001908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6860.301075268817,
            "unit": "ns",
            "range": "± 1272.4823376663207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28831.938775510203,
            "unit": "ns",
            "range": "± 10904.58083144946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1812421.39,
            "unit": "ns",
            "range": "± 226065.73511675018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3477980.7422680412,
            "unit": "ns",
            "range": "± 376206.0772503405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2359699.4897959186,
            "unit": "ns",
            "range": "± 195097.99056309529"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6433411.138297873,
            "unit": "ns",
            "range": "± 441521.55988558236"
          }
        ]
      }
    ]
  }
}