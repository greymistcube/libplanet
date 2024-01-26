window.BENCHMARK_DATA = {
  "lastUpdate": 1706235931178,
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
          "id": "8f7ce144d27b081fb06255e51676edb8b2c801c4",
          "message": "Changed IWorld.SetAccount() specifications",
          "timestamp": "2024-01-26T10:59:36+09:00",
          "tree_id": "340fabb26e82b9f030038c3d9e100c4a2a056b3a",
          "url": "https://github.com/greymistcube/libplanet/commit/8f7ce144d27b081fb06255e51676edb8b2c801c4"
        },
        "date": 1706235176424,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7696071,
            "unit": "ns",
            "range": "± 81072.71028013475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18425236.066666666,
            "unit": "ns",
            "range": "± 292726.14014966926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46523081.941176474,
            "unit": "ns",
            "range": "± 953003.17689669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93594573.7195122,
            "unit": "ns",
            "range": "± 3352701.8801777805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188276975.8,
            "unit": "ns",
            "range": "± 3461616.9720654534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33458.151162790695,
            "unit": "ns",
            "range": "± 2600.3116940653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227422.71875,
            "unit": "ns",
            "range": "± 26059.232466260248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218552.75,
            "unit": "ns",
            "range": "± 22668.708155795546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200297.68085106384,
            "unit": "ns",
            "range": "± 24301.14718871048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3857726.75,
            "unit": "ns",
            "range": "± 73891.12164574758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3398554,
            "unit": "ns",
            "range": "± 63566.00375672518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12134.271739130434,
            "unit": "ns",
            "range": "± 1219.2824777348471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60757.86516853933,
            "unit": "ns",
            "range": "± 5718.358152379634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50683.28313253012,
            "unit": "ns",
            "range": "± 3201.432415868021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61575.39361702128,
            "unit": "ns",
            "range": "± 11731.368636723999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3411.2,
            "unit": "ns",
            "range": "± 512.4267105722193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11958.71590909091,
            "unit": "ns",
            "range": "± 819.2676705850357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065392.275510204,
            "unit": "ns",
            "range": "± 101331.33465609832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2214273.4024390243,
            "unit": "ns",
            "range": "± 116260.66407519965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1729067.907216495,
            "unit": "ns",
            "range": "± 118787.06727174702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18458342.01111111,
            "unit": "ns",
            "range": "± 2079000.4736783647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2862117.225490196,
            "unit": "ns",
            "range": "± 115280.33636524114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2968764.1694915253,
            "unit": "ns",
            "range": "± 129988.67044864048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3548776.44,
            "unit": "ns",
            "range": "± 94047.28339913208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3612840.2459016396,
            "unit": "ns",
            "range": "± 151141.82656119778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21149505.902173914,
            "unit": "ns",
            "range": "± 2305902.716069849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4368773.58125,
            "unit": "ns",
            "range": "± 51351.4456273843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1318327.511439732,
            "unit": "ns",
            "range": "± 20549.04610921559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 847362.2678385417,
            "unit": "ns",
            "range": "± 10159.882735619516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927779.1916503906,
            "unit": "ns",
            "range": "± 36272.700481806896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617050.2578125,
            "unit": "ns",
            "range": "± 8478.985928174003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559903.9245442708,
            "unit": "ns",
            "range": "± 7984.315098209583"
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
          "id": "998eaa31489fb67f7fddbc4f413902258074fc5f",
          "message": "Changelog",
          "timestamp": "2024-01-26T11:03:41+09:00",
          "tree_id": "5a63cc075cd49b1b9f5dc9186adce5c94e8cf63e",
          "url": "https://github.com/greymistcube/libplanet/commit/998eaa31489fb67f7fddbc4f413902258074fc5f"
        },
        "date": 1706235916386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9360707.664705882,
            "unit": "ns",
            "range": "± 818737.1334557447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22350677,
            "unit": "ns",
            "range": "± 1112677.4188478512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61158749.73595506,
            "unit": "ns",
            "range": "± 5900714.379334872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119719393.35714285,
            "unit": "ns",
            "range": "± 9816907.505789883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230926700.34042552,
            "unit": "ns",
            "range": "± 8904641.929464566"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76947.51149425287,
            "unit": "ns",
            "range": "± 6596.384688977942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354507.05376344087,
            "unit": "ns",
            "range": "± 65758.34431567132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363435.5729166667,
            "unit": "ns",
            "range": "± 56577.469188109404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335960.39361702127,
            "unit": "ns",
            "range": "± 35974.70714817791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4732628.604166667,
            "unit": "ns",
            "range": "± 319664.714667217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4019847.2674418604,
            "unit": "ns",
            "range": "± 229638.5535463439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25964.449438202246,
            "unit": "ns",
            "range": "± 2991.364860315118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119847.78723404255,
            "unit": "ns",
            "range": "± 16345.158877265803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107930.68279569893,
            "unit": "ns",
            "range": "± 14486.257832816285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105325.23913043478,
            "unit": "ns",
            "range": "± 12484.823193059983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7436.930107526881,
            "unit": "ns",
            "range": "± 949.2311808700017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20603.53092783505,
            "unit": "ns",
            "range": "± 3231.088379109559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565942.1629213484,
            "unit": "ns",
            "range": "± 204225.9477686943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2932492.418604651,
            "unit": "ns",
            "range": "± 183208.4512111475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2679112.8235294116,
            "unit": "ns",
            "range": "± 284750.3053816322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 35369478.84408602,
            "unit": "ns",
            "range": "± 8378315.718411211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3514719.649484536,
            "unit": "ns",
            "range": "± 345185.4004418628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588139.668421053,
            "unit": "ns",
            "range": "± 299708.7853197562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531077.87628866,
            "unit": "ns",
            "range": "± 429034.04967103765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4530270.378947369,
            "unit": "ns",
            "range": "± 332481.249572708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33716948.53,
            "unit": "ns",
            "range": "± 5026033.488656971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6545026.928622159,
            "unit": "ns",
            "range": "± 241711.8942513502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962767.5787326389,
            "unit": "ns",
            "range": "± 74586.03217239882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1240264.1005497684,
            "unit": "ns",
            "range": "± 33418.583282375206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3182322.871553309,
            "unit": "ns",
            "range": "± 102431.32292432545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874082.1047952586,
            "unit": "ns",
            "range": "± 25467.9477152265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768029.9162326389,
            "unit": "ns",
            "range": "± 16177.117414148743"
          }
        ]
      }
    ]
  }
}