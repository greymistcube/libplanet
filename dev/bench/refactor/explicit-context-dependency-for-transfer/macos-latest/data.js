window.BENCHMARK_DATA = {
  "lastUpdate": 1687351828496,
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
          "id": "8ef6b82ee106eabe33f4e852e2475ead39de2a92",
          "message": "Deleted implV0",
          "timestamp": "2023-06-21T20:58:34+09:00",
          "tree_id": "cc57646a2cb706c68e67f137d2688c8b7073abdd",
          "url": "https://github.com/greymistcube/libplanet/commit/8ef6b82ee106eabe33f4e852e2475ead39de2a92"
        },
        "date": 1687351803079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9047915.95,
            "unit": "ns",
            "range": "± 142994.15638795396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25251375.30927835,
            "unit": "ns",
            "range": "± 2826656.1401804686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67337905.0909091,
            "unit": "ns",
            "range": "± 940068.9388071449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119574504.1875,
            "unit": "ns",
            "range": "± 1249114.726189564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229157422.16666666,
            "unit": "ns",
            "range": "± 2714255.3348289514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76495.02173913043,
            "unit": "ns",
            "range": "± 7205.375647341533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378172.15873015876,
            "unit": "ns",
            "range": "± 17396.47700820425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356744.0737704918,
            "unit": "ns",
            "range": "± 14867.121452452293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333476.2543859649,
            "unit": "ns",
            "range": "± 14082.588971949803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4961183.666666667,
            "unit": "ns",
            "range": "± 154838.291699491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4526531.333333333,
            "unit": "ns",
            "range": "± 148647.25979310885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19952.752747252747,
            "unit": "ns",
            "range": "± 1510.6740628930927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100319.64210526316,
            "unit": "ns",
            "range": "± 7631.280711393116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106758.48958333333,
            "unit": "ns",
            "range": "± 14615.520573039574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130621.84210526316,
            "unit": "ns",
            "range": "± 18344.709832442328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6445.115789473684,
            "unit": "ns",
            "range": "± 1225.0306367263854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18824.951612903227,
            "unit": "ns",
            "range": "± 1692.4414993173325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2079320.3255813953,
            "unit": "ns",
            "range": "± 290447.3236810235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4017525.8181818184,
            "unit": "ns",
            "range": "± 418208.7365823503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3290754.804347826,
            "unit": "ns",
            "range": "± 492401.879806609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9087059.678160919,
            "unit": "ns",
            "range": "± 1479362.5005775408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3944799.5833333335,
            "unit": "ns",
            "range": "± 131152.50483406713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4070744.7333333334,
            "unit": "ns",
            "range": "± 56785.52969031393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5258550.882352941,
            "unit": "ns",
            "range": "± 167591.29615639255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5224438.36,
            "unit": "ns",
            "range": "± 208666.57954764258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9453432.648936171,
            "unit": "ns",
            "range": "± 739837.8406482816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7406753.743389423,
            "unit": "ns",
            "range": "± 101137.38132611918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2251395.3797743055,
            "unit": "ns",
            "range": "± 43122.40554406878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472558.544921875,
            "unit": "ns",
            "range": "± 22460.215399405683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2829924.884014423,
            "unit": "ns",
            "range": "± 19711.7234991067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1074513.4107142857,
            "unit": "ns",
            "range": "± 7425.700926594527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925792.7081473215,
            "unit": "ns",
            "range": "± 4450.052502707166"
          }
        ]
      }
    ]
  }
}