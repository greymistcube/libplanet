window.BENCHMARK_DATA = {
  "lastUpdate": 1701238142080,
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
          "id": "ae984a4c9a197afcce3b5d05aed94398bb45a986",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:56:30+09:00",
          "tree_id": "a610211fe1df063f61634961f8c92f676c30a6ef",
          "url": "https://github.com/greymistcube/libplanet/commit/ae984a4c9a197afcce3b5d05aed94398bb45a986"
        },
        "date": 1701238125419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8294078.75,
            "unit": "ns",
            "range": "± 36283.82320269662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18842486.52631579,
            "unit": "ns",
            "range": "± 410826.9309951939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45613277.93333333,
            "unit": "ns",
            "range": "± 235058.62972958974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93653062.39285715,
            "unit": "ns",
            "range": "± 2205826.953503553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188101996.84615386,
            "unit": "ns",
            "range": "± 2039157.5224672174"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33644.40697674418,
            "unit": "ns",
            "range": "± 2399.1590555021176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217081.61956521738,
            "unit": "ns",
            "range": "± 16372.610008182952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208730.1098901099,
            "unit": "ns",
            "range": "± 11793.695721255815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190442.56666666668,
            "unit": "ns",
            "range": "± 13590.361053855682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3690212.933333333,
            "unit": "ns",
            "range": "± 60081.20058538238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3383344.714285714,
            "unit": "ns",
            "range": "± 57587.42291297851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12234.691176470587,
            "unit": "ns",
            "range": "± 564.3106283724574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59206.48351648352,
            "unit": "ns",
            "range": "± 6122.5613836814655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52971.456043956045,
            "unit": "ns",
            "range": "± 4962.243141770302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62795.6875,
            "unit": "ns",
            "range": "± 11357.38091223176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3203.802197802198,
            "unit": "ns",
            "range": "± 367.96099490692455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11304.865168539325,
            "unit": "ns",
            "range": "± 753.3196259799812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050466.8673469387,
            "unit": "ns",
            "range": "± 93477.17065532359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2241815.442105263,
            "unit": "ns",
            "range": "± 135585.5322361494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1484917.0412371133,
            "unit": "ns",
            "range": "± 117271.61319915242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6197677.333333333,
            "unit": "ns",
            "range": "± 224309.31852609757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2847949.5,
            "unit": "ns",
            "range": "± 59528.26347132734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2999906.88,
            "unit": "ns",
            "range": "± 104959.51101664228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3553307.152173913,
            "unit": "ns",
            "range": "± 86662.16711282784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3396198.4,
            "unit": "ns",
            "range": "± 158758.13867295123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12731470.49,
            "unit": "ns",
            "range": "± 2237766.4309376082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4329565.799107143,
            "unit": "ns",
            "range": "± 49711.789701336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1356569.3680989584,
            "unit": "ns",
            "range": "± 16005.309735910707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 878800.759390024,
            "unit": "ns",
            "range": "± 23184.03295642338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925355.6263020833,
            "unit": "ns",
            "range": "± 24217.80876252747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611750.1629557292,
            "unit": "ns",
            "range": "± 4954.500427546228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549811.7824358259,
            "unit": "ns",
            "range": "± 8732.430996077084"
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
          "id": "ae984a4c9a197afcce3b5d05aed94398bb45a986",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:56:30+09:00",
          "tree_id": "a610211fe1df063f61634961f8c92f676c30a6ef",
          "url": "https://github.com/greymistcube/libplanet/commit/ae984a4c9a197afcce3b5d05aed94398bb45a986"
        },
        "date": 1701238125419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8294078.75,
            "unit": "ns",
            "range": "± 36283.82320269662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18842486.52631579,
            "unit": "ns",
            "range": "± 410826.9309951939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45613277.93333333,
            "unit": "ns",
            "range": "± 235058.62972958974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93653062.39285715,
            "unit": "ns",
            "range": "± 2205826.953503553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188101996.84615386,
            "unit": "ns",
            "range": "± 2039157.5224672174"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33644.40697674418,
            "unit": "ns",
            "range": "± 2399.1590555021176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217081.61956521738,
            "unit": "ns",
            "range": "± 16372.610008182952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208730.1098901099,
            "unit": "ns",
            "range": "± 11793.695721255815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190442.56666666668,
            "unit": "ns",
            "range": "± 13590.361053855682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3690212.933333333,
            "unit": "ns",
            "range": "± 60081.20058538238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3383344.714285714,
            "unit": "ns",
            "range": "± 57587.42291297851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12234.691176470587,
            "unit": "ns",
            "range": "± 564.3106283724574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59206.48351648352,
            "unit": "ns",
            "range": "± 6122.5613836814655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52971.456043956045,
            "unit": "ns",
            "range": "± 4962.243141770302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62795.6875,
            "unit": "ns",
            "range": "± 11357.38091223176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3203.802197802198,
            "unit": "ns",
            "range": "± 367.96099490692455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11304.865168539325,
            "unit": "ns",
            "range": "± 753.3196259799812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050466.8673469387,
            "unit": "ns",
            "range": "± 93477.17065532359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2241815.442105263,
            "unit": "ns",
            "range": "± 135585.5322361494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1484917.0412371133,
            "unit": "ns",
            "range": "± 117271.61319915242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6197677.333333333,
            "unit": "ns",
            "range": "± 224309.31852609757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2847949.5,
            "unit": "ns",
            "range": "± 59528.26347132734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2999906.88,
            "unit": "ns",
            "range": "± 104959.51101664228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3553307.152173913,
            "unit": "ns",
            "range": "± 86662.16711282784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3396198.4,
            "unit": "ns",
            "range": "± 158758.13867295123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12731470.49,
            "unit": "ns",
            "range": "± 2237766.4309376082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4329565.799107143,
            "unit": "ns",
            "range": "± 49711.789701336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1356569.3680989584,
            "unit": "ns",
            "range": "± 16005.309735910707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 878800.759390024,
            "unit": "ns",
            "range": "± 23184.03295642338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925355.6263020833,
            "unit": "ns",
            "range": "± 24217.80876252747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611750.1629557292,
            "unit": "ns",
            "range": "± 4954.500427546228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549811.7824358259,
            "unit": "ns",
            "range": "± 8732.430996077084"
          }
        ]
      }
    ]
  }
}