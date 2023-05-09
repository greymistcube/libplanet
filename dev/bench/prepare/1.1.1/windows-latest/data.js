window.BENCHMARK_DATA = {
  "lastUpdate": 1683611967313,
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
          "id": "91d33f81554ca3f163862959b90c19fa88462e24",
          "message": "Prepare 1.1.1",
          "timestamp": "2023-05-09T14:44:50+09:00",
          "tree_id": "9ff5ffbfabad77d319356ce49de1521fd6203f2d",
          "url": "https://github.com/greymistcube/libplanet/commit/91d33f81554ca3f163862959b90c19fa88462e24"
        },
        "date": 1683611944610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367853.0612244897,
            "unit": "ns",
            "range": "± 114073.31197960467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2457790.909090909,
            "unit": "ns",
            "range": "± 60097.055700725505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2332775,
            "unit": "ns",
            "range": "± 44155.747077815366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5053412.765957447,
            "unit": "ns",
            "range": "± 195597.93901401674"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42290.10989010989,
            "unit": "ns",
            "range": "± 2241.777813604142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6953266.666666667,
            "unit": "ns",
            "range": "± 50777.71821051697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17942230,
            "unit": "ns",
            "range": "± 98371.60014092337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45350192.85714286,
            "unit": "ns",
            "range": "± 256386.59650639282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90647006.66666667,
            "unit": "ns",
            "range": "± 554521.3592004584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182107023.33333334,
            "unit": "ns",
            "range": "± 735146.883735942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4769616.917067308,
            "unit": "ns",
            "range": "± 8351.335191684122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1495864.271763393,
            "unit": "ns",
            "range": "± 1927.5638540809452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1132376.11328125,
            "unit": "ns",
            "range": "± 1190.3379289756308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588675.1822916665,
            "unit": "ns",
            "range": "± 28285.61886671228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813976.6462053572,
            "unit": "ns",
            "range": "± 1374.7806645469045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722116.7759486607,
            "unit": "ns",
            "range": "± 1070.922393475528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2993752.9411764704,
            "unit": "ns",
            "range": "± 58393.943582008775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3249954.5454545454,
            "unit": "ns",
            "range": "± 97157.29543795557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3868976.923076923,
            "unit": "ns",
            "range": "± 43067.66292409642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4029387.878787879,
            "unit": "ns",
            "range": "± 127828.24110299276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6389870.37037037,
            "unit": "ns",
            "range": "± 174600.5987627737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255323.2558139535,
            "unit": "ns",
            "range": "± 8843.98739013182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239170.9090909091,
            "unit": "ns",
            "range": "± 9669.648442942536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217869.01408450704,
            "unit": "ns",
            "range": "± 10636.495012782247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3806207.1428571427,
            "unit": "ns",
            "range": "± 36946.41575799522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3453926.6666666665,
            "unit": "ns",
            "range": "± 42667.97840245517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17621.134020618556,
            "unit": "ns",
            "range": "± 1933.7980096866481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81121.97802197802,
            "unit": "ns",
            "range": "± 5001.350977437156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75132.32323232324,
            "unit": "ns",
            "range": "± 7423.03128964898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83690.4255319149,
            "unit": "ns",
            "range": "± 12050.691044736197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4481.632653061224,
            "unit": "ns",
            "range": "± 916.4416774684225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16363.440860215054,
            "unit": "ns",
            "range": "± 1668.4270740298405"
          }
        ]
      }
    ]
  }
}