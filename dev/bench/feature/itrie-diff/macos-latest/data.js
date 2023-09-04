window.BENCHMARK_DATA = {
  "lastUpdate": 1693811465312,
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
          "id": "06d288e10ab42d4c0d44ef20ef909b3ce5937896",
          "message": "Cleanup",
          "timestamp": "2023-09-04T10:42:36+09:00",
          "tree_id": "0282daa55f3754af880a2bddc6126756ea723363",
          "url": "https://github.com/greymistcube/libplanet/commit/06d288e10ab42d4c0d44ef20ef909b3ce5937896"
        },
        "date": 1693792863933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8611764.73076923,
            "unit": "ns",
            "range": "± 143603.8708120095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21661437.54054054,
            "unit": "ns",
            "range": "± 1075106.2948873965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53004090.12962963,
            "unit": "ns",
            "range": "± 2110481.766240074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102392767,
            "unit": "ns",
            "range": "± 553053.2508362797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215715507.35714287,
            "unit": "ns",
            "range": "± 3755518.3386629634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73494.36021505376,
            "unit": "ns",
            "range": "± 4537.545718038691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334564.2272727273,
            "unit": "ns",
            "range": "± 25408.422839014314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324561.1954022989,
            "unit": "ns",
            "range": "± 27266.606062343886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312021.978021978,
            "unit": "ns",
            "range": "± 19867.6556364459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4438577.417582418,
            "unit": "ns",
            "range": "± 408001.40078918205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3784972.65,
            "unit": "ns",
            "range": "± 80583.66846313412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27538.366666666665,
            "unit": "ns",
            "range": "± 2921.53036393869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115653.89784946236,
            "unit": "ns",
            "range": "± 17499.341141100253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104250.95054945054,
            "unit": "ns",
            "range": "± 14966.897711849702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110634.73195876289,
            "unit": "ns",
            "range": "± 17310.556701713518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7899.141304347826,
            "unit": "ns",
            "range": "± 1148.7722885857124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24896.284090909092,
            "unit": "ns",
            "range": "± 3077.3292960821723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1538801.4191919193,
            "unit": "ns",
            "range": "± 186626.87594861668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2984557.9782608696,
            "unit": "ns",
            "range": "± 191209.38094049646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2108458.9784946237,
            "unit": "ns",
            "range": "± 253036.92507878292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6283273.651515151,
            "unit": "ns",
            "range": "± 727992.6778894134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274310.5,
            "unit": "ns",
            "range": "± 59219.57396720398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3451170.073170732,
            "unit": "ns",
            "range": "± 117195.86047518706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4329771.766666667,
            "unit": "ns",
            "range": "± 73512.62957329818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3869978.695652174,
            "unit": "ns",
            "range": "± 147093.43255388082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7646947.802083333,
            "unit": "ns",
            "range": "± 686901.7335633147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5942268.58974359,
            "unit": "ns",
            "range": "± 204766.8918391252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1715870.9239676339,
            "unit": "ns",
            "range": "± 19390.547584931952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1043071.6566685268,
            "unit": "ns",
            "range": "± 12041.00184323442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656115.5145089286,
            "unit": "ns",
            "range": "± 23317.45947271121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819981.7663411458,
            "unit": "ns",
            "range": "± 12945.656244147496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724970.2307942709,
            "unit": "ns",
            "range": "± 6681.29562940039"
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
          "id": "4c9242b0ddc85ac71c2743b148f11d94c4404d60",
          "message": "Changelog",
          "timestamp": "2023-09-04T10:47:58+09:00",
          "tree_id": "8b179a404dc20856cf5631d621abbc7c4fcf84dd",
          "url": "https://github.com/greymistcube/libplanet/commit/4c9242b0ddc85ac71c2743b148f11d94c4404d60"
        },
        "date": 1693793096494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8081977.0625,
            "unit": "ns",
            "range": "± 151495.33431384116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20275101.065789472,
            "unit": "ns",
            "range": "± 1020528.0713885642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51222635.63513514,
            "unit": "ns",
            "range": "± 1735364.4356446054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98207771.6923077,
            "unit": "ns",
            "range": "± 1351496.1781394589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203823242.93333334,
            "unit": "ns",
            "range": "± 2895073.3581242673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61039.905263157896,
            "unit": "ns",
            "range": "± 8188.624025262098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305819.77647058823,
            "unit": "ns",
            "range": "± 16260.320984192274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309214.7659574468,
            "unit": "ns",
            "range": "± 29644.958105990394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292650.56976744183,
            "unit": "ns",
            "range": "± 19539.024040014174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3861414.3666666667,
            "unit": "ns",
            "range": "± 71898.93017569542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3491252.785714286,
            "unit": "ns",
            "range": "± 48442.515267191564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19193.835164835164,
            "unit": "ns",
            "range": "± 4193.61308622671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81497.875,
            "unit": "ns",
            "range": "± 4248.519746312841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76605.16666666667,
            "unit": "ns",
            "range": "± 8495.518045390203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85044.32631578947,
            "unit": "ns",
            "range": "± 11790.221427406648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4600.106382978724,
            "unit": "ns",
            "range": "± 632.9835899295572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17894.333333333332,
            "unit": "ns",
            "range": "± 2296.828439832299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444602.5416666667,
            "unit": "ns",
            "range": "± 146362.8970757215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2617363.44,
            "unit": "ns",
            "range": "± 105678.95767421523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1806577.0543478262,
            "unit": "ns",
            "range": "± 143392.30350607116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5357369.418367347,
            "unit": "ns",
            "range": "± 193091.2589001891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325114.3298969073,
            "unit": "ns",
            "range": "± 219097.48741393263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399332.515789474,
            "unit": "ns",
            "range": "± 234114.45420062524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4360416.492063492,
            "unit": "ns",
            "range": "± 200194.37835472458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3859905.3160919542,
            "unit": "ns",
            "range": "± 211136.10914776946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7099424.870967742,
            "unit": "ns",
            "range": "± 321719.0285461393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5612121.15876116,
            "unit": "ns",
            "range": "± 157113.3037687361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835959.8556985294,
            "unit": "ns",
            "range": "± 35290.67194534078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 988152.1944754465,
            "unit": "ns",
            "range": "± 6263.89248106677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2732634.961348684,
            "unit": "ns",
            "range": "± 57530.33084051558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820065.9978376116,
            "unit": "ns",
            "range": "± 11970.618395936142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815268.6897321428,
            "unit": "ns",
            "range": "± 5694.336129414741"
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
          "id": "f984db1955e7006b449dc8eac5c3e9a3c6afb1d7",
          "message": "Fix broken PR",
          "timestamp": "2023-09-04T12:17:45+09:00",
          "tree_id": "81ddc7a7a5d6bede749a438531c39e5f1e4d0f2f",
          "url": "https://github.com/greymistcube/libplanet/commit/f984db1955e7006b449dc8eac5c3e9a3c6afb1d7"
        },
        "date": 1693798504935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8807666.548387097,
            "unit": "ns",
            "range": "± 362681.730077338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21203361.25,
            "unit": "ns",
            "range": "± 474557.83262226824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55819480.71428572,
            "unit": "ns",
            "range": "± 899013.6187376464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110513447,
            "unit": "ns",
            "range": "± 2396140.5706795575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222533721,
            "unit": "ns",
            "range": "± 4109182.25404242"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77822.40277777778,
            "unit": "ns",
            "range": "± 3842.9101764440875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319093.14130434784,
            "unit": "ns",
            "range": "± 26468.958179982452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332706.5869565217,
            "unit": "ns",
            "range": "± 38215.17840621353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290701.35714285716,
            "unit": "ns",
            "range": "± 11423.986005331064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4397897.47368421,
            "unit": "ns",
            "range": "± 329481.02505154663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4025708.631313131,
            "unit": "ns",
            "range": "± 300540.0043684173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23839.494623655915,
            "unit": "ns",
            "range": "± 5661.18153596252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104805.4052631579,
            "unit": "ns",
            "range": "± 18992.63958164224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103171.33870967742,
            "unit": "ns",
            "range": "± 16727.53924851648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103179.17894736842,
            "unit": "ns",
            "range": "± 17476.191064623083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6497.145161290323,
            "unit": "ns",
            "range": "± 808.0300339494664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19532.565217391304,
            "unit": "ns",
            "range": "± 2621.007464233569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1554566.73,
            "unit": "ns",
            "range": "± 153776.7039982413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2884214.6375,
            "unit": "ns",
            "range": "± 146657.0217167557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1949094.98989899,
            "unit": "ns",
            "range": "± 140783.6863656581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5464502.275862069,
            "unit": "ns",
            "range": "± 237737.71349925193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3518472.1391752576,
            "unit": "ns",
            "range": "± 308005.0315871204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3834210.414893617,
            "unit": "ns",
            "range": "± 376484.9018228378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4594386.947916667,
            "unit": "ns",
            "range": "± 393798.8219894671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5380285.779569892,
            "unit": "ns",
            "range": "± 696564.6272022113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7554923.850515464,
            "unit": "ns",
            "range": "± 728696.5359736526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6069462.798755787,
            "unit": "ns",
            "range": "± 166997.24510253855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1767405.6490542763,
            "unit": "ns",
            "range": "± 38720.24823069434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1035716.2149739583,
            "unit": "ns",
            "range": "± 13026.061084714396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650424.687760417,
            "unit": "ns",
            "range": "± 39245.41300088812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888249.04921875,
            "unit": "ns",
            "range": "± 16195.294391413787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 844691.1637369791,
            "unit": "ns",
            "range": "± 16842.2381254671"
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
          "id": "885a676c5b563d97f15170f92507349290baeffb",
          "message": "Fix broken PR",
          "timestamp": "2023-09-04T15:52:46+09:00",
          "tree_id": "35aed0d72f996bf76d82c332808d2fb6406ced25",
          "url": "https://github.com/greymistcube/libplanet/commit/885a676c5b563d97f15170f92507349290baeffb"
        },
        "date": 1693811450370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8655830.31,
            "unit": "ns",
            "range": "± 644470.2924590836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22065619.02,
            "unit": "ns",
            "range": "± 877849.8887867955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54054988.3,
            "unit": "ns",
            "range": "± 2023319.9712031416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105363372.95833333,
            "unit": "ns",
            "range": "± 2725392.581046261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228636428.6607143,
            "unit": "ns",
            "range": "± 9744457.211468201"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68755.78571428571,
            "unit": "ns",
            "range": "± 8280.310468261057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344869.35555555555,
            "unit": "ns",
            "range": "± 41571.79655398708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331760.1208791209,
            "unit": "ns",
            "range": "± 40283.70259073214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301410.1847826087,
            "unit": "ns",
            "range": "± 22903.2644656883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3949298.6153846155,
            "unit": "ns",
            "range": "± 48142.55375018803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3648787.6923076925,
            "unit": "ns",
            "range": "± 58763.55510771482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19243.208333333332,
            "unit": "ns",
            "range": "± 3106.305213989144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101681.78350515464,
            "unit": "ns",
            "range": "± 13122.546337495827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99346.03535353535,
            "unit": "ns",
            "range": "± 11797.174612725079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105343.12244897959,
            "unit": "ns",
            "range": "± 15954.534543518204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6224.095744680851,
            "unit": "ns",
            "range": "± 1126.8818818672269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17845.86813186813,
            "unit": "ns",
            "range": "± 1635.1280969785496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1745076.4375,
            "unit": "ns",
            "range": "± 32646.40390399071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2790976.888888889,
            "unit": "ns",
            "range": "± 129139.66868172972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1940947.2886597938,
            "unit": "ns",
            "range": "± 182524.66726896112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5415893.736842105,
            "unit": "ns",
            "range": "± 173931.7839128837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3508245.21,
            "unit": "ns",
            "range": "± 326403.02362382255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3509692.087912088,
            "unit": "ns",
            "range": "± 239697.24282397245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4595540.36,
            "unit": "ns",
            "range": "± 305546.13181462337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4195994.808510638,
            "unit": "ns",
            "range": "± 384304.08793393255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7600329.381443299,
            "unit": "ns",
            "range": "± 731550.6116101014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6219947.859375,
            "unit": "ns",
            "range": "± 95289.45778285626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1758202.4470052083,
            "unit": "ns",
            "range": "± 52245.05074798212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 986711.5037560096,
            "unit": "ns",
            "range": "± 15624.94897440935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3019319.912365846,
            "unit": "ns",
            "range": "± 220315.17671308466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822810.6510416666,
            "unit": "ns",
            "range": "± 14919.174968033924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 814933.5920973558,
            "unit": "ns",
            "range": "± 12563.507465141565"
          }
        ]
      }
    ]
  }
}