window.BENCHMARK_DATA = {
  "lastUpdate": 1693381120044,
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
          "id": "fd44eed5fe8953f81905cc4f9a5eed05067f3047",
          "message": "Cleanup",
          "timestamp": "2023-08-30T16:18:57+09:00",
          "tree_id": "e96c08a54004d96573c2a4be8c74fe55da2691a8",
          "url": "https://github.com/greymistcube/libplanet/commit/fd44eed5fe8953f81905cc4f9a5eed05067f3047"
        },
        "date": 1693380933717,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1665698.7849462365,
            "unit": "ns",
            "range": "± 105153.60312386595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3246770.763157895,
            "unit": "ns",
            "range": "± 110887.99728614266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174623.0520833335,
            "unit": "ns",
            "range": "± 124954.32081089893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5793820.893617021,
            "unit": "ns",
            "range": "± 224510.30464355217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316796.11666666664,
            "unit": "ns",
            "range": "± 13727.230797179729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304358.8461538461,
            "unit": "ns",
            "range": "± 8288.35959013511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277123.756097561,
            "unit": "ns",
            "range": "± 14633.753302470113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5081918.862068965,
            "unit": "ns",
            "range": "± 147473.78531471864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4787064,
            "unit": "ns",
            "range": "± 106719.49372709946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20279.273684210526,
            "unit": "ns",
            "range": "± 1388.6539513646073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95102.27368421052,
            "unit": "ns",
            "range": "± 5774.00994634321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79899.13414634146,
            "unit": "ns",
            "range": "± 4144.137852115703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95219.14285714286,
            "unit": "ns",
            "range": "± 14004.414780354307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5215.768817204301,
            "unit": "ns",
            "range": "± 576.7562807517828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20125.416666666668,
            "unit": "ns",
            "range": "± 1411.7753784856307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56429.663157894734,
            "unit": "ns",
            "range": "± 4428.446220502576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9749154.185185185,
            "unit": "ns",
            "range": "± 410016.3698792816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25700406.739130434,
            "unit": "ns",
            "range": "± 642915.9418130673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65559147.94444445,
            "unit": "ns",
            "range": "± 1352112.8918703268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129843753.54545455,
            "unit": "ns",
            "range": "± 3124112.7309893426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252210880.4,
            "unit": "ns",
            "range": "± 4319667.034340491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3945304.7391304346,
            "unit": "ns",
            "range": "± 150831.84281715623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4327835.78,
            "unit": "ns",
            "range": "± 174213.55176291132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5149364.4,
            "unit": "ns",
            "range": "± 136864.64057996622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4722433.931034483,
            "unit": "ns",
            "range": "± 134516.36648721836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7546860.066666666,
            "unit": "ns",
            "range": "± 128776.50249808034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5842482.013541667,
            "unit": "ns",
            "range": "± 50989.974100097264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853390.709375,
            "unit": "ns",
            "range": "± 6976.187411971157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1255733.43359375,
            "unit": "ns",
            "range": "± 8909.041465625374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3076267.4338727677,
            "unit": "ns",
            "range": "± 17825.716123364873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975968.1328125,
            "unit": "ns",
            "range": "± 5401.934870479217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886692.250390625,
            "unit": "ns",
            "range": "± 2156.9427516673045"
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
          "id": "63f27cdf99bfc4d0b20e9bdb02af8c9c61f022b3",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:23:46+09:00",
          "tree_id": "c7ca4ed2e29ba02512346734c03dd9cf8c5d34b2",
          "url": "https://github.com/greymistcube/libplanet/commit/63f27cdf99bfc4d0b20e9bdb02af8c9c61f022b3"
        },
        "date": 1693380999414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1286856.0707070706,
            "unit": "ns",
            "range": "± 97946.87383477409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2397874.0434782607,
            "unit": "ns",
            "range": "± 60014.884516243335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1641874.8709677418,
            "unit": "ns",
            "range": "± 91198.47429135055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4507383.942307692,
            "unit": "ns",
            "range": "± 182332.41183192743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263499.14814814815,
            "unit": "ns",
            "range": "± 6726.621632929311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254864.82926829267,
            "unit": "ns",
            "range": "± 8603.841188394981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220183.57894736843,
            "unit": "ns",
            "range": "± 4879.748904238932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4154291,
            "unit": "ns",
            "range": "± 40849.23138811794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830242.4285714286,
            "unit": "ns",
            "range": "± 20696.14834368309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17123.537634408603,
            "unit": "ns",
            "range": "± 1155.3349181188878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82239.2967032967,
            "unit": "ns",
            "range": "± 4691.19399512298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67905.70588235294,
            "unit": "ns",
            "range": "± 1110.4404961942964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73899.6530612245,
            "unit": "ns",
            "range": "± 10221.053984731954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4507.20618556701,
            "unit": "ns",
            "range": "± 363.2171623762752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16150.9375,
            "unit": "ns",
            "range": "± 1826.8567357334664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45459.81176470588,
            "unit": "ns",
            "range": "± 2464.6122388633844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7707057.615384615,
            "unit": "ns",
            "range": "± 20213.41637188224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19689061,
            "unit": "ns",
            "range": "± 191510.5092998442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51636406.733333334,
            "unit": "ns",
            "range": "± 777719.4349926003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101779012.46666667,
            "unit": "ns",
            "range": "± 635456.2218035465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201993499.7142857,
            "unit": "ns",
            "range": "± 817831.275588951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3181547.36,
            "unit": "ns",
            "range": "± 82688.20893567595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3337090.8,
            "unit": "ns",
            "range": "± 52030.1378385643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4143003.8,
            "unit": "ns",
            "range": "± 53096.475752297214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3778222,
            "unit": "ns",
            "range": "± 81026.39336660616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5996585.947368421,
            "unit": "ns",
            "range": "± 125406.384901458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893369.671223958,
            "unit": "ns",
            "range": "± 2866.821849148182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1576812.924107143,
            "unit": "ns",
            "range": "± 700.4794593600899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085792.8334263393,
            "unit": "ns",
            "range": "± 1767.4866787147384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566366.1875,
            "unit": "ns",
            "range": "± 2900.805476857426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 931299.4255719866,
            "unit": "ns",
            "range": "± 509.54128196136134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745113.0999098558,
            "unit": "ns",
            "range": "± 572.8788831586539"
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
          "id": "0de19e3e9ae4d4b8f1faf9acb9f6905a1505a4f6",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:25:57+09:00",
          "tree_id": "915801e02cf8e43e3f43310bde45e82eed96691c",
          "url": "https://github.com/greymistcube/libplanet/commit/0de19e3e9ae4d4b8f1faf9acb9f6905a1505a4f6"
        },
        "date": 1693381112505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316373.7083333333,
            "unit": "ns",
            "range": "± 88182.59696787255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2493159.6052631577,
            "unit": "ns",
            "range": "± 83839.74839603373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1677281.99,
            "unit": "ns",
            "range": "± 111303.03294818407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4450599.666666667,
            "unit": "ns",
            "range": "± 166892.14245897098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272707.6341463415,
            "unit": "ns",
            "range": "± 9678.267558701034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263124.1,
            "unit": "ns",
            "range": "± 9252.482521478029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236147.67567567568,
            "unit": "ns",
            "range": "± 7890.127171394691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4247805.866666666,
            "unit": "ns",
            "range": "± 24085.816101321263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3766405.7333333334,
            "unit": "ns",
            "range": "± 31475.519213842246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20639.88775510204,
            "unit": "ns",
            "range": "± 1395.6614947363682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90468.63736263737,
            "unit": "ns",
            "range": "± 4911.928267021649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70360.5,
            "unit": "ns",
            "range": "± 1577.3729826251588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79769.85714285714,
            "unit": "ns",
            "range": "± 10623.95746443789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4836.489583333333,
            "unit": "ns",
            "range": "± 524.4082378170187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19267.159574468085,
            "unit": "ns",
            "range": "± 1322.1505559283908"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47621.530303030304,
            "unit": "ns",
            "range": "± 2262.9913030166817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7641410.071428572,
            "unit": "ns",
            "range": "± 17468.454933500452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19773104.933333334,
            "unit": "ns",
            "range": "± 100668.72568938085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50369064.86666667,
            "unit": "ns",
            "range": "± 426828.5522483348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102171540.42857143,
            "unit": "ns",
            "range": "± 783473.9282972309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205478227.35714287,
            "unit": "ns",
            "range": "± 443996.57539230346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3266935.153846154,
            "unit": "ns",
            "range": "± 41231.51163217714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3416500.533333333,
            "unit": "ns",
            "range": "± 38848.61895296126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4216605.2,
            "unit": "ns",
            "range": "± 56547.97048549639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3882229.8666666667,
            "unit": "ns",
            "range": "± 66413.71055616524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6068475.652173913,
            "unit": "ns",
            "range": "± 148333.58251884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5289883.458984375,
            "unit": "ns",
            "range": "± 14981.134078389083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579025.0305524555,
            "unit": "ns",
            "range": "± 922.28312637472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1095087.6571614584,
            "unit": "ns",
            "range": "± 1072.6123554681155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559526.581473214,
            "unit": "ns",
            "range": "± 1349.2386220743895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794608.473828125,
            "unit": "ns",
            "range": "± 641.6611490105093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743513.004045759,
            "unit": "ns",
            "range": "± 287.04106998633864"
          }
        ]
      }
    ]
  }
}