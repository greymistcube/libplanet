window.BENCHMARK_DATA = {
  "lastUpdate": 1702821273016,
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
          "id": "9191997b8ad9ba2908b17b5e53132722c0540cdd",
          "message": "Added account state queries",
          "timestamp": "2023-12-17T22:33:47+09:00",
          "tree_id": "ddd3bedabc865246b56b66d0c27114b6723994e3",
          "url": "https://github.com/greymistcube/libplanet/commit/9191997b8ad9ba2908b17b5e53132722c0540cdd"
        },
        "date": 1702821259734,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7599669.692307692,
            "unit": "ns",
            "range": "± 33835.678059273014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18482799.42857143,
            "unit": "ns",
            "range": "± 222863.13032354607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46130728.14285714,
            "unit": "ns",
            "range": "± 342020.3913342026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94526498.9,
            "unit": "ns",
            "range": "± 1953528.8439534209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188052708.30769232,
            "unit": "ns",
            "range": "± 1961854.0787193878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34173.04494382023,
            "unit": "ns",
            "range": "± 2778.389571603209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222945.96666666667,
            "unit": "ns",
            "range": "± 19046.89435149675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215410.61956521738,
            "unit": "ns",
            "range": "± 16883.945835128972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197303.94565217392,
            "unit": "ns",
            "range": "± 19517.141978194806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3684149.3421052634,
            "unit": "ns",
            "range": "± 74090.64095586879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3421818.4285714286,
            "unit": "ns",
            "range": "± 56483.83343075226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12092.103448275862,
            "unit": "ns",
            "range": "± 778.5211537578386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59026.62087912088,
            "unit": "ns",
            "range": "± 5180.702575338096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51504.04,
            "unit": "ns",
            "range": "± 2597.2004909652765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59744.71875,
            "unit": "ns",
            "range": "± 10889.313752678647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3127.9767441860463,
            "unit": "ns",
            "range": "± 183.59994724747327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12274.854838709678,
            "unit": "ns",
            "range": "± 1142.0345940580107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046340.0204081633,
            "unit": "ns",
            "range": "± 95126.50290951201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2206384.9620253164,
            "unit": "ns",
            "range": "± 114306.12198866814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567449.4948453608,
            "unit": "ns",
            "range": "± 130447.87081644626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7062856.825581395,
            "unit": "ns",
            "range": "± 420780.16707079025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2918255.4857142856,
            "unit": "ns",
            "range": "± 139829.86045043007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3277696.714285714,
            "unit": "ns",
            "range": "± 47797.52129303612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3535994,
            "unit": "ns",
            "range": "± 60946.97325599251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3411719.9166666665,
            "unit": "ns",
            "range": "± 134218.9776645317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14190971.91919192,
            "unit": "ns",
            "range": "± 2502619.359453785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4223976.022836538,
            "unit": "ns",
            "range": "± 45430.93396217473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1333271.323404948,
            "unit": "ns",
            "range": "± 7473.808919981012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 863218.7180524553,
            "unit": "ns",
            "range": "± 9036.953509987336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957534.7459716797,
            "unit": "ns",
            "range": "± 36287.555821730166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627365.3923527644,
            "unit": "ns",
            "range": "± 4230.7717629431445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559092.2347935268,
            "unit": "ns",
            "range": "± 6500.738451809359"
          }
        ]
      }
    ]
  }
}