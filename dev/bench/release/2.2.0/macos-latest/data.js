window.BENCHMARK_DATA = {
  "lastUpdate": 1687486598692,
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
          "id": "a1b809aebe20f9fa9d23c821b674da5f9365766b",
          "message": "Release 2.2.0",
          "timestamp": "2023-06-23T10:51:07+09:00",
          "tree_id": "378e041fcf4b607cf95c54995288889dcc255288",
          "url": "https://github.com/greymistcube/libplanet/commit/a1b809aebe20f9fa9d23c821b674da5f9365766b"
        },
        "date": 1687486444466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8367442.753164557,
            "unit": "ns",
            "range": "± 432619.6014950432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20843644.861445785,
            "unit": "ns",
            "range": "± 2786597.0444639474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50940998.38709678,
            "unit": "ns",
            "range": "± 3117014.9147731117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119517151.82417582,
            "unit": "ns",
            "range": "± 20564085.498801246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294417742.0851064,
            "unit": "ns",
            "range": "± 59318588.684476405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79239.38554216867,
            "unit": "ns",
            "range": "± 9295.151790087348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341030.2,
            "unit": "ns",
            "range": "± 29185.195712741268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340999.3010752688,
            "unit": "ns",
            "range": "± 37007.20612987156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316183.63333333336,
            "unit": "ns",
            "range": "± 27634.911339268194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4540081.4,
            "unit": "ns",
            "range": "± 411935.4646885886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4229558.191011236,
            "unit": "ns",
            "range": "± 299532.9461072717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21364.989130434784,
            "unit": "ns",
            "range": "± 3506.360877644536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121983.34736842105,
            "unit": "ns",
            "range": "± 19361.86761189645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129852.48387096774,
            "unit": "ns",
            "range": "± 24441.83631230829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120498.73626373627,
            "unit": "ns",
            "range": "± 21915.33184570674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7084.34375,
            "unit": "ns",
            "range": "± 2034.7076155045238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19747.98979591837,
            "unit": "ns",
            "range": "± 4309.596760371927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2176787.6063829786,
            "unit": "ns",
            "range": "± 579948.6547601215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3570785.2795698927,
            "unit": "ns",
            "range": "± 545527.2690743366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3502803.188888889,
            "unit": "ns",
            "range": "± 804197.1135816723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8310099.9186046515,
            "unit": "ns",
            "range": "± 1485075.2301456966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3831971.773809524,
            "unit": "ns",
            "range": "± 591871.5072735581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4457611.275280898,
            "unit": "ns",
            "range": "± 1164030.7927956607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4747697.706896552,
            "unit": "ns",
            "range": "± 411803.8576275242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4790019.111111111,
            "unit": "ns",
            "range": "± 552056.3190720497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8452311.340909092,
            "unit": "ns",
            "range": "± 1155523.7338463175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7341290.423162775,
            "unit": "ns",
            "range": "± 477234.3578750041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1940865.5338040865,
            "unit": "ns",
            "range": "± 23773.049320764883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390201.1079545454,
            "unit": "ns",
            "range": "± 58574.54097155613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2982133.1835132088,
            "unit": "ns",
            "range": "± 326289.14525164687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890548.7261513158,
            "unit": "ns",
            "range": "± 17536.14740183749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834934.8285337936,
            "unit": "ns",
            "range": "± 30467.392173166714"
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
          "id": "58124168990c3af08c89e89de164f2e90c7e8132",
          "message": "Release 2.2.0",
          "timestamp": "2023-06-23T10:52:07+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/greymistcube/libplanet/commit/58124168990c3af08c89e89de164f2e90c7e8132"
        },
        "date": 1687486581927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11054933.890804598,
            "unit": "ns",
            "range": "± 2599850.131528682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23195473.264367815,
            "unit": "ns",
            "range": "± 2050848.4241649078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64059725.58045977,
            "unit": "ns",
            "range": "± 15401092.12697783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110877567.22727273,
            "unit": "ns",
            "range": "± 12119408.451097192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259594358.09473684,
            "unit": "ns",
            "range": "± 46197714.292107806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86481.91111111111,
            "unit": "ns",
            "range": "± 10051.896852290549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374381.5348837209,
            "unit": "ns",
            "range": "± 36158.14052560442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361994.0168539326,
            "unit": "ns",
            "range": "± 52349.61645320822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317556.4827586207,
            "unit": "ns",
            "range": "± 25600.634587820623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4488831.573033708,
            "unit": "ns",
            "range": "± 339144.7215295575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4199979.264367816,
            "unit": "ns",
            "range": "± 398939.6120631589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25092.736842105263,
            "unit": "ns",
            "range": "± 4353.430792381309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118415.73333333334,
            "unit": "ns",
            "range": "± 20418.54853376808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120383.59139784946,
            "unit": "ns",
            "range": "± 13565.454071180828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118816.35164835164,
            "unit": "ns",
            "range": "± 19161.72998474571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6877.6875,
            "unit": "ns",
            "range": "± 1395.4598586506397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20709.010752688173,
            "unit": "ns",
            "range": "± 4960.014769207113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1970105.3720930233,
            "unit": "ns",
            "range": "± 399590.6531495346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3286245.355555556,
            "unit": "ns",
            "range": "± 339007.5590757631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3219706.3636363638,
            "unit": "ns",
            "range": "± 718604.312613817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8857647.917582417,
            "unit": "ns",
            "range": "± 2669776.734931094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3993913.6264367816,
            "unit": "ns",
            "range": "± 821722.7314870874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4368944.2988505745,
            "unit": "ns",
            "range": "± 852979.7793056166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5604901.119565218,
            "unit": "ns",
            "range": "± 1271843.4584959424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5984518.584269663,
            "unit": "ns",
            "range": "± 1814129.8217363611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11278471.878947368,
            "unit": "ns",
            "range": "± 3316016.106990628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7159474.939802632,
            "unit": "ns",
            "range": "± 424393.0081790454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2182595.0455729165,
            "unit": "ns",
            "range": "± 46240.60705811108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384734.5637849506,
            "unit": "ns",
            "range": "± 44702.71049498164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3099277.955932617,
            "unit": "ns",
            "range": "± 378496.8526045382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947822.1908133371,
            "unit": "ns",
            "range": "± 27046.373887817503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926686.5343191965,
            "unit": "ns",
            "range": "± 26008.10731623181"
          }
        ]
      }
    ]
  }
}