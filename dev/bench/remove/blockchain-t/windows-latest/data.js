window.BENCHMARK_DATA = {
  "lastUpdate": 1684400044724,
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
          "id": "4cee5a03eb1b4fc8fd2c2ac78089220e7f5184da",
          "message": "Cleanup",
          "timestamp": "2023-05-18T17:31:50+09:00",
          "tree_id": "b8f88932d597c482d3db31fe2450c40a34019690",
          "url": "https://github.com/greymistcube/libplanet/commit/4cee5a03eb1b4fc8fd2c2ac78089220e7f5184da"
        },
        "date": 1684399826544,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617088.5416666667,
            "unit": "ns",
            "range": "± 137730.4926447541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3082898.795180723,
            "unit": "ns",
            "range": "± 163889.2163701845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2555218.75,
            "unit": "ns",
            "range": "± 182943.06638808065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6181592.647058823,
            "unit": "ns",
            "range": "± 294844.1704875652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55260,
            "unit": "ns",
            "range": "± 3813.7879756751363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8489737.5,
            "unit": "ns",
            "range": "± 257842.02434073665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23977267.391304348,
            "unit": "ns",
            "range": "± 915221.173525066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60201787.5,
            "unit": "ns",
            "range": "± 1856980.8955103233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120828530.43478261,
            "unit": "ns",
            "range": "± 3026023.2306136447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240274520,
            "unit": "ns",
            "range": "± 4332232.059672836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5892413.895089285,
            "unit": "ns",
            "range": "± 64035.73733840619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867377.845982143,
            "unit": "ns",
            "range": "± 28092.857502655006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439763.0208333333,
            "unit": "ns",
            "range": "± 24917.273464198744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3180069.831730769,
            "unit": "ns",
            "range": "± 38481.39530514962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014922.2916666666,
            "unit": "ns",
            "range": "± 11130.889275957376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918621.3491586539,
            "unit": "ns",
            "range": "± 6907.558778544079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760310.465116279,
            "unit": "ns",
            "range": "± 128310.51647419143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3975475.5555555555,
            "unit": "ns",
            "range": "± 148866.7069372579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4874386.956521739,
            "unit": "ns",
            "range": "± 114207.18137087458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4944065.909090909,
            "unit": "ns",
            "range": "± 184847.71223295943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7779082.5,
            "unit": "ns",
            "range": "± 176630.33233644228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317147.61904761905,
            "unit": "ns",
            "range": "± 11341.984127519163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297231.8181818182,
            "unit": "ns",
            "range": "± 10991.15442922642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282311.4583333333,
            "unit": "ns",
            "range": "± 16277.222508392499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4767313.333333333,
            "unit": "ns",
            "range": "± 69077.39827455107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4334152.94117647,
            "unit": "ns",
            "range": "± 87496.56505862858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24531.25,
            "unit": "ns",
            "range": "± 2165.437235537579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104300,
            "unit": "ns",
            "range": "± 5733.008922402601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88353.01204819277,
            "unit": "ns",
            "range": "± 4720.178204299164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114996.90721649484,
            "unit": "ns",
            "range": "± 18594.205266741526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7165.979381443299,
            "unit": "ns",
            "range": "± 1315.0480502895884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22361.290322580644,
            "unit": "ns",
            "range": "± 2050.0812421899877"
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
          "id": "4d2fcc5472b8f2f01e5047eac91f02b32b4121af",
          "message": "Changelog",
          "timestamp": "2023-05-18T17:35:40+09:00",
          "tree_id": "fa8176e9b74d51837b5c4a29d6d2abfb42b86fe1",
          "url": "https://github.com/greymistcube/libplanet/commit/4d2fcc5472b8f2f01e5047eac91f02b32b4121af"
        },
        "date": 1684400019771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552378.494623656,
            "unit": "ns",
            "range": "± 114657.73154069042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895950.6024096385,
            "unit": "ns",
            "range": "± 153934.96280579962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2487782.1052631577,
            "unit": "ns",
            "range": "± 162826.89606028574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6252941.111111111,
            "unit": "ns",
            "range": "± 433449.62484659103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55602.15053763441,
            "unit": "ns",
            "range": "± 4015.594018936449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8268565.116279069,
            "unit": "ns",
            "range": "± 305880.6644706559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22241295.12195122,
            "unit": "ns",
            "range": "± 792616.8345900873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57135795.91836735,
            "unit": "ns",
            "range": "± 2279414.492890589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117991340.96385542,
            "unit": "ns",
            "range": "± 6253440.255747546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239978883.33333334,
            "unit": "ns",
            "range": "± 8607751.898821589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5801445,
            "unit": "ns",
            "range": "± 103045.33658338996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835024.1489955357,
            "unit": "ns",
            "range": "± 28573.88767040214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393251.328125,
            "unit": "ns",
            "range": "± 22395.684715206076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3168890.375,
            "unit": "ns",
            "range": "± 84324.63653972281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031733.681640625,
            "unit": "ns",
            "range": "± 23743.44790588893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939209.5635775862,
            "unit": "ns",
            "range": "± 27460.107757689275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3671618.1818181816,
            "unit": "ns",
            "range": "± 201644.8679462733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3852025.6097560977,
            "unit": "ns",
            "range": "± 203801.00243939584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4711932.352941177,
            "unit": "ns",
            "range": "± 223311.41259990746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4720627.659574468,
            "unit": "ns",
            "range": "± 277395.69129548897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7929636.98630137,
            "unit": "ns",
            "range": "± 389511.00380507344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307770.6896551724,
            "unit": "ns",
            "range": "± 13395.744396526983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287186.95652173914,
            "unit": "ns",
            "range": "± 13713.635475466168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272607.2916666667,
            "unit": "ns",
            "range": "± 20081.867939913864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4696303.125,
            "unit": "ns",
            "range": "± 132803.05934188608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4257752.631578947,
            "unit": "ns",
            "range": "± 89374.06017172402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22390.217391304348,
            "unit": "ns",
            "range": "± 2170.889308965828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100461.85567010309,
            "unit": "ns",
            "range": "± 9771.817931546066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84695.50561797753,
            "unit": "ns",
            "range": "± 5070.680206127084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106888.65979381443,
            "unit": "ns",
            "range": "± 16648.697873811958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6067.34693877551,
            "unit": "ns",
            "range": "± 829.0816569292265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20798.947368421053,
            "unit": "ns",
            "range": "± 1971.8494794331723"
          }
        ]
      }
    ]
  }
}