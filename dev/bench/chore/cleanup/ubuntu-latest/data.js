window.BENCHMARK_DATA = {
  "lastUpdate": 1705633573571,
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
          "id": "265300407ee130b2853963ce8382c321e4570673",
          "message": "[skip changelog] Removed unnecessary logic",
          "timestamp": "2023-04-02T16:27:07+09:00",
          "tree_id": "e367f0043a44abc981b7f55b69d973d07fa9015f",
          "url": "https://github.com/greymistcube/libplanet/commit/265300407ee130b2853963ce8382c321e4570673"
        },
        "date": 1680421209360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397040.5675675673,
            "unit": "ns",
            "range": "± 109401.94830571157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3621368.9411764704,
            "unit": "ns",
            "range": "± 115509.48214808013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4245073.266666667,
            "unit": "ns",
            "range": "± 62560.99016327606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4737759.923076923,
            "unit": "ns",
            "range": "± 56449.15484230262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7689374.65,
            "unit": "ns",
            "range": "± 172213.1667633475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7725926.2,
            "unit": "ns",
            "range": "± 106250.53579306923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21067185,
            "unit": "ns",
            "range": "± 104277.6160124059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53028362.64285714,
            "unit": "ns",
            "range": "± 822406.5225080511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105279278.35714285,
            "unit": "ns",
            "range": "± 1035901.1319545456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210804572.8,
            "unit": "ns",
            "range": "± 2580738.198783917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1446955.6753246754,
            "unit": "ns",
            "range": "± 73493.76422553098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2687640.75,
            "unit": "ns",
            "range": "± 60944.31981681954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2277369.409090909,
            "unit": "ns",
            "range": "± 115150.39709260117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5495000.235294118,
            "unit": "ns",
            "range": "± 106914.06640354288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48362.45070422535,
            "unit": "ns",
            "range": "± 2306.1245399942695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5871536.006696428,
            "unit": "ns",
            "range": "± 22156.007526780424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849019.14609375,
            "unit": "ns",
            "range": "± 3327.8376844073746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359818.4587239583,
            "unit": "ns",
            "range": "± 4285.752500229053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624393.089583333,
            "unit": "ns",
            "range": "± 2438.394867405939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828857.5858723958,
            "unit": "ns",
            "range": "± 937.5761020008316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770022.0577566965,
            "unit": "ns",
            "range": "± 436.3522776553084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333507.8333333333,
            "unit": "ns",
            "range": "± 11475.004019529882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277760.5,
            "unit": "ns",
            "range": "± 6293.183113496699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237835.41666666666,
            "unit": "ns",
            "range": "± 799.9831200870693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5737167.533333333,
            "unit": "ns",
            "range": "± 41940.86565266909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3923756.6428571427,
            "unit": "ns",
            "range": "± 51749.14679134205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17970.380952380954,
            "unit": "ns",
            "range": "± 984.2856856411752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88578.26582278482,
            "unit": "ns",
            "range": "± 4621.388368669458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74013.4375,
            "unit": "ns",
            "range": "± 1431.9573070335116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 187308.10204081633,
            "unit": "ns",
            "range": "± 18459.837421791257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5879.4639175257735,
            "unit": "ns",
            "range": "± 532.6985166320562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17948.639175257733,
            "unit": "ns",
            "range": "± 1626.674580660182"
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
          "id": "66033e1ce636c296e1edaab4a22a1a154308564f",
          "message": "[skip changelog] Removed unnecessary logic",
          "timestamp": "2023-04-02T16:23:54+09:00",
          "tree_id": "41907a4c6eb70917b203d19d7c24f302f756b587",
          "url": "https://github.com/greymistcube/libplanet/commit/66033e1ce636c296e1edaab4a22a1a154308564f"
        },
        "date": 1680421294259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4039769.2040816327,
            "unit": "ns",
            "range": "± 160751.62153199516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6610177.578947368,
            "unit": "ns",
            "range": "± 139326.23540506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30894891.411764707,
            "unit": "ns",
            "range": "± 627259.1112766975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7831093.694444444,
            "unit": "ns",
            "range": "± 254139.5485051268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35573571.73170732,
            "unit": "ns",
            "range": "± 1819540.2472090528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10200536.55882353,
            "unit": "ns",
            "range": "± 318968.1083122804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27960961.5,
            "unit": "ns",
            "range": "± 396253.3042156339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66261819.875,
            "unit": "ns",
            "range": "± 1296369.6719796595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140374390.04,
            "unit": "ns",
            "range": "± 3117440.9271318666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281244623.1315789,
            "unit": "ns",
            "range": "± 9499712.462525783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1596491.4736842106,
            "unit": "ns",
            "range": "± 167377.829926585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3101204.610526316,
            "unit": "ns",
            "range": "± 243977.36118054742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2518933.092783505,
            "unit": "ns",
            "range": "± 175831.67964544735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6708503.542553191,
            "unit": "ns",
            "range": "± 436099.58127682336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57152.489130434784,
            "unit": "ns",
            "range": "± 4943.335096774386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7265192.123535156,
            "unit": "ns",
            "range": "± 142703.13780014627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2248484.7569754464,
            "unit": "ns",
            "range": "± 24253.625053168056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1685974.641731771,
            "unit": "ns",
            "range": "± 25098.634269132017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3245888.6661658655,
            "unit": "ns",
            "range": "± 46481.29060225905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1022975.0419311523,
            "unit": "ns",
            "range": "± 19238.08399989571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954692.2110706676,
            "unit": "ns",
            "range": "± 20945.129499217608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231988.12,
            "unit": "ns",
            "range": "± 8953.163542797685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236441.3396226415,
            "unit": "ns",
            "range": "± 9856.93162380081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213481.75294117647,
            "unit": "ns",
            "range": "± 11549.193074168681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14655657.066666666,
            "unit": "ns",
            "range": "± 430947.5787829559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11822537.861111112,
            "unit": "ns",
            "range": "± 394510.26980665914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24486.659574468085,
            "unit": "ns",
            "range": "± 1950.368923211138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65821.23863636363,
            "unit": "ns",
            "range": "± 4432.839400349923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50032.393258426964,
            "unit": "ns",
            "range": "± 3627.287878698634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118595.02083333333,
            "unit": "ns",
            "range": "± 16642.196581979366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6827.554347826087,
            "unit": "ns",
            "range": "± 772.1867388470345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22211.32608695652,
            "unit": "ns",
            "range": "± 1519.848315947291"
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
          "id": "e6e7c5082725742dd69ee165974a08c04d8b771c",
          "message": "[skip changelog] Slight change in implementation",
          "timestamp": "2023-07-04T10:30:46+09:00",
          "tree_id": "8cb62205772d1d88fcd5acb80b23a66cd0d0fc45",
          "url": "https://github.com/greymistcube/libplanet/commit/e6e7c5082725742dd69ee165974a08c04d8b771c"
        },
        "date": 1688435100398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8164981.8,
            "unit": "ns",
            "range": "± 131653.30145239155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22514515.066666666,
            "unit": "ns",
            "range": "± 197972.72590740756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56180116.53333333,
            "unit": "ns",
            "range": "± 553414.2719144062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113502969.2,
            "unit": "ns",
            "range": "± 1190759.0778038665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229486380.53333333,
            "unit": "ns",
            "range": "± 1504154.1753210798"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48307.313953488374,
            "unit": "ns",
            "range": "± 2645.9287894985246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289880.75,
            "unit": "ns",
            "range": "± 8527.92485063421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275228.63157894736,
            "unit": "ns",
            "range": "± 7959.058176052405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247488.77272727274,
            "unit": "ns",
            "range": "± 5007.406703900572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4550083.066666666,
            "unit": "ns",
            "range": "± 60348.835072750946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4125956.8,
            "unit": "ns",
            "range": "± 65401.38256205729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19690.64893617021,
            "unit": "ns",
            "range": "± 1489.974386064367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88283.21052631579,
            "unit": "ns",
            "range": "± 3844.90473473309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74735.26086956522,
            "unit": "ns",
            "range": "± 1898.7485643633645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97548.5612244898,
            "unit": "ns",
            "range": "± 13090.15612443917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5663.969072164949,
            "unit": "ns",
            "range": "± 564.0762812925554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18004.40625,
            "unit": "ns",
            "range": "± 1622.3717503647488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1519139.6326530613,
            "unit": "ns",
            "range": "± 97236.731200745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2811674.3636363638,
            "unit": "ns",
            "range": "± 66162.44612103315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1933981.2375,
            "unit": "ns",
            "range": "± 101034.74362940373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5188589.096774193,
            "unit": "ns",
            "range": "± 134018.22507862002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6058333.574776785,
            "unit": "ns",
            "range": "± 23065.27896357253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928578.7847055288,
            "unit": "ns",
            "range": "± 1491.7833857292644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396827.5079427084,
            "unit": "ns",
            "range": "± 2780.86249343301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694818.753125,
            "unit": "ns",
            "range": "± 2825.105982215155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860547.2028996394,
            "unit": "ns",
            "range": "± 631.9160395412284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753533.1849459135,
            "unit": "ns",
            "range": "± 266.625152864318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3663335.4,
            "unit": "ns",
            "range": "± 53239.670095038826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3730713,
            "unit": "ns",
            "range": "± 70056.24245038173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4595050.923076923,
            "unit": "ns",
            "range": "± 124035.89993189008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4205871.028571429,
            "unit": "ns",
            "range": "± 137034.08358581833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6669466.166666667,
            "unit": "ns",
            "range": "± 171069.86496106526"
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
          "id": "4bc48510732c105db5cf0278a9ecc46cc21984c6",
          "message": "Changelog",
          "timestamp": "2023-07-04T10:58:40+09:00",
          "tree_id": "830e9d5dd54a1b2a5b45579d623027edf1af7156",
          "url": "https://github.com/greymistcube/libplanet/commit/4bc48510732c105db5cf0278a9ecc46cc21984c6"
        },
        "date": 1688436907605,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10815521.4,
            "unit": "ns",
            "range": "± 176319.64951141598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28288856.133333333,
            "unit": "ns",
            "range": "± 364806.93013856496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70240929.26666667,
            "unit": "ns",
            "range": "± 287575.9497244577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137118231.07142857,
            "unit": "ns",
            "range": "± 329615.44387232274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273374826.9285714,
            "unit": "ns",
            "range": "± 355549.4408721985"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60207.10638297872,
            "unit": "ns",
            "range": "± 3472.014743006968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355270.9487179487,
            "unit": "ns",
            "range": "± 12318.835505348194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336077.6666666667,
            "unit": "ns",
            "range": "± 11167.481020483408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308919.0483870968,
            "unit": "ns",
            "range": "± 13875.838820223928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5521504.533333333,
            "unit": "ns",
            "range": "± 42417.787826851716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5051326,
            "unit": "ns",
            "range": "± 37627.10357796181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24884.926315789475,
            "unit": "ns",
            "range": "± 2039.1731127774763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111728.4574468085,
            "unit": "ns",
            "range": "± 6957.016092947076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103744.77319587629,
            "unit": "ns",
            "range": "± 8049.264752273386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123384.0625,
            "unit": "ns",
            "range": "± 15416.078656159443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7759.090909090909,
            "unit": "ns",
            "range": "± 1207.6616306317699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25963.372340425532,
            "unit": "ns",
            "range": "± 1905.476470676558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1853780.2105263157,
            "unit": "ns",
            "range": "± 108532.48338218445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3490681.125,
            "unit": "ns",
            "range": "± 107279.98119384442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2338930.4418604653,
            "unit": "ns",
            "range": "± 121461.13499586942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6281843.378378378,
            "unit": "ns",
            "range": "± 207551.21127532082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7429763.573660715,
            "unit": "ns",
            "range": "± 26394.021361482006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2284842.7579627405,
            "unit": "ns",
            "range": "± 9360.243734424277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1662197.0033854167,
            "unit": "ns",
            "range": "± 2770.6616277211165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3445432.58203125,
            "unit": "ns",
            "range": "± 3095.9769408446987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000990.5476888021,
            "unit": "ns",
            "range": "± 867.70686935016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 930680.6129557291,
            "unit": "ns",
            "range": "± 569.7423837483319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4447463.333333333,
            "unit": "ns",
            "range": "± 44744.47611663792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4686752.375,
            "unit": "ns",
            "range": "± 90672.65053283707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5546483.071428572,
            "unit": "ns",
            "range": "± 93473.61061116027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5127080.230769231,
            "unit": "ns",
            "range": "± 47002.65459197287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8192554.444444444,
            "unit": "ns",
            "range": "± 224608.4856089905"
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
          "id": "9267a7d1f941800fbd42039e130ef72a2c5b432a",
          "message": "Remove empty",
          "timestamp": "2023-07-29T22:42:45+09:00",
          "tree_id": "42175cb0c41a22bf8900d732a09ed0bdbfd02e40",
          "url": "https://github.com/greymistcube/libplanet/commit/9267a7d1f941800fbd42039e130ef72a2c5b432a"
        },
        "date": 1690639030537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301230.3888888889,
            "unit": "ns",
            "range": "± 10030.954537338843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291511.4418604651,
            "unit": "ns",
            "range": "± 10736.721106074916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255130.80357142858,
            "unit": "ns",
            "range": "± 10831.30376508864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4484640.533333333,
            "unit": "ns",
            "range": "± 83384.66988076291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4189076.2,
            "unit": "ns",
            "range": "± 67569.84271974761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21727.301075268817,
            "unit": "ns",
            "range": "± 1710.4567199953033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96910.58333333333,
            "unit": "ns",
            "range": "± 5916.8300112861225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77835.01388888889,
            "unit": "ns",
            "range": "± 3858.9010859768973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98198.60638297872,
            "unit": "ns",
            "range": "± 13875.427212423792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6622.313131313132,
            "unit": "ns",
            "range": "± 1308.305179140014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20644.747368421053,
            "unit": "ns",
            "range": "± 1319.0463590035217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1512323.3780487804,
            "unit": "ns",
            "range": "± 78758.37586899557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2927532.0454545454,
            "unit": "ns",
            "range": "± 108562.59339136271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1922524.06185567,
            "unit": "ns",
            "range": "± 123515.42191436514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5173329.096774193,
            "unit": "ns",
            "range": "± 155060.77794451115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6027809.732700893,
            "unit": "ns",
            "range": "± 16469.29394087457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1937324.7721354167,
            "unit": "ns",
            "range": "± 4505.166459439527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393687.1287667411,
            "unit": "ns",
            "range": "± 2540.8162853813656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667621.7721354165,
            "unit": "ns",
            "range": "± 2576.3879773425847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830599.2390625,
            "unit": "ns",
            "range": "± 899.8858464520321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761804.8856770833,
            "unit": "ns",
            "range": "± 551.5312519555906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3755641.6666666665,
            "unit": "ns",
            "range": "± 109852.00680141828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4006380.090909091,
            "unit": "ns",
            "range": "± 93801.42641564888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4801216.375,
            "unit": "ns",
            "range": "± 92050.61900923499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4203726.619047619,
            "unit": "ns",
            "range": "± 93812.59442445678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6713984.88,
            "unit": "ns",
            "range": "± 177542.59657833292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8463919.466666667,
            "unit": "ns",
            "range": "± 86331.21910067947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22765377.333333332,
            "unit": "ns",
            "range": "± 235010.23527457166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56565575.86666667,
            "unit": "ns",
            "range": "± 448863.39380879834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112689070,
            "unit": "ns",
            "range": "± 1088722.261497182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225789066,
            "unit": "ns",
            "range": "± 1509364.0515626345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51679.09302325582,
            "unit": "ns",
            "range": "± 2808.4304749132284"
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
          "id": "ce9eb2e32ac5fe93b047206b01fcb67e21966478",
          "message": "[skip changelog] Fix csproj files",
          "timestamp": "2023-07-29T22:41:32+09:00",
          "tree_id": "7d188ed459b116bede4c4c596028dcfa94e02a5a",
          "url": "https://github.com/greymistcube/libplanet/commit/ce9eb2e32ac5fe93b047206b01fcb67e21966478"
        },
        "date": 1690639158012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339439.1919191919,
            "unit": "ns",
            "range": "± 23791.143242158698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315389.8645833333,
            "unit": "ns",
            "range": "± 23801.208521116736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285319.16,
            "unit": "ns",
            "range": "± 22049.647250079284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5036050.626506024,
            "unit": "ns",
            "range": "± 266882.40571780794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4746126.517241379,
            "unit": "ns",
            "range": "± 208336.59607625363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22387.282608695652,
            "unit": "ns",
            "range": "± 1903.1008550020679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107493.22680412371,
            "unit": "ns",
            "range": "± 9371.309932120343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90583.46315789473,
            "unit": "ns",
            "range": "± 8363.02259927406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110265.74736842106,
            "unit": "ns",
            "range": "± 16583.324869359956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6127.494736842105,
            "unit": "ns",
            "range": "± 799.3787198430804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23796.14893617021,
            "unit": "ns",
            "range": "± 2438.154696007931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1667429.1770833333,
            "unit": "ns",
            "range": "± 130531.72234123133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3308887.8673469387,
            "unit": "ns",
            "range": "± 191761.92760422328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169265.918032787,
            "unit": "ns",
            "range": "± 94815.33169136292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6280759.395348838,
            "unit": "ns",
            "range": "± 340854.3403590896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7006221.558407738,
            "unit": "ns",
            "range": "± 162122.87457194977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2193017.4274796196,
            "unit": "ns",
            "range": "± 53338.13082641893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1552141.8505208334,
            "unit": "ns",
            "range": "± 22019.63342354697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3039897.459087171,
            "unit": "ns",
            "range": "± 64777.60145540364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946253.4423828125,
            "unit": "ns",
            "range": "± 11725.753802379713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 868010.5384440104,
            "unit": "ns",
            "range": "± 11128.634486178036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3998435.7,
            "unit": "ns",
            "range": "± 249712.1418517568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4107461.383838384,
            "unit": "ns",
            "range": "± 255653.42010974613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5070909.4375,
            "unit": "ns",
            "range": "± 292609.3132773968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4692875.909090909,
            "unit": "ns",
            "range": "± 240156.9822477516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7886097.904109589,
            "unit": "ns",
            "range": "± 389782.6159063667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10161312.634408602,
            "unit": "ns",
            "range": "± 678116.1781842654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26675215.407407407,
            "unit": "ns",
            "range": "± 1403519.086631571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65927095.4,
            "unit": "ns",
            "range": "± 1077851.3127635529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128037990.70833333,
            "unit": "ns",
            "range": "± 3304905.3657916426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256408873.54285714,
            "unit": "ns",
            "range": "± 8412163.503206778"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54591.96703296703,
            "unit": "ns",
            "range": "± 4381.056951240443"
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
          "id": "fa07287410dbb6b8b953b1304427d6a0d9cb78ef",
          "message": "Remove unnecessary usings",
          "timestamp": "2023-12-19T13:19:12+09:00",
          "tree_id": "bb2c9dd57d1c2a2a2c53a9292d2c5de7e205b053",
          "url": "https://github.com/greymistcube/libplanet/commit/fa07287410dbb6b8b953b1304427d6a0d9cb78ef"
        },
        "date": 1702960200477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752129.85078125,
            "unit": "ns",
            "range": "± 43544.643189578215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215770.8490513393,
            "unit": "ns",
            "range": "± 3541.3461737299413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757228.5050330529,
            "unit": "ns",
            "range": "± 2481.567317638416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933661.5926339286,
            "unit": "ns",
            "range": "± 20011.587991377382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614722.6015625,
            "unit": "ns",
            "range": "± 1608.7056449772758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585374.5410853794,
            "unit": "ns",
            "range": "± 3921.612582549786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2348447.4482758623,
            "unit": "ns",
            "range": "± 68496.55576929513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2493827.095238095,
            "unit": "ns",
            "range": "± 113424.69504786185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110074.076923077,
            "unit": "ns",
            "range": "± 84621.70023010555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3014964.7978723403,
            "unit": "ns",
            "range": "± 104626.10462642986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6779865.9375,
            "unit": "ns",
            "range": "± 132360.60967043467"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39630.897959183676,
            "unit": "ns",
            "range": "± 5872.850483262678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200482.42105263157,
            "unit": "ns",
            "range": "± 6235.500013031655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189692.3076923077,
            "unit": "ns",
            "range": "± 6552.188963897751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161202.9756097561,
            "unit": "ns",
            "range": "± 5582.112814552411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3053171.2666666666,
            "unit": "ns",
            "range": "± 48897.365284654676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2730707.6153846155,
            "unit": "ns",
            "range": "± 26515.640634471012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14757.858585858587,
            "unit": "ns",
            "range": "± 2092.9032077334195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66356.52525252526,
            "unit": "ns",
            "range": "± 7112.646598816922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51600.92857142857,
            "unit": "ns",
            "range": "± 871.4256633891308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66035.23958333333,
            "unit": "ns",
            "range": "± 10075.357174021221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4449.545454545455,
            "unit": "ns",
            "range": "± 1755.3272807965811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11817.175824175823,
            "unit": "ns",
            "range": "± 1146.8822916780045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5426976.2,
            "unit": "ns",
            "range": "± 18860.854189109705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14202166.714285715,
            "unit": "ns",
            "range": "± 75622.81869726743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35624090.666666664,
            "unit": "ns",
            "range": "± 164127.195706199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74260022.4,
            "unit": "ns",
            "range": "± 787329.3849097721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149111612.2142857,
            "unit": "ns",
            "range": "± 957611.4311523853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067194.5384615385,
            "unit": "ns",
            "range": "± 13795.482446652508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1906119.925,
            "unit": "ns",
            "range": "± 99475.74553816649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530674.163265306,
            "unit": "ns",
            "range": "± 161537.86021167575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6138505.926315789,
            "unit": "ns",
            "range": "± 350857.7735922818"
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
          "id": "eaca1eb4c28e803507555810e929bbe04d448a6b",
          "message": "Remove unnecessary usings",
          "timestamp": "2023-12-19T13:44:36+09:00",
          "tree_id": "bb928fd783d48f64083e075008c91e6889ce7a17",
          "url": "https://github.com/greymistcube/libplanet/commit/eaca1eb4c28e803507555810e929bbe04d448a6b"
        },
        "date": 1702961737911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3697680.6861979165,
            "unit": "ns",
            "range": "± 50691.53977981469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205254.0003255208,
            "unit": "ns",
            "range": "± 3809.7292859916492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777716.8937049279,
            "unit": "ns",
            "range": "± 3622.263982656342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973355.4573317308,
            "unit": "ns",
            "range": "± 10917.080442354101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626073.3779296875,
            "unit": "ns",
            "range": "± 1074.0411726072346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572887.6114095052,
            "unit": "ns",
            "range": "± 1340.1590411856598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2349173.5714285714,
            "unit": "ns",
            "range": "± 53966.753823600906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502124.6555555556,
            "unit": "ns",
            "range": "± 88862.20868107992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3136939.466666667,
            "unit": "ns",
            "range": "± 48592.434885728966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2922199.423076923,
            "unit": "ns",
            "range": "± 135424.60711168175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7035005.870967742,
            "unit": "ns",
            "range": "± 214809.09905785986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42002.66494845361,
            "unit": "ns",
            "range": "± 5135.955685735803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199919.14772727274,
            "unit": "ns",
            "range": "± 11004.384090343761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189566.0185185185,
            "unit": "ns",
            "range": "± 7852.4607403600485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161552.1923076923,
            "unit": "ns",
            "range": "± 2513.055390841176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3120174.1428571427,
            "unit": "ns",
            "range": "± 26676.982093780174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2829439.5,
            "unit": "ns",
            "range": "± 32610.04326418945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15341.351063829787,
            "unit": "ns",
            "range": "± 1808.531238607827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65728.28125,
            "unit": "ns",
            "range": "± 8126.76316960219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56520.60638297872,
            "unit": "ns",
            "range": "± 7148.358893124006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66675.6,
            "unit": "ns",
            "range": "± 14298.641062047702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3443.1022727272725,
            "unit": "ns",
            "range": "± 888.0374207680837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14310.602040816326,
            "unit": "ns",
            "range": "± 2835.7760933007385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5538057,
            "unit": "ns",
            "range": "± 23708.841083833297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14304454,
            "unit": "ns",
            "range": "± 196897.5032193146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36763129.266666666,
            "unit": "ns",
            "range": "± 243928.05227990213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74452248.3076923,
            "unit": "ns",
            "range": "± 427307.64876264986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150331737.23076922,
            "unit": "ns",
            "range": "± 687839.2118504336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933593.3555555556,
            "unit": "ns",
            "range": "± 49940.92717171996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1848061.1304347827,
            "unit": "ns",
            "range": "± 45695.82548101417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1380784.4666666666,
            "unit": "ns",
            "range": "± 89224.6795907495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6223178.612903226,
            "unit": "ns",
            "range": "± 417547.5695522616"
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
          "id": "cd92599875b35bbd5835439d42a5f1310a45d8d5",
          "message": "Clutter removal",
          "timestamp": "2024-01-09T17:41:25+09:00",
          "tree_id": "93d24353430557875619ea767a5127d918c1a586",
          "url": "https://github.com/greymistcube/libplanet/commit/cd92599875b35bbd5835439d42a5f1310a45d8d5"
        },
        "date": 1704790367055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3775210.51640625,
            "unit": "ns",
            "range": "± 54859.306057865346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220184.566348805,
            "unit": "ns",
            "range": "± 18299.945585453675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780893.860921224,
            "unit": "ns",
            "range": "± 1653.882215598295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975873.8313802083,
            "unit": "ns",
            "range": "± 5845.563681583761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618887.4571126302,
            "unit": "ns",
            "range": "± 1246.8040110451807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573068.1892438616,
            "unit": "ns",
            "range": "± 852.3312666964321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2370774.6,
            "unit": "ns",
            "range": "± 31599.97255152515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486472.214285714,
            "unit": "ns",
            "range": "± 59818.00320995724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3108448.5714285714,
            "unit": "ns",
            "range": "± 86929.75538135014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3176377.05,
            "unit": "ns",
            "range": "± 110850.36564133628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14011876.623655913,
            "unit": "ns",
            "range": "± 1066112.4717077168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41453.729166666664,
            "unit": "ns",
            "range": "± 6151.603136332011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203958.01265822785,
            "unit": "ns",
            "range": "± 10033.32306136326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191035.25,
            "unit": "ns",
            "range": "± 6310.544833034909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162598.25,
            "unit": "ns",
            "range": "± 4176.13559926857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3191579.6428571427,
            "unit": "ns",
            "range": "± 49930.00956085681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2909027.2666666666,
            "unit": "ns",
            "range": "± 34862.80643868122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14177.397959183674,
            "unit": "ns",
            "range": "± 2486.9030786240987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61700.97826086957,
            "unit": "ns",
            "range": "± 6257.430099495453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53054.43939393939,
            "unit": "ns",
            "range": "± 1639.078417499334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91807.67391304347,
            "unit": "ns",
            "range": "± 12080.608443039504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3058.521052631579,
            "unit": "ns",
            "range": "± 551.1352882324362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13800.848484848484,
            "unit": "ns",
            "range": "± 3166.5897331409055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5522861.933333334,
            "unit": "ns",
            "range": "± 24428.212759800812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14703528.666666666,
            "unit": "ns",
            "range": "± 68481.75988816987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36690833.5,
            "unit": "ns",
            "range": "± 234430.32800813124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73531836.21428572,
            "unit": "ns",
            "range": "± 548814.3541024005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148371928.43333334,
            "unit": "ns",
            "range": "± 1244618.6616869252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007012.2252747252,
            "unit": "ns",
            "range": "± 98933.95941222228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1995864.126506024,
            "unit": "ns",
            "range": "± 105351.37787061377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1671269.9438202246,
            "unit": "ns",
            "range": "± 102472.70453874751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13040279.808510639,
            "unit": "ns",
            "range": "± 1107823.6325154982"
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
          "id": "b917fb942de20ba143cb5cb15c01e36e08af7ba7",
          "message": "Removed unnecessary extension method",
          "timestamp": "2024-01-19T11:54:43+09:00",
          "tree_id": "30dbf3daefc18c45e6e5f93d5f969869f321ebfc",
          "url": "https://github.com/greymistcube/libplanet/commit/b917fb942de20ba143cb5cb15c01e36e08af7ba7"
        },
        "date": 1705633567337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3756125.5598958335,
            "unit": "ns",
            "range": "± 51206.5241139318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196712.368326823,
            "unit": "ns",
            "range": "± 4060.0698641860376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764308.1803385416,
            "unit": "ns",
            "range": "± 1393.5179614344322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931296.5914963942,
            "unit": "ns",
            "range": "± 9404.654124325696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621076.9156901041,
            "unit": "ns",
            "range": "± 3265.3694445365036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566572.4323567708,
            "unit": "ns",
            "range": "± 2412.0595398340965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2372842.34,
            "unit": "ns",
            "range": "± 60553.055809678175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2558858.2328767125,
            "unit": "ns",
            "range": "± 124388.85322319328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3176208.523809524,
            "unit": "ns",
            "range": "± 114479.02820412301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3195699.1170212766,
            "unit": "ns",
            "range": "± 122346.01968002797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13751366.40425532,
            "unit": "ns",
            "range": "± 1054650.5087886904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38921.41237113402,
            "unit": "ns",
            "range": "± 4781.962584704321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201096.1052631579,
            "unit": "ns",
            "range": "± 4298.7172233216115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193413.77966101695,
            "unit": "ns",
            "range": "± 8543.1105900639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169912.17142857143,
            "unit": "ns",
            "range": "± 5455.469260485374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3210123.214285714,
            "unit": "ns",
            "range": "± 41447.12705674836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2846551.285714286,
            "unit": "ns",
            "range": "± 49651.83001845268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13265.360215053763,
            "unit": "ns",
            "range": "± 1578.1156525605072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66713.3163265306,
            "unit": "ns",
            "range": "± 7781.818053545946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57809.03125,
            "unit": "ns",
            "range": "± 6306.793553409605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68296.37894736842,
            "unit": "ns",
            "range": "± 10704.919264086764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2999.978723404255,
            "unit": "ns",
            "range": "± 459.08860106569875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13006.711340206186,
            "unit": "ns",
            "range": "± 3016.0489812790215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5599063.076923077,
            "unit": "ns",
            "range": "± 30230.580961066393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14351903.73076923,
            "unit": "ns",
            "range": "± 146076.74447994443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36881286.192307696,
            "unit": "ns",
            "range": "± 150065.67657383918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74871869.64285715,
            "unit": "ns",
            "range": "± 286826.2530825284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151601578.2142857,
            "unit": "ns",
            "range": "± 914898.704372022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998695.39,
            "unit": "ns",
            "range": "± 102465.79290856885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1896258.8550724639,
            "unit": "ns",
            "range": "± 90616.76620725903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1637410.7708333333,
            "unit": "ns",
            "range": "± 169187.3077904442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12761449.311827958,
            "unit": "ns",
            "range": "± 999608.2665242137"
          }
        ]
      }
    ]
  }
}