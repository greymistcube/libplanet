window.BENCHMARK_DATA = {
  "lastUpdate": 1704594451884,
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
          "id": "47423efb53fe7d199ca1c6a6c65d71408d84ba05",
          "message": "Removed arguments to redirect to legacy by default; removed GetAccountState()",
          "timestamp": "2024-01-06T19:37:09+09:00",
          "tree_id": "8d0db7b7b7b68a376e7c8289e76431a2128dd358",
          "url": "https://github.com/greymistcube/libplanet/commit/47423efb53fe7d199ca1c6a6c65d71408d84ba05"
        },
        "date": 1704594444952,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744386.4051339286,
            "unit": "ns",
            "range": "± 10012.126336890404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216855.6219308036,
            "unit": "ns",
            "range": "± 2032.262151451629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776177.6052734375,
            "unit": "ns",
            "range": "± 12071.106468664477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1907017.286733774,
            "unit": "ns",
            "range": "± 2333.5212999818623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615797.1775251116,
            "unit": "ns",
            "range": "± 1367.9540189110971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573822.7631835938,
            "unit": "ns",
            "range": "± 2235.28846002001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2348892.3902439023,
            "unit": "ns",
            "range": "± 82991.46536387884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510203.5454545454,
            "unit": "ns",
            "range": "± 59796.16393770174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3099263.2352941176,
            "unit": "ns",
            "range": "± 99737.69694130238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3153751,
            "unit": "ns",
            "range": "± 85873.54981778552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13726098.346153846,
            "unit": "ns",
            "range": "± 978622.0448861404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39115.104166666664,
            "unit": "ns",
            "range": "± 4992.10974592415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203229.68085106384,
            "unit": "ns",
            "range": "± 7855.3842296815565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186727.95238095237,
            "unit": "ns",
            "range": "± 6819.142839891819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168579.67647058822,
            "unit": "ns",
            "range": "± 2360.071297527209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169869.5,
            "unit": "ns",
            "range": "± 31886.01203023526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2794981,
            "unit": "ns",
            "range": "± 51210.46692815835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14953.641414141413,
            "unit": "ns",
            "range": "± 2998.1416251217647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61070.15517241379,
            "unit": "ns",
            "range": "± 4996.245778553263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51125.38461538462,
            "unit": "ns",
            "range": "± 805.6799962828023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61463.38144329897,
            "unit": "ns",
            "range": "± 9172.373170108996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3106.755319148936,
            "unit": "ns",
            "range": "± 364.8533270236406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11813.239130434782,
            "unit": "ns",
            "range": "± 869.4643970816987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5593427.333333333,
            "unit": "ns",
            "range": "± 20458.83936250065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14348881.8,
            "unit": "ns",
            "range": "± 107028.81701952984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36439148.166666664,
            "unit": "ns",
            "range": "± 258896.63411198521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75328742.13333334,
            "unit": "ns",
            "range": "± 966869.3190651735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150720162,
            "unit": "ns",
            "range": "± 1091427.6223683234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006659.4278350516,
            "unit": "ns",
            "range": "± 104700.46173710738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1961494.925531915,
            "unit": "ns",
            "range": "± 111061.4335895809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1582767.5112359552,
            "unit": "ns",
            "range": "± 119969.87398722745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12745358.366666667,
            "unit": "ns",
            "range": "± 990903.609233925"
          }
        ]
      }
    ]
  }
}