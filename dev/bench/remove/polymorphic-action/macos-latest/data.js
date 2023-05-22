window.BENCHMARK_DATA = {
  "lastUpdate": 1684732790547,
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
          "id": "68d72fa93f4e3833d3644989a12e7ee6a6104083",
          "message": "Remove PolymorphicAction",
          "timestamp": "2023-05-20T02:15:50+09:00",
          "tree_id": "cc65e3b81a1823674df671524a9a003f9bb5bec4",
          "url": "https://github.com/greymistcube/libplanet/commit/68d72fa93f4e3833d3644989a12e7ee6a6104083"
        },
        "date": 1684517626406,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7911563.923076923,
            "unit": "ns",
            "range": "± 51530.502011691315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19659347,
            "unit": "ns",
            "range": "± 392359.98995171394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50016545.84615385,
            "unit": "ns",
            "range": "± 195970.9498849452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103878305.40625,
            "unit": "ns",
            "range": "± 7562614.823811764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243709839.45402297,
            "unit": "ns",
            "range": "± 35947791.45619436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70838.82795698925,
            "unit": "ns",
            "range": "± 9040.59014958029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334608.8461538461,
            "unit": "ns",
            "range": "± 34545.6177606503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308827.7582417582,
            "unit": "ns",
            "range": "± 26769.462420759573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314141.2894736842,
            "unit": "ns",
            "range": "± 30126.913361642084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4409968.063492063,
            "unit": "ns",
            "range": "± 200034.9728295814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764681.0285714287,
            "unit": "ns",
            "range": "± 108038.83310493329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19052.70408163265,
            "unit": "ns",
            "range": "± 4051.042299909157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82937.72527472528,
            "unit": "ns",
            "range": "± 12190.797521141316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90587.49484536082,
            "unit": "ns",
            "range": "± 16846.808706277596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95843.56185567011,
            "unit": "ns",
            "range": "± 12938.159606224295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5053.925531914893,
            "unit": "ns",
            "range": "± 766.4075881468482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16862.288659793816,
            "unit": "ns",
            "range": "± 3916.9425735056284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1579783.6530612244,
            "unit": "ns",
            "range": "± 139419.10225494305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933995.7804878047,
            "unit": "ns",
            "range": "± 140782.1026726724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2391485.1770833335,
            "unit": "ns",
            "range": "± 140126.26187365488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6396188.928571428,
            "unit": "ns",
            "range": "± 290114.84127209935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3459396.224137931,
            "unit": "ns",
            "range": "± 250386.8362261515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3529492.147727273,
            "unit": "ns",
            "range": "± 263357.5372822881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4540469.948717949,
            "unit": "ns",
            "range": "± 233643.09316867447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4914321.534090909,
            "unit": "ns",
            "range": "± 599028.7310351525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8022111.161538461,
            "unit": "ns",
            "range": "± 374291.2319839608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6799657.36400463,
            "unit": "ns",
            "range": "± 189436.29839493905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2018567.3206129808,
            "unit": "ns",
            "range": "± 25722.47148492679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326718.7533854167,
            "unit": "ns",
            "range": "± 18600.16020207287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604527.966579861,
            "unit": "ns",
            "range": "± 55562.65704679166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797933.4382672991,
            "unit": "ns",
            "range": "± 8255.485862366233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760742.3609095982,
            "unit": "ns",
            "range": "± 10004.410881631766"
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
          "id": "95d887e57ce3c9a1779716672eea7969c4d62491",
          "message": "Changelog",
          "timestamp": "2023-05-22T12:12:20+09:00",
          "tree_id": "ec07b14753be0b72ac4ba6e426c5ef9c56011830",
          "url": "https://github.com/greymistcube/libplanet/commit/95d887e57ce3c9a1779716672eea7969c4d62491"
        },
        "date": 1684726154876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8786011.3,
            "unit": "ns",
            "range": "± 100460.76044563013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22830633.07142857,
            "unit": "ns",
            "range": "± 215070.14860361055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55987584.56666667,
            "unit": "ns",
            "range": "± 755337.9810887373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112948477.13333334,
            "unit": "ns",
            "range": "± 1844219.2581001343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224089115.13333333,
            "unit": "ns",
            "range": "± 3009223.1255689054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66451.79787234042,
            "unit": "ns",
            "range": "± 6909.383609406191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371132.64864864864,
            "unit": "ns",
            "range": "± 17393.428468886126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352293.35802469135,
            "unit": "ns",
            "range": "± 18578.061916080376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328597.1754385965,
            "unit": "ns",
            "range": "± 14290.975409230929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4741436.333333333,
            "unit": "ns",
            "range": "± 82890.88074663209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4275248.733333333,
            "unit": "ns",
            "range": "± 63213.82177913158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20518.19318181818,
            "unit": "ns",
            "range": "± 1753.5870682489622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100552.07291666667,
            "unit": "ns",
            "range": "± 9018.693589889359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101956.18181818182,
            "unit": "ns",
            "range": "± 12109.878607359042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114953.793814433,
            "unit": "ns",
            "range": "± 13537.40253422758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6108.739130434783,
            "unit": "ns",
            "range": "± 762.0567148800285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19687.385416666668,
            "unit": "ns",
            "range": "± 1954.6602578388297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1724262.1421052632,
            "unit": "ns",
            "range": "± 204222.0672263675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3376123.931372549,
            "unit": "ns",
            "range": "± 135967.42682808332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2833569.0412371135,
            "unit": "ns",
            "range": "± 236189.94853991977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7361735.507936508,
            "unit": "ns",
            "range": "± 332511.2805917569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3772913.8333333335,
            "unit": "ns",
            "range": "± 158243.34154971814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3959743.7,
            "unit": "ns",
            "range": "± 185384.8816149835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5219305.2,
            "unit": "ns",
            "range": "± 139231.423696305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5167554.225,
            "unit": "ns",
            "range": "± 181134.14222918308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8796735.53488372,
            "unit": "ns",
            "range": "± 319065.89947378676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6828024.580163044,
            "unit": "ns",
            "range": "± 164592.13029314412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2269803.5733816964,
            "unit": "ns",
            "range": "± 10359.874111322959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468203.1141927084,
            "unit": "ns",
            "range": "± 10830.995773812716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2966351.8921875,
            "unit": "ns",
            "range": "± 54265.23062177889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937855.3149088542,
            "unit": "ns",
            "range": "± 5000.206410176939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896859.899609375,
            "unit": "ns",
            "range": "± 11271.528338331878"
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
          "id": "5423ff33b66e70ae65bcdbef996c037f30396db5",
          "message": "Changelog",
          "timestamp": "2023-05-22T13:57:42+09:00",
          "tree_id": "80f9f918cebab334c9d308a5e653f13a84354a8d",
          "url": "https://github.com/greymistcube/libplanet/commit/5423ff33b66e70ae65bcdbef996c037f30396db5"
        },
        "date": 1684732778361,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9073422.222222222,
            "unit": "ns",
            "range": "± 299935.9320225487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23412491.57894737,
            "unit": "ns",
            "range": "± 513321.2169632098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65622377.89285714,
            "unit": "ns",
            "range": "± 1849908.4479734814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114702228.75675675,
            "unit": "ns",
            "range": "± 3756371.3410900095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232293086.13333333,
            "unit": "ns",
            "range": "± 3947557.373976684"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92915.93478260869,
            "unit": "ns",
            "range": "± 17609.356134090718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 390630.7886597938,
            "unit": "ns",
            "range": "± 45331.85442148608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 374535.1770833333,
            "unit": "ns",
            "range": "± 45752.98554365371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 373721.4285714286,
            "unit": "ns",
            "range": "± 38738.14902012169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4691182.626315789,
            "unit": "ns",
            "range": "± 325748.1274894742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4226941.25257732,
            "unit": "ns",
            "range": "± 271115.2986005612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29737.385057471263,
            "unit": "ns",
            "range": "± 3350.224856824651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 141358.77083333334,
            "unit": "ns",
            "range": "± 27297.304122714802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 149562.65789473685,
            "unit": "ns",
            "range": "± 21484.59415949504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147884.79166666666,
            "unit": "ns",
            "range": "± 26419.52507677714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10492.803370786516,
            "unit": "ns",
            "range": "± 1572.2695553395415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 35462.55376344086,
            "unit": "ns",
            "range": "± 12800.83978424309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656787.448979592,
            "unit": "ns",
            "range": "± 183017.70906715034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3045274.4647887326,
            "unit": "ns",
            "range": "± 147522.21694364073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2634879.737373737,
            "unit": "ns",
            "range": "± 229481.28026426525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6845502.197183099,
            "unit": "ns",
            "range": "± 327579.0748528021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3686815.223404255,
            "unit": "ns",
            "range": "± 303594.59762927395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3789921.2040816327,
            "unit": "ns",
            "range": "± 259076.51794737452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5045801.410526316,
            "unit": "ns",
            "range": "± 403605.78645893827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4848902.864583333,
            "unit": "ns",
            "range": "± 342113.3809225615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8612071.347368421,
            "unit": "ns",
            "range": "± 665460.6670095243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8438878.720230263,
            "unit": "ns",
            "range": "± 484055.70808903466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2337498.83312332,
            "unit": "ns",
            "range": "± 132297.03396253404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1429501.7247635692,
            "unit": "ns",
            "range": "± 49083.53592462425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3204628.979916351,
            "unit": "ns",
            "range": "± 322584.8992897503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822055.945546875,
            "unit": "ns",
            "range": "± 21379.617223363806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728737.8205217634,
            "unit": "ns",
            "range": "± 9531.605145568437"
          }
        ]
      }
    ]
  }
}