window.BENCHMARK_DATA = {
  "lastUpdate": 1700448018666,
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
          "id": "32615931208586c81ef11bf6ee44bb68e9bf85bc",
          "message": "Add missing cache",
          "timestamp": "2023-11-20T11:20:28+09:00",
          "tree_id": "f9b0ba0e6dd4038f2fad50eb41a3e0ae7e232043",
          "url": "https://github.com/greymistcube/libplanet/commit/32615931208586c81ef11bf6ee44bb68e9bf85bc"
        },
        "date": 1700447561466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5847201.884615385,
            "unit": "ns",
            "range": "± 42039.06629659778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15991088.2,
            "unit": "ns",
            "range": "± 95619.03243840707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38155445.571428575,
            "unit": "ns",
            "range": "± 164452.95429379202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80528146,
            "unit": "ns",
            "range": "± 379958.64702480857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153235250.1,
            "unit": "ns",
            "range": "± 824983.5161414525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960508.5913978495,
            "unit": "ns",
            "range": "± 90253.49452998875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1925342.3375,
            "unit": "ns",
            "range": "± 96505.16061395452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1427547.4078947369,
            "unit": "ns",
            "range": "± 72150.2622781424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5929004.94680851,
            "unit": "ns",
            "range": "± 416504.0730282617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2487509.282051282,
            "unit": "ns",
            "range": "± 81194.64386274073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2519443.963414634,
            "unit": "ns",
            "range": "± 89376.90525188751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3148885.16,
            "unit": "ns",
            "range": "± 82170.98741530775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2976205.9024390243,
            "unit": "ns",
            "range": "± 156917.1341476965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6652738.65,
            "unit": "ns",
            "range": "± 218113.07050778938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40439.826315789476,
            "unit": "ns",
            "range": "± 4586.463541544524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3663177.380533854,
            "unit": "ns",
            "range": "± 9383.00775477904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1164560.6854166666,
            "unit": "ns",
            "range": "± 3778.343571465839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741475.9606119791,
            "unit": "ns",
            "range": "± 747.357383094357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972010.8665364583,
            "unit": "ns",
            "range": "± 3930.6439202094843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617787.0600210336,
            "unit": "ns",
            "range": "± 6443.888703137808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576168.783984375,
            "unit": "ns",
            "range": "± 1939.4660010563719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199570.02173913043,
            "unit": "ns",
            "range": "± 7688.4610936393365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194757.6170212766,
            "unit": "ns",
            "range": "± 7545.94276114566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170444.3947368421,
            "unit": "ns",
            "range": "± 5862.870888582466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163857.153846154,
            "unit": "ns",
            "range": "± 34660.5406402491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2931342.6923076925,
            "unit": "ns",
            "range": "± 24098.229310416893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18380.948979591838,
            "unit": "ns",
            "range": "± 3796.14148480109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68061.18279569893,
            "unit": "ns",
            "range": "± 8363.340389885618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52344.16129032258,
            "unit": "ns",
            "range": "± 1622.8440850490338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64646.30612244898,
            "unit": "ns",
            "range": "± 14095.013006110932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5283.595959595959,
            "unit": "ns",
            "range": "± 1996.4326446122104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15100.726315789474,
            "unit": "ns",
            "range": "± 2668.5391311563867"
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
          "id": "63c9e837502b29ace5804aab0c7e5dfdec84b6f8",
          "message": "Changelog",
          "timestamp": "2023-11-20T11:26:04+09:00",
          "tree_id": "7ec6511cf5a3e448ec1822df6fcc1b13059645f6",
          "url": "https://github.com/greymistcube/libplanet/commit/63c9e837502b29ace5804aab0c7e5dfdec84b6f8"
        },
        "date": 1700447825879,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6015457.933333334,
            "unit": "ns",
            "range": "± 45994.62134465393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15299012,
            "unit": "ns",
            "range": "± 110076.43601327496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37342060.92307692,
            "unit": "ns",
            "range": "± 155321.46700229042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77502917.46153846,
            "unit": "ns",
            "range": "± 576124.6763535094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155508422.53846154,
            "unit": "ns",
            "range": "± 738144.9866384218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998227.4578947368,
            "unit": "ns",
            "range": "± 89550.38251850728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1963982.1153846155,
            "unit": "ns",
            "range": "± 80632.90898144475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1475604.8333333333,
            "unit": "ns",
            "range": "± 120459.41845789409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5812072.93220339,
            "unit": "ns",
            "range": "± 255597.7464010025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2610654.8,
            "unit": "ns",
            "range": "± 31506.524751005374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2646816.6341463416,
            "unit": "ns",
            "range": "± 84861.60748647062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3331185.7,
            "unit": "ns",
            "range": "± 58518.338577626375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3156556.716981132,
            "unit": "ns",
            "range": "± 130548.3054446746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6731527.7272727275,
            "unit": "ns",
            "range": "± 170179.46666392233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42827.60526315789,
            "unit": "ns",
            "range": "± 5142.432803424655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3757571.1106770835,
            "unit": "ns",
            "range": "± 51520.19243456206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1141421.7550223214,
            "unit": "ns",
            "range": "± 6239.883331526127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729328.9477914664,
            "unit": "ns",
            "range": "± 1971.9546765519694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927911.4615885417,
            "unit": "ns",
            "range": "± 2486.048687549179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616245.8815354567,
            "unit": "ns",
            "range": "± 1008.1898014920854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566811.0944260817,
            "unit": "ns",
            "range": "± 2144.6527690772914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234233.21649484537,
            "unit": "ns",
            "range": "± 14725.69941054499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236028.58695652173,
            "unit": "ns",
            "range": "± 10706.734120250636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164828.7105263158,
            "unit": "ns",
            "range": "± 5563.532758219197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3158931.714285714,
            "unit": "ns",
            "range": "± 28117.901452027567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3003051.076923077,
            "unit": "ns",
            "range": "± 45551.711009689374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25870.8,
            "unit": "ns",
            "range": "± 3954.2527700814694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81245.64210526316,
            "unit": "ns",
            "range": "± 14825.549979332896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99183.95454545454,
            "unit": "ns",
            "range": "± 2346.564002298492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90096.26190476191,
            "unit": "ns",
            "range": "± 5953.881912008814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5821.19587628866,
            "unit": "ns",
            "range": "± 1290.8810431185432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21177.34693877551,
            "unit": "ns",
            "range": "± 3022.9899826320343"
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
          "id": "150eb9b3bca57ed032eb530d78411893d9d3779f",
          "message": "Typo fix",
          "timestamp": "2023-11-20T11:29:26+09:00",
          "tree_id": "3b29e4f3c11f13950463ba44b5d3b76ea6a30ea0",
          "url": "https://github.com/greymistcube/libplanet/commit/150eb9b3bca57ed032eb530d78411893d9d3779f"
        },
        "date": 1700448012379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200874.875,
            "unit": "ns",
            "range": "± 7878.778646640985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188677.05714285714,
            "unit": "ns",
            "range": "± 5364.298506536236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161420.4,
            "unit": "ns",
            "range": "± 3022.070737566734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3027626.6875,
            "unit": "ns",
            "range": "± 57667.09461696939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765424.1219512196,
            "unit": "ns",
            "range": "± 98313.39841374499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14278.84693877551,
            "unit": "ns",
            "range": "± 2815.3070600398314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64001.78350515464,
            "unit": "ns",
            "range": "± 6070.307778486888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98869.53608247422,
            "unit": "ns",
            "range": "± 7435.369734224519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60066.38144329897,
            "unit": "ns",
            "range": "± 11619.805647258852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3142.6894736842105,
            "unit": "ns",
            "range": "± 563.9194769501783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12372.705263157895,
            "unit": "ns",
            "range": "± 2729.647104748408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3648277.8916666666,
            "unit": "ns",
            "range": "± 56356.79293657289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1122532.5968017578,
            "unit": "ns",
            "range": "± 17407.232617268684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735229.732421875,
            "unit": "ns",
            "range": "± 860.175520312475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910457.6841947115,
            "unit": "ns",
            "range": "± 24040.1863112561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602250.2045200893,
            "unit": "ns",
            "range": "± 4917.465507646895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568557.7536272322,
            "unit": "ns",
            "range": "± 5128.321653869511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40861.592783505155,
            "unit": "ns",
            "range": "± 5239.854868542151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2426789.970588235,
            "unit": "ns",
            "range": "± 77702.56289930416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2488474.2153846156,
            "unit": "ns",
            "range": "± 102417.56912047188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3214124.9545454546,
            "unit": "ns",
            "range": "± 77606.70603478326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2943945.794871795,
            "unit": "ns",
            "range": "± 101937.74503928197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6575202.785714285,
            "unit": "ns",
            "range": "± 151206.97097261847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694352.571428572,
            "unit": "ns",
            "range": "± 16591.316312894087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13750078.384615384,
            "unit": "ns",
            "range": "± 160202.24825593556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36489995.9,
            "unit": "ns",
            "range": "± 418928.8121535686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76877214.93333334,
            "unit": "ns",
            "range": "± 1337603.3607969177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154938884.53333333,
            "unit": "ns",
            "range": "± 2241563.429534264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951476.8152173914,
            "unit": "ns",
            "range": "± 78328.16903652115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1851929.7727272727,
            "unit": "ns",
            "range": "± 57707.93309159968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1360536.9518072288,
            "unit": "ns",
            "range": "± 68793.03333752726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5549499.208333333,
            "unit": "ns",
            "range": "± 333930.450796945"
          }
        ]
      }
    ]
  }
}