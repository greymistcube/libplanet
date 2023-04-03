window.BENCHMARK_DATA = {
  "lastUpdate": 1680421303146,
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
      }
    ]
  }
}