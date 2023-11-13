window.BENCHMARK_DATA = {
  "lastUpdate": 1699884373584,
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
          "id": "d7dd743710bea5b0cd847bab5775c61b6c9911f1",
          "message": "Refactor PrivateKey, PublicKey, and Address API",
          "timestamp": "2023-11-09T11:17:10+09:00",
          "tree_id": "bda7fd877681a41b13a83512f04fc7a10aab41ad",
          "url": "https://github.com/greymistcube/libplanet/commit/d7dd743710bea5b0cd847bab5775c61b6c9911f1"
        },
        "date": 1699884349103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11267504.449494949,
            "unit": "ns",
            "range": "± 1889202.117602066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31356188.10989011,
            "unit": "ns",
            "range": "± 6498159.205540183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56576976.333333336,
            "unit": "ns",
            "range": "± 756435.9896773497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 157522392.10869566,
            "unit": "ns",
            "range": "± 41695637.26213011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 323577616.8556701,
            "unit": "ns",
            "range": "± 82811008.47964916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79517.95833333333,
            "unit": "ns",
            "range": "± 21701.758831906816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332580.3387096774,
            "unit": "ns",
            "range": "± 84732.26203668906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312318.24736842106,
            "unit": "ns",
            "range": "± 70064.068762321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337954.93684210523,
            "unit": "ns",
            "range": "± 94788.15882897745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5999443.675824176,
            "unit": "ns",
            "range": "± 1538020.124111996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4813781.457446809,
            "unit": "ns",
            "range": "± 924170.6658331846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28359.852631578946,
            "unit": "ns",
            "range": "± 6898.502914938372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118275.21276595745,
            "unit": "ns",
            "range": "± 28934.23495753603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115506.44791666667,
            "unit": "ns",
            "range": "± 21635.844892151978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115918.84020618557,
            "unit": "ns",
            "range": "± 26967.12826714784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9556.836842105264,
            "unit": "ns",
            "range": "± 1951.893786407307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28061.63829787234,
            "unit": "ns",
            "range": "± 5326.109669529049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1883907.4894736842,
            "unit": "ns",
            "range": "± 442952.37652535207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3887585.663043478,
            "unit": "ns",
            "range": "± 1007851.0513715683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586501,
            "unit": "ns",
            "range": "± 754016.9356693669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13289427.42631579,
            "unit": "ns",
            "range": "± 3337562.766998727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4307039.715789474,
            "unit": "ns",
            "range": "± 1030210.3043575325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4853769.460674157,
            "unit": "ns",
            "range": "± 1545599.4992555552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4833407.693548387,
            "unit": "ns",
            "range": "± 1175859.9624171392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4391123.295454546,
            "unit": "ns",
            "range": "± 597341.9217919847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14858530.673913043,
            "unit": "ns",
            "range": "± 2458769.6591139217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6328004.944116709,
            "unit": "ns",
            "range": "± 1074714.6370287144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492427.3671459442,
            "unit": "ns",
            "range": "± 99381.6323170513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 890476.4254557291,
            "unit": "ns",
            "range": "± 3361.6479887444902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2025629.3079427083,
            "unit": "ns",
            "range": "± 21125.995510283006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642269.5860648777,
            "unit": "ns",
            "range": "± 13761.386105680498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573582.7180786133,
            "unit": "ns",
            "range": "± 4548.416066270785"
          }
        ]
      }
    ]
  }
}