window.BENCHMARK_DATA = {
  "lastUpdate": 1678939144119,
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
          "id": "3dcb8d4f426e4e1694e4a244ac74875949ca478f",
          "message": "Fix tests",
          "timestamp": "2023-03-16T12:46:07+09:00",
          "tree_id": "14a568e4e31adb1cce02e61d8bc8545abb0bdf9a",
          "url": "https://github.com/greymistcube/libplanet/commit/3dcb8d4f426e4e1694e4a244ac74875949ca478f"
        },
        "date": 1678939137333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3288190.2,
            "unit": "ns",
            "range": "± 50673.498426128586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5074936.466666667,
            "unit": "ns",
            "range": "± 87967.39836509779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23311638.933333334,
            "unit": "ns",
            "range": "± 302309.5509963886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6137098.722222222,
            "unit": "ns",
            "range": "± 203258.92686769343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26806187.2,
            "unit": "ns",
            "range": "± 435718.01136370626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7716062.428571428,
            "unit": "ns",
            "range": "± 12947.701998152685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20253193.333333332,
            "unit": "ns",
            "range": "± 232433.70067418198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50191752.875,
            "unit": "ns",
            "range": "± 980223.9320720461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99420888.33333333,
            "unit": "ns",
            "range": "± 1137513.7713161772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199750627.6,
            "unit": "ns",
            "range": "± 2351741.0041013933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1323507.469387755,
            "unit": "ns",
            "range": "± 77873.21570469384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2695039.13,
            "unit": "ns",
            "range": "± 164924.296088588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2158921.013157895,
            "unit": "ns",
            "range": "± 107275.9813713512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5621686.02,
            "unit": "ns",
            "range": "± 361202.5537337428"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49862.59154929577,
            "unit": "ns",
            "range": "± 2274.19526475043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5727511.134014423,
            "unit": "ns",
            "range": "± 22792.71014622244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820766.3500279018,
            "unit": "ns",
            "range": "± 2426.554885265198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1324597.3755208333,
            "unit": "ns",
            "range": "± 7429.594202659451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590345.612980769,
            "unit": "ns",
            "range": "± 3365.586269114755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811237.4826171875,
            "unit": "ns",
            "range": "± 1727.4625419401539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749536.1490234375,
            "unit": "ns",
            "range": "± 1754.5794718114155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185755,
            "unit": "ns",
            "range": "± 6011.151270763364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187236.02564102566,
            "unit": "ns",
            "range": "± 6097.316223626931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159717.61538461538,
            "unit": "ns",
            "range": "± 1879.8278528658566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11238908.857142856,
            "unit": "ns",
            "range": "± 57349.32200773827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9060473.866666667,
            "unit": "ns",
            "range": "± 88547.59628250517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16816.18085106383,
            "unit": "ns",
            "range": "± 1146.857370014361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49036.3,
            "unit": "ns",
            "range": "± 3862.263228479827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40450.28571428572,
            "unit": "ns",
            "range": "± 573.3037090906903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86840.39175257731,
            "unit": "ns",
            "range": "± 12205.527737256236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4851.104166666667,
            "unit": "ns",
            "range": "± 379.1804036455101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17790.489130434784,
            "unit": "ns",
            "range": "± 1040.3660756239244"
          }
        ]
      }
    ]
  }
}