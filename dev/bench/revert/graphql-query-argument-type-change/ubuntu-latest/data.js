window.BENCHMARK_DATA = {
  "lastUpdate": 1707287371546,
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
          "id": "db763b0d5205886da9a7c7240b3b551bd24e2768",
          "message": "Revert query argument type to be compatible with legacy queries",
          "timestamp": "2024-02-07T15:15:42+09:00",
          "tree_id": "f9cfa42ebc5d7a160cad261c75e8cfbd601eda52",
          "url": "https://github.com/greymistcube/libplanet/commit/db763b0d5205886da9a7c7240b3b551bd24e2768"
        },
        "date": 1707287215885,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198467.13333333333,
            "unit": "ns",
            "range": "± 8886.894475720912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193920.90384615384,
            "unit": "ns",
            "range": "± 7899.946317165869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166718.9375,
            "unit": "ns",
            "range": "± 3109.2049673777806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3255502.9,
            "unit": "ns",
            "range": "± 46194.409942886254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862757.533333333,
            "unit": "ns",
            "range": "± 51662.26962530872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13951.721649484536,
            "unit": "ns",
            "range": "± 2361.2423140084375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65200.765957446805,
            "unit": "ns",
            "range": "± 7071.715199201223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53175.5,
            "unit": "ns",
            "range": "± 1412.973722819823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65844.67346938775,
            "unit": "ns",
            "range": "± 16103.468964039508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6806.680412371134,
            "unit": "ns",
            "range": "± 1049.787067163223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17657.74226804124,
            "unit": "ns",
            "range": "± 1569.3163737114862"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42190.463917525776,
            "unit": "ns",
            "range": "± 6021.1642078550985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2592258.6333333333,
            "unit": "ns",
            "range": "± 47305.28772447366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486494.1463414636,
            "unit": "ns",
            "range": "± 87710.96395849295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3204514.095238095,
            "unit": "ns",
            "range": "± 75414.78257006696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3248732.28125,
            "unit": "ns",
            "range": "± 97216.56403675197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13735197.75,
            "unit": "ns",
            "range": "± 864871.8407742332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969793.8020833334,
            "unit": "ns",
            "range": "± 80890.30948553528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1859067.962686567,
            "unit": "ns",
            "range": "± 80236.60980279709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623454.6597938144,
            "unit": "ns",
            "range": "± 208783.0073405005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12657222.688888889,
            "unit": "ns",
            "range": "± 929325.2732868133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5570200.285714285,
            "unit": "ns",
            "range": "± 15312.512938411219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14331163.933333334,
            "unit": "ns",
            "range": "± 100924.33726274259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35890322.64285714,
            "unit": "ns",
            "range": "± 103130.28369726335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74046488.92307693,
            "unit": "ns",
            "range": "± 661047.8235857147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148162636,
            "unit": "ns",
            "range": "± 582649.6259349753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3648003.6796875,
            "unit": "ns",
            "range": "± 4984.981502792422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203274.1654575893,
            "unit": "ns",
            "range": "± 1957.6168647034074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764366.7627766927,
            "unit": "ns",
            "range": "± 2876.929410846896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940372.524576823,
            "unit": "ns",
            "range": "± 7114.819977192549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614212.9491489956,
            "unit": "ns",
            "range": "± 3497.3266043347076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581786.4553786058,
            "unit": "ns",
            "range": "± 2349.0248674102286"
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
          "id": "e66926ff0357484101e329c6ef9339cbdade10b0",
          "message": "Changelog",
          "timestamp": "2024-02-07T15:17:34+09:00",
          "tree_id": "c09809b429d316a314d7871557a54e8205373358",
          "url": "https://github.com/greymistcube/libplanet/commit/e66926ff0357484101e329c6ef9339cbdade10b0"
        },
        "date": 1707287313176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960788.5108695652,
            "unit": "ns",
            "range": "± 80579.69520049251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1873989.3454545455,
            "unit": "ns",
            "range": "± 78498.69779580877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1566392.08045977,
            "unit": "ns",
            "range": "± 80837.86827235755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12752363.76344086,
            "unit": "ns",
            "range": "± 876654.5328775083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39639.3052631579,
            "unit": "ns",
            "range": "± 5002.240459892851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198317.91666666666,
            "unit": "ns",
            "range": "± 8781.97149073739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189557.6349206349,
            "unit": "ns",
            "range": "± 8252.062829693705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174488.75,
            "unit": "ns",
            "range": "± 2181.145659135042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3171497.2,
            "unit": "ns",
            "range": "± 55825.385705532106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807950.8846153845,
            "unit": "ns",
            "range": "± 41370.754321014545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12549.41489361702,
            "unit": "ns",
            "range": "± 1099.2342242560478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63027.12244897959,
            "unit": "ns",
            "range": "± 8237.009648456726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51915.6,
            "unit": "ns",
            "range": "± 1072.7478685477238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60042.316326530614,
            "unit": "ns",
            "range": "± 13115.636495905199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4709.974747474747,
            "unit": "ns",
            "range": "± 1663.318476404215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11822.86170212766,
            "unit": "ns",
            "range": "± 910.0624178175656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5565494.214285715,
            "unit": "ns",
            "range": "± 20255.17646820787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14299835.2,
            "unit": "ns",
            "range": "± 135049.75281312334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36984086.5,
            "unit": "ns",
            "range": "± 361682.85785366205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73472589,
            "unit": "ns",
            "range": "± 307520.816288914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147479450.07692307,
            "unit": "ns",
            "range": "± 542051.9500941862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2464940.5,
            "unit": "ns",
            "range": "± 81381.21002453295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2537190.8620689656,
            "unit": "ns",
            "range": "± 64671.247158623155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3052504.3076923075,
            "unit": "ns",
            "range": "± 29991.652814810033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3146487.347826087,
            "unit": "ns",
            "range": "± 105836.14395973248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13830513.8,
            "unit": "ns",
            "range": "± 981262.9313861307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750009.2430245536,
            "unit": "ns",
            "range": "± 44026.1557991881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199367.3891601562,
            "unit": "ns",
            "range": "± 2052.1206619747772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758176.1422526041,
            "unit": "ns",
            "range": "± 1093.4313031446918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946790.096875,
            "unit": "ns",
            "range": "± 21253.944851745462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622971.4786783854,
            "unit": "ns",
            "range": "± 1002.9591945057638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570902.5420619419,
            "unit": "ns",
            "range": "± 5241.329702106408"
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
          "id": "7cd736df3da78ffe315c713c0fa5fae0256becb1",
          "message": "Changelog",
          "timestamp": "2024-02-07T15:18:01+09:00",
          "tree_id": "860337a27fac6ecfcb572b6ddca5876c812426c9",
          "url": "https://github.com/greymistcube/libplanet/commit/7cd736df3da78ffe315c713c0fa5fae0256becb1"
        },
        "date": 1707287364120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206178.83333333334,
            "unit": "ns",
            "range": "± 13764.02177965718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196380.95890410958,
            "unit": "ns",
            "range": "± 9783.696836572275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173259.8275862069,
            "unit": "ns",
            "range": "± 4985.360841424803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3280843.1,
            "unit": "ns",
            "range": "± 50080.64763216569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2935138.6,
            "unit": "ns",
            "range": "± 29719.41137611674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19671.06,
            "unit": "ns",
            "range": "± 7478.3621165238155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65376.71111111111,
            "unit": "ns",
            "range": "± 5740.764229934493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84215.06060606061,
            "unit": "ns",
            "range": "± 13766.049938695442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83463.82653061225,
            "unit": "ns",
            "range": "± 13643.889126468719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4949.121212121212,
            "unit": "ns",
            "range": "± 2057.7364038201486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19321.489583333332,
            "unit": "ns",
            "range": "± 2663.452160339409"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40338.92268041237,
            "unit": "ns",
            "range": "± 5226.478297323821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463266.9142857143,
            "unit": "ns",
            "range": "± 58817.70821953469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2607180.8181818184,
            "unit": "ns",
            "range": "± 97738.44851099643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3278132.7,
            "unit": "ns",
            "range": "± 39823.65628654119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3265744.453125,
            "unit": "ns",
            "range": "± 140860.96541399552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13738642.806818182,
            "unit": "ns",
            "range": "± 791879.9746875735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984342.3888888889,
            "unit": "ns",
            "range": "± 98106.049107002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1882795.3823529412,
            "unit": "ns",
            "range": "± 59801.192473169074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1527922.2790697673,
            "unit": "ns",
            "range": "± 105257.66766454605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12649446.125,
            "unit": "ns",
            "range": "± 910138.3723106205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5625539.9375,
            "unit": "ns",
            "range": "± 40037.50872614121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14431488.2,
            "unit": "ns",
            "range": "± 120401.0240014594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36903968.166666664,
            "unit": "ns",
            "range": "± 350796.32395641395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74275865.63333334,
            "unit": "ns",
            "range": "± 557774.1273859194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149986414.13333333,
            "unit": "ns",
            "range": "± 607445.0877075071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728791.03515625,
            "unit": "ns",
            "range": "± 43119.96891333204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1181768.4006911058,
            "unit": "ns",
            "range": "± 5711.992445762311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764792.5005258414,
            "unit": "ns",
            "range": "± 1909.336217315335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987406.200892857,
            "unit": "ns",
            "range": "± 32145.006293741528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619388.196890024,
            "unit": "ns",
            "range": "± 917.9631330993259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574857.7726004465,
            "unit": "ns",
            "range": "± 1517.5148625763256"
          }
        ]
      }
    ]
  }
}