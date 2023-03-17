window.BENCHMARK_DATA = {
  "lastUpdate": 1679048215040,
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
      }
    ]
  }
}