window.BENCHMARK_DATA = {
  "lastUpdate": 1693554252236,
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
          "id": "081800f6ea9ad2fa55fb010ab82f519a554ae616",
          "message": "Cleanup",
          "timestamp": "2023-09-01T16:17:44+09:00",
          "tree_id": "830eaf91878beea538b2c3f121b1353419b4be6d",
          "url": "https://github.com/greymistcube/libplanet/commit/081800f6ea9ad2fa55fb010ab82f519a554ae616"
        },
        "date": 1693553497777,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7571914.566666666,
            "unit": "ns",
            "range": "± 121804.1533425492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18493410.766666666,
            "unit": "ns",
            "range": "± 299436.5935730603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46333519.34615385,
            "unit": "ns",
            "range": "± 1222314.6974186949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91846635.52941176,
            "unit": "ns",
            "range": "± 1411555.2699462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187659884.66666666,
            "unit": "ns",
            "range": "± 1498175.7580544255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53922.60752688172,
            "unit": "ns",
            "range": "± 5610.196804387923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286610.51086956525,
            "unit": "ns",
            "range": "± 17750.363432586153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273550.1304347826,
            "unit": "ns",
            "range": "± 12379.576776849564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260768.05714285714,
            "unit": "ns",
            "range": "± 8443.230075882435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3840592.9565217393,
            "unit": "ns",
            "range": "± 97076.89901800825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3503348,
            "unit": "ns",
            "range": "± 71803.42189863198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17237.01111111111,
            "unit": "ns",
            "range": "± 1615.7681061677338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80477.64772727272,
            "unit": "ns",
            "range": "± 5990.717323233615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75508.81318681319,
            "unit": "ns",
            "range": "± 7535.558426423779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82812.02061855671,
            "unit": "ns",
            "range": "± 12002.846793382132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4527.89247311828,
            "unit": "ns",
            "range": "± 435.180284039435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17985.55747126437,
            "unit": "ns",
            "range": "± 2430.321384414491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384203.65,
            "unit": "ns",
            "range": "± 142428.09199572582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2734848.053333333,
            "unit": "ns",
            "range": "± 137799.6218025145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1948123.6134020619,
            "unit": "ns",
            "range": "± 161282.2761381731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5190651.679245283,
            "unit": "ns",
            "range": "± 213247.78059560864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3035596.961038961,
            "unit": "ns",
            "range": "± 154582.53939523714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3151714.8666666667,
            "unit": "ns",
            "range": "± 55733.026619086544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4050828.227272727,
            "unit": "ns",
            "range": "± 98363.91168521774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3621078.64516129,
            "unit": "ns",
            "range": "± 163267.35337607883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6682020.821428572,
            "unit": "ns",
            "range": "± 260012.37664724607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5240873.402901785,
            "unit": "ns",
            "range": "± 33932.024038001495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529685.6966145833,
            "unit": "ns",
            "range": "± 6120.694692486146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 949330.1236979166,
            "unit": "ns",
            "range": "± 4270.066786756858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2330322.640364583,
            "unit": "ns",
            "range": "± 8927.109866586034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 738378.2034040178,
            "unit": "ns",
            "range": "± 3248.3686183499863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 677126.798828125,
            "unit": "ns",
            "range": "± 2267.884294609499"
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
          "id": "1a725f7ed14b46f64b8e468e465927d64dda99e5",
          "message": "Changelog",
          "timestamp": "2023-09-01T16:26:51+09:00",
          "tree_id": "b3341a60893bb0079597710f55dd152f66cbe3af",
          "url": "https://github.com/greymistcube/libplanet/commit/1a725f7ed14b46f64b8e468e465927d64dda99e5"
        },
        "date": 1693554237767,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8767090.139240507,
            "unit": "ns",
            "range": "± 454295.73279318365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21289377.54347826,
            "unit": "ns",
            "range": "± 814745.4275894118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55051119.40909091,
            "unit": "ns",
            "range": "± 1890189.7996819126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106113157.51754385,
            "unit": "ns",
            "range": "± 4449658.472127353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226078384.7857143,
            "unit": "ns",
            "range": "± 3211813.4276150735"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70949.85869565218,
            "unit": "ns",
            "range": "± 10191.98199252028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310300.33950617287,
            "unit": "ns",
            "range": "± 16178.966588951833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301425.63636363635,
            "unit": "ns",
            "range": "± 14195.252732609495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302213.05555555556,
            "unit": "ns",
            "range": "± 6400.99518202142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4151583.4836065574,
            "unit": "ns",
            "range": "± 186034.72480493993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3744538.076923077,
            "unit": "ns",
            "range": "± 46103.473855848686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23448.166666666668,
            "unit": "ns",
            "range": "± 4440.769332747049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106162.27551020408,
            "unit": "ns",
            "range": "± 19756.933557578446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123440.26842105263,
            "unit": "ns",
            "range": "± 19718.568782194638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116660.32291666667,
            "unit": "ns",
            "range": "± 21827.62498978364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7903.608695652174,
            "unit": "ns",
            "range": "± 1052.7097421617393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23154.627659574468,
            "unit": "ns",
            "range": "± 4544.799957115216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1453427.948979592,
            "unit": "ns",
            "range": "± 203202.01839128265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2726836.9736842103,
            "unit": "ns",
            "range": "± 111238.1287061207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1981259.9285714286,
            "unit": "ns",
            "range": "± 187248.20682036798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5700181.538461538,
            "unit": "ns",
            "range": "± 232451.81981024912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3636827.6464646463,
            "unit": "ns",
            "range": "± 327237.78982394986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3713409.17,
            "unit": "ns",
            "range": "± 382859.78789551015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4541916.886597938,
            "unit": "ns",
            "range": "± 321749.335175753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4146554.136842105,
            "unit": "ns",
            "range": "± 344650.27676322917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7267651.865168539,
            "unit": "ns",
            "range": "± 632137.5655787273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5580401.312934028,
            "unit": "ns",
            "range": "± 106426.10899830125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1714323.2278645833,
            "unit": "ns",
            "range": "± 14327.763228713298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1018051.6184430803,
            "unit": "ns",
            "range": "± 11885.202673490052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2499859.5876116073,
            "unit": "ns",
            "range": "± 18386.146597353738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811220.3901692708,
            "unit": "ns",
            "range": "± 12112.517924644066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717990.7363891602,
            "unit": "ns",
            "range": "± 13429.477310336717"
          }
        ]
      }
    ]
  }
}