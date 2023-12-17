window.BENCHMARK_DATA = {
  "lastUpdate": 1702796787612,
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
          "id": "58ea35e612a35ec1856f95fef54cd68e2bb427b2",
          "message": "Changelog",
          "timestamp": "2023-12-17T15:51:31+09:00",
          "tree_id": "ced10db146ba60c319cd2347c1b6826f3177683c",
          "url": "https://github.com/greymistcube/libplanet/commit/58ea35e612a35ec1856f95fef54cd68e2bb427b2"
        },
        "date": 1702796627965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981456,
            "unit": "ns",
            "range": "± 99501.76925486543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1747571.4285714286,
            "unit": "ns",
            "range": "± 75133.66928175584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1356221.7171717172,
            "unit": "ns",
            "range": "± 102352.443357777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5450330,
            "unit": "ns",
            "range": "± 263714.94071539014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35091.20879120879,
            "unit": "ns",
            "range": "± 2702.7413388651803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5054423.076923077,
            "unit": "ns",
            "range": "± 41443.13682316518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13736006.666666666,
            "unit": "ns",
            "range": "± 197216.37669852684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32773657.14285714,
            "unit": "ns",
            "range": "± 363144.5499740071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67711206.66666667,
            "unit": "ns",
            "range": "± 1000964.6079562217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132330428.57142857,
            "unit": "ns",
            "range": "± 2095139.9734508547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3349167.109375,
            "unit": "ns",
            "range": "± 8975.62142251474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067234.66796875,
            "unit": "ns",
            "range": "± 2894.3893096536135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748237.3272235577,
            "unit": "ns",
            "range": "± 1281.2227033196825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943673.1863839286,
            "unit": "ns",
            "range": "± 4686.9219648286435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613375.78125,
            "unit": "ns",
            "range": "± 3705.111355141218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564771.9935825893,
            "unit": "ns",
            "range": "± 1126.9546405381666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2222930.303030303,
            "unit": "ns",
            "range": "± 99987.66226920503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2339410,
            "unit": "ns",
            "range": "± 52844.541236172525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2930172,
            "unit": "ns",
            "range": "± 116225.66199476969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2813122,
            "unit": "ns",
            "range": "± 109774.78064339788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6289822.7272727275,
            "unit": "ns",
            "range": "± 138012.72864630373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190142.66666666666,
            "unit": "ns",
            "range": "± 9249.95505224044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167340.9836065574,
            "unit": "ns",
            "range": "± 7426.133517274884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143288.88888888888,
            "unit": "ns",
            "range": "± 3934.5934530807176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2705635.714285714,
            "unit": "ns",
            "range": "± 43387.40701991867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2608553.3333333335,
            "unit": "ns",
            "range": "± 47529.85327539895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13673.626373626374,
            "unit": "ns",
            "range": "± 1900.8673555239732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62757.608695652176,
            "unit": "ns",
            "range": "± 5810.812840487663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52629.166666666664,
            "unit": "ns",
            "range": "± 5118.077695604632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74097.9797979798,
            "unit": "ns",
            "range": "± 15624.392101141086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3393.6170212765956,
            "unit": "ns",
            "range": "± 679.9444175003986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12975.78947368421,
            "unit": "ns",
            "range": "± 2022.3598912348054"
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
          "id": "badb04bc394e7a1c7d2152c6cf91dc81df973192",
          "message": "Fixed broken changelog due to reverting",
          "timestamp": "2023-12-17T15:53:14+09:00",
          "tree_id": "971b4e69b096d781d447d43150eecda2f505b388",
          "url": "https://github.com/greymistcube/libplanet/commit/badb04bc394e7a1c7d2152c6cf91dc81df973192"
        },
        "date": 1702796766398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1060406.1224489796,
            "unit": "ns",
            "range": "± 133539.02539083984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833447.619047619,
            "unit": "ns",
            "range": "± 66712.6683332635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1510023.469387755,
            "unit": "ns",
            "range": "± 147476.21496225023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5582207.692307692,
            "unit": "ns",
            "range": "± 227414.14397711644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35757.8125,
            "unit": "ns",
            "range": "± 1659.250613742948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5100285.714285715,
            "unit": "ns",
            "range": "± 61642.241475030205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13718053.846153846,
            "unit": "ns",
            "range": "± 92005.45831076741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34117969.23076923,
            "unit": "ns",
            "range": "± 250466.1367151768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68861178.57142857,
            "unit": "ns",
            "range": "± 605912.6037240423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139564942.85714287,
            "unit": "ns",
            "range": "± 1372645.9937565199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3302867.0052083335,
            "unit": "ns",
            "range": "± 10820.30119611108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1085355.1822916667,
            "unit": "ns",
            "range": "± 2304.369568986435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726095.1729910715,
            "unit": "ns",
            "range": "± 760.5910224713718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1864433.8641826923,
            "unit": "ns",
            "range": "± 1817.6552894615525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617096.4618389423,
            "unit": "ns",
            "range": "± 885.9639402377364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559224.4791666666,
            "unit": "ns",
            "range": "± 2222.066406217954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2213339.1304347827,
            "unit": "ns",
            "range": "± 77181.44992522741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284998.245614035,
            "unit": "ns",
            "range": "± 96111.43735125549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2875232,
            "unit": "ns",
            "range": "± 73533.8511616702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2787312.2448979593,
            "unit": "ns",
            "range": "± 110178.62510610717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6636912.820512821,
            "unit": "ns",
            "range": "± 339847.8709921771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187100,
            "unit": "ns",
            "range": "± 4462.008943236646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174977.08333333334,
            "unit": "ns",
            "range": "± 6169.528399623335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141800,
            "unit": "ns",
            "range": "± 2910.970628501772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2796253.3333333335,
            "unit": "ns",
            "range": "± 40634.272421665126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2561164.285714286,
            "unit": "ns",
            "range": "± 27616.678548767122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12529.787234042553,
            "unit": "ns",
            "range": "± 1538.5952109184161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58230.10752688172,
            "unit": "ns",
            "range": "± 5473.330298230658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44661.22448979592,
            "unit": "ns",
            "range": "± 1772.92323655625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62717.17171717172,
            "unit": "ns",
            "range": "± 15650.59195857734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2743.4343434343436,
            "unit": "ns",
            "range": "± 506.92381912899873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11366.666666666666,
            "unit": "ns",
            "range": "± 1092.6463146838726"
          }
        ]
      }
    ]
  }
}