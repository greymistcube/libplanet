window.BENCHMARK_DATA = {
  "lastUpdate": 1690964000671,
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
          "id": "9378f081b0be228a89dd695049564cd1e9fa248f",
          "message": "Fix tests; update to new API",
          "timestamp": "2023-08-02T16:53:42+09:00",
          "tree_id": "0ad558a6ae1dac5b762861ec861e86be87aee7bd",
          "url": "https://github.com/greymistcube/libplanet/commit/9378f081b0be228a89dd695049564cd1e9fa248f"
        },
        "date": 1690963909140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11788996.11,
            "unit": "ns",
            "range": "± 2049061.2881073128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24725058.040816326,
            "unit": "ns",
            "range": "± 3565751.403788395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60792783.09,
            "unit": "ns",
            "range": "± 8080618.422371763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125596225.27,
            "unit": "ns",
            "range": "± 13993152.504979799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263293824.61,
            "unit": "ns",
            "range": "± 20156032.365612946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70683.52577319587,
            "unit": "ns",
            "range": "± 12274.148896234436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333223.6179775281,
            "unit": "ns",
            "range": "± 27462.947246122538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313563.032967033,
            "unit": "ns",
            "range": "± 20741.847851063776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304039.54545454547,
            "unit": "ns",
            "range": "± 7386.150590493979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208024.594594595,
            "unit": "ns",
            "range": "± 138492.74521802767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3873390.120689655,
            "unit": "ns",
            "range": "± 249251.23624303256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18953.231958762888,
            "unit": "ns",
            "range": "± 3656.924039053244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83314.69473684211,
            "unit": "ns",
            "range": "± 7552.224485700807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84044.30612244898,
            "unit": "ns",
            "range": "± 11366.8412838089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111833.52040816327,
            "unit": "ns",
            "range": "± 24167.44097548813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4512.5329670329675,
            "unit": "ns",
            "range": "± 668.4716141326413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16833.391304347828,
            "unit": "ns",
            "range": "± 1733.0489486408321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561861.3157894737,
            "unit": "ns",
            "range": "± 144443.81716979117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3159487.474226804,
            "unit": "ns",
            "range": "± 418158.9543960101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202144.047368421,
            "unit": "ns",
            "range": "± 335473.2364786226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6187256.425531914,
            "unit": "ns",
            "range": "± 726804.770772452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4285880.49,
            "unit": "ns",
            "range": "± 824328.9439087082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4170775.44,
            "unit": "ns",
            "range": "± 801769.9319669447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4891575.59375,
            "unit": "ns",
            "range": "± 606157.7312198889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4285894,
            "unit": "ns",
            "range": "± 706709.3051130526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7508786.598901099,
            "unit": "ns",
            "range": "± 781340.9887770448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6206319.534598215,
            "unit": "ns",
            "range": "± 90751.03609602092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1916750.39609375,
            "unit": "ns",
            "range": "± 30728.93446113211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1265217.2337239583,
            "unit": "ns",
            "range": "± 20814.289974177285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2541685.1127929688,
            "unit": "ns",
            "range": "± 49802.52192837737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776087.1713169643,
            "unit": "ns",
            "range": "± 8773.697150175169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723526.6436941965,
            "unit": "ns",
            "range": "± 6785.710754400933"
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
          "id": "572df674c2a42409a261c5439b847ead10d2496e",
          "message": "Fix tests; update to new API",
          "timestamp": "2023-08-02T16:56:57+09:00",
          "tree_id": "0ad558a6ae1dac5b762861ec861e86be87aee7bd",
          "url": "https://github.com/greymistcube/libplanet/commit/572df674c2a42409a261c5439b847ead10d2496e"
        },
        "date": 1690963985798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9613370.635135135,
            "unit": "ns",
            "range": "± 442680.7337917467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20102465.333333332,
            "unit": "ns",
            "range": "± 367166.48327343405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50896513.916666664,
            "unit": "ns",
            "range": "± 767395.4301746866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100966403.6764706,
            "unit": "ns",
            "range": "± 1998174.5375927887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202132890.46666667,
            "unit": "ns",
            "range": "± 2098482.3901022538"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55640.09782608696,
            "unit": "ns",
            "range": "± 5781.763988135517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318412.52040816325,
            "unit": "ns",
            "range": "± 25142.30044065246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300725.34375,
            "unit": "ns",
            "range": "± 13822.820320976181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293523.29411764705,
            "unit": "ns",
            "range": "± 11981.030762491377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4190109,
            "unit": "ns",
            "range": "± 122215.04177981276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3759689.210526316,
            "unit": "ns",
            "range": "± 78059.79684730229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16922.260869565216,
            "unit": "ns",
            "range": "± 1901.853149884793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80560.53608247422,
            "unit": "ns",
            "range": "± 7453.1342163630725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75847.66304347826,
            "unit": "ns",
            "range": "± 5938.3767239862655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96979.46875,
            "unit": "ns",
            "range": "± 13305.699529824073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5088.704545454545,
            "unit": "ns",
            "range": "± 524.3383605086894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15875.356321839081,
            "unit": "ns",
            "range": "± 1404.3729543159895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537739.7171717172,
            "unit": "ns",
            "range": "± 201948.7836081643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2887631.6914893617,
            "unit": "ns",
            "range": "± 193670.37345354346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1937430.875,
            "unit": "ns",
            "range": "± 184234.61932713893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5468337.666666667,
            "unit": "ns",
            "range": "± 215866.99567324528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419414.8571428573,
            "unit": "ns",
            "range": "± 97783.19725298346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3441437.776470588,
            "unit": "ns",
            "range": "± 185122.45030618543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4452484.561643835,
            "unit": "ns",
            "range": "± 220165.9178428463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3805273.0833333335,
            "unit": "ns",
            "range": "± 180847.0073074959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7202267.527777778,
            "unit": "ns",
            "range": "± 353727.63185623335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6410903.085416666,
            "unit": "ns",
            "range": "± 54163.90500512919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2005755.1981770834,
            "unit": "ns",
            "range": "± 17106.348090755928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290341.8369891827,
            "unit": "ns",
            "range": "± 13234.4629377589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677490.2728365385,
            "unit": "ns",
            "range": "± 16401.658455365294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855981.3048828125,
            "unit": "ns",
            "range": "± 9589.350029340712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820019.272265625,
            "unit": "ns",
            "range": "± 9432.21357353666"
          }
        ]
      }
    ]
  }
}