window.BENCHMARK_DATA = {
  "lastUpdate": 1704202415024,
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
          "id": "1d1966520dd42daa5be368e081e2b6710bf2986a",
          "message": "Removed contextual interpretation of ValidatorSet",
          "timestamp": "2023-12-26T18:03:13+09:00",
          "tree_id": "52ea834676b0283949ccc8072b36aaaafca2e372",
          "url": "https://github.com/greymistcube/libplanet/commit/1d1966520dd42daa5be368e081e2b6710bf2986a"
        },
        "date": 1703582107891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979413.4020618557,
            "unit": "ns",
            "range": "± 116492.67379402198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1693700,
            "unit": "ns",
            "range": "± 75141.38995818805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1340217.7083333333,
            "unit": "ns",
            "range": "± 77434.23558742458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4859424.137931035,
            "unit": "ns",
            "range": "± 138964.65289308137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33800,
            "unit": "ns",
            "range": "± 2216.9548684826423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4963933.333333333,
            "unit": "ns",
            "range": "± 43136.65439485256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13420842.857142856,
            "unit": "ns",
            "range": "± 188558.93881381865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33646966.666666664,
            "unit": "ns",
            "range": "± 479350.14590688545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64713807.14285714,
            "unit": "ns",
            "range": "± 841148.1745111954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132593385.71428572,
            "unit": "ns",
            "range": "± 1268153.6869111622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3313132.7287946427,
            "unit": "ns",
            "range": "± 5904.167818299027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1037424.1286057692,
            "unit": "ns",
            "range": "± 2488.3732317174845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737817.87109375,
            "unit": "ns",
            "range": "± 733.6605898761294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1883100.1953125,
            "unit": "ns",
            "range": "± 4331.771637267744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635511.5950520834,
            "unit": "ns",
            "range": "± 1824.5323434737288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554949.5572916666,
            "unit": "ns",
            "range": "± 2957.945018737318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128776.086956522,
            "unit": "ns",
            "range": "± 78998.42525795508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275014.0625,
            "unit": "ns",
            "range": "± 97161.34816317093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2742434.375,
            "unit": "ns",
            "range": "± 85323.76898869086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2656238.709677419,
            "unit": "ns",
            "range": "± 75404.06124084367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6213257.377049181,
            "unit": "ns",
            "range": "± 277592.755944757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177115.49295774646,
            "unit": "ns",
            "range": "± 7867.1404840881205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168071.42857142858,
            "unit": "ns",
            "range": "± 7713.4241710407905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139775,
            "unit": "ns",
            "range": "± 3907.507019969524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2747857.1428571427,
            "unit": "ns",
            "range": "± 39701.37983042354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2457284.210526316,
            "unit": "ns",
            "range": "± 51352.33699277846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11146.808510638299,
            "unit": "ns",
            "range": "± 1394.4361120052884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55110.30927835051,
            "unit": "ns",
            "range": "± 6114.693446528385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44360.78431372549,
            "unit": "ns",
            "range": "± 1673.3294273839265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52358.762886597935,
            "unit": "ns",
            "range": "± 9276.89505098239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2489.4736842105262,
            "unit": "ns",
            "range": "± 374.3003925653566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9569.89247311828,
            "unit": "ns",
            "range": "± 1278.9928906758053"
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
          "id": "4ab9e783ab386df73cd874f28124b5aa2e8ea08d",
          "message": "Removed contextual interpretation of ValidatorSet",
          "timestamp": "2024-01-02T18:09:41+09:00",
          "tree_id": "b79598f5c032dd205dba84e439af0ecfcef59222",
          "url": "https://github.com/greymistcube/libplanet/commit/4ab9e783ab386df73cd874f28124b5aa2e8ea08d"
        },
        "date": 1704187237644,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 923652,
            "unit": "ns",
            "range": "± 94581.98568523297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1679014.5454545454,
            "unit": "ns",
            "range": "± 70737.36876692079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1300167,
            "unit": "ns",
            "range": "± 115867.24906137414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5374367.346938776,
            "unit": "ns",
            "range": "± 313387.57558498235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33967.857142857145,
            "unit": "ns",
            "range": "± 1839.66738181974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4883471.428571428,
            "unit": "ns",
            "range": "± 40615.71178689405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13190794.11764706,
            "unit": "ns",
            "range": "± 252947.22144794412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31404350,
            "unit": "ns",
            "range": "± 209812.0431756444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65522720,
            "unit": "ns",
            "range": "± 948436.3900652484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131220450,
            "unit": "ns",
            "range": "± 1036448.3806583089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254266.2239583335,
            "unit": "ns",
            "range": "± 23861.915321836786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052666.3932291667,
            "unit": "ns",
            "range": "± 2650.4383911793243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730188.6458333334,
            "unit": "ns",
            "range": "± 1610.483832287875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909451.646205357,
            "unit": "ns",
            "range": "± 3845.6848753771924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612847.2446986607,
            "unit": "ns",
            "range": "± 1788.8154552666372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554581.6057477678,
            "unit": "ns",
            "range": "± 1513.4695126862625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2069521.4285714286,
            "unit": "ns",
            "range": "± 84575.49981425572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223755.172413793,
            "unit": "ns",
            "range": "± 96916.91535304196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746092.8571428573,
            "unit": "ns",
            "range": "± 63560.4639019302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2633113.1578947366,
            "unit": "ns",
            "range": "± 88174.08815627532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6256086.904761905,
            "unit": "ns",
            "range": "± 332440.1798819491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166250,
            "unit": "ns",
            "range": "± 6857.155987382387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162802.5,
            "unit": "ns",
            "range": "± 5763.879013481397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140132.25806451612,
            "unit": "ns",
            "range": "± 4237.79715550223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2667233.3333333335,
            "unit": "ns",
            "range": "± 47603.13114951678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2521200,
            "unit": "ns",
            "range": "± 47149.88259340026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10485.567010309278,
            "unit": "ns",
            "range": "± 1643.8008351278477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52843.75,
            "unit": "ns",
            "range": "± 4856.418704310713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43950.60240963855,
            "unit": "ns",
            "range": "± 2311.074794516132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54545.26315789474,
            "unit": "ns",
            "range": "± 11116.307442375613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2380.4123711340208,
            "unit": "ns",
            "range": "± 430.0288690061334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9397.894736842105,
            "unit": "ns",
            "range": "± 1160.0604301361846"
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
          "id": "caea73296066c5c325a7900ced8474a61ef87ac9",
          "message": "Changelog",
          "timestamp": "2024-01-02T22:23:12+09:00",
          "tree_id": "8e478b623d06dc3968e581eb4e406af51401037a",
          "url": "https://github.com/greymistcube/libplanet/commit/caea73296066c5c325a7900ced8474a61ef87ac9"
        },
        "date": 1704202399256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 913005.3191489362,
            "unit": "ns",
            "range": "± 82201.01164516436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1689868.085106383,
            "unit": "ns",
            "range": "± 64869.491410205206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1338304.2105263157,
            "unit": "ns",
            "range": "± 101193.36652612846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5280378.378378378,
            "unit": "ns",
            "range": "± 178873.70177358712"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34237.83783783784,
            "unit": "ns",
            "range": "± 1728.4645734183807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4990085.714285715,
            "unit": "ns",
            "range": "± 50880.41571466082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13058520,
            "unit": "ns",
            "range": "± 117398.24286833014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32019916.666666668,
            "unit": "ns",
            "range": "± 216971.166217304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63856366.666666664,
            "unit": "ns",
            "range": "± 238439.2254693515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128702546.66666667,
            "unit": "ns",
            "range": "± 1025098.8906070524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3301277.1875,
            "unit": "ns",
            "range": "± 10730.784943369104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038982.0768229166,
            "unit": "ns",
            "range": "± 2644.311061399171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722692.4739583334,
            "unit": "ns",
            "range": "± 1843.5268329724631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957856.015625,
            "unit": "ns",
            "range": "± 4366.835713194506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621967.5846354166,
            "unit": "ns",
            "range": "± 2445.884183124682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583811.8931361607,
            "unit": "ns",
            "range": "± 1084.0374255974232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120072.4137931033,
            "unit": "ns",
            "range": "± 49478.91251079829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2215933.3333333335,
            "unit": "ns",
            "range": "± 51417.33494973591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2752997.2972972975,
            "unit": "ns",
            "range": "± 75498.86123676335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2705984.8484848486,
            "unit": "ns",
            "range": "± 84140.81248572285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5901836.363636363,
            "unit": "ns",
            "range": "± 143159.11076725434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173253.0303030303,
            "unit": "ns",
            "range": "± 8110.239865502788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161681.4814814815,
            "unit": "ns",
            "range": "± 6815.577996338895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138965.5172413793,
            "unit": "ns",
            "range": "± 4058.7890402072394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2660653.3333333335,
            "unit": "ns",
            "range": "± 32201.57198174086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2403786.3636363638,
            "unit": "ns",
            "range": "± 58142.00428552204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10591.011235955057,
            "unit": "ns",
            "range": "± 1046.817737178884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50918.181818181816,
            "unit": "ns",
            "range": "± 3947.224995102822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46625.39682539683,
            "unit": "ns",
            "range": "± 2139.1864789219903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55915.11627906977,
            "unit": "ns",
            "range": "± 8234.254385215323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2703.191489361702,
            "unit": "ns",
            "range": "± 599.1844147986019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9591.666666666666,
            "unit": "ns",
            "range": "± 762.7168201837198"
          }
        ]
      }
    ]
  }
}