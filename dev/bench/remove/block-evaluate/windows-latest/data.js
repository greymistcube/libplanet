window.BENCHMARK_DATA = {
  "lastUpdate": 1683015757265,
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
          "id": "02a90bf9b723dac067810660ba4256f7507d36bd",
          "message": "Removed unnecessary usage of BlockChain<T>.EvaluateAndSign()",
          "timestamp": "2023-05-02T17:09:48+09:00",
          "tree_id": "d747245eadd7dd1eaffb8294c75b033f9a8e9153",
          "url": "https://github.com/greymistcube/libplanet/commit/02a90bf9b723dac067810660ba4256f7507d36bd"
        },
        "date": 1683015739365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017221.4285714285,
            "unit": "ns",
            "range": "± 94312.71765430263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1830646.8085106383,
            "unit": "ns",
            "range": "± 71005.53209024672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1611998.9361702127,
            "unit": "ns",
            "range": "± 127778.37289424708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3687009.2592592593,
            "unit": "ns",
            "range": "± 147390.5430371957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33567.28395061728,
            "unit": "ns",
            "range": "± 1762.866282752097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5054214.285714285,
            "unit": "ns",
            "range": "± 14395.023560130192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12852057.142857144,
            "unit": "ns",
            "range": "± 51031.882406766286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33483606.666666668,
            "unit": "ns",
            "range": "± 355483.26958153874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66999685.71428572,
            "unit": "ns",
            "range": "± 317997.1936430181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135837268.75,
            "unit": "ns",
            "range": "± 2622746.393819209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3464967.606026786,
            "unit": "ns",
            "range": "± 12253.04090735407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1099453.1668526786,
            "unit": "ns",
            "range": "± 1891.2215936739449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 829281.7533052885,
            "unit": "ns",
            "range": "± 2255.2692933731732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931995.3841145833,
            "unit": "ns",
            "range": "± 25007.800692388904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 590355.9495192308,
            "unit": "ns",
            "range": "± 1507.5051004996922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543962.6277043269,
            "unit": "ns",
            "range": "± 1555.6131095756803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2132492.3076923075,
            "unit": "ns",
            "range": "± 56806.68920524711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2215326.4150943398,
            "unit": "ns",
            "range": "± 71097.83928054948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2843056.5217391304,
            "unit": "ns",
            "range": "± 71824.27942293961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2807676.7441860465,
            "unit": "ns",
            "range": "± 152010.594580013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4538924.489795919,
            "unit": "ns",
            "range": "± 171461.0360628767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192882.05128205128,
            "unit": "ns",
            "range": "± 5254.164854007763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185057.6923076923,
            "unit": "ns",
            "range": "± 6966.751462675036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171042.85714285713,
            "unit": "ns",
            "range": "± 10584.115700172555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2898221.4285714286,
            "unit": "ns",
            "range": "± 41233.09310533188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552269.230769231,
            "unit": "ns",
            "range": "± 33185.47334340194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13311.578947368422,
            "unit": "ns",
            "range": "± 1466.7131554612633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62423.529411764706,
            "unit": "ns",
            "range": "± 3359.090262996513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54410.86956521739,
            "unit": "ns",
            "range": "± 3493.1473425016275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68298.96907216495,
            "unit": "ns",
            "range": "± 11124.761185127383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4170.408163265306,
            "unit": "ns",
            "range": "± 851.1010677713543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12905.31914893617,
            "unit": "ns",
            "range": "± 1700.5607564259626"
          }
        ]
      }
    ]
  }
}