window.BENCHMARK_DATA = {
  "lastUpdate": 1701238233527,
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
          "id": "945df40952c9f9c6e38cf5e702e98c4ac1b473a5",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:58:08+09:00",
          "tree_id": "2e82a3a795c60b593810ee928c8bdf58fe3b3ca0",
          "url": "https://github.com/greymistcube/libplanet/commit/945df40952c9f9c6e38cf5e702e98c4ac1b473a5"
        },
        "date": 1701238214230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989094.8453608247,
            "unit": "ns",
            "range": "± 107960.43678428188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1757942.5925925926,
            "unit": "ns",
            "range": "± 63265.46228140551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1391381.4432989692,
            "unit": "ns",
            "range": "± 142967.04043961273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4820646.875,
            "unit": "ns",
            "range": "± 146751.17405558823"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35792.13483146067,
            "unit": "ns",
            "range": "± 3026.482533745807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5192183.333333333,
            "unit": "ns",
            "range": "± 96421.35704934927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13706980,
            "unit": "ns",
            "range": "± 164031.2348304432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33075206.666666668,
            "unit": "ns",
            "range": "± 618454.3134375601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66263377.777777776,
            "unit": "ns",
            "range": "± 1281126.8801358186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137360533.33333334,
            "unit": "ns",
            "range": "± 3646721.5963846846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3320665.9040178573,
            "unit": "ns",
            "range": "± 13785.665294045615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056351.6880580357,
            "unit": "ns",
            "range": "± 1838.496799443054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733361.5792410715,
            "unit": "ns",
            "range": "± 1059.3615933113142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1902239.7739955357,
            "unit": "ns",
            "range": "± 3520.2758271239813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634253.7334735577,
            "unit": "ns",
            "range": "± 1069.8472658178941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570763.2136418269,
            "unit": "ns",
            "range": "± 894.5102156204629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179889.552238806,
            "unit": "ns",
            "range": "± 103367.4002509735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316206.1224489794,
            "unit": "ns",
            "range": "± 92057.12992521562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2894506.25,
            "unit": "ns",
            "range": "± 53339.56591186946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2713727.192982456,
            "unit": "ns",
            "range": "± 117050.41193792141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5804937.5,
            "unit": "ns",
            "range": "± 111907.9256948914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183602,
            "unit": "ns",
            "range": "± 7240.715096041331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173851.85185185185,
            "unit": "ns",
            "range": "± 7265.1595767575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143468.88888888888,
            "unit": "ns",
            "range": "± 5439.285640856553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2833593.3333333335,
            "unit": "ns",
            "range": "± 51437.74971009225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520014.285714286,
            "unit": "ns",
            "range": "± 38589.17459086674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13026.315789473685,
            "unit": "ns",
            "range": "± 1998.7874263692652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59072.47191011236,
            "unit": "ns",
            "range": "± 4878.145903577337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49991.48936170213,
            "unit": "ns",
            "range": "± 4945.915216402582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69724.24242424243,
            "unit": "ns",
            "range": "± 17358.38379402388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3150,
            "unit": "ns",
            "range": "± 684.7755294789642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12026.08695652174,
            "unit": "ns",
            "range": "± 1820.0271441773289"
          }
        ]
      }
    ]
  }
}