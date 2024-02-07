window.BENCHMARK_DATA = {
  "lastUpdate": 1707288255448,
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
          "id": "db763b0d5205886da9a7c7240b3b551bd24e2768",
          "message": "Revert query argument type to be compatible with legacy queries",
          "timestamp": "2024-02-07T15:15:42+09:00",
          "tree_id": "f9cfa42ebc5d7a160cad261c75e8cfbd601eda52",
          "url": "https://github.com/greymistcube/libplanet/commit/db763b0d5205886da9a7c7240b3b551bd24e2768"
        },
        "date": 1707287630775,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9279864.302083334,
            "unit": "ns",
            "range": "± 1226097.1936394435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25957523.1185567,
            "unit": "ns",
            "range": "± 3604983.648472442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56356887.09139785,
            "unit": "ns",
            "range": "± 7714574.176573855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103877313.87356322,
            "unit": "ns",
            "range": "± 5681616.823884872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203408918.54166666,
            "unit": "ns",
            "range": "± 5228197.126357421"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58974.21276595745,
            "unit": "ns",
            "range": "± 18061.000067496672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237885.3791208791,
            "unit": "ns",
            "range": "± 14868.152968180877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232103.09574468085,
            "unit": "ns",
            "range": "± 17081.017762177104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224464.15168539327,
            "unit": "ns",
            "range": "± 16460.924568850594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4093870.8333333335,
            "unit": "ns",
            "range": "± 94912.16071364793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3601067.1428571427,
            "unit": "ns",
            "range": "± 63551.19624197261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17117.052631578947,
            "unit": "ns",
            "range": "± 3684.459671602952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70522.78723404255,
            "unit": "ns",
            "range": "± 11926.981969487519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70443.44897959183,
            "unit": "ns",
            "range": "± 14688.357123135027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77068.70430107527,
            "unit": "ns",
            "range": "± 14388.514153853188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5469.208333333333,
            "unit": "ns",
            "range": "± 1664.0079890791683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15440.197916666666,
            "unit": "ns",
            "range": "± 3136.2193183908935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1158781.896551724,
            "unit": "ns",
            "range": "± 154425.53644831426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2462854.222222222,
            "unit": "ns",
            "range": "± 184325.62293579578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1929235.559139785,
            "unit": "ns",
            "range": "± 185941.52177496103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 24874150.94329897,
            "unit": "ns",
            "range": "± 5434706.0595314065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3056812.5945945946,
            "unit": "ns",
            "range": "± 102952.67197451551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3077744.588235294,
            "unit": "ns",
            "range": "± 85751.39168200752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3731588.976190476,
            "unit": "ns",
            "range": "± 206264.78676273502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3985983.7580645164,
            "unit": "ns",
            "range": "± 293463.5684004843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23107666.67032967,
            "unit": "ns",
            "range": "± 2808302.887795708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4692091.636088709,
            "unit": "ns",
            "range": "± 106659.3637643268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1426448.8896484375,
            "unit": "ns",
            "range": "± 27606.174682794623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 949364.3263578869,
            "unit": "ns",
            "range": "± 34017.45111022424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2267876.1234944663,
            "unit": "ns",
            "range": "± 149406.05939755088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 692627.5077473958,
            "unit": "ns",
            "range": "± 10353.880007502457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 604735.2003641011,
            "unit": "ns",
            "range": "± 31782.45846151616"
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
          "id": "7cd736df3da78ffe315c713c0fa5fae0256becb1",
          "message": "Changelog",
          "timestamp": "2024-02-07T15:18:01+09:00",
          "tree_id": "860337a27fac6ecfcb572b6ddca5876c812426c9",
          "url": "https://github.com/greymistcube/libplanet/commit/7cd736df3da78ffe315c713c0fa5fae0256becb1"
        },
        "date": 1707288003277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14536351.97826087,
            "unit": "ns",
            "range": "± 3543714.9665792603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26811351.73255814,
            "unit": "ns",
            "range": "± 4524495.615938233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 84211889.67777778,
            "unit": "ns",
            "range": "± 30246157.521498773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 157448641.6382979,
            "unit": "ns",
            "range": "± 27277618.194536757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243837264.62222221,
            "unit": "ns",
            "range": "± 29163618.301608175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72844.9,
            "unit": "ns",
            "range": "± 20700.180679366713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246702.7680412371,
            "unit": "ns",
            "range": "± 28341.62992126727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243458.40860215054,
            "unit": "ns",
            "range": "± 31696.393949413978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232278.4375,
            "unit": "ns",
            "range": "± 32446.694976875046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4606401.468085106,
            "unit": "ns",
            "range": "± 339163.4048835824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3906613.2032967033,
            "unit": "ns",
            "range": "± 436403.8984307871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21390.333333333332,
            "unit": "ns",
            "range": "± 5380.179947424311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95008.1914893617,
            "unit": "ns",
            "range": "± 11523.262161586796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83385.22916666667,
            "unit": "ns",
            "range": "± 17070.434933859782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128207.00537634408,
            "unit": "ns",
            "range": "± 25683.270301139288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8075.030927835051,
            "unit": "ns",
            "range": "± 2298.5280183449663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22168.159793814433,
            "unit": "ns",
            "range": "± 6307.790089257684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1284456,
            "unit": "ns",
            "range": "± 156242.9704643807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2841392.581395349,
            "unit": "ns",
            "range": "± 403942.0008399346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2077164.302197802,
            "unit": "ns",
            "range": "± 204548.20129442023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23269560.133333333,
            "unit": "ns",
            "range": "± 3214602.955621038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4281146.948979592,
            "unit": "ns",
            "range": "± 984950.8182794318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5317619.101010101,
            "unit": "ns",
            "range": "± 1229999.737851569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5697979.5,
            "unit": "ns",
            "range": "± 1277611.32193858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5598367.52631579,
            "unit": "ns",
            "range": "± 1157903.623043357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29074702.19148936,
            "unit": "ns",
            "range": "± 7169460.350068919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5519292.055451767,
            "unit": "ns",
            "range": "± 551895.4913386949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2103057.7517115013,
            "unit": "ns",
            "range": "± 354168.68854374276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046505.3275146484,
            "unit": "ns",
            "range": "± 32578.136351616606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2121726.8760016025,
            "unit": "ns",
            "range": "± 109157.84582122156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 688387.2618408203,
            "unit": "ns",
            "range": "± 26897.337140301373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568319.5288085938,
            "unit": "ns",
            "range": "± 5543.631450461694"
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
          "id": "e66926ff0357484101e329c6ef9339cbdade10b0",
          "message": "Changelog",
          "timestamp": "2024-02-07T15:17:34+09:00",
          "tree_id": "c09809b429d316a314d7871557a54e8205373358",
          "url": "https://github.com/greymistcube/libplanet/commit/e66926ff0357484101e329c6ef9339cbdade10b0"
        },
        "date": 1707288240839,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11152750.75,
            "unit": "ns",
            "range": "± 2716875.1385197393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27997693.92105263,
            "unit": "ns",
            "range": "± 3732112.1883275528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69795053.60638298,
            "unit": "ns",
            "range": "± 12713860.14799121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144805910.08421052,
            "unit": "ns",
            "range": "± 18890955.59333342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 318690056.0752688,
            "unit": "ns",
            "range": "± 50772837.93054713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81864.58426966293,
            "unit": "ns",
            "range": "± 21269.292372834443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351908.54347826086,
            "unit": "ns",
            "range": "± 76220.50375977381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376557.6875,
            "unit": "ns",
            "range": "± 75552.93594731584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356403.8195876289,
            "unit": "ns",
            "range": "± 85450.23588659006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6660199.716494845,
            "unit": "ns",
            "range": "± 1332857.7167587227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5314731.9387755105,
            "unit": "ns",
            "range": "± 1056647.8186649336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29669.28787878788,
            "unit": "ns",
            "range": "± 4840.94039032797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125419.08333333333,
            "unit": "ns",
            "range": "± 23960.396204731656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119529.51041666667,
            "unit": "ns",
            "range": "± 19934.619055668638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118454.26530612246,
            "unit": "ns",
            "range": "± 21524.173549301107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9570.75,
            "unit": "ns",
            "range": "± 1314.5963478934273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29851.867346938776,
            "unit": "ns",
            "range": "± 5577.810739633447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1872730.1263736263,
            "unit": "ns",
            "range": "± 383493.96781281254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3524346.46875,
            "unit": "ns",
            "range": "± 911489.9404782538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2877441,
            "unit": "ns",
            "range": "± 892410.8261878752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33555294.42391305,
            "unit": "ns",
            "range": "± 6060906.201482684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4525109.389473684,
            "unit": "ns",
            "range": "± 992282.2268644923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4990541.2235294115,
            "unit": "ns",
            "range": "± 1055905.0671993305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6247310.010204081,
            "unit": "ns",
            "range": "± 1408293.3828109312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5955410.810526316,
            "unit": "ns",
            "range": "± 1333135.249223402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32182196.510638297,
            "unit": "ns",
            "range": "± 5586070.598426075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5971076.627828664,
            "unit": "ns",
            "range": "± 259623.01223507687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1565962.4607747395,
            "unit": "ns",
            "range": "± 39035.31135352175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1064503.3745117188,
            "unit": "ns",
            "range": "± 180009.57663989524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2268516.8966921545,
            "unit": "ns",
            "range": "± 231356.40750998296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 677399.7758984375,
            "unit": "ns",
            "range": "± 16237.374549205477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573203.7178861178,
            "unit": "ns",
            "range": "± 8772.349860081795"
          }
        ]
      }
    ]
  }
}