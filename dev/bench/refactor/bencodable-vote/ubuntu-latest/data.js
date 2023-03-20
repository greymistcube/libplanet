window.BENCHMARK_DATA = {
  "lastUpdate": 1679273604758,
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
          "id": "0670779e98f7d1b06df233959660523b5eb1ee95",
          "message": "Fix improper bencoding",
          "timestamp": "2023-03-17T18:49:27+09:00",
          "tree_id": "457dec915722a9cf2f041ce045d21405df284e85",
          "url": "https://github.com/greymistcube/libplanet/commit/0670779e98f7d1b06df233959660523b5eb1ee95"
        },
        "date": 1679048206646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4212920.2,
            "unit": "ns",
            "range": "± 70595.32436682434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6728954.857142857,
            "unit": "ns",
            "range": "± 46251.943406748855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30435997.966666665,
            "unit": "ns",
            "range": "± 537989.9236055671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8099380.466666667,
            "unit": "ns",
            "range": "± 138967.28158910884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34213424.4,
            "unit": "ns",
            "range": "± 439497.2781735644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10479147.181818182,
            "unit": "ns",
            "range": "± 251364.03700242375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26184671.846153848,
            "unit": "ns",
            "range": "± 286794.75742007734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 65932404.86666667,
            "unit": "ns",
            "range": "± 419017.3208661405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 142765037,
            "unit": "ns",
            "range": "± 708507.9518315736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 313818639.53333336,
            "unit": "ns",
            "range": "± 932327.3030545556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1690601.9879518072,
            "unit": "ns",
            "range": "± 87843.20514548385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3113985,
            "unit": "ns",
            "range": "± 50645.0897767987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2693998.3098591547,
            "unit": "ns",
            "range": "± 130981.2726238364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6290306.685714286,
            "unit": "ns",
            "range": "± 202717.90273312313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60713.244680851065,
            "unit": "ns",
            "range": "± 3670.8469319153105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7076918.184895833,
            "unit": "ns",
            "range": "± 47944.269758900424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203325.369140625,
            "unit": "ns",
            "range": "± 1263.9262831491078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1625696.0395132212,
            "unit": "ns",
            "range": "± 3473.974133738107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3136059.7791466345,
            "unit": "ns",
            "range": "± 4787.154531072251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001318.2962239584,
            "unit": "ns",
            "range": "± 1065.792770553422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919333.6088541667,
            "unit": "ns",
            "range": "± 404.8404208802782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242306.76923076922,
            "unit": "ns",
            "range": "± 3951.9375660099977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240077.52173913043,
            "unit": "ns",
            "range": "± 9232.063478838016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214702.96666666667,
            "unit": "ns",
            "range": "± 11904.805562073934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14582450.266666668,
            "unit": "ns",
            "range": "± 158450.36712461038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12104600.533333333,
            "unit": "ns",
            "range": "± 126015.22167005215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24949,
            "unit": "ns",
            "range": "± 2372.977138532944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69057.91397849462,
            "unit": "ns",
            "range": "± 5664.996735591205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56032.92857142857,
            "unit": "ns",
            "range": "± 4143.354202381417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133386.17708333334,
            "unit": "ns",
            "range": "± 15821.97185927468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8161.958333333333,
            "unit": "ns",
            "range": "± 976.8969122650473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24673.447916666668,
            "unit": "ns",
            "range": "± 2451.5461925284785"
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
          "id": "693f729f93a8c6d9e75c202e766b95c51c52a4c1",
          "message": "Added compatibility warning",
          "timestamp": "2023-03-20T09:40:21+09:00",
          "tree_id": "f7642fcab75e8e532157a3af5e43029aaa1883b3",
          "url": "https://github.com/greymistcube/libplanet/commit/693f729f93a8c6d9e75c202e766b95c51c52a4c1"
        },
        "date": 1679273597614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3270724.1578947366,
            "unit": "ns",
            "range": "± 63510.34341416204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5258042.071428572,
            "unit": "ns",
            "range": "± 52210.80126308125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24084847.333333332,
            "unit": "ns",
            "range": "± 229926.63055656527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6347093.6875,
            "unit": "ns",
            "range": "± 196327.47993848432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27432781.2,
            "unit": "ns",
            "range": "± 376596.7822801237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7859112.666666667,
            "unit": "ns",
            "range": "± 57430.26936165615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20004339.133333333,
            "unit": "ns",
            "range": "± 64326.042103453234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50996111.86666667,
            "unit": "ns",
            "range": "± 196322.88275217384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101557117.66666667,
            "unit": "ns",
            "range": "± 657892.4196834558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203513589.8,
            "unit": "ns",
            "range": "± 671060.0714701011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375464.663265306,
            "unit": "ns",
            "range": "± 110295.15995679842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2486989.1923076925,
            "unit": "ns",
            "range": "± 66512.03973418301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2135145.986842105,
            "unit": "ns",
            "range": "± 104601.66347415237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5144117.96875,
            "unit": "ns",
            "range": "± 158030.71266493134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45690.282051282054,
            "unit": "ns",
            "range": "± 2352.7775566555865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6017073.633370535,
            "unit": "ns",
            "range": "± 19042.03815357517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928998.69375,
            "unit": "ns",
            "range": "± 12862.835929958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360466.9886997768,
            "unit": "ns",
            "range": "± 627.2871841168298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543329.1653645835,
            "unit": "ns",
            "range": "± 2108.9746729612443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803493.4012369792,
            "unit": "ns",
            "range": "± 377.7684317016989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743762.4660993303,
            "unit": "ns",
            "range": "± 461.55053846181227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204293.32432432432,
            "unit": "ns",
            "range": "± 6871.428644329658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199083.96078431373,
            "unit": "ns",
            "range": "± 7619.7209186709315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173212.1914893617,
            "unit": "ns",
            "range": "± 6708.573630674919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11586031.642857144,
            "unit": "ns",
            "range": "± 54973.48411539616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9435182.6,
            "unit": "ns",
            "range": "± 64553.52668223701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19578.36170212766,
            "unit": "ns",
            "range": "± 1683.3728996801974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55438.489583333336,
            "unit": "ns",
            "range": "± 4841.564031754054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41212.22580645161,
            "unit": "ns",
            "range": "± 1235.0679794968755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90889.10416666667,
            "unit": "ns",
            "range": "± 11048.369657750334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4920.494845360825,
            "unit": "ns",
            "range": "± 493.75124733410723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19367.333333333332,
            "unit": "ns",
            "range": "± 1422.92875633815"
          }
        ]
      }
    ]
  }
}