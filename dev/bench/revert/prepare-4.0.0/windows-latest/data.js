window.BENCHMARK_DATA = {
  "lastUpdate": 1698979500456,
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
          "id": "4ade6dbac3bf64011bcd13a7cd86928c743ee200",
          "message": "Revert \"Prepare 4.0.0\"\n\nThis reverts commit b99343a7dadaeb286c126889b58fd81343c0e4f9.",
          "timestamp": "2023-11-03T11:27:55+09:00",
          "tree_id": "39a47ae5000d9be0970651f9bcb0ced593447231",
          "url": "https://github.com/greymistcube/libplanet/commit/4ade6dbac3bf64011bcd13a7cd86928c743ee200"
        },
        "date": 1698979474733,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334350,
            "unit": "ns",
            "range": "± 111512.02725366542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2514800,
            "unit": "ns",
            "range": "± 43903.003883561316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1938851.0752688171,
            "unit": "ns",
            "range": "± 107948.477539885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8508372.727272727,
            "unit": "ns",
            "range": "± 263923.25029344147"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54625.53191489362,
            "unit": "ns",
            "range": "± 4250.286167980124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7812892.307692308,
            "unit": "ns",
            "range": "± 207421.36422861926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21115520,
            "unit": "ns",
            "range": "± 170292.91655430483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53068842.85714286,
            "unit": "ns",
            "range": "± 538243.6375904442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106966506.66666667,
            "unit": "ns",
            "range": "± 649808.4426161591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213672643.33333334,
            "unit": "ns",
            "range": "± 2113045.0578208105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4647252.34375,
            "unit": "ns",
            "range": "± 13758.802846240611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1473052.357700893,
            "unit": "ns",
            "range": "± 4091.8350921489305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1110986.015625,
            "unit": "ns",
            "range": "± 3740.742294197094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630727.9817708335,
            "unit": "ns",
            "range": "± 5409.994557977878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844629.8046875,
            "unit": "ns",
            "range": "± 3443.032736543052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792883.3635602678,
            "unit": "ns",
            "range": "± 3195.0310432390734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344374,
            "unit": "ns",
            "range": "± 134065.20772537883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3525376.923076923,
            "unit": "ns",
            "range": "± 95228.177794988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4299757.142857143,
            "unit": "ns",
            "range": "± 72183.59833183621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4132257.5757575757,
            "unit": "ns",
            "range": "± 130830.38167390399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10426813.636363637,
            "unit": "ns",
            "range": "± 578258.0812643648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257353.33333333334,
            "unit": "ns",
            "range": "± 9176.417403520632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248972.09302325582,
            "unit": "ns",
            "range": "± 9207.070926128445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230085.7142857143,
            "unit": "ns",
            "range": "± 13582.128949620663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4195116.666666667,
            "unit": "ns",
            "range": "± 84646.5957760298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3828592.8571428573,
            "unit": "ns",
            "range": "± 55281.732471540236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21680.85106382979,
            "unit": "ns",
            "range": "± 1588.3498298172785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86520.21276595745,
            "unit": "ns",
            "range": "± 5695.830955780249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75991.83673469388,
            "unit": "ns",
            "range": "± 5379.9105781360095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89712.12121212122,
            "unit": "ns",
            "range": "± 10313.961933256682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5924.742268041237,
            "unit": "ns",
            "range": "± 958.1917570606466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21687.755102040817,
            "unit": "ns",
            "range": "± 2495.7805756265375"
          }
        ]
      }
    ]
  }
}