window.BENCHMARK_DATA = {
  "lastUpdate": 1702391698019,
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
          "id": "5e119e4c89abc2575593bef0141eab83e735888b",
          "message": "Updated PublicKeyType",
          "timestamp": "2023-12-12T23:19:39+09:00",
          "tree_id": "10154c1d6706819011527e83383a4d02d77757be",
          "url": "https://github.com/greymistcube/libplanet/commit/5e119e4c89abc2575593bef0141eab83e735888b"
        },
        "date": 1702391568514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010600,
            "unit": "ns",
            "range": "± 104190.37839212865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1820760.5633802817,
            "unit": "ns",
            "range": "± 82965.26033548747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1432259.793814433,
            "unit": "ns",
            "range": "± 121994.67513976601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5341594.871794872,
            "unit": "ns",
            "range": "± 185442.64959495945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37004.945054945056,
            "unit": "ns",
            "range": "± 2855.2588415944097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5342900,
            "unit": "ns",
            "range": "± 94661.12637272941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13439321.42857143,
            "unit": "ns",
            "range": "± 208926.82995423366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34745164.28571428,
            "unit": "ns",
            "range": "± 287471.41558808903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67117733.33333333,
            "unit": "ns",
            "range": "± 692485.330083571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134681880,
            "unit": "ns",
            "range": "± 1231319.2537158788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3315030.2884615385,
            "unit": "ns",
            "range": "± 21437.94323202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063318.3072916667,
            "unit": "ns",
            "range": "± 4610.687267368809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740977.9854910715,
            "unit": "ns",
            "range": "± 2182.7308105435227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946958.125,
            "unit": "ns",
            "range": "± 2625.67340107413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625080.5385044643,
            "unit": "ns",
            "range": "± 1280.9853677647382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566240.9635416666,
            "unit": "ns",
            "range": "± 731.7001911994132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2212933.3333333335,
            "unit": "ns",
            "range": "± 41900.98973981964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2335755.7377049183,
            "unit": "ns",
            "range": "± 102542.79029522288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2892392.1875,
            "unit": "ns",
            "range": "± 120250.48764668638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2892310.101010101,
            "unit": "ns",
            "range": "± 310175.88443443435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6173186.206896552,
            "unit": "ns",
            "range": "± 171582.91149540906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183640.6779661017,
            "unit": "ns",
            "range": "± 7838.369786616828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175076.62337662338,
            "unit": "ns",
            "range": "± 7725.332493336726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143688.46153846153,
            "unit": "ns",
            "range": "± 3807.6057488218944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2829053.3333333335,
            "unit": "ns",
            "range": "± 28711.517516412085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2585728.5714285714,
            "unit": "ns",
            "range": "± 24217.616873527568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12841.304347826086,
            "unit": "ns",
            "range": "± 1602.1381437408074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61956.25,
            "unit": "ns",
            "range": "± 7302.599573187331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51961.85567010309,
            "unit": "ns",
            "range": "± 5572.1301151910075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70090.625,
            "unit": "ns",
            "range": "± 16198.440978426874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3543.157894736842,
            "unit": "ns",
            "range": "± 763.7606609039622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12620.430107526881,
            "unit": "ns",
            "range": "± 1690.610845342012"
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
          "id": "65bb38b9639f64f14feed57d2591029fec102d2d",
          "message": "Changelog",
          "timestamp": "2023-12-12T23:22:30+09:00",
          "tree_id": "0fa6d0e6cbcf60bfa543a2fe18cb6a1cea6ff2c1",
          "url": "https://github.com/greymistcube/libplanet/commit/65bb38b9639f64f14feed57d2591029fec102d2d"
        },
        "date": 1702391678907,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952106.1855670103,
            "unit": "ns",
            "range": "± 97072.020958703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1723206.7567567567,
            "unit": "ns",
            "range": "± 81820.5174574722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1310817.7419354839,
            "unit": "ns",
            "range": "± 79251.29838641558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5205393.548387097,
            "unit": "ns",
            "range": "± 155143.04783109872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34609.756097560974,
            "unit": "ns",
            "range": "± 1830.9148867419328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5074392.307692308,
            "unit": "ns",
            "range": "± 35051.78220714941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13428966.666666666,
            "unit": "ns",
            "range": "± 142625.46189566707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33581650,
            "unit": "ns",
            "range": "± 420803.0047969642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67059053.333333336,
            "unit": "ns",
            "range": "± 1246503.7211947588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135712840,
            "unit": "ns",
            "range": "± 2017927.4770346503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285113.309151786,
            "unit": "ns",
            "range": "± 18325.83480694197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038788.3370535715,
            "unit": "ns",
            "range": "± 2803.0564597629855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746175.4296875,
            "unit": "ns",
            "range": "± 1578.5108671549203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1907518.1640625,
            "unit": "ns",
            "range": "± 3238.0918627419087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618953.6263020834,
            "unit": "ns",
            "range": "± 716.8755201428977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561879.736328125,
            "unit": "ns",
            "range": "± 1118.3552934642898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2155070.9677419355,
            "unit": "ns",
            "range": "± 93949.7134189729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2344000,
            "unit": "ns",
            "range": "± 41343.698777098165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2805547.619047619,
            "unit": "ns",
            "range": "± 65756.75341018305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2675680.701754386,
            "unit": "ns",
            "range": "± 113950.00382153272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6406668.493150685,
            "unit": "ns",
            "range": "± 318947.18775506475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175055.76923076922,
            "unit": "ns",
            "range": "± 6306.560961521551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170976.19047619047,
            "unit": "ns",
            "range": "± 7496.164918093963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148910.41666666666,
            "unit": "ns",
            "range": "± 5617.875709044257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2770614.285714286,
            "unit": "ns",
            "range": "± 34127.31495992069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2597980,
            "unit": "ns",
            "range": "± 36967.595849028956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13175.280898876405,
            "unit": "ns",
            "range": "± 1325.9885590892354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61536.84210526316,
            "unit": "ns",
            "range": "± 6320.198162655152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50488.541666666664,
            "unit": "ns",
            "range": "± 3194.662317767154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66367.67676767676,
            "unit": "ns",
            "range": "± 16354.902081594262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2675,
            "unit": "ns",
            "range": "± 492.68330812527347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12352.173913043478,
            "unit": "ns",
            "range": "± 1708.1883122423078"
          }
        ]
      }
    ]
  }
}