window.BENCHMARK_DATA = {
  "lastUpdate": 1700470614925,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "ff1ef37c765bdb3cbb12ffaf2595b9db4fc410f2",
          "message": "Temporary workaround to `yarn build` fail",
          "timestamp": "2023-11-20T17:45:50+09:00",
          "tree_id": "df46edf8e34f5eb1938dcefa05ebda9b68e761dd",
          "url": "https://github.com/greymistcube/libplanet/commit/ff1ef37c765bdb3cbb12ffaf2595b9db4fc410f2"
        },
        "date": 1700470608749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5802516.642857143,
            "unit": "ns",
            "range": "± 26818.304178610615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15116962.533333333,
            "unit": "ns",
            "range": "± 107135.30371641985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37575526.2,
            "unit": "ns",
            "range": "± 218867.01234872546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76584748.28571428,
            "unit": "ns",
            "range": "± 333359.06263400096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152939813.5,
            "unit": "ns",
            "range": "± 538796.285378485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955316.4666666667,
            "unit": "ns",
            "range": "± 57820.658766238535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957681.0729166667,
            "unit": "ns",
            "range": "± 128626.27338609568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1397466.15625,
            "unit": "ns",
            "range": "± 120962.33258892735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5774301.96,
            "unit": "ns",
            "range": "± 291444.0285537405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2531587.7906976743,
            "unit": "ns",
            "range": "± 93380.37986912865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576240.172413793,
            "unit": "ns",
            "range": "± 112330.01709001668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3209512.3488372094,
            "unit": "ns",
            "range": "± 114312.7386320785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3100162.6066666665,
            "unit": "ns",
            "range": "± 156519.87881542035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6841505.540540541,
            "unit": "ns",
            "range": "± 202420.58288452492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40798.166666666664,
            "unit": "ns",
            "range": "± 5144.431136607647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3667397.556640625,
            "unit": "ns",
            "range": "± 10477.28330884283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1163004.8329427084,
            "unit": "ns",
            "range": "± 5879.2567104403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742049.2499348958,
            "unit": "ns",
            "range": "± 12632.355277046378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948879.3618861607,
            "unit": "ns",
            "range": "± 7973.755028419673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620003.8942307692,
            "unit": "ns",
            "range": "± 4315.594551845694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579838.2010904948,
            "unit": "ns",
            "range": "± 2466.3662911942215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204557.5254237288,
            "unit": "ns",
            "range": "± 8958.176614336919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201505.97849462365,
            "unit": "ns",
            "range": "± 20696.870388801224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170864.3448275862,
            "unit": "ns",
            "range": "± 4989.190402945882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3142699.6428571427,
            "unit": "ns",
            "range": "± 45234.14170837562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2864614.25,
            "unit": "ns",
            "range": "± 22094.850951481476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16298.484536082475,
            "unit": "ns",
            "range": "± 2857.0058303865153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63813.45238095238,
            "unit": "ns",
            "range": "± 4272.991759413814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76749.06,
            "unit": "ns",
            "range": "± 18717.928432506746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80997.27835051547,
            "unit": "ns",
            "range": "± 10138.208829249077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7145.6122448979595,
            "unit": "ns",
            "range": "± 992.4804667911197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17165.663265306124,
            "unit": "ns",
            "range": "± 3692.680262981894"
          }
        ]
      }
    ]
  }
}