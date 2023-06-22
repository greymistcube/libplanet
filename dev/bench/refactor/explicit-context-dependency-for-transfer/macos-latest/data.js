window.BENCHMARK_DATA = {
  "lastUpdate": 1687402756834,
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
          "id": "8ef6b82ee106eabe33f4e852e2475ead39de2a92",
          "message": "Deleted implV0",
          "timestamp": "2023-06-21T20:58:34+09:00",
          "tree_id": "cc57646a2cb706c68e67f137d2688c8b7073abdd",
          "url": "https://github.com/greymistcube/libplanet/commit/8ef6b82ee106eabe33f4e852e2475ead39de2a92"
        },
        "date": 1687351803079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9047915.95,
            "unit": "ns",
            "range": "± 142994.15638795396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25251375.30927835,
            "unit": "ns",
            "range": "± 2826656.1401804686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67337905.0909091,
            "unit": "ns",
            "range": "± 940068.9388071449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119574504.1875,
            "unit": "ns",
            "range": "± 1249114.726189564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229157422.16666666,
            "unit": "ns",
            "range": "± 2714255.3348289514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76495.02173913043,
            "unit": "ns",
            "range": "± 7205.375647341533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378172.15873015876,
            "unit": "ns",
            "range": "± 17396.47700820425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356744.0737704918,
            "unit": "ns",
            "range": "± 14867.121452452293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333476.2543859649,
            "unit": "ns",
            "range": "± 14082.588971949803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4961183.666666667,
            "unit": "ns",
            "range": "± 154838.291699491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4526531.333333333,
            "unit": "ns",
            "range": "± 148647.25979310885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19952.752747252747,
            "unit": "ns",
            "range": "± 1510.6740628930927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100319.64210526316,
            "unit": "ns",
            "range": "± 7631.280711393116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106758.48958333333,
            "unit": "ns",
            "range": "± 14615.520573039574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130621.84210526316,
            "unit": "ns",
            "range": "± 18344.709832442328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6445.115789473684,
            "unit": "ns",
            "range": "± 1225.0306367263854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18824.951612903227,
            "unit": "ns",
            "range": "± 1692.4414993173325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2079320.3255813953,
            "unit": "ns",
            "range": "± 290447.3236810235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4017525.8181818184,
            "unit": "ns",
            "range": "± 418208.7365823503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3290754.804347826,
            "unit": "ns",
            "range": "± 492401.879806609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9087059.678160919,
            "unit": "ns",
            "range": "± 1479362.5005775408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3944799.5833333335,
            "unit": "ns",
            "range": "± 131152.50483406713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4070744.7333333334,
            "unit": "ns",
            "range": "± 56785.52969031393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5258550.882352941,
            "unit": "ns",
            "range": "± 167591.29615639255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5224438.36,
            "unit": "ns",
            "range": "± 208666.57954764258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9453432.648936171,
            "unit": "ns",
            "range": "± 739837.8406482816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7406753.743389423,
            "unit": "ns",
            "range": "± 101137.38132611918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2251395.3797743055,
            "unit": "ns",
            "range": "± 43122.40554406878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472558.544921875,
            "unit": "ns",
            "range": "± 22460.215399405683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2829924.884014423,
            "unit": "ns",
            "range": "± 19711.7234991067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1074513.4107142857,
            "unit": "ns",
            "range": "± 7425.700926594527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925792.7081473215,
            "unit": "ns",
            "range": "± 4450.052502707166"
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
          "id": "0c7e428bf41b5bdb8791aad1965a0b1fae2445ea",
          "message": "Changelog",
          "timestamp": "2023-06-22T10:14:26+09:00",
          "tree_id": "b61e4d6e3506554bf78247bdfd693240494c1801",
          "url": "https://github.com/greymistcube/libplanet/commit/0c7e428bf41b5bdb8791aad1965a0b1fae2445ea"
        },
        "date": 1687397814369,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9494014.668421052,
            "unit": "ns",
            "range": "± 1173710.2613831758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23270460.542168673,
            "unit": "ns",
            "range": "± 2154798.81003011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57068255.018518515,
            "unit": "ns",
            "range": "± 2396536.8151513236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116712727.44117647,
            "unit": "ns",
            "range": "± 5579009.225140245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221391806.78282827,
            "unit": "ns",
            "range": "± 15892884.691029526"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76195.93181818182,
            "unit": "ns",
            "range": "± 7927.777066346442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345779.9193548387,
            "unit": "ns",
            "range": "± 35172.81499419272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376428.887755102,
            "unit": "ns",
            "range": "± 56355.255114343476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331822.76923076925,
            "unit": "ns",
            "range": "± 30798.12205244445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4569885.979591837,
            "unit": "ns",
            "range": "± 411420.2279485311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4096748.3842105265,
            "unit": "ns",
            "range": "± 384172.23669130664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21449.194736842106,
            "unit": "ns",
            "range": "± 4606.775052522803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119264.5,
            "unit": "ns",
            "range": "± 24505.497954645904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114410.26595744681,
            "unit": "ns",
            "range": "± 13768.14963042276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126934.80434782608,
            "unit": "ns",
            "range": "± 17638.831860439626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7674.731578947369,
            "unit": "ns",
            "range": "± 1362.0564509549176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21178.574468085106,
            "unit": "ns",
            "range": "± 5572.522550911426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1756763.2391304348,
            "unit": "ns",
            "range": "± 207734.56117907024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3408989.5888888887,
            "unit": "ns",
            "range": "± 444992.18486594484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2919644.904494382,
            "unit": "ns",
            "range": "± 341751.6870107234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7755248.149425288,
            "unit": "ns",
            "range": "± 1459242.592399823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3720900.5714285714,
            "unit": "ns",
            "range": "± 255883.77294788815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3871166.0918367347,
            "unit": "ns",
            "range": "± 479705.48688821733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4555427.08,
            "unit": "ns",
            "range": "± 181173.3566496679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4395339.082089553,
            "unit": "ns",
            "range": "± 206917.79883004553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8092353.208333333,
            "unit": "ns",
            "range": "± 548361.1424066004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7622082.337740385,
            "unit": "ns",
            "range": "± 204090.5895794564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2115564.177473958,
            "unit": "ns",
            "range": "± 39449.16083404457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1446941.7085193451,
            "unit": "ns",
            "range": "± 60582.04636903255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3515390.6407844387,
            "unit": "ns",
            "range": "± 391354.4932133561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1073633.2660679768,
            "unit": "ns",
            "range": "± 84784.94787572084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 824291.0381789434,
            "unit": "ns",
            "range": "± 43862.378762547785"
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
          "id": "ce86eb5eb1e6c075e5c7d83a99d0e603cffd4f75",
          "message": "Changelog",
          "timestamp": "2023-06-22T11:35:55+09:00",
          "tree_id": "b61e4d6e3506554bf78247bdfd693240494c1801",
          "url": "https://github.com/greymistcube/libplanet/commit/ce86eb5eb1e6c075e5c7d83a99d0e603cffd4f75"
        },
        "date": 1687402741447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9175760.395604396,
            "unit": "ns",
            "range": "± 625072.4815905197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22295217.978723403,
            "unit": "ns",
            "range": "± 2805965.081110107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53525128.12371134,
            "unit": "ns",
            "range": "± 3682527.477439462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113319983.1491228,
            "unit": "ns",
            "range": "± 4857995.005966819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223804934.42,
            "unit": "ns",
            "range": "± 8961347.582800891"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81032.13333333333,
            "unit": "ns",
            "range": "± 13936.807473962324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355923.9731182796,
            "unit": "ns",
            "range": "± 45522.95677352429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346199.65625,
            "unit": "ns",
            "range": "± 40096.255392250685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316108.2528089888,
            "unit": "ns",
            "range": "± 27654.7814813119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4278070.795918368,
            "unit": "ns",
            "range": "± 152397.49764103463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4014383.552631579,
            "unit": "ns",
            "range": "± 319492.81156583456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18474.763736263736,
            "unit": "ns",
            "range": "± 2543.1192694325637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96038.875,
            "unit": "ns",
            "range": "± 12984.586840396174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105283.60638297872,
            "unit": "ns",
            "range": "± 14065.94179288465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131205.83333333334,
            "unit": "ns",
            "range": "± 24282.813737888482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8542.875,
            "unit": "ns",
            "range": "± 1130.9812065077315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22342.417582417584,
            "unit": "ns",
            "range": "± 3590.9022483243334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2114720,
            "unit": "ns",
            "range": "± 484257.8782973611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3952151.4505494507,
            "unit": "ns",
            "range": "± 887938.3638914641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3268332.7471910114,
            "unit": "ns",
            "range": "± 680452.4792826074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10308268.41935484,
            "unit": "ns",
            "range": "± 3099147.031229604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3476265.8596491227,
            "unit": "ns",
            "range": "± 149187.20114380727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3833893.1413043477,
            "unit": "ns",
            "range": "± 405686.37691980787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4611466.75,
            "unit": "ns",
            "range": "± 207172.94269871354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4594382.695652174,
            "unit": "ns",
            "range": "± 548920.6063578894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8151564.282608695,
            "unit": "ns",
            "range": "± 677752.0086031796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7102060.884868421,
            "unit": "ns",
            "range": "± 305283.05161745445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2424324.3075175383,
            "unit": "ns",
            "range": "± 190523.5724268543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1426136.769438244,
            "unit": "ns",
            "range": "± 32388.541288600332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3179323.0473931762,
            "unit": "ns",
            "range": "± 260258.82476564308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913788.0556904561,
            "unit": "ns",
            "range": "± 45364.48809708028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863585.1102864583,
            "unit": "ns",
            "range": "± 13425.74205122012"
          }
        ]
      }
    ]
  }
}