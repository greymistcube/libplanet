window.BENCHMARK_DATA = {
  "lastUpdate": 1680491920979,
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
          "id": "67584a37ecc8290d90c7187c20873cebde4bfb9f",
          "message": "Cleanup",
          "timestamp": "2023-04-03T12:00:11+09:00",
          "tree_id": "fc3ffe1d75b58e05732d3132cfee91799ea557cd",
          "url": "https://github.com/greymistcube/libplanet/commit/67584a37ecc8290d90c7187c20873cebde4bfb9f"
        },
        "date": 1680491896680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678932.4742268042,
            "unit": "ns",
            "range": "± 141121.2554938049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2977057.1428571427,
            "unit": "ns",
            "range": "± 83830.585016013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641905.263157895,
            "unit": "ns",
            "range": "± 170165.88612818875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6665058.536585365,
            "unit": "ns",
            "range": "± 350256.4556736133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62634.536082474224,
            "unit": "ns",
            "range": "± 5390.468830224509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8877333.333333334,
            "unit": "ns",
            "range": "± 148781.8281274712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24039978.57142857,
            "unit": "ns",
            "range": "± 191543.3237941482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59760325,
            "unit": "ns",
            "range": "± 1154872.387971935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119705926.92307693,
            "unit": "ns",
            "range": "± 446526.97782225534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241680687.5,
            "unit": "ns",
            "range": "± 4631088.951549805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5804446.995192308,
            "unit": "ns",
            "range": "± 31055.509588250923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903317.1595982143,
            "unit": "ns",
            "range": "± 12992.943670657874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1417598.8839285714,
            "unit": "ns",
            "range": "± 13921.266699726288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3158702.34375,
            "unit": "ns",
            "range": "± 22013.17254686498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990945.3683035715,
            "unit": "ns",
            "range": "± 11584.779857839489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910296.7097355769,
            "unit": "ns",
            "range": "± 5046.023220211278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3896021.621621622,
            "unit": "ns",
            "range": "± 126952.59643560559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4107494.117647059,
            "unit": "ns",
            "range": "± 124434.54636067004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4745735.714285715,
            "unit": "ns",
            "range": "± 132063.29631204967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5392385.714285715,
            "unit": "ns",
            "range": "± 91680.83313776749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8922510.714285715,
            "unit": "ns",
            "range": "± 254850.3443770491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382894.8275862069,
            "unit": "ns",
            "range": "± 14651.665044159425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313285.71428571426,
            "unit": "ns",
            "range": "± 12410.848748843355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275831.5068493151,
            "unit": "ns",
            "range": "± 13739.530122083755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6356685.714285715,
            "unit": "ns",
            "range": "± 54306.266207966735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4524690,
            "unit": "ns",
            "range": "± 64362.08733186243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28445.263157894737,
            "unit": "ns",
            "range": "± 2017.622807095847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115362.88659793814,
            "unit": "ns",
            "range": "± 10821.865593052307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116322,
            "unit": "ns",
            "range": "± 12557.110585744886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 221846.73913043478,
            "unit": "ns",
            "range": "± 17022.715599831234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10225.510204081633,
            "unit": "ns",
            "range": "± 1211.3136112680552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26258.947368421053,
            "unit": "ns",
            "range": "± 2802.145634469222"
          }
        ]
      }
    ]
  }
}