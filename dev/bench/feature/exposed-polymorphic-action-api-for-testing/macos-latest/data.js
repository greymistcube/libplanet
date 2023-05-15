window.BENCHMARK_DATA = {
  "lastUpdate": 1684127712686,
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
      },
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
          "id": "c551f90e210cec2fb0d2b8328218db7698d1459f",
          "message": "Changelog",
          "timestamp": "2023-05-15T13:59:10+09:00",
          "tree_id": "c0c0a06df54444d921759ddab9a0c0441bf134da",
          "url": "https://github.com/greymistcube/libplanet/commit/c551f90e210cec2fb0d2b8328218db7698d1459f"
        },
        "date": 1684127700481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7668619.538461538,
            "unit": "ns",
            "range": "± 127209.1054724565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19857697.125,
            "unit": "ns",
            "range": "± 481241.6928186747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52149274.655172415,
            "unit": "ns",
            "range": "± 2260143.93857477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104638651.99152543,
            "unit": "ns",
            "range": "± 3823341.8684103615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215785384.9375,
            "unit": "ns",
            "range": "± 9961271.54517863"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66249.206185567,
            "unit": "ns",
            "range": "± 8758.433152703628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348493.8645833333,
            "unit": "ns",
            "range": "± 44101.665135915406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302717.8068181818,
            "unit": "ns",
            "range": "± 20310.92695885072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316813.6145833333,
            "unit": "ns",
            "range": "± 33629.40886732444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4251884.638888889,
            "unit": "ns",
            "range": "± 140812.3218667118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3933053.625,
            "unit": "ns",
            "range": "± 76435.83320134172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22322.077319587628,
            "unit": "ns",
            "range": "± 6558.203804579184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94936.9387755102,
            "unit": "ns",
            "range": "± 13226.296539892084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105493.85416666667,
            "unit": "ns",
            "range": "± 17629.89120662564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114906.69791666667,
            "unit": "ns",
            "range": "± 17536.549352780952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7267.346153846154,
            "unit": "ns",
            "range": "± 1775.0223718344569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19010.708333333332,
            "unit": "ns",
            "range": "± 2656.9502141272574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1540219.0721649486,
            "unit": "ns",
            "range": "± 169659.84205206065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2891245.777777778,
            "unit": "ns",
            "range": "± 120251.9167616689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2441186.010526316,
            "unit": "ns",
            "range": "± 193653.45754391438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6602553.725,
            "unit": "ns",
            "range": "± 342863.11970725545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298824.6944444445,
            "unit": "ns",
            "range": "± 155569.40946571392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536284.5918367347,
            "unit": "ns",
            "range": "± 207435.60556560144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4755478.532608695,
            "unit": "ns",
            "range": "± 393474.3261759734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4538461.795698925,
            "unit": "ns",
            "range": "± 379666.76852038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7956657.885416667,
            "unit": "ns",
            "range": "± 470228.09086596465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6637763.367943549,
            "unit": "ns",
            "range": "± 168138.21400308845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2005853.70703125,
            "unit": "ns",
            "range": "± 31513.283230394016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326986.2940104166,
            "unit": "ns",
            "range": "± 23455.526972073523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2762709.5595703125,
            "unit": "ns",
            "range": "± 42884.91929711958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814953.0815805289,
            "unit": "ns",
            "range": "± 7883.188049883932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747200.4550030048,
            "unit": "ns",
            "range": "± 9731.233883101324"
          }
        ]
      }
    ]
  }
}