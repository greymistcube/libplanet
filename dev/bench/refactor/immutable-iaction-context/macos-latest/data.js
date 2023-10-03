window.BENCHMARK_DATA = {
  "lastUpdate": 1696351050990,
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
          "id": "1e1e0e68367e7006a93ab97437129933f338c9f5",
          "message": "Remove unnecessary copy methods",
          "timestamp": "2023-09-27T09:58:56+09:00",
          "tree_id": "c9eed7988ffb1c411dc9f49c109ffa4787b995d0",
          "url": "https://github.com/greymistcube/libplanet/commit/1e1e0e68367e7006a93ab97437129933f338c9f5"
        },
        "date": 1696351034471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10125776.042105263,
            "unit": "ns",
            "range": "± 977444.5055833736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23037540.663265307,
            "unit": "ns",
            "range": "± 1477411.0442976994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56276587.38888889,
            "unit": "ns",
            "range": "± 2290285.355353637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114427077.70454545,
            "unit": "ns",
            "range": "± 4237158.732262121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235051578.34,
            "unit": "ns",
            "range": "± 11878761.252125708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68947.51136363637,
            "unit": "ns",
            "range": "± 10567.12320924714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336270.329787234,
            "unit": "ns",
            "range": "± 35597.12457470189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331105.9382022472,
            "unit": "ns",
            "range": "± 41663.65084872464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303749.36842105264,
            "unit": "ns",
            "range": "± 10376.502085783684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4255559.550561798,
            "unit": "ns",
            "range": "± 249433.32078178236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3654847.7333333334,
            "unit": "ns",
            "range": "± 56402.28840021433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21532.525773195877,
            "unit": "ns",
            "range": "± 3116.8464801943096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97307.62637362638,
            "unit": "ns",
            "range": "± 8664.373829588165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104299.80927835051,
            "unit": "ns",
            "range": "± 8892.221772379717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88636.76530612246,
            "unit": "ns",
            "range": "± 22340.366166415126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5458.904255319149,
            "unit": "ns",
            "range": "± 1432.5623337910122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18570.31914893617,
            "unit": "ns",
            "range": "± 2741.673227286719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580971.4591836734,
            "unit": "ns",
            "range": "± 190205.26319053257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2986947.511627907,
            "unit": "ns",
            "range": "± 161677.25774164617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2335282.0425531915,
            "unit": "ns",
            "range": "± 186857.30218624248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10622995.487179488,
            "unit": "ns",
            "range": "± 655273.0287666008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3593964.21875,
            "unit": "ns",
            "range": "± 332227.67069168895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3869409.873737374,
            "unit": "ns",
            "range": "± 430258.078999427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5080814.315217392,
            "unit": "ns",
            "range": "± 669650.0158403547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4802804.173469388,
            "unit": "ns",
            "range": "± 481070.92763371865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16282467.053191489,
            "unit": "ns",
            "range": "± 1780655.7057410504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5497231.632711039,
            "unit": "ns",
            "range": "± 279713.71327114647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1603336.5317007212,
            "unit": "ns",
            "range": "± 10810.508268865415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 988919.6944010417,
            "unit": "ns",
            "range": "± 15504.407524268781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2486737.5149075254,
            "unit": "ns",
            "range": "± 98295.6077740764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 773118.8607421875,
            "unit": "ns",
            "range": "± 6905.248505636254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 702425.238671875,
            "unit": "ns",
            "range": "± 4621.947271836508"
          }
        ]
      }
    ]
  }
}