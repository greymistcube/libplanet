window.BENCHMARK_DATA = {
  "lastUpdate": 1695170990224,
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
          "id": "83ea68379a7ee1222db323c0b069033faeb46d6c",
          "message": "Remove unused ExceptionMetadata from TxFailure",
          "timestamp": "2023-09-20T09:13:08+09:00",
          "tree_id": "520c196eeee8ba5ec7c963827cf256c6ad7f685b",
          "url": "https://github.com/greymistcube/libplanet/commit/83ea68379a7ee1222db323c0b069033faeb46d6c"
        },
        "date": 1695170515554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662028.7234042552,
            "unit": "ns",
            "range": "± 131838.98261947307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3159726.76056338,
            "unit": "ns",
            "range": "± 152746.40978502008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2083245.652173913,
            "unit": "ns",
            "range": "± 144075.77708042474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5415150.793650794,
            "unit": "ns",
            "range": "± 247644.74091119494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59543.47826086957,
            "unit": "ns",
            "range": "± 4497.137168667188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9934580,
            "unit": "ns",
            "range": "± 371387.5763090826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25601960.975609757,
            "unit": "ns",
            "range": "± 915127.1662665382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63749105.2631579,
            "unit": "ns",
            "range": "± 1318001.782781497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128655524.24242425,
            "unit": "ns",
            "range": "± 4036366.651924592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261876952.27272728,
            "unit": "ns",
            "range": "± 9774903.920386398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5612412.857142857,
            "unit": "ns",
            "range": "± 183853.81765156708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1775441.8212890625,
            "unit": "ns",
            "range": "± 34131.40283543506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323968.8626802885,
            "unit": "ns",
            "range": "± 36049.5224419515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3251367.6432291665,
            "unit": "ns",
            "range": "± 33167.984556477386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048984.228515625,
            "unit": "ns",
            "range": "± 27078.561619269673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965756.1662946428,
            "unit": "ns",
            "range": "± 16857.134719237587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4234446.875,
            "unit": "ns",
            "range": "± 131684.150427416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4349189.47368421,
            "unit": "ns",
            "range": "± 94637.49488757872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5254828.301886792,
            "unit": "ns",
            "range": "± 206097.3074669776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4670864.102564103,
            "unit": "ns",
            "range": "± 159986.03473129097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7325643.58974359,
            "unit": "ns",
            "range": "± 250374.48351879016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315628.5714285714,
            "unit": "ns",
            "range": "± 10295.846433465906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304255.55555555556,
            "unit": "ns",
            "range": "± 9481.484044311823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292511.90476190473,
            "unit": "ns",
            "range": "± 10597.749470730425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5089014.285714285,
            "unit": "ns",
            "range": "± 119074.2763392425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4599916.666666667,
            "unit": "ns",
            "range": "± 39564.78768099766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27928.72340425532,
            "unit": "ns",
            "range": "± 2094.315005443784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111829.21348314607,
            "unit": "ns",
            "range": "± 7282.188766984687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102939.39393939394,
            "unit": "ns",
            "range": "± 11327.479844561301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112350.51546391753,
            "unit": "ns",
            "range": "± 17032.34743382512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7770.408163265306,
            "unit": "ns",
            "range": "± 1207.0419823474117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26735.106382978724,
            "unit": "ns",
            "range": "± 2542.1482510853803"
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
          "id": "5659583e81cc89edda326d03130aec7857ba79d8",
          "message": "Changelog",
          "timestamp": "2023-09-20T09:32:15+09:00",
          "tree_id": "45ff3c7c020e6dee9b8c53d9978eef4a4721cf01",
          "url": "https://github.com/greymistcube/libplanet/commit/5659583e81cc89edda326d03130aec7857ba79d8"
        },
        "date": 1695170908258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1269311.4583333333,
            "unit": "ns",
            "range": "± 87739.50303962492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2364898.611111111,
            "unit": "ns",
            "range": "± 115280.47059000179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1576777.8350515463,
            "unit": "ns",
            "range": "± 107483.82411463525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4437081,
            "unit": "ns",
            "range": "± 278710.6822187271"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44917.391304347824,
            "unit": "ns",
            "range": "± 3011.648035404258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7238426.666666667,
            "unit": "ns",
            "range": "± 73095.45096913318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19760665,
            "unit": "ns",
            "range": "± 451240.0134774817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49012826.666666664,
            "unit": "ns",
            "range": "± 812337.6624344853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96376465.38461539,
            "unit": "ns",
            "range": "± 1496546.3144888824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198061560,
            "unit": "ns",
            "range": "± 3539653.0951492973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4446395.870535715,
            "unit": "ns",
            "range": "± 28019.408862241577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1405266.6927083333,
            "unit": "ns",
            "range": "± 6754.834560377023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052679.1666666667,
            "unit": "ns",
            "range": "± 5983.4423523299165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651759.4308035714,
            "unit": "ns",
            "range": "± 11702.390990377393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842501.7513020834,
            "unit": "ns",
            "range": "± 6146.358939086436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747021.9308035715,
            "unit": "ns",
            "range": "± 3583.10672731433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3181700,
            "unit": "ns",
            "range": "± 58247.09434813036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3299404.347826087,
            "unit": "ns",
            "range": "± 80089.1235281663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4042637.037037037,
            "unit": "ns",
            "range": "± 111516.02557531344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3584064.705882353,
            "unit": "ns",
            "range": "± 72872.53375909601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5716792,
            "unit": "ns",
            "range": "± 150980.48968878947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242088.88888888888,
            "unit": "ns",
            "range": "± 7087.444745172481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239271.11111111112,
            "unit": "ns",
            "range": "± 7503.169700570257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210117.64705882352,
            "unit": "ns",
            "range": "± 6646.278092114289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937869.230769231,
            "unit": "ns",
            "range": "± 41535.9158764112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3640711.111111111,
            "unit": "ns",
            "range": "± 74543.28303577482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18950,
            "unit": "ns",
            "range": "± 1642.2349052041757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81662.16216216216,
            "unit": "ns",
            "range": "± 4106.21656018002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68578.0487804878,
            "unit": "ns",
            "range": "± 2320.1844964487145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82477.55102040817,
            "unit": "ns",
            "range": "± 14353.019945974263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4497.872340425532,
            "unit": "ns",
            "range": "± 645.077093567952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17917.582417582416,
            "unit": "ns",
            "range": "± 1028.8713780528221"
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
          "id": "e3c71bf71f7add86da3a4f1bdcdd534debca8ff4",
          "message": "Changelog",
          "timestamp": "2023-09-20T09:31:37+09:00",
          "tree_id": "88052e6e74edf532d224a56d2f07237a4d9c9bd6",
          "url": "https://github.com/greymistcube/libplanet/commit/e3c71bf71f7add86da3a4f1bdcdd534debca8ff4"
        },
        "date": 1695170962538,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500393.6170212766,
            "unit": "ns",
            "range": "± 88695.42763610014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2900273.015873016,
            "unit": "ns",
            "range": "± 132994.85826387716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1888988.1720430108,
            "unit": "ns",
            "range": "± 114325.66740738491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5203074.747474748,
            "unit": "ns",
            "range": "± 321380.82545174944"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55087.5,
            "unit": "ns",
            "range": "± 3067.2467904560954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8743014.285714285,
            "unit": "ns",
            "range": "± 151535.61580414968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24353135.714285713,
            "unit": "ns",
            "range": "± 391042.2593868515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60562564.28571428,
            "unit": "ns",
            "range": "± 840911.2306641783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122168703.33333333,
            "unit": "ns",
            "range": "± 3632361.238252732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243547452.63157895,
            "unit": "ns",
            "range": "± 4641010.1834225245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5457570.256696428,
            "unit": "ns",
            "range": "± 42867.459855587775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1691476.953125,
            "unit": "ns",
            "range": "± 18404.1779491392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1287595.4520089286,
            "unit": "ns",
            "range": "± 14527.624754051307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3189526.953125,
            "unit": "ns",
            "range": "± 25825.967931406347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996874.5192307692,
            "unit": "ns",
            "range": "± 5668.539315789047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926461.1848958334,
            "unit": "ns",
            "range": "± 7239.694833551461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3734827.5862068967,
            "unit": "ns",
            "range": "± 162377.17495063329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4014907.407407407,
            "unit": "ns",
            "range": "± 105806.93930247866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4757179.069767442,
            "unit": "ns",
            "range": "± 172147.6021687418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4319273.9130434785,
            "unit": "ns",
            "range": "± 166151.882906083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6820068.9655172415,
            "unit": "ns",
            "range": "± 195234.48740909385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294149.01960784313,
            "unit": "ns",
            "range": "± 11651.220923989376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281868,
            "unit": "ns",
            "range": "± 11293.82059683389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244131.81818181818,
            "unit": "ns",
            "range": "± 13460.402083237492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4741415.625,
            "unit": "ns",
            "range": "± 144756.45199142303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4338723.076923077,
            "unit": "ns",
            "range": "± 57594.79365715495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23145.744680851065,
            "unit": "ns",
            "range": "± 1985.4126568504983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96075.80645161291,
            "unit": "ns",
            "range": "± 6617.399713039242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77773.07692307692,
            "unit": "ns",
            "range": "± 3201.354822547662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94720.20202020202,
            "unit": "ns",
            "range": "± 16098.833648955151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5532.978723404255,
            "unit": "ns",
            "range": "± 721.7643105422618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22162.637362637364,
            "unit": "ns",
            "range": "± 1911.2327814295008"
          }
        ]
      }
    ]
  }
}