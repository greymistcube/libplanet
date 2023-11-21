window.BENCHMARK_DATA = {
  "lastUpdate": 1700533318419,
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
          "id": "12bea58324a8edab0a611a6612a42843839b885f",
          "message": "Release 3.6.2",
          "timestamp": "2023-11-21T11:11:15+09:00",
          "tree_id": "b3f337e651b4db2e3f6f4aee02b43a29cc8f980a",
          "url": "https://github.com/greymistcube/libplanet/commit/12bea58324a8edab0a611a6612a42843839b885f"
        },
        "date": 1700533312193,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202452.52564102566,
            "unit": "ns",
            "range": "± 10390.776187804657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189192.20754716982,
            "unit": "ns",
            "range": "± 7682.3532611546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168646,
            "unit": "ns",
            "range": "± 3937.442190051811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3128169.285714286,
            "unit": "ns",
            "range": "± 24594.11737177619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2916080.5,
            "unit": "ns",
            "range": "± 38203.391092938335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15615.38947368421,
            "unit": "ns",
            "range": "± 1415.5642232342493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66061.76804123711,
            "unit": "ns",
            "range": "± 9966.082696989768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60344.0875,
            "unit": "ns",
            "range": "± 4829.759346662855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76231.33838383839,
            "unit": "ns",
            "range": "± 18685.06307280867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2819.5851063829787,
            "unit": "ns",
            "range": "± 686.1238705928401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14948.294736842105,
            "unit": "ns",
            "range": "± 2242.6373288612212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3632537.4031808036,
            "unit": "ns",
            "range": "± 45821.431523753505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1150239.747233073,
            "unit": "ns",
            "range": "± 5010.803943436077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727858.124593099,
            "unit": "ns",
            "range": "± 1661.794828814878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977388.9007161458,
            "unit": "ns",
            "range": "± 5121.507560220268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622248.125406901,
            "unit": "ns",
            "range": "± 2301.637359103712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576433.4909855769,
            "unit": "ns",
            "range": "± 2648.7837385469747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41797.37113402062,
            "unit": "ns",
            "range": "± 6511.774683409386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2410211.6666666665,
            "unit": "ns",
            "range": "± 29941.953783628625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547769.112244898,
            "unit": "ns",
            "range": "± 151501.86503373025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3152137.4545454546,
            "unit": "ns",
            "range": "± 76459.30937976859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3050172.435483871,
            "unit": "ns",
            "range": "± 88222.7529298935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6666822.709302326,
            "unit": "ns",
            "range": "± 244512.94903265475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5942909.733333333,
            "unit": "ns",
            "range": "± 88110.436146485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14560947.8,
            "unit": "ns",
            "range": "± 91185.16318239497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37818202.3125,
            "unit": "ns",
            "range": "± 695116.6948663818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75717994.38461539,
            "unit": "ns",
            "range": "± 848419.6180400689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151462110.76923078,
            "unit": "ns",
            "range": "± 389771.7481174407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980347.75,
            "unit": "ns",
            "range": "± 102135.68036026412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1863534.1509433961,
            "unit": "ns",
            "range": "± 77471.78400314933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1422018.5858585858,
            "unit": "ns",
            "range": "± 128599.66562276096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5595933.404761905,
            "unit": "ns",
            "range": "± 204096.53068929256"
          }
        ]
      }
    ]
  }
}