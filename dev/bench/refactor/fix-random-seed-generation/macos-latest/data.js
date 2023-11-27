window.BENCHMARK_DATA = {
  "lastUpdate": 1701063066878,
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
          "id": "4a56d8893481517f81dc94973411460905ab698b",
          "message": "Better readability; test fix",
          "timestamp": "2023-11-27T13:27:12+09:00",
          "tree_id": "08072e7d8152ced75702896a41267846d5496111",
          "url": "https://github.com/greymistcube/libplanet/commit/4a56d8893481517f81dc94973411460905ab698b"
        },
        "date": 1701060036151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8415795.363636363,
            "unit": "ns",
            "range": "± 201347.2520730383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20452285.269230768,
            "unit": "ns",
            "range": "± 308379.7640383671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51219353.35714286,
            "unit": "ns",
            "range": "± 304623.3266473044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102042910.7,
            "unit": "ns",
            "range": "± 717164.5432571047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199575972.3809524,
            "unit": "ns",
            "range": "± 4680395.9832431"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50513.593406593405,
            "unit": "ns",
            "range": "± 11552.04007954922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253858.67777777778,
            "unit": "ns",
            "range": "± 16559.3126048628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241151.74736842106,
            "unit": "ns",
            "range": "± 15189.018839187751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224049.27551020408,
            "unit": "ns",
            "range": "± 22658.137773809212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3881551.705882353,
            "unit": "ns",
            "range": "± 78395.2914735355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3552870.1363636362,
            "unit": "ns",
            "range": "± 84885.97254555271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18231.907216494845,
            "unit": "ns",
            "range": "± 4601.779784954753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69157.69387755102,
            "unit": "ns",
            "range": "± 14210.805620537645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76243.94210526315,
            "unit": "ns",
            "range": "± 17411.562910108794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80099.29896907216,
            "unit": "ns",
            "range": "± 20691.728410348016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6060.877551020408,
            "unit": "ns",
            "range": "± 1604.6757485696448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18033.978260869564,
            "unit": "ns",
            "range": "± 3024.4150155584475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1264344.6458333333,
            "unit": "ns",
            "range": "± 278502.20613896986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2528054.682352941,
            "unit": "ns",
            "range": "± 314369.10191419633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680289.177777778,
            "unit": "ns",
            "range": "± 136438.36532401093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7364311.94680851,
            "unit": "ns",
            "range": "± 1001125.1306128165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3019181.0789473685,
            "unit": "ns",
            "range": "± 65701.85847474246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3093616.5223880596,
            "unit": "ns",
            "range": "± 139839.92250983376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3666100.787234043,
            "unit": "ns",
            "range": "± 142560.840262025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3595748.864864865,
            "unit": "ns",
            "range": "± 121708.20738945034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13723262.260416666,
            "unit": "ns",
            "range": "± 2797404.347614921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4667879.185369318,
            "unit": "ns",
            "range": "± 217216.90566694204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1406472.3205247961,
            "unit": "ns",
            "range": "± 33270.298413900135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 902060.0340494792,
            "unit": "ns",
            "range": "± 12811.404742915473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2096100.835546875,
            "unit": "ns",
            "range": "± 31326.869579508388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 646959.0546061198,
            "unit": "ns",
            "range": "± 3985.0762129579525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 598833.6824448529,
            "unit": "ns",
            "range": "± 12029.358754779798"
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
          "id": "4c2287d9d7d61d7c5526bbf27ca27359c2b9c4a0",
          "message": "Updated description",
          "timestamp": "2023-11-27T13:47:18+09:00",
          "tree_id": "e17bca4417313edd56dde3daef28ae3f0c9dc05d",
          "url": "https://github.com/greymistcube/libplanet/commit/4c2287d9d7d61d7c5526bbf27ca27359c2b9c4a0"
        },
        "date": 1701061259200,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7667636.695652174,
            "unit": "ns",
            "range": "± 161287.8152973843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18848655.583333332,
            "unit": "ns",
            "range": "± 107004.44506353958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46449909.93333333,
            "unit": "ns",
            "range": "± 555436.037733479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93036702.23076923,
            "unit": "ns",
            "range": "± 601069.7258642508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200050905.42307693,
            "unit": "ns",
            "range": "± 5399897.92013855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41583.063157894736,
            "unit": "ns",
            "range": "± 10159.686994477532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216742.85057471265,
            "unit": "ns",
            "range": "± 11826.263404191513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212078.585106383,
            "unit": "ns",
            "range": "± 16197.852049563877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203097.82474226804,
            "unit": "ns",
            "range": "± 18829.037048869886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3777309.193548387,
            "unit": "ns",
            "range": "± 113895.32544736544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3530870.1153846155,
            "unit": "ns",
            "range": "± 52673.44366714987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13059.214285714286,
            "unit": "ns",
            "range": "± 1141.8513404331063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59238.14606741573,
            "unit": "ns",
            "range": "± 4927.280751430942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51937.409638554214,
            "unit": "ns",
            "range": "± 3977.289931096742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66884.95698924731,
            "unit": "ns",
            "range": "± 11502.727142531083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6775.0368421052635,
            "unit": "ns",
            "range": "± 964.9116353603326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19595.53370786517,
            "unit": "ns",
            "range": "± 3000.159334592378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1212438.84375,
            "unit": "ns",
            "range": "± 278944.95684103883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2297143.994845361,
            "unit": "ns",
            "range": "± 160864.58273382482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511591.4782608696,
            "unit": "ns",
            "range": "± 88103.75375115115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6467868.739130435,
            "unit": "ns",
            "range": "± 513855.8165967531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2907633.1789473686,
            "unit": "ns",
            "range": "± 185111.3741768394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2991998.9,
            "unit": "ns",
            "range": "± 119015.554824972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3574800.111111111,
            "unit": "ns",
            "range": "± 77577.62246358523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3583145.0857142857,
            "unit": "ns",
            "range": "± 114536.47187310903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12192719.53125,
            "unit": "ns",
            "range": "± 2085749.5950044133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4420190.083333333,
            "unit": "ns",
            "range": "± 70892.7699811898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1363029.6461838942,
            "unit": "ns",
            "range": "± 8210.856038576827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 873222.4299479167,
            "unit": "ns",
            "range": "± 5579.747821505174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1993289.8539402173,
            "unit": "ns",
            "range": "± 43855.899954800065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648883.4161725725,
            "unit": "ns",
            "range": "± 27593.632114029315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596133.4989420573,
            "unit": "ns",
            "range": "± 5041.64211852834"
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
          "id": "711a0dca1882be2f8c85784ef549edf4d02458d2",
          "message": "Changelog",
          "timestamp": "2023-11-27T14:17:59+09:00",
          "tree_id": "f8b7d238cc9a39cea5dff593eae21973aea26ca1",
          "url": "https://github.com/greymistcube/libplanet/commit/711a0dca1882be2f8c85784ef549edf4d02458d2"
        },
        "date": 1701063049374,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7690984.15,
            "unit": "ns",
            "range": "± 174887.60682259392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19086250.78787879,
            "unit": "ns",
            "range": "± 604359.3511953255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46979070.81818182,
            "unit": "ns",
            "range": "± 1096544.5732358594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92561649.07692307,
            "unit": "ns",
            "range": "± 709866.159421204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190170511.85714287,
            "unit": "ns",
            "range": "± 3204944.576251913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47562.21978021978,
            "unit": "ns",
            "range": "± 8478.959908440285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220186.25531914894,
            "unit": "ns",
            "range": "± 17304.85565143226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215402.96391752578,
            "unit": "ns",
            "range": "± 19953.609976780022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196911.1224489796,
            "unit": "ns",
            "range": "± 20462.190278161743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3691482.2,
            "unit": "ns",
            "range": "± 82836.26271151134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3411663.6333333333,
            "unit": "ns",
            "range": "± 51391.858922910935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12633.413793103447,
            "unit": "ns",
            "range": "± 821.2998850620198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58528.765957446805,
            "unit": "ns",
            "range": "± 5362.051349105261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51676.32941176471,
            "unit": "ns",
            "range": "± 3935.4505350729037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62764.12765957447,
            "unit": "ns",
            "range": "± 15448.203104773173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3259.3595505617977,
            "unit": "ns",
            "range": "± 369.72290752028107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11962.260869565218,
            "unit": "ns",
            "range": "± 891.7754345712433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1092763.247368421,
            "unit": "ns",
            "range": "± 113212.65963089754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571286.2040816327,
            "unit": "ns",
            "range": "± 340223.5670602421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1740062.1145833333,
            "unit": "ns",
            "range": "± 161703.57706910695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8111587.257142857,
            "unit": "ns",
            "range": "± 265269.5798187132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2992669.5,
            "unit": "ns",
            "range": "± 50200.22064730853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2950425.3333333335,
            "unit": "ns",
            "range": "± 75340.12780466455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3550427.785714286,
            "unit": "ns",
            "range": "± 100193.79585485437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3380251.111111111,
            "unit": "ns",
            "range": "± 146441.21815057038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12323608.395833334,
            "unit": "ns",
            "range": "± 2171843.777546517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4177056.5229166667,
            "unit": "ns",
            "range": "± 75217.62414728923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1342535.8939732143,
            "unit": "ns",
            "range": "± 19549.544462358997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 875850.2708984375,
            "unit": "ns",
            "range": "± 9748.078056224693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915964.9306640625,
            "unit": "ns",
            "range": "± 22075.737750341617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635481.2749399039,
            "unit": "ns",
            "range": "± 8233.541122806155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556347.7975911458,
            "unit": "ns",
            "range": "± 4832.797342986774"
          }
        ]
      }
    ]
  }
}