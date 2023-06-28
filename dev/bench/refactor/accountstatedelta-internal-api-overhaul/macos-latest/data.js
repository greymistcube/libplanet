window.BENCHMARK_DATA = {
  "lastUpdate": 1687930692163,
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
          "id": "c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca",
          "message": "Use mocked state for testing; make AccountStateDelta creator private",
          "timestamp": "2023-06-27T19:17:10+09:00",
          "tree_id": "cfb95f884f28b3ef3c68c89991ef131469521fa8",
          "url": "https://github.com/greymistcube/libplanet/commit/c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca"
        },
        "date": 1687930676490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12688002.709677419,
            "unit": "ns",
            "range": "± 3737392.9754902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32731944.577777777,
            "unit": "ns",
            "range": "± 7930561.4015140245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61719641.344444446,
            "unit": "ns",
            "range": "± 8584557.107408501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117177123.79310344,
            "unit": "ns",
            "range": "± 9040963.06723475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232052814.1451613,
            "unit": "ns",
            "range": "± 7014393.908233824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82065.81609195402,
            "unit": "ns",
            "range": "± 6889.346618239619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397965.9375,
            "unit": "ns",
            "range": "± 48430.45652040666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389301.33684210526,
            "unit": "ns",
            "range": "± 55545.6113526974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340248.26086956525,
            "unit": "ns",
            "range": "± 33920.90742905207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4645586.331578948,
            "unit": "ns",
            "range": "± 400160.7596766487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078407.787878788,
            "unit": "ns",
            "range": "± 355314.5418708662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25861.298850574713,
            "unit": "ns",
            "range": "± 3149.9116566236503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125803.64210526316,
            "unit": "ns",
            "range": "± 14047.658071581918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129331.85164835164,
            "unit": "ns",
            "range": "± 14786.648256205572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140746.30208333334,
            "unit": "ns",
            "range": "± 24322.389290363633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8597.39247311828,
            "unit": "ns",
            "range": "± 881.3423983304696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25478.03846153846,
            "unit": "ns",
            "range": "± 2865.8497491346934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1915684.8406593406,
            "unit": "ns",
            "range": "± 294672.9253528853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3440457.9269662923,
            "unit": "ns",
            "range": "± 472582.8435380617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3142211.2608695654,
            "unit": "ns",
            "range": "± 646761.1604301832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7111146.659090909,
            "unit": "ns",
            "range": "± 951949.283757545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3604388.9615384615,
            "unit": "ns",
            "range": "± 320391.5468130382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4065642.0459770113,
            "unit": "ns",
            "range": "± 555768.127628297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5088537.882022472,
            "unit": "ns",
            "range": "± 467507.5648801287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4927709.392473118,
            "unit": "ns",
            "range": "± 594492.1356661695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8771324.640449438,
            "unit": "ns",
            "range": "± 833490.8770062057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7371332.8984375,
            "unit": "ns",
            "range": "± 253717.37718380007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2194298.859675481,
            "unit": "ns",
            "range": "± 28522.92201274998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442655.4741586538,
            "unit": "ns",
            "range": "± 21979.412773103915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3252116.04200932,
            "unit": "ns",
            "range": "± 139760.7613376179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999544.1279523983,
            "unit": "ns",
            "range": "± 36740.32096838309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835676.184765625,
            "unit": "ns",
            "range": "± 14304.403467712349"
          }
        ]
      }
    ]
  }
}