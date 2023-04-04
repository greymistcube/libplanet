window.BENCHMARK_DATA = {
  "lastUpdate": 1680591506146,
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
          "id": "cff89a486b9058e1f22408e4adbb59472fb6452c",
          "message": "Suggestions",
          "timestamp": "2023-04-04T14:17:24+09:00",
          "tree_id": "608dac6096fb5ee067136aa0e8af45f75aecbe5e",
          "url": "https://github.com/greymistcube/libplanet/commit/cff89a486b9058e1f22408e4adbb59472fb6452c"
        },
        "date": 1680586434310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7841771.269230769,
            "unit": "ns",
            "range": "± 85189.73801575109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20088037.5625,
            "unit": "ns",
            "range": "± 380084.23177868855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48946328.520833336,
            "unit": "ns",
            "range": "± 1911299.1678975623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98540726.33333333,
            "unit": "ns",
            "range": "± 1510195.205434746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203683409,
            "unit": "ns",
            "range": "± 6467654.388596248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63206.770833333336,
            "unit": "ns",
            "range": "± 9791.148897135472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376661.5731707317,
            "unit": "ns",
            "range": "± 19836.19148159696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315437.6777777778,
            "unit": "ns",
            "range": "± 18789.1623630517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312733.0306122449,
            "unit": "ns",
            "range": "± 22859.781984535563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5610403,
            "unit": "ns",
            "range": "± 99148.55309914435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4223570.333333333,
            "unit": "ns",
            "range": "± 62192.91220143368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25577.947916666668,
            "unit": "ns",
            "range": "± 4368.600780136146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119798.67,
            "unit": "ns",
            "range": "± 12951.636846013329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119217.34042553192,
            "unit": "ns",
            "range": "± 10316.66942646256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 266899.9583333333,
            "unit": "ns",
            "range": "± 20339.695593600973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9776.783505154639,
            "unit": "ns",
            "range": "± 821.9001007168811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23100.91,
            "unit": "ns",
            "range": "± 3637.313588808824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1649226.3917525774,
            "unit": "ns",
            "range": "± 211432.18202552348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3133371.904255319,
            "unit": "ns",
            "range": "± 194668.81526725137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2602174.5425531915,
            "unit": "ns",
            "range": "± 223716.06408429667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7049725.685714286,
            "unit": "ns",
            "range": "± 340601.30500509706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3224444.460526316,
            "unit": "ns",
            "range": "± 162737.76948382866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3378587.172413793,
            "unit": "ns",
            "range": "± 147262.57765639186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4417720.630434782,
            "unit": "ns",
            "range": "± 108007.99038046984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4610951.943661972,
            "unit": "ns",
            "range": "± 225978.31054486416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8885574.39361702,
            "unit": "ns",
            "range": "± 340409.60927556176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6549669.04453125,
            "unit": "ns",
            "range": "± 121141.75354308008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1982089.8189174107,
            "unit": "ns",
            "range": "± 11930.681868458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299322.0111607143,
            "unit": "ns",
            "range": "± 4959.359907408937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2930228.9064127603,
            "unit": "ns",
            "range": "± 74640.42586102532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861142.9604492188,
            "unit": "ns",
            "range": "± 3884.1632433372847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728787.9738581731,
            "unit": "ns",
            "range": "± 2958.3335702160707"
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
          "id": "74e4d416e7ffdbacf023f60149719f43311df8ca",
          "message": "Separate nonce check for genesis",
          "timestamp": "2023-04-03T18:14:20+09:00",
          "tree_id": "b52734325a8d6def243b06c8dde39849f103fd77",
          "url": "https://github.com/greymistcube/libplanet/commit/74e4d416e7ffdbacf023f60149719f43311df8ca"
        },
        "date": 1680590618496,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9161890.352941176,
            "unit": "ns",
            "range": "± 374064.2937234092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23414838.066666666,
            "unit": "ns",
            "range": "± 390528.7165271619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56836452.461538464,
            "unit": "ns",
            "range": "± 937154.3891688476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116913125.42857143,
            "unit": "ns",
            "range": "± 1700583.5263837534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235625946.45945945,
            "unit": "ns",
            "range": "± 7990442.084030989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65427.53488372093,
            "unit": "ns",
            "range": "± 5481.646838631133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 419481.73913043475,
            "unit": "ns",
            "range": "± 28153.11111372504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342720.87078651687,
            "unit": "ns",
            "range": "± 26891.091472397777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331587.46875,
            "unit": "ns",
            "range": "± 10106.60176602682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6219753.24137931,
            "unit": "ns",
            "range": "± 181341.38934610423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4718573.4,
            "unit": "ns",
            "range": "± 66459.2273146261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20227.59375,
            "unit": "ns",
            "range": "± 1591.4147402009783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99801.37096774194,
            "unit": "ns",
            "range": "± 6150.7695863939525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91566.44623655915,
            "unit": "ns",
            "range": "± 7178.218893723464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 252927.85714285713,
            "unit": "ns",
            "range": "± 26316.7961881428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6027.021276595745,
            "unit": "ns",
            "range": "± 529.1457658130911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19850.384615384617,
            "unit": "ns",
            "range": "± 1714.3021953827208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676361.252631579,
            "unit": "ns",
            "range": "± 218836.58604290604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3341862.2674418604,
            "unit": "ns",
            "range": "± 318443.62450369634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3078234.0412371135,
            "unit": "ns",
            "range": "± 388223.72774594364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8202423.2950819675,
            "unit": "ns",
            "range": "± 364500.6169518942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3937489.8947368423,
            "unit": "ns",
            "range": "± 438179.6513163432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4022526.5714285714,
            "unit": "ns",
            "range": "± 421728.5211144748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5110075.760869565,
            "unit": "ns",
            "range": "± 305626.4278144897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4945198.978021978,
            "unit": "ns",
            "range": "± 427245.00993130344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10078091.768817205,
            "unit": "ns",
            "range": "± 651696.8219034588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7114764.010602678,
            "unit": "ns",
            "range": "± 92878.26368279598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2286756.724051339,
            "unit": "ns",
            "range": "± 35620.54772773482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1445288.1541015625,
            "unit": "ns",
            "range": "± 50885.97812186901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2865572.2449776786,
            "unit": "ns",
            "range": "± 34497.72895048672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949312.2427509015,
            "unit": "ns",
            "range": "± 13773.486696362223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806104.646484375,
            "unit": "ns",
            "range": "± 15273.086526330682"
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
          "id": "609e7adb2a7a9a9f67d6a7686cf61066542b5380",
          "message": "Changed to throw exceptions instead of returning for validation\n\nCleanup",
          "timestamp": "2023-04-04T15:38:40+09:00",
          "tree_id": "b63ea20cd158d6be05c640962054866b6b5ebb27",
          "url": "https://github.com/greymistcube/libplanet/commit/609e7adb2a7a9a9f67d6a7686cf61066542b5380"
        },
        "date": 1680591492708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8451740.583333334,
            "unit": "ns",
            "range": "± 218226.94767482547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24651841.23809524,
            "unit": "ns",
            "range": "± 2493444.980124458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52034817.777777776,
            "unit": "ns",
            "range": "± 1098588.4913316271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110955698.86153845,
            "unit": "ns",
            "range": "± 5162824.754473737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216532824.47297296,
            "unit": "ns",
            "range": "± 6268639.237356849"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70056.38043478261,
            "unit": "ns",
            "range": "± 8406.942420028754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 423378.36734693876,
            "unit": "ns",
            "range": "± 52949.38155288254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335551.13440860214,
            "unit": "ns",
            "range": "± 32719.082029679408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333502.0909090909,
            "unit": "ns",
            "range": "± 23670.78324662878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6013915.686868687,
            "unit": "ns",
            "range": "± 518673.99251699843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4431067,
            "unit": "ns",
            "range": "± 378907.4759707524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20898.25,
            "unit": "ns",
            "range": "± 3723.1036458705707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102512.10824742269,
            "unit": "ns",
            "range": "± 15719.646437365078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111851.11235955056,
            "unit": "ns",
            "range": "± 11382.058173281279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 260359.8510638298,
            "unit": "ns",
            "range": "± 29306.59792751636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7794.918367346939,
            "unit": "ns",
            "range": "± 1326.7092431832311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20759.4375,
            "unit": "ns",
            "range": "± 3673.7977075572126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1669507.2551020407,
            "unit": "ns",
            "range": "± 190627.56352579128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933573,
            "unit": "ns",
            "range": "± 89228.20020412082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2568757.93877551,
            "unit": "ns",
            "range": "± 260612.08471078306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6589894.5,
            "unit": "ns",
            "range": "± 164039.42288550243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3730649.084269663,
            "unit": "ns",
            "range": "± 503914.2279455856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3677096.536082474,
            "unit": "ns",
            "range": "± 285672.8325386352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653117.035294117,
            "unit": "ns",
            "range": "± 250078.30813083745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4780098.308510638,
            "unit": "ns",
            "range": "± 304205.96161158226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9853620.387755102,
            "unit": "ns",
            "range": "± 809764.350832037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6768263.567325368,
            "unit": "ns",
            "range": "± 132986.18597953883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046140.17265625,
            "unit": "ns",
            "range": "± 45595.58403210456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294653.5321614584,
            "unit": "ns",
            "range": "± 14923.057697740056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2889201.005703125,
            "unit": "ns",
            "range": "± 115723.67151984085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855113.6146484375,
            "unit": "ns",
            "range": "± 11272.82884499336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722808.2783203125,
            "unit": "ns",
            "range": "± 4189.484710417699"
          }
        ]
      }
    ]
  }
}