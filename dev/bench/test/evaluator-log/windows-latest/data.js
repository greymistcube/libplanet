window.BENCHMARK_DATA = {
  "lastUpdate": 1702438080739,
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
          "id": "08a91d1f1a64abf46de24658a987d2f2bf94850d",
          "message": "Added trie inconsistent log",
          "timestamp": "2023-12-13T12:14:14+09:00",
          "tree_id": "f3274a42fab16eeb412f7c65652d5dd7e3c42c11",
          "url": "https://github.com/greymistcube/libplanet/commit/08a91d1f1a64abf46de24658a987d2f2bf94850d"
        },
        "date": 1702438064251,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050169,
            "unit": "ns",
            "range": "± 122422.17952394877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1854336.7816091955,
            "unit": "ns",
            "range": "± 95388.7018746742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1436647.311827957,
            "unit": "ns",
            "range": "± 112179.61974033648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5600011.333333333,
            "unit": "ns",
            "range": "± 282938.27466157434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35286.48648648649,
            "unit": "ns",
            "range": "± 1644.1114787657812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4991792.307692308,
            "unit": "ns",
            "range": "± 28526.31713402151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13282480,
            "unit": "ns",
            "range": "± 222011.64448225297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34153333.333333336,
            "unit": "ns",
            "range": "± 249932.38133162184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66525520,
            "unit": "ns",
            "range": "± 1176319.0518368245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133400893.33333333,
            "unit": "ns",
            "range": "± 1621590.9742624753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288674.8798076925,
            "unit": "ns",
            "range": "± 12203.206574148473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048673.7723214286,
            "unit": "ns",
            "range": "± 1690.639757423331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720810.4557291666,
            "unit": "ns",
            "range": "± 1393.2602991487147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921919.4791666667,
            "unit": "ns",
            "range": "± 9203.579949063229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607947.6422991072,
            "unit": "ns",
            "range": "± 1241.9906983598064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567736.5885416666,
            "unit": "ns",
            "range": "± 2642.33319110019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119838.2352941176,
            "unit": "ns",
            "range": "± 65482.78984961174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489765.909090909,
            "unit": "ns",
            "range": "± 86182.07050134338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2780115.3846153845,
            "unit": "ns",
            "range": "± 73550.91674375074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2674130,
            "unit": "ns",
            "range": "± 139532.02109692385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6352843.75,
            "unit": "ns",
            "range": "± 293858.62321277545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175627.02702702704,
            "unit": "ns",
            "range": "± 8751.333319898851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166316.04938271604,
            "unit": "ns",
            "range": "± 7772.796420692547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140455.55555555556,
            "unit": "ns",
            "range": "± 3960.62364818215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838063.6363636362,
            "unit": "ns",
            "range": "± 68708.90664836585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486181.8181818184,
            "unit": "ns",
            "range": "± 60886.11841449917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11548.91304347826,
            "unit": "ns",
            "range": "± 1577.8337190916932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52916.12903225807,
            "unit": "ns",
            "range": "± 6018.9066304975995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44142.72727272727,
            "unit": "ns",
            "range": "± 1735.2398217702475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57054.08163265306,
            "unit": "ns",
            "range": "± 14412.095209342891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652.577319587629,
            "unit": "ns",
            "range": "± 720.5456242068046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9628.72340425532,
            "unit": "ns",
            "range": "± 1432.166742591845"
          }
        ]
      }
    ]
  }
}