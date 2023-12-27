window.BENCHMARK_DATA = {
  "lastUpdate": 1703662109676,
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
          "id": "d3e0e0ca525f99765ad66eb996b51eb9e722f852",
          "message": "Changed FullNode to no longer inherit BaseNode; removed BaseNode",
          "timestamp": "2023-12-27T16:15:54+09:00",
          "tree_id": "fae6f4b6e37b09d5113d55d10f8cc6582dd51f3d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3e0e0ca525f99765ad66eb996b51eb9e722f852"
        },
        "date": 1703662094124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7624055.230769231,
            "unit": "ns",
            "range": "± 73782.29247720829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19404153.51851852,
            "unit": "ns",
            "range": "± 542051.1309141042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46649205.76923077,
            "unit": "ns",
            "range": "± 387827.01309951616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97085801.25,
            "unit": "ns",
            "range": "± 597015.7775650985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196576511.25,
            "unit": "ns",
            "range": "± 2030098.9052839105"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37187.868131868134,
            "unit": "ns",
            "range": "± 4511.887277474893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217281.55,
            "unit": "ns",
            "range": "± 11095.697877550263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214276.13636363635,
            "unit": "ns",
            "range": "± 10928.104346265678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208495.6530612245,
            "unit": "ns",
            "range": "± 17323.244414912726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3765315.3076923075,
            "unit": "ns",
            "range": "± 58488.826722694954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3456620.5833333335,
            "unit": "ns",
            "range": "± 31431.450750246186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12979.76404494382,
            "unit": "ns",
            "range": "± 986.3808275074905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62539.45360824742,
            "unit": "ns",
            "range": "± 6363.3373565236625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62752.45789473684,
            "unit": "ns",
            "range": "± 8579.627696028749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63207.5625,
            "unit": "ns",
            "range": "± 13094.829723627165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3487.3548387096776,
            "unit": "ns",
            "range": "± 444.0147041523584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13098.431578947368,
            "unit": "ns",
            "range": "± 1809.407000853275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1077627.494949495,
            "unit": "ns",
            "range": "± 99404.03557080934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2200088.447368421,
            "unit": "ns",
            "range": "± 95069.7650238687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1546454.3402061856,
            "unit": "ns",
            "range": "± 107756.51766114183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6816288.96491228,
            "unit": "ns",
            "range": "± 275663.36025453254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2972283.654761905,
            "unit": "ns",
            "range": "± 146452.53334277944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2962711.84,
            "unit": "ns",
            "range": "± 48564.70152511322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3623003.6428571427,
            "unit": "ns",
            "range": "± 105941.52939382421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3465352.84375,
            "unit": "ns",
            "range": "± 158699.4761719302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12735651,
            "unit": "ns",
            "range": "± 1792307.13938093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4363586.69140625,
            "unit": "ns",
            "range": "± 49342.27318829515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1393957.8734654018,
            "unit": "ns",
            "range": "± 19599.126951781018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 889788.9668666294,
            "unit": "ns",
            "range": "± 5115.260635530799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1978745.001953125,
            "unit": "ns",
            "range": "± 31377.64720452945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 655429.5908854167,
            "unit": "ns",
            "range": "± 4690.368477610239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570677.296875,
            "unit": "ns",
            "range": "± 4369.0932944790375"
          }
        ]
      }
    ]
  }
}