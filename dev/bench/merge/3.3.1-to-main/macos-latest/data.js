window.BENCHMARK_DATA = {
  "lastUpdate": 1694145198746,
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
          "id": "56c2868a1338e43d8ba89ae90ea44bca551c71b7",
          "message": "Merge tag '3.3.1' into merge/3.3.1-to-main\n\nLibplanet 3.3.1",
          "timestamp": "2023-09-08T12:32:53+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/greymistcube/libplanet/commit/56c2868a1338e43d8ba89ae90ea44bca551c71b7"
        },
        "date": 1694145183040,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8941330.514705881,
            "unit": "ns",
            "range": "± 426337.43027522974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20843861.568181816,
            "unit": "ns",
            "range": "± 1137474.6265727524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51127100.64444444,
            "unit": "ns",
            "range": "± 1931281.0418813177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102766253.4,
            "unit": "ns",
            "range": "± 1718517.5155066815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222373896.23076922,
            "unit": "ns",
            "range": "± 6025818.193528262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62291.42391304348,
            "unit": "ns",
            "range": "± 12482.193976488052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337365.72826086957,
            "unit": "ns",
            "range": "± 37550.50108797901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312406.1489361702,
            "unit": "ns",
            "range": "± 37483.56828125971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295617.14285714284,
            "unit": "ns",
            "range": "± 24091.736025990987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4151673.4310344825,
            "unit": "ns",
            "range": "± 120788.44815536289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830257.397959184,
            "unit": "ns",
            "range": "± 239311.14398088097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20695.75,
            "unit": "ns",
            "range": "± 2909.110088711281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89335.19587628866,
            "unit": "ns",
            "range": "± 14356.4542371477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89481.21875,
            "unit": "ns",
            "range": "± 20196.072675387644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89068.59574468085,
            "unit": "ns",
            "range": "± 14573.787107960432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6262.01030927835,
            "unit": "ns",
            "range": "± 1208.1299038083382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18008.695652173912,
            "unit": "ns",
            "range": "± 2665.050112879064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1792203.1304347827,
            "unit": "ns",
            "range": "± 276099.94213219313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3409767.7954545454,
            "unit": "ns",
            "range": "± 600591.1932097848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504496.9775280897,
            "unit": "ns",
            "range": "± 758501.213896763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6005888.055555556,
            "unit": "ns",
            "range": "± 577281.2769679961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3347981.0606060605,
            "unit": "ns",
            "range": "± 208741.9109171985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564991.4583333335,
            "unit": "ns",
            "range": "± 227064.06659841354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4543598,
            "unit": "ns",
            "range": "± 190233.76390558068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3917651.9494949495,
            "unit": "ns",
            "range": "± 288149.58994911716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6902706.314606742,
            "unit": "ns",
            "range": "± 379184.2011524872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5940686.334142736,
            "unit": "ns",
            "range": "± 198196.90381604343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1731752.1334134615,
            "unit": "ns",
            "range": "± 13444.26763598088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1063408.6838541667,
            "unit": "ns",
            "range": "± 11154.689605631078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3085558.9408933083,
            "unit": "ns",
            "range": "± 279904.5731866696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820710.7179782006,
            "unit": "ns",
            "range": "± 37092.72641298396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792016.8888221154,
            "unit": "ns",
            "range": "± 10779.80816122261"
          }
        ]
      }
    ]
  }
}