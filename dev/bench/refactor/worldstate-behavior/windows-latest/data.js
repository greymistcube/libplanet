window.BENCHMARK_DATA = {
  "lastUpdate": 1706235132067,
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
        "date": 1706235109574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993686.3636363636,
            "unit": "ns",
            "range": "± 119312.28998617022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1751852.380952381,
            "unit": "ns",
            "range": "± 75379.75653882501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571620.618556701,
            "unit": "ns",
            "range": "± 139684.1712415789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10937948.913043479,
            "unit": "ns",
            "range": "± 963197.2743625601"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34780.32786885246,
            "unit": "ns",
            "range": "± 1572.5583902387798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5045661.538461538,
            "unit": "ns",
            "range": "± 37830.02640014804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13179042.857142856,
            "unit": "ns",
            "range": "± 95724.71519362749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33018750,
            "unit": "ns",
            "range": "± 552145.5671357801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66760221.428571425,
            "unit": "ns",
            "range": "± 398959.1692595418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130813080,
            "unit": "ns",
            "range": "± 1203577.1535599323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350585.8333333335,
            "unit": "ns",
            "range": "± 5761.2345352424845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061523.2840401786,
            "unit": "ns",
            "range": "± 2173.8384071665027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738153.2924107143,
            "unit": "ns",
            "range": "± 1973.68584100418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925606.6276041667,
            "unit": "ns",
            "range": "± 3070.677337184186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610429.4921875,
            "unit": "ns",
            "range": "± 776.3096506574389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582315.1157924107,
            "unit": "ns",
            "range": "± 1153.9034286526175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166468.1818181816,
            "unit": "ns",
            "range": "± 68301.10016750029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2326007.6923076925,
            "unit": "ns",
            "range": "± 24222.078824165827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2783980,
            "unit": "ns",
            "range": "± 49449.34204386777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2805458.6666666665,
            "unit": "ns",
            "range": "± 137649.7740481091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12216906.593406593,
            "unit": "ns",
            "range": "± 1462242.7880031262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171716.45569620252,
            "unit": "ns",
            "range": "± 7881.891455601491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162919.31818181818,
            "unit": "ns",
            "range": "± 8976.62171759594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148382.22222222222,
            "unit": "ns",
            "range": "± 4866.223516561001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2820064.285714286,
            "unit": "ns",
            "range": "± 43065.04217045255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519542.8571428573,
            "unit": "ns",
            "range": "± 34159.86093211005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11417.777777777777,
            "unit": "ns",
            "range": "± 1438.4431173139296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54731.52173913043,
            "unit": "ns",
            "range": "± 5303.801857383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44092.307692307695,
            "unit": "ns",
            "range": "± 1512.819712253042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56865.30612244898,
            "unit": "ns",
            "range": "± 13864.12043630368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2438.144329896907,
            "unit": "ns",
            "range": "± 471.5761026796806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9974.725274725275,
            "unit": "ns",
            "range": "± 1356.5146029924883"
          }
        ]
      }
    ]
  }
}