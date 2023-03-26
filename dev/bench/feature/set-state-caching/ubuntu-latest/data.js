window.BENCHMARK_DATA = {
  "lastUpdate": 1679836275568,
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
          "id": "a3a3a05bbd9141cd110fc544a4725588b0b71c4b",
          "message": "Cache during commit",
          "timestamp": "2023-03-26T21:52:29+09:00",
          "tree_id": "9e82adaed50e472317a77409dbc78eda575f2d6f",
          "url": "https://github.com/greymistcube/libplanet/commit/a3a3a05bbd9141cd110fc544a4725588b0b71c4b"
        },
        "date": 1679836188860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129504.23655913978,
            "unit": "ns",
            "range": "± 14274.730994494104"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6274899.268465909,
            "unit": "ns",
            "range": "± 410352.35334113066"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7104599.214285715,
            "unit": "ns",
            "range": "± 257990.03065447955"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34658303.39393939,
            "unit": "ns",
            "range": "± 2170471.47631579"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7691989.395604395,
            "unit": "ns",
            "range": "± 582127.0098954329"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39458940.8877551,
            "unit": "ns",
            "range": "± 2644407.4745900906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7163307.395089285,
            "unit": "ns",
            "range": "± 98991.81562592501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2307963.6859375,
            "unit": "ns",
            "range": "± 32195.42765746943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1676832.7927083333,
            "unit": "ns",
            "range": "± 23601.774561878054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3283179.5920410156,
            "unit": "ns",
            "range": "± 59492.438348043266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047199.3371465774,
            "unit": "ns",
            "range": "± 24351.72921308795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982577.2700805664,
            "unit": "ns",
            "range": "± 18725.70701093804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117584.51546391753,
            "unit": "ns",
            "range": "± 21424.75474972108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242171.20212765958,
            "unit": "ns",
            "range": "± 31763.126564496975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231131.20833333334,
            "unit": "ns",
            "range": "± 35362.230476185716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4892998.969072165,
            "unit": "ns",
            "range": "± 311338.8680161408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12265391.285714285,
            "unit": "ns",
            "range": "± 728041.9734733776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23814.11111111111,
            "unit": "ns",
            "range": "± 8614.152741083248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64356.37234042553,
            "unit": "ns",
            "range": "± 11566.893191656249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55143.032258064515,
            "unit": "ns",
            "range": "± 11119.371065897658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121757.10752688172,
            "unit": "ns",
            "range": "± 26497.290287820146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5796.666666666667,
            "unit": "ns",
            "range": "± 650.0561773476699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23974.99,
            "unit": "ns",
            "range": "± 8592.203096435986"
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
          "id": "49a8555cfbbb28ac03f9b44e572fee87963625ab",
          "message": "Cache during commit",
          "timestamp": "2023-03-26T22:00:05+09:00",
          "tree_id": "0378e668cb7a863f559be06c1ee8577a1c7f451d",
          "url": "https://github.com/greymistcube/libplanet/commit/49a8555cfbbb28ac03f9b44e572fee87963625ab"
        },
        "date": 1679836267525,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101052.61904761905,
            "unit": "ns",
            "range": "± 3669.2543334485244"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4466498.060267857,
            "unit": "ns",
            "range": "± 35569.27952733959"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6163165.5,
            "unit": "ns",
            "range": "± 104183.31669835257"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26054371.46153846,
            "unit": "ns",
            "range": "± 248339.67342352404"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6771710.4,
            "unit": "ns",
            "range": "± 92536.95439568223"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28415587.8125,
            "unit": "ns",
            "range": "± 523649.7561603836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5885115.402083334,
            "unit": "ns",
            "range": "± 24295.17451728947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933691.2003348214,
            "unit": "ns",
            "range": "± 4495.46116600188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357125.0350060095,
            "unit": "ns",
            "range": "± 1377.8237738404307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555908.572135417,
            "unit": "ns",
            "range": "± 1206.9625952096953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816031.5145733173,
            "unit": "ns",
            "range": "± 804.3087825599284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735012.7654747596,
            "unit": "ns",
            "range": "± 405.75965055337264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93071.45918367348,
            "unit": "ns",
            "range": "± 8021.7682411555425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195701.37078651684,
            "unit": "ns",
            "range": "± 11809.33223747414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172355.83333333334,
            "unit": "ns",
            "range": "± 3039.118414161271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3817245.4,
            "unit": "ns",
            "range": "± 23545.191385928465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9403446.933333334,
            "unit": "ns",
            "range": "± 54401.80284363833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15901.118279569893,
            "unit": "ns",
            "range": "± 1669.5556806050186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46532.311111111114,
            "unit": "ns",
            "range": "± 3510.8026664562767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41615.26262626263,
            "unit": "ns",
            "range": "± 3649.1672927290747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89853.90322580645,
            "unit": "ns",
            "range": "± 12653.78556355208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5315.979381443299,
            "unit": "ns",
            "range": "± 859.6131152464924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15444.340206185567,
            "unit": "ns",
            "range": "± 1532.420789732417"
          }
        ]
      }
    ]
  }
}