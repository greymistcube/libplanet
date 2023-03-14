window.BENCHMARK_DATA = {
  "lastUpdate": 1678790210306,
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
          "id": "427645e8deccade6832f99e7a9bac7a38e41d479",
          "message": "Changelog",
          "timestamp": "2023-03-14T19:19:39+09:00",
          "tree_id": "4dab05484c1d09894134fb208a9f267ecf913aae",
          "url": "https://github.com/greymistcube/libplanet/commit/427645e8deccade6832f99e7a9bac7a38e41d479"
        },
        "date": 1678789952927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1049050.5263157894,
            "unit": "ns",
            "range": "± 89488.02947843254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815042.5925925926,
            "unit": "ns",
            "range": "± 71106.92878653618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1616278.3505154639,
            "unit": "ns",
            "range": "± 137098.59456093702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3634050,
            "unit": "ns",
            "range": "± 140624.36307184363"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34663.333333333336,
            "unit": "ns",
            "range": "± 1540.5773369336075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5296535.714285715,
            "unit": "ns",
            "range": "± 31446.795290870807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 13431826.666666666,
            "unit": "ns",
            "range": "± 188668.11929442463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 33472283.333333332,
            "unit": "ns",
            "range": "± 276194.02772757586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 67297116.66666667,
            "unit": "ns",
            "range": "± 503105.87307624385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 138070846.66666666,
            "unit": "ns",
            "range": "± 1233307.2070463146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3482020.1041666665,
            "unit": "ns",
            "range": "± 7088.989405595359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1097143.9192708333,
            "unit": "ns",
            "range": "± 2217.55686786918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 824656.4528245192,
            "unit": "ns",
            "range": "± 364.68724569011295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1892774.5535714286,
            "unit": "ns",
            "range": "± 4445.789378182301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 589386.083984375,
            "unit": "ns",
            "range": "± 534.1462583117449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 529894.7265625,
            "unit": "ns",
            "range": "± 476.74708059344226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2257322.6666666665,
            "unit": "ns",
            "range": "± 113978.88682313685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3401766.6666666665,
            "unit": "ns",
            "range": "± 86068.47459343392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 16193553.333333334,
            "unit": "ns",
            "range": "± 200117.70417384245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4328800,
            "unit": "ns",
            "range": "± 87556.4154265862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18510853.846153848,
            "unit": "ns",
            "range": "± 207440.51603365166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138556.89655172414,
            "unit": "ns",
            "range": "± 5596.180153006171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 135173.0158730159,
            "unit": "ns",
            "range": "± 6174.850301155442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 110987.5,
            "unit": "ns",
            "range": "± 4387.488255424664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7697926.666666667,
            "unit": "ns",
            "range": "± 72895.95782117597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6166326.666666667,
            "unit": "ns",
            "range": "± 58952.41987843934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15346.153846153846,
            "unit": "ns",
            "range": "± 1379.7993165117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 39665.217391304344,
            "unit": "ns",
            "range": "± 2902.4216786286133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 29172.916666666668,
            "unit": "ns",
            "range": "± 2158.434089634948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74504.1237113402,
            "unit": "ns",
            "range": "± 12853.07937750857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4402.061855670103,
            "unit": "ns",
            "range": "± 676.5382751926804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13435.869565217392,
            "unit": "ns",
            "range": "± 1026.418238527661"
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
          "id": "17498ea0633120215dc070704dc36a44751c9944",
          "message": "Port 0.50.3 to 0.51.3",
          "timestamp": "2023-03-14T19:16:05+09:00",
          "tree_id": "e520cb9ddb43668a02f62c28849c7c9ab8719ac1",
          "url": "https://github.com/greymistcube/libplanet/commit/17498ea0633120215dc070704dc36a44751c9944"
        },
        "date": 1678789952985,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358253,
            "unit": "ns",
            "range": "± 108121.34359322418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2339667.7419354836,
            "unit": "ns",
            "range": "± 71130.62344305616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2134967.8571428573,
            "unit": "ns",
            "range": "± 58561.30092141452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4735316.666666667,
            "unit": "ns",
            "range": "± 124622.61123040655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42662.31884057971,
            "unit": "ns",
            "range": "± 1956.8207595692022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6950840,
            "unit": "ns",
            "range": "± 36165.488679521135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17771273.333333332,
            "unit": "ns",
            "range": "± 118322.55229225062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46339026.666666664,
            "unit": "ns",
            "range": "± 448353.10616691824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91355426.66666667,
            "unit": "ns",
            "range": "± 702275.5609615142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 184117278.57142857,
            "unit": "ns",
            "range": "± 1275231.3335708461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4987199.497767857,
            "unit": "ns",
            "range": "± 8449.093400702215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533819.5387620192,
            "unit": "ns",
            "range": "± 1231.3249971566386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152011.5690104167,
            "unit": "ns",
            "range": "± 1275.9486955737216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2538181.7447916665,
            "unit": "ns",
            "range": "± 8491.291972905477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803214.8367745535,
            "unit": "ns",
            "range": "± 606.2139014394544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747428.6100260416,
            "unit": "ns",
            "range": "± 849.9288167452064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2924893.3333333335,
            "unit": "ns",
            "range": "± 48602.12321444796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4683756.666666667,
            "unit": "ns",
            "range": "± 65718.45214535223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21368646.153846152,
            "unit": "ns",
            "range": "± 161436.71420190542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5682867.741935484,
            "unit": "ns",
            "range": "± 245879.22049963084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24578073.333333332,
            "unit": "ns",
            "range": "± 263378.4687660018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177406.4516129032,
            "unit": "ns",
            "range": "± 7748.735930073611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175971.66666666666,
            "unit": "ns",
            "range": "± 7804.129538462785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151563.49206349207,
            "unit": "ns",
            "range": "± 6934.72565188209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10399953.333333334,
            "unit": "ns",
            "range": "± 102762.83977243544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8466240,
            "unit": "ns",
            "range": "± 84117.64550743373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17440.425531914894,
            "unit": "ns",
            "range": "± 1233.8696144964715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49106.25,
            "unit": "ns",
            "range": "± 2510.123490330478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40083.529411764706,
            "unit": "ns",
            "range": "± 2166.8963463697023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87265.30612244898,
            "unit": "ns",
            "range": "± 12214.60256761162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4331.914893617021,
            "unit": "ns",
            "range": "± 471.14885120399987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17438.297872340427,
            "unit": "ns",
            "range": "± 1266.788877775472"
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
          "id": "c9cc9b9eef3ad9691dc1279e852e3b4f39e6de39",
          "message": "Port 0.50.3 to 0.51.2",
          "timestamp": "2023-03-14T19:16:46+09:00",
          "tree_id": "e520cb9ddb43668a02f62c28849c7c9ab8719ac1",
          "url": "https://github.com/greymistcube/libplanet/commit/c9cc9b9eef3ad9691dc1279e852e3b4f39e6de39"
        },
        "date": 1678790186302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619694.7368421052,
            "unit": "ns",
            "range": "± 124448.78752597523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2937894.285714286,
            "unit": "ns",
            "range": "± 89096.16728687088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2529907.2916666665,
            "unit": "ns",
            "range": "± 157153.21337022583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6381851.546391753,
            "unit": "ns",
            "range": "± 404847.50552764774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56682.608695652176,
            "unit": "ns",
            "range": "± 4089.4291145049724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8730576.923076924,
            "unit": "ns",
            "range": "± 356241.30377573724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24179553.846153848,
            "unit": "ns",
            "range": "± 352102.1717612295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 60226888.461538464,
            "unit": "ns",
            "range": "± 352135.5433599907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 119660507.6923077,
            "unit": "ns",
            "range": "± 986472.0256732563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 234960148.7179487,
            "unit": "ns",
            "range": "± 7612336.893244302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5777801.622596154,
            "unit": "ns",
            "range": "± 76164.87867406348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843781.73828125,
            "unit": "ns",
            "range": "± 12184.308630664533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360922.7213541667,
            "unit": "ns",
            "range": "± 30092.03142303367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3180542.1875,
            "unit": "ns",
            "range": "± 46753.852687818806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989076.9381009615,
            "unit": "ns",
            "range": "± 15435.914569006914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906372.490234375,
            "unit": "ns",
            "range": "± 11213.776090290203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3681541.6666666665,
            "unit": "ns",
            "range": "± 181150.2487043112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5789536.559139785,
            "unit": "ns",
            "range": "± 326226.50499606074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27911007.692307692,
            "unit": "ns",
            "range": "± 465740.8926673329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7453196.825396826,
            "unit": "ns",
            "range": "± 322802.6791511785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31696621.42857143,
            "unit": "ns",
            "range": "± 439124.59976739984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221160.29411764705,
            "unit": "ns",
            "range": "± 10499.611076036319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222124.61538461538,
            "unit": "ns",
            "range": "± 9252.804148764017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216921.73913043478,
            "unit": "ns",
            "range": "± 8280.04060761589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13517623.076923076,
            "unit": "ns",
            "range": "± 172896.3184196729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10905507.142857144,
            "unit": "ns",
            "range": "± 107876.49251511025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28056.18556701031,
            "unit": "ns",
            "range": "± 2690.911185244294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69478.35051546391,
            "unit": "ns",
            "range": "± 6972.807702128254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56371.134020618556,
            "unit": "ns",
            "range": "± 5069.577537520727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135236.45833333334,
            "unit": "ns",
            "range": "± 20073.046184225135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9068.041237113403,
            "unit": "ns",
            "range": "± 1156.1021429564316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26572.916666666668,
            "unit": "ns",
            "range": "± 2287.654701891813"
          }
        ]
      }
    ]
  }
}