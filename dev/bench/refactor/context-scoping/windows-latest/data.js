window.BENCHMARK_DATA = {
  "lastUpdate": 1701236115485,
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
          "id": "9193e1dab4f058ea576f2fd5b09de97760f14914",
          "message": "Update docs",
          "timestamp": "2023-11-29T14:23:45+09:00",
          "tree_id": "8f30fcc334c316b7e5dd723ecf383ac89fbf6790",
          "url": "https://github.com/greymistcube/libplanet/commit/9193e1dab4f058ea576f2fd5b09de97760f14914"
        },
        "date": 1701236097834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 918911.1111111111,
            "unit": "ns",
            "range": "± 98385.02653713123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1638192.9824561405,
            "unit": "ns",
            "range": "± 70717.41263560684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1281643.75,
            "unit": "ns",
            "range": "± 114644.80965826123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5096720.202020202,
            "unit": "ns",
            "range": "± 335397.5530132945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33904.34782608696,
            "unit": "ns",
            "range": "± 1609.6615265884404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4957873.333333333,
            "unit": "ns",
            "range": "± 27738.92228482948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12766169.23076923,
            "unit": "ns",
            "range": "± 98036.35707069245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32335483.333333332,
            "unit": "ns",
            "range": "± 287774.03330117237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68401403.33333333,
            "unit": "ns",
            "range": "± 860836.9896017868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130094250,
            "unit": "ns",
            "range": "± 1145600.1081059251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303505.9709821427,
            "unit": "ns",
            "range": "± 10834.83842683405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035707.6032366072,
            "unit": "ns",
            "range": "± 8299.551671327908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728649.1629464285,
            "unit": "ns",
            "range": "± 1687.5870031612535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1885590.122767857,
            "unit": "ns",
            "range": "± 1722.8857051267084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602464.08203125,
            "unit": "ns",
            "range": "± 669.0743429635394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566266.4583333334,
            "unit": "ns",
            "range": "± 989.4075025641633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2062468.085106383,
            "unit": "ns",
            "range": "± 65381.86860212579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2231955.5555555555,
            "unit": "ns",
            "range": "± 73924.64288312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2750914.285714286,
            "unit": "ns",
            "range": "± 76300.89419545788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2577543.4210526315,
            "unit": "ns",
            "range": "± 130719.64028461961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5913506.25,
            "unit": "ns",
            "range": "± 308487.74398392416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172051.64835164836,
            "unit": "ns",
            "range": "± 9592.443352711001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161278.57142857142,
            "unit": "ns",
            "range": "± 5473.418502593202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141648,
            "unit": "ns",
            "range": "± 3631.9324516479287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2745393.3333333335,
            "unit": "ns",
            "range": "± 46801.44177673325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2496140,
            "unit": "ns",
            "range": "± 34841.391640239795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10542.528735632184,
            "unit": "ns",
            "range": "± 968.5318767380271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51172.72727272727,
            "unit": "ns",
            "range": "± 3702.770856631411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43637.096774193546,
            "unit": "ns",
            "range": "± 1994.0266429454518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53817.52577319588,
            "unit": "ns",
            "range": "± 11538.36905637446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2520.8333333333335,
            "unit": "ns",
            "range": "± 402.86256417547037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9626.373626373626,
            "unit": "ns",
            "range": "± 1151.0222668794288"
          }
        ]
      }
    ]
  }
}