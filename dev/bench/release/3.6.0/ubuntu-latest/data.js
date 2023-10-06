window.BENCHMARK_DATA = {
  "lastUpdate": 1696584343160,
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
          "id": "99e4103018faeb05ec1a274bc5b19c300bdd8bd1",
          "message": "Release 3.6.0",
          "timestamp": "2023-10-06T18:08:29+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/greymistcube/libplanet/commit/99e4103018faeb05ec1a274bc5b19c300bdd8bd1"
        },
        "date": 1696584333838,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60620.63829787234,
            "unit": "ns",
            "range": "± 4011.4861935033555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10245433.461538462,
            "unit": "ns",
            "range": "± 574029.0408219452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27263217.57142857,
            "unit": "ns",
            "range": "± 284398.9276304337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67486881.64285715,
            "unit": "ns",
            "range": "± 539075.2674386883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134940067.7142857,
            "unit": "ns",
            "range": "± 857085.6871216758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269238861.46666664,
            "unit": "ns",
            "range": "± 1640590.7606015787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336368.7916666667,
            "unit": "ns",
            "range": "± 8548.607768566595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322534.8823529412,
            "unit": "ns",
            "range": "± 6475.191250866194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291000.08771929826,
            "unit": "ns",
            "range": "± 12512.487510027591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5372368.2,
            "unit": "ns",
            "range": "± 78575.86721052282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5032364.066666666,
            "unit": "ns",
            "range": "± 45546.25303306937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25751.244680851065,
            "unit": "ns",
            "range": "± 2256.2466009799923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108795.68421052632,
            "unit": "ns",
            "range": "± 8459.365134197968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91038.2875,
            "unit": "ns",
            "range": "± 4758.021914257082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93457.4367816092,
            "unit": "ns",
            "range": "± 5233.420133657871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6828.958333333333,
            "unit": "ns",
            "range": "± 761.8922277242802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23669.362637362636,
            "unit": "ns",
            "range": "± 1937.2870407206258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1665089.4204545454,
            "unit": "ns",
            "range": "± 90691.76899765841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3223193.152173913,
            "unit": "ns",
            "range": "± 121811.82545475941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2521642.870967742,
            "unit": "ns",
            "range": "± 142477.30014387384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10498870.58064516,
            "unit": "ns",
            "range": "± 303429.7484359737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6094779.986778846,
            "unit": "ns",
            "range": "± 18758.248087370695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907233.2797851562,
            "unit": "ns",
            "range": "± 1950.1416276420646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317437.935267857,
            "unit": "ns",
            "range": "± 513.5057011083362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3097135.681082589,
            "unit": "ns",
            "range": "± 2568.1329056707864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 984279.6140324519,
            "unit": "ns",
            "range": "± 729.8525580518742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902920.376813616,
            "unit": "ns",
            "range": "± 286.8425372431618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4275209.6,
            "unit": "ns",
            "range": "± 167407.8014949953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4481341.8965517245,
            "unit": "ns",
            "range": "± 129958.4856343816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5383596.133333334,
            "unit": "ns",
            "range": "± 71951.62441715035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5208800.08,
            "unit": "ns",
            "range": "± 183339.92735619008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13009280.344827587,
            "unit": "ns",
            "range": "± 551647.2310265705"
          }
        ]
      }
    ]
  }
}