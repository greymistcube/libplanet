window.BENCHMARK_DATA = {
  "lastUpdate": 1687488571272,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c59018e3f7b058437f3ded9b3e3cc54e59ec2c53",
          "message": "Merge pull request #3240 from greymistcube/release/2.2.0\n\n🚀 Release 2.2.0",
          "timestamp": "2023-06-23T11:31:50+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/greymistcube/libplanet/commit/c59018e3f7b058437f3ded9b3e3cc54e59ec2c53"
        },
        "date": 1687488485621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3350435.9285714286,
            "unit": "ns",
            "range": "± 47605.63987025113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3482720.230769231,
            "unit": "ns",
            "range": "± 38360.935140569425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4287840.730769231,
            "unit": "ns",
            "range": "± 116017.57219785551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4450749.470588235,
            "unit": "ns",
            "range": "± 130776.91822133142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7029557.590909091,
            "unit": "ns",
            "range": "± 164826.0050040241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8027517.428571428,
            "unit": "ns",
            "range": "± 33372.93387373455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21311109.333333332,
            "unit": "ns",
            "range": "± 306068.4214879007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56523408.5,
            "unit": "ns",
            "range": "± 1176046.489985046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107591381.27777778,
            "unit": "ns",
            "range": "± 2238875.4309979663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210080234.53333333,
            "unit": "ns",
            "range": "± 2237565.2250679554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277788,
            "unit": "ns",
            "range": "± 5475.997881665039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267080.6666666667,
            "unit": "ns",
            "range": "± 9585.557333737774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232347.22727272726,
            "unit": "ns",
            "range": "± 5410.432664080952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4342977.5625,
            "unit": "ns",
            "range": "± 81664.3989605987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3971659.3333333335,
            "unit": "ns",
            "range": "± 31520.268472937543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17173.833333333332,
            "unit": "ns",
            "range": "± 1175.4904427084366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84295.7741935484,
            "unit": "ns",
            "range": "± 3753.7989737146045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73499.47619047618,
            "unit": "ns",
            "range": "± 1676.718092556039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89676.80612244898,
            "unit": "ns",
            "range": "± 12813.603688170158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4509.34693877551,
            "unit": "ns",
            "range": "± 671.0605101550094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16714.0625,
            "unit": "ns",
            "range": "± 1312.1980981102704"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48462.59090909091,
            "unit": "ns",
            "range": "± 2686.501800236699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6090845.270089285,
            "unit": "ns",
            "range": "± 18405.897690780097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925990.3943917411,
            "unit": "ns",
            "range": "± 3129.7100179453505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390847.662890625,
            "unit": "ns",
            "range": "± 2381.8256235072827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668298.183035714,
            "unit": "ns",
            "range": "± 3244.429504982732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847489.6090494791,
            "unit": "ns",
            "range": "± 598.8767631964643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762557.6063151042,
            "unit": "ns",
            "range": "± 288.166918375136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586024.2758620689,
            "unit": "ns",
            "range": "± 45215.945802098686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770060.858974359,
            "unit": "ns",
            "range": "± 95277.40665758101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2337090.8804347827,
            "unit": "ns",
            "range": "± 126302.1822153053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5491906.083333333,
            "unit": "ns",
            "range": "± 130278.66183481857"
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
          "id": "2641c8b47244fea95d46e0e36a4917fa43409b67",
          "message": "Prepare 2.2.1",
          "timestamp": "2023-06-23T11:35:37+09:00",
          "tree_id": "58bd13e35f132365d6012e0272eec3219a5dbcbb",
          "url": "https://github.com/greymistcube/libplanet/commit/2641c8b47244fea95d46e0e36a4917fa43409b67"
        },
        "date": 1687488564220,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3516326.703703704,
            "unit": "ns",
            "range": "± 84592.17127980525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3656353.533333333,
            "unit": "ns",
            "range": "± 64008.71937798415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4564493.6875,
            "unit": "ns",
            "range": "± 89483.85479680586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4562792.775,
            "unit": "ns",
            "range": "± 151268.03327825465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7191232.064516129,
            "unit": "ns",
            "range": "± 215323.38382704518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8449286.347826088,
            "unit": "ns",
            "range": "± 210926.05561376864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22596410.35714286,
            "unit": "ns",
            "range": "± 261321.46541954123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56186351.705882356,
            "unit": "ns",
            "range": "± 1087621.4715132262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113045104.53333333,
            "unit": "ns",
            "range": "± 1762664.2555518404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222045805.8,
            "unit": "ns",
            "range": "± 3761663.517072205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290072.72,
            "unit": "ns",
            "range": "± 6907.831778254785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279502.75,
            "unit": "ns",
            "range": "± 11853.19070545986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244642.14285714287,
            "unit": "ns",
            "range": "± 8900.477790878609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4521965.933333334,
            "unit": "ns",
            "range": "± 55910.66199044262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4148830.2,
            "unit": "ns",
            "range": "± 52659.4875337226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18233.33870967742,
            "unit": "ns",
            "range": "± 1624.000550775786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89214.13541666667,
            "unit": "ns",
            "range": "± 5889.99359774434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72669.70588235294,
            "unit": "ns",
            "range": "± 1437.5559017263417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94590.1182795699,
            "unit": "ns",
            "range": "± 9510.105916350549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5170.989583333333,
            "unit": "ns",
            "range": "± 636.1100615590565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18072.385416666668,
            "unit": "ns",
            "range": "± 1369.6731947499984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47662.4606741573,
            "unit": "ns",
            "range": "± 2661.1468821824815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6143792.997395833,
            "unit": "ns",
            "range": "± 29254.286602959335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914682.6798270089,
            "unit": "ns",
            "range": "± 4382.697801433221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387409.9704427083,
            "unit": "ns",
            "range": "± 4493.878771702921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670800.2942708335,
            "unit": "ns",
            "range": "± 7601.9326199746365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849681.5832682292,
            "unit": "ns",
            "range": "± 954.4532351462914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767607.508203125,
            "unit": "ns",
            "range": "± 943.7569320585662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1501938.3139534884,
            "unit": "ns",
            "range": "± 78552.57467113971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2839173.6315789474,
            "unit": "ns",
            "range": "± 89486.0163457295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2447245.6086956523,
            "unit": "ns",
            "range": "± 116852.06189492176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5827348.096153846,
            "unit": "ns",
            "range": "± 237532.2268522373"
          }
        ]
      }
    ]
  }
}