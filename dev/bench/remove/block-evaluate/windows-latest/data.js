window.BENCHMARK_DATA = {
  "lastUpdate": 1683016262757,
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
          "id": "cbe34e88fd4edd25388fae96680f03f2f0005c78",
          "message": "Changelog",
          "timestamp": "2023-05-02T17:13:12+09:00",
          "tree_id": "ce6a0112c356adf178ade77c4273046864442982",
          "url": "https://github.com/greymistcube/libplanet/commit/cbe34e88fd4edd25388fae96680f03f2f0005c78"
        },
        "date": 1683016231131,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1342409.2783505155,
            "unit": "ns",
            "range": "± 103142.17239090646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2433435.135135135,
            "unit": "ns",
            "range": "± 82202.65343181587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087806.3157894737,
            "unit": "ns",
            "range": "± 123403.06886984197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4873651.3513513515,
            "unit": "ns",
            "range": "± 157397.48801754822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42753.333333333336,
            "unit": "ns",
            "range": "± 2165.1623329274707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6857233.333333333,
            "unit": "ns",
            "range": "± 116234.71123222225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17706464.285714287,
            "unit": "ns",
            "range": "± 71155.75123674778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44723920,
            "unit": "ns",
            "range": "± 318678.6966747004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89509593.33333333,
            "unit": "ns",
            "range": "± 493058.8656057012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181896526.66666666,
            "unit": "ns",
            "range": "± 631709.7858382515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4860828.404017857,
            "unit": "ns",
            "range": "± 19506.890231135072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505718.1119791667,
            "unit": "ns",
            "range": "± 2235.568498982487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1125799.0397135417,
            "unit": "ns",
            "range": "± 1211.2572646973738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560807.003348214,
            "unit": "ns",
            "range": "± 9148.804835451825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798879.013671875,
            "unit": "ns",
            "range": "± 3757.827988214527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730603.4049479166,
            "unit": "ns",
            "range": "± 849.9487780249373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2970014.285714286,
            "unit": "ns",
            "range": "± 49296.26069674371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3081346.6666666665,
            "unit": "ns",
            "range": "± 89761.52210482348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3861835.294117647,
            "unit": "ns",
            "range": "± 74744.63978420518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3889808,
            "unit": "ns",
            "range": "± 100382.82107346189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6203866.666666667,
            "unit": "ns",
            "range": "± 155597.79999189847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255486.11111111112,
            "unit": "ns",
            "range": "± 8019.26796722486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240545.45454545456,
            "unit": "ns",
            "range": "± 7501.920208732015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218657.14285714287,
            "unit": "ns",
            "range": "± 11140.105694616099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3787533.3333333335,
            "unit": "ns",
            "range": "± 43376.94691664598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3501580,
            "unit": "ns",
            "range": "± 32209.852086412495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16235.78947368421,
            "unit": "ns",
            "range": "± 1566.1251675117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77266.66666666667,
            "unit": "ns",
            "range": "± 4144.697100660662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74815.15151515152,
            "unit": "ns",
            "range": "± 7135.50140732603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85110.30927835051,
            "unit": "ns",
            "range": "± 12362.329241625566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4303.092783505154,
            "unit": "ns",
            "range": "± 843.5359121291436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16295.959595959595,
            "unit": "ns",
            "range": "± 1906.3224127119731"
          }
        ]
      }
    ]
  }
}