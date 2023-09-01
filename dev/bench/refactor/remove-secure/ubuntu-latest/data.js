window.BENCHMARK_DATA = {
  "lastUpdate": 1693553918678,
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
          "id": "081800f6ea9ad2fa55fb010ab82f519a554ae616",
          "message": "Cleanup",
          "timestamp": "2023-09-01T16:17:44+09:00",
          "tree_id": "830eaf91878beea538b2c3f121b1353419b4be6d",
          "url": "https://github.com/greymistcube/libplanet/commit/081800f6ea9ad2fa55fb010ab82f519a554ae616"
        },
        "date": 1693553908772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759547.19,
            "unit": "ns",
            "range": "± 192735.8320009669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3273429.4680851065,
            "unit": "ns",
            "range": "± 266913.0420845566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2189211.0322580645,
            "unit": "ns",
            "range": "± 188541.36059712246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6512440.127659574,
            "unit": "ns",
            "range": "± 405867.30876485555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350077.44086021505,
            "unit": "ns",
            "range": "± 30468.774753644302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363585.1052631579,
            "unit": "ns",
            "range": "± 39719.93737258933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313778.94623655913,
            "unit": "ns",
            "range": "± 38020.092574552116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5398675.010416667,
            "unit": "ns",
            "range": "± 343877.64920391433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4840406.589473684,
            "unit": "ns",
            "range": "± 331549.7134966209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29740,
            "unit": "ns",
            "range": "± 10013.738038062984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113384.71739130435,
            "unit": "ns",
            "range": "± 14345.646243339297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116166.67708333333,
            "unit": "ns",
            "range": "± 23007.560863651473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110133.37777777777,
            "unit": "ns",
            "range": "± 17607.959684123056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6792.631578947368,
            "unit": "ns",
            "range": "± 1132.803160800596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18965.024096385543,
            "unit": "ns",
            "range": "± 1877.5700043842583"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68227.05208333333,
            "unit": "ns",
            "range": "± 15758.496838794981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9998597.358695652,
            "unit": "ns",
            "range": "± 631448.0388889968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27319018.54761905,
            "unit": "ns",
            "range": "± 990256.4668889449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73511834.54166667,
            "unit": "ns",
            "range": "± 2871103.057788165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145112261.47727272,
            "unit": "ns",
            "range": "± 5156790.790659382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299116173.3,
            "unit": "ns",
            "range": "± 10389617.721024342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4298935.731182796,
            "unit": "ns",
            "range": "± 329661.8502770858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4233530.010526316,
            "unit": "ns",
            "range": "± 267678.75884241314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5648637.577777778,
            "unit": "ns",
            "range": "± 314177.5203269419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5057770.359375,
            "unit": "ns",
            "range": "± 232415.89259645838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8650257.16091954,
            "unit": "ns",
            "range": "± 469519.62771650305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6310583.278477822,
            "unit": "ns",
            "range": "± 191133.07306887596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2051318.8659319195,
            "unit": "ns",
            "range": "± 21402.096628774878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375636.693359375,
            "unit": "ns",
            "range": "± 19323.802877920454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3303256.461476293,
            "unit": "ns",
            "range": "± 96589.03062488108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1120578.9483072916,
            "unit": "ns",
            "range": "± 19216.505766524224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 991010.3440104167,
            "unit": "ns",
            "range": "± 17981.489270357542"
          }
        ]
      }
    ]
  }
}