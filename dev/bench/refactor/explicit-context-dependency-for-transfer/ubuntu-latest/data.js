window.BENCHMARK_DATA = {
  "lastUpdate": 1687397264861,
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
      }
    ]
  }
}