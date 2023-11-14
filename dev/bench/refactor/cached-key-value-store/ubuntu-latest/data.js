window.BENCHMARK_DATA = {
  "lastUpdate": 1699953963829,
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
      }
    ]
  }
}