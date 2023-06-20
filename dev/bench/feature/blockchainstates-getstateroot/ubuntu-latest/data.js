window.BENCHMARK_DATA = {
  "lastUpdate": 1687233762093,
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
          "id": "4ac1610cd444d14c98eca5e393878591f2f85031",
          "message": "Introduce BlockChainStates.GetStateRoot; expand BlockChainStates query\nscope",
          "timestamp": "2023-06-14T14:30:04+09:00",
          "tree_id": "31b203bf80340635c6bc8123a588dfb41aa59cfa",
          "url": "https://github.com/greymistcube/libplanet/commit/4ac1610cd444d14c98eca5e393878591f2f85031"
        },
        "date": 1686721629935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779166.2054794522,
            "unit": "ns",
            "range": "± 74735.33812616486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3522567.2448979593,
            "unit": "ns",
            "range": "± 140201.48384773053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2875192.6619718308,
            "unit": "ns",
            "range": "± 137347.00220618927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6980701.193548387,
            "unit": "ns",
            "range": "± 211939.87905841277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4372167.333333333,
            "unit": "ns",
            "range": "± 111767.57188847825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4530839.928571428,
            "unit": "ns",
            "range": "± 69960.67818585862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5542961.761904762,
            "unit": "ns",
            "range": "± 130029.73941868251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5693059.2105263155,
            "unit": "ns",
            "range": "± 195363.0026965268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8817550.208333334,
            "unit": "ns",
            "range": "± 193840.48356203458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10540019.47368421,
            "unit": "ns",
            "range": "± 226410.00922892286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27982620.14814815,
            "unit": "ns",
            "range": "± 782601.5418874854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67712457.8,
            "unit": "ns",
            "range": "± 575654.3835813787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139034492.93333334,
            "unit": "ns",
            "range": "± 1045794.7111825987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275883392.8666667,
            "unit": "ns",
            "range": "± 1977414.8919069949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7322427.7375,
            "unit": "ns",
            "range": "± 26246.284133814595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2273172.8177083335,
            "unit": "ns",
            "range": "± 3687.015994817762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1663723.3936197916,
            "unit": "ns",
            "range": "± 5708.853690841626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126273.17890625,
            "unit": "ns",
            "range": "± 9809.400486204753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997193.1282552084,
            "unit": "ns",
            "range": "± 1539.7292919973008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933489.0006277902,
            "unit": "ns",
            "range": "± 2803.3403453041856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56582.45054945055,
            "unit": "ns",
            "range": "± 3281.6231798836525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342638.62264150946,
            "unit": "ns",
            "range": "± 14309.99646323992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334616.45652173914,
            "unit": "ns",
            "range": "± 12803.125546706722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299253.86666666664,
            "unit": "ns",
            "range": "± 8786.32051478352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5446167.142857143,
            "unit": "ns",
            "range": "± 55831.921202917525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4965942.571428572,
            "unit": "ns",
            "range": "± 52166.358432517496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24623.703296703297,
            "unit": "ns",
            "range": "± 1576.4684899730473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108802.21276595745,
            "unit": "ns",
            "range": "± 6766.893243527465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97769.49397590362,
            "unit": "ns",
            "range": "± 5009.849163722991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113188.85714285714,
            "unit": "ns",
            "range": "± 8191.631823461866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7247.020618556701,
            "unit": "ns",
            "range": "± 825.2438273446503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22965.536082474227,
            "unit": "ns",
            "range": "± 1783.9097514416642"
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
          "id": "e2928b2445fa84b3d769723bfc817cc6cc7384ab",
          "message": "Updated docs",
          "timestamp": "2023-06-14T16:31:23+09:00",
          "tree_id": "61d2ef63d57595effb4779f78ec4028df3258dd0",
          "url": "https://github.com/greymistcube/libplanet/commit/e2928b2445fa84b3d769723bfc817cc6cc7384ab"
        },
        "date": 1686729057288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1661537.5104166667,
            "unit": "ns",
            "range": "± 176475.9125267447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3220767.4081632653,
            "unit": "ns",
            "range": "± 281677.90616420057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2730763.936170213,
            "unit": "ns",
            "range": "± 242229.73270003696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7581830.686868687,
            "unit": "ns",
            "range": "± 630010.8190959356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4216802.858585859,
            "unit": "ns",
            "range": "± 392087.1535143688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4270446.75,
            "unit": "ns",
            "range": "± 460240.713090364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5395477.326530612,
            "unit": "ns",
            "range": "± 473316.72094342334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5387147.747474748,
            "unit": "ns",
            "range": "± 536609.1889179029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9369032.666666666,
            "unit": "ns",
            "range": "± 625809.8909110988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9489721.909090908,
            "unit": "ns",
            "range": "± 486509.8861542221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25356052.474747475,
            "unit": "ns",
            "range": "± 1732827.5517686983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65043438.222222224,
            "unit": "ns",
            "range": "± 4086348.0131859295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137203597.41463414,
            "unit": "ns",
            "range": "± 4863367.228115403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273118299.02380955,
            "unit": "ns",
            "range": "± 9886462.421834193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7567904.103742733,
            "unit": "ns",
            "range": "± 276231.047843392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2450981.4301757812,
            "unit": "ns",
            "range": "± 86371.07900909014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1665051.0727864583,
            "unit": "ns",
            "range": "± 23063.72976059257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3190924.789322917,
            "unit": "ns",
            "range": "± 55311.92710609401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040556.9048177083,
            "unit": "ns",
            "range": "± 14336.546768571783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 992750.8270970394,
            "unit": "ns",
            "range": "± 21558.888478238514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69425.64646464646,
            "unit": "ns",
            "range": "± 17204.96064043866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398014.9789473684,
            "unit": "ns",
            "range": "± 57654.19694988147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373980.77659574465,
            "unit": "ns",
            "range": "± 40880.46909731125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 361682.595959596,
            "unit": "ns",
            "range": "± 40546.83203078935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5920708.459183673,
            "unit": "ns",
            "range": "± 401672.32997703325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5035873.793814433,
            "unit": "ns",
            "range": "± 367691.7507689281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36170.020202020205,
            "unit": "ns",
            "range": "± 11167.033411971037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 148543.04255319148,
            "unit": "ns",
            "range": "± 23807.42115613736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142899.79166666666,
            "unit": "ns",
            "range": "± 34617.84457394213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157508.39784946237,
            "unit": "ns",
            "range": "± 31842.31193920243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8091.487804878048,
            "unit": "ns",
            "range": "± 1964.2680303133716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34027.755102040814,
            "unit": "ns",
            "range": "± 11841.759380166326"
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
          "id": "a894ffe815da3c7eb734c3879241b1f19626e981",
          "message": "Changelog",
          "timestamp": "2023-06-14T16:37:23+09:00",
          "tree_id": "521d792b5cb0fe4cfaf18f2e7292161d4310f523",
          "url": "https://github.com/greymistcube/libplanet/commit/a894ffe815da3c7eb734c3879241b1f19626e981"
        },
        "date": 1686729083685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3571532.3055555555,
            "unit": "ns",
            "range": "± 117439.37462922718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3747661.0384615385,
            "unit": "ns",
            "range": "± 102079.2622553595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4536029.387096774,
            "unit": "ns",
            "range": "± 137578.6118502624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4607039.580645162,
            "unit": "ns",
            "range": "± 126303.59260178739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7265213.416666667,
            "unit": "ns",
            "range": "± 237942.87200627138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6079155.036272322,
            "unit": "ns",
            "range": "± 26785.59201301364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938785.5295572917,
            "unit": "ns",
            "range": "± 4102.032730363995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398632.5341145834,
            "unit": "ns",
            "range": "± 4261.497513067419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673615.873177083,
            "unit": "ns",
            "range": "± 3293.2627072287523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841464.9607421875,
            "unit": "ns",
            "range": "± 1117.4472495942978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808459.0189732143,
            "unit": "ns",
            "range": "± 754.4512501604731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293245.4186046512,
            "unit": "ns",
            "range": "± 10017.933981074611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279265.8,
            "unit": "ns",
            "range": "± 7398.1960004813645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247888.4193548387,
            "unit": "ns",
            "range": "± 7525.746283145584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4559010.933333334,
            "unit": "ns",
            "range": "± 70789.14278280117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4165188.8,
            "unit": "ns",
            "range": "± 76046.78863342713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19745.296703296703,
            "unit": "ns",
            "range": "± 1287.6330955543156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91758.93684210526,
            "unit": "ns",
            "range": "± 5924.9240228731815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76368.83018867925,
            "unit": "ns",
            "range": "± 3167.774502317463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95584.88372093023,
            "unit": "ns",
            "range": "± 8721.07567356041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5674.020833333333,
            "unit": "ns",
            "range": "± 798.112338474078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19256.46875,
            "unit": "ns",
            "range": "± 1394.828432785873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498798.5531914893,
            "unit": "ns",
            "range": "± 103840.42977440772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2866815.603448276,
            "unit": "ns",
            "range": "± 125387.57725183785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2416779.1578947366,
            "unit": "ns",
            "range": "± 104685.73374438193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6089795.711111112,
            "unit": "ns",
            "range": "± 338268.6917385347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47359.544444444444,
            "unit": "ns",
            "range": "± 2705.40525183459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8072310.933333334,
            "unit": "ns",
            "range": "± 83697.90776994768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22327436.769230768,
            "unit": "ns",
            "range": "± 260787.10225493443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56356645.47058824,
            "unit": "ns",
            "range": "± 1143979.7246061729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112715626,
            "unit": "ns",
            "range": "± 2066034.1735108974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222746865.53333333,
            "unit": "ns",
            "range": "± 3443747.435817824"
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
          "distinct": false,
          "id": "c34c30e0385e5d45d261d298fd0002009d576469",
          "message": "Cleanup",
          "timestamp": "2023-06-14T16:49:10+09:00",
          "tree_id": "9a2df2be4a4edfd3c1ae444e1c4e8a43d6a67add",
          "url": "https://github.com/greymistcube/libplanet/commit/c34c30e0385e5d45d261d298fd0002009d576469"
        },
        "date": 1686748768434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271710.4210526315,
            "unit": "ns",
            "range": "± 94236.88444255543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473272.5,
            "unit": "ns",
            "range": "± 64458.453391312454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4403661.777777778,
            "unit": "ns",
            "range": "± 93570.31890983855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4349500.047619048,
            "unit": "ns",
            "range": "± 157114.8268572636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6961599.821428572,
            "unit": "ns",
            "range": "± 150886.11513349414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6082658.537860577,
            "unit": "ns",
            "range": "± 22018.260038390705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883564.750279018,
            "unit": "ns",
            "range": "± 6011.832095605699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354817.409765625,
            "unit": "ns",
            "range": "± 1028.6092909807332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627835.1953125,
            "unit": "ns",
            "range": "± 1521.9025686439322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828944.154296875,
            "unit": "ns",
            "range": "± 765.4684950793013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742918.6031668527,
            "unit": "ns",
            "range": "± 968.2160210058787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288212.02173913043,
            "unit": "ns",
            "range": "± 10189.948444944559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272657.2195121951,
            "unit": "ns",
            "range": "± 9774.6250810765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238672.42857142858,
            "unit": "ns",
            "range": "± 3706.2169332142385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4219488.142857143,
            "unit": "ns",
            "range": "± 16242.414437122727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3828272,
            "unit": "ns",
            "range": "± 21876.78065895437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18267.8064516129,
            "unit": "ns",
            "range": "± 1387.1515172096574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92318.47727272728,
            "unit": "ns",
            "range": "± 4975.530217173468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73544.85,
            "unit": "ns",
            "range": "± 1652.9060939034491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92223.71428571429,
            "unit": "ns",
            "range": "± 11228.744369862168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5037.894736842105,
            "unit": "ns",
            "range": "± 529.9897524839155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17879.41237113402,
            "unit": "ns",
            "range": "± 1586.5433124706558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410228.5773195876,
            "unit": "ns",
            "range": "± 104656.38013606273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652567.6071428573,
            "unit": "ns",
            "range": "± 75772.43223276905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2214664.9324324327,
            "unit": "ns",
            "range": "± 111096.45927188137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5353764.307692308,
            "unit": "ns",
            "range": "± 143355.17422423768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46887.18571428571,
            "unit": "ns",
            "range": "± 2268.305594349707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7800767.666666667,
            "unit": "ns",
            "range": "± 45961.767755799985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19907173.333333332,
            "unit": "ns",
            "range": "± 60612.811354020654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50996435.46666667,
            "unit": "ns",
            "range": "± 318179.06768378685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101118822.13333334,
            "unit": "ns",
            "range": "± 308232.65128421295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204229985.4,
            "unit": "ns",
            "range": "± 857447.8889841646"
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
          "id": "fe5c2cc150529f2df916f97b5f0cfac76d7570fd",
          "message": "Changelog",
          "timestamp": "2023-06-15T09:49:32+09:00",
          "tree_id": "621b47cde04d8430fb015270c86b6d465d4aaf8a",
          "url": "https://github.com/greymistcube/libplanet/commit/fe5c2cc150529f2df916f97b5f0cfac76d7570fd"
        },
        "date": 1686791313427,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1777710.3775510204,
            "unit": "ns",
            "range": "± 294482.38038375886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3382370.5306122447,
            "unit": "ns",
            "range": "± 366896.7267512586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2761004.7684210525,
            "unit": "ns",
            "range": "± 255768.26083637698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7680777.242105263,
            "unit": "ns",
            "range": "± 692243.6402938729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3851129.2474226803,
            "unit": "ns",
            "range": "± 384980.0445229551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4283587.065934066,
            "unit": "ns",
            "range": "± 397166.50633024605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5861754,
            "unit": "ns",
            "range": "± 374955.12498754065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5880973.915789474,
            "unit": "ns",
            "range": "± 379097.10993762105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9687842.82795699,
            "unit": "ns",
            "range": "± 587814.3849666585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9852322.082474226,
            "unit": "ns",
            "range": "± 728004.5595127889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27494348.074074075,
            "unit": "ns",
            "range": "± 743977.1469653914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71095629.57407407,
            "unit": "ns",
            "range": "± 2985087.758058149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134395196.47272727,
            "unit": "ns",
            "range": "± 5683569.360981797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269455777.26086956,
            "unit": "ns",
            "range": "± 6525377.112752754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7477319.323317308,
            "unit": "ns",
            "range": "± 52504.31699506722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2357336.236213235,
            "unit": "ns",
            "range": "± 48352.54099801352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1694546.5057198661,
            "unit": "ns",
            "range": "± 23548.156791430054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3377938.4536458333,
            "unit": "ns",
            "range": "± 42143.49455737037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1083276.2287597656,
            "unit": "ns",
            "range": "± 21225.25694627234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1040731.8206787109,
            "unit": "ns",
            "range": "± 17777.60690186112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67015.79569892473,
            "unit": "ns",
            "range": "± 15046.900542867219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408353.2,
            "unit": "ns",
            "range": "± 38858.11019715682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371622.93684210523,
            "unit": "ns",
            "range": "± 46509.336688548196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325436.7684210526,
            "unit": "ns",
            "range": "± 38347.40060303477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5357776.307692308,
            "unit": "ns",
            "range": "± 401888.6563260662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5478309.463157895,
            "unit": "ns",
            "range": "± 417001.51435328403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31071.89898989899,
            "unit": "ns",
            "range": "± 10520.77858577574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118832.48453608247,
            "unit": "ns",
            "range": "± 20489.608534019444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110104.31460674158,
            "unit": "ns",
            "range": "± 21589.866633759786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141851.26041666666,
            "unit": "ns",
            "range": "± 32671.144571397468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7511.109756097561,
            "unit": "ns",
            "range": "± 1793.9283399956214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28921.33,
            "unit": "ns",
            "range": "± 10553.571149194528"
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
          "id": "43be00ca43f0a0eb3fb1cb29a48ff6a5c3e4bf7c",
          "message": "Changelog",
          "timestamp": "2023-06-20T12:42:24+09:00",
          "tree_id": "14015ae60ff50a0a883777d210fe19ca3c209d36",
          "url": "https://github.com/greymistcube/libplanet/commit/43be00ca43f0a0eb3fb1cb29a48ff6a5c3e4bf7c"
        },
        "date": 1687233753023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3643350.505050505,
            "unit": "ns",
            "range": "± 313290.1865811447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3959071.8229166665,
            "unit": "ns",
            "range": "± 324275.81455340376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5160647.212765957,
            "unit": "ns",
            "range": "± 382175.9282664462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5339959.4948453605,
            "unit": "ns",
            "range": "± 515515.1007437878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8812553.831578948,
            "unit": "ns",
            "range": "± 602464.9959812913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7191662.585379465,
            "unit": "ns",
            "range": "± 70082.81977656318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2271804.0045230263,
            "unit": "ns",
            "range": "± 48843.37417868311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1628450.7502297794,
            "unit": "ns",
            "range": "± 32825.31652774428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3127829.970588235,
            "unit": "ns",
            "range": "± 63327.476133022385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1145021.351897885,
            "unit": "ns",
            "range": "± 89777.300320075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 959262.0565132473,
            "unit": "ns",
            "range": "± 22952.691124080484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361103.5816326531,
            "unit": "ns",
            "range": "± 58697.63141955954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350632.7010309278,
            "unit": "ns",
            "range": "± 48911.71190164242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300518.0520833333,
            "unit": "ns",
            "range": "± 46384.481514350824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4912653.385416667,
            "unit": "ns",
            "range": "± 365258.64745555364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4386186.268041237,
            "unit": "ns",
            "range": "± 343911.62016329734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27874.70408163265,
            "unit": "ns",
            "range": "± 10101.461419440098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112778.63157894737,
            "unit": "ns",
            "range": "± 25114.15458569751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107107.98979591837,
            "unit": "ns",
            "range": "± 25136.566790439065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128238.25531914894,
            "unit": "ns",
            "range": "± 29080.793674344757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5096.409638554217,
            "unit": "ns",
            "range": "± 780.1667432177805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27311.24,
            "unit": "ns",
            "range": "± 9939.00640840233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634310.1958762887,
            "unit": "ns",
            "range": "± 195352.11799458857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3220473.1224489794,
            "unit": "ns",
            "range": "± 395920.7164467353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2526993.53125,
            "unit": "ns",
            "range": "± 249349.7692384378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6786867.936842105,
            "unit": "ns",
            "range": "± 588610.0321787999"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60755.44086021505,
            "unit": "ns",
            "range": "± 13258.859058448073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9000701.425531914,
            "unit": "ns",
            "range": "± 577423.9842867834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24026448.322916668,
            "unit": "ns",
            "range": "± 1722487.932130929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67794519.74736843,
            "unit": "ns",
            "range": "± 4472073.459853201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130408077.45238096,
            "unit": "ns",
            "range": "± 6977994.809313355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252274922.07228917,
            "unit": "ns",
            "range": "± 13346420.531545024"
          }
        ]
      }
    ]
  }
}