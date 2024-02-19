window.BENCHMARK_DATA = {
  "lastUpdate": 1708327919525,
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
          "id": "2e3cefe3e9af512f442b623c2eba6bf0e057cb53",
          "message": "Remove fee processing from ActionEvaluator",
          "timestamp": "2024-02-19T16:07:00+09:00",
          "tree_id": "2fa80e49b49aae078f536a6ec10df13691425a4e",
          "url": "https://github.com/greymistcube/libplanet/commit/2e3cefe3e9af512f442b623c2eba6bf0e057cb53"
        },
        "date": 1708327893231,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10721352.3,
            "unit": "ns",
            "range": "± 164634.48561942126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27001744.9,
            "unit": "ns",
            "range": "± 445628.19963360234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70678840.96153846,
            "unit": "ns",
            "range": "± 867319.2611938058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137132892,
            "unit": "ns",
            "range": "± 3875273.0493784565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218127875.02222222,
            "unit": "ns",
            "range": "± 13759518.794591278"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52786.38947368421,
            "unit": "ns",
            "range": "± 13435.236011589897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316536.097826087,
            "unit": "ns",
            "range": "± 21234.997294824505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298727.1721311475,
            "unit": "ns",
            "range": "± 12617.730502116603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304211.275862069,
            "unit": "ns",
            "range": "± 19328.29094376262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5366404.615384615,
            "unit": "ns",
            "range": "± 79384.95003414109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4936891.833333333,
            "unit": "ns",
            "range": "± 125575.0459002129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22324.510638297874,
            "unit": "ns",
            "range": "± 2341.6917179757343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96997.60989010989,
            "unit": "ns",
            "range": "± 8196.072580409811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101751.25555555556,
            "unit": "ns",
            "range": "± 7997.8544377923545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100186.0625,
            "unit": "ns",
            "range": "± 15509.143119166496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7239.127659574468,
            "unit": "ns",
            "range": "± 1005.4739345155409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21469.82978723404,
            "unit": "ns",
            "range": "± 2484.761192905637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1303613.0957446808,
            "unit": "ns",
            "range": "± 130666.37878842019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2650232.074468085,
            "unit": "ns",
            "range": "± 186498.09132577118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2095377.940860215,
            "unit": "ns",
            "range": "± 189060.78268615453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20577685.29411765,
            "unit": "ns",
            "range": "± 1926911.5576993732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3454940.1014492754,
            "unit": "ns",
            "range": "± 166767.0366355718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3441123.3,
            "unit": "ns",
            "range": "± 64333.600299199345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4254760.873684211,
            "unit": "ns",
            "range": "± 371495.77570137003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5238001.823529412,
            "unit": "ns",
            "range": "± 248245.5305093405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31164827.457894735,
            "unit": "ns",
            "range": "± 4159698.577085673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7036683.754734849,
            "unit": "ns",
            "range": "± 222199.6136948865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906342.3005719867,
            "unit": "ns",
            "range": "± 54387.349055159204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1252568.904296875,
            "unit": "ns",
            "range": "± 23402.117647878058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2987398.988692434,
            "unit": "ns",
            "range": "± 62910.26104331161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893044.1007952009,
            "unit": "ns",
            "range": "± 11704.75254607571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791277.7348257211,
            "unit": "ns",
            "range": "± 6829.633080624626"
          }
        ]
      }
    ]
  }
}