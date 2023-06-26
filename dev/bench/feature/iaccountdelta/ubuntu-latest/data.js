window.BENCHMARK_DATA = {
  "lastUpdate": 1687756520191,
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
          "id": "9463d85e43c39306971b4f49db1d9287e70e293b",
          "message": "Removed unused Signer private property",
          "timestamp": "2023-06-26T11:36:57+09:00",
          "tree_id": "da7b9469c295569b1549280bbc10673b1fa97f46",
          "url": "https://github.com/greymistcube/libplanet/commit/9463d85e43c39306971b4f49db1d9287e70e293b"
        },
        "date": 1687756510471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4401575.866666666,
            "unit": "ns",
            "range": "± 52183.3523054824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4504415.333333333,
            "unit": "ns",
            "range": "± 38886.58050879077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5400780.5,
            "unit": "ns",
            "range": "± 98631.97178738072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5470085.882352941,
            "unit": "ns",
            "range": "± 110781.64173887428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8584242.055555556,
            "unit": "ns",
            "range": "± 147399.44555345966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10036848.555555556,
            "unit": "ns",
            "range": "± 201472.46472152794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26640970,
            "unit": "ns",
            "range": "± 384541.75206061325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67167053.43333334,
            "unit": "ns",
            "range": "± 1193325.811623636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139336388.66666666,
            "unit": "ns",
            "range": "± 2514661.455631998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264461540,
            "unit": "ns",
            "range": "± 3960323.239523764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333676.6341463415,
            "unit": "ns",
            "range": "± 10302.929767197527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322656.5172413793,
            "unit": "ns",
            "range": "± 14084.16714555419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285138.3076923077,
            "unit": "ns",
            "range": "± 3057.2010724576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5245164.75,
            "unit": "ns",
            "range": "± 99098.57876781079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4883519.375,
            "unit": "ns",
            "range": "± 92747.26800639466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22173.083333333332,
            "unit": "ns",
            "range": "± 1639.3695942851527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104176.8,
            "unit": "ns",
            "range": "± 4661.19541131886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93147.9493670886,
            "unit": "ns",
            "range": "± 4855.996411783023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107213.02040816327,
            "unit": "ns",
            "range": "± 12990.900416583903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5839.627659574468,
            "unit": "ns",
            "range": "± 558.4465008221334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19973.18556701031,
            "unit": "ns",
            "range": "± 1483.7163456580415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56701.15,
            "unit": "ns",
            "range": "± 2981.319044154446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7349005.804427084,
            "unit": "ns",
            "range": "± 42272.57509399074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2291344.0463541667,
            "unit": "ns",
            "range": "± 12088.89529979481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1651153.9868489583,
            "unit": "ns",
            "range": "± 12420.093284636074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3097354.34765625,
            "unit": "ns",
            "range": "± 19391.994599582937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996362.1272135417,
            "unit": "ns",
            "range": "± 3806.9729418844495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907399.1766075721,
            "unit": "ns",
            "range": "± 3810.80566347471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1749010.5254237289,
            "unit": "ns",
            "range": "± 71933.68085769289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3287900.787878788,
            "unit": "ns",
            "range": "± 103307.81804356507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2835973.8630136987,
            "unit": "ns",
            "range": "± 140525.5838079469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6671640.130434782,
            "unit": "ns",
            "range": "± 255149.56521770247"
          }
        ]
      }
    ]
  }
}