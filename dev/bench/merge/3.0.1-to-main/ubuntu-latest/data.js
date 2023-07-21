window.BENCHMARK_DATA = {
  "lastUpdate": 1689919617947,
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
          "id": "6bbafd31a9daab47402fd5d80d24b95c9187d413",
          "message": "Merge tag '3.0.1' into merge/3.0.1-to-main\n\nLibplanet 3.0.1",
          "timestamp": "2023-07-21T14:53:07+09:00",
          "tree_id": "9d84defa3b64351c0e86182649cfc86d69ca680d",
          "url": "https://github.com/greymistcube/libplanet/commit/6bbafd31a9daab47402fd5d80d24b95c9187d413"
        },
        "date": 1689919610284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282502.65789473685,
            "unit": "ns",
            "range": "± 6723.787407110451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268525.55319148937,
            "unit": "ns",
            "range": "± 10451.947719066966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235791.66666666666,
            "unit": "ns",
            "range": "± 1727.5617780472273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4239760.533333333,
            "unit": "ns",
            "range": "± 30021.453571610768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3937473.1818181816,
            "unit": "ns",
            "range": "± 94456.19962392062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20280.85106382979,
            "unit": "ns",
            "range": "± 1458.0349565661136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89442.68539325842,
            "unit": "ns",
            "range": "± 6441.011565802916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69525,
            "unit": "ns",
            "range": "± 927.7212224944876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84180.22916666667,
            "unit": "ns",
            "range": "± 12274.928353079931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4395.833333333333,
            "unit": "ns",
            "range": "± 656.6127861054739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18143.75,
            "unit": "ns",
            "range": "± 1438.1137133869418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420370.4680851065,
            "unit": "ns",
            "range": "± 55111.81582882246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2610424.574074074,
            "unit": "ns",
            "range": "± 109971.7622947427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716163.49,
            "unit": "ns",
            "range": "± 161851.6285558215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4721701.94117647,
            "unit": "ns",
            "range": "± 89083.07822158944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6412227.683894231,
            "unit": "ns",
            "range": "± 21584.4695476919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875905.4579427084,
            "unit": "ns",
            "range": "± 17170.135526094164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372342.4893229166,
            "unit": "ns",
            "range": "± 3547.673936722366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583151.512019231,
            "unit": "ns",
            "range": "± 3212.280511352767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813027.0235677083,
            "unit": "ns",
            "range": "± 1704.3102051863852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728705.2553385417,
            "unit": "ns",
            "range": "± 2140.493432483656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3166693.214285714,
            "unit": "ns",
            "range": "± 27643.39503856648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3306111.5384615385,
            "unit": "ns",
            "range": "± 24305.744810007996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4262293.357142857,
            "unit": "ns",
            "range": "± 43831.767886926566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3719792.0833333335,
            "unit": "ns",
            "range": "± 92180.07247297645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6294007.714285715,
            "unit": "ns",
            "range": "± 105252.15465540075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7478522.066666666,
            "unit": "ns",
            "range": "± 12690.141733232287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19470752.333333332,
            "unit": "ns",
            "range": "± 341910.90311902406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50338683.071428575,
            "unit": "ns",
            "range": "± 225736.96910596712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98359030.42105263,
            "unit": "ns",
            "range": "± 2142298.1576171187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202033546.85714287,
            "unit": "ns",
            "range": "± 2564968.1963414387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46269.318181818184,
            "unit": "ns",
            "range": "± 2559.335310374549"
          }
        ]
      }
    ]
  }
}