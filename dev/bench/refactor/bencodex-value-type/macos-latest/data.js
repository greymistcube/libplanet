window.BENCHMARK_DATA = {
  "lastUpdate": 1702518486867,
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
          "id": "12c4fdea1532e2402db242e451b1655bdbe69092",
          "message": "Updated tests",
          "timestamp": "2023-12-13T09:33:00+09:00",
          "tree_id": "85070767558264a9019ca1c00801a3da551959e4",
          "url": "https://github.com/greymistcube/libplanet/commit/12c4fdea1532e2402db242e451b1655bdbe69092"
        },
        "date": 1702517483614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8451990.961538462,
            "unit": "ns",
            "range": "± 123775.64945807891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22875180.633333333,
            "unit": "ns",
            "range": "± 333791.6563435227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54393635.45454545,
            "unit": "ns",
            "range": "± 1307322.3506049349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107725400.17391305,
            "unit": "ns",
            "range": "± 6055692.392089242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210540313.54,
            "unit": "ns",
            "range": "± 14117775.814373804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44252.85555555556,
            "unit": "ns",
            "range": "± 6867.6821226181055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247375.05913978495,
            "unit": "ns",
            "range": "± 17564.177823591606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247294.90721649484,
            "unit": "ns",
            "range": "± 22432.514441506217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210975.2474226804,
            "unit": "ns",
            "range": "± 22452.864065188005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4382201.115384615,
            "unit": "ns",
            "range": "± 109142.07035688005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3505924.409090909,
            "unit": "ns",
            "range": "± 83930.62659162488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13249.054945054944,
            "unit": "ns",
            "range": "± 1290.416215047923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56980.36842105263,
            "unit": "ns",
            "range": "± 4483.336208038754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52225.990196078434,
            "unit": "ns",
            "range": "± 2062.928969911946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61580.54081632653,
            "unit": "ns",
            "range": "± 11485.786501144066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3379.598901098901,
            "unit": "ns",
            "range": "± 421.82479393292755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12448.901098901099,
            "unit": "ns",
            "range": "± 1294.7810029751925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1087150.5638297873,
            "unit": "ns",
            "range": "± 104966.61646609349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2183516.1886792453,
            "unit": "ns",
            "range": "± 90465.04529461103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1453628.6744186047,
            "unit": "ns",
            "range": "± 76769.22706097677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7762622.073684211,
            "unit": "ns",
            "range": "± 986145.6334404167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362532.794117647,
            "unit": "ns",
            "range": "± 108398.28292578882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3255373.505154639,
            "unit": "ns",
            "range": "± 228899.63284092638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3967585.04,
            "unit": "ns",
            "range": "± 105484.06171885242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3997419.794117647,
            "unit": "ns",
            "range": "± 127372.45148199073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15173135.8125,
            "unit": "ns",
            "range": "± 2496905.4636475323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4983338.413322369,
            "unit": "ns",
            "range": "± 577179.7530441101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1559646.2141276042,
            "unit": "ns",
            "range": "± 92535.66559834486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179989.3640008224,
            "unit": "ns",
            "range": "± 127874.75422016594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518812.607252038,
            "unit": "ns",
            "range": "± 190684.6008641935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643444.1903520063,
            "unit": "ns",
            "range": "± 35216.30916791017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570282.2083984375,
            "unit": "ns",
            "range": "± 9121.262773766653"
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
          "id": "f5a81643918efef744a1a7f883191d66384c3830",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:23:23+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/greymistcube/libplanet/commit/f5a81643918efef744a1a7f883191d66384c3830"
        },
        "date": 1702518465369,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13485647.563829787,
            "unit": "ns",
            "range": "± 1767561.2858474662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27040472.32828283,
            "unit": "ns",
            "range": "± 4619943.562838419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68971273.6,
            "unit": "ns",
            "range": "± 10826199.90884062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 161073361.75581396,
            "unit": "ns",
            "range": "± 24539305.26682053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 322420978.9583333,
            "unit": "ns",
            "range": "± 38854346.02760576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78181.59375,
            "unit": "ns",
            "range": "± 19521.18553430612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395334.01515151514,
            "unit": "ns",
            "range": "± 91144.59297130785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384858.8888888889,
            "unit": "ns",
            "range": "± 103734.04007559859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 376102.4587628866,
            "unit": "ns",
            "range": "± 78139.52083358618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5318491.893617021,
            "unit": "ns",
            "range": "± 916359.1806385316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4307559.12195122,
            "unit": "ns",
            "range": "± 239279.83230763543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18412.97894736842,
            "unit": "ns",
            "range": "± 2635.7498145041104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98110.37912087912,
            "unit": "ns",
            "range": "± 16861.537395857253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95220.8085106383,
            "unit": "ns",
            "range": "± 19862.019113609505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98395.86458333333,
            "unit": "ns",
            "range": "± 18231.660314507142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7880.4,
            "unit": "ns",
            "range": "± 1384.628525204139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18964.02688172043,
            "unit": "ns",
            "range": "± 3427.0002397565213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1631055.611111111,
            "unit": "ns",
            "range": "± 475845.8219008201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3115175.131868132,
            "unit": "ns",
            "range": "± 648641.4743848563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2606926.1021505375,
            "unit": "ns",
            "range": "± 732918.5118922653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11739935.608247424,
            "unit": "ns",
            "range": "± 2887310.628113508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4922595.391304348,
            "unit": "ns",
            "range": "± 1202750.5993639266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5010658.193877551,
            "unit": "ns",
            "range": "± 963247.2259880767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5714289.806122449,
            "unit": "ns",
            "range": "± 1258510.0829003411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5433967.414893617,
            "unit": "ns",
            "range": "± 1122687.7309678264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21784552.224489797,
            "unit": "ns",
            "range": "± 4602212.841456072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4900484.559036727,
            "unit": "ns",
            "range": "± 342005.1827702464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588980.22265625,
            "unit": "ns",
            "range": "± 41174.47168153772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1029426.7442708333,
            "unit": "ns",
            "range": "± 16342.581805865193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2374907.48609375,
            "unit": "ns",
            "range": "± 61220.46181887623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 732950.1138556985,
            "unit": "ns",
            "range": "± 21606.140223364924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 656985.0472237723,
            "unit": "ns",
            "range": "± 11081.43138501181"
          }
        ]
      }
    ]
  }
}