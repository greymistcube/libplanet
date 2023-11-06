window.BENCHMARK_DATA = {
  "lastUpdate": 1699255288550,
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
          "id": "142e48097ebf05b86f61f397382388d721ecbd11",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T15:19:37+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/greymistcube/libplanet/commit/142e48097ebf05b86f61f397382388d721ecbd11"
        },
        "date": 1699255262856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313137,
            "unit": "ns",
            "range": "± 100173.26268304161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2544741.8604651163,
            "unit": "ns",
            "range": "± 92042.46750836096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050888,
            "unit": "ns",
            "range": "± 153075.43283418714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8883782.02247191,
            "unit": "ns",
            "range": "± 537805.5232233112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55592.63157894737,
            "unit": "ns",
            "range": "± 5503.523863490867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7522160,
            "unit": "ns",
            "range": "± 88185.59001171499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20855607.14285714,
            "unit": "ns",
            "range": "± 186256.85930285262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52490464.28571428,
            "unit": "ns",
            "range": "± 866153.103233925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106327240,
            "unit": "ns",
            "range": "± 1731487.938079352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210089215.3846154,
            "unit": "ns",
            "range": "± 2340714.7155823135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4608095.535714285,
            "unit": "ns",
            "range": "± 15824.754894527861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1489996.9205729167,
            "unit": "ns",
            "range": "± 5950.533272367853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1110007.2823660714,
            "unit": "ns",
            "range": "± 2854.016318010259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617822.3828125,
            "unit": "ns",
            "range": "± 7758.616410790878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839987.16796875,
            "unit": "ns",
            "range": "± 3460.9214951711924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764849.5247395834,
            "unit": "ns",
            "range": "± 2746.838518744954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3255536.8421052634,
            "unit": "ns",
            "range": "± 70605.12422800106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446102.0833333335,
            "unit": "ns",
            "range": "± 134693.72742757303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4174308.620689655,
            "unit": "ns",
            "range": "± 176633.5003139321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4063137.878787879,
            "unit": "ns",
            "range": "± 125921.58958449043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10015275,
            "unit": "ns",
            "range": "± 258534.841301258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271677.1929824561,
            "unit": "ns",
            "range": "± 11764.444275987158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258081.81818181818,
            "unit": "ns",
            "range": "± 12148.692985615418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231014.43298969071,
            "unit": "ns",
            "range": "± 16051.479615668884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4065157.1428571427,
            "unit": "ns",
            "range": "± 54390.266582368386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830178.947368421,
            "unit": "ns",
            "range": "± 81417.43997549752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20753.260869565216,
            "unit": "ns",
            "range": "± 2442.00651991086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92196.8085106383,
            "unit": "ns",
            "range": "± 7892.2372658018685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77486.59793814433,
            "unit": "ns",
            "range": "± 5747.92768573269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93947.95918367348,
            "unit": "ns",
            "range": "± 11556.871741605732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5885.714285714285,
            "unit": "ns",
            "range": "± 922.2339529194995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21952.808988764045,
            "unit": "ns",
            "range": "± 2024.0087297489856"
          }
        ]
      }
    ]
  }
}