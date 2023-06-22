window.BENCHMARK_DATA = {
  "lastUpdate": 1687416687734,
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
          "id": "8ef6b82ee106eabe33f4e852e2475ead39de2a92",
          "message": "Deleted implV0",
          "timestamp": "2023-06-21T20:58:34+09:00",
          "tree_id": "cc57646a2cb706c68e67f137d2688c8b7073abdd",
          "url": "https://github.com/greymistcube/libplanet/commit/8ef6b82ee106eabe33f4e852e2475ead39de2a92"
        },
        "date": 1687351427859,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452740.3513513515,
            "unit": "ns",
            "range": "± 115415.44979965402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3653549.8125,
            "unit": "ns",
            "range": "± 143206.3122862385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4420609.392857143,
            "unit": "ns",
            "range": "± 126569.09676546298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4837415.444444444,
            "unit": "ns",
            "range": "± 132773.04461759413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7130522.6875,
            "unit": "ns",
            "range": "± 139161.60676217117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8409150.666666666,
            "unit": "ns",
            "range": "± 103784.82135489113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23324314.533333335,
            "unit": "ns",
            "range": "± 212489.488266686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54986065.4,
            "unit": "ns",
            "range": "± 979041.3678445725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114360166.53333333,
            "unit": "ns",
            "range": "± 1151473.1653987467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243279411.07142857,
            "unit": "ns",
            "range": "± 1186344.7270938165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295566.3611111111,
            "unit": "ns",
            "range": "± 9194.823842491189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281620.14285714284,
            "unit": "ns",
            "range": "± 9253.527467803971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254321.41975308643,
            "unit": "ns",
            "range": "± 13311.381915361191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4436997.733333333,
            "unit": "ns",
            "range": "± 62746.66818413169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4098746,
            "unit": "ns",
            "range": "± 61783.06768732954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21484.5,
            "unit": "ns",
            "range": "± 1855.208735595965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89747.21794871795,
            "unit": "ns",
            "range": "± 4424.263662111634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79374.58,
            "unit": "ns",
            "range": "± 3213.392638407487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105098.78571428571,
            "unit": "ns",
            "range": "± 14537.153445355607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5050.546391752578,
            "unit": "ns",
            "range": "± 828.2962812884168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23645.505154639177,
            "unit": "ns",
            "range": "± 3769.345591754267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51882.12643678161,
            "unit": "ns",
            "range": "± 2857.9730408862333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6052785.6234375,
            "unit": "ns",
            "range": "± 23526.58049126676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904092.0158854167,
            "unit": "ns",
            "range": "± 4253.496992748073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405601.2131510417,
            "unit": "ns",
            "range": "± 3607.6516906072293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682303.4899553573,
            "unit": "ns",
            "range": "± 6602.6840152847835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834931.7041666667,
            "unit": "ns",
            "range": "± 1393.5009071489721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765563.9213541667,
            "unit": "ns",
            "range": "± 513.7812033945602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511580.7647058824,
            "unit": "ns",
            "range": "± 81341.5919092129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2865532.652173913,
            "unit": "ns",
            "range": "± 109847.21029931984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2400550.471264368,
            "unit": "ns",
            "range": "± 129604.27781132942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5675238.909090909,
            "unit": "ns",
            "range": "± 177041.6229297089"
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
          "id": "0c7e428bf41b5bdb8791aad1965a0b1fae2445ea",
          "message": "Changelog",
          "timestamp": "2023-06-22T10:14:26+09:00",
          "tree_id": "b61e4d6e3506554bf78247bdfd693240494c1801",
          "url": "https://github.com/greymistcube/libplanet/commit/0c7e428bf41b5bdb8791aad1965a0b1fae2445ea"
        },
        "date": 1687397257371,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3238363.3076923075,
            "unit": "ns",
            "range": "± 38950.549768017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374710.975609756,
            "unit": "ns",
            "range": "± 109279.55364556717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4408074.590909091,
            "unit": "ns",
            "range": "± 106510.90981708292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4154547.4375,
            "unit": "ns",
            "range": "± 86603.65266637002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6897405.125,
            "unit": "ns",
            "range": "± 174419.031971188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6421192.665625,
            "unit": "ns",
            "range": "± 17068.495512018595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865432.8365384615,
            "unit": "ns",
            "range": "± 3029.4030639024722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357005.3018229166,
            "unit": "ns",
            "range": "± 765.2027199940139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587182.87890625,
            "unit": "ns",
            "range": "± 1979.2319570808618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812280.0872395834,
            "unit": "ns",
            "range": "± 461.784258515637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737528.8084635417,
            "unit": "ns",
            "range": "± 458.97730882340136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291059.4918032787,
            "unit": "ns",
            "range": "± 12212.917333194051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269638.72340425535,
            "unit": "ns",
            "range": "± 9270.470279572679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237319.3125,
            "unit": "ns",
            "range": "± 7068.897077988443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4230544.533333333,
            "unit": "ns",
            "range": "± 31362.764960713404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3827793.6428571427,
            "unit": "ns",
            "range": "± 23572.91854456701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15847.410526315789,
            "unit": "ns",
            "range": "± 1259.0078286706464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86602.0701754386,
            "unit": "ns",
            "range": "± 3517.672662325644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72692.61538461539,
            "unit": "ns",
            "range": "± 879.9003294371412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82009.88732394367,
            "unit": "ns",
            "range": "± 2901.6617778157784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4654.265957446809,
            "unit": "ns",
            "range": "± 497.66541369672626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16920.17525773196,
            "unit": "ns",
            "range": "± 1496.1454781809966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374716.34375,
            "unit": "ns",
            "range": "± 88151.80566545753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2603201.8421052634,
            "unit": "ns",
            "range": "± 57088.77351134144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202660.6395348837,
            "unit": "ns",
            "range": "± 119222.76370045454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5331004,
            "unit": "ns",
            "range": "± 150673.46907349964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48116.593406593405,
            "unit": "ns",
            "range": "± 2827.6785845087447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7793634,
            "unit": "ns",
            "range": "± 67902.4300375178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20164374.666666668,
            "unit": "ns",
            "range": "± 53244.681560920326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51915555.13333333,
            "unit": "ns",
            "range": "± 393519.30644031515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103305248.92307693,
            "unit": "ns",
            "range": "± 308630.1077086349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204077784.35714287,
            "unit": "ns",
            "range": "± 1924862.2752838351"
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
          "id": "ce86eb5eb1e6c075e5c7d83a99d0e603cffd4f75",
          "message": "Changelog",
          "timestamp": "2023-06-22T11:35:55+09:00",
          "tree_id": "b61e4d6e3506554bf78247bdfd693240494c1801",
          "url": "https://github.com/greymistcube/libplanet/commit/ce86eb5eb1e6c075e5c7d83a99d0e603cffd4f75"
        },
        "date": 1687402667366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4093566.234042553,
            "unit": "ns",
            "range": "± 434082.88284999673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3627323.8,
            "unit": "ns",
            "range": "± 449646.4065908168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4530774.074468086,
            "unit": "ns",
            "range": "± 562847.4190913849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5144061.8125,
            "unit": "ns",
            "range": "± 381845.8327303618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7669096.5,
            "unit": "ns",
            "range": "± 1006825.9160800122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6480522.746394231,
            "unit": "ns",
            "range": "± 154895.12473559848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2127490.9255756577,
            "unit": "ns",
            "range": "± 120795.71531004224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473967.8023120777,
            "unit": "ns",
            "range": "± 73809.61514075326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2809128.524921875,
            "unit": "ns",
            "range": "± 179133.42559967158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906701.5890174279,
            "unit": "ns",
            "range": "± 46792.16101757266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802137.0280949519,
            "unit": "ns",
            "range": "± 13281.605942329552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332323.10101010103,
            "unit": "ns",
            "range": "± 39127.595479795455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381649.8829787234,
            "unit": "ns",
            "range": "± 45382.09450941448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282775.6907216495,
            "unit": "ns",
            "range": "± 43062.610051954405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4281893.589473684,
            "unit": "ns",
            "range": "± 468329.67315766786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4008959.898989899,
            "unit": "ns",
            "range": "± 507331.4367090162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27436.515151515152,
            "unit": "ns",
            "range": "± 11243.283079936413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125925.47422680413,
            "unit": "ns",
            "range": "± 16605.195260126664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127342.65,
            "unit": "ns",
            "range": "± 27894.667308828102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120437.46315789473,
            "unit": "ns",
            "range": "± 23924.36577954399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6119.493506493506,
            "unit": "ns",
            "range": "± 2371.05112501972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27273.838383838385,
            "unit": "ns",
            "range": "± 10515.171183315562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780563.5567010308,
            "unit": "ns",
            "range": "± 175384.02844739557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3735432.4736842103,
            "unit": "ns",
            "range": "± 282583.582731742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2991914.2333333334,
            "unit": "ns",
            "range": "± 132106.7868733943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7496237.032786885,
            "unit": "ns",
            "range": "± 337459.96567054524"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63330.88775510204,
            "unit": "ns",
            "range": "± 17087.353535376427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8772391.446808511,
            "unit": "ns",
            "range": "± 555421.048001039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25557020.69072165,
            "unit": "ns",
            "range": "± 2904307.8889750326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72002313.20833333,
            "unit": "ns",
            "range": "± 1784458.4406586774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141344542.3,
            "unit": "ns",
            "range": "± 3176127.9235692183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229706774.97959185,
            "unit": "ns",
            "range": "± 21689852.898717076"
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
          "id": "b63d5b58138df71cd58163ac92e23e9c69cfab65",
          "message": "Changelog addendum",
          "timestamp": "2023-06-22T15:34:53+09:00",
          "tree_id": "ff25fa06c266ad68839489aced986fef7b0b8353",
          "url": "https://github.com/greymistcube/libplanet/commit/b63d5b58138df71cd58163ac92e23e9c69cfab65"
        },
        "date": 1687416678790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4188467.2972972975,
            "unit": "ns",
            "range": "± 126634.39608154232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4508089.166666667,
            "unit": "ns",
            "range": "± 138352.9436181247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5405053.5,
            "unit": "ns",
            "range": "± 160708.66789870377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5427356.7,
            "unit": "ns",
            "range": "± 156703.22125997194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8633719.55,
            "unit": "ns",
            "range": "± 300420.09733209107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7241169.868229167,
            "unit": "ns",
            "range": "± 44214.908724403685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2317715.607552083,
            "unit": "ns",
            "range": "± 8531.126338358406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1635076.9376302084,
            "unit": "ns",
            "range": "± 6177.748168228817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163927.664322917,
            "unit": "ns",
            "range": "± 8705.78548554401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990907.8888020833,
            "unit": "ns",
            "range": "± 3290.950491124466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 914413.078125,
            "unit": "ns",
            "range": "± 2038.4046373934084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341993.3548387097,
            "unit": "ns",
            "range": "± 10316.785418428188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332035.3095238095,
            "unit": "ns",
            "range": "± 11970.18593186095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301987.3125,
            "unit": "ns",
            "range": "± 13812.201103711352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5488656.5,
            "unit": "ns",
            "range": "± 43402.77728573811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5038645.8,
            "unit": "ns",
            "range": "± 49907.15063452474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23209.5,
            "unit": "ns",
            "range": "± 2112.9119729360104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103183.81521739131,
            "unit": "ns",
            "range": "± 6177.10865705668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93998.76288659793,
            "unit": "ns",
            "range": "± 6954.395625509685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112023.89795918367,
            "unit": "ns",
            "range": "± 14569.893345978606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6980.739583333333,
            "unit": "ns",
            "range": "± 896.2626406042943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22801.98947368421,
            "unit": "ns",
            "range": "± 1706.8971693387182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1746103.3846153845,
            "unit": "ns",
            "range": "± 96040.07264109074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3438422.152173913,
            "unit": "ns",
            "range": "± 193462.1753713246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2816942.759493671,
            "unit": "ns",
            "range": "± 144821.8147294058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6900062.896103896,
            "unit": "ns",
            "range": "± 353272.4433812263"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54585.2688172043,
            "unit": "ns",
            "range": "± 3960.913698772767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9644521.133333333,
            "unit": "ns",
            "range": "± 122062.98372144175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26741936.133333333,
            "unit": "ns",
            "range": "± 337890.1173883238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65111042.93333333,
            "unit": "ns",
            "range": "± 1116409.1330654384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131103054.7,
            "unit": "ns",
            "range": "± 1237151.2239512308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266691469.06666666,
            "unit": "ns",
            "range": "± 4357910.7341207415"
          }
        ]
      }
    ]
  }
}