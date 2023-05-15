window.BENCHMARK_DATA = {
  "lastUpdate": 1684127487029,
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
          "id": "784c7a59371c5826a5c70a0913377aa5ab7e65ca",
          "message": "Added ReloadLoader method",
          "timestamp": "2023-05-15T13:55:44+09:00",
          "tree_id": "fb1b9ab08b77c64d761c9a2c4d1fa5620a5f4e11",
          "url": "https://github.com/greymistcube/libplanet/commit/784c7a59371c5826a5c70a0913377aa5ab7e65ca"
        },
        "date": 1684127474516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8099571.269230769,
            "unit": "ns",
            "range": "± 109797.53667026859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21576986.887755103,
            "unit": "ns",
            "range": "± 1720927.7061231679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51441258.6875,
            "unit": "ns",
            "range": "± 954763.8353409859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103243569.15714286,
            "unit": "ns",
            "range": "± 3384303.0416581207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211157093.2,
            "unit": "ns",
            "range": "± 4026674.9879422407"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67977.59375,
            "unit": "ns",
            "range": "± 9893.339998071137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336016.9032258064,
            "unit": "ns",
            "range": "± 28896.906302392104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319566.2747252747,
            "unit": "ns",
            "range": "± 27948.223946777784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306667.10869565216,
            "unit": "ns",
            "range": "± 22885.062640857406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4290449.064516129,
            "unit": "ns",
            "range": "± 130546.06181368462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3910117.442857143,
            "unit": "ns",
            "range": "± 128078.88386251352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20569.208333333332,
            "unit": "ns",
            "range": "± 4333.893936274537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98888.36458333333,
            "unit": "ns",
            "range": "± 15858.635936309805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89497.42424242424,
            "unit": "ns",
            "range": "± 15070.479565985752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104740.45918367348,
            "unit": "ns",
            "range": "± 14260.414562096466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6148.329787234043,
            "unit": "ns",
            "range": "± 1330.1910315415237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17211.516853932586,
            "unit": "ns",
            "range": "± 1692.8458765181592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1492969.1770833333,
            "unit": "ns",
            "range": "± 138653.13610635066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856300.945945946,
            "unit": "ns",
            "range": "± 142896.35095649562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2553253.736263736,
            "unit": "ns",
            "range": "± 199073.84718272174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6386340.517241379,
            "unit": "ns",
            "range": "± 279326.7301456003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372036.1744186045,
            "unit": "ns",
            "range": "± 124231.92811541012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3517780.0430107526,
            "unit": "ns",
            "range": "± 236584.66994080177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4509073.38,
            "unit": "ns",
            "range": "± 179731.3412802382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4558262.304347826,
            "unit": "ns",
            "range": "± 366829.90004190296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8110289.911392405,
            "unit": "ns",
            "range": "± 419153.5045278816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6460128.465234375,
            "unit": "ns",
            "range": "± 119813.07004963305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008011.6495682567,
            "unit": "ns",
            "range": "± 39751.88119707883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302396.2989783655,
            "unit": "ns",
            "range": "± 14235.38154787897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572333.671875,
            "unit": "ns",
            "range": "± 39995.24531635565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824282.8786057692,
            "unit": "ns",
            "range": "± 11434.060467469219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731127.0054086539,
            "unit": "ns",
            "range": "± 6796.497168097199"
          }
        ]
      }
    ]
  }
}