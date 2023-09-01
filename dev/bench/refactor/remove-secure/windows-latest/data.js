window.BENCHMARK_DATA = {
  "lastUpdate": 1693553582394,
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
          "id": "081800f6ea9ad2fa55fb010ab82f519a554ae616",
          "message": "Cleanup",
          "timestamp": "2023-09-01T16:17:44+09:00",
          "tree_id": "830eaf91878beea538b2c3f121b1353419b4be6d",
          "url": "https://github.com/greymistcube/libplanet/commit/081800f6ea9ad2fa55fb010ab82f519a554ae616"
        },
        "date": 1693553552111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287052,
            "unit": "ns",
            "range": "± 91735.58784227459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2359440.909090909,
            "unit": "ns",
            "range": "± 73822.0434658911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623825.5319148935,
            "unit": "ns",
            "range": "± 111507.12662134394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4258968.181818182,
            "unit": "ns",
            "range": "± 199708.62402632867"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43906.944444444445,
            "unit": "ns",
            "range": "± 2091.183800389376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7148178.571428572,
            "unit": "ns",
            "range": "± 25189.655342297487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18035433.333333332,
            "unit": "ns",
            "range": "± 104428.25744203985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47004292.85714286,
            "unit": "ns",
            "range": "± 241943.30061873115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93784973.33333333,
            "unit": "ns",
            "range": "± 405969.6425432161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185921553.33333334,
            "unit": "ns",
            "range": "± 1327897.8536805923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4288007.001201923,
            "unit": "ns",
            "range": "± 4015.8521946432807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1407759.1536458333,
            "unit": "ns",
            "range": "± 1930.015327831348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1021354.921875,
            "unit": "ns",
            "range": "± 1273.849008814879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2551677.6953125,
            "unit": "ns",
            "range": "± 3960.1711828490334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813014.2578125,
            "unit": "ns",
            "range": "± 854.1367633063089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720688.2747395834,
            "unit": "ns",
            "range": "± 845.1792891530813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2958636.8421052634,
            "unit": "ns",
            "range": "± 62146.92457328945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3084766.6666666665,
            "unit": "ns",
            "range": "± 77220.11827669437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3916540,
            "unit": "ns",
            "range": "± 87422.66296561778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3369715,
            "unit": "ns",
            "range": "± 117788.1530545411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5558182.608695652,
            "unit": "ns",
            "range": "± 121046.35720617691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244213.9534883721,
            "unit": "ns",
            "range": "± 8917.173943612534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240615,
            "unit": "ns",
            "range": "± 8186.528959837399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215368.94736842104,
            "unit": "ns",
            "range": "± 12372.870929998096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3788016.6666666665,
            "unit": "ns",
            "range": "± 54726.236417105756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3500793.3333333335,
            "unit": "ns",
            "range": "± 42263.34897599416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19526.262626262625,
            "unit": "ns",
            "range": "± 2151.676416125668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82492.70833333333,
            "unit": "ns",
            "range": "± 6392.944215743951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65420,
            "unit": "ns",
            "range": "± 1985.061860052551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77556.56565656565,
            "unit": "ns",
            "range": "± 13135.146508479325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4435.555555555556,
            "unit": "ns",
            "range": "± 455.5059197708819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18117.204301075268,
            "unit": "ns",
            "range": "± 1886.3136153973635"
          }
        ]
      }
    ]
  }
}