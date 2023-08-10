window.BENCHMARK_DATA = {
  "lastUpdate": 1691649803567,
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
          "id": "d0fd56e61303efd4e96725b9bbbc2ad0b1d1be17",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:19:05+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/d0fd56e61303efd4e96725b9bbbc2ad0b1d1be17"
        },
        "date": 1691649445662,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9320272.272727273,
            "unit": "ns",
            "range": "± 602008.1323692653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22442593.02307692,
            "unit": "ns",
            "range": "± 1046999.175195907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55365561.82608695,
            "unit": "ns",
            "range": "± 2123982.694178434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109638414.8076923,
            "unit": "ns",
            "range": "± 1828494.649102388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225623596.7142857,
            "unit": "ns",
            "range": "± 3199002.8378139343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73815.62222222223,
            "unit": "ns",
            "range": "± 6413.254252161802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303988.25268817204,
            "unit": "ns",
            "range": "± 30456.053455064353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285203.4775280899,
            "unit": "ns",
            "range": "± 19353.408529353033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278962.1666666667,
            "unit": "ns",
            "range": "± 18947.48312832725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4022802.4615384615,
            "unit": "ns",
            "range": "± 61577.29503182076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685813.3571428573,
            "unit": "ns",
            "range": "± 55327.120757583034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20043.35714285714,
            "unit": "ns",
            "range": "± 3444.4136850878726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98350.57291666667,
            "unit": "ns",
            "range": "± 9630.912869499462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92971.7,
            "unit": "ns",
            "range": "± 17853.98255263791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86458.375,
            "unit": "ns",
            "range": "± 14661.790211832573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6299.543010752688,
            "unit": "ns",
            "range": "± 896.3879438926286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21055.86813186813,
            "unit": "ns",
            "range": "± 5229.010495322739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1469523.3684210526,
            "unit": "ns",
            "range": "± 112984.51446859098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2868073.6066666665,
            "unit": "ns",
            "range": "± 137101.2123456139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2101058.53,
            "unit": "ns",
            "range": "± 301916.44836357265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5401024.901960785,
            "unit": "ns",
            "range": "± 185394.52283584373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3546990.1875,
            "unit": "ns",
            "range": "± 348501.92400557204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3815771.414141414,
            "unit": "ns",
            "range": "± 389277.9306325383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4740455.777777778,
            "unit": "ns",
            "range": "± 374341.2158344025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4164975.025252525,
            "unit": "ns",
            "range": "± 335819.68238115293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7246289.625,
            "unit": "ns",
            "range": "± 614216.9374219888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5885977.907679115,
            "unit": "ns",
            "range": "± 195739.5831326927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1813352.0858677456,
            "unit": "ns",
            "range": "± 51987.81476007233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1016947.6767263105,
            "unit": "ns",
            "range": "± 28287.711126668866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692722.1939786584,
            "unit": "ns",
            "range": "± 141719.74988196717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905358.2231657609,
            "unit": "ns",
            "range": "± 33053.24914212466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739727.2534877232,
            "unit": "ns",
            "range": "± 12807.336776412334"
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
          "id": "e6a9c088de78199baade8ba9db605f9b638d2f6d",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:24:55+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/e6a9c088de78199baade8ba9db605f9b638d2f6d"
        },
        "date": 1691649772145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8554158.966666667,
            "unit": "ns",
            "range": "± 128647.60647591137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22434299.8,
            "unit": "ns",
            "range": "± 650001.3434552376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55322894.928571425,
            "unit": "ns",
            "range": "± 795962.2112766277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115489391.23333333,
            "unit": "ns",
            "range": "± 1436962.1161630962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225811299.73333332,
            "unit": "ns",
            "range": "± 2461165.256026052"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66804.79787234042,
            "unit": "ns",
            "range": "± 7105.583056793065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357129.84,
            "unit": "ns",
            "range": "± 17986.409826130217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342116.05154639174,
            "unit": "ns",
            "range": "± 26396.829838610643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305705.0625,
            "unit": "ns",
            "range": "± 10285.436366597665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4646773.307692308,
            "unit": "ns",
            "range": "± 67538.66186289724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4294836.15,
            "unit": "ns",
            "range": "± 97032.17097560724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19858.714285714286,
            "unit": "ns",
            "range": "± 1205.0932678124896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90849.67894736842,
            "unit": "ns",
            "range": "± 6514.520947066241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85689.34375,
            "unit": "ns",
            "range": "± 5311.879062566179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97872.28125,
            "unit": "ns",
            "range": "± 14511.86037673151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5521.0526315789475,
            "unit": "ns",
            "range": "± 533.7901286608503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19247.29120879121,
            "unit": "ns",
            "range": "± 1283.1730940349355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662616.2346938776,
            "unit": "ns",
            "range": "± 177426.0080336991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3302701.094117647,
            "unit": "ns",
            "range": "± 177425.18591498566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2237500.398989899,
            "unit": "ns",
            "range": "± 236849.64917701564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6551559.539325843,
            "unit": "ns",
            "range": "± 359792.3033498271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3688949.430232558,
            "unit": "ns",
            "range": "± 134788.29399052414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3982837.802325581,
            "unit": "ns",
            "range": "± 145068.49428944392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5098516.620689655,
            "unit": "ns",
            "range": "± 221763.8535465564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4558597.846153846,
            "unit": "ns",
            "range": "± 235269.0137695143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7877148.590909091,
            "unit": "ns",
            "range": "± 291123.9322059616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5974823.049479167,
            "unit": "ns",
            "range": "± 67741.26222758609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942325.7578125,
            "unit": "ns",
            "range": "± 11198.24986790545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159285.13359375,
            "unit": "ns",
            "range": "± 13280.61813199261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2829102.3294270835,
            "unit": "ns",
            "range": "± 15463.461778394363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906422.1343098958,
            "unit": "ns",
            "range": "± 10154.808924185958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952989.88515625,
            "unit": "ns",
            "range": "± 3929.5535064087394"
          }
        ]
      }
    ]
  }
}