window.BENCHMARK_DATA = {
  "lastUpdate": 1693380502733,
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
          "id": "ce517db3abbe0e18c4a4adeb6bca2fa90277e54d",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-30T10:34:04+09:00",
          "tree_id": "cc00a44ef2dd3cb22070002c104dd70e39fed669",
          "url": "https://github.com/greymistcube/libplanet/commit/ce517db3abbe0e18c4a4adeb6bca2fa90277e54d"
        },
        "date": 1693374639570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471422.5106382978,
            "unit": "ns",
            "range": "± 111148.49156646206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2644541.6,
            "unit": "ns",
            "range": "± 98939.03345320564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012689.5614035088,
            "unit": "ns",
            "range": "± 86691.5974398857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5204291.454545454,
            "unit": "ns",
            "range": "± 243019.7046778896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293540.4909090909,
            "unit": "ns",
            "range": "± 11856.607262326941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288723.83928571426,
            "unit": "ns",
            "range": "± 12446.562660614793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278355.62903225806,
            "unit": "ns",
            "range": "± 15798.864278269173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4606272.5625,
            "unit": "ns",
            "range": "± 84718.91920617555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4166627.066666667,
            "unit": "ns",
            "range": "± 62161.1030623155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21489.736842105263,
            "unit": "ns",
            "range": "± 2146.8205794206383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97374.85714285714,
            "unit": "ns",
            "range": "± 10258.508580132873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78462.76595744681,
            "unit": "ns",
            "range": "± 8992.599090154526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90564.08163265306,
            "unit": "ns",
            "range": "± 12124.924885449953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6067.773195876289,
            "unit": "ns",
            "range": "± 1404.188611390004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18957.698924731183,
            "unit": "ns",
            "range": "± 1462.5411906867284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50450.35106382979,
            "unit": "ns",
            "range": "± 3105.6322775194903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8125442.066666666,
            "unit": "ns",
            "range": "± 84500.72634131333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23235896.785714287,
            "unit": "ns",
            "range": "± 305757.19746309984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55064466.06666667,
            "unit": "ns",
            "range": "± 990183.8241315504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117603393.05555555,
            "unit": "ns",
            "range": "± 2508575.5387271657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217391135.26666668,
            "unit": "ns",
            "range": "± 3081935.4714143155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3386414.3902439023,
            "unit": "ns",
            "range": "± 176047.61766073026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3943945.0625,
            "unit": "ns",
            "range": "± 77170.26909587115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4491713.365384615,
            "unit": "ns",
            "range": "± 182987.63909094944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4282783.947368421,
            "unit": "ns",
            "range": "± 94495.44685002534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6682016.391304348,
            "unit": "ns",
            "range": "± 256722.67155109684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5017271.172395834,
            "unit": "ns",
            "range": "± 70963.98124999793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1581496.8868489584,
            "unit": "ns",
            "range": "± 8618.171785492463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086764.2190104167,
            "unit": "ns",
            "range": "± 5407.014094024551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680803.5635416666,
            "unit": "ns",
            "range": "± 12856.79463742912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828749.4305338542,
            "unit": "ns",
            "range": "± 3769.5581570235654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759791.545703125,
            "unit": "ns",
            "range": "± 2014.5826055369364"
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
          "id": "129e403b507e77e1676d01327687a498f62a321a",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-30T16:14:02+09:00",
          "tree_id": "5b943276cdf60cb2702d638a64a6808766abecab",
          "url": "https://github.com/greymistcube/libplanet/commit/129e403b507e77e1676d01327687a498f62a321a"
        },
        "date": 1693380495201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402287.5217391304,
            "unit": "ns",
            "range": "± 78820.58527203345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2792854.653846154,
            "unit": "ns",
            "range": "± 115052.9573557725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1818810.803030303,
            "unit": "ns",
            "range": "± 79817.50893983479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4993851.521276596,
            "unit": "ns",
            "range": "± 284564.1963777649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274236.03571428574,
            "unit": "ns",
            "range": "± 6784.758700816624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281725.1395348837,
            "unit": "ns",
            "range": "± 10287.942541731618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225057.3076923077,
            "unit": "ns",
            "range": "± 2279.7745643160783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4549232.6,
            "unit": "ns",
            "range": "± 69712.58652680405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3916413.785714286,
            "unit": "ns",
            "range": "± 49178.81303222193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21121.34736842105,
            "unit": "ns",
            "range": "± 2187.3405973212793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93077.1313131313,
            "unit": "ns",
            "range": "± 6460.403123907768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73635.29090909091,
            "unit": "ns",
            "range": "± 3117.4210119354375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86507.72826086957,
            "unit": "ns",
            "range": "± 14556.881630125261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5579.693877551021,
            "unit": "ns",
            "range": "± 841.59152626172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19522.927835051545,
            "unit": "ns",
            "range": "± 1755.9815408543748"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50246.67415730337,
            "unit": "ns",
            "range": "± 2744.767686705681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8525718.05882353,
            "unit": "ns",
            "range": "± 173006.91493747823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22740032.266666666,
            "unit": "ns",
            "range": "± 127549.33765828291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55692135.8,
            "unit": "ns",
            "range": "± 762307.527523899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114711337.4,
            "unit": "ns",
            "range": "± 1121842.5725751235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232177328.26666668,
            "unit": "ns",
            "range": "± 2149525.652119837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3476597.98,
            "unit": "ns",
            "range": "± 139658.40554001462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3644864.185185185,
            "unit": "ns",
            "range": "± 99561.87866155518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4459975.153846154,
            "unit": "ns",
            "range": "± 120652.95865769469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4271255.8,
            "unit": "ns",
            "range": "± 101608.257011508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6380721.8,
            "unit": "ns",
            "range": "± 128733.00667685486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5007747.3046875,
            "unit": "ns",
            "range": "± 54312.1076933247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1585435.609654018,
            "unit": "ns",
            "range": "± 2863.71185806377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079105.380580357,
            "unit": "ns",
            "range": "± 650.2798502833335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658606.1265625,
            "unit": "ns",
            "range": "± 8707.129175735137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812893.4330357143,
            "unit": "ns",
            "range": "± 628.562530146873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744611.6455891927,
            "unit": "ns",
            "range": "± 165.9176852364875"
          }
        ]
      }
    ]
  }
}