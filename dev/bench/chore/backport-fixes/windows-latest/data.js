window.BENCHMARK_DATA = {
  "lastUpdate": 1689903849634,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "88c17d2d74a05d540b93c5f9203674d4238bc344",
          "message": "docs: fix docfx toc configuration\n\n[skip changelog]",
          "timestamp": "2023-07-21T10:24:57+09:00",
          "tree_id": "cf84acef09d672e944f3593b79a09e49ca967a4d",
          "url": "https://github.com/greymistcube/libplanet/commit/88c17d2d74a05d540b93c5f9203674d4238bc344"
        },
        "date": 1689903826293,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1509551.0204081633,
            "unit": "ns",
            "range": "± 126441.00718484138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2735841.463414634,
            "unit": "ns",
            "range": "± 96706.33633741317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1939838.383838384,
            "unit": "ns",
            "range": "± 161394.146586744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5216620.202020202,
            "unit": "ns",
            "range": "± 323076.5663909705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55563.9175257732,
            "unit": "ns",
            "range": "± 6488.293714564752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8233578.571428572,
            "unit": "ns",
            "range": "± 63201.182785565856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20990557.14285714,
            "unit": "ns",
            "range": "± 183761.51649639523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53362880,
            "unit": "ns",
            "range": "± 855796.2926838539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104285042.85714285,
            "unit": "ns",
            "range": "± 945414.8846807015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212668306.66666666,
            "unit": "ns",
            "range": "± 1823949.1677075194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5066907.760416667,
            "unit": "ns",
            "range": "± 50166.435337116876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582036.40625,
            "unit": "ns",
            "range": "± 15702.374763410151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223750.751201923,
            "unit": "ns",
            "range": "± 8408.011459039613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2721773.1863839286,
            "unit": "ns",
            "range": "± 36516.89320566764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854508.18359375,
            "unit": "ns",
            "range": "± 5227.484790847378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798237.8580729166,
            "unit": "ns",
            "range": "± 10492.496224579107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3538557.1428571427,
            "unit": "ns",
            "range": "± 60180.77528817417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3661184.210526316,
            "unit": "ns",
            "range": "± 126056.12333576252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4535457.407407408,
            "unit": "ns",
            "range": "± 125646.080859403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4110250,
            "unit": "ns",
            "range": "± 42505.52452781421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6644265.7894736845,
            "unit": "ns",
            "range": "± 229112.74962614317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288846.6666666667,
            "unit": "ns",
            "range": "± 12832.908790395064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278830.6451612903,
            "unit": "ns",
            "range": "± 12603.315185906607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274553.0303030303,
            "unit": "ns",
            "range": "± 12790.179161516191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4318526.666666667,
            "unit": "ns",
            "range": "± 52398.39783083157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4021080,
            "unit": "ns",
            "range": "± 57204.335500030065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26728.282828282827,
            "unit": "ns",
            "range": "± 3049.2234007634383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110690,
            "unit": "ns",
            "range": "± 11776.517466397425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115620,
            "unit": "ns",
            "range": "± 11293.468211423107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121464.28571428571,
            "unit": "ns",
            "range": "± 17862.50031562696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7947.368421052632,
            "unit": "ns",
            "range": "± 1361.4637074309899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26816.326530612245,
            "unit": "ns",
            "range": "± 2876.4487654964387"
          }
        ]
      }
    ]
  }
}