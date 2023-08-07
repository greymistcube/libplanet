window.BENCHMARK_DATA = {
  "lastUpdate": 1691378543281,
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
          "id": "8baa1b4083c0287391fb9c277de7b85761d2f44a",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-08-07T12:06:49+09:00",
          "tree_id": "89104245f00df6627deea8fceab4446cec039eb5",
          "url": "https://github.com/greymistcube/libplanet/commit/8baa1b4083c0287391fb9c277de7b85761d2f44a"
        },
        "date": 1691378519246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414658.5858585858,
            "unit": "ns",
            "range": "± 125180.39066140937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2609345.7627118644,
            "unit": "ns",
            "range": "± 113953.33031709304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1790085,
            "unit": "ns",
            "range": "± 111402.78579020446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4913697.46835443,
            "unit": "ns",
            "range": "± 254562.92606513214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49208.9552238806,
            "unit": "ns",
            "range": "± 2345.3197328892866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7654201.785714285,
            "unit": "ns",
            "range": "± 328504.62484142865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20578000,
            "unit": "ns",
            "range": "± 342659.28899321164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52814835.71428572,
            "unit": "ns",
            "range": "± 713525.1217690968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105894420,
            "unit": "ns",
            "range": "± 1238388.38541988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207592384.6153846,
            "unit": "ns",
            "range": "± 1620263.4023753433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908706.138392857,
            "unit": "ns",
            "range": "± 20687.128157623174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562968.8551682692,
            "unit": "ns",
            "range": "± 5319.194216388409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1204260.5078125,
            "unit": "ns",
            "range": "± 4559.050272321019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699666.2239583335,
            "unit": "ns",
            "range": "± 14881.25582986273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857308.4830729166,
            "unit": "ns",
            "range": "± 3523.177261165364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783116.69921875,
            "unit": "ns",
            "range": "± 1948.5176960825702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3292490.476190476,
            "unit": "ns",
            "range": "± 120154.59109307193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3433529.2682926827,
            "unit": "ns",
            "range": "± 121993.14374976659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4230577.2727272725,
            "unit": "ns",
            "range": "± 102546.77414451362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3844809.433962264,
            "unit": "ns",
            "range": "± 160210.35002596639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6252235.416666667,
            "unit": "ns",
            "range": "± 231328.20056911805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275128.7878787879,
            "unit": "ns",
            "range": "± 12860.21611436443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263103.4482758621,
            "unit": "ns",
            "range": "± 11388.436202080453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253619.19191919192,
            "unit": "ns",
            "range": "± 15907.062202423513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4289960,
            "unit": "ns",
            "range": "± 73974.25034622327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3935953.3333333335,
            "unit": "ns",
            "range": "± 69730.3568517089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23965.9793814433,
            "unit": "ns",
            "range": "± 3371.7541984211193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95309.09090909091,
            "unit": "ns",
            "range": "± 7610.90907318059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82859.375,
            "unit": "ns",
            "range": "± 6571.142304364632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104209.78260869565,
            "unit": "ns",
            "range": "± 12764.813069507694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5657.291666666667,
            "unit": "ns",
            "range": "± 1037.2783001344549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22067.391304347828,
            "unit": "ns",
            "range": "± 1935.7316074774649"
          }
        ]
      }
    ]
  }
}