window.BENCHMARK_DATA = {
  "lastUpdate": 1689189980469,
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
          "id": "3ce762868d821b2401cedc45be76202d31c80175",
          "message": "RocksDBStore Concat optimization",
          "timestamp": "2023-07-13T04:11:48+09:00",
          "tree_id": "ee5cdbe513ebd68a9a69d4ef74a3ade03e5b40a4",
          "url": "https://github.com/greymistcube/libplanet/commit/3ce762868d821b2401cedc45be76202d31c80175"
        },
        "date": 1689189972153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293575.3461538461,
            "unit": "ns",
            "range": "± 8039.89917321011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275132.6170212766,
            "unit": "ns",
            "range": "± 10166.259310674597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240537.69444444444,
            "unit": "ns",
            "range": "± 7731.319062542005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4294249.714285715,
            "unit": "ns",
            "range": "± 28716.38021282405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867602.0714285714,
            "unit": "ns",
            "range": "± 27135.956970168074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19574.31914893617,
            "unit": "ns",
            "range": "± 1376.1119469712908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91253.05633802817,
            "unit": "ns",
            "range": "± 4477.248788158459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75064,
            "unit": "ns",
            "range": "± 3572.553591853685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94816.80612244898,
            "unit": "ns",
            "range": "± 11667.227240329552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5501.031578947369,
            "unit": "ns",
            "range": "± 661.1683799545589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17063.510416666668,
            "unit": "ns",
            "range": "± 1484.2222134295528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417158.0206185568,
            "unit": "ns",
            "range": "± 83725.14883421868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2632450.409090909,
            "unit": "ns",
            "range": "± 61727.02007391599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1842147.5257731958,
            "unit": "ns",
            "range": "± 126394.49442989768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4936975.416666667,
            "unit": "ns",
            "range": "± 162670.29094202875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6018009.1515625,
            "unit": "ns",
            "range": "± 28126.5010446525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2012834.0513392857,
            "unit": "ns",
            "range": "± 2603.4552786088157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354705.2451171875,
            "unit": "ns",
            "range": "± 917.7246429723305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601471.984114583,
            "unit": "ns",
            "range": "± 2985.6330769170004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821419.8282001202,
            "unit": "ns",
            "range": "± 344.9836192940262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736622.9541713169,
            "unit": "ns",
            "range": "± 1812.4744237224456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3336199.44,
            "unit": "ns",
            "range": "± 86825.22868243231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505994.6,
            "unit": "ns",
            "range": "± 91063.89246201447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4371204.933333334,
            "unit": "ns",
            "range": "± 62833.63335196783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3786133.861111111,
            "unit": "ns",
            "range": "± 86791.7581034884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6419121.692307692,
            "unit": "ns",
            "range": "± 81148.15551753124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7692555,
            "unit": "ns",
            "range": "± 135207.6664864618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19434440.4,
            "unit": "ns",
            "range": "± 109995.72109586808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50345507.78571428,
            "unit": "ns",
            "range": "± 584074.3175425511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99947275.2,
            "unit": "ns",
            "range": "± 786649.9677609567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201640225.2142857,
            "unit": "ns",
            "range": "± 563227.5266821474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47302.925531914894,
            "unit": "ns",
            "range": "± 3211.055868416773"
          }
        ]
      }
    ]
  }
}