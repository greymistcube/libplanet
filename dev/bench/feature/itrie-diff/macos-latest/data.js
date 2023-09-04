window.BENCHMARK_DATA = {
  "lastUpdate": 1693793108885,
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
      }
    ]
  }
}