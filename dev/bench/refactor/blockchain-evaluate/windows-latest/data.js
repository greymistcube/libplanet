window.BENCHMARK_DATA = {
  "lastUpdate": 1693848339327,
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
          "id": "aa648e7190f598c9d6958fd46da135d82142a85b",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:10:43+09:00",
          "tree_id": "0e30da4a540935e01029fe8a98862a01b934b52b",
          "url": "https://github.com/greymistcube/libplanet/commit/aa648e7190f598c9d6958fd46da135d82142a85b"
        },
        "date": 1693798020683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1303305.2631578948,
            "unit": "ns",
            "range": "± 90951.34702243816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2563890,
            "unit": "ns",
            "range": "± 153768.24979970555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1722094,
            "unit": "ns",
            "range": "± 124054.45107823916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4553174.576271187,
            "unit": "ns",
            "range": "± 200280.9574789792"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49493.333333333336,
            "unit": "ns",
            "range": "± 2397.2581936134557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7682831.25,
            "unit": "ns",
            "range": "± 141432.53618480673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20865685.714285713,
            "unit": "ns",
            "range": "± 235361.28891277197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52853833.333333336,
            "unit": "ns",
            "range": "± 798261.6440622413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104376580,
            "unit": "ns",
            "range": "± 1273438.2666062547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209061180,
            "unit": "ns",
            "range": "± 2852095.246405952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4541228.984375,
            "unit": "ns",
            "range": "± 16099.86781203966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1440271.5104166667,
            "unit": "ns",
            "range": "± 5711.56825873184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074886.0807291667,
            "unit": "ns",
            "range": "± 3575.3548928754753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631826.231971154,
            "unit": "ns",
            "range": "± 6522.343523473886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849417.1614583334,
            "unit": "ns",
            "range": "± 2871.8454838204557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774772.03125,
            "unit": "ns",
            "range": "± 2227.934286263319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295859.649122807,
            "unit": "ns",
            "range": "± 142394.45321717256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3454291.4285714286,
            "unit": "ns",
            "range": "± 111452.14317583755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4187117.5,
            "unit": "ns",
            "range": "± 146929.6393402865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3911518.3673469387,
            "unit": "ns",
            "range": "± 143483.10247997465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6122746.666666667,
            "unit": "ns",
            "range": "± 109085.26066906608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263403.4482758621,
            "unit": "ns",
            "range": "± 7644.4416202054335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254684.61538461538,
            "unit": "ns",
            "range": "± 8882.109115980176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240806.0606060606,
            "unit": "ns",
            "range": "± 18228.038607202838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4238110,
            "unit": "ns",
            "range": "± 38960.48914330664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867153.3333333335,
            "unit": "ns",
            "range": "± 67324.882543706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23031.81818181818,
            "unit": "ns",
            "range": "± 2482.6074030392383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94504,
            "unit": "ns",
            "range": "± 7956.738075875114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77338.42105263157,
            "unit": "ns",
            "range": "± 5461.584665174679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88115.625,
            "unit": "ns",
            "range": "± 15032.164309100319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5486.458333333333,
            "unit": "ns",
            "range": "± 761.3865180212753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20592.78350515464,
            "unit": "ns",
            "range": "± 2310.6297582531665"
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
          "id": "caa63db381810757bf0683c4bf33c7dc5a705cbc",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:19:07+09:00",
          "tree_id": "c720e196c10642a1107489dfcedad0ac13713150",
          "url": "https://github.com/greymistcube/libplanet/commit/caa63db381810757bf0683c4bf33c7dc5a705cbc"
        },
        "date": 1693798410951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1216227.551020408,
            "unit": "ns",
            "range": "± 94694.0845327049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2243339.1304347827,
            "unit": "ns",
            "range": "± 85648.67120526187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1526556.9892473118,
            "unit": "ns",
            "range": "± 90371.05442448572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4058020.4545454546,
            "unit": "ns",
            "range": "± 149224.52192577007"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42541.42857142857,
            "unit": "ns",
            "range": "± 2017.9263899146254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7063092.307692308,
            "unit": "ns",
            "range": "± 29251.5088368236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17413033.333333332,
            "unit": "ns",
            "range": "± 120438.41737980611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44140140,
            "unit": "ns",
            "range": "± 174444.59947420066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88482213.33333333,
            "unit": "ns",
            "range": "± 375876.68165174045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175740728.57142857,
            "unit": "ns",
            "range": "± 853778.2538886704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4352525.130208333,
            "unit": "ns",
            "range": "± 16060.50115419048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1392119.453125,
            "unit": "ns",
            "range": "± 2021.6496921165583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 990073.5026041666,
            "unit": "ns",
            "range": "± 2392.073404383588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517682.2005208335,
            "unit": "ns",
            "range": "± 5093.981077747282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802615.5403645834,
            "unit": "ns",
            "range": "± 1017.0664255817526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728643.984375,
            "unit": "ns",
            "range": "± 1282.5175723022223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2840933.3333333335,
            "unit": "ns",
            "range": "± 31554.02774079193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2964884.6153846155,
            "unit": "ns",
            "range": "± 22553.855773601335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3726455,
            "unit": "ns",
            "range": "± 84118.66602416024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3188700,
            "unit": "ns",
            "range": "± 92195.91820321187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5434466.666666667,
            "unit": "ns",
            "range": "± 139891.49729162507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233913.33333333334,
            "unit": "ns",
            "range": "± 6750.452517824438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233276.4705882353,
            "unit": "ns",
            "range": "± 7439.628078987161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201530.76923076922,
            "unit": "ns",
            "range": "± 1651.4562338456603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3707253.3333333335,
            "unit": "ns",
            "range": "± 20265.44795834479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3282180,
            "unit": "ns",
            "range": "± 29536.44721840652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15125.263157894737,
            "unit": "ns",
            "range": "± 1227.2585277116575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72092.39130434782,
            "unit": "ns",
            "range": "± 4388.70262177117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62406.666666666664,
            "unit": "ns",
            "range": "± 1167.7002224560076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67598.97959183673,
            "unit": "ns",
            "range": "± 11242.257311745572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3632.2916666666665,
            "unit": "ns",
            "range": "± 521.2323033303747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14694.565217391304,
            "unit": "ns",
            "range": "± 1216.6757205133852"
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
          "id": "4be7d1da6e8afe4c52f64578875a8f0c0b5200d7",
          "message": "Minor changes",
          "timestamp": "2023-09-04T12:53:37+09:00",
          "tree_id": "20a322fc42461e47197f99c18ecb61a0f8e92264",
          "url": "https://github.com/greymistcube/libplanet/commit/4be7d1da6e8afe4c52f64578875a8f0c0b5200d7"
        },
        "date": 1693800581376,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332567.0103092783,
            "unit": "ns",
            "range": "± 88747.69917398972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651088,
            "unit": "ns",
            "range": "± 133501.893862465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1826501.030927835,
            "unit": "ns",
            "range": "± 127150.30352471095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4902144.578313253,
            "unit": "ns",
            "range": "± 261265.2494104701"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53829.34782608696,
            "unit": "ns",
            "range": "± 3440.4682163939838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7397530.769230769,
            "unit": "ns",
            "range": "± 80514.40227908902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20957746.666666668,
            "unit": "ns",
            "range": "± 363861.74938658596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52688940,
            "unit": "ns",
            "range": "± 748180.9586304257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106872571.42857143,
            "unit": "ns",
            "range": "± 1567549.6887860324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209474307.14285713,
            "unit": "ns",
            "range": "± 1142421.6596364905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4629480,
            "unit": "ns",
            "range": "± 70160.03681316736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1456292.0340401786,
            "unit": "ns",
            "range": "± 17782.818347568824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1088051.66015625,
            "unit": "ns",
            "range": "± 10391.67985896279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2796180.5245535714,
            "unit": "ns",
            "range": "± 64603.63329638256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 868977.8385416666,
            "unit": "ns",
            "range": "± 15317.850610567966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777950.6184895834,
            "unit": "ns",
            "range": "± 6539.600337478077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331892.8571428573,
            "unit": "ns",
            "range": "± 55800.15804066004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4220107.692307692,
            "unit": "ns",
            "range": "± 38566.79187976926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4256536,
            "unit": "ns",
            "range": "± 111707.6388017698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3848815.3846153845,
            "unit": "ns",
            "range": "± 125309.11156534287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6368528.125,
            "unit": "ns",
            "range": "± 195680.06843689457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268696.7213114754,
            "unit": "ns",
            "range": "± 12063.20807542663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277989.1304347826,
            "unit": "ns",
            "range": "± 10699.205126464502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250893.9393939394,
            "unit": "ns",
            "range": "± 17892.14750906345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4107161.111111111,
            "unit": "ns",
            "range": "± 83176.46117027616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3850286.6666666665,
            "unit": "ns",
            "range": "± 63296.61316449118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23021.875,
            "unit": "ns",
            "range": "± 1998.2204253838095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91334.02061855671,
            "unit": "ns",
            "range": "± 7034.14124404942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73871.875,
            "unit": "ns",
            "range": "± 5397.010929550191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90440.8163265306,
            "unit": "ns",
            "range": "± 18856.56568492348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5922.916666666667,
            "unit": "ns",
            "range": "± 1230.787438714844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20240.625,
            "unit": "ns",
            "range": "± 2170.35423376001"
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
          "id": "b2972226e0a15e35af4e322c6559b466a2f07bcc",
          "message": "Clarification",
          "timestamp": "2023-09-04T17:48:38+09:00",
          "tree_id": "04a2ccfa25c036d7bc61acb545d646427c7b59a1",
          "url": "https://github.com/greymistcube/libplanet/commit/b2972226e0a15e35af4e322c6559b466a2f07bcc"
        },
        "date": 1693818439337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406365.9793814432,
            "unit": "ns",
            "range": "± 94846.6260674283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2708569.565217391,
            "unit": "ns",
            "range": "± 151721.14222352495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1854756.8421052631,
            "unit": "ns",
            "range": "± 124930.90571466922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5076210.416666667,
            "unit": "ns",
            "range": "± 328353.35955713334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54509.3023255814,
            "unit": "ns",
            "range": "± 3382.5374362339203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8615030.76923077,
            "unit": "ns",
            "range": "± 211800.3338415325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23317956.666666668,
            "unit": "ns",
            "range": "± 619771.0954990495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59094710.344827585,
            "unit": "ns",
            "range": "± 2553537.1388605707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118019713.79310344,
            "unit": "ns",
            "range": "± 5165370.433123394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231819310,
            "unit": "ns",
            "range": "± 7521082.283677407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5373320.859375,
            "unit": "ns",
            "range": "± 76434.49005453926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1685529.2236328125,
            "unit": "ns",
            "range": "± 29731.699506253703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1261445.0474330357,
            "unit": "ns",
            "range": "± 14254.296006397844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3123075.5208333335,
            "unit": "ns",
            "range": "± 33383.427952564605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989687.109375,
            "unit": "ns",
            "range": "± 8529.139050350632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909845.91796875,
            "unit": "ns",
            "range": "± 12462.047026240714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3565282.6086956523,
            "unit": "ns",
            "range": "± 135612.50238061522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3727502.4691358022,
            "unit": "ns",
            "range": "± 187837.73381253076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4540440.625,
            "unit": "ns",
            "range": "± 207887.6869535682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4041275,
            "unit": "ns",
            "range": "± 170055.31105549695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6678981.481481481,
            "unit": "ns",
            "range": "± 172933.31092791242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283508,
            "unit": "ns",
            "range": "± 14269.413139696788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271316.6666666667,
            "unit": "ns",
            "range": "± 9861.922749910547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243897.46835443037,
            "unit": "ns",
            "range": "± 12671.146050241465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4578448.484848484,
            "unit": "ns",
            "range": "± 144362.96945809052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4282875,
            "unit": "ns",
            "range": "± 143121.4876050613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21617.204301075268,
            "unit": "ns",
            "range": "± 1766.6982011351972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94867.36842105263,
            "unit": "ns",
            "range": "± 9491.849158511124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78394.11764705883,
            "unit": "ns",
            "range": "± 3675.1640171721274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86893.68421052632,
            "unit": "ns",
            "range": "± 16356.700823029983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5474.468085106383,
            "unit": "ns",
            "range": "± 678.0643180411391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20174.468085106382,
            "unit": "ns",
            "range": "± 1605.7648946280863"
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
          "id": "757e60620490bd326a2923e0d7f483672c7d433c",
          "message": "Clarification",
          "timestamp": "2023-09-04T17:47:45+09:00",
          "tree_id": "2debabf094a5893355adb8fc422c1f9c2fb509d3",
          "url": "https://github.com/greymistcube/libplanet/commit/757e60620490bd326a2923e0d7f483672c7d433c"
        },
        "date": 1693818498505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537863.7681159421,
            "unit": "ns",
            "range": "± 73864.75114737128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2998065.9574468085,
            "unit": "ns",
            "range": "± 116838.09919973383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2039616.8421052631,
            "unit": "ns",
            "range": "± 141319.43117710133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5245324.242424242,
            "unit": "ns",
            "range": "± 145891.5115554685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59794.68085106383,
            "unit": "ns",
            "range": "± 4738.8889179446505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9750742.307692308,
            "unit": "ns",
            "range": "± 259477.9345887845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26292608.333333332,
            "unit": "ns",
            "range": "± 1031030.1765881836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64652293.84615385,
            "unit": "ns",
            "range": "± 3015839.4765117285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131124432,
            "unit": "ns",
            "range": "± 3476994.057817758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260931800,
            "unit": "ns",
            "range": "± 8303332.038085492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5680828.955078125,
            "unit": "ns",
            "range": "± 110653.02427611685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1744179.1796875,
            "unit": "ns",
            "range": "± 27434.112648860308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299251.5364583333,
            "unit": "ns",
            "range": "± 17799.075667943922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3250443.798828125,
            "unit": "ns",
            "range": "± 58915.217640490504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034690.2193509615,
            "unit": "ns",
            "range": "± 16636.533164917826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934855.8203125,
            "unit": "ns",
            "range": "± 14838.963763529198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4046756.0606060605,
            "unit": "ns",
            "range": "± 126585.30952334561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4264700,
            "unit": "ns",
            "range": "± 93797.69009238269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5328150,
            "unit": "ns",
            "range": "± 167391.57368097696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680577.777777778,
            "unit": "ns",
            "range": "± 95893.66840947134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7335461.904761905,
            "unit": "ns",
            "range": "± 165208.89345368327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319585.48387096776,
            "unit": "ns",
            "range": "± 13499.178442204908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302435.29411764705,
            "unit": "ns",
            "range": "± 9495.034822185215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271803.0303030303,
            "unit": "ns",
            "range": "± 12684.162986811178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4845600,
            "unit": "ns",
            "range": "± 112388.4380174402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4550327.777777778,
            "unit": "ns",
            "range": "± 91179.07916361178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30108.88888888889,
            "unit": "ns",
            "range": "± 2638.336403167657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113429.67032967033,
            "unit": "ns",
            "range": "± 10148.240071893086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102548.93617021276,
            "unit": "ns",
            "range": "± 12741.412834008423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119744.73684210527,
            "unit": "ns",
            "range": "± 17988.603770762773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8859.183673469388,
            "unit": "ns",
            "range": "± 1330.4589344378662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28018.08510638298,
            "unit": "ns",
            "range": "± 3656.5146683092557"
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
          "id": "33817b862113768956f32f8aeca3b90515632000",
          "message": "Clarification",
          "timestamp": "2023-09-05T02:03:56+09:00",
          "tree_id": "48082e1a88dfdacb4f998a4a576928ae1b6e028b",
          "url": "https://github.com/greymistcube/libplanet/commit/33817b862113768956f32f8aeca3b90515632000"
        },
        "date": 1693848309809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618068.3673469387,
            "unit": "ns",
            "range": "± 166753.38887230976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023592,
            "unit": "ns",
            "range": "± 271792.5122834206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033771.7171717172,
            "unit": "ns",
            "range": "± 158238.9352229426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5681976.041666667,
            "unit": "ns",
            "range": "± 382177.44604052894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59357.77777777778,
            "unit": "ns",
            "range": "± 5246.1216874040565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8688157.142857144,
            "unit": "ns",
            "range": "± 153717.22647213523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26279380.769230768,
            "unit": "ns",
            "range": "± 714088.0713297098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68000041.66666667,
            "unit": "ns",
            "range": "± 1765850.806617559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135361600,
            "unit": "ns",
            "range": "± 3218745.5521623977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270459572.72727275,
            "unit": "ns",
            "range": "± 6498391.1154759675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5616089.955357143,
            "unit": "ns",
            "range": "± 60042.45983347524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1760547.3828125,
            "unit": "ns",
            "range": "± 25220.347585053656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292051.7578125,
            "unit": "ns",
            "range": "± 19028.656759095305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3244696.7354910714,
            "unit": "ns",
            "range": "± 23616.21560641734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019017.9947916666,
            "unit": "ns",
            "range": "± 16757.226955490987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923430.0651041666,
            "unit": "ns",
            "range": "± 11373.12896957885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4023619.35483871,
            "unit": "ns",
            "range": "± 226956.64940308512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4396725,
            "unit": "ns",
            "range": "± 156095.15794326656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5216432.876712329,
            "unit": "ns",
            "range": "± 258116.2023277686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4773121.428571428,
            "unit": "ns",
            "range": "± 253364.0357184203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7487527.2727272725,
            "unit": "ns",
            "range": "± 234948.88177102382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334068.75,
            "unit": "ns",
            "range": "± 10391.511346503747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316772.0588235294,
            "unit": "ns",
            "range": "± 15082.210986300852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277076.2886597938,
            "unit": "ns",
            "range": "± 30741.227655205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4956143.478260869,
            "unit": "ns",
            "range": "± 124746.9905852604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4716046.428571428,
            "unit": "ns",
            "range": "± 134258.89992471525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27020.212765957447,
            "unit": "ns",
            "range": "± 2237.5860546788685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107273.91304347826,
            "unit": "ns",
            "range": "± 8548.348205782244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86943.82022471911,
            "unit": "ns",
            "range": "± 8477.670604382109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104384.94623655915,
            "unit": "ns",
            "range": "± 20235.773028264226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6460.416666666667,
            "unit": "ns",
            "range": "± 1104.772342984998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24153.191489361703,
            "unit": "ns",
            "range": "± 2700.5655372536435"
          }
        ]
      }
    ]
  }
}