window.BENCHMARK_DATA = {
  "lastUpdate": 1683016259939,
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
          "id": "671ae7a4ac1344a77309ce3c06a77c076b0dd4cf",
          "message": "Changelog",
          "timestamp": "2023-05-02T17:14:32+09:00",
          "tree_id": "58aa7a02d3106cd017adf090d986f5f85ce79ca8",
          "url": "https://github.com/greymistcube/libplanet/commit/671ae7a4ac1344a77309ce3c06a77c076b0dd4cf"
        },
        "date": 1683016237284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1319056,
            "unit": "ns",
            "range": "± 107428.74953317955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424494.5454545454,
            "unit": "ns",
            "range": "± 102439.50593938054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050044.4444444445,
            "unit": "ns",
            "range": "± 113520.25519516562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4654403.846153846,
            "unit": "ns",
            "range": "± 124724.53962478829"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47922.72727272727,
            "unit": "ns",
            "range": "± 2222.666136702667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6994364.285714285,
            "unit": "ns",
            "range": "± 103798.05546676353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18833609.523809522,
            "unit": "ns",
            "range": "± 444870.0112445903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47428514.28571428,
            "unit": "ns",
            "range": "± 787388.9155910212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94544326.66666667,
            "unit": "ns",
            "range": "± 1597314.220570923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186556685.7142857,
            "unit": "ns",
            "range": "± 2343091.570112885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4677596.953125,
            "unit": "ns",
            "range": "± 31167.090449697247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1490473.7583705357,
            "unit": "ns",
            "range": "± 6762.698756033534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160482.8841145833,
            "unit": "ns",
            "range": "± 8324.96095052229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646707.0052083335,
            "unit": "ns",
            "range": "± 9166.986028377636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844597.8776041666,
            "unit": "ns",
            "range": "± 3363.654871843945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763699.0459735577,
            "unit": "ns",
            "range": "± 1191.9046523270797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2994304,
            "unit": "ns",
            "range": "± 110760.25582034267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3159080,
            "unit": "ns",
            "range": "± 118982.2152485595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3768607.6923076925,
            "unit": "ns",
            "range": "± 37189.278507352574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4014357.7464788733,
            "unit": "ns",
            "range": "± 195831.7051975072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6275940.909090909,
            "unit": "ns",
            "range": "± 147355.46480758017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259438.70967741936,
            "unit": "ns",
            "range": "± 7868.700757615786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244008.69565217392,
            "unit": "ns",
            "range": "± 9342.967077777012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206584.2105263158,
            "unit": "ns",
            "range": "± 4499.168214223941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3810823.076923077,
            "unit": "ns",
            "range": "± 45758.86351018335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3514860.5263157897,
            "unit": "ns",
            "range": "± 77429.8097543607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17822.340425531915,
            "unit": "ns",
            "range": "± 1639.7714406245736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82784.44444444444,
            "unit": "ns",
            "range": "± 5608.639225119857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73714.43298969071,
            "unit": "ns",
            "range": "± 4624.594344613772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89011.22448979592,
            "unit": "ns",
            "range": "± 15474.254525641694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5570.833333333333,
            "unit": "ns",
            "range": "± 808.4965470963167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17138.043478260868,
            "unit": "ns",
            "range": "± 1523.8645487457316"
          }
        ]
      }
    ]
  }
}