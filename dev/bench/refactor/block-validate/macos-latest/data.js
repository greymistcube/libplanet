window.BENCHMARK_DATA = {
  "lastUpdate": 1680584803794,
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
          "id": "4522501c5d9593b0aeaa57efde43b2e524ebe847",
          "message": "Removed unnecessary logic",
          "timestamp": "2023-04-04T12:23:14+09:00",
          "tree_id": "329e28668ace483029c1d1ac545049c75aa9c27a",
          "url": "https://github.com/greymistcube/libplanet/commit/4522501c5d9593b0aeaa57efde43b2e524ebe847"
        },
        "date": 1680579970542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8976641.235955056,
            "unit": "ns",
            "range": "± 1151214.4712580517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21973458.54597701,
            "unit": "ns",
            "range": "± 1500904.2184490059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52735827.823529415,
            "unit": "ns",
            "range": "± 1081917.542968862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120877569.42528735,
            "unit": "ns",
            "range": "± 7691805.285098128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220718126.1111111,
            "unit": "ns",
            "range": "± 4675411.548495222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74774.73033707865,
            "unit": "ns",
            "range": "± 9250.058712054513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 444273.57608695654,
            "unit": "ns",
            "range": "± 51302.047554886325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 404313.3191489362,
            "unit": "ns",
            "range": "± 62257.39259661705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 381680.625,
            "unit": "ns",
            "range": "± 46973.025906420626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6049664.305263158,
            "unit": "ns",
            "range": "± 474952.17281008716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4987976.030612245,
            "unit": "ns",
            "range": "± 553713.1276041821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27833.415730337078,
            "unit": "ns",
            "range": "± 4217.70563385363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 140342.5744680851,
            "unit": "ns",
            "range": "± 25363.124034831013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131343.01162790696,
            "unit": "ns",
            "range": "± 12549.47983899233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 309574.10215053766,
            "unit": "ns",
            "range": "± 43111.31462125232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11222.550561797752,
            "unit": "ns",
            "range": "± 1205.762593578663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27829.391304347828,
            "unit": "ns",
            "range": "± 3248.0214500067227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623284.01,
            "unit": "ns",
            "range": "± 148604.05967308948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3190147.75,
            "unit": "ns",
            "range": "± 146257.68179765943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2663520.5204081633,
            "unit": "ns",
            "range": "± 236311.87184085228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7007211.62,
            "unit": "ns",
            "range": "± 277190.4539941173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3738167.8020833335,
            "unit": "ns",
            "range": "± 282839.15483705467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3699049.6827956988,
            "unit": "ns",
            "range": "± 294976.679680856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4990147.55319149,
            "unit": "ns",
            "range": "± 421169.8334972922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5303120.840425532,
            "unit": "ns",
            "range": "± 717423.0932702943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10301505.404494382,
            "unit": "ns",
            "range": "± 1034345.2659062081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8256052.892013889,
            "unit": "ns",
            "range": "± 291641.0196209868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275861.1826171875,
            "unit": "ns",
            "range": "± 101297.65657309812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448183.4014648437,
            "unit": "ns",
            "range": "± 32687.54400813374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3245618.7786989794,
            "unit": "ns",
            "range": "± 129249.37472990884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908033.4845112645,
            "unit": "ns",
            "range": "± 30275.97260777021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882264.5710499043,
            "unit": "ns",
            "range": "± 32771.56643747415"
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
          "id": "af91da6d3bfa9210229b69530940ca3750a8363d",
          "message": "[skip changelog] Renaming and changing signature for consistency; general cleanup",
          "timestamp": "2023-04-04T13:42:50+09:00",
          "tree_id": "b02705f968060a38f88fc31a8ee05a2259b96976",
          "url": "https://github.com/greymistcube/libplanet/commit/af91da6d3bfa9210229b69530940ca3750a8363d"
        },
        "date": 1680584744136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8331299.071428572,
            "unit": "ns",
            "range": "± 89128.82866387567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24075927.55421687,
            "unit": "ns",
            "range": "± 3656902.1196114295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56621448.52272727,
            "unit": "ns",
            "range": "± 2092294.1781722105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128141988.51111111,
            "unit": "ns",
            "range": "± 7709471.810928702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226675029.89583334,
            "unit": "ns",
            "range": "± 14148992.590114255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81159.67391304347,
            "unit": "ns",
            "range": "± 8683.000366522292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 444525.2105263158,
            "unit": "ns",
            "range": "± 61187.62647493411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381555.4438202247,
            "unit": "ns",
            "range": "± 44381.865886858344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 368590.32258064515,
            "unit": "ns",
            "range": "± 58005.884272006566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5977717.01010101,
            "unit": "ns",
            "range": "± 403219.61963240313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4489183.189473684,
            "unit": "ns",
            "range": "± 347707.48570838186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26539.468421052632,
            "unit": "ns",
            "range": "± 5998.203758524663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117959.79347826086,
            "unit": "ns",
            "range": "± 21234.80913036503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126529.15168539326,
            "unit": "ns",
            "range": "± 15097.67303044136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 261783.28125,
            "unit": "ns",
            "range": "± 23778.09508602541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8013.103092783505,
            "unit": "ns",
            "range": "± 1156.687399110567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22677.303030303032,
            "unit": "ns",
            "range": "± 5928.135915939164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651888.34375,
            "unit": "ns",
            "range": "± 143765.3004878238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3240287.694915254,
            "unit": "ns",
            "range": "± 142709.68970029187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2962144.587912088,
            "unit": "ns",
            "range": "± 344404.37032514386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8519493.806818182,
            "unit": "ns",
            "range": "± 1443614.6070548838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3802995.159340659,
            "unit": "ns",
            "range": "± 384058.2100576601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5185249.340425532,
            "unit": "ns",
            "range": "± 1880764.7042932853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4829377.940298508,
            "unit": "ns",
            "range": "± 228272.5019788703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4755495.556701031,
            "unit": "ns",
            "range": "± 365718.95820256596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9972098.244444445,
            "unit": "ns",
            "range": "± 770793.012254096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7181081.675091912,
            "unit": "ns",
            "range": "± 209652.88457921165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2161487.3839588994,
            "unit": "ns",
            "range": "± 156324.53554137042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379919.8090444712,
            "unit": "ns",
            "range": "± 47211.75935170004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3002962.7234933036,
            "unit": "ns",
            "range": "± 260405.36749969926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973683.863671875,
            "unit": "ns",
            "range": "± 17093.699945134853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808634.5649937221,
            "unit": "ns",
            "range": "± 34698.93459182921"
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
          "id": "e6554b5d179b9c992fffe18c19fff6753cc53236",
          "message": "Renaming and changing signature for consistency; general cleanup",
          "timestamp": "2023-04-04T13:42:29+09:00",
          "tree_id": "b02705f968060a38f88fc31a8ee05a2259b96976",
          "url": "https://github.com/greymistcube/libplanet/commit/e6554b5d179b9c992fffe18c19fff6753cc53236"
        },
        "date": 1680584782839,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9132818.65934066,
            "unit": "ns",
            "range": "± 583737.9646846732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22596761.13265306,
            "unit": "ns",
            "range": "± 890886.2044614783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56245356.77272727,
            "unit": "ns",
            "range": "± 1334609.8918854503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123662234.4137931,
            "unit": "ns",
            "range": "± 5309292.820557989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234076913.71052632,
            "unit": "ns",
            "range": "± 3678843.5837032865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85950.6551724138,
            "unit": "ns",
            "range": "± 8212.616918324704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441812.14285714284,
            "unit": "ns",
            "range": "± 37240.23055202873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 388121.4,
            "unit": "ns",
            "range": "± 47973.48867496305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 369921.1263157895,
            "unit": "ns",
            "range": "± 34093.691103306846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6085992.430232558,
            "unit": "ns",
            "range": "± 329023.48344649456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4534745.840206185,
            "unit": "ns",
            "range": "± 317939.76200164756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28185.76923076923,
            "unit": "ns",
            "range": "± 3285.6767105352665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 140799.73626373627,
            "unit": "ns",
            "range": "± 20408.896440215678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 144214.79569892472,
            "unit": "ns",
            "range": "± 17053.51019875708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 305708.21428571426,
            "unit": "ns",
            "range": "± 33076.96800637636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11917.840425531915,
            "unit": "ns",
            "range": "± 1257.9751314121554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30181.174157303372,
            "unit": "ns",
            "range": "± 5118.106187784521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1967158.7216494845,
            "unit": "ns",
            "range": "± 329034.1753562216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3695798.2717391304,
            "unit": "ns",
            "range": "± 425786.5270547729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2977243.604395604,
            "unit": "ns",
            "range": "± 309467.53840315534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8786022.191489361,
            "unit": "ns",
            "range": "± 1082290.2577053632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3547348.402173913,
            "unit": "ns",
            "range": "± 214347.81706858423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3823014.06185567,
            "unit": "ns",
            "range": "± 330696.8429374999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5090785.65625,
            "unit": "ns",
            "range": "± 358120.861441639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5091827.34,
            "unit": "ns",
            "range": "± 438910.29510826536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9818951.79120879,
            "unit": "ns",
            "range": "± 620143.6636115237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8286589.103053978,
            "unit": "ns",
            "range": "± 343001.4950374619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2640762.716796875,
            "unit": "ns",
            "range": "± 140281.59913787452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1544106.5739955357,
            "unit": "ns",
            "range": "± 74890.4088195164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3496549.958857549,
            "unit": "ns",
            "range": "± 178385.35100291923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1035701.1112827035,
            "unit": "ns",
            "range": "± 38326.70203310117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1012712.0201171875,
            "unit": "ns",
            "range": "± 40420.89082291162"
          }
        ]
      }
    ]
  }
}