window.BENCHMARK_DATA = {
  "lastUpdate": 1691482816901,
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
      }
    ]
  }
}