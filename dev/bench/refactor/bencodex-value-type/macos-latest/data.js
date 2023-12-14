window.BENCHMARK_DATA = {
  "lastUpdate": 1702517500248,
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
      }
    ]
  }
}