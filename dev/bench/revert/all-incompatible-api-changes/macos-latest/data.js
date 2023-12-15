window.BENCHMARK_DATA = {
  "lastUpdate": 1702616802208,
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
          "id": "1f4871ef2e97be88a7680bdb95d7c790d6def685",
          "message": "Revert \"Added BlockHashType and TxIdType; refactored AddressType\"\n\nThis reverts commit e4c0db0113e283ef7c6ddec34289e6d9dd345b26.",
          "timestamp": "2023-12-15T13:52:20+09:00",
          "tree_id": "0ff2e84ad8519699dbabc9df3474a2991791b687",
          "url": "https://github.com/greymistcube/libplanet/commit/1f4871ef2e97be88a7680bdb95d7c790d6def685"
        },
        "date": 1702616787782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7537417,
            "unit": "ns",
            "range": "± 65879.33369643104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18734278.75,
            "unit": "ns",
            "range": "± 185187.48023317783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46187014.961538464,
            "unit": "ns",
            "range": "± 402802.2702039251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92595345.61538461,
            "unit": "ns",
            "range": "± 929099.9410829045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190392689.85714287,
            "unit": "ns",
            "range": "± 3216003.507310871"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47604.27659574468,
            "unit": "ns",
            "range": "± 16826.21641940233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221232.34444444443,
            "unit": "ns",
            "range": "± 20310.787338154947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206976.0987654321,
            "unit": "ns",
            "range": "± 10696.7460655156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183503.21739130435,
            "unit": "ns",
            "range": "± 4461.437466643986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3641467.1739130435,
            "unit": "ns",
            "range": "± 89114.14664536723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3331836.0625,
            "unit": "ns",
            "range": "± 63618.427549957305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12718.318181818182,
            "unit": "ns",
            "range": "± 924.5847970964824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55381.25,
            "unit": "ns",
            "range": "± 3490.235304233178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51129.17647058824,
            "unit": "ns",
            "range": "± 3972.052570554587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60562.1935483871,
            "unit": "ns",
            "range": "± 11968.632270174132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3455.195652173913,
            "unit": "ns",
            "range": "± 532.33064663189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12116.385416666666,
            "unit": "ns",
            "range": "± 1298.7702310448317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1158115.0408163266,
            "unit": "ns",
            "range": "± 107596.69179551258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471859.76119403,
            "unit": "ns",
            "range": "± 117287.16110548729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1701069.1494252873,
            "unit": "ns",
            "range": "± 92241.92605211034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7509021.964285715,
            "unit": "ns",
            "range": "± 402557.0125079926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2868784.86,
            "unit": "ns",
            "range": "± 104278.39236625297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2964414.6923076925,
            "unit": "ns",
            "range": "± 92045.49788502876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3516452.65625,
            "unit": "ns",
            "range": "± 106914.81573290301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3484580.606060606,
            "unit": "ns",
            "range": "± 163433.40828464273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14037298.510101011,
            "unit": "ns",
            "range": "± 2346894.8275069827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4268335.993229167,
            "unit": "ns",
            "range": "± 77492.92981287427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1349343.5574001735,
            "unit": "ns",
            "range": "± 28375.450931821113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 901488.8737444197,
            "unit": "ns",
            "range": "± 12800.524523739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2003468.2984375,
            "unit": "ns",
            "range": "± 23367.1888178081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 657380.9264973958,
            "unit": "ns",
            "range": "± 4233.9960460678885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564426.448828125,
            "unit": "ns",
            "range": "± 8363.184509423942"
          }
        ]
      }
    ]
  }
}