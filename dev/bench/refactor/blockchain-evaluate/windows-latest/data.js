window.BENCHMARK_DATA = {
  "lastUpdate": 1693798438032,
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
      }
    ]
  }
}