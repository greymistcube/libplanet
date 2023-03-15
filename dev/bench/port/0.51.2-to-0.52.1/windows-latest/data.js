window.BENCHMARK_DATA = {
  "lastUpdate": 1678874054697,
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
          "id": "b2e0658c9ac12b938ceac00d922b21d0bcf15ea5",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:29:14+09:00",
          "tree_id": "b8b6da760dd2b7acfc51de3dd2e872d9b7a8dac9",
          "url": "https://github.com/greymistcube/libplanet/commit/b2e0658c9ac12b938ceac00d922b21d0bcf15ea5"
        },
        "date": 1678873566385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374344.4444444445,
            "unit": "ns",
            "range": "± 94032.4685807636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2513597.2972972975,
            "unit": "ns",
            "range": "± 84444.11526923356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185292.7083333335,
            "unit": "ns",
            "range": "± 134619.98072139898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5044555.555555556,
            "unit": "ns",
            "range": "± 136390.85614888428"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48649.47368421053,
            "unit": "ns",
            "range": "± 3001.5908436003087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6972492.857142857,
            "unit": "ns",
            "range": "± 79879.86618653052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19760626.666666668,
            "unit": "ns",
            "range": "± 141294.71968026197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49881053.333333336,
            "unit": "ns",
            "range": "± 717329.2757231673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99855366.66666667,
            "unit": "ns",
            "range": "± 1380985.0452622923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201698585.7142857,
            "unit": "ns",
            "range": "± 777850.3473401184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4763225.338541667,
            "unit": "ns",
            "range": "± 20726.35959626757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499431.4388020833,
            "unit": "ns",
            "range": "± 7364.571284061961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1188838.9322916667,
            "unit": "ns",
            "range": "± 5936.935608008652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622436.5234375,
            "unit": "ns",
            "range": "± 7260.293966659838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821527.6432291666,
            "unit": "ns",
            "range": "± 3026.690501071614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768383.9913504465,
            "unit": "ns",
            "range": "± 1261.0773416227787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3155702.564102564,
            "unit": "ns",
            "range": "± 110302.93808936868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5036104.166666667,
            "unit": "ns",
            "range": "± 130212.5869797963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26975502.63157895,
            "unit": "ns",
            "range": "± 595899.062452341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6092000,
            "unit": "ns",
            "range": "± 162034.5359277871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26196191.666666668,
            "unit": "ns",
            "range": "± 640176.5360577039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188278.37837837837,
            "unit": "ns",
            "range": "± 6329.610095729749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185121.05263157896,
            "unit": "ns",
            "range": "± 8029.960345972746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164004.08163265305,
            "unit": "ns",
            "range": "± 9663.918634524545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10775226.315789474,
            "unit": "ns",
            "range": "± 234137.5850081535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8752620.833333334,
            "unit": "ns",
            "range": "± 225847.507189305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20205.78947368421,
            "unit": "ns",
            "range": "± 1592.3163770334297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52343.01075268817,
            "unit": "ns",
            "range": "± 4116.018492201413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41715.90909090909,
            "unit": "ns",
            "range": "± 2220.0697081132207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95610.63829787234,
            "unit": "ns",
            "range": "± 14796.31215376439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5860.8247422680415,
            "unit": "ns",
            "range": "± 820.5126320669557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19706.25,
            "unit": "ns",
            "range": "± 2221.41787343603"
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
          "id": "39c00351cc8914b7bf995fabdcb08e1822a06d5c",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:27:42+09:00",
          "tree_id": "b8b6da760dd2b7acfc51de3dd2e872d9b7a8dac9",
          "url": "https://github.com/greymistcube/libplanet/commit/39c00351cc8914b7bf995fabdcb08e1822a06d5c"
        },
        "date": 1678873619397,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1486013.4020618557,
            "unit": "ns",
            "range": "± 121253.5863978756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628211.5384615385,
            "unit": "ns",
            "range": "± 106848.69576097792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2227668.0412371135,
            "unit": "ns",
            "range": "± 151798.01515664914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5171602.380952381,
            "unit": "ns",
            "range": "± 188670.45245172636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51461.95652173913,
            "unit": "ns",
            "range": "± 4676.192740632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7079640,
            "unit": "ns",
            "range": "± 210096.6946514111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20367912.5,
            "unit": "ns",
            "range": "± 426656.57538026694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50544833.333333336,
            "unit": "ns",
            "range": "± 874790.9306691241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100809773.33333333,
            "unit": "ns",
            "range": "± 931874.814911674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201130013.33333334,
            "unit": "ns",
            "range": "± 3540525.3730134997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4885228.794642857,
            "unit": "ns",
            "range": "± 26964.850314360752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530529.701450893,
            "unit": "ns",
            "range": "± 5466.0950036265995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1191775.6119791667,
            "unit": "ns",
            "range": "± 9514.237491671476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649766.7410714286,
            "unit": "ns",
            "range": "± 7173.491263434933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832031.5080915178,
            "unit": "ns",
            "range": "± 1914.056003858104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770668.310546875,
            "unit": "ns",
            "range": "± 1245.4311413374621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3195256.25,
            "unit": "ns",
            "range": "± 125809.7937977228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5018518.75,
            "unit": "ns",
            "range": "± 155793.9943301886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23630845,
            "unit": "ns",
            "range": "± 540914.5690645758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6220597.5,
            "unit": "ns",
            "range": "± 221050.05986868386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27725025,
            "unit": "ns",
            "range": "± 718737.5322170057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200662.35294117648,
            "unit": "ns",
            "range": "± 10771.567252003108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195335.41666666666,
            "unit": "ns",
            "range": "± 7697.540076345843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179448,
            "unit": "ns",
            "range": "± 14818.030785621831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11534026.666666666,
            "unit": "ns",
            "range": "± 208779.89594877415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9153240,
            "unit": "ns",
            "range": "± 162037.6182072722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25358.88888888889,
            "unit": "ns",
            "range": "± 2470.267894512996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60263.541666666664,
            "unit": "ns",
            "range": "± 6098.250306296521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44843.298969072166,
            "unit": "ns",
            "range": "± 4616.724741282477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112627.55102040817,
            "unit": "ns",
            "range": "± 19355.43175107613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7087.755102040816,
            "unit": "ns",
            "range": "± 1319.5020386980614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21561.224489795917,
            "unit": "ns",
            "range": "± 2825.204404722999"
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
          "id": "0586a686ffd08b750bdbccdd347e3a50a65c4a2d",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:31:30+09:00",
          "tree_id": "fee3b96c048a4c48dc4a4c245dffac7df1b15d49",
          "url": "https://github.com/greymistcube/libplanet/commit/0586a686ffd08b750bdbccdd347e3a50a65c4a2d"
        },
        "date": 1678873743055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328332.8358208956,
            "unit": "ns",
            "range": "± 59127.344307575455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2659911.86440678,
            "unit": "ns",
            "range": "± 117870.04545443074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2232168,
            "unit": "ns",
            "range": "± 157158.39650467038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5199975.362318841,
            "unit": "ns",
            "range": "± 251118.3107654737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52103.125,
            "unit": "ns",
            "range": "± 5632.452081231444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6933883.333333333,
            "unit": "ns",
            "range": "± 105578.5196407101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20011540,
            "unit": "ns",
            "range": "± 215733.43273586503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47783946.666666664,
            "unit": "ns",
            "range": "± 840292.3342220734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 96540656.52173913,
            "unit": "ns",
            "range": "± 2381893.0479054004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 189698565,
            "unit": "ns",
            "range": "± 4197890.535705184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4922537.3046875,
            "unit": "ns",
            "range": "± 41253.20328730392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497855.4408482143,
            "unit": "ns",
            "range": "± 9335.035739939543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144464.5052083333,
            "unit": "ns",
            "range": "± 6507.090299606532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583016.2239583335,
            "unit": "ns",
            "range": "± 13816.771522591698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823165.6529017857,
            "unit": "ns",
            "range": "± 1635.4438696419568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767153.0831473215,
            "unit": "ns",
            "range": "± 985.4112432493523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3092569.35483871,
            "unit": "ns",
            "range": "± 138897.79305061346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5289134.615384615,
            "unit": "ns",
            "range": "± 52096.86244797355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23504447.222222224,
            "unit": "ns",
            "range": "± 784948.8873209192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6058729.411764706,
            "unit": "ns",
            "range": "± 193914.88687349058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26445954.83870968,
            "unit": "ns",
            "range": "± 796114.9489191076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188372.63157894736,
            "unit": "ns",
            "range": "± 11013.071943804676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187116.43835616438,
            "unit": "ns",
            "range": "± 8827.010531107697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156576.04166666666,
            "unit": "ns",
            "range": "± 9038.487819397862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10596813.333333334,
            "unit": "ns",
            "range": "± 177881.7057431574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8722003.333333334,
            "unit": "ns",
            "range": "± 258909.100655614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20426.288659793816,
            "unit": "ns",
            "range": "± 2871.4751288854236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59304.12371134021,
            "unit": "ns",
            "range": "± 5836.521465553726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44364.28571428572,
            "unit": "ns",
            "range": "± 4416.329819223757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124741.93548387097,
            "unit": "ns",
            "range": "± 15992.4324670509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9490.625,
            "unit": "ns",
            "range": "± 1553.7444160885393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28548.979591836734,
            "unit": "ns",
            "range": "± 3113.439272359748"
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
          "id": "c775aa3897ea5536b0cc806ed93fae6b6628c940",
          "message": "Changelog",
          "timestamp": "2023-03-15T18:33:07+09:00",
          "tree_id": "c27253e5957238046518b4bd134cde83bae519e6",
          "url": "https://github.com/greymistcube/libplanet/commit/c775aa3897ea5536b0cc806ed93fae6b6628c940"
        },
        "date": 1678874031668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688920.238095238,
            "unit": "ns",
            "range": "± 189647.20688547115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3202573.2558139535,
            "unit": "ns",
            "range": "± 353561.14885860425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2731092.5531914895,
            "unit": "ns",
            "range": "± 332528.13325538987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6849577.173913044,
            "unit": "ns",
            "range": "± 527087.7796868584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52965.217391304344,
            "unit": "ns",
            "range": "± 6946.442441248924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7556378.571428572,
            "unit": "ns",
            "range": "± 208448.9214583344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20833592.708333332,
            "unit": "ns",
            "range": "± 1455797.2408882536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53145386.666666664,
            "unit": "ns",
            "range": "± 955300.1853319395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102849750.70422535,
            "unit": "ns",
            "range": "± 5006052.086050393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 234531552.020202,
            "unit": "ns",
            "range": "± 15506272.057947965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6202197.265625,
            "unit": "ns",
            "range": "± 68859.74527950634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954609.921875,
            "unit": "ns",
            "range": "± 25087.061471364013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415775.8626302083,
            "unit": "ns",
            "range": "± 10358.591412681077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3125912.614889706,
            "unit": "ns",
            "range": "± 63622.09864234932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1050049.1927083333,
            "unit": "ns",
            "range": "± 19023.588635390002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931570.68359375,
            "unit": "ns",
            "range": "± 20385.502811626415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3952170.3703703703,
            "unit": "ns",
            "range": "± 165257.49905015828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 7034352.173913044,
            "unit": "ns",
            "range": "± 744713.0475438411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 33087754.545454547,
            "unit": "ns",
            "range": "± 3009887.659550915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8836885.416666666,
            "unit": "ns",
            "range": "± 996664.4516881156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38009268.041237116,
            "unit": "ns",
            "range": "± 3644181.996276919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206652.1739130435,
            "unit": "ns",
            "range": "± 15843.752734648277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208111.11111111112,
            "unit": "ns",
            "range": "± 14605.71263061785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195732.1052631579,
            "unit": "ns",
            "range": "± 19282.215259351055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13816131.25,
            "unit": "ns",
            "range": "± 632399.139803186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10703802.777777778,
            "unit": "ns",
            "range": "± 527530.2501097996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24012.5,
            "unit": "ns",
            "range": "± 6559.561121390909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62611.57894736842,
            "unit": "ns",
            "range": "± 9553.843641774078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44921.64948453608,
            "unit": "ns",
            "range": "± 6409.193052498298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113212.5,
            "unit": "ns",
            "range": "± 21797.64955943162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5567.901234567901,
            "unit": "ns",
            "range": "± 882.8685010370781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22050.526315789473,
            "unit": "ns",
            "range": "± 5180.505062131317"
          }
        ]
      }
    ]
  }
}