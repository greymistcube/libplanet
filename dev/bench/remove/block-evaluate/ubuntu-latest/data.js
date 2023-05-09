window.BENCHMARK_DATA = {
  "lastUpdate": 1683016097028,
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
          "id": "02a90bf9b723dac067810660ba4256f7507d36bd",
          "message": "Removed unnecessary usage of BlockChain<T>.EvaluateAndSign()",
          "timestamp": "2023-05-02T17:09:48+09:00",
          "tree_id": "d747245eadd7dd1eaffb8294c75b033f9a8e9153",
          "url": "https://github.com/greymistcube/libplanet/commit/02a90bf9b723dac067810660ba4256f7507d36bd"
        },
        "date": 1683015845768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284576.0833333333,
            "unit": "ns",
            "range": "± 8342.729855988386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277311.7837837838,
            "unit": "ns",
            "range": "± 9375.26765583888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231187.31578947368,
            "unit": "ns",
            "range": "± 4837.926140318937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4329184.266666667,
            "unit": "ns",
            "range": "± 37690.91502976483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3928544,
            "unit": "ns",
            "range": "± 54195.03552514224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21454.957894736843,
            "unit": "ns",
            "range": "± 1814.92947472024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91939.81720430107,
            "unit": "ns",
            "range": "± 5199.525563528633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79550.96153846153,
            "unit": "ns",
            "range": "± 3259.136785519595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100987.3163265306,
            "unit": "ns",
            "range": "± 16883.7364913462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5961.886597938144,
            "unit": "ns",
            "range": "± 710.6870044231945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19304.516129032258,
            "unit": "ns",
            "range": "± 1540.6376546382346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3451311.1052631577,
            "unit": "ns",
            "range": "± 107381.23365583057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3719381.933333333,
            "unit": "ns",
            "range": "± 110409.75539855078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4203301.466666667,
            "unit": "ns",
            "range": "± 60959.57983060423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4557817.25,
            "unit": "ns",
            "range": "± 159540.90674402326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6759374.238095238,
            "unit": "ns",
            "range": "± 137033.38313962214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5897750.254464285,
            "unit": "ns",
            "range": "± 26063.32615619408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837393.6114583334,
            "unit": "ns",
            "range": "± 1574.8988658091532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377479.523046875,
            "unit": "ns",
            "range": "± 3532.9923766224792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2851024.073958333,
            "unit": "ns",
            "range": "± 6702.348779068702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826687.4375,
            "unit": "ns",
            "range": "± 1114.4278246113465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763372.7662259615,
            "unit": "ns",
            "range": "± 789.7606114865304"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50026.22340425532,
            "unit": "ns",
            "range": "± 3683.711931559683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7950832.642857143,
            "unit": "ns",
            "range": "± 106790.49804432482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21531248.266666666,
            "unit": "ns",
            "range": "± 219394.43221919044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54314477.666666664,
            "unit": "ns",
            "range": "± 475293.5692576396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109092417.86666666,
            "unit": "ns",
            "range": "± 1519840.4144884453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216528850.46666667,
            "unit": "ns",
            "range": "± 1251767.357292758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420417.0344827587,
            "unit": "ns",
            "range": "± 77744.75426668458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700545.9166666665,
            "unit": "ns",
            "range": "± 69096.76507869655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2263133.1166666667,
            "unit": "ns",
            "range": "± 100604.62054929441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5193273.46875,
            "unit": "ns",
            "range": "± 145930.81681001344"
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
          "id": "cbe34e88fd4edd25388fae96680f03f2f0005c78",
          "message": "Changelog",
          "timestamp": "2023-05-02T17:13:12+09:00",
          "tree_id": "ce6a0112c356adf178ade77c4273046864442982",
          "url": "https://github.com/greymistcube/libplanet/commit/cbe34e88fd4edd25388fae96680f03f2f0005c78"
        },
        "date": 1683015989360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280406.0416666667,
            "unit": "ns",
            "range": "± 11060.65083875946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263809.625,
            "unit": "ns",
            "range": "± 9166.428028653647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234173.88888888888,
            "unit": "ns",
            "range": "± 6318.591605080586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4128176.6666666665,
            "unit": "ns",
            "range": "± 66704.91307849462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3775207.933333333,
            "unit": "ns",
            "range": "± 30532.338222815182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15389.876404494382,
            "unit": "ns",
            "range": "± 1263.401260848745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78728.78947368421,
            "unit": "ns",
            "range": "± 3994.8046604418246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69612.45833333333,
            "unit": "ns",
            "range": "± 1762.020529396435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80560.14285714286,
            "unit": "ns",
            "range": "± 11401.242256424986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4195.778947368421,
            "unit": "ns",
            "range": "± 368.70833133335196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15906.185567010309,
            "unit": "ns",
            "range": "± 1703.4777193160423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3277962.4,
            "unit": "ns",
            "range": "± 40051.95364380762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3417788.8666666667,
            "unit": "ns",
            "range": "± 58619.916193665624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4189220.8421052634,
            "unit": "ns",
            "range": "± 90067.40016988707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4119635.8695652173,
            "unit": "ns",
            "range": "± 157942.12813455283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6661977.277777778,
            "unit": "ns",
            "range": "± 219002.18300472468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6211469.256138393,
            "unit": "ns",
            "range": "± 25098.904584637512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830006.001674107,
            "unit": "ns",
            "range": "± 5176.415133146545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347842.3669270833,
            "unit": "ns",
            "range": "± 6032.693376161293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539708.0895647323,
            "unit": "ns",
            "range": "± 5083.192442332273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843652.2104817708,
            "unit": "ns",
            "range": "± 1150.9317118137794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769989.5512369792,
            "unit": "ns",
            "range": "± 1124.8267800378992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45775.17894736842,
            "unit": "ns",
            "range": "± 2974.0937828756014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7775443.615384615,
            "unit": "ns",
            "range": "± 81302.28842262934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19917030.785714287,
            "unit": "ns",
            "range": "± 169029.35973018623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50903340.461538464,
            "unit": "ns",
            "range": "± 474558.283677677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103884729.26666667,
            "unit": "ns",
            "range": "± 734564.8917431586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204016090.46666667,
            "unit": "ns",
            "range": "± 1390885.900291551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322465.2527472528,
            "unit": "ns",
            "range": "± 75054.42033271494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2481984.0625,
            "unit": "ns",
            "range": "± 76798.78822504087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2074645.2962962964,
            "unit": "ns",
            "range": "± 109066.36790739441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5101504.861111111,
            "unit": "ns",
            "range": "± 161617.81478557948"
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
          "id": "671ae7a4ac1344a77309ce3c06a77c076b0dd4cf",
          "message": "Changelog",
          "timestamp": "2023-05-02T17:14:32+09:00",
          "tree_id": "58aa7a02d3106cd017adf090d986f5f85ce79ca8",
          "url": "https://github.com/greymistcube/libplanet/commit/671ae7a4ac1344a77309ce3c06a77c076b0dd4cf"
        },
        "date": 1683016089080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272933.45238095237,
            "unit": "ns",
            "range": "± 9874.084839847508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262894.7,
            "unit": "ns",
            "range": "± 6015.287035195367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222853.91666666666,
            "unit": "ns",
            "range": "± 1898.1737854308728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4156374.5,
            "unit": "ns",
            "range": "± 41290.40492703434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3849997.285714286,
            "unit": "ns",
            "range": "± 55561.07825202345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18833.604166666668,
            "unit": "ns",
            "range": "± 1678.6379784573262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86486.03092783505,
            "unit": "ns",
            "range": "± 6233.6898123115525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74672.71428571429,
            "unit": "ns",
            "range": "± 1768.6266463800987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92317,
            "unit": "ns",
            "range": "± 14437.196369458625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5603.333333333333,
            "unit": "ns",
            "range": "± 746.6590563147356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18294.125,
            "unit": "ns",
            "range": "± 1586.364007142716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3657134.4375,
            "unit": "ns",
            "range": "± 61816.45535504685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3457866.5454545454,
            "unit": "ns",
            "range": "± 83120.2175868682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4175505.6923076925,
            "unit": "ns",
            "range": "± 68966.7789402799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4172301.3061224488,
            "unit": "ns",
            "range": "± 142369.2884429732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6790337.222222222,
            "unit": "ns",
            "range": "± 244936.44746442896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5987906.31875,
            "unit": "ns",
            "range": "± 39392.257291450514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856672.446875,
            "unit": "ns",
            "range": "± 15779.151979692875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332860.3401041667,
            "unit": "ns",
            "range": "± 10266.096866876736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586386.0833333335,
            "unit": "ns",
            "range": "± 13724.694895291112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816931.1155598959,
            "unit": "ns",
            "range": "± 2902.004331373611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755474.1162806919,
            "unit": "ns",
            "range": "± 2933.7863648191924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48656.86021505376,
            "unit": "ns",
            "range": "± 3157.222591316194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7672482.285714285,
            "unit": "ns",
            "range": "± 22130.340424329293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20952560.8,
            "unit": "ns",
            "range": "± 213278.822783095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51461486.6,
            "unit": "ns",
            "range": "± 944428.0999953508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101351875.21052632,
            "unit": "ns",
            "range": "± 2193351.500367001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204074357.53333333,
            "unit": "ns",
            "range": "± 2487240.834834509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414946.2528735632,
            "unit": "ns",
            "range": "± 74208.47349429791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2671935.65625,
            "unit": "ns",
            "range": "± 82601.04775505491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317883.3220338984,
            "unit": "ns",
            "range": "± 99997.14026608215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5288929.75,
            "unit": "ns",
            "range": "± 141083.5484362186"
          }
        ]
      }
    ]
  }
}