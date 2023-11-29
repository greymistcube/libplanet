window.BENCHMARK_DATA = {
  "lastUpdate": 1701238487959,
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
          "id": "945df40952c9f9c6e38cf5e702e98c4ac1b473a5",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:58:08+09:00",
          "tree_id": "2e82a3a795c60b593810ee928c8bdf58fe3b3ca0",
          "url": "https://github.com/greymistcube/libplanet/commit/945df40952c9f9c6e38cf5e702e98c4ac1b473a5"
        },
        "date": 1701238469241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9688191.205882354,
            "unit": "ns",
            "range": "± 391502.36566326366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23678941.666666668,
            "unit": "ns",
            "range": "± 659128.5092713769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59714541.43333333,
            "unit": "ns",
            "range": "± 730642.6161042334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123577596.21428572,
            "unit": "ns",
            "range": "± 1090171.7891641192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242020373.2142857,
            "unit": "ns",
            "range": "± 2196189.1096429597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53575.86956521739,
            "unit": "ns",
            "range": "± 12855.369523556892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250235.36842105264,
            "unit": "ns",
            "range": "± 30152.6937578085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253643.16842105263,
            "unit": "ns",
            "range": "± 35087.934122913044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239456.4387755102,
            "unit": "ns",
            "range": "± 41937.8689297316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4223592.456521739,
            "unit": "ns",
            "range": "± 78410.00778627355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3990648.6170212766,
            "unit": "ns",
            "range": "± 457988.6274753266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18652.5625,
            "unit": "ns",
            "range": "± 4169.715685909027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97028.32558139534,
            "unit": "ns",
            "range": "± 5861.0276717671495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82753.59340659341,
            "unit": "ns",
            "range": "± 14747.609789746362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85600.91304347826,
            "unit": "ns",
            "range": "± 19671.61237722592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5753.510416666667,
            "unit": "ns",
            "range": "± 1164.2101274868653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16584.91304347826,
            "unit": "ns",
            "range": "± 2786.09275680088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1259899.8092783506,
            "unit": "ns",
            "range": "± 130541.39641798503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2630723.3103448274,
            "unit": "ns",
            "range": "± 114965.32543858711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1806389.1649484537,
            "unit": "ns",
            "range": "± 182291.46803509255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7882648.270114942,
            "unit": "ns",
            "range": "± 734675.3690456521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3631325.1,
            "unit": "ns",
            "range": "± 64171.01453794051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3027559.0631578946,
            "unit": "ns",
            "range": "± 173128.73597964857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4196765.489361702,
            "unit": "ns",
            "range": "± 463527.698750478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3993235.304347826,
            "unit": "ns",
            "range": "± 293292.60142117605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15778549.469387755,
            "unit": "ns",
            "range": "± 2977894.6437160587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5120963.013143382,
            "unit": "ns",
            "range": "± 273869.98111854435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400524.1301682692,
            "unit": "ns",
            "range": "± 64892.44171471821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 881274.8054036458,
            "unit": "ns",
            "range": "± 14980.456063528432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953309.5606971155,
            "unit": "ns",
            "range": "± 16601.470880626373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628691.9112025669,
            "unit": "ns",
            "range": "± 6355.8965534420695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558512.3996394231,
            "unit": "ns",
            "range": "± 7868.039772348848"
          }
        ]
      }
    ]
  }
}