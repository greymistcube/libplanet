window.BENCHMARK_DATA = {
  "lastUpdate": 1688363455762,
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
          "id": "40e474810f4076eb8ae7203ff0398dd16bf6761c",
          "message": "Removed unnecessary test code",
          "timestamp": "2023-07-03T14:32:26+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/40e474810f4076eb8ae7203ff0398dd16bf6761c"
        },
        "date": 1688363435828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8061322.5,
            "unit": "ns",
            "range": "± 101077.8210099297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20911215.060606062,
            "unit": "ns",
            "range": "± 977894.6534662991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52097632.21428572,
            "unit": "ns",
            "range": "± 1459158.7053601674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102036687.17857143,
            "unit": "ns",
            "range": "± 2706303.9264501887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222012230.4347826,
            "unit": "ns",
            "range": "± 8438419.324575668"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72191.46590909091,
            "unit": "ns",
            "range": "± 10792.940554057646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323316.45,
            "unit": "ns",
            "range": "± 32231.321907839396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298053.35164835164,
            "unit": "ns",
            "range": "± 18674.420139963073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287610.0416666667,
            "unit": "ns",
            "range": "± 21179.751216627774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4232494,
            "unit": "ns",
            "range": "± 126438.7706097712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3772020.95,
            "unit": "ns",
            "range": "± 85868.71181449958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18817.011494252874,
            "unit": "ns",
            "range": "± 3419.7219882046743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95819.47422680413,
            "unit": "ns",
            "range": "± 17847.00964044396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97550.09375,
            "unit": "ns",
            "range": "± 16232.170705490102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104826.6649484536,
            "unit": "ns",
            "range": "± 16983.83266133831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5029.298969072165,
            "unit": "ns",
            "range": "± 790.3716710740753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15889.010869565218,
            "unit": "ns",
            "range": "± 1371.8817548648658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655119.8541666667,
            "unit": "ns",
            "range": "± 188231.95847598466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3075754.1075268816,
            "unit": "ns",
            "range": "± 197753.20871872985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2183255.922222222,
            "unit": "ns",
            "range": "± 228236.20757620636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6549685.239583333,
            "unit": "ns",
            "range": "± 623761.8626229884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3629608.1666666665,
            "unit": "ns",
            "range": "± 386130.70130723924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745822.2688172045,
            "unit": "ns",
            "range": "± 336911.2567365265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4613652.666666667,
            "unit": "ns",
            "range": "± 235803.1900737814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3854826.138297872,
            "unit": "ns",
            "range": "± 218746.24042620466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7028987.607142857,
            "unit": "ns",
            "range": "± 264807.9295508473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6811682.563392857,
            "unit": "ns",
            "range": "± 217305.13896876495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2082878.821875,
            "unit": "ns",
            "range": "± 66561.34554277362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403315.9583333333,
            "unit": "ns",
            "range": "± 13863.011849956072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3035445.3910030243,
            "unit": "ns",
            "range": "± 172000.5108245978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870963.831624349,
            "unit": "ns",
            "range": "± 3951.60988735502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790300.0940867456,
            "unit": "ns",
            "range": "± 43129.703050240154"
          }
        ]
      }
    ]
  }
}