window.BENCHMARK_DATA = {
  "lastUpdate": 1694659508497,
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
          "id": "80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0",
          "message": "Initial implementation of AccountDiff",
          "timestamp": "2023-09-14T11:31:17+09:00",
          "tree_id": "c9d18aa7f1110322223d748a09b0a9fa834f95e2",
          "url": "https://github.com/greymistcube/libplanet/commit/80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0"
        },
        "date": 1694659501158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378311.7777777778,
            "unit": "ns",
            "range": "± 68803.44516555838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2650162.4838709678,
            "unit": "ns",
            "range": "± 69550.10885295627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1742057.8481012657,
            "unit": "ns",
            "range": "± 87510.74837780386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4600287.105263158,
            "unit": "ns",
            "range": "± 99861.35374212851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279555.5,
            "unit": "ns",
            "range": "± 7785.927529845111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270439.8888888889,
            "unit": "ns",
            "range": "± 8819.444299882514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234103.10344827586,
            "unit": "ns",
            "range": "± 6659.723215745895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4409882.642857143,
            "unit": "ns",
            "range": "± 48110.086346287644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4027948.4,
            "unit": "ns",
            "range": "± 43513.69301856928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19446.893617021276,
            "unit": "ns",
            "range": "± 1288.7237536773166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86478.07042253521,
            "unit": "ns",
            "range": "± 4227.340509195362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74592.05714285714,
            "unit": "ns",
            "range": "± 2415.9163398893884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87697.9693877551,
            "unit": "ns",
            "range": "± 12752.136240245196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5388.9795918367345,
            "unit": "ns",
            "range": "± 599.512843118268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19685.827956989247,
            "unit": "ns",
            "range": "± 1405.0553263410934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47764.14666666667,
            "unit": "ns",
            "range": "± 2409.2187905835576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7986635.642857143,
            "unit": "ns",
            "range": "± 59734.265390860164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21949237.533333335,
            "unit": "ns",
            "range": "± 244417.4215756627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55675034.333333336,
            "unit": "ns",
            "range": "± 980581.6485731215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107690261.35714285,
            "unit": "ns",
            "range": "± 1043420.1191778748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223557475.85714287,
            "unit": "ns",
            "range": "± 2709360.0576676875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3509314.947368421,
            "unit": "ns",
            "range": "± 74070.15040072461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3817485.3,
            "unit": "ns",
            "range": "± 111753.67535393988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4499895.75,
            "unit": "ns",
            "range": "± 127213.76259422417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4193616.933333333,
            "unit": "ns",
            "range": "± 76968.708949497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6269722.944444444,
            "unit": "ns",
            "range": "± 126520.51345438587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5006363.415264423,
            "unit": "ns",
            "range": "± 12121.502983091255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590765.7559344952,
            "unit": "ns",
            "range": "± 935.4061056018484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1099393.6608072917,
            "unit": "ns",
            "range": "± 1667.1987950910896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2702696.5231584823,
            "unit": "ns",
            "range": "± 2391.1690992290946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826071.5979817709,
            "unit": "ns",
            "range": "± 558.6459127031201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759332.3154947917,
            "unit": "ns",
            "range": "± 393.99121499251584"
          }
        ]
      }
    ]
  }
}