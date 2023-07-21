window.BENCHMARK_DATA = {
  "lastUpdate": 1689920775099,
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
          "id": "44bbbc01223ed47ee09dd0d2667ecd9c5166367d",
          "message": "Hide TxResult.FungibleAssetsDelta",
          "timestamp": "2023-07-20T16:39:16+09:00",
          "tree_id": "77f12de69d9e969b1c90fff7a2b3bfb978853b6c",
          "url": "https://github.com/greymistcube/libplanet/commit/44bbbc01223ed47ee09dd0d2667ecd9c5166367d"
        },
        "date": 1689839822123,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9255316.2,
            "unit": "ns",
            "range": "± 142731.642153178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24883519.766666666,
            "unit": "ns",
            "range": "± 226506.678310712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60257795.46666667,
            "unit": "ns",
            "range": "± 576300.4960977844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119300962.46666667,
            "unit": "ns",
            "range": "± 1803329.9484139201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241571508.92307693,
            "unit": "ns",
            "range": "± 2850385.14255315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79933.9255319149,
            "unit": "ns",
            "range": "± 8894.808175462013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386794.1458333333,
            "unit": "ns",
            "range": "± 12036.811278085139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362224.4367816092,
            "unit": "ns",
            "range": "± 19058.744151811596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323201.55319148937,
            "unit": "ns",
            "range": "± 18185.905224980663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4850056.071428572,
            "unit": "ns",
            "range": "± 214447.62279202833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4475586.735294118,
            "unit": "ns",
            "range": "± 90578.39196417751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21185.505494505494,
            "unit": "ns",
            "range": "± 1769.7656553819425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98678.31914893616,
            "unit": "ns",
            "range": "± 7061.219345816762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119382.09090909091,
            "unit": "ns",
            "range": "± 9994.094617640214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115326.21739130435,
            "unit": "ns",
            "range": "± 12151.722506965325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6277.159574468085,
            "unit": "ns",
            "range": "± 840.3160606516242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20254.979166666668,
            "unit": "ns",
            "range": "± 1960.3939452605016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1972570.969387755,
            "unit": "ns",
            "range": "± 211706.68190553802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3643358.037735849,
            "unit": "ns",
            "range": "± 150960.07041802123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504114.65625,
            "unit": "ns",
            "range": "± 235922.1460214913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7144757.513513514,
            "unit": "ns",
            "range": "± 355152.7711775246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3971139.827586207,
            "unit": "ns",
            "range": "± 172206.69717220924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4254444.766666667,
            "unit": "ns",
            "range": "± 121542.86810682614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5306097.136363637,
            "unit": "ns",
            "range": "± 95803.66779900664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4934899.205882353,
            "unit": "ns",
            "range": "± 99109.25116113323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8584879.818181818,
            "unit": "ns",
            "range": "± 264542.84720750514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6817287.6890625,
            "unit": "ns",
            "range": "± 106628.51394226201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2305691.2239583335,
            "unit": "ns",
            "range": "± 32382.607310038915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1478550.802734375,
            "unit": "ns",
            "range": "± 13081.940074339369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2806537.0700827204,
            "unit": "ns",
            "range": "± 56686.21054900946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993089.2478376116,
            "unit": "ns",
            "range": "± 27594.819957462467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 870298.0945963542,
            "unit": "ns",
            "range": "± 8718.439172480663"
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
          "id": "0600ee8da3e10627bf0993019e0cc19126ed1725",
          "message": "Remove TxResult.FungibleAssetsDelta",
          "timestamp": "2023-07-21T15:11:54+09:00",
          "tree_id": "99cb96caede6dd63ee469ff38aeb29778f33a921",
          "url": "https://github.com/greymistcube/libplanet/commit/0600ee8da3e10627bf0993019e0cc19126ed1725"
        },
        "date": 1689920759089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8058919.928571428,
            "unit": "ns",
            "range": "± 70323.81286860889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20810130.57894737,
            "unit": "ns",
            "range": "± 452194.5256869629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57195552,
            "unit": "ns",
            "range": "± 1052493.8512198403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99454822.78571428,
            "unit": "ns",
            "range": "± 779459.955222863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202246950.64285713,
            "unit": "ns",
            "range": "± 2020811.8059568424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59440.43010752688,
            "unit": "ns",
            "range": "± 3949.028626840458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316663.2926829268,
            "unit": "ns",
            "range": "± 16155.408206945198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301128.01470588235,
            "unit": "ns",
            "range": "± 14387.005842745164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309162.3333333333,
            "unit": "ns",
            "range": "± 11305.568780346897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4222723.357142857,
            "unit": "ns",
            "range": "± 60699.410783614876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3815304.466666667,
            "unit": "ns",
            "range": "± 63063.63491162452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20140.34375,
            "unit": "ns",
            "range": "± 2124.493330695828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91399.14893617021,
            "unit": "ns",
            "range": "± 7059.445211010347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101100.6875,
            "unit": "ns",
            "range": "± 6530.065485788348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119325.26804123711,
            "unit": "ns",
            "range": "± 14963.267099881816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6422.2,
            "unit": "ns",
            "range": "± 806.0651813567838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19209.968085106382,
            "unit": "ns",
            "range": "± 2521.5152753685084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640907.3383838383,
            "unit": "ns",
            "range": "± 192734.66388152557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3075261.1315789474,
            "unit": "ns",
            "range": "± 149917.7832797112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110643.43877551,
            "unit": "ns",
            "range": "± 194260.18292916197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5944708.316326531,
            "unit": "ns",
            "range": "± 197407.4401385868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3253112.772727273,
            "unit": "ns",
            "range": "± 78928.55662842117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3592020.3,
            "unit": "ns",
            "range": "± 50686.7909761226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4455516.224137931,
            "unit": "ns",
            "range": "± 111512.46498546908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3944580.442857143,
            "unit": "ns",
            "range": "± 120007.78833376334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7142198.607142857,
            "unit": "ns",
            "range": "± 136988.04097015166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6534715.746651785,
            "unit": "ns",
            "range": "± 32153.537238297977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956549.2896205357,
            "unit": "ns",
            "range": "± 2956.792883103342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1254222.6225961538,
            "unit": "ns",
            "range": "± 1640.250627586702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2446624.9606584823,
            "unit": "ns",
            "range": "± 31362.88009713713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795091.5541992188,
            "unit": "ns",
            "range": "± 2776.7075545772777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815010.5168619792,
            "unit": "ns",
            "range": "± 4785.447844484701"
          }
        ]
      }
    ]
  }
}