window.BENCHMARK_DATA = {
  "lastUpdate": 1679043180122,
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
          "id": "c88d92e42eaf0f92f832242ec182e0edb1526d4c",
          "message": "Changelog",
          "timestamp": "2023-03-17T17:30:21+09:00",
          "tree_id": "6c36baaf4c24339c0dc0ba1ef9b36b853d3e936d",
          "url": "https://github.com/greymistcube/libplanet/commit/c88d92e42eaf0f92f832242ec182e0edb1526d4c"
        },
        "date": 1679042959579,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416492.857142857,
            "unit": "ns",
            "range": "± 125907.70470107372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2554645,
            "unit": "ns",
            "range": "± 89113.02805555858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2188731.6326530613,
            "unit": "ns",
            "range": "± 156006.00543353317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4955705.555555556,
            "unit": "ns",
            "range": "± 106030.66965975803"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55166.84210526316,
            "unit": "ns",
            "range": "± 4161.977144507136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7566691.666666667,
            "unit": "ns",
            "range": "± 191429.56001954182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20562600,
            "unit": "ns",
            "range": "± 132474.51423982246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51171560,
            "unit": "ns",
            "range": "± 447589.30601293733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102470453.33333333,
            "unit": "ns",
            "range": "± 816285.7429204788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204465073.33333334,
            "unit": "ns",
            "range": "± 1256132.086700318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4903275.751201923,
            "unit": "ns",
            "range": "± 15473.324573526039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528845.01953125,
            "unit": "ns",
            "range": "± 3630.1413578189376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170947.34375,
            "unit": "ns",
            "range": "± 4128.088915900163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625583.231026786,
            "unit": "ns",
            "range": "± 8089.452151349221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832655.7686941965,
            "unit": "ns",
            "range": "± 1031.0655573617696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768406.9580078125,
            "unit": "ns",
            "range": "± 1308.359698665169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3355976.923076923,
            "unit": "ns",
            "range": "± 89550.34475731429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5250731.25,
            "unit": "ns",
            "range": "± 100200.9562080123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24153157.14285714,
            "unit": "ns",
            "range": "± 248808.5322377143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6447907.692307692,
            "unit": "ns",
            "range": "± 222181.98134414072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27124013.333333332,
            "unit": "ns",
            "range": "± 326974.5181567052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192191.17647058822,
            "unit": "ns",
            "range": "± 8709.571596882888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192055.55555555556,
            "unit": "ns",
            "range": "± 6242.913442773995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182795.91836734695,
            "unit": "ns",
            "range": "± 10691.252020528898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11498786.666666666,
            "unit": "ns",
            "range": "± 161005.93097623394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9321166.666666666,
            "unit": "ns",
            "range": "± 94243.73921355403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24167.021276595744,
            "unit": "ns",
            "range": "± 2146.835044715792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59741.836734693876,
            "unit": "ns",
            "range": "± 5983.257111623341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47786.73469387755,
            "unit": "ns",
            "range": "± 3972.2916015899773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114337.5,
            "unit": "ns",
            "range": "± 17729.69706156134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7609.79381443299,
            "unit": "ns",
            "range": "± 963.5718916500246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22389.79591836735,
            "unit": "ns",
            "range": "± 2978.184938000262"
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
          "id": "e91bd1b21264a90118c46bdd6e6a4984ebd773f0",
          "message": "Implemented IBencodable for BlockHash",
          "timestamp": "2023-03-17T17:27:41+09:00",
          "tree_id": "8289f76ee67db2138eb0bb233531e044803695cf",
          "url": "https://github.com/greymistcube/libplanet/commit/e91bd1b21264a90118c46bdd6e6a4984ebd773f0"
        },
        "date": 1679042963633,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1638352.0833333333,
            "unit": "ns",
            "range": "± 186033.92106034778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947634.5454545454,
            "unit": "ns",
            "range": "± 125637.78362180972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2506478.5714285714,
            "unit": "ns",
            "range": "± 208592.5912483743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5775416.666666667,
            "unit": "ns",
            "range": "± 206583.65802799514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54616.32653061225,
            "unit": "ns",
            "range": "± 2191.5887443792453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8604575.43859649,
            "unit": "ns",
            "range": "± 371425.76564633334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23910384.48275862,
            "unit": "ns",
            "range": "± 696171.2454950917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 61036462.5,
            "unit": "ns",
            "range": "± 1586802.1563242273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 118584800,
            "unit": "ns",
            "range": "± 916050.3886498027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 231039985.7142857,
            "unit": "ns",
            "range": "± 2414232.135565179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5679325.106534091,
            "unit": "ns",
            "range": "± 135499.28541173987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820692.28515625,
            "unit": "ns",
            "range": "± 11785.423087683808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372281.626674107,
            "unit": "ns",
            "range": "± 13798.292962724177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3153352.762276786,
            "unit": "ns",
            "range": "± 50153.59579213805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 968071.8052455357,
            "unit": "ns",
            "range": "± 5776.5476612828825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909077.2705078125,
            "unit": "ns",
            "range": "± 6084.358026880088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3691945.6140350876,
            "unit": "ns",
            "range": "± 146528.01300942845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5957090.625,
            "unit": "ns",
            "range": "± 180533.466398669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27258466.666666668,
            "unit": "ns",
            "range": "± 501936.84956613916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7273856,
            "unit": "ns",
            "range": "± 292225.78016991995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31394685.185185187,
            "unit": "ns",
            "range": "± 863965.644662272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210251.8987341772,
            "unit": "ns",
            "range": "± 10887.947473915456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213918.60465116278,
            "unit": "ns",
            "range": "± 7764.4260761732285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182745.36082474227,
            "unit": "ns",
            "range": "± 12597.23862448431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13055773.333333334,
            "unit": "ns",
            "range": "± 227357.2659515248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10618089.18918919,
            "unit": "ns",
            "range": "± 358641.6269014886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23562.105263157893,
            "unit": "ns",
            "range": "± 2444.497901165348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61418.94736842105,
            "unit": "ns",
            "range": "± 7130.92299144833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50897.70114942529,
            "unit": "ns",
            "range": "± 3018.5849530785367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117322.1052631579,
            "unit": "ns",
            "range": "± 20197.309589884808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6909.278350515464,
            "unit": "ns",
            "range": "± 736.9818058341633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22958.947368421053,
            "unit": "ns",
            "range": "± 1947.4748919170324"
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
          "id": "aa339121ae2fce139cb51e5a9fffa21d3e58f8fb",
          "message": "Changelog",
          "timestamp": "2023-03-17T17:33:56+09:00",
          "tree_id": "edaa51dbf9a310e61f1217962dc2578ac1139cee",
          "url": "https://github.com/greymistcube/libplanet/commit/aa339121ae2fce139cb51e5a9fffa21d3e58f8fb"
        },
        "date": 1679043158721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1584854.7368421052,
            "unit": "ns",
            "range": "± 126352.49053984454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947816.4383561644,
            "unit": "ns",
            "range": "± 146339.4655261247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2452456.9620253164,
            "unit": "ns",
            "range": "± 122081.57915975516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6116775.257731959,
            "unit": "ns",
            "range": "± 354711.9597383817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55319.753086419754,
            "unit": "ns",
            "range": "± 2913.9929543963563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8568477.777777778,
            "unit": "ns",
            "range": "± 286175.20818159246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23357521.739130434,
            "unit": "ns",
            "range": "± 570019.1519561759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57884495.833333336,
            "unit": "ns",
            "range": "± 1501238.4888540085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114370378.94736843,
            "unit": "ns",
            "range": "± 2500625.2981513217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 229115131.25,
            "unit": "ns",
            "range": "± 4413400.838615462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5522159.486607143,
            "unit": "ns",
            "range": "± 128462.05147444824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1729299.90234375,
            "unit": "ns",
            "range": "± 24550.32800206153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364625.7662259615,
            "unit": "ns",
            "range": "± 13642.803760209259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032191.2798713236,
            "unit": "ns",
            "range": "± 61495.75379657455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952465.0455729166,
            "unit": "ns",
            "range": "± 16780.92379012048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 883254.0339543269,
            "unit": "ns",
            "range": "± 8299.510839458822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3678232.3076923075,
            "unit": "ns",
            "range": "± 171394.64703908883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5878484.848484849,
            "unit": "ns",
            "range": "± 185773.69149251888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26917280.95238095,
            "unit": "ns",
            "range": "± 982707.4450492214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7166210.204081632,
            "unit": "ns",
            "range": "± 282954.1351562843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30287311.53846154,
            "unit": "ns",
            "range": "± 826310.8940716796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212972.60273972602,
            "unit": "ns",
            "range": "± 10552.214884326057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213414.93506493507,
            "unit": "ns",
            "range": "± 10920.836750207163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191151.06382978722,
            "unit": "ns",
            "range": "± 10901.55108507033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13001366.666666666,
            "unit": "ns",
            "range": "± 303148.5878794973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10281923.529411765,
            "unit": "ns",
            "range": "± 329289.19044624217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23741.935483870966,
            "unit": "ns",
            "range": "± 2003.4384887989752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62859.13978494624,
            "unit": "ns",
            "range": "± 6094.959367113904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47830,
            "unit": "ns",
            "range": "± 3471.697768132823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114438.94736842105,
            "unit": "ns",
            "range": "± 21331.428689705925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7605.154639175258,
            "unit": "ns",
            "range": "± 1094.8145898983516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22894.62365591398,
            "unit": "ns",
            "range": "± 1888.0266665972022"
          }
        ]
      }
    ]
  }
}