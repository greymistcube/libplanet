window.BENCHMARK_DATA = {
  "lastUpdate": 1690776078220,
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
          "id": "be3fe0078df1c19e81eef47a5102105dabbdc1d3",
          "message": "Remove TxResult.ExceptionMetadata",
          "timestamp": "2023-07-26T18:14:40+09:00",
          "tree_id": "5f03c974ba0a194d2d4bb55150e88cbf9e78b809",
          "url": "https://github.com/greymistcube/libplanet/commit/be3fe0078df1c19e81eef47a5102105dabbdc1d3"
        },
        "date": 1690363994859,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8199038.8,
            "unit": "ns",
            "range": "± 258233.06316658988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21233717.089041095,
            "unit": "ns",
            "range": "± 768790.3636942302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52177875.28571428,
            "unit": "ns",
            "range": "± 669174.3837152187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94112201.92307693,
            "unit": "ns",
            "range": "± 1459434.1865598382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202997079.5172414,
            "unit": "ns",
            "range": "± 5911339.8853775505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77099.38043478261,
            "unit": "ns",
            "range": "± 13966.666212644917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339022.9347826087,
            "unit": "ns",
            "range": "± 22474.29017339364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319126.9888888889,
            "unit": "ns",
            "range": "± 18063.787810936188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315645.1935483871,
            "unit": "ns",
            "range": "± 9243.001180783058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4281619.5,
            "unit": "ns",
            "range": "± 59013.76270380951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970327.28125,
            "unit": "ns",
            "range": "± 123065.83055899965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23366.05319148936,
            "unit": "ns",
            "range": "± 4100.857648605897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113869.55555555556,
            "unit": "ns",
            "range": "± 16637.299210044133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115830.05319148937,
            "unit": "ns",
            "range": "± 11544.330540174087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133108.73684210525,
            "unit": "ns",
            "range": "± 21782.62709582957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7358.614583333333,
            "unit": "ns",
            "range": "± 890.6770679455236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22053.040404040403,
            "unit": "ns",
            "range": "± 4349.252133505234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1600525.530612245,
            "unit": "ns",
            "range": "± 122950.06482494355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3221581.6979166665,
            "unit": "ns",
            "range": "± 345707.69858329796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2304627.3571428573,
            "unit": "ns",
            "range": "± 310040.75941210496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7961661.819148936,
            "unit": "ns",
            "range": "± 1808801.3810008091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3257962.913043478,
            "unit": "ns",
            "range": "± 204311.63155555647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3327602.5588235296,
            "unit": "ns",
            "range": "± 103077.68558035487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4372305.386363637,
            "unit": "ns",
            "range": "± 154414.1465966536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3730130.126984127,
            "unit": "ns",
            "range": "± 169686.68283505412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7396300.949367088,
            "unit": "ns",
            "range": "± 383246.84467217326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7335560.3017578125,
            "unit": "ns",
            "range": "± 135310.8411920499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2190317.0447095786,
            "unit": "ns",
            "range": "± 126169.89371655401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367822.6923549108,
            "unit": "ns",
            "range": "± 44088.270293375834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2887812.4748086734,
            "unit": "ns",
            "range": "± 191541.4829599443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887652.917629076,
            "unit": "ns",
            "range": "± 21766.71539670064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821609.4612165178,
            "unit": "ns",
            "range": "± 13646.57509352694"
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
          "id": "396af7b8c7b1697feef8bfcff45e47e07f436bfc",
          "message": "Fix tests",
          "timestamp": "2023-07-28T14:45:58+09:00",
          "tree_id": "8ac2bc6ff6242084f032f99a5fecfeba575993fd",
          "url": "https://github.com/greymistcube/libplanet/commit/396af7b8c7b1697feef8bfcff45e47e07f436bfc"
        },
        "date": 1690524489576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8772239.785714285,
            "unit": "ns",
            "range": "± 123437.07536989696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22759582.59322034,
            "unit": "ns",
            "range": "± 1007176.7622150906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70905347.93902439,
            "unit": "ns",
            "range": "± 33206091.886925817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113101644.6724138,
            "unit": "ns",
            "range": "± 3202787.3912849952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227231743.30769232,
            "unit": "ns",
            "range": "± 3607145.4926633327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74586.3953488372,
            "unit": "ns",
            "range": "± 8219.5453320357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 414788.1979166667,
            "unit": "ns",
            "range": "± 62289.92298828705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371479.0842105263,
            "unit": "ns",
            "range": "± 51687.90884387186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 351846.91397849465,
            "unit": "ns",
            "range": "± 31571.514863827295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4622439.795698925,
            "unit": "ns",
            "range": "± 290152.4963606491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002014.203703704,
            "unit": "ns",
            "range": "± 112072.33934617505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21939.077777777777,
            "unit": "ns",
            "range": "± 2465.8547346780856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119982.71505376344,
            "unit": "ns",
            "range": "± 16280.523114692349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136584.2688172043,
            "unit": "ns",
            "range": "± 17520.41801922135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142182.27659574468,
            "unit": "ns",
            "range": "± 20086.992057480777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9559.1,
            "unit": "ns",
            "range": "± 1343.8500454592584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24902.793478260868,
            "unit": "ns",
            "range": "± 4882.730456939215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2037778.021978022,
            "unit": "ns",
            "range": "± 415915.6484785501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3478641.7967032967,
            "unit": "ns",
            "range": "± 527222.7238746132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3084286.804347826,
            "unit": "ns",
            "range": "± 866074.6505570724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8761053.305263158,
            "unit": "ns",
            "range": "± 3421100.8596912287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3496939.659340659,
            "unit": "ns",
            "range": "± 278400.0099675613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3601572.7333333334,
            "unit": "ns",
            "range": "± 223842.9650149177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4563316.192307692,
            "unit": "ns",
            "range": "± 109976.37079400982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4227573.172043011,
            "unit": "ns",
            "range": "± 327125.23246266507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8092793.758064516,
            "unit": "ns",
            "range": "± 659470.478448477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8003268.538646941,
            "unit": "ns",
            "range": "± 900285.5050715653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2100787.46875,
            "unit": "ns",
            "range": "± 59900.48660516769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374788.0704520089,
            "unit": "ns",
            "range": "± 23247.67597130998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3010818.598758013,
            "unit": "ns",
            "range": "± 155072.82447645243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 988913.6430555555,
            "unit": "ns",
            "range": "± 37330.40741580969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918366.0512134989,
            "unit": "ns",
            "range": "± 41244.45052970639"
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
          "id": "5ecfc93390387d280ea39a50d70df9bf84900c64",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-07-31T12:34:09+09:00",
          "tree_id": "5f03c974ba0a194d2d4bb55150e88cbf9e78b809",
          "url": "https://github.com/greymistcube/libplanet/commit/5ecfc93390387d280ea39a50d70df9bf84900c64"
        },
        "date": 1690776060904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7726040.428571428,
            "unit": "ns",
            "range": "± 62621.99064682812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18635208.64285714,
            "unit": "ns",
            "range": "± 243567.6171402156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46748435.277777776,
            "unit": "ns",
            "range": "± 997980.0384408736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93475637.42857143,
            "unit": "ns",
            "range": "± 650825.2833074817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189290647.93333334,
            "unit": "ns",
            "range": "± 2112768.852147764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55789.09574468085,
            "unit": "ns",
            "range": "± 4393.433323390544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303404.7419354839,
            "unit": "ns",
            "range": "± 19654.29992554081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290308.652173913,
            "unit": "ns",
            "range": "± 17815.3463521459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285819.7972972973,
            "unit": "ns",
            "range": "± 9415.084285528388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4087854.117647059,
            "unit": "ns",
            "range": "± 80584.61085474257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3652481.653846154,
            "unit": "ns",
            "range": "± 98398.75376322295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17925.091954022988,
            "unit": "ns",
            "range": "± 1726.3739835218269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85236.39247311828,
            "unit": "ns",
            "range": "± 7362.885258927941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77339.92391304347,
            "unit": "ns",
            "range": "± 6623.431329497176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100326.85263157895,
            "unit": "ns",
            "range": "± 14411.955597637132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5225.597701149425,
            "unit": "ns",
            "range": "± 1181.484181509615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16840.45348837209,
            "unit": "ns",
            "range": "± 1926.8125807510778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479330.5578947368,
            "unit": "ns",
            "range": "± 155528.24420778258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2912456.2444444443,
            "unit": "ns",
            "range": "± 208993.2914155467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984653.706521739,
            "unit": "ns",
            "range": "± 157718.88827741073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5726804.483606557,
            "unit": "ns",
            "range": "± 237885.7550929642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3056984.2708333335,
            "unit": "ns",
            "range": "± 111778.79101081737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3249041.7627118644,
            "unit": "ns",
            "range": "± 142985.03306873367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4227497.704225352,
            "unit": "ns",
            "range": "± 204410.37059792905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3692272.3292682925,
            "unit": "ns",
            "range": "± 195027.5498979697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6790040.6,
            "unit": "ns",
            "range": "± 226643.10423227315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6321072.552455357,
            "unit": "ns",
            "range": "± 35382.90726406982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885197.78046875,
            "unit": "ns",
            "range": "± 20580.857058338024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1221237.7236979166,
            "unit": "ns",
            "range": "± 8636.18553650741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2352968.048958333,
            "unit": "ns",
            "range": "± 17371.4190747369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812785.5615234375,
            "unit": "ns",
            "range": "± 3755.5217151225984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750619.4076171875,
            "unit": "ns",
            "range": "± 6466.268818746798"
          }
        ]
      }
    ]
  }
}