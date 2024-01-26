window.BENCHMARK_DATA = {
  "lastUpdate": 1706235189082,
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
      }
    ]
  }
}