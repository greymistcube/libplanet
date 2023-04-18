window.BENCHMARK_DATA = {
  "lastUpdate": 1681807572214,
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
          "id": "a878c60896e7335a8a60941cd3bd7a42448e3358",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:20:20+09:00",
          "tree_id": "c254f45f3ec7cfd35c874b44f4bbbf61dda135af",
          "url": "https://github.com/greymistcube/libplanet/commit/a878c60896e7335a8a60941cd3bd7a42448e3358"
        },
        "date": 1681461416801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588156.1224489796,
            "unit": "ns",
            "range": "± 142501.2809248463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905091.111111111,
            "unit": "ns",
            "range": "± 97639.74791926377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2623893.6842105263,
            "unit": "ns",
            "range": "± 150739.46087892656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6690422.680412371,
            "unit": "ns",
            "range": "± 491340.9613634649"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55606.18556701031,
            "unit": "ns",
            "range": "± 4412.572342017695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8244885.714285715,
            "unit": "ns",
            "range": "± 195777.00397573327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23269078.94736842,
            "unit": "ns",
            "range": "± 743709.4565494136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60157237.93103448,
            "unit": "ns",
            "range": "± 1739707.325634687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118306142.85714285,
            "unit": "ns",
            "range": "± 1281796.510139809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245252283.33333334,
            "unit": "ns",
            "range": "± 4913497.065197647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5803357.34375,
            "unit": "ns",
            "range": "± 80304.81004832785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854211.42578125,
            "unit": "ns",
            "range": "± 17118.660447725313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444941.4192708333,
            "unit": "ns",
            "range": "± 25682.748045837863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3177852.6953125,
            "unit": "ns",
            "range": "± 49512.71197092153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998686.1328125,
            "unit": "ns",
            "range": "± 16058.512454537813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933396.1002604166,
            "unit": "ns",
            "range": "± 13545.312255261255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3812862.2641509436,
            "unit": "ns",
            "range": "± 158403.91558196445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3913193.9393939395,
            "unit": "ns",
            "range": "± 122537.1982792214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4542966.666666667,
            "unit": "ns",
            "range": "± 116168.06291136869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4895590.322580645,
            "unit": "ns",
            "range": "± 146336.02735904037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8030084.848484849,
            "unit": "ns",
            "range": "± 247339.01345270537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363725,
            "unit": "ns",
            "range": "± 10109.754182453184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295780,
            "unit": "ns",
            "range": "± 11845.381430097124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249516.66666666666,
            "unit": "ns",
            "range": "± 3437.1852472979144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6194766.666666667,
            "unit": "ns",
            "range": "± 115333.2356179052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4294084.615384615,
            "unit": "ns",
            "range": "± 42777.09367862365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22219.14893617021,
            "unit": "ns",
            "range": "± 2305.1730789283606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101153.0612244898,
            "unit": "ns",
            "range": "± 6466.12432050078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93224.48979591837,
            "unit": "ns",
            "range": "± 6970.099042685351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 204952.12765957447,
            "unit": "ns",
            "range": "± 17735.280001023682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8096.938775510204,
            "unit": "ns",
            "range": "± 1412.2771026854539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22157.291666666668,
            "unit": "ns",
            "range": "± 2222.6463502423444"
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
          "id": "91bdd549a29b070504f0670e33108f82ad57b082",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:22:38+09:00",
          "tree_id": "772c48669284e9f79b6634c1db15ff7daed361b0",
          "url": "https://github.com/greymistcube/libplanet/commit/91bdd549a29b070504f0670e33108f82ad57b082"
        },
        "date": 1681461523169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1321877.3195876288,
            "unit": "ns",
            "range": "± 115515.14736997573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2412704.8780487804,
            "unit": "ns",
            "range": "± 85261.89638759951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2158838.383838384,
            "unit": "ns",
            "range": "± 180041.8702476158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5498257,
            "unit": "ns",
            "range": "± 363108.83034949424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48037.36263736264,
            "unit": "ns",
            "range": "± 2821.84527301033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6756514.285714285,
            "unit": "ns",
            "range": "± 89979.69734371157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19219146.666666668,
            "unit": "ns",
            "range": "± 320316.7469567465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48567795,
            "unit": "ns",
            "range": "± 1085592.4952592284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92824541.1764706,
            "unit": "ns",
            "range": "± 1843740.0325353707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186614646.66666666,
            "unit": "ns",
            "range": "± 2820359.6601615665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4765261.197916667,
            "unit": "ns",
            "range": "± 18589.604867591577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492359.9051339286,
            "unit": "ns",
            "range": "± 3747.9306239585894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159467.03125,
            "unit": "ns",
            "range": "± 5461.124234298251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2691441.8098958335,
            "unit": "ns",
            "range": "± 8335.35442886638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837636.7578125,
            "unit": "ns",
            "range": "± 2706.833512475576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763409.7586495535,
            "unit": "ns",
            "range": "± 1807.560364112382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2983676.923076923,
            "unit": "ns",
            "range": "± 42942.056965290525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3191615.3846153845,
            "unit": "ns",
            "range": "± 84660.56788048468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3867850,
            "unit": "ns",
            "range": "± 98957.07457628107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4114785.4545454546,
            "unit": "ns",
            "range": "± 173319.67619079535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6758373.80952381,
            "unit": "ns",
            "range": "± 244295.6765683986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304050,
            "unit": "ns",
            "range": "± 7376.087490442793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251813.15789473685,
            "unit": "ns",
            "range": "± 7556.03109935338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209253.33333333334,
            "unit": "ns",
            "range": "± 3763.5216537300857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5148630.769230769,
            "unit": "ns",
            "range": "± 70649.36169345274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3677646.6666666665,
            "unit": "ns",
            "range": "± 45553.232073925916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18843.010752688173,
            "unit": "ns",
            "range": "± 1370.9246205027157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87494.73684210527,
            "unit": "ns",
            "range": "± 6123.400675626782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76921.875,
            "unit": "ns",
            "range": "± 4656.635404395934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 172832.5842696629,
            "unit": "ns",
            "range": "± 12324.05975835386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6507.070707070707,
            "unit": "ns",
            "range": "± 1084.5155530214465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18712.886597938144,
            "unit": "ns",
            "range": "± 2127.269356261531"
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
          "id": "d903106676c5c142b8adc716321cc6527fa648b4",
          "message": "Changelog",
          "timestamp": "2023-04-14T17:46:14+09:00",
          "tree_id": "d879dbb029cf49fb8dce802a83de172200fccda5",
          "url": "https://github.com/greymistcube/libplanet/commit/d903106676c5c142b8adc716321cc6527fa648b4"
        },
        "date": 1681462938283,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1411954.081632653,
            "unit": "ns",
            "range": "± 136673.63728056123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2483850,
            "unit": "ns",
            "range": "± 85616.24545894597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2483276.470588235,
            "unit": "ns",
            "range": "± 49316.91557432101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5325006.25,
            "unit": "ns",
            "range": "± 162573.65365551462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43724.46808510638,
            "unit": "ns",
            "range": "± 3137.526461190313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7361013.333333333,
            "unit": "ns",
            "range": "± 104716.00277939966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18403978.57142857,
            "unit": "ns",
            "range": "± 68980.01024345252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47238983.333333336,
            "unit": "ns",
            "range": "± 229525.54998352166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94810320,
            "unit": "ns",
            "range": "± 391097.66810861963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187747970,
            "unit": "ns",
            "range": "± 656355.9347967055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4787135.697115385,
            "unit": "ns",
            "range": "± 5443.026409770435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512482.2866586538,
            "unit": "ns",
            "range": "± 3378.4126673383107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141686.1328125,
            "unit": "ns",
            "range": "± 1118.2828064573935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616047.265625,
            "unit": "ns",
            "range": "± 10841.598204291671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851144.1336495535,
            "unit": "ns",
            "range": "± 3846.495759629533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755281.1872209822,
            "unit": "ns",
            "range": "± 1307.4901645901157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3115570,
            "unit": "ns",
            "range": "± 53552.28686593532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3323160,
            "unit": "ns",
            "range": "± 29525.625673786686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4106313.3333333335,
            "unit": "ns",
            "range": "± 54322.040602669695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4106038.775510204,
            "unit": "ns",
            "range": "± 151975.62964766004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6866270,
            "unit": "ns",
            "range": "± 110464.32003140199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305678.5714285714,
            "unit": "ns",
            "range": "± 11117.038904626028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258319.1489361702,
            "unit": "ns",
            "range": "± 9995.143131364664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247511.11111111112,
            "unit": "ns",
            "range": "± 9306.08848164914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5396346.666666667,
            "unit": "ns",
            "range": "± 32819.87347992211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3850200,
            "unit": "ns",
            "range": "± 35497.86713914755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19740,
            "unit": "ns",
            "range": "± 1767.7609350260727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87579.77528089887,
            "unit": "ns",
            "range": "± 5422.599589916615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82038,
            "unit": "ns",
            "range": "± 9689.594335359885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 168952.12765957447,
            "unit": "ns",
            "range": "± 13782.377159095988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6628.865979381443,
            "unit": "ns",
            "range": "± 1018.573222176348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19637.755102040817,
            "unit": "ns",
            "range": "± 2245.109934907211"
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
          "id": "72cc95f3181a669ce6dba6f2d94477eff1d9c860",
          "message": "Changelog",
          "timestamp": "2023-04-18T17:30:46+09:00",
          "tree_id": "a0cfdc1da2f65b2dca561dc5489e437971922326",
          "url": "https://github.com/greymistcube/libplanet/commit/72cc95f3181a669ce6dba6f2d94477eff1d9c860"
        },
        "date": 1681807551481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377584,
            "unit": "ns",
            "range": "± 132337.2579526425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2475922,
            "unit": "ns",
            "range": "± 98709.32857100577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2149177.272727273,
            "unit": "ns",
            "range": "± 117589.54497203125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5539891.919191919,
            "unit": "ns",
            "range": "± 369984.3120438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50251.57894736842,
            "unit": "ns",
            "range": "± 3808.7486960075626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7103993.58974359,
            "unit": "ns",
            "range": "± 246189.1589759812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19608570.588235293,
            "unit": "ns",
            "range": "± 382023.2515251949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49384660,
            "unit": "ns",
            "range": "± 444124.06857286434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98282606.66666667,
            "unit": "ns",
            "range": "± 1727004.0973012308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195610671.42857143,
            "unit": "ns",
            "range": "± 2739699.0226127934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4777899.583333333,
            "unit": "ns",
            "range": "± 27816.54232679233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517067.1484375,
            "unit": "ns",
            "range": "± 8511.565976812564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163616.9661458333,
            "unit": "ns",
            "range": "± 8165.7150032069585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641346.0026041665,
            "unit": "ns",
            "range": "± 7168.749988546564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826573.4375,
            "unit": "ns",
            "range": "± 4416.771762211019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751165.1106770834,
            "unit": "ns",
            "range": "± 2002.9872354553675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3065516.6666666665,
            "unit": "ns",
            "range": "± 111817.91364986259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3221422.8571428573,
            "unit": "ns",
            "range": "± 155544.34585657655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3854088.2352941176,
            "unit": "ns",
            "range": "± 74404.02276047428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4213963.043478261,
            "unit": "ns",
            "range": "± 158960.22333862245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6789152.777777778,
            "unit": "ns",
            "range": "± 225106.8044743093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309595,
            "unit": "ns",
            "range": "± 10894.52814901791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253141.66666666666,
            "unit": "ns",
            "range": "± 9966.600251207825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215468,
            "unit": "ns",
            "range": "± 5531.253625234217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5277961.538461538,
            "unit": "ns",
            "range": "± 73830.5778845678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3705694.736842105,
            "unit": "ns",
            "range": "± 78115.48056623327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19375.263157894737,
            "unit": "ns",
            "range": "± 1959.6443674892835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90147.91666666667,
            "unit": "ns",
            "range": "± 6721.277747675921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77279.56989247311,
            "unit": "ns",
            "range": "± 4625.627081807746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 178419.38775510204,
            "unit": "ns",
            "range": "± 20127.012459605794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6473.469387755102,
            "unit": "ns",
            "range": "± 882.9193633316763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19131.57894736842,
            "unit": "ns",
            "range": "± 2118.9752219036054"
          }
        ]
      }
    ]
  }
}