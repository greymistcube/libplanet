window.BENCHMARK_DATA = {
  "lastUpdate": 1700474348178,
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
          "id": "585f4ed3ed66691c663e6e789ea87a50001ec8ea",
          "message": "Prepare 3.6.2",
          "timestamp": "2023-11-20T18:48:09+09:00",
          "tree_id": "1a049c226a0684bcc3f69f0003f0d7a1bb370460",
          "url": "https://github.com/greymistcube/libplanet/commit/585f4ed3ed66691c663e6e789ea87a50001ec8ea"
        },
        "date": 1700474341768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5982973.5,
            "unit": "ns",
            "range": "± 51854.99164126231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15220918.115384616,
            "unit": "ns",
            "range": "± 63441.2786684643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38700704.5,
            "unit": "ns",
            "range": "± 195479.71209890998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77705062.42307693,
            "unit": "ns",
            "range": "± 452342.96852949634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 159408170.66666666,
            "unit": "ns",
            "range": "± 616739.4670405934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958800.4,
            "unit": "ns",
            "range": "± 75965.07583449401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1921508.146153846,
            "unit": "ns",
            "range": "± 85059.61130701787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1402679.952631579,
            "unit": "ns",
            "range": "± 112082.11788682026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5760252.833333333,
            "unit": "ns",
            "range": "± 357577.84708867443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2639522.5434782607,
            "unit": "ns",
            "range": "± 101592.48384112467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2711993.9655172415,
            "unit": "ns",
            "range": "± 117084.59786556425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3243790.033333333,
            "unit": "ns",
            "range": "± 66348.93983275004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3272104.7454545456,
            "unit": "ns",
            "range": "± 137782.71755775713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6794749.2,
            "unit": "ns",
            "range": "± 158116.71811908443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42536.36170212766,
            "unit": "ns",
            "range": "± 6096.103267708031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3673123.7885416667,
            "unit": "ns",
            "range": "± 64635.05695917936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1162140.9417067308,
            "unit": "ns",
            "range": "± 2944.6621554376106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729125.8141043527,
            "unit": "ns",
            "range": "± 1068.396267376252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942778.85625,
            "unit": "ns",
            "range": "± 12867.716100462389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625644.5793457031,
            "unit": "ns",
            "range": "± 3109.113695867498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577757.693359375,
            "unit": "ns",
            "range": "± 10503.66737266331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249451.77659574468,
            "unit": "ns",
            "range": "± 9609.080881039215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238823.73711340205,
            "unit": "ns",
            "range": "± 23059.59049206949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170241.26315789475,
            "unit": "ns",
            "range": "± 3751.0344179543813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3195547.6428571427,
            "unit": "ns",
            "range": "± 38372.78504077746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2894187.8666666667,
            "unit": "ns",
            "range": "± 34005.68016180042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21822.505154639177,
            "unit": "ns",
            "range": "± 4697.431869569157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84792.22448979592,
            "unit": "ns",
            "range": "± 18230.71267927959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93212.03488372093,
            "unit": "ns",
            "range": "± 2959.5464529362407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94431.11340206186,
            "unit": "ns",
            "range": "± 13664.939402442395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3849.670588235294,
            "unit": "ns",
            "range": "± 535.8146531936494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14207.376288659794,
            "unit": "ns",
            "range": "± 1998.3751746613418"
          }
        ]
      }
    ]
  }
}