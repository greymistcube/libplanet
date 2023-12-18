window.BENCHMARK_DATA = {
  "lastUpdate": 1702860208538,
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
          "id": "9191997b8ad9ba2908b17b5e53132722c0540cdd",
          "message": "Added account state queries",
          "timestamp": "2023-12-17T22:33:47+09:00",
          "tree_id": "ddd3bedabc865246b56b66d0c27114b6723994e3",
          "url": "https://github.com/greymistcube/libplanet/commit/9191997b8ad9ba2908b17b5e53132722c0540cdd"
        },
        "date": 1702821229978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027678.125,
            "unit": "ns",
            "range": "± 105898.7477716581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1800864.705882353,
            "unit": "ns",
            "range": "± 72307.64226146338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1492960.606060606,
            "unit": "ns",
            "range": "± 156348.56454845896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5307300,
            "unit": "ns",
            "range": "± 151987.45013980594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35086.153846153844,
            "unit": "ns",
            "range": "± 1647.9036799708708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4988900,
            "unit": "ns",
            "range": "± 49371.13762887413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13399042.857142856,
            "unit": "ns",
            "range": "± 158172.32916754344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33857400,
            "unit": "ns",
            "range": "± 367910.8880401089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66425413.333333336,
            "unit": "ns",
            "range": "± 314536.32283243915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138562053.33333334,
            "unit": "ns",
            "range": "± 1335533.8803354295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3333778.984375,
            "unit": "ns",
            "range": "± 6271.6474913581815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073799.9674479167,
            "unit": "ns",
            "range": "± 966.2113047928565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750531.5778459822,
            "unit": "ns",
            "range": "± 1812.256659651147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918420.8834134615,
            "unit": "ns",
            "range": "± 1656.5150315645221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626598.8131009615,
            "unit": "ns",
            "range": "± 1081.5707411594196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574898.0887276785,
            "unit": "ns",
            "range": "± 2971.3935099054397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2052712.9032258065,
            "unit": "ns",
            "range": "± 62187.59116273645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2215793.9393939395,
            "unit": "ns",
            "range": "± 66533.57206795088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2733984.090909091,
            "unit": "ns",
            "range": "± 100909.71774989579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2606962.5,
            "unit": "ns",
            "range": "± 102272.84247790632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6334374.025974026,
            "unit": "ns",
            "range": "± 321183.98949192144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172462,
            "unit": "ns",
            "range": "± 6692.057125535359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171152.23880597015,
            "unit": "ns",
            "range": "± 8109.148559889014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148055.88235294117,
            "unit": "ns",
            "range": "± 7083.85556442213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2974620,
            "unit": "ns",
            "range": "± 40703.98716868621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2652192.8571428573,
            "unit": "ns",
            "range": "± 38003.794634133665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13312.765957446809,
            "unit": "ns",
            "range": "± 2129.073403511096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61414.43298969072,
            "unit": "ns",
            "range": "± 5624.703504976981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52525.510204081635,
            "unit": "ns",
            "range": "± 6271.376823535754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72516.16161616161,
            "unit": "ns",
            "range": "± 17786.521536876648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2930.9278350515465,
            "unit": "ns",
            "range": "± 521.2886326095866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11325.28735632184,
            "unit": "ns",
            "range": "± 1045.8354166845597"
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
          "id": "0376f4a2c3f86b0b89d62971c3e6b357fe51cbdb",
          "message": "Added account state queries",
          "timestamp": "2023-12-18T09:30:27+09:00",
          "tree_id": "e7f43002d0f2f5363f2d5c97543bd3dd2556bcbc",
          "url": "https://github.com/greymistcube/libplanet/commit/0376f4a2c3f86b0b89d62971c3e6b357fe51cbdb"
        },
        "date": 1702860187190,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951245.3608247422,
            "unit": "ns",
            "range": "± 108753.17909205628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1724878.3333333333,
            "unit": "ns",
            "range": "± 76790.19643393016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1334681.914893617,
            "unit": "ns",
            "range": "± 106000.38644965662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5162294.117647059,
            "unit": "ns",
            "range": "± 163362.5957544202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34248,
            "unit": "ns",
            "range": "± 1734.573707268142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4966291.666666667,
            "unit": "ns",
            "range": "± 26651.503738347514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13135721.42857143,
            "unit": "ns",
            "range": "± 102255.06704444399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32393315.384615384,
            "unit": "ns",
            "range": "± 219544.19010817938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64971361.538461536,
            "unit": "ns",
            "range": "± 708949.4311285086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132284266.66666667,
            "unit": "ns",
            "range": "± 1177002.5183045438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3331801.339285714,
            "unit": "ns",
            "range": "± 6691.145685675224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074756.2109375,
            "unit": "ns",
            "range": "± 2928.9875458485735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751678.59375,
            "unit": "ns",
            "range": "± 3380.7109247307053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974403.1850961538,
            "unit": "ns",
            "range": "± 4736.809763543005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613933.8341346154,
            "unit": "ns",
            "range": "± 1970.6247002667174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564791.0026041666,
            "unit": "ns",
            "range": "± 2631.4024092112986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2106660.714285714,
            "unit": "ns",
            "range": "± 46152.985050812575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266879.411764706,
            "unit": "ns",
            "range": "± 43749.491975660036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2828440,
            "unit": "ns",
            "range": "± 63861.96792589797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2594785.964912281,
            "unit": "ns",
            "range": "± 109670.60167121961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6261874.647887324,
            "unit": "ns",
            "range": "± 303790.5541267864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177903.125,
            "unit": "ns",
            "range": "± 6961.047374896651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169655.29411764705,
            "unit": "ns",
            "range": "± 9158.375114281656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145641.07142857142,
            "unit": "ns",
            "range": "± 6199.172284505974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2782481.25,
            "unit": "ns",
            "range": "± 52721.85149442307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2575913.3333333335,
            "unit": "ns",
            "range": "± 43244.68368096437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13016.129032258064,
            "unit": "ns",
            "range": "± 1667.5476867296873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55868.88888888889,
            "unit": "ns",
            "range": "± 4875.982054802043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43303.92156862745,
            "unit": "ns",
            "range": "± 1629.2281343401517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58578.78787878788,
            "unit": "ns",
            "range": "± 12132.451614955622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2869.387755102041,
            "unit": "ns",
            "range": "± 728.1395815074159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10196.551724137931,
            "unit": "ns",
            "range": "± 1036.03091853186"
          }
        ]
      }
    ]
  }
}