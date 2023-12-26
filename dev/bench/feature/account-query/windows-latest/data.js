window.BENCHMARK_DATA = {
  "lastUpdate": 1703580053953,
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
          "id": "488a6ffbd213ba1e187e2350e68fc3a37e7adeef",
          "message": "Added account state queries",
          "timestamp": "2023-12-18T15:46:28+09:00",
          "tree_id": "98d7b9f8feb54900d52556e6e7fd2d6f6235c105",
          "url": "https://github.com/greymistcube/libplanet/commit/488a6ffbd213ba1e187e2350e68fc3a37e7adeef"
        },
        "date": 1702882723360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972213.1578947369,
            "unit": "ns",
            "range": "± 33013.07825247632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1675094.9367088608,
            "unit": "ns",
            "range": "± 85764.91407828097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1326066.6666666667,
            "unit": "ns",
            "range": "± 97995.86934235168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5426638.157894737,
            "unit": "ns",
            "range": "± 275060.4990262349"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34270.93023255814,
            "unit": "ns",
            "range": "± 2107.569901377624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5002353.333333333,
            "unit": "ns",
            "range": "± 24801.263408678733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12867020,
            "unit": "ns",
            "range": "± 66115.86366804436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32023978.57142857,
            "unit": "ns",
            "range": "± 307460.284310952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64195546.666666664,
            "unit": "ns",
            "range": "± 737438.7585872244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130762157.14285715,
            "unit": "ns",
            "range": "± 982958.0801095982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3295757.5,
            "unit": "ns",
            "range": "± 9714.7752700032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079131.93359375,
            "unit": "ns",
            "range": "± 3001.622983414528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723323.0794270834,
            "unit": "ns",
            "range": "± 1240.3007249166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1902295.0032552083,
            "unit": "ns",
            "range": "± 2155.4955047606454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 599889.8888221154,
            "unit": "ns",
            "range": "± 677.8381287180866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552369.9358258928,
            "unit": "ns",
            "range": "± 892.0670009630369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2162590.625,
            "unit": "ns",
            "range": "± 66184.90890934813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251470,
            "unit": "ns",
            "range": "± 45145.46197395819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2750396.9696969697,
            "unit": "ns",
            "range": "± 86792.48413906762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2614541.1764705884,
            "unit": "ns",
            "range": "± 53261.88903455652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6318946.511627907,
            "unit": "ns",
            "range": "± 343463.84918004175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167617.91044776118,
            "unit": "ns",
            "range": "± 7667.5610553365295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158481.35593220338,
            "unit": "ns",
            "range": "± 5964.65088657452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144002.1739130435,
            "unit": "ns",
            "range": "± 5482.111885454152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2680540,
            "unit": "ns",
            "range": "± 31307.411263149817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2467385.714285714,
            "unit": "ns",
            "range": "± 34010.08576975269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10218.08510638298,
            "unit": "ns",
            "range": "± 1227.4602475622937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52065.95744680851,
            "unit": "ns",
            "range": "± 4054.190801125817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43894.155844155845,
            "unit": "ns",
            "range": "± 2247.425047429631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52703.06122448979,
            "unit": "ns",
            "range": "± 12759.717978992694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2360.6382978723404,
            "unit": "ns",
            "range": "± 434.5849794044351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10543.75,
            "unit": "ns",
            "range": "± 2041.6099168625674"
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
          "id": "dbb5fbd8017b7997941dce5b5d8665a1450fc6ba",
          "message": "Added tests",
          "timestamp": "2023-12-26T17:23:22+09:00",
          "tree_id": "02e8908239dafe56300a8e7c34f8b00d2756d29d",
          "url": "https://github.com/greymistcube/libplanet/commit/dbb5fbd8017b7997941dce5b5d8665a1450fc6ba"
        },
        "date": 1703580035703,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009357.2164948453,
            "unit": "ns",
            "range": "± 132734.7898124165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771662.5,
            "unit": "ns",
            "range": "± 69866.08048350544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1346523.9583333333,
            "unit": "ns",
            "range": "± 103719.96888869534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5291047.1698113205,
            "unit": "ns",
            "range": "± 218518.7103446342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36273.11827956989,
            "unit": "ns",
            "range": "± 3674.504988399243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5448720,
            "unit": "ns",
            "range": "± 82996.08596623268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13413414.285714285,
            "unit": "ns",
            "range": "± 139720.85829166035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34279600,
            "unit": "ns",
            "range": "± 304119.5606054585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66272271.428571425,
            "unit": "ns",
            "range": "± 842914.4079447682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 144322306.66666666,
            "unit": "ns",
            "range": "± 2281324.51016217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3298680.301339286,
            "unit": "ns",
            "range": "± 16543.268003941706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047047.8776041666,
            "unit": "ns",
            "range": "± 3859.4491888549037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750152.197265625,
            "unit": "ns",
            "range": "± 1600.9524090956681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913268.178013393,
            "unit": "ns",
            "range": "± 4479.478780131701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618456.9684709822,
            "unit": "ns",
            "range": "± 1089.1015538560605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564049.08203125,
            "unit": "ns",
            "range": "± 2556.7482960755297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2194982.5,
            "unit": "ns",
            "range": "± 77711.25347507057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2340908.695652174,
            "unit": "ns",
            "range": "± 112008.63115262779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2892305.882352941,
            "unit": "ns",
            "range": "± 59318.520195932855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2725752.688172043,
            "unit": "ns",
            "range": "± 172308.60433699982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6050588.235294118,
            "unit": "ns",
            "range": "± 123085.30518685476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181656.0606060606,
            "unit": "ns",
            "range": "± 8392.48984395488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173644.44444444444,
            "unit": "ns",
            "range": "± 11059.421842286467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154644.11764705883,
            "unit": "ns",
            "range": "± 7368.861115206769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2810712,
            "unit": "ns",
            "range": "± 73685.86092324632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2608010,
            "unit": "ns",
            "range": "± 46998.47717897737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12518.3908045977,
            "unit": "ns",
            "range": "± 1726.9093737167393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62319.19191919192,
            "unit": "ns",
            "range": "± 8240.711242928113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53137.37373737374,
            "unit": "ns",
            "range": "± 8949.855612318228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74830.30303030302,
            "unit": "ns",
            "range": "± 16686.285793450414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3415.463917525773,
            "unit": "ns",
            "range": "± 982.0620531762032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12401.041666666666,
            "unit": "ns",
            "range": "± 2177.7339643074515"
          }
        ]
      }
    ]
  }
}