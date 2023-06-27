window.BENCHMARK_DATA = {
  "lastUpdate": 1687849202757,
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
          "id": "e105b12db61377b35d96e7224587d33d21db53dc",
          "message": "Minor streamlining",
          "timestamp": "2023-06-26T17:27:37+09:00",
          "tree_id": "d555eb2892f956aa6baefb42a14972b46a5a7f75",
          "url": "https://github.com/greymistcube/libplanet/commit/e105b12db61377b35d96e7224587d33d21db53dc"
        },
        "date": 1687768956234,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3837301.533333333,
            "unit": "ns",
            "range": "± 68086.9288681406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4056092,
            "unit": "ns",
            "range": "± 75035.56529692152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4824598.933333334,
            "unit": "ns",
            "range": "± 59130.931544770894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4971668.155555556,
            "unit": "ns",
            "range": "± 187878.73616994597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7659863.36,
            "unit": "ns",
            "range": "± 198047.04457756158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9046706.066666666,
            "unit": "ns",
            "range": "± 144914.0250697765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23651743.6,
            "unit": "ns",
            "range": "± 229106.64004869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58875467.333333336,
            "unit": "ns",
            "range": "± 359854.94162661606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119185593.26666667,
            "unit": "ns",
            "range": "± 742948.3408778901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235027260.86666667,
            "unit": "ns",
            "range": "± 755925.185503156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315501.4166666667,
            "unit": "ns",
            "range": "± 15534.800065124116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321486.1538461539,
            "unit": "ns",
            "range": "± 14937.09603138982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309342.0243902439,
            "unit": "ns",
            "range": "± 11114.637662757625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4794827.357142857,
            "unit": "ns",
            "range": "± 36365.1361917875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4393769.642857143,
            "unit": "ns",
            "range": "± 37481.01144806967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31248.447916666668,
            "unit": "ns",
            "range": "± 2693.899384163338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127433.9052631579,
            "unit": "ns",
            "range": "± 11580.347773480693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118947.12,
            "unit": "ns",
            "range": "± 10726.634476739455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131976.61855670103,
            "unit": "ns",
            "range": "± 20452.46825846216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7917.833333333333,
            "unit": "ns",
            "range": "± 962.2357810046426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26530.463917525773,
            "unit": "ns",
            "range": "± 2938.4016951604813"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61348.989583333336,
            "unit": "ns",
            "range": "± 8938.03977154863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6467969.4171875,
            "unit": "ns",
            "range": "± 56269.56368199519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903477.3023158482,
            "unit": "ns",
            "range": "± 903.6028276267291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387977.6983072916,
            "unit": "ns",
            "range": "± 3492.9415714235624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706918.430889423,
            "unit": "ns",
            "range": "± 8237.503828910341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838089.9498465402,
            "unit": "ns",
            "range": "± 587.7882708913243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765510.5802083333,
            "unit": "ns",
            "range": "± 346.238684175282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656361.3298969073,
            "unit": "ns",
            "range": "± 107215.48383140624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3085772.214285714,
            "unit": "ns",
            "range": "± 85319.59372563807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2642250.9468085105,
            "unit": "ns",
            "range": "± 163205.45350091095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6129600.128205128,
            "unit": "ns",
            "range": "± 203032.64083382458"
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
          "id": "38760ca734d2cb1d46c8098904887f1b9efb5b7b",
          "message": "Changelog",
          "timestamp": "2023-06-26T17:31:05+09:00",
          "tree_id": "ad06312248e71ce0ee14c0f626ec5f22fe6c6aa2",
          "url": "https://github.com/greymistcube/libplanet/commit/38760ca734d2cb1d46c8098904887f1b9efb5b7b"
        },
        "date": 1687769126617,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3770129.8214285714,
            "unit": "ns",
            "range": "± 105910.42473365512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3969161.434782609,
            "unit": "ns",
            "range": "± 83120.1413381564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4784511,
            "unit": "ns",
            "range": "± 113666.88128166445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5087507.214285715,
            "unit": "ns",
            "range": "± 88155.06509046655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7481314.933333334,
            "unit": "ns",
            "range": "± 110045.73828622769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8666076.8,
            "unit": "ns",
            "range": "± 113462.2056496599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22826054.4,
            "unit": "ns",
            "range": "± 168818.96077785303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57826269.21428572,
            "unit": "ns",
            "range": "± 163790.86670985637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115709982.86666666,
            "unit": "ns",
            "range": "± 421014.5041359479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230894665.06666666,
            "unit": "ns",
            "range": "± 1339965.7117730647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302993.90196078434,
            "unit": "ns",
            "range": "± 11939.060109162532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293463.9464285714,
            "unit": "ns",
            "range": "± 12577.430437703075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279355.14925373136,
            "unit": "ns",
            "range": "± 13221.518272571091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4656120.076923077,
            "unit": "ns",
            "range": "± 19287.760741212453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4296529.416666667,
            "unit": "ns",
            "range": "± 29853.919345123704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23529.247311827956,
            "unit": "ns",
            "range": "± 1904.8943463564426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97561.25510204081,
            "unit": "ns",
            "range": "± 6169.49913472944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90627.03,
            "unit": "ns",
            "range": "± 7279.031218777634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108480.22105263158,
            "unit": "ns",
            "range": "± 15154.673672879497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7216.3877551020405,
            "unit": "ns",
            "range": "± 1069.5980903592074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21802.78350515464,
            "unit": "ns",
            "range": "± 2193.083750808076"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50245.364583333336,
            "unit": "ns",
            "range": "± 3694.7617176064755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6478950.408653846,
            "unit": "ns",
            "range": "± 23738.08189578675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963920.5072916667,
            "unit": "ns",
            "range": "± 2200.7714249738033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412513.8625,
            "unit": "ns",
            "range": "± 3420.064207593362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2696716.8315104167,
            "unit": "ns",
            "range": "± 7718.952349818505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833253.7930989583,
            "unit": "ns",
            "range": "± 254.0707854715126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771383.7464192709,
            "unit": "ns",
            "range": "± 384.23944134190776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571891.5670103093,
            "unit": "ns",
            "range": "± 104856.74761866656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944697.9310344825,
            "unit": "ns",
            "range": "± 84119.03211093663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2470781.1578947366,
            "unit": "ns",
            "range": "± 125631.49403766052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5880579.897435897,
            "unit": "ns",
            "range": "± 191813.71015454645"
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
          "id": "408a2fffe21226e9d082fa46ea4a7c3ceb5bfca2",
          "message": "Code reroute",
          "timestamp": "2023-06-26T19:15:32+09:00",
          "tree_id": "7fd7c20fd11e605703f4b3bff0c5690ac74a9ea0",
          "url": "https://github.com/greymistcube/libplanet/commit/408a2fffe21226e9d082fa46ea4a7c3ceb5bfca2"
        },
        "date": 1687775376040,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3580250,
            "unit": "ns",
            "range": "± 83654.32959865258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3769748.772727273,
            "unit": "ns",
            "range": "± 138647.7976131262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4584165.533333333,
            "unit": "ns",
            "range": "± 76086.34985693808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4673613.878787879,
            "unit": "ns",
            "range": "± 148082.01895777168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7319656.433333334,
            "unit": "ns",
            "range": "± 218472.7740925681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8077685.642857143,
            "unit": "ns",
            "range": "± 67245.46488066301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22740286.4,
            "unit": "ns",
            "range": "± 319070.55545282055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56395076.5625,
            "unit": "ns",
            "range": "± 1024629.7873116233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111621513.71428572,
            "unit": "ns",
            "range": "± 1937484.662355746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224781763.66666666,
            "unit": "ns",
            "range": "± 4035545.4146236302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293603.76923076925,
            "unit": "ns",
            "range": "± 10211.911541924017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288487.0967741936,
            "unit": "ns",
            "range": "± 8645.809653062532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249197.60975609755,
            "unit": "ns",
            "range": "± 8699.84192924805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4488032,
            "unit": "ns",
            "range": "± 22963.676131110748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4069389.9285714286,
            "unit": "ns",
            "range": "± 59643.398960906736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20282.55789473684,
            "unit": "ns",
            "range": "± 2399.294979407136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89023.03333333334,
            "unit": "ns",
            "range": "± 4963.681119623154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75624.88405797101,
            "unit": "ns",
            "range": "± 3536.577123585126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92295.42105263157,
            "unit": "ns",
            "range": "± 4703.665402678094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5336.5625,
            "unit": "ns",
            "range": "± 692.5139225277256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19423.395833333332,
            "unit": "ns",
            "range": "± 1739.843607485676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47264.572916666664,
            "unit": "ns",
            "range": "± 4199.135526935818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6174158.223858173,
            "unit": "ns",
            "range": "± 21130.241610834822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1940640.5828125,
            "unit": "ns",
            "range": "± 3674.3911077334396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401768.4694010417,
            "unit": "ns",
            "range": "± 3436.0180912087676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662901.1219308036,
            "unit": "ns",
            "range": "± 1883.9218720319632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836573.5265066965,
            "unit": "ns",
            "range": "± 722.9542345024483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776363.3805338541,
            "unit": "ns",
            "range": "± 395.248513293599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1550054.2258064516,
            "unit": "ns",
            "range": "± 96471.17054649798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2908313.925,
            "unit": "ns",
            "range": "± 101129.2446077936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2430461.525,
            "unit": "ns",
            "range": "± 126809.02775363495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5722420.5121951215,
            "unit": "ns",
            "range": "± 202695.74464812054"
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
          "id": "615d3b63e0ccddc29c3c916a0083ccb74fb2abba",
          "message": "Code reroute",
          "timestamp": "2023-06-27T15:47:45+09:00",
          "tree_id": "7fd7c20fd11e605703f4b3bff0c5690ac74a9ea0",
          "url": "https://github.com/greymistcube/libplanet/commit/615d3b63e0ccddc29c3c916a0083ccb74fb2abba"
        },
        "date": 1687849195252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188596.32,
            "unit": "ns",
            "range": "± 76037.24628524717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3386415.3333333335,
            "unit": "ns",
            "range": "± 42604.33356004103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4130130.2,
            "unit": "ns",
            "range": "± 38147.51701562164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4102097,
            "unit": "ns",
            "range": "± 53026.95128086148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6619194,
            "unit": "ns",
            "range": "± 150906.95370194176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7745829.615384615,
            "unit": "ns",
            "range": "± 8013.44400095304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19379804.4,
            "unit": "ns",
            "range": "± 72061.70329734295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49578002.86666667,
            "unit": "ns",
            "range": "± 589646.712260203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98366458,
            "unit": "ns",
            "range": "± 645538.4138894626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197418082.35714287,
            "unit": "ns",
            "range": "± 688672.3312133737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267796.92307692306,
            "unit": "ns",
            "range": "± 9013.879138612081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258641.57777777777,
            "unit": "ns",
            "range": "± 8928.026144697607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230324.83333333334,
            "unit": "ns",
            "range": "± 1594.1712485479625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4162005.785714286,
            "unit": "ns",
            "range": "± 26439.124485616652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3777013.0714285714,
            "unit": "ns",
            "range": "± 24462.827355505633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15374.123595505618,
            "unit": "ns",
            "range": "± 865.0618057297293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80785.82278481012,
            "unit": "ns",
            "range": "± 4013.101526952445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71457,
            "unit": "ns",
            "range": "± 701.3018663117243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80660.26744186046,
            "unit": "ns",
            "range": "± 7503.333259957625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4306.164948453608,
            "unit": "ns",
            "range": "± 404.86257134397806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14841.795918367347,
            "unit": "ns",
            "range": "± 1099.0793144102984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45452.28571428572,
            "unit": "ns",
            "range": "± 2443.9085058270284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6259081.237980769,
            "unit": "ns",
            "range": "± 12848.080845558125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999342.76640625,
            "unit": "ns",
            "range": "± 5185.735721898048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346819.0411551339,
            "unit": "ns",
            "range": "± 5191.642089448429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572531.0811298075,
            "unit": "ns",
            "range": "± 4238.366979165232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805724.1629557292,
            "unit": "ns",
            "range": "± 1236.8976438340906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753778.1049479167,
            "unit": "ns",
            "range": "± 1124.6034230319356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1312539.625,
            "unit": "ns",
            "range": "± 97576.63762216532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2497626.3333333335,
            "unit": "ns",
            "range": "± 55657.537218919075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2073990.125,
            "unit": "ns",
            "range": "± 108836.74515887223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5070611.233333333,
            "unit": "ns",
            "range": "± 148722.1441862558"
          }
        ]
      }
    ]
  }
}