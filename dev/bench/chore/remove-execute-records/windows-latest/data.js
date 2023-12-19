window.BENCHMARK_DATA = {
  "lastUpdate": 1702977788373,
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
          "id": "bcbaa618ef1e369234e7393f00ac95fb7f8fd794",
          "message": "Remove ExecuteRecord",
          "timestamp": "2023-12-19T18:09:45+09:00",
          "tree_id": "aef18ca1a5f3a2a0a1e649adcc6097661f51a3c9",
          "url": "https://github.com/greymistcube/libplanet/commit/bcbaa618ef1e369234e7393f00ac95fb7f8fd794"
        },
        "date": 1702977760468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960597.9591836735,
            "unit": "ns",
            "range": "± 103659.93368443873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1745955.5555555555,
            "unit": "ns",
            "range": "± 94058.92978425707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1337893.8775510204,
            "unit": "ns",
            "range": "± 128467.1828738034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5345420,
            "unit": "ns",
            "range": "± 246261.21687651103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34813.92405063291,
            "unit": "ns",
            "range": "± 1741.3326886667232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4930630.769230769,
            "unit": "ns",
            "range": "± 42437.70698752436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13317413.333333334,
            "unit": "ns",
            "range": "± 92938.38870584156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32201503.846153848,
            "unit": "ns",
            "range": "± 312196.9240062662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65487338.23529412,
            "unit": "ns",
            "range": "± 1319216.7467300212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132901393.33333333,
            "unit": "ns",
            "range": "± 2028840.3504981669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3346948.018973214,
            "unit": "ns",
            "range": "± 10572.960662483185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075848.8151041667,
            "unit": "ns",
            "range": "± 2485.056279893719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739566.3151041666,
            "unit": "ns",
            "range": "± 2849.8955027385673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933108.75,
            "unit": "ns",
            "range": "± 5136.171975435902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606882.1568080357,
            "unit": "ns",
            "range": "± 1547.0413488134488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566886.8098958334,
            "unit": "ns",
            "range": "± 1266.8274900572997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160511,
            "unit": "ns",
            "range": "± 134566.80357819505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2271737.5,
            "unit": "ns",
            "range": "± 80125.19590759682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2768126.6666666665,
            "unit": "ns",
            "range": "± 48357.45572101083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2636344.1558441557,
            "unit": "ns",
            "range": "± 134638.86833567874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6363314.084507043,
            "unit": "ns",
            "range": "± 310852.9042561884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175429.6875,
            "unit": "ns",
            "range": "± 8016.227186993397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166878,
            "unit": "ns",
            "range": "± 6648.286260690166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144484.84848484848,
            "unit": "ns",
            "range": "± 4526.734557887811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2793314.285714286,
            "unit": "ns",
            "range": "± 31504.79468131935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2539106.6666666665,
            "unit": "ns",
            "range": "± 36823.894933795884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11107.865168539325,
            "unit": "ns",
            "range": "± 1260.9722727018952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55101.07526881721,
            "unit": "ns",
            "range": "± 5906.766470377626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45130,
            "unit": "ns",
            "range": "± 1820.8822710153338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63748.48484848485,
            "unit": "ns",
            "range": "± 17313.792800835938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2870.7070707070707,
            "unit": "ns",
            "range": "± 706.710188739247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10352.68817204301,
            "unit": "ns",
            "range": "± 1282.3713934881891"
          }
        ]
      }
    ]
  }
}