window.BENCHMARK_DATA = {
  "lastUpdate": 1684479140301,
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
          "id": "8bb5b811950075ca226df3541e39683eb3fd2286",
          "message": "Release 1.3.0",
          "timestamp": "2023-05-19T15:35:51+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/greymistcube/libplanet/commit/8bb5b811950075ca226df3541e39683eb3fd2286"
        },
        "date": 1684479127590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8209753.384615385,
            "unit": "ns",
            "range": "± 130038.75229365185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21005309.674418606,
            "unit": "ns",
            "range": "± 766667.7787455306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52280503.71666667,
            "unit": "ns",
            "range": "± 2315345.6868169894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104812281.72222222,
            "unit": "ns",
            "range": "± 2936032.022367228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216630669.25,
            "unit": "ns",
            "range": "± 2165486.906872327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77569.06666666667,
            "unit": "ns",
            "range": "± 7959.005301818943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322717.2912087912,
            "unit": "ns",
            "range": "± 28361.150798433362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309147.797752809,
            "unit": "ns",
            "range": "± 26229.007690211554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299660.55056179775,
            "unit": "ns",
            "range": "± 22207.96951035782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4353062.363157894,
            "unit": "ns",
            "range": "± 246009.27963048636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3934486.6210526316,
            "unit": "ns",
            "range": "± 241002.89970764495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18049.872340425532,
            "unit": "ns",
            "range": "± 3392.2276405406856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97792.77083333333,
            "unit": "ns",
            "range": "± 17522.24382259615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97878.44329896907,
            "unit": "ns",
            "range": "± 20472.32134745648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110545.44845360825,
            "unit": "ns",
            "range": "± 15910.328548731017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6899.322916666667,
            "unit": "ns",
            "range": "± 1160.6357649313238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20129.103092783505,
            "unit": "ns",
            "range": "± 4340.564171002947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1647894.0555555555,
            "unit": "ns",
            "range": "± 196638.68551520424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3052891.4672131147,
            "unit": "ns",
            "range": "± 136955.61106662347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2532552.4166666665,
            "unit": "ns",
            "range": "± 205781.68841763842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6648510.067901234,
            "unit": "ns",
            "range": "± 324864.5288942738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400005.510989011,
            "unit": "ns",
            "range": "± 245035.56488928501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3617926.2708333335,
            "unit": "ns",
            "range": "± 301470.97840078385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4599216.192307692,
            "unit": "ns",
            "range": "± 278748.3876262961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4396451.577777778,
            "unit": "ns",
            "range": "± 337244.04330492066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7929113.113402062,
            "unit": "ns",
            "range": "± 548815.8457938646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7166364.423713235,
            "unit": "ns",
            "range": "± 146441.55866358575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1982003.302734375,
            "unit": "ns",
            "range": "± 10516.956382222434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292085.238002232,
            "unit": "ns",
            "range": "± 9295.383699640142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603311.826104526,
            "unit": "ns",
            "range": "± 70810.02652656172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867098.8743990385,
            "unit": "ns",
            "range": "± 6481.285882207172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821595.112890625,
            "unit": "ns",
            "range": "± 6846.866894156088"
          }
        ]
      }
    ]
  }
}