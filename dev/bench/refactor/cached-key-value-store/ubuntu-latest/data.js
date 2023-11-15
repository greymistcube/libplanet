window.BENCHMARK_DATA = {
  "lastUpdate": 1700007627963,
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
          "id": "0f9075efda158932155ab958a4efe01d5336e91b",
          "message": "Added logging",
          "timestamp": "2023-11-14T15:40:51+09:00",
          "tree_id": "6c7453fc44533f705b7c7c8d0ddfdef09a0f7838",
          "url": "https://github.com/greymistcube/libplanet/commit/0f9075efda158932155ab958a4efe01d5336e91b"
        },
        "date": 1699946142784,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5622367.714285715,
            "unit": "ns",
            "range": "± 28415.674494704697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14646350.066666666,
            "unit": "ns",
            "range": "± 268725.1062390887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37356981.7,
            "unit": "ns",
            "range": "± 344302.52857235057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88175520.61538461,
            "unit": "ns",
            "range": "± 1099520.429297893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150460147.07142857,
            "unit": "ns",
            "range": "± 792512.2046626804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991707.081632653,
            "unit": "ns",
            "range": "± 92324.41070393202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1921625.4642857143,
            "unit": "ns",
            "range": "± 102723.29736436787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518732.398989899,
            "unit": "ns",
            "range": "± 140966.69827038937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6697054.533333333,
            "unit": "ns",
            "range": "± 337803.0218826292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2365942.1,
            "unit": "ns",
            "range": "± 83554.3593672126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2603253.882352941,
            "unit": "ns",
            "range": "± 51660.87265750836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3267213.411764706,
            "unit": "ns",
            "range": "± 59483.20731418535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3021946.1153846155,
            "unit": "ns",
            "range": "± 103495.50578969101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7405817.285714285,
            "unit": "ns",
            "range": "± 122219.23190312157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41503.604166666664,
            "unit": "ns",
            "range": "± 5304.3557304682045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3670236.7529296875,
            "unit": "ns",
            "range": "± 13029.820854984102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1164647.2455357143,
            "unit": "ns",
            "range": "± 19485.80554498063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733318.3811383928,
            "unit": "ns",
            "range": "± 7348.562825575363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925625.98046875,
            "unit": "ns",
            "range": "± 3538.937336775518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635449.5294471154,
            "unit": "ns",
            "range": "± 2345.0968197522757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569645.0584435096,
            "unit": "ns",
            "range": "± 4533.7150875085645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200766.66216216216,
            "unit": "ns",
            "range": "± 10055.855757780559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201455.3896103896,
            "unit": "ns",
            "range": "± 10316.919187936723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173005.25,
            "unit": "ns",
            "range": "± 1954.2283352678203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3006161.8571428573,
            "unit": "ns",
            "range": "± 45505.58310438764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2850680.6666666665,
            "unit": "ns",
            "range": "± 36980.44459414938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15464.945652173914,
            "unit": "ns",
            "range": "± 2209.488187784427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69697.0744680851,
            "unit": "ns",
            "range": "± 6178.469186539538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52978.69512195122,
            "unit": "ns",
            "range": "± 3904.1892645348594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56314.72826086957,
            "unit": "ns",
            "range": "± 8034.4101845287005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3863.917525773196,
            "unit": "ns",
            "range": "± 1562.5374106861618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16019.71052631579,
            "unit": "ns",
            "range": "± 1977.127977727681"
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
          "id": "dc9ce15013e30eaa5d96943193a5b49c9b74c1ed",
          "message": "Tuned cache size and report period",
          "timestamp": "2023-11-14T18:14:55+09:00",
          "tree_id": "979f040ca4b75b7084ff6b3fcaa50dac3556c19b",
          "url": "https://github.com/greymistcube/libplanet/commit/dc9ce15013e30eaa5d96943193a5b49c9b74c1ed"
        },
        "date": 1699953956873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5607356.785714285,
            "unit": "ns",
            "range": "± 80466.57832955204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14336681.192307692,
            "unit": "ns",
            "range": "± 67072.2769734071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36649206,
            "unit": "ns",
            "range": "± 206403.97769745946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75763480.5,
            "unit": "ns",
            "range": "± 542791.274675599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148131871.2142857,
            "unit": "ns",
            "range": "± 980489.5041016054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970271.8387096775,
            "unit": "ns",
            "range": "± 79989.44599965922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907619.2794117648,
            "unit": "ns",
            "range": "± 90615.98305212417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1516446.2474226805,
            "unit": "ns",
            "range": "± 129430.34737062175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6670487.982142857,
            "unit": "ns",
            "range": "± 283320.00610729214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429804.85106383,
            "unit": "ns",
            "range": "± 89103.56790982022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2566870.972222222,
            "unit": "ns",
            "range": "± 78648.18420662492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3178507.6153846155,
            "unit": "ns",
            "range": "± 85186.06196946865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3024835.7407407407,
            "unit": "ns",
            "range": "± 127532.24873879905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7599328.68,
            "unit": "ns",
            "range": "± 200008.03031435178"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43670.0206185567,
            "unit": "ns",
            "range": "± 5767.518597317547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3601939.658954327,
            "unit": "ns",
            "range": "± 29241.166256436638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1192025.8011997768,
            "unit": "ns",
            "range": "± 1798.1222672481742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748259.9311147836,
            "unit": "ns",
            "range": "± 2585.463766925916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925269.863671875,
            "unit": "ns",
            "range": "± 21436.319234100905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617186.2939453125,
            "unit": "ns",
            "range": "± 4863.930910480153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573322.7594866072,
            "unit": "ns",
            "range": "± 4133.0825698943945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197680.0357142857,
            "unit": "ns",
            "range": "± 8383.100647816926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204836.6607142857,
            "unit": "ns",
            "range": "± 7366.001913649163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169237.80952380953,
            "unit": "ns",
            "range": "± 6136.67819588962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3004902.8,
            "unit": "ns",
            "range": "± 43297.501818729186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2751978.923076923,
            "unit": "ns",
            "range": "± 26483.085867717968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12707.8,
            "unit": "ns",
            "range": "± 1265.0316885492268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65895.13402061856,
            "unit": "ns",
            "range": "± 8174.084456414759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56491.085106382976,
            "unit": "ns",
            "range": "± 5707.435572118473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77637.43298969071,
            "unit": "ns",
            "range": "± 12987.438323487824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4711.747474747474,
            "unit": "ns",
            "range": "± 1835.2729338446482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15136.555555555555,
            "unit": "ns",
            "range": "± 3548.2087208877842"
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
          "id": "afa25e4a5cf588c43c32aa4bb319e908ab6151bd",
          "message": "Tuned cache size and report period",
          "timestamp": "2023-11-14T18:16:02+09:00",
          "tree_id": "437d32b40becebf2b160befc86a6c16a4ecca2d2",
          "url": "https://github.com/greymistcube/libplanet/commit/afa25e4a5cf588c43c32aa4bb319e908ab6151bd"
        },
        "date": 1699954249952,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8109452.733333333,
            "unit": "ns",
            "range": "± 125602.70841567224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22217006.2,
            "unit": "ns",
            "range": "± 317620.95157732547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55705773.4,
            "unit": "ns",
            "range": "± 766506.6553093606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113791543.5,
            "unit": "ns",
            "range": "± 1325620.4633321275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220938112.625,
            "unit": "ns",
            "range": "± 3997399.6117995153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352083.125,
            "unit": "ns",
            "range": "± 62427.92612757362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652768.12,
            "unit": "ns",
            "range": "± 69986.55476430216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2116775.7126436783,
            "unit": "ns",
            "range": "± 114138.7773870759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9769169.136986302,
            "unit": "ns",
            "range": "± 483863.60089326586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3616411.911764706,
            "unit": "ns",
            "range": "± 112828.47420145475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3648794.621621622,
            "unit": "ns",
            "range": "± 120587.25712905328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4447201.5,
            "unit": "ns",
            "range": "± 107091.0812425128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4314236.739130435,
            "unit": "ns",
            "range": "± 107961.11333304539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10999254.69047619,
            "unit": "ns",
            "range": "± 399184.7370480507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50439.125,
            "unit": "ns",
            "range": "± 2798.487977677749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5065072.659598215,
            "unit": "ns",
            "range": "± 29195.166688311867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588641.9298377405,
            "unit": "ns",
            "range": "± 1874.6863709326067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1103355.240234375,
            "unit": "ns",
            "range": "± 1817.8838684978846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617219.5559895835,
            "unit": "ns",
            "range": "± 2420.062272524102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825927.3233723958,
            "unit": "ns",
            "range": "± 1221.5185417431817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763760.8621651785,
            "unit": "ns",
            "range": "± 530.7087976906687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275282.7826086957,
            "unit": "ns",
            "range": "± 10600.692040120239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265879.8888888889,
            "unit": "ns",
            "range": "± 8207.788641729365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233383.25,
            "unit": "ns",
            "range": "± 7244.683812864927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4341675.375,
            "unit": "ns",
            "range": "± 77534.11656802012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4132943.2,
            "unit": "ns",
            "range": "± 73317.03520835289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20603.41935483871,
            "unit": "ns",
            "range": "± 1278.772044500204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92444.86458333333,
            "unit": "ns",
            "range": "± 7088.039827944107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75389.07246376811,
            "unit": "ns",
            "range": "± 3610.009790270416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84326.60824742269,
            "unit": "ns",
            "range": "± 8419.579119722352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5232.724489795918,
            "unit": "ns",
            "range": "± 698.70468933536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20868.947916666668,
            "unit": "ns",
            "range": "± 1810.3540006819353"
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
          "id": "1c0f1225d6bdfa95a7a6f6f750da372b430b5b65",
          "message": "Increased cache size; more info for logging",
          "timestamp": "2023-11-14T21:18:03+09:00",
          "tree_id": "b8d1e1f389a6ba89e36642eb75b042f5045a6623",
          "url": "https://github.com/greymistcube/libplanet/commit/1c0f1225d6bdfa95a7a6f6f750da372b430b5b65"
        },
        "date": 1699965795311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5383204.615384615,
            "unit": "ns",
            "range": "± 22078.814130815023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14364429.75,
            "unit": "ns",
            "range": "± 167883.01171520655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36430124.86666667,
            "unit": "ns",
            "range": "± 153770.44680992444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74609951.6,
            "unit": "ns",
            "range": "± 435428.8109294101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150619206.2857143,
            "unit": "ns",
            "range": "± 925879.5638669068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991780.8,
            "unit": "ns",
            "range": "± 88411.9201218725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1910114.3088235294,
            "unit": "ns",
            "range": "± 89530.98827267745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511707.8979591837,
            "unit": "ns",
            "range": "± 154126.784412141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6691919.433333334,
            "unit": "ns",
            "range": "± 298005.4825118392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2372714.5185185187,
            "unit": "ns",
            "range": "± 61180.92894369213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2586924.966666667,
            "unit": "ns",
            "range": "± 47049.53413898205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3116019,
            "unit": "ns",
            "range": "± 31330.6602596832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2994124.743243243,
            "unit": "ns",
            "range": "± 136641.19736280633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7552230.6,
            "unit": "ns",
            "range": "± 248394.6463244657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42352.479797979795,
            "unit": "ns",
            "range": "± 6102.472809226012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3595996.3549479167,
            "unit": "ns",
            "range": "± 9069.197365771333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1145672.4828404018,
            "unit": "ns",
            "range": "± 6289.161175305952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736665.1915690104,
            "unit": "ns",
            "range": "± 2889.524425872916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951429.140625,
            "unit": "ns",
            "range": "± 7140.246194366239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629457.9555288461,
            "unit": "ns",
            "range": "± 1436.6851593906931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566094.1462590144,
            "unit": "ns",
            "range": "± 1506.6645009928739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204428.03773584907,
            "unit": "ns",
            "range": "± 8503.306442795478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196997.72307692308,
            "unit": "ns",
            "range": "± 9001.781789782808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167879.96153846153,
            "unit": "ns",
            "range": "± 4477.254484442618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3050984.6923076925,
            "unit": "ns",
            "range": "± 32327.021541286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2767725.214285714,
            "unit": "ns",
            "range": "± 33214.79292580936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13643.232323232323,
            "unit": "ns",
            "range": "± 2625.184875232338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67723.86263736263,
            "unit": "ns",
            "range": "± 5669.732599057098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67965.58,
            "unit": "ns",
            "range": "± 16926.394830058474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79246.40816326531,
            "unit": "ns",
            "range": "± 16458.52257016133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3095.581632653061,
            "unit": "ns",
            "range": "± 601.4475994772068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13922.077319587628,
            "unit": "ns",
            "range": "± 3083.047858974985"
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
          "id": "f825ca87884c86e1ea59c31ef8bc2994ef15b3c1",
          "message": "Reduce cache capacity",
          "timestamp": "2023-11-15T09:09:09+09:00",
          "tree_id": "c01cf0d6dd206a0c4782266c20139a3548c061a2",
          "url": "https://github.com/greymistcube/libplanet/commit/f825ca87884c86e1ea59c31ef8bc2994ef15b3c1"
        },
        "date": 1700007620930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5683733.071428572,
            "unit": "ns",
            "range": "± 67536.90462539071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15753424.92857143,
            "unit": "ns",
            "range": "± 218960.31650382688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37472262.1,
            "unit": "ns",
            "range": "± 248536.9845733801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77118747.63333334,
            "unit": "ns",
            "range": "± 698463.2633898985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152630597.30769232,
            "unit": "ns",
            "range": "± 1112217.1581313293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976507.6,
            "unit": "ns",
            "range": "± 82420.87884293975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1891872.6981132075,
            "unit": "ns",
            "range": "± 77602.09776694304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1504396.8421052631,
            "unit": "ns",
            "range": "± 127543.28842883407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6846339.04040404,
            "unit": "ns",
            "range": "± 430503.57089834096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2391754.9365079366,
            "unit": "ns",
            "range": "± 95913.63033191641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541141.5862068967,
            "unit": "ns",
            "range": "± 73801.94691030333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3177181.3333333335,
            "unit": "ns",
            "range": "± 58150.55356777005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3014977.8727272726,
            "unit": "ns",
            "range": "± 126367.14659146454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7656778.4375,
            "unit": "ns",
            "range": "± 237268.48611169984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41775.18556701031,
            "unit": "ns",
            "range": "± 5355.328099056072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3602951.122916667,
            "unit": "ns",
            "range": "± 45735.59871848864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1162839.6878255208,
            "unit": "ns",
            "range": "± 2005.3777224388725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740928.6440054086,
            "unit": "ns",
            "range": "± 1621.0687612688548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927834.5001395089,
            "unit": "ns",
            "range": "± 4137.295138643732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613790.2926432291,
            "unit": "ns",
            "range": "± 1291.395685424144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579281.2286658654,
            "unit": "ns",
            "range": "± 2084.8569436029225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198598.39344262294,
            "unit": "ns",
            "range": "± 8971.11138280107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195996.86301369863,
            "unit": "ns",
            "range": "± 8881.008830199711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164518.29411764705,
            "unit": "ns",
            "range": "± 3366.43291862295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3148981.533333333,
            "unit": "ns",
            "range": "± 44780.85569090349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2928699.4615384615,
            "unit": "ns",
            "range": "± 34146.84191257757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14497.364583333334,
            "unit": "ns",
            "range": "± 2687.467123401518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63350.375,
            "unit": "ns",
            "range": "± 8261.768046088466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59220.66842105263,
            "unit": "ns",
            "range": "± 7200.341829433815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59867.041666666664,
            "unit": "ns",
            "range": "± 7116.521295240678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3189.7604166666665,
            "unit": "ns",
            "range": "± 751.3997148451003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12993,
            "unit": "ns",
            "range": "± 2281.0831491493977"
          }
        ]
      }
    ]
  }
}